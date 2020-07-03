import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { merchandises } from '../models/datatypes';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class MerchandisesService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<RootObject<[merchandises]>> {
    /*get api */
    return this.http.get<RootObject<[merchandises]>>(this.api.urls.student);
  }

  get(id: number): Observable<RootObject<merchandises>> {
    return this.http.get<RootObject<merchandises>>(`${this.api.urls.student}?id=${id}`);
  }

  add(data : merchandises): Observable<RootObject<merchandises>>{
    return this.http.post<RootObject<merchandises>>(this.api.urls.student,data);
  }
  update(data : merchandises): Observable<RootObject<merchandises>>{
    return this.http.put<RootObject<merchandises>>(`${this.api.urls.student}?id=${data.id}`,data);
  }
  delete(id : number): Observable<RootObject<null>>{
    return this.http.delete<RootObject<null>>(`${this.api.urls.student}?id=${id}`);
  }
}
