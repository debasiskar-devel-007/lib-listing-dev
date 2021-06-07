import { Pipe, PipeTransform } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {
 
  public languageDataSet:any=[];
  public convertToLanguageCode:any='';

  constructor(public observableService:ObservableserviceService){
    // let serviceData:any;
    let serviceData: any = this.observableService.getmultilingualData().subscribe(res => {
      this.languageDataSet=res;

    });
    // setTimeout(() => {
      let getconvertToCode: any = this.observableService.getconvertToLanguage().subscribe(res => {
        this.convertToLanguageCode=res;
        console.log("P{P{P",res);
      });
    // }, 100);
    
    console.log("this.languageDataSet++++",this.languageDataSet);
   

  }

  transform(value: any): any { 
    console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
    for (let val of this.languageDataSet) {
      if (val.eng == value) {
            return val[this.convertToLanguageCode];
          }
    }
    return value;
  }

}
