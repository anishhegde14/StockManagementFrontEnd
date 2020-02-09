import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-history',
  templateUrl: './transaction-history.component.html',
  styleUrls: ['./transaction-history.component.css']
})
export class TransactionHistoryComponent implements OnInit {

  
  success: string;
  failure: string;
  transactions: TransactionHistory[];


  constructor(private transactionService: TransactionService,
              private router: Router) {
   this.getAllTransaction();
}

getAllTransaction() {
    this.transactionService.getAllTransactionHistory().subscribe(response => {
      console.log(response);
      if (response.statusCode === 200) {
        this.transactions = response.list;   // response bean
        this.success = response.description;
        localStorage.setItem('transaction Details', JSON.stringify(response));
        setTimeout(() => {
          this.success = null;
        }, 3000);
      } else {
        this.failure = response.description;
        localStorage.setItem('transaction Details', JSON.stringify(response));
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
