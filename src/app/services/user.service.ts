import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private url = 'http://localhost:8180/back/users';

  constructor(private http : Http) {}

  getAll() : Observable<User[]>{
    return this.http.get(this.url)
      .map(res => res.json() as User[]);
  }

  getPersonById(id : number) : Observable<User>{
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json() as User);
  }

  putCheck(id : number) {
    this.http.get(`${this.url}/${id}`)
  }

}
