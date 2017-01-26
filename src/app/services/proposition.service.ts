import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import {Proposition} from "../models/Proposition";

@Injectable()
export class PropositionService {
  private url = 'api/propositions';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) { }

  getAll() : Observable<Proposition[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json().data as Proposition[]);
  }

  getOneById(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().data as Proposition);
  }

  addOneParticipant(id : number){
    return this.http.post(this.url, {id}, this.options)
      .map(res => console.log(res));
  }
}
