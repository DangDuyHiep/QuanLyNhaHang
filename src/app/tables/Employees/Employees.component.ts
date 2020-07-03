import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal/modal.directive';
import { EmployeeService } from 'src/app/services/employee.service';
import {employee } from 'src/app/models/datatypes';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-basic-table',
  templateUrl: './Employees.component.html',
  styleUrls: ['./Employees.component.scss']
})
export class BasicTableComponent implements OnInit {

  message: string;
  action : string;
  aEmployee : employee = {} as employee;

  constructor(private route : ActivatedRoute , private router : Router , private employeeservice : EmployeeService) { }

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  employee : employee[] = [];

  ngOnInit() : void {
    this.loadData();
  }

  loadData(){
    this.employeeservice.getAll().subscribe(res => {
      this.employee = res.data;
      console.log(this.employee);
    });
  }
  delete(id : number){
    this.employeeservice.delete(id).subscribe(res => {
      this.loadData();
    });
  }

  hidemodal(){
    this.editModal.hide();
  }

  showmodal(id : number){
    if(id===0)
    {
      this.action = 'Thêm';
      this.aEmployee = {id : 0} as employee;
      this.loadData();
      this.editModal.show();
    }else{
      this.action = 'Cập nhập';
      this.employeeservice.get(id).subscribe(res =>{
        console.log(res.data);
        this.aEmployee = res.data;
        this.loadData();
        this.editModal.show();
      });
    }
  }

  save(){
    if(this.aEmployee.id == 0)
    {
      this.employeeservice.add(this.aEmployee).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });

    }else{
      this.employeeservice.update(this.aEmployee).subscribe(res => {
        this.editModal.hide();
        this.loadData();
      });
    }
  }
}


