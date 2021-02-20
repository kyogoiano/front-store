import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/Product';
@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CartService {
  items = Array<Product>()

  private apiUrl : string;

  constructor(
    private http: HttpClient
  ) {
    console.log(environment);
    this.apiUrl = URL = ( <any> environment).apiBase || "";
  }

  addToCart(product: Product) {
    this.items.push(product);
  }

  list() : Promise<Product[]>{
    return this.http.get<Product[]>(this.apiUrl + '/').toPromise();
  }

  get(title: String) : Observable<Product> {
    return this.http.get<Product>(this.apiUrl + '/title/' + title);
  }

  create(product: Product) : Observable<Product> {
    return this.http.post<Product>(this.apiUrl + '/', product, this.getHeader());
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  private getHeader(){
    let headers = new HttpHeaders({ 'Content-Type': 'application/json'});
    return { headers: headers };
  }
  
}