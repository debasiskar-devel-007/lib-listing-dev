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
        console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvcGlwZXMvbGFuZ3VhZ2UtdHJhbnNsZXQucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDcEQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFJaEYsTUFBTSxPQUFPLG9CQUFvQjs7OztJQUsvQixZQUFtQixpQkFBMEM7UUFBMUMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUF5QjtRQUh0RCxvQkFBZSxHQUFLLEVBQUUsQ0FBQztRQUN2QiwwQkFBcUIsR0FBSyxFQUFFLENBQUM7OztZQUk5QixXQUFXLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xGLElBQUksQ0FBQyxlQUFlLEdBQUMsR0FBRyxDQUFDO1FBRTNCLENBQUMsRUFBQzs7O1lBRUksZ0JBQWdCLEdBQVEsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixFQUFFLENBQUMsU0FBUzs7OztRQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3hGLElBQUksQ0FBQyxxQkFBcUIsR0FBQyxHQUFHLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQyxFQUFDO1FBQ0osV0FBVztRQUVYLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLEVBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRy9ELENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLEtBQVU7UUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw2QkFBNkIsRUFBRSxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUN2RSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxlQUFlLEVBQUU7WUFDcEMsSUFBSSxHQUFHLENBQUMsR0FBRyxJQUFJLEtBQUssRUFBRTtnQkFDaEIsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7YUFDeEM7U0FDTjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7O1lBbENGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsa0JBQWtCO2FBQ3pCOzs7O1lBSFEsd0JBQXdCOzs7O0lBTS9CLCtDQUE4Qjs7SUFDOUIscURBQW9DOztJQUV4QixpREFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5AUGlwZSh7XG4gIG5hbWU6ICdsYW5ndWFnZVRyYW5zbGV0J1xufSlcbmV4cG9ydCBjbGFzcyBMYW5ndWFnZVRyYW5zbGV0UGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuIFxuICBwdWJsaWMgbGFuZ3VhZ2VEYXRhU2V0OmFueT1bXTtcbiAgcHVibGljIGNvbnZlcnRUb0xhbmd1YWdlQ29kZTphbnk9Jyc7XG5cbiAgY29uc3RydWN0b3IocHVibGljIG9ic2VydmFibGVTZXJ2aWNlOk9ic2VydmFibGVzZXJ2aWNlU2VydmljZSl7XG4gICAgLy8gbGV0IHNlcnZpY2VEYXRhOmFueTtcbiAgICBsZXQgc2VydmljZURhdGE6IGFueSA9IHRoaXMub2JzZXJ2YWJsZVNlcnZpY2UuZ2V0bXVsdGlsaW5ndWFsRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5sYW5ndWFnZURhdGFTZXQ9cmVzO1xuXG4gICAgfSk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBsZXQgZ2V0Y29udmVydFRvQ29kZTogYW55ID0gdGhpcy5vYnNlcnZhYmxlU2VydmljZS5nZXRjb252ZXJ0VG9MYW5ndWFnZSgpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlQ29kZT1yZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiUHtQe1BcIixyZXMpO1xuICAgICAgfSk7XG4gICAgLy8gfSwgMTAwKTtcbiAgICBcbiAgICBjb25zb2xlLmxvZyhcInRoaXMubGFuZ3VhZ2VEYXRhU2V0KysrK1wiLHRoaXMubGFuZ3VhZ2VEYXRhU2V0KTtcbiAgIFxuXG4gIH1cblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IGFueSB7IFxuICAgIGNvbnNvbGUubG9nKFwiIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXCIsIHRoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlKTtcbiAgICBmb3IgKGxldCB2YWwgb2YgdGhpcy5sYW5ndWFnZURhdGFTZXQpIHtcbiAgICAgIGlmICh2YWwuZW5nID09IHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdmFsW3RoaXMuY29udmVydFRvTGFuZ3VhZ2VDb2RlXTtcbiAgICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG59XG4iXX0=