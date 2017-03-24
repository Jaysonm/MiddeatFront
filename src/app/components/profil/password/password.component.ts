import {Component, OnInit, ElementRef, ViewChild} from '@angular/core';
import {UserService} from "../../../services/components/user.service";
import {Validators, FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {
  private idUser = parseInt(localStorage.getItem('user'));
  public object : Object = new Object();
  public myForm : FormGroup;

  public hide : boolean = true;
  public notSameOldPw : boolean = false;

  constructor(private userService : UserService, private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'oldPassword': ['', Validators.required],
      'newPassword': ['', Validators.required],
      'newPassword2': ['', Validators.required],
    });

    this.myForm.valueChanges
      .debounceTime(500)
      .subscribe(data => {
        this.object['password'] = data.oldPassword;
        this.userService.checkPassword(this.idUser, this.object).subscribe(res =>
          {
            console.log(res.message);
            if(res.message == "true"){ this.notSameOldPw = true } else{ this.notSameOldPw = false }
          }
        )
      })
  }

  updatePassword(object : Object){
    this.userService.updatePassword(this.idUser, object).subscribe(() => {
      this.object = new Object();this.hide = false;
    });
    setTimeout(() => {
      this.hide = true;
    }, 4000);
  }
}
