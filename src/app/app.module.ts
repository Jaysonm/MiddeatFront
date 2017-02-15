import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemRestaurantsService} from "./bdd/restaurants";
import {RestaurantService} from "./services/restaurant.service";
import 'assets/rxjs-extensions';
import { RestaurantListComponent } from './components/restaurant/restaurant-list/restaurant-list.component';
import { SearchPipe } from './pipes/search.pipe';
import { RestaurantDetailComponent } from './components/restaurant/restaurant-detail.component';
import {AppRoutingModule} from "./app.routing";
import { SpecialityImgPipe } from './pipes/speciality-img.pipe';
import {AgmCoreModule} from "angular2-google-maps/esm/core";
import { RatingPipe } from './pipes/rating.pipe';
import { RestaurantNoonComponent } from './components/restaurant/restaurant-noon/restaurant-noon.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import {SpinnerService} from "./subjects/spinner.subject";
import { ProfilComponent } from './components/profil/profil.component';
import { AccountComponent } from './components/profil/account/account.component';
import { PasswordComponent } from './components/profil/password/password.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { PropositionListComponent } from './components/proposition/proposition-list/proposition-list.component';
import {UserService} from "./services/user.service";
import {AppNgbootstrapModule} from "./app.ngboostrap";
import { PropositionSearchComponent } from './components/proposition/proposition-search/proposition-search.component';
import { SearchPropPipe } from './pipes/search-prop.pipe';
import { PropositionModalComponent } from './components/proposition/proposition-modal/proposition-modal.component';
import { RestaurantSearchComponent } from './components/restaurant/restaurant-search/restaurant-search.component';
import { HomeComponent } from './components/home/home.component';
import { LeftSideComponent } from './components/home/left-side/left-side.component';
import { RightSideComponent } from './components/home/right-side/right-side.component';
import { CenterComponent } from './components/home/center/center.component';
import {WebsocketService} from "./services/websocket/websocket.service";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantListComponent,
    SearchPipe,
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
    PropositionSearchComponent,
    SearchPropPipe,
    PropositionModalComponent,
    RestaurantSearchComponent,
    HomeComponent,
    LeftSideComponent,
    RightSideComponent,
    CenterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AppNgbootstrapModule,
    InMemoryWebApiModule.forRoot(InMemRestaurantsService, {passThruUnknownUrl: true}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCXf5ZXZV197IxJYO1_mpIRQ2DgVYwDXwI'
    })
  ],
  providers: [RestaurantService, SpinnerService, UserService, WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule {}
