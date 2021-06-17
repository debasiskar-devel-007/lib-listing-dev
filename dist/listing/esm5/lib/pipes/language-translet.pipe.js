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
            console.log("this.apiUrl=", _this.apiUrl);
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
            // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
            for (var _b = tslib_1.__values(this.languageDataSet), _c = _b.next(); !_c.done; _c = _b.next()) {
                var val = _c.value;
                if (val.eng == value) {
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
    LanguageTransletPipe.prototype.observableService;
    /** @type {?} */
    LanguageTransletPipe.prototype.apiService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QztJQVNFLDhCQUFtQixpQkFBMEMsRUFBUSxVQUFxQjtRQUExRixpQkFvQkM7UUFwQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBSm5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDOzs7WUFJZixXQUFXLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUMvRSxLQUFJLENBQUMsZUFBZSxHQUFDLEdBQUcsQ0FBQztRQUUzQixDQUFDLEVBQUM7OztZQUVJLGdCQUFnQixHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDckYsS0FBSSxDQUFDLHFCQUFxQixHQUFDLEdBQUcsQ0FBQztZQUMvQiw0QkFBNEI7UUFDOUIsQ0FBQyxFQUFDOzs7O1lBS0QsTUFBTSxHQUFLLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxRQUFZO1lBQ25FLEtBQUksQ0FBQyxNQUFNLEdBQUMsUUFBUSxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV4QyxDQUFDLEVBQUM7SUFDSCxDQUFDOzs7OztJQUdELHdDQUFTOzs7O0lBQVQsVUFBVSxLQUFVOzs7WUFDbEIsMEVBQTBFO1lBQzFFLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDeEM7YUFDTjs7Ozs7Ozs7O1FBQ0QsK0RBQStEO1FBQy9ELG1CQUFtQjtRQUNuQixlQUFlO1FBQ2YsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixNQUFNO1FBQ04sK0VBQStFO1FBRS9FLE9BQU87UUFDUCxJQUFJO1FBRUosT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFuREYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7O2dCQUpRLHdCQUF3QjtnQkFDeEIsVUFBVTs7SUFzRG5CLDJCQUFDO0NBQUEsQUFyREQsSUFxREM7U0FsRFksb0JBQW9COzs7SUFFL0IsK0NBQThCOztJQUM5QixxREFBb0M7O0lBQ3BDLHNDQUFxQjs7SUFFVCxpREFBaUQ7O0lBQUMsMENBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gXCIuLi9hcGkuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG4gIHB1YmxpYyBjb252ZXJ0VG9MYW5ndWFnZUNvZGU6YW55PScnO1xuICBwdWJsaWMgYXBpVXJsOmFueT0nJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6T2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlLHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2Upe1xuICAgIC8vIGxldCBzZXJ2aWNlRGF0YTphbnk7XG4gICAgbGV0IHNlcnZpY2VEYXRhOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldG11bHRpbGluZ3VhbERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VEYXRhU2V0PXJlcztcblxuICAgIH0pO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGdldGNvbnZlcnRUb0NvZGU6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGU9cmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlB7UHtQXCIscmVzKTtcbiAgICAgIH0pO1xuICAgIC8vIH0sIDEwMCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmxhbmd1YWdlRGF0YVNldCsrKytcIix0aGlzLmxhbmd1YWdlRGF0YVNldCk7XG4gICBcbiAgIGxldCBhcGl1cmw6YW55PXRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0YXBpVXJsKCkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpPT57XG4gICAgICAgICB0aGlzLmFwaVVybD1yZXNwb25zZTtcbiAgIGNvbnNvbGUubG9nKFwidGhpcy5hcGlVcmw9XCIsdGhpcy5hcGlVcmwpO1xuXG4gICB9KVxuICB9XG5cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7IFxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXCIsIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsW3RoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIC8vIGlmICh0eXBlb2YgdmFsdWUhPSd1bmRlZmluZWQnICYmIHZhbHVlIT1udWxsICYmIHZhbHVlIT0nJykge1xuICAgIC8vICAgbGV0IGRhdGE6YW55PXtcbiAgICAvLyAgICAgXCJkYXRhXCI6e1xuICAgIC8vICAgICAgIFwiZW5cIjp2YWx1ZVxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gICB0aGlzLmFwaVNlcnZpY2UucG9zdERhdGFBcGkoIHRoaXMuYXBpVXJsLGRhdGEpLnN1YnNjcmliZSgocmVzcG9uc2U6YW55KT0+e1xuICBcbiAgICAvLyAgIH0pXG4gICAgLy8gfVxuICBcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19