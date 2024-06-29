import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonHttpService {

  constructor(private http: HttpClient,
    // private loader: LoaderService,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  post(url: string, payload: any): Observable<any> {
    return this.http.post(url, payload, this.httpOptions);
  }

  put(url: string, payload: any, header?: any): Observable<any> {
    return this.http.put(url, payload, this.httpOptions);
  }

  get(url: string, id?: any): Observable<any> {
    return this.http.get(url, this.httpOptions);
  }

  getById(url: string, id?: string): Observable<any> {
    return this.http.get(url, this.httpOptions);
  }

  delete(url: string, id: any): Observable<any> {
    return this.http.delete(url, this.httpOptions);
  }
}
