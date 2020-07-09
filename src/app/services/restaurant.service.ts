import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  urlMenu = environment.restaurant + "/menu";
  urlPromotion = environment.restaurant + "/promotion";
  urlRestaurants = environment.restaurant + "/shop/findmany";
  urlRestaurant = environment.restaurant + "/shop/find/"


  constructor(private http: HttpClient, private userService: UserService) { }

  getAllRestaurants(){
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userService.getAccessToken()
    });
    return this.http.post(this.urlRestaurants, { headers });
  }



  getRestaurant(restaurantId:number): any{
    let url = this.urlRestaurant+restaurantId;
    return this.http.get(url);
  }

  getDailyMenu(shopId: number) {
    let url = this.urlMenu + `/find/${shopId}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userService.getAccessToken()
    });
    return this.http.get(url, { headers });


  }

  getMenuDetail(menuId: number): Observable<any> {
    let url = this.urlMenu + `/details/${menuId}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userService.getAccessToken()
    });
    return this.http.get<any>(url, { headers });
  }

  getPromotions(menuId: number): Observable<any> {
    let url = this.urlPromotion + `/findmany/${menuId}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userService.getAccessToken()
    });
    return this.http.get<any>(url, { headers });
  }

  getPromotionDetail(promoId:number): Observable<any> {
    let url = this.urlPromotion + `/find/${promoId}`;
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.userService.getAccessToken()
    });
    return this.http.get<any>(url, { headers });
  }

}
