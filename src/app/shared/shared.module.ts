import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SearchingBarComponent } from './searching-bar/searching-bar.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { PromoComponent } from './promo/promo.component';



@NgModule({
  declarations: [NavComponent, SearchingBarComponent, RestaurantCardComponent, ProductComponent, FooterComponent, PromoComponent],
  imports: [
    CommonModule
  ],
  exports:[NavComponent, SearchingBarComponent, RestaurantCardComponent, ProductComponent, FooterComponent, PromoComponent]
})
export class SharedModule { }
