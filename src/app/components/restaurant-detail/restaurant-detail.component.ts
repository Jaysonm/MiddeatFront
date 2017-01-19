import {Component, OnInit, NgZone, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {RestoService} from "../../service/resto.service";
import {Resto} from "../../model/Resto";
import {SpecialityImgPipe} from "../../pipe/speciality-img.pipe";
import {GooglemapService} from "../../service/googlemap.service";

@Component({
  selector: 'restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
  providers: [GooglemapService]
})
export class RestaurantDetailComponent implements OnInit, OnDestroy {
  public resto : Resto;
  public lat: number = 0;
  public lng: number = 0;
  public index : number = 0;
  public testimonial : string;
  public timer;

  constructor(private route : ActivatedRoute, private restoService : RestoService, private googlemap : GooglemapService,
              private zone : NgZone) {}

  ngOnInit() {
    if(this.route.snapshot.params['id']){
      let currentId = this.route.snapshot.params['id'];
      this.restoService.getOneById(currentId).subscribe(res => {
        this.resto = res;

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
