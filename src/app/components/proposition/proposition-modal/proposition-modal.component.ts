import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Proposition} from "../../../models/Proposition";
import {PropositionService} from "../../../services/proposition.service";
import {RestaurantService} from "../../../services/restaurant.service";
import {Restaurant} from "../../../models/Restaurant";

@Component({
  selector: 'proposition-modal',
  templateUrl: './proposition-modal.component.html',
  styleUrls: ['./proposition-modal.component.scss']
})
export class PropositionModalComponent implements OnInit {
  public proposition : any = new Object();
  public restaurants : Restaurant[];

  @Input()
  public currentUser : number;

  @Output()
  public propositionEmit : EventEmitter<Proposition> = new EventEmitter();

  constructor(private propositionService : PropositionService, private restaurantService : RestaurantService,) { }

  ngOnInit() {
    this.restaurantService.getAll().subscribe(res => this.restaurants = res);
  }

  getRestaurant(id : number) : void{
    this.proposition.user_creator = this.currentUser;
    this.proposition.restaurant = id;
  }

  addOneProposition(p : Object) : void{
    this.propositionService.addProposition(p).subscribe(res => this.propositionEmit.emit(res));
  }


}
