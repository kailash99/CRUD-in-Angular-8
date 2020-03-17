import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  employees = this.api.getEmployees();
  searchTerm:string;
  title = 'custom-pagination';
  data = [];
  pageItems : Array<any>;

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit() {
    this.data= Array(100).fill(0).map((x, i) =>({ id: (i+1), 
      name: 'Employee ${i+1}'}));
  }
  beginePagination(pageItems:Array<any>){
    this.pageItems = pageItems;
  }

}

