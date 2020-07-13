import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { Table } from 'src/app/Models/table';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  @ViewChild('test', { static: false }) el: ElementRef;
  foods: Food[] = [];
  table: Table[] = [];
  tableId = this.route.snapshot.paramMap.get('id');

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.loadData();
    this.table = JSON.parse(localStorage.getItem(`table${this.tableId}`));
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
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i].productId == id) {
        return this.table[i];
      }
    }
    return null;
  }

  select(e: any, id: number) {
    e.preventDefault();

    let table = this.checkExist(id);

    if (table) {
      table.quantity++;
      table.total = table.price * table.quantity;
      localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    }
    else {
      this.foodService.getById(id).subscribe(res => {
        let aTable: Table = {} as Table;
        aTable.name = res.foo_Name;
        aTable.price = res.foo_Price;
        aTable.quantity = 1;
        aTable.total = res.foo_Price;
        aTable.productId = id;
        this.table.push(aTable);
        localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
      });
    }
  }

  increase(e: any, id: number) {
    e.preventDefault();
    let table = this.checkExist(id);
    

    table.quantity++;
    table.total = table.price * table.quantity;
    localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
  }

  decrease(e: any, id: number) {
    e.preventDefault();
    let table = this.checkExist(id);
    

    if (table.quantity > 1) {
      table.quantity--;
      table.total = table.price * table.quantity;
      localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    }
  }

  cancel(e: any, id: number) {
    e.preventDefault();
    let table = this.checkExist(id);
    let index = this.table.indexOf(table);
    

    this.table.splice(index,1);
    localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
  }

}
