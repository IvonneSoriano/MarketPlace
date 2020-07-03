import { Ticket } from './../model/ticket';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private ticket: Ticket) { }

  addProductToList(shopId: number,productId: number, cant: number) {
    if (this.ticket.restuarantId) {
      if (this.ticket.restuarantId == shopId) {
        this.addProduct(productId, cant);
      }
      else {

      }
    }
    else {
      this.ticket.restuarantId = shopId;
      this.addProduct(productId, cant);
    }
  }
  addProduct(productId: number, cant: number) {
    let prod = {
      "quantity": cant,
      "menuDetailId": productId
    };
    this.ticket.products.push(prod);
  }
}
