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
            { eng: "Actions", es: "Comportamiento" },
            { eng: "fb search with blog title", es: "búsqueda de fb con título de blog" },
            { eng: "mask blog", es: "blog de máscara" },
            { eng: "downLoad Pdf", es: "Descargar PDF" },
            { eng: "fb profile", es: "perfil de fb" },
            { eng: "fb profile for inactive", es: "perfil de fb para inactivo" },
            { eng: "fb profile for active", es: "perfil de fb para activo" },
            { eng: "see brand", es: "ver marca" },
            { eng: "delete", es: "Eliminar" },
            { eng: "see brand with param", es: "ver marca con param" },
            { eng: "Desc from data", es: "Desc de datos" },
            { eng: "Desc from api data", es: "Desc de datos api" },
            { eng: "fb search with blog title", es: "fb buscar con el título del blog" },
            { eng: "Custom B Listner", es: "Listador B personalizado" },
            { eng: "G search with blog title ACtive", es: "Búsqueda de G con título de blog ACtive" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBRXBEO0lBQUE7UUFJUyxvQkFBZSxHQUFLO1lBQ3pCLEVBQUMsR0FBRyxFQUFDLG1CQUFtQixFQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQztZQUMvQyxFQUFDLEdBQUcsRUFBQyxlQUFlLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3pDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUMsbUJBQW1CLEVBQUM7WUFDM0MsRUFBQyxHQUFHLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQyxRQUFRLEVBQUM7WUFDNUIsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztZQUNyQyxFQUFDLEdBQUcsRUFBQyxnQkFBZ0IsRUFBQyxFQUFFLEVBQUMsa0JBQWtCLEVBQUM7WUFDNUMsRUFBQyxHQUFHLEVBQUMsYUFBYSxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztZQUN2QyxFQUFDLEdBQUcsRUFBQyw0QkFBNEIsRUFBQyxFQUFFLEVBQUMsZ0NBQWdDLEVBQUM7WUFDdEUsRUFBQyxHQUFHLEVBQUMsTUFBTSxFQUFDLEVBQUUsRUFBQyxNQUFNLEVBQUM7WUFDdEIsRUFBQyxHQUFHLEVBQUMsU0FBUyxFQUFDLEVBQUUsRUFBQyxnQkFBZ0IsRUFBQztZQUNuQyxFQUFDLEdBQUcsRUFBQywyQkFBMkIsRUFBQyxFQUFFLEVBQUMsbUNBQW1DLEVBQUM7WUFDeEUsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxpQkFBaUIsRUFBQztZQUN0QyxFQUFDLEdBQUcsRUFBQyxjQUFjLEVBQUMsRUFBRSxFQUFDLGVBQWUsRUFBQztZQUN2QyxFQUFDLEdBQUcsRUFBQyxZQUFZLEVBQUMsRUFBRSxFQUFDLGNBQWMsRUFBQztZQUNwQyxFQUFDLEdBQUcsRUFBQyx5QkFBeUIsRUFBQyxFQUFFLEVBQUMsNEJBQTRCLEVBQUM7WUFDL0QsRUFBQyxHQUFHLEVBQUMsdUJBQXVCLEVBQUMsRUFBRSxFQUFDLDBCQUEwQixFQUFDO1lBQzNELEVBQUMsR0FBRyxFQUFDLFdBQVcsRUFBQyxFQUFFLEVBQUMsV0FBVyxFQUFDO1lBQ2hDLEVBQUMsR0FBRyxFQUFDLFFBQVEsRUFBQyxFQUFFLEVBQUMsVUFBVSxFQUFDO1lBQzVCLEVBQUMsR0FBRyxFQUFDLHNCQUFzQixFQUFDLEVBQUUsRUFBQyxxQkFBcUIsRUFBQztZQUNyRCxFQUFDLEdBQUcsRUFBQyxnQkFBZ0IsRUFBQyxFQUFFLEVBQUMsZUFBZSxFQUFDO1lBQ3pDLEVBQUMsR0FBRyxFQUFDLG9CQUFvQixFQUFDLEVBQUUsRUFBQyxtQkFBbUIsRUFBQztZQUNqRCxFQUFDLEdBQUcsRUFBQywyQkFBMkIsRUFBQyxFQUFFLEVBQUMsa0NBQWtDLEVBQUM7WUFDdkUsRUFBQyxHQUFHLEVBQUMsa0JBQWtCLEVBQUMsRUFBRSxFQUFDLDBCQUEwQixFQUFDO1lBQ3RELEVBQUMsR0FBRyxFQUFDLGlDQUFpQyxFQUFDLEVBQUUsRUFBQyx5Q0FBeUMsRUFBQztTQUNyRixDQUFDO0lBWUosQ0FBQzs7Ozs7SUFWQyx3Q0FBUzs7OztJQUFULFVBQVUsS0FBVTs7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUMsS0FBSyxDQUFDLENBQUM7O1lBQ2hDLEtBQWdCLElBQUEsS0FBQSxpQkFBQSxJQUFJLENBQUMsZUFBZSxDQUFBLGdCQUFBLDRCQUFFO2dCQUFqQyxJQUFJLEdBQUcsV0FBQTtnQkFDVixJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO29CQUNoQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7aUJBQ2Y7YUFDTjs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOztnQkF2Q0YsSUFBSSxTQUFDO29CQUNKLElBQUksRUFBRSxrQkFBa0I7aUJBQ3pCOztJQXVDRCwyQkFBQztDQUFBLEFBekNELElBeUNDO1NBdENZLG9CQUFvQjs7O0lBQy9CLCtDQXlCRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W1xuICAgIHtlbmc6XCJBdXRob3IgPGJyLz4gTmFtZVwiLGVzOlwiTm9tYnJlIGRlbCBhdXRvclwifSxcbiAgICB7ZW5nOlwiUHJpb3JpdHkgb2YgQlwiLGVzOlwiUHJpb3JpZGFkIGRlIEJcIn0sXG4gICAge2VuZzpcIkJsb2cgVGl0bGUgOVwiLGVzOlwiVMOtdHVsbyBkZWwgYmxvZyA5XCJ9LFxuICAgIHtlbmc6XCJBY3RpdmUgP1wiLGVzOlwiQWN0aXZhXCJ9LFxuICAgIHtlbmc6XCJXcm9uZyBPIDFcIixlczpcIkluY29ycmVjdG8gTyAxXCJ9LFxuICAgIHtlbmc6XCJDb2xvcmVkIFN0YXR1c1wiLGVzOlwiRXN0YWRvIGNvbG9yZWFkb1wifSxcbiAgICB7ZW5nOlwiRGF0ZWQgQWRkZWRcIixlczpcIkZlY2hhIGFncmVnYWRhXCJ9LFxuICAgIHtlbmc6XCJDcmVhdGVkIERhdGUgd2l0aCBUaW1lIDExMVwiLGVzOlwiRmVjaGEgZGUgY3JlYWNpw7NuIGNvbiBob3JhIDExMVwifSxcbiAgICB7ZW5nOlwiRGVzY1wiLGVzOlwiRGVzY1wifSxcbiAgICB7ZW5nOlwiQWN0aW9uc1wiLGVzOlwiQ29tcG9ydGFtaWVudG9cIn0sXG4gICAge2VuZzpcImZiIHNlYXJjaCB3aXRoIGJsb2cgdGl0bGVcIixlczpcImLDunNxdWVkYSBkZSBmYiBjb24gdMOtdHVsbyBkZSBibG9nXCJ9LCAvKiBhY3Rpb25zIGJ1dHRvbiBzZXQgc3RhcnQgaGVyZSovXG4gICAge2VuZzpcIm1hc2sgYmxvZ1wiLGVzOlwiYmxvZyBkZSBtw6FzY2FyYVwifSxcbiAgICB7ZW5nOlwiZG93bkxvYWQgUGRmXCIsZXM6XCJEZXNjYXJnYXIgUERGXCJ9LFxuICAgIHtlbmc6XCJmYiBwcm9maWxlXCIsZXM6XCJwZXJmaWwgZGUgZmJcIn0sXG4gICAge2VuZzpcImZiIHByb2ZpbGUgZm9yIGluYWN0aXZlXCIsZXM6XCJwZXJmaWwgZGUgZmIgcGFyYSBpbmFjdGl2b1wifSxcbiAgICB7ZW5nOlwiZmIgcHJvZmlsZSBmb3IgYWN0aXZlXCIsZXM6XCJwZXJmaWwgZGUgZmIgcGFyYSBhY3Rpdm9cIn0sXG4gICAge2VuZzpcInNlZSBicmFuZFwiLGVzOlwidmVyIG1hcmNhXCJ9LFxuICAgIHtlbmc6XCJkZWxldGVcIixlczpcIkVsaW1pbmFyXCJ9LFxuICAgIHtlbmc6XCJzZWUgYnJhbmQgd2l0aCBwYXJhbVwiLGVzOlwidmVyIG1hcmNhIGNvbiBwYXJhbVwifSxcbiAgICB7ZW5nOlwiRGVzYyBmcm9tIGRhdGFcIixlczpcIkRlc2MgZGUgZGF0b3NcIn0sXG4gICAge2VuZzpcIkRlc2MgZnJvbSBhcGkgZGF0YVwiLGVzOlwiRGVzYyBkZSBkYXRvcyBhcGlcIn0sXG4gICAge2VuZzpcImZiIHNlYXJjaCB3aXRoIGJsb2cgdGl0bGVcIixlczpcImZiIGJ1c2NhciBjb24gZWwgdMOtdHVsbyBkZWwgYmxvZ1wifSxcbiAgICB7ZW5nOlwiQ3VzdG9tIEIgTGlzdG5lclwiLGVzOlwiTGlzdGFkb3IgQiBwZXJzb25hbGl6YWRvXCJ9LFxuICAgIHtlbmc6XCJHIHNlYXJjaCB3aXRoIGJsb2cgdGl0bGUgQUN0aXZlXCIsZXM6XCJCw7pzcXVlZGEgZGUgRyBjb24gdMOtdHVsbyBkZSBibG9nIEFDdGl2ZVwifSxcbiAgXTtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7ICBcbiAgICBjb25zb2xlLmxvZyhcInBpcGUgdmFsdWVcIix2YWx1ZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuZyA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbC5lcztcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=