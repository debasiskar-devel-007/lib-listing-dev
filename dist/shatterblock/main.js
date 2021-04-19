(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/listing/fesm5/listing-angular7.js":
/*!************************************************!*\
  !*** ./dist/listing/fesm5/listing-angular7.js ***!
  \************************************************/
/*! exports provided: ListingService, ListingComponent, Confirmdialog, BottomSheet, ModalForButtomSearch, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, ListingModule, ɵa, ɵc, ɵd, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingService", function() { return ListingService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Confirmdialog", function() { return Confirmdialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheet", function() { return BottomSheet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalForButtomSearch", function() { return ModalForButtomSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoPlayer", function() { return VideoPlayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageView", function() { return ImageView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowformComponent", function() { return ShowformComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingModule", function() { return ListingModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return ApiService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return CustomdataPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return DemoMaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return YoutubeplayerComponent; });
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");
/* harmony import */ var ngx_uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-uploader */ "./node_modules/ngx-uploader/fesm5/ngx-uploader.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ng2-ckeditor */ "./node_modules/ng2-ckeditor/fesm5/ng2-ckeditor.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");


























/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingService = /** @class */ (function () {
    function ListingService() {
    }
    ListingService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ListingService.ctorParameters = function () { return []; };
    /** @nocollapse */ ListingService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_23__["defineInjectable"])({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
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
        this.uploadInput = new _angular_core__WEBPACK_IMPORTED_MODULE_23__["EventEmitter"](); // input events, we use this to emit data to ngx-uploader
        this.humanizeBytes = ngx_uploader__WEBPACK_IMPORTED_MODULE_1__["humanizeBytes"];
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
        var result = this._http.get('http://ipinfo.io/?format=json&token=9797c42b93078a').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(link, source, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: source.token
            })
        };
        console.log('------ ');
        console.log('link');
        console.log(link);
        /** @type {?} */
        var result = this._http.post(link, source).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
                'Content-Type': 'application/json',
                Authorization: ''
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(endpoint, dataval, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]({
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
        var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["throwError"])(err); // Rethrow it back to component
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Injectable"] }
    ];
    /** @nocollapse */
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"] }
    ]; };
    ApiService.propDecorators = {
        uploaderInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ViewChild"], args: ['fileInput1',] }]
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
var moment = moment__WEBPACK_IMPORTED_MODULE_6__;
var ListingComponent = /** @class */ (function () {
    // searchResult$: Observable<SearchResult[]>;
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
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControl"]();
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
        this.onLiblistingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_23__["EventEmitter"]();
        this.onLiblistingButtonChange = new _angular_core__WEBPACK_IMPORTED_MODULE_23__["EventEmitter"]();
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"];
        // myForm:any;
        this.modelChanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.modelChangedserver = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.pagechanged = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        this.subscriptions = [];
        this.subscriptioncount = 0;
        this.tableFooterColumns = [];
        this.testvalue = "s1";
        this.stateGroups = this.searchListval;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_20__["NavigationStart"]: {
                    _this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_20__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_20__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_20__["NavigationError"]: {
                    _this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChanged
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            _this.filterautoval(_this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
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
            // console.log('libdataval',this.libdataval);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((/**
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"]([]);
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](data_list);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](result.results.res);
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
     * @return {?}
     */
    ListingComponent.prototype.paging = 
    // for managing pagination
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        // const lval: any = this.limitcondval;
        // console.log(this.limitcondval, 'lim val');
        if (this.limitcondval.pagecount == null)
            this.limitcondval.pagecount = 1;
        if (this.limitcondval.limit == null)
            this.limitcondval.limit = 10;
        if (this.limitcondval.limit != null && this.limitcondval.limit > 100) {
            this.limitcondval.limit = 100;
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
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](_this.result.results.res);
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
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](this.olddata);
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](_this.olddata);
                        _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](_this.olddata);
                        _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](_this.olddata);
                        _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                        _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](_this.olddata);
                        _this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_0__["SelectionModel"](true, []);
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
                    _this.onLiblistingChange.emit({ action: 'search', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, res: result.results.res.length });
                    _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableDataSource"](result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    _this.onLiblistingChange.emit({ action: 'search', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, res: result.results.res.length, flag: 'no_record' });
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'lib-listing',
                    template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    <!-- <span>dddddd</span> -->\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                                placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\"\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"></span>\n                                </span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                                </span>\n\n\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n\n                            <div class=\"button_div_custom_cls\">\n\n                                <!-- loader -->\n\n                                <section class=\"example-section example-section-button-1 \">\n                                    <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\n                                        class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\n                                        [bufferValue]=\"bufferValue \">\n                                    </mat-progress-bar>\n                                </section>\n\n                                <!-- note block -->\n                                <ng-container *ngIf=\"libdataval.notes!=null \">\n                                    <button mat-raised-button color=\"primary\" class=\"notebtncls\" matBadgeColor=\"warn\"\n                                        matBadge=\"{{row.notescount}}\" matTooltip=\"{{libdataval?.notes?.tooltip}}\"\n                                        (click)=\"opennotes(row) \">\n                                        <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                        <!-- <span class=\"notebracket1\">(</span> -->\n                                        <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                        <!-- <span class=\"notebracket2\">)</span> -->\n                                    </button>\n                                </ng-container>\n\n                                <!--custom buttions block -->\n\n                                <ng-container\n                                    *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                    <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                        <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                <!-- ss {{row['status']}} -->\n                                                <button mat-raised-button color=\"primary\"\n                                                    matTooltip=\"{{custombutton?.tooltip}}\"\n                                                    (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                        <button mat-raised-button matTooltip=\"{{custombutton?.tooltip}}\"\n                                                            color=\"primary\">{{custombutton.label}}</button>\n                                                    </a>\n                                                </ng-container>\n\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                                </ng-container>\n                                                <ng-container\n                                                    *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n                                                <ng-container\n                                                    *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n\n                                            </ng-container>\n\n                                        </section>\n\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n\n\n\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Edit\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Delete\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Preview\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Change Status\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\" matTooltip=\"Change Status\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- hide status toggle with cond-->\n                                <span\n                                    *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\n                                    class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons treeclass\" matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip}}\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                    animations: [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["trigger"])('detailExpand', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '0px', minHeight: '0' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["style"])({ height: '*' })),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_5__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                    styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}tr.example-detail-row{height:0}tr.example-element-row:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row:not(.example-expanded-row):active{background:#efefef}.example-element-row td{border-bottom-width:0}"]
                }] }
    ];
    /** @nocollapse */
    ListingComponent.ctorParameters = function () { return [
        { type: ApiService },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialog"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheet"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ComponentFactoryResolver"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ViewContainerRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ElementRef"] }
    ]; };
    ListingComponent.propDecorators = {
        onLiblistingChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Output"] }],
        onLiblistingButtonChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Output"] }],
        search_settings: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        click_to_add_ananother_page: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        limitcond: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        date_search_source_count: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        grab_link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        custombutton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        date_search_source: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        sortdata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        date_search_endpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        url: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        searchendpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        pdf_link: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        searchList: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        libdata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        datasource: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        datacollection: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        skip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        detail_datatype: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        detail_skip_array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        sourcedata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        modify_header_array: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        deleteendpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        updateendpoint: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        apiurl: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        updatetable: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        jwttoken: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        statusarr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        emailarray: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        editroute: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        preview_artistxp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        customlistenbutton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        sort: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ViewChild"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSort"],] }],
        paginator: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ViewChild"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginator"],] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'confirmdialog',
                    template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\n            {{data?.headerData?.header}}\n        </h1>\n\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\n                            <span>By:</span>{{note.notes.user}}\n                        </div>\n                        <div mat-line class=\"line-datetime\"\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\n                            {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\"\n                            (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\n                                    [innerHtml]=\"arr\"></span>\n                                <span\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\n                                    [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\n            (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: ApiService },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"] }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'bottom-sheet',
                    template: "<div class=\"bottom-sheet-header-toggle\">\n    You are about to change status of these record(s)\n\n</div>\n<mat-nav-list class=\"navlist\">\n    <a *ngFor=\"let item of data.items;\" mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n</mat-nav-list>"
                }] }
    ];
    /** @nocollapse */
    BottomSheet.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_BOTTOM_SHEET_DATA"],] }] }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'button-search-modal',
                    template: "<div class=\"bottom-sheet-header-toggle\">\n    <h2 style=\"text-align: center;\"> {{buttonSearchData.items.label}}</h2>\n</div>\n\n\n<div class=\"selecteditemcls\" *ngIf=\"selectedData.length >0\">\n    <span>Selected :</span>\n    <div class=\"navlist\" style=\"display: inline;\">\n        <mat-chip class=\"example-box\" *ngFor=\"let item of selectedData;let i=index;\">{{item.name}}\n            <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"remove(item,i)\">cancel</mat-icon>\n        </mat-chip>\n    </div>\n    <span>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByItem()\">Search\n        </button>\n    </span>\n</div>\n<br><br>\n\n<div>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading_flag == true\"></mat-progress-bar>\n</div>\n<br><br>\n\n<div class=\"searchValcls\">\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Search By Keywords</mat-label>\n        <input matInput placeholder=\"filter\" [(ngModel)]=\"searchVal\" (keyup)=\"searchByKeyword(searchVal)\" [matAutocomplete]=\"auto\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of matAutosearchData;let i = index\" [value]=\"item.name\"\n        (click)=\"chooseChipItem(item,i)\">\n            {{item.name}}\n        </mat-option>\n    </mat-autocomplete>\n\n    <!-- <span class=\"errcls\" style=\"color: brown;\" *ngIf=\"searchVal == null || searchVal == ''\">{{errmsg}}</span> -->\n    <span class='searchByKeywordcls'>\n        <span style=\"cursor: pointer;\" class=\"material-icons\" (click)=\"reset()\">\n            sync\n        </span>\n         <!-- <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByKeyword(searchVal)\">Search\n        </button> -->\n    </span>\n\n</div>\n<br>\n\n<div class=\"chipdatacls\">\n    <div style=\"display: inline;\" *ngIf=\"buttonSearchData.items?.value.length >0\">\n        <h2 style=\"text-align: center;\">OR Choose From <span class=\"material-icons\">\n                south\n            </span></h2>\n        <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n            <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of buttonSearchData.items?.value;let i =index\">\n                <span style=\"cursor: pointer;\" (click)=\"chooseChipItem(item,i)\"> {{item.name}}</span>\n            </mat-chip>\n        </mat-chip-list>\n    </div>\n    <span class='norecordcls' style=\"text-align: center;\" *ngIf=\"buttonSearchData.items?.value.length == 0\"><span\n           >No Record Found</span></span>\n</div>\n\n\n<div class=\"clrcls\">\n    <span style=\"cursor: pointer;\n    float: right;\n    margin-bottom: -6px;\" matTooltip=\"Clear\" class=\"material-icons\" (click)=\"close()\">\n        clear\n    </span>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalForButtomSearch.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DATA"],] }] },
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'videoplayer',
                    template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                }] }
    ];
    /** @nocollapse */
    VideoPlayer.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DATA"],] }] }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'image',
                    template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
                }] }
    ];
    /** @nocollapse */
    ImageView.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_16__["MAT_DIALOG_DATA"],] }] }
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SnackbarComponent.ctorParameters = function () { return [
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Inject"], args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MAT_SNACK_BAR_DATA"],] }] }
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
        this.onFormFieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_23__["EventEmitter"]();
        this.imageChangedEvent = "";
        this.croppedImage = "";
    }
    Object.defineProperty(ShowformComponent.prototype, "formdata", {
        // @ViewChild("myckeditor") ckeditor: CKEditorComponent;
        set: 
        // @ViewChild("myckeditor") ckeditor: CKEditorComponent;
        /**
         * @param {?} formdata
         * @return {?}
         */
        function (formdata) {
            this.formdataval = formdata;
            // console.log(this.formdataval);
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
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'match') {
                            this_2.formGroup.setValidators(this_2.checkPasswords);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'autorequired') {
                            this_2.formGroup.setValidators(this_2.autorequired);
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'pattern') {
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].pattern(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'maxLength') {
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].maxLength(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'min') {
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].min(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'max') {
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].max(this_2.formdataval.fields[n].validations[v].value));
                        }
                        if (this_2.formdataval.fields[n].validations[v].rule == 'minLength') {
                            temvalidationrule.push(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].minLength(this_2.formdataval.fields[n].validations[v].value));
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
                        this_2.formGroup.addControl(this_2.formdataval.fields[n].name + '__' + j, new _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControl"](tchvar, temvalidationrule));
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
                    this_2.formGroup.addControl(this_2.formdataval.fields[n].name, new _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormControl"]({ value: temcontrolarr[0], disabled: this_2.formdataval.fields[n].disabled }, temvalidationrule));
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
                _this.formGroup.get('name').setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].minLength(3)]);
                _this.titleAlert = 'You need to specify at least 3 characters';
            }
            else {
                _this.formGroup.get('name').setValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_17__["Validators"].required);
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
        return new rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"]((/**
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'lib-showform',
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                        <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\"\n                                [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n                        <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n\n\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                create\n                                            </span>\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                clear\n                                            </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">Click or Drop files here .\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                 <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\" style=\"display:none\"  (change)=\"handleDrop($event)\">\n                                </ng-container>\n\n                                <ng-container *ngIf=\"fields.multiple == null \">\n                                 <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\" multiple  (change)=\"handleDrop($event)\">\n                                </ng-container>\n                            </div>\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <!-- <span>{{fields | json}}</span> -->\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n\n\n                                        <div class=\"imagedivcls\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                            <div class=\"divimagecardcls\">\n                                                <mat-card class=\"example-card imagecardcls\"\n                                                    *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                    <img mat-card-image [src]=\"fields.imageUrl\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"divimagecardcls\"\n                                                *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                <mat-card class=\"example-card imagecardcls\">\n\n                                                    <span class=\"material-icons cropcls\"\n                                                        *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\"\n                                                        (click)=\"opensingleimagecrop(fields)\">\n                                                        crop\n                                                    </span>\n\n                                                    <img mat-card-image\n                                                        src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"cropimagesdiv\"\n                                                *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                <h2> Croped Images :</h2>\n\n                                                <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\"\n                                                    class=\"image-cropper-cls\">\n                                                    <br />\n                                                    <span>Croped Image (Asepect Ratio) :\n                                                        {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                    <image-cropper [imageBase64]=\"fields.imageUrl\"\n                                                        [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                        (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\"\n                                                        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                        (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\"\n                                                        [resizeToHeight]=\"300\"></image-cropper>\n\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                        <div class=\"filesdivcls\">\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                description\n                                            </span>\n\n                                            <span\n                                                class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                            <br />\n                                            <span\n                                                class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                        </div>\n\n\n                                        <div class=\"filefieldsmaincls\">\n                                            <ng-container class=\"descdiv\"\n                                                *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                <div class=\"filefieldscls\">\n                                                    <div class=\"filefields\"\n                                                        *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                name=\"{{item.name}}\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'textarea'\">\n                                                            <textarea matInput name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                placeholder=\"{{item.label}}\" [rows]='3'\n                                                                [cols]='30'></textarea>\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'number'\">\n                                                            <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <div *ngIf=\"item.type == 'checkbox'\">\n                                                            <mat-checkbox name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                            </mat-checkbox>\n                                                            &nbsp; {{item.label}}\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </ng-container>\n                                        </div>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button\n                                                (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">Delete\n                                            </mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\"\n                                                mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <!-- {{files | json}} ++ -->\n\n                                            <div *ngIf=\"files.loadfile != null && files.loadfile==1\"\n                                                class=\"filesdivcls\">\n\n                                                <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                <span *ngIf=\"files.uploaded==1\"\n                                                    class=\"material-icons fileuploadcompleteicon\">\n                                                    cloud_done\n                                                </span>\n\n                                                <div class=\"divimagecardcls\"\n                                                    *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                        <img mat-card-image [src]=\"files.imageUrl\">\n                                                    </mat-card>\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl == null\">\n\n                                                        <span class=\"material-icons cropcls\"\n                                                            *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\"\n                                                            (click)=\"opensingleimagecropformultiple(files)\">\n                                                            crop\n                                                        </span>\n\n\n                                                        <img mat-card-image\n                                                            src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                    </mat-card>\n\n                                                    <div class=\"cropimagesdiv\"\n                                                        *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                        <h2> Croped Images :</h2>\n\n                                                        <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                            <br />\n                                                            <span>Croped Image (Asepect Ratio) :\n                                                                {{files.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                            <image-cropper [imageBase64]=\"files.imageUrl\"\n                                                                [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                                [resizeToWidth]=\"128\"\n                                                                (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\"\n                                                                (imageLoaded)=\"imageLoaded()\"\n                                                                (cropperReady)=\"cropperReady()\"\n                                                                (loadImageFailed)=\"loadImageFailed()\"\n                                                                [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                            </image-cropper>\n\n                                                            <!-- <mat-card class=\"example-card imagecardcls\"\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\n                                                                <span>Croped Image Output : </span><br>\n                                                                <img class=\"croppedImagecls\"\n                                                                    [src]=\"files.croppedImage[ci]\" />\n                                                            </mat-card> -->\n\n                                                        </ng-container>\n                                                    </div>\n\n\n                                                </div>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                    picture_as_pdf\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                    movie_filter\n                                                </span>\n\n                                                <span class=\"material-icons\"\n                                                    *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                    description\n                                                </span>\n\n                                                <div class=\"filenamecls\">\n                                                    <span class=\"fileuploadednameclass\"> {{files.name}}</span>\n                                                    <br />\n                                                    <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\n                                                </div>\n\n\n                                                <br>\n                                                <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                <!-- multipleImgFormData -->\n                                                <div class=\"filefieldsmaincls\">\n                                                    <ng-container class=\"descdiv\"\n                                                        *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                        <!-- fields {{fields | json}}ss -->\n\n                                                        <div class=\"filefieldscls\"\n                                                            *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                            <br>\n\n                                                            <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <!-- <span>if imgfields ==</span> -->\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- <span>if imgfields ++ </span> -->\n\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n                                                            <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                            <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n\n                                                            </div>\n\n                                                            <div *ngIf=\"val.type == 'number'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n\n\n                                                            <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                        [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <!-- </div> -->\n                                                    </ng-container>\n                                                </div>\n\n\n\n                                                <div class=\"actionbtndiv\">\n\n                                                    <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                        Upload\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                        *ngIf=\"files.loaded != null && files.loaded==0\"\n                                                        mat-raised-button\n                                                        (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                        Delete\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                        Delete </mat-chip>\n                                                </div>\n\n                                                <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\"\n                                                        [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                    </mat-progress-bar>\n                                                </section>\n                                            </div>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n\n            <div class=\"custombuttonscls\"\n                *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\"\n                        (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}.cropimagesdiv,.croppedImagecls,.imagecardcls{width:300px}.descdiv{margin:5px 0}.cropcls{cursor:pointer;position:absolute;right:10px;top:19px;background:#fffffff2;border-radius:3px;padding:2px}"]
                }] }
    ];
    /** @nocollapse */
    ShowformComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormBuilder"] },
        { type: ApiService },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_20__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["ElementRef"] }
    ]; };
    ShowformComponent.propDecorators = {
        formdata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        formfieldrefreshdata: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        formfieldrefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        custombuttons: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        externaldatavalue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }],
        onFormFieldChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Output"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["NgModule"], args: [{
                    exports: [
                        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["A11yModule"],
                        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_13__["CdkStepperModule"],
                        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_14__["CdkTableModule"],
                        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_15__["CdkTreeModule"],
                        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_10__["DragDropModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatAutocompleteModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBadgeModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatBottomSheetModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCardModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatStepperModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDatepickerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDialogModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatDividerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatExpansionModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatGridListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatIconModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatInputModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatListModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatMenuModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatProgressSpinnerModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRadioModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatRippleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSidenavModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSliderModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSnackBarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatToolbarModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTreeModule"],
                        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_11__["PortalModule"],
                        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_12__["ScrollingModule"],
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Component"], args: [{
                    selector: 'lib-youtubeplayer',
                    template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    YoutubeplayerComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_21__["DomSanitizer"] }
    ]; };
    YoutubeplayerComponent.propDecorators = {
        videoid: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Input"] }]
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
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["Pipe"], args: [{
                    name: 'CustomPipe'
                },] }
    ];
    return CustomdataPipe;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ListingModule = /** @class */ (function () {
    function ListingModule() {
    }
    ListingModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_23__["NgModule"], args: [{
                    declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"],
                        // BrowserModule, BrowserAnimationsModule,
                        DemoMaterialModule,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
                        _angular_router__WEBPACK_IMPORTED_MODULE_20__["RouterModule"],
                        ngx_moment__WEBPACK_IMPORTED_MODULE_19__["MomentModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_22__["CKEditorModule"],
                        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_24__["ImageCropperModule"]
                    ],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["CUSTOM_ELEMENTS_SCHEMA"]],
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



//# sourceMappingURL=listing-angular7.js.map

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "./node_modules/moment/locale/af.js",
	"./af.js": "./node_modules/moment/locale/af.js",
	"./ar": "./node_modules/moment/locale/ar.js",
	"./ar-dz": "./node_modules/moment/locale/ar-dz.js",
	"./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
	"./ar-kw": "./node_modules/moment/locale/ar-kw.js",
	"./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
	"./ar-ly": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
	"./ar-ma": "./node_modules/moment/locale/ar-ma.js",
	"./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
	"./ar-sa": "./node_modules/moment/locale/ar-sa.js",
	"./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
	"./ar-tn": "./node_modules/moment/locale/ar-tn.js",
	"./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
	"./ar.js": "./node_modules/moment/locale/ar.js",
	"./az": "./node_modules/moment/locale/az.js",
	"./az.js": "./node_modules/moment/locale/az.js",
	"./be": "./node_modules/moment/locale/be.js",
	"./be.js": "./node_modules/moment/locale/be.js",
	"./bg": "./node_modules/moment/locale/bg.js",
	"./bg.js": "./node_modules/moment/locale/bg.js",
	"./bm": "./node_modules/moment/locale/bm.js",
	"./bm.js": "./node_modules/moment/locale/bm.js",
	"./bn": "./node_modules/moment/locale/bn.js",
	"./bn.js": "./node_modules/moment/locale/bn.js",
	"./bo": "./node_modules/moment/locale/bo.js",
	"./bo.js": "./node_modules/moment/locale/bo.js",
	"./br": "./node_modules/moment/locale/br.js",
	"./br.js": "./node_modules/moment/locale/br.js",
	"./bs": "./node_modules/moment/locale/bs.js",
	"./bs.js": "./node_modules/moment/locale/bs.js",
	"./ca": "./node_modules/moment/locale/ca.js",
	"./ca.js": "./node_modules/moment/locale/ca.js",
	"./cs": "./node_modules/moment/locale/cs.js",
	"./cs.js": "./node_modules/moment/locale/cs.js",
	"./cv": "./node_modules/moment/locale/cv.js",
	"./cv.js": "./node_modules/moment/locale/cv.js",
	"./cy": "./node_modules/moment/locale/cy.js",
	"./cy.js": "./node_modules/moment/locale/cy.js",
	"./da": "./node_modules/moment/locale/da.js",
	"./da.js": "./node_modules/moment/locale/da.js",
	"./de": "./node_modules/moment/locale/de.js",
	"./de-at": "./node_modules/moment/locale/de-at.js",
	"./de-at.js": "./node_modules/moment/locale/de-at.js",
	"./de-ch": "./node_modules/moment/locale/de-ch.js",
	"./de-ch.js": "./node_modules/moment/locale/de-ch.js",
	"./de.js": "./node_modules/moment/locale/de.js",
	"./dv": "./node_modules/moment/locale/dv.js",
	"./dv.js": "./node_modules/moment/locale/dv.js",
	"./el": "./node_modules/moment/locale/el.js",
	"./el.js": "./node_modules/moment/locale/el.js",
	"./en-SG": "./node_modules/moment/locale/en-SG.js",
	"./en-SG.js": "./node_modules/moment/locale/en-SG.js",
	"./en-au": "./node_modules/moment/locale/en-au.js",
	"./en-au.js": "./node_modules/moment/locale/en-au.js",
	"./en-ca": "./node_modules/moment/locale/en-ca.js",
	"./en-ca.js": "./node_modules/moment/locale/en-ca.js",
	"./en-gb": "./node_modules/moment/locale/en-gb.js",
	"./en-gb.js": "./node_modules/moment/locale/en-gb.js",
	"./en-ie": "./node_modules/moment/locale/en-ie.js",
	"./en-ie.js": "./node_modules/moment/locale/en-ie.js",
	"./en-il": "./node_modules/moment/locale/en-il.js",
	"./en-il.js": "./node_modules/moment/locale/en-il.js",
	"./en-nz": "./node_modules/moment/locale/en-nz.js",
	"./en-nz.js": "./node_modules/moment/locale/en-nz.js",
	"./eo": "./node_modules/moment/locale/eo.js",
	"./eo.js": "./node_modules/moment/locale/eo.js",
	"./es": "./node_modules/moment/locale/es.js",
	"./es-do": "./node_modules/moment/locale/es-do.js",
	"./es-do.js": "./node_modules/moment/locale/es-do.js",
	"./es-us": "./node_modules/moment/locale/es-us.js",
	"./es-us.js": "./node_modules/moment/locale/es-us.js",
	"./es.js": "./node_modules/moment/locale/es.js",
	"./et": "./node_modules/moment/locale/et.js",
	"./et.js": "./node_modules/moment/locale/et.js",
	"./eu": "./node_modules/moment/locale/eu.js",
	"./eu.js": "./node_modules/moment/locale/eu.js",
	"./fa": "./node_modules/moment/locale/fa.js",
	"./fa.js": "./node_modules/moment/locale/fa.js",
	"./fi": "./node_modules/moment/locale/fi.js",
	"./fi.js": "./node_modules/moment/locale/fi.js",
	"./fo": "./node_modules/moment/locale/fo.js",
	"./fo.js": "./node_modules/moment/locale/fo.js",
	"./fr": "./node_modules/moment/locale/fr.js",
	"./fr-ca": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
	"./fr-ch": "./node_modules/moment/locale/fr-ch.js",
	"./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
	"./fr.js": "./node_modules/moment/locale/fr.js",
	"./fy": "./node_modules/moment/locale/fy.js",
	"./fy.js": "./node_modules/moment/locale/fy.js",
	"./ga": "./node_modules/moment/locale/ga.js",
	"./ga.js": "./node_modules/moment/locale/ga.js",
	"./gd": "./node_modules/moment/locale/gd.js",
	"./gd.js": "./node_modules/moment/locale/gd.js",
	"./gl": "./node_modules/moment/locale/gl.js",
	"./gl.js": "./node_modules/moment/locale/gl.js",
	"./gom-latn": "./node_modules/moment/locale/gom-latn.js",
	"./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
	"./gu": "./node_modules/moment/locale/gu.js",
	"./gu.js": "./node_modules/moment/locale/gu.js",
	"./he": "./node_modules/moment/locale/he.js",
	"./he.js": "./node_modules/moment/locale/he.js",
	"./hi": "./node_modules/moment/locale/hi.js",
	"./hi.js": "./node_modules/moment/locale/hi.js",
	"./hr": "./node_modules/moment/locale/hr.js",
	"./hr.js": "./node_modules/moment/locale/hr.js",
	"./hu": "./node_modules/moment/locale/hu.js",
	"./hu.js": "./node_modules/moment/locale/hu.js",
	"./hy-am": "./node_modules/moment/locale/hy-am.js",
	"./hy-am.js": "./node_modules/moment/locale/hy-am.js",
	"./id": "./node_modules/moment/locale/id.js",
	"./id.js": "./node_modules/moment/locale/id.js",
	"./is": "./node_modules/moment/locale/is.js",
	"./is.js": "./node_modules/moment/locale/is.js",
	"./it": "./node_modules/moment/locale/it.js",
	"./it-ch": "./node_modules/moment/locale/it-ch.js",
	"./it-ch.js": "./node_modules/moment/locale/it-ch.js",
	"./it.js": "./node_modules/moment/locale/it.js",
	"./ja": "./node_modules/moment/locale/ja.js",
	"./ja.js": "./node_modules/moment/locale/ja.js",
	"./jv": "./node_modules/moment/locale/jv.js",
	"./jv.js": "./node_modules/moment/locale/jv.js",
	"./ka": "./node_modules/moment/locale/ka.js",
	"./ka.js": "./node_modules/moment/locale/ka.js",
	"./kk": "./node_modules/moment/locale/kk.js",
	"./kk.js": "./node_modules/moment/locale/kk.js",
	"./km": "./node_modules/moment/locale/km.js",
	"./km.js": "./node_modules/moment/locale/km.js",
	"./kn": "./node_modules/moment/locale/kn.js",
	"./kn.js": "./node_modules/moment/locale/kn.js",
	"./ko": "./node_modules/moment/locale/ko.js",
	"./ko.js": "./node_modules/moment/locale/ko.js",
	"./ku": "./node_modules/moment/locale/ku.js",
	"./ku.js": "./node_modules/moment/locale/ku.js",
	"./ky": "./node_modules/moment/locale/ky.js",
	"./ky.js": "./node_modules/moment/locale/ky.js",
	"./lb": "./node_modules/moment/locale/lb.js",
	"./lb.js": "./node_modules/moment/locale/lb.js",
	"./lo": "./node_modules/moment/locale/lo.js",
	"./lo.js": "./node_modules/moment/locale/lo.js",
	"./lt": "./node_modules/moment/locale/lt.js",
	"./lt.js": "./node_modules/moment/locale/lt.js",
	"./lv": "./node_modules/moment/locale/lv.js",
	"./lv.js": "./node_modules/moment/locale/lv.js",
	"./me": "./node_modules/moment/locale/me.js",
	"./me.js": "./node_modules/moment/locale/me.js",
	"./mi": "./node_modules/moment/locale/mi.js",
	"./mi.js": "./node_modules/moment/locale/mi.js",
	"./mk": "./node_modules/moment/locale/mk.js",
	"./mk.js": "./node_modules/moment/locale/mk.js",
	"./ml": "./node_modules/moment/locale/ml.js",
	"./ml.js": "./node_modules/moment/locale/ml.js",
	"./mn": "./node_modules/moment/locale/mn.js",
	"./mn.js": "./node_modules/moment/locale/mn.js",
	"./mr": "./node_modules/moment/locale/mr.js",
	"./mr.js": "./node_modules/moment/locale/mr.js",
	"./ms": "./node_modules/moment/locale/ms.js",
	"./ms-my": "./node_modules/moment/locale/ms-my.js",
	"./ms-my.js": "./node_modules/moment/locale/ms-my.js",
	"./ms.js": "./node_modules/moment/locale/ms.js",
	"./mt": "./node_modules/moment/locale/mt.js",
	"./mt.js": "./node_modules/moment/locale/mt.js",
	"./my": "./node_modules/moment/locale/my.js",
	"./my.js": "./node_modules/moment/locale/my.js",
	"./nb": "./node_modules/moment/locale/nb.js",
	"./nb.js": "./node_modules/moment/locale/nb.js",
	"./ne": "./node_modules/moment/locale/ne.js",
	"./ne.js": "./node_modules/moment/locale/ne.js",
	"./nl": "./node_modules/moment/locale/nl.js",
	"./nl-be": "./node_modules/moment/locale/nl-be.js",
	"./nl-be.js": "./node_modules/moment/locale/nl-be.js",
	"./nl.js": "./node_modules/moment/locale/nl.js",
	"./nn": "./node_modules/moment/locale/nn.js",
	"./nn.js": "./node_modules/moment/locale/nn.js",
	"./pa-in": "./node_modules/moment/locale/pa-in.js",
	"./pa-in.js": "./node_modules/moment/locale/pa-in.js",
	"./pl": "./node_modules/moment/locale/pl.js",
	"./pl.js": "./node_modules/moment/locale/pl.js",
	"./pt": "./node_modules/moment/locale/pt.js",
	"./pt-br": "./node_modules/moment/locale/pt-br.js",
	"./pt-br.js": "./node_modules/moment/locale/pt-br.js",
	"./pt.js": "./node_modules/moment/locale/pt.js",
	"./ro": "./node_modules/moment/locale/ro.js",
	"./ro.js": "./node_modules/moment/locale/ro.js",
	"./ru": "./node_modules/moment/locale/ru.js",
	"./ru.js": "./node_modules/moment/locale/ru.js",
	"./sd": "./node_modules/moment/locale/sd.js",
	"./sd.js": "./node_modules/moment/locale/sd.js",
	"./se": "./node_modules/moment/locale/se.js",
	"./se.js": "./node_modules/moment/locale/se.js",
	"./si": "./node_modules/moment/locale/si.js",
	"./si.js": "./node_modules/moment/locale/si.js",
	"./sk": "./node_modules/moment/locale/sk.js",
	"./sk.js": "./node_modules/moment/locale/sk.js",
	"./sl": "./node_modules/moment/locale/sl.js",
	"./sl.js": "./node_modules/moment/locale/sl.js",
	"./sq": "./node_modules/moment/locale/sq.js",
	"./sq.js": "./node_modules/moment/locale/sq.js",
	"./sr": "./node_modules/moment/locale/sr.js",
	"./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
	"./sr.js": "./node_modules/moment/locale/sr.js",
	"./ss": "./node_modules/moment/locale/ss.js",
	"./ss.js": "./node_modules/moment/locale/ss.js",
	"./sv": "./node_modules/moment/locale/sv.js",
	"./sv.js": "./node_modules/moment/locale/sv.js",
	"./sw": "./node_modules/moment/locale/sw.js",
	"./sw.js": "./node_modules/moment/locale/sw.js",
	"./ta": "./node_modules/moment/locale/ta.js",
	"./ta.js": "./node_modules/moment/locale/ta.js",
	"./te": "./node_modules/moment/locale/te.js",
	"./te.js": "./node_modules/moment/locale/te.js",
	"./tet": "./node_modules/moment/locale/tet.js",
	"./tet.js": "./node_modules/moment/locale/tet.js",
	"./tg": "./node_modules/moment/locale/tg.js",
	"./tg.js": "./node_modules/moment/locale/tg.js",
	"./th": "./node_modules/moment/locale/th.js",
	"./th.js": "./node_modules/moment/locale/th.js",
	"./tl-ph": "./node_modules/moment/locale/tl-ph.js",
	"./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
	"./tlh": "./node_modules/moment/locale/tlh.js",
	"./tlh.js": "./node_modules/moment/locale/tlh.js",
	"./tr": "./node_modules/moment/locale/tr.js",
	"./tr.js": "./node_modules/moment/locale/tr.js",
	"./tzl": "./node_modules/moment/locale/tzl.js",
	"./tzl.js": "./node_modules/moment/locale/tzl.js",
	"./tzm": "./node_modules/moment/locale/tzm.js",
	"./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
	"./tzm.js": "./node_modules/moment/locale/tzm.js",
	"./ug-cn": "./node_modules/moment/locale/ug-cn.js",
	"./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
	"./uk": "./node_modules/moment/locale/uk.js",
	"./uk.js": "./node_modules/moment/locale/uk.js",
	"./ur": "./node_modules/moment/locale/ur.js",
	"./ur.js": "./node_modules/moment/locale/ur.js",
	"./uz": "./node_modules/moment/locale/uz.js",
	"./uz-latn": "./node_modules/moment/locale/uz-latn.js",
	"./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
	"./uz.js": "./node_modules/moment/locale/uz.js",
	"./vi": "./node_modules/moment/locale/vi.js",
	"./vi.js": "./node_modules/moment/locale/vi.js",
	"./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
	"./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
	"./yo": "./node_modules/moment/locale/yo.js",
	"./yo.js": "./node_modules/moment/locale/yo.js",
	"./zh-cn": "./node_modules/moment/locale/zh-cn.js",
	"./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
	"./zh-hk": "./node_modules/moment/locale/zh-hk.js",
	"./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
	"./zh-tw": "./node_modules/moment/locale/zh-tw.js",
	"./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./projects/listing/src/lib/components/button/button.component.ts":
/*!************************************************************************!*\
  !*** ./projects/listing/src/lib/components/button/button.component.ts ***!
  \************************************************************************/
/*! exports provided: ButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonComponent", function() { return ButtonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var ButtonComponent = /** @class */ (function () {
    function ButtonComponent() {
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    ButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-button',
            template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<button type=\"submit\" mat-raised-button color=\"primary\" class=\"submit_button\">{{field.label}}</button>\n</div>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ButtonComponent);
    return ButtonComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/checkbox/checkbox.component.ts":
/*!****************************************************************************!*\
  !*** ./projects/listing/src/lib/components/checkbox/checkbox.component.ts ***!
  \****************************************************************************/
/*! exports provided: CheckboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return CheckboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var CheckboxComponent = /** @class */ (function () {
    function CheckboxComponent() {
    }
    CheckboxComponent.prototype.ngOnInit = function () { };
    CheckboxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkbox',
            template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\" >\n<mat-checkbox [formControlName]=\"field.name\">{{field.label}}</mat-checkbox>\n</div>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CheckboxComponent);
    return CheckboxComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/date/date.component.ts":
/*!********************************************************************!*\
  !*** ./projects/listing/src/lib/components/date/date.component.ts ***!
  \********************************************************************/
/*! exports provided: DateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DateComponent", function() { return DateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var DateComponent = /** @class */ (function () {
    function DateComponent() {
    }
    DateComponent.prototype.ngOnInit = function () { };
    DateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-date',
            template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<input matInput [matDatepicker]=\"picker\" [formControlName]=\"field.name\" [placeholder]=\"field.label\">\n<mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n<mat-datepicker #picker></mat-datepicker>\n<mat-hint></mat-hint>\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DateComponent);
    return DateComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/dynamic-field/dynamic-field.directive.ts":
/*!**************************************************************************************!*\
  !*** ./projects/listing/src/lib/components/dynamic-field/dynamic-field.directive.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicFieldDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFieldDirective", function() { return DynamicFieldDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _input_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input/input.component */ "./projects/listing/src/lib/components/input/input.component.ts");
/* harmony import */ var _button_button_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../button/button.component */ "./projects/listing/src/lib/components/button/button.component.ts");
/* harmony import */ var _select_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../select/select.component */ "./projects/listing/src/lib/components/select/select.component.ts");
/* harmony import */ var _date_date_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../date/date.component */ "./projects/listing/src/lib/components/date/date.component.ts");
/* harmony import */ var _radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../radiobutton/radiobutton.component */ "./projects/listing/src/lib/components/radiobutton/radiobutton.component.ts");
/* harmony import */ var _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../checkbox/checkbox.component */ "./projects/listing/src/lib/components/checkbox/checkbox.component.ts");

/**
 * Created by debasiskar on 17/04/19.
 */








var componentMapper = {
    input: _input_input_component__WEBPACK_IMPORTED_MODULE_3__["InputComponent"],
    button: _button_button_component__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"],
    select: _select_select_component__WEBPACK_IMPORTED_MODULE_5__["SelectComponent"],
    date: _date_date_component__WEBPACK_IMPORTED_MODULE_6__["DateComponent"],
    radiobutton: _radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_7__["RadiobuttonComponent"],
    checkbox: _checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_8__["CheckboxComponent"]
};
var DynamicFieldDirective = /** @class */ (function () {
    function DynamicFieldDirective(resolver, container) {
        this.resolver = resolver;
        this.container = container;
    }
    DynamicFieldDirective.prototype.ngOnInit = function () {
        var factory = this.resolver.resolveComponentFactory(componentMapper[this.field.type]);
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicFieldDirective.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DynamicFieldDirective.prototype, "group", void 0);
    DynamicFieldDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dynamicField]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], DynamicFieldDirective);
    return DynamicFieldDirective;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/input/input.component.ts":
/*!**********************************************************************!*\
  !*** ./projects/listing/src/lib/components/input/input.component.ts ***!
  \**********************************************************************/
/*! exports provided: InputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputComponent", function() { return InputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var InputComponent = /** @class */ (function () {
    function InputComponent() {
    }
    InputComponent.prototype.ngOnInit = function () { };
    InputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-input',
            template: "\n<mat-form-field class=\"demo-full-width\" [formGroup]=\"group\">\n<input matInput [formControlName]=\"field.name\" [placeholder]=\"field.label\" [type]=\"field.inputType\">\n<ng-container *ngFor=\"let validation of field.validations;\" ngProjectAs=\"mat-error\">\n<mat-error *ngIf=\"group.get(field.name).hasError(validation.name)\">{{validation.message}}</mat-error>\n</ng-container>\n</mat-form-field>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InputComponent);
    return InputComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/radiobutton/radiobutton.component.ts":
/*!**********************************************************************************!*\
  !*** ./projects/listing/src/lib/components/radiobutton/radiobutton.component.ts ***!
  \**********************************************************************************/
/*! exports provided: RadiobuttonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiobuttonComponent", function() { return RadiobuttonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var RadiobuttonComponent = /** @class */ (function () {
    function RadiobuttonComponent() {
    }
    RadiobuttonComponent.prototype.ngOnInit = function () { };
    RadiobuttonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-radiobutton',
            template: "\n<div class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<label class=\"radio-label-padding\">{{field.label}}:</label>\n<mat-radio-group [formControlName]=\"field.name\">\n<mat-radio-button *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-radio-button>\n</mat-radio-group>\n</div>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RadiobuttonComponent);
    return RadiobuttonComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/components/select/select.component.ts":
/*!************************************************************************!*\
  !*** ./projects/listing/src/lib/components/select/select.component.ts ***!
  \************************************************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 17/04/19.
 */

var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
    }
    SelectComponent.prototype.ngOnInit = function () { };
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-select',
            template: "\n<mat-form-field class=\"demo-full-width margin-top\" [formGroup]=\"group\">\n<mat-select [placeholder]=\"field.label\" [formControlName]=\"field.name\">\n<mat-option *ngFor=\"let item of field.options\" [value]=\"item\">{{item}}</mat-option>\n</mat-select>\n</mat-form-field>\n"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/atoms/checkbox.ts":
/*!*************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/atoms/checkbox.ts ***!
  \*************************************************************************/
/*! exports provided: CheckBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckBoxComponent", function() { return CheckBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/**
 * Created by debasiskar on 16/04/19.
 */


var CheckBoxComponent = /** @class */ (function () {
    function CheckBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(CheckBoxComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CheckBoxComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CheckBoxComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CheckBoxComponent.prototype, "form", void 0);
    CheckBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'checkbox',
            template: "\n      <div [formGroup]=\"form\">\n        <div [formGroupName]=\"field.name\" >\n          <div *ngFor=\"let opt of field.options\" class=\"form-check form-check\">\n          <label class=\"form-check-label\">\n             <input [formControlName]=\"opt.key\" class=\"form-check-input\" type=\"checkbox\" id=\"inlineCheckbox1\" value=\"option1\" />\n             {{opt.label}}</label>\n          </div>\n        </div>\n\n      </div>\n    "
        })
    ], CheckBoxComponent);
    return CheckBoxComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/atoms/dropdown.ts":
/*!*************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/atoms/dropdown.ts ***!
  \*************************************************************************/
/*! exports provided: DropDownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDownComponent", function() { return DropDownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/**
 * Created by debasiskar on 16/04/19.
 */


var DropDownComponent = /** @class */ (function () {
    function DropDownComponent() {
        this.field = {};
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropDownComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], DropDownComponent.prototype, "form", void 0);
    DropDownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dropdown',
            template: "\n      <div [formGroup]=\"form\">\n        <select class=\"form-control\" [id]=\"field.name\" [formControlName]=\"field.name\">\n          <option *ngFor=\"let opt of field.options\" [value]=\"opt.key\">{{opt.label}}</option>\n        </select>\n      </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropDownComponent);
    return DropDownComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/atoms/file.ts":
/*!*********************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/atoms/file.ts ***!
  \*********************************************************************/
/*! exports provided: FileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileComponent", function() { return FileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/**
 * Created by debasiskar on 16/04/19.
 */


// text,email,tel,textarea,password,
var FileComponent = /** @class */ (function () {
    function FileComponent() {
        this.field = {};
    }
    Object.defineProperty(FileComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    FileComponent.prototype.ngOnChange = function () {
        console.log(this.field.value);
        // this.field.value.
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FileComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], FileComponent.prototype, "form", void 0);
    FileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'file',
            template: "\n      <div [formGroup]=\"form\">\n        <div *ngIf=\"!field.value\" class=\"drop-container dropzone\" dropZone (hovered)=\"toggleHover($event)\"\n          (dropped)=\"field.onUpload($event)\" [class.hovering]=\"isHovering\">\n          <p class=\"m-0\">\n            Drag a file here or\n            <label class=\"upload-button\">\n              <input type=\"file\" multiple=\"\" (change)=\"field.onUpload($event.target.files)\"> browse\n            </label>\n            to upload.\n          </p>\n        </div>\n        <div *ngIf=\"field.value\">\n          <!-- <button type=\"button\" class=\"btn btn-primary\">Change</button> -->\n          <div class=\"card\">\n            <img class=\"card-img-top\" [src]=\"field.value\">\n          </div>\n        </div>\n      </div>\n    ",
            styles: ["\n      .drop-container {\n        background: #fff;\n        border-radius: 6px;\n        height: 150px;\n        width: 100%;\n        box-shadow: 1px 2px 20px hsla(0,0%,4%,.1);\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        border: 2px dashed #c0c4c7;\n      }\n      p {\n        font-size: 16px;\n        font-weight: 400;\n        color: #c0c4c7;\n      }\n      .upload-button {\n        display: inline-block;\n        border: none;\n        outline: none;\n        cursor: pointer;\n        color: #5754a3;\n      }\n      .upload-button input {\n        display: none;\n      }\n      .dropzone {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        flex-direction: column;\n        border-radius: 5px;\n        background: white;\n        margin: 10px 0;\n      }\n      .dropzone.hovering {\n          border: 2px solid #f16624;\n          color: #dadada !important;\n      }\n      progress::-webkit-progress-value {\n        transition: width 0.1s ease;\n      }\n      "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FileComponent);
    return FileComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/atoms/radio.ts":
/*!**********************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/atoms/radio.ts ***!
  \**********************************************************************/
/*! exports provided: RadioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadioComponent", function() { return RadioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/**
 * Created by debasiskar on 16/04/19.
 */


var RadioComponent = /** @class */ (function () {
    function RadioComponent() {
        this.field = {};
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RadioComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], RadioComponent.prototype, "form", void 0);
    RadioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'radio',
            template: "\n      <div [formGroup]=\"form\">\n        <div class=\"form-check\" *ngFor=\"let opt of field.options\">\n          <input class=\"form-check-input\" type=\"radio\" [value]=\"opt.key\" >\n          <label class=\"form-check-label\">\n            {{opt.label}}\n          </label>\n        </div>\n      </div>\n    "
        })
    ], RadioComponent);
    return RadioComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/atoms/textbox.ts":
/*!************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/atoms/textbox.ts ***!
  \************************************************************************/
/*! exports provided: TextBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextBoxComponent", function() { return TextBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");

/**
 * Created by debasiskar on 16/04/19.
 */


// text,email,tel,textarea,password,
var TextBoxComponent = /** @class */ (function () {
    function TextBoxComponent() {
        this.field = {};
    }
    Object.defineProperty(TextBoxComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextBoxComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TextBoxComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], TextBoxComponent.prototype, "form", void 0);
    TextBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'textbox',
            template: "\n      <div [formGroup]=\"form\">\n        <input matInput *ngIf=\"!field.multiline\" [attr.type]=\"field.type\" class=\"form-control\"  [id]=\"field.name\" [name]=\"field.name\" [formControlName]=\"field.name\">\n        <textarea *ngIf=\"field.multiline\" [class.is-invalid]=\"isDirty && !isValid\" [formControlName]=\"field.name\" [id]=\"field.name\"\n        rows=\"9\" class=\"form-control\" [placeholder]=\"field.placeholder\"></textarea>\n      </div>\n    "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextBoxComponent);
    return TextBoxComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.component.ts":
/*!*****************************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: DynamicFormBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormBuilderComponent", function() { return DynamicFormBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DynamicFormBuilderComponent = /** @class */ (function () {
    function DynamicFormBuilderComponent() {
        this.onSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fields = [];
    }
    DynamicFormBuilderComponent.prototype.ngOnInit = function () {
        var fieldsCtrls = {};
        for (var _i = 0, _a = this.fields; _i < _a.length; _i++) {
            var f = _a[_i];
            if (f.type != 'checkbox') {
                fieldsCtrls[f.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](f.value || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required);
            }
            else {
                var opts = {};
                for (var _b = 0, _c = f.options; _b < _c.length; _b++) {
                    var opt = _c[_b];
                    opts[opt.key] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](opt.value);
                }
                fieldsCtrls[f.name] = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](opts);
            }
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"](fieldsCtrls);
        console.log('this.form');
        console.log(this.form);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DynamicFormBuilderComponent.prototype, "onSubmit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], DynamicFormBuilderComponent.prototype, "fields", void 0);
    DynamicFormBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dynamic-form-builder',
            template: "\n    <form (ngSubmit)=\"onSubmit.emit(this.form.value)\" [formGroup]=\"form\" class=\"form-horizontal\">\n      <div *ngFor=\"let field of fields\">\n          <field-builder [field]=\"field\" [form]=\"form\"></field-builder>\n      </div>\n      <div class=\"form-row\"></div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-9\">\n          <button type=\"submit\" [disabled]=\"!form.valid\" class=\"btn btn-primary\" >Save</button>\n          <strong >Saved all values</strong>\n        </div>\n      </div>\n    </form>\n  ",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicFormBuilderComponent);
    return DynamicFormBuilderComponent;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.module.ts":
/*!**************************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.module.ts ***!
  \**************************************************************************************/
/*! exports provided: DynamicFormBuilderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormBuilderModule", function() { return DynamicFormBuilderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dynamic-form-builder.component */ "./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.component.ts");
/* harmony import */ var _field_builder_field_builder_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./field-builder/field-builder.component */ "./projects/listing/src/lib/dynamic-form-builder/field-builder/field-builder.component.ts");
/* harmony import */ var _atoms_textbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./atoms/textbox */ "./projects/listing/src/lib/dynamic-form-builder/atoms/textbox.ts");
/* harmony import */ var _atoms_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./atoms/dropdown */ "./projects/listing/src/lib/dynamic-form-builder/atoms/dropdown.ts");
/* harmony import */ var _atoms_file__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./atoms/file */ "./projects/listing/src/lib/dynamic-form-builder/atoms/file.ts");
/* harmony import */ var _atoms_checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./atoms/checkbox */ "./projects/listing/src/lib/dynamic-form-builder/atoms/checkbox.ts");
/* harmony import */ var _atoms_radio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./atoms/radio */ "./projects/listing/src/lib/dynamic-form-builder/atoms/radio.ts");

/**
 * Created by debasiskar on 16/04/19.
 */



// components







var DynamicFormBuilderModule = /** @class */ (function () {
    function DynamicFormBuilderModule() {
    }
    DynamicFormBuilderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ],
            declarations: [
                _dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormBuilderComponent"],
                _field_builder_field_builder_component__WEBPACK_IMPORTED_MODULE_5__["FieldBuilderComponent"],
                _atoms_textbox__WEBPACK_IMPORTED_MODULE_6__["TextBoxComponent"],
                _atoms_dropdown__WEBPACK_IMPORTED_MODULE_7__["DropDownComponent"],
                _atoms_checkbox__WEBPACK_IMPORTED_MODULE_9__["CheckBoxComponent"],
                _atoms_file__WEBPACK_IMPORTED_MODULE_8__["FileComponent"],
                _atoms_radio__WEBPACK_IMPORTED_MODULE_10__["RadioComponent"]
            ],
            exports: [_dynamic_form_builder_component__WEBPACK_IMPORTED_MODULE_4__["DynamicFormBuilderComponent"]],
            providers: []
        })
    ], DynamicFormBuilderModule);
    return DynamicFormBuilderModule;
}());



/***/ }),

/***/ "./projects/listing/src/lib/dynamic-form-builder/field-builder/field-builder.component.ts":
/*!************************************************************************************************!*\
  !*** ./projects/listing/src/lib/dynamic-form-builder/field-builder/field-builder.component.ts ***!
  \************************************************************************************************/
/*! exports provided: FieldBuilderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldBuilderComponent", function() { return FieldBuilderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/**
 * Created by debasiskar on 16/04/19.
 */

var FieldBuilderComponent = /** @class */ (function () {
    function FieldBuilderComponent() {
    }
    Object.defineProperty(FieldBuilderComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.field.name].valid; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FieldBuilderComponent.prototype, "isDirty", {
        get: function () { return this.form.controls[this.field.name].dirty; },
        enumerable: true,
        configurable: true
    });
    FieldBuilderComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FieldBuilderComponent.prototype, "field", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FieldBuilderComponent.prototype, "form", void 0);
    FieldBuilderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'field-builder',
            template: "\n  <div class=\"form-group row\" [formGroup]=\"form\">\n    <label class=\"col-md-3 form-control-label\" [attr.for]=\"field.label\">\n      {{field.label}}\n      <strong class=\"text-danger\" *ngIf=\"field.required\">*</strong>\n    </label>\n    <div class=\"col-md-9\" [ngSwitch]=\"field.type\">\n      <textbox *ngSwitchCase=\"'text'\" [field]=\"field\" [form]=\"form\"></textbox>\n      <dropdown *ngSwitchCase=\"'dropdown'\" [field]=\"field\" [form]=\"form\"></dropdown>\n      <checkbox *ngSwitchCase=\"'checkbox'\" [field]=\"field\" [form]=\"form\"></checkbox>\n      <radio *ngSwitchCase=\"'radio'\" [field]=\"field\" [form]=\"form\"></radio>\n      <file *ngSwitchCase=\"'file'\" [field]=\"field\" [form]=\"form\"></file>\n      <div class=\"alert alert-danger my-1 p-2 fadeInDown animated\" *ngIf=\"!isValid && isDirty\">{{field.label}} is required</div>\n    </div>\n  </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FieldBuilderComponent);
    return FieldBuilderComponent;
}());



/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-h2 {\n    margin: 10px;\n}\n\n.example-section {\n    display: flex;\n    align-content: center;\n    align-items: center;\n    height: 60px;\n}\n\n.example-margin {\n    margin: 0 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW5kYXNoYm9yZC9hZG1pbmRhc2hib3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbmRhc2hib3JkL2FkbWluZGFzaGJvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWgyIHtcbiAgICBtYXJnaW46IDEwcHg7XG59XG5cbi5leGFtcGxlLXNlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA2MHB4O1xufVxuXG4uZXhhbXBsZS1tYXJnaW4ge1xuICAgIG1hcmdpbjogMCAxMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.html":
/*!************************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<lib-myfrom [fields]=\"regConfig\" (submit)=\"submit($event)\"></lib-myfrom>-->\n<div style=\"background: white;color: black;height: auto\">\n    <input [(ngModel)]=\"temtdata\">\n    <input [(ngModel)]=\"formdata.fields[0].value\">\n    <button (click)=\"updateformval()\">Update Form and Table </button>\n    <button (click)=\"showfieldloader()\"> show form field loader</button>\n    <button (click)=\"deleteformfield()\"> Delete Desc Field</button>\n    <button (click)=\"deleteformfieldmulti()\"> Delete multiple Field</button>\n    <button (click)=\"addformfield()\"> Add Pet Name Field</button>\n    <button (click)=\"addformfieldarray()\"> Add Pet Name Field Array</button>\n    <button (click)=\"updateformvalmultiple()\"> updateformvalmany</button>\n\n\n\n    <!--form part of library-->\n    <lib-showform *ngIf=\"formdata !=null\" [formdata]=\"formdata\" [formfieldrefresh]=\"formfieldrefresh\" [formfieldrefreshdata]=\"formfieldrefreshdata\" (onFormFieldChange)=\"listenFormFieldChange($event)\" [custombuttons]=\"custombuttons\" [externaldatavalue]=\"externaldatavalue\" >\n    </lib-showform>\n\n\n\n</div>\n\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n<br/>\n\n<div style=\"background-color: white;\">\n\n    <div style=\"color: black;\">\n        ddddddddddd ddddddddddd ddddddddddd\n\n    </div>\n\n    <lib-listing *ngIf=\"pendingmodelapplicationarray!=null && pendingmodelapplicationarray.length>0\"\n         (onLiblistingChange)=\"listenLiblistingChange($event)\" [datasource]=\"pendingmodelapplicationarray\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"modify_header_array\"\n        [apiurl]=\"_apiService.domain\" [deleteendpoint]=\"deleteendpoint\" [updateendpoint]=\"updateendpoint\" [jwttoken]=\"_apiService.jwttoken\" [date_search_source]=\"\" [date_search_endpoint]=\"\" [sourcedata]=\"tablename\" [statusarr]=\"statusarray\" [detail_datatype]=\"pendingmodelapplicationarray_detail_datatype\"\n        [editroute]=\"editroute\" [detail_skip_array]=\"pendingmodelapplicationarray_detail_skip\" [search_settings]=\"search_settings\" [searchendpoint]=\"searchendpoint\" [sortdata]=\"sortdata\" [datacollection]=\"datacollection\" [date_search_source_count]=\"date_search_source_count\"\n        [libdata]=\"libdata\" [grab_link]=\"grab_link\" [updatetable]=\"updatetable\" [limitcond]=\"limitcond\" \n        [customlistenbutton]=\"customlistenbutton\" (onLiblistingButtonChange)=\"onLiblistingButtonChange($event)\" \n       \n        ></lib-listing>\n\n\n</div>\n\n\n<!-- <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\">User Table  &nbsp;/&nbsp; </a> ACTIVE USERS </mat-toolbar> -->\n\n<!-- <lib-listing *ngIf=\"status_gretterthan_zero!=null && status_gretterthan_zero.length>0\"\n             [datasource]=\"status_gretterthan_zero\"\n             [skip]=\"status_gretterthan_zero_skip\"\n             [modify_header_array]=\"status_gretterthan_zero_modify_header\"\n             [jwttoken]=\"_apiService.jwttoken\"\n             [sourcedata]=\"tablename\"\n             [updateendpoint]=\"updateurl\"\n             [statusarr]=\"statusarray\"\n             [custombutton]=\"custombutton\"\n             [apiurl]=\"_apiService.domain\"\n             [deleteendpoint]=\"deleteendpoint\"\n             [detail_datatype]=\"status_gretterthan_zero_detail_datatype\"\n             [detail_skip_array]=\"status_gretterthan_zero_detail_skip\"\n             [editroute]=\"editroute1\"\n             [url]=\"custom_link\"\n             [date_search_source]=\"date_search_source\"\n             [date_search_endpoint]=\"date_search_endpoint\"\n             [search_settings]=\"search_settings\"\n             [click_to_add_ananother_page]=\"click_to_add_ananother_page\"\n             [emailarray]=\"emailarray\"\n             [grab_link]=\"grab_link\"\n             [pdf_link]=\"_apiService.Pdf_link\">\n</lib-listing> -->\n\n<span class=\"bg_white\">\n    <!--\n\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker\"autocomplete=\"off\"  placeholder=\"Start Date\"  [(ngModel)]=\"start_date\" >\n    <mat-datepicker-toggle matSuffix [for]=\"picker\" ></mat-datepicker-toggle>\n    <mat-datepicker #picker></mat-datepicker>\n</mat-form-field>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"End Data\" [(ngModel)]=\"end_date\" >\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker #picker1 ></mat-datepicker>\n</mat-form-field>\n<button mat-button class=\"a1\" (click)=\"showValue()\">Submit</button>\n-->\n\n    <!--<mat-card-content *ngFor=\"let item of custom_link\">\n    <button mat-raised-button color=\"primary\" [value]=\"item.url\">{{item.label}}</button>\n\n</mat-card-content>-->\n\n\n    <!--<lib-footer></lib-footer>-->\n</span>\n<!--<lib-myfrom [fields]=\"regConfig\" (submit)=\"submit($event)\"></lib-myfrom>-->\n<!--\n<lib-listing *ngIf=\"brandarray!=null && brandarray.length>0\"  [datasource]=\"brandarray\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" [skip]=\"pendingmodelapplicationarray_skip\" > </lib-listing>\n\n<lib-listing *ngIf=\"notpendingapplication_view!=null && notpendingapplication_view.length>0\"  [datasource]=\"notpendingapplication_view\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\"></lib-listing>\n\n<lib-listing *ngIf=\"adminlist!=null && adminlist.length>0\"  [datasource]=\"adminlist\" [skip]=\"pendingmodelapplicationarray_skip\" [modify_header_array]=\"pendingmodelapplicationarray_modify_header\" [skip]=\"pendingmodelapplicationarray_skip\" ></lib-listing>-->"

/***/ }),

/***/ "./src/app/admindashbord/admindashbord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admindashbord/admindashbord.component.ts ***!
  \**********************************************************/
/*! exports provided: AdmindashbordComponent, ExternalDataModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdmindashbordComponent", function() { return AdmindashbordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalDataModalComponent", function() { return ExternalDataModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");





var AdmindashbordComponent = /** @class */ (function () {
    function AdmindashbordComponent(router, route, _apiService, dialog) {
        var _this = this;
        this.router = router;
        this.route = route;
        this._apiService = _apiService;
        this.dialog = dialog;
        this.custombutton = { label: 'my tree', fields: ['type', 'name', '_id'], url: 'http://localhost:4200/affiliate-tree' };
        this.placeholder = ['placeholder'];
        this.type = ['text'];
        this.name = ['Username'];
        this.externaldatavalue = [{
                name: 'externalmodaldata',
                value: [{ key: 'companyName', val: 'ss' }]
            }];
        this.minDate = new Date(2020, 8, 24);
        this.maxDate = new Date(2020, 8, 31);
        this.fieldEmailNumber = 0;
        this.totalRecordFound = 30;
        // use for Download the PDF
        this.custom_link = [{
                label: 'shatterblok',
                url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
                action: 'null'
            }, {
                label: 'Audiodateline',
                url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
                action: 'null'
            }];
        this.ckeConfig = {
            toolbar: [
                { name: "editing", items: ["Scayt", "Find", "Replace", "SelectAll"] },
                {
                    name: "clipboard",
                    items: [
                        "Cut",
                        "Copy",
                        "Paste",
                        "PasteText",
                        "PasteFromWord",
                        "-",
                        "Undo",
                        "Redo"
                    ]
                },
                { name: "links", items: ["Link", "Unlink", "Anchor"] },
                {
                    name: "tools",
                    items: ["Maximize", "ShowBlocks", "Preview", "Print", "Templates"]
                },
                { name: "document", items: ["Source"] },
                {
                    name: "insert",
                    items: [
                        "Image",
                        "Table",
                        "HorizontalRule",
                        "SpecialChar",
                        "Iframe",
                        "imageExplorer"
                    ]
                },
                "/",
                {
                    name: "basicstyles",
                    items: [
                        "Bold",
                        "Italic",
                        "Underline",
                        "Strike",
                        "Subscript",
                        "Superscript",
                        "-",
                        "RemoveFormat"
                    ]
                },
                {
                    name: "paragraph",
                    items: [
                        "NumberedList",
                        "BulletedList",
                        "-",
                        "Outdent",
                        "Indent",
                        "CreateDiv",
                        "-",
                        "Blockquote"
                    ]
                },
                {
                    name: "justify",
                    items: [
                        "JustifyLeft",
                        "JustifyCenter",
                        "JustifyRight",
                        "JustifyBlock"
                    ]
                },
                {
                    name: "styles",
                    items: ["Styles", "Format", "FontSize", "-", "TextColor", "BGColor"]
                }
            ]
        };
        // use for grab the link
        this.grab_link = {
            colom_name: [
                {
                    col_name: 'author',
                    field_name: 'author'
                }
            ],
            field: [
                {
                    label: 'shatterblok grab url',
                    url: 'artixtxp.com/',
                    action: 'null'
                }
            ]
        };
        this.pendingmodelapplicationarray = [];
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
        // use for status search
        this.statusarray = [{ val: 1, name: 'Approve' }, { val: 4, name: 'Decline' }, { val: 3, name: 'Lock' }];
        // use for ststic email search
        //  Example like this
        this.emailarray = [{ val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com' }, { val: 'octtest@yopmail.com', name: 'octtest@yopmail.com' }, { val: 'septest@yopmail.com', name: 'septest@yopmail.com' }];
        // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },
        //  Example like this
        this.editroute = 'editroute';
        // use for Table Header modification 
        // Like Table head name is " firstname" => "First Name"
        this.modify_header_array = {
            'firstname': "First Name",
            'email': 'Email Id',
            'lastname': 'Last Name',
            'name': "Full Name",
            'blogtitle': "Blog Title 9",
            "created_date": "Dated Added",
            "created_datetime": "Created Date with Time 111",
            "author": "Author <br/> Name",
            "priority": "Priority of B ",
            "description_html": "Desc",
            "status": "Active ?",
            'wrongone': 'Wrong O 1',
            'coloredstatus': 'Colored Status'
        };
        // use for Table Header Skip 
        this.pendingmodelapplicationarray_skip = ['_id', 'video_thamnail', 'type', 'password', 'blogs_image', 'created_at'];
        // use for Table Detail Field Skip
        this.pendingmodelapplicationarray_detail_skip = ['_id', 'email', 'name', 'blogtitle', 'Blogs image'];
        // use for Table Detail inside the modal image path
        this.pendingmodelapplicationarray_detail_datatype = [{
                key: "images",
                value: 'image',
                fileurl: "http://18.222.26.198/upload/brandimages/" // Image path 
            }];
        // updateendpoint is use for data update endpoint
        this.updateendpoint = 'addorupdatedata';
        // deleteendpoint is use for data delete endpoint
        this.deleteendpoint = 'deletesingledata';
        // this is a database collection name
        this.tablename = 'users';
        // searchendpoint is use for data search endpoint
        this.searchendpoint = 'datalist';
        // use for click to another page routing path
        this.click_to_add_ananother_page = '/adminlist';
        // date_search_endpoint is use for date search endpoint
        this.date_search_endpoint = 'datalist';
        // send basic limit data
        this.limitcond = {
            "limit": 10,
            "skip": 0,
        };
        // other data
        this.libdata = {
            basecondition: { blogtitle: { $regex: 'ying' } },
            footersettings: [
                { key: 'f0', data: '', colspan: 4 },
                { key: 'f5', data: 'SubTotal', colspan: 2 },
                { key: 'f6', data: '829', colspan: 2 },
                { key: 'f1', data: 'Total', colspan: 2 },
                { key: 'f2', data: '89', colspan: 2 },
                { key: 'f3', data: 'F3 Data', colspan: 1 },
                { key: 'f4', data: 'F4 Data', colspan: 5 },
            ],
            cssoverridesoncelltorow: [
                { key: 'cred', val: 'credtr' },
                { key: 'cblack', val: 'cblacktr' },
                { key: 'cgrey', val: 'cgreytr' },
                { key: 'cgreen', val: 'cgreentr' },
                { key: 'cblue', val: 'cbluetr' }
            ],
            detailview_override: [
                { key: "tags_array", val: "Tags" },
                { key: "author", val: "Written By" },
                { key: "blogtitle", val: "Title" },
                { key: "created_datetime", val: "Date Added with time" },
                { key: "created_date", val: "Date Added only" },
                { key: "descriptionb", val: "Blog Dc" },
                { key: "blogtitleb", val: "Blog T1" },
            ],
            updateendpoint: 'statusupdate',
            notes: {
                label: "Blog Notes",
                addendpoint: "addnotedata",
                deleteendpoint: "deletenotedata",
                listendpoint: "listnotedata",
                user: "5e0c80cd3a339a042de8717d",
                currentuserfullname: "Debasis 8 ",
                header: 'blogtitle',
                tooltip: 'Notes'
            },
            updateendpointmany: 'updateendpointmany',
            deleteendpointmany: 'deleteendpointmany',
            // hideeditbutton: true,// all these button options are optional not mandatory
            // hidedeletebutton: true,
            //hideviewbutton:false,
            hidestatustogglebutton: true,
            hidestatustoggle: {
                flag: true,
                cond: 'statusval',
                condval: 1,
                tooltip: 'toggle status'
            },
            hidemultipleselectbutton: null,
            hidecounter: null,
            // hidedeletemany: true,
            // hideupdatemany: false,
            hideaction: null,
            // actioncolname: 'Actn',
            searchBarFlagVal: true,
            recordfoundflag: true,
            recordfounddata: '',
            resettable: false,
            tableheaders: ['author', 'priority', 'blogtitle', 'status', 'wrongone', 'coloredstatus', 'created_date', 'created_datetime', 'description_html', 'description'],
            header_tooltip_array: {
                "description_html": "Desc Tooltip new",
                'firstname': "First Name",
                'email': 'Email Id',
                'lastname': 'Last Name',
                'name': "Full Name",
                'blogtitle': "Blog Title 9 Tooltip",
                "created_date": "Dated Added",
                "created_datetime": "Created Date with Time 111",
                "author": "Author <br/> Name Tooltip",
                "priority": "Priority of B Tooltip",
                "status": "Active ?",
                'wrongone': 'Wrong O 1',
                'coloredstatus': 'Colored Status'
            },
            preview_header: {
                header: "Preview Data for Details",
                class: 'preheadercls'
            },
            customselectbuttons: [
                {
                    label: "Custom option 1",
                    id: 'customselid1'
                }
            ],
            custombuttons: [
                {
                    label: "fb search with blog title",
                    link: "https://www.facebook.com/search/top/",
                    type: 'externallink',
                    param: [{ key: 'blogtitle', q: 'q' }],
                    tooltip: 'listner 1234',
                    classname: 'fbcls'
                },
                {
                    label: "Custom B Listner",
                    type: 'listner',
                    id: 'i1',
                    cond: 'status',
                    condval: 1,
                    tooltip: 'listner 1234',
                    classname: 'listencls'
                },
                {
                    label: "G search with blog title ACtive",
                    link: "https://www.google.com/search",
                    type: 'externallink',
                    param: [{ key: 'blogtitle', q: 'q' }, { key: 'author', q: 'oq' }],
                    cond: 'status',
                    condval: 1,
                    tooltip: 'listner 1234 44 externallink'
                },
                {
                    label: "mask blog",
                    link: "https://mask-blog1.influxiq.com/blog-details",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['blogtitle', '_id'],
                    cond: 'status',
                    condval: 0,
                    tooltip: 'listner 1234'
                },
                {
                    label: "downLoad Pdf",
                    link: "https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/html-pdf/report",
                    type: 'externallink',
                    paramtype: 'angular',
                    param: ['_id'],
                },
                {
                    label: " fb profile ",
                    link: "https://www.facebook.com/debasiskar007",
                    type: 'externallink',
                    tooltip: 'listner 1234'
                },
                {
                    label: " fb profile for inactive",
                    link: "https://www.facebook.com/debasiskar007",
                    type: 'externallink',
                    cond: 'status',
                    condval: 0
                },
                {
                    label: " fb profile for active",
                    link: "https://www.facebook.com/debasiskar007",
                    type: 'externallink',
                    cond: 'status',
                    condval: 1
                },
                {
                    label: "see brand",
                    route: "brand",
                    type: 'internallink',
                    cond: 'status',
                    condval: 0
                },
                {
                    label: "delete",
                    toggle: "delete",
                    type: 'internallink',
                },
                {
                    label: "see brand with param",
                    route: "admin/brand",
                    type: 'internallink',
                    //cond:'status',
                    //condval:0,
                    param: ['blogtitle', '_id'],
                },
                {
                    label: "Desc from data",
                    type: 'action',
                    datatype: 'local',
                    datafields: ['created_date', 'description', 'author', 'blogtitle', 'tags_array', 'image', 'video_array', 'created_datetime', 'image_array', 'video', 'img_array', 'vd_array'],
                    headermessage: 'Local Info',
                },
                {
                    label: "Desc from api data",
                    type: 'action',
                    datatype: 'api',
                    endpoint: 'getblogdatabyid',
                    otherparam: [],
                    //cond:'status',
                    //condval:0,
                    param: 'blog_id',
                    datafields: ['blogtitleb', 'descriptionb'],
                    // refreshdata: true,
                    headermessage: 'Api Info',
                    tooltip: 'listner 1234',
                    classname: 'desccls'
                }
            ]
        };
        // send basic sort data
        this.sortdata = {
            "type": 'desc',
            "field": 'priority',
            "options": ['priority', 'author', 'category', 'blogtitle']
        };
        // this is a database collection or view name
        this.date_search_source = 'admin_blog_list';
        // datacollection
        this.datacollection = 'getadminbloglistdata';
        //source count
        this.date_search_source_count = 0;
        // this is use for  All type of search
        this.authval = [
            {
                "_id": "5dc54c9764f5cdfcff5f8a76",
                "val": "CAR BUYING ADVICE",
                "name": "A"
            },
            {
                "_id": "5dc54cbc64f5cd7b9b5f8a77",
                "val": "COMPARISON",
                "name": "B"
            },
            {
                "_id": "5dc54cd364f5cd70245f8a78",
                "val": "FOREIGN MAKES",
                "name": "C"
            },
            {
                "_id": "5dc54d2f64f5cd087e5f8a79",
                "val": "MISCELLANEOUS",
                "name": "D"
            }
        ];
        this.search_settings = {
            datesearch: [{
                    startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search", field: "created_datetime",
                }],
            selectsearch: [
                // { label: 'Search By Status', field: 'status', values: this.status },
                {
                    label: 'Search By Status', field: 'status',
                },
            ],
            // textsearch: [{ label: "Search By Title", field: 'blogtitle_search' }],
            textsearch: [{
                    label: "Search By Title", field: 'blogtitle_search',
                }],
            // { label: "Search by auther", field: "author_search", value: "AUth" }],  // this is use for  text search
            search: [{
                    label: "Search By Author Dynamic ", field: 'author_search',
                    values: this.authval,
                    serversearchdata: { endpoint: 'exitsing-list-author' },
                },
                {
                    label: "Search By Author Dynamic multiple ", field: 'author_search_name',
                    values: this.authval,
                    serversearchdata: { endpoint: 'exitsing-list-author' },
                }],
        };
        // this is search block 
        // name: "Justin"
        // val: "justin"
        this.brandarray = [];
        this.notpendingapplication_view = [];
        this.adminlist = [];
        this.editroute1 = 'modeledit';
        this.status_gretterthan_zero_skip = ['_id', 'username', 'phone', 'city', 'state', 'ethnicity', 'height', 'haircolor', 'eyecolor', 'weight', 'bust', 'waist', 'hips', 'slim', 'toned', 'tattoos', 'athletic', 'piercings', 'retail', 'voluptuous', 'promotions', 'sales', 'descriptionbox', 'facebooklink', 'twitterlink', 'instagramlink', 'modelmayhemlink', 'type', 'images'];
        this.status_gretterthan_zero_modify_header = { 'dateformat': 'Date', 'status': 'Status', 'email': 'Email', 'name': 'Full Name', 'bodytype': 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
        this.status_gretterthan_zero_detail_skip = ['_id', 'email', 'name', 'type', 'status'];
        this.status_gretterthan_zero_detail_datatype = [{ key: "images", value: 'image', fileurl: this._apiService.uplodeimg_url }];
        // editroute:any = [{val: 1, name:"hi"}];
        //everything we need for formlibconfiguration
        this.emailregex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        this.passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        this.temtdata = '';
        // formdata
        this.formfieldrefresh = false;
        this.updatetable = false;
        this.formfieldrefreshdata = null;
        this.formdata = {
            successmessage: "Added Successfully !!",
            submittext: "Rush Now",
            canceltext: "Cancel Now",
            resettext: "reset This",
            redirectpath: "/admindashbord1",
            submitactive: true,
            apiUrl: this._apiService.domain,
            // endpoint: 'addformdata',
            jwttoken: this._apiService.jwttoken,
            secret: 'nmjnwn22ssdd',
            //hidereset:true,
            //hidecancel:true,
            cancelroute: '/brand',
            custombuttons: [
                {
                    name: 'save',
                    label: 'Save Data',
                    class: 'savecls',
                    type: 'button',
                    tooltip: "save"
                },
                {
                    name: 'save_form_data',
                    label: 'Save Value',
                    class: 'savecls',
                    type: 'button',
                    tooltip: "save"
                }
            ],
            fields: [
                {
                    heading: "This is Name Header <h1> Fill the form Up !! </h1>",
                    label: "Name",
                    name: "fullname",
                    value: 'Test N',
                    type: "text",
                    disabled: true,
                    // validations: [
                    //     { rule: 'required' },
                    //     { rule: 'maxLength', value: 10 },
                    //     { rule: 'minLength', value: 2 }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM",
                    customheadingflag: true,
                    customheadingtitle: 'Manage Custom Section',
                    custombuttonflag: true
                },
                {
                    label: "Description",
                    name: "desc-1",
                    type: 'textarea',
                    rows: 1,
                    cols: 2,
                    value: "This test  desc!! test-1 ",
                    hint: "Desc .... ",
                    validations: [
                        { rule: 'required', message: "desc field Needs to be required" },
                    ]
                },
                {
                    label: "Description",
                    name: "desc",
                    type: 'textarea',
                    rows: 5,
                    cols: 70,
                    value: "This test  desc!!",
                    hint: "Desc .... ",
                },
                {
                    label: "Description",
                    name: "desc2",
                    type: 'textarea',
                    // rows:5,
                    // cols:70,
                    value: "This test  desc 2 !!",
                    hint: "Desc .... ",
                },
                {
                    label: "Description 1",
                    name: "desc1",
                    type: 'textarea',
                    rows: 25,
                    cols: 200,
                    value: "This test  desc 1 !!",
                    hint: "Desc .... ",
                },
                {
                    label: "Description Field",
                    name: "htmldesc",
                    type: 'editor',
                    value: "This test html <b>ff</b> !!",
                    hint: "Desc .... ",
                    // validations: [
                    //     { rule: 'required', message: "Html Desc field Needs to be required" },
                    // ]
                    ckeConfig: this.ckeConfig
                },
                {
                    label: "Email",
                    name: "email",
                    type: 'email',
                    hint: "abc@gmail.com",
                    // validations: [
                    //     { rule: 'required', message: "Email field Needs to be required" },
                    //     { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }
                    // ]
                    custombuttonflag: true
                },
                {
                    label: "Image Choice",
                    name: "imagechoice",
                    type: 'image',
                    hint: "Choose an Img",
                    val: [{
                            key: 1,
                            image: "https://www.generatormix.com/images/cartoon/baloo.jpg"
                        },
                        {
                            key: 2,
                            image: "https://www.computerhope.com/jargon/r/random-dice.jpg"
                        },
                        {
                            key: 3,
                            image: "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640"
                        }],
                },
                {
                    label: "Image Choice 2",
                    name: "imagechoice2",
                    type: 'image',
                    hint: "Choose an Img 2",
                    value: 2,
                    val: [{
                            key: 1,
                            image: "https://www.generatormix.com/images/cartoon/baloo.jpg"
                        },
                        {
                            key: 2,
                            image: "https://www.computerhope.com/jargon/r/random-dice.jpg"
                        },
                        {
                            key: 3,
                            image: "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640"
                        }],
                },
                {
                    label: "DOB",
                    name: "dob",
                    type: 'date',
                    value: new Date().toISOString(),
                    hint: "05/05/2020",
                    minDate: new Date(),
                    maxDate: new Date(2024, 8, 31),
                }, {
                    label: "DOJ",
                    name: "doj",
                    type: 'date',
                    value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                    hint: "05/05/2020",
                },
                {
                    label: "Password",
                    name: "password",
                    type: 'password',
                    hint: "******",
                    passwordflag: true,
                    value: '',
                },
                {
                    label: "Confirm Password",
                    name: "confirmpassword",
                    type: 'password',
                    passwordflag: false,
                    hint: "******",
                    // validations: [
                    //     { rule: 'required', message: "Confirm Password field Needs to be required" },
                    //     { rule: 'match', message: "Confirm Password field Needs to  match Password" },
                    //     //{rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                    // ],
                    customheadingflag: true,
                    customheadingtitle: 'Custom Section New'
                },
                {
                    label: "Age",
                    name: "age",
                    type: 'number',
                    hint: 'dddd',
                },
                {
                    label: "Status disabled",
                    name: "status2",
                    hint: ',0000',
                    type: 'select',
                    val: this.status,
                    disabled: true,
                    // value: 1,
                    //value: '',
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    heading: "This is Heading For group 1",
                    name: "statusgroup",
                    hint: ',0000',
                    type: 'group',
                    fields: [
                        {
                            label: "Age1",
                            name: "age1",
                            type: 'number',
                            hint: 'Age ??',
                        },
                        {
                            label: "DOJ1",
                            name: "doj1",
                            type: 'date',
                            value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                            hint: "05/05/2020",
                        },
                        {
                            label: "Description1",
                            name: "desc1",
                            type: 'textarea',
                            value: "This test  1!!",
                            hint: "Desc ....1 ",
                        },
                    ]
                },
                {
                    label: "Status after gRP ",
                    name: "status",
                    hint: ',0000',
                    type: 'select',
                    val: this.status,
                    // value:1,
                    //value: '',
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    label: "Year",
                    name: "year",
                    hint: ',0000',
                    type: 'select',
                    val: [
                        { val: 2020, name: 2020 },
                        { val: 2021, name: 2021 },
                        { val: 2022, name: 2022 },
                        { val: 2023, name: 2023 },
                        { val: 2024, name: 2024 },
                        { val: 2025, name: 2025 }
                    ],
                    // value:[2021,2022],
                    multiple: true,
                    //value: '',
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    label: "Married ",
                    heading: " radio Married <br/> <div>dfr</div>  <br/> <img src=https://www.w3schools.com/html/img_girl.jpg alt=Girl in a jacket width=500 height=600 > ",
                    name: "married",
                    hint: 'Yes/No',
                    type: 'radio',
                    val: [{ key: 0, val: 'Yes' }, { key: 1, val: 'No' }, { key: 3, val: 'Separated' }, { key: 4, val: 'Widow' }],
                    value: 4,
                },
                {
                    label: "Last Visit ",
                    name: "lastvisit",
                    hint: 'In months',
                    type: 'checkbox',
                    multiple: true,
                    val: [{ key: 0, val: 'Less than 1' }, { key: 1, val: 'less than 3' }, { key: 2, val: 'less than 6' }, { key: 3, val: 'less than 12' }],
                    value: [3, 0],
                },
                {
                    label: "Last Visit update after ",
                    name: "lastvisitupdateafter",
                    hint: 'In months',
                    type: 'checkbox',
                    multiple: true,
                    val: [{ key: 0, val: 'Less than 1c' }, { key: 1, val: 'less than 3v' }, { key: 2, val: 'less than 6c' }, { key: 3, val: 'less than 12c' }],
                },
                {
                    label: "Last Visit Auto multi selected ",
                    name: "lastvisita",
                    hint: 'In months',
                    type: 'autocomplete',
                    multiple: true,
                    val: [
                        { key: 0, val: ' its Less than 1' },
                        { key: 1, val: ' its less than 3' },
                        { key: 2, val: 'its less than 6' },
                        { key: 3, val: 'its less than 12' }
                    ],
                    value: [3, 0, 2],
                },
                {
                    label: "Last Visit Auto multi update after load ",
                    name: "lastvisitaupdateafterload",
                    hint: 'In months',
                    type: 'autocomplete',
                    multiple: true,
                    val: [
                        { key: 0, val: ' its Less than 21' },
                        { key: 1, val: ' its less than 53' },
                        { key: 2, val: 'its less than 76' },
                        { key: 3, val: 'its less than 127' }
                    ],
                },
                {
                    label: "Last Visit Auto single update after load ",
                    name: "lastvisitaupdatesingleafterload",
                    hint: 'In months',
                    type: 'autocomplete',
                    // multiple: true, 
                    val: [
                        { key: 0, val: ' its Less than 321' },
                        { key: 1, val: ' its less than 453' },
                        { key: 2, val: 'its less than 756' },
                        { key: 3, val: 'its less than 1627' }
                    ],
                },
                {
                    label: "Last Visit Auto single n selected ",
                    name: "lastvisitasingle",
                    hint: 'In months',
                    type: 'autocomplete',
                    // multiple:true,
                    val: [
                        { key: 0, val: ' its Less than 13' },
                        { key: 1, val: ' its less than 34' },
                        { key: 2, val: 'its less than 67' },
                        { key: 3, val: 'its less than 11' }
                    ],
                    value: 0,
                },
                {
                    label: "Last Visit Auto not selected",
                    name: "lastvisitautonotselected",
                    hint: 'In months',
                    type: 'autocomplete',
                    //multiple:true,
                    val: [
                        { key: 0, val: ' its Less than 1' },
                        { key: 5, val: ' its Less than 15' },
                        { key: 6, val: ' its Less than 6' },
                        { key: 7, val: ' its Less than 71' },
                        { key: 1, val: ' its less than 3' },
                        { key: 2, val: 'its less than 6' },
                        { key: 3, val: 'its less than 12' }
                    ],
                },
                {
                    label: "Last Visit Auto multiple",
                    name: "lastvisitamultiple",
                    hint: 'In months multiple ',
                    type: 'autocomplete',
                    multiple: true,
                    val: [{ key: 0, val: 'more than 51' },
                        { key: 1, val: 'more than 63' },
                        { key: 2, val: 'more than 36' },
                        { key: 3, val: 'more than 12' },
                        { key: 4, val: 'more than 82' },
                        { key: 5, val: 'more than 46' },
                    ],
                },
                {
                    label: "Active",
                    name: "active",
                    hint: 'check ???',
                    type: 'checkbox',
                    labelPosition: 'after',
                    // value: true,
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    label: "Has Child?",
                    name: "child",
                    hint: 'has child ???',
                    type: 'checkbox',
                    labelPosition: 'after',
                    value: null,
                    dependent: [
                        {
                            condval: true,
                            field: {
                                label: "How many",
                                name: "childcount",
                                type: 'number',
                                hint: '1to 3',
                            }
                        },
                        {
                            condval: true,
                            field: {
                                label: "How many girls",
                                name: "childcountgirls",
                                type: 'number',
                                hint: '1to 3',
                            }
                        },
                        {
                            condval: true,
                            field: {
                                label: "How many boys",
                                name: "childcountboys",
                                type: 'number',
                                hint: '1to 3',
                            }
                        }
                    ],
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    label: "Has Child   select?",
                    name: "haschildsel",
                    hint: 'has child ???',
                    type: 'select',
                    labelPosition: 'after',
                    val: [{ val: 1, name: 'Yes' }, { val: 2, name: 'No' }],
                    value: null,
                    dependent: [
                        {
                            condval: 1,
                            field: {
                                label: "How many Child text Sel",
                                name: "childcount1",
                                type: 'number',
                                hint: '1to 3',
                            }
                        },
                        {
                            condval: 2,
                            field: {
                                label: "How many girls ??",
                                name: "childcountgirls1",
                                type: 'number',
                                hint: '1to 2',
                            }
                        },
                        {
                            condval: 1,
                            field: {
                                label: "How many boys ??",
                                name: "childcountboys1",
                                type: 'number',
                                hint: 'up to 2',
                            }
                        }
                    ],
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "Sel hc",
                    suffix: "PM"
                },
                // disabled:true,
                {
                    label: "Purchaseable disabled ?",
                    name: "is_purchaseble_d",
                    //hint:'has child ???',
                    type: 'checkbox',
                    labelPosition: 'after',
                    value: null,
                    disabled: true
                },
                {
                    label: "Purchaseable ?",
                    name: "is_purchaseble",
                    //hint:'has child ???',
                    type: 'checkbox',
                    labelPosition: 'after',
                    value: null,
                    dependent: [{
                            condval: true,
                            field: {
                                label: " Product Name",
                                name: "product",
                                type: 'select',
                                val: [{ val: 1, 'name': 'P1' },
                                    { val: 0, 'name': 'P2' },
                                    { val: 2, 'name': 'P3' },
                                    { val: 3, 'name': 'P4' },
                                ],
                                hint: 'choose product',
                            }
                        }],
                    // validations: [
                    //     { rule: 'required' }
                    // ],
                    prefix: "http://google.com/",
                    suffix: "PM"
                },
                {
                    label: "City ..",
                    name: "city",
                    type: 'text',
                },
                //new external button section
                {
                    label: "New External Button 2",
                    name: "externalmodaldatanew",
                    type: 'externaldata',
                    value: [{ "key": "companyName", "label": "name", "val": "ss" }]
                },
                {
                    label: "File 1",
                    name: "file1",
                    type: 'file',
                    prefix: "Test-" + Date.now(),
                    path: 'test/t1/',
                    baseurl: 'test/t1/',
                    // value: {
                    //     fileservername: "file-1589270133418images (5).jpeg",
                    //     name: "images (5).jpeg",
                    //     size: 49184,
                    //     type: "image/jpeg",
                    //     path: "resource/file/",
                    //     bucket: "awsbackend-dev-patient-files-test"
                    // },
                    bucket: 'awsbackend-dev-patient-files-test',
                    apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                    apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
                    // validations: [
                    //     { rule: 'required', message: 'File  required !!' }
                    // ]
                    imagefields: [
                        { label: "Image Title", name: "img_title", type: 'text', value: '' },
                        { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                        { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                        { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                    ],
                    aspectratio: [467 / 638, 467 / 467]
                },
                {
                    label: "File 3 single with value",
                    name: "file3singlewithvalue",
                    type: 'file',
                    prefix: "Test-" + Date.now(),
                    path: 'test/t1/',
                    baseurl: 'test/t1/',
                    value: {
                        fileservername: "Test-1610609265212lesson_report_5f23e718c031cb6305997d08(1).pdf",
                        name: "lesson_report_5f23e718c031cb6305997d08 (1).pdf",
                        size: 49184,
                        type: "application/pdf",
                        path: 'test/t1/',
                        bucket: "awsbackend-dev-patient-files-test"
                    },
                    bucket: 'awsbackend-dev-patient-files-test',
                    apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                    apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
                    // validations: [
                    //     { rule: 'required', message: 'File  required !!' }
                    // ],
                    imagefields: [
                        { label: "Image Title", name: "img_title", type: 'text', value: 'test' },
                        { label: "Image Desc", name: "img_Desc", type: 'textarea', value: 'test' },
                        { label: "Image Priority", name: "img_priority", type: 'number', value: 3 },
                        { label: "Status", name: "img_status", type: 'checkbox', value: true },
                    ],
                    aspectratio: [467 / 638, 453 / 490],
                    imagecroppedratiolabel: ['467 / 638', '453 / 490'],
                },
                {
                    label: "City 2",
                    name: "city2",
                    type: 'text'
                },
                {
                    label: "City3",
                    name: "city3",
                    type: 'text'
                },
                {
                    label: "p sel",
                    name: "psel",
                    type: "select",
                    // type: 'select',
                    val: [
                        { val: 2020, name: 2020 },
                        { val: 2021, name: 2021 },
                        { val: 2022, name: 2022 },
                        { val: 2023, name: 2023 },
                        { val: 2024, name: 2024 },
                        { val: 2025, name: 2025 }
                    ],
                },
                //new external button section
                {
                    label: "New External Button",
                    name: "externalmodaldataimg",
                    type: 'externaldata',
                    value: [{ "key": "img", "label": "Profile Image", "val": "https://training-centre-bucket.s3.amazonaws.com/lesson-files/lesson_file_-medpartner_picture_-batman-1574763456117-1605678964489.jpg", 'imgflag': true }, { "key": "img", "label": "name", "val": "test", }]
                },
                {
                    label: "File 2",
                    name: "file2",
                    type: 'file',
                    // multiple: true,
                    // value: [{
                    //     fileservername: "file-1589270133418images (5).jpeg",
                    //     name: "images (5).jpeg",
                    //     size: 49184,
                    //     type: "image/jpeg",
                    //     path: "resource/file/",
                    //     bucket: "awsbackend-dev-patient-files-test"
                    // }, {
                    //     fileservername: "file-1589270133418images (5).jpeg",
                    //     name: "images (5).jpeg",
                    //     size: 49184,
                    //     type: "image/jpeg",
                    //     path: "resource/file/",
                    //     bucket: "awsbackend-dev-patient-files-test"
                    // }],
                    imagefields: [
                        { label: "Image Title", name: "img_title", type: 'text', value: '' },
                        { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                        { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                        { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                    ],
                    prefix: "Test-" + Date.now(),
                    path: 'test/t1/',
                    baseurl: 'test/t1/',
                    bucket: 'awsbackend-dev-patient-files-test',
                    apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                    apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
                    aspectratio: [467 / 638, 467 / 467],
                    imagecroppedratiolabel: ['467 X 638', '2 X 3', '4/2']
                },
                {
                    label: "File 2 multiple ",
                    name: "file2multiple",
                    type: 'file',
                    multiple: true,
                    prefix: "Test-multiple-" + Date.now(),
                    path: 'test/t1m/',
                    baseurl: 'test/t1,/',
                    bucket: 'awsbackend-dev-patient-files-test',
                    apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                    apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
                    newheadingflag: true,
                    newheadingtitle: 'Custom Section for Image',
                    imagefields: [
                        { label: "Image Title", name: "img_title", type: 'text', value: '' },
                        { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                        { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                        { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                    ],
                    value: [
                        {
                            "fileservername": "image-1606731256682For_the_Person_Raising_the_Job_Ticket.html",
                            "name": "For_the_Person_Raising_the_Job_Ticket.html",
                            "size": 3866,
                            "type": "text/html",
                            "path": "mwo_inventory_images/image/",
                            "bucket": "awsbackend-dev-patient-files-test",
                            "baseurl": "mwo_inventory_images/image/",
                            "imgfields": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            "flds": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            imagefields: [
                                { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
                                { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                                { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                                { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                            ]
                        }, {
                            fileservername: "file-1589270133418images (5).jpeg",
                            name: "images (5).jpeg",
                            size: 49184,
                            type: "image/jpeg",
                            path: "resource/file/",
                            bucket: "awsbackend-dev-patient-files-test",
                            "imgfields": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            "flds": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            imagefields: [
                                { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
                                { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                                { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                                { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                            ]
                        },
                        {
                            fileservername: "image-16099399812409.jpg",
                            name: "images (5).jpeg",
                            size: 49184,
                            type: "image/jpeg",
                            path: "resource/file/",
                            bucket: "awsbackend-dev-patient-files-test",
                            "imgfields": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            "flds": [
                                { key: "img_title", value: "qq" },
                                { key: "img_Desc", value: "qq" },
                                { key: "img_priority", value: "22" },
                                { key: "img_status", value: true }
                            ],
                            imagefields: [
                                { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
                                { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
                                { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
                                { label: "Status", name: "img_status", type: 'checkbox', value: '' },
                            ]
                        }
                    ],
                    aspectratio: [467 / 638, 467 / 467, 4 / 2],
                    imagecroppedratiolabel: ['467 X 638', '2 X 3', '4/2'],
                },
                {
                    //label:"City",
                    name: "pid",
                    type: 'hidden',
                    value: "900"
                }
            ]
        };
        this.blog_cat_list = [
            {
                "_id": "5dc54c9764f5cdfcff5f8a76",
                "val": "CAR BUYING ADVICE",
                "key": "5dc54c9764f5cdfcff5f8a76"
            },
            {
                "_id": "5dc54cbc64f5cd7b9b5f8a77",
                "val": "COMPARISON",
                "key": "5dc54cbc64f5cd7b9b5f8a77"
            },
            {
                "_id": "5dc54cd364f5cd70245f8a78",
                "val": "FOREIGN MAKES",
                "key": "5dc54cd364f5cd70245f8a78"
            },
            {
                "_id": "5dc54d2f64f5cd087e5f8a79",
                "val": "MISCELLANEOUS",
                "key": "5dc54d2f64f5cd087e5f8a79"
            }
        ];
        this.subscriptions = [];
        this.subscriptioncount = 0;
        //for listing
        this.customlistenbutton = {
            flag: true,
            tooltipflag: true,
            buttons: [
                {
                    label: "Listen button1",
                    type: 'button',
                    name: 'button1',
                    tooltip: "Info about the action"
                },
                {
                    label: "Listen button2",
                    type: 'button',
                    name: 'button2',
                    tooltip: "Info about the action"
                },
                {
                    label: "Listen button3",
                    type: 'button',
                    name: 'button3',
                    tooltip: "Info about the action"
                },
                {
                    label: "Update Record",
                    type: 'button',
                    name: 'button4',
                    tooltip: "Info about the action"
                }
            ]
        };
        // [searchbuttons]="searchbuttons"
        // public searchbuttons: any = {
        //     flag: true,
        //     buttons: [
        //         {
        //             label: "search button1",
        //             type: 'button',
        //             name: 'button1'
        //         },
        //         {
        //             label: "search button2",
        //             type: 'button',
        //             name: 'button2'
        //         },
        //         {
        //             label: "search button3",
        //             type: 'button',
        //             name: 'button3'
        //         },
        //         {
        //             label: "search button4",
        //             type: 'button',
        //             name: 'button4'
        //         }
        //     ]
        // };
        //for form
        this.custombuttons = {
            flag: true,
            // heading:'New Custom Area',
            // after:'email',
            buttons: [
                {
                    labeladd: "Add Name",
                    labelremove: "Remove Name",
                    type: 'text',
                    name: 'fullname'
                },
                {
                    labeladd: "Add Email",
                    labelremove: "Remove Email",
                    type: 'email',
                    name: 'email',
                },
                {
                    labeladd: "Add Phone",
                    labelremove: "Remove Phone",
                    type: 'number',
                    name: 'phone',
                }
            ]
        };
        console.log(this.blog_cat_list);
        console.log(this.authval);
        // console.log('custom_link');
        // console.log(this.custom_link);
        console.log(this.formdata, 'formdataformdataformdataformdataformdata');
        this.datasource = '';
        var endpoint = 'getadminbloglistdata'; // for main data endpoint
        var endpointc = 'getadminbloglistdata-count'; // for count endpoint
        var autodataendpoint = 'exitsing-list'; // for count endpoint
        // data param for conditionlimit and search
        var data = {
            "condition": {
                "limit": 10,
                "skip": 0
            },
            sort: {
                "type": 'desc',
                "field": 'priority'
            },
            // searchcondition: { status: { $lte: 4 } }
            searchcondition: { blogtitle: { $regex: 'ying' } }
        };
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(autodataendpoint, {}).subscribe(function (res) {
            // console.log('in constructor');
            // console.log(res, 'auto res', res.result, res.result.blog_cat_list, res.result.blog_tag_list);
            // search: [{ label: "Search By Author", field: 'author_search', values: this.authval }] 
            // this.search_settings.search.push({ label: "Search By Cat ID", field: 'blogcat_str', values: res.result.blog_cat_list });
            // this.search_settings.search.push({ label: "Search By Cat Name", field: 'category_search', values: res.result.blog_cat_str_list });
            // this.search_settings.search.push({ label: "Search By Tags from server", field: 'tag_search', values: res.result.blog_tag_list });
            // this.search_settings.search.push({ label: "Search Author from Server", field: 'author_search', values: res.result.blog_author_list });
            // this.date_search_source_count = res.count;
            // console.warn('blogData c',res);
        }, function (error) {
            console.log('Oooops!');
        });
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(endpointc, data).subscribe(function (res) {
            // console.log('in constructor');
            // console.log(result);
            _this.date_search_source_count = res.count;
            //console.warn('blogData c',res);
        }, function (error) {
            console.log('Oooops!');
        });
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(endpoint, data).subscribe(function (res) {
            // console.log('in constructor');
            // console.log(result);
            res.results.res[3].created_date = 0;
            res.results.res[2].created_date = 'NA';
            res.results.res[4].created_date = 'na';
            res.results.res[3].wrongone = "d 78 l";
            // res.results.res[1].coloredstatus = "<div class ='cred'>red</div>";
            // res.results.res[2].coloredstatus = "<div class ='cblack'>BLACK</div>";
            // res.results.res[3].coloredstatus = "<div class='cgrey'>grey</div>";
            // res.results.res[5].coloredstatus = "<div class='cgreen'>green</div>";
            // res.results.res[9].coloredstatus = "<div class='cblue'>blue</div>";
            for (var i in res.results.res) {
                res.results.res[i].coloredstatus = "<div class ='cred'>red</div>";
                res.results.res[5].coloredstatus = "<div class ='cred'>red</div>";
            }
            console.log(res.results.res, 'in res.results.res++++++');
            _this.pendingmodelapplicationarray = res.results.res;
            for (var i in _this.pendingmodelapplicationarray) {
                _this.pendingmodelapplicationarray[2].statusval = 1;
                _this.pendingmodelapplicationarray[5].statusval = 1;
                _this.pendingmodelapplicationarray[7].statusval = 1;
            }
            _this.pendingmodelapplicationarray = res.results.res;
            _this.libdata.hidemultipleselectbutton = false;
            setTimeout(function () {
                // this.pendingmodelapplicationarray = [];
                // this.libdata.hidemultipleselectbutton = true;
                // this.libdata.hideaction = true;
                // this.libdata.hidecounter = null;
            }, 4000);
            setTimeout(function () {
                // const ldata = this.libdata;
                // this.libdata = {};
                // this.libdata = ldata;
                // this.libdata.notes.label = "Bg N";
                // this.libdata.footersettings = [
                //     { key: 'f01', data: '', colspan: 4 },
                //     { key: 'f11', data: 'Total 1', colspan: 2 },
                //     { key: 'f21', data: '89', colspan: 2 },
                //     { key: 'f31', data: 'F3 Data', colspan: 1 },
                //     { key: 'f41', data: 'F4 Data', colspan: 5 },
                //     // { key: 'f5', data: 'F5 Data', colspan: 1 },
                //     // { key: 'f6', data: 'F6 Data', colspan: 1 },
                // ];
                // this.libdata.hidemultipleselectbutton = true;
                // this.libdata.hideaction = true; 
                // this.libdata.hidecounter = true;
                // this.libdata.actioncolname == 'Acb'
                // res.results.res[3].coloredstatus = "<div class ='cd'>k78cd</div>";
                // this.pendingmodelapplicationarray = [];
                // console.log('override data in list  !!!!', 'ldata', 'ldata', this.libdata);
                // this.pendingmodelapplicationarray = res.results.res;
            }, 6000);
            setTimeout(function () {
                // this.libdata.hideaction = null;
                // this.libdata.hideaction = true;
                // this.pendingmodelapplicationarray = [];  
            }, 8000);
            // this.pendingmodelapplicationarray[3].wrongone = 'Sdo *9';
            // console.warn('blogData', this.pendingmodelapplicationarray);
        }, function (error) {
            console.log('Oooops!');
        });
    }
    AdmindashbordComponent.prototype.ngOnInit = function () {
        this.libdata.recordfounddata = "<div><p> Total Records Found : " + this.totalRecordFound + "</p></div>";
    };
    AdmindashbordComponent.prototype.listenLiblistingChange = function (val) {
        var _this = this;
        console.log('listenLiblistingChange', val);
        if (val.action == 'multipleselectoptionclick') {
            setTimeout(function () {
                console.log('update', val);
                _this.updatetable = !_this.updatetable;
            }, 1000);
        }
        if (val.action == 'paging') {
            setTimeout(function () {
                console.log('paging', val);
                _this.libdata.footersettings[2].data = '560';
            }, 1000);
        }
    };
    AdmindashbordComponent.prototype.onLiblistingButtonChange = function (val) {
        console.log('onLiblistingButtonChange===++', val);
        if (val.action == "customlistenbutton" && val.buttondata.name == 'button4') {
            this.totalRecordFound = 100;
            this.libdata.recordfounddata = "<div><p> Total Records Found : " + this.totalRecordFound + "</p></div>";
            console.log(this.libdata.recordfounddata, '+++++');
        }
    };
    AdmindashbordComponent.prototype.listenFormFieldChange = function (val) {
        var _this = this;
        console.log('listenFormFieldChange', val);
        if (val.field != null && val.field.name != null && val.field.name == 'psel') {
            console.log('in psel');
            var tempopn_1 = [];
            var months = [];
            months = ['jan', 'feb', 'mar', 'apr', 'may'];
            for (var n in months) {
                tempopn_1.push({ val: months[n] + ' of ' + val.fieldval, name: months[n] + val.fieldval });
            }
            console.log(tempopn_1, 'tempopn');
            this.formfieldrefreshdata = { field: 'removefromcontrol', value: { name: 'csel' } };
            setTimeout(function () {
                _this.formfieldrefreshdata = {
                    field: 'addfromcontrol', value: {
                        label: "C sel",
                        name: "csel",
                        type: 'select',
                        after: 'psel',
                        val: tempopn_1,
                    }
                };
            }, 300);
        }
        if (val.field != null && val.field.name != null && val.field.name == 'age' && val.fieldval == 23) {
            this.formfieldrefreshdata = { field: 'email', value: 'debasiskar7@gmail.com' };
        }
        if (val.field != null && val.customfield == 'add') {
            this.fieldEmailNumber = this.fieldEmailNumber + 1;
            console.log(this.fieldEmailNumber, 'fieldval', this.fieldEmailNumber);
            switch (val.field.type) {
                case 'email':
                    // setTimeout(() => {
                    this.formfieldrefreshdata = {
                        field: 'addfromcontrol',
                        value: {
                            label: "Enter Email",
                            name: "email-" + this.fieldEmailNumber,
                            type: 'email',
                            after: 'email',
                            custombuttonflag: true
                        }
                    };
                    // }, 300);
                    break;
                case 'text':
                    // setTimeout(() => {
                    this.formfieldrefreshdata = {
                        field: 'addfromcontrol',
                        value: {
                            label: "Enter Full Name",
                            name: "fullname1",
                            type: 'text',
                            after: 'fullname',
                            custombuttonflag: true
                        }
                    };
                    // }, 300);
                    break;
                case 'number':
                    // setTimeout(() => {
                    this.formfieldrefreshdata = {
                        field: 'addfromcontrol',
                        value: {
                            label: "Enter Phone",
                            name: "number1",
                            type: 'number',
                            after: 'age',
                            custombuttonflag: true
                        }
                    };
                    // }, 300);
                    break;
            }
        }
        if (val.field != null && val.customfield == 'remove') {
            this.formfieldrefreshdata = { field: 'removefromcontrol', value: { name: val.field.name } };
        }
        if (val.field == 'fromsubmitdata') {
            console.log('fromsubmitdata ===>>>', val);
            // this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe(res => {
            //   let result: any = {};
            //   result = res;
            //   if (result.status == 'success') {
            //     this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
            //     this.formGroup.reset();
            //     this._snackBar.openFromComponent(SnackbarComponent, {
            //       duration: 6000,
            //       data: { errormessage: this.formdataval.successmessage }
            //     });
            //     // console.log(result, 'red', this.formdataval.redirectpath);
            //     if (this.formdataval.redirectpath != null && this.formdataval.redirectpath != '' && this.formdataval.redirectpath != '/') {
            //       this.router.navigate([this.formdataval.redirectpath]);
            //     } else {
            //       this.loading = false;
            //     }
            //   }
            //   if (result.status == 'error') {
            //     this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
            //     this._snackBar.openFromComponent(SnackbarComponent, {
            //       duration: 6000,
            //       data: result
            //     });
            //     this.loading = false;
            //   }
            // }, error => {
            //   // console.log('Oooops!');
            //   this._snackBar.openFromComponent(SnackbarComponent, {
            //     duration: 6000,
            //     data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            //   });
            //   this.onFormFieldChange.emit({ field: 'fromsubmitservererror', fieldval: 'servererror', fromval: this.formGroup.value });
            //   this.loading = false; //disable loader 
            // });
        }
        if (val.action != null && val.action == 'externaldata') {
            console.log('listenFormFieldChange', val);
            var dialogRef = this.dialog.open(ExternalDataModalComponent, {
                panelClass: 'externaldata-class',
                height: '500px',
                width: '600px',
                data: { heading: 'Add Field Data', name: val.fieldVal.name, value: val.fieldVal.value }
            });
            dialogRef.disableClose = true;
            dialogRef.afterClosed().subscribe(function (res) {
                console.log(res);
                if (res.flag == 'yes') {
                    // this.externaldatavalue.push(res.externaldatavalue);
                    // this.formdata.fields[val.index].value.push(res.externaldatavalue.value[0])
                    for (var i in res.externaldatavalue.value) {
                        _this.formdata.fields[val.index].value.push(res.externaldatavalue.value[i]);
                    }
                    console.log(_this.externaldatavalue, 'externaldatavalue++');
                    console.log(_this.formdata.fields[val.index].value, 'V++');
                }
            });
        }
    };
    AdmindashbordComponent.prototype.updateformval = function () {
        var _this = this;
        this.formdata.fields[0].value = this.temtdata;
        this.formfieldrefreshdata = { field: 'fullname', value: this.temtdata };
        setTimeout(function () {
            _this.formfieldrefreshdata = { field: 'email', value: _this.temtdata + '@gmail.com' };
        }, 50);
        this.updatetable = !this.updatetable;
    };
    AdmindashbordComponent.prototype.updateformvalmultiple = function () {
        // this.formdata.fields[0].value = this.temtdata;
        // this.formfieldrefreshdata = { field: 'fullname', value: this.temtdata };
        var formdata = {
            fullname: 'Test 90', email: 'a45@gmal.com', htmldesc: 'htmldesc --------', status: 1, year: [2021, 2022], status2: 1, dob: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(), age: 23, active: true, child: true, is_purchaseble_d: true, is_purchaseble: true,
            lastvisitaupdateafterload: [2, 3], lastvisitaupdatesingleafterload: 3, lastvisitupdateafter: [3, 1],
            file1: {
                fileservername: "file-1589270133418images (5).jpeg",
                name: "images (5).jpeg",
                size: 49184,
                type: "image/jpeg",
                path: "resource/file/",
                bucket: "awsbackend-dev-patient-files-test"
            }
        };
        this.formfieldrefreshdata = { formvaldata: formdata };
        // setTimeout(() => {
        //     this.formfieldrefreshdata = { field: 'email', value: this.temtdata + '@gmail.com' };
        // }, 50);
        // this.updatetable = !this.updatetable;
    };
    AdmindashbordComponent.prototype.showfieldloader = function () {
        var _this = this;
        this.formfieldrefreshdata = { field: 'showfieldloader', value: 'email' };
        setTimeout(function () {
            _this.formfieldrefreshdata = { field: 'showfieldloader', value: '' };
        }, 6000);
    };
    AdmindashbordComponent.prototype.deleteformfieldmulti = function () {
        this.formfieldrefreshdata = { field: 'removefromcontrol', value: ['desc', 'email', 'file1', 'city', 'city2'] };
    };
    AdmindashbordComponent.prototype.deleteformfield = function () {
        this.formfieldrefreshdata = { field: 'removefromcontrol', value: { name: 'desc' } };
    };
    AdmindashbordComponent.prototype.addformfieldarray = function () {
        this.formfieldrefreshdata = {
            field: 'addfromcontrol',
            value: [
                {
                    label: "Pet Name 2",
                    name: "petname2",
                    type: 'text',
                    after: 'fullname'
                },
                {
                    label: "Pet Name 3",
                    name: "petname3",
                    type: 'text',
                    after: 'petname2'
                },
                {
                    label: "Pet Name 4",
                    name: "petname4",
                    type: 'text',
                    after: 'petname3'
                }
            ]
        };
    };
    AdmindashbordComponent.prototype.addformfield = function () {
        this.formfieldrefreshdata = {
            field: 'addfromcontrol', value: {
                label: "Pet Name",
                name: "petname",
                type: 'text',
                after: 'fullname'
            }
        };
    };
    AdmindashbordComponent.prototype.ngOnDestroy = function () {
        // prevent memory leak when component destroyed
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    AdmindashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admindashbord',
            template: __webpack_require__(/*! ./admindashbord.component.html */ "./src/app/admindashbord/admindashbord.component.html"),
            styles: [__webpack_require__(/*! ./admindashbord.component.css */ "./src/app/admindashbord/admindashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], AdmindashbordComponent);
    return AdmindashbordComponent;
}());

// external data modal
var ExternalDataModalComponent = /** @class */ (function () {
    function ExternalDataModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.companyName = '';
        this.companyemail = '';
        console.log(data, 'modal data++');
    }
    ExternalDataModalComponent.prototype.onNoClick = function () {
        this.data.flag = 'no';
        this.dialogRef.close(this.data);
    };
    ExternalDataModalComponent.prototype.addData = function () {
        this.data.flag = 'yes';
        this.data.externaldatavalue = {
            name: this.data.name,
            value: [{ key: 'companyName', label: 'Name', val: this.companyName }, { key: 'companyemail', label: 'Email', val: this.companyemail }]
        };
        this.dialogRef.close(this.data);
    };
    ExternalDataModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'externaldatamodal',
            template: __webpack_require__(/*! ./externaldatamodal.html */ "./src/app/admindashbord/externaldatamodal.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"], Object])
    ], ExternalDataModalComponent);
    return ExternalDataModalComponent;
}());



/***/ }),

/***/ "./src/app/admindashbord/externaldatamodal.html":
/*!******************************************************!*\
  !*** ./src/app/admindashbord/externaldatamodal.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h2 style=\"text-align: center;\"><u>{{data.heading}}</u></h2>\n\n    <P>{{data.value | json}}</P>\n\n    <div>\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Company Name</mat-label>\n            <input matInput [(ngModel)]=\"companyName\">\n        </mat-form-field>\n\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Company Email</mat-label>\n            <input matInput [(ngModel)]=\"companyemail\">\n        </mat-form-field>\n    </div>\n\n    <span>\n        <button type=\"button\" mat-raised-button color=\"accent\"\n            (click)=\"onNoClick()\">Cancel</button> &nbsp;\n\n        <button type=\"button\" mat-raised-button color=\"primary\"\n            (click)=\"addData()\">Add Data</button>\n    </span>\n\n</div>"

/***/ }),

/***/ "./src/app/adminform/adminform.component.css":
/*!***************************************************!*\
  !*** ./src/app/adminform/adminform.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluZm9ybS9hZG1pbmZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminform/adminform.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminform/adminform.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-adminheader></app-adminheader>\n<mat-drawer-container>\n  <mat-drawer #snav [mode]=\"'side'\" hasbackdrop=\"false\" opened>\n    <app-adminleftpanel></app-adminleftpanel>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <mat-toolbar>ShatterBlock Dashboard </mat-toolbar>\n    <mat-divider></mat-divider>\n    <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> Dashboard &nbsp;/&nbsp; </a> Add</mat-toolbar>\n\n    <mat-card class=\"example-card adminform\">\n      <mat-card-header>\n\n        <mat-card-title>Go to Admin Form</mat-card-title>\n\n      </mat-card-header>\n      <mat-card-content>\n        <form #adminForm  class=\"adminform\">\n          <div class=\"example-container\">\n            <mat-form-field>\n              <input matInput placeholder=\"Input\">\n            </mat-form-field>\n\n            <mat-form-field>\n              <textarea matInput placeholder=\"Textarea\"></textarea>\n            </mat-form-field>\n\n            <mat-form-field>\n              <mat-select placeholder=\"Select\">\n                <mat-option value=\"option\">Option</mat-option>\n              </mat-select>\n            </mat-form-field>\n          </div>\n          <mat-form-field>\n            <textarea matInput placeholder=\"Textarea\"></textarea>\n          </mat-form-field>\n\n          <button mat-flat-button color=\"primary\">Add </button>\n        </form>\n      </mat-card-content>\n\n    </mat-card>\n  </mat-drawer-content>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./src/app/adminform/adminform.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminform/adminform.component.ts ***!
  \**************************************************/
/*! exports provided: AdminformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminformComponent", function() { return AdminformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminformComponent = /** @class */ (function () {
    function AdminformComponent() {
    }
    AdminformComponent.prototype.ngOnInit = function () {
    };
    AdminformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminform',
            template: __webpack_require__(/*! ./adminform.component.html */ "./src/app/adminform/adminform.component.html"),
            styles: [__webpack_require__(/*! ./adminform.component.css */ "./src/app/adminform/adminform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminformComponent);
    return AdminformComponent;
}());



/***/ }),

/***/ "./src/app/adminheader/adminheader.component.css":
/*!*******************************************************!*\
  !*** ./src/app/adminheader/adminheader.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluaGVhZGVyL2FkbWluaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adminheader/adminheader.component.html":
/*!********************************************************!*\
  !*** ./src/app/adminheader/adminheader.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar  class=\"main-color\">\n  <mat-toolbar-row>\n    <span class=\"logo_wrapper\">\n      <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n    </span>\n    <span class=\"example-spacer\"></span>\n    <button mat-button color=\"primary\">Username</button>\n    <button mat-button color=\"primary\">\n      <span class=\"profile_wrap\">\n        <img src=\"http://www.titikshapublicschool.com/wp-content/uploads/2018/11/developer-api.jpg\">\n      </span>\n    </button>\n    <mat-menu #appMenu=\"matMenu\">\n      <button mat-menu-item>Settings</button>\n      <button mat-menu-item>Help</button>\n    </mat-menu>\n\n    <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n      <mat-icon>more_vert</mat-icon>\n    </button>\n  </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "./src/app/adminheader/adminheader.component.ts":
/*!******************************************************!*\
  !*** ./src/app/adminheader/adminheader.component.ts ***!
  \******************************************************/
/*! exports provided: AdminheaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminheaderComponent", function() { return AdminheaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminheaderComponent = /** @class */ (function () {
    function AdminheaderComponent() {
    }
    AdminheaderComponent.prototype.ngOnInit = function () {
    };
    AdminheaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminheader',
            template: __webpack_require__(/*! ./adminheader.component.html */ "./src/app/adminheader/adminheader.component.html"),
            styles: [__webpack_require__(/*! ./adminheader.component.css */ "./src/app/adminheader/adminheader.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminheaderComponent);
    return AdminheaderComponent;
}());



/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGVmdHBhbmVsL2FkbWlubGVmdHBhbmVsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--*ngIf=\"router.url=='adminform'\"-->\n\n<mat-list role=\"list\" class=\"left_nav\"  >\n  <a mat-list-item role=\"listitem\">Dashboard</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n  <a mat-list-item role=\"listitem\"  [routerLink]=\"['/adminlist']\">Admin List</a>\n\n  <a mat-list-item role=\"listitem\" [routerLink]=\"['/adminform']\">Add Admin</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n  <a mat-list-item role=\"listitem\">Home</a>\n\n</mat-list>"

/***/ }),

/***/ "./src/app/adminleftpanel/adminleftpanel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adminleftpanel/adminleftpanel.component.ts ***!
  \************************************************************/
/*! exports provided: AdminleftpanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminleftpanelComponent", function() { return AdminleftpanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminleftpanelComponent = /** @class */ (function () {
    function AdminleftpanelComponent() {
    }
    AdminleftpanelComponent.prototype.ngOnInit = function () {
    };
    AdminleftpanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminleftpanel',
            template: __webpack_require__(/*! ./adminleftpanel.component.html */ "./src/app/adminleftpanel/adminleftpanel.component.html"),
            styles: [__webpack_require__(/*! ./adminleftpanel.component.css */ "./src/app/adminleftpanel/adminleftpanel.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminleftpanelComponent);
    return AdminleftpanelComponent;
}());



/***/ }),

/***/ "./src/app/adminlist/adminlist.component.css":
/*!***************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubGlzdC9hZG1pbmxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminlist/adminlist.component.html":
/*!****************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-adminheader></app-adminheader>\n\n<mat-drawer-container>\n  <mat-drawer #snav [mode]=\"'side'\" hasbackdrop=\"false\" opened>\n   <app-adminleftpanel></app-adminleftpanel>\n  </mat-drawer>\n\n  <mat-drawer-content>\n    <mat-toolbar>ShatterBlock Dashboard </mat-toolbar>\n    <mat-divider></mat-divider>\n    <mat-toolbar class=\"breadcrumb\"> <a style=\"text-decoration: none;\" href=\"\"> User Table &nbsp;/&nbsp; </a> User List</mat-toolbar>\n\n\n    <!--for filtering-->\n\n\n\n\n    <mat-grid-list cols=\"2\" rowHeight=\"80px\">\n      <mat-grid-tile>\n        <mat-form-field class=\"filter_input\">\n          <input class=\"filter_input\" matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search By Filter\">\n        </mat-form-field>\n      </mat-grid-tile>\n      <mat-grid-tile class=\"btn_wrapper\">\n        <button mat-raised-button (click)=\"toggle()\" >{{buttonName}}</button>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" [routerLink]=\"['/adminform']\">Add</button>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"openDialog()\">Add with Modal</button>\n\n      </mat-grid-tile>\n    </mat-grid-list>\n\n\n\n<!--class=\"mat-elevation-z8\" for box-shadow-->\n    <ng-container *ngIf=\"show\">\n    <table mat-table [dataSource]=\"dataSource\" >\n\n      <!--- Note that these columns can be defined in any order.\n            The actual rendered columns are set as a property on the row definition\" -->\n\n      <!-- Position Column -->\n      <ng-container matColumnDef=\"position\">\n        <th mat-header-cell *matHeaderCellDef> <b>No.</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef><b>Name</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n\n      <!-- Weight Column -->\n      <ng-container matColumnDef=\"username\">\n        <th mat-header-cell *matHeaderCellDef> <b>Username</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.username}} </td>\n      </ng-container>\n\n      <!-- Symbol Column -->\n      <ng-container matColumnDef=\"address\">\n        <th mat-header-cell *matHeaderCellDef> <b>Address</b> </th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.address}} </td>\n      </ng-container>\n\n\n      <ng-container matColumnDef=\"actions\">\n        <th mat-header-cell *matHeaderCellDef> <b>Actions</b> </th>\n        <td mat-cell *matCellDef=\"let element\">\n          <div class=\"action_button_wrap\">\n            <button mat-flat-button color=\"primary\"> Edit</button>\n            <button mat-flat-button color=\"warn\">Delete</button>\n          </div>\n        </td>\n      </ng-container>\n      <!--<i class=\"material-icons\">  delete_sweep </i>-->\n\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n\n    </ng-container>\n\n\n\n    <!-- for grid view structure-->\n        <ng-container *ngIf=\"hide\">\n    <mat-grid-list cols=\"4\" rowHeight=\"fit\" class=\"gridview_list\" [gutterSize]=\"'10px'\">\n\n      <mat-grid-tile *ngFor=\"let data of dataSource\">\n          <h5>Name: {{ data.name}}</h5>\n          <h5>ID: {{ data.position}}</h5>\n          <h5>User Name: {{ data.username}}</h5>\n          <h5>Address: {{ data.address}}</h5>\n        <button mat-raised-button color=\"primary\">View More</button>\n      </mat-grid-tile>\n\n\n\n    </mat-grid-list>\n\n        </ng-container>\n\n\n\n\n\n  </mat-drawer-content>\n</mat-drawer-container>"

/***/ }),

/***/ "./src/app/adminlist/adminlist.component.ts":
/*!**************************************************!*\
  !*** ./src/app/adminlist/adminlist.component.ts ***!
  \**************************************************/
/*! exports provided: AdminlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminlistComponent", function() { return AdminlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");




var DATA = [
    { position: 1, name: 'Admin1', username: 'user1@gmail.com', address: 'H' },
    { position: 2, name: 'Admin2', username: 'user1@gmail.com', address: 'H' },
    { position: 3, name: 'Admin3', username: 'user1@gmail.com', address: 'H' },
    { position: 4, name: 'Admin4', username: 'user1@gmail.com', address: 'H' },
    { position: 5, name: 'Admin5', username: 'user1@gmail.com', address: 'H' },
    { position: 6, name: 'Admin6', username: 'user1@gmail.com', address: 'H' },
    { position: 7, name: 'Admin7', username: 'user1@gmail.com', address: 'H' },
    { position: 8, name: 'Admin8', username: 'user1@gmail.com', address: 'H' },
    { position: 9, name: 'Admin9', username: 'user1@gmail.com', address: 'H' },
    { position: 10, name: 'Admin10', username: 'user1@gmail.com', address: 'H' },
    { position: 11, name: 'Admin11', username: 'user1@gmail.com', address: 'H' },
    { position: 12, name: 'Admin1', username: 'user1@gmail.com', address: 'H' },
    { position: 13, name: 'Admin1', username: 'user1@gmail.com', address: 'H' },
];
var AdminlistComponent = /** @class */ (function () {
    function AdminlistComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['position', 'name', 'username', 'address', 'actions'];
        this.dataSource = DATA;
        //  toogle views
        this.show = true;
        this.hide = false;
        this.buttonName = 'ListView';
    }
    AdminlistComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_3__["AdminmodalformComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    AdminlistComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.hide = !this.hide;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "GridView";
        else
            this.buttonName = "ListView";
    };
    ;
    AdminlistComponent.prototype.applyFilter = function (filterValue) {
        // this.dataSource = filterValue.trim().toLowerCase();
    };
    AdminlistComponent.prototype.ngOnInit = function () {
    };
    AdminlistComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminlist',
            template: __webpack_require__(/*! ./adminlist.component.html */ "./src/app/adminlist/adminlist.component.html"),
            styles: [__webpack_require__(/*! ./adminlist.component.css */ "./src/app/adminlist/adminlist.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], AdminlistComponent);
    return AdminlistComponent;
}());



/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubWFuYWdlbWVudC9hZG1pbm1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  adminmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/adminmanagement/adminmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/adminmanagement/adminmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: AdminmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmanagementComponent", function() { return AdminmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminmanagementComponent = /** @class */ (function () {
    function AdminmanagementComponent() {
    }
    AdminmanagementComponent.prototype.ngOnInit = function () {
    };
    AdminmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminmanagement',
            template: __webpack_require__(/*! ./adminmanagement.component.html */ "./src/app/adminmanagement/adminmanagement.component.html"),
            styles: [__webpack_require__(/*! ./adminmanagement.component.css */ "./src/app/adminmanagement/adminmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminmanagementComponent);
    return AdminmanagementComponent;
}());



/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.css":
/*!*************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWlubW9kYWxmb3JtL2FkbWlubW9kYWxmb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.html":
/*!**************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card adminmodalform\">\n  <mat-card-header>\n    <mat-card-title>Go to Admin Modal Form</mat-card-title>\n\n  </mat-card-header>\n  <mat-card-content >\n    <form #adminForm  >\n      <div class=\"example-container\">\n        <mat-form-field>\n          <input matInput placeholder=\"Input\">\n        </mat-form-field>\n\n        <mat-form-field>\n          <textarea matInput placeholder=\"Textarea\"></textarea>\n        </mat-form-field>\n\n        <mat-form-field>\n          <mat-select placeholder=\"Select\">\n            <mat-option value=\"option\">Option</mat-option>\n          </mat-select>\n        </mat-form-field>\n      </div>\n      <mat-form-field>\n        <textarea matInput placeholder=\"Textarea\"></textarea>\n      </mat-form-field>\n\n      <button mat-flat-button color=\"primary\">Add </button>\n    </form>\n  </mat-card-content>\n\n</mat-card>"

/***/ }),

/***/ "./src/app/adminmodalform/adminmodalform.component.ts":
/*!************************************************************!*\
  !*** ./src/app/adminmodalform/adminmodalform.component.ts ***!
  \************************************************************/
/*! exports provided: AdminmodalformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminmodalformComponent", function() { return AdminmodalformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminmodalformComponent = /** @class */ (function () {
    function AdminmodalformComponent() {
    }
    AdminmodalformComponent.prototype.ngOnInit = function () {
    };
    AdminmodalformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-adminmodalform',
            template: __webpack_require__(/*! ./adminmodalform.component.html */ "./src/app/adminmodalform/adminmodalform.component.html"),
            styles: [__webpack_require__(/*! ./adminmodalform.component.css */ "./src/app/adminmodalform/adminmodalform.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminmodalformComponent);
    return AdminmodalformComponent;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");







var ApiService = /** @class */ (function () {
    function ApiService(_http, _authHttp, cookieService
    // public jwtHelper: JwtHelperService,
    // private loggedinService: LoggedinService
    ) {
        this._http = _http;
        this._authHttp = _authHttp;
        this.cookieService = cookieService;
        this.liblistrerefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.libformvaluerefresh = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.domain = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["API_URL"];
        this._url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["API_URL"];
        this.Pdf_link = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["Pdf_link"];
        this.uplodeimg_url = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"]["uplodeimg_url"];
        //console.log('this.domain');
        //console.log(this.domain);
        //if(!this.cookieService.check('jwttoken'))
        cookieService.set('jwttoken', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1ODg0MDU3NTEsImlhdCI6MTU4ODMxOTM1MX0.M5TGx6QdtdTl5pF98CLOfv-kqU4rR1TfJ9cqvgQm6jQ');
        this.jwttoken = this.cookieService.get('jwttoken');
    }
    ApiService.prototype.updateliblistrerefreshvalue = function (val) {
        this.liblistrerefresh.next(val);
    };
    ApiService.prototype.updatelibformvaluerefresh = function (val) {
        this.liblistrerefresh.next(val);
    };
    ApiService.prototype.isTokenExpired = function () {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    };
    ApiService.prototype.getclientip = function () {
        console.log('endpoint');
        // this.isTokenExpired()
        var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getEndpoint = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        // this.isTokenExpired()
        var result = this._http.post(this._url + endpoint.source, {}, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getData = function (endpoint) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'access-token': this.cookieService.get('jwttoken')
            })
        };
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        console.log(this.cookieService.get('jwttoken'));
        // this.isTokenExpired()
        var result = this._http.post(this._url + 'datalist', endpoint, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    // getData end
    ApiService.prototype.postData = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        // console.log('endpoint');
        //console.log(endpoint);
        //console.log('httpOptions');
        // console.log(httpOptions);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postDatawithoutToken = function (endpoint, data) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.postlogin = function (endpoint, data) {
        //console.warn("postlogin",endpoint,data);
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log('endpoint');
        console.log(endpoint);
        var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    }; // postData end
    ApiService.prototype.putData = function (endpoint, data, id) {
        var httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                'Content-Type': 'application/json',
                'Authorization': this.cookieService.get('jwttoken')
            })
        };
        console.log(this.cookieService.get('jwttoken'));
        console.log("endpoint");
        console.log(endpoint);
        var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
        return result;
    };
    ApiService.prototype.getEndpointUrl = function (endpoint) {
        return this._url + endpoint;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]
            // public jwtHelper: JwtHelperService,
            // private loggedinService: LoggedinService
        ])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./adminmanagement/adminmanagement.component */ "./src/app/adminmanagement/adminmanagement.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./brandmanagement/brandmanagement.component */ "./src/app/brandmanagement/brandmanagement.component.ts");
/* harmony import */ var _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./influencersmanagement/influencersmanagement.component */ "./src/app/influencersmanagement/influencersmanagement.component.ts");
/* harmony import */ var _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./influencersdashbord/influencersdashbord.component */ "./src/app/influencersdashbord/influencersdashbord.component.ts");
/* harmony import */ var _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branddashbord/branddashbord.component */ "./src/app/branddashbord/branddashbord.component.ts");
/* harmony import */ var _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admindashbord/admindashbord.component */ "./src/app/admindashbord/admindashbord.component.ts");
/* harmony import */ var _resolveservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resolveservice */ "./src/app/resolveservice.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./forgatepassword/forgatepassword.component */ "./src/app/forgatepassword/forgatepassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./adminlist/adminlist.component */ "./src/app/adminlist/adminlist.component.ts");
/* harmony import */ var _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./adminform/adminform.component */ "./src/app/adminform/adminform.component.ts");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");
/* harmony import */ var _editroute_editroute_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./editroute/editroute.component */ "./src/app/editroute/editroute.component.ts");
/* harmony import */ var _dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dynamic-forms/dynamic-forms.component */ "./src/app/dynamic-forms/dynamic-forms.component.ts");
/* harmony import */ var _dform_dform_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./dform/dform.component */ "./src/app/dform/dform.component.ts");
/* harmony import */ var _inventorylist_listing_inventory_listing_inventory_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./inventorylist/listing-inventory/listing-inventory.component */ "./src/app/inventorylist/listing-inventory/listing-inventory.component.ts");





















var routes = [
    { path: "admin", component: _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_3__["AdminmanagementComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "", component: _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashbordComponent"] },
    // { path: "", component: LoginComponent},
    { path: "brand", component: _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__["BrandmanagementComponent"] },
    { path: "brand/:id", component: _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__["BrandmanagementComponent"] },
    { path: "admin/brand/:id/:title", component: _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_5__["BrandmanagementComponent"] },
    { path: "influencers", component: _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_6__["InfluencersmanagementComponent"] },
    { path: "influencersdashbord", component: _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_7__["InfluencersdashbordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_10__["Resolveservice"] }, data: { source: 'users', condition: {} } },
    // { path: "adminlist", component: AdminlistComponent, canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'users', condition: {} }},
    { path: "branddashbord", component: _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_8__["BranddashbordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_10__["Resolveservice"] }, data: { source: 'users', condition: {} } },
    {
        path: "admindashbord", component: _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashbordComponent"]
        // , canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'admindashboard', condition: {} }
    }, {
        path: "admindashbord1", component: _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_9__["AdmindashbordComponent"]
        // , canActivate: [AuthGuard], resolve: {results: Resolveservice}, data: { source: 'admindashboard', condition: {} }
    },
    { path: 'forgatepassword', component: _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_12__["ForgatepasswordComponent"] },
    { path: 'dynamicforms', component: _dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_18__["DynamicFormsComponent"] },
    { path: 'dforms', component: _dform_dform_component__WEBPACK_IMPORTED_MODULE_19__["DformComponent"] },
    { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_13__["ChangepasswordComponent"] },
    { path: 'adminlist', component: _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_14__["AdminlistComponent"] },
    { path: 'adminform', component: _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_15__["AdminformComponent"] },
    { path: 'adminmodalform', component: _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_16__["AdminmodalformComponent"] },
    { path: 'editroute/:id', component: _editroute_editroute_component__WEBPACK_IMPORTED_MODULE_17__["EditrouteComponent"] },
    { path: 'event', component: _inventorylist_listing_inventory_listing_inventory_component__WEBPACK_IMPORTED_MODULE_20__["ListingInventoryComponent"] },
    { path: 'changepassword', component: _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_13__["ChangepasswordComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_11__["AuthGuard"]], resolve: { results: _resolveservice__WEBPACK_IMPORTED_MODULE_10__["Resolveservice"] }, data: { source: 'users', condition: {} } },
    { path: "**", component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n    font-family: Lato;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInAge1xuICAgIGZvbnQtZmFtaWx5OiBMYXRvO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<!--<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}!\n  </h1>\n  <img width=\"300\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">\n</div>\n<h2>Here are some links to help you start: </h2>\n<ul>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/tutorial\">Tour of Heroes</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://angular.io/cli\">CLI Documentation</a></h2>\n  </li>\n  <li>\n    <h2><a target=\"_blank\" rel=\"noopener\" href=\"https://blog.angular.io/\">Angular blog</a></h2>\n  </li>\n</ul>-->\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shatterblock';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material-module */ "./src/material-module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./brandmanagement/brandmanagement.component */ "./src/app/brandmanagement/brandmanagement.component.ts");
/* harmony import */ var _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./adminmanagement/adminmanagement.component */ "./src/app/adminmanagement/adminmanagement.component.ts");
/* harmony import */ var _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./influencersmanagement/influencersmanagement.component */ "./src/app/influencersmanagement/influencersmanagement.component.ts");
/* harmony import */ var _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admindashbord/admindashbord.component */ "./src/app/admindashbord/admindashbord.component.ts");
/* harmony import */ var _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./branddashbord/branddashbord.component */ "./src/app/branddashbord/branddashbord.component.ts");
/* harmony import */ var _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./influencersdashbord/influencersdashbord.component */ "./src/app/influencersdashbord/influencersdashbord.component.ts");
/* harmony import */ var _app_resolveservice__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../app/resolveservice */ "./src/app/resolveservice.ts");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./forgatepassword/forgatepassword.component */ "./src/app/forgatepassword/forgatepassword.component.ts");
/* harmony import */ var _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./changepassword/changepassword.component */ "./src/app/changepassword/changepassword.component.ts");
/* harmony import */ var _listing_listing_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./listing/listing.component */ "./src/app/listing/listing.component.ts");
/* harmony import */ var _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./adminlist/adminlist.component */ "./src/app/adminlist/adminlist.component.ts");
/* harmony import */ var _adminleftpanel_adminleftpanel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./adminleftpanel/adminleftpanel.component */ "./src/app/adminleftpanel/adminleftpanel.component.ts");
/* harmony import */ var _projects_listing_src_lib_dynamic_form_builder_dynamic_form_builder_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.module */ "./projects/listing/src/lib/dynamic-form-builder/dynamic-form-builder.module.ts");
/* harmony import */ var _projects_listing_src_lib_components_button_button_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/button/button.component */ "./projects/listing/src/lib/components/button/button.component.ts");
/* harmony import */ var _projects_listing_src_lib_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/checkbox/checkbox.component */ "./projects/listing/src/lib/components/checkbox/checkbox.component.ts");
/* harmony import */ var _projects_listing_src_lib_components_date_date_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/date/date.component */ "./projects/listing/src/lib/components/date/date.component.ts");
/* harmony import */ var _projects_listing_src_lib_components_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/dynamic-field/dynamic-field.directive */ "./projects/listing/src/lib/components/dynamic-field/dynamic-field.directive.ts");
/* harmony import */ var _projects_listing_src_lib_components_input_input_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/input/input.component */ "./projects/listing/src/lib/components/input/input.component.ts");
/* harmony import */ var _projects_listing_src_lib_components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/radiobutton/radiobutton.component */ "./projects/listing/src/lib/components/radiobutton/radiobutton.component.ts");
/* harmony import */ var _projects_listing_src_lib_components_select_select_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../projects/listing/src/lib/components/select/select.component */ "./projects/listing/src/lib/components/select/select.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./adminform/adminform.component */ "./src/app/adminform/adminform.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./adminmodalform/adminmodalform.component */ "./src/app/adminmodalform/adminmodalform.component.ts");
/* harmony import */ var _adminheader_adminheader_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./adminheader/adminheader.component */ "./src/app/adminheader/adminheader.component.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var listing__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! listing */ "./dist/listing/fesm5/listing-angular7.js");
/* harmony import */ var _editroute_editroute_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./editroute/editroute.component */ "./src/app/editroute/editroute.component.ts");
/* harmony import */ var _dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./dynamic-forms/dynamic-forms.component */ "./src/app/dynamic-forms/dynamic-forms.component.ts");
/* harmony import */ var _dform_dform_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./dform/dform.component */ "./src/app/dform/dform.component.ts");
/* harmony import */ var _customdata_customdata_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./customdata/customdata.component */ "./src/app/customdata/customdata.component.ts");
/* harmony import */ var _inventorylist_listing_inventory_listing_inventory_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./inventorylist/listing-inventory/listing-inventory.component */ "./src/app/inventorylist/listing-inventory/listing-inventory.component.ts");
/* harmony import */ var _btn_btn_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./btn/btn.component */ "./src/app/btn/btn.component.ts");























// import { AmingridlistComponent } from './amingridlist/amingridlist.component';

//import { ResolvecomponentComponent } from './resolvecomponent/resolvecomponent.component';

// import { FieldConfig } from '../../projects/listing/src/lib/components/field.interface';




//import { DynamicFormComponent } from '../../projects/listing/src/lib/components/dynamic-form/dynamic-form.component';



//MATERIAL


















//import {ShowformComponent} from "listing/lib/showform/showform.component";
//import {ShowformComponent} from "listing/lib/showform/showform.component";
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _projects_listing_src_lib_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_26__["CheckboxComponent"],
                _projects_listing_src_lib_components_date_date_component__WEBPACK_IMPORTED_MODULE_27__["DateComponent"],
                _projects_listing_src_lib_components_dynamic_field_dynamic_field_directive__WEBPACK_IMPORTED_MODULE_28__["DynamicFieldDirective"],
                _dynamic_forms_dynamic_forms_component__WEBPACK_IMPORTED_MODULE_45__["DynamicFormsComponent"],
                //DynamicFormComponent,
                _projects_listing_src_lib_components_input_input_component__WEBPACK_IMPORTED_MODULE_29__["InputComponent"],
                _projects_listing_src_lib_components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_30__["RadiobuttonComponent"],
                _projects_listing_src_lib_components_select_select_component__WEBPACK_IMPORTED_MODULE_31__["SelectComponent"],
                _projects_listing_src_lib_components_button_button_component__WEBPACK_IMPORTED_MODULE_25__["ButtonComponent"],
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _brandmanagement_brandmanagement_component__WEBPACK_IMPORTED_MODULE_10__["BrandmanagementComponent"],
                _adminmanagement_adminmanagement_component__WEBPACK_IMPORTED_MODULE_11__["AdminmanagementComponent"],
                _influencersmanagement_influencersmanagement_component__WEBPACK_IMPORTED_MODULE_12__["InfluencersmanagementComponent"],
                _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__["AdmindashbordComponent"],
                _branddashbord_branddashbord_component__WEBPACK_IMPORTED_MODULE_14__["BranddashbordComponent"],
                _influencersdashbord_influencersdashbord_component__WEBPACK_IMPORTED_MODULE_15__["InfluencersdashbordComponent"],
                _forgatepassword_forgatepassword_component__WEBPACK_IMPORTED_MODULE_19__["ForgatepasswordComponent"],
                _changepassword_changepassword_component__WEBPACK_IMPORTED_MODULE_20__["ChangepasswordComponent"],
                _listing_listing_component__WEBPACK_IMPORTED_MODULE_21__["ListingComponent"],
                // ShowformComponent,
                _adminlist_adminlist_component__WEBPACK_IMPORTED_MODULE_22__["AdminlistComponent"],
                _adminleftpanel_adminleftpanel_component__WEBPACK_IMPORTED_MODULE_23__["AdminleftpanelComponent"],
                _adminform_adminform_component__WEBPACK_IMPORTED_MODULE_37__["AdminformComponent"],
                _adminmodalform_adminmodalform_component__WEBPACK_IMPORTED_MODULE_40__["AdminmodalformComponent"],
                _adminheader_adminheader_component__WEBPACK_IMPORTED_MODULE_41__["AdminheaderComponent"],
                _editroute_editroute_component__WEBPACK_IMPORTED_MODULE_44__["EditrouteComponent"],
                //DynamicFormsComponent,
                _dform_dform_component__WEBPACK_IMPORTED_MODULE_46__["DformComponent"],
                _customdata_customdata_component__WEBPACK_IMPORTED_MODULE_47__["CustomdataComponent"],
                _inventorylist_listing_inventory_listing_inventory_component__WEBPACK_IMPORTED_MODULE_48__["ListingInventoryComponent"],
                _btn_btn_component__WEBPACK_IMPORTED_MODULE_49__["BtnComponent"],
                _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__["ExternalDataModalComponent"]
                //Resolveservice,
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_32__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _projects_listing_src_lib_dynamic_form_builder_dynamic_form_builder_module__WEBPACK_IMPORTED_MODULE_24__["DynamicFormBuilderModule"],
                //MATERIAL
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_34__["MatTableModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_35__["MatButtonModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_36__["MatDialogModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_38__["MatCardModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_42__["MatToolbarModule"],
                listing__WEBPACK_IMPORTED_MODULE_43__["ListingModule"]
            ],
            providers: [ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], _app_resolveservice__WEBPACK_IMPORTED_MODULE_16__["Resolveservice"], _app_api_service__WEBPACK_IMPORTED_MODULE_17__["ApiService"], _auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            exports: [
                _btn_btn_component__WEBPACK_IMPORTED_MODULE_49__["BtnComponent"]
            ],
            entryComponents: [
                _projects_listing_src_lib_components_input_input_component__WEBPACK_IMPORTED_MODULE_29__["InputComponent"],
                _projects_listing_src_lib_components_button_button_component__WEBPACK_IMPORTED_MODULE_25__["ButtonComponent"],
                _projects_listing_src_lib_components_select_select_component__WEBPACK_IMPORTED_MODULE_31__["SelectComponent"],
                _projects_listing_src_lib_components_date_date_component__WEBPACK_IMPORTED_MODULE_27__["DateComponent"],
                _projects_listing_src_lib_components_radiobutton_radiobutton_component__WEBPACK_IMPORTED_MODULE_30__["RadiobuttonComponent"],
                _projects_listing_src_lib_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_26__["CheckboxComponent"],
                _admindashbord_admindashbord_component__WEBPACK_IMPORTED_MODULE_13__["ExternalDataModalComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");



// import { JwtHelperService } from '@auth0/angular-jwt';

// import { tokenNotExpired } from 'angular2-jwt';
// import { LoggedinService } from './loggedin.service';
// import { BusyService } from '../busy.service';


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, http, _apiService, cookieService
    // private loggedinService: LoggedinService
    ) {
        this.router = router;
        this.http = http;
        this._apiService = _apiService;
        this.cookieService = cookieService;
    }
    AuthGuard.prototype.canActivate = function () {
        console.log('in auth guard');
        console.log(this.cookieService.get('jwttoken'));
        if (this.cookieService.get('jwttoken') == null || this.cookieService.get('jwttoken').length < 10) {
            // alert(7);
            this.router.navigate(['/']);
        }
        else
            return true;
        if (this.cookieService.get('jwttoken') == null || this.cookieService.get('jwttoken').length < 10) {
            return false;
        }
        else
            return true;
        /*
        private loggedinService: LoggedinService,
         if (tokenNotExpired()) {
           
     
           this.loggedinService.announceLoggedin(true);
           return true;
         }
         */
        //this.loggedinService.announceLoggedin(false);
        //localStorage.removeItem('id_token');
        //this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
            _api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]
            // private loggedinService: LoggedinService
        ])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.css":
/*!***********************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kZGFzaGJvcmQvYnJhbmRkYXNoYm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.html":
/*!************************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  branddashbord works!\n</p>\n"

/***/ }),

/***/ "./src/app/branddashbord/branddashbord.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/branddashbord/branddashbord.component.ts ***!
  \**********************************************************/
/*! exports provided: BranddashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranddashbordComponent", function() { return BranddashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BranddashbordComponent = /** @class */ (function () {
    function BranddashbordComponent() {
    }
    BranddashbordComponent.prototype.ngOnInit = function () {
    };
    BranddashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-branddashbord',
            template: __webpack_require__(/*! ./branddashbord.component.html */ "./src/app/branddashbord/branddashbord.component.html"),
            styles: [__webpack_require__(/*! ./branddashbord.component.css */ "./src/app/branddashbord/branddashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BranddashbordComponent);
    return BranddashbordComponent;
}());



/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.css":
/*!***************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JyYW5kbWFuYWdlbWVudC9icmFuZG1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p style=\"background: white;color: black\">\n  brandmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/brandmanagement/brandmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/brandmanagement/brandmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: BrandmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandmanagementComponent", function() { return BrandmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BrandmanagementComponent = /** @class */ (function () {
    function BrandmanagementComponent() {
    }
    BrandmanagementComponent.prototype.ngOnInit = function () {
    };
    BrandmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-brandmanagement',
            template: __webpack_require__(/*! ./brandmanagement.component.html */ "./src/app/brandmanagement/brandmanagement.component.html"),
            styles: [__webpack_require__(/*! ./brandmanagement.component.css */ "./src/app/brandmanagement/brandmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BrandmanagementComponent);
    return BrandmanagementComponent;
}());



/***/ }),

/***/ "./src/app/btn/btn.component.css":
/*!***************************************!*\
  !*** ./src/app/btn/btn.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2J0bi9idG4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/btn/btn.component.html":
/*!****************************************!*\
  !*** ./src/app/btn/btn.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  btn works!\n</p>\n"

/***/ }),

/***/ "./src/app/btn/btn.component.ts":
/*!**************************************!*\
  !*** ./src/app/btn/btn.component.ts ***!
  \**************************************/
/*! exports provided: BtnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnComponent", function() { return BtnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BtnComponent = /** @class */ (function () {
    function BtnComponent() {
    }
    BtnComponent.prototype.ngOnInit = function () {
    };
    BtnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-btn',
            template: __webpack_require__(/*! ./btn.component.html */ "./src/app/btn/btn.component.html"),
            styles: [__webpack_require__(/*! ./btn.component.css */ "./src/app/btn/btn.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BtnComponent);
    return BtnComponent;
}());



/***/ }),

/***/ "./src/app/changepassword/changepassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYW5nZXBhc3N3b3JkL2NoYW5nZXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.html":
/*!**************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\">\n    <mat-card-subtitle [formGroup]=\"myForm\">\n\n      <h2>Reset Password</h2>\n      <!--<p>welcome back!</p>-->\n      <!--<mat-error class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</mat-error>-->\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\">\n        <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Minimum length for password is 4!</mat-error>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Confirm Password\" type=\"password\" [formControl]=\"myForm.controls['confirmpassword']\" >\n        <mat-error *ngIf=\"!myForm.controls['confirmpassword'].valid && myForm.controls['confirmpassword'].touched\">Password does not match </mat-error>\n        <!--<mat-error *ngIf=\"myForm.hasError('machpassword')\">Password don't mach</mat-error>-->\n      </mat-form-field>\n\n      <mat-card-content >\n        <button mat-button [disabled]=\"!myForm.valid\" (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Reset Password</button>\n      </mat-card-content>\n\n      <!--<mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>-->\n\n\n\n\n    </mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/changepassword/changepassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/changepassword/changepassword.component.ts ***!
  \************************************************************/
/*! exports provided: ChangepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepasswordComponent", function() { return ChangepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");





// import { CookieService } from 'ngx-cookie-service';

var ChangepasswordComponent = /** @class */ (function () {
    function ChangepasswordComponent(_http, fb, router, apiService) {
        this._http = _http;
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.endpoint = 'addorupdatedata';
        this.url1 = '';
        this.serverurl = '';
        this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        // this.serverurl = (this.url1 + this.endpoint);
        // console.log(this.serverurl);
    }
    ChangepasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4)])],
            confirmpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        }, { validator: this.machpassword('password', 'confirmpassword') });
    };
    ChangepasswordComponent.prototype.machpassword = function (passwordkye, confirmpasswordkye) {
        return function (group) {
            var passwordInput = group.controls[passwordkye], confirmpasswordInput = group.controls[confirmpasswordkye];
            if (passwordInput.value !== confirmpasswordInput.value) {
                return confirmpasswordInput.setErrors({ notEquivalent: true });
            }
            else {
                return confirmpasswordInput.setErrors(null);
            }
        };
    };
    ChangepasswordComponent.prototype.onSubmit = function () {
        var x;
        var data = this.myForm.value;
        console.log(data);
        console.log(this.myForm.value.password);
        console.log(this.myForm.value.confirmpassword);
        /*this.apiService.putData(this.endpoint, data).subscribe(res=> {
          let result: any = {};
          result = res;
          console.log('result');
          console.log(result);
        })*/
        /*if (this.myForm.value.password != this.myForm.value.confirmpassword) {
          console.log("Password don't mach");
        }*/
    };
    ChangepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-changepassword',
            template: __webpack_require__(/*! ./changepassword.component.html */ "./src/app/changepassword/changepassword.component.html"),
            styles: [__webpack_require__(/*! ./changepassword.component.css */ "./src/app/changepassword/changepassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], ChangepasswordComponent);
    return ChangepasswordComponent;
}());



/***/ }),

/***/ "./src/app/customdata/customdata.component.css":
/*!*****************************************************!*\
  !*** ./src/app/customdata/customdata.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1c3RvbWRhdGEvY3VzdG9tZGF0YS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/customdata/customdata.component.html":
/*!******************************************************!*\
  !*** ./src/app/customdata/customdata.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  customdata works! here\n</p>\n"

/***/ }),

/***/ "./src/app/customdata/customdata.component.ts":
/*!****************************************************!*\
  !*** ./src/app/customdata/customdata.component.ts ***!
  \****************************************************/
/*! exports provided: CustomdataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomdataComponent", function() { return CustomdataComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CustomdataComponent = /** @class */ (function () {
    function CustomdataComponent() {
    }
    CustomdataComponent.prototype.ngOnInit = function () {
    };
    CustomdataComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customdata',
            template: __webpack_require__(/*! ./customdata.component.html */ "./src/app/customdata/customdata.component.html"),
            styles: [__webpack_require__(/*! ./customdata.component.css */ "./src/app/customdata/customdata.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CustomdataComponent);
    return CustomdataComponent;
}());



/***/ }),

/***/ "./src/app/dform/dform.component.css":
/*!*******************************************!*\
  !*** ./src/app/dform/dform.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rmb3JtL2Rmb3JtLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/dform/dform.component.html":
/*!********************************************!*\
  !*** ./src/app/dform/dform.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<span class=\"bg_white\">\n\n  &lt;!&ndash;<mat-card class=\"registration_form\">\n    <mat-card-header>\n      <mat-card-title> Registration Form</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <dynamic-form [fields]=\"regConfig\" (submit)=\"submit($event)\"></dynamic-form>\n    </mat-card-content>\n    <mat-card-content>\n      {{ form.value | json}}\n    </mat-card-content>\n  </mat-card>&ndash;&gt;\n\n\n\n&lt;!&ndash;<div class=\"form\">&ndash;&gt;\n  &lt;!&ndash;<div style=\"text-align:center\">&ndash;&gt;\n    &lt;!&ndash;<h1>&ndash;&gt;\n      &lt;!&ndash;Registration Form&ndash;&gt;\n    &lt;!&ndash;</h1>&ndash;&gt;\n  &lt;!&ndash;</div>&ndash;&gt;\n  &lt;!&ndash;&ndash;&gt;\n  &lt;!&ndash;&ndash;&gt;\n  &lt;!&ndash;<div class=\"margin-top\">&ndash;&gt;\n    &lt;!&ndash;{{ form.value | json }}&ndash;&gt;\n  &lt;!&ndash;</div>&ndash;&gt;\n&lt;!&ndash;</div>&ndash;&gt;\n\n  </span>-->\n"

/***/ }),

/***/ "./src/app/dform/dform.component.ts":
/*!******************************************!*\
  !*** ./src/app/dform/dform.component.ts ***!
  \******************************************/
/*! exports provided: DformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DformComponent", function() { return DformComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



//import {DynamicFormComponent} from '../../../projects/listing/src/lib/components/dynamic-form/dynamic-form.component'
var DformComponent = /** @class */ (function () {
    function DformComponent() {
        //@ViewChild(DynamicFormComponent) form: DynamicFormComponent;
        this.regConfig = [
            {
                type: "input",
                label: "Username",
                inputType: "text",
                name: "name",
                validations: [
                    {
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Name Required"
                    },
                    {
                        name: "pattern",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-zA-Z]+$"),
                        message: "Accept only text"
                    }
                ]
            },
            {
                type: "input",
                label: "Email Address",
                inputType: "email",
                name: "email",
                validations: [
                    {
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Email Required"
                    },
                    {
                        name: "pattern",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
                        message: "Invalid email"
                    }
                ]
            },
            {
                type: "input",
                label: "Phone number",
                inputType: "number",
                name: "Phone",
                validations: [
                    {
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Phone number Required"
                    },
                    {
                        name: "pattern",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("/^[1-9]{1}[0-9]{9}$/"),
                        message: "Invalid phone number"
                    }
                ]
            },
            {
                type: "input",
                label: "Password",
                inputType: "password",
                name: "password",
                validations: [
                    {
                        name: "required",
                        validator: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                        message: "Password Required"
                    }
                ]
            },
            {
                type: "radiobutton",
                label: "Gender",
                name: "gender",
                options: ["Male", "Female"],
                value: "Male"
            },
            /*{
              type: "date",
              label: "DOB",
              name: "dob",
              validations: [
                {
                  name: "required",
                  validator: Validators.required,
                  message: "Date of Birth Required"
                }
              ]
            },*/
            {
                type: "select",
                label: "Country",
                name: "country",
                value: "UK",
                options: ["India", "UAE", "UK", "US"]
            },
            {
                type: "checkbox",
                label: "Accept Terms",
                name: "term",
                value: true
            },
            {
                type: "button",
                label: "Save"
            }
        ];
    }
    DformComponent.prototype.submit = function (value) { };
    DformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dform',
            template: __webpack_require__(/*! ./dform.component.html */ "./src/app/dform/dform.component.html"),
            styles: [__webpack_require__(/*! ./dform.component.css */ "./src/app/dform/dform.component.css")]
        })
    ], DformComponent);
    return DformComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-forms/dynamic-forms.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dynamic-forms/dynamic-forms.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2R5bmFtaWMtZm9ybXMvZHluYW1pYy1mb3Jtcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/dynamic-forms/dynamic-forms.component.html":
/*!************************************************************!*\
  !*** ./src/app/dynamic-forms/dynamic-forms.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n\n<span class=\"bg_white\">\n    <mat-card class=\"example-card\">\n  <mat-card-header>\n    <mat-card-title> </mat-card-title>\n    <mat-card-title> Dynamic Forms</mat-card-title>\n  </mat-card-header>\n\n  <mat-card-content>\n   <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder>\n\n\n\n  </mat-card-content>\n\n\n        <mat-card-content>\n            <span class=\"text-box_wrapper\" [formGroup]=\"form\">\n                <label>JSON</label>\n\n                    <textarea  formControlName=\"fields\" class=\"form-control\" rows=\"5\"></textarea>\n\n            </span>\n        </mat-card-content>\n</mat-card>\n\n</span>\n\n\n\n<!--\n<div class=\"col-sm-12\">\n    <div class=\"card\">\n        <div class=\"card-header\">Dynamic Forms</div>\n        <div class=\"card-body\">\n            <dynamic-form-builder [fields]=\"getFields()\"></dynamic-form-builder>\n        </div>\n    </div>\n</div>\n\n<div class=\"col-sm-12\">\n    <div class=\"form-group\" [formGroup]=\"form\">\n        <label>JSON</label>\n        <textarea formControlName=\"fields\" class=\"form-control\" rows=\"3\"></textarea>\n    </div>\n</div>-->\n"

/***/ }),

/***/ "./src/app/dynamic-forms/dynamic-forms.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dynamic-forms/dynamic-forms.component.ts ***!
  \**********************************************************/
/*! exports provided: DynamicFormsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicFormsComponent", function() { return DynamicFormsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var DynamicFormsComponent = /** @class */ (function () {
    function DynamicFormsComponent() {
        var _this = this;
        this.fields = [
            {
                type: 'text',
                name: 'firstName',
                label: 'First Name',
                value: 'firstname',
                required: true,
            },
            {
                type: 'text',
                name: 'lastName',
                label: 'Last Name',
                value: '',
                required: true,
            },
            {
                type: 'text',
                name: 'Password',
                label: 'Password',
                value: '',
                // required: true,
                onChack: this.onChack.bind(this)
            },
            {
                type: 'text',
                name: 'email',
                label: 'Email',
                value: '',
                required: true,
            },
            /*{
              type: 'file',
              name: 'picture',
              label: 'Picture',
              required: true,
              onUpload: this.onUpload.bind(this)
            },*/
            {
                type: 'dropdown',
                name: 'country',
                label: 'Country',
                value: 'in',
                required: true,
                options: [
                    { key: 'in', label: 'India' },
                    { key: 'us', label: 'USA' }
                ]
            },
            {
                type: 'radio',
                name: 'country',
                label: 'Country',
                value: 'in',
                required: true,
                options: [
                    { key: 'm', label: 'Male' },
                    { key: 'f', label: 'Female' }
                ]
            },
            {
                type: 'checkbox',
                name: 'hobby',
                label: 'Hobby',
                required: true,
                options: [
                    { key: 'f', label: 'Fishing' },
                    { key: 'c', label: 'Cooking' }
                ]
            }
        ];
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            fields: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](JSON.stringify(this.fields))
        });
        this.unsubcribe = this.form.valueChanges.subscribe(function (update) {
            console.log('update');
            console.log(update);
            _this.fields = JSON.parse(update.fields);
            console.log(_this.fields);
        });
    }
    DynamicFormsComponent.prototype.onUpload = function (e) {
        console.log('e');
        console.log(e);
    };
    DynamicFormsComponent.prototype.onChack = function (e) {
        console.log(e);
    };
    DynamicFormsComponent.prototype.getFields = function () {
        // console.log(this.fields);
        return this.fields;
    };
    DynamicFormsComponent.prototype.ngDistroy = function () {
        this.unsubcribe();
        console.log("this.unsubcribe");
        console.log(this.unsubcribe);
    };
    DynamicFormsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dynamic-forms',
            template: __webpack_require__(/*! ./dynamic-forms.component.html */ "./src/app/dynamic-forms/dynamic-forms.component.html"),
            styles: [__webpack_require__(/*! ./dynamic-forms.component.css */ "./src/app/dynamic-forms/dynamic-forms.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DynamicFormsComponent);
    return DynamicFormsComponent;
}());



/***/ }),

/***/ "./src/app/editroute/editroute.component.css":
/*!***************************************************!*\
  !*** ./src/app/editroute/editroute.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXRyb3V0ZS9lZGl0cm91dGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/editroute/editroute.component.html":
/*!****************************************************!*\
  !*** ./src/app/editroute/editroute.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editroute works!\n</p>\n"

/***/ }),

/***/ "./src/app/editroute/editroute.component.ts":
/*!**************************************************!*\
  !*** ./src/app/editroute/editroute.component.ts ***!
  \**************************************************/
/*! exports provided: EditrouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditrouteComponent", function() { return EditrouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EditrouteComponent = /** @class */ (function () {
    function EditrouteComponent() {
    }
    EditrouteComponent.prototype.ngOnInit = function () {
    };
    EditrouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editroute',
            template: __webpack_require__(/*! ./editroute.component.html */ "./src/app/editroute/editroute.component.html"),
            styles: [__webpack_require__(/*! ./editroute.component.css */ "./src/app/editroute/editroute.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EditrouteComponent);
    return EditrouteComponent;
}());



/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.css":
/*!***************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.mat-card{\n    display: block;\n    text-align: center;\n    margin-top: 121px;\n    width: auto;\n    border: none;\n    box-shadow: none;\n    overflow: hidden;\n    max-width: 100%;\n    margin: 119px auto;\n    margin-right: 523px;\n    margin-left: 500px;\n    margin-top: 273px;\n}\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ2F0ZXBhc3N3b3JkL2ZvcmdhdGVwYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Q0FlQyIsImZpbGUiOiJzcmMvYXBwL2ZvcmdhdGVwYXNzd29yZC9mb3JnYXRlcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4ubWF0LWNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEyMXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTE5cHggYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IDUyM3B4O1xuICAgIG1hcmdpbi1sZWZ0OiA1MDBweDtcbiAgICBtYXJnaW4tdG9wOiAyNzNweDtcbn1cbiovXG4iXX0= */"

/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.html":
/*!****************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<mat-card class=\"mat-card\">\n  <mat-card-title>Forgate Password</mat-card-title>\n  &lt;!&ndash;<mat-card-subtitle>Welcome back</mat-card-subtitle>&ndash;&gt;\n\n\n\n  <mat-card-subtitle [formGroup]=\"myForm\" (autocomplete)=\"on\">\n\n    <mat-form-field>\n      <input matInput placeholder=\"Email id\" [formControl]=\"myForm.controls['email']\" >\n      <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Email field can not be blank</span>\n    </mat-form-field>\n    <br>\n    <button mat-button [disabled]=\"!myForm.valid\" (click)=\"forgatPassword()\" color=\"primary\">Forgate Password</button>\n\n\n  </mat-card-subtitle>\n</mat-card>-->\n\n\n\n<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\">\n    <mat-card-subtitle [formGroup]=\"myForm\">\n\n      <h2>Forget Password</h2>\n      <!--<p>welcome back!</p>-->\n      <span class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</span>\n\n      <mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Email\" [formControl]=\"myForm.controls['email']\" >\n        <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Email field can not be blank</span>\n        <span></span>\n      </mat-form-field>\n\n      <!--<mat-form-field class=\"form-group\">\n        <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n        <span  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Password field can not be blank</span>\n      </mat-form-field>-->\n      <mat-card-content >\n        <button mat-button [disabled]=\"!myForm.valid\" (click)=\"forgetPassword()\" class=\"s_getmyoffer_login_button\"  >Send Email</button>\n      </mat-card-content>\n\n      <!--<mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>-->\n\n\n\n\n    </mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n"

/***/ }),

/***/ "./src/app/forgatepassword/forgatepassword.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/forgatepassword/forgatepassword.component.ts ***!
  \**************************************************************/
/*! exports provided: ForgatepasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgatepasswordComponent", function() { return ForgatepasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");





// import { CookieService } from 'ngx-cookie-service';

var ForgatepasswordComponent = /** @class */ (function () {
    function ForgatepasswordComponent(_http, fb, router, apiService) {
        this._http = _http;
        this.fb = fb;
        this.router = router;
        this.apiService = apiService;
        this.endpoint = 'sendforgotpasswordemail';
        this.url1 = '';
        this.serverurl = '';
        this.errormg = '';
        this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        this.serverurl = (this.url1 + this.endpoint);
        console.log(this.serverurl);
    }
    ForgatepasswordComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])]
        });
    };
    ForgatepasswordComponent.prototype.forgetPassword = function () {
        var _this = this;
        var x;
        var data = this.myForm.value;
        console.log('data');
        console.log(data);
        for (x in this.myForm.value) {
            this.myForm.controls[x].markAsTouched();
        }
        this.result = this.apiService.postData(this.endpoint, data).subscribe(function (res) {
            var result = {};
            result = res;
            console.log('result.item');
            // console.log(result.item);
            if (result.status == 'error1') {
                _this.errormg = result.msg;
            }
            if (result.status == 'error2') {
                _this.errormg = result.msg;
            }
        });
        /*
        this._http.post(this.serverurl, data).subscribe(res => {
          let result: any = {};
          result = res;
          console.log('result.item');
          // console.log(result.item);
          if (result.status == 'error1') {
            this.errormg = result.msg;
          }
          if (result.status == 'error2') {
            this.errormg = result.msg;
          }
        });
        */
    };
    ForgatepasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgatepassword',
            template: __webpack_require__(/*! ./forgatepassword.component.html */ "./src/app/forgatepassword/forgatepassword.component.html"),
            styles: [__webpack_require__(/*! ./forgatepassword.component.css */ "./src/app/forgatepassword/forgatepassword.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
    ], ForgatepasswordComponent);
    return ForgatepasswordComponent;
}());



/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZmx1ZW5jZXJzZGFzaGJvcmQvaW5mbHVlbmNlcnNkYXNoYm9yZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.html":
/*!************************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  influencersdashbord works!\n</p>\n"

/***/ }),

/***/ "./src/app/influencersdashbord/influencersdashbord.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/influencersdashbord/influencersdashbord.component.ts ***!
  \**********************************************************************/
/*! exports provided: InfluencersdashbordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencersdashbordComponent", function() { return InfluencersdashbordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfluencersdashbordComponent = /** @class */ (function () {
    function InfluencersdashbordComponent() {
    }
    InfluencersdashbordComponent.prototype.ngOnInit = function () {
    };
    InfluencersdashbordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-influencersdashbord',
            template: __webpack_require__(/*! ./influencersdashbord.component.html */ "./src/app/influencersdashbord/influencersdashbord.component.html"),
            styles: [__webpack_require__(/*! ./influencersdashbord.component.css */ "./src/app/influencersdashbord/influencersdashbord.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfluencersdashbordComponent);
    return InfluencersdashbordComponent;
}());



/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZmx1ZW5jZXJzbWFuYWdlbWVudC9pbmZsdWVuY2Vyc21hbmFnZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  influencersmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/influencersmanagement/influencersmanagement.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/influencersmanagement/influencersmanagement.component.ts ***!
  \**************************************************************************/
/*! exports provided: InfluencersmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencersmanagementComponent", function() { return InfluencersmanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InfluencersmanagementComponent = /** @class */ (function () {
    function InfluencersmanagementComponent() {
    }
    InfluencersmanagementComponent.prototype.ngOnInit = function () {
    };
    InfluencersmanagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-influencersmanagement',
            template: __webpack_require__(/*! ./influencersmanagement.component.html */ "./src/app/influencersmanagement/influencersmanagement.component.html"),
            styles: [__webpack_require__(/*! ./influencersmanagement.component.css */ "./src/app/influencersmanagement/influencersmanagement.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfluencersmanagementComponent);
    return InfluencersmanagementComponent;
}());



/***/ }),

/***/ "./src/app/inventorylist/listing-inventory/listing-inventory.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/inventorylist/listing-inventory/listing-inventory.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.inventory_banner .inventory_title{ font-size: 48px; color: #fff; font-family: \"HelveticaBold\"; text-transform: uppercase;  }\r\n.inventory_banner .inventory_para{ font-size: 24px; color: #89fbff; font-family: \"HelveticaBold\"; margin: 0;  }\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW52ZW50b3J5bGlzdC9saXN0aW5nLWludmVudG9yeS9saXN0aW5nLWludmVudG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxvQ0FBb0MsZUFBZSxFQUFFLFdBQVcsRUFBRSw0QkFBNEIsRUFBRSx5QkFBeUIsR0FBRztBQUM1SCxtQ0FBbUMsZUFBZSxFQUFFLGNBQWMsRUFBRSw0QkFBNEIsRUFBRSxTQUFTLEdBQUciLCJmaWxlIjoic3JjL2FwcC9pbnZlbnRvcnlsaXN0L2xpc3RpbmctaW52ZW50b3J5L2xpc3RpbmctaW52ZW50b3J5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmludmVudG9yeV9iYW5uZXIgLmludmVudG9yeV90aXRsZXsgZm9udC1zaXplOiA0OHB4OyBjb2xvcjogI2ZmZjsgZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhQm9sZFwiOyB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyAgfVxyXG4uaW52ZW50b3J5X2Jhbm5lciAuaW52ZW50b3J5X3BhcmF7IGZvbnQtc2l6ZTogMjRweDsgY29sb3I6ICM4OWZiZmY7IGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYUJvbGRcIjsgbWFyZ2luOiAwOyAgfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/inventorylist/listing-inventory/listing-inventory.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/inventorylist/listing-inventory/listing-inventory.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n    <mat-card class=\"main_wrapper\">\r\n        <mat-card-content class=\"inventory_banner\">\r\n            <mat-card-title class=\"inventory_title\">Inventory List</mat-card-title>\r\n            <p class=\"inventory_para\">Expansive Inventory Listing For An One-Stop-Shop For All Your Hospital Equipment Needs</p>\r\n        </mat-card-content>\r\n\r\n        <mat-card-content class=\"bred_cram_wrapper\">\r\n            <a mat-list-item routerLinkActive=\"active activebread\" routerLink=\"\"> Dashboard </a>\r\n            <a mat-list-item routerLinkActive=\"active activebread\" routerLink=\"\"> inventory list </a> \r\n         \r\n        </mat-card-content>\r\n        <!-- Add Brand Button  -->\r\n        <mat-toolbar class=\"content_header_wrapper\">\r\n            <mat-card-title class=\"toolbar_header\">inventory list </mat-card-title>\r\n            <button class=\"singleButton\" mat-raised-button [routerLink]=\"['/inventory/inventory-list/add']\"><mat-icon fontSet=\"fontawesome\" fontIcon=\"fa-plus\"></mat-icon>Add Inventory</button>\r\n        </mat-toolbar>\r\n\r\n\r\n        <!-- Listing goes here  -->\r\n        <lib-listing *ngIf=\"inventoryListData != null && inventoryListData.length>0\"\r\n            [datasource]=\"inventoryListData\"\r\n            [skip]=\"inventoryListData_skip\" \r\n            [modify_header_array]=\"inventoryListData_modify_header\"\r\n            [sourcedata]=\"tableName\" \r\n            [apiurl]=\"apiUrl\"\r\n            [editroute]=\"editUrl\"\r\n            [jwttoken]=\"user_cookie\"\r\n            [statusarr]=\"status\" \r\n            [updateendpoint]=\"UpdateEndpoint\" \r\n            [deleteendpoint]=\"deleteEndpoint\"\r\n            [date_search_endpoint]=\"searchingEndpoint\" \r\n            [date_search_source]=\"view\" \r\n            [search_settings]=\"search_settings\"\r\n            [detail_datatype]=\"image_detail_datatype\"\r\n            [detail_skip_array]=\"detail_skip_array\">\r\n        </lib-listing>\r\n\r\n        <h2 *ngIf=\"inventoryListData.length == 0\">No record found.</h2>\r\n        <!-- Listing ends here  -->\r\n    </mat-card>"

/***/ }),

/***/ "./src/app/inventorylist/listing-inventory/listing-inventory.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/inventorylist/listing-inventory/listing-inventory.component.ts ***!
  \********************************************************************************/
/*! exports provided: ListingInventoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingInventoryComponent", function() { return ListingInventoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ListingInventoryComponent = /** @class */ (function () {
    function ListingInventoryComponent(http, cookieService, router, activatedRoute) {
        this.http = http;
        this.cookieService = cookieService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.user_cookie = '';
        // ===============================Declarations=========================
        this.inventoryListData = [];
        this.inventoryListData_skip = ["_id", "description_html", "description", "created_at", "inventory_image", 'image', 'source'];
        this.detail_skip_array = ["_id"];
        this.inventoryListData_modify_header = {
            "brand name": "Brand Name",
            "parent category": "Parent Category", "priority": "Priority", "status": "Status"
        };
        this.tableName = 'inventories';
        this.UpdateEndpoint = "addorupdatedata";
        this.deleteEndpoint = "deletesingledata";
        this.searchingEndpoint = "datalist";
        this.editUrl = 'inventory/inventory-list/edit';
        this.apiUrl = 'https://i1kzfac3pe.execute-api.us-east-1.amazonaws.com/dev/api/';
        this.status = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];
        this.view = "inventories_view";
        this.search_settings = {
            selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status }],
            textsearch: [{ label: "Search By brand name...", field: 'brand_name' }]
        };
        // ====================================================================
        /*Showing Image in the Modal*/
        this.image_detail_datatype = [{
                key: "image",
                value: 'image',
                fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/files/' // Image path 
            }];
    }
    ListingInventoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        var link = "https://i1kzfac3pe.execute-api.us-east-1.amazonaws.com/dev/api/datalist";
        this.http.post(link, { "source": "inventories_list_view",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzU2MDg4MTUsImlhdCI6MTU3NTUyMjQxNX0.kF1AutQep5zEsmOGcK2HDFsRZxJkLehhVz7JvE82928" }).subscribe(function (res) {
            console.log(res);
            var result;
            result = res;
            _this.inventoryListData = result.res;
        });
    };
    ListingInventoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing-inventory',
            template: __webpack_require__(/*! ./listing-inventory.component.html */ "./src/app/inventorylist/listing-inventory/listing-inventory.component.html"),
            styles: [__webpack_require__(/*! ./listing-inventory.component.css */ "./src/app/inventorylist/listing-inventory/listing-inventory.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ListingInventoryComponent);
    return ListingInventoryComponent;
}());



/***/ }),

/***/ "./src/app/listing/listing.component.css":
/*!***********************************************!*\
  !*** ./src/app/listing/listing.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdGluZy9saXN0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9saXN0aW5nL2xpc3RpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJ7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/listing/listing.component.html":
/*!************************************************!*\
  !*** ./src/app/listing/listing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card-content [formGroup]=\"myForm\">\n  <mat-form-field>\n    <input matInput placeholder=\"name\" >\n  </mat-form-field>\n</mat-card-content>\n"

/***/ }),

/***/ "./src/app/listing/listing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/listing/listing.component.ts ***!
  \**********************************************/
/*! exports provided: ListingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingComponent", function() { return ListingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ListingComponent = /** @class */ (function () {
    function ListingComponent() {
    }
    ListingComponent.prototype.ngOnInit = function () {
    };
    ListingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-listing',
            template: __webpack_require__(/*! ./listing.component.html */ "./src/app/listing/listing.component.html"),
            styles: [__webpack_require__(/*! ./listing.component.css */ "./src/app/listing/listing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ListingComponent);
    return ListingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n.mat-card{\n    display: block;\n    text-align: center;\n    margin-top: 121px;\n    width: auto;\n    border: none;\n    box-shadow: none;\n    overflow: hidden;\n    max-width: 100%;\n    margin: 119px auto;\n}\n\n*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7OztDQWFDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4ubWF0LWNhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEyMXB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMTE5cHggYXV0bztcbn1cblxuKi9cbiJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<mat-card class=\"mat-card\">\n  <mat-card-title>Login</mat-card-title>\n  <mat-card-subtitle>Welcome back</mat-card-subtitle>\n\n\n\n<mat-card-subtitle [formGroup]=\"myForm\" (autocomplete)=\"on\">\n\n  <mat-form-field>\n    <input matInput placeholder=\"Username\" [formControl]=\"myForm.controls['email']\" >\n    <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched\">Username field can not be blank</span>\n  </mat-form-field>\n<br>\n  <mat-form-field>\n    <input matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n    <span  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched\">Username field can not be blank</span>\n  </mat-form-field>\n  <br>\n  <button mat-button [disabled]=\"!myForm.valid\" (click)=\"onSubmit()\" color=\"primary\">Login</button>\n\n\n</mat-card-subtitle>\n</mat-card>\n-->\n<mat-card class=\"s_getmyoffer\">\n\n  <img src=\"../../assets/images/shaterblockLogo.png\" alt=\"#\" class=\"s_shatter_logo\" style=\"box-shadow: none;\">\n\n  <mat-card-content class=\"s_getmyoffer_login_wrapper\">\n    <mat-card-subtitle [formGroup]=\"myForm\">\n\n      <h1>Login</h1>\n      <p>welcome back!</p>\n      <span class=\"error\" *ngIf=\"errormg!=''\">{{errormg}}</span>\n\n      <mat-form-field class=\"form-group\">\n        <input [class.is-invalid]=\"myForm.controls['email'].invalid && myForm.controls['email'].touched\" matInput placeholder=\"Username\" [formControl]=\"myForm.controls['email']\" (blur)=\"inputblur('email')\" >\n        <span  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1 \">Email field can not be blank</span>\n        <span></span>\n      </mat-form-field>\n\n      <mat-form-field class=\"form-group\">\n        <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n        <span  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</span>\n      </mat-form-field>\n<mat-card-content >\n      <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n</mat-card-content>\n\n      <mat-card-content class=\"form-group-forgetPass\">\n        <button mat-button (click)=\"onForgetPassword()\"  class=\"shatter_block_forgetPass\">forget Password?</button>\n      </mat-card-content>\n\n\n\n\n    </mat-card-subtitle>\n  </mat-card-content>\n\n</mat-card>\n\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/ngx-cookie-service.es5.js");
/* harmony import */ var _app_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../app/api.service */ "./src/app/api.service.ts");
/* harmony import */ var _app_resolveservice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../app/resolveservice */ "./src/app/resolveservice.ts");








var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, cookieService, http, apiService, router, resolveservice) {
        this.fb = fb;
        this.cookieService = cookieService;
        this.http = http;
        this.apiService = apiService;
        this.router = router;
        this.resolveservice = resolveservice;
        // public url = 'https://9ozbyvv5v0.execute-api.us-east-1.amazonaws.com/production/api/login';
        this.endpoint = 'login';
        this.issubmit = 0;
        // public url1: any = '';
        // public serverurl: any = '';
        this.errormg = '';
        this.ipinfo = {};
        // this.url1 = apiService.domain;
        // console.log("url");
        // console.log(this.url1);
        // this.serverurl = (this.url1 + this.endpoint);
        // console.log(this.serverurl);
        // console.log('this.serverurl');
        // console.log(this.serverurl);
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.apiService.getclientip().subscribe(function (res) {
            console.log('res');
            console.log(res);
            _this.ipinfo = res;
        });
    };
    LoginComponent.prototype.onForgetPassword = function () {
        console.log('ok');
        this.router.navigate((['/forgatepassword']));
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        var x;
        this.errormg = '';
        var data = this.myForm.value;
        console.log('data');
        console.log(data);
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
        data.ipinfo = this.ipinfo;
        if (this.myForm.valid) {
            console.log('111111111111--------------');
            this.result = this.apiService.postlogin(this.endpoint, data).subscribe(function (res) {
                console.log('--------------');
                var result = {};
                result = res;
                if (result.status == 'error') {
                    _this.errormg = result.msg;
                }
                // console.log(result.item[0].type);
                console.log('result.item');
                console.log(result.item);
                console.log(result.status);
                // console.log(result.item.type);
                // console.log(result.item[0]);
                if (result.status == 'success') {
                    _this.cookieService.set('email', result.item[0].email);
                    _this.cookieService.set('password', result.item[0].password);
                    _this.cookieService.set('id', result.item[0]._id);
                    _this.cookieService.set('jwttoken', result.token);
                    if (result.status = 'success') {
                        if (result.status == 'success' && result.item[0].type == 'admin') {
                            _this.router.navigate(['/admindashbord']);
                        }
                        else if (result.status == 'success' && result.item[0].type == 'brand') {
                            // this.myForm.reset();
                            _this.router.navigate(['/branddashbord']);
                        }
                        else if (result.status == 'success' && result.item[0].type == 'influencers') {
                            // this.myForm.reset();
                            _this.router.navigate(['/influencersdashbord']);
                        }
                        _this.myForm.reset();
                    }
                }
            }, function (error) {
                console.log('Oooops!');
            });
        }
    };
    LoginComponent.prototype.inputblur = function (val) {
        console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _app_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _app_resolveservice__WEBPACK_IMPORTED_MODULE_7__["Resolveservice"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/resolveservice.ts":
/*!***********************************!*\
  !*** ./src/app/resolveservice.ts ***!
  \***********************************/
/*! exports provided: Resolveservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Resolveservice", function() { return Resolveservice; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/api.service.ts");

/*
export class Resolve {
}
*/



var Resolveservice = /** @class */ (function () {
    function Resolveservice(_apiService, router) {
        this._apiService = _apiService;
        this.router = router;
    }
    Resolveservice.prototype.resolve = function (route, state) {
        var _this = this;
        // let id = route.params['id'];
        console.log('resolve route data');
        console.log('route.data', route.data);
        console.log(state);
        // let endpoint = route.data.object;
        // console.log('endpoint!!!!!');
        // console.log(endpoint);
        return new Promise(function (resolve) {
            _this._apiService.getEndpoint(route.data).subscribe(function (api_object) {
                /*  console.log('api_object  !!!!');
                  console.log(api_object);*/
                if (api_object) {
                    return resolve(api_object);
                }
                else { // id not found
                    // this.router.navigateByUrl('login');
                    return true;
                }
            });
        });
    };
    Resolveservice = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], Resolveservice);
    return Resolveservice;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/**
 * Created by debasiskar on 18/03/19.
 */
var environment = {
    production: false,
    // API_URL: 'https://nodessl.influxiq.com:6053/',
    // API_URL: 'http://72.167.9.38:7050/',
    // API_URL: 'https://nodessl.influxiq.com:6053/',
    API_URL: 'https://p6ttrc8ikc.execute-api.us-east-1.amazonaws.com/production/api/',
    // API_URL: 'https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/',
    // https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/getblogmanagementlistdata
    // API_URL: 'https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/',
    // https://x4gcdrxvbh.execute-api.us-east-1.amazonaws.com/dev/api1/getblogmanagementlistdata
    Pdf_link: '&environment=development',
    uplodeimg_url: 'https://developmentapi.audiodeadline.com/nodeserver/uploads/modelimages/',
    // API_URL: 'http://18.222.26.198:7002/',
    environment: 'development'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/material-module.ts":
/*!********************************!*\
  !*** ./src/material-module.ts ***!
  \********************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");









// import { FormsModule, ReactiveFormsModule } from "@angular/forms";

var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());

/**  Copyright 2019 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/oem/Documents/uttam/lib/lib_listing/lib-listing-dev/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map