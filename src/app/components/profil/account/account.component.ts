import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/user.service";
import {SpinnerService} from "../../../subjects/spinner.subject";

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public currentUser : User;

  constructor(private userService : UserService, private spinnerService : SpinnerService) { }

  ngOnInit() {
    this.spinnerService.start();
    this.userService.getPersonById(parseInt(localStorage.getItem("user"))).subscribe((res:User) => {
      this.currentUser = res;
      this.spinnerService.stop();
    });
  }

}
