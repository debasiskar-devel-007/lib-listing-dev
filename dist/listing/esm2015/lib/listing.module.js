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
import { PhoneFormatingDirective } from './directive/phone-formating.directive';
export class ListingModule {
}
ListingModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch, PhoneFormatingDirective],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbEosT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBcUJoRixNQUFNLE9BQU8sYUFBYTs7O1lBakJ6QixRQUFRLFNBQUM7Z0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSx1QkFBdUIsQ0FBQztnQkFDaE4sT0FBTyxFQUFFO29CQUNMLFlBQVk7b0JBQ1osMENBQTBDO29CQUMxQyxrQkFBa0I7b0JBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7b0JBQ2hDLFlBQVk7b0JBQ1osWUFBWSxFQUFFLGNBQWM7b0JBQzVCLGtCQUFrQjtpQkFDckI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtpQkFDNUM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDO2dCQUN2QixlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLENBQUM7YUFDaEgiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LCBNb2RhbEZvckJ1dHRvbVNlYXJjaH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XHJcbi8vIGltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICduZ3gtbW9tZW50JztcclxuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7WW91dHViZXBsYXllckNvbXBvbmVudH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hvd2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcclxuLy8gaW1wb3J0IHsgTWF0RmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItbWF0ZXJpYWwtZmlsZXVwbG9hZCc7eFxyXG4vLyBpbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XHJcbmltcG9ydCB7IEN1c3RvbWRhdGFQaXBlIH0gZnJvbSAnLi9jdXN0b21kYXRhLnBpcGUnO1xyXG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBQaG9uZUZvcm1hdGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3Bob25lLWZvcm1hdGluZy5kaXJlY3RpdmUnO1xyXG5cclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbTGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFlvdXR1YmVwbGF5ZXJDb21wb25lbnQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LCBTaG93Zm9ybUNvbXBvbmVudCwgQ3VzdG9tZGF0YVBpcGUsTW9kYWxGb3JCdXR0b21TZWFyY2gsIFBob25lRm9ybWF0aW5nRGlyZWN0aXZlXSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb21tb25Nb2R1bGUsXHJcbiAgICAgICAgLy8gQnJvd3Nlck1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXHJcbiAgICAgICAgRGVtb01hdGVyaWFsTW9kdWxlLFxyXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxyXG4gICAgICAgIFJvdXRlck1vZHVsZSxcclxuICAgICAgICBNb21lbnRNb2R1bGUsIENLRWRpdG9yTW9kdWxlLFxyXG4gICAgICAgIEltYWdlQ3JvcHBlck1vZHVsZVxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFsgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQSBdLFxyXG4gICAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50XHJcbiAgICBdLFxyXG4gICAgcHJvdmlkZXJzOiBbQXBpU2VydmljZV0sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsTW9kYWxGb3JCdXR0b21TZWFyY2hdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdGluZ01vZHVsZSB7XHJcbn1cclxuIl19