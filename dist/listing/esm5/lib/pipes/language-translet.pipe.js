/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
import { ApiService } from "../api.service";
var LanguageTransletPipe = /** @class */ (function () {
    function LanguageTransletPipe(observableService, apiService) {
        var _this = this;
        this.observableService = observableService;
        this.apiService = apiService;
        this.languageDataSet = [];
        this.convertToLanguageCode = '';
        this.apiUrl = '';
        this.dataSet = [];
        // let serviceData:any;
        /** @type {?} */
        var serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.languageDataSet = res;
        }));
        // setTimeout(() => {
        /** @type {?} */
        var getconvertToCode = this.observableService.getconvertToLanguage().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.convertToLanguageCode = res;
            // console.log("P{P{P",res);
        }));
        // }, 100);
        // console.log("this.languageDataSet++++",this.languageDataSet);
        /** @type {?} */
        var apiurl = this.observableService.getapiUrl().subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            _this.apiUrl = response;
            //  console.log("this.apiUrl=",this.apiUrl);
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    LanguageTransletPipe.prototype.transform = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var e_1, _a;
        try {
            // alert("op")
            // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
            for (var _b = tslib_1.__values(this.languageDataSet), _c = _b.next(); !_c.done; _c = _b.next()) {
                var val = _c.value;
                if (val.en == value) {
                    return val[this.convertToLanguageCode];
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
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
    };
    LanguageTransletPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'languageTranslet'
                },] }
    ];
    /** @nocollapse */
    LanguageTransletPipe.ctorParameters = function () { return [
        { type: ObservableserviceService },
        { type: ApiService }
    ]; };
    return LanguageTransletPipe;
}());
export { LanguageTransletPipe };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QztJQVVFLDhCQUFtQixpQkFBMEMsRUFBUSxVQUFxQjtRQUExRixpQkFvQkM7UUFwQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBTG5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7O1lBSWhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQy9FLEtBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUNyRixLQUFJLENBQUMscUJBQXFCLEdBQUMsR0FBRyxDQUFDO1lBQy9CLDRCQUE0QjtRQUM5QixDQUFDLEVBQUM7Ozs7WUFLRCxNQUFNLEdBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVk7WUFDbkUsS0FBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7WUFDNUIsNENBQTRDO1FBRTNDLENBQUMsRUFBQztJQUNILENBQUM7Ozs7O0lBR0Qsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7OztZQUNsQixjQUFjO1lBQ2QsMEVBQTBFO1lBQzFFLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksS0FBSyxFQUFFO29CQUNmLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN4QzthQUNOOzs7Ozs7Ozs7UUFDRCw0QkFBNEI7UUFDNUIsK0RBQStEO1FBQy9ELG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixNQUFNO1FBQ04sK0VBQStFO1FBRS9FLE9BQU87UUFDUCxJQUFJO1FBQ0osNkNBQTZDO1FBQzdDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBdERGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7OztnQkFKUSx3QkFBd0I7Z0JBQ3hCLFVBQVU7O0lBeURuQiwyQkFBQztDQUFBLEFBeERELElBd0RDO1NBckRZLG9CQUFvQjs7O0lBRS9CLCtDQUE4Qjs7SUFDOUIscURBQW9DOztJQUNwQyxzQ0FBcUI7O0lBQ3JCLHVDQUFzQjs7SUFFVixpREFBaUQ7O0lBQUMsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuLi9hcGkuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG4gIHB1YmxpYyBjb252ZXJ0VG9MYW5ndWFnZUNvZGU6YW55PScnO1xuICBwdWJsaWMgYXBpVXJsOmFueT0nJztcbiAgcHVibGljIGRhdGFTZXQ6YW55PVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UscHVibGljIGFwaVNlcnZpY2U6QXBpU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZ2V0Y29udmVydFRvQ29kZTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRjb252ZXJ0VG9MYW5ndWFnZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZT1yZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHtQe1BcIixyZXMpO1xuICAgICAgfSk7XG4gICAgLy8gfSwgMTAwKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMubGFuZ3VhZ2VEYXRhU2V0KysrK1wiLHRoaXMubGFuZ3VhZ2VEYXRhU2V0KTtcbiAgIFxuICAgbGV0IGFwaXVybDphbnk9dGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRhcGlVcmwoKS5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSk9PntcbiAgICAgICAgIHRoaXMuYXBpVXJsPXJlc3BvbnNlO1xuICAvLyAgY29uc29sZS5sb2coXCJ0aGlzLmFwaVVybD1cIix0aGlzLmFwaVVybCk7XG5cbiAgIH0pXG4gIH1cblxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgXG4gICAgLy8gYWxlcnQoXCJvcFwiKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXCIsIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW4gPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxbdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVdO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgLy8gdGhpcy5kYXRhU2V0LnB1c2godmFsdWUpO1xuICAgIC8vIGlmICh0eXBlb2YgdmFsdWUhPSd1bmRlZmluZWQnICYmIHZhbHVlIT1udWxsICYmIHZhbHVlIT0nJykge1xuICAgIC8vICAgbGV0IGRhdGE6YW55PXtcbiAgICAvLyAgICAgXCJkYXRhXCI6e1xuICAgIC8vICAgICAgIFwiZW5cIjp2YWx1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGFBcGkoIHRoaXMuYXBpVXJsLGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6YW55KT0+e1xuICBcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuZGF0YVNldFwiLCB0aGlzLmRhdGFTZXQpXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==