import { ProductInterface } from './../../model/product.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() price: number;
  @Input() id: number;
  @Input() name: string;
  @Input() image: string;
  ngOnInit(): void {

  }

}
