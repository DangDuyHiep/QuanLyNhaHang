import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';

@Component({
  selector: 'app-staffs-info',
  templateUrl: './staffs-info.component.html',
  styleUrls: ['./staffs-info.component.css']
})
export class StaffsInfoComponent implements OnInit {
  foods: Food[] = [];

  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      console.log(this.foods);
    });
  }

}
