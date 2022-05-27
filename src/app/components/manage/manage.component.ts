import { Component, OnInit } from '@angular/core';
import {StocksService} from "../../services/stocks.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  symbols!: Array<string>;
  stock!: string;

  constructor(private service: StocksService) { }

  ngOnInit(): void {
    this.symbols = this.service.get();
  }

  add() {
    this.symbols = this.service.add(this.stock);
    this.stock = '';
  }

  remove(symbol: string) {
    this.symbols = this.service.remove(symbol);
  }

}
