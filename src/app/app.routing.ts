import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {SearchRestoComponent} from "./components/search-resto/search-resto.component";
import {RestaurantDetailComponent} from "./components/restaurant-detail/restaurant-detail.component";
import {ProfilComponent} from "./components/profil/profil.component";
import {PasswordComponent} from "./components/profil/password/password.component";
import {AccountComponent} from "./components/profil/account/account.component";
import {PropositionComponent} from "./components/proposition/proposition.component";
import {PropositionListComponent} from "./components/proposition-list/proposition-list.component";

const appRoutes: Routes = [
  { path: 'resto', children : [
    {path : '', component: SearchRestoComponent},
    {path : ':id', component: RestaurantDetailComponent},
  ]},
  { path: 'favori', component:  SearchRestoComponent},
  { path: 'propositions', children : [
    {path : '', component: PropositionListComponent},
    {path : ':id', component: PropositionComponent},
  ]},
  { path: 'groupes', component:  SearchRestoComponent},
  { path: 'profil', component:ProfilComponent, children : [
    { path : '', redirectTo: 'account', pathMatch: 'full'},
    { path : 'password', component : PasswordComponent},
    { path : 'account', component : AccountComponent},
  ]},
  { path: '', redirectTo: 'resto', pathMatch: 'full' },
  { path: '**', redirectTo: 'resto', pathMatch: 'full' },
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
