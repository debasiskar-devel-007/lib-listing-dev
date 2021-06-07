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
        console.log("setconvertToLanguage data", data);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBYyxPQUFPLEVBQVcsTUFBTSxNQUFNLENBQUM7O0FBRXBEO0lBT0U7UUFIUSxZQUFPLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUM3QixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztJQUV0QixDQUFDOzs7OztJQUNqQixzREFBbUI7Ozs7SUFBbkIsVUFBb0IsSUFBSTtRQUN0Qix3Q0FBd0M7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7OztJQUNELHNEQUFtQjs7O0lBQW5CO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7O0lBQ0QsdURBQW9COzs7O0lBQXBCLFVBQXFCLElBQUk7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7O0lBQ0QsdURBQW9COzs7SUFBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFdEMsQ0FBQzs7Z0JBdEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7O21DQUxEO0NBMEJDLEFBdkJELElBdUJDO1NBcEJZLHdCQUF3Qjs7Ozs7O0lBQ25DLDJDQUFxQzs7Ozs7SUFDckMsNENBQXNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCxPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2Uge1xuICBwcml2YXRlIHN1YmplY3QgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHByaXZhdGUgc3ViamVjdDEgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgc2V0bXVsdGlsaW5ndWFsRGF0YShkYXRhKXtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm9ic2VydmFibGVlIGRhdGFcIixkYXRhKTtcbiAgICB0aGlzLnN1YmplY3QubmV4dChkYXRhKTtcbiAgfVxuICBnZXRtdWx0aWxpbmd1YWxEYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdC5hc09ic2VydmFibGUoKTtcbiAgfVxuICBzZXRjb252ZXJ0VG9MYW5ndWFnZShkYXRhKXtcbiAgICBjb25zb2xlLmxvZyhcInNldGNvbnZlcnRUb0xhbmd1YWdlIGRhdGFcIixkYXRhKTtcbiAgICB0aGlzLnN1YmplY3QxLm5leHQoZGF0YSk7XG4gIH1cbiAgZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKTpPYnNlcnZhYmxlPGFueT57XG4gICAgcmV0dXJuIHRoaXMuc3ViamVjdDEuYXNPYnNlcnZhYmxlKCk7XG5cbiAgfVxufVxuXG5cbiJdfQ==