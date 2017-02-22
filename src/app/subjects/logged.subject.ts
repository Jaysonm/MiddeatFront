import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class LoggedService {
  public statusUser: BehaviorSubject<boolean>;
  private _isLogged: boolean = false;

  constructor(){
    if(localStorage.getItem('token')){
      this.statusUser =  new BehaviorSubject(true);
    }
    else{
      this.statusUser =  new BehaviorSubject(false);
    }
  }

  public get active(): boolean {
    return this._isLogged;
  }

  public set active(v: boolean) {
    this._isLogged = v;
    this.statusUser.next(v);
  }

  public login(): void {
    this.active = true;
  }

  public logout(): void {
    this.active = false;
  }
}
