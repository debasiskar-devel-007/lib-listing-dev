/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import { ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch, DeleteNotesModal } from './listing.component';
import { DemoMaterialModule } from './materialmodules';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { ObservableserviceService } from "./service/observableservice.service";
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
import { LanguageTransletPipe } from './pipes/language-translet.pipe';
// import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch, PhoneFormatingDirective, LanguageTransletPipe, DeleteNotesModal],
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
                    providers: [ApiService, ObservableserviceService],
                    entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch, DeleteNotesModal],
                },] }
    ];
    return ListingModule;
}());
export { ListingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkssT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUl0RTtJQUFBO0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsRUFBQyxnQkFBZ0IsQ0FBQztvQkFDdlAsT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osMENBQTBDO3dCQUMxQyxrQkFBa0I7d0JBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFlBQVk7d0JBQ1osWUFBWSxFQUFFLGNBQWM7d0JBQzVCLGtCQUFrQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtxQkFDNUM7b0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLHdCQUF3QixDQUFDO29CQUNoRCxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7aUJBQ2pJOztJQUVELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LCBNb2RhbEZvckJ1dHRvbVNlYXJjaCxEZWxldGVOb3Rlc01vZGFsfSBmcm9tICcuL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7RGVtb01hdGVyaWFsTW9kdWxlfSBmcm9tICcuL21hdGVyaWFsbW9kdWxlcyc7XG4vLyBpbXBvcnQge0Jyb3dzZXJBbmltYXRpb25zTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5pbXBvcnQge1JvdXRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7WW91dHViZXBsYXllckNvbXBvbmVudH0gZnJvbSAnLi95b3V0dWJlcGxheWVyL3lvdXR1YmVwbGF5ZXIuY29tcG9uZW50JztcbmltcG9ydCB7IFNob3dmb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZzItY2tlZGl0b3InO1xuLy8gaW1wb3J0IHsgTWF0RmlsZVVwbG9hZE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXItbWF0ZXJpYWwtZmlsZXVwbG9hZCc7eFxuLy8gaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgQ3VzdG9tZGF0YVBpcGUgfSBmcm9tICcuL2N1c3RvbWRhdGEucGlwZSc7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBQaG9uZUZvcm1hdGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3Bob25lLWZvcm1hdGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgfSBmcm9tICcuL3BpcGVzL2xhbmd1YWdlLXRyYW5zbGV0LnBpcGUnO1xuLy8gaW1wb3J0IHsgTWF0TW9tZW50RGF0ZU1vZHVsZSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsIENvbmZpcm1kaWFsb2csIEJvdHRvbVNoZWV0LCBZb3V0dWJlcGxheWVyQ29tcG9uZW50LCBWaWRlb1BsYXllciwgSW1hZ2VWaWV3LCBTbmFja2JhckNvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnQsIEN1c3RvbWRhdGFQaXBlLE1vZGFsRm9yQnV0dG9tU2VhcmNoLCBQaG9uZUZvcm1hdGluZ0RpcmVjdGl2ZSwgTGFuZ3VhZ2VUcmFuc2xldFBpcGUsRGVsZXRlTm90ZXNNb2RhbF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIC8vIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1vbWVudE1vZHVsZSwgQ0tFZGl0b3JNb2R1bGUsXG4gICAgICAgIEltYWdlQ3JvcHBlck1vZHVsZVxuICAgIF0sXG4gICAgc2NoZW1hczogWyBDVVNUT01fRUxFTUVOVFNfU0NIRU1BIF0sXG4gICAgZXhwb3J0czogW0xpc3RpbmdDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLE9ic2VydmFibGVzZXJ2aWNlU2VydmljZV0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LE1vZGFsRm9yQnV0dG9tU2VhcmNoLERlbGV0ZU5vdGVzTW9kYWxdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbn1cbiJdfQ==