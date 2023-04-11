import { CryptoList } from "./CriptoInterface.model";

export class ListClass  implements CryptoList {
    current_price: number;
    id: string;
    image: string;
    market_cap:number;
    name: string;
    price_change_24h: number;

    constructor( data: CryptoList) {
        this.current_price=data.current_price;
        this.id=data.id
        this.image=data.image
        this.market_cap=data.market_cap
        this.name=data.name
        this.price_change_24h=data.price_change_24h
    }
}