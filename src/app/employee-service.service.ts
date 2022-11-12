import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  
  constructor(private http:HttpClient) { }

  insertEmployee(employee : any){
    return this.http.post("http://localhost:8080/EmployeePayroll/create",employee);
  }
}
