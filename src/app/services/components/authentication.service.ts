import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http} from "@angular/http";
import {User} from "../../models/User";
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {LoggedService} from "../../subjects/logged.subject";

@Injectable()
export class AuthenticationService {
  private url = 'http://localhost:8180/back/authentication';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http, private router : Router, private logged : LoggedService) { }

  signUp(user : User) : Observable<User> {
    return this.http.post(`${this.url}/register`, user, this.options)
      .map(res => {this.logged.login();return res.json()});
  }

  signIn(user : User) : Observable<User> {
    return this.http.post(`${this.url}/login`, user, this.options)
      .map(res => {this.logged.login();return res.json()});
  }

  isLogin() : boolean{
    if(localStorage.getItem('token')){
      return true;
    }
    return false
  }

  logout(){
    this.logged.logout();
    localStorage.removeItem('user');
    localStorage.removeItem('token');

    this.router.navigateByUrl('authentification');

  }
}
