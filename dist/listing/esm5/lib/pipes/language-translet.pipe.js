/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
var LanguageTransletPipe = /** @class */ (function () {
    function LanguageTransletPipe(observableService) {
        var _this = this;
        this.observableService = observableService;
        this.languageDataSet = [];
        this.convertToLanguageCode = '';
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
            console.log("P{P{P", res);
        }));
        // }, 100);
        console.log("this.languageDataSet++++", this.languageDataSet);
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
        return value;
    };
    LanguageTransletPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'languageTranslet'
                },] }
    ];
    /** @nocollapse */
    LanguageTransletPipe.ctorParameters = function () { return [
        { type: ObservableserviceService }
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
    LanguageTransletPipe.prototype.observableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGO0lBUUUsOEJBQW1CLGlCQUEwQztRQUE3RCxpQkFnQkM7UUFoQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFIdEQsb0JBQWUsR0FBSyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQUssRUFBRSxDQUFDOzs7WUFJOUIsV0FBVyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0UsS0FBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDOzs7WUFFSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ3JGLEtBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDO1FBQ0osV0FBVztRQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRy9ELENBQUM7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7OztZQUNsQiwwRUFBMEU7WUFDMUUsS0FBZ0IsSUFBQSxLQUFBLGlCQUFBLElBQUksQ0FBQyxlQUFlLENBQUEsZ0JBQUEsNEJBQUU7Z0JBQWpDLElBQUksR0FBRyxXQUFBO2dCQUNWLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7b0JBQ2hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2lCQUN4QzthQUNOOzs7Ozs7Ozs7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7O2dCQWxDRixJQUFJLFNBQUM7b0JBQ0osSUFBSSxFQUFFLGtCQUFrQjtpQkFDekI7Ozs7Z0JBSFEsd0JBQXdCOztJQXFDakMsMkJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQWpDWSxvQkFBb0I7OztJQUUvQiwrQ0FBOEI7O0lBQzlCLHFEQUFvQzs7SUFFeEIsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG4gIHB1YmxpYyBjb252ZXJ0VG9MYW5ndWFnZUNvZGU6YW55PScnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2Upe1xuICAgIC8vIGxldCBzZXJ2aWNlRGF0YTphbnk7XG4gICAgbGV0IHNlcnZpY2VEYXRhOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldG11bHRpbGluZ3VhbERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VEYXRhU2V0PXJlcztcblxuICAgIH0pO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGdldGNvbnZlcnRUb0NvZGU6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGU9cmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIlB7UHtQXCIscmVzKTtcbiAgICAgIH0pO1xuICAgIC8vIH0sIDEwMCk7XG4gICAgXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmxhbmd1YWdlRGF0YVNldCsrKytcIix0aGlzLmxhbmd1YWdlRGF0YVNldCk7XG4gICBcblxuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkgeyBcbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZVwiLCB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuZyA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbFt0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZV07XG4gICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19