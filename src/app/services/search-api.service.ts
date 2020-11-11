import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Textsearchmodel } from '../textsearchmodel';
import { Observable } from 'rxjs/Observable';
import { headersToString } from 'selenium-webdriver/http';


@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  private textSearchsUrl: string;
  public apiResult : Observable<Textsearchmodel[]>;
 
  constructor(private http: HttpClient) {
    // this.textSearchsUrl = 'http://localhost:8080/searchtext/getsearchvalue';
    this.textSearchsUrl = 'https://boiling-anchorage-47326.herokuapp.com/searchtext/getsearchvalue';
  }
 
  public findAll(pHeaders): Observable<Textsearchmodel[]> {
    let reqHeaders = new HttpHeaders(pHeaders);
    this.apiResult = this.http.get<Textsearchmodel[]>(this.textSearchsUrl, {headers: reqHeaders}   ); 
    return this.apiResult; 
  }
}
