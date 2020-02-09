import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InvestorService } from '../investor.service';

@Component({
  selector: 'app-add-investor',
  templateUrl: './add-investor.component.html',
  styleUrls: ['./add-investor.component.css']
})
export class AddInvestorComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private investor: InvestorService) { }

  step = 0;

  loginInfo(login: NgForm) {
    console.log(login.value);
  }

  addInvestor(form: NgForm,form1:NgForm) {
    this.investor.addInvestor(form.value).subscribe(data => {
    console.log(form.value);

    if (data.statusCode === 200) {
            this.success = data.description;
            setTimeout(() => {
              this.success = null;
            }, 3000);
            form.reset();
          } else {
            this.failure = data.description;
            setTimeout(() => {
              this.failure = null;
            }, 3000);
          }
        });
  }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}