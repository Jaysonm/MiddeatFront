import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/components/user.service";

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  private idUser = parseInt(localStorage.getItem('user'));
  public object : Object = new Object();

  public hide : boolean = true;
  constructor(private userService : UserService) { }

  ngOnInit() {}

  updatePassword(object : Object){
    this.userService.updatePassword(this.idUser, object).subscribe(() => {
      this.object = new Object();this.hide = false;
    });
    setTimeout(() => {
      this.hide = true;
    }, 4000);
  }

}
