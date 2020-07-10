import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public restaurants;
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getRestaurants();
  }
  getRestaurants(){
  this.restaurantService.getAllRestaurants()
  .subscribe(result => {
    console.log(result['data']);
    this.restaurants=result['data'];
    this.restaurants.splice(0,1)
  })
  }
}
