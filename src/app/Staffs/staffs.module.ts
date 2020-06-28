import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsInfoComponent } from './staffs-info/staffs-info.component';
import { StaffsBillsComponent } from './staffs-bills/staffs-bills.component';
import { StaffsChifsComponent } from './staffs-chifs/staffs-chifs.component';
import { Routes, RouterModule } from '@angular/router';
import { TabsModule } from 'ngx-bootstrap/tabs';

const routes: Routes = [
  { path: 'staffs-info', component: StaffsInfoComponent },
  { path: 'staffs-bill', component: StaffsBillsComponent },
  { path: 'staffs-chif', component: StaffsChifsComponent }
];

@NgModule({
  declarations: [
    StaffsInfoComponent,
    StaffsBillsComponent,
    StaffsChifsComponent,
  ],
    
  imports: [
    CommonModule,
    TabsModule.forRoot(),
    RouterModule.forChild(routes)
  ]
})
export class StaffsModule { }
