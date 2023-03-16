import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }
  @Input() product: any = {};
  @Output() item = new EventEmitter();
  addbutton: boolean = false;
  amount: number = 0;
  ngOnInit(): void {
  }
  addProduct(){
    this.item.emit({item: this.product,quantity: this.amount});
  }

}
