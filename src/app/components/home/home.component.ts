import { Component, OnInit } from '@angular/core';
import { ComponyInfo } from 'src/app/shared/compony-info';
import { IProduct } from 'src/app/shared/iproduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 componyDetails:ComponyInfo ;
 isServiceDisplaced:boolean ;
 mainProducts: IProduct[]=[];
  constructor() {
    this.isServiceDisplaced=true;
    this.componyDetails=new ComponyInfo(
      'DIS Compony','logo',['marketing','sales','e-commerce']
    );
    this.mainProducts = [
      { ID: 1, Name: 'iPhone9', Quantity: 500, price: 10000 },
      { ID: 2, Name: 'iPhone10', Quantity: 20, price: 100 },
      { ID: 3, Name: 'iPhone11', Quantity: 300, price: 100 },
      { ID: 4, Name: 'iPhone12', Quantity: 70, price: 3000 },
      { ID: 5, Name: 'iPhone13', Quantity: 540, price: 18000 },
      { ID: 6, Name: 'iPhone14', Quantity: 90, price: 8000 },
    ];
  }
toggleService(){
  this.isServiceDisplaced=!this.isServiceDisplaced;
}
  ngOnInit(): void {
  }

}
