import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ICategory } from 'src/app/shared/icategory';
import { OrderDetailsComponent } from '../order-details/order-details.component';


@Component({
  selector: 'app-order-master',
  templateUrl: './order-master.component.html',
  styleUrls: ['./order-master.component.css'],
})
export class OrderMasterComponent implements OnInit, AfterViewInit {
  categoryList: ICategory[] = [];
  catID: number = 1;
  totalPrice: number = 0;
  @ViewChild('vch') 'vch': ElementRef;
  
  constructor() {
    this.categoryList = [
      { Name: 'All Category', ID: 1 },
      { Name: 'labTops', ID: 10 },
      { Name: 'Tablets', ID: 20 },
      { Name: 'Phones', ID: 30 },
    ];
  }
  ngAfterViewInit(): void {
    this.vch.nativeElement.style.color = 'blue';
  }

  ngOnInit(): void {}
  changedPrice(price: number) {
    this.totalPrice = +price;
  }
}
