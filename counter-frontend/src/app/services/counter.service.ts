import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl = "http://localhost:8000/api/counters";

@Injectable({
  providedIn: "root",
})
export class CounterService {
  constructor(private http: HttpClient) {}

  get(id: 1): Observable<any> {
    // Let's get the value of the first row of the table
    return this.http.get(`${baseUrl}/${id}`);
  }

  update(id: 1, data): Observable<any> {
    // currently we can set the id as 1
    return this.http.put(`${baseUrl}/${id}`, data);
  }
}
