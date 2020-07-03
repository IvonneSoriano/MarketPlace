import { TicketService } from './../../services/ticket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public pedido;
  constructor( private ticketService: TicketService) { 
    this.showProductList();
  }
  ngOnInit(): void {
    this.showProductList();
  }
  
showProductList(){
  this.pedido = this.ticketService.getProductsList();
  console.log(this.pedido);
}

}
