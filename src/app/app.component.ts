import {Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import {LoggedService} from "./subjects/logged.subject";
import {AuthenticationService} from "./services/components/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [LoggedService, AuthenticationService]
})
export class AppComponent implements OnInit{
  @ViewChild('deroulant') menu : ElementRef;
  isOpen : boolean = false;
  isLogged : boolean = true;

  constructor(private logged : LoggedService, private auth : AuthenticationService){ }

  ngOnInit(){
    this.logged.statusUser.subscribe(res => this.isLogged = res);
  }

  logout() : void{
    this.auth.logout();
    this.closeMenu();
  }

  openMenu() : void{
    this.menu.nativeElement.style.right = 0;
    this.isOpen = true;
  }
  closeMenu() : void{
    this.menu.nativeElement.style.right = '-220px';
    this.isOpen = false;
  }
}
