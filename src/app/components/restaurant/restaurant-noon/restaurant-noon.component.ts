import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {ParticipantService} from "../../../services/participant.service";
import {Router, NavigationExtras} from "@angular/router";

@Component({
  selector: 'restaurant-noon',
  templateUrl: 'restaurant-noon.component.html',
  styleUrls: ['restaurant-noon.component.scss'],
  providers: [UserService, ParticipantService]
})
export class RestaurantNoonComponent implements OnInit {
  @Input() currentId : number;
  public personsNoon : Array<User> = new Array<User>();
  public personsAte : Array<User> = new Array<User>();

  constructor(private participantService : ParticipantService, private router : Router) { }

  ngOnInit() {
    this.participantService.getParticipantForOneRestaurant(this.currentId).subscribe(res => this.personsNoon = res)
  }

  signUp() : void{
    let navigationExtras : NavigationExtras = {
      queryParams : {
        "restauId" : this.currentId
      }
    };
    this.router.navigate(['propositions'], navigationExtras);
  }
}
