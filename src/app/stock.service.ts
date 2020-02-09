import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  selectStockToUpdate: Stock;

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addStock(stockDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/addStock`, stockDetails);
  }

  modifyStock(stockDetails) {
    return this.http.put<any>(`${this.url}/updateStock`, stockDetails);
  }

  searchStock(stockDetails): Observable<any> {
    return this.http.get<any>(`${this.url}/get-stock`, stockDetails);
  }

  getAllStock(): Observable<any> {
    return this.http.get<any>(`${this.url}/getAllStocks`);
  }

  deleteStock(stock) {
    return this.http.delete<any>(`${this.url}/deleteStock/${stock}`);
  }
 buyStock(stock,id){
   return this.http.post<any>(`${this.url}/buyStocks/${id}`,stock)
 }
}
