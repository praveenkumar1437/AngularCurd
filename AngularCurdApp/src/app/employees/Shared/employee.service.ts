import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { Observable } from 'rxjs';
import { Http, Response, Headers, RequestOptions, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  selectedEmployee : Employee;

  constructor(public http : Http) {}
   
  postEmployee(emp : Employee){
    var body = JSON.stringify(emp);
    var headerOptions = new headerOptions({'Content-Type' : 'application/json'});
    var requestOptions = new requestOptions({method : RequestMethod.Post, headers : headerOptions});
    return this.http.post('http://localhost:9090/emp/employees',body,requestOptions).map((response : any) => response.json);
  }
}
