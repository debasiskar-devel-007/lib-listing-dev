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
                template: "\r\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieW91dHViZXBsYXllci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU96RCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBU2pDLFlBQW1CLFNBQXVCO1FBQXZCLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFBSSxDQUFDOzs7OztJQU4vQyxJQUNJLE9BQU8sQ0FBQyxFQUFPO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxlQUFlLENBQUM7UUFDbEMsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDLGdDQUFnQyxHQUFHLEVBQUUsR0FBRyxhQUFhLENBQUMsQ0FBQztRQUMvRyx5QkFBeUI7SUFDM0IsQ0FBQzs7OztJQUdELFFBQVE7SUFDUixDQUFDOzs7WUFqQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLCtMQUE2Qzs7YUFFOUM7Ozs7WUFOUSxZQUFZOzs7c0JBVWxCLEtBQUs7Ozs7SUFGTixvQ0FBUTs7SUFRSSwyQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCAsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2xpYi15b3V0dWJlcGxheWVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4veW91dHViZXBsYXllci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4veW91dHViZXBsYXllci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFlvdXR1YmVwbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlkOiBhbnk7XHJcblxyXG4gIEBJbnB1dCgpICAgICAgICAgIC8vIHNldHRpbmcgdGhlIHNlcnZlciB1cmwgZnJvbSBwcm9qZWN0XHJcbiAgc2V0IHZpZGVvaWQoaWQ6IGFueSkge1xyXG4gICAgdGhpcy5pZCA9IChpZCkgfHwgJzxubyBuYW1lIHNldD4nO1xyXG4gICAgdGhpcy5pZCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCgnaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGlkICsgJz9hdXRvcGxheT0xJyk7XHJcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy5pZCk7XHJcbiAgfVxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19