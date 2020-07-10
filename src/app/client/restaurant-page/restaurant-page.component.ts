import { ProductInterface } from './../../model/product.interface';
import { RestaurantService } from './../../services/restaurant.service';
import { TicketService } from './../../services/ticket.service';
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
  public haveMenu = null;
  public promotions: [];
  public selectedMenu: ProductInterface;
  public selectedPromo;
  public restaurantId;
  public totalPrice = 0;
  public restaurant;
  public imageRestaurant;
  constructor(private restaurantService: RestaurantService, private route: ActivatedRoute, private ticketService: TicketService) {
    route.params.subscribe(params => {
      this.restaurantId = params.restaurant;
    });
  }

  ngOnInit(): void {
    this.getRestaurant();
    this.getMenu();
  }

  getRestaurant(){
    this.restaurantService.getRestaurant(this.restaurantId).subscribe(data => {
      this.restaurant = data.data;

    },
    err => {
      this.restaurant = {
        name: "Restaurante",
        imagePath: "assets/images/wood.jpg"
      }

    }).add(() =>{
      this.setBackgorundImage()
    })

  }

  setBackgorundImage(){
    this.imageRestaurant = this.restaurant['imagePath'];
  }

  getMenu() {
    console.log(`Este es el ide de restaurante ${this.restaurantId}`);
    this.restaurantService.getDailyMenu(this.restaurantId).subscribe(result => {
      this.haveMenu = result["data"]["id"];
      console.log(`Este es el id de menu ${this.haveMenu}`);
      this.getPromotions(this.haveMenu);
      this.getMenuDetail(this.haveMenu);
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

  realizarPedido(){
    let rp = confirm("¿Está seguro de realizar la compra?")

    if(rp){
      alert("Gracias por realizar su compra en nuestra app" + "\n" +"Su pedido llegará pronto")
      this.ticketService.clearProductList();
      window.location.reload();
    }
  }
}
