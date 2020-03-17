import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employee } from '../models/employee.model';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';
// import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private api: ApiService, private route: ActivatedRoute) {

  }
  employee: Employee;

  employeeData = new FormGroup({
    name: new FormControl(''),
    id: new FormControl(),
    gender: new FormControl(''),
    contactPreference: new FormControl(''),
    dateOfBirth: new FormControl(''),
    department: new FormControl(''),
    isActive: new FormControl(),
    photoPath: new FormControl()
  });

  emp = this.employeeData;

  onSubmit() {
    console.log(this.employeeData.get('id').value)
    this.api.setEmployees(this.employeeData.value);
  }

  ngOnInit() {
    this.route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    })
  }

  private getEmployee(id: number) {
    console.log('backend....', id)
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        dateOfBirth: null,
        department: null,
        isActive: null,
        //photoPath: null
      };
    }
    else {
      console.log('elseeeeeeeee', id)

      this.employeeData.setValue(this.api.getEmployeeById(id));
    }
  }

}
