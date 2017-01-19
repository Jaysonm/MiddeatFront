import {Component, OnInit, Input} from '@angular/core';
import {PersonService} from "../../service/person.service";
import {Person} from "../../model/Person";

@Component({
  selector: 'restaurant-noon',
  templateUrl: 'restaurant-noon.component.html',
  styleUrls: ['restaurant-noon.component.scss'],
  providers: [PersonService]
})
export class RestaurantNoonComponent implements OnInit {
  @Input() noon : number[];
  @Input() alreadyEat : number[];
  public personsNoon : Array<Person> = new Array<Person>();
  public personsAte : Array<Person> = new Array<Person>();

  constructor(private personService : PersonService) { }

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
