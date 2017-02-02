import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../services/restaurant.service";
import {Speciality} from "../../models/Speciality";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'search-resto',
  templateUrl: 'search-resto.component.html',
  styleUrls: ['search-resto.component.scss']
})
export class SearchRestoComponent implements OnInit {
  public searchInput : string = '';
  public specialities : Speciality[];
  public specialitiesCheck : string[];

  constructor(private restoService: RestaurantService, private userService : UserService) {
    localStorage.setItem("user", "1");
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
