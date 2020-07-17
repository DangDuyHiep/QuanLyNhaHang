import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';
import { Table } from 'src/app/Models/table';
import { ActivatedRoute } from '@angular/router';
import { FoodForKitchen } from 'src/app/Models/food-for-kitchen';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  @ViewChild('confirmModal', { static: true }) editModal: ModalDirective;
  foods: Food[] = [];
  table: Table[] = [];
  tableId = this.route.snapshot.paramMap.get('id');
  listFood: FoodForKitchen[] = [];
  productId: number;

  constructor(private foodService: FoodService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.loadData();
    this.table = JSON.parse(localStorage.getItem(`table${this.tableId}`) || '[]');
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
    let aFood: FoodForKitchen = {} as FoodForKitchen;

    this.listFood = JSON.parse(localStorage.getItem('listFood') || '[]');
    this.foodService.getById(id).subscribe(res => {
      aFood.name = res.foo_Name;
      aFood.status = 0;
      aFood.table = this.tableId;
      this.foodService.getTime().subscribe(res => {
        let date = new Date(res.timeNow);
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        aFood.time = hour + ':' + min + ':' + sec;
        this.listFood.push(aFood);
        localStorage.setItem('listFood', JSON.stringify(this.listFood));
      });
    });

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

  cancel() {
    let table = this.checkExist(this.productId);
    let index = this.table.indexOf(table);

    this.table.splice(index, 1);
    localStorage.setItem(`table${this.tableId}`, JSON.stringify(this.table));
    this.hideModal();
  }

  hideModal() {
    this.editModal.hide();
  }

  showModal(e: Event, id: number) {
    e.preventDefault();
    this.editModal.show();
    this.productId = id;
  }

}
