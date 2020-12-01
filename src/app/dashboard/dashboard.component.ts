import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Country } from 'src/models/country';
import { DashBoardServices } from '../dashboard-services';

import {
  debounceTime, distinctUntilChanged, switchMap
}from 'rxjs/operators';
import { Employee } from 'src/models/Employee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //employees$: Observable<Employee[]>;
  private searchTerms = new Subject<string>();

  constructor(private dashboardServices: DashBoardServices) { }

  search(): void {
    
     this.dashboardServices.getEmployeeDetails().subscribe(x=>{
       console.log(x);
     })
  }

  ngOnInit(): void {
    

    
  }

}

