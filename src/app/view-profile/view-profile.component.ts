

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InvestorService } from '../investor.service';
import { StocksOfInvestorComponent } from '../stocks-of-investor/stocks-of-investor.component';
@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {



  message: string;
  err: string;
  id : number;
  investor : Investor;
  constructor(private router: Router,
              private investorService: InvestorService
  ) {
    this.id=JSON.parse(localStorage.getItem("userCredentials")).emailId;
    this.getInvestor(this.id)
   }

   modifyInvestor(investor) {
    this.router.navigate([`/modify-investor/${investor.id}`],
      {
        queryParams: {
          id:investor.id,
           investorName:investor.investorName,
          emailId:investor.emailId,
          url : investor.url,
          maxInvest:investor.maxInvest,
         
        }
      }
    );

    
  }
getInvestor(id){
  this.investorService.searchInvestor(id).subscribe(res=>{

    console.log(res)
    this.investor=res.bean1;
    
  })
}
  ngOnInit() {
  }
}