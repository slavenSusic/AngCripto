import { Injectable } from '@angular/core';
import { CryptoList } from 'src/Interface/CriptoInterface.model';
import { HttpClient } from '@angular/common/http';
import { DetailsInt } from 'src/Interface/DetailsInterface.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http:HttpClient) { }


//api za tablicu
  listData(){
     return this.http.get<CryptoList[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=false`)
    
  }

  //api za graf
  grafData(id: string, day:number ){
    const url=`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${day}`
    return this.http.get<any>(url)
  }

  //api za details
  detailsData(id: string): Observable<DetailsInt> {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    return this.http.get<DetailsInt>(url);
  }
  
}
