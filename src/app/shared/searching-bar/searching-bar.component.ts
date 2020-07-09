import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searching-bar',
  templateUrl: './searching-bar.component.html',
  styleUrls: ['./searching-bar.component.scss']
})
export class SearchingBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  findShop(e){
    console.log(e.target.value)
  }

}
