/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
export class LanguageTransletPipe {
    /**
     * @param {?} observableService
     */
    constructor(observableService) {
        this.observableService = observableService;
        this.languageDataSet = [];
        // let serviceData:any;
        /** @type {?} */
        let serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.languageDataSet = res;
        }));
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        // console.log("pipe value",value);
        for (let val of this.languageDataSet) {
            if (val.eng == value) {
                return val.es;
            }
        }
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
    { type: ObservableserviceService }
];
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
    /** @type {?} */
    LanguageTransletPipe.prototype.observableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFtQixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUZ0RCxvQkFBZSxHQUFLLEVBQUUsQ0FBQzs7O1lBSXhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDO0lBRUosQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixtQ0FBbUM7UUFDbkMsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sR0FBRyxDQUFDLEVBQUUsQ0FBQzthQUNmO1NBQ047UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQXhCRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6Qjs7OztZQUhRLHdCQUF3Qjs7OztJQU0vQiwrQ0FBOEI7O0lBRWxCLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL29ic2VydmFibGVzZXJ2aWNlLnNlcnZpY2VcIjtcbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlVHJhbnNsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlVHJhbnNsZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gXG4gIHB1YmxpYyBsYW5ndWFnZURhdGFTZXQ6YW55PVtdO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2Upe1xuICAgIC8vIGxldCBzZXJ2aWNlRGF0YTphbnk7XG4gICAgbGV0IHNlcnZpY2VEYXRhOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldG11bHRpbGluZ3VhbERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VEYXRhU2V0PXJlcztcblxuICAgIH0pO1xuXG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7ICBcbiAgICAvLyBjb25zb2xlLmxvZyhcInBpcGUgdmFsdWVcIix2YWx1ZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuZyA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5lcztcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=