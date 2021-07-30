/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
import { ApiService } from "../api.service";
export class LanguageTransletPipe {
    /**
     * @param {?} observableService
     * @param {?} apiService
     */
    constructor(observableService, apiService) {
        this.observableService = observableService;
        this.apiService = apiService;
        this.languageDataSet = [];
        this.convertToLanguageCode = '';
        this.apiUrl = '';
        this.dataSet = [];
        // let serviceData:any;
        /** @type {?} */
        let serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.languageDataSet = res;
        }));
        // setTimeout(() => {
        /** @type {?} */
        let getconvertToCode = this.observableService.getconvertToLanguage().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.convertToLanguageCode = res;
            // console.log("P{P{P",res);
        }));
        // }, 100);
        // console.log("this.languageDataSet++++",this.languageDataSet);
        /** @type {?} */
        let apiurl = this.observableService.getapiUrl().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        (response) => {
            this.apiUrl = response;
            //  console.log("this.apiUrl=",this.apiUrl);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        // alert("op")
        // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
        for (let val of this.languageDataSet) {
            if (val.en == value) {
                return val[this.convertToLanguageCode];
            }
        }
        // this.dataSet.push(value);
        // if (typeof value!='undefined' && value!=null && value!='') {
        //   let data:any={
        //     "data":{
        //       "en":value
        //     }
        //   }
        //   this.apiService.postDataApi( this.apiUrl,data).subscribe((response:any)=>{
        //   })
        // }
        // console.log(" this.dataSet", this.dataSet)
        return value;
    }
}
LanguageTransletPipe.decorators = [
    { type: Pipe, args: [{
                name: 'languageTranslet'
            },] }
];
/** @nocollapse */
LanguageTransletPipe.ctorParameters = () => [
    { type: ObservableserviceService },
    { type: ApiService }
];
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
    /** @type {?} */
    LanguageTransletPipe.prototype.convertToLanguageCode;
    /** @type {?} */
    LanguageTransletPipe.prototype.apiUrl;
    /** @type {?} */
    LanguageTransletPipe.prototype.dataSet;
    /** @type {?} */
    LanguageTransletPipe.prototype.observableService;
    /** @type {?} */
    LanguageTransletPipe.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBTy9CLFlBQW1CLGlCQUEwQyxFQUFRLFVBQXFCO1FBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBTG5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7O1lBSWhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDOzs7WUFFSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEYsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEdBQUcsQ0FBQztZQUMvQiw0QkFBNEI7UUFDOUIsQ0FBQyxFQUFDOzs7O1lBS0QsTUFBTSxHQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFZLEVBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQztZQUM1Qiw0Q0FBNEM7UUFFM0MsQ0FBQyxFQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBVTtRQUNsQixjQUFjO1FBQ2QsMEVBQTBFO1FBQzFFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxFQUFFO2dCQUNmLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3hDO1NBQ047UUFDRCw0QkFBNEI7UUFDNUIsK0RBQStEO1FBQy9ELG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixNQUFNO1FBQ04sK0VBQStFO1FBRS9FLE9BQU87UUFDUCxJQUFJO1FBQ0osNkNBQTZDO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBdERGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCOzs7O1lBSlEsd0JBQXdCO1lBQ3hCLFVBQVU7Ozs7SUFNakIsK0NBQThCOztJQUM5QixxREFBb0M7O0lBQ3BDLHNDQUFxQjs7SUFDckIsdUNBQXNCOztJQUVWLGlEQUFpRDs7SUFBQywwQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwaS5zZXJ2aWNlXCI7XG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXTtcbiAgcHVibGljIGNvbnZlcnRUb0xhbmd1YWdlQ29kZTphbnk9Jyc7XG4gIHB1YmxpYyBhcGlVcmw6YW55PScnO1xuICBwdWJsaWMgZGF0YVNldDphbnk9W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGVTZXJ2aWNlOk9ic2VydmFibGVzZXJ2aWNlU2VydmljZSxwdWJsaWMgYXBpU2VydmljZTpBcGlTZXJ2aWNlKXtcbiAgICAvLyBsZXQgc2VydmljZURhdGE6YW55O1xuICAgIGxldCBzZXJ2aWNlRGF0YTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRtdWx0aWxpbmd1YWxEYXRhKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlRGF0YVNldD1yZXM7XG5cbiAgICB9KTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBnZXRjb252ZXJ0VG9Db2RlOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldGNvbnZlcnRUb0xhbmd1YWdlKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlPXJlcztcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJQe1B7UFwiLHJlcyk7XG4gICAgICB9KTtcbiAgICAvLyB9LCAxMDApO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZURhdGFTZXQrKysrXCIsdGhpcy5sYW5ndWFnZURhdGFTZXQpO1xuICAgXG4gICBsZXQgYXBpdXJsOmFueT10aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldGFwaVVybCgpLnN1YnNjcmliZSgocmVzcG9uc2U6YW55KT0+e1xuICAgICAgICAgdGhpcy5hcGlVcmw9cmVzcG9uc2U7XG4gIC8vICBjb25zb2xlLmxvZyhcInRoaXMuYXBpVXJsPVwiLHRoaXMuYXBpVXJsKTtcblxuICAgfSlcbiAgfVxuXG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkgeyBcbiAgICAvLyBhbGVydChcIm9wXCIpXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVcIiwgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbiA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbFt0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZV07XG4gICAgICAgICAgfVxuICAgIH1cbiAgICAvLyB0aGlzLmRhdGFTZXQucHVzaCh2YWx1ZSk7XG4gICAgLy8gaWYgKHR5cGVvZiB2YWx1ZSE9J3VuZGVmaW5lZCcgJiYgdmFsdWUhPW51bGwgJiYgdmFsdWUhPScnKSB7XG4gICAgLy8gICBsZXQgZGF0YTphbnk9e1xuICAgIC8vICAgICBcImRhdGFcIjp7XG4gICAgLy8gICAgICAgXCJlblwiOnZhbHVlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YUFwaSggdGhpcy5hcGlVcmwsZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpPT57XG4gIFxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5kYXRhU2V0XCIsIHRoaXMuZGF0YVNldClcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19