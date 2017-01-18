import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {Resto} from "../model/Resto";
import {Observable} from "rxjs";
import {Speciality} from "../model/Speciality";

@Injectable()
export class RestoService {
  private url = 'api/resto';
  private urlSpe = 'api/specialities';

  constructor(private http : Http) { }

  getAll() : Observable<Resto[]>{
    return this.http.get(this.url)
      .map((res : Response) => res.json().data as Resto[]);
  }

  getAllSpeciality() : Observable<Speciality[]> {
    return this.http.get(`${this.urlSpe}`)
      .map(res => res.json().data as Speciality[]);
  }

  getOneById(id : number) : Observable<Resto> {
    return this.http.get(`${this.url}/${id}`)
      .map(res => res.json().data as Resto);
  }
}
