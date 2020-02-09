import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-getallby-transaction',
  templateUrl: './getallby-transaction.component.html',
  styleUrls: ['./getallby-transaction.component.css']
})
export class GetallbyTransactionComponent implements OnInit {

  success: string;
  failure: string;
  transactions: Transaction[];


  constructor(private transactionService: TransactionService,
              private router: Router) {
   this.getAllTransaction();
}

getAllTransaction() {
    this.transactionService.getAllTransaction().subscribe(response => {
      console.log(response);
      if (response.statusCode === 201) {
        this.transactions = response.bean;   // response bean
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
