import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {

  transform(value: any): any {
    console.log("langulage pipe",value)
    return "prueba";
  }

}
