import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http} from "@angular/http";
import {Participant} from "../models/Participant";
import {Observable} from "rxjs";
import {Proposition} from "../models/Proposition";

@Injectable()
export class ParticipantService {
  private url = 'http://localhost:8180/back/participant';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) { }

  getPropositionOfUser(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/user/${id}`)
      .map(res => res.json());
  }

  getParticipantForOneRestaurant(id : number){
    return this.http.get(`${this.url}/restaurant/${id}`)
      .map(res => res.json());
  }

  addOneParticipant(id : Participant){
    return this.http.post(this.url, {id}, this.options);
  }

}
