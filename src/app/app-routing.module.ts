import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';




const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "employee-list"},
  {path: "employee-list", component: EmployeeListComponent},
  {path: "add-employee", component: AddEmployeeComponent} ,
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }