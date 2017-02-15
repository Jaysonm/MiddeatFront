import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable, Subject} from "rxjs";
import {Proposition} from "../models/Proposition";

@Injectable()
export class PropositionService {
  private url = 'http://localhost:8180/back/proposition';
  public proposition : Subject<Proposition>;

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) {
  }

  getAll() : Observable<Proposition[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json() as Proposition[]);
  }

  getOneById(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  addProposition(proposition : any){
    return this.http.post(`${this.url}`, proposition, this.options)
      .map(res => res.json());
  }

  remove(id : number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
