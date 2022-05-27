import { Component } from '@angular/core';
import {StockInterface, StocksService} from "./services/stocks.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stocks!: Array<StockInterface>;

  constructor(service: StocksService) {
    service.load(['AAPL']).subscribe(stock => {
      this.stocks = stock;
    })
  }
}
