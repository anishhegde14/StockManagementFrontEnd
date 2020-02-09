import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../company.service';

@Component({
  selector: 'app-modify-company',
  templateUrl: './modify-company.component.html',
  styleUrls: ['./modify-company.component.css']
})
export class ModifyCompanyComponent implements OnInit {

  message: string;
  err: string;

  constructor(private router: Router,
              private companyService: CompanyService
  ) { }

  modifyCompany(company) {
    this.companyService.modifyCompany(company.value).subscribe(res => {
      console.log(res);
      if (res.message === 'success') {
        this.message = res.message;
      } else {
        this.err = res.message;
      }
    });
    this.router.navigateByUrl('/get-all-company');
  }

  ngOnInit() {
  }
}
