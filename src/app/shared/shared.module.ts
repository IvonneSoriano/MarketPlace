import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { SearchingBarComponent } from './searching-bar/searching-bar.component';



@NgModule({
  declarations: [NavComponent, SearchingBarComponent],
  imports: [
    CommonModule
  ],
  exports: [NavComponent, SearchingBarComponent]
})
export class SharedModule { }
