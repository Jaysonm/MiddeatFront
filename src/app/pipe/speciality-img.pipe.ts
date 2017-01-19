import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'specialityImg'
})
export class SpecialityImgPipe implements PipeTransform {

  transform(value: any, args?: string): any {
    let urlImage = 'app/images';

    if(value){
      if (value === 'Italien') {
        return `${urlImage}/pizza.jpg`;
      }
      else if (value === 'Toulousain') {
        return `${urlImage}/toulouse.jpg`
      }
      else if (value.indexOf('volonté') > -1) {
        return `${urlImage}/volonte.jpg`;
      }
      else if (value.indexOf('Savoyarde') > -1) {
        return `${urlImage}/savoyarde.jpg`;
      }
      else if (value.indexOf('Restauration') > -1) {
        return `${urlImage}/chaineresto.jpg`;
      }
      else if (value === 'Americain') {
        return `${urlImage}/americain.jpg`;
      }
      else {
        return `${urlImage}/tout.jpg`;
      }
    }
  }

}
