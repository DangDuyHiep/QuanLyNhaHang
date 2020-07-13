import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:55097/api/';
  urls = {
    food: this.baseUrl + 'Foods',
    student : this.baseUrl + 'students-free.php',
    reader: this.baseUrl + 'reader.php',
    time: this.baseUrl + 'Foods/current-time',
    bill: this.baseUrl + 'Bills'
  };
  constructor() { }
}
