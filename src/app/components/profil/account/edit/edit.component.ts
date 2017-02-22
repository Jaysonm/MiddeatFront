import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {User} from "../../../../models/User";
import {UserService} from "../../../../services/components/user.service";

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input()
  private currentUser : User;

  @Output()
  private editUser : EventEmitter<boolean> = new EventEmitter();

  constructor(private userService : UserService) { }

  ngOnInit() {}

  editIsValid(currentUser : User){
    this.userService.update(currentUser).subscribe();
    this.editUser.emit(true);
  }

  cancelEdit(){
    this.editUser.emit(true);
  }

}
