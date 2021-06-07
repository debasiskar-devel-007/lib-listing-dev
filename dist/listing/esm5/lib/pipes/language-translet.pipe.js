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
        console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
        try {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGO0lBUUUsOEJBQW1CLGlCQUEwQztRQUE3RCxpQkFnQkM7UUFoQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFIdEQsb0JBQWUsR0FBSyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQUssRUFBRSxDQUFDOzs7WUFJOUIsV0FBVyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0UsS0FBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDOzs7WUFFSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ3JGLEtBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDO1FBQ0osV0FBVztRQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRy9ELENBQUM7Ozs7O0lBRUQsd0NBQVM7Ozs7SUFBVCxVQUFVLEtBQVU7O1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7O1lBQ3ZFLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztpQkFDeEM7YUFDTjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkFsQ0YsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOzs7O2dCQUhRLHdCQUF3Qjs7SUFxQ2pDLDJCQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0FqQ1ksb0JBQW9COzs7SUFFL0IsK0NBQThCOztJQUM5QixxREFBb0M7O0lBRXhCLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL29ic2VydmFibGVzZXJ2aWNlLnNlcnZpY2VcIjtcbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlVHJhbnNsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlVHJhbnNsZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gXG4gIHB1YmxpYyBsYW5ndWFnZURhdGFTZXQ6YW55PVtdO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2VDb2RlOmFueT0nJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6T2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlKXtcbiAgICAvLyBsZXQgc2VydmljZURhdGE6YW55O1xuICAgIGxldCBzZXJ2aWNlRGF0YTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRtdWx0aWxpbmd1YWxEYXRhKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlRGF0YVNldD1yZXM7XG5cbiAgICB9KTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBnZXRjb252ZXJ0VG9Db2RlOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldGNvbnZlcnRUb0xhbmd1YWdlKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlPXJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJQe1B7UFwiLHJlcyk7XG4gICAgICB9KTtcbiAgICAvLyB9LCAxMDApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZURhdGFTZXQrKysrXCIsdGhpcy5sYW5ndWFnZURhdGFTZXQpO1xuICAgXG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgXG4gICAgY29uc29sZS5sb2coXCIgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVcIiwgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbmcgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxbdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVdO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==