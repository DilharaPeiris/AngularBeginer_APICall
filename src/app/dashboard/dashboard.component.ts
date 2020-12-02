import { Component, OnInit } from '@angular/core';
import { Observable,Subject } from 'rxjs';
import { Country } from 'src/models/country';
import { DashBoardServices } from '../dashboard-services';

import {
  debounceTime, distinctUntilChanged, switchMap
}from 'rxjs/operators';
import { Employee } from 'src/models/Employee';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //employees$: Observable<Employee[]>;
  employees: Employee[] = [];
  public employer: Employee = {};
  private searchTerms = new Subject<string>();

  constructor(private dashboardServices: DashBoardServices) { }

  search(): void {
    
     this.dashboardServices.getEmployeeDetails().subscribe(employees=>{
       this.employees = employees;
       employees.forEach(element => {
          console.log(element);
       });
       
     })
  }

  ngOnInit(): void { 
 }

 insertCreditNoteAsync() {
   this.employer = {
     id : 0,    
    employee_name: "",
    employee_salary: "",
    employee_age: "",
    profile_image: "",     
   };
  
    let body = this.employer;

  
  
  //console.error(this.requestCreditNoteData);
  
  //this.employer = employer ;
  //   let request = this.prepareCreditnoteRequest();
    this.dashboardServices.postEmployeeDetails(body).subscribe(
      data => { 
        console.error(this.employer);
        
      }
    )
    
}

}

