import * as core from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Overviews/Overviews.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'basic-ui', loadChildren: () => import('./basic-ui/basic-ui.module').then(m => m.BasicUiModule) },
  { path: 'charts', loadChildren: () => import('./charts/charts.module').then(m => m.ChartsDemoModule) },
  { path: 'forms', loadChildren: () => import('./forms/form.module').then(m => m.FormModule) },
  { path: 'tables', loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule) },
  { path: 'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'error-pages', loadChildren: () => import('./error-pages/error-pages.module').then(m => m.ErrorPagesModule) },
  { path: 'staffs-bills', loadChildren: () => import('./Staffs/staffs.module').then(m => m.StaffsModule) },
  { path: 'staffs-info', loadChildren: () => import('./Staffs/staffs.module').then(m => m.StaffsModule) },
  { path: 'staffs-chifs', loadChildren: () => import('./Staffs/staffs.module').then(m => m.StaffsModule) },
];

@core.NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
