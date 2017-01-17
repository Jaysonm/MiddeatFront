import { Component, OnInit } from '@angular/core';
import {RestoService} from "../service/resto.service";
import {Resto} from "../model/Resto";

@Component({
  selector: 'restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.scss']
})
export class RestaurantListComponent implements OnInit {
  restaurants: Array<Resto>;

  constructor(private restoService: RestoService) { }

  ngOnInit() {
    this.restoService.getAll().subscribe(res => this.restaurants = res);
  }

}
