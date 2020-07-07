import { TicketService } from './../../services/ticket.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public pedido;
  public totalPrice:number = 0;
  public subs: Subscription;
  constructor(private ticketService: TicketService) {
    this.subs = this.ticketService.addProductObs().subscribe(data =>{
      this.showProductList();
    })
  }

  ngOnInit(): void {
    this.showProductList();
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  showProductList() {
    this.pedido = this.ticketService.getProductsList();
    this.totalPriceCalculate()
  }

  lessProduct(id:number, cant:number){
    if(cant>1){
    cant--;
    this.editProduct(id,cant);
    this.showProductList();
  }
  }

  plussProduct(id:number, cant:number){
    if(cant<10){
    cant++;
    this.editProduct(id,cant);
    this.showProductList();
  }
  }

  editProduct(id:number, cant:number){
    this.ticketService.changeQuantity(id,cant);
  }

  removeProduct(id:number){
    this.ticketService.removeProduct(id);
    this.showProductList();
  }

  totalPriceCalculate(){
    this.totalPrice = 0
    this.pedido.forEach(prod => {
      this.totalPrice = this.totalPrice + (prod["price"] * prod["quantity"]);
    });
  }

  enableBuyButton(): boolean{
    return !(this.totalPrice > 0);
  }

  setTotalPrice(){
    this.ticketService.setTotalPrice(this.totalPrice);
  }

}
