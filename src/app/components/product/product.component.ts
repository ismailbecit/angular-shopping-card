import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { IProduct, IRootObject } from './models/product';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-contact',
  templateUrl: './product.component.html',
})
export class ProductComponent {
  products!: IProduct[]
  name = ""
  constructor(
    private productService: ProductService
  ) { }
  ngOnInit(): void {
    this.getProducts()
  }
  updateFilter(event: any) {
    this.products = event
  }



  getProducts(): void {
    this.productService.getProducts().subscribe((res: IRootObject) => {
      this.products = res.products
    })
  }
}
