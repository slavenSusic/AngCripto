import { Component, OnInit } from '@angular/core';
import { APIServiceService } from 'src/app/Service/apiservice.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-coindetail',
  templateUrl: './coindetail.component.html',
  styleUrls: ['./coindetail.component.css']
})
export class CoindetailComponent implements OnInit{
coinData!:any
coinId!:string
  constructor(private api:APIServiceService,
    private location: Location,
    private route: ActivatedRoute,
    ) {}

  

   ngOnInit(): void {
      this.route.params.subscribe(val =>{
        this.coinId=val['id']
      })
       this.getCoinDetails()
      }
    getCoinDetails(){
      this.api.detailsData(this.coinId).subscribe(data =>{
        console.log(data)
        this.coinData=data
      })
      }
    }

