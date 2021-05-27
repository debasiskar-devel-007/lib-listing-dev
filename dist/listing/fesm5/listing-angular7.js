import { SelectionModel } from '@angular/cdk/collections';
import { humanizeBytes } from 'ngx-uploader';
import { CookieService } from 'ngx-cookie-service';
import { map, catchError, startWith, debounceTime } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as momentImported from 'moment';
import { throwError, Subject, Observable } from 'rxjs';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { A11yModule } from '@angular/cdk/a11y';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { MatSort, MatTableDataSource, MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA, MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonModule, MatButtonToggleModule, MatCardModule, MatCheckboxModule, MatChipsModule, MatDatepickerModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatGridListModule, MatIconModule, MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule, MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatStepperModule, MatTableModule, MatTabsModule, MatToolbarModule, MatTooltipModule, MatTreeModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { MomentModule } from 'ngx-moment';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterModule } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { CKEditorModule } from 'ng2-ckeditor';
import { ImageCropperModule } from 'ngx-image-cropper';
import { Injectable, ElementRef, EventEmitter, ViewChild, Pipe, Directive, HostListener, Component, Input, NgModule, CUSTOM_ELEMENTS_SCHEMA, Output, Inject, ComponentFactoryResolver, ViewContainerRef, defineInjectable } from '@angular/core';
import { FormBuilder, FormControl, Validators, NgControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingService = /** @class */ (function () {
    function ListingService() {
    }
    ListingService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ListingService.ctorParameters = function () { return []; };
    /** @nocollapse */ ListingService.ngInjectableDef = defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
    return ListingService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ApiService = /** @class */ (function () {
    /*@Input()
    set uploadOutput(uploadOutput: any){
      this.uploadOutputval = uploadOutput;
      console.log('this.uploadOutput');
      console.log(this.uploadOutput);
    }*/
    function ApiService(_http, _authHttp, cookieService) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.domain_for_fileupload_val = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads';
        this.progress = [];
        this.uploaderror = '';
        this.secretkey = 'na';
        // public uploadOutputval:any;
        this.fileservername = [];
        this.options = { concurrency: 10, maxUploads: 10 };
        this.files = []; // local uploading files array
        this.uploadInput = new EventEmitter(); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = humanizeBytes;
        if (this.cookieService.check('secret')) {
            this.secretkey = this.cookieService.get('secret');
        }
        // console.log('this.domain');
        // console.log(this.domain);
    }
    /**
     * @param {?} uploadOutput
     * @param {?} arrayvalue
     * @param {?} uploadtypec
     * @param {?} uploadpath
     * @return {?}
     */
    ApiService.prototype.onUploadOutput = /**
     * @param {?} uploadOutput
     * @param {?} arrayvalue
     * @param {?} uploadtypec
     * @param {?} uploadpath
     * @return {?}
     */
    function (uploadOutput, arrayvalue, uploadtypec, uploadpath) {
        // this.uploaderInput.nativeElement.value = '';
        if (uploadOutput.type === 'allAddedToQueue') {
            /** @type {?} */
            var event_1 = {
                type: 'uploadAll',
                url: 'http://developmentapi.audiodeadline.com:7031/uploads',
                method: 'POST',
                data: { path: uploadpath }
            };
            this.uploadInput.emit(event_1);
        }
        else if (uploadOutput.type === 'addedToQueue' && typeof uploadOutput.file !== 'undefined') {
            if (uploadOutput.file.response != '') {
                this.files = [];
                this.files.push(uploadOutput.file);
                console.log('this.files*********');
                console.log(this.files);
                this.lengthis = this.files.length;
                this.percentageis = this.files[0].progress.data.percentage;
            }
        }
        else if (uploadOutput.type === 'uploading' && typeof uploadOutput.file !== 'undefined') {
            /** @type {?} */
            var index = this.files.findIndex((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id; }));
            this.files[index] = uploadOutput.file;
            this.lengthis = this.files.length;
            if (this.files[0] != null && this.files[0].progress != null) {
                this.percentageis = this.files[0].progress.data.percentage;
            }
            console.log('this.files==================');
            console.log(this.files);
        }
        else if (uploadOutput.type === 'removed') {
            this.files = this.files.filter((/**
             * @param {?} file
             * @return {?}
             */
            function (file) { return file !== uploadOutput.file; }));
        }
        else if (uploadOutput.type === 'dragOver') {
            this.dragOver = true;
        }
        else if (uploadOutput.type === 'dragOut') {
            this.dragOver = false;
        }
        else if (uploadOutput.type === 'drop') {
            this.dragOver = false;
        }
        console.log('files');
        console.log(this.files);
        if (this.files[0] != null && this.files[0].progress != null) {
            if (this.progress[arrayvalue] == null) {
                this.progress[arrayvalue] = 0;
            }
            this.inprogress = true;
            console.log('file upload progressing');
            console.log(this.files[0].progress.data.percentage);
            this.progress[arrayvalue] = (this.files[0].progress.data.percentage);
            if (this.progress[arrayvalue] == 100) {
                this.progress[arrayvalue] = null;
                this.inprogress = null;
            }
            console.log('this.uploadtype in api service');
            console.log(uploadtypec);
        }
        if (uploadtypec == 'single') {
            // this.fileservername = [];
            if (this.fileservername[arrayvalue] == null) {
                this.fileservername[arrayvalue] = [];
            }
            this.fileservername[arrayvalue] = [];
            if (this.files[0].response != null) {
                this.fileservername[arrayvalue].push(this.files[0].response);
            }
        }
        if (uploadtypec == 'multiple') {
            console.log('this.files[0].response');
            // console.log(this.files[0].response);
            console.log(this.files.length);
            console.log(this.files);
            if (this.fileservername[arrayvalue] == null) {
                this.fileservername[arrayvalue] = [];
            }
            // if(this.files[0].response!=null){
            if (this.files.length == 1) {
                if (this.files[0] && this.files[0].response != null && this.files[0].response.error_code == null) {
                    this.fileservername[arrayvalue].push(this.files[0].response);
                    this.files = [];
                    this.uploaderror = '';
                }
                if (this.files[0] != null && this.files[0].response != null && this.files[0].response.error_code != null) {
                    this.uploaderror = 'error occured on uploading !!!';
                }
            }
            if (this.files.length > 1) {
                console.log('sdfdsf==== in multiple length ');
                for (var b in this.files) {
                    if (this.files[b].response != null && this.files[b].response.error_code == null) {
                        this.fileservername[arrayvalue].push(this.files[b].response);
                    }
                }
                this.files = [];
            }
            // }
        }
        console.log('this.fileservername');
        console.log(this.fileservername);
        console.log(this.uploaderror);
        // this.uploaderservice.filenamevalc1=this.fileservername;
        // UploaderComponent.filenamevalc1=87;
        // console.log(classval);
    };
    /**
     * @return {?}
     */
    ApiService.prototype.isTokenExpired = /**
     * @return {?}
     */
    function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    /**
     * @return {?}
     */
    ApiService.prototype.getclientip = /**
     * @return {?}
     */
    function () {
        console.log('endpoint');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.get('http://ipinfo.io/?format=json&token=9797c42b93078a').pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @return {?}
     */
    ApiService.prototype.getEndpoint = /**
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @return {?}
     */
    ApiService.prototype.getData = /**
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: ''
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log('');
        // this.isTokenExpired()
        /** @type {?} */
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    // getData end
    // getData end
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    ApiService.prototype.postData = 
    // getData end
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: data.token
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    ApiService.prototype.postDatawithoutToken = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    ApiService.prototype.postlogin = /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    function (endpoint, data) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    }; // postData end
    // postData end
    /**
     * @param {?} link
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.postSearch = 
    // postData end
    /**
     * @param {?} link
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    function (link, token, source) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        /*console.log('------ ');
        console.log("link in postSearch");
        console.log(link);
        console.log(source);*/
        source.secret = this.secretkey;
        source.token = token;
        /** @type {?} */
        var result = this._http.post(link, source, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} link
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.postSearch1 = /**
     * @param {?} link
     * @param {?} source
     * @return {?}
     */
    function (link, source) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: source.token
            })
        };
        console.log('------ ');
        console.log('link');
        console.log(link);
        /** @type {?} */
        var result = this._http.post(link, source).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} id
     * @return {?}
     */
    ApiService.prototype.putData = /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} id
     * @return {?}
     */
    function (endpoint, data, id) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: ''
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.deteOneData = /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    function (endpoint, data, token, source) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        /* console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);
            console.log(token);*/
        /** @type {?} */
        var dataval;
        dataval = { source: source, id: data._id };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.togglestatus = /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    function (endpoint, data, token, source) {
        /*console.log(endpoint);
          console.log(data);
          console.log(token);
          console.log(source);*/
        /*console.log(endpoint);
              console.log(data);
              console.log(token);
              console.log(source);*/
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        var dataval;
        dataval = { source: source, data: data };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.deteManyData = /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    function (endpoint, data, token, source) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        var dataval;
        dataval = { source: source, ids: data };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} val
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    ApiService.prototype.togglestatusmany = /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} val
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    function (endpoint, data, val, token, source) {
        /** @type {?} */
        var httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: token
            })
        };
        /*console.log('------ ');
            console.log("endpoint");
            console.log(endpoint);
            console.log(data);*/
        /** @type {?} */
        var dataval;
        dataval = { source: source, data: { ids: data, val: val } };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        function (res) { return res; })));
        return result;
    };
    /**
     * @private
     * @param {?} endpoint
     * @return {?}
     */
    ApiService.prototype.getEndpointUrl = /**
     * @private
     * @param {?} endpoint
     * @return {?}
     */
    function (endpoint) {
        return '' + endpoint;
    };
    ApiService.decorators = [
        { type: Injectable }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: HttpClient },
        { type: HttpClient },
        { type: CookieService }
    ]; };
    ApiService.propDecorators = {
        uploaderInput: [{ type: ViewChild, args: ['fileInput1',] }]
    };
    return ApiService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {ProgressBarMode} from '@angular/material/progress-bar';
// import  {BtnComponent} from './../../../../src/app/btn/btn.component'
/** @type {?} */
var moment = momentImported;
var ListingComponent = /** @class */ (function () {
    function ListingComponent(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar, _elementRef) {
        var _this = this;
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.resolver = resolver;
        this.container = container;
        this._http = _http;
        this.sanitizer = sanitizer;
        this._snackBar = _snackBar;
        this._elementRef = _elementRef;
        this.myControl = new FormControl();
        this.rescount = 0;
        this.columns = [];
        this.autosearchinput = [];
        this.currentautosearcharr = [];
        this.olddata = [];
        this.tsearch = [];
        this.tableflag = 0;
        this.autosearch = [];
        this.libdataval = {};
        this.limitcondval = {};
        this.result = {};
        this.sortdataval = {};
        this.sh = false;
        this.art = false;
        this.aud2 = false;
        this.aud = false;
        this.updatetableval = false;
        this.loaderrow = null;
        this.customButtonFlagVal = {};
        this.allSearchCond = [];
        this.searchbuttonval = [];
        this.searchBarFlag = false;
        this.searchBarToolTip = 'Open Search Bar';
        this.searchBarFlagVal = false;
        this.recordFoundFlag = false;
        this.recordFoundData = '';
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        this.selectsearch = [];
        this.initiateSearch = false;
        this.onLiblistingChange = new EventEmitter();
        this.onLiblistingButtonChange = new EventEmitter();
        this.searchstrsarr = [];
        this.oldlimitrange = [];
        this.displayedColumns = [];
        this.datacolumns = [];
        this.displayedColumnsheader = [];
        this.formarray = [];
        this.dateSearch_condition = {};
        this.selectSearch_condition = {};
        this.autoSearch_condition = {};
        this.textSearch_condition = {};
        this.loading = false;
        this.preresult = {};
        this.buttonSearchData = [];
        // dataSource = new MatTableDataSource(this.datasourceval);
        this.dataSource = new MatTableDataSource;
        // myForm:any;
        this.modelChanged = new Subject();
        this.modelChangedserver = new Subject();
        this.pagechanged = new Subject();
        this.subscriptions = [];
        this.subscriptioncount = 0;
        this.tableFooterColumns = [];
        this.testvalue = "s1";
        // searchResult$: Observable<SearchResult[]>;
        // for dropdown pagination
        this.pages = [];
        this.stateGroups = this.searchListval;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChanged
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            _this.filterautoval(_this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce  server', this.autosearchinput, this.currentautocompleteitem);
            if (_this.autosearchinput[_this.currentautocompleteitem.field] != null && _this.autosearchinput[_this.currentautocompleteitem.field] != '') {
                // this.filterautoval(this.currentautocompleteitem);
                /** @type {?} */
                var link = _this.apiurlval + '' + _this.currentautocompleteitem.serversearchdata.endpoint;
                /** @type {?} */
                var source = void 0;
                source = {
                    search_str: _this.autosearchinput[_this.currentautocompleteitem.field],
                    sort: {
                        field: _this.sortdataval.field,
                        type: _this.sortdataval.type
                    }
                };
                // console.log('con...',conditionobj,this.end_date);
                // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
                // return;
                _this.date_search_source_countval = 0;
                _this.loading = true;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.postSearch(link, _this.jwttokenval, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    // console.log(res, 'result');
                    _this.loading = false;
                    // return;
                    result = res;
                    // this.loading = false;
                    if (result != null && result.results != null && result.results.res != null)
                        _this.rescount = result.results.res.length;
                    if (result.res != null && result.res.length > 0) {
                        // this.dataSource = new MatTableDataSource(result.results.res);
                        _this.currentautosearcharr = result.res;
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 2000,
                            data: { errormessage: 'New Search of data loaded ' }
                        });
                    }
                    else {
                        _this.currentautosearcharr = [];
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: 'No such search record found !!' }
                        });
                    }
                    _this.loading = false;
                    // this.dataSource.paginator = this.paginator;
                    // this.dataSource.sort = this.sort;
                }));
            }
        }));
        /* this.myForm = this.fb.group({
           email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
           password: ['', Validators.required]
         });*/
    }
    Object.defineProperty(ListingComponent.prototype, "search_settings", {
        set: /**
         * @param {?} search_settings
         * @return {?}
         */
        function (search_settings) {
            this.search_settingsval = search_settings;
            // console.log('search_settingsval++++++', this.search_settingsval)
            /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
              console.log(this.search_settingsval.search[i].label);
            }*/
            /*  console.log(this.search_settingsval.selectsearch);
              console.log(this.search_settingsval.selectsearch[0].label);
              console.log(this.search_settingsval.selectsearch[0].values);
              console.log(this.search_settingsval.datesearch);*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "click_to_add_ananother_page", {
        set: /**
         * @param {?} click_to_add_ananother_page
         * @return {?}
         */
        function (click_to_add_ananother_page) {
            this.click_to_add_ananother_pageval = click_to_add_ananother_page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "limitcond", {
        set: /**
         * @param {?} limitcondval
         * @return {?}
         */
        function (limitcondval) {
            this.limitcondval = limitcondval;
            this.oldlimitrange.push(limitcondval);
            // console.log('limitcondval',this.limitcondval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source_count", {
        set: /**
         * @param {?} date_search_source_countval
         * @return {?}
         */
        function (date_search_source_countval) {
            this.date_search_source_countval = date_search_source_countval;
            if (this.date_search_source_countval == 0) {
                this.limitcondval.pagecount = 1;
            }
            // console.log('date_search_source_count',this.date_search_source_countval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "grab_link", {
        set: /**
         * @param {?} grab_link
         * @return {?}
         */
        function (grab_link) {
            this.grab_linkval = grab_link;
            // console.log(this.grab_linkval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "custombutton", {
        set: /**
         * @param {?} custombutton
         * @return {?}
         */
        function (custombutton) {
            this.custombuttonval = custombutton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source", {
        set: /**
         * @param {?} date_search_source
         * @return {?}
         */
        function (date_search_source) {
            this.date_search_sourceval = date_search_source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sortdata", {
        set: /**
         * @param {?} sortdataval
         * @return {?}
         */
        function (sortdataval) {
            this.sortdataval = sortdataval;
            // console.log(this.sortdataval, 'sortdataval');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
        set: /**
         * @param {?} date_search_endpoint
         * @return {?}
         */
        function (date_search_endpoint) {
            this.date_search_endpointval = date_search_endpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "url", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.urlval = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
        set: /**
         * @param {?} searchendpoint
         * @return {?}
         */
        function (searchendpoint) {
            this.searchendpointval = searchendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "pdf_link", {
        set: /**
         * @param {?} pdf_link
         * @return {?}
         */
        function (pdf_link) {
            this.pdf_link_val = pdf_link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchList", {
        set: /**
         * @param {?} searchList
         * @return {?}
         */
        function (searchList) {
            this.searchListval = searchList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "libdata", {
        set: /**
         * @param {?} libdataval
         * @return {?}
         */
        function (libdataval) {
            var _this = this;
            this.libdataval = [];
            this.libdataval = libdataval;
            console.log('libdataval', this.libdataval);
            if (typeof this.libdataval.pages != 'undefined' && this.libdataval.pages != null) {
                this.pages = this.libdataval.pages;
            }
            // searchBarFlag
            // console.log(libdataval.searchBarFlagVal)
            if (libdataval.searchBarFlagVal != null && libdataval.searchBarFlagVal != '') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.searchBarFlagVal = libdataval.searchBarFlagVal;
                }), 1000);
            }
            else {
                this.searchBarFlag = true;
            }
            if (libdataval.recordfoundflag != null && libdataval.recordfoundflag != '' && libdataval.recordfounddata != null) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.recordFoundFlag = libdataval.recordfoundflag;
                    _this.recordFoundData = libdataval.recordfounddata;
                }), 1000);
            }
            else {
                this.recordFoundFlag = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datasource", {
        set: /**
         * @param {?} datasource
         * @return {?}
         */
        function (datasource) {
            this.datasourceval = [];
            this.datasourceval = datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datacollection", {
        set: /**
         * @param {?} datacollectionval
         * @return {?}
         */
        function (datacollectionval) {
            this.datacollectionval = datacollectionval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "skip", {
        set: /**
         * @param {?} skip
         * @return {?}
         */
        function (skip) {
            this.skipval = skip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
        set: /**
         * @param {?} detail_datatype
         * @return {?}
         */
        function (detail_datatype) {
            this.detail_datatypeval = detail_datatype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
        set: /**
         * @param {?} detail_skip_array
         * @return {?}
         */
        function (detail_skip_array) {
            this.detail_skip_arrayval = detail_skip_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sourcedata", {
        set: /**
         * @param {?} sourcedata
         * @return {?}
         */
        function (sourcedata) {
            this.sourcedataval = sourcedata;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
        set: /**
         * @param {?} modify_header_array
         * @return {?}
         */
        function (modify_header_array) {
            this.modify_header_arrayval = modify_header_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
        set: /**
         * @param {?} deleteendpointval
         * @return {?}
         */
        function (deleteendpointval) {
            this.deleteendpointval = deleteendpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
        set: /**
         * @param {?} updateendpoint
         * @return {?}
         */
        function (updateendpoint) {
            this.updateendpointval = updateendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "apiurl", {
        set: /**
         * @param {?} apiurl
         * @return {?}
         */
        function (apiurl) {
            this.apiurlval = apiurl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updatetable", {
        set: /**
         * @param {?} updatetable
         * @return {?}
         */
        function (updatetable) {
            this.updatetableval = updatetable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "jwttoken", {
        set: /**
         * @param {?} jwttoken
         * @return {?}
         */
        function (jwttoken) {
            if (jwttoken != null) {
                this.jwttokenval = jwttoken;
            }
            else {
                this.jwttokenval = '';
            }
            // console.log(this.jwttokenval,'token')
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "statusarr", {
        set: /**
         * @param {?} statusarr
         * @return {?}
         */
        function (statusarr) {
            this.statusarrval = statusarr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "emailarray", {
        set: /**
         * @param {?} emailarray
         * @return {?}
         */
        function (emailarray) {
            this.emailarrayval = emailarray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "editroute", {
        set: /**
         * @param {?} editroute
         * @return {?}
         */
        function (editroute) {
            this.editrouteval = editroute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "preview_artistxp", {
        /* artistxp preview start */
        set: /* artistxp preview start */
        /**
         * @param {?} flug
         * @return {?}
         */
        function (flug) {
            this.previewFlug = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "customlistenbutton", {
        /* artistxp preview end */
        set: /* artistxp preview end */
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.customButtonFlagVal = val;
            // console.log(this.customButtonFlagVal, 'customButtonFlagVal')
        },
        enumerable: true,
        configurable: true
    });
    /*@Directive({
      selector: '[Listing]'
    })*/
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    ListingComponent.prototype.ngOnChanges = /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log('ngonchange ..',changes);
        for (var v in changes) {
            // console.log(v,changes[v],'vv');
            if (v == 'updatetable') {
                // console.log('updatetable');
                if (changes[v].previousValue != null) {
                    this.selection.clear();
                    this.allSearch();
                }
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.inputblur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
        var _this = this;
        //   let source: any;
        //   let condition: any = {};
        //   source = {
        //     source: this.date_search_sourceval,
        //     condition: condition
        //   };
        //   let link = this.apiurlval + '' + this.date_search_endpointval;
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     this.result = res;
        //     this.preresult = this.result.res;
        //   });
        // }
        // not needed ,
        // this._service.success(this.columns[0].date,'dndnnd',this.options);
        /* this.stateGroupOptions = this.myControl.valueChanges
             .pipe(
                 startWith(''),
                 map(value => this._filterGroup(value))
             );*/
        this.stateGroup = this.myControl.valueChanges
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        function (value) { return _this._filter(value); })));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        var x = this.x;
        if (this.datasourceval)
            this.rescount = this.datasourceval.length;
        /** @type {?} */
        var temp = [];
        /** @type {?} */
        var keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        var coldef_list = [];
        /** @type {?} */
        var header_list = [];
        for (var i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, '_')); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        // coldef_list.push('Actions');
        // header_list.push('Actions')
        // console.log('coldef_list',coldef_list);
        // console.log('header_list',header_list);
        this.columns = [];
        var _loop_1 = function (i) {
            /** @type {?} */
            var ff = "row." + coldef_list[i];
            /** @type {?} */
            var tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], tooltip: "" + header_list[i], cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return eval(ff); }), objlength: header_list.length };
            // console.log('tt',tt);
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (var b in this_1.modify_header_arrayval) {
                if (b == tt.header) {
                    tt.header = this_1.modify_header_arrayval[b];
                }
            }
            // header tooltip array
            if (this_1.libdataval.header_tooltip_array != null && typeof (this_1.libdataval.header_tooltip_array) != 'undefined') {
                for (var b in this_1.libdataval.header_tooltip_array) {
                    if (b == tt.tooltip) {
                        tt.tooltip = this_1.libdataval.header_tooltip_array[b];
                    }
                }
                // console.log(tt.tooltip, 'tt.tooltip =====+++++')
            }
            if (this_1.skipval.indexOf(tt.columnDef) == -1) {
                this_1.columns.push(tt);
            }
        };
        var this_1 = this;
        for (var i = 0; i < coldef_list.length; i++) {
            _loop_1(i);
        }
        /** @type {?} */
        var displayedcols = [];
        this.tableflag = 1;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.tableflag = 0;
        }), 100);
        displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.columnDef; }));
        if (this.libdataval.footersettings != null) {
            this.tableFooterColumns = this.libdataval.footersettings.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.key; }));
        }
        else
            this.tableFooterColumns = [];
        /** @type {?} */
        var customcols = [];
        // console.log('displayedcols',displayedcols);
        if (this.libdataval != null && this.libdataval.tableheaders != null) {
            customcols = this.libdataval.tableheaders;
        }
        if (customcols != null && customcols.length > 0) {
            /** @type {?} */
            var ccolval = '';
            for (var v in customcols) {
                if (displayedcols.includes(customcols[v]) == false) {
                    for (var b in this.modify_header_arrayval) {
                        if (b == customcols[v]) {
                            ccolval = this.modify_header_arrayval[b];
                        }
                    }
                    this.columns.push({ columnDef: customcols[v], header: ccolval, cell: 'NA' });
                }
            }
            displayedcols = customcols;
        }
        // console.log('customcols',customcols,displayedcols,this.columns);
        if (this.libdataval.hideaction == null || this.libdataval.hideaction == false) {
            displayedcols.push(this.libdataval.actioncolname == null ? 'Actions' : this.libdataval.actioncolname);
            this.columns.push({ columnDef: this.libdataval.actioncolname == null ? 'Actions' : this.libdataval.actioncolname, header: 'Actions', cell: 'NA' });
        }
        if (this.libdataval.hidecounter == null || this.libdataval.hidecounter == false) {
            displayedcols.unshift('#');
            this.columns.push({ columnDef: '#', header: '#', cell: 'NA' });
        }
        // console.log(this.columns, 'cols');
        this.displayedColumns = [];
        this.displayedColumns = displayedcols;
        // this.displayedColumns.unshift('#');        /*adds select column in table by unshift function*/
        if (this.libdataval.hidemultipleselectbutton != true) {
            this.displayedColumns.unshift('select');
            this.columns.push({ columnDef: 'select', header: 'select', cell: 'NA' }); /*adds select column in table by unshift function*/
        }
        /** @type {?} */
        var tempcolarr = [];
        /** @type {?} */
        var tempcolarr2 = [];
        this.columns.reverse();
        for (var n in this.columns) {
            if (tempcolarr.indexOf(this.columns[n].columnDef) == -1)
                tempcolarr2.push(this.columns[n]);
            tempcolarr.push(this.columns[n].columnDef);
        }
        this.columns = tempcolarr2;
        // this.columns = Array.from(new Set(this.columns.map((item: any) => item.columnDef)));
        // this.columns.map(item => item.columnDef)
        //   .filter((value, index, self) => self.indexOf(value) === index);
        // unique col names 
        this.displayedColumns = Array.from(new Set(this.displayedColumns));
        // console.log(this.columns, 'cols filter', this.displayedColumns);
        /** @type {?} */
        var data_list = [];
        for (var i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        this.dataSource = new MatTableDataSource([]);
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        this.expandedElement = this.dataSource;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // load search predefinded data
        setTimeout((/**
         * @return {?}
         */
        function () {
            // this.selectsearch['status'] = '0';
            // console.log('selectsearch', this.selectsearch);
            if (_this.search_settingsval.selectsearch != null) {
                // console.log('s1', this.search_settingsval.selectsearch);
                for (var sl in _this.search_settingsval.selectsearch) {
                    if (_this.search_settingsval.selectsearch[sl].value != null && _this.search_settingsval.selectsearch[sl].value != '') {
                        // this.selectSearch(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0])
                        _this.selectsearch[_this.search_settingsval.selectsearch[sl].field] =
                            _this.search_settingsval.selectsearch[sl].value;
                        // selectSearch_condition
                        _this.initiateSearch = true;
                        _this.selectSearch_condition[_this.search_settingsval.selectsearch[sl].field] =
                            _this.search_settingsval.selectsearch[sl].value;
                        // console.log(this.initiateSearch, 'initiateSearch select')
                        // console.log(this.search_settingsval, 'ss+++++=====++++', this.search_settingsval.selectsearch, '++++++', this.selectsearch);
                        // console.log(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0],'????? new selectSearch_condition',this.selectSearch_condition)
                    }
                }
            }
            if (_this.search_settingsval.textsearch != null) {
                // console.log('t1', this.search_settingsval.textsearch);
                for (var sl in _this.search_settingsval.textsearch) {
                    if (_this.search_settingsval.textsearch[sl].value != null && _this.search_settingsval.textsearch[sl].value != '') {
                        _this.tsearch[_this.search_settingsval.textsearch[sl].field] =
                            _this.search_settingsval.textsearch[sl].value;
                        _this.initiateSearch = true;
                        // console.log(this.initiateSearch, 'initiateSearch text')
                    }
                }
            }
            if (_this.search_settingsval.search != null) {
                for (var ats in _this.search_settingsval.search) {
                    if (_this.search_settingsval.search[ats].value != null && _this.search_settingsval.search[ats].value != '' && _this.search_settingsval.search[ats].value.length > 0) {
                        _this.initiateSearch = true;
                        if (_this.autosearch[_this.search_settingsval.search[ats].field] == null) {
                            _this.autosearch[_this.search_settingsval.search[ats].field] = [];
                        }
                        for (var k in _this.search_settingsval.search[ats].value) {
                            // console.log(this.search_settingsval.search[ats].value,'>>=======')
                            _this.autosearch[_this.search_settingsval.search[ats].field].push({ val: _this.search_settingsval.search[ats].value[k].val, name: _this.search_settingsval.search[ats].value[k].name });
                        }
                    }
                }
            }
            // dateSearch_condition
            if (_this.search_settingsval.datesearch != null && _this.search_settingsval.datesearch[0].value != null && _this.search_settingsval.datesearch[0].value != '') {
                _this.initiateSearch = true;
                _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte - 86399000;
                _this.start_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-MM-DD").toString();
                _this.end_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-MM-DD").toString();
                _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte + 86399000;
                _this.dateSearch_condition[_this.search_settingsval.datesearch[0].field] = _this.search_settingsval.datesearch[0].value;
            }
            // console.log(this.search_settingsval, 'search_settingsval', this.dateSearch_condition)
            if (_this.search_settingsval.buttonsearch != null) {
                // console.log(this.search_settingsval.buttonsearch, 'this.search_settingsval.buttonsearch')
                for (var i in _this.search_settingsval.buttonsearch) {
                    /** @type {?} */
                    var ind = 0;
                    ind = parseInt(i);
                    if (_this.search_settingsval.buttonsearch[i].values != null && _this.search_settingsval.buttonsearch[i].values != '') {
                        _this.initiateSearch = true;
                        _this.buttonSearchData.push({ field: _this.search_settingsval.buttonsearch[i].field, key: ind, value: _this.search_settingsval.buttonsearch[i].values });
                    }
                }
            }
            if (_this.initiateSearch == true) {
                _this.allSearch();
            }
        }), 1000);
    };
    // Custom Filter new
    // Custom Filter new
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.CustomButtonListen = 
    // Custom Filter new
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // allSearchCond
        // console.log(this.search_settingsval.search, 'this.allSearchCond')
        this.onLiblistingButtonChange.emit({
            action: 'customlistenbutton', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, searchdata: this.search_settingsval, buttondata: val, allSearchCond: this.allSearchCond, autoSearchVal: this.autosearch, buttonSearchData: this.buttonSearchData
        });
        // var data:any={
        //   limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected,search:this.search_settingsval,buttonVal:val
        // }
        // console.log(data,'data++++===',val)
    };
    /**image view modal */
    /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    ListingComponent.prototype.img_modal_view = /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    function (img) {
        // console.warn("img_modal_view",img)
        /** @type {?} */
        var dialogRef = this.dialog.open(ImageView, {
            // panelClass: 'custom-modalbox-image-preview',
            panelClass: ['custom-modalbox', 'custom-modalbox-image-preview'],
            height: 'auto',
            data: { alldata: img }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentInit() ...');
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('ngAfterViewInit called ... ');
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.libdataval != null && _this.libdataval.cssoverridesoncelltorow != null) {
                for (var e in _this.libdataval.cssoverridesoncelltorow) {
                    /** @type {?} */
                    var cred = _this.upTo(_this._elementRef.nativeElement.querySelector('.' + _this.libdataval.cssoverridesoncelltorow[e].key), 'tr');
                    if (cred != null)
                        cred.classList.add(_this.libdataval.cssoverridesoncelltorow[e].val);
                    // const cred = this._elementRef.nativeElement.querySelector('.cred').parent().parent().parent().parent().addClass('credtr');
                    // console.log(cred, 'cred', e);
                }
            }
        }), 2000);
    };
    // Search Bar Toggle
    // Search Bar Toggle
    /**
     * @param {?} flag
     * @return {?}
     */
    ListingComponent.prototype.SearchBarToggle = 
    // Search Bar Toggle
    /**
     * @param {?} flag
     * @return {?}
     */
    function (flag) {
        this.onLiblistingButtonChange.emit({
            action: 'searchbar', flag: flag
        });
        switch (flag) {
            case true:
                this.searchBarFlag = false;
                this.searchBarToolTip = 'Open Search Bar';
                break;
            case false:
                this.searchBarFlag = true;
                this.searchBarToolTip = 'Close Search Bar';
                break;
        }
    };
    /**
     * @param {?} el
     * @param {?} tagName
     * @return {?}
     */
    ListingComponent.prototype.upTo = /**
     * @param {?} el
     * @param {?} tagName
     * @return {?}
     */
    function (el, tagName) {
        tagName = tagName.toLowerCase();
        while (el && el.parentNode) {
            el = el.parentNode;
            if (el.tagName && el.tagName.toLowerCase() == tagName) {
                return el;
            }
        }
        // Many DOM methods return null if they don't 
        // find the element they are searching for
        // It would be OK to omit the following and just
        // return undefined
        return null;
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentChecked called ...');
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // prevent memory leak when component destroyed
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.unsubscribe(); }));
    };
    /**
     * @param {?} vals
     * @return {?}
     */
    ListingComponent.prototype.clickmultipleselectoption = /**
     * @param {?} vals
     * @return {?}
     */
    function (vals) {
        this.onLiblistingChange.emit({ action: 'multipleselectoptionclick', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, btndata: vals });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x;
        this.errormg = '';
        /** @type {?} */
        var data = this.myForm.value;
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    };
    /**
     * @param {?} val
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.dateSearch = /**
     * @param {?} val
     * @param {?} item
     * @return {?}
     */
    function (val, item) {
        var _this = this;
        this.searchstrsarr.push({ val: this.tsearch[val], label: item.label, key: val });
        // console.log("start date");
        // console.log(this.start_date);
        // console.log(this.end_date);
        // let sd = moment(this.start_date).unix();
        // let ed = moment(this.end_date).unix();
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        /** @type {?} */
        var textSearch = {};
        condition = {};
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
            this.dateSearch_condition = {};
            this.dateSearch_condition = condition;
            if (this.end_date != null && this.start_date != null) {
                condition[val] = {
                    $gte: new Date(this.start_date).getTime(),
                    $lte: new Date(this.end_date).getTime() + 86399000,
                };
            }
            if (this.start_date != null && (this.end_date == null || this.end_date.length == 0)) {
                condition[val] = {
                    $gte: new Date(this.start_date).getTime(),
                };
            }
            if (this.end_date != null && (this.start_date == null || this.start_date.length == 0)) {
                condition[val] = {
                    $lte: new Date(this.end_date).getTime() + 86399000
                };
            }
            // console.log(this.dateSearch_condition.created_datetime.$gte,'after + 86399000',this.dateSearch_condition.created_datetime.$lte)
            // var dt=this.dateSearch_condition.created_datetime.$lte - 86399000;
            // console.log(this.dateSearch_condition.created_datetime.$gte,'after - 86399000',dt )
            // console.log(this.dateSearch_condition, 'dateSearch_condition++');
            for (var i in this.tsearch) {
                // console.log('this.tsearch', this.tsearch);
                if (this.tsearch[i] != null && this.tsearch[i] != '') {
                    textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
                }
            }
            /** @type {?} */
            var autosearch = {};
            // this.autosearch;
            for (var b in this.autosearch) {
                for (var m in this.autosearch[b]) {
                    /** @type {?} */
                    var tv = {};
                    tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                    if (autosearch.$or == null) {
                        autosearch.$or = [];
                    }
                    // console.log(autosearch.$and,'autosearch.$or 1')
                    autosearch.$or.push(tv);
                }
            }
            /** @type {?} */
            var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
            source = {
                condition: {
                    limit: this.limitcondval.limit,
                    skip: 0
                },
                sort: {
                    field: this.sortdataval.field,
                    type: this.sortdataval.type
                },
                searchcondition: conditionobj,
            };
            // console.log('date search con...', conditionobj, this.end_date, this.start_date);
            // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
            return;
            this.date_search_source_countval = 0;
            this.loading = true;
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                _this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                _this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    _this.tableflag = 1;
                }
                else {
                    _this.tableflag = 0;
                }
                // console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            /*this._http.post(link, {source:this.date_search_sourceval,
              condition: {
                'created_at': {
                  $lte: new Date(this.end_date).getTime(),
                  $gte: new Date(this.start_date).getTime(),
                }
              },token: this.jwttokenval,
            }).subscribe( res =>{
              let result: any ={};
              result = res;
              console.log("ok");
              console.log(res);
              console.log(result.res);
              let newdata = result.res;
              this.dataSource = new MatTableDataSource(result.res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })*/
        }
        else {
            console.log('error');
        }
    };
    /**
     * @param {?} value
     * @param {?} type
     * @param {?} statusval
     * @return {?}
     */
    ListingComponent.prototype.selectSearch = /**
     * @param {?} value
     * @param {?} type
     * @param {?} statusval
     * @return {?}
     */
    function (value, type, statusval) {
        // console.log(value, 'value', type, 'type', statusval, 'statusval')
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // let source: any;
        // let condition: any = {};
        this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
        /** @type {?} */
        var val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toString().toLowerCase();
        }
        // if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toLowerCase(), this.tsearch[value].toUpperCase()] }) condition[value + '_regex'] = val;
        // this.textSearch_condition = {};
        // this.textSearch_condition = condition;
        // //console.warn(this.tsearch);
        // let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        // source = {
        //   source: this.date_search_sourceval,
        //   condition: conditionobj
        // };
        // console.log(this.tsearch, 'czxcxczxc', this.search_settingsval.selectsearch, this.selectsearch, value, type);
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        condition = {};
        condition[type.field] = value;
        // this.selectSearch_condition = {};
        this.selectSearch_condition[type.field] = value;
        // console.log('selectSearch ', this.selectSearch_condition);
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    };
    // for managing pagination
    // for managing pagination
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    ListingComponent.prototype.paging = 
    // for managing pagination
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    function (val, flag) {
        var _this = this;
        // const lval: any = this.limitcondval;
        // console.log(this.limitcondval, 'lim val');
        if (this.limitcondval.pagecount == null)
            this.limitcondval.pagecount = 1;
        if (this.limitcondval.limit == null)
            this.limitcondval.limit = 10;
        if (this.limitcondval.limit != null && this.limitcondval.limit > 100) {
            if (flag != "selectpaging") {
                this.limitcondval.limit = 100;
            }
            // this.limitcondval.limit = 100;
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'You can see maximum 100 records at once !' }
            });
        }
        /** @type {?} */
        var maxpagecount = Number(this.date_search_source_countval / (this.limitcondval.limit));
        maxpagecount = ~~(maxpagecount);
        // console.log('this.oldlimitrange', this.oldlimitrange, this.limitcondval, this.date_search_source_countval, maxpagecount);
        // this.oldlimitrange.push({
        //   skip: this.limitcondval.skip,
        //   limit: this.limitcondval.limit,
        //   pagecount: this.limitcondval.pagecount
        // });
        if (val == 1) {
            this.limitcondval.skip = (this.limitcondval.pagecount) * this.limitcondval.limit;
            this.limitcondval.pagecount++;
        }
        if (val == -1 && this.limitcondval.skip < this.limitcondval.limit) {
            return;
        }
        if (val == -1 && this.limitcondval.skip >= this.limitcondval.limit) {
            // console.log('in skip block');
            this.limitcondval.skip = (this.limitcondval.pagecount - 2) * this.limitcondval.limit;
            this.limitcondval.pagecount--;
        }
        if (val > 1) {
            if (this.limitcondval.pagecount == 1) {
                this.limitcondval.skip = 0;
            }
            else {
                this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
            }
            // this.limitcondval.pagecount--;
        }
        if (this.limitcondval.pagecount > (maxpagecount + 1)) {
            this.limitcondval.pagecount = maxpagecount + 1;
            this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
        }
        // console.log(val,'ss',this.datacollectionval,this.limitcondval);
        /** @type {?} */
        var textSearch = {};
        for (var i in this.tsearch) {
            if (this.tsearch[i].toString().toLowerCase() != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        var autosearch = {};
        // this.autosearch;
        for (var b in this.autosearch) {
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
                tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                if (autosearch.$or == null) {
                    autosearch.$or = [];
                }
                // console.log(autosearch.$and,'autosearch.$or 2')
                autosearch.$or.push(tv);
            }
        }
        /** @type {?} */
        var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        /** @type {?} */
        var source = {
            condition: {
                limit: this.limitcondval.limit,
                skip: this.limitcondval.skip
            },
            sort: {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            },
            searchcondition: conditionobj,
        };
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /*let data:any={
          "condition":{
            limit:this.limitcondval.limit,
            skip:this.limitcondval.skip
          }
    
        }*/
        this.loading = true;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            _this.result = res;
            // console.log(this.result,'res');
            if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                _this.onLiblistingChange.emit({ action: 'paging', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, results: _this.result.results.res });
                // if (this.libdataval.footersettings != null) {
                //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                // }
                _this.dataSource = new MatTableDataSource(_this.result.results.res);
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: 'New range of data loaded' }
                });
                // this.oldlimitrange.skip = this.limitcondval.skip;
                // this.oldlimitrange.limit = this.limitcondval.limit;
                // this.oldlimitrange.pagecount = this.limitcondval.pagecount;
                // console.log('this.oldlimitrange after ', this.oldlimitrange);
            }
            else {
                // console.log('o len', this.oldlimitrange.length, this.oldlimitrange);
                // this.oldlimitrange = this.oldlimitrange.reverse();
                // this.oldlimitrange = this.oldlimitrange.slice(0, this.oldlimitrange.length - 2); 
                // this.oldlimitrange.splice(this.oldlimitrange.length - 1, 1);
                // this.oldlimitrange.splice(0, 1);
                // this.refreshdata();
                // this.limitcondval = this.oldlimitrange[this.oldlimitrange.length - 1];
                // console.log(this.limitcondval, this.oldlimitrange, 'lavl n old ');
                // this.limitcondval.skip = this.oldlimitrange.skip;
                // this.limitcondval.limit = this.oldlimitrange.limit;
                // this.limitcondval.pagecount = this.oldlimitrange.pagecount;
                // if (val == 1) {
                //   this.limitcondval.pagecount--;
                //   this.limitcondval.skip -= this.limitcondval.limit;
                // }
                // if (val == -1) {
                //   this.limitcondval.pagecount++;
                //   this.limitcondval.skip += this.limitcondval.limit;
                // }
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'No Data Found in this range !!' }
                });
            }
            _this.loading = false;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }));
        this.selection.clear();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.addautosearchdata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('v',val);
    };
    /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    ListingComponent.prototype.remove = /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    function (val, i, field) {
        if (this.autosearch[field] != null) {
            this.autosearch[field].splice(i, 1);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.autocompletechangedetected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.currentautocompleteitem = item;
        this.currentautosearcharr = [];
        // console.log('autocompletechangedetected', this.currentautocompleteitem);
        if (this.currentautocompleteitem.serversearchdata == null)
            this.modelChanged.next();
        else {
            // console.log('in else block of autocompletechangedetected');
            this.modelChangedserver.next();
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.filterautoval = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('filterautoval', data, this.autosearchinput[data.field]);
        /** @type {?} */
        var autoselval = this.autosearchinput[data.field];
        this.currentautosearcharr = [];
        if (this.autosearchinput[data.field] != null && this.autosearchinput[data.field] != '') {
            /** @type {?} */
            var filterval = data.values.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // console.log('e', e, fieldval)
                return e.name.toString().toLowerCase().includes(autoselval.toLowerCase());
            }));
            this.currentautosearcharr = filterval;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.resetautocomp = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var el = document.querySelector('#autocompletesearch' + val.field);
        el.value = '';
    };
    /**
     * @param {?} value
     * @param {?} data
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.autosearchfunction = /**
     * @param {?} value
     * @param {?} data
     * @param {?} item
     * @return {?}
     */
    function (value, data, item) {
        // this.autosearchinput[value] = '';
        // console.log(this.autosearchinput, 'asi', data, value, item);
        this.searchstrsarr.push({ val: this.autosearchinput[value], label: item.label, key: value });
        if (this.autosearch[value] == null) {
            this.autosearch[value] = [];
        }
        // console.log(this.autosearch, 'autosearch 1130')
        this.autosearch[value].push(data);
        // console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
        this.autosearchinput[value] = null;
        this.currentautosearcharr = [];
        /** @type {?} */
        var el = document.querySelector('#autocompletesearch' + value);
        el.value = '';
        // console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
        // reset auto search data !
        // console.log(value, 'selected auto', this.autosearchinput[value]);
        // console.log(value,data,'ss',this.autosearch);
        /*let val: any = this.autosearch[value];
        let source: any;
        let condition: any = {};
        if (this.autosearch[value] !=null && this.autosearch[value].length > 0 && { $or: [this.autosearch[value].toLowerCase(), this.autosearch[value].toUpperCase(), this.autosearch[value]] }) condition[value + '_regex'] = val;
        this.autoSearch_condition = {};
        this.autoSearch_condition = condition;
        let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
          source: this.date_search_sourceval,
          condition: conditionobj
        };*/
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //   this.result = res;
        //   this.dataSource = new MatTableDataSource(this.result.res);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // });
    };
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.textsearchfunction = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        if (this.tsearch[value] == '') {
            /** @type {?} */
            var index = this.searchstrsarr.indexOf(this.searchstrsarr[value]);
            // console.log(index, 'index');
            delete this.searchstrsarr[value];
            // if (index > -1) {
            // this.searchstrsarr.splice(value, 1);
            // }
        }
        else
            this.searchstrsarr[value] = ({ val: this.tsearch[value], label: item.label, key: value });
        // console.log('textsearchfunction', value, item, this.searchstrsarr);
        /** @type {?} */
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition = {};
        /** @type {?} */
        var val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toString().toLowerCase();
        }
        if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toString().toLowerCase(), this.tsearch[value].toUpperCase()] }) {
            condition[value + '_regex'] = val;
        }
        this.textSearch_condition = {};
        this.textSearch_condition = condition;
        // console.warn(this.tsearch);
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        // add loader
        // this.loading = true;
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     //close loader
        //     this.loading = false;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.refreshdata = /**
     * @return {?}
     */
    function () {
        // console.log('++++')
        this.autosearch = [];
        this.tsearch = [];
        this.selectsearch = [];
        this.start_date = null;
        this.limitcondval.skip = 0;
        this.end_date = null;
        this.selectSearch_condition = {};
        this.dateSearch_condition = {};
        this.allSearch();
        this.selection.clear();
        this.allSearchCond = [];
        this.buttonSearchData = [];
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.refreshalldata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.dataSource = new MatTableDataSource(this.olddata);
        this.selection = new SelectionModel(true, []);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: 'Refresh successfully!!', isconfirmation: false }
            });
        }
        else {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                // panelClass: 'custom-modalbox',
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: ' Updated!!', isconfirmation: false }
            });
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toString().toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toString().toLowerCase().includes(filterValue); }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.getstatus = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('val');
        // console.log(val);
        for (var b in this.statusarrval) {
            if (this.statusarrval[b].val == val) {
                return this.statusarrval[b].name;
            }
            // console.log(this.statusarrval[b].name);
        }
        return 'N/A';
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.pdfFlag = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date == null) {
            // console.log('shatter blok');
            this.sh = true;
            this.aud = false;
        }
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date != null) {
            this.sh = true;
            this.aud = true;
        }
        if (val.shatterblok_agreement_date == null && val.audiodeadline_agreement_date == null) {
            this.sh = false;
            this.aud = false;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.grapurl = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        //  for all row checking
        // console.log(val)
        if (val != null) {
            this.art = true;
            this.aud2 = true;
        }
        if (val == null) {
            this.art = false;
            this.aud2 = false;
        }
        // console.log(this.sh);
        // console.log(this.aud);
    };
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.copyText = /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    function (row, val) {
        /** @type {?} */
        var fullurl = val + '' + row;
        /** @type {?} */
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = fullurl;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Copied Successfully !! ' }
        });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.openinternallink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.router.navigate([val.route]);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openinternallinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        /** @type {?} */
        var rdata = [];
        rdata.push(val.route);
        for (var v in val.param) {
            rdata.push(data[val.param[v]]);
        }
        // console.log('radat', rdata);
        this.router.navigate(rdata);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionlocaldata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        // console.log('opencustombuttonactionlocaldata',val,data);
        /** @type {?} */
        var dataarr = [];
        // dataarr.push(['name','debasis']);
        // dataarr.push(['desc','test']);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        for (var v in val.datafields) {
            /** @type {?} */
            var temparr = [];
            temparr.push(val.datafields[v]);
            if (val.datafields[v] != 'image' && val.datafields[v] != 'video') {
                // console.log('ss',val.datafields[v]);
                if (data[val.datafields[v]] != null && typeof (data[val.datafields[v]]) != 'object') {
                    // console.log('df', data[val.datafields[v]].toString());
                    if (data[val.datafields[v]] != null && data[val.datafields[v]].toString().includes('iframe')) {
                        // console.log('in safe', data[val.datafields[v]]);
                        temparr.push(this.sanitizer.bypassSecurityTrustHtml(data[val.datafields[v]]));
                    }
                    else {
                        temparr.push((data[val.datafields[v]]));
                    }
                }
                else {
                    // console.log('ss22',val.datafields[v]);
                    // else
                    temparr.push(data[val.datafields[v]]);
                }
            }
            if (val.datafields[v] == 'image') {
                temparr.push('<img mat-card-image src=' + data[val.datafields[v]] + ' > <br/>');
            }
            if (val.datafields[v] == 'video') {
                if (data[val.datafields[v]] != null && data[val.datafields[v]] != '') {
                    /** @type {?} */
                    var temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + data[val.datafields[v]] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
                    temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                    temparr.push(temphtml);
                    // console.log('thtml', temphtml, data[val.datafields], data[val.datafields[v]]);
                }
                else {
                    temparr.push('N/A');
                }
            }
            // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
            dataarr.push(temparr);
        }
        // console.log('local data m', dataarr);
        /** @type {?} */
        var res = dataarr;
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
                    // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        // console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null) {
                    resdata[b] = res[b];
                }
            }
            // console.log('c',res,resdata);
            res = resdata;
            // console.log('c',res,resdata);
        }
        // console.log('dataarr',dataarr);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        res.message = val.headermessage;
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: ['custom-modalbox-apidata', 'modal-localdata'],
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionapidata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        var _this = this;
        // console.log('opencustombuttonactionapidata',val,data);
        this.loading = true;
        /** @type {?} */
        var link = this.apiurlval + val.endpoint;
        /** @type {?} */
        var source = {};
        source[val.param] = data._id;
        if (val.otherparam != null) {
            for (var n in val.otherparam) {
                source[val.otherparam[n]] = data[val.otherparam[n]];
            }
        }
        this.loaderrow = data._id;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: { errormessage: result.msg }
                });
                // console.log('res',result);
                /** @type {?} */
                var resdata = {};
                _this.loaderrow = null;
                _this.loading = false;
                if (result.res[0] != null) {
                    resdata = result.res[0];
                }
                else {
                    resdata = result.res;
                }
                /** @type {?} */
                var temprdata = {};
                // console.log('resdata>>>', resdata);
                if (val.datafields != null) {
                    for (var b1 in val.datafields) {
                        // console.log('val.datafields', val.datafields[b1]);
                        // for (let b2 in dataarr) {
                        // console.log('b2',b2,data[b2],dataarr[b2][0]);
                        // if (dataarr[b2][0] == val.datafields[b1]) resdataformodal[b1] = [dataarr[b2][0], dataarr[b2][1]];
                        temprdata[val.datafields[b1]] = resdata[val.datafields[b1]];
                    }
                    // }
                    resdata = temprdata;
                }
                /** @type {?} */
                var dataarr = [];
                // dataarr.push(['name','debasis']);
                // dataarr.push(['desc','test']);
                for (var v in resdata) {
                    /** @type {?} */
                    var temparr = [];
                    temparr.push(v);
                    if (v != 'image' && v != 'video') {
                        if (resdata[v] != null && typeof (resdata[v]) != 'object') {
                            // console.log('resv', resdata[v]);
                            if (resdata[v].toString().includes('iframe')) {
                                temparr.push(_this.sanitizer.bypassSecurityTrustHtml(resdata[v]));
                            }
                            else {
                                temparr.push(resdata[v]);
                            }
                        }
                        else {
                            temparr.push(resdata[v]);
                        }
                    }
                    if (v == 'image') {
                        temparr.push('<img mat-card-image src=' + resdata[v] + ' > <br/>');
                    }
                    if (v == 'video') {
                        /** @type {?} */
                        var temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + resdata[v] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
                        temphtml = _this.sanitizer.bypassSecurityTrustHtml(temphtml);
                        temparr.push(temphtml);
                    }
                    // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
                    dataarr.push(temparr);
                }
                if (_this.libdataval.detailview_override != null && _this.libdataval.detailview_override.length > 0) {
                    /** @type {?} */
                    var resdata_1 = [];
                    for (var b in dataarr) {
                        for (var c in _this.libdataval.detailview_override) {
                            // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                            if (_this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                                // console.log('h', c, this.libdataval.detailview_override[c]);
                                resdata_1[b] = [_this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
                            }
                        }
                        if (resdata_1[b] == null) {
                            resdata_1[b] = dataarr[b];
                        }
                    }
                    // console.log('c',res,resdata);
                    dataarr = resdata_1;
                }
                // console.log('c api data ', resdata);
                // let resdataformodal: any = {};
                // console.log('resdataformodal', dataarr, dataarr);
                if (val.refreshdata != null && val.refreshdata == true) {
                    _this.allSearch();
                }
                dataarr['message'] = val.headermessage;
                /** @type {?} */
                var dialogRef = _this.dialog.open(Confirmdialog, {
                    height: 'auto',
                    panelClass: ['custom-modalbox', 'api-data'],
                    data: { isconfirmation: false, data: dataarr }
                });
            }
            if (result.status == 'error') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('Oooops!');
            _this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            _this.loading = false;
        }));
        return;
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openextlinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        // console.log('val',val,data);
        /** @type {?} */
        var qtext = '';
        /** @type {?} */
        var fulllink = '';
        fulllink = val.link;
        if (val.paramtype == null) {
            for (var v in val.param) {
                qtext = val.param[v].q + '=' + encodeURI(data[val.param[v].key]);
                // console.log('qtext',qtext);
                if (parseInt(v) == 0) {
                    fulllink = fulllink + '?' + qtext;
                }
                if (parseInt(v) != 0) {
                    fulllink = fulllink + '&' + qtext;
                }
            }
            // val.link=fulllink;
        }
        if (val.paramtype != null && val.paramtype == 'angular') {
            for (var v in val.param) {
                // qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                // console.log('qtext',qtext);
                fulllink = fulllink + '/' + encodeURI(data[val.param[v]]);
            }
            // val.link=fulllink;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.log("Hello from setTimeout");
            // console.log('link',fulllink,data,qtext);
        }), 10);
        window.open(fulllink, '_blank');
    };
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    ListingComponent.prototype.clickurl = /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    function (val, url) {
        /** @type {?} */
        var link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, '_blank');
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    ListingComponent.prototype.checkedlist = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        var _this = this;
        // this.selection.isSelected(row);
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var seldata = _this.selection.selected.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x._id; }))
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            ;
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            _this.onLiblistingChange.emit({ action: 'multipleselectionchange', limitdata: _this.limitcondval, sortdata: _this.sortdataval, selecteddata: _this.selection.selected });
        }), 100);
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        // console.log('isAllSelected');
        if (this.selection != null && this.selection.select) {
            // console.log('isAllSelected', this.dataSource.data.length, this.selection.selected.length, this.selection.selected);
            /** @type {?} */
            var numSelected = this.selection.selected.length;
            /** @type {?} */
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    ListingComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
        this.checkedlist();
    };
    /** The label for the checkbox on the passed row */
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    ListingComponent.prototype.checkboxLabel = /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    /**
     * @param {?} point
     * @return {?}
     */
    ListingComponent.prototype.createData = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        /** @type {?} */
        var data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, '_')] = point[key];
        }));
        return data;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    ListingComponent.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.dataSource.filter = filterValue.trim().toString().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
    /*applyFilter1(filterValue: string, val: any) {
      console.log(filterValue);
      console.log(val.value);
      let value= new MatTableDataSource(val.value);
  
      value.filter = filterValue.trim().toLowerCase();
      console.log(value);
      /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
        // return data.name.toLowerCase().includes(filter);
      };
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }*!/
    }*/
    /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    ListingComponent.prototype.styleCell = /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    function (col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    };
    /**show video modal on click of thamnail function by sourav */
    /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    ListingComponent.prototype.fetchvideo = /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    function (videodata) {
        // console.warn('videodata',videodata);
        /** @type {?} */
        var dialogRef = this.dialog.open(VideoPlayer, {
            panelClass: ['custom-modalbox-videoplayer-preview', 'video-modal'],
            height: 'auto',
            data: { previewData: videodata }
        });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.opennotes = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        this.loading = true;
        this.loaderrow = val._id;
        this._apiService.postSearch(this.apiurlval + this.libdataval.notes.listendpoint, this.jwttokenval, { id: val._id }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            // console.log(result.res, 'list notes');
            _this.loading = false;
            _this.loaderrow = null;
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.data.notesval = '';
            // console.log('notes', val);
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                height: 'auto',
                panelClass: ['custom-modalbox', 'notes-modal'],
                data: {
                    isconfirmation: false,
                    notes: true, apiurl: _this.apiurlval,
                    notedata: _this.libdataval.notes, rowdata: val,
                    jwttokenval: _this.jwttokenval,
                    listdata: result.res,
                    _snackBar: _this._snackBar
                }
            });
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.allSearch();
            }));
        }));
    };
    /**
     * @param {?} data1
     * @return {?}
     */
    ListingComponent.prototype.viewdata = /**
     * @param {?} data1
     * @return {?}
     */
    function (data1) {
        console.log('data1 ++++++++', data1);
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
        /** @type {?} */
        var headerData = {};
        if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
            console.log('== ++++++++', this.libdataval.preview_header);
            headerData = this.libdataval.preview_header;
        }
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (typeof (data[key]) == 'boolean') {
                    if (data[key] == true) {
                        data[key] = 'Yes';
                    }
                    if (data[key] == false) {
                        data[key] = 'No';
                    }
                }
                if (key == 'image') {
                    data[key + ':'] = '<img mat-card-image src=' + data[key] + '><br/>';
                }
                if (typeof (data[key]) == 'object') ;
                if (typeof (data[key]) == 'object') {
                    /** @type {?} */
                    var tempdata = [];
                    for (var k in data[key]) {
                        for (var p in this.detail_datatypeval) {
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                // let imgval:any=this.detail_datatypeval[p].fileurl+data[key][k];
                                // console.log('imgval');
                                // console.log('imgval');
                                // console.log(imgval);="+
                                // console.log(data[key][k].replace(/'/g, ''));
                                tempdata.push('<img mat-card-image src=' + data[key][k] + '><br/>');
                                // tempdata.push("<span>"+data[key][k]+"</span><br/>")
                            }
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value != 'image') {
                                // tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                tempdata.push('<span>' + data[key][k] + '</span><br/>');
                            }
                            if (this.detail_datatypeval[p].key != key) {
                                // tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                if (typeof (data[key][k]) == 'object') {
                                    for (var objk in data[key][k]) {
                                        tempdata.push('<span>' + objk + ' : ' + data[key][k][objk] + '</span><br/>');
                                    }
                                }
                            }
                        }
                    }
                    data[key + ':'] = tempdata;
                }
            }
        }
        for (var n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (var v in this.detail_skip_arrayval) {
            // data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
        }
        /** @type {?} */
        var res = Object.entries(data2);
        // console.log('view data',res);
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
                    // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        // console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null) {
                    resdata[b] = res[b];
                }
            }
            // console.log('c',res,resdata);
            res = resdata;
            // console.log('c',res,resdata);
        }
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            autoFocus: false,
            maxHeight: '1000vh',
            panelClass: ['custom-modalbox', 'detail-view'],
            data: { isconfirmation: false, data: res, headerData: headerData }
        });
    };
    // parent-bottom-class
    // parent-bottom-class
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.managestatus = 
    // parent-bottom-class
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatus(_this.apiurlval + _this.libdataval.updateendpoint, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c in _this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (_this.olddata[c]._id == data._id) {
                                _this.olddata[c].status = data.status;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        // this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'statusupdate', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'manage-status'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    // console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            // this.animal = result;
        }));
    };
    // for tree view in modal
    // for tree view in modal
    /**
     * @param {?} row
     * @param {?} custombutton
     * @return {?}
     */
    ListingComponent.prototype.custombuttonlistner = 
    // for tree view in modal
    /**
     * @param {?} row
     * @param {?} custombutton
     * @return {?}
     */
    function (row, custombutton) {
        // console.log('custombuttonlistner', row, custombutton);
        this.onLiblistingChange.emit({
            action: 'custombuttonclick', limitdata: this.limitcondval, sortdata: this.sortdataval, custombuttonclick: {
                data: row, btninfo: custombutton
            }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.custombuttonfunc = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('data');
        // console.log(data);    // row data
        // console.log(this.custombuttonval);    // object from where the library has been used
        /** @type {?} */
        var unsafeurl = this.custombuttonval.url;
        for (var b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data: data, customdata: unsafeurl }] }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.managestatusmultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        // console.log('data');
        // console.log(data);
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                // data.status = result.val;
                // data.id = data._id;
                /** @type {?} */
                var newstatus_1 = result.val;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatusmany(_this.apiurlval + _this.libdataval.updateendpointmany, ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c_1 in _this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(_this.olddata[c_1]._id) > -1) {
                                _this.olddata[c_1].status = newstatus_1;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        // this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'multiplestatusupdate', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'toogle-many'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    // console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.deletemultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: ['custom-modalbox', 'delete-multiple'],
            data: {
                message: 'Are you sure you want to delete these records? This process can not be undone.',
                type: 'confirm'
            }
        });
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result == 'yes') {
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteManyData(_this.apiurlval + _this.libdataval.deleteendpointmany, ids, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        var _loop_2 = function (c_2) {
                            _this.olddata = _this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            function (olddata) { return olddata._id != ids[c_2]; }));
                        };
                        for (var c_2 in ids) {
                            _loop_2(c_2);
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'multipledelete', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef_1 = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-multiple'],
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    // console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.deletedata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        var _this = this;
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: ['custom-modalbox', 'delete-single'],
            height: 'auto',
            data: {
                message: 'Are you sure you want to delete this record? This process can not be undone.',
                type: 'confirm'
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result == 'yes') {
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        _this.olddata = _this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        function (olddata) { return olddata._id != data._id; }));
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'delete', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef_2 = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-single'],
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    // console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.editdata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.router.navigate([this.editrouteval, data._id]);
    };
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    ListingComponent.prototype.sorttable = /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        // console.log(field, type)
        this.sortdataval.field = field;
        this.sortdataval.type = type;
        this.allSearch();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.allSearch = /**
     * @return {?}
     */
    function () {
        // console.log("hit");
        var _this = this;
        // console.log("hit");
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var textSearch = {};
        // this.searchstrsarr.push({ val: this.tsearch[value], label: item.label, key: value });
        // console.log(this.searchstrsarr, 'this.searchstrsarr');
        // console.log(this.search_settingsval.search, 'search_settingsval.search');
        for (var i in this.tsearch) {
            // console.log('all search this.tsearch', this.tsearch[i]);
            if (this.tsearch[i] != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        var autosearch = {};
        // this.autosearch;
        for (var b in this.autosearch) {
            /** @type {?} */
            var tempautosearch = {};
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
                tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                if (tempautosearch.$or == null) {
                    tempautosearch.$or = [];
                }
                // console.log(autosearch.$and,'autosearch.$and 3')
                // autosearch.$or.push(tv);
                tempautosearch.$or.push(tv);
            }
            if (autosearch.$and == null) {
                autosearch.$and = [];
            }
            autosearch.$and.push(tempautosearch);
            // autosearch = Object.assign({},tempautosearch,autosearch);
            /** @type {?} */
            var autocount = void 0;
            if (Object.keys(autosearch).length == null || typeof Object.keys(autosearch).length == 'undefined') {
                autocount = 0;
            }
            else {
                autocount = Object.keys(autosearch).length;
            }
            // console.log(autocount, 'autosearch.length++++', tempautosearch,Object.keys(autosearch).length,Object.keys(autosearch))
            // autosearch[autocount] = tempautosearch;
        }
        // console.log('autos qq++', autosearch, this.autosearch);
        // button Search Data
        /** @type {?} */
        var buttonsearch = {};
        for (var bs in this.buttonSearchData) {
            for (var k in this.buttonSearchData[bs].value) {
                /** @type {?} */
                var bt = {};
                bt[this.buttonSearchData[bs].field] = this.buttonSearchData[bs].value[k].val.toString().toLowerCase();
                if (buttonsearch.$or == null) {
                    buttonsearch.$or = [];
                }
                // console.log(bt,'bt',bs,'bs')
                buttonsearch.$or.push(bt);
            }
        }
        // console.log(this.buttonSearchData, 'buttonsearch')
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        this.oldlimitrange = this.limitcondval;
        /** @type {?} */
        var conditionobj = {};
        conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, buttonsearch, this.selectSearch_condition, this.libdataval.basecondition);
        // console.log(this.selectSearch_condition, 'selectSearch_condition')
        this.allSearchCond = conditionobj;
        // conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
        // conditionobj = conditionobj & this.libdataval.basecondition;
        // conditionobj = conditionobj.concat(this.libdata.basecondition);
        // for (let b in conditionobj) {
        //   // if(conditionobj[b])
        //   for (let c in this.libdataval.basecondition) {
        //     if (c == b) {
        //       // conditionobj[b]={};
        //       let totalcond: any;
        //       if (typeof (conditionobj[b]) != 'object')
        //         totalcond = Object.assign({}, this.libdataval.basecondition[c], { $eq: conditionobj[b] });
        //       else
        //         totalcond = Object.assign({}, this.libdataval.basecondition[c], conditionobj[b]);
        //       console.log('in if blk', c, b, conditionobj[b], this.libdataval.basecondition[c], totalcond);
        //       conditionobj[b] = totalcond;
        //     } else {
        //       conditionobj[c] = this.libdataval.basecondition[c];
        //     }
        //   }
        // }
        // console.log('this.libdataval.basecondition', this.selectSearch_condition, 'conditionobj', conditionobj, 'this.libdataval.basecondition', this.libdataval.basecondition);
        // conditionobj = conditionobj.concat(this.libdata.basecondition);
        source = {
            condition: {
                limit: this.limitcondval.limit,
                skip: 0
            },
            sort: {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            },
            searchcondition: conditionobj,
        };
        // console.log('con...', conditionobj, 'ed', this.end_date, 'l', Object.keys(conditionobj).length);
        if (Object.keys(conditionobj).length < 0) {
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'No Search criteria selected !! ' }
            });
            return;
        }
        else {
            // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
            // return;
            this.date_search_source_countval = 0;
            this.loading = true;
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    _this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: _this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: _this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: _this.allSearchCond,
                        autoSearchVal: _this.autosearch,
                        searchdata: _this.search_settingsval,
                        selecteddata: _this.selection.selected
                    });
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    _this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: _this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: _this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: _this.allSearchCond,
                        autoSearchVal: _this.autosearch,
                        searchdata: _this.search_settingsval,
                        selecteddata: _this.selection.selected,
                        flag: 'no_record'
                    });
                    // this.rescount = 0; 
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                _this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                _this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    _this.tableflag = 1;
                }
                else {
                    _this.tableflag = 0;
                }
                // console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
        }
        this.initiateSearch = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.gettypeof = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return typeof (val);
    };
    // open Bottom Sheet For Search
    // open Bottom Sheet For Search
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    ListingComponent.prototype.openBottomSheetForSearch = 
    // open Bottom Sheet For Search
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    function (data, index) {
        var _this = this;
        /** @type {?} */
        var count = 1;
        // console.log(data, 'openBottomSheetForSearch', index)
        /** @type {?} */
        var bs = this.dialog.open(ModalForButtomSearch, { panelClass: 'button-search-modal', data: { items: data } });
        bs.disableClose = true;
        bs.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log(result, 'result++++==== data', data)
            if (result != null && result.flag == 'yes') {
                count = 1;
                /** @type {?} */
                var searchFlag = 0;
                // console.log(result, 'result++++====??', index)
                // console.log(this.buttonSearchData, 'buttonSearchData 1')
                if (_this.buttonSearchData.length > 0) {
                    searchFlag = 1;
                    for (var i in _this.buttonSearchData) {
                        if (_this.buttonSearchData[i].field == result.items.field) {
                            count = 2;
                            searchFlag = 1;
                            // console.log('true +++ count', count)
                            for (var j in result.selectedData) {
                                _this.buttonSearchData[i].value.push(result.selectedData[j]);
                            }
                            if (searchFlag == 1) {
                                // console.log(searchFlag, 'searchFlag 2')
                                _this.allSearch();
                            }
                            return;
                        }
                        else {
                            count = 0;
                        }
                    }
                    // console.log(count, 'count else check')
                    // console.log(this.buttonSearchData, 'buttonSearchData 2')
                    if (count == 0) {
                        _this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                        searchFlag = 1;
                    }
                }
                else {
                    _this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                    searchFlag = 1;
                }
                // console.log(searchFlag, 'searchFlag 1')
                if (searchFlag == 1) {
                    // console.log(searchFlag, 'searchFlag 2')
                    _this.allSearch();
                }
            }
        }));
    };
    // clear Button Search Chips  data
    // clear Button Search Chips  data
    /**
     * @param {?} bs
     * @param {?} i
     * @param {?} item
     * @param {?} j
     * @return {?}
     */
    ListingComponent.prototype.clearButtonSearchChips = 
    // clear Button Search Chips  data
    /**
     * @param {?} bs
     * @param {?} i
     * @param {?} item
     * @param {?} j
     * @return {?}
     */
    function (bs, i, item, j) {
        // console.log(bs, i, item, j, 'bs,i,item,j');
        this.buttonSearchData[i].value.splice(j, 1);
        // console.log(this.buttonSearchData, 'buttonSearchData splice')
        // this.search_settingsval.buttonsearch[bs.key].values
        for (var i_1 in this.search_settingsval.buttonsearch) {
            if (this.search_settingsval.buttonsearch[i_1].field == bs.field) {
                // console.log('', this.search_settingsval.buttonsearch[i])
                this.search_settingsval.buttonsearch[i_1].value.push(item);
            }
        }
        // console.log(this.search_settingsval.buttonsearch,'this.search_settingsval.buttonsearch')
    };
    /* artistxp preview button click function start */
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    ListingComponent.prototype.artistxpPreview = /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    function (singleData) {
        var _this = this;
        /** @type {?} */
        var link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        var data = { source: 'blockchainuser_view', condition: { posts_id_object: singleData._id }, token: this.jwttokenval };
        /******** not completed *****/
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var restlt = response;
            /* open dialog */
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'delete-axp'],
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    };
    ListingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing',
                    template: "<div class=\"container\">\r\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\r\n    <mat-card>\r\n\r\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\r\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\r\n                (click)=\"SearchBarToggle(searchBarFlag)\">\r\n                search\r\n            </span>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\r\n\r\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\r\n\r\n\r\n                <ng-container class=\"inputfilterForloop\"\r\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\r\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\r\n                        <mat-form-field class=\"searchdiv pad-gap\">\r\n\r\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\r\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\r\n                                placeholder=\"{{item.label}}\">\r\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\r\n                                    search\r\n                                </i> &nbsp;</span>\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n                <ng-container class=\"inputfilterForAuto\"\r\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\r\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\r\n\r\n\r\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\r\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\r\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\r\n                                {{v.name}}\r\n                                <mat-icon matChipRemove>cancel</mat-icon>\r\n                            </mat-chip>\r\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\r\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\r\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\r\n                                (keyup)=\"autocompletechangedetected(item);\">\r\n                        </mat-chip-list>\r\n\r\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\r\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\r\n\r\n\r\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\r\n                                {{option[item.field]}}\r\n                            </mat-option>-->\r\n\r\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\r\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\r\n                                {{statusval.name}}\r\n                            </mat-option>\r\n                        </mat-autocomplete>\r\n                    </mat-form-field>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\r\n    \r\n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\r\n            <mat-label>{{item.label}}</mat-label>\r\n            <mat-select>\r\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\r\n                {{status.email}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n    \r\n          </span>-->\r\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\r\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\r\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\r\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\r\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\r\n            </mat-form-field>\r\n    &lt;!&ndash;              </span>&ndash;&gt;\r\n          </ng-container>-->\r\n\r\n\r\n                <ng-container class=\"filterForTexticon\"\r\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\r\n                    <!-- <span>dddddd</span> -->\r\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\r\n                        <mat-label>{{status.label}}</mat-label>\r\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\r\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\r\n                            [(ngModel)]='tsearch[status.field]'>\r\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\r\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\r\n                                {{statusval.name}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\r\n                    <!-- <span>D search !!</span> -->\r\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\r\n\r\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\r\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\r\n                                placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\r\n                                (dateChange)=\"dateSearch(status.field,status)\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n\r\n                        <mat-form-field class=\"filterFordatesearchend\">\r\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\r\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\r\n                                (dateChange)=\"dateSearch(status.field,status)\">\r\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                            <mat-datepicker #picker1></mat-datepicker>\r\n                        </mat-form-field>\r\n\r\n                        <!-- <span class=\"search_class\">\r\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\r\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\r\n                        </span> -->\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n\r\n                <!-- <br><br> <br><br> -->\r\n\r\n                <div class=\"searchbtncls\">\r\n                    <!-- use for refresh all data -->\r\n                    <span class=\"search_class\">\r\n                        <ng-container class=\"refresh\">\r\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\">\r\n                                autorenew\r\n                            </i>\r\n                        </ng-container>\r\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\r\n                        <ng-container class=\"refresh\">\r\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\r\n                                matTooltip=\"search\">Search</button>\r\n                        </ng-container>\r\n\r\n                        <br>\r\n                    </span>\r\n                </div>\r\n\r\n\r\n                <!--custom buttons -->\r\n                <div class=\"CustomButtonListen_div\">\r\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\r\n                        class=\"filterForTexticon\">\r\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\r\n                            class=\"add_custom_button\">\r\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\r\n                                (click)=\"CustomButtonListen(bt)\">\r\n                                {{bt.label}}</button> &nbsp;\r\n                        </ng-container>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\r\n                        class=\"filterForTexticon\">\r\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\r\n                            class=\"add_custom_button\">\r\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\r\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\r\n                                {{bt.label}}</button> &nbsp;\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n                <!-- for button search  -->\r\n                <div class=\"buttonsearch_div\">\r\n                    <ng-container class=\"filterForTexticon\"\r\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\r\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\r\n\r\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\r\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\r\n                            </button>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\r\n\r\n\r\n                <!-- buttonvSearch Data div -->\r\n                <div class=\"buttonSearchDatacls_div\">\r\n                    <ng-container class=\"buttonSearchDatacls\"\r\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\r\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\r\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\r\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\r\n\r\n                                <h3 class=\"search_settingsval_bs_cls\"\r\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\r\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\r\n\r\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\r\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\r\n                                        {{item.name}}\r\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\r\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\r\n                                    </mat-chip>\r\n                                </mat-chip-list>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <br />\r\n\r\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\r\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\r\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\r\n                </span>\r\n            </mat-toolbar-row>\r\n        </div>\r\n\r\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\r\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\r\n        </div>\r\n\r\n\r\n\r\n        <ng-container\r\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\r\n            <span class=\"multipledeleteandupdatebuttan\">\r\n\r\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\r\n                    (click)=\"deletemultiple()\"> Delete </button>\r\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\r\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\r\n                <ng-container\r\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\r\n                    <!-- has hhh  -->\r\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\r\n\r\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\r\n                            {{cbtns.label}} </button>\r\n                    </ng-container>\r\n\r\n                </ng-container>\r\n\r\n            </span>\r\n        </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <section *ngIf=\"loading == true\" class=\"example-section\">\r\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\r\n                [bufferValue]=\"bufferValue\">\r\n            </mat-progress-bar>\r\n            <br />\r\n            <br />\r\n        </section>\r\n\r\n\r\n        <ng-container *ngIf=\"tableflag==0\">\r\n            <section class=\"lib-pager-class\">\r\n                <mat-label>\r\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\r\n\r\n                    <ng-container\r\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\r\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\r\n                    </ng-container>\r\n                    <ng-container\r\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\r\n                        {{date_search_source_countval}}\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    of\r\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\r\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\r\n\r\n                </mat-label>\r\n                <span class=\"pageformfield\">\r\n                    <mat-form-field>\r\n                        <mat-label>Page Size</mat-label>\r\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10,'')\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Page No</mat-label>\r\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10,'')\">\r\n                    </mat-form-field>\r\n                </span>\r\n                <span>\r\n\r\n\r\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\r\n                        skip_previous\r\n                    </span>\r\n\r\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\r\n                        skip_next\r\n                    </span>\r\n                </span>\r\n\r\n                <!-- for pagination in drop down format-->\r\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\r\n                    <mat-label>Show Records per Page</mat-label>\r\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\" [(ngModel)]=\"limitcondval.limit\">\r\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\r\n                            {{no.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </div>\r\n                \r\n            </section>\r\n        </ng-container>\r\n        <!-- <div>{{rescount}} d lemgth </div> -->\r\n\r\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\r\n\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\r\n\r\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n                        </mat-checkbox>\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\r\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n                        </mat-checkbox>\r\n                    </td>\r\n                </ng-container> -->\r\n                <!-- <ng-container matColumnDef=\"#\">\r\n                    <th mat-header-cell *matHeaderCellDef>\r\n                        #\r\n                    </th>\r\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\r\n                </ng-container> -->\r\n                <!-- footer loop  -->\r\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\r\n                    <ng-container matColumnDef=\"{{footer.key}}\">\r\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\r\n                            <span [innerHtml]=\"footer.data\"></span>\r\n                        </td>\r\n                    </ng-container>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\r\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\r\n                        <th mat-header-cell *matHeaderCellDef>\r\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\r\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\r\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\r\n                            </mat-checkbox>\r\n                        </th>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\r\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\r\n                            <span>\r\n\r\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\r\n                                    <span [innerHtml]=\"column.header\"></span>\r\n                                </span>\r\n\r\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\r\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\r\n                                </span>\r\n\r\n\r\n                                <!-- {{column.header}} -->\r\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\r\n                                    class=\"material-icons cursor float-right\"\r\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\r\n                                    arrow_downward\r\n                                </span>\r\n                                <span class=\"material-icons cursor float-right\"\r\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\r\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\r\n                                </span>\r\n\r\n                                <span class=\"material-icons cursor\"\r\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\r\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\r\n                                    unfold_more\r\n                                </span>\r\n                            </span>\r\n                        </th>\r\n                    </ng-container>\r\n\r\n                    <ng-container\r\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\r\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\r\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\r\n\r\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\r\n                                {{pdfFlag(row)}}</span>\r\n                            <span\r\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\r\n\r\n                                <ng-container\r\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\r\n\r\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\r\n\r\n                                    <span\r\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\r\n\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\r\n                        !='NA' ) \">\r\n                                    {{row[column.columnDef] | date}}\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\r\n                        ) \">\r\n                                    {{row[column.columnDef] | date:'medium'}}\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\r\n                        ) \">\r\n                                    NA\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\r\n                                    NA\r\n                                </ng-container>\r\n\r\n                            </span>\r\n                            <!-- for image view  -->\r\n                            <span\r\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\r\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\r\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\r\n                                </span></span>\r\n                            <!-- for video view -->\r\n                            <span\r\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\r\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\r\n                                    <img class=\"videothumbnailcls\"\r\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\r\n                                    <img class=\"videovicls\"\r\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\r\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\r\n                            </span>\r\n\r\n                            <span\r\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\r\n\r\n\r\n                            <!--          <span *ngIf=\"sh==true \">-->\r\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\r\n                                class=\"cursor \">\r\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\r\n                                    class=\"material-icons \">cloud_download</i>\r\n                            </span>\r\n                            <!--          </span>-->\r\n                            <!--          <span *ngIf=\"aud==true \">-->\r\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\r\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\r\n                                    class=\"material-icons \">cloud_download</i>\r\n                            </span>\r\n\r\n                            <!--// for grap url//-->\r\n\r\n                            <span\r\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\r\n                                class=\"cursor \">\r\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\r\n                                    <!-- <p>{{item | json}}</p> -->\r\n                                    <button mat-button\r\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\r\n                                </ng-container>\r\n                            </span>\r\n\r\n                            <!-- <span\r\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\r\n                            class=\"cursor \">\r\n                            <button mat-button\r\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\r\n                        </span>\r\n                        <span\r\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\r\n                            <button mat-button\r\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\r\n                        </span> -->\r\n\r\n                            <!--          //grap url end//-->\r\n\r\n\r\n                            <!--          </span>-->\r\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\r\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\r\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\r\n          </span>\r\n          </span>-->\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\r\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\r\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\r\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\r\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\r\n                            </mat-checkbox>\r\n                        </td>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\r\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\r\n\r\n                            <div class=\"button_div_custom_cls\">\r\n\r\n                                <!-- loader -->\r\n\r\n                                <section class=\"example-section example-section-button-1 \">\r\n                                    <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\r\n                                        class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\r\n                                        [bufferValue]=\"bufferValue \">\r\n                                    </mat-progress-bar>\r\n                                </section>\r\n\r\n                                <!-- note block -->\r\n                                <ng-container *ngIf=\"libdataval.notes!=null \">\r\n                                    <button mat-raised-button color=\"primary\" class=\"notebtncls\" matBadgeColor=\"warn\"\r\n                                        matBadge=\"{{row.notescount}}\" matTooltip=\"{{libdataval?.notes?.tooltip}}\"\r\n                                        (click)=\"opennotes(row) \">\r\n                                        <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\r\n                                        <!-- <span class=\"notebracket1\">(</span> -->\r\n                                        <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\r\n                                        <!-- <span class=\"notebracket2\">)</span> -->\r\n                                    </button>\r\n                                </ng-container>\r\n\r\n                                <!--custom buttions block -->\r\n\r\n                                <ng-container\r\n                                    *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\r\n                                    <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\r\n                                        <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\r\n                                            <ng-container\r\n                                                *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\r\n                                                <!-- ss {{row['status']}} -->\r\n                                                <button mat-raised-button color=\"primary\"\r\n                                                    matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                    (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\r\n                                            </ng-container>\r\n\r\n                                            <ng-container *ngIf=\"custombutton.type=='externallink'\">\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n                                                    <a target=\"_blank\" href=\"{{custombutton.link}}\">\r\n                                                        <button mat-raised-button matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                            color=\"primary\">{{custombutton.label}}</button>\r\n                                                    </a>\r\n                                                </ng-container>\r\n\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                        (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\r\n\r\n                                                </ng-container>\r\n\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"custombutton.type=='internallink'\">\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                        (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\r\n                                                </ng-container>\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        (click)=\"deletedata(row)\">{{custombutton.label}}</button>\r\n                                                </ng-container>\r\n\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                        (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\r\n\r\n                                                </ng-container>\r\n\r\n                                            </ng-container>\r\n                                            <ng-container *ngIf=\"custombutton.type=='action'\">\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                        (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\r\n                                                </ng-container>\r\n                                                <ng-container\r\n                                                    *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\r\n                                                    <button mat-raised-button color=\"primary\"\r\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\r\n                                                        (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\r\n                                                </ng-container>\r\n\r\n                                            </ng-container>\r\n\r\n                                        </section>\r\n\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n\r\n\r\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\r\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\r\n                                    class=\"cursor\" (click)=\"editdata(row)\">\r\n                                    <i class=\"material-icons\" matTooltip=\"Edit\">\r\n                                        edit\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <!--For modern browsers-->\r\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\r\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\r\n                                    <i class=\"material-icons\" matTooltip=\"Delete\">\r\n                                        delete_outline\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <!--For modern browsers-->\r\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\r\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\r\n                                    <i class=\"material-icons\" matTooltip=\"Preview\">\r\n                                        remove_red_eye\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <!--For modern browsers-->\r\n                                <span class=\"cursor\"\r\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\r\n                                    (click)=\"managestatus(row)\">\r\n                                    <i class=\"material-icons\" matTooltip=\"Change Status\">\r\n                                        toggle_off\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\r\n                                    (click)=\"custombuttonfunc(row)\">\r\n                                    <i class=\"material-icons treeclass\" matTooltip=\"Change Status\">\r\n                                        toggle_off\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <!-- hide status toggle with cond-->\r\n                                <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \r\n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\r\n                                    class=\"cursor treeclass\" (click)=\"managestatus(row)\">\r\n                                    <i class=\"material-icons treeclass\"\r\n                                        matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip}}\">\r\n                                        toggle_off\r\n                                    </i>\r\n                                </span>\r\n\r\n                                <!-- artistxp preview start -->\r\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\r\n                                    <i class=\"material-icons\">perm_media</i>\r\n                                </span>\r\n                                <!-- artistxp preview end -->\r\n\r\n                            </span>\r\n\r\n                        </td>\r\n                    </ng-container>\r\n\r\n\r\n\r\n\r\n                </ng-container>\r\n\r\n\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n\r\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\r\n\r\n            </table>\r\n\r\n        </div>\r\n\r\n        <!--for pagination -->\r\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\r\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\r\n\r\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\r\n            <div class=\"noFoundTextinner\">\r\n                <span>Oops !</span>\r\n                <p>NO Record Found</p>\r\n            </div>\r\n        </mat-card>\r\n        <!-- no record found block  -->\r\n        <ng-container *ngIf=\"tableflag==0\">\r\n            <section class=\"lib-pager-class\">\r\n                <mat-label>\r\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\r\n\r\n                    <ng-container\r\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\r\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\r\n                    </ng-container>\r\n                    <ng-container\r\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\r\n                        {{date_search_source_countval}}\r\n                    </ng-container>\r\n\r\n\r\n\r\n                    of\r\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\r\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\r\n\r\n                </mat-label>\r\n                <span class=\"pageformfield\">\r\n                    <mat-form-field>\r\n                        <mat-label>Page Size</mat-label>\r\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10,'')\">\r\n                    </mat-form-field>\r\n\r\n                    <mat-form-field>\r\n                        <mat-label>Page No</mat-label>\r\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10,'')\">\r\n                    </mat-form-field>\r\n                </span>\r\n                <span>\r\n\r\n\r\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\r\n                        skip_previous\r\n                    </span>\r\n\r\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\r\n                        skip_next\r\n                    </span>\r\n                </span>\r\n                <!-- for pagination in drop down format-->\r\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\r\n                    <mat-label>Show Records per Page</mat-label>\r\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\" [(ngModel)]=\"limitcondval.limit\">\r\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\r\n                            {{no.name}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </div>\r\n            </section>\r\n\r\n\r\n        </ng-container>\r\n        <section *ngIf=\"loading == true\" class=\"example-section\">\r\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\r\n                [bufferValue]=\"bufferValue\">\r\n            </mat-progress-bar>\r\n            <br />\r\n            <br />\r\n        </section>\r\n\r\n\r\n\r\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\r\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\r\n\r\n\r\n\r\n        <!-- <form [formGroup]=\"stateForm\">\r\n      <mat-form-field>\r\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\r\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\r\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\r\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\r\n              {{name}}\r\n            </mat-option>\r\n          </mat-optgroup>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </form>-->\r\n\r\n        <!--<form class=\"example-form\">\r\n      <mat-form-field class=\"example-full-width\">\r\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\r\n            {{option}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n    </form>\r\n-->\r\n\r\n    </mat-card>\r\n\r\n    <!--\r\n  <mat-card>\r\n\r\n    <div class=\"example-container\">\r\n\r\n\r\n      <mat-card-content >\r\n        <mat-form-field class=\"form-group\">\r\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\r\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"form-group\">\r\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\r\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\r\n        </mat-form-field>\r\n\r\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\r\n        </mat-card-content>\r\n\r\n\r\n    </div>\r\n\r\n  </mat-card>-->\r\n\r\n\r\n\r\n</div>",
                    animations: [
                        trigger('detailExpand', [
                            state('collapsed', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                    styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}tr.example-detail-row{height:0}tr.example-element-row:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row:not(.example-expanded-row):active{background:#efefef}.example-element-row td{border-bottom-width:0}"]
                }] }
    ];
    /** @nocollapse */
    ListingComponent.ctorParameters = function () { return [
        { type: ApiService },
        { type: MatDialog },
        { type: MatBottomSheet },
        { type: FormBuilder },
        { type: Router },
        { type: ComponentFactoryResolver },
        { type: ViewContainerRef },
        { type: HttpClient },
        { type: DomSanitizer },
        { type: MatSnackBar },
        { type: ElementRef }
    ]; };
    ListingComponent.propDecorators = {
        onLiblistingChange: [{ type: Output }],
        onLiblistingButtonChange: [{ type: Output }],
        search_settings: [{ type: Input }],
        click_to_add_ananother_page: [{ type: Input }],
        limitcond: [{ type: Input }],
        date_search_source_count: [{ type: Input }],
        grab_link: [{ type: Input }],
        custombutton: [{ type: Input }],
        date_search_source: [{ type: Input }],
        sortdata: [{ type: Input }],
        date_search_endpoint: [{ type: Input }],
        url: [{ type: Input }],
        searchendpoint: [{ type: Input }],
        pdf_link: [{ type: Input }],
        searchList: [{ type: Input }],
        libdata: [{ type: Input }],
        datasource: [{ type: Input }],
        datacollection: [{ type: Input }],
        skip: [{ type: Input }],
        detail_datatype: [{ type: Input }],
        detail_skip_array: [{ type: Input }],
        sourcedata: [{ type: Input }],
        modify_header_array: [{ type: Input }],
        deleteendpoint: [{ type: Input }],
        updateendpoint: [{ type: Input }],
        apiurl: [{ type: Input }],
        updatetable: [{ type: Input }],
        jwttoken: [{ type: Input }],
        statusarr: [{ type: Input }],
        emailarray: [{ type: Input }],
        editroute: [{ type: Input }],
        preview_artistxp: [{ type: Input }],
        customlistenbutton: [{ type: Input }],
        sort: [{ type: ViewChild, args: [MatSort,] }],
        paginator: [{ type: ViewChild, args: [MatPaginator,] }]
    };
    return ListingComponent;
}());
var Confirmdialog = /** @class */ (function () {
    function Confirmdialog(_apiService, dialogRef, data, sanitizer) {
        this._apiService = _apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        // console.log('lib data in modal ', this.data, this.data, this.data.rowdata, this.data.rowdata.blogtitle);
        this.data.color = 'primary';
        this.data.mode = 'indeterminate';
        this.data.loadervalue = 50;
        this.data.bufferValue = 76;
    }
    /**
     * @return {?}
     */
    Confirmdialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Confirmdialog.prototype.deletenote = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        // console.log('log', this.data);
        // if (this.data.notesval != null && this.data.notesval != '') {
        /** @type {?} */
        var source = {
            id: this.data.rowdata._id,
            index: index
            // note: this.data.notesval,
            // user: this.data.notedata.user,
        };
        this.data.loading1 = index;
        this._apiService.postSearch(this.data.apiurl + this.data.notedata.deleteendpoint, this.data.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            // console.log(result, 'add notes');
            if (result.status == 'success') {
                // this.data.listdata.push({ userid: this.data.notedata.currentuserfullname, note: this.data.notesval, created_date: Date.now() });
                // this.data.notesval = '';
                _this.data.listdata.splice(index, 1);
                _this.data.loading1 = null;
            }
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }));
        // }
    };
    /**
     * @return {?}
     */
    Confirmdialog.prototype.addnotes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('log', this.data);
        if (this.data.notesval != null && this.data.notesval != '') {
            /** @type {?} */
            var source = {
                id: this.data.rowdata._id,
                note: this.data.notesval,
                user: this.data.notedata.user,
            };
            this.data.loading = true;
            this._apiService.postSearch(this.data.apiurl + this.data.notedata.addendpoint, this.data.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                // console.log(result, 'add notes');
                if (result.status == 'success') {
                    if (_this.data.listdata == null) {
                        _this.data.listdata = [];
                    }
                    _this.data.listdata.unshift({ _id: _this.data.rowdata._id, notes: { userid: _this.data.notedata.user, note: _this.data.notesval, user: _this.data.notedata.currentuserfullname, created_date: Date.now() } });
                    _this.data.notesval = '';
                    _this.data.loading = null;
                }
                // console.log('count',this.data.listdata);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
        }
        else {
            // console.log('blank notes');
            this.data._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'Notes can\'t be blank !! ' }
            });
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    Confirmdialog.prototype.gettypeof = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return typeof (val);
    };
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    Confirmdialog.prototype.sanitizeUrl = /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    function (unsafeurl, data, rowdata) {
        for (var b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    };
    Confirmdialog.decorators = [
        { type: Component, args: [{
                    selector: 'confirmdialog',
                    template: "<div class=\"maindialog maindialognew\">\r\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\r\n        close\r\n    </span>\r\n\r\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\r\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\r\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\r\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\r\n        </h1>\r\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\r\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\r\n            {{data?.headerData?.header}}\r\n        </h1>\r\n\r\n        <div mat-dialog-content>\r\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\r\n\r\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\r\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\r\n                <mat-list>\r\n                    <div mat-subheader>\r\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\r\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\r\n                        </ng-container>\r\n                    </div>\r\n                    <!-- <section class=\"example-section\">\r\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\r\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\r\n                        </mat-progress-bar>\r\n                        <br />\r\n                        <br />\r\n                    </section> -->\r\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\r\n                        <!-- <p>{{note.notes | json}}</p> -->\r\n\r\n                        <span class=\"material-icons\">\r\n                            notes\r\n                        </span>\r\n                        <div mat-line>\r\n                            {{note.notes.note }}\r\n                        </div>\r\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\r\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\r\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\r\n                            <span>By:</span>{{note.notes.user}}\r\n                        </div>\r\n                        <div mat-line class=\"line-datetime\"\r\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\r\n                            {{note.notes.created_date | date:'medium' }}\r\n                        </div>\r\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\"\r\n                            (click)=\"deletenote(notej)\">\r\n                            delete\r\n                        </span>\r\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\r\n                            <section class=\"example-section\">\r\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\r\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\r\n                                </mat-progress-bar>\r\n                                <br />\r\n                                <br />\r\n                            </section>\r\n                        </div>\r\n                        <mat-divider></mat-divider>\r\n\r\n\r\n                    </mat-list-item>\r\n                    <mat-divider></mat-divider>\r\n                </mat-list>\r\n                <div>\r\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\r\n                    </textarea>\r\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\r\n\r\n                </div>\r\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\r\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\r\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\r\n                    </mat-progress-bar>\r\n                    <br />\r\n                    <br />\r\n                </section>\r\n                <!-- </ng-container> -->\r\n            </ng-container>\r\n\r\n\r\n\r\n            <div *ngIf=\"data!=null && data.data!=null\">\r\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\r\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\r\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n                        <mat-card-title>{{item[0]}}</mat-card-title>\r\n                    </mat-card-header>\r\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\r\n                        <!-- {{gettypeof(item[1])}} -->\r\n                        <p class=\"innerhtml-content\"\r\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\r\n                            [innerHtml]=\"item[1]\">\r\n                        </p>\r\n                        <p class=\"innerhtml-content-video\"\r\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\r\n                            [innerHtml]=\"item[1]\">\r\n\r\n                        </p>\r\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\r\n                            {{item[1] | date}}\r\n                        </p>\r\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\r\n                            {{item[1] | date:'medium' }}\r\n                        </p>\r\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\r\n                        <p\r\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\r\n                            <!-- in ng for .. -->\r\n                            <ng-container *ngFor=\"let arr of item[1]\">\r\n                                <span\r\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\r\n                                    [innerHtml]=\"arr\"></span>\r\n                                <span\r\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\r\n                                    <img [src]=\"arr\" [alt]=\"arr\">\r\n                                </span>\r\n                                <span\r\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\r\n                                    [innerHtml]=\"arr\">\r\n\r\n                                </span>\r\n\r\n                            </ng-container>\r\n                        </p>\r\n                    </mat-card-content>\r\n                </mat-card>\r\n\r\n            </div>\r\n\r\n            <!--for custom page in modal(mainly used for tree)-->\r\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\r\n\r\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\r\n\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div *ngIf=\"data.preview == true\">\r\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\r\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\r\n            (click)=\"onNoClick()\">CANCEL</button>\r\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\r\n    </div>\r\n\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: ApiService },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer }
    ]; };
    return Confirmdialog;
}());
var BottomSheet = /** @class */ (function () {
    function BottomSheet(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        // console.warn("bottom-sheet",data);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    BottomSheet.prototype.openLink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.bottomSheetRef.dismiss(val);
    };
    BottomSheet.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet',
                    template: "<div class=\"bottom-sheet-header-toggle\">\r\n    You are about to change status of these record(s)\r\n\r\n</div>\r\n<mat-nav-list class=\"navlist\">\r\n    <a *ngFor=\"let item of data.items;\" mat-list-item (click)=\"openLink(item)\">\r\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\r\n    </a>\r\n</mat-nav-list>"
                }] }
    ];
    /** @nocollapse */
    BottomSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    return BottomSheet;
}());
// button-search-Modal
var ModalForButtomSearch = /** @class */ (function () {
    function ModalForButtomSearch(bnottoRef, data, apiService) {
        this.bnottoRef = bnottoRef;
        this.data = data;
        this.apiService = apiService;
        this.buttonSearchData = {};
        this.selectedData = [];
        this.searchVal = '';
        this.allButtonData = [];
        this.loading_flag = false;
        this.errmsg = '';
        this.matChipData = [];
        this.matAutosearchData = [];
        // console.log("bottom-sheet-search", data);
        this.buttonSearchData = {};
        this.buttonSearchData = data;
        this.allButtonData = data.items.value;
    }
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    ModalForButtomSearch.prototype.chooseChipItem = /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    function (data, i) {
        // console.log(data, '??data')
        this.selectedData.push(data);
        this.buttonSearchData.items.value.splice(i, 1);
    };
    // submit 
    // submit 
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.searchByItem = 
    // submit 
    /**
     * @return {?}
     */
    function () {
        // console.log(this.selectedData)
        this.data.flag = 'yes';
        this.data.selectedData = this.selectedData;
        // this.searchVal = '';
        // this.buttonSearchData.items.value = [];
        this.bnottoRef.close(this.data);
    };
    /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    ModalForButtomSearch.prototype.remove = /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    function (val, i) {
        this.selectedData.splice(i, 1);
        this.buttonSearchData.items.value.push(val);
    };
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.searchVal = '';
        this.buttonSearchData.items.value = [];
        this.buttonSearchData.items.value = this.allButtonData;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ModalForButtomSearch.prototype.searchByKeyword = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.searchVal != null && this.searchVal != '') {
            this.loading_flag = true;
            /** @type {?} */
            var link = this.buttonSearchData.items.serversearchdata.url + this.buttonSearchData.items.serversearchdata.endpoint;
            /** @type {?} */
            var data = {
                "search_str": value,
                "limit": 50
            };
            this.apiService.postSearch1(link, data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                // console.log(data)
                /** @type {?} */
                var result = res;
                if (result.status == 'success') {
                    // this.buttonSearchData.items.value = [];
                    _this.loading_flag = false;
                    result = result.res.slice(0, 50);
                    // this.buttonSearchData.items.value = result;
                    // console.log(result, 'result', this.loading_flag)
                    _this.matAutosearchData = result;
                }
            }));
        }
        else {
            this.errmsg = "Please Enter Keywords";
        }
    };
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.close = /**
     * @return {?}
     */
    function () {
        this.data.flag = 'no';
        this.bnottoRef.close(this.data);
    };
    ModalForButtomSearch.decorators = [
        { type: Component, args: [{
                    selector: 'button-search-modal',
                    template: "<div class=\"bottom-sheet-header-toggle\">\r\n    <h2 style=\"text-align: center;\"> {{buttonSearchData.items.label}}</h2>\r\n</div>\r\n\r\n\r\n<div class=\"selecteditemcls\" *ngIf=\"selectedData.length >0\">\r\n    <span>Selected :</span>\r\n    <div class=\"navlist\" style=\"display: inline;\">\r\n        <mat-chip class=\"example-box\" *ngFor=\"let item of selectedData;let i=index;\">{{item.name}}\r\n            <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"remove(item,i)\">cancel</mat-icon>\r\n        </mat-chip>\r\n    </div>\r\n    <span>\r\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByItem()\">Search\r\n        </button>\r\n    </span>\r\n</div>\r\n<br><br>\r\n\r\n<div>\r\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading_flag == true\"></mat-progress-bar>\r\n</div>\r\n<br><br>\r\n\r\n<div class=\"searchValcls\">\r\n    <mat-form-field class=\"example-full-width\">\r\n        <mat-label>Search By Keywords</mat-label>\r\n        <input matInput placeholder=\"filter\" [(ngModel)]=\"searchVal\" (keyup)=\"searchByKeyword(searchVal)\" [matAutocomplete]=\"auto\">\r\n    </mat-form-field>\r\n    <mat-autocomplete #auto=\"matAutocomplete\">\r\n        <mat-option *ngFor=\"let item of matAutosearchData;let i = index\" [value]=\"item.name\"\r\n        (click)=\"chooseChipItem(item,i)\">\r\n            {{item.name}}\r\n        </mat-option>\r\n    </mat-autocomplete>\r\n\r\n    <!-- <span class=\"errcls\" style=\"color: brown;\" *ngIf=\"searchVal == null || searchVal == ''\">{{errmsg}}</span> -->\r\n    <span class='searchByKeywordcls'>\r\n        <span style=\"cursor: pointer;\" class=\"material-icons\" (click)=\"reset()\">\r\n            sync\r\n        </span>\r\n         <!-- <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByKeyword(searchVal)\">Search\r\n        </button> -->\r\n    </span>\r\n\r\n</div>\r\n<br>\r\n\r\n<div class=\"chipdatacls\">\r\n    <div style=\"display: inline;\" *ngIf=\"buttonSearchData.items?.value.length >0\">\r\n        <h2 style=\"text-align: center;\">OR Choose From <span class=\"material-icons\">\r\n                south\r\n            </span></h2>\r\n        <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\r\n            <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of buttonSearchData.items?.value;let i =index\">\r\n                <span style=\"cursor: pointer;\" (click)=\"chooseChipItem(item,i)\"> {{item.name}}</span>\r\n            </mat-chip>\r\n        </mat-chip-list>\r\n    </div>\r\n    <span class='norecordcls' style=\"text-align: center;\" *ngIf=\"buttonSearchData.items?.value.length == 0\"><span\r\n           >No Record Found</span></span>\r\n</div>\r\n\r\n\r\n<div class=\"clrcls\">\r\n    <span style=\"cursor: pointer;\r\n    float: right;\r\n    margin-bottom: -6px;\" matTooltip=\"Clear\" class=\"material-icons\" (click)=\"close()\">\r\n        clear\r\n    </span>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalForButtomSearch.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: ApiService }
    ]; };
    return ModalForButtomSearch;
}());
/**
 * listing video player
 */
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('videoplayerModal',data.previewData.video);
    }
    /**
     * @return {?}
     */
    VideoPlayer.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    VideoPlayer.decorators = [
        { type: Component, args: [{
                    selector: 'videoplayer',
                    template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\r\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                }] }
    ];
    /** @nocollapse */
    VideoPlayer.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return VideoPlayer;
}());
/**
 * listing Image View
 */
var ImageView = /** @class */ (function () {
    // public data:any;
    function ImageView(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('ImageViewModal', data);
    }
    /**
     * @return {?}
     */
    ImageView.prototype.addnotes = /**
     * @return {?}
     */
    function () {
        // console.log('log', this.data);
    };
    /**
     * @return {?}
     */
    ImageView.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    ImageView.decorators = [
        { type: Component, args: [{
                    selector: 'image',
                    template: "<mat-card class=\"imgmodalcls\">\r\n    <mat-card-container>\r\n        <span>\r\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\r\n        </span>\r\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \r\n    </mat-card-container>\r\n    </mat-card>"
                }] }
    ];
    /** @nocollapse */
    ImageView.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageView;
}());
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        // console.log('snack',this.data);
    }
    SnackbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"snack-bar-message\">\r\n  {{data.errormessage}}\r\n</span>\r\n",
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SnackbarComponent.ctorParameters = function () { return [
        { type: MatSnackBarRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import { CKEditorComponent } from "ng2-ckeditor";
// import {MatSnackBar} from "@angular/material/snack-bar";
var ShowformComponent = /** @class */ (function () {
    // public ckeConfig:any={};
    function ShowformComponent(formBuilder, _apiService, _snackBar, router, elementRef) {
        // console.log(this.minDate, 'today===>', this.maxDate)
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this._snackBar = _snackBar;
        this.router = router;
        this.elementRef = elementRef;
        // @ViewChild("myckeditor") ckeditor: CKEditorComponent;
        this.formatFlag = false;
        // public minDate = new Date(2020, 8, 24);
        // public maxDate = new Date(2020, 8, 31);
        this.dateflag = false;
        this.PasswordVal = '';
        this.externalDataVal = [];
        this.customlistenbuttons = {};
        this.filechoosersingleTypeFlag = false;
        this.filechoosermultipleTypeFlag = false;
        this.titleAlert = 'This field is required';
        this.post = '';
        this.showform = false;
        this.loading = false;
        this.formfieldrefreshval = false;
        this.formdataval = {};
        this.formfieldrefreshdataval = {};
        this.filerfielddata = [];
        this.autocompletefiledvalue = [];
        this.filearray = [];
        this.filecount = [];
        this.currentautocomplete = '';
        this.fieldloading = '';
        this.isPasswordVisible = true;
        this.singleImgFormData = [];
        this.imgValue = '';
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        this.onFormFieldChange = new EventEmitter();
        this.imageChangedEvent = "";
        this.croppedImage = "";
    }
    Object.defineProperty(ShowformComponent.prototype, "formdata", {
        set: /**
         * @param {?} formdata
         * @return {?}
         */
        function (formdata) {
            this.formdataval = formdata;
            if (this.formdataval.fields)
                console.log(this.formdataval, 'htlmmmmmmm');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "formfieldrefreshdata", {
        set: /**
         * @param {?} formfieldrefreshdata
         * @return {?}
         */
        function (formfieldrefreshdata) {
            this.formfieldrefreshdataval = formfieldrefreshdata;
            // console.log(this.formfieldrefreshdataval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "formfieldrefresh", {
        set: /**
         * @param {?} formfieldrefresh
         * @return {?}
         */
        function (formfieldrefresh) {
            this.formfieldrefreshval = formfieldrefresh;
            // console.log(this.formfieldrefreshval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "custombuttons", {
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.customlistenbuttons = val;
            // console.log(this.customlistenbuttons,'customlistenbuttons form')
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "externaldatavalue", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.externalDataVal = value;
            // console.log(this.externalDataVal, 'this.externalDataVal')
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShowformComponent.prototype, "name", {
        get: /**
         * @return {?}
         */
        function () {
            return (/** @type {?} */ (this.formGroup.get('name')));
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ShowformComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.createForm(0);
        // this.setChangeValidate()
    };
    // custom listen buttons
    // custom listen buttons
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.getFormVal = 
    // custom listen buttons
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val,'+++++++++====')
        this.onFormFieldChange.emit({ field: 'formdata', fieldval: 'formdataval', fromval: this.formGroup.value, buttonval: val, loading: this.loading });
    };
    // CustomFlagFields
    // CustomFlagFields
    /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    ShowformComponent.prototype.CustomFlagFields = 
    // CustomFlagFields
    /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    function (field, item) {
        this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'add' });
    };
    /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    ShowformComponent.prototype.CustomFlagFieldsRemove = /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    function (field, item) {
        this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'remove' });
    };
    //Generate Password button
    //Generate Password button
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.GeneratePassword = 
    //Generate Password button
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        this.PasswordVal = '';
        this.PasswordVal = this.makeid(10);
        setTimeout((/**
         * @return {?}
         */
        function () {
            val.value = _this.PasswordVal;
            _this.formGroup.controls[val.name].patchValue(_this.PasswordVal);
        }), 200);
        // console.log(this.PasswordVal, 'PasswordVal++++')
        // for (const g in this.formdataval.fields) {
        //   if (this.formdataval.fields[g].passwordflag == true) {
        //     // console.log(this.formdataval.fields[g].passwordflag, '++++==', this.formdataval.fields[g])
        //     this.formdataval.fields[g].value = this.PasswordVal;
        //     // this.formGroup.controls['password'].patchValue(this.PasswordVal)
        //     this.formfieldrefreshdata = { field: 'password', value: this.PasswordVal };
        // console.log(this.PasswordVal, 'PasswordVal')
        //   }
        // }
    };
    /**
     * @param {?} event
     * @param {?} filename
     * @param {?} multipleFlag
     * @return {?}
     */
    ShowformComponent.prototype.onchoosefiles = /**
     * @param {?} event
     * @param {?} filename
     * @param {?} multipleFlag
     * @return {?}
     */
    function (event, filename, multipleFlag) {
        console.log("works properly", multipleFlag);
        if (typeof multipleFlag == 'undefined') {
            console.log("if part");
            // this.filechoosersingleTypeFlag=true;
            document.getElementById("filechoosersingle" + filename).click();
        }
        else {
            console.log("else part", document.getElementById("filechooser"));
            document.getElementById("filechoosermultiple" + filename).click();
            // this.filechoosermultipleTypeFlag=true;
        }
    };
    //copy Password button
    //copy Password button
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.copyGeneratePassword = 
    //copy Password button
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val,'++pass',this.formGroup.value)
        // console.log(val,'++pass',this.formGroup.value)
        // console.log(this.formGroup.controls[val.name].value,'++???',this.formGroup.controls[val.value])
        /** @type {?} */
        var passwordFieldData = '';
        if (this.formGroup.controls[val.name].value != null && typeof (this.formGroup.controls[val.name].value) != 'undefined' && this.formGroup.controls[val.name].value != '') {
            passwordFieldData = this.formGroup.controls[val.name].value;
        }
        else {
            passwordFieldData = '';
        }
        // console.log(typeof(this.formGroup.controls[val.name].value),'??',this.formGroup.controls[val.name].value)
        if (passwordFieldData != null && passwordFieldData != '' && typeof (passwordFieldData) != 'undefined') {
            /** @type {?} */
            var el = document.createElement('textarea');
            el.value = passwordFieldData;
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 3000,
                data: { errormessage: 'Copy To Clipboard' }
            });
        }
        else {
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 3000,
                data: { errormessage: 'Please Generate or Enter Password..!' }
            });
        }
    };
    //preview Password button
    //preview Password button
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.previewGeneratePassword = 
    //preview Password button
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var passwordFieldData = '';
        if (this.formGroup.controls[val.name].value != null && typeof (this.formGroup.controls[val.name].value) != 'undefined' && this.formGroup.controls[val.name].value != '') {
            passwordFieldData = this.formGroup.controls[val.name].value;
        }
        else {
            passwordFieldData = '';
        }
        if (passwordFieldData != null && passwordFieldData != '' && typeof (passwordFieldData) != 'undefined') {
            // console.log(val, '++++++++++++')
            switch (val.type) {
                case 'password':
                    val.type = 'text';
                    this.isPasswordVisible = false;
                    break;
                case 'text':
                    val.type = 'password';
                    this.isPasswordVisible = true;
                    break;
            }
        }
        else {
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 3000,
                data: { errormessage: 'Please Generate or Enter Password..!' }
            });
        }
    };
    //generate ran password
    //generate ran password
    /**
     * @param {?} length
     * @return {?}
     */
    ShowformComponent.prototype.makeid = 
    //generate ran password
    /**
     * @param {?} length
     * @return {?}
     */
    function (length) {
        /** @type {?} */
        var result = 'P';
        length = length + 1;
        /** @type {?} */
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        /** @type {?} */
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };
    // external Data Function
    // external Data Function
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.externalDataFunction = 
    // external Data Function
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    function (value, index) {
        // this.externalDataVal=[];
        this.onFormFieldChange.emit({ action: 'externaldata', flag: 'add', fieldVal: value, index: index, externalDataVal: this.externalDataVal });
        // console.log(value, this.externalDataVal, index, '++')
    };
    /**
     * @param {?} flag
     * @param {?} field
     * @param {?} ival
     * @param {?} i
     * @return {?}
     */
    ShowformComponent.prototype.externalDataEditFunction = /**
     * @param {?} flag
     * @param {?} field
     * @param {?} ival
     * @param {?} i
     * @return {?}
     */
    function (flag, field, ival, i) {
        // console.log(flag, field, ival, i, 'exter ++++')
        if (flag == 'edit') {
            this.onFormFieldChange.emit({ action: 'externaldata', flag: 'edit', fieldVal: field, index: ival, valind: i, externalDataVal: this.externalDataVal });
        }
        if (flag == 'remove') {
            field.value.splice(i, 1);
        }
    };
    // open calendar into date field
    // open calendar into date field
    /**
     * @return {?}
     */
    ShowformComponent.prototype.openCalendar = 
    // open calendar into date field
    /**
     * @return {?}
     */
    function () {
        this.dateflag = true;
        // console.log(this.dateflag, 'dateflag')
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.navtocancel = /**
     * @return {?}
     */
    function () {
        this.onFormFieldChange.emit({ field: 'formcancel', fromval: this.formGroup.value, loading: this.loading });
        if (this.formdataval.cancelroute != null) {
            this.router.navigate([this.formdataval.cancelroute]);
        }
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.log('in after view init trigger');
            for (var g in _this.formdataval.fields) {
                if (_this.formdataval.fields[g].type == 'file') {
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('drop', _this.handleDrop.bind(_this));
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('dragenter', _this.cancel.bind(_this));
                    _this.elementRef.nativeElement.querySelector('#drop' + _this.formdataval.fields[g].name).addEventListener('dragover', _this.cancel.bind(_this));
                }
            }
        }), 1000);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.triggerevents = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        console.log('in triggerevents', val);
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.log('val loadeed trigger', val);
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('drop', _this.handleDrop.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragenter', _this.cancel.bind(_this));
            _this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragdragover', _this.cancel.bind(_this));
        }), 1000);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ShowformComponent.prototype.cancel = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        // console.log('cancel',e);
        e.preventDefault();
        return false;
    };
    /**
     * @param {?} e
     * @return {?}
     */
    ShowformComponent.prototype.handleDrop = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        var _this = this;
        console.log("handelDrop", e);
        // let apiBaseURL=""
        // this.imageChangedEvent = e;
        /** @type {?} */
        var list = document.getElementById('list');
        e.preventDefault();
        // console.log('handleDrop', e);
        /** @type {?} */
        var dt = e.dataTransfer == null ? e : e.dataTransfer;
        /** @type {?} */
        var filechooserFlag = e.dataTransfer == null ? 1 : 0;
        console.log("dt dataaa++", dt);
        console.log("dt filechooserFlag++", filechooserFlag);
        /** @type {?} */
        var files = dt.files == null ? dt.target.files : dt.files;
        console.log("files count", files.length);
        var _loop_1 = function (i) {
            /** @type {?} */
            var file = files[i];
            // console.log(files, 'files', e.target.id);
            // console.log('farr', this.filearray);
            console.log('files++', file);
            var _loop_2 = function (g) {
                if (this_1.formdataval.fields[g].type == 'file' && (this_1.formdataval.fields[g].name == e.target.id.replace('drop', '') || this_1.formdataval.fields[g].name == e.target.id.replace('filechoosersingle', '') || this_1.formdataval.fields[g].name == e.target.id.replace('filechoosermultiple', ''))) {
                    console.log("if part", e.target.id, this_1.formdataval.fields[g]);
                    // console.log(this.singleImgFormData,'singleImgFormData')
                    // console.log('file details', this.formdataval.fields[g], g);
                    if (this_1.formdataval.fields[g].multiple == null) {
                        // this.deletefile(va)
                        // console.log(files[i], 'files[i]=======single')
                        //image preview base/64
                        console.log(" before 2nd if part of type checking", files);
                        if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                            //Show image preview
                            console.log("2nd if part of type checking");
                            /** @type {?} */
                            var reader = new FileReader();
                            reader.onload = (/**
                             * @param {?} event
                             * @return {?}
                             */
                            function (event) {
                                _this.formdataval.fields[g].imageUrl = event.target.result;
                                _this.formdataval.fields[g].croppedimagearray = [];
                                // console.log(event.target.result, 'event.target.result=========')
                                if (_this.formdataval.fields[g].aspectratio != null && _this.formdataval.fields[g].imagecroppedratiolabel != null && _this.formdataval.fields[g].aspectratio.length > 0) {
                                    for (var c in _this.formdataval.fields[g].aspectratio) {
                                        _this.formdataval.fields[g].croppedImage = [];
                                        _this.formdataval.fields[g].imagecroppedratiolabel = _this.formdataval.fields[g].imagecroppedratiolabel;
                                        // this.formdataval.fields[g].aspectratio[c] = Number(this.formdataval.fields[g].aspectratio[c]).toFixed(2);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'files+++++')
                            });
                            reader.readAsDataURL(files[i]);
                        }
                        this_1.formdataval.fields[g].loaded = 0;
                        this_1.formdataval.fields[g].loadfile = 1;
                        if (filechooserFlag == 0) {
                            if (this_1.filearray[e.target.id.replace('drop', '')] != null) {
                                for (var n in this_1.formdataval.fields) {
                                    if (this_1.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                                        this_1.deletefile(this_1.formdataval.fields[n], 1);
                                        setTimeout((/**
                                         * @return {?}
                                         */
                                        function () {
                                            _this.filearray[e.target.id.replace('drop', '')] = files[i];
                                        }), 0);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                            }
                            else {
                                this_1.filearray[e.target.id.replace('drop', '')] = files[i];
                            }
                        }
                        else if (filechooserFlag == 1) {
                            if (this_1.filearray[e.target.id.replace('filechoosersingle', '')] != null) {
                                for (var n in this_1.formdataval.fields) {
                                    if (this_1.formdataval.fields[n].name == e.target.id.replace('filechoosersingle', '')) {
                                        this_1.deletefile(this_1.formdataval.fields[n], 1);
                                        setTimeout((/**
                                         * @return {?}
                                         */
                                        function () {
                                            _this.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                                        }), 0);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                            }
                            else {
                                this_1.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                            }
                        }
                    }
                    else {
                        // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++ >M')
                        // console.log(files[i], 'files[i]======= multiple')
                        if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                            //Show image preview
                            console.log("++++++if part", files);
                            /** @type {?} */
                            var reader = new FileReader();
                            reader.onload = (/**
                             * @param {?} event
                             * @return {?}
                             */
                            function (event) {
                                files[i].imageUrl = event.target.result;
                                if (_this.formdataval.fields[g].aspectratio != null && _this.formdataval.fields[g].imagecroppedratiolabel != null && _this.formdataval.fields[g].aspectratio.length > 0) {
                                    // console.log(this.formdataval.fields[g].aspectratio, 'ratio+=====>')
                                    files[i].croppedImage = [];
                                    files[i].aspectratio = _this.formdataval.fields[g].aspectratio;
                                    files[i].imagecroppedratiolabel = _this.formdataval.fields[g].imagecroppedratiolabel;
                                    files[i].croppedimagearray = [];
                                    for (var c in files[i].aspectratio) {
                                        if (files[i].aspectratio != null && files[i].aspectratio[c] != null && typeof (files[i].aspectratio[c]) != 'undefined') ;
                                    }
                                    // console.log(files[i], 'files[i]==>')
                                }
                                // console.log(this.formdataval.fields[g], 'imageUrl+++++')
                            });
                            reader.readAsDataURL(files[i]);
                        }
                        files[i].loaded = 0;
                        files[i].loadfile = 1;
                        if (this_1.formdataval.fields[g] != null && this_1.formdataval.fields[g].imagefields != null && this_1.formdataval.fields[g].imagefields.length > 0) {
                            files[i].imagefields = this_1.formdataval.fields[g].imagefields;
                        }
                        //for drag and drop files
                        if (filechooserFlag == 0) {
                            if (this_1.filearray[e.target.id.replace('drop', '')] == null) {
                                this_1.filearray[e.target.id.replace('drop', '')] = [];
                            }
                            this_1.filearray[e.target.id.replace('drop', '')].push(files[i]);
                        }
                        //for choose files
                        if (filechooserFlag == 1) {
                            if (this_1.filearray[e.target.id.replace('filechoosermultiple', '')] == null) {
                                this_1.filearray[e.target.id.replace('filechoosermultiple', '')] = [];
                            }
                            this_1.filearray[e.target.id.replace('filechoosermultiple', '')].push(files[i]);
                        }
                    }
                }
            };
            for (var g in this_1.formdataval.fields) {
                _loop_2(g);
            }
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
        return false;
    };
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h)
    // }
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h)
    // }
    /**
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.trackByFn = 
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h)
    // }
    /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.trackByFnMultiple = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.trackByFnMulti = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        return index;
    };
    /**
     * @param {?} val
     * @param {?} item
     * @param {?} fi
     * @param {?} ind
     * @param {?} data
     * @param {?} fname
     * @param {?} sfname
     * @param {?} ev
     * @return {?}
     */
    ShowformComponent.prototype.keyupVal = /**
     * @param {?} val
     * @param {?} item
     * @param {?} fi
     * @param {?} ind
     * @param {?} data
     * @param {?} fname
     * @param {?} sfname
     * @param {?} ev
     * @return {?}
     */
    function (val, item, fi, ind, data, fname, sfname, ev) {
        // console.log('this.filearray[fname][fi].flds[ind] in kyupval ', this.filearray[fname][fi].flds[ind]);
        // console.log(val[fi].imagefields, 'keyupVal', 's', item, fi, ind, data, '---', this.filearray, ',,', fname, sfname, ev.target.value);
        this.filearray[fname][fi].imagefields[ind]['value'] = ev.target.value;
        // if (this.filearray[fname][fi].flds == null) {
        //   this.filearray[fname][fi].flds == [];
        //   this.filearray[fname][fi].flds[ind] = [];
        // }
        if (this.filearray[fname][fi].flds == null || this.filearray[fname][fi].flds[ind] == null) {
            // console.log('111111111111111111111111111111');
            if (this.filearray[fname][fi].flds == null)
                this.filearray[fname][fi].flds = [];
            this.filearray[fname][fi].flds[ind] = [];
        }
        // console.log('this.filearray[fname][fi].flds[ind] before', this.filearray[fname][fi].flds[ind]);
        this.filearray[fname][fi].flds[ind] = { key: ev.target.name, value: ev.target.value };
        // console.log('this.filearray[fname][fi].flds[ind] after', this.filearray[fname][fi].flds[ind]);
        // console.log(sfname, 'sfname', ind, ev.target.value);
        // console.log('this.filearray');
        // console.log(this.filearray);
        // console.log('ddd', fi, ind);
        // console.log(this.filearray[fname][fi]);
    };
    /**
     * @param {?} val
     * @param {?} item
     * @param {?} fi
     * @param {?} ind
     * @param {?} data
     * @param {?} fname
     * @param {?} sfname
     * @return {?}
     */
    ShowformComponent.prototype.checkValue = /**
     * @param {?} val
     * @param {?} item
     * @param {?} fi
     * @param {?} ind
     * @param {?} data
     * @param {?} fname
     * @param {?} sfname
     * @return {?}
     */
    function (val, item, fi, ind, data, fname, sfname) {
        // console.log(val, '++')
        // console.log(val[fi].imagefields, 'keyupVal', 's', item, fi, ind, data, '---', this.filearray, ',,', fname, sfname);
        if (this.filearray[fname][fi].flds == null || this.filearray[fname][fi].flds[ind] == null) {
            // console.log('111111111111111111111111111111');
            if (this.filearray[fname][fi].flds == null)
                this.filearray[fname][fi].flds = [];
            this.filearray[fname][fi].flds[ind] = [];
        }
        if (this.filearray[fname][fi].flds != null && this.filearray[fname][fi].flds[ind] != null && this.filearray[fname][fi].flds[ind].key != null && this.filearray[fname][fi].flds[ind].key == sfname) {
            // console.log('2222222222222222222222222 if');
            switch (this.filearray[fname][fi].flds[ind].value) {
                case true:
                    this.filearray[fname][fi].flds[ind].value = false;
                    break;
                case false:
                    this.filearray[fname][fi].flds[ind].value = true;
                    break;
            }
        }
        else {
            // console.log('33333333333333333333 else');
            this.filearray[fname][fi].flds[ind] = { key: sfname, value: true };
        }
        // console.log('this.filearray[fname][fi].flds[ind] before', this.filearray[fname][fi].flds[ind]);
        // console.log('this.filearray[fname][fi].flds[ind] after', this.filearray[fname][fi].flds[ind]);
        // console.log('this.filearray');
        // console.log(this.filearray);
        // console.log('ddd', fi, ind);
        // console.log(this.filearray[fname][fi]);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.uploadfile = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('upppp', val);
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var file = this.filearray[val.name];
        // console.log('file val', val);
        file.uploaded = 2; // show progressbar
        // show progressbar
        /** @type {?} */
        var temploader = this.fieldloading[val.name];
        temploader = val.name;
        // reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            fetch(val.apiurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: val.prefix + file.name.split(" ").join(""),
                    type: file.type,
                    path: val.path,
                    bucket: val.bucket
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // console.log('buck', response);
                return response.json();
            }))
                .then((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                return fetch(json.uploadURL, {
                    method: 'PUT',
                    body: new Blob([reader.result], { type: file.type })
                });
            }))
                .then((/**
             * @return {?}
             */
            function () {
                // return 'success';
                file.uploaded = 1;
                file.loadfile = 1;
                val.loaded = null;
                file.fileservername = val.prefix + file.name.split(" ").join("");
                // if(val.imagefields.length > 0){
                //   file.imagefields = val.imagefields
                // }
                // console.log(file.type, 'file.type');
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            // });
        });
        reader.readAsArrayBuffer(file);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.uploadall = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // this.filearray[val.name].uploadall = 1;
        for (var y in this.filearray[val.name]) {
            // console.log('---', val, 'v---', 'this.filearray[val.name]', this.filearray[val.name][y], this.filearray[val.name][y].uploaded);
            if (this.filearray[val.name][y].bucket == null)
                this.uploadfilemultiple(val, this.filearray[val.name][y], y);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.deletefilemultipleall = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        for (var y in this.filearray[val.name]) {
            this.deletefilemultiple(val, this.filearray[val.name][y], y);
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            // this.filearray[val.name] = null;
        }), 3000);
    };
    /**
     * @param {?} val
     * @param {?} f
     * @param {?} indexf
     * @return {?}
     */
    ShowformComponent.prototype.uploadfilemultiple = /**
     * @param {?} val
     * @param {?} f
     * @param {?} indexf
     * @return {?}
     */
    function (val, f, indexf) {
        /** @type {?} */
        var reader = new FileReader();
        /** @type {?} */
        var file = this.filearray[val.name][indexf];
        // console.log(file,'file');
        // console.log(val, 'val');
        // console.log(f,'f');
        if (this.filecount[val.name] == null) {
            this.filecount[val.name] = 0;
        }
        this.filecount[val.name]++;
        // console.log('file val in m 2', val, f, indexf, 'if',file);
        file.uploaded = 2; // show progressbar
        file.loadfile = 1;
        /** @type {?} */
        var temploader = this.fieldloading[val.name];
        temploader = val.name;
        // reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            fetch(val.apiurl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: val.prefix + file.name.split(" ").join(""),
                    type: file.type,
                    path: val.path,
                    bucket: val.bucket
                })
            })
                .then((/**
             * @param {?} response
             * @return {?}
             */
            function (response) {
                // console.log('buck', response);
                return response.json();
            }))
                .then((/**
             * @param {?} json
             * @return {?}
             */
            function (json) {
                return fetch(json.uploadURL, {
                    method: 'PUT',
                    body: new Blob([reader.result], { type: file.type })
                });
            }))
                .then((/**
             * @return {?}
             */
            function () {
                // return 'success';
                file.uploaded = 1;
                file.loaded = null;
                file.fileservername = val.prefix + file.name.split(" ").join("");
                // console.log(file.type,'file.type')
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            // });
        });
        // if (ftype == "Blob") 
        reader.readAsArrayBuffer(file);
    };
    /**
     * @param {?} val
     * @param {?=} flag
     * @return {?}
     */
    ShowformComponent.prototype.deletefile = /**
     * @param {?} val
     * @param {?=} flag
     * @return {?}
     */
    function (val, flag) {
        var _this = this;
        if (flag === void 0) { flag = ''; }
        // console.log('this.filearray',this.filearray);
        // console.log('val++ delete', val, this.filearray[val.name]);
        // console.log(val.name);
        /** @type {?} */
        var source = {};
        /** @type {?} */
        var file = this.filearray[val.name];
        source.file = val.prefix + file.name;
        source.path = val.path;
        source.bucket = val.bucket;
        this.filearray[val.name].uploaded = 2;
        this.filearray[val.name].loadfile = 0;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success' && flag == '') {
                // this.formGroup.reset();
                val.value = {};
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Deleted !!' }
                });
                _this.filearray[val.name].uploaded = null;
                _this.filearray[val.name].loadfile = 0;
                val.loadfile = 0;
                // console.log(this.filearray[val.name], '????===Delete===?????')
            }
            if (result.status == 'error') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('Oooops!');
            _this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            _this.loading = false;
        }));
    };
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    ShowformComponent.prototype.deletesinglefile = /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    function (val, flag) {
        // console.log(val, 'val+++ delete', flag)
        if (flag == 'image/png' || flag == 'image/jpg' || flag == 'image/jpeg') {
            this.filearray[val.name].loadfile = 0;
            val.imageUrl = null;
            val.loadfile = 0;
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Deleted !!' }
            });
        }
        else {
            this.filearray[val.name].loadfile = 0;
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Deleted !!' }
            });
        }
    };
    /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    ShowformComponent.prototype.deletesinglefilefrommultiple = /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    function (val, field, index) {
        if (field === void 0) { field = ''; }
        // console.log(val, field, index, '????+++++')
        /** @type {?} */
        var file = this.filearray[val.name][index];
        file.loadfile = 0;
        if (this.filearray[val.name] != null)
            this.filearray[val.name].splice(index, 1);
        // console.log(this.filearray[val.name], 'this.filearray[val.name]==')
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Deleted !!' }
        });
    };
    /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    ShowformComponent.prototype.deletefilemultiple = /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    function (val, field, index) {
        var _this = this;
        if (field === void 0) { field = ''; }
        // console.log(val, 'val++', index)
        /** @type {?} */
        var source = {};
        /** @type {?} */
        var file = this.filearray[val.name][index];
        this.filecount[val.name]--;
        source.file = val.prefix + file.name;
        source.path = val.path;
        source.bucket = val.bucket;
        file.uploaded = 2;
        // file.loadfile = 0;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success') {
                // this.formGroup.reset();
                file.loadfile = 0;
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Deleted !!' }
                });
                if (_this.filearray[val.name] != null) {
                    file.loadfile = 0;
                    _this.filearray[val.name].splice(index, 1);
                }
                // console.log(this.filearray[val.name], 'this.filearray[val.name]==')
            }
            if (result.status == 'error') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        function (error) {
            // console.log('Oooops!');
            _this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            _this.loading = false;
        }));
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ShowformComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var _this = this;
        // console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
        for (var v in changes) {
            // console.log(v,changes[v],'vv');
            if (v == 'formfieldrefreshdata') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    // console.log('fff in set tt');
                    if (_this.formfieldrefreshdataval != null) {
                        // console.log(this.formfieldrefreshdataval, 'm');
                        // console.log(this.formfieldrefreshdataval.field);
                        // console.log(this.formfieldrefreshdataval.value);
                        if (_this.formGroup != null && _this.formfieldrefreshdataval.field != null && _this.formGroup.controls[_this.formfieldrefreshdataval.field] != null) {
                            _this.formGroup.controls[_this.formfieldrefreshdataval.field].patchValue(_this.formfieldrefreshdataval.value);
                        }
                        if (_this.formfieldrefreshdataval.field == null && _this.formfieldrefreshdataval.formvaldata != null && typeof (_this.formfieldrefreshdataval.formvaldata) == 'object') {
                            for (var formkey in _this.formfieldrefreshdataval.formvaldata) {
                                // console.log('this.formfieldrefreshdataval.data[formkey]', this.formfieldrefreshdataval.formvaldata[formkey]);
                                if (_this.formGroup.controls[formkey] != null) {
                                    _this.formGroup.controls[formkey].patchValue(_this.formfieldrefreshdataval.formvaldata[formkey]);
                                }
                                for (var formdatavalkey in _this.formdataval.fields) {
                                    if (_this.formdataval.fields[formdatavalkey].name == formkey && _this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (_this.formdataval.fields[formdatavalkey].multiple != null && _this.formdataval.fields[formdatavalkey].multiple != false)) {
                                        for (var autoselval in _this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            if (_this.formfieldrefreshdataval.formvaldata[formkey].indexOf(_this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {
                                                _this.setautocompletevalue(_this.formdataval.fields[formdatavalkey].val[autoselval], _this.formdataval.fields[formdatavalkey]);
                                            }
                                        }
                                    }
                                    // end of if
                                    if (_this.formdataval.fields[formdatavalkey].name == formkey && _this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (_this.formdataval.fields[formdatavalkey].multiple == null || _this.formdataval.fields[formdatavalkey].multiple == false)) {
                                        for (var autoselval in _this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val single', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            if (_this.formfieldrefreshdataval.formvaldata[formkey] == (_this.formdataval.fields[formdatavalkey].val[autoselval].key)) {
                                                _this.setautocompletevalue(_this.formdataval.fields[formdatavalkey].val[autoselval], _this.formdataval.fields[formdatavalkey]);
                                            }
                                        }
                                    }
                                    // enf of if
                                    if (_this.formdataval.fields[formdatavalkey].name == formkey && _this.formdataval.fields[formdatavalkey].type == 'checkbox' && (_this.formdataval.fields[formdatavalkey].multiple != null && _this.formdataval.fields[formdatavalkey].multiple != false)) {
                                        for (var autoselval in _this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val check box multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            // console.log('formkey +  + autoselval', formkey + '__' + autoselval);
                                            if (_this.formfieldrefreshdataval.formvaldata[formkey].indexOf(_this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {
                                                if (_this.formGroup.controls[formkey + '__' + autoselval] != null) {
                                                    _this.formGroup.controls[formkey + '__' + autoselval].patchValue(true);
                                                }
                                            }
                                            else {
                                                if (_this.formGroup.controls[formkey + '__' + autoselval] != null) {
                                                    _this.formGroup.controls[formkey + '__' + autoselval].patchValue(false);
                                                }
                                            }
                                        }
                                    }
                                    // end of if
                                }
                            }
                        }
                        if (_this.formfieldrefreshdataval.field == 'showfieldloader') {
                            _this.fieldloading = _this.formfieldrefreshdataval.value;
                        }
                        if (_this.formfieldrefreshdataval.field == 'addfromcontrol') {
                            _this.managefromcontrol(_this.formfieldrefreshdataval.value, 'add');
                        }
                        if (_this.formfieldrefreshdataval.field == 'removefromcontrol') {
                            _this.managefromcontrol(_this.formfieldrefreshdataval.value, 'remove');
                        }
                    }
                }), 0);
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.inputblur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('on blur .....');
        this.formGroup.controls[val].markAsUntouched();
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ShowformComponent.prototype.filterautocomplete = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        this.inputblur(val);
        // console.log('cc', this.formGroup.controls[val].value, data.val);
        /** @type {?} */
        var fieldval = this.formGroup.controls[val].value;
        if (fieldval == '' || fieldval == null) {
            this.filerfielddata = [];
        }
        else {
            /** @type {?} */
            var filterval = data.val.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // console.log('e', e, fieldval)
                return e.val.includes(fieldval);
            }));
            this.filerfielddata = [];
            this.filerfielddata = filterval;
            // console.log('fil', filterval);
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.reloadautocomplete = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.currentautocomplete = val.name;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.removechipsingle = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.autocompletefiledvalue[val.name] = null;
    };
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.removechipmultiple = /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    function (val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        if (this.autocompletefiledvalue[val.name].length == 0) {
            this.autocompletefiledvalue[val.name] = null;
        }
    };
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    ShowformComponent.prototype.setautocompletevalue = /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    function (val, field) {
        // console.log('ff auto complete set ', val, field);
        if (field.multiple == null) {
            this.autocompletefiledvalue[field.name] = val.key;
        }
        else {
            if (this.autocompletefiledvalue[field.name] == null) {
                this.autocompletefiledvalue[field.name] = [];
            }
            this.autocompletefiledvalue[field.name].push(val.key);
        }
        if (this.formGroup.controls[field.name] != null) {
            this.formGroup.controls[field.name].patchValue(null);
            this.inputblur(field.name);
        }
    };
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    ShowformComponent.prototype.managefromcontrol = /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        // console.log('manage control', field, type, field.length);
        if (type == 'remove' && field.name != null) {
            for (var y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.name) {
                    this.formdataval.fields.splice(parseInt(y), 1);
                    this.formGroup.removeControl(field.name);
                    // console.log('removed', field['name'], 'c', y, field);
                }
            }
        }
        if (type == 'remove' && field.name == null && field.length > 1) {
            // console.log(field.length, 'fl');
            for (var y in this.formdataval.fields) {
                for (var z in field) {
                    if (this.formdataval.fields[y].name == field[z]) {
                        this.formdataval.fields.splice(parseInt(y), 1);
                        this.formGroup.removeControl(field[z]);
                        // console.log('removed in array form ', field[z], 'c ar', y, field);
                    }
                }
            }
        }
        if (type == 'add') {
            // console.log('in add form');
            if (field.after != null) {
                for (var y in this.formdataval.fields) {
                    if (this.formdataval.fields[y].name == field.after) {
                        this.formdataval.fields.splice(parseInt(y) + 1, 0, field);
                        this.createForm(1);
                        // console.log('added ..', field['name'], 'c', y);
                    }
                }
            }
            else {
                if (typeof (field) == 'object') {
                    // console.log('in array form  add');
                    for (var v in field) {
                        for (var y in this.formdataval.fields) {
                            if (field[v] != null && field[v].name != null && this.formdataval.fields[y].name == field[v].after) {
                                this.formdataval.fields.splice(parseInt(y) + 1, 0, field[v]);
                                this.createForm(1);
                                // console.log('array field added ..', field[v]['name'], 'c', y);
                            }
                        }
                    }
                }
            }
        }
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.resetformdata = /**
     * @return {?}
     */
    function () {
        this.formGroup.reset();
        this.filearray = [];
        this.autocompletefiledvalue = [];
        this.currentautocomplete = '';
    };
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.checkchange = /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    function (field, index) {
        // console.log(field, 'change', index, 'index2');
        if (this.formGroup.controls[field.name] != null) {
            this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value });
        }
        if (field.dependent != null && field.dependent.length > 0) {
            /** @type {?} */
            var vc = 0;
            for (var n in field.dependent) {
                if (field.dependent[n].condval.toString() == this.formGroup.controls[field.name].value.toString()) {
                    // let temvalidationrulet: any = [];
                    vc++;
                    // this.formGroup.addControl(field.dependent[n].field.name, new FormControl(field.dependent[n].field.value, temvalidationrulet));
                    // console.log('nnnnn', '--', parseInt(index + 1 + parseInt(vc)), '--', vc + index + 1, index, vc, field.dependent[n].field['name']);
                    this.formdataval.fields.splice(parseInt(index + parseInt(vc)), 0, field.dependent[n].field);
                    this.createForm(1);
                }
                else {
                    for (var y in this.formdataval.fields) {
                        if (this.formdataval.fields[y].name == field.dependent[n].field.name) {
                            this.formdataval.fields.splice(parseInt(y), 1);
                            this.formGroup.removeControl(field.dependent[n].field.name);
                            // console.log('removed', field.dependent[n].field['name'], 'c', y);
                        }
                    }
                }
            }
        }
    };
    /**
     * @param {?=} initialize
     * @return {?}
     */
    ShowformComponent.prototype.createForm = /**
     * @param {?=} initialize
     * @return {?}
     */
    function (initialize) {
        var _this = this;
        if (initialize === void 0) { initialize = 0; }
        /*this.formGroup = this.formBuilder.group({
          'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
          'fullname': [null, Validators.required],
         // 'password': [null, [Validators.required, this.checkPassword]],
          //'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
          //'validate': ''
        });*/
        // let demoArray:any=[];
        if (initialize == 0) {
            this.formGroup = this.formBuilder.group({});
        }
        var _loop_3 = function (n) {
            if (this_2.formGroup.controls[this_2.formdataval.fields[n]] == null) {
                /** @type {?} */
                var temcontrolarr = [];
                /** @type {?} */
                var temvalidationrule = [];
                if (this_2.formdataval.fields[n].value != null) {
                    temcontrolarr.push(this_2.formdataval.fields[n].value);
                }
                else {
                    temcontrolarr.push('');
                }
                if (this_2.formdataval.fields[n].type == 'file') {
                    this_2.filearray[this_2.formdataval.fields[n].name] = this_2.formdataval.fields[n].value;
                    // console.log('db', this.filearray[this.formdataval.fields[n].name], this.formdataval.fields[n].name);
                    if (this_2.formdataval.fields[n].multiple != null && this_2.formdataval.fields[n].multiple == true) {
                        //use for delete data
                        this_2.formdataval.fields[n].loadfile = 1;
                        for (var fa in this_2.filearray[this_2.formdataval.fields[n].name]) {
                            // console.log('fv', fa);
                            if (this_2.filearray[this_2.formdataval.fields[n].name][fa] != null) {
                                // console.log('fr', this.filearray[this.formdataval.fields[n].name][fa]);
                                this_2.filearray[this_2.formdataval.fields[n].name][fa].uploaded = 1;
                                this_2.filearray[this_2.formdataval.fields[n].name][fa].loadfile = 1;
                                if (this_2.formdataval.fields[n].aspectratio != null && this_2.formdataval.fields[n].imagecroppedratiolabel != null && this_2.formdataval.fields[n].aspectratio != '' && this_2.formdataval.fields[n].aspectratio.length > 0) {
                                    this_2.filearray[this_2.formdataval.fields[n].name][fa].aspectratio = this_2.formdataval.fields[n].aspectratio;
                                    this_2.filearray[this_2.formdataval.fields[n].name][fa].imagecroppedratiolabel = this_2.formdataval.fields[n].imagecroppedratiolabel;
                                    // for (let c in this.filearray[this.formdataval.fields[n].name][fa]) {
                                    //   this.filearray[this.formdataval.fields[n].name][fa].aspectratio[c] = Number(this.filearray[this.formdataval.fields[n].name][fa].aspectratio[c]).toFixed(2);
                                    // }
                                }
                                // this.filearray[this.formdataval.fields[n].name][fa].imagefields = this.formdataval.fields[n].imagefields;
                            }
                        }
                        if (this_2.filearray[this_2.formdataval.fields[n].name] != null) {
                            this_2.filecount[this_2.formdataval.fields[n].name] = this_2.filearray[this_2.formdataval.fields[n].name].length;
                        }
                    }
                    else {
                        if (this_2.filearray[this_2.formdataval.fields[n].name] != null) {
                            this_2.filearray[this_2.formdataval.fields[n].name].uploaded = 1;
                            //use for delete data
                            this_2.formdataval.fields[n].loadfile = 1;
                            this_2.filearray[this_2.formdataval.fields[n].name].loadfile = 1;
                            // for (let c in this.formdataval.fields[n]) {
                            //   this.formdataval.fields[n].aspectratio[c] = Number(this.formdataval.fields[n].aspectratio[c]).toFixed(2);
                            // }
                        }
                    }
                    // console.log(this.filearray, 'filearray')
                }
                if (this_2.formdataval.fields[n].type == 'checkbox' && this_2.formdataval.fields[n].multiple != null && this_2.formdataval.fields[n].multiple == true) {
                    if (this_2.formdataval.fields[n].value == null) {
                        temcontrolarr.push([]);
                    }
                    else {
                        if (this_2.formdataval.fields[n].val != null) {
                            /** @type {?} */
                            var tcharr = [];
                            for (var b in this_2.formdataval.fields[n].val) {
                                // console.log('b', b, this.formdataval.fields[n].val[b]);
                                if (this_2.formdataval.fields[n].value != null && this_2.formdataval.fields[n].value.includes(this_2.formdataval.fields[n].val[b].key)) {
                                    tcharr.push(true);
                                }
                                else {
                                    tcharr.push(false);
                                }
                            }
                            // push the val
                            temcontrolarr.push(tcharr);
                            // console.log('tch', tcharr);
                        }
                    }
                }
                if (this_2.formdataval.fields[n].validations != null && this_2.formdataval.fields[n].validations.length > 0) {
                    for (var v in this_2.formdataval.fields[n].validations) {
                        // setTimeout( ()=>{
                        if (this_2.formdataval.fields[n].validations[v].message == null) {
                            this_2.formdataval.fields[n].validations[v].message = 'Not Valid !!';
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'required') {
                            temvalidationrule.push(Validators.required);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'match') {
                            this_2.formGroup.setValidators(this_2.checkPasswords);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'autorequired') {
                            this_2.formGroup.setValidators(this_2.autorequired);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'pattern') {
                            temvalidationrule.push(Validators.pattern(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'maxLength') {
                            temvalidationrule.push(Validators.maxLength(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'min') {
                            temvalidationrule.push(Validators.min(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'max') {
                            temvalidationrule.push(Validators.max(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'minLength') {
                            temvalidationrule.push(Validators.minLength(this_2.formdataval.fields[n].validations[v].value));
                        }
                        // },0);
                    }
                }
                // document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
                // demoArray[this.formdataval.fields[n].name]=new FormControl('');
                if (this_2.formdataval.fields[n].type == 'image' && this_2.formdataval.fields[n].value != null) {
                    setTimeout((/**
                     * @return {?}
                     */
                    function () {
                        document.querySelector('.imgwrap_' + _this.formdataval.fields[n].name + '_' + _this.formdataval.fields[n].value).classList.add('imagechoiceactive');
                    }), 4000);
                }
                if (this_2.formdataval.fields[n].type == 'checkbox' && this_2.formdataval.fields[n].multiple != null && this_2.formdataval.fields[n].multiple == true) {
                    /** @type {?} */
                    var tchvar = false;
                    // let
                    // console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
                    // this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
                    for (var j in this_2.formdataval.fields[n].val) {
                        if (this_2.formdataval.fields[n].value != null && this_2.formdataval.fields[n].value.includes(this_2.formdataval.fields[n].val[j].key)) {
                            tchvar = true;
                        }
                        else {
                            tchvar = false;
                        }
                        // console.log('n', n, j, tchvar);
                        this_2.formGroup.addControl(this_2.formdataval.fields[n].name + '__' + j, new FormControl(tchvar, temvalidationrule));
                        // if()
                        /*const control = new FormControl(tchvar); // if first item set to true, else false
                   (this.formGroup.controls[this.formdataval.fields[n].name] as FormArray).push(control);*/
                        // this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
                        // this.formBuilder.control(tchvar)
                        // ]));
                    }
                    /*this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
                  this.formBuilder.control(false),
                  this.formBuilder.control(true),
                  this.formBuilder.control(true),
                  this.formBuilder.control(false),
                ]));*/
                    // this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl(temcontrolarr[0], temvalidationrule));
                }
                else {
                    this_2.formGroup.addControl(this_2.formdataval.fields[n].name, new FormControl({ value: temcontrolarr[0], disabled: this_2.formdataval.fields[n].disabled }, temvalidationrule));
                }
                if (this_2.formdataval.fields[n].type == 'autocomplete' && this_2.formdataval.fields[n].multiple != null && this_2.formdataval.fields[n].multiple == true) {
                    for (var at in this_2.formdataval.fields[n].val) {
                        // console.log('at ...', this.formdataval.fields[n].val[at], at, this.formdataval.fields[n].value, this.formdataval.fields[n].val[at].key);
                        if (this_2.formdataval.fields[n].value != null && typeof (this_2.formdataval.fields[n].value) == 'object' && this_2.formdataval.fields[n].value.indexOf(this_2.formdataval.fields[n].val[at].key) != -1) {
                            // console.log(this.formdataval.fields[n].val[at].key, 'multi autocomplete triggered  !! ');
                            this_2.setautocompletevalue(this_2.formdataval.fields[n].val[at], this_2.formdataval.fields[n]);
                        }
                    }
                }
                if (this_2.formdataval.fields[n].type == 'autocomplete' && (this_2.formdataval.fields[n].multiple == null || this_2.formdataval.fields[n].multiple == false)) {
                    // console.log('single auto complete trigger block', this.formdataval.fields[n]);
                    if (this_2.formdataval.fields[n].value != null) {
                        // console.log('set auto complete single triggered', this.formdataval.fields[n]);
                        this_2.setautocompletevalue(this_2.formdataval.fields[n].val[0], this_2.formdataval.fields[n]);
                    }
                }
                // 'newControl', new FormControl('', Validators.required)
            }
        };
        var this_2 = this;
        // console.log(this.formGroup, 'fg')
        for (var n in this.formdataval.fields) {
            _loop_3(n);
        }
        // =this.checkPasswords(this.formGroup);
        // this.formGroup = this.formBuilder.group(demoArray);
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.log(this.formGroup,'fg',demoArray);
            _this.showform = true;
            if (_this.formdataval.submitactive == null) {
                _this.formdataval.submitactive = true;
            }
            // console.log('grp', this.formGroup.controls);
        }), 10);
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.setChangeValidate = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.formGroup.get('validate').valueChanges.subscribe((/**
         * @param {?} validate
         * @return {?}
         */
        function (validate) {
            if (validate == '1') {
                _this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                _this.titleAlert = 'You need to specify at least 3 characters';
            }
            else {
                _this.formGroup.get('name').setValidators(Validators.required);
            }
            _this.formGroup.get('name').updateValueAndValidity();
        }));
    };
    /**
     * @param {?} vals
     * @param {?} fields
     * @return {?}
     */
    ShowformComponent.prototype.chooseimg = /**
     * @param {?} vals
     * @param {?} fields
     * @return {?}
     */
    function (vals, fields) {
        // console.log(vals, fields);
        document.querySelectorAll('.imgwrapper').forEach((/**
         * @param {?} el
         * @return {?}
         */
        function (el) {
            /** @type {?} */
            var elem;
            elem = el;
            // elem.style.transition = "opacity 0.5s linear 0s";
            // elem.style.opacity = 0.5;
            elem.classList.remove('imagechoiceactive');
        }));
        // console.log('imgwrap_' + fields.name + '_' + vals.key);
        document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
        this.formGroup.controls[fields.name].patchValue(vals.key);
    };
    /**
     * @param {?} group
     * @return {?}
     */
    ShowformComponent.prototype.checkPasswords = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        // here we have the 'passwords' group
        /** @type {?} */
        var pass = group.controls.password.value;
        /** @type {?} */
        var confirmPass = group.controls.confirmpassword.value;
        if (confirmPass == null || confirmPass == '') {
            group.controls.confirmpassword.setErrors({ required: true });
            return { required: true };
        }
        if (pass != confirmPass) {
            group.controls.confirmpassword.setErrors({ match: true });
            return { match: true };
        }
        // return pass === confirmPass ? null : { notSame: true }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ShowformComponent.prototype.checkPassword = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        /** @type {?} */
        var enteredPassword = control.value;
        /** @type {?} */
        var passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
    };
    /**
     * @param {?} group
     * @return {?}
     */
    ShowformComponent.prototype.autorequired = /**
     * @param {?} group
     * @return {?}
     */
    function (group) {
        for (var b in group) {
            if (group[b].type == 'autocomplete' && group[b].validations != null && group[b].validations[0] != null && group[b].validations[0].rule == 'autorequired' && this.autocompletefiledvalue[group[b].name] == null) {
                this.formGroup.controls[group.name].setErrors({ autorequired: true });
                return { autorequired: true };
            }
        }
        // console.log('bgrrr',group,group.name);
        // if(this.formGroup.controls[group.name] !=null && group.validations!=null && group.validations[0]!=null && group.validations[0].rule=='autorequired' && this.autocompletefiledvalue[group.name]==null){
        // let pass = group.controls.password.value;
        // let confirmPass = group.controls.confirmpassword.value;
        // if(confirmPass==null || confirmPass==''){
        //   group.controls.confirmpassword.setErrors({required:true});
        //   return { required: true };
        // }
        // if(pass!=confirmPass){
        //   group.controls.confirmpassword.setErrors({'match':true});
        //   return {match:true};
        // }
        // return pass === confirmPass ? null : { notSame: true }
    };
    /**
     * @param {?} control
     * @return {?}
     */
    ShowformComponent.prototype.checkInUseEmail = /**
     * @param {?} control
     * @return {?}
     */
    function (control) {
        // mimic http database access
        /** @type {?} */
        var db = ['tony@gmail.com'];
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        function (observer) {
            setTimeout((/**
             * @return {?}
             */
            function () {
                /** @type {?} */
                var result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
                observer.next(result);
                observer.complete();
            }), 4000);
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ShowformComponent.prototype.getError = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('getError', data);
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.getErrorPassword = /**
     * @return {?}
     */
    function () {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    };
    /**
     * @param {?} post
     * @return {?}
     */
    ShowformComponent.prototype.onSubmit = /**
     * @param {?} post
     * @return {?}
     */
    function (post) {
        var _this = this;
        this.post = post;
        /** @type {?} */
        var tempformval = {};
        for (var x in this.formGroup.controls) {
            this.formGroup.controls[x].markAsTouched();
            // console.log(this.formGroup.controls[x].errors, x, 'err');
            // if(this.formGroup.controls[x].valid){
            // console.log('x',x);
            /** @type {?} */
            var b = x.split('__');
            // console.log('b',b,b.length,b[0]);
            for (var m in this.formdataval.fields) {
                if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple == null && this.filearray[this.formdataval.fields[m].name] != null) {
                    // console.log(this.filearray[this.formdataval.fields[m].name], '>>??==== not null submit ++++')
                    if (this.filearray[this.formdataval.fields[m].name] != null && this.filearray[this.formdataval.fields[m].name].uploaded != null && this.filearray[this.formdataval.fields[m].name].uploaded == 1 && this.filearray[this.formdataval.fields[m].name].loadfile == 1) {
                        // fileservername: "Test-1589216992392My Saved Schema.json"
                        // lastModified: 1589174477504
                        // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                        // name: "My Saved Schema.json"
                        // size: 135096
                        // type: "application/json"
                        // uploaded: 1
                        // console.log(this.formdataval.fields[m], '>>?? file submit ss')
                        // console.log(this.filearray[this.formdataval.fields[m].name], '>>??==== file submit loadfile 1 ===')
                        /** @type {?} */
                        var tfile = {};
                        if (this.filearray[this.formdataval.fields[m].name].type == 'image/png' || this.filearray[this.formdataval.fields[m].name].type == 'image/jpg' || this.filearray[this.formdataval.fields[m].name].type == 'image/jpeg') {
                            if (this.formdataval.fields[m].aspectratio != null && this.formdataval.fields[m].aspectratio.length > 0) {
                                tfile.aspectratio = this.formdataval.fields[m].aspectratio;
                                for (var c in this.formdataval.fields[m].croppedimagearray) {
                                    delete this.formdataval.fields[m].croppedimagearray[c].file;
                                    delete this.formdataval.fields[m].croppedimagearray[c].base64;
                                }
                                tfile.croppedimagearray = this.formdataval.fields[m].croppedimagearray;
                            }
                        }
                        tfile.fileservername = this.filearray[this.formdataval.fields[m].name].fileservername;
                        tfile.name = this.filearray[this.formdataval.fields[m].name].name;
                        tfile.size = this.filearray[this.formdataval.fields[m].name].size;
                        tfile.type = this.filearray[this.formdataval.fields[m].name].type;
                        tfile.path = this.formdataval.fields[m].path;
                        tfile.bucket = this.formdataval.fields[m].bucket;
                        tfile.baseurl = this.formdataval.fields[m].baseurl;
                        tfile.imagefields = this.formdataval.fields[m].imagefields;
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                        // console.log(tfile, 'single tfile>>',)
                    }
                    if (this.filearray[this.formdataval.fields[m].name] != null && this.filearray[this.formdataval.fields[m].name].loadfile == 0) {
                        // console.log(this.filearray[this.formdataval.fields[m].name], '>>??==== file loadfile 0 ===')
                        /** @type {?} */
                        var tfile = {};
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                    }
                }
                if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
                    /** @type {?} */
                    var tfilearr = [];
                    for (var g in this.filearray[this.formdataval.fields[m].name]) {
                        // console.log(this.filearray[this.formdataval.fields[m].name][g], 'this.filearray[this.formdataval.fields[m].name] +========')
                        if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 1) {
                            // console.log(this.filearray[this.formdataval.fields[m].name][g], 'this.filearray[this.formdataval.fields[m].name][g]')
                            // fileservername: "Test-1589216992392My Saved Schema.json"
                            // lastModified: 1589174477504
                            // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                            // name: "My Saved Schema.json"
                            // size: 135096
                            // type: "application/json"
                            // uploaded: 1
                            /** @type {?} */
                            var tfile = {};
                            if (this.filearray[this.formdataval.fields[m].name][g].type == 'image/png' || this.filearray[this.formdataval.fields[m].name][g].type == 'image/jpg' || this.filearray[this.formdataval.fields[m].name][g].type == 'image/jpeg') {
                                if (this.filearray[this.formdataval.fields[m].name][g].aspectratio != null && this.filearray[this.formdataval.fields[m].name][g].aspectratio.length > 0) {
                                    tfile.aspectratio = this.filearray[this.formdataval.fields[m].name][g].aspectratio;
                                    tfile.croppedimagearray = this.filearray[this.formdataval.fields[m].name][g].croppedimagearray;
                                    for (var c in this.filearray[this.formdataval.fields[m].name][g].croppedimagearray) {
                                        delete this.filearray[this.formdataval.fields[m].name][g].croppedimagearray[c].base64;
                                        delete this.filearray[this.formdataval.fields[m].name][g].croppedimagearray[c].file;
                                    }
                                    tfile.croppedimagearray = this.filearray[this.formdataval.fields[m].name][g].croppedimagearray;
                                }
                            }
                            tfile.fileservername = this.filearray[this.formdataval.fields[m].name][g].fileservername;
                            tfile.name = this.filearray[this.formdataval.fields[m].name][g].name;
                            tfile.size = this.filearray[this.formdataval.fields[m].name][g].size;
                            tfile.type = this.filearray[this.formdataval.fields[m].name][g].type;
                            tfile.path = this.formdataval.fields[m].path;
                            tfile.bucket = this.formdataval.fields[m].bucket;
                            tfile.baseurl = this.formdataval.fields[m].baseurl;
                            // console.log(tfile, 'tfile++')
                            // tfile.imagefields = this.formdataval.fields[m].imagefields; flds
                            if (this.formdataval.fields[m].imagefields != null && this.formdataval.fields[m].imagefields.length > 0) {
                                // console.log(this.filearray[this.formdataval.fields[m].name][g].flds, 'flds ')
                                // console.log(this.filearray[this.formdataval.fields[m].name][g].imagefields, 'imagefields')
                                if (this.filearray[this.formdataval.fields[m].name][g].flds != null && this.filearray[this.formdataval.fields[m].name][g].flds.length > 0) {
                                    tfile.imgfields = this.filearray[this.formdataval.fields[m].name][g].flds;
                                    tfile.flds = this.filearray[this.formdataval.fields[m].name][g].flds;
                                    // for (let img in this.filearray[this.formdataval.fields[m].name][g].imagefields) {
                                    //   for (let fl in this.filearray[this.formdataval.fields[m].name][g].flds) {
                                    //     if (this.filearray[this.formdataval.fields[m].name][g].flds[fl].key == this.filearray[this.formdataval.fields[m].name][g].imagefields[img].name) {
                                    //       console.log('imagefields', this.filearray[this.formdataval.fields[m].name][g].imagefields[img])
                                    //       this.filearray[this.formdataval.fields[m].name][g].imagefields[img].val = this.filearray[this.formdataval.fields[m].name][g].flds[fl].value
                                    //     }
                                    //   }
                                    // }
                                    // tfile.imgfields = this.formdataval.fields[m].imagefields;
                                    // tfile.imgfil=this.filearray[this.formdataval.fields[m].name][g].flds;
                                    // console.log('tfile++++>', tfile)
                                }
                            }
                            tfilearr.push(tfile);
                        }
                        // if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 2) {
                        // console.log(this.filearray[this.formdataval.fields[m].name], '========++++ upload 2')
                        // }
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfilearr);
                    }
                }
                if (this.formdataval.fields[m].type == 'autocomplete') {
                    if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) {
                        // console.log('autoerror', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: null });
                        // console.log('autoerror after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    else {
                        // console.log('autoerror set', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: true });
                        // console.log('autoerror set after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    if (x == this.formdataval.fields[m].name && tempformval[x] == null) {
                        tempformval[x] = this.autocompletefiledvalue[this.formdataval.fields[m].name];
                    }
                }
                if (b.length > 1 && b[0] == this.formdataval.fields[m].name && this.formdataval.fields[m].name != x && this.formdataval.fields[m].type == 'checkbox' && this.formdataval.fields[m].multiple != null) {
                    // console.log('aaaaff...');
                    if (this.formGroup.controls[x].value == true) {
                        for (var k in this.formdataval.fields[m].val) {
                            if (this.formdataval.fields[m].val[k].key == b[1]) {
                                if (tempformval[this.formdataval.fields[m].name] == null) {
                                    tempformval[this.formdataval.fields[m].name] = [];
                                }
                                tempformval[this.formdataval.fields[m].name].push(b[1]);
                                // console.log('gv', b[1]);
                            }
                        }
                    }
                }
                //for multiple email add
                // if(this.formdataval.fields[m].type == 'email'){
                //   if(this.formGroup.controls[x].value == true){
                //     console.log(this.formdataval.fields[m],'==this.formdataval.fields[m]++',this.formGroup.controls[x].value,'??',tempformval,'>>>',b[0])
                //     // for(let i  in tempformval){
                //     //   if(tempformval[i] == this.formdataval.fields[m].name.match('/email/g')){
                //     //     console.log(tempformval[i],'tempformval[i]')
                //     //   }
                //     // }
                //   }
                // }
                // else{
                if (x == this.formdataval.fields[m].name && tempformval[x] == null) {
                    tempformval[x] = this.formGroup.controls[x].value;
                }
                //  }
            }
            // console.log(this.formGroup.controls[x].errors, x, 'err22');
            // }
        }
        // console.log(post, 'post', this.formGroup.valid, this.formdataval, this.formdataval.apiUrl, 'ffff', tempformval);
        if (this.formGroup.valid) {
            // if (this.formdataval.endpoint != null || this.formdataval.apiUrl) {
            this.loading = true;
            /** @type {?} */
            var link = this.formdataval.apiUrl + this.formdataval.endpoint;
            /** @type {?} */
            var source = {};
            source.data = this.formGroup.value;
            if (this.formdataval.secret != null && this.formdataval.jwttoken != null) {
                source.secret = this.formdataval.secret;
                source.jwttoken = this.formdataval.jwttoken;
            }
            if (this.formdataval.endpoint != null && this.formdataval.endpoint != '') {
                this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        _this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
                        _this.formGroup.reset();
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: _this.formdataval.successmessage }
                        });
                        // console.log(result, 'red', this.formdataval.redirectpath);
                        if (_this.formdataval.redirectpath != null && _this.formdataval.redirectpath != '' && _this.formdataval.redirectpath != '/') {
                            _this.router.navigate([_this.formdataval.redirectpath]);
                        }
                        else {
                            _this.loading = false;
                        }
                    }
                    if (result.status == 'error') {
                        _this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                        _this.loading = false;
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                function (error) {
                    // console.log('Oooops!');
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                    _this.onFormFieldChange.emit({ field: 'fromsubmitservererror', fieldval: 'servererror', fromval: _this.formGroup.value });
                    _this.loading = false; //disable loader 
                }));
            }
            else {
                this.loading = false;
                this.onFormFieldChange.emit({
                    field: 'fromsubmit', fieldval: 'success', formdataval: this.formdataval, source: source, loading: this.loading,
                    fromval: this.formGroup.value
                });
            }
        }
        else {
            this.onFormFieldChange.emit({ field: 'fromsubmiterror', fieldval: 'validationerror', fromval: this.formGroup.value, loading: this.loading });
            this.scrollToFirstInvalidControl();
        }
    };
    /**
     * @private
     * @return {?}
     */
    ShowformComponent.prototype.scrollToFirstInvalidControl = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var firstInvalidControl = this.elementRef.nativeElement.querySelector("form .ng-invalid");
        window.scroll({
            top: this.getTopOffset(firstInvalidControl),
            left: 0,
            behavior: "smooth"
        });
    };
    /**
     * @private
     * @param {?} controlEl
     * @return {?}
     */
    ShowformComponent.prototype.getTopOffset = /**
     * @private
     * @param {?} controlEl
     * @return {?}
     */
    function (controlEl) {
        /** @type {?} */
        var labelOffset = 50;
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ShowformComponent.prototype.fileChangeEvent = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        console.log("change event hitted", event);
        this.imageChangedEvent = event;
    };
    /**
     * @param {?} event
     * @param {?} field
     * @param {?} ival
     * @param {?} ci
     * @return {?}
     */
    ShowformComponent.prototype.singleimageCropped = /**
     * @param {?} event
     * @param {?} field
     * @param {?} ival
     * @param {?} ci
     * @return {?}
     */
    function (event, field, ival, ci) {
        this.formdataval.fields[ival].croppedImage[ci] = event.base64;
        // for (let c in this.formdataval.fields[ival].aspectratio) {
        //   this.formdataval.fields[ival].aspectratio[c] = Number(this.formdataval.fields[ival].aspectratio[c]);
        // }
        // delete event.base64;
        // delete event.file;
        this.formdataval.fields[ival].croppedimagearray[ci] = event;
        // this.croppedImage = event.base64;
        // console.log(this.formdataval.fields[ival].croppedImage[ci], 'this.croppedImage===>>')
        // console.log(event, 'event+++64=====', this.formdataval.fields[ival], field, ci);
        // console.log(field, 'field=====')
    };
    /**
     * @param {?} event
     * @param {?} files
     * @param {?} ival
     * @param {?} ci
     * @param {?} fi
     * @param {?} fldval
     * @return {?}
     */
    ShowformComponent.prototype.multipleimageCropped = /**
     * @param {?} event
     * @param {?} files
     * @param {?} ival
     * @param {?} ci
     * @param {?} fi
     * @param {?} fldval
     * @return {?}
     */
    function (event, files, ival, ci, fi, fldval) {
        // console.log(event, 'event+++64', this.formdataval.fields[ival], files, ival, ci, '++++++++++++++++', fi, fldval)
        fldval[fi].croppedImage[ci] = event.base64;
        fldval[fi].croppedimagearray[ci] = event;
        for (var c in fldval[fi].aspectratio) {
            fldval[fi].aspectratio[c] = Number(fldval[fi].aspectratio[c]);
        }
        // this.croppedImage = event.base64;
        // console.log(files, 'this.croppedImage output===>>')
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.imageLoaded = /**
     * @return {?}
     */
    function () {
        // show cropper
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.cropperReady = /**
     * @return {?}
     */
    function () {
        // cropper ready
    };
    /**
     * @return {?}
     */
    ShowformComponent.prototype.loadImageFailed = /**
     * @return {?}
     */
    function () {
        // show message
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.opensingleimagecrop = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val, '========');
        val.croppedimagearray = [];
        val.croppedImage = [];
        // for (let c in val.aspectratio) {
        //   val.aspectratio[c] = Number(val.aspectratio[c]);
        // }
        /** @type {?} */
        var imgUrl = 'https://' + val.value.bucket + '.s3.amazonaws.com/' + val.value.path + val.value.fileservername;
        this.getImagetoDataURL(imgUrl, (/**
         * @param {?} dataUrl
         * @return {?}
         */
        function (dataUrl) {
            // console.log(dataUrl)
            val.imageUrl = dataUrl;
            val.value = null;
        }));
        // val.editImageUrl = 'https://' + val.value.bucket + '.s3.amazonaws.com/' + val.value.path + val.value.fileservername;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ShowformComponent.prototype.opensingleimagecropformultiple = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log(val, '========');
        val.croppedimagearray = [];
        val.croppedImage = [];
        // for (let c in val.aspectratio) {
        //   val.aspectratio[c] = Number(val.aspectratio[c]);
        // }
        /** @type {?} */
        var imgUrl = 'https://' + val.bucket + '.s3.amazonaws.com/' + val.path + val.fileservername;
        // console.log(imgUrl, 'imgUrl')
        this.getImagetoDataURL(imgUrl, (/**
         * @param {?} dataUrl
         * @return {?}
         */
        function (dataUrl) {
            // console.log(dataUrl)
            val.imageUrl = dataUrl;
        }));
    };
    // get Image to Data URL
    // get Image to Data URL
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    ShowformComponent.prototype.getImagetoDataURL = 
    // get Image to Data URL
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    function (url, callback) {
        /** @type {?} */
        var xhr = new XMLHttpRequest();
        xhr.onload = (/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var reader = new FileReader();
            reader.onloadend = (/**
             * @return {?}
             */
            function () {
                callback(reader.result);
            });
            reader.readAsDataURL(xhr.response);
        });
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    };
    ShowformComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-showform',
                    template: "<!--<mat-toolbar color=\"primary\">\r\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\r\n</mat-toolbar>-->\r\n\r\n\r\n\r\n\r\n\r\n<section *ngIf=\"loading == true\" class=\"example-section\">\r\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\r\n    </mat-progress-bar>\r\n</section>\r\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\r\n\r\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\r\n\r\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\r\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\r\n\r\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\r\n                    <mat-card class=\"form_header_{{fields.name}}\"\r\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\r\n                        [innerHTML]=\"fields.heading\">\r\n                    </mat-card>\r\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <!-- for select-->\r\n                        <!-- <div>ff</div> -->\r\n                        <mat-label> Select {{fields.label}} </mat-label>\r\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\r\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\r\n                            [multiple]=\"fields.multiple?true:false\">\r\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\r\n                        </mat-select>\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n\r\n                    </mat-form-field>\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <div>\r\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\r\n                            </mat-label>\r\n                        </div>\r\n\r\n                        <div>\r\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\r\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\r\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\r\n                                </span>\r\n                            </ng-container>\r\n                        </div>\r\n\r\n\r\n\r\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\r\n                            formControlName=\"{{fields.name}}\">\r\n                        <mat-error\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                <span\r\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                            </ng-container>\r\n                        </mat-error>\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n                    </div>\r\n\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\r\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\r\n                        </mat-label>\r\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\r\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\r\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\r\n                        </mat-checkbox>\r\n\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n                    </div>\r\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\r\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\r\n                        </mat-label>\r\n\r\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\r\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\r\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\r\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\r\n                                    [value]=\"vals.key\">{{vals.val}}\r\n                                </mat-checkbox>\r\n\r\n                            </ng-container>\r\n                        </ng-container>\r\n\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                        <mat-error >\r\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                            </ng-container>\r\n                        </mat-error>\r\n\r\n                    </ng-container>-->\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n\r\n                    </div>\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n\r\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\r\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\r\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\r\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\r\n                                {{vals.val}}\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n\r\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\r\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\r\n\r\n         </ng-container>-->\r\n\r\n\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n\r\n                    </div>\r\n\r\n                    <div>\r\n                        <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\r\n                        <div class=\"add_form\">\r\n                        <div class=\"mat-form-field-wrapper\">\r\n                            <div class=\"phonenumber mat-form-field\">\r\n                            <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\"\r\n                            [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\r\n                            [formControlName]=\"fields.name\">\r\n                            <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\r\n                            </div>\r\n                            <div class=\"errorfield\">\r\n                                <ng-container\r\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                                <mat-error>\r\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                        <span\r\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                    </ng-container>\r\n                                </mat-error>\r\n                            </ng-container>\r\n                            </div>\r\n                        </div>\r\n                        </div>\r\n                    </ng-container>\r\n\r\n                        <mat-form-field\r\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\r\n                            class=\"form-element form_field_{{fields.name}}\">\r\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n\r\n\r\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\r\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\r\n                                [formControlName]=\"fields.name\" >\r\n\r\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                            <ng-container\r\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                                <mat-error>\r\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                        <span\r\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                    </ng-container>\r\n                                </mat-error>\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                            </ng-container>\r\n\r\n                        </mat-form-field>\r\n\r\n\r\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \r\n                        fields.passwordflag == true \">\r\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\r\n                                class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\r\n                                Generate Password</button> &nbsp;\r\n\r\n                            <button mat-raised-button color=\"accent\" type=\"button\"\r\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\" matTooltip=\"Copy Password\">\r\n                                Copy Password</button> &nbsp;\r\n\r\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\r\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Show Password\">\r\n                                remove_red_eye\r\n                            </span>\r\n\r\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\r\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Hide Password\">\r\n                                visibility_off\r\n                            </span>\r\n                        </div>\r\n\r\n                        <div class=\"passbuttoncls\"\r\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\r\n\r\n\r\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\r\n\r\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\r\n                                    <span>\r\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\r\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\r\n                                            {{item?.labeladd}}<span class=\"material-icons\">\r\n                                                add\r\n                                            </span></button> &nbsp;\r\n\r\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\r\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\r\n                                            {{item?.labelremove}}<span class=\"material-icons\">\r\n                                                remove\r\n                                            </span></button>\r\n                                    </span>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n\r\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\r\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\r\n                                <mat-card class=\"customheadingtitlecls\">\r\n                                    {{fields?.customheadingtitle}}</mat-card>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\r\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\r\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\r\n                        </textarea>\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n                    </mat-form-field>\r\n\r\n\r\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n\r\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\r\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker1></mat-datepicker>\r\n                        <!-- <textarea matInput \r\n     placeholder=\"Comment\" \r\n     [formControlName]=\"fields.name\" \r\n     (change)=\"inputblur(fields.name)\">\r\n  </textarea> -->\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n\r\n                    </mat-form-field>\r\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n                        <!-- {{fields.val.length}}\r\n -->\r\n\r\n\r\n\r\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\r\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\r\n\r\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\r\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\r\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\r\n\r\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\r\n                        <mat-autocomplete #auto=\"matAutocomplete\">\r\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\r\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\r\n                                    (click)=\"setautocompletevalue(vals,fields)\">\r\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\r\n                                    <span>{{vals.val}}</span>\r\n                                    <!-- <small>Population: {{state.population}}</small> -->\r\n                                </mat-option>\r\n                            </ng-container>\r\n                        </mat-autocomplete>\r\n\r\n\r\n\r\n\r\n\r\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\r\n                            aria-label=\"{{fields.name}} data\">\r\n                            <ng-container *ngFor=\"let vals of fields.val \">\r\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\r\n                                    <mat-chip [removable]=true>{{vals.val}}\r\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\r\n                                    </mat-chip>\r\n                                </ng-container>\r\n\r\n                            </ng-container>\r\n\r\n                        </mat-chip-list>\r\n\r\n\r\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\r\n                            aria-label=\"{{fields.name}} data\">\r\n                            <ng-container *ngFor=\"let vals of fields.val \">\r\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\r\n                                    <ng-container *ngIf=\"vals.key==avals\">\r\n                                        <mat-chip [removable]=true>{{vals.val}}\r\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\r\n                                            </mat-icon>\r\n                                        </mat-chip>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n\r\n                            </ng-container>\r\n\r\n                        </mat-chip-list>\r\n\r\n                        <!-- <textarea matInput \r\n     placeholder=\"Comment\" \r\n     [formControlName]=\"fields.name\" \r\n     (change)=\"inputblur(fields.name)\">\r\n  </textarea> -->\r\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\r\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\r\n\r\n                        <ng-container\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n\r\n                            <mat-error>\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\r\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\r\n                        </ng-container>\r\n\r\n\r\n                    </mat-form-field>\r\n\r\n                    <!-- [config]=\"{uiColor: '#99000'}\" \r\n\r\n[readonly]=\"false\"\r\n                (change)=\"onChange($event)\"\r\n                (editorChange)=\"onEditorChange($event)\" \r\n                (ready)=\"onReady($event)\"\r\n                (focus)=\"onFocus($event)\"\r\n                (blur)=\"onBlur($event)\"\r\n                (contentDom)=\"onContentDom($event)\"\r\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\r\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\r\n                (paste)=\"onPaste($event)\"\r\n                (drop)=\"onDrop($event)\"\r\n                debounce=\"500\"\r\n\r\n                 [ngModelOptions]=\"{standalone: true}\r\n\r\n\r\n                   <ckeditor\r\n                [(ngModel)]=\"ckeditorContent\"\r\n                [ngModelOptions]=\"{standalone: true}\"\r\n                \r\n                \r\n                >\r\n              </ckeditor>\r\n-->\r\n\r\n\r\n\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\r\n\r\n                        <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\r\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n                            <ckeditor (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\"\r\n                                [formControlName]=\"fields.name\"></ckeditor>\r\n                            <mat-error\r\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </div>\r\n\r\n                        <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\r\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n                            <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\r\n                            <mat-error\r\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                    <span\r\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                                </ng-container>\r\n                            </mat-error>\r\n                        </div>\r\n\r\n\r\n\r\n                    </div>\r\n\r\n\r\n\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n\r\n                        <span class=\"externalDataFunctioncls\">\r\n                            <button type=\"button\" mat-raised-button color=\"primary\"\r\n                                (click)=\"externalDataFunction(fields,ival)\" matTooltip = \"{{fields.label}}\">{{fields.label}}</button>\r\n                        </span>\r\n                        <br>\r\n\r\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\r\n                            <!-- {{fields.value | json}} -->\r\n\r\n                            <div *ngFor=\"let item of fields.value;let i = index\">\r\n                                <div class=\"externalcardcls\">\r\n                                    <mat-card>\r\n\r\n                                        <span class=\"keycls\">\r\n                                            {{item.label}} :\r\n                                        </span>\r\n\r\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\r\n                                            {{item.val}}\r\n                                        </span>\r\n\r\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\r\n                                            <img [src]=\"item.val\">\r\n                                        </span>\r\n\r\n                                        <span class=\"external_buttoncls\">\r\n\r\n\r\n                                            <span style=\"cursor: pointer;\"\r\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\r\n                                                class=\"material-icons\">\r\n                                                create\r\n                                            </span>\r\n\r\n                                            <span style=\"cursor: pointer;\"\r\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\r\n                                                class=\"material-icons\">\r\n                                                clear\r\n                                            </span>\r\n\r\n                                        </span>\r\n\r\n                                    </mat-card>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </ng-container>\r\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\r\n\r\n                            <ng-container *ngFor=\"let item of externalDataVal\">\r\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\r\n\r\n                                    {{item | json}}\r\n\r\n                                    {{fields.value | json}}\r\n\r\n                                </div>\r\n                            </ng-container>\r\n\r\n                        </ng-container> -->\r\n\r\n                    </div>\r\n\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\r\n                            formControlName=\"{{fields.name}}\">\r\n                        <mat-error\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                <span\r\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                            </ng-container>\r\n                        </mat-error>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\r\n                        class=\"form-element form_field_{{fields.name}}\">\r\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\r\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\r\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\r\n                                id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">Browse or Drop Files Here\r\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\r\n\r\n                                <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\r\n                                 <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\" style=\"display:none\"  (change)=\"handleDrop($event)\">\r\n                                </ng-container>\r\n\r\n                                <ng-container *ngIf=\"fields.multiple == null \">\r\n                                 <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\" multiple  (change)=\"handleDrop($event)\">\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\r\n\r\n                            <!-- <span>{{fields | json}}</span> -->\r\n\r\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\r\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\r\n                                <!-- <div></div> -->\r\n                                <ng-container\r\n                                    *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\r\n                                    <div class=\"filecontainerdiv\">\r\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\r\n                                            class=\"material-icons fileuploadcompleteicon \">\r\n                                            cloud_done\r\n                                        </span>\r\n\r\n\r\n                                        <div class=\"imagedivcls\"\r\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\r\n\r\n                                            <div class=\"divimagecardcls\">\r\n                                                <mat-card class=\"example-card imagecardcls\"\r\n                                                    *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\r\n                                                    <img mat-card-image [src]=\"fields.imageUrl\">\r\n                                                </mat-card>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"divimagecardcls\"\r\n                                                *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\r\n\r\n                                                <mat-card class=\"example-card imagecardcls\">\r\n\r\n                                                    <span class=\"material-icons cropcls\"\r\n                                                        *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\"\r\n                                                        (click)=\"opensingleimagecrop(fields)\">\r\n                                                        crop\r\n                                                    </span>\r\n\r\n                                                    <img mat-card-image\r\n                                                        src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\r\n                                                </mat-card>\r\n                                            </div>\r\n\r\n\r\n                                            <div class=\"cropimagesdiv\"\r\n                                                *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\r\n                                                <h2> Croped Images :</h2>\r\n\r\n                                                <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\"\r\n                                                    class=\"image-cropper-cls\">\r\n                                                    <br />\r\n                                                    <span>Croped Image (Asepect Ratio) :\r\n                                                        {{fields.imagecroppedratiolabel[ci]}} </span><br>\r\n\r\n                                                    <image-cropper [imageBase64]=\"fields.imageUrl\"\r\n                                                        [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\r\n                                                        (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\"\r\n                                                        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\r\n                                                        (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\"\r\n                                                        [resizeToHeight]=\"300\"></image-cropper>\r\n\r\n                                                </ng-container>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"filesdivcls\">\r\n                                            <span class=\"material-icons\"\r\n                                                *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\r\n                                                picture_as_pdf\r\n                                            </span>\r\n\r\n                                            <span class=\"material-icons\"\r\n                                                *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\r\n                                                movie_filter\r\n                                            </span>\r\n\r\n                                            <span class=\"material-icons\"\r\n                                                *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\r\n                                                description\r\n                                            </span>\r\n\r\n                                            <span\r\n                                                class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\r\n                                            <br />\r\n                                            <span\r\n                                                class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\r\n                                        </div>\r\n\r\n\r\n                                        <div class=\"filefieldsmaincls\">\r\n                                            <ng-container class=\"descdiv\"\r\n                                                *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\r\n                                                <div class=\"filefieldscls\">\r\n                                                    <div class=\"filefields\"\r\n                                                        *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\r\n\r\n                                                        <mat-form-field class=\"example-full-width\"\r\n                                                            *ngIf=\"item.type == 'text'\">\r\n                                                            <input matInput type=\"text\"\r\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\"\r\n                                                                name=\"{{item.name}}\" matInput\r\n                                                                placeholder=\"{{item.label}}\">\r\n                                                        </mat-form-field>\r\n\r\n                                                        <mat-form-field class=\"example-full-width\"\r\n                                                            *ngIf=\"item.type == 'textarea'\">\r\n                                                            <textarea matInput name=\"{{item.name}}\"\r\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\"\r\n                                                                placeholder=\"{{item.label}}\" [rows]='3'\r\n                                                                [cols]='30'></textarea>\r\n                                                        </mat-form-field>\r\n\r\n                                                        <mat-form-field class=\"example-full-width\"\r\n                                                            *ngIf=\"item.type == 'number'\">\r\n                                                            <input type=\"number\" matInput name=\"{{item.name}}\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\"\r\n                                                                [(ngModel)]=\"fields.imagefields[i].value\" matInput\r\n                                                                placeholder=\"{{item.label}}\">\r\n                                                        </mat-form-field>\r\n\r\n                                                        <div *ngIf=\"item.type == 'checkbox'\">\r\n                                                            <mat-checkbox name=\"{{item.name}}\"\r\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\r\n                                                                [ngModelOptions]=\"{standalone: true}\" matInput>\r\n                                                            </mat-checkbox>\r\n                                                            &nbsp; {{item.label}}\r\n                                                        </div>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                            </ng-container>\r\n                                        </div>\r\n\r\n\r\n\r\n                                        <div class=\"actionbtndiv\">\r\n                                            <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\r\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\r\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\r\n\r\n                                            <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\r\n                                                *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button\r\n                                                (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">Delete\r\n                                            </mat-chip>\r\n\r\n                                            <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\"\r\n                                                *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\"\r\n                                                mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\r\n                                        </div>\r\n\r\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\r\n\r\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\r\n                                            class=\"example-section uploadprogress\">\r\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\r\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\r\n                                            </mat-progress-bar>\r\n                                        </section>\r\n                                    </div>\r\n                                </ng-container>\r\n\r\n\r\n                                <!-- for multiple file uploads  -->\r\n                                <ng-container\r\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\r\n                                    <ng-container\r\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\r\n                                        <div class=\"filecontainerdiv\">\r\n\r\n                                            <!-- {{files | json}} ++ -->\r\n\r\n                                            <div *ngIf=\"files.loadfile != null && files.loadfile==1\"\r\n                                                class=\"filesdivcls\">\r\n\r\n                                                <!-- {{files.loadfile}}+++++++++++== -->\r\n\r\n                                                <span *ngIf=\"files.uploaded==1\"\r\n                                                    class=\"material-icons fileuploadcompleteicon\">\r\n                                                    cloud_done\r\n                                                </span>\r\n\r\n                                                <div class=\"divimagecardcls\"\r\n                                                    *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\r\n\r\n\r\n                                                    <mat-card class=\"example-card imagecardcls\"\r\n                                                        *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\r\n                                                        <img mat-card-image [src]=\"files.imageUrl\">\r\n                                                    </mat-card>\r\n\r\n                                                    <mat-card class=\"example-card imagecardcls\"\r\n                                                        *ngIf=\"files.imageUrl == null\">\r\n\r\n                                                        <span class=\"material-icons cropcls\"\r\n                                                            *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\"\r\n                                                            (click)=\"opensingleimagecropformultiple(files)\">\r\n                                                            crop\r\n                                                        </span>\r\n\r\n\r\n                                                        <img mat-card-image\r\n                                                            src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\r\n                                                    </mat-card>\r\n\r\n                                                    <div class=\"cropimagesdiv\"\r\n                                                        *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\r\n                                                        <h2> Croped Images :</h2>\r\n\r\n                                                        <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\r\n                                                            <br />\r\n                                                            <span>Croped Image (Asepect Ratio) :\r\n                                                                {{files.imagecroppedratiolabel[ci]}} </span><br>\r\n\r\n                                                            <image-cropper [imageBase64]=\"files.imageUrl\"\r\n                                                                [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\r\n                                                                [resizeToWidth]=\"128\"\r\n                                                                (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\"\r\n                                                                (imageLoaded)=\"imageLoaded()\"\r\n                                                                (cropperReady)=\"cropperReady()\"\r\n                                                                (loadImageFailed)=\"loadImageFailed()\"\r\n                                                                [imageQuality]=\"100\" [resizeToHeight]=\"300\">\r\n                                                            </image-cropper>\r\n\r\n                                                            <!-- <mat-card class=\"example-card imagecardcls\"\r\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\r\n                                                                <span>Croped Image Output : </span><br>\r\n                                                                <img class=\"croppedImagecls\"\r\n                                                                    [src]=\"files.croppedImage[ci]\" />\r\n                                                            </mat-card> -->\r\n\r\n                                                        </ng-container>\r\n                                                    </div>\r\n\r\n\r\n                                                </div>\r\n\r\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\r\n                                                    picture_as_pdf\r\n                                                </span>\r\n\r\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\r\n                                                    movie_filter\r\n                                                </span>\r\n\r\n                                                <span class=\"material-icons\"\r\n                                                    *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\r\n                                                    description\r\n                                                </span>\r\n\r\n                                                <div class=\"filenamecls\">\r\n                                                    <span class=\"fileuploadednameclass\"> {{files.name}}</span>\r\n                                                    <br />\r\n                                                    <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\r\n                                                </div>\r\n\r\n\r\n                                                <br>\r\n                                                <!-- files ++++ 22 => {{files.imagefields | json}}    -->\r\n                                                <!-- multipleImgFormData -->\r\n                                                <div class=\"filefieldsmaincls\">\r\n                                                    <ng-container class=\"descdiv\"\r\n                                                        *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\r\n\r\n                                                        <!-- fields {{fields | json}}ss -->\r\n\r\n                                                        <div class=\"filefieldscls\"\r\n                                                            *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\r\n\r\n                                                            <br>\r\n\r\n                                                            <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\r\n                                                                    <!-- <span>if imgfields ==</span> -->\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <input matInput type=\"text\"\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\r\n                                                                    <!-- <span>if imgfields ++ </span> -->\r\n\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <input matInput type=\"text\"\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n                                                            </div>\r\n\r\n                                                            <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\r\n\r\n                                                            <div *ngIf=\"val.type == 'textarea'\">\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <textarea matInput\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\r\n                                                                            [rows]='3' [cols]='30'></textarea>\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <textarea matInput\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\r\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\r\n                                                                            [rows]='3' [cols]='30'></textarea>\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n\r\n                                                            </div>\r\n\r\n                                                            <div *ngIf=\"val.type == 'number'\">\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <input type=\"number\" matInput\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\r\n                                                                    <mat-form-field class=\"example-full-width\">\r\n                                                                        <input type=\"number\" matInput\r\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\r\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                            matInput\r\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\r\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}>\r\n                                                                    </mat-form-field>\r\n                                                                </div>\r\n\r\n                                                            </div>\r\n\r\n\r\n\r\n                                                            <div *ngIf=\"val.type == 'checkbox'\">\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\r\n                                                                    <mat-checkbox\r\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                        matInput\r\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\r\n                                                                        matInput\r\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\r\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\r\n                                                                </div>\r\n\r\n                                                                <div\r\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\r\n                                                                    <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\r\n                                                                    <mat-checkbox\r\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\r\n                                                                        matInput\r\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\r\n                                                                        matInput\r\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\r\n                                                                        [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\r\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </div>\r\n\r\n                                                        <!-- </div> -->\r\n                                                    </ng-container>\r\n                                                </div>\r\n\r\n\r\n\r\n                                                <div class=\"actionbtndiv\">\r\n\r\n                                                    <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\r\n                                                        style=\"cursor: pointer;\" mat-raised-button\r\n                                                        (click)=\"uploadfilemultiple(fields,files,fi)\">\r\n                                                        Upload\r\n                                                    </mat-chip>\r\n\r\n                                                    <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\r\n                                                        *ngIf=\"files.loaded != null && files.loaded==0\"\r\n                                                        mat-raised-button\r\n                                                        (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\r\n                                                        Delete\r\n                                                    </mat-chip>\r\n\r\n                                                    <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\r\n                                                        style=\"cursor: pointer;\" mat-raised-button\r\n                                                        (click)=\"deletefilemultiple(fields,files,fi)\">\r\n                                                        Delete </mat-chip>\r\n                                                </div>\r\n\r\n                                                <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\r\n                                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\"\r\n                                                        [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\r\n                                                    </mat-progress-bar>\r\n                                                </section>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br />\r\n                                    </ng-container>\r\n                                    <div class=\"actionbtndiv2\">\r\n                                        <mat-chip class=\"uploadallfile\"\r\n                                            *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\r\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\r\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\r\n                                            (click)=\"deletefilemultipleall(fields)\">\r\n                                            Delete All\r\n                                        </mat-chip>\r\n                                    </div>\r\n\r\n                                </ng-container>\r\n\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                        <mat-error\r\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\r\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\r\n                                <span\r\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\r\n                            </ng-container>\r\n                        </mat-error>\r\n                    </div>\r\n\r\n\r\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\r\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\r\n                            [bufferValue]=\"bufferValue\">\r\n                        </mat-progress-bar>\r\n                    </section>\r\n                </div>\r\n\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n\r\n\r\n        <!-- <div class=\"aligner\">\r\n            <div id=\"drop\">Drop files here.</div>\r\n            <div id=\"list\">\r\n              <h1>Uploaded Files:</h1>\r\n            </div>\r\n          </div> -->\r\n\r\n        <!-- <label for=\"singleFile\">Upload file</label>\r\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\r\n<br>\r\n\r\n<mat-file-upload-queue #fileUploadQueue\r\n    [fileAlias]=\"'file'\"\r\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\r\n\r\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\r\n</mat-file-upload-queue> -->\r\n\r\n\r\n        <!--<mat-form-field class=\"form-element\">\r\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\r\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\r\n        {{ getErrorEmail() }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"form-element\">\r\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\r\n      <mat-error *ngIf=\"!name.valid && name.touched\">\r\n        {{ titleAlert }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"form-element\">\r\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\r\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\r\n        Required field, must be between 5 and 10 characters.\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"form-element\">\r\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\r\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\r\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\r\n        {{ getErrorPassword() }}\r\n      </mat-error>\r\n    </mat-form-field>\r\n\r\n    <div class=\"form-element\">\r\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\r\n    </div>-->\r\n\r\n        <div class=\"form-element\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\r\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\r\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\r\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\r\n\r\n            <div class=\"custombuttonscls\"\r\n                *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\r\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\r\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\"\r\n                        (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </form>\r\n</div>\r\n\r\n<ng-template #forminfo>\r\n    <div class=\"container\">\r\n        {{ post | json }}\r\n    </div>\r\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}.cropimagesdiv,.croppedImagecls,.imagecardcls{width:300px}.descdiv{margin:5px 0}.cropcls{cursor:pointer;position:absolute;right:10px;top:19px;background:#fffffff2;border-radius:3px;padding:2px}"]
                }] }
    ];
    /** @nocollapse */
    ShowformComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: ApiService },
        { type: MatSnackBar },
        { type: Router },
        { type: ElementRef }
    ]; };
    ShowformComponent.propDecorators = {
        formdata: [{ type: Input }],
        formfieldrefreshdata: [{ type: Input }],
        formfieldrefresh: [{ type: Input }],
        custombuttons: [{ type: Input }],
        externaldatavalue: [{ type: Input }],
        onFormFieldChange: [{ type: Output }]
    };
    return ShowformComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule.decorators = [
        { type: NgModule, args: [{
                    exports: [
                        A11yModule,
                        CdkStepperModule,
                        CdkTableModule,
                        CdkTreeModule,
                        DragDropModule,
                        MatAutocompleteModule,
                        MatBadgeModule,
                        MatBottomSheetModule,
                        MatButtonModule,
                        MatButtonToggleModule,
                        MatCardModule,
                        MatCheckboxModule,
                        MatChipsModule,
                        MatStepperModule,
                        MatDatepickerModule,
                        MatDialogModule,
                        MatDividerModule,
                        MatExpansionModule,
                        MatGridListModule,
                        MatIconModule,
                        MatInputModule,
                        MatListModule,
                        MatMenuModule,
                        MatNativeDateModule,
                        MatPaginatorModule,
                        MatProgressBarModule,
                        MatProgressSpinnerModule,
                        MatRadioModule,
                        MatRippleModule,
                        MatSelectModule,
                        MatSidenavModule,
                        MatSliderModule,
                        MatSlideToggleModule,
                        MatSnackBarModule,
                        MatSortModule,
                        MatTableModule,
                        MatTabsModule,
                        MatToolbarModule,
                        MatTooltipModule,
                        MatTreeModule,
                        PortalModule,
                        ScrollingModule,
                    ]
                },] }
    ];
    return DemoMaterialModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YoutubeplayerComponent = /** @class */ (function () {
    function YoutubeplayerComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(YoutubeplayerComponent.prototype, "videoid", {
        set: /**
         * @param {?} id
         * @return {?}
         */
        function (id) {
            this.id = (id) || '<no name set>';
            this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
            // console.warn(this.id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    YoutubeplayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    YoutubeplayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-youtubeplayer',
                    template: "\r\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    YoutubeplayerComponent.ctorParameters = function () { return [
        { type: DomSanitizer }
    ]; };
    YoutubeplayerComponent.propDecorators = {
        videoid: [{ type: Input }]
    };
    return YoutubeplayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CustomdataPipe = /** @class */ (function () {
    function CustomdataPipe() {
    }
    /**
     * @param {?} value
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    CustomdataPipe.prototype.transform = /**
     * @param {?} value
     * @param {?} name
     * @param {?} val
     * @return {?}
     */
    function (value, name, val) {
        // let newStr = `${before} ${value} ${after}`;
        // console.log(value,name,val,'pipe++++++++++====')
        // if (name == 'description_html') {
        //   // console.log(val.length, 'desc====')
        //   var str = val.substring(0, 200) +'....';
        //   return str;
        // } else {
        //   return val
        // }
        if (name.match(/dollar/g) == 'dollar' || name.match(/currency/g) == 'currency') {
            /** @type {?} */
            var dollar = '$' + val;
            return dollar;
        }
        else {
            return val;
        }
    };
    CustomdataPipe.decorators = [
        { type: Pipe, args: [{
                    name: 'CustomPipe'
                },] }
    ];
    return CustomdataPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PhoneFormatingDirective = /** @class */ (function () {
    function PhoneFormatingDirective(ngControl) {
        this.ngControl = ngControl;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    PhoneFormatingDirective.prototype.onModelChange = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onInputChange(event, false);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PhoneFormatingDirective.prototype.keydownBackspace = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.onInputChange(event.target.value, true);
    };
    /**
     * @param {?} event
     * @param {?} backspace
     * @return {?}
     */
    PhoneFormatingDirective.prototype.onInputChange = /**
     * @param {?} event
     * @param {?} backspace
     * @return {?}
     */
    function (event, backspace) {
        //console.log('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',event);
        if (event != null && typeof (event) != 'undefined') {
            /** @type {?} */
            var newVal = event.replace(/\D/g, '');
            if (backspace && newVal.length <= 6) {
                newVal = newVal.substring(0, newVal.length - 1);
            }
            if (newVal.length === 0) {
                // newVal = '';
                newVal = event.replace(/\D/g, '');
                // this.ngControl.valueAccessor.writeValue(newVal='');
                //console.log('length 0',newVal);
            }
            else if (newVal.length <= 3) {
                newVal = newVal.replace(/^(\d{0,3})/, '($1)');
                // console.log('length <3',newVal);
            }
            else if (newVal.length <= 6) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})/, '($1) $2');
                //  console.log('length <6',newVal);
            }
            else if (newVal.length <= 10) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
                //  console.log('length <10',newVal);
            }
            else {
                newVal = newVal.substring(0, 10);
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,4})/, '($1) $2-$3');
                //  console.log('else',newVal);
            }
            this.ngControl.valueAccessor.writeValue(newVal);
            //console.log(this.ngControl,'lll');
        }
    };
    PhoneFormatingDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[formControlName][appPhoneMask]'
                },] }
    ];
    /** @nocollapse */
    PhoneFormatingDirective.ctorParameters = function () { return [
        { type: NgControl }
    ]; };
    PhoneFormatingDirective.propDecorators = {
        onModelChange: [{ type: HostListener, args: ['ngModelChange', ['$event'],] }],
        keydownBackspace: [{ type: HostListener, args: ['keydown.backspace', ['$event'],] }]
    };
    return PhoneFormatingDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingModule = /** @class */ (function () {
    function ListingModule() {
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
    return ListingModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { ListingService, ListingComponent, Confirmdialog, BottomSheet, ModalForButtomSearch, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, ListingModule, ApiService as ɵa, CustomdataPipe as ɵc, PhoneFormatingDirective as ɵd, DemoMaterialModule as ɵe, YoutubeplayerComponent as ɵb };

//# sourceMappingURL=listing-angular7.js.map