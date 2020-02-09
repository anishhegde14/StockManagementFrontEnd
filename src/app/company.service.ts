import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  selectCompanyToUpdate: Company;

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addCompany(companyDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/addCompany`, companyDetails);
  }

  modifyCompany(companyDetails) {
    return this.http.put<any>(`${this.url}/modify-company`, companyDetails);
  }

  searchInvestor(companyDetails): Observable<any> {
    return this.http.get<any>(`${this.url}/get-company`, companyDetails);
  }

  getAllCompany(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-company`);
  }

  deleteCompany(id:number) {
    return this.http.delete<any>(`${this.url}/delete-company/${id}`);
  }
}
