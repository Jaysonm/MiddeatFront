import {Component, OnInit} from '@angular/core';
import {RestoService} from "./service/resto.service";
import {Resto} from "./model/Resto";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  restos : Array<Resto>;

  constructor(private restoService : RestoService){

  }

  ngOnInit() : void{
    this.restoService.getAll().subscribe(res => console.log(res));
  }
}
