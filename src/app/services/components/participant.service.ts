import { Injectable } from '@angular/core';
import {RequestOptions, Headers, Http} from "@angular/http";
import {Participant} from "../../models/Participant";
import {Observable} from "rxjs";
import {Proposition} from "../../models/Proposition";
import {HttpInterceptorService} from "../http-interceptor.service";

@Injectable()
export class ParticipantService {
  private url = 'participants';

  constructor(private http : HttpInterceptorService) { }

  getPropositionOfUser(id : number) : Observable<Proposition> {
    return this.http.get(`${this.url}/user/${id}`)
      .map(res => res.json());
  }

  getParticipantForOneRestaurant(id : number){
    return this.http.get(`${this.url}/restaurant/${id}`)
      .map(res => res.json());
  }

  getOldParticipantForOneRestaurant(id : number){
    return this.http.get(`${this.url}/restaurant/${id}/date`)
      .map(res => res.json());
  }

  addOneParticipant(id : Participant){
    return this.http.post(this.url, {id});
  }

}
