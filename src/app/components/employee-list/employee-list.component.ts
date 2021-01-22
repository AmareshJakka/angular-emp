import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeService } from "../../services/employee.service";
import { empModal } from "../../modals/emp.modal";
import{IEmployee} from '../../modals/employee';
import { Router, NavigationExtras } from '@angular/router';
import { combineAll } from 'rxjs/operators';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees;
  employee;
 
  constructor(private router:Router,private employeeService: EmployeeService) {
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state ;
    this.employee=state;
  
  }

  ngOnInit(): void {

    this.reloadData();
    console.log('reloaded...........');

  }
  reloadData(){

    this.employeeService.getEmployeesList().subscribe(list=>{
      console.log(this.employee)
      if(this.employee){
        this.employees =list;
        this.employee.push(this.employee);
      }
      else{
        this.employees =list
      }
     
    })
    console.log(this.employees)
  }

  open(item){
  
    const navigationExtras: NavigationExtras = {state:item};
  
    this.router.navigate(['emp-details'], navigationExtras);
    
  }

}
