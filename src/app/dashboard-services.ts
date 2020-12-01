import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {Employee } from '../models/Employee'
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class DashBoardServices{
    
    path:string = "";

    constructor(private _http:HttpClient){
        this.path = environment.apiBase.toString();
    }

    createHeader(){
        let headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
           
        })
        return headers;
    }

    getPath():string{
        return this.path;
    }

    getEmployeeDetails():Observable<Employee[]>{
        return this._http.get<Employee[]>(`${this.getPath()}employees`,{headers:this.createHeader()});
    }

}

