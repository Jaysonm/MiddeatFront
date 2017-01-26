import {User} from "./User";
import {Restaurant} from "./Restaurant";
export class Proposition {
  public id : number;
  public restaurant : Restaurant;
  public user_creator : User;
  public date : string;

  public participants : User[];
}
