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
        try {
            // console.log("pipe value",value);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGO0lBT0UsOEJBQW1CLGlCQUEwQztRQUE3RCxpQkFPQztRQVBrQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQXlCO1FBRnRELG9CQUFlLEdBQUssRUFBRSxDQUFDOzs7WUFJeEIsV0FBVyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0UsS0FBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDO0lBRUosQ0FBQzs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsS0FBVTs7O1lBQ2xCLG1DQUFtQztZQUNuQyxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBakMsSUFBSSxHQUFHLFdBQUE7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRTtvQkFDaEIsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO2lCQUNmO2FBQ047Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBeEJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7OztnQkFIUSx3QkFBd0I7O0lBMkJqQywyQkFBQztDQUFBLEFBMUJELElBMEJDO1NBdkJZLG9CQUFvQjs7O0lBRS9CLCtDQUE4Qjs7SUFFbEIsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGVTZXJ2aWNlOk9ic2VydmFibGVzZXJ2aWNlU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgIFxuICAgIC8vIGNvbnNvbGUubG9nKFwicGlwZSB2YWx1ZVwiLHZhbHVlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLmVzO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==