import {Component, OnInit, ViewChild} from '@angular/core';
import {Proposition} from "../../models/Proposition";
import {PropositionService} from "../../services/proposition.service";
import {Router} from "@angular/router";
import {SpinnerService} from "../../subjects/spinner.subject";
import {UserService} from "../../services/user.service";
import {Participant} from "../../models/Participant";
import {ParticipantService} from "../../services/participant.service";
import {Restaurant} from "../../models/Restaurant";
import {RestaurantService} from "../../services/restaurant.service";

@Component({
  selector: 'proposition-list',
  templateUrl: './proposition-list.component.html',
  styleUrls: ['./proposition-list.component.scss'],
  providers: [PropositionService, UserService, ParticipantService]
})
export class PropositionListComponent implements OnInit {
  public propositions : Proposition[];
  public currentUser : number = parseInt(localStorage.getItem("user"));
  public currentProposition : number;

  public restaurants : Restaurant[];

  private participant : Participant = new Participant();

  constructor(private propositionService : PropositionService, private spinnerService : SpinnerService,
              private router : Router, private restaurantService : RestaurantService,
              private participantService : ParticipantService) { }

  ngOnInit() {
    this.spinnerService.start();
    this.propositionService.getAll().subscribe((res:Proposition[]) =>
    {
      this.propositions = res;
      this.spinnerService.stop();
    });
    this.restaurantService.getAll().subscribe(res => this.restaurants = res);
    this.participantService.getPropositionOfUser(this.currentUser).subscribe(
      res => {
        this.currentProposition = res.id;
      },
      error => {
        if (error.status !== 200){
          this.currentProposition = 0;
        }
      })
  };

  goToProposition(id : number) : void{
    this.router.navigate(['propositions', id]);
  }

  participate(id_prop : number) : void{
    if(id_prop){
      this.participant.user = this.currentUser;
      this.participant.proposition = id_prop;

      this.participantService.addOneParticipant(this.participant).subscribe();

      this.currentProposition = id_prop;
    }
  }
}
