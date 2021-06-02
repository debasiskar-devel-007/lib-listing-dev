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
    {eng:"Actions",es:"Comportamiento"},
    {eng:"fb search with blog title",es:"búsqueda de fb con título de blog"}, /* actions button set start here*/
    {eng:"mask blog",es:"blog de máscara"},
    {eng:"downLoad Pdf",es:"Descargar PDF"},
    {eng:"fb profile",es:"perfil de fb"},
    {eng:"fb profile for inactive",es:"perfil de fb para inactivo"},
    {eng:"fb profile for active",es:"perfil de fb para activo"},
    {eng:"see brand",es:"ver marca"},
    {eng:"delete",es:"Eliminar"},
    {eng:"see brand with param",es:"ver marca con param"},
    {eng:"Desc from data",es:"Desc de datos"},
    {eng:"Desc from api data",es:"Desc de datos api"},
    {eng:"fb search with blog title",es:"fb buscar con el título del blog"},
    {eng:"Custom B Listner",es:"Listador B personalizado"},
    {eng:"G search with blog title ACtive",es:"Búsqueda de G con título de blog ACtive"},
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
