import { Component, OnInit, ViewChild } from '@angular/core';
import {ChartConfiguration, ChartType} from 'chart.js'
import { APIServiceService } from 'src/app/Service/apiservice.service';
import {BaseChartDirective}  from 'ng2-charts'


@Component({
  selector: 'app-graf',
  templateUrl: './graf.component.html',
  styleUrls: ['./graf.component.css']
})
export class GrafComponent implements OnInit  {

  
  coinId:any
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: `Price Trends`,
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
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective

  constructor(private  apiService:APIServiceService) {}

  ngOnInit(): void {
    // this.coinId=val['id']
      this.getGrafData()
  }
  getGrafData(){
    this.apiService.grafData('bitcoin').subscribe(res =>{
  // this.lineChartData.datasets[0].data =res.prices.map(a:any)=>{
  // return a[1];
  console.log(res)

    })
  }



}
