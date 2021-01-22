import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { combineAll, map } from 'rxjs/operators';
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
    return this.http.post<empModal>(`${this.localUrl}`, JSON.stringify(employee))
    
  }  
  // HttpClient API get() method => to get data
  getEmployeesList():Observable<empModal> {
     return this.http.get<empModal>(`${this.localUrl}`)
     //pipe(map(res=>{
    //   console.log(res);
    //  const emp= JSON.parse(JSON.stringify(res));
    //   console.log(emp.data);
    //   localStorage.setItem("employees",JSON.stringify(res));
    //  return emp.data;
    // }))
  }

  getById(id): Observable<empModal> {
    return this.http.get<empModal>(`${this.baseUrl}/${id}`)
  }
}
