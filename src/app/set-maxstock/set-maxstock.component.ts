import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from '../investor.service';

@Component({
  selector: 'app-set-maxstock',
  templateUrl: './set-maxstock.component.html',
  styleUrls: ['./set-maxstock.component.css']
})
export class SetMaxstockComponent implements OnInit {

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
      this.investors = response.investorList;
    },
      err => {
        console.log(err);
      });
  }
  modifyMaxStock(investor) {
    this.router.navigate([`/modify-max-stock/${investor.id}`],
      {
        queryParams: {
          id : investor.id,
          investorName : investor.investorName,
          emailId : investor.emailId,
          url : investor.url,
          maxStock : investor.maxStock,
          
        }
      }
    );
    }
  ngOnInit() {
  }

}
