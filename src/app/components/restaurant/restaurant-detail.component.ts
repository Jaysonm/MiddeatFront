import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../services/components/restaurant.service";
import {Restaurant} from "../../models/Restaurant";
import {SpecialityImgPipe} from "../../pipes/speciality-img.pipe";
import {GooglemapService} from "../../services/googlemap.service";
import {SpinnerService} from "../../subjects/spinner.subject";
import {Testimonial} from "../../models/Testimonial";
import {Location} from "@angular/common";
import {FavorisService} from "../../services/components/favoris.service";
import {Favoris} from "../../models/Favoris";

@Component({
  selector: 'restaurant-detail',
  templateUrl: 'restaurant-detail.component.html',
  styleUrls: ['restaurant-detail.component.scss'],
  providers: [GooglemapService, FavorisService]
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  public resto : Restaurant;
  public lat: number = 0;
  public lng: number = 0;
  public index : number = 0;
  public testimonial : Testimonial;
  public isFavoris : boolean;

  private timer;
  private currentIdResto : number;
  private currentUser : number = parseInt(localStorage.getItem('user'));
  private favoris : Favoris;

  constructor(private route : ActivatedRoute, private restoService : RestaurantService, private googlemap : GooglemapService,
              private zone : NgZone, private spinner : SpinnerService, private location : Location, private favorisService : FavorisService) {}

  ngOnInit() {
    this.spinner.start();
    if(this.route.snapshot.params['id']){
      this.currentIdResto = this.route.snapshot.params['id'];
      this.restoService.getOneById(this.currentIdResto).subscribe(res => {
        this.resto = res;
        this.spinner.stop();

        if(res.testimonials){
          this.testimonial = res.testimonials[0];
          this.timer = setInterval(() => {
            this.index === res.testimonials.length - 1 ? this.index = 0 : this.index++;
            this.testimonial = res.testimonials[this.index];
          }, 5000);
        }

        this.googlemap.getLocalisation(this.resto.position).subscribe(loc =>
        {
          this.zone.run(() => {
            this.lat = loc.geometry.location.lat;
            this.lng = loc.geometry.location.lng;
          });
        })
      });

      this.favoris = new Favoris(this.currentUser, this.currentIdResto);
      this.favorisService.restaurantIsFavorite(this.favoris).subscribe(res => {res ? this.isFavoris = true : this.isFavoris  = false});
    }
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };

  goBack() : void{
    this.location.back();
  }

  addFavoris(){
    this.isFavoris = true;
    this.favorisService.addFavorite(this.favoris).subscribe();
  }

  removeFavoris(){
    this.isFavoris = false;
    this.favorisService.deleteFavorite(this.favoris).subscribe();
  }

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
