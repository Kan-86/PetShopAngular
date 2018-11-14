import { Component, OnInit } from '@angular/core';
import {TodoItem} from "../shared/models/todoitem";
import {TodoItemService} from "../shared/services/todo-item.service";
import {AuthenticationService} from "../shared/services/authentication.service";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  todoitems: TodoItem[] = [];
  username: string;
  errormessage: string = '';

  constructor(private todoItemService: TodoItemService, private authService: AuthenticationService) {
    this.username = authService.getUsername();
  }

  ngOnInit() {
    // get users from secure api end point
    this.todoItemService.getItems()
      .subscribe(
        items => {
          this.todoitems = items;
        },
        error => {
          this.errormessage = error.message;
        });
  }

}
