import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";
import {FavorisService} from "../../../services/favoris.service";
import {Restaurant} from "../../../models/Restaurant";
import {Router} from "@angular/router";

@Component({
  selector: 'right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss'],
  providers: [FavorisService]
})
export class RightSideComponent implements OnInit {
  @Input() idCurrentUser : number;
  public currentUser : User;
  public restaurantsFavoris : Restaurant[];

  public routing : boolean = true;

  constructor(private userService : UserService, private favorisService : FavorisService,
              private router : Router) { }

  ngOnInit() {
    this.userService.getPersonById(this.idCurrentUser).subscribe(res => this.currentUser = res);
    this.favorisService.getFavorisForUser(this.idCurrentUser).subscribe(res => {this.restaurantsFavoris = res;console.log(this.restaurantsFavoris)});
  }

  getFavoris() : void{
    this.routing = true;
  }

  getGroupes() : void{
    this.routing = false;
  }

  goToRestaurant(id : number){
    this.router.navigate(['resto', id])
  }

}
