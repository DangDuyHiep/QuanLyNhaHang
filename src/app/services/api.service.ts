import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:55097/api/';
  urls = {
    food: this.baseUrl + 'Foods',
    time: this.baseUrl + 'Foods/current-time',
    bill: this.baseUrl + 'Bills',
    detailBill: this.baseUrl + 'DetailBills',
    dateToDate: this.baseUrl + 'Bills/date-to-date'
  };
  constructor() { }
}
