import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from '../material-module';
import { LoginComponent } from './login/login.component';
import { BrandmanagementComponent } from './brandmanagement/brandmanagement.component';
import { AdminmanagementComponent } from './adminmanagement/adminmanagement.component';
import { InfluencersmanagementComponent } from './influencersmanagement/influencersmanagement.component';
import { AdmindashbordComponent } from './admindashbord/admindashbord.component';
import { BranddashbordComponent } from './branddashbord/branddashbord.component';
import { InfluencersdashbordComponent } from './influencersdashbord/influencersdashbord.component';
import { Resolveservice } from '../app/resolveservice';
import { ApiService } from '../app/api.service';
import { AuthGuard } from './auth.guard';
import { ForgatepasswordComponent } from './forgatepassword/forgatepassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';

import { ListingComponent } from './listing/listing.component';

import { AdminlistComponent } from './adminlist/adminlist.component';

// import { AmingridlistComponent } from './amingridlist/amingridlist.component';

import { AdminleftpanelComponent } from './adminleftpanel/adminleftpanel.component';

//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';

import { DynamicFormBuilderModule } from '../../projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.module'
// import { FieldConfig } from '../../projects/listing/src/lib/components/field.interface';
import { ButtonComponent } from '../../projects/listing/src/lib/components/button/button.component';
import { CheckboxComponent } from '../../projects/listing/src/lib/components/checkbox/checkbox.component';
import { DateComponent } from '../../projects/listing/src/lib/components/date/date.component';
import { DynamicFieldDirective } from '../../projects/listing/src/lib/components/dynamic-field/dynamic-field.directive';
//import { DynamicFormComponent } from '../../projects/listing/src/lib/components/dynamic-form/dynamic-form.component';
import { InputComponent } from '../../projects/listing/src/lib/components/input/input.component';
import { RadiobuttonComponent } from '../../projects/listing/src/lib/components/radiobutton/radiobutton.component';
import { SelectComponent } from '../../projects/listing/src/lib/components/select/select.component';


//MATERIAL
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AdminformComponent } from './adminform/adminform.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AdminmodalformComponent } from './adminmodalform/adminmodalform.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {ListingModule} from 'listing';
import { EditrouteComponent } from './editroute/editroute.component';
import { DynamicFormsComponent } from './dynamic-forms/dynamic-forms.component';
import { DformComponent } from './dform/dform.component';
import { CustomdataComponent } from './customdata/customdata.component';

import { ListingInventoryComponent } from './inventorylist/listing-inventory/listing-inventory.component';
import { BtnComponent } from './btn/btn.component';
//import {ShowformComponent} from "listing/lib/showform/showform.component";
//import {ShowformComponent} from "listing/lib/showform/showform.component";



@NgModule({
    declarations: [
        CheckboxComponent,
        DateComponent,
        DynamicFieldDirective,
        DynamicFormsComponent,
        //DynamicFormComponent,
        InputComponent,
        RadiobuttonComponent,
        SelectComponent,
        ButtonComponent,
        AppComponent,

        LoginComponent,
        BrandmanagementComponent,
        AdminmanagementComponent,
        InfluencersmanagementComponent,
        AdmindashbordComponent,
        BranddashbordComponent,
        InfluencersdashbordComponent,
        ForgatepasswordComponent,
        ChangepasswordComponent,

        ListingComponent,
        // ShowformComponent,

        AdminlistComponent,
        AdminleftpanelComponent,
        AdminformComponent,

        AdminmodalformComponent,

        AdminheaderComponent,

        EditrouteComponent,

        //DynamicFormsComponent,

        DformComponent,

        CustomdataComponent,

        ListingInventoryComponent,

        BtnComponent,


        //Resolveservice,

    ],
    imports: [
        BrowserModule,
        MaterialModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule, ReactiveFormsModule,
        DynamicFormBuilderModule,


        //MATERIAL
        MatSidenavModule,
        MatTableModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        MatFormFieldModule,
        MatToolbarModule,
        ListingModule
    ],
    providers: [CookieService, Resolveservice, ApiService, AuthGuard],
    bootstrap: [AppComponent],
    exports: [
        BtnComponent
    ],
    entryComponents: [
        InputComponent,
        ButtonComponent,
        SelectComponent,
        DateComponent,
        RadiobuttonComponent,
        CheckboxComponent
    ]
})
export class AppModule { }
