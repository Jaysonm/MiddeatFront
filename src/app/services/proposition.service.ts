import { Injectable } from '@angular/core';
import {Http, Response} from "@angular/http";
import {Observable} from "rxjs";
import {Proposition} from "../models/Proposition";

@Injectable()
export class PropositionService {
  private url = 'api/proposition';

  constructor(private http : Http) { }

  getAll() : Observable<Proposition[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json().data as Proposition[]);
  }

  getOneById(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().data as Proposition);
  }
}
