import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Names } from '../models/Names';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  subject = new Subject<Names[]>();
  constructor(private http: HttpClient) {}

  getData(name: string) {
    return this.http.get(`https://api.genderize.io/?name=` + name);
  }
}
