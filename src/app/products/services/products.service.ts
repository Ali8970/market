import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>('https://fakestoreapi.com/' + 'products');
  }
  getAllCategories(){
    return this.http.get<Product[]>('https://fakestoreapi.com/' + 'products/categories');
  }
  getProductsByCategory(value: string){
    return this.http.get<Product>('https://fakestoreapi.com/' + 'products/category/'+value);
  }
  getSingleProduct(id: number){
    return this.http.get<Product>('https://fakestoreapi.com/' +'products/'+ id);
  }
}
