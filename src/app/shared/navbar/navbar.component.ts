import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../models/todoitem";
import {TodoItemService} from "../services/todo-item.service";
import {AuthenticationService} from "../services/authentication.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  todoitems: TodoItem[] = [];
  username: string;
  errormessage: string = '';

  constructor(private todoItemService: TodoItemService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {}
}
