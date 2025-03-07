import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private apiKey = '4dc02b2081c24805bf2357386cab95e4';
  private apiUrl = 'https://newsapi.org/v2';

  constructor(private http: HttpClient) { }

  getNewsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/top-headlines?category=${category}&apiKey=${this.apiKey}`);
  }

  searchNews(keyword: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/everything?q=${keyword}&apiKey=${this.apiKey}`);
  }
}