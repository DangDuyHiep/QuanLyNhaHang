import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { importmerchandises } from '../models/datatypes';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';

@Injectable({
  providedIn: 'root'
})
export class IpMerchandisesService {

  constructor(private http: HttpClient, private api: ApiService) { }

  getAll(): Observable<RootObject<[importmerchandises]>> {
    /*get api */
    return this.http.get<RootObject<[importmerchandises]>>(this.api.urls.student);
  }

  get(id: number): Observable<RootObject<importmerchandises>> {
    return this.http.get<RootObject<importmerchandises>>(`${this.api.urls.student}?id=${id}`);
  }

  add(data : importmerchandises): Observable<RootObject<importmerchandises>>{
    return this.http.post<RootObject<importmerchandises>>(this.api.urls.student,data);
  }
  update(data : importmerchandises): Observable<RootObject<importmerchandises>>{
    return this.http.put<RootObject<importmerchandises>>(`${this.api.urls.student}?id=${data.id}`,data);
  }
  delete(id : number): Observable<RootObject<null>>{
    return this.http.delete<RootObject<null>>(`${this.api.urls.student}?id=${id}`);
  }
}
