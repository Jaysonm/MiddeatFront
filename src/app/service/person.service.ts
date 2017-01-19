import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Person} from "../model/Person";
import {Observable} from "rxjs";

@Injectable()
export class PersonService {
  private url = 'api/persons';

  constructor(private http : Http) {}

  getPersonById(id : number) : Observable<Person>{
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().data);
  }

}
