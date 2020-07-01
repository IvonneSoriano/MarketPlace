import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-page',
  templateUrl: './restaurant-page.component.html',
  styleUrls: ['./restaurant-page.component.scss']
})
export class RestaurantPageComponent implements OnInit {

  //ATRIBUTOS
  //Este es el resultado
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
        unitaryPrice:0.40,
        productCategory:""
      },
      {
        productName:"pupusa de frijol con queso",
        unitaryPrice:0.35,
        productCategory:""
      },
      {
        productName:"pupusa revuelta",
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
      },
      {
        name:"promoción cheros",
        "price":3.5,
        promotionDetails:[
          {
            "nameProduct":"Hot Dogs",
            "quantity":2
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
  public menus =[{

  }];
  constructor() { 
  }

  ngOnInit(): void {
    console.log(this.result["promotions"]);
  }


}
