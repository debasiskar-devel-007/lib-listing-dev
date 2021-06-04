/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
import { ObservableserviceService } from "../service/observableservice.service";
export class LanguageTransletPipe {
    /**
     * @param {?} observableService
     */
    constructor(observableService) {
        this.observableService = observableService;
        this.languageDataSet = [];
        // let serviceData:any;
        /** @type {?} */
        let serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.languageDataSet = res;
        }));
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
        return "value";
    }
}
LanguageTransletPipe.decorators = [
    { type: Pipe, args: [{
                name: 'languageTranslet'
            },] }
];
/** @nocollapse */
LanguageTransletPipe.ctorParameters = () => [
    { type: ObservableserviceService }
];
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
    /** @type {?} */
    LanguageTransletPipe.prototype.observableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUkvQixZQUFtQixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUZ0RCxvQkFBZSxHQUFLLEVBQUUsQ0FBQzs7O1lBSXhCLFdBQVcsR0FBUSxJQUFJLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDbEYsSUFBSSxDQUFDLGVBQWUsR0FBQyxHQUFHLENBQUM7UUFFM0IsQ0FBQyxFQUFDO0lBRUosQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDaEIsT0FBTyxHQUFHLENBQUMsRUFBRSxDQUFDO2FBQ2Y7U0FDTjtRQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2IsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7O1lBekJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCOzs7O1lBSFEsd0JBQXdCOzs7O0lBTS9CLCtDQUE4Qjs7SUFFbEIsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGVTZXJ2aWNlOk9ic2VydmFibGVzZXJ2aWNlU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgIFxuICAgIGNvbnNvbGUubG9nKFwicGlwZSB2YWx1ZVwiLHZhbHVlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsLmVzO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICAgIHJldHVybiBcInZhbHVlXCI7XG4gIH1cblxufVxuIl19