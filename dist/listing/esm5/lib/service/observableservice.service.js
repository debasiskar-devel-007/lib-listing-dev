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
        this.subject1 = new Subject();
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
    /**
     * @param {?} data
     * @return {?}
     */
    ObservableserviceService.prototype.setconvertToLanguage = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log("setconvertToLanguage data",data);
        this.subject1.next(data);
    };
    /**
     * @return {?}
     */
    ObservableserviceService.prototype.getconvertToLanguage = /**
     * @return {?}
     */
    function () {
        return this.subject1.asObservable();
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
    /**
     * @type {?}
     * @private
     */
    ObservableserviceService.prototype.subject1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBRXBEO0lBT0U7UUFIUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUV0QixDQUFDOzs7OztJQUNqQixzREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELHNEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBQ0QsdURBQW9COzs7O0lBQXBCLFVBQXFCLElBQUk7UUFDdkIsaURBQWlEO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNCLENBQUM7Ozs7SUFDRCx1REFBb0I7OztJQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUV0QyxDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7bUNBTEQ7Q0EwQkMsQUF2QkQsSUF1QkM7U0FwQlksd0JBQXdCOzs7Ozs7SUFDbkMsMkNBQXFDOzs7OztJQUNyQyw0Q0FBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB7XG4gIHByaXZhdGUgc3ViamVjdCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcHJpdmF0ZSBzdWJqZWN0MSA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBzZXRtdWx0aWxpbmd1YWxEYXRhKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwib2JzZXJ2YWJsZWUgZGF0YVwiLGRhdGEpO1xuICAgIHRoaXMuc3ViamVjdC5uZXh0KGRhdGEpO1xuICB9XG4gIGdldG11bHRpbGluZ3VhbERhdGEoKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0LmFzT2JzZXJ2YWJsZSgpO1xuICB9XG4gIHNldGNvbnZlcnRUb0xhbmd1YWdlKGRhdGEpe1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2V0Y29udmVydFRvTGFuZ3VhZ2UgZGF0YVwiLGRhdGEpO1xuICAgIHRoaXMuc3ViamVjdDEubmV4dChkYXRhKTtcbiAgfVxuICBnZXRjb252ZXJ0VG9MYW5ndWFnZSgpOk9ic2VydmFibGU8YW55PntcbiAgICByZXR1cm4gdGhpcy5zdWJqZWN0MS5hc09ic2VydmFibGUoKTtcblxuICB9XG59XG5cblxuIl19