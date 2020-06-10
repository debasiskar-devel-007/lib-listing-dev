/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class YoutubeplayerComponent {
    /**
     * @param {?} sanitizer
     */
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} id
     * @return {?}
     */
    set videoid(id) {
        this.id = (id) || '<no name set>';
        this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
        // console.warn(this.id);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
YoutubeplayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-youtubeplayer',
                template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                styles: [""]
            }] }
];
/** @nocollapse */
YoutubeplayerComponent.ctorParameters = () => [
    { type: DomSanitizer }
];
YoutubeplayerComponent.propDecorators = {
    videoid: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    YoutubeplayerComponent.prototype.id;
    /** @type {?} */
    YoutubeplayerComponent.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU96RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBU2pDLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDOzs7OztJQU4vQyxJQUNJLE9BQU8sQ0FBQyxFQUFPO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLGdDQUFnQyxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUMvRyx5QkFBeUI7SUFDM0IsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLDZMQUE2Qzs7YUFFOUM7Ozs7WUFOUSxZQUFZOzs7c0JBVWxCLEtBQUs7Ozs7SUFGTixvQ0FBUTs7SUFRSSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWIteW91dHViZXBsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAnLi95b3V0dWJlcGxheWVyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4veW91dHViZXBsYXllci5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgWW91dHViZXBsYXllckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGlkOiBhbnk7XG5cbiAgQElucHV0KCkgICAgICAgICAgLy8gc2V0dGluZyB0aGUgc2VydmVyIHVybCBmcm9tIHByb2plY3RcbiAgc2V0IHZpZGVvaWQoaWQ6IGFueSkge1xuICAgIHRoaXMuaWQgPSAoaWQpIHx8ICc8bm8gbmFtZSBzZXQ+JztcbiAgICB0aGlzLmlkID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKCdodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgaWQgKyAnP2F1dG9wbGF5PTEnKTtcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy5pZCk7XG4gIH1cbiAgY29uc3RydWN0b3IocHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iXX0=