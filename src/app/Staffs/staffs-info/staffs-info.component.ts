import { Component, OnInit, ViewChild } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { getLocaleDateTimeFormat, FormatWidth } from '@angular/common';
import { BillService } from 'src/app/services/bill.service';
import { Bill } from 'src/app/Models/bill';

@Component({
  selector: 'app-staffs-info',
  templateUrl: './staffs-info.component.html',
  styleUrls: ['./staffs-info.component.css']
})
export class StaffsInfoComponent implements OnInit {
  //list các bàn đang có khách
  listTable: number[] = [];
  foods: Food[] = [];

  constructor(private foodService: FoodService, private billService: BillService) { }

  ngOnInit() {

    this.loadData();
    this.listTable = JSON.parse(localStorage.getItem('listTable') || '[]');

  }

  //lấy dữ liệu món ăn từ api
  loadData() {

    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      console.log(this.foods);
    });
  }

  //thiết lập bàn bắt đầu có khách
  select(id: number): void {

    //kiểm tra id bàn đã có trong listTable hay chưa, listTable lưu id của bàn đã có khách
    if (this.listTable.indexOf(id) < 0) {
      

      // thêm id bàn vào listTable và tạo ra biến trong localstorage có tên như dưới lưu các món ăn đã gọi trong 1 bàn
      this.listTable[id] = id;
      localStorage.setItem(`table${id}`, '');
      localStorage.setItem('listTable', JSON.stringify(this.listTable));
    }

  }

}
