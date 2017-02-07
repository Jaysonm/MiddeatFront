import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, arg1: any, arg2:any): any {
    let valueInput : string = arg1;
    let valueCheckbox : string[] = arg2;

    if(value){
      if(valueInput.length > 0 && valueCheckbox && valueCheckbox.length > 0){
        return value.filter(item => {
          for(let checkbox of valueCheckbox){
            if(item.speciality.indexOf(checkbox) > -1 && item.name.toLowerCase().indexOf(valueInput.toLowerCase()) > -1){ return true }
          }
        });
      }
      if(valueInput.length > 0){
        return value.filter(item => item.name.toLowerCase().indexOf(valueInput.toLowerCase()) > -1);
      }
      else if(valueCheckbox && valueCheckbox.length > 0){
        return value.filter(item => {
          for(let checkbox of valueCheckbox){
            if(item.speciality.indexOf(checkbox) > -1){ return true }
          }
        });
      }
      else{
        return value;
      }
    }
  }

}
