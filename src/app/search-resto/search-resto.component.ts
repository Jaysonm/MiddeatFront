import { Component, OnInit } from '@angular/core';
import {RestoService} from "../service/resto.service";
import {Speciality} from "../model/Speciality";

@Component({
  selector: 'search-resto',
  templateUrl: './search-resto.component.html',
  styleUrls: ['./search-resto.component.scss']
})
export class SearchRestoComponent implements OnInit {
  public searchInput : string = '';
  public specialities : Speciality[];
  public checkSpecialities : string[];

  constructor(private restoService: RestoService) {
    this.restoService.getAllSpeciality().subscribe(res => this.specialities = res);
  }

  ngOnInit() {}

  changeValue(event : any){
    this.searchInput = event.target.value;
  }
}
