export class Favoris {
  public user_id : number;
  public restaurant_id : number;

  constructor(user, restaurant){
    this.user_id = user;
    this.restaurant_id = restaurant;
  }
}
