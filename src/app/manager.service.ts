import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  selectManagerToUpdate: Manager;

  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addManager(managerDetails): Observable<any> {
    return this.http.post<any>(`${this.url}/addManager`, managerDetails);
  }

  modifyManager(managerDetails) {
    return this.http.post<any>(`${this.url}/modify-manager`, managerDetails);
  }

  searchManager(managerDetails): Observable<any> {
    return this.http.get<any>(`${this.url}/getManager/${managerDetails}`, managerDetails);
  }

  getAllManager(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-all-manager`);
  }

  deleteManager(manager: Manager) {
    return this.http.delete<any>(`${this.url}/delete-manager/${manager.id}`);
  }
}
