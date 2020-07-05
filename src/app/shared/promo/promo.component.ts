import { Component, OnInit, Input } from '@angular/core';
import { PromotionInterface } from '../../model/promotion.interface';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {

  @Input() promo: PromotionInterface;

  @Input() price: number;
  @Input() id: number;
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {
  }

}
