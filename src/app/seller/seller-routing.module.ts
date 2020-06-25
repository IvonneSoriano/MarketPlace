import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerComponent } from './seller.component';
import { CreateshopComponent } from './createshop/createshop.component'
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [{ path: '', component: SellerComponent },
                        {path:'createshop', component: CreateshopComponent },
                      {path:'shop', component: ShopComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule { }
