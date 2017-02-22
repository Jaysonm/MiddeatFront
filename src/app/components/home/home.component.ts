import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public idCurrentUser : number = parseInt(localStorage.getItem('user'));
  public active : string = 'one';

  constructor() { }

  ngOnInit() {}

  activeMenu(setActive : string){
    this.active = setActive;
  }

}
