import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {
  public languageDataSet:any=[
    {eng:"Author <br/> Name",es:"Nombre del autor"},
    {eng:"Priority of B",es:"Prioridad de B"},
    {eng:"Blog Title 9",es:"Título del blog 9"},
    {eng:"Active ?",es:"Activa"},
    {eng:"Wrong O 1",es:"Incorrecto O 1"},
    {eng:"Colored Status",es:"Estado coloreado"},
    {eng:"Dated Added",es:"Fecha agregada"},
    {eng:"Created Date with Time 111",es:"Fecha de creación con hora 111"},
    {eng:"Desc",es:"Desc"},
    {eng:"Actions",es:"Comportamiento"}
  ];

  transform(value: any): any {  
    console.log("pipe value",value);
    for (let val of this.languageDataSet) {
      if (val.eng == value) {
            return val.es;
          }
    }
    return value;
  }

}
