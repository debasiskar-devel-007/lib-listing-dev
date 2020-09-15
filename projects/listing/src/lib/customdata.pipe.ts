import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'CustomPipe'
})
export class CustomdataPipe implements PipeTransform {

  transform(value: any, name: any, val: any): any {
    // let newStr = `${before} ${value} ${after}`;
    // console.log(value,name,val,'pipe++++++++++====')

    // if (name == 'description_html') {
    //   // console.log(val.length, 'desc====')
    //   var str = val.substring(0, 200) +'....';
    //   return str;
    // } else {
    //   return val
    // }

    if (name.match(/dollar/g) == 'dollar' || name.match(/currency/g) == 'currency' ) {
      var dollar = '$ ' + val;
      return dollar;
    } else {
      return val
    }

  }

}
