import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MerchandisesService } from 'src/app/services/merchandises.service';
import { merchandises } from 'src/app/models/datatypes';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-accordions',
  templateUrl: './Merchandises.component.html',
  styleUrls: ['./Merchandises.component.scss'],
})
export class AccordionsComponent implements OnInit {

  message: string;
  action : string;
  aMerchandises : merchandises = {} as merchandises;
  constructor(private route : ActivatedRoute , private router:Router , private merchandisesService : MerchandisesService) { }

  @ViewChild('editModal', { static: false }) editModal: ModalDirective;

  mechandises : merchandises[] = [];
  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.merchandisesService.getAll().subscribe(res => {
      this.mechandises = res.data;
    });
  }
  delete(id : number){
    this.merchandisesService.delete(id).subscribe(res => {
      this.loadData();
    });
  }

  hidemodal(){
    this.editModal.hide();
    this.loadData();
  }

  showmodal(id : number){
    this.editModal.show();
    if(id===0)
    {
      this.action = 'Thêm';
      this.aMerchandises = {id : 0} as merchandises;
    }else{
      this.action = 'Cập nhập';
      this.merchandisesService.get(id).subscribe(res =>{
        this.aMerchandises = res.data;
      });
    }
  }

  save(){
    if(this.aMerchandises.id === 0)
    {
      this.merchandisesService.add(this.aMerchandises).subscribe(res => {
        this.hidemodal();
        this.loadData();
      });

    }else{
      this.merchandisesService.update(this.aMerchandises).subscribe(res => {
        this.hidemodal();
        this.loadData();
      });
    }
  }
}
