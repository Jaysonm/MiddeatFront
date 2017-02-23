import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {AuthenticationService} from "../../../services/components/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [AuthenticationService]
})
export class SigninComponent implements OnInit {
  public user : User = new User();
  public error : string = '';

  constructor(private authencationService : AuthenticationService, private router : Router) { }

  ngOnInit() {}

  signIn(){
    this.authencationService.signIn(this.user).subscribe(
      res => {
      localStorage.setItem('user', res.id.toString());
      localStorage.setItem('token', res.token.toString());

      this.router.navigate(['home']);
    }, err => {
        console.log(err);
        err.status === 404 ? this.error = err.json().message : this.error = '';
      });
  }

}
