import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HttpPostService {

  private apiUrl = 'https://www.pryzemedia.com/swse/api/api.php'; // Adjust the URL

  constructor(private http:HttpClient) { }

  calculateAdjustedPrices(data: any) {
    //return this.http.post<any>('/api/calculate', data);
    return this.http.post<any>(this.apiUrl, data);
  }

  getCommoditiesByQueryString(queryString: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?action=getCommodities&${queryString}`);
  }

  getCommodities(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?action=getCommodities`);
  }
}
