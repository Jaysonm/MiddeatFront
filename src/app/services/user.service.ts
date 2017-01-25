import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../models/User";
import {Observable} from "rxjs";

@Injectable()
export class UserService {
  private url = 'api/users';

  constructor(private http : Http) {}

  getAll() : Observable<User[]>{
    return this.http.get(this.url)
      .map(res => res.json().data as User[]);
  }

  getPersonById(id : number) : Observable<User>{
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().data as User);
  }

}
