import { TicketService } from './../../services/ticket.service';
import { ProductInterface } from './../../model/product.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor(private ticketService: TicketService) { }
  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  @Input() menu: number;

  public cantProducto = 1;

  ngOnInit(): void {
  }
  //Metodo para sumar Cantidad de producto
  plussProduct() {
    if (this.cantProducto < 10) {
      this.cantProducto++;
    }
  }
  //Metodo para sumar Cantidad de producto
  lessProduct() {
    if (this.cantProducto > 1) {
      this.cantProducto--;
    }
  }

  addProduct() {
    this.ticketService.addProductToList(this.menu, this.id, this.cantProducto, this.name, this.price);
  }
}
