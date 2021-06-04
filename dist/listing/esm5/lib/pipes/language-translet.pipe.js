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
        // let serviceData:any;
        /** @type {?} */
        var serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.languageDataSet = res;
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
        console.log("pipe value", value);
        try {
            for (var _b = tslib_1.__values(this.languageDataSet), _c = _b.next(); !_c.done; _c = _b.next()) {
                var val = _c.value;
                if (val.eng == value) {
                    return val.es;
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
        return "value";
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
    LanguageTransletPipe.prototype.observableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGO0lBT0UsOEJBQW1CLGlCQUEwQztRQUE3RCxpQkFPQztRQVBrQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBRnRELG9CQUFlLEdBQUssRUFBRSxDQUFDOzs7WUFJeEIsV0FBVyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0UsS0FBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDO0lBRUosQ0FBQzs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsS0FBVTs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2hDLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7YUFDTjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7UUFDYixPQUFPLE9BQU8sQ0FBQztJQUNqQixDQUFDOztnQkF6QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7O2dCQUhRLHdCQUF3Qjs7SUE0QmpDLDJCQUFDO0NBQUEsQUEzQkQsSUEyQkM7U0F4Qlksb0JBQW9COzs7SUFFL0IsK0NBQThCOztJQUVsQixpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6T2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlKXtcbiAgICAvLyBsZXQgc2VydmljZURhdGE6YW55O1xuICAgIGxldCBzZXJ2aWNlRGF0YTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRtdWx0aWxpbmd1YWxEYXRhKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlRGF0YVNldD1yZXM7XG5cbiAgICB9KTtcblxuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkgeyAgXG4gICAgY29uc29sZS5sb2coXCJwaXBlIHZhbHVlXCIsdmFsdWUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbmcgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwuZXM7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gICAgcmV0dXJuIFwidmFsdWVcIjtcbiAgfVxuXG59XG4iXX0=