import {NgModule, Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {ListingComponent, Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch,DeleteNotesModal} from './listing.component';
import {DemoMaterialModule} from './materialmodules';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiService } from './api.service';
import { ObservableserviceService } from "./service/observableservice.service";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import { MomentModule } from 'ngx-moment';
import {RouterModule} from '@angular/router';
import {YoutubeplayerComponent} from './youtubeplayer/youtubeplayer.component';
import { ShowformComponent } from './showform/showform.component';
import { CKEditorModule } from 'ng2-ckeditor';
// import { MatFileUploadModule } from 'angular-material-fileupload';x
// import { ImageCropperModule } from 'ngx-image-cropper';
import { CustomdataPipe } from './customdata.pipe';
import { ImageCropperModule } from 'ngx-image-cropper';
import { PhoneFormatingDirective } from './directive/phone-formating.directive';
import { LanguageTransletPipe } from './pipes/language-translet.pipe';
// import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';


@NgModule({
    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe,ModalForButtomSearch, PhoneFormatingDirective, LanguageTransletPipe,DeleteNotesModal],
    imports: [
        CommonModule,
        // BrowserModule, BrowserAnimationsModule,
        DemoMaterialModule,
        FormsModule, ReactiveFormsModule,
        RouterModule,
        MomentModule, CKEditorModule,
        ImageCropperModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    exports: [ListingComponent, ShowformComponent
    ],
    providers: [ApiService,ObservableserviceService],
    entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent,ModalForButtomSearch,DeleteNotesModal],
})
export class ListingModule {
}
