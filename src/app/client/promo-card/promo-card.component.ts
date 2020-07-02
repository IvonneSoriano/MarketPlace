import { RestaurantService } from './../../services/restaurant.service';
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
  public description: { name: string, cant: number }[] = [];

  public cantProducto = 1;
  
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getDescription();
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

  getDescription(){
this.restaurantService.getPromotionDetail(this.id)
.subscribe(data => {
  
  data["data"].forEach(d => {
    let especification = {
      "name": d['name'], 
      "cant": d['quantity']};
    this.description.push(especification);
  }
    )
    ;
},
error =>{
  // alert("Hay errores");
  console.log(error);
})
  }
}
