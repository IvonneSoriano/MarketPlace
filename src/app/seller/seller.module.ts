import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerRoutingModule } from './seller-routing.module';
import { SellerComponent } from './seller.component';
import { CreateshopComponent } from './createshop/createshop.component';
import { NavsellerComponent } from './navseller/navseller.component';
import { ShopComponent } from './shop/shop.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [SellerComponent, CreateshopComponent, NavsellerComponent, ShopComponent],
  imports: [
    CommonModule,
    SellerRoutingModule,
    FormsModule
  ]
})
export class SellerModule { }
