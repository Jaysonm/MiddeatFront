import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemRestaurantsService} from "./bdd/restaurants";
import {RestoService} from "./service/resto.service";
import 'assets/rxjs-extensions';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { SearchPipe } from './pipe/search.pipe';
import { SearchRestoComponent } from './components/search-resto/search-resto.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import {AppRoutingModule} from "./app.routing";
import { SpecialityImgPipe } from './pipe/speciality-img.pipe';
import {AgmCoreModule} from "angular2-google-maps/esm/core";
import { RatingPipe } from './pipe/rating.pipe';
import { RestaurantNoonComponent } from './components/restaurant-noon/restaurant-noon.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    SearchPipe,
    SearchRestoComponent,
    RestaurantDetailComponent,
    SpecialityImgPipe,
    RatingPipe,
    RestaurantNoonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemRestaurantsService, {passThruUnknownUrl: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXf5ZXZV197IxJYO1_mpIRQ2DgVYwDXwI'
    })
  ],
  providers: [RestoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
