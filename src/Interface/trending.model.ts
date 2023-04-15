
 import { trendingInt } from "./trendingInterface"
 export class TrendingClass implements trendingInt{
    coins: {item:
        {id: string, 
            price_btc:number,
            small:string,
       coin_id: number,
       thumb:string, 
       name: string, 
       symbol: string, 
       market_cap_rank: number
           }
           }[]
      
    constructor(data: trendingInt) {
        this.coins=data.coins
        // this.id=data.coins.item.id
        // this.coin_id=data.coins.
        // this.large=data.large 
        // this.name=data.name 
        // this.symbol=data.symbol 
        // this.market_cap_rank=data.market_cap_rank      
    }

}


