import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../investor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-max-stock',
  templateUrl: './modify-max-stock.component.html',
  styleUrls: ['./modify-max-stock.component.css']
})
export class ModifyMaxStockComponent implements OnInit {

  success: string;
  failure: string;

  id1;
investorName1;
  emailId1;
  url1;
 maxInvest1;

  constructor(public investorService: InvestorService,
              private router: Router,
              private activatedRouter: ActivatedRoute) {
                activatedRouter.params.subscribe( data => {
                  console.log(data.id);
                  this.id1 = data.id;
                });

                activatedRouter.queryParams.subscribe( data => {
                  console.log(data);
                  this.id1=data.id;
                  this.investorName1=data.investorName;
                  this.emailId1 = data.emailId;
                  this.url1 = data.url;
                  this.maxInvest1=data.maxInvest;
                  
                       });
               }

               modifyMaxStock(form: NgForm) {
                console.log(form.value);
                this.investorService.modifyInvestor(form.value).subscribe(data => {
                  console.log(data);
                  this.router.navigateByUrl('/set-maxstock');
                });
              }

  ngOnInit() {
  }

}
