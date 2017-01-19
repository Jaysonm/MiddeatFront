import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let stars: string = '';
    for (let i = 0; i < value; i++) { stars += '☆'; }
    return stars;
  }

}
