import { Injectable } from '@angular/core';
import { employee } from '../models/datatypes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../models/root-object';
import { ApiService } from './api.service';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<RootObject<[employee]>> {
    /*get api */
    return this.http.get<RootObject<[employee]>>(this.api.urls.student);
  }

  get(id: number): Observable<RootObject<employee>> {
    return this.http.get<RootObject<employee>>(`${this.api.urls.student}?id=${id}`);
  }

  add(data : employee): Observable<RootObject<employee>>{
    return this.http.post<RootObject<employee>>(this.api.urls.student,data);
  }
  update(data : employee): Observable<RootObject<employee>>{
    return this.http.put<RootObject<employee>>(`${this.api.urls.student}?id=${data.id}`,data);
  }
  delete(id : number): Observable<RootObject<null>>{
    return this.http.delete<RootObject<null>>(`${this.api.urls.student}?id=${id}`);
  }
}
