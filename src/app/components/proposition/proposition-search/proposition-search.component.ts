import {Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, Input} from '@angular/core';
import {Restaurant} from "../../../models/Restaurant";
import {RestaurantService} from "../../../services/restaurant.service";

@Component({
  selector: 'proposition-search',
  templateUrl: 'proposition-search.component.html',
  styleUrls: ['proposition-search.component.scss']
})
export class PropositionSearchComponent implements OnInit {
  @ViewChild('searchDeroulant') search : ElementRef;
  isOpen : boolean = false;
  myProp : boolean = false;

  @Input() idSearchInput : number;
  @Output() inputValue : EventEmitter<string> = new EventEmitter();
  @Output() checkboxValue : EventEmitter<boolean> = new EventEmitter();

  constructor(private restaurantService : RestaurantService) { }

  ngOnInit() {
    if(this.idSearchInput){
      this.restaurantService.getOneById(this.idSearchInput).subscribe(res => this.inputValue.emit(res.name));
    }
  }

  openSearch() : void{
    this.search.nativeElement.style.left = 0;
    this.isOpen = true;
    this.inputValue.emit('');
  }

  closeSearch() : void{
    this.search.nativeElement.style.left = '-220px';
    this.isOpen = false;
  }

  getOwnProposition() : void{
    this.myProp = !this.myProp;
    this.checkboxValue.emit(this.myProp);
  }

  changeValue(event : any){
    this.inputValue.emit(event.target.value);
  }
}
