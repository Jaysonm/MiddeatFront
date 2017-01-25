import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {SpinnerService} from "../../../subjects/spinner.subject";

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {
  public currentUser : User;

  constructor(private personService : UserService, private spinnerService : SpinnerService) { }

  ngOnInit() {
    this.spinnerService.start();
    this.personService.getPersonById(2).subscribe((res:User) => {
        this.currentUser = res;
        this.spinnerService.stop();
    });
  }

}
