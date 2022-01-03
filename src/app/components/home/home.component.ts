import { Component, OnInit } from '@angular/core';
import { ComponyInfo } from 'src/app/shared/compony-info';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 componyDetails:ComponyInfo | undefined;
 isServiceDisplaced:boolean | undefined;
  constructor() {
    this.isServiceDisplaced=true;
    this.componyDetails=new ComponyInfo(
      'DIS Compony','logo',['marketing','sales','e-commerce']
    )
  }
toggleService(){
  this.isServiceDisplaced=!this.isServiceDisplaced;
}
  ngOnInit(): void {
  }

}
