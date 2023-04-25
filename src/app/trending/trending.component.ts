import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../Service/apiservice.service';
import {  trendingInt } from 'src/Interface/trendingInterface';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit{
  isShown = false;
  showTrending(){
    this.isShown=!this.isShown
  }
 
  coins: {item:
    {id: string, 
   coin_id: number,
   thumb:string, 
   small:string,
   large:string,
   price_btc:number
   name: string, 
   symbol: string, 
   market_cap_rank: number
       }
       }[] = [];

constructor(private api:APIServiceService){}
  ngOnInit(): void {
    this.getTrending()
   
  }

 getTrending(): void {
 this.api.trendingData().subscribe((item:trendingInt) =>{
  console.log(item)
  this.coins=item.coins
 })
    
  
}


}
