import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { empModal } from "../../modals/emp.modal";
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { IEmployee } from 'src/app/modals/employee';
import { combineAll } from 'rxjs/operators';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  submitted = false;

  addForm: FormGroup;
  constructor(private formBuilder: FormBuilder,private employeeService: EmployeeService,
    private router: Router) {
      
     }

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      id: [''],
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      emailId: ['', Validators.email],
      avatar: [''],
    })
  }
  onSubmit() {
    console.log(this.addForm.value);
    localStorage.setItem("employees.data",this.addForm.value);
    this.employeeService.createEmployee(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['/employee-list']);
      });


  }

 // save() {
  //   console.log(this.employee);   
  //   this.employeeService
  //   .createEmployee(this.employee).subscribe(data => {
  //     console.log(data)
  //     console.log(this.employee)
  //     this.gotoList();
  //   }, 
  //   error => console.log(error));
  // }

  // onSubmit() {
  //   this.submitted = true;
  //   this.save();    
  // }

  // gotoList() {
  //   this.router.navigate(['/employee-list']);
  // }

}
