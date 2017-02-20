import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {FavorisService} from "../../../services/favoris.service";
import {SpecialityImgPipe} from "../../../pipes/speciality-img.pipe";
import {Restaurant} from "../../../models/Restaurant";
import {ParticipantService} from "../../../services/participant.service";

@Component({
  selector: 'restaurant-favoris',
  templateUrl: './restaurant-favoris.component.html',
  styleUrls: ['./restaurant-favoris.component.scss'],
  providers: [FavorisService, ParticipantService]
})
export class RestaurantFavorisComponent implements OnInit {
  private currentUser : number = parseInt(localStorage.getItem("user"));
  public restaurantFavoris : Restaurant[];
  public participation : number;

  constructor(private favoriService: FavorisService, private participantService : ParticipantService,
              private router: Router, private spinner : SpinnerService) {}

  ngOnInit() {
    this.spinner.start();
    this.favoriService.getFavorisForUser(this.currentUser).subscribe(res => {this.restaurantFavoris = res;this.spinner.stop()});
    this.participantService.getPropositionOfUser(this.currentUser).subscribe(res => {
      res.id ? this.participation = res.restaurant.id : this.participation = 0;
    });
  }

  goToRestaurant(id : number) : void{
    this.router.navigate(['resto', id])
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };
}
