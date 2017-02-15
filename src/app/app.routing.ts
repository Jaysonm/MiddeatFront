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

const appRoutes: Routes = [
  { path: 'home', component : HomeComponent },
  { path: 'resto', children : [
    {path : '', component: RestaurantListComponent},
    {path : ':id', component: RestaurantDetailComponent},
  ]},
  { path: 'favori', component:  RestaurantListComponent},
  { path: 'propositions', children : [
    {path : '', component: PropositionListComponent},
    {path : ':id', component: PropositionComponent},
  ]},
  { path: 'groupes', component:  RestaurantListComponent},
  { path: 'profil', component:ProfilComponent, children : [
    { path : '', redirectTo: 'account', pathMatch: 'full'},
    { path : 'password', component : PasswordComponent},
    { path : 'account', component : AccountComponent},
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
