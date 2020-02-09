import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from '../investor.service';

@Component({
  selector: 'app-get-all-investor',
  templateUrl: './get-all-investor.component.html',
  styleUrls: ['./get-all-investor.component.css']
})
export class GetAllInvestorComponent implements OnInit {

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

  deleteInvestor(investor: Investor) {
    this.investorService.deleteInvestor(investor).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        this.investors.splice(this.investors.indexOf(investor), 1);
        this.message = res.message;
      }
    });
  }

  modifyInvestor(investor) {
    this.investorService.selectInvestorToUpdate = investor;
    this.router.navigateByUrl('/modify-investor');
  }
  ngOnInit() {
  }
}
