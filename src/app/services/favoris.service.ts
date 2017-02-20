import { Injectable } from '@angular/core';
import {Headers, RequestOptions, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Favoris} from "../models/Favoris";
import {Restaurant} from "../models/Restaurant";
import {User} from "../models/User";

@Injectable()
export class FavorisService {
  private url = 'http://localhost:8180/back/favoris';
  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  constructor(private http : Http) { }

  getFavorisForUser(id : number) : Observable<Restaurant[]> {
    return this.http.get(`${this.url}/user/${id}`)
      .map(res => res.json());
  }

  getFavorisForRestaurant(id : number) : Observable<User[]> {
    return this.http.get(`${this.url}/restaurant/${id}`)
      .map(res => res.json());
  }

  restaurantIsFavorite(id : Favoris) : Observable<Favoris>{
    return this.http.get(`${this.url}/user/${id.user_id}/restaurant/${id.restaurant_id}`)
      .map(res => {
        if (res.status !== 204) {
          return res.json();
        }
      });
  }

  addFavorite(id : Favoris){
    return this.http.post(`${this.url}`, {id}, this.options)
  }

  deleteFavorite(id : Favoris){
    let optionsDelete = new RequestOptions({headers : this.headers, body : id});
    return this.http.delete(`${this.url}`, optionsDelete);
  }

}
