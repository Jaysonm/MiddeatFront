import {Component, OnInit} from '@angular/core';
import {Proposition} from "../../../models/Proposition";
import {PropositionService} from "../../../services/components/proposition.service";
import {Router, ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {Participant} from "../../../models/Participant";
import {ParticipantService} from "../../../services/components/participant.service";
import {WsPropositionService} from "../../../services/websocket/ws-proposition.service";

@Component({
  selector: 'proposition-list',
  templateUrl: 'proposition-list.component.html',
  styleUrls: ['proposition-list.component.scss'],
  providers: [PropositionService, ParticipantService, WsPropositionService]
})
export class PropositionListComponent implements OnInit {
  public propositions : Proposition[];
  public currentUser : number = parseInt(localStorage.getItem('user'));
  public currentProposition : number;

  private participant : Participant = new Participant();

  public searchInput : string;
  public idSearchInput : number = 0;
  public checkbox : number;

  constructor(private propositionService : PropositionService, private spinnerService : SpinnerService,
              private router : Router, private route : ActivatedRoute, private participantService : ParticipantService,
              private wsSocket : WsPropositionService) {
    this.wsSocket.messages.subscribe((proposition:Proposition) => {
      if(typeof proposition !== 'number'){
        this.propositions.push(proposition);
      }
      else{
        this.propositions.splice(proposition, 1);
      }
    });
  }

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
    let object : Object =
      {
        action : 'delete',
        slice : idSlice
      };
    this.wsSocket.messages.next(object);
    this.propositionService.remove(idProp).subscribe();
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
  pushProposition(event : Object){
    this.wsSocket.messages.next(event);
  }

  /* Recherche proposition */
  changeValue(value : string){
    value === '' ? this.router.navigate(['propositions']) : null;
    this.searchInput = value;
  }

  ownProposition(value : boolean){
    value === true ? this.checkbox = this.currentUser : this.checkbox = 0;
  }
}
