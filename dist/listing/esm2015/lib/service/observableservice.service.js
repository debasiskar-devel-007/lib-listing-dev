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
        this.apiUrlsubject = new Subject();
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
    /**
     * @param {?} data
     * @return {?}
     */
    setapiUrl(data) {
        console.log("observablee data", data);
        this.apiUrlsubject.next(data);
    }
    /**
     * @return {?}
     */
    getapiUrl() {
        return this.apiUrlsubject.asObservable();
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
    /**
     * @type {?}
     * @private
     */
    ObservableserviceService.prototype.apiUrlsubject;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBS3BELE1BQU0sT0FBTyx3QkFBd0I7SUFLbkM7UUFKUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM5QixrQkFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFFM0IsQ0FBQzs7Ozs7SUFDakIsbUJBQW1CLENBQUMsSUFBSTtRQUN0Qix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckMsQ0FBQzs7Ozs7SUFDRCxvQkFBb0IsQ0FBQyxJQUFJO1FBQ3ZCLGlEQUFpRDtRQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV0QyxDQUFDOzs7OztJQUNELFNBQVMsQ0FBQyxJQUFJO1FBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDOzs7O0lBQ0QsU0FBUztRQUNQLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUUzQyxDQUFDOzs7WUEvQkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsMkNBQXFDOzs7OztJQUNyQyw0Q0FBc0M7Ozs7O0lBQ3RDLGlEQUEyQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzdWJqZWN0ID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIHN1YmplY3QxID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwcml2YXRlIGFwaVVybHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgc2V0bXVsdGlsaW5ndWFsRGF0YShkYXRhKXtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm9ic2VydmFibGVlIGRhdGFcIixkYXRhKTtcbiAgICB0aGlzLnN1YmplY3QubmV4dChkYXRhKTtcbiAgfVxuICBnZXRtdWx0aWxpbmd1YWxEYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBzZXRjb252ZXJ0VG9MYW5ndWFnZShkYXRhKXtcbiAgICAvLyBjb25zb2xlLmxvZyhcInNldGNvbnZlcnRUb0xhbmd1YWdlIGRhdGFcIixkYXRhKTtcbiAgICB0aGlzLnN1YmplY3QxLm5leHQoZGF0YSk7XG4gIH1cbiAgZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKTpPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdDEuYXNPYnNlcnZhYmxlKCk7XG5cbiAgfVxuICBzZXRhcGlVcmwoZGF0YSl7XG4gICAgY29uc29sZS5sb2coXCJvYnNlcnZhYmxlZSBkYXRhXCIsZGF0YSk7XG4gICAgdGhpcy5hcGlVcmxzdWJqZWN0Lm5leHQoZGF0YSk7XG4gIH1cbiAgZ2V0YXBpVXJsKCk6T2JzZXJ2YWJsZTxhbnk+e1xuICAgIHJldHVybiB0aGlzLmFwaVVybHN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XG5cbiAgfVxufVxuXG5cbiJdfQ==