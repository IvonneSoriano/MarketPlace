import { NotFoundComponent } from './not-found/not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticateGuard } from './guards/authenticate.guard'
import { not } from '@angular/compiler/src/output/output_ast';


const routes: Routes = [
  {
    path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule)
  },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule), canActivate: [AuthenticateGuard] },
  { path: 'seller', loadChildren: () => import('./seller/seller.module').then(m => m.SellerModule), canActivate: [AuthenticateGuard] },
  { path: 'transporter', loadChildren: () => import('./transporter/transporter.module').then(m => m.TransporterModule), canActivate: [AuthenticateGuard] },
  { path: '', redirectTo:'client', pathMatch:'full'},
  { path: 'notFound', component: NotFoundComponent},
  { path: '**', redirectTo:'notFound'}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
