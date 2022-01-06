import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layoutcomponents/footer/footer.component';
import { HeaderComponent } from './components/layoutcomponents/header/header.component';
import { ContentComponent } from './components/layoutcomponents/content/content.component';
import { HomeComponent } from './components/home/home.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';
import { USDtoEgyPipe } from './pipes/usdto-egy.pipe';
import { OrderMasterComponent } from './components/Order/order-master/order-master.component';
import { OrderDetailsComponent } from './components/Order/order-details/order-details.component';
import { ProductsComponent } from './components/products/products.component';
import { DefaultImgUrlPipe } from './pipes/default-img-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    HighlightDirective,
    USDtoEgyPipe,
    OrderMasterComponent,
    OrderDetailsComponent,
    ProductsComponent,
    DefaultImgUrlPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
