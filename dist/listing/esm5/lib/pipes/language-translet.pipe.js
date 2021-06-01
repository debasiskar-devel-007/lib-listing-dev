/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var LanguageTransletPipe = /** @class */ (function () {
    function LanguageTransletPipe() {
        this.languageDataSet = [
            { eng: "Author <br/> Name", es: "Nombre del autor" },
            { eng: "Priority of B", es: "Prioridad de B" },
            { eng: "Blog Title 9", es: "Título del blog 9" },
            { eng: "Active ?", es: "Activa" },
            { eng: "Wrong O 1", es: "Incorrecto O 1" },
            { eng: "Colored Status", es: "Estado coloreado" },
            { eng: "Dated Added", es: "Fecha agregada" },
            { eng: "Created Date with Time 111", es: "Fecha de creación con hora 111" },
            { eng: "Desc", es: "Desc" },
            { eng: "Actions", es: "Comportamiento" }
        ];
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
        console.log("pipe value", value);
        try {
            for (var _b = tslib_1.__values(this.languageDataSet), _c = _b.next(); !_c.done; _c = _b.next()) {
                var val = _c.value;
                if (val.eng == value) {
                    return val.es;
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
    return LanguageTransletPipe;
}());
export { LanguageTransletPipe };
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7UUFJUyxvQkFBZSxHQUFLO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLG1CQUFtQixFQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQztZQUMvQyxFQUFDLEdBQUcsRUFBQyxlQUFlLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3pDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUMsbUJBQW1CLEVBQUM7WUFDM0MsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUM7WUFDNUIsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztZQUNyQyxFQUFDLEdBQUcsRUFBQyxnQkFBZ0IsRUFBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUM7WUFDNUMsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztZQUN2QyxFQUFDLEdBQUcsRUFBQyw0QkFBNEIsRUFBQyxFQUFFLEVBQUMsZ0NBQWdDLEVBQUM7WUFDdEUsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUM7WUFDdEIsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztTQUNwQyxDQUFDO0lBWUosQ0FBQzs7Ozs7SUFWQyx3Q0FBUzs7OztJQUFULFVBQVUsS0FBVTs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2hDLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7YUFDTjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF6QkYsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOztJQXlCRCwyQkFBQztDQUFBLEFBM0JELElBMkJDO1NBeEJZLG9CQUFvQjs7O0lBQy9CLCtDQVdFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXG4gICAge2VuZzpcIkF1dGhvciA8YnIvPiBOYW1lXCIsZXM6XCJOb21icmUgZGVsIGF1dG9yXCJ9LFxuICAgIHtlbmc6XCJQcmlvcml0eSBvZiBCXCIsZXM6XCJQcmlvcmlkYWQgZGUgQlwifSxcbiAgICB7ZW5nOlwiQmxvZyBUaXRsZSA5XCIsZXM6XCJUw610dWxvIGRlbCBibG9nIDlcIn0sXG4gICAge2VuZzpcIkFjdGl2ZSA/XCIsZXM6XCJBY3RpdmFcIn0sXG4gICAge2VuZzpcIldyb25nIE8gMVwiLGVzOlwiSW5jb3JyZWN0byBPIDFcIn0sXG4gICAge2VuZzpcIkNvbG9yZWQgU3RhdHVzXCIsZXM6XCJFc3RhZG8gY29sb3JlYWRvXCJ9LFxuICAgIHtlbmc6XCJEYXRlZCBBZGRlZFwiLGVzOlwiRmVjaGEgYWdyZWdhZGFcIn0sXG4gICAge2VuZzpcIkNyZWF0ZWQgRGF0ZSB3aXRoIFRpbWUgMTExXCIsZXM6XCJGZWNoYSBkZSBjcmVhY2nDs24gY29uIGhvcmEgMTExXCJ9LFxuICAgIHtlbmc6XCJEZXNjXCIsZXM6XCJEZXNjXCJ9LFxuICAgIHtlbmc6XCJBY3Rpb25zXCIsZXM6XCJDb21wb3J0YW1pZW50b1wifVxuICBdO1xuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgIFxuICAgIGNvbnNvbGUubG9nKFwicGlwZSB2YWx1ZVwiLHZhbHVlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLmVzO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==