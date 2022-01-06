import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImgUrl'
})
export class DefaultImgUrlPipe implements PipeTransform {

  transform(value: string ,def:string): string {
    if(value)
      return value;
      return def;
  }

}
