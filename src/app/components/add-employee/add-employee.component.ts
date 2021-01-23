import { Component, OnInit } from '@angular/core';
import { EmployeeService } from "../../services/employee.service";
import { Router, NavigationExtras } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  submitted = false;
  fileToUpload: File = null;
  employee;

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
    //localStorage.setItem("employees.data",this.addForm.value);
    this.employee = this.addForm.value;
    console.log(this.employee);
    this.employeeService.createEmployee(this.addForm.value)
      .subscribe( data => {
        const navigationExtras: NavigationExtras = {state:this.employee};
        this.router.navigate(['/employee-list'],navigationExtras);
      });


  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
 

}
