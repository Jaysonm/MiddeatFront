import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../services/components/authentication.service";
import {User} from "../../../models/User";
import {Router} from "@angular/router";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {
  public user : User = new User();

  constructor(private authencationService : AuthenticationService, private router : Router) { }

  ngOnInit() {}

  signUp(){
    this.authencationService.signUp(this.user).subscribe(res => {
      localStorage.setItem("user", res.id.toString());
      localStorage.setItem('token', res.token.toString());

      this.router.navigate(['home']);
    });

  }

}
