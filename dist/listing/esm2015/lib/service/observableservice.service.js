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
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBS3BELE1BQU0sT0FBTyx3QkFBd0I7SUFHbkM7UUFGUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUVyQixDQUFDOzs7OztJQUNqQixtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7WUFiRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7Ozs7Ozs7SUFFQywyQ0FBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB7XG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBzZXRtdWx0aWxpbmd1YWxEYXRhKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwib2JzZXJ2YWJsZWUgZGF0YVwiLGRhdGEpO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xuICB9XG4gIGdldG11bHRpbGluZ3VhbERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG59XG5cblxuIl19