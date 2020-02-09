import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stockexchange',
  templateUrl: './stockexchange.component.html',
  styleUrls: ['./stockexchange.component.css']
})
export class StockexchangeComponent implements OnInit {

  success: string;
  failure: string;
  stocks: Stock[];

  constructor(private stockService: StockService,
              private router: Router) {
    this.getAllStock();
  }

  onButtonClick(){
    document.getElementById('textInput').className="show";
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
  ngOnInit() {
  }

}
