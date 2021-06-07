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
        console.log("setconvertToLanguage data", data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBS3BELE1BQU0sT0FBTyx3QkFBd0I7SUFJbkM7UUFIUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUV0QixDQUFDOzs7OztJQUNqQixtQkFBbUIsQ0FBQyxJQUFJO1FBQ3RCLHdDQUF3QztRQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBQ0QsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNyQyxDQUFDOzs7OztJQUNELG9CQUFvQixDQUFDLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0Qsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV0QyxDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7Ozs7Ozs7O0lBRUMsMkNBQXFDOzs7OztJQUNyQyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB7XG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0MSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBzZXRtdWx0aWxpbmd1YWxEYXRhKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwib2JzZXJ2YWJsZWUgZGF0YVwiLGRhdGEpO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xuICB9XG4gIGdldG11bHRpbGluZ3VhbERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHNldGNvbnZlcnRUb0xhbmd1YWdlKGRhdGEpe1xuICAgIGNvbnNvbGUubG9nKFwic2V0Y29udmVydFRvTGFuZ3VhZ2UgZGF0YVwiLGRhdGEpO1xuICAgIHRoaXMuc3ViamVjdDEubmV4dChkYXRhKTtcbiAgfVxuICBnZXRjb252ZXJ0VG9MYW5ndWFnZSgpOk9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0MS5hc09ic2VydmFibGUoKTtcblxuICB9XG59XG5cblxuIl19