import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { Table } from 'src/app/Models/table';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  foods: Food[] = [];
  tables: Table[] = [];
  //list các bàn đang có khách
  listTable: number[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.loadData();
    this.tables = JSON.parse(localStorage.getItem('tables'));
  }
  loadData() {
    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      this.convertData();
    });
  }
  convertData() {
    this.foods.forEach(function (f) {
      f.foo_Id = f.foo_Id.trim();
    })
  }
  checkExist(id: number): Table {
    for (let i = 0; i < this.tables.length; i++) {
      if (this.tables[i].productId == id) {
        return this.tables[i];
      }
    }
    return null;
  }
  select(id: number) {
    this.listTable[id] = id;
    console.log(this.listTable[id]);
    let table = this.checkExist(id);
    if (table) {
      table.quantity++;
      table.price = table.price * table.quantity;
      localStorage.setItem('tables', JSON.stringify(this.tables));
    }
    else {
      this.foodService.getById(id).subscribe(res => {
        let aTable: Table = {} as Table;
        aTable.name = res.foo_Name;
        aTable.price = res.foo_Price;
        aTable.quantity = 1;
        aTable.productId = id;
        this.tables.push(aTable);
        localStorage.setItem('tables', JSON.stringify(this.tables));
      });
    }

  }
}
