import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmpDetailsComponent } from './components/emp-details/emp-details.component';

const routes: Routes = [
  {path: "", component:EmployeeListComponent},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "add-employee", component: AddEmployeeComponent} ,
  {path: "emp-details", component: EmpDetailsComponent} 
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }