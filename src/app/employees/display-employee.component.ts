import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../models/employee.model';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.scss']
})
export class DisplayEmployeeComponent implements OnInit {
  @Input() employee: Employee;

  constructor(private api: ApiService, private router: Router) { }

  editEmployee(id) {
    this.router.navigate(['/edit', id]);
  }

  deleteEmployee() {
    this.api.deleteEmployee(this.employee.id);
  }

  ngOnInit() {
  }

}
