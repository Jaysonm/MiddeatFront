import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchProp'
})
export class SearchPropPipe implements PipeTransform {

  transform(value: any, arg1: any, arg2:any): any {
    let valueInput : string = arg1;
    let valueCheckbox : string = arg2;

    if(value){
      if(valueInput && valueInput.length > 0){
        return value.filter(item => item.restaurant.name.toLowerCase().indexOf(valueInput.toLowerCase()) > -1);
      }
      else if(valueCheckbox){
        return value.filter(item => item.user_creator.id === valueCheckbox);
      }
      else{
        return value;
      }
    }
  }

}
