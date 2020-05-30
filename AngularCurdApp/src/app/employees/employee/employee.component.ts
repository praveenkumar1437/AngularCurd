import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../Shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public employeeService : EmployeeService) { }

  ngOnInit(): void {
  }

  /* onSubmit(employeeForm : NgForm){
    console.log(this.employeeService);
    this.employeeService.postEmployee(employeeForm.value);
  } */
  onSubmit(form : NgForm){

    this.employeeService.postEmployee(form.value);
  }
}
