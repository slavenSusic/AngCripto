import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { APIServiceService } from '../Service/apiservice.service';
import { ChartConfiguration, ChartDataset, ChartOptions, ChartType } from 'chart.js';

import { BaseChartDirective } from 'ng2-charts'
import { ListClass } from 'src/Interface/listClass.model';
import { CryptoList } from 'src/Interface/CriptoInterface.model';

@Component({
  selector: 'app-graphmini',
  templateUrl: './graphmini.component.html',
  styleUrls: ['./graphmini.component.css']
})
export class GraphminiComponent implements OnInit, OnChanges {

  constructor(private api: APIServiceService) { }

  data: any
  day = 7
  @Input()
  listData!: CryptoList[];
  id!: string;

  ngOnInit(): void {
    this.getGrafData()
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['listData'] && changes['listData'].currentValue) {
      this.id = changes['listData'].currentValue.id;
      this.getGrafData();
    }
  }

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
      legend: { display: false },
    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) myLineChart!: BaseChartDirective;

  getGrafData(): void {
    this.api.miniGrafData(this.id).subscribe(res => {
      setTimeout(() => {
        this.myLineChart.chart?.update();
      }, 200);

      this.lineChartData.datasets[0].data = res.prices.map((a: string) => {
        return a[1];
      });

       this.lineChartData.datasets[0].label = this.id;

      this.lineChartData.labels = res.prices.map((a: string) => {
        let date = new Date(a[0]);
        let time = date.getHours() > 12 ? `${date.getHours() - 12}: ${date.getMinutes()} PM` :
          `${date.getHours()}: ${date.getMinutes()} AM`
        return this.day === 1 ? time : date.toLocaleDateString();
      });
    });
  }
}
