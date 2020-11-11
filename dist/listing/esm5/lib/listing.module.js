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
import { ImageCropperModule } from 'ngx-image-cropper';
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
                        ImageCropperModule
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbEosT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOztBQUU5QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFJbkQ7SUFBQTtJQWtCQSxDQUFDOztnQkFsQkEsUUFBUSxTQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLENBQUM7b0JBQ3ZMLE9BQU8sRUFBRTt3QkFDTCxZQUFZO3dCQUNaLDBDQUEwQzt3QkFDMUMsa0JBQWtCO3dCQUNsQixXQUFXLEVBQUUsbUJBQW1CO3dCQUNoQyxZQUFZO3dCQUNaLFlBQVksRUFBRSxjQUFjO3dCQUM1QixrQkFBa0I7cUJBQ3JCO29CQUNELE9BQU8sRUFBRSxDQUFFLHNCQUFzQixDQUFFO29CQUNuQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxpQkFBaUI7cUJBQzVDO29CQUNELFNBQVMsRUFBRSxDQUFDLFVBQVUsQ0FBQztvQkFDdkIsZUFBZSxFQUFFLENBQUMsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFDLG9CQUFvQixDQUFDO2lCQUNoSDs7SUFFRCxvQkFBQztDQUFBLEFBbEJELElBa0JDO1NBRFksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsIENvbXBvbmVudCwgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vLyBpbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQge0xpc3RpbmdDb21wb25lbnQsIENvbmZpcm1kaWFsb2csIEJvdHRvbVNoZWV0LCBWaWRlb1BsYXllciwgSW1hZ2VWaWV3LCBTbmFja2JhckNvbXBvbmVudCwgTW9kYWxGb3JCdXR0b21TZWFyY2h9IGZyb20gJy4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vbWF0ZXJpYWxtb2R1bGVzJztcbi8vIGltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7WW91dHViZXBsYXllckNvbXBvbmVudH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNob3dmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZzItY2tlZGl0b3InO1xuLy8gaW1wb3J0IHsgTWF0RmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItbWF0ZXJpYWwtZmlsZXVwbG9hZCc7eFxuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgQ3VzdG9tZGF0YVBpcGUgfSBmcm9tICcuL2N1c3RvbWRhdGEucGlwZSc7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsIENvbmZpcm1kaWFsb2csIEJvdHRvbVNoZWV0LCBZb3V0dWJlcGxheWVyQ29tcG9uZW50LCBWaWRlb1BsYXllciwgSW1hZ2VWaWV3LCBTbmFja2JhckNvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnQsIEN1c3RvbWRhdGFQaXBlLE1vZGFsRm9yQnV0dG9tU2VhcmNoXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgLy8gQnJvd3Nlck1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgTW9tZW50TW9kdWxlLCBDS0VkaXRvck1vZHVsZSxcbiAgICAgICAgSW1hZ2VDcm9wcGVyTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICBleHBvcnRzOiBbTGlzdGluZ0NvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2VdLFxuICAgIGVudHJ5Q29tcG9uZW50czogW0NvbmZpcm1kaWFsb2csIEJvdHRvbVNoZWV0LCBWaWRlb1BsYXllciwgSW1hZ2VWaWV3LCBTbmFja2JhckNvbXBvbmVudCxNb2RhbEZvckJ1dHRvbVNlYXJjaF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdNb2R1bGUge1xufVxuIl19