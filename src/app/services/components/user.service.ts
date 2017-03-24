import { Injectable } from '@angular/core';
import {User} from "../../models/User";
import {Observable} from "rxjs";
import {HttpInterceptorService} from "../http-interceptor.service";

@Injectable()
export class UserService {
  private url = 'users';

  constructor(private http : HttpInterceptorService) {}

  getAll() : Observable<User[]>{
    return this.http.get(this.url)
      .map(res => res.json() as User[]);
  }

  getPersonById(id : number) : Observable<User>{
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json() as User);
  }

  update(user : User){
    return this.http.put(`${this.url}/${user.id}`, user);
  }

  checkPassword(id : number, object : Object){
    return this.http.post(`${this.url}/${id}/password`, object)
      .map(res => res.json());
  }

  updatePassword(id : number, object : Object){
    return this.http.put(`${this.url}/${id}/password`, object);
  }

}
