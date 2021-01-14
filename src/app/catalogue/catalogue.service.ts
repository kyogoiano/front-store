import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  private apiUrl : string;

  constructor(
    private http: HttpClient
  ) {
    console.log(environment);
    this.apiUrl = URL = ( <any> environment).apiBase || "";
  }

  addToCart(product) {
    this.items.push(product);
  }

  list() : Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl + '/');
  }

  get(title) : Observable<Product> {
    if(!title || title === "new") {
      return from([
        <Product>{
          title: null,
          name: "",
          tags: [],
          photoUrls: [],
          category: {
            id: null,
            name: ""
          },
          status: "AVAILABLE"
        }]
      )
    }
    return this.http.get<Product>(this.apiUrl + '/title/' + title);
  }

  create(product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl + '/', product, this.getHeader());
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }

  private getHeader(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return { headers: headers };
  }
  
}