import {Component, OnInit, Input} from '@angular/core';
import {Proposition} from "../../../models/Proposition";
import {RestaurantService} from "../../../services/components/restaurant.service";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {Restaurant} from "../../../models/Restaurant";
import {PropositionService} from "../../../services/components/proposition.service";

@Component({
  selector: 'left-side',
  templateUrl: './left-side.component.html',
  styleUrls: ['./left-side.component.scss'],
  providers : [PropositionService]
})
export class LeftSideComponent implements OnInit {
  @Input() idCurrentUser : number;
  public proposition : Proposition;
  public restaurant : Restaurant;

  constructor(private propositionService : PropositionService, private restaurantService: RestaurantService,
              private spinnerService : SpinnerService) { }

  ngOnInit() {
      this.spinnerService.start();
      this.propositionService.getOneById(this.idCurrentUser).subscribe((res : Proposition) => {
        this.proposition = res;
        this.restaurantService.getOneById(res.restaurant.id).subscribe((resto : Restaurant) => {
          this.restaurant = resto;
          this.spinnerService.stop()
        });
      })
  }

}
