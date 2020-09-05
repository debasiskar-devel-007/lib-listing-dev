/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
var CustomdataPipe = /** @class */ (function () {
    function CustomdataPipe() {
    }
    /**
     * @param {?} value
     * @param {?} before
     * @param {?} after
     * @return {?}
     */
    CustomdataPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} before
     * @param {?} after
     * @return {?}
     */
    function (value, before, after) {
        /** @type {?} */
        var newStr = before + " " + value + " " + after;
        return newStr;
    };
    CustomdataPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'customdata'
                },] }
    ];
    return CustomdataPipe;
}());
export { CustomdataPipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZGF0YS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21kYXRhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7SUFVQSxDQUFDOzs7Ozs7O0lBTEMsa0NBQVM7Ozs7OztJQUFULFVBQVUsS0FBYSxFQUFFLE1BQWMsRUFBRSxLQUFhOztZQUNoRCxNQUFNLEdBQU0sTUFBTSxTQUFJLEtBQUssU0FBSSxLQUFPO1FBQzFDLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7O2dCQVJGLElBQUksU0FBQztvQkFDSixJQUFJLEVBQUUsWUFBWTtpQkFDbkI7O0lBUUQscUJBQUM7Q0FBQSxBQVZELElBVUM7U0FQWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdjdXN0b21kYXRhJ1xufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21kYXRhUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogc3RyaW5nLCBiZWZvcmU6IHN0cmluZywgYWZ0ZXI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgbGV0IG5ld1N0ciA9IGAke2JlZm9yZX0gJHt2YWx1ZX0gJHthZnRlcn1gO1xuICAgIHJldHVybiBuZXdTdHI7XG4gIH1cblxufVxuIl19