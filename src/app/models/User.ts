export class User{
  public id : number;
  public firstname : string;
  public lastname : string;

  public email : string;
  public phone : string;

  public address : string;
  public city : string;
  public cp : number;

  public bu : string;
  public poste : string;

  public id_proposition : number;

  public toString() : string{
    return "{ id : " + this.id + " } "
  }
}
