import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stocks-of-investor',
  templateUrl: './stocks-of-investor.component.html',
  styleUrls: ['./stocks-of-investor.component.css']
})
export class StocksOfInvestorComponent implements OnInit {

  success: string;
  failure: string;
  transactions: Transaction[];
  id : any


  constructor(private transactionService: TransactionService,
              private router: Router) {
            this.id=  localStorage.getItem("id");
   this.getAllTransactionInvestor(this.id);
}
sellStock(transaction) {
  this.router.navigate([`/sellStock/${transaction.transactionId}`],
    {
      queryParams: {
        transactionId : transaction.transactionId,
        companyId : transaction.companyId,
        investorId : transaction.investorId,
        noOfShares : transaction.noOfShares,
      }
    }
  );
}


getAllTransactionInvestor(id) {
    this.transactionService.getAllTransactionInvestor(id).subscribe(response => {
      console.log(response);
      if (response.statusCode === 200) {
        this.transactions = response.listTransaction;   // response bean
        this.success = response.description;
        localStorage.setItem('transactionDetails', JSON.stringify(response));
        setTimeout(() => {
          this.success = null;
        }, 3000);
      } else {
        this.failure = response.description;
        localStorage.setItem('transactionDetails', JSON.stringify(response));
        console.log('transaction Details are Added');
        setTimeout(() => {
          this.failure = null;
        }, 3000);
      }
    });
  }
  ngOnInit() {
  }

}
