import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallstocks',
  templateUrl: './getallstocks.component.html',
  styleUrls: ['./getallstocks.component.css']
})
export class GetallstocksComponent implements OnInit {

  success: string;
  failure: string;
  stocks: Stock[];

  constructor(private stockService: StockService,
              private router: Router) {
    this.getAllStock();
  }

  sellStock(stocks) {
    this.router.navigate([`/sellstocks/${stocks.id}`],
      {
        queryParams: {
          id : stocks.id,
          companyId : stocks.companyId,
          companyName : stocks.companyName,
          highPrice : stocks.highPrice,
          lowPrice : stocks.lowPrice,
          currentPrice : stocks.currentPrice,
          volume : stocks.volume,
          availableStocks : stocks.availableStocks,
        }
      }
    );
  }


  getAllStock() {
    this.stockService.getAllStock().subscribe(response => {
      console.log(response);
      if (response.statusCode === 200) {
        this.stocks = response.stockList;   //response bean
        
        
        this.success = response.message;
        localStorage.setItem('stock Details', JSON.stringify(response));
        setTimeout(() => {
          this.success = null;
        }, 3000);
      } else {
        this.failure = response.description;
        localStorage.setItem('stock Details', JSON.stringify(response));
        console.log('stock Details are Added');
        setTimeout(() => {
          this.failure = null;
        }, 3000);
      }
    });
  }

  buyStock(stocks) {
    this.router.navigate([`/buystocks/${stocks.id}`],
      {
        queryParams: {
          id : stocks.id,
          companyId : stocks.companyId,
          companyName : stocks.companyName,
          highPrice : stocks.highPrice,
          lowPrice : stocks.lowPrice,
          currentPrice : stocks.currentPrice,
          volume : stocks.volume,
          availableStocks : stocks.availableStocks,
        }
      }
    );
  }

  ngOnInit() {
  }
}
