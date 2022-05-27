import { Component, OnInit } from '@angular/core';
import {StockInterface, StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  stocks!: Array<StockInterface>;
  symbols!: Array<string>;

  constructor(private service: StocksService) {
    this.symbols = service.get();
  }

  ngOnInit(): void {
    this.service.load(this.symbols).subscribe(stock => {
      this.stocks = stock;
    })
  }

}
