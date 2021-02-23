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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZGF0YS5waXBlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9jdXN0b21kYXRhLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxjQUFjOzs7Ozs7O0lBRXpCLFNBQVMsQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLEdBQVE7UUFDdkMsOENBQThDO1FBQzlDLG1EQUFtRDtRQUVuRCxvQ0FBb0M7UUFDcEMsMkNBQTJDO1FBQzNDLDZDQUE2QztRQUM3QyxnQkFBZ0I7UUFDaEIsV0FBVztRQUNYLGVBQWU7UUFDZixJQUFJO1FBRUosSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxJQUFJLFVBQVUsRUFBRzs7Z0JBQzNFLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRztZQUN0QixPQUFPLE1BQU0sQ0FBQztTQUNmO2FBQU07WUFDTCxPQUFPLEdBQUcsQ0FBQTtTQUNYO0lBQ0gsQ0FBQzs7O1lBdkJGLElBQUksU0FBQztnQkFDSixJQUFJLEVBQUUsWUFBWTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQFBpcGUoe1xuICBuYW1lOiAnQ3VzdG9tUGlwZSdcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZGF0YVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcblxuICB0cmFuc2Zvcm0odmFsdWU6IGFueSwgbmFtZTogYW55LCB2YWw6IGFueSk6IGFueSB7XG4gICAgLy8gbGV0IG5ld1N0ciA9IGAke2JlZm9yZX0gJHt2YWx1ZX0gJHthZnRlcn1gO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLG5hbWUsdmFsLCdwaXBlKysrKysrKysrKz09PT0nKVxuXG4gICAgLy8gaWYgKG5hbWUgPT0gJ2Rlc2NyaXB0aW9uX2h0bWwnKSB7XG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyh2YWwubGVuZ3RoLCAnZGVzYz09PT0nKVxuICAgIC8vICAgdmFyIHN0ciA9IHZhbC5zdWJzdHJpbmcoMCwgMjAwKSArJy4uLi4nO1xuICAgIC8vICAgcmV0dXJuIHN0cjtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgcmV0dXJuIHZhbFxuICAgIC8vIH1cblxuICAgIGlmIChuYW1lLm1hdGNoKC9kb2xsYXIvZykgPT0gJ2RvbGxhcicgfHwgbmFtZS5tYXRjaCgvY3VycmVuY3kvZykgPT0gJ2N1cnJlbmN5JyApIHtcbiAgICAgIHZhciBkb2xsYXIgPSAnJCcgKyB2YWw7XG4gICAgICByZXR1cm4gZG9sbGFyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdmFsXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==