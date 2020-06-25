import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';



//https://luisvelago.000webhostapp.com/email/imagen/logo.png

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  //createShopUrl = "http://localhost:8080/shop/create"
  createShopUrl = "https://pipeline-inwshop.herokuapp.com/shop/create";
  uploadImageUrl = "https://luisvelago.000webhostapp.com/email/email/subirImagen";
  constructor(private http:HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': this.getToken(),
      'Content-type' : 'application/json'
    })
  };

  getToken(): string{
    let userData = JSON.parse(localStorage.getItem("usuario"));
    return `Bearer ${userData.jwt}`;
  }

  uploadImage(shopName,shopImage:File){

   let fd = new FormData();
   fd.append('name',shopName)
   fd.append('image',shopImage)
   return this.http.post(this.uploadImageUrl,fd)
  }

  createShop(shopData){
    let jsonData = JSON.stringify(shopData);
    console.log(jsonData)
    return this.http.post(this.createShopUrl,jsonData,this.httpOptions);
  }
}
