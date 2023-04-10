import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartDataset, ChartOptions, ChartType } from 'chart.js';
import { APIServiceService } from 'src/app/Service/apiservice.service';
import {BaseChartDirective}  from 'ng2-charts'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-graf',
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent implements OnInit  {
 
  day: number = 30;
  id: string = '';
 
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: '',
        backgroundColor: 'rgba(148,159,177,0.2)',
        borderColor: '#009688',
        pointBackgroundColor: '#009688',
        pointBorderColor: '#009688',
        pointHoverBackgroundColor: '#009688',
        pointHoverBorderColor: '#009688',
      }
    ],
    labels: []
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },
    plugins: {
      legend: { display: true },
    }
  };
  
  public lineChartType: ChartType = 'line';
  
  @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

  constructor(private api:APIServiceService, private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.getGrafData();
  }
   
  getGrafData(){
    this.api.grafData(this.id, this.day).subscribe(res => {
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);
      
      console.log(res);

      this.lineChartData.datasets[0].data = res.prices.map((a:any) => {
        return a[1];
      });

      this.lineChartData.datasets[0].label = this.id;

      this.lineChartData.labels = res.prices.map((a:any) => {
        let date = new Date(a[0]);
        let time = date.getHours() > 12 ? `${date.getHours() - 12}: ${date.getMinutes()} PM` :
        `${date.getHours()}: ${date.getMinutes()} AM`
        return this.day === 1 ? time : date.toLocaleDateString();
      });
    });
  }
}
