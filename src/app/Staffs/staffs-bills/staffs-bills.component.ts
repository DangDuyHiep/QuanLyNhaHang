import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Table } from 'src/app/Models/table';

@Component({
  selector: 'app-staffs-bills',
  templateUrl: './staffs-bills.component.html',
  styleUrls: ['./staffs-bills.component.scss']
})
export class StaffsBillsComponent implements OnInit {

  tableId = this.route.snapshot.paramMap.get('id');
  table: Table[] = [];
  cash: number = 0;
  list: number[] = [1, 2, 3, 4];

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    //lấy dữ liệu bàn ăn theo id từ localStorage
    this.table = JSON.parse(localStorage.getItem(`table${this.tableId}`));
    this.totalCash();

  }
  //tính tổng tiền
  totalCash() {
    this.table.forEach( x => {
      this.cash += x.total;
    })
  }
  
  select(e: any) {
    console.log(e);
    //this.router.navigate([`/staffs/staffs-info/${id}`]);
  }

}
