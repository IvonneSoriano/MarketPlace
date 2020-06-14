import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransporterComponent } from './transporter.component';

const routes: Routes = [{ path: '', component: TransporterComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransporterRoutingModule { }
