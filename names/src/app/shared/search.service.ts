import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private http: HttpClient) {}

  getData(name: string) {
    return this.http.get(`https://api.genderize.io/?name=` + name);
  }
}
