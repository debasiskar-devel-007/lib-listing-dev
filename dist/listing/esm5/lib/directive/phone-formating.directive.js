/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
var PhoneFormatingDirective = /** @class */ (function () {
    function PhoneFormatingDirective(ngControl) {
        this.ngControl = ngControl;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PhoneFormatingDirective.prototype.onModelChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onInputChange(event, false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PhoneFormatingDirective.prototype.keydownBackspace = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onInputChange(event.target.value, true);
    };
    /**
     * @param {?} event
     * @param {?} backspace
     * @return {?}
     */
    PhoneFormatingDirective.prototype.onInputChange = /**
     * @param {?} event
     * @param {?} backspace
     * @return {?}
     */
    function (event, backspace) {
        //console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',event);
        if (event != null && typeof (event) != 'undefined') {
            /** @type {?} */
            var newVal = event.replace(/\D/g, '');
            if (backspace && newVal.length <= 6) {
                newVal = newVal.substring(0, newVal.length - 1);
            }
            if (newVal.length === 0) {
                // newVal = '';
                newVal = event.replace(/\D/g, '');
                // this.ngControl.valueAccessor.writeValue(newVal='');
                //console.log('length 0',newVal);
            }
            else if (newVal.length <= 3) {
                newVal = newVal.replace(/^(\d{0,3})/, '($1)');
                // console.log('length <3',newVal);
            }
            else if (newVal.length <= 6) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
                //  console.log('length <6',newVal);
            }
            else if (newVal.length <= 10) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
                //  console.log('length <10',newVal);
            }
            else {
                newVal = newVal.substring(0, 10);
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
                //  console.log('else',newVal);
            }
            this.ngControl.valueAccessor.writeValue(newVal);
            //console.log(this.ngControl,'lll');
        }
    };
    PhoneFormatingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[formControlName][appPhoneMask]'
                },] }
    ];
    /** @nocollapse */
    PhoneFormatingDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    PhoneFormatingDirective.propDecorators = {
        onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
        keydownBackspace: [{ type: HostListener, args: ['keydown.backspace', ['$event'],] }]
    };
    return PhoneFormatingDirective;
}());
export { PhoneFormatingDirective };
if (false) {
    /** @type {?} */
    PhoneFormatingDirective.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZm9ybWF0aW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL3Bob25lLWZvcm1hdGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQztJQUtFLGlDQUFtQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBQUksQ0FBQzs7Ozs7SUFHNUMsK0NBQWE7Ozs7SUFEYixVQUNjLEtBQUs7UUFDakIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7SUFHRCxrREFBZ0I7Ozs7SUFEaEIsVUFDaUIsS0FBSztRQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQy9DLENBQUM7Ozs7OztJQUdELCtDQUFhOzs7OztJQUFiLFVBQWMsS0FBSyxFQUFFLFNBQVM7UUFDNUIsdURBQXVEO1FBQ3ZELElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFDOztnQkFDN0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixlQUFlO2dCQUNiLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsc0RBQXNEO2dCQUN0RCxpQ0FBaUM7YUFDbEM7aUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxtQ0FBbUM7YUFDbkM7aUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzVELG9DQUFvQzthQUNuQztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDeEUscUNBQXFDO2FBQ3BDO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3hFLCtCQUErQjthQUM5QjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxvQ0FBb0M7U0FDckM7SUFDRCxDQUFDOztnQkEvQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQ0FBaUM7aUJBQzVDOzs7O2dCQUpRLFNBQVM7OztnQ0FTZixZQUFZLFNBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO21DQUt4QyxZQUFZLFNBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBcUMvQyw4QkFBQztDQUFBLEFBakRELElBaURDO1NBOUNZLHVCQUF1Qjs7O0lBRXRCLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ0NvbnRyb2wgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tmb3JtQ29udHJvbE5hbWVdW2FwcFBob25lTWFza10nXG59KVxuZXhwb3J0IGNsYXNzIFBob25lRm9ybWF0aW5nRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgbmdDb250cm9sOiBOZ0NvbnRyb2wpIHsgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ25nTW9kZWxDaGFuZ2UnLCBbJyRldmVudCddKVxuICBvbk1vZGVsQ2hhbmdlKGV2ZW50KSB7XG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBmYWxzZSk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmJhY2tzcGFjZScsIFsnJGV2ZW50J10pXG4gIGtleWRvd25CYWNrc3BhY2UoZXZlbnQpIHtcbiAgICB0aGlzLm9uSW5wdXRDaGFuZ2UoZXZlbnQudGFyZ2V0LnZhbHVlLCB0cnVlKTtcbiAgfVxuICBcblxuICBvbklucHV0Q2hhbmdlKGV2ZW50LCBiYWNrc3BhY2UpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlJyxldmVudCk7XG4gICAgaWYoZXZlbnQgIT0gbnVsbCAmJiB0eXBlb2YoZXZlbnQpICE9ICd1bmRlZmluZWQnKXtcbiAgICBsZXQgbmV3VmFsID0gZXZlbnQucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICBpZiAoYmFja3NwYWNlICYmIG5ld1ZhbC5sZW5ndGggPD0gNikge1xuICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCBuZXdWYWwubGVuZ3RoIC0gMSk7XG4gICAgfVxuICAgIGlmIChuZXdWYWwubGVuZ3RoID09PSAwKSB7XG4gICAgIC8vIG5ld1ZhbCA9ICcnO1xuICAgICAgIG5ld1ZhbCA9IGV2ZW50LnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgICAvLyB0aGlzLm5nQ29udHJvbC52YWx1ZUFjY2Vzc29yLndyaXRlVmFsdWUobmV3VmFsPScnKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ2xlbmd0aCAwJyxuZXdWYWwpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsLmxlbmd0aCA8PSAzKSB7XG4gICAgICBuZXdWYWwgPSBuZXdWYWwucmVwbGFjZSgvXihcXGR7MCwzfSkvLCAnKCQxKScpO1xuICAgICAvLyBjb25zb2xlLmxvZygnbGVuZ3RoIDwzJyxuZXdWYWwpO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsLmxlbmd0aCA8PSA2KSB7XG4gICAgICBuZXdWYWwgPSBuZXdWYWwucmVwbGFjZSgvXihcXGR7MCwzfSkoXFxkezAsM30pLywgJygkMSkgJDInKTtcbiAgICAvLyAgY29uc29sZS5sb2coJ2xlbmd0aCA8NicsbmV3VmFsKTtcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbC5sZW5ndGggPD0gMTApIHtcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5yZXBsYWNlKC9eKFxcZHswLDN9KShcXGR7MCwzfSkoXFxkezAsNH0pLywgJygkMSkgJDItJDMnKTtcbiAgICAvLyAgY29uc29sZS5sb2coJ2xlbmd0aCA8MTAnLG5ld1ZhbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgMTApO1xuICAgICAgbmV3VmFsID0gbmV3VmFsLnJlcGxhY2UoL14oXFxkezAsM30pKFxcZHswLDN9KShcXGR7MCw0fSkvLCAnKCQxKSAkMi0kMycpO1xuICAgIC8vICBjb25zb2xlLmxvZygnZWxzZScsbmV3VmFsKTtcbiAgICB9XG4gICAgdGhpcy5uZ0NvbnRyb2wudmFsdWVBY2Nlc3Nvci53cml0ZVZhbHVlKG5ld1ZhbCk7XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm5nQ29udHJvbCwnbGxsJyk7XG4gIH1cbiAgfVxuXG59XG4iXX0=