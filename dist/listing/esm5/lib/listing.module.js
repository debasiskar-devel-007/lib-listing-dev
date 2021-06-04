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
                    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch, PhoneFormatingDirective, LanguageTransletPipe],
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
                    entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch],
                },] }
    ];
    return ListingModule;
}());
export { ListingModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUMsUUFBUSxFQUFhLHNCQUFzQixFQUFDLE1BQU0sZUFBZSxDQUFDOztBQUUxRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLG9CQUFvQixFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFDbEosT0FBTyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sbUJBQW1CLENBQUM7O0FBRXJELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDL0UsT0FBTyxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2xFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzFDLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUM3QyxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx5Q0FBeUMsQ0FBQztBQUMvRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sY0FBYyxDQUFDOzs7QUFHOUMsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDOztBQUl0RTtJQUFBO0lBa0JBLENBQUM7O2dCQWxCQSxRQUFRLFNBQUM7b0JBQ04sWUFBWSxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxzQkFBc0IsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLGlCQUFpQixFQUFFLGlCQUFpQixFQUFFLGNBQWMsRUFBQyxvQkFBb0IsRUFBRSx1QkFBdUIsRUFBRSxvQkFBb0IsQ0FBQztvQkFDdE8sT0FBTyxFQUFFO3dCQUNMLFlBQVk7d0JBQ1osMENBQTBDO3dCQUMxQyxrQkFBa0I7d0JBQ2xCLFdBQVcsRUFBRSxtQkFBbUI7d0JBQ2hDLFlBQVk7d0JBQ1osWUFBWSxFQUFFLGNBQWM7d0JBQzVCLGtCQUFrQjtxQkFDckI7b0JBQ0QsT0FBTyxFQUFFLENBQUUsc0JBQXNCLENBQUU7b0JBQ25DLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQjtxQkFDNUM7b0JBQ0QsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLHdCQUF3QixDQUFDO29CQUNoRCxlQUFlLEVBQUUsQ0FBQyxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxTQUFTLEVBQUUsaUJBQWlCLEVBQUMsb0JBQW9CLENBQUM7aUJBQ2hIOztJQUVELG9CQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FEWSxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZSwgQ29tcG9uZW50LCBDVVNUT01fRUxFTUVOVFNfU0NIRU1BfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7TGlzdGluZ0NvbXBvbmVudCwgQ29uZmlybWRpYWxvZywgQm90dG9tU2hlZXQsIFZpZGVvUGxheWVyLCBJbWFnZVZpZXcsIFNuYWNrYmFyQ29tcG9uZW50LCBNb2RhbEZvckJ1dHRvbVNlYXJjaH0gZnJvbSAnLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQge0RlbW9NYXRlcmlhbE1vZHVsZX0gZnJvbSAnLi9tYXRlcmlhbG1vZHVsZXMnO1xuLy8gaW1wb3J0IHtCcm93c2VyQW5pbWF0aW9uc01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1vbWVudE1vZHVsZSB9IGZyb20gJ25neC1tb21lbnQnO1xuaW1wb3J0IHtSb3V0ZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1lvdXR1YmVwbGF5ZXJDb21wb25lbnR9IGZyb20gJy4veW91dHViZXBsYXllci95b3V0dWJlcGxheWVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaG93Zm9ybUNvbXBvbmVudCB9IGZyb20gJy4vc2hvd2Zvcm0vc2hvd2Zvcm0uY29tcG9uZW50JztcbmltcG9ydCB7IENLRWRpdG9yTW9kdWxlIH0gZnJvbSAnbmcyLWNrZWRpdG9yJztcbi8vIGltcG9ydCB7IE1hdEZpbGVVcGxvYWRNb2R1bGUgfSBmcm9tICdhbmd1bGFyLW1hdGVyaWFsLWZpbGV1cGxvYWQnO3hcbi8vIGltcG9ydCB7IEltYWdlQ3JvcHBlck1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7IEN1c3RvbWRhdGFQaXBlIH0gZnJvbSAnLi9jdXN0b21kYXRhLnBpcGUnO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVyTW9kdWxlIH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuaW1wb3J0IHsgUGhvbmVGb3JtYXRpbmdEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9waG9uZS1mb3JtYXRpbmcuZGlyZWN0aXZlJztcbmltcG9ydCB7IExhbmd1YWdlVHJhbnNsZXRQaXBlIH0gZnJvbSAnLi9waXBlcy9sYW5ndWFnZS10cmFuc2xldC5waXBlJztcbi8vIGltcG9ydCB7IE1hdE1vbWVudERhdGVNb2R1bGUsIE1BVF9NT01FTlRfREFURV9BREFQVEVSX09QVElPTlMgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC1tb21lbnQtYWRhcHRlcic7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBkZWNsYXJhdGlvbnM6IFtMaXN0aW5nQ29tcG9uZW50LCBDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgWW91dHViZXBsYXllckNvbXBvbmVudCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsIFNob3dmb3JtQ29tcG9uZW50LCBDdXN0b21kYXRhUGlwZSxNb2RhbEZvckJ1dHRvbVNlYXJjaCwgUGhvbmVGb3JtYXRpbmdEaXJlY3RpdmUsIExhbmd1YWdlVHJhbnNsZXRQaXBlXSxcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENvbW1vbk1vZHVsZSxcbiAgICAgICAgLy8gQnJvd3Nlck1vZHVsZSwgQnJvd3NlckFuaW1hdGlvbnNNb2R1bGUsXG4gICAgICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICAgICAgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgICAgIFJvdXRlck1vZHVsZSxcbiAgICAgICAgTW9tZW50TW9kdWxlLCBDS0VkaXRvck1vZHVsZSxcbiAgICAgICAgSW1hZ2VDcm9wcGVyTW9kdWxlXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgXSxcbiAgICBleHBvcnRzOiBbTGlzdGluZ0NvbXBvbmVudCwgU2hvd2Zvcm1Db21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW0FwaVNlcnZpY2UsT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlXSxcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtDb25maXJtZGlhbG9nLCBCb3R0b21TaGVldCwgVmlkZW9QbGF5ZXIsIEltYWdlVmlldywgU25hY2tiYXJDb21wb25lbnQsTW9kYWxGb3JCdXR0b21TZWFyY2hdLFxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nTW9kdWxlIHtcbn1cbiJdfQ==