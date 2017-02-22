import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/User";
import {UserService} from "../../../services/components/user.service";
import {SpinnerService} from "../../../subjects/spinner.subject";
import {Router} from "@angular/router";

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public currentUser : User;
  public isEdited : boolean;

  constructor(private userService : UserService, private spinnerService : SpinnerService, private router : Router) { }

  ngOnInit() {
    this.spinnerService.start();
    this.userService.getPersonById(parseInt(localStorage.getItem("user"))).subscribe((res:User) => {
      this.currentUser = res;
      this.spinnerService.stop();
    });
  }

  goToEdit(){
    this.isEdited = true;
  }

  wasEdited(){
      this.isEdited = false;
  }

}
