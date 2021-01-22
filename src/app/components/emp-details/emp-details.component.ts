import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  empDetail
  constructor(private router: Router) { 
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state ;
    this.empDetail =state;
  }

  ngOnInit(): void {
    console.log(this.empDetail)
  }

}
