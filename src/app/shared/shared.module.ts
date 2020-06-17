import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SearchingBarComponent } from './searching-bar/searching-bar.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { ProductComponent } from './product/product.component';



@NgModule({
  declarations: [NavComponent, SearchingBarComponent, RestaurantCardComponent, ProductComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, SearchingBarComponent, RestaurantCardComponent, ProductComponent]
})
export class SharedModule { }
