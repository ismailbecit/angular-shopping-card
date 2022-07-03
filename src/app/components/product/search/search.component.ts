import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  text = ""
  @Output() newFilterCard: EventEmitter<string> = new EventEmitter<string>()

  constructor(private http: HttpClient) {

  }
  searchProduct = async (data: string) => {
    await this.http.get(`https://dummyjson.com/products/search?q=${data}`).subscribe((res: any) => {
      this.newFilterCard.emit(res.products)
    })

  }

}
