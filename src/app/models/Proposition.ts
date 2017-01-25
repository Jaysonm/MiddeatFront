import {User} from "./User";
export class Proposition {
  public id : number;
  public id_restaurant : number;
  public id_user : number;
  public date : string;

  public participants : User[];
}
