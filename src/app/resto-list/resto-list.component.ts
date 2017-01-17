import { Component, OnInit } from '@angular/core';
import {RestoService} from "../service/resto.service";
import {Resto} from "../model/Resto";

@Component({
  selector: 'resto-list',
  templateUrl: './resto-list.component.html',
  styleUrls: ['./resto-list.component.scss']
})
export class RestoListComponent implements OnInit {
  restos : Resto[];

  constructor(private restoService : RestoService){ }

  ngOnInit() : void{
    this.restoService.getAll().subscribe(res => this.restos = res);
  }

}
