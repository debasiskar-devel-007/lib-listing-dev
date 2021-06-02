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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFLcEQsTUFBTSxPQUFPLG9CQUFvQjtJQUhqQztRQUlTLG9CQUFlLEdBQUs7WUFDekIsRUFBQyxHQUFHLEVBQUMsbUJBQW1CLEVBQUMsRUFBRSxFQUFDLGtCQUFrQixFQUFDO1lBQy9DLEVBQUMsR0FBRyxFQUFDLGVBQWUsRUFBQyxFQUFFLEVBQUMsZ0JBQWdCLEVBQUM7WUFDekMsRUFBQyxHQUFHLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBQyxtQkFBbUIsRUFBQztZQUMzQyxFQUFDLEdBQUcsRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQztZQUM1QixFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3JDLEVBQUMsR0FBRyxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBQyxrQkFBa0IsRUFBQztZQUM1QyxFQUFDLEdBQUcsRUFBQyxhQUFhLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ3ZDLEVBQUMsR0FBRyxFQUFDLDRCQUE0QixFQUFDLEVBQUUsRUFBQyxnQ0FBZ0MsRUFBQztZQUN0RSxFQUFDLEdBQUcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFDLE1BQU0sRUFBQztZQUN0QixFQUFDLEdBQUcsRUFBQyxTQUFTLEVBQUMsRUFBRSxFQUFDLGdCQUFnQixFQUFDO1lBQ25DLEVBQUMsR0FBRyxFQUFDLDJCQUEyQixFQUFDLEVBQUUsRUFBQyxtQ0FBbUMsRUFBQztZQUN4RSxFQUFDLEdBQUcsRUFBQyxXQUFXLEVBQUMsRUFBRSxFQUFDLGlCQUFpQixFQUFDO1lBQ3RDLEVBQUMsR0FBRyxFQUFDLGNBQWMsRUFBQyxFQUFFLEVBQUMsZUFBZSxFQUFDO1lBQ3ZDLEVBQUMsR0FBRyxFQUFDLFlBQVksRUFBQyxFQUFFLEVBQUMsY0FBYyxFQUFDO1lBQ3BDLEVBQUMsR0FBRyxFQUFDLHlCQUF5QixFQUFDLEVBQUUsRUFBQyw0QkFBNEIsRUFBQztZQUMvRCxFQUFDLEdBQUcsRUFBQyx1QkFBdUIsRUFBQyxFQUFFLEVBQUMsMEJBQTBCLEVBQUM7WUFDM0QsRUFBQyxHQUFHLEVBQUMsV0FBVyxFQUFDLEVBQUUsRUFBQyxXQUFXLEVBQUM7WUFDaEMsRUFBQyxHQUFHLEVBQUMsUUFBUSxFQUFDLEVBQUUsRUFBQyxVQUFVLEVBQUM7WUFDNUIsRUFBQyxHQUFHLEVBQUMsc0JBQXNCLEVBQUMsRUFBRSxFQUFDLHFCQUFxQixFQUFDO1lBQ3JELEVBQUMsR0FBRyxFQUFDLGdCQUFnQixFQUFDLEVBQUUsRUFBQyxlQUFlLEVBQUM7WUFDekMsRUFBQyxHQUFHLEVBQUMsb0JBQW9CLEVBQUMsRUFBRSxFQUFDLG1CQUFtQixFQUFDO1lBQ2pELEVBQUMsR0FBRyxFQUFDLDJCQUEyQixFQUFDLEVBQUUsRUFBQyxrQ0FBa0MsRUFBQztZQUN2RSxFQUFDLEdBQUcsRUFBQyxrQkFBa0IsRUFBQyxFQUFFLEVBQUMsMEJBQTBCLEVBQUM7WUFDdEQsRUFBQyxHQUFHLEVBQUMsaUNBQWlDLEVBQUMsRUFBRSxFQUFDLHlDQUF5QyxFQUFDO1NBQ3JGLENBQUM7SUFZSixDQUFDOzs7OztJQVZDLFNBQVMsQ0FBQyxLQUFVO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxFQUFFLENBQUM7YUFDZjtTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUF2Q0YsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7YUFDekI7Ozs7SUFFQywrQ0F5QkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlVHJhbnNsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlVHJhbnNsZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gIHB1YmxpYyBsYW5ndWFnZURhdGFTZXQ6YW55PVtcbiAgICB7ZW5nOlwiQXV0aG9yIDxici8+IE5hbWVcIixlczpcIk5vbWJyZSBkZWwgYXV0b3JcIn0sXG4gICAge2VuZzpcIlByaW9yaXR5IG9mIEJcIixlczpcIlByaW9yaWRhZCBkZSBCXCJ9LFxuICAgIHtlbmc6XCJCbG9nIFRpdGxlIDlcIixlczpcIlTDrXR1bG8gZGVsIGJsb2cgOVwifSxcbiAgICB7ZW5nOlwiQWN0aXZlID9cIixlczpcIkFjdGl2YVwifSxcbiAgICB7ZW5nOlwiV3JvbmcgTyAxXCIsZXM6XCJJbmNvcnJlY3RvIE8gMVwifSxcbiAgICB7ZW5nOlwiQ29sb3JlZCBTdGF0dXNcIixlczpcIkVzdGFkbyBjb2xvcmVhZG9cIn0sXG4gICAge2VuZzpcIkRhdGVkIEFkZGVkXCIsZXM6XCJGZWNoYSBhZ3JlZ2FkYVwifSxcbiAgICB7ZW5nOlwiQ3JlYXRlZCBEYXRlIHdpdGggVGltZSAxMTFcIixlczpcIkZlY2hhIGRlIGNyZWFjacOzbiBjb24gaG9yYSAxMTFcIn0sXG4gICAge2VuZzpcIkRlc2NcIixlczpcIkRlc2NcIn0sXG4gICAge2VuZzpcIkFjdGlvbnNcIixlczpcIkNvbXBvcnRhbWllbnRvXCJ9LFxuICAgIHtlbmc6XCJmYiBzZWFyY2ggd2l0aCBibG9nIHRpdGxlXCIsZXM6XCJiw7pzcXVlZGEgZGUgZmIgY29uIHTDrXR1bG8gZGUgYmxvZ1wifSwgLyogYWN0aW9ucyBidXR0b24gc2V0IHN0YXJ0IGhlcmUqL1xuICAgIHtlbmc6XCJtYXNrIGJsb2dcIixlczpcImJsb2cgZGUgbcOhc2NhcmFcIn0sXG4gICAge2VuZzpcImRvd25Mb2FkIFBkZlwiLGVzOlwiRGVzY2FyZ2FyIFBERlwifSxcbiAgICB7ZW5nOlwiZmIgcHJvZmlsZVwiLGVzOlwicGVyZmlsIGRlIGZiXCJ9LFxuICAgIHtlbmc6XCJmYiBwcm9maWxlIGZvciBpbmFjdGl2ZVwiLGVzOlwicGVyZmlsIGRlIGZiIHBhcmEgaW5hY3Rpdm9cIn0sXG4gICAge2VuZzpcImZiIHByb2ZpbGUgZm9yIGFjdGl2ZVwiLGVzOlwicGVyZmlsIGRlIGZiIHBhcmEgYWN0aXZvXCJ9LFxuICAgIHtlbmc6XCJzZWUgYnJhbmRcIixlczpcInZlciBtYXJjYVwifSxcbiAgICB7ZW5nOlwiZGVsZXRlXCIsZXM6XCJFbGltaW5hclwifSxcbiAgICB7ZW5nOlwic2VlIGJyYW5kIHdpdGggcGFyYW1cIixlczpcInZlciBtYXJjYSBjb24gcGFyYW1cIn0sXG4gICAge2VuZzpcIkRlc2MgZnJvbSBkYXRhXCIsZXM6XCJEZXNjIGRlIGRhdG9zXCJ9LFxuICAgIHtlbmc6XCJEZXNjIGZyb20gYXBpIGRhdGFcIixlczpcIkRlc2MgZGUgZGF0b3MgYXBpXCJ9LFxuICAgIHtlbmc6XCJmYiBzZWFyY2ggd2l0aCBibG9nIHRpdGxlXCIsZXM6XCJmYiBidXNjYXIgY29uIGVsIHTDrXR1bG8gZGVsIGJsb2dcIn0sXG4gICAge2VuZzpcIkN1c3RvbSBCIExpc3RuZXJcIixlczpcIkxpc3RhZG9yIEIgcGVyc29uYWxpemFkb1wifSxcbiAgICB7ZW5nOlwiRyBzZWFyY2ggd2l0aCBibG9nIHRpdGxlIEFDdGl2ZVwiLGVzOlwiQsO6c3F1ZWRhIGRlIEcgY29uIHTDrXR1bG8gZGUgYmxvZyBBQ3RpdmVcIn0sXG4gIF07XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkgeyAgXG4gICAgY29uc29sZS5sb2coXCJwaXBlIHZhbHVlXCIsdmFsdWUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbmcgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwuZXM7XG4gICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19