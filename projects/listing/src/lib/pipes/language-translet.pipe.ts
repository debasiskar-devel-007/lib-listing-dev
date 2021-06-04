import { Pipe, PipeTransform } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {
 
  public languageDataSet:any=[];

  constructor(public observableService:ObservableserviceService){
    // let serviceData:any;
    let serviceData: any = this.observableService.getmultilingualData().subscribe(res => {
      this.languageDataSet=res;

    });

  }

  transform(value: any): any {  
    console.log("pipe value",value);
    for (let val of this.languageDataSet) {
      if (val.eng == value) {
            return val.es;
          }
    }
    return value;
    return "value";
  }

}
