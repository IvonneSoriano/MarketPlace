import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public pedido;
  constructor(private ticketService: TicketService) { }

  ngOnInit(): void {
    this.showProductList();
  }

  showProductList() {
    this.pedido = this.ticketService.getProductsList();
    console.log(this.pedido);
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

}
