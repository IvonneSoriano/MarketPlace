import { Component, OnInit, Input } from '@angular/core';
import { PromotionInterface } from '../../model/promotion.interface';

@Component({
  selector: 'app-promo-card',
  templateUrl: './promo-card.component.html',
  styleUrls: ['./promo-card.component.scss']
})
export class PromoCardComponent implements OnInit {
  @Input() name: string;
  @Input() id: number;
  @Input() price: number;
  public description: string;

  public cantProducto = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  //Metodo para sumar Cantidad de producto
  plussProduct(){
    this.cantProducto++;
  }
  //Metodo para sumar Cantidad de producto
  lessProduct(){
    if(this.cantProducto >1){
      this.cantProducto--;
    }
    
  }

}
