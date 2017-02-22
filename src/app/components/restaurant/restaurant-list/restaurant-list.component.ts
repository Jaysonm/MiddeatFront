import {Component, OnInit} from '@angular/core';
import {RestaurantService} from "../../../services/components/restaurant.service";
import {Restaurant} from "../../../models/Restaurant";
import {Router} from "@angular/router";
import {SpecialityImgPipe} from "../../../pipes/speciality-img.pipe";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {ParticipantService} from "../../../services/components/participant.service";
import {FavorisService} from "../../../services/components/favoris.service";

@Component({
  selector: 'restaurant-list',
  templateUrl: 'restaurant-list.component.html',
  styleUrls: ['restaurant-list.component.scss'],
  providers : [ParticipantService, FavorisService]
})
export class RestaurantListComponent implements OnInit {
  public restaurants: Array<Restaurant>;

  public searchInput : string = '';
  public specialitiesCheck : string[];
  public currentUser : number = parseInt(localStorage.getItem("user"));

  public participation : number;

  constructor(private restoService: RestaurantService, private router: Router,
              private spinner : SpinnerService, private participantService : ParticipantService) {}

  ngOnInit() {
    this.spinner.start();
    this.restoService.getAllWithFavoris(this.currentUser).subscribe(restaurants => {this.restaurants = restaurants;this.spinner.stop();});
    this.participantService.getPropositionOfUser(this.currentUser).subscribe(res => {
        res.id ? this.participation = res.restaurant.id : this.participation = 0;
      }
    )
  }

  goToRestaurant(id : number) : void{
    this.router.navigate(['resto', id])
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };

  /* Recherche restaurant */
  changeValue(restaurant : string){
    this.searchInput = restaurant;
  }

  updateCheckbox(arrayRestau : string[]){
    this.specialitiesCheck = arrayRestau;
  }
}
