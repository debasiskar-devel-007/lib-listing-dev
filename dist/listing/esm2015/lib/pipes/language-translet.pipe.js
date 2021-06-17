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
            console.log("this.apiUrl=", this.apiUrl);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
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
    LanguageTransletPipe.prototype.observableService;
    /** @type {?} */
    LanguageTransletPipe.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBTS9CLFlBQW1CLGlCQUEwQyxFQUFRLFVBQXFCO1FBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBSm5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDOzs7WUFJZixXQUFXLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsNEJBQTRCO1FBQzlCLENBQUMsRUFBQzs7OztZQUtELE1BQU0sR0FBSyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLENBQUMsUUFBWSxFQUFDLEVBQUU7WUFDdEUsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhDLENBQUMsRUFBQztJQUNILENBQUM7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQVU7UUFDbEIsMEVBQTBFO1FBQzFFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztTQUNOO1FBQ0QsK0RBQStEO1FBQy9ELG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixNQUFNO1FBQ04sK0VBQStFO1FBRS9FLE9BQU87UUFDUCxJQUFJO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFuREYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7YUFDekI7Ozs7WUFKUSx3QkFBd0I7WUFDeEIsVUFBVTs7OztJQU1qQiwrQ0FBOEI7O0lBQzlCLHFEQUFvQzs7SUFDcEMsc0NBQXFCOztJQUVULGlEQUFpRDs7SUFBQywwQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSBcIi4uL2FwaS5zZXJ2aWNlXCI7XG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXTtcbiAgcHVibGljIGNvbnZlcnRUb0xhbmd1YWdlQ29kZTphbnk9Jyc7XG4gIHB1YmxpYyBhcGlVcmw6YW55PScnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UscHVibGljIGFwaVNlcnZpY2U6QXBpU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZ2V0Y29udmVydFRvQ29kZTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRjb252ZXJ0VG9MYW5ndWFnZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZT1yZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHtQe1BcIixyZXMpO1xuICAgICAgfSk7XG4gICAgLy8gfSwgMTAwKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMubGFuZ3VhZ2VEYXRhU2V0KysrK1wiLHRoaXMubGFuZ3VhZ2VEYXRhU2V0KTtcbiAgIFxuICAgbGV0IGFwaXVybDphbnk9dGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRhcGlVcmwoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSk9PntcbiAgICAgICAgIHRoaXMuYXBpVXJsPXJlc3BvbnNlO1xuICAgY29uc29sZS5sb2coXCJ0aGlzLmFwaVVybD1cIix0aGlzLmFwaVVybCk7XG5cbiAgIH0pXG4gIH1cblxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVcIiwgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbmcgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxbdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVdO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgLy8gaWYgKHR5cGVvZiB2YWx1ZSE9J3VuZGVmaW5lZCcgJiYgdmFsdWUhPW51bGwgJiYgdmFsdWUhPScnKSB7XG4gICAgLy8gICBsZXQgZGF0YTphbnk9e1xuICAgIC8vICAgICBcImRhdGFcIjp7XG4gICAgLy8gICAgICAgXCJlblwiOnZhbHVlXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyAgIHRoaXMuYXBpU2VydmljZS5wb3N0RGF0YUFwaSggdGhpcy5hcGlVcmwsZGF0YSkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpPT57XG4gIFxuICAgIC8vICAgfSlcbiAgICAvLyB9XG4gIFxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=