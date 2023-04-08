import { Injectable } from '@angular/core';
import { CryptoList } from 'src/Interface/CriptoInterface.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http:HttpClient) { }

  listData(){
    return this.http.get<CryptoList[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false`)
  }

  grafData(coinId:any ){
    return this.http.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=7}`)
  }
}
