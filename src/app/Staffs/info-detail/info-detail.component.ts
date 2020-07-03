import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/Models/food';

@Component({
  selector: 'app-info-detail',
  templateUrl: './info-detail.component.html',
  styleUrls: ['./info-detail.component.scss']
})
export class InfoDetailComponent implements OnInit {
  foods: Food[] = [];
  constructor(private foodService: FoodService) { }

  ngOnInit() {
    this.loadData();
  }
  loadData() {
    this.foodService.getAll().subscribe(res => {
      this.foods = res;
      this.convertData();
      console.log(this.foods);
    });
  }
  convertData() {
    this.foods.forEach( function (f) {
      f.foo_Id = f.foo_Id.trim();
    })
  }
}
