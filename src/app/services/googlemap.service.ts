import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {Http} from "@angular/http";

@Injectable()
export class GooglemapService {
  private url : string = 'https://maps.googleapis.com/maps/api/geocode/json?address=';
  private key_api : string = '&key=AIzaSyCXf5ZXZV197IxJYO1_mpIRQ2DgVYwDXwI';

  constructor(private http : Http){}

  getLocalisation(address:string) : Observable<any>{
    return this.http.get(`${this.url}${address}${this.key_api}`)
      .map(res => res.json().results[0]);
  }

  // TODO :
  // url to get all restaurants
  // https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=43.578741,1.493562&radius=2000&types=food&key=AIzaSyCXf5ZXZV197IxJYO1_mpIRQ2DgVYwDXwI
  // url to get detail on one restaurant
  // https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJh_v2lbK9rhIRojVdCpJB28U&key=AIzaSyCXf5ZXZV197IxJYO1_mpIRQ2DgVYwDXwI
}
