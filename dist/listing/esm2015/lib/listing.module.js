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
import { ImageCropperModule } from 'ngx-image-cropper';
export class ListingModule {
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
                    ImageCropperModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent, ShowformComponent
                ],
                providers: [ApiService],
                entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbEosT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBcUJ2RCxNQUFNLE9BQU8sYUFBYTs7O1lBakJ6QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxvQkFBb0IsQ0FBQztnQkFDdkwsT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osMENBQTBDO29CQUMxQyxrQkFBa0I7b0JBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLFlBQVk7b0JBQ1osWUFBWSxFQUFFLGNBQWM7b0JBQzVCLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtpQkFDNUM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLENBQUM7YUFDaEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsIE1vZGFsRm9yQnV0dG9tU2VhcmNofSBmcm9tICcuL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XG4vLyBpbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vbWVudE1vZHVsZSB9IGZyb20gJ25neC1tb21lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1lvdXR1YmVwbGF5ZXJDb21wb25lbnR9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaG93Zm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2hvd2Zvcm0vc2hvd2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcbi8vIGltcG9ydCB7IE1hdEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW1hdGVyaWFsLWZpbGV1cGxvYWQnO3hcbi8vIGltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7IEN1c3RvbWRhdGFQaXBlIH0gZnJvbSAnLi9jdXN0b21kYXRhLnBpcGUnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuXG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgWW91dHViZXBsYXllckNvbXBvbmVudCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50LCBDdXN0b21kYXRhUGlwZSxNb2RhbEZvckJ1dHRvbVNlYXJjaF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIC8vIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1vbWVudE1vZHVsZSwgQ0tFZGl0b3JNb2R1bGUsXG4gICAgICAgIEltYWdlQ3JvcHBlck1vZHVsZVxuICAgIF0sXG4gICAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF0sXG4gICAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsTW9kYWxGb3JCdXR0b21TZWFyY2hdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbn1cbiJdfQ==