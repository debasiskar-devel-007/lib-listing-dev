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
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { PhoneFormatingDirective } from './directive/phone-formating.directive';
import { LanguageTransletPipe } from './pipes/language-translet.pipe';
// import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
export class ListingModule {
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
                    ImageCropperModule,
                    NgxMaterialTimepickerModule
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA],
                exports: [ListingComponent, ShowformComponent
                ],
                providers: [ApiService, ObservableserviceService],
                entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch, DeleteNotesModal],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLGdCQUFnQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbkssT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBQywyQkFBMkIsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3BFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQXNCdEUsTUFBTSxPQUFPLGFBQWE7OztZQWxCekIsUUFBUSxTQUFDO2dCQUNOLFlBQVksRUFBRSxDQUFDLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxXQUFXLEVBQUUsc0JBQXNCLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxpQkFBaUIsRUFBRSxpQkFBaUIsRUFBRSxjQUFjLEVBQUMsb0JBQW9CLEVBQUUsdUJBQXVCLEVBQUUsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7Z0JBQ3ZQLE9BQU8sRUFBRTtvQkFDTCxZQUFZO29CQUNaLDBDQUEwQztvQkFDMUMsa0JBQWtCO29CQUNsQixXQUFXLEVBQUUsbUJBQW1CO29CQUNoQyxZQUFZO29CQUNaLFlBQVksRUFBRSxjQUFjO29CQUM1QixrQkFBa0I7b0JBQ2xCLDJCQUEyQjtpQkFDOUI7Z0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtpQkFDNUM7Z0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLHdCQUF3QixDQUFDO2dCQUNoRCxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLEVBQUMsZ0JBQWdCLENBQUM7YUFDakkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBDb21wb25lbnQsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUF9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsIE1vZGFsRm9yQnV0dG9tU2VhcmNoLERlbGV0ZU5vdGVzTW9kYWx9IGZyb20gJy4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHtEZW1vTWF0ZXJpYWxNb2R1bGV9IGZyb20gJy4vbWF0ZXJpYWxtb2R1bGVzJztcbi8vIGltcG9ydCB7QnJvd3NlckFuaW1hdGlvbnNNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXIvYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL29ic2VydmFibGVzZXJ2aWNlLnNlcnZpY2VcIjtcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNb21lbnRNb2R1bGUgfSBmcm9tICduZ3gtbW9tZW50JztcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHtZb3V0dWJlcGxheWVyQ29tcG9uZW50fSBmcm9tICcuL3lvdXR1YmVwbGF5ZXIveW91dHViZXBsYXllci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2hvd2Zvcm1Db21wb25lbnQgfSBmcm9tICcuL3Nob3dmb3JtL3Nob3dmb3JtLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDS0VkaXRvck1vZHVsZSB9IGZyb20gJ25nMi1ja2VkaXRvcic7XG4vLyBpbXBvcnQgeyBNYXRGaWxlVXBsb2FkTW9kdWxlIH0gZnJvbSAnYW5ndWxhci1tYXRlcmlhbC1maWxldXBsb2FkJzt4XG4vLyBpbXBvcnQgeyBJbWFnZUNyb3BwZXJNb2R1bGUgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBDdXN0b21kYXRhUGlwZSB9IGZyb20gJy4vY3VzdG9tZGF0YS5waXBlJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7Tmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XG5pbXBvcnQgeyBQaG9uZUZvcm1hdGluZ0RpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3Bob25lLWZvcm1hdGluZy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGFuZ3VhZ2VUcmFuc2xldFBpcGUgfSBmcm9tICcuL3BpcGVzL2xhbmd1YWdlLXRyYW5zbGV0LnBpcGUnO1xuLy8gaW1wb3J0IHsgTWF0TW9tZW50RGF0ZU1vZHVsZSwgTUFUX01PTUVOVF9EQVRFX0FEQVBURVJfT1BUSU9OUyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsLW1vbWVudC1hZGFwdGVyJztcblxuXG5ATmdNb2R1bGUoe1xuICAgIGRlY2xhcmF0aW9uczogW0xpc3RpbmdDb21wb25lbnQsIENvbmZpcm1kaWFsb2csIEJvdHRvbVNoZWV0LCBZb3V0dWJlcGxheWVyQ29tcG9uZW50LCBWaWRlb1BsYXllciwgSW1hZ2VWaWV3LCBTbmFja2JhckNvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnQsIEN1c3RvbWRhdGFQaXBlLE1vZGFsRm9yQnV0dG9tU2VhcmNoLCBQaG9uZUZvcm1hdGluZ0RpcmVjdGl2ZSwgTGFuZ3VhZ2VUcmFuc2xldFBpcGUsRGVsZXRlTm90ZXNNb2RhbF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBDb21tb25Nb2R1bGUsXG4gICAgICAgIC8vIEJyb3dzZXJNb2R1bGUsIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgICAgICBEZW1vTWF0ZXJpYWxNb2R1bGUsXG4gICAgICAgIEZvcm1zTW9kdWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgICAgICBSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE1vbWVudE1vZHVsZSwgQ0tFZGl0b3JNb2R1bGUsXG4gICAgICAgIEltYWdlQ3JvcHBlck1vZHVsZSxcbiAgICAgICAgTmd4TWF0ZXJpYWxUaW1lcGlja2VyTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICBleHBvcnRzOiBbTGlzdGluZ0NvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsTW9kYWxGb3JCdXR0b21TZWFyY2gsRGVsZXRlTm90ZXNNb2RhbF0sXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdNb2R1bGUge1xufVxuIl19