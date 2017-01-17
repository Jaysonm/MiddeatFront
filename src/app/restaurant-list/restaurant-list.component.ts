import {Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import {RestoService} from "../service/resto.service";
import {Resto} from "../model/Resto";

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  private urlImage: string = 'app/images';
  public restaurants: Array<Resto>;
  @Input() searchInput : string;
  @Input() checkboxes : string[];

  constructor(private restoService: RestoService) {}

  ngOnInit() {
    this.restoService.getAll().subscribe(res => this.restaurants = res);
  }

  chooseOne(id : number) : void{
    for(let restaurant of this.restaurants){
      restaurant.eat = false;
    }
    this.restaurants[id - 1].eat = true;
  }

  getClassBySpeciality(resto: Resto): string {
    if (resto.speciality === 'Italien') {
      return `${this.urlImage}/pizza.jpg`;
    }
    else if (resto.speciality === 'Toulousain') {
      return `${this.urlImage}/toulouse.jpg`
    }
    else if (resto.speciality.indexOf('volonté') > -1) {
      return `${this.urlImage}/volonte.jpg`
    }
    else if (resto.speciality.indexOf('Savoyarde') > -1) {
      return `${this.urlImage}/savoyarde.jpg`
    }
    else if (resto.speciality.indexOf('Restauration') > -1) {
      return `${this.urlImage}/chaineresto.jpg`
    }
    else if (resto.speciality === 'Americain') {
      return `${this.urlImage}/americain.jpg`
    }
    else {
      return `${this.urlImage}/tout.jpg`
    }
  };
}
