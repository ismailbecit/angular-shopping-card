import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct, IRootObject } from '../../models/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  text = ""
  @Output() newFilterCard: EventEmitter<string> = new EventEmitter<string>()

  constructor(
    private productService: ProductService

  ) {

  }
  getProduct(name: string): void {
    this.productService.getProduct(name).subscribe((res: IRootObject) => {
      this.newFilterCard.emit(res.products as any)
    })
  }
}
