import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemRestaurantsService} from "./bdd/restaurants";
import {RestaurantService} from "./services/restaurant.service";
import 'assets/rxjs-extensions';
import { RestaurantListComponent } from './components/restaurant-list/restaurant-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { SearchRestoComponent } from './components/search-resto/search-resto.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import {AppRoutingModule} from "./app.routing";
import { SpecialityImgPipe } from './pipes/speciality-img.pipe';
import {AgmCoreModule} from "angular2-google-maps/esm/core";
import { RatingPipe } from './pipes/rating.pipe';
import { RestaurantNoonComponent } from './components/restaurant-noon/restaurant-noon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {SpinnerService} from "./subjects/spinner.subject";
import { ProfilComponent } from './components/profil/profil.component';
import { AccountComponent } from './components/profil/account/account.component';
import { PasswordComponent } from './components/profil/password/password.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { PropositionListComponent } from './components/proposition-list/proposition-list.component';

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
    SpinnerComponent,
    ProfilComponent,
    AccountComponent,
    PasswordComponent,
    PropositionComponent,
    PropositionListComponent,
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
  providers: [RestaurantService, SpinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
