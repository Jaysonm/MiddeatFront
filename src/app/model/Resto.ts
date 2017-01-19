import {Person} from "./Person";
export class Resto{
  private id : number;
  public name : string ;
  public speciality : string ;

  public position : string;
  public contact : string;

  public rating : number;
  public website : string;

  public testimonials : string[];
  public noon : Person[];
  public visited : Person[];

  public eat : boolean;
}
