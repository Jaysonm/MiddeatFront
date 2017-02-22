import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {Speciality} from "../../../models/Speciality";
import {RestaurantService} from "../../../services/components/restaurant.service";

@Component({
  selector: 'restaurant-search',
  templateUrl: './restaurant-search.component.html',
  styleUrls: ['./restaurant-search.component.scss']
})
export class RestaurantSearchComponent implements OnInit {
  @ViewChild('searchDeroulant') search;
  public isOpen : boolean;
  public specialities : Speciality[];

  private filterSpecialities : String[] = new Array<String>();

  @Output() checkboxValue : EventEmitter<String[]> = new EventEmitter();
  @Output() inputValue : EventEmitter<string> = new EventEmitter();

  constructor(private restaurantService : RestaurantService) {}

  ngOnInit() {
    this.restaurantService.getAllSpeciality().subscribe(res => this.specialities = res);
  }

  openSearch() : void{
    this.search.nativeElement.style.left = 0;
    this.isOpen = true;
  }

  closeSearch() : void{
    this.search.nativeElement.style.left = '-220px';
    this.isOpen = false;
  }

  getSpecialities(speciality : Speciality) : void{
    if(speciality.checked === true){
      let index = this.filterSpecialities.indexOf(speciality.name);
      this.filterSpecialities.splice(index, 1)
    }else{
      this.filterSpecialities.push(speciality.name);
    }

    this.checkboxValue.emit(this.filterSpecialities);

    speciality.checked = !speciality.checked;
  }

  changeValue(event : any){
    this.inputValue.emit(event.target.value);
  }
}
