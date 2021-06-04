/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
var ObservableserviceService = /** @class */ (function () {
    function ObservableserviceService() {
        this.subject = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    ObservableserviceService.prototype.setmultilingualData = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log("observablee data",data);
        this.subject.next(data);
    };
    /**
     * @return {?}
     */
    ObservableserviceService.prototype.getmultilingualData = /**
     * @return {?}
     */
    function () {
        return this.subject.asObservable();
    };
    ObservableserviceService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ObservableserviceService.ctorParameters = function () { return []; };
    /** @nocollapse */ ObservableserviceService.ngInjectableDef = i0.defineInjectable({ factory: function ObservableserviceService_Factory() { return new ObservableserviceService(); }, token: ObservableserviceService, providedIn: "root" });
    return ObservableserviceService;
}());
export { ObservableserviceService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ObservableserviceService.prototype.subject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBRXBEO0lBTUU7UUFGUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUVyQixDQUFDOzs7OztJQUNqQixzREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELHNEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7O2dCQWJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O21DQUxEO0NBaUJDLEFBZEQsSUFjQztTQVhZLHdCQUF3Qjs7Ozs7O0lBQ25DLDJDQUFxQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHNldG11bHRpbGluZ3VhbERhdGEoZGF0YSl7XG4gICAgLy8gY29uc29sZS5sb2coXCJvYnNlcnZhYmxlZSBkYXRhXCIsZGF0YSk7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoZGF0YSk7XG4gIH1cbiAgZ2V0bXVsdGlsaW5ndWFsRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbn1cblxuXG4iXX0=