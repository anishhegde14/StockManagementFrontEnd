import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  success: string;
  failure: string;

  constructor(private company: CompanyService) { }

  ngOnInit() {
  }

  addCompany(form: NgForm) {
    this.company.addCompany(form.value).subscribe(data => {
      console.log(data);

      if (data.statusCode === 201) {
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

}