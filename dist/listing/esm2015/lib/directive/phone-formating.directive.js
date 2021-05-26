/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
export class PhoneFormatingDirective {
    /**
     * @param {?} ngControl
     */
    constructor(ngControl) {
        this.ngControl = ngControl;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onModelChange(event) {
        this.onInputChange(event, false);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownBackspace(event) {
        this.onInputChange(event.target.value, true);
    }
    /**
     * @param {?} event
     * @param {?} backspace
     * @return {?}
     */
    onInputChange(event, backspace) {
        //console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',event);
        if (event != null && typeof (event) != 'undefined') {
            /** @type {?} */
            let newVal = event.replace(/\D/g, '');
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
    }
}
PhoneFormatingDirective.decorators = [
    { type: Directive, args: [{
                selector: '[formControlName][appPhoneMask]'
            },] }
];
/** @nocollapse */
PhoneFormatingDirective.ctorParameters = () => [
    { type: NgControl }
];
PhoneFormatingDirective.propDecorators = {
    onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
    keydownBackspace: [{ type: HostListener, args: ['keydown.backspace', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    PhoneFormatingDirective.prototype.ngControl;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGhvbmUtZm9ybWF0aW5nLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2xpc3RpbmctYW5ndWxhcjcvIiwic291cmNlcyI6WyJsaWIvZGlyZWN0aXZlL3Bob25lLWZvcm1hdGluZy5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3hELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUszQyxNQUFNLE9BQU8sdUJBQXVCOzs7O0lBRWxDLFlBQW1CLFNBQW9CO1FBQXBCLGNBQVMsR0FBVCxTQUFTLENBQVc7SUFBSSxDQUFDOzs7OztJQUc1QyxhQUFhLENBQUMsS0FBSztRQUNqQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7OztJQUdELGdCQUFnQixDQUFDLEtBQUs7UUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsS0FBSyxFQUFFLFNBQVM7UUFDNUIsdURBQXVEO1FBQ3ZELElBQUcsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFNLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxFQUFDOztnQkFDN0MsTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFNBQVMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDakQ7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUN4QixlQUFlO2dCQUNiLE1BQU0sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDbkMsc0RBQXNEO2dCQUN0RCxpQ0FBaUM7YUFDbEM7aUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQyxtQ0FBbUM7YUFDbkM7aUJBQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtnQkFDN0IsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMscUJBQXFCLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzVELG9DQUFvQzthQUNuQztpQkFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO2dCQUM5QixNQUFNLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyw4QkFBOEIsRUFBRSxZQUFZLENBQUMsQ0FBQztnQkFDeEUscUNBQXFDO2FBQ3BDO2lCQUFNO2dCQUNMLE1BQU0sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDakMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsOEJBQThCLEVBQUUsWUFBWSxDQUFDLENBQUM7Z0JBQ3hFLCtCQUErQjthQUM5QjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRCxvQ0FBb0M7U0FDckM7SUFDRCxDQUFDOzs7WUEvQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQ0FBaUM7YUFDNUM7Ozs7WUFKUSxTQUFTOzs7NEJBU2YsWUFBWSxTQUFDLGVBQWUsRUFBRSxDQUFDLFFBQVEsQ0FBQzsrQkFLeEMsWUFBWSxTQUFDLG1CQUFtQixFQUFFLENBQUMsUUFBUSxDQUFDOzs7O0lBUGpDLDRDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2Zvcm1Db250cm9sTmFtZV1bYXBwUGhvbmVNYXNrXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBob25lRm9ybWF0aW5nRGlyZWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5nQ29udHJvbDogTmdDb250cm9sKSB7IH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignbmdNb2RlbENoYW5nZScsIFsnJGV2ZW50J10pXHJcbiAgb25Nb2RlbENoYW5nZShldmVudCkge1xyXG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50LCBmYWxzZSk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLmJhY2tzcGFjZScsIFsnJGV2ZW50J10pXHJcbiAga2V5ZG93bkJhY2tzcGFjZShldmVudCkge1xyXG4gICAgdGhpcy5vbklucHV0Q2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSwgdHJ1ZSk7XHJcbiAgfVxyXG4gIFxyXG5cclxuICBvbklucHV0Q2hhbmdlKGV2ZW50LCBiYWNrc3BhY2UpIHtcclxuICAgIC8vY29uc29sZS5sb2coJ2VlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUnLGV2ZW50KTtcclxuICAgIGlmKGV2ZW50ICE9IG51bGwgJiYgdHlwZW9mKGV2ZW50KSAhPSAndW5kZWZpbmVkJyl7XHJcbiAgICBsZXQgbmV3VmFsID0gZXZlbnQucmVwbGFjZSgvXFxEL2csICcnKTtcclxuICAgIGlmIChiYWNrc3BhY2UgJiYgbmV3VmFsLmxlbmd0aCA8PSA2KSB7XHJcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5zdWJzdHJpbmcoMCwgbmV3VmFsLmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG4gICAgaWYgKG5ld1ZhbC5sZW5ndGggPT09IDApIHtcclxuICAgICAvLyBuZXdWYWwgPSAnJztcclxuICAgICAgIG5ld1ZhbCA9IGV2ZW50LnJlcGxhY2UoL1xcRC9nLCAnJyk7XHJcbiAgICAgIC8vIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWw9JycpO1xyXG4gICAgICAvL2NvbnNvbGUubG9nKCdsZW5ndGggMCcsbmV3VmFsKTtcclxuICAgIH0gZWxzZSBpZiAobmV3VmFsLmxlbmd0aCA8PSAzKSB7XHJcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5yZXBsYWNlKC9eKFxcZHswLDN9KS8sICcoJDEpJyk7XHJcbiAgICAgLy8gY29uc29sZS5sb2coJ2xlbmd0aCA8MycsbmV3VmFsKTtcclxuICAgIH0gZWxzZSBpZiAobmV3VmFsLmxlbmd0aCA8PSA2KSB7XHJcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5yZXBsYWNlKC9eKFxcZHswLDN9KShcXGR7MCwzfSkvLCAnKCQxKSAkMicpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKCdsZW5ndGggPDYnLG5ld1ZhbCk7XHJcbiAgICB9IGVsc2UgaWYgKG5ld1ZhbC5sZW5ndGggPD0gMTApIHtcclxuICAgICAgbmV3VmFsID0gbmV3VmFsLnJlcGxhY2UoL14oXFxkezAsM30pKFxcZHswLDN9KShcXGR7MCw0fSkvLCAnKCQxKSAkMi0kMycpO1xyXG4gICAgLy8gIGNvbnNvbGUubG9nKCdsZW5ndGggPDEwJyxuZXdWYWwpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3VmFsID0gbmV3VmFsLnN1YnN0cmluZygwLCAxMCk7XHJcbiAgICAgIG5ld1ZhbCA9IG5ld1ZhbC5yZXBsYWNlKC9eKFxcZHswLDN9KShcXGR7MCwzfSkoXFxkezAsNH0pLywgJygkMSkgJDItJDMnKTtcclxuICAgIC8vICBjb25zb2xlLmxvZygnZWxzZScsbmV3VmFsKTtcclxuICAgIH1cclxuICAgIHRoaXMubmdDb250cm9sLnZhbHVlQWNjZXNzb3Iud3JpdGVWYWx1ZShuZXdWYWwpO1xyXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLm5nQ29udHJvbCwnbGxsJyk7XHJcbiAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19