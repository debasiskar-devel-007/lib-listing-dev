/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class ObservableserviceService {
    constructor() {
        this.subject = new Subject();
        this.subject1 = new Subject();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setmultilingualData(data) {
        // console.log("observablee data",data);
        this.subject.next(data);
    }
    /**
     * @return {?}
     */
    getmultilingualData() {
        return this.subject.asObservable();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    setconvertToLanguage(data) {
        // console.log("setconvertToLanguage data",data);
        this.subject1.next(data);
    }
    /**
     * @return {?}
     */
    getconvertToLanguage() {
        return this.subject1.asObservable();
    }
}
ObservableserviceService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ObservableserviceService.ctorParameters = () => [];
/** @nocollapse */ ObservableserviceService.ngInjectableDef = i0.defineInjectable({ factory: function ObservableserviceService_Factory() { return new ObservableserviceService(); }, token: ObservableserviceService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    ObservableserviceService.prototype.subject;
    /**
     * @type {?}
     * @private
     */
    ObservableserviceService.prototype.subject1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBS3BELE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUV0QixDQUFDOzs7OztJQUNqQixtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLElBQUk7UUFDdkIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCxvQkFBb0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBRXRDLENBQUM7OztZQXRCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFFQywyQ0FBcUM7Ozs7O0lBQ3JDLDRDQUFzQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3QxID0gbmV3IFN1YmplY3Q8YW55PigpO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHNldG11bHRpbGluZ3VhbERhdGEoZGF0YSl7XG4gICAgLy8gY29uc29sZS5sb2coXCJvYnNlcnZhYmxlZSBkYXRhXCIsZGF0YSk7XG4gICAgdGhpcy5zdWJqZWN0Lm5leHQoZGF0YSk7XG4gIH1cbiAgZ2V0bXVsdGlsaW5ndWFsRGF0YSgpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG4gIH1cbiAgc2V0Y29udmVydFRvTGFuZ3VhZ2UoZGF0YSl7XG4gICAgLy8gY29uc29sZS5sb2coXCJzZXRjb252ZXJ0VG9MYW5ndWFnZSBkYXRhXCIsZGF0YSk7XG4gICAgdGhpcy5zdWJqZWN0MS5uZXh0KGRhdGEpO1xuICB9XG4gIGdldGNvbnZlcnRUb0xhbmd1YWdlKCk6T2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLnN1YmplY3QxLmFzT2JzZXJ2YWJsZSgpO1xuXG4gIH1cbn1cblxuXG4iXX0=