import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransactionService } from '../transaction.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sellstock',
  templateUrl: './sellstock.component.html',
  styleUrls: ['./sellstock.component.css']
})
export class SellstockComponent implements OnInit {
  transactionId1;
companyId1;
noOfShares1;
investorId1;
sellShares1;
  constructor(private transactionService : TransactionService,
    private router : Router,
    private activatedRouter: ActivatedRoute) {
      activatedRouter.params.subscribe( data => {
        console.log(data.transactionId);
        this.transactionId1 = data.transactionId;
    
      }) ;
      activatedRouter.queryParams.subscribe( data => {
        console.log(data);
        this.transactionId1=data.transactionId;
        this.companyId1 = data.companyId;
        this.noOfShares1 = data.noOfShares;
        this.investorId1 = data.investorId;
        this.sellShares1 = data.sellShares;
        
             });
     }

  sellStocks(UpdateStock : NgForm){
  this.transactionService.sellStock(UpdateStock.value).subscribe(res=>{
    console.log(res)
    this.router.navigateByUrl('/getAllTransactionInvestor');
  })
}
  ngOnInit() {
  }

}
