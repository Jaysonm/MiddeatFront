import {Component, OnInit, Input} from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurant} from "../../models/Restaurant";
import {Router} from "@angular/router";
import {SpecialityImgPipe} from "../../pipes/speciality-img.pipe";
import {SpinnerService} from "../../subjects/spinner.subject";

@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  public restaurants: Array<Restaurant>;
  @Input() searchInput : string;
  @Input() checkboxes : string[];

  constructor(private restoService: RestaurantService, private router: Router, private spinner : SpinnerService) {}

  ngOnInit() {
    this.spinner.start();
    this.restoService.getAll().subscribe(res => {this.restaurants = res;this.spinner.stop()});
  }

  chooseOne(id : number) : void{
    // for(let restaurant of this.restaurants){
    //   restaurant.eat = false;
    // }
    // this.restaurants[id - 1].eat = true;
    this.router.navigate(['resto', id])
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };
}
