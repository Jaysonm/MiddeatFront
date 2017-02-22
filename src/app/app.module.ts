import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule, XHRBackend, RequestOptions} from "@angular/http";
import {AppComponent} from "./app.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemRestaurantsService} from "./bdd/restaurants";
import {RestaurantService} from "./services/components/restaurant.service";
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
import {UserService} from "./services/components/user.service";
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
import { RestaurantFavorisComponent } from './components/restaurant/restaurant-favoris/restaurant-favoris.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { SigninComponent } from './components/authentication/signin/signin.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import {AuthenticationService} from "./services/components/authentication.service";
import {AuthGuardService} from "./services/auth-guard.service";
import {LoggedService} from "./subjects/logged.subject";
import {HttpInterceptorService} from "./services/http-interceptor.service";
import {Router} from "@angular/router";
import { EditComponent } from './components/profil/account/edit/edit.component';

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
    RestaurantFavorisComponent,
    AuthenticationComponent,
    SigninComponent,
    SignupComponent,
    EditComponent,
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
  providers: [RestaurantService, SpinnerService, UserService, WebsocketService, AuthenticationService, AuthGuardService, LoggedService,
    {
      provide: HttpInterceptorService,
      useFactory: httpFactory,
      deps: [XHRBackend, RequestOptions, Router ]
    }],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function httpFactory(backend: XHRBackend, defaultOptions: RequestOptions) {
  return new HttpInterceptorService(backend, defaultOptions);
}
