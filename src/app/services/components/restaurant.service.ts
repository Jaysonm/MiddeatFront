import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Restaurant} from "../../models/Restaurant";
import {Observable} from "rxjs";
import {Speciality} from "../../models/Speciality";
import {HttpInterceptorService} from "../http-interceptor.service";

@Injectable()
export class RestaurantService {
  private url = 'restaurant';
  private urlSpe = 'api/specialities';

  constructor(private http : HttpInterceptorService) { }

  getAll() : Observable<Restaurant[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json() as Restaurant[]);
  }

  getAllWithFavoris(id : number) : Observable<Restaurant[]>{
    return this.http.get(`${this.url}/user/${id}`)
      .map((res : Response) => res.json() as Restaurant[]);
  }

  getAllSpeciality() : Observable<Speciality[]> {
    return this.http.get(`${this.urlSpe}`)
      .map(res => res.json().data as Speciality[]);
  }

  getOneById(id : number) : Observable<Restaurant> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json() as Restaurant);
  }
}
