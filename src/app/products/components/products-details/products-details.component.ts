import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit {
  id: number;
  product: any = {};
  loading: boolean = false;
  constructor(private route: ActivatedRoute,private productsService: ProductsService) {
    this.id = +this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }
  ngOnInit(): void {
    this.getProductById();
  }
  getProductById(){
    this.loading = true;
    this.productsService.getSingleProduct(this.id).subscribe(product=>{
      this.product = product;
      this.loading = false;
    })
  }
}
