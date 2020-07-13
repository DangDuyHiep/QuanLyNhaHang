import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';

import { StaffsInfoComponent } from './staffs-info/staffs-info.component';
import { StaffsBillsComponent } from './staffs-bills/staffs-bills.component';
import { StaffsChifsComponent } from './staffs-chifs/staffs-chifs.component';
import { Routes, RouterModule } from '@angular/router';
import { InfoDetailComponent } from './info-detail/info-detail.component';

const routes: Routes = [
  { path: 'staffs-info', component: StaffsInfoComponent },
  { path: 'staffs-info/:id', component: InfoDetailComponent },
  { path: 'staffs-bill/:id', component: StaffsBillsComponent },
  { path: 'staffs-chif', component: StaffsChifsComponent }
];

@NgModule({
  declarations: [
    StaffsInfoComponent,
    StaffsBillsComponent,
    StaffsChifsComponent,
    InfoDetailComponent,
  ],
    
  imports: [
    CommonModule,
    ModalModule.forChild(),
    RouterModule.forChild(routes)
  ]
})
export class StaffsModule { }
