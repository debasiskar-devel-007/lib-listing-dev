/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { RouterModule } from '@angular/router';
import { YoutubeplayerComponent } from './youtubeplayer/youtubeplayer.component';
import { ShowformComponent } from './showform/showform.component';
import { CKEditorModule } from 'ng2-ckeditor';
// import { MatFileUploadModule } from 'angular-material-fileupload';x
// import { ImageCropperModule } from 'ngx-image-cropper';
import { CustomdataPipe } from './customdata.pipe';
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch],
                    imports: [
                        CommonModule,
                        // BrowserModule, BrowserAnimationsModule,
                        DemoMaterialModule,
                        FormsModule, ReactiveFormsModule,
                        RouterModule,
                        MomentModule, CKEditorModule,
                    ],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    exports: [ListingComponent, ShowformComponent
                    ],
                    providers: [ApiService],
                    entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch],
                },] }
    ];
    return ListingModule;
}());
export { ListingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbEosT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBR25EO0lBQUE7SUFrQkEsQ0FBQzs7Z0JBbEJBLFFBQVEsU0FBQztvQkFDTixZQUFZLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLHNCQUFzQixFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUUsaUJBQWlCLEVBQUUsY0FBYyxFQUFDLG9CQUFvQixDQUFDO29CQUN2TCxPQUFPLEVBQUU7d0JBQ0wsWUFBWTt3QkFDWiwwQ0FBMEM7d0JBQzFDLGtCQUFrQjt3QkFDbEIsV0FBVyxFQUFFLG1CQUFtQjt3QkFDaEMsWUFBWTt3QkFDWixZQUFZLEVBQUUsY0FBYztxQkFFL0I7b0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtxQkFDNUM7b0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO29CQUN2QixlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLENBQUM7aUJBQ2hIOztJQUVELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LCBNb2RhbEZvckJ1dHRvbVNlYXJjaH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuLy8gaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICduZ3gtbW9tZW50JztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtZb3V0dWJlcGxheWVyQ29tcG9uZW50fSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25nMi1ja2VkaXRvcic7XG4vLyBpbXBvcnQgeyBNYXRGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1tYXRlcmlhbC1maWxldXBsb2FkJzt4XG4vLyBpbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBDdXN0b21kYXRhUGlwZSB9IGZyb20gJy4vY3VzdG9tZGF0YS5waXBlJzsgXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgWW91dHViZXBsYXllckNvbXBvbmVudCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50LCBDdXN0b21kYXRhUGlwZSxNb2RhbEZvckJ1dHRvbVNlYXJjaF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIC8vIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1vbWVudE1vZHVsZSwgQ0tFZGl0b3JNb2R1bGUsXG4gICAgICAgIC8vIEltYWdlQ3JvcHBlck1vZHVsZVxuICAgIF0sXG4gICAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF0sXG4gICAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsTW9kYWxGb3JCdXR0b21TZWFyY2hdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbn1cbiJdfQ==