/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Pipe } from '@angular/core';
export class CustomdataPipe {
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    transform(value, name, val) {
        // let newStr = `${before} ${value} ${after}`;
        // console.log(value,name,val,'pipe++++++++++====')
        // if (name == 'description_html') {
        //   // console.log(val.length, 'desc====')
        //   var str = val.substring(0, 200) +'....';
        //   return str;
        // } else {
        //   return val
        // }
        if (name.match(/dollar/g) == 'dollar' || name.match(/currency/g) == 'currency') {
            /** @type {?} */
            var dollar = '$' + val;
            return dollar;
        }
        else {
            return val;
        }
    }
}
CustomdataPipe.decorators = [
    { type: Pipe, args: [{
                name: 'CustomPipe'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZGF0YS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21kYXRhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBRXpCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLEdBQVE7UUFDdkMsOENBQThDO1FBQzlDLG1EQUFtRDtRQUVuRCxvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLDZDQUE2QztRQUM3QyxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGVBQWU7UUFDZixJQUFJO1FBRUosSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFVBQVUsRUFBRzs7Z0JBQzNFLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRztZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQTtTQUNYO0lBQ0gsQ0FBQzs7O1lBdkJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsWUFBWTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnQ3VzdG9tUGlwZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEN1c3RvbWRhdGFQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBuYW1lOiBhbnksIHZhbDogYW55KTogYW55IHtcclxuICAgIC8vIGxldCBuZXdTdHIgPSBgJHtiZWZvcmV9ICR7dmFsdWV9ICR7YWZ0ZXJ9YDtcclxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLG5hbWUsdmFsLCdwaXBlKysrKysrKysrKz09PT0nKVxyXG5cclxuICAgIC8vIGlmIChuYW1lID09ICdkZXNjcmlwdGlvbl9odG1sJykge1xyXG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyh2YWwubGVuZ3RoLCAnZGVzYz09PT0nKVxyXG4gICAgLy8gICB2YXIgc3RyID0gdmFsLnN1YnN0cmluZygwLCAyMDApICsnLi4uLic7XHJcbiAgICAvLyAgIHJldHVybiBzdHI7XHJcbiAgICAvLyB9IGVsc2Uge1xyXG4gICAgLy8gICByZXR1cm4gdmFsXHJcbiAgICAvLyB9XHJcblxyXG4gICAgaWYgKG5hbWUubWF0Y2goL2RvbGxhci9nKSA9PSAnZG9sbGFyJyB8fCBuYW1lLm1hdGNoKC9jdXJyZW5jeS9nKSA9PSAnY3VycmVuY3knICkge1xyXG4gICAgICB2YXIgZG9sbGFyID0gJyQnICsgdmFsO1xyXG4gICAgICByZXR1cm4gZG9sbGFyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHZhbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19