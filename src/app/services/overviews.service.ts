import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { RootObject } from '../models/root-object';
import { Observable } from 'rxjs';
import { employee } from '../models/datatypes';

@Injectable({
  providedIn: 'root'
})
export class OverviewsService {

  constructor(private http : HttpClient , private api: ApiService ) { }

  getAll(): Observable<RootObject<[employee]>> {
    /*get api */
    return this.http.get<RootObject<[employee]>>(this.api.urls.student);
  }

  get(id: number): Observable<RootObject<employee>> {
    return this.http.get<RootObject<employee>>(`${this.api.urls.student}?id=${id}`);
  }
}
