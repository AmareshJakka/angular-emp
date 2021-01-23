import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import {  map } from 'rxjs/operators';
import{empModal} from '../modals/emp.modal'
import{IEmployee} from '../modals/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'https://reqres.in/api/users';

  private localUrl = 'assets/data/employees.json';

  constructor(private http: HttpClient) { }

  // HttpClient API post() method => Create employee
  createEmployee(employee): Observable<empModal> {
    return this.http.post<empModal>(`${this.baseUrl}`, JSON.stringify(employee))
    
  }  
  // HttpClient API get() method => to get data from data.json
  getlocalList():Observable<empModal> {
     return this.http.get<empModal>(`${this.localUrl}`)
  }

  getById(id): Observable<empModal> {
    return this.http.get<empModal>(`${this.baseUrl}/${id}`)
  }

  // HttpClient API get() method => to get data from backend
  getEmployeesList():Observable<empModal> {
    return this.http.get<empModal>(`${this.baseUrl}`).pipe(map(res=>{
     console.log(res);
    const emp= JSON.parse(JSON.stringify(res));
     console.log(emp.data);
     localStorage.setItem("employees",JSON.stringify(res));
    return emp.data;
   }))
 }

}
