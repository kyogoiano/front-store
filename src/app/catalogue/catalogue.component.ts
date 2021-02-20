import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core'; 
import { Product } from '../model/Product';
import { CartService } from './catalogue.service';
@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  public products: Product[] = [];

  constructor(  
    private cartService: CartService
  ){

  }

  ngOnInit(): void {
    this.getAllProducts()
  }


  async getAllProducts(){
    await this.cartService.list().then(
      data => {
        this.products = data
      }
    )
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

}
