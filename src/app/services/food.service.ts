import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { RootObj } from '../Models/root-obj';
import { Food } from '../Models/food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http: HttpClient, private api: ApiService) { }
  getAll(): Observable<[Food]> {
    /* get api */
    console.log(this.api.urls.food);
    return this.http.get<[Food]>(this.api.urls.food);
  }
}
