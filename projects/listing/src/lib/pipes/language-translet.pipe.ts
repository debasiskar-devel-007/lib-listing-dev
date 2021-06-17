import { Pipe, PipeTransform } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
import { ApiService } from "../api.service";
@Pipe({
  name: 'languageTranslet'
})
export class LanguageTransletPipe implements PipeTransform {
 
  public languageDataSet:any=[];
  public convertToLanguageCode:any='';
  public apiUrl:any='';

  constructor(public observableService:ObservableserviceService,public apiService:ApiService){
    // let serviceData:any;
    let serviceData: any = this.observableService.getmultilingualData().subscribe(res => {
      this.languageDataSet=res;

    });
    // setTimeout(() => {
      let getconvertToCode: any = this.observableService.getconvertToLanguage().subscribe(res => {
        this.convertToLanguageCode=res;
        // console.log("P{P{P",res);
      });
    // }, 100);
    
    // console.log("this.languageDataSet++++",this.languageDataSet);
   
   let apiurl:any=this.observableService.getapiUrl().subscribe((response:any)=>{
         this.apiUrl=response;
   console.log("this.apiUrl=",this.apiUrl);

   })
  }


  transform(value: any): any { 
    // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
    for (let val of this.languageDataSet) {
      if (val.eng == value) {
            return val[this.convertToLanguageCode];
          }
    }
    // if (typeof value!='undefined' && value!=null && value!='') {
    //   let data:any={
    //     "data":{
    //       "en":value
    //     }
    //   }
    //   this.apiService.postDataApi( this.apiUrl,data).subscribe((response:any)=>{
  
    //   })
    // }
  
    return value;
  }

}
