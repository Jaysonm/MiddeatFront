import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemRestaurantsService} from "./bdd/restaurants";
import {RestoService} from "./service/resto.service";
import { RestoListComponent } from './resto-list/resto-list.component';
import 'assets/rxjs-extensions';

@NgModule({
  declarations: [
    AppComponent,
    RestoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemRestaurantsService)
  ],
  providers: [RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
