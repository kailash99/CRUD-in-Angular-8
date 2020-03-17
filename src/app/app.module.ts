import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { UpdateEmployeeComponent } from './employees/update-employee.component';
import { DisplayEmployeeComponent } from './employees/display-employee.component';
import { EmployeeFilterPipe } from './employees/employee.filter.pipe';
import { JwPaginationComponent } from 'jw-angular-pagination'; 

const appRoutes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent },
  { path: 'update', component: UpdateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    DisplayEmployeeComponent,
    EmployeeFilterPipe,
    JwPaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
