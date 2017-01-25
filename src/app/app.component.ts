import {Component, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  @ViewChild('deroulant') menu : ElementRef;
  isOpen : boolean = false;

  constructor(){}

  openMenu() : void{
    this.menu.nativeElement.style.right = 0;
    this.isOpen = true;
  }
  closeMenu() : void{
    this.menu.nativeElement.style.right = '-220px';
    this.isOpen = false;
  }
}
