import { Component, OnInit } from '@angular/core';
import { ShopService } from './../../services/shop.service'

@Component({
  selector: 'app-createshop',
  templateUrl: './createshop.component.html',
  styleUrls: ['./createshop.component.scss']
})
export class CreateshopComponent implements OnInit {

  file: File = null;
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
  }

  crear(form){
    let shopName = form.value.nombre
    this.shopService.uploadImage(shopName,this.file).subscribe(data => {
      this.shopService.createShop(data).subscribe( data =>{
        console.log(data);
      })
    })

  }

  capturarFile(event){
    this.file = <File> event.target.files[0]

  }

}
