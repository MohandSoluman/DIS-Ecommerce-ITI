import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ICart } from 'src/app/shared/icart';


import { IProduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css'],
})
export class OrderDetailsComponent implements OnInit, OnChanges {
  @Input()
  selectedID: number = 1;
  @Output() updatedPrice: EventEmitter<number> = new EventEmitter<number>();
  productList: IProduct[] = [];
  filterResult: IProduct[] = [];
  userCart: ICart[] = [];
  priceArray:number[]=[];
  totalPrice: number = 0;
  constructor() {
    this.productList = [
      {
        ID: 1,
        Name: 'Lenovo v102',
        Quantity: 50,
        price: 19199,
        CategoryID: 10,
      },
      {
        ID: 2,
        Name: 'Hp pro102',
        Quantity: 150,
        price: 20000,
        CategoryID: 10,
      },
      {
        ID: 3,
        Name: 'Dell xp606',
        Quantity: 70,
        price: 19199,
        CategoryID: 10,
      },
      {
        ID: 4,
        Name: 'samsung fc3',
        Quantity: 50,
        price: 18000,
        CategoryID: 10,
      },
      {
        ID: 5,
        Name: 'ipad-pro',
        Quantity: 900,
        price: 25000,
        CategoryID: 20,
      },
      {
        ID: 6,
        Name: 'Huawei',
        Quantity: 50,
        price: 14000,
        CategoryID: 20,
      },
      {
        ID: 7,
        Name: 'Ipad mini',
        Quantity: 50,
        price: 9000,
        CategoryID: 20,
      },
      {
        ID: 8,
        Name: 'reddit-4',
        Quantity: 100,
        price: 7500,
        CategoryID: 30,
      },
      {
        ID: 9,
        Name: 'Iphone-10',
        Quantity: 100,
        price: 15000,
        CategoryID: 30,
      },
      {
        ID: 10,
        Name: 'galaxy',
        Quantity: 100,
        price: 1200,
        CategoryID: 30,
      },
      {
        ID: 11,
        Name: 'swami',
        Quantity: 100,
        price: 15000,
        CategoryID: 30,
      },
    ];
  }

  filteredProducts(): IProduct[] {
    if (this.selectedID == 1) {
      return this.productList;
    }
    return this.productList.filter((p) => p.CategoryID == this.selectedID);
  }

  ngOnChanges(): void {
    this.filterResult = this.filteredProducts();
  }

  ngOnInit(): void {
    this.filterResult = this.productList;
  }
  upDatePrice(price: number, quantity: number, id: number) {
  this.userCart.push({ ID: id, quantity: quantity, price: price });


    // this.updatedPrice.emit(this.totalPrice);
    // this.calcTotalPrice(this.userCart,id);
  }
  calcTotalPrice(userCart:ICart[],id:number):void{
 
    let total = this.userCart.reduce(function (acc, c) {
      return acc + c.quantity * c.price;
    }, 0);
  }

}
