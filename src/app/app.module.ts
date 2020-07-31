import * as platformBrowser from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './Overviews/Overviews.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './apps/todo-list/todo/todo.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
import { TodoListComponent } from './apps/todo-list/todo-list.component';
import { EmloyeeEditComponent } from './Employee/emloyee-edit/emloyee-edit.component';
import { EmloyeeComponent } from './Employee/emloyee/emloyee.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { FoodService } from './services/food.service';
import { DefaultAdminComponent } from './default/default-admin/default-admin.component';
import { DefaultStaffComponent } from './default/default-staff/default-staff.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    TodoListComponent,
    TodoComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    EmloyeeEditComponent,
    EmloyeeComponent,
    DefaultAdminComponent,
    DefaultStaffComponent,

  ],
  imports: [
    platformBrowser.BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    TabsModule.forRoot()
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
