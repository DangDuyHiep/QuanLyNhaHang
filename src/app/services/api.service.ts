import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl = "https://www.saigontech.edu.vn/restful-api/";
  urls = {
    student : this.baseUrl + 'students-free.php',
    login : this.baseUrl + 'login.php',
    reader: this.baseUrl + "reader.php"
  };
  constructor() { }
}
