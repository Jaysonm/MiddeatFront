import { Injectable } from '@angular/core';
import {CanActivate, Router} from "@angular/router";
import {AuthenticationService} from "./components/authentication.service";
import {LoggedService} from "../subjects/logged.subject";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthenticationService, private router: Router, private logged : LoggedService) {}

  canActivate() {
    if (!this.auth.isLogin()) {
      this.router.navigate(['authentification']);
      return false
    }
    return true;
  }

}
