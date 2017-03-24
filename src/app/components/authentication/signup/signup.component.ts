import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {AuthenticationService} from "../../../services/components/authentication.service";
import {User} from "../../../models/User";
import {Router} from "@angular/router";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
  providers: [AuthenticationService]
})
export class SignupComponent implements OnInit {
  public myForm : FormGroup;

  @ViewChild('pwStrength') pwStrength : ElementRef;

  constructor(private authencationService : AuthenticationService, private router : Router, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      'email': ['', [Validators.required, this.emailValidator]],
      'password': ['', Validators.required],
      'password2': ['', Validators.required],
      'firstname': ['', Validators.required],
      'lastname': ['', Validators.required]
    });
  }

  signUp(user : User){
    this.authencationService.signUp(user).subscribe(res => {
      localStorage.setItem("user", res.id.toString());
      localStorage.setItem('token', res.token.toString());

      this.router.navigate(['home']);
    });

  }

  private emailValidator(control) {
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
      return null;
    } else {
      return { 'invalidEmailAddress': true };
    }
  }

  public passwordStrength() : number {
    let strength : number = 0;
    let pw = this.pwStrength.nativeElement;

    if(this.pwStrength.nativeElement.value){
      if(pw.value.length >= 8){strength += 25 }
      if(pw.value.match('[a-z]')){strength += 25 }
      if(pw.value.match('[A-Z]')){strength += 25 }
      if(pw.value.match('[0-9]')){strength += 25 }
    } else {
      return null;
    }

    return strength;
  }

  public colorPassword(strength : number) : string{
    if(strength === 25){ return "#c80000" }
    if(strength === 50){ return "#f5d327" }
    if(strength === 75){ return "#B7FF00" }
    if(strength === 100){ return "#00e015" }
  }
}
