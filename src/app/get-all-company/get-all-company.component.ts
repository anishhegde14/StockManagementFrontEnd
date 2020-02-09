import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-get-all-company',
  templateUrl: './get-all-company.component.html',
  styleUrls: ['./get-all-company.component.css']
})
export class GetAllCompanyComponent implements OnInit {

  companies: Company[];
  message: string;

  constructor(public router: Router,
              public companyService: CompanyService
  ) {
    this.getAllCompany();
  }

  getAllCompany() {
    this.companyService.getAllCompany().subscribe(response => {
      console.log(response);
      this.companies = response.companyList;
    },
      err => {
        console.log(err);
      });
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company.companyId).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        this.companies.splice(this.companies.indexOf(company), 1);
        this.message = res.message;
      }
    });
  }

  modifyCompany(company) {
    this.companyService.selectCompanyToUpdate = company;
    this.router.navigateByUrl('/modify-company');
  }
  ngOnInit() {
  }
}