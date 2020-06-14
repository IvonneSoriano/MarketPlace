import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransporterRoutingModule } from './transporter-routing.module';
import { TransporterComponent } from './transporter.component';


@NgModule({
  declarations: [TransporterComponent],
  imports: [
    CommonModule,
    TransporterRoutingModule
  ]
})
export class TransporterModule { }
