import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {RestaurantDetailComponent} from "./components/restaurant/restaurant-detail.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {PasswordComponent} from "./components/profil/password/password.component";
import {AccountComponent} from "./components/profil/account/account.component";
import {PropositionComponent} from "./components/proposition/proposition.component";
import {PropositionListComponent} from "./components/proposition/proposition-list/proposition-list.component";
import {RestaurantListComponent} from "./components/restaurant/restaurant-list/restaurant-list.component";
import {HomeComponent} from "./components/home/home.component";
import {RestaurantFavorisComponent} from "./components/restaurant/restaurant-favoris/restaurant-favoris.component";
import {SigninComponent} from "./components/authentication/signin/signin.component";
import {SignupComponent} from "./components/authentication/signup/signup.component";
import {AuthenticationComponent} from "./components/authentication/authentication.component";
import {AuthGuardService} from "./services/auth-guard.service";

const appRoutes: Routes = [
  { path: 'authentification', component: AuthenticationComponent, children : [
    { path : '', redirectTo: 'signin', pathMatch: 'full'},
    { path : 'signin', component : SigninComponent},
    { path : 'signup', component : SignupComponent},
  ]},
  { path: 'home', component : HomeComponent, canActivate: [AuthGuardService] },
  { path: 'resto', canActivate : [AuthGuardService], children : [
    {path : '', component: RestaurantListComponent},
    {path : ':id', component: RestaurantDetailComponent},
  ]},
  { path: 'favori', component:  RestaurantFavorisComponent, canActivate: [AuthGuardService]},
  { path: 'propositions', canActivate : [AuthGuardService], children : [
    {path : '', component: PropositionListComponent},
    {path : ':id', component: PropositionComponent},
  ]},
  { path: 'groupes', component:  RestaurantListComponent, canActivate: [AuthGuardService]},
  { path: 'profil', component:ProfilComponent, canActivate : [AuthGuardService], children : [
    { path : '', redirectTo: 'account', pathMatch: 'full'},
    { path : 'password', component : PasswordComponent},
    { path : 'account', component : AccountComponent}
  ]},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
