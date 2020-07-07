import { Component, OnInit } from '@angular/core';
import { TicketService } from './../../services/ticket.service';
import { TransporterService } from './../../services/transporter.service';

@Component({
  selector: 'app-buy-card',
  templateUrl: './buy-card.component.html',
  styleUrls: ['./buy-card.component.scss']
})
export class BuyCardComponent implements OnInit {

  public transportPrice:number = 0;
  public transporter: string;
  public transporters:any[] = []
  constructor(private ticketService:TicketService, private transporterService: TransporterService) { }

  ngOnInit(): void {
    this.transporters = this.transporterService.getTransporters();
    this.transportPrice = this.transporters[0]['precio']
    this.transporter = this.transporters[0]['nombre']

  }

  setTransporter(transporterName:string,transportPrice:number){
    this.transporter = transporterName
    this.transportPrice = transportPrice;
  }

  getSubTotalPrice():number{
    return this.ticketService.getTotalPrice();
  }

  getSubTotalTransporte():number{
    return this.transportPrice;
  }
  getTransporter():string{
    return this.transporter;
  }

  getTotal(){
    return  (this.transportPrice + this.getSubTotalPrice()).toFixed(2);
  }

}
