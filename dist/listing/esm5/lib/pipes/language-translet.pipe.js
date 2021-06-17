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
        // alert("op")
        console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
        try {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QztJQVVFLDhCQUFtQixpQkFBMEMsRUFBUSxVQUFxQjtRQUExRixpQkFvQkM7UUFwQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFBUSxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBTG5GLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBQ3ZCLDBCQUFxQixHQUFLLEVBQUUsQ0FBQztRQUM3QixXQUFNLEdBQUssRUFBRSxDQUFDO1FBQ2QsWUFBTyxHQUFLLEVBQUUsQ0FBQzs7O1lBSWhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQy9FLEtBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsR0FBRztZQUNyRixLQUFJLENBQUMscUJBQXFCLEdBQUMsR0FBRyxDQUFDO1lBQy9CLDRCQUE0QjtRQUM5QixDQUFDLEVBQUM7Ozs7WUFLRCxNQUFNLEdBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFDLFFBQVk7WUFDbkUsS0FBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7WUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXhDLENBQUMsRUFBQztJQUNILENBQUM7Ozs7O0lBR0Qsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7O1FBQ2xCLGNBQWM7UUFDZCxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixFQUFFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDOztZQUN2RSxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBakMsSUFBSSxHQUFHLFdBQUE7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsRUFBRSxJQUFJLEtBQUssRUFBRTtvQkFDZixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDeEM7YUFDTjs7Ozs7Ozs7O1FBQ0QsNEJBQTRCO1FBQzVCLCtEQUErRDtRQUMvRCxtQkFBbUI7UUFDbkIsZUFBZTtRQUNmLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1IsTUFBTTtRQUNOLCtFQUErRTtRQUUvRSxPQUFPO1FBQ1AsSUFBSTtRQUNKLDZDQUE2QztRQUM3QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQXRERixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGtCQUFrQjtpQkFDekI7Ozs7Z0JBSlEsd0JBQXdCO2dCQUN4QixVQUFVOztJQXlEbkIsMkJBQUM7Q0FBQSxBQXhERCxJQXdEQztTQXJEWSxvQkFBb0I7OztJQUUvQiwrQ0FBOEI7O0lBQzlCLHFEQUFvQzs7SUFDcEMsc0NBQXFCOztJQUNyQix1Q0FBc0I7O0lBRVYsaURBQWlEOztJQUFDLDBDQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL29ic2VydmFibGVzZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tIFwiLi4vYXBpLnNlcnZpY2VcIjtcbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlVHJhbnNsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlVHJhbnNsZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gXG4gIHB1YmxpYyBsYW5ndWFnZURhdGFTZXQ6YW55PVtdO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2VDb2RlOmFueT0nJztcbiAgcHVibGljIGFwaVVybDphbnk9Jyc7XG4gIHB1YmxpYyBkYXRhU2V0OmFueT1bXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6T2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlLHB1YmxpYyBhcGlTZXJ2aWNlOkFwaVNlcnZpY2Upe1xuICAgIC8vIGxldCBzZXJ2aWNlRGF0YTphbnk7XG4gICAgbGV0IHNlcnZpY2VEYXRhOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldG11bHRpbGluZ3VhbERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VEYXRhU2V0PXJlcztcblxuICAgIH0pO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGdldGNvbnZlcnRUb0NvZGU6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGU9cmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlB7UHtQXCIscmVzKTtcbiAgICAgIH0pO1xuICAgIC8vIH0sIDEwMCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmxhbmd1YWdlRGF0YVNldCsrKytcIix0aGlzLmxhbmd1YWdlRGF0YVNldCk7XG4gICBcbiAgIGxldCBhcGl1cmw6YW55PXRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0YXBpVXJsKCkuc3Vic2NyaWJlKChyZXNwb25zZTphbnkpPT57XG4gICAgICAgICB0aGlzLmFwaVVybD1yZXNwb25zZTtcbiAgIGNvbnNvbGUubG9nKFwidGhpcy5hcGlVcmw9XCIsdGhpcy5hcGlVcmwpO1xuXG4gICB9KVxuICB9XG5cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7IFxuICAgIC8vIGFsZXJ0KFwib3BcIilcbiAgICBjb25zb2xlLmxvZyhcIiB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZVwiLCB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsW3RoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIC8vIHRoaXMuZGF0YVNldC5wdXNoKHZhbHVlKTtcbiAgICAvLyBpZiAodHlwZW9mIHZhbHVlIT0ndW5kZWZpbmVkJyAmJiB2YWx1ZSE9bnVsbCAmJiB2YWx1ZSE9JycpIHtcbiAgICAvLyAgIGxldCBkYXRhOmFueT17XG4gICAgLy8gICAgIFwiZGF0YVwiOntcbiAgICAvLyAgICAgICBcImVuXCI6dmFsdWVcbiAgICAvLyAgICAgfVxuICAgIC8vICAgfVxuICAgIC8vICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3REYXRhQXBpKCB0aGlzLmFwaVVybCxkYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOmFueSk9PntcbiAgXG4gICAgLy8gICB9KVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmRhdGFTZXRcIiwgdGhpcy5kYXRhU2V0KVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=