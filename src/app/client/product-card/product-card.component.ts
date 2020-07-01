import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  constructor() { }
  public result = { 
    "shopId":1,
    "menuId":40,
    "name":"menu del lunes",
    "active":1,
    "period":1,
    "date":"",
    "menuDetails":[
      {
        productName:"pupusa de frijol",
        unitaryPrice:0.25,
        productCategory:""
      },
      {
        productName:"pupusa de queso",
        unitaryPrice:0.35,
        productCategory:""
      }
    
    ],
    "promotions":[
      {
        name:"promoción rikisima",
        "price":4.5,
        promotionDetails:[
          {
            "nameProduct":"Pupusa de frijol con queso",
            "quantity":10
          },
          {
            "nameProduct":"Coca cola 1L",
            "quantity":1
          }
        ]	
      }
    
    ]
    };    
  public cantProducto = 1;
  ngOnInit(): void {
  }
  //Metodo para sumar Cantidad de producto
  plussProduct(){
    this.cantProducto++;
  }
  //Metodo para sumar Cantidad de producto
  lessProduct(){
    if(this.cantProducto >1){
      this.cantProducto--;
    }
    
  }
}
