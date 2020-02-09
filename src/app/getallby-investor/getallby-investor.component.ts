import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from '../investor.service';

@Component({
  selector: 'app-getallby-investor',
  templateUrl: './getallby-investor.component.html',
  styleUrls: ['./getallby-investor.component.css']
})
export class GetallbyInvestorComponent implements OnInit {

  investors: Investor[];
  message: string;

  constructor(public router: Router,
              public investorService: InvestorService
  ) {
    this.getAllInvestor();
  }

  getAllInvestor() {
    this.investorService.getAllInvestor().subscribe(response => {
      console.log(response);
      this.investors = response.beans;
    },
      err => {
        console.log(err);
      });
  }

  ngOnInit() {
  }
}