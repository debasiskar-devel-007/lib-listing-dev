/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class LanguageTransletPipe {
    constructor() {
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
    transform(value) {
        console.log("pipe value", value);
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
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlTLG9CQUFlLEdBQUs7WUFDekIsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixFQUFDO1lBQy9DLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUM7WUFDekMsRUFBQyxHQUFHLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBQyxtQkFBbUIsRUFBQztZQUMzQyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQztZQUM1QixFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3JDLEVBQUMsR0FBRyxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQztZQUM1QyxFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3ZDLEVBQUMsR0FBRyxFQUFDLDRCQUE0QixFQUFDLEVBQUUsRUFBQyxnQ0FBZ0MsRUFBQztZQUN0RSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1NBQ3BDLENBQUM7SUFZSixDQUFDOzs7OztJQVZDLFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDZjtTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF6QkYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7YUFDekI7Ozs7SUFFQywrQ0FXRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W1xuICAgIHtlbmc6XCJBdXRob3IgPGJyLz4gTmFtZVwiLGVzOlwiTm9tYnJlIGRlbCBhdXRvclwifSxcbiAgICB7ZW5nOlwiUHJpb3JpdHkgb2YgQlwiLGVzOlwiUHJpb3JpZGFkIGRlIEJcIn0sXG4gICAge2VuZzpcIkJsb2cgVGl0bGUgOVwiLGVzOlwiVMOtdHVsbyBkZWwgYmxvZyA5XCJ9LFxuICAgIHtlbmc6XCJBY3RpdmUgP1wiLGVzOlwiQWN0aXZhXCJ9LFxuICAgIHtlbmc6XCJXcm9uZyBPIDFcIixlczpcIkluY29ycmVjdG8gTyAxXCJ9LFxuICAgIHtlbmc6XCJDb2xvcmVkIFN0YXR1c1wiLGVzOlwiRXN0YWRvIGNvbG9yZWFkb1wifSxcbiAgICB7ZW5nOlwiRGF0ZWQgQWRkZWRcIixlczpcIkZlY2hhIGFncmVnYWRhXCJ9LFxuICAgIHtlbmc6XCJDcmVhdGVkIERhdGUgd2l0aCBUaW1lIDExMVwiLGVzOlwiRmVjaGEgZGUgY3JlYWNpw7NuIGNvbiBob3JhIDExMVwifSxcbiAgICB7ZW5nOlwiRGVzY1wiLGVzOlwiRGVzY1wifSxcbiAgICB7ZW5nOlwiQWN0aW9uc1wiLGVzOlwiQ29tcG9ydGFtaWVudG9cIn1cbiAgXTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7ICBcbiAgICBjb25zb2xlLmxvZyhcInBpcGUgdmFsdWVcIix2YWx1ZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuZyA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5lcztcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=