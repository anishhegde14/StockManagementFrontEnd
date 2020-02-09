import { Component, OnInit } from '@angular/core';
import { InvestorService } from '../investor.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-investor',
  templateUrl: './create-investor.component.html',
  styleUrls: ['./create-investor.component.css']
})
export class CreateInvestorComponent implements OnInit {

  success: string;
  failure: string;

  constructor(private investor: InvestorService) { }
  
  addInvestor(form: NgForm) {
    this.investor.addInvestor(form.value).subscribe(data => {
      console.log(data);

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


}
