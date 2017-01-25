import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../models/User";

@Component({
  selector: 'restaurant-noon',
  templateUrl: 'restaurant-noon.component.html',
  styleUrls: ['restaurant-noon.component.scss'],
  providers: [UserService]
})
export class RestaurantNoonComponent implements OnInit {
  @Input() noon : number[];
  @Input() alreadyEat : number[];
  public personsNoon : Array<User> = new Array<User>();
  public personsAte : Array<User> = new Array<User>();

  constructor(private personService : UserService) { }

  ngOnInit() {
    for(let index of this.noon){
      this.personService.getPersonById(index).subscribe(
        res => this.personsNoon.push(res)
      );
    }
    for(let index of this.alreadyEat){
      this.personService.getPersonById(index).subscribe(
        res => this.personsAte.push(res)
      );
    }
  }

  signUp() : void{
    this.personService.getPersonById(2).subscribe(
      res => this.personsNoon.push(res)
    );
  }
}
