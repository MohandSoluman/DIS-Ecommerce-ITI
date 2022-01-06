import { Component, OnInit } from '@angular/core';
import { DiscountOffers } from 'src/app/shared/discount-offers';
import { ICategory } from 'src/app/shared/icategory';
import { IProduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurchased: boolean;
  buyingDate = new Date();

  constructor() {
    this.storeLogo = './assets/images/l2.jpg';
    this.storeName = 'DIS.Shope';
    this.clientName = 'Mohand';
    this.productList = [
      {
        ID: 1,
        Name: 'Lenovo v102',
        Quantity: 50,
        price: 19199,
        CategoryID: 10,
        img: './assets/images/products/l1.jpg',
      },
      {
        ID: 2,
        Name: 'Hp pro102',
        Quantity: 150,
        price: 20000,
        CategoryID: 10,
        img: './assets/images/products/l2.jpg',
      },
      {
        ID: 3,
        Name: 'Dell xp606',
        Quantity: 70,
        price: 19199,
        CategoryID: 10,
        img: './assets/images/products/l3.jpg',
      },
      {
        ID: 4,
        Name: 'samsung fc3',
        Quantity: 50,
        price: 18000,
        CategoryID: 10,
        img: './assets/images/products/l4.jpg',
      },
      {
        ID: 5,
        Name: 'ipad-pro',
        Quantity: 900,
        price: 25000,
        CategoryID: 20,
        img: './assets/images/products/t1.jpg',
      },
      {
        ID: 6,
        Name: 'Huawei',
        Quantity: 50,
        price: 14000,
        CategoryID: 20,
        img: './assets/images/products/t2.jpg',
      },
      {
        ID: 7,
        Name: 'Ipad mini',
        Quantity: 50,
        price: 9000,
        CategoryID: 20,
        img: './assets/images/products/t3.jpg',
      },
      {
        ID: 8,
        Name: 'reddit-4',
        Quantity: 100,
        price: 7500,
        CategoryID: 30,
        img: './assets/images/products/t4.jpg',
      },
      {
        ID: 9,
        Name: 'Iphone-10',
        Quantity: 100,
        price: 15000,
        CategoryID: 30,
        img: './assets/images/products/m1.jpg',
      },
      {
        ID: 10,
        Name: 'galaxy',
        Quantity: 100,
        price: 1200,
        CategoryID: 30,
        img: './assets/images/products/m2.jpg',
      },
      {
        ID: 11,
        Name: 'swami',
        Quantity: 100,
        price: 15000,
        CategoryID: 30,
        img: './assets/images/products/m3.jpg',
      },
      {
        ID: 12,
        Name: 'Nokia',
        Quantity: 100,
        price: 15000,
        CategoryID: 30,
        img: './assets/images/products/m4.jpg',
      },
    ];
    this.categoryList = [
      { Name: 'All Category', ID: 1 },
      { Name: 'labTops', ID: 10 },
      { Name: 'Tablets', ID: 20 },
      { Name: 'Phones', ID: 30 },
    ];
    this.discount = DiscountOffers['15%'];
    this.isPurchased = false;
  }
  buy(): void {
    this.isPurchased = !this.isPurchased;
    console.log(this.isPurchased);
  }
  ngOnInit(): void {}
}
