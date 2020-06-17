import { RestaurantPageComponent } from './restaurant-page/restaurant-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component';

const routes: Routes = [{ path: '', component: ClientComponent, children:[
  { path: '', component: DashboardComponent  },
  { path: ':restaurant', component: RestaurantPageComponent }
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
