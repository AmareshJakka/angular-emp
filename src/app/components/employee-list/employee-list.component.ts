import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { EmployeeService } from "../../services/employee.service";
import { empModal } from "../../modals/emp.modal";
import{IEmployee} from '../../modals/employee';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees:IEmployee;
 
  constructor(private router:Router,private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.reloadData();
    console.log('reloaded...........');

  }
  reloadData(){
    this.employeeService.getEmployeesList().subscribe(list=>{
      console.log(list)
      this.employees = list
    })
    
    console.log(this.employees)
  }

  open(item){
    console.log(item);
    const navigationExtras: NavigationExtras = {state:item};
  
    this.router.navigate(['emp-details'], navigationExtras);
    
  }

}
