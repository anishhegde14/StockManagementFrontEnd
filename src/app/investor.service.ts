import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvestorService {

  selectInvestorToUpdate: Investor;

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addInvestor(investorDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/addInvestor`,investorDetails);
  }

  modifyInvestor(investorDetails) {
    return this.http.put<any>(`${this.url}/modify-investor`, investorDetails);
  }

  searchInvestor(investorDetails): Observable<any> {
    return this.http.get<any>(`${this.url}/get-investor/${investorDetails}`, );
  }

  getAllInvestor(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-investor`);
  }

  deleteInvestor(investor: Investor) {
    return this.http.delete<any>(`${this.url}/delete-investor/${investor.id}`);
  }
}
