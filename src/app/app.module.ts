import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { MatCardModule } from '@angular/material/card';
import { SearchComponent } from './components/product/view/search/search.component';
import { CardComponent } from './components/product/view/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductComponent,
    SearchComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: "apiUrl",
      useValue: "https://dummyjson.com"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
