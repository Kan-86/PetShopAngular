import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthenticationService} from "./authentication.service";
import {TodoItem} from "../models/todoitem";
import {environment} from "../../../environments/environment";

const httpOptions = {
  headers: new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': 'ny-ath-token'
})
};

@Injectable({
  providedIn: 'root'
})
export class TodoItemService {

  constructor(private http: HttpClient, private authenticationService: AuthenticationService) {  }

  getItems(): Observable<TodoItem[]>{
    // add authorization header with jwt token
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'Bearer ' + this.authenticationService.getToken());

    //get users from application
    return this.http.get<TodoItem[]>(environment.apiUrl + 'api/Users', httpOptions);
  }

}
