import { ProductInterface } from './../../model/product.interface';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  //ATRIBUTOS
  //Este es el resultado
  @ViewChild('modalProduct') modal: any;
  public cantProducto = 1;
  public menus: [];
  public haveMenu: boolean = false;
  public promotions: [];
  public selectedMenu: ProductInterface;
  public selectedPromo;
  public restaurantId;
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute) {
    route.params.subscribe(params => {
      this.restaurantId = params.restaurant;
    });
  }

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu() {
    console.log(`Este es el ide de restaurante ${this.restaurantId}`);
    this.restaurantService.getDailyMenu(this.restaurantId).subscribe(result => {
      this.haveMenu = true;
      let idMenu: number = result["data"]["id"];
      console.log(`Este es el id de menu ${idMenu}`);
      this.getPromotions(idMenu);
      this.getMenuDetail(idMenu);
    },
      error => {
        console.log(error);
      });
  }

  getPromotions(menuId: number) {
    this.restaurantService.getPromotions(menuId)
      .subscribe(data => {
        console.log(data["data"]);
        this.promotions = data["data"];
      },
        error => {
          alert("Hay error");
          console.log(error);
        })
  }

  getMenuDetail(menuId: number) {
    this.restaurantService.getMenuDetail(menuId).subscribe(data => {
      console.log(data["data"]);
      this.menus = data["data"];
    },
      err => {
        alert("Hay un error");
        console.log(err);
      });
  }

  preSelectMenu(menu) {
    this.selectedMenu = Object.assign({}, menu);
    console.log(this.selectedMenu);
  }
  preSelectPromo(promo) {
    this.selectedPromo = Object.assign({}, promo);
    console.log(this.selectedPromo);
  }
  unselectMenu() {
    this.selectedMenu = null;
    this.selectedPromo = null;
  }
}
