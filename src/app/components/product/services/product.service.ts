import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct, IRootObject } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(
    @Inject("apiUrl") private apiUrl: string,
    private http: HttpClient,
  ) { }


  getProducts(): Observable<IRootObject> {
    return this.http.get<IRootObject>(`${this.apiUrl}/products`)
  }

  getProduct(name: string): Observable<IRootObject> {
    return this.http.get<IRootObject>(`${this.apiUrl}/products/search?q=${name}`)
  }


}
