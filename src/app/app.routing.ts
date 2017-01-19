import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {SearchRestoComponent} from "./components/search-resto/search-resto.component";
import {RestaurantDetailComponent} from "./components/restaurant-detail/restaurant-detail.component";

const appRoutes: Routes = [
  { path: 'resto', component:  SearchRestoComponent},
  { path: 'resto/detail/:id', component: RestaurantDetailComponent},
  { path: '',   redirectTo: 'resto', pathMatch: 'full' },
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
