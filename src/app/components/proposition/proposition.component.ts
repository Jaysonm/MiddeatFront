import { Component, OnInit } from '@angular/core';
import {Proposition} from "../../models/Proposition";
import {PropositionService} from "../../services/proposition.service";
import {ActivatedRoute} from "@angular/router";
import {SpinnerService} from "../../subjects/spinner.subject";

@Component({
  selector: 'proposition',
  templateUrl: './proposition.component.html',
  styleUrls: ['./proposition.component.scss'],
  providers: [PropositionService]
})
export class PropositionComponent implements OnInit {
  public proposition : Proposition;

  constructor(private propositionService : PropositionService, private spinnerService : SpinnerService,
              private route : ActivatedRoute) { }

  ngOnInit() {
    this.spinnerService.start();
    if(this.route.snapshot.params['id']) {
      let currentId = this.route.snapshot.params['id'];
      this.propositionService.getOneById(currentId).subscribe((res:Proposition) => {
        this.proposition = res;
        this.spinnerService.stop();
      });
    }
  };

}
