import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Speciality} from "../../models/Speciality";

@Component({
  selector: 'search-resto',
  templateUrl: 'search-resto.component.html',
  styleUrls: ['search-resto.component.scss']
})
export class SearchRestoComponent implements OnInit {
  public searchInput : string = '';
  public specialities : Speciality[];
  public specialitiesCheck : string[];

  constructor(private restoService: RestaurantService) {
    this.restoService.getAllSpeciality().subscribe(res => this.specialities = res);
  }

  ngOnInit() {}

  changeValue(event : any){
    this.searchInput = event.target.value;
  }

  updateCheckbox(){
    this.specialitiesCheck = this.specialities.filter(spe => spe.checked).map(spe => spe.name);
  }

}
