import {Component, OnInit, Input} from '@angular/core';
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/User";

@Component({
  selector: 'right-side',
  templateUrl: './right-side.component.html',
  styleUrls: ['./right-side.component.scss']
})
export class RightSideComponent implements OnInit {
  @Input() idCurrentUser : number;
  public currentUser : User;

  constructor(private userService : UserService) { }

  ngOnInit() {
    this.userService.getPersonById(this.idCurrentUser).subscribe(res => this.currentUser = res);
  }

}
