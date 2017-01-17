import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let valueInput : string = args;

    if(valueInput.length > 0){
      return value.filter(item => item.name.indexOf(valueInput) > -1)
    }
    else{
      return value;
    }
  }

}
