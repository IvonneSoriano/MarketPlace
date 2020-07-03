import { Injectable } from "@angular/core";


@Injectable()
export class Ticket {

    public products: {
        "quantity": number,
        "menuDetailId": number
    }[] = [];
    public restuarantId: number = null;
    public productsDetail:{
        "quantity": number,
        "menuDetailId": number,
        "name":string,
        "price":number
    }[] = [];
}