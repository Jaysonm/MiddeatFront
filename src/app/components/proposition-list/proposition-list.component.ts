import { Component, OnInit } from '@angular/core';
import {Proposition} from "../../models/Proposition";
import {PropositionService} from "../../services/proposition.service";
import {Router} from "@angular/router";
import {SpinnerService} from "../../subjects/spinner.subject";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'proposition-list',
  templateUrl: './proposition-list.component.html',
  styleUrls: ['./proposition-list.component.scss'],
  providers: [PropositionService, UserService]
})
export class PropositionListComponent implements OnInit {
  public propositions : Proposition[];
  public currentUser : User;

  constructor(private propositionService : PropositionService, private spinnerService : SpinnerService,
              private router : Router, private userService : UserService) { }

  ngOnInit() {
    this.spinnerService.start();
    this.propositionService.getAll().subscribe((res:Proposition[]) =>
    {
      this.propositions = res;
      this.spinnerService.stop();
    });
    this.userService.getPersonById(1).subscribe(res => this.currentUser = res);
  };

  goToProposition(id : number) : void{
    this.router.navigate(['propositions', id])
  }

  participate(id_user : number, id_prop : number) : void{
    this.propositionService.addOneParticipant(id_user).subscribe(res => console.log(res));
    this.currentUser.id_proposition = id_prop;
  }

}
