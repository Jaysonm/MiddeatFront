import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {Resto} from "../model/Resto";

@Injectable()
export class RestoService {
  private url = 'api/resto';

  constructor(private http : Http) { }

  getAll() : Observable<any>{
    return this.http.get(this.url)
      .map(res => res.json())
  }

}
