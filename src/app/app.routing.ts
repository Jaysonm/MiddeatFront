import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {SearchRestoComponent} from "./components/search-resto/search-resto.component";
import {RestaurantDetailComponent} from "./components/restaurant-detail/restaurant-detail.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {PasswordComponent} from "./components/profil/password/password.component";
import {AccountComponent} from "./components/profil/account/account.component";

const appRoutes: Routes = [
  { path: 'resto', children : [
    {path : '', component: SearchRestoComponent},
    {path : ':id', component: RestaurantDetailComponent},
  ]},
  { path: 'favori', component:  SearchRestoComponent},
  { path: 'groupes', component:  ProfilComponent},
  { path: 'profil', children : [
    { path : '', component:  ProfilComponent },
    { path : 'password', component : PasswordComponent, outlet: 'acc'},
    { path : 'account', component : AccountComponent, outlet: 'acc'},
  ]},
  { path: '', redirectTo: 'resto', pathMatch: 'full' },
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
