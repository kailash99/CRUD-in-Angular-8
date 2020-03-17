import { Injectable } from '@angular/core';
import { Employee } from './models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private listEmployees: Employee[] = [
  ];

  getEmployees(): Employee[] {
    return this.listEmployees;
  }
  setEmployees(val) {
    console.log(this.listEmployees.findIndex(e => e.id === val.id))
    const i = this.listEmployees.findIndex(e => e.id === val.id)

    if (i < 0) {
      this.listEmployees.push(val);
    } else {
      console.log(this.listEmployees[i]);
      this.listEmployees[i] = val;
      alert("Duplicate");
    }
    console.log("*****", val.id);
  }

  getEmployeeById(id) {
    console.log('************', id, this.listEmployees[0], this.listEmployees)
    return this.listEmployees[0];
  }

  deleteEmployee(id: number) {
    const i = this.listEmployees.findIndex(e => e.id === id);

    if (i !== -1) {
      this.listEmployees.splice(i, 1);
    }
  }
}
