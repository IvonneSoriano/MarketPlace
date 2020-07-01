import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { PromoCardComponent } from './promo-card/promo-card.component';


@NgModule({
  declarations: [ClientComponent, DashboardComponent, RestaurantPageComponent, TicketComponent, ProductCardComponent, PromoCardComponent],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SharedModule
  ]
})
export class ClientModule { }
