import { ProductInterface } from './../model/product.interface';
import { Ticket } from './../model/ticket';
import { Injectable } from '@angular/core';
import { iif } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private ticket: Ticket) { }

  //Metodo principal para añadir los productos a la lista
  addProductToList(shopId: number,productId: number, cant: number, name:string, price: number) {
    //Si hay un restaurante elegido
    if (this.ticket.restaurantId) {
      //Si el id que manda es igual al restaurante escogido
      if (this.ticket.restaurantId == shopId) {
        this.addProduct(productId, cant,name, price);
      }
      //sino, se vuelve a hacer el proceso
      else {
        if(confirm("Tiene una orden abierta con otro Restaurante, ¿desea cancelarla?")){
          this.ticket.restaurantId = null;
          this.ticket.products = [];
          this.addProductToList(shopId, productId, cant,name, price);
        }
      }
    }
    //Sino, se elige
    else {
      this.ticket.restaurantId = shopId;
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
    this.setSessionData();
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
   this.setSessionData();
  }
 // Getters de todo lo que esta
  getRestaurantId(){
    this.ticket.restaurantId = JSON.parse(localStorage.getItem("restaurantId"));
  }
  getProducts(){
    this.ticket.products = JSON.parse(localStorage.getItem("products"));
  }
  getProductsDetail(){
    this.ticket.productsDetail = JSON.parse(localStorage.getItem("productsDetail"));
  }

  //Setters de todo
  setRestaurantId(){
    localStorage.setItem("restaurantId", JSON.stringify(this.ticket.restaurantId));
  }
  setProducts(){
    localStorage.setItem("products", JSON.stringify(this.ticket.products));
  }
  setProductsDetail(){
    localStorage.setItem("productsDetail", JSON.stringify(this.ticket.productsDetail));
  }

  getSessionData(){
    if(localStorage.getItem("restaurantId")){
     this.getRestaurantId();
     this.getProducts();
     this.getProductsDetail();
      console.log("Si hay cosas");
      console.log(`Los produtcos son: ${this.ticket.products}`);
      console.log(`El restaurante es: ${this.ticket.restaurantId}`);
    }
    else{
      console.log("Aun no hay productos");
    }
  }

  setSessionData(){
     this.setRestaurantId();
     this.setProducts();
     this.setProductsDetail();
    console.log(`Los produtcos son: ${this.ticket.products}`);
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
    this.getSessionData();
    return this.ticket.productsDetail;
  }
}
