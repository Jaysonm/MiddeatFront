import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestaurantService} from "../../services/restaurant.service";
import {Restaurant} from "../../models/Restaurant";
import {SpecialityImgPipe} from "../../pipes/speciality-img.pipe";
import {GooglemapService} from "../../services/googlemap.service";
import {SpinnerService} from "../../subjects/spinner.subject";
import {Testimonial} from "../../models/Testimonial";

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  providers: [GooglemapService]
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  public resto : Restaurant;
  public lat: number = 0;
  public lng: number = 0;
  public index : number = 0;
  public testimonial : Testimonial;
  public timer;

  constructor(private route : ActivatedRoute, private restoService : RestaurantService, private googlemap : GooglemapService,
              private zone : NgZone, private spinner : SpinnerService) {}

  ngOnInit() {
    this.spinner.start();
    if(this.route.snapshot.params['id']){
      let currentId = this.route.snapshot.params['id'];
      this.restoService.getOneById(currentId).subscribe(res => {
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
    }
  }

  getClassBySpeciality(speciality: string): string {
    let pipeSpe = new SpecialityImgPipe();
    return pipeSpe.transform(speciality);
  };

  ngOnDestroy(){
    clearInterval(this.timer);
  }

}
