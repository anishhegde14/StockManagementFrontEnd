import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  getAllTransaction(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-transaction`);
  }
  getAllTransactionHistory():Observable<any>{
    return this.http.get<any>(`${this.url}/getAllTransactionHistory`)
  }

  getAllTransactionInvestor(id): Observable<any> {
    return this.http.get<any>(`${this.url}/getAllTransactionInvestor/${id}`);
  }
  sellStock(transaction):Observable<any>{
    return this.http.post<any>(`${this.url}/sellStocks`,transaction)
  }
}
