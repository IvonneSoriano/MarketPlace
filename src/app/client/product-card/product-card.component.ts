import { ProductInterface } from './../../model/product.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  @Input() id: number;
  @Input() name: string;
  @Input() price: number;
  public total: number = 0;
  public cantProducto = 1;

  ngOnInit(): void {
    this.total = this.price;
  }
  //Metodo para sumar Cantidad de producto
  plussProduct() {
    if (this.cantProducto <= 10) {
      this.cantProducto++;
      this.total = this.price * this.cantProducto;
    }
  }
  //Metodo para sumar Cantidad de producto
  lessProduct() {
    if (this.cantProducto > 1) {
      this.cantProducto--;
      this.total = this.price * this.cantProducto;
    }

  }
}
