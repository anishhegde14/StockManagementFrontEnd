import { Component, OnInit } from '@angular/core';
import { StockService } from '../stock.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-buystock',
  templateUrl: './buystock.component.html',
  styleUrls: ['./buystock.component.css']
})
export class BuystockComponent implements OnInit {

  success: string;
  failure: string;

  stockId1;
  companyId1;
  companyName1;
  highPrice1;
  lowPrice1;
  currentPrice1;
  volume1;
  availableStocks1;
  investorId

  constructor(public stockService: StockService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                activatedRouter.params.subscribe( data => {
                  console.log(data.stockId);
                 this.investorId = JSON.parse(localStorage.getItem('userCredentials')).id,
                  this.stockId1 = data.id;
                });

                activatedRouter.queryParams.subscribe( data => {
                  console.log(data);
                  this.stockId1=data.id;
                  this.companyId1 = data.companyId;
                  this.companyName1 = data.companyName;
                  this.highPrice1 = data.highPrice;
                  this.lowPrice1 = data.lowPrice;
                  this.currentPrice1 = data.currentPrice;
                  this.volume1 = data.volume;
                  this.availableStocks1 = data.availableStocks;
                       });
               }

               buyStock(form: NgForm) {
                console.log(form.value);
                this.stockService.buyStock(form.value,this.investorId).subscribe(data => {
                  console.log(data);
                  this.router.navigateByUrl('/get-all-stocks');
                });
              }


  ngOnInit() {
  }

}
