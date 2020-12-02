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

    postEmployeeDetails(body:Employee):Observable<Employee>{
        return this._http.post<Employee>(`${this.getPath()}employees`,body,{headers:this.createHeader()});
    }

    getEmployeeDetailsbyIndex(employid:string):Observable<Employee>{
        return this._http.get<Employee>(`${this.getPath()}employees/?id=${employid}`, {headers: this.createHeader()});
    }

    getEmployeeDetailsbyIndexandName(employid:string,name:string):Observable<Employee>{
        return this._http.get<Employee>(`${this.getPath()}employees/?id=${employid}&name=${name}`, {headers: this.createHeader()});
    }

    

}

