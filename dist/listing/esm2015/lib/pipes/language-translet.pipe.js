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
            console.log("P{P{P", res);
        }));
        // }, 100);
        console.log("this.languageDataSet++++", this.languageDataSet);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFtQixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUh0RCxvQkFBZSxHQUFLLEVBQUUsQ0FBQztRQUN2QiwwQkFBcUIsR0FBSyxFQUFFLENBQUM7OztZQUk5QixXQUFXLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDO1FBQ0osV0FBVztRQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRy9ELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsMEVBQTBFO1FBQzFFLEtBQUssSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtZQUNwQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzthQUN4QztTQUNOO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7WUFsQ0YsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxrQkFBa0I7YUFDekI7Ozs7WUFIUSx3QkFBd0I7Ozs7SUFNL0IsK0NBQThCOztJQUM5QixxREFBb0M7O0lBRXhCLGlEQUFpRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL29ic2VydmFibGVzZXJ2aWNlLnNlcnZpY2VcIjtcbkBQaXBlKHtcbiAgbmFtZTogJ2xhbmd1YWdlVHJhbnNsZXQnXG59KVxuZXhwb3J0IGNsYXNzIExhbmd1YWdlVHJhbnNsZXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XG4gXG4gIHB1YmxpYyBsYW5ndWFnZURhdGFTZXQ6YW55PVtdO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2VDb2RlOmFueT0nJztcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6T2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlKXtcbiAgICAvLyBsZXQgc2VydmljZURhdGE6YW55O1xuICAgIGxldCBzZXJ2aWNlRGF0YTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRtdWx0aWxpbmd1YWxEYXRhKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLmxhbmd1YWdlRGF0YVNldD1yZXM7XG5cbiAgICB9KTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGxldCBnZXRjb252ZXJ0VG9Db2RlOiBhbnkgPSB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLmdldGNvbnZlcnRUb0xhbmd1YWdlKCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlPXJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJQe1B7UFwiLHJlcyk7XG4gICAgICB9KTtcbiAgICAvLyB9LCAxMDApO1xuICAgIFxuICAgIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZURhdGFTZXQrKysrXCIsdGhpcy5sYW5ndWFnZURhdGFTZXQpO1xuICAgXG5cbiAgfVxuXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55KTogYW55IHsgXG4gICAgLy8gY29uc29sZS5sb2coXCIgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVcIiwgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGUpO1xuICAgIGZvciAobGV0IHZhbCBvZiB0aGlzLmxhbmd1YWdlRGF0YVNldCkge1xuICAgICAgaWYgKHZhbC5lbmcgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWxbdGhpcy5jb252ZXJ0VG9MYW5ndWFnZUNvZGVdO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbn1cbiJdfQ==