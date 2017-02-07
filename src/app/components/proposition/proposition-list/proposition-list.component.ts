import {Component, OnInit} from '@angular/core';
import {Proposition} from "../../../models/Proposition";
import {PropositionService} from "../../../services/proposition.service";
import {Router, ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {UserService} from "../../../services/user.service";
import {Participant} from "../../../models/Participant";
import {ParticipantService} from "../../../services/participant.service";

@Component({
  selector: 'proposition-list',
  templateUrl: 'proposition-list.component.html',
  styleUrls: ['proposition-list.component.scss'],
  providers: [PropositionService, UserService, ParticipantService]
})
export class PropositionListComponent implements OnInit {
  public propositions : Proposition[];
  public currentUser : number = parseInt(localStorage.getItem("user"));
  public currentProposition : number;

  private participant : Participant = new Participant();

  public searchInput : string;
  public idSearchInput : number = 0;
  public checkbox : number;

  constructor(private propositionService : PropositionService, private spinnerService : SpinnerService,
              private router : Router, private route : ActivatedRoute, private participantService : ParticipantService) { }

  ngOnInit() {
    this.spinnerService.start();
    this.propositionService.getAll().subscribe((res:Proposition[]) => {this.propositions = res; this.spinnerService.stop();});
    this.participantService.getPropositionOfUser(this.currentUser).subscribe(
      res => { this.currentProposition = res.id; },
      error => {
        if (error.status !== 200){
          this.currentProposition = 0;
        }
      });

    this.route.queryParams.subscribe(params => {
      if(params){
        this.idSearchInput = params['restauId'];
      }
    })
  };

  goToProposition(id : number) : void{
    this.router.navigate(['propositions', id]);
  }

  delete(idProp : number, idSlice : number) : void{
    this.propositionService.remove(idProp).subscribe();
    this.propositions.splice(idSlice, 1);
  }

  participate(id_prop : number) : void{
    if(id_prop){
      this.participant.user = this.currentUser;
      this.participant.proposition = id_prop;

      this.participantService.addOneParticipant(this.participant).subscribe();

      this.currentProposition = id_prop;
    }
  }

  /* Modal add proposition */
  pushProposition(event : Proposition){
    this.propositions.push(event);
  }

  /* Recherche proposition */
  changeValue(value : string){
    this.searchInput = value;
  }

  ownProposition(value : boolean){
    value === true ? this.checkbox = this.currentUser : this.checkbox = 0;
  }
}