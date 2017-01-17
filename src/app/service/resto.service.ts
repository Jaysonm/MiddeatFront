import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Resto} from "../model/Resto";
@Injectable()
export class RestoService {
  private url = 'api/resto';

  constructor(private http : Http) { }

  getAll() {
    return this.http.get(this.url)
      .map(res => res.json().data);
  }

}
