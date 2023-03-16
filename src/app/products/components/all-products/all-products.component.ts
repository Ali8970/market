import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  constructor(private productsService: ProductsService) { }
  products: any[] = [];
  categories: any[] =[];
  loading:boolean = false;
  cartProducts: any[] = [];
  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
  }

  getProducts(){
    this.loading= true;
    this.productsService.getAllProducts().subscribe((products:any)=>{
      this.products = products;
      this.loading= false;
    }, error=>{
      alert(error)
      this.loading= false;
    })
  }
  getCategories(){
    this.loading= true;
    this.productsService.getAllCategories().subscribe((categories:any)=>{
      this.categories = categories;
      this.loading= false;
    }, error=>{
      alert(error)
      this.loading= false;
    })
  }
  filterCategories(event: any){
    let value = event.target.value;
    if(value==="all"){
      this.getProducts();
    }
    else {
      this.getProductsByCategory(value);
    }
  }
  getProductsByCategory(value: string){
    this.loading= true;
    this.productsService.getProductsByCategory(value).subscribe((products: any)=>{
      this.products = products;
      this.loading= false;
    })
  }
  add(event: any){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart"));
      let exit = this.cartProducts.find(item=> item.item.id == event.item.id);
      if(exit){
        alert("Product is already in your cart")
      }
      else {
        this.cartProducts.push(event);
        localStorage.setItem("cart",JSON.stringify(this.cartProducts));
      }
    }
    else {
      this.cartProducts.push(event);
      localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    }
  }
}
