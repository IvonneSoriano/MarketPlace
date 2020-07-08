import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss']
})
export class RestaurantCardComponent implements OnInit {
  @Input() name;
  @Input() image;
  @Input() id;

  constructor() { 
    this.name="Ejemplo 1";
    this.image="Ejemplo 1";
    this.id = 2;
  }

  ngOnInit(): void {
  }

}
