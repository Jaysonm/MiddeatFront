import {Testimonial} from "./Testimonial";
import {MenuItem} from "./MenuItem";
export class Restaurant{
  public id : number;
  public name : string ;
  public speciality : string ;

  public position : string;
  public contact : string;

  public rating : number;
  public website : string;

  public testimonials : Testimonial[];
  public menus : MenuItem[];

  public favorite : boolean;
}
