import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDtoEgy'
})
export class USDtoEgyPipe implements PipeTransform {

  transform(value:number,changeRate:number = 15.7): number {
    return (+value*changeRate);
  }

}
