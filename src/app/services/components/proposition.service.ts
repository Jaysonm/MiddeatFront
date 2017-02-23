import { Injectable } from '@angular/core';
import {Response} from "@angular/http";
import {Observable} from "rxjs";
import {Proposition} from "../../models/Proposition";
import {HttpInterceptorService} from "../http-interceptor.service";

@Injectable()
export class PropositionService {
  private url = 'propositions';

  constructor(private http : HttpInterceptorService) {}

  getAll() : Observable<Proposition[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json() as Proposition[]);
  }

  getOneById(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json());
  }

  addProposition(proposition : any){
    return this.http.post(`${this.url}`, proposition)
      .map(res => res.json());
  }

  remove(id : number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
