import { ProductInterface } from './../model/product.interface';
import { Ticket } from './../model/ticket';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private ticket: Ticket) { }

  addProductToList(shopId: number,productId: number, cant: number, name:string, price: number) {
    if (this.ticket.restuarantId) {
      if (this.ticket.restuarantId == shopId) {
        this.addProduct(productId, cant,name, price);
      }
      else {
        if(confirm("Tiene una orden abierta con otro Restaurante, ¿desea cancelarla?")){
          this.ticket.restuarantId = null;
          this.ticket.products = [];
          this.addProductToList(shopId, productId, cant,name, price);
        }
      }
    }
    else {
      this.ticket.restuarantId = shopId;
      this.addProduct(productId, cant,name, price);
    }
  }
  addProduct(productId: number, cant: number, name:string, price: number) {
    let prod = {
      "quantity": cant,
      "menuDetailId": productId
    };
    let prodDetail = {
      "quantity": cant,
      "menuDetailId": productId,
      "name" : name,
      "price": price
    };
    this.ticket.products.push(prod);
    this.ticket.productsDetail.push(prodDetail);
  }
  changeQuantity(productId:number, cant:number){
    this.ticket.products.forEach(prod => {
      if(prod.menuDetailId == productId){
        prod.quantity = cant;
      }
    });
    this.ticket.productsDetail.forEach(prod => {
      if(prod.menuDetailId == productId){
        prod.quantity = cant;
      }
    });
  }
  getSessionData(){
    if(localStorage.getItem("productsDetail")){
      this.ticket.productsDetail = JSON.parse(localStorage.getItem("productsDetail"));
      this.ticket.products = JSON.parse(localStorage.getItem("products"));
    }
  }

  removeProduct(productId:number){
    const index:number = this.ticket.products.findIndex(prod => prod.menuDetailId == productId);
    console.log(index);
    console.log(this.ticket.products.length);
    this.ticket.products.splice(index, 1);
    this.ticket.productsDetail.splice(index, 1);
    return true;
  }

  getProductsList(){
    return this.ticket.productsDetail;
  }
}
