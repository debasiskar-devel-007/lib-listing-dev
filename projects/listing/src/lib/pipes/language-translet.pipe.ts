import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {

  transform(value: any): any {  
  //  var fs = require('fs');

  //   console.log("langulage pipe",value)
  //   fs.writeFile ("input.json", JSON.stringify(value), function(err) {
  //     if (err) throw err;
  //     console.log('complete');
  //     }
  // );
    return "prueba";
  }

}
