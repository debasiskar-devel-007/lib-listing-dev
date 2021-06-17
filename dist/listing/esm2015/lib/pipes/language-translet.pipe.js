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
            console.log("this.apiUrl=", this.apiUrl);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        // alert("op")
        console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDaEYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSTVDLE1BQU0sT0FBTyxvQkFBb0I7Ozs7O0lBTy9CLFlBQW1CLGlCQUEwQyxFQUFRLFVBQXFCO1FBQXZFLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBTG5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7O1lBSWhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDOzs7WUFFSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDeEYsSUFBSSxDQUFDLHFCQUFxQixHQUFDLEdBQUcsQ0FBQztZQUMvQiw0QkFBNEI7UUFDOUIsQ0FBQyxFQUFDOzs7O1lBS0QsTUFBTSxHQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxRQUFZLEVBQUMsRUFBRTtZQUN0RSxJQUFJLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQztZQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFeEMsQ0FBQyxFQUFDO0lBQ0gsQ0FBQzs7Ozs7SUFHRCxTQUFTLENBQUMsS0FBVTtRQUNsQixjQUFjO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEMsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssRUFBRTtnQkFDZixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztTQUNOO1FBQ0QsNEJBQTRCO1FBQzVCLCtEQUErRDtRQUMvRCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1IsTUFBTTtRQUNOLCtFQUErRTtRQUUvRSxPQUFPO1FBQ1AsSUFBSTtRQUNKLDZDQUE2QztRQUM3QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXRERixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6Qjs7OztZQUpRLHdCQUF3QjtZQUN4QixVQUFVOzs7O0lBTWpCLCtDQUE4Qjs7SUFDOUIscURBQW9DOztJQUNwQyxzQ0FBcUI7O0lBQ3JCLHVDQUFzQjs7SUFFVixpREFBaUQ7O0lBQUMsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuLi9hcGkuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG4gIHB1YmxpYyBjb252ZXJ0VG9MYW5ndWFnZUNvZGU6YW55PScnO1xuICBwdWJsaWMgYXBpVXJsOmFueT0nJztcbiAgcHVibGljIGRhdGFTZXQ6YW55PVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UscHVibGljIGFwaVNlcnZpY2U6QXBpU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZ2V0Y29udmVydFRvQ29kZTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRjb252ZXJ0VG9MYW5ndWFnZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZT1yZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHtQe1BcIixyZXMpO1xuICAgICAgfSk7XG4gICAgLy8gfSwgMTAwKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMubGFuZ3VhZ2VEYXRhU2V0KysrK1wiLHRoaXMubGFuZ3VhZ2VEYXRhU2V0KTtcbiAgIFxuICAgbGV0IGFwaXVybDphbnk9dGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRhcGlVcmwoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSk9PntcbiAgICAgICAgIHRoaXMuYXBpVXJsPXJlc3BvbnNlO1xuICAgY29uc29sZS5sb2coXCJ0aGlzLmFwaVVybD1cIix0aGlzLmFwaVVybCk7XG5cbiAgIH0pXG4gIH1cblxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgXG4gICAgLy8gYWxlcnQoXCJvcFwiKVxuICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXCIsIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW4gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxbdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVdO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5kYXRhU2V0LnB1c2godmFsdWUpO1xuICAgIC8vIGlmICh0eXBlb2YgdmFsdWUhPSd1bmRlZmluZWQnICYmIHZhbHVlIT1udWxsICYmIHZhbHVlIT0nJykge1xuICAgIC8vICAgbGV0IGRhdGE6YW55PXtcbiAgICAvLyAgICAgXCJkYXRhXCI6e1xuICAgIC8vICAgICAgIFwiZW5cIjp2YWx1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGFBcGkoIHRoaXMuYXBpVXJsLGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6YW55KT0+e1xuICBcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZGF0YVNldFwiLCB0aGlzLmRhdGFTZXQpXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==