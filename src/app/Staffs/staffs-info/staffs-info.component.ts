import { Component, OnInit, ViewChild } from '@angular/core';
import { TabsetComponent, TabDirective } from 'ngx-bootstrap/tabs';

@Component({
  selector: 'app-staffs-info',
  templateUrl: './staffs-info.component.html',
  styleUrls: ['./staffs-info.component.css']
})
export class StaffsInfoComponent implements OnInit {

  @ViewChild('staticTabs', { static: true }) staticTabs: TabsetComponent;
 
  constructor() { }

  ngOnInit() {
  }
 
  value: string;
  onSelect(data: TabDirective): void {
    this.value = data.heading;
  }

}
