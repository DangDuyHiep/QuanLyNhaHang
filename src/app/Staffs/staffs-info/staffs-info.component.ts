import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { getLocaleDateTimeFormat, FormatWidth } from '@angular/common';

@Component({
  selector: 'app-staffs-info',
  templateUrl: './staffs-info.component.html',
  styleUrls: ['./staffs-info.component.css']
})
export class StaffsInfoComponent implements OnInit {
  //list các bàn đang có khách
  listTable: number[] = [];
  foods: Food[] = [];
  timeNow: string;

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    // localStorage.setItem('listTable','');
    this.loadData();
    this.listTable = JSON.parse(localStorage.getItem('listTable'));
    this.foodService.getTime().subscribe(res => {
      this.timeNow = res.timeNow.toString();
      let year = this.timeNow.split('.')[0].split('T')[0].replace('-','').replace('-','');
      let time = this.timeNow.split('.')[0].split('T')[1];
      console.log(year, time);
    });
  }
  //lấy dữ liệu từ api
  loadData() {
    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      console.log(this.foods);
    });
  }
  //thiết lập bàn bắt đầu có khách
  select(id: number): void {
    if (this.listTable.indexOf(id) < 0) {
      this.listTable[id] = id;
      localStorage.setItem(`table${id}`, '');
      localStorage.setItem('listTable', JSON.stringify(this.listTable));
    }

  }

}
