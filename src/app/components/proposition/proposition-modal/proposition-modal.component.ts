import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import {Proposition} from "../../../models/Proposition";
import {PropositionService} from "../../../services/proposition.service";
import {RestaurantService} from "../../../services/restaurant.service";
import {Restaurant} from "../../../models/Restaurant";
import {WebsocketService} from "../../../services/websocket/websocket.service";
import {WsPropositionService} from "../../../services/websocket/ws-proposition.service";

@Component({
  selector: 'proposition-modal',
  templateUrl: './proposition-modal.component.html',
  styleUrls: ['./proposition-modal.component.scss'],
  providers: [WsPropositionService]
})
export class PropositionModalComponent implements OnInit {
  public proposition : any = new Object();
  public restaurants : Restaurant[];

  @Input()
  public currentUser : number;

  @Output()
  public propositionEmit : EventEmitter<Object> = new EventEmitter();

  constructor(private propositionService : PropositionService, private restaurantService : RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAll().subscribe(res => this.restaurants = res);
  }

  getRestaurant(id : number) : void{
    this.proposition.user_creator = this.currentUser;
    this.proposition.restaurant = id;
  }

  addOneProposition(p : Proposition) : void{
    this.propositionService.addProposition(p).subscribe(res => {
      let object : Object =
        {
          action : 'add',
          proposition : res
        };
      this.propositionEmit.emit(object)
    });
  }
}
