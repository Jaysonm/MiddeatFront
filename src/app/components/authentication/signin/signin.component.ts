import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {AuthenticationService} from "../../../services/components/authentication.service";
import {Router} from "@angular/router";
import {FormGroup, Validators, FormBuilder} from "@angular/forms";

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  providers: [AuthenticationService]
})
export class SigninComponent implements OnInit {
  public error : string = '';
  public myForm : FormGroup;

  constructor(private authencationService : AuthenticationService, private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'email': ['', [Validators.required]],
      'password': ['', Validators.required],
    });
  }

  signIn(user : User){
    this.authencationService.signIn(user).subscribe(
      res => {
        localStorage.setItem('user', res.id.toString());
        localStorage.setItem('token', res.token.toString());

        this.router.navigate(['home']);
      }, err => {
        err.status === 404 ? this.error = err.json().message : this.error = '';
      });
  }

}
