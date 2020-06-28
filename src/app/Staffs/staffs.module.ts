import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffsInfoComponent } from './staffs-info/staffs-info.component';
import { StaffsBillsComponent } from './staffs-bills/staffs-bills.component';
import { StaffsChifsComponent } from './staffs-chifs/staffs-chifs.component';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  { path: '', redirectTo: '/Staffs', pathMatch: 'full' },
  { path: 'staffs-bills', loadChildren: () => import('./staffs.module').then(m => m.StaffsModule) },
  { path: 'staffs-info', loadChildren: () => import('./staffs.module').then(m => m.StaffsModule) },
  { path: 'staffs-chifs', loadChildren: () => import('./staffs.module').then(m => m.StaffsModule) },
];

@NgModule({
  imports: [CommonModule,
    NgbModule,
  RouterModule.forChild(routes)],
   
})
export class AppRoutingModule { }

@NgModule({
  declarations: [
    StaffsInfoComponent,
    StaffsBillsComponent,
    StaffsChifsComponent,
    RouterModule,
  ],
    
  imports: [
    CommonModule
  ]
})
export class StaffsModule { }
