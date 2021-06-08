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
            // console.log("P{P{P",res);
        }));
        // }, 100);
        // console.log("this.languageDataSet++++",this.languageDataSet);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3BELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ2hGO0lBUUUsOEJBQW1CLGlCQUEwQztRQUE3RCxpQkFnQkM7UUFoQmtCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBeUI7UUFIdEQsb0JBQWUsR0FBSyxFQUFFLENBQUM7UUFDdkIsMEJBQXFCLEdBQUssRUFBRSxDQUFDOzs7WUFJOUIsV0FBVyxHQUFRLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDL0UsS0FBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDOzs7WUFFSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsb0JBQW9CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHO1lBQ3JGLEtBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsNEJBQTRCO1FBQzlCLENBQUMsRUFBQztRQUNKLFdBQVc7UUFFWCxnRUFBZ0U7SUFHbEUsQ0FBQzs7Ozs7SUFFRCx3Q0FBUzs7OztJQUFULFVBQVUsS0FBVTs7O1lBQ2xCLDBFQUEwRTtZQUMxRSxLQUFnQixJQUFBLEtBQUEsaUJBQUEsSUFBSSxDQUFDLGVBQWUsQ0FBQSxnQkFBQSw0QkFBRTtnQkFBakMsSUFBSSxHQUFHLFdBQUE7Z0JBQ1YsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRTtvQkFDaEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7aUJBQ3hDO2FBQ047Ozs7Ozs7OztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Z0JBbENGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsa0JBQWtCO2lCQUN6Qjs7OztnQkFIUSx3QkFBd0I7O0lBcUNqQywyQkFBQztDQUFBLEFBcENELElBb0NDO1NBakNZLG9CQUFvQjs7O0lBRS9CLCtDQUE4Qjs7SUFDOUIscURBQW9DOztJQUV4QixpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXTtcbiAgcHVibGljIGNvbnZlcnRUb0xhbmd1YWdlQ29kZTphbnk9Jyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGVTZXJ2aWNlOk9ic2VydmFibGVzZXJ2aWNlU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZ2V0Y29udmVydFRvQ29kZTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRjb252ZXJ0VG9MYW5ndWFnZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZT1yZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUHtQe1BcIixyZXMpO1xuICAgICAgfSk7XG4gICAgLy8gfSwgMTAwKTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMubGFuZ3VhZ2VEYXRhU2V0KysrK1wiLHRoaXMubGFuZ3VhZ2VEYXRhU2V0KTtcbiAgIFxuXG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7IFxuICAgIC8vIGNvbnNvbGUubG9nKFwiIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXCIsIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsW3RoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=