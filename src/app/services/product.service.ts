import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class productService {

  url = 'http://localhost:4000/api/products/';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.url);
  }

  deleteProduct(id:string): Observable<any> {
    return this.http.delete(this.url + id);
  }

  saveProduct(product: Product): Observable<any> {
    return this.http.post(this.url, product);
  }

  editProduct(id: string, product: Product): Observable<any> {
    return this.http.put(this.url + id, product);
  }
}
