import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { StockService } from '../stock.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-stock',
  templateUrl: './modify-stock.component.html',
  styleUrls: ['./modify-stock.component.css']
})
export class ModifyStockComponent implements OnInit {

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

  constructor(public stockService: StockService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                activatedRouter.params.subscribe( data => {
                  console.log(data.stockId);
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

               modifyStock(form: NgForm) {
                console.log(form.value);
                this.stockService.modifyStock(form.value).subscribe(data => {
                  console.log(data);
                  this.router.navigateByUrl('/getAllStocks');
                });
              }

  ngOnInit() {
  }

}
