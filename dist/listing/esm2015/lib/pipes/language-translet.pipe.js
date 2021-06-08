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
        this.convertToLanguageCode = '';
        // let serviceData:any;
        /** @type {?} */
        let serviceData = this.observableService.getmultilingualData().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.languageDataSet = res;
        }));
        // setTimeout(() => {
        /** @type {?} */
        let getconvertToCode = this.observableService.getconvertToLanguage().subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.convertToLanguageCode = res;
            // console.log("P{P{P",res);
        }));
        // }, 100);
        // console.log("this.languageDataSet++++",this.languageDataSet);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    transform(value) {
        // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
        for (let val of this.languageDataSet) {
            if (val.eng == value) {
                return val[this.convertToLanguageCode];
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
/** @nocollapse */
LanguageTransletPipe.ctorParameters = () => [
    { type: ObservableserviceService }
];
if (false) {
    /** @type {?} */
    LanguageTransletPipe.prototype.languageDataSet;
    /** @type {?} */
    LanguageTransletPipe.prototype.convertToLanguageCode;
    /** @type {?} */
    LanguageTransletPipe.prototype.observableService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFtQixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUh0RCxvQkFBZSxHQUFLLEVBQUUsQ0FBQztRQUN2QiwwQkFBcUIsR0FBSyxFQUFFLENBQUM7OztZQUk5QixXQUFXLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsNEJBQTRCO1FBQzlCLENBQUMsRUFBQztRQUNKLFdBQVc7UUFFWCxnRUFBZ0U7SUFHbEUsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsS0FBVTtRQUNsQiwwRUFBMEU7UUFDMUUsS0FBSyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3BDLElBQUksR0FBRyxDQUFDLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ2hCLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2FBQ3hDO1NBQ047UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7OztZQWxDRixJQUFJLFNBQUM7Z0JBQ0osSUFBSSxFQUFFLGtCQUFrQjthQUN6Qjs7OztZQUhRLHdCQUF3Qjs7OztJQU0vQiwrQ0FBOEI7O0lBQzlCLHFEQUFvQzs7SUFFeEIsaURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuQFBpcGUoe1xuICBuYW1lOiAnbGFuZ3VhZ2VUcmFuc2xldCdcbn0pXG5leHBvcnQgY2xhc3MgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcbiBcbiAgcHVibGljIGxhbmd1YWdlRGF0YVNldDphbnk9W107XG4gIHB1YmxpYyBjb252ZXJ0VG9MYW5ndWFnZUNvZGU6YW55PScnO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTpPYnNlcnZhYmxlc2VydmljZVNlcnZpY2Upe1xuICAgIC8vIGxldCBzZXJ2aWNlRGF0YTphbnk7XG4gICAgbGV0IHNlcnZpY2VEYXRhOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldG11bHRpbGluZ3VhbERhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMubGFuZ3VhZ2VEYXRhU2V0PXJlcztcblxuICAgIH0pO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgbGV0IGdldGNvbnZlcnRUb0NvZGU6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0Y29udmVydFRvTGFuZ3VhZ2UoKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGU9cmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlB7UHtQXCIscmVzKTtcbiAgICAgIH0pO1xuICAgIC8vIH0sIDEwMCk7XG4gICAgXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmxhbmd1YWdlRGF0YVNldCsrKytcIix0aGlzLmxhbmd1YWdlRGF0YVNldCk7XG4gICBcblxuICB9XG5cbiAgdHJhbnNmb3JtKHZhbHVlOiBhbnkpOiBhbnkgeyBcbiAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZVwiLCB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZSk7XG4gICAgZm9yIChsZXQgdmFsIG9mIHRoaXMubGFuZ3VhZ2VEYXRhU2V0KSB7XG4gICAgICBpZiAodmFsLmVuZyA9PSB2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbFt0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZV07XG4gICAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cblxufVxuIl19