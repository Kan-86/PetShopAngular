import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  errormessage = '';

  constructor(
    private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    // reset login status
    this.authenticationService.logout();
  }

  login() {
    this.loading = true;
    this.authenticationService.login(this.model.username, this.model.password)
      .subscribe(
        success => {
          this.router.navigate(['/']);
        },
        error => {
          this.errormessage = error.message;
          this.loading = false;
        });
  }
}
