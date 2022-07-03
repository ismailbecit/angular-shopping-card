import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = []
  name = ""
  updateFilter(event: any) {
    console.log("geldiii", event)
    this.products = event
  }
  ngOnInit() {
    this.http.get("https://dummyjson.com/products").subscribe((res: any) => {
      this.products = res.products
    })
  }

  constructor(private http: HttpClient) {

  }

}
