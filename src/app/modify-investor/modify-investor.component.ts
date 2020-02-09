import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InvestorService } from '../investor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modify-investor',
  templateUrl: './modify-investor.component.html',
  styleUrls: ['./modify-investor.component.css']
})
export class ModifyInvestorComponent implements OnInit {
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

               modifyInvestor(form: NgForm) {
                console.log(form.value);
                this.investorService.modifyInvestor(form.value).subscribe(data => {
                  console.log(data);
                  this.router.navigateByUrl('/viewProfile');
                });
              }
 
// getInvestor(id){
//   this.investorService.searchInvestor(id).subscribe(res=>{

//     console.log(res)
//     this.beans=res.bean1;

//   })
// }
  ngOnInit() {
  }
}