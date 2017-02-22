import { Injectable } from '@angular/core';
import {RequestOptions, Headers} from "@angular/http";
import {Observable} from "rxjs";
import {Favoris} from "../../models/Favoris";
import {Restaurant} from "../../models/Restaurant";
import {User} from "../../models/User";
import {HttpInterceptorService} from "../http-interceptor.service";

@Injectable()
export class FavorisService {
  private url = 'favoris';
  private token = localStorage.getItem('token');

  constructor(private http : HttpInterceptorService) { }

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
    return this.http.post(`${this.url}`, {id})
  }

  deleteFavorite(id : Favoris){
    let headers = new Headers(new Headers({ 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.token}` }));
    let optionsDelete = new RequestOptions({headers : headers, body : id});
    return this.http.delete(`${this.url}`, optionsDelete);
  }

}
