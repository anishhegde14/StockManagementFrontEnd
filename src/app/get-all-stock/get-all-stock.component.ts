import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockService } from '../stock.service';

@Component({
  selector: 'app-get-all-stock',
  templateUrl: './get-all-stock.component.html',
  styleUrls: ['./get-all-stock.component.css']
})
export class GetAllStockComponent implements OnInit {

  success: string;
  failure: string;
  stocks: Stock[];

  constructor(private stockService: StockService,
              private router: Router) {
    this.getAllStock();
  }

  deleteStock(stock: Stock) {
    this.stockService.deleteStock(stock.id).subscribe(data => {
      console.log(data);
      if (data.statusCode === 200) {
        this.stocks.splice(this.stocks.indexOf(stock), 1);
        this.success = data.message;
        setTimeout(() => {
          this.success = null;
        }, 2000);
      }
    });
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

  modifyStock(stocks) {
    this.router.navigate([`/updateStock/${stocks.id}`],
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
