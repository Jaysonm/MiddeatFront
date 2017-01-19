import {Component, OnInit, Input} from '@angular/core';
import {RestoService} from "../../service/resto.service";
import {Resto} from "../../model/Resto";
import {Router} from "@angular/router";
import {SpecialityImgPipe} from "../../pipe/speciality-img.pipe";

@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  public restaurants: Array<Resto>;
  @Input() searchInput : string;
  @Input() checkboxes : string[];

  constructor(private restoService: RestoService, private router: Router) {}

  ngOnInit() {
    this.restoService.getAll().subscribe(res => this.restaurants = res);
  }

  chooseOne(id : number) : void{
    // for(let restaurant of this.restaurants){
    //   restaurant.eat = false;
    // }
    // this.restaurants[id - 1].eat = true;
    this.router.navigate(['resto/detail', id])
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };
}
