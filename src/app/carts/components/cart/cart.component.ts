import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor() { }
  cartProducts: any[] = [];
  total: number = 0;
  shipping: number = 0;
  tax: number = 0;
  ngOnInit(): void {
    this.getCartProducts();
  }
  getCartProducts(){
    if("cart" in localStorage){
      this.cartProducts = JSON.parse(localStorage.getItem("cart"));
    }
    this.getCartTotalPrice();
  }
  getCartTotalPrice(){
    this.total = 0;
    for(let product of this.cartProducts){
      this.total += product.item.price * product.quantity;
    }
    this.total += (this.shipping + this.tax);
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
  }
  deleteProduct(index: number){
    this.cartProducts.splice(index,1);
    localStorage.setItem("cart",JSON.stringify(this.cartProducts));
    this.getCartTotalPrice();
  }

}
