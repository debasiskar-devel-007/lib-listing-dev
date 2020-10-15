(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('ngx-uploader'), require('ngx-cookie-service'), require('rxjs/operators'), require('@angular/common/http'), require('moment'), require('rxjs'), require('@angular/material/snack-bar'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('@angular/forms'), require('@angular/common'), require('ngx-moment'), require('@angular/router'), require('@angular/platform-browser'), require('ng2-ckeditor'), require('ngx-image-cropper'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('listing-angular7', ['exports', '@angular/cdk/collections', 'ngx-uploader', 'ngx-cookie-service', 'rxjs/operators', '@angular/common/http', 'moment', 'rxjs', '@angular/material/snack-bar', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', '@angular/forms', '@angular/common', 'ngx-moment', '@angular/router', '@angular/platform-browser', 'ng2-ckeditor', 'ngx-image-cropper', '@angular/core'], factory) :
    (factory((global['listing-angular7'] = {}),global.ng.cdk.collections,global.ngxUploader,global.ngxCookieService,global.rxjs.operators,global.ng.common.http,global.momentImported,global.rxjs,global.ng.material['snack-bar'],global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material,global.ng.forms,global.ng.common,global.ngxMoment,global.ng.router,global.ng.platformBrowser,global.ng2Ckeditor,global.ngxImageCropper,global.ng.core));
}(this, (function (exports,collections,ngxUploader,ngxCookieService,operators,http,momentImported,rxjs,snackBar,a11y,dragDrop,portal,scrolling,stepper,table,tree,material,forms,common,ngxMoment,router,platformBrowser,ng2Ckeditor,ngxImageCropper,i0) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ListingService = /** @class */ (function () {
        function ListingService() {
        }
        ListingService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ListingService.ctorParameters = function () { return []; };
        /** @nocollapse */ ListingService.ngInjectableDef = i0.defineInjectable({ factory: function ListingService_Factory() { return new ListingService(); }, token: ListingService, providedIn: "root" });
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
            this.uploadInput = new i0.EventEmitter(); // input events, we use this to emit data to ngx-uploader
            this.humanizeBytes = ngxUploader.humanizeBytes;
            if (this.cookieService.check('secretkey')) {
                this.secretkey = this.cookieService.get('secretkey');
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
                    var index = this.files.findIndex(( /**
                     * @param {?} file
                     * @return {?}
                     */function (file) { return typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id; }));
                    this.files[index] = uploadOutput.file;
                    this.lengthis = this.files.length;
                    if (this.files[0] != null && this.files[0].progress != null) {
                        this.percentageis = this.files[0].progress.data.percentage;
                    }
                    console.log('this.files==================');
                    console.log(this.files);
                }
                else if (uploadOutput.type === 'removed') {
                    this.files = this.files.filter(( /**
                     * @param {?} file
                     * @return {?}
                     */function (file) { return file !== uploadOutput.file; }));
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
                var result = this._http.get('http://ipinfo.io/?format=json&token=9797c42b93078a').pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                console.log('');
                console.log('endpoint');
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json'
                    })
                };
                console.log('');
                console.log('endpoint');
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: token
                    })
                };
                /*console.log('------ ');
                console.log("link in postSearch");
                console.log(link);
                console.log(source);*/
                source.secretkey = this.secretkey;
                /** @type {?} */
                var result = this._http.post(link, source, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: source.token
                    })
                };
                console.log('------ ');
                console.log('link');
                console.log(link);
                /** @type {?} */
                var result = this._http.post(link, source).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                        Authorization: ''
                    })
                };
                console.log('');
                console.log('endpoint');
                console.log(endpoint);
                /** @type {?} */
                var result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                dataval.secretkey = this.secretkey;
                /** @type {?} */
                var result = this._http.post(endpoint, dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                dataval.secretkey = this.secretkey;
                /** @type {?} */
                var result = this._http.post(endpoint, dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                dataval.secretkey = this.secretkey;
                /** @type {?} */
                var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
                    headers: new http.HttpHeaders({
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
                dataval.secretkey = this.secretkey;
                /** @type {?} */
                var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    console.log('error caught in service');
                    console.error(err);
                    // Handle the error here
                    return rxjs.throwError(err); // Rethrow it back to component
                })), operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
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
            { type: i0.Injectable }
        ];
        /** @nocollapse */
        ApiService.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: http.HttpClient },
                { type: ngxCookieService.CookieService }
            ];
        };
        ApiService.propDecorators = {
            uploaderInput: [{ type: i0.ViewChild, args: ['fileInput1',] }]
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
        // searchResult$: Observable<SearchResult[]>;
        function ListingComponent(_apiService, dialog, bottomSheet, fb, router$$1, resolver, container, _http, sanitizer, _snackBar, _elementRef) {
            var _this = this;
            this._apiService = _apiService;
            this.dialog = dialog;
            this.bottomSheet = bottomSheet;
            this.fb = fb;
            this.router = router$$1;
            this.resolver = resolver;
            this.container = container;
            this._http = _http;
            this.sanitizer = sanitizer;
            this._snackBar = _snackBar;
            this._elementRef = _elementRef;
            this.myControl = new forms.FormControl();
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
            /*for progress bar*/
            this.color = 'primary';
            this.mode = 'indeterminate';
            this.value = 50;
            this.bufferValue = 75;
            /* this variable for artist xp preview */
            this.previewFlug = false;
            this.selectsearch = [];
            this.onLiblistingChange = new i0.EventEmitter();
            this.searchstrsarr = [];
            this.oldlimitrange = [];
            /* artistxp preview end */
            this.stateGroups = this.searchListval;
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
            // dataSource = new MatTableDataSource(this.datasourceval);
            this.dataSource = new material.MatTableDataSource;
            // myForm:any;
            this.modelChanged = new rxjs.Subject();
            this.modelChangedserver = new rxjs.Subject();
            this.pagechanged = new rxjs.Subject();
            this.subscriptions = [];
            this.subscriptioncount = 0;
            this.tableFooterColumns = [];
            this.testvalue = "s1";
            this.router.events.subscribe(( /**
             * @param {?} event
             * @return {?}
             */function (event) {
                switch (true) {
                    case event instanceof router.NavigationStart: {
                        _this.loading = true;
                        break;
                    }
                    case event instanceof router.NavigationEnd:
                    case event instanceof router.NavigationCancel:
                    case event instanceof router.NavigationError: {
                        _this.loading = false;
                        break;
                    }
                    default: {
                        break;
                    }
                }
            }));
            this.subscriptions[this.subscriptioncount++] = this.modelChanged
                .pipe(operators.debounceTime(500))
                .subscribe(( /**
         * @return {?}
         */function () {
                // this.searchResult$ = this.api.search(this.model);
                // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
                _this.filterautoval(_this.currentautocompleteitem);
            }));
            this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
                .pipe(operators.debounceTime(500))
                .subscribe(( /**
         * @return {?}
         */function () {
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
                    _this.subscriptions[_this.subscriptioncount++] = _this._apiService.postSearch(link, _this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
             */ function (search_settings) {
                this.search_settingsval = search_settings;
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
             */ function (click_to_add_ananother_page) {
                this.click_to_add_ananother_pageval = click_to_add_ananother_page;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "limitcond", {
            set: /**
             * @param {?} limitcondval
             * @return {?}
             */ function (limitcondval) {
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
             */ function (date_search_source_countval) {
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
             */ function (grab_link) {
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
             */ function (custombutton) {
                this.custombuttonval = custombutton;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "date_search_source", {
            set: /**
             * @param {?} date_search_source
             * @return {?}
             */ function (date_search_source) {
                this.date_search_sourceval = date_search_source;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "sortdata", {
            set: /**
             * @param {?} sortdataval
             * @return {?}
             */ function (sortdataval) {
                this.sortdataval = sortdataval;
                console.log(this.sortdataval, 'sortdataval');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
            set: /**
             * @param {?} date_search_endpoint
             * @return {?}
             */ function (date_search_endpoint) {
                this.date_search_endpointval = date_search_endpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "url", {
            set: /**
             * @param {?} url
             * @return {?}
             */ function (url) {
                this.urlval = url;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
            set: /**
             * @param {?} searchendpoint
             * @return {?}
             */ function (searchendpoint) {
                this.searchendpointval = searchendpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "pdf_link", {
            set: /**
             * @param {?} pdf_link
             * @return {?}
             */ function (pdf_link) {
                this.pdf_link_val = pdf_link;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "searchList", {
            set: /**
             * @param {?} searchList
             * @return {?}
             */ function (searchList) {
                this.searchListval = searchList;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "libdata", {
            set: /**
             * @param {?} libdataval
             * @return {?}
             */ function (libdataval) {
                this.libdataval = [];
                this.libdataval = libdataval;
                // console.log('libdataval',this.libdataval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "datasource", {
            set: /**
             * @param {?} datasource
             * @return {?}
             */ function (datasource) {
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
             */ function (datacollectionval) {
                this.datacollectionval = datacollectionval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "skip", {
            set: /**
             * @param {?} skip
             * @return {?}
             */ function (skip) {
                this.skipval = skip;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
            set: /**
             * @param {?} detail_datatype
             * @return {?}
             */ function (detail_datatype) {
                this.detail_datatypeval = detail_datatype;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
            set: /**
             * @param {?} detail_skip_array
             * @return {?}
             */ function (detail_skip_array) {
                this.detail_skip_arrayval = detail_skip_array;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "sourcedata", {
            set: /**
             * @param {?} sourcedata
             * @return {?}
             */ function (sourcedata) {
                this.sourcedataval = sourcedata;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
            set: /**
             * @param {?} modify_header_array
             * @return {?}
             */ function (modify_header_array) {
                this.modify_header_arrayval = modify_header_array;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
            set: /**
             * @param {?} deleteendpointval
             * @return {?}
             */ function (deleteendpointval) {
                this.deleteendpointval = deleteendpointval;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
            set: /**
             * @param {?} updateendpoint
             * @return {?}
             */ function (updateendpoint) {
                this.updateendpointval = updateendpoint;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "apiurl", {
            set: /**
             * @param {?} apiurl
             * @return {?}
             */ function (apiurl) {
                this.apiurlval = apiurl;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "updatetable", {
            set: /**
             * @param {?} updatetable
             * @return {?}
             */ function (updatetable) {
                this.updatetableval = updatetable;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "jwttoken", {
            set: /**
             * @param {?} jwttoken
             * @return {?}
             */ function (jwttoken) {
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
             */ function (statusarr) {
                this.statusarrval = statusarr;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "emailarray", {
            set: /**
             * @param {?} emailarray
             * @return {?}
             */ function (emailarray) {
                this.emailarrayval = emailarray;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "editroute", {
            set: /**
             * @param {?} editroute
             * @return {?}
             */ function (editroute) {
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
                    .pipe(operators.startWith(''), operators.map(( /**
             * @param {?} value
             * @return {?}
             */function (value) { return _this._filter(value); })));
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
                    var tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], cell: ( /**
                             * @param {?} row
                             * @return {?}
                             */function (row) { return eval(ff); }), objlength: header_list.length };
                    // console.log('tt',tt);
                    // console.log('tt.columnDef');
                    // console.log(tt.columnDef);
                    for (var b in this_1.modify_header_arrayval) {
                        if (b == tt.header) {
                            tt.header = this_1.modify_header_arrayval[b];
                        }
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.tableflag = 0;
                }), 100);
                displayedcols = this.columns.map(( /**
                 * @param {?} x
                 * @return {?}
                 */function (x) { return x.columnDef; }));
                if (this.libdataval.footersettings != null) {
                    this.tableFooterColumns = this.libdataval.footersettings.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.key; }));
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
                this.dataSource = new material.MatTableDataSource([]);
                this.dataSource = new material.MatTableDataSource(data_list);
                this.selection = new collections.SelectionModel(true, []);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
                // load search predefinded data
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    // this.selectsearch['status'] = '0';
                    // console.log('selectsearch', this.selectsearch);
                    if (_this.search_settingsval.selectsearch != null) {
                        // console.log('s1', this.search_settingsval.selectsearch);
                        for (var sl in _this.search_settingsval.selectsearch) {
                            if (_this.search_settingsval.selectsearch[sl].value != null) {
                                _this.selectsearch[_this.search_settingsval.selectsearch[sl].field] =
                                    _this.search_settingsval.selectsearch[sl].value;
                                // console.log('s', this.search_settingsval.selectsearch, '++++++', this.selectsearch);
                            }
                        }
                    }
                    if (_this.search_settingsval.textsearch != null) {
                        // console.log('t1', this.search_settingsval.textsearch);
                        for (var sl in _this.search_settingsval.textsearch) {
                            if (_this.search_settingsval.textsearch[sl].value != null) {
                                _this.tsearch[_this.search_settingsval.textsearch[sl].field] =
                                    _this.search_settingsval.textsearch[sl].value;
                                // console.log('t', this.search_settingsval.textsearch);
                            }
                        }
                    }
                }), 1000);
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                this.subscriptions.forEach(( /**
                 * @param {?} s
                 * @return {?}
                 */function (s) { return s.unsubscribe(); }));
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
                            $lte: new Date(this.end_date).getTime(),
                            $gte: new Date(this.start_date).getTime(),
                        };
                    }
                    if (this.start_date != null && (this.end_date == null || this.end_date.length == 0)) {
                        condition[val] = {
                            $gte: new Date(this.start_date).getTime(),
                        };
                    }
                    if (this.end_date != null && (this.start_date == null || this.start_date.length == 0)) {
                        condition[val] = {
                            $lte: new Date(this.end_date).getTime()
                        };
                    }
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
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        result = res;
                        if (result.results.res != null && result.results.res.length > 0) {
                            _this.dataSource = new material.MatTableDataSource(result.results.res);
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
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
                console.log(this.limitcondval, 'lim val');
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
                this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    _this.result = res;
                    // console.log(this.result,'res');
                    if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                        _this.onLiblistingChange.emit({ action: 'paging', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval });
                        _this.dataSource = new material.MatTableDataSource(_this.result.results.res);
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
                    var filterval = data.values.filter(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
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
                // console.log(this.autosearchinput, 'asi', data, value);
                this.searchstrsarr.push({ val: this.autosearchinput[value], label: item.label, key: value });
                if (this.autosearch[value] == null) {
                    this.autosearch[value] = [];
                }
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
                    console.log(index, 'index');
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
                console.log('++++');
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
                this.dataSource = new material.MatTableDataSource(this.olddata);
                this.selection = new collections.SelectionModel(true, []);
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
                return this.searchListval.filter(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option.toString().toLowerCase().includes(filterValue); }));
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
                this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
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
                        console.log('resdata>>>', resdata);
                        if (val.datafields != null) {
                            for (var b1 in val.datafields) {
                                console.log('val.datafields', val.datafields[b1]);
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
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var seldata = _this.selection.selected.map(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x._id; }));
                    console.log('checkedlist', _this.dataSource.data.length, _this.selection.selected.length, _this.selection.selected, seldata);
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
                    this.dataSource.data.forEach(( /**
                     * @param {?} row
                     * @return {?}
                     */function (row) { return _this.selection.select(row); }));
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
                Object.keys(point).forEach(( /**
                 * @param {?} key
                 * @return {?}
                 */function (key) {
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
                this._apiService.postSearch(this.apiurlval + this.libdataval.notes.listendpoint, this.jwttokenval, { id: val._id }).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
                    dialogRef.afterClosed().subscribe(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
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
                /** @type {?} */
                var data;
                data = data1;
                /** @type {?} */
                var data2 = [];
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
                    data: { isconfirmation: false, data: res }
                });
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ListingComponent.prototype.managestatus = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                var _this = this;
                /** @type {?} */
                var bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
                this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result != null) {
                        data.status = result.val;
                        data.id = data._id;
                        _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatus(_this.apiurlval + _this.libdataval.updateendpoint, data, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
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
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
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
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result != null) {
                        // data.status = result.val;
                        // data.id = data._id;
                        /** @type {?} */
                        var newstatus_1 = result.val;
                        _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatusmany(_this.apiurlval + _this.libdataval.updateendpointmany, ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
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
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
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
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result == 'yes') {
                        _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteManyData(_this.apiurlval + _this.libdataval.deleteendpointmany, ids, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
                            /** @type {?} */
                            var result = {};
                            result = res;
                            if (result.status == 'success') {
                                var _loop_2 = function (c_2) {
                                    _this.olddata = _this.olddata.filter(( /**
                                     * @param {?} olddata
                                     * @return {?}
                                     */function (olddata) { return olddata._id != ids[c_2]; }));
                                };
                                for (var c_2 in ids) {
                                    _loop_2(c_2);
                                }
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
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
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    if (result == 'yes') {
                        _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
                            /** @type {?} */
                            var result = {};
                            result = res;
                            if (result.status == 'success') {
                                _this.olddata = _this.olddata.filter(( /**
                                 * @param {?} olddata
                                 * @return {?}
                                 */function (olddata) { return olddata._id != data._id; }));
                                _this.dataSource = new material.MatTableDataSource(_this.olddata);
                                _this.selection = new collections.SelectionModel(true, []);
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
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                console.log(field, type);
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
                    for (var m in this.autosearch[b]) {
                        /** @type {?} */
                        var tv = {};
                        tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                        // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                        if (autosearch.$or == null) {
                            autosearch.$or = [];
                        }
                        autosearch.$or.push(tv);
                    }
                }
                // console.log('autos', autosearch);
                this.limitcondval.pagecount = 1;
                this.limitcondval.skip = 0;
                this.oldlimitrange = this.limitcondval;
                /** @type {?} */
                var conditionobj = {};
                conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        result = res;
                        if (result.results.res != null && result.results.res.length > 0) {
                            _this.onLiblistingChange.emit({ action: 'search', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval });
                            _this.dataSource = new material.MatTableDataSource(result.results.res);
                            _this._snackBar.openFromComponent(SnackbarComponent, {
                                duration: 2000,
                                data: { errormessage: 'New Search of data loaded' }
                            });
                        }
                        else {
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
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
                this.subscriptions[this.subscriptioncount++] = this._apiService.postData(link, data).subscribe(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-listing',
                        template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\" *ngIf=\"rescount>0\">\n            <ng-container class=\"inputfilterForloop\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                            (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                            placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                search\n                            </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </ng-container>\n\n            <ng-container class=\"inputfilterForAuto\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                            [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                        <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                            [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                            [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                            (keyup)=\"autocompletechangedetected(item);\">\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                            (click)=\"autosearchfunction(item.field,statusval,item)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </ng-container>\n\n\n\n            <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container class=\"filterForTexticon\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <!-- <span>dddddd</span> -->\n                <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                        [(ngModel)]='tsearch[status.field]'>\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                            (click)=\"selectSearch(statusval.val, status,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                <!-- <span>D search !!</span> -->\n                <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                            placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                            (dateChange)=\"dateSearch(status.field,status)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\"\n                            placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                            (dateChange)=\"dateSearch(status.field,status)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n\n\n\n                    <!-- <span class=\"search_class\">\n                        <button mat-raised-button color=\"primary\" class=\"add_button\"\n                            (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                    </span> -->\n\n\n\n                </ng-container>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <span class=\"search_class\">\n                <ng-container class=\"refresh\">\n                    <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                        autorenew\n                    </i>\n                </ng-container>\n                <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                <ng-container class=\"refresh\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\">Search</button>\n                </ng-container>\n\n            </span>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"\n                    [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n                                <span [innerHtml]=\"column.header\"></span>\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n\n                            </span>\n\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n                                \n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <!-- loader -->\n                            <section class=\"example-section example-section-button-1 \">\n                                <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \"\n                                    [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                                </mat-progress-bar>\n                            </section>\n                            <!-- note block -->\n                            <ng-container *ngIf=\"libdataval.notes!=null \">\n                                <button mat-raised-button color=\"primary\" class=\"notebtncls\" (click)=\"opennotes(row) \">\n                                    <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                    <span class=\"notebracket1\">(</span>\n                                    <span class=\"notecountc\"> {{row.notescount}}</span>\n\n                                    <span class=\"notebracket2\">)</span>\n                                </button>\n                            </ng-container>\n                            <!--custom buttions block -->\n                            <ng-container\n                                *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                    <section class=\"custombutton{{cb}}\">\n\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                            <!-- ss {{row['status']}} -->\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                    <button mat-raised-button\n                                                        color=\"primary\">{{custombutton.label}}</button>\n                                                </a>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='action'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                        </ng-container>\n                                    </section>\n\n                                </ng-container>\n                            </ng-container>\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\">\n                                        toggle_off\n                                    </i>\n                                </span>\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                        styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}"]
                    }] }
        ];
        /** @nocollapse */
        ListingComponent.ctorParameters = function () {
            return [
                { type: ApiService },
                { type: material.MatDialog },
                { type: material.MatBottomSheet },
                { type: forms.FormBuilder },
                { type: router.Router },
                { type: i0.ComponentFactoryResolver },
                { type: i0.ViewContainerRef },
                { type: http.HttpClient },
                { type: platformBrowser.DomSanitizer },
                { type: snackBar.MatSnackBar },
                { type: i0.ElementRef }
            ];
        };
        ListingComponent.propDecorators = {
            onLiblistingChange: [{ type: i0.Output }],
            search_settings: [{ type: i0.Input }],
            click_to_add_ananother_page: [{ type: i0.Input }],
            limitcond: [{ type: i0.Input }],
            date_search_source_count: [{ type: i0.Input }],
            grab_link: [{ type: i0.Input }],
            custombutton: [{ type: i0.Input }],
            date_search_source: [{ type: i0.Input }],
            sortdata: [{ type: i0.Input }],
            date_search_endpoint: [{ type: i0.Input }],
            url: [{ type: i0.Input }],
            searchendpoint: [{ type: i0.Input }],
            pdf_link: [{ type: i0.Input }],
            searchList: [{ type: i0.Input }],
            libdata: [{ type: i0.Input }],
            datasource: [{ type: i0.Input }],
            datacollection: [{ type: i0.Input }],
            skip: [{ type: i0.Input }],
            detail_datatype: [{ type: i0.Input }],
            detail_skip_array: [{ type: i0.Input }],
            sourcedata: [{ type: i0.Input }],
            modify_header_array: [{ type: i0.Input }],
            deleteendpoint: [{ type: i0.Input }],
            updateendpoint: [{ type: i0.Input }],
            apiurl: [{ type: i0.Input }],
            updatetable: [{ type: i0.Input }],
            jwttoken: [{ type: i0.Input }],
            statusarr: [{ type: i0.Input }],
            emailarray: [{ type: i0.Input }],
            editroute: [{ type: i0.Input }],
            preview_artistxp: [{ type: i0.Input }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }]
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
                this._apiService.postSearch(this.data.apiurl + this.data.notedata.deleteendpoint, this.data.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
                    this._apiService.postSearch(this.data.apiurl + this.data.notedata.addendpoint, this.data.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
            { type: i0.Component, args: [{
                        selector: 'confirmdialog',
                        template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>Notes for :\n                        <ng-container *ngIf=\"data.notedata.header!=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\"> {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\"><span>By:</span>{{note.notes.user}}</div>\n                        <div mat-line class=\"line-datetime\"> <span>On:</span> {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\" (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\" *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\" [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\" *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\" [innerHtml]=\"arr\"></span>\n                                <span *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\" [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
                    }] }
        ];
        /** @nocollapse */
        Confirmdialog.ctorParameters = function () {
            return [
                { type: ApiService },
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: platformBrowser.DomSanitizer }
            ];
        };
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
            { type: i0.Component, args: [{
                        selector: 'bottom-sheet',
                        template: "<div class=\"bottom-sheet-header-toggle\">\n    You are about to change status of these record(s)\n\n</div>\n<mat-nav-list class=\"navlist\">\n    <a *ngFor=\"let item of data.items;\" mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n</mat-nav-list>"
                    }] }
        ];
        /** @nocollapse */
        BottomSheet.ctorParameters = function () {
            return [
                { type: material.MatBottomSheetRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_BOTTOM_SHEET_DATA,] }] }
            ];
        };
        return BottomSheet;
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
            { type: i0.Component, args: [{
                        selector: 'videoplayer',
                        template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                    }] }
        ];
        /** @nocollapse */
        VideoPlayer.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
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
            { type: i0.Component, args: [{
                        selector: 'image',
                        template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
                    }] }
        ];
        /** @nocollapse */
        ImageView.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return ImageView;
    }());
    var SnackbarComponent = /** @class */ (function () {
        function SnackbarComponent(snackBarRef, data) {
            this.snackBarRef = snackBarRef;
            this.data = data;
            // console.log('snack',this.data);
        }
        SnackbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'snack-bar-component-example-snack',
                        template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                        styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                    }] }
        ];
        /** @nocollapse */
        SnackbarComponent.ctorParameters = function () {
            return [
                { type: snackBar.MatSnackBarRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [snackBar.MAT_SNACK_BAR_DATA,] }] }
            ];
        };
        return SnackbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import {MatSnackBar} from "@angular/material/snack-bar";
    var ShowformComponent = /** @class */ (function () {
        function ShowformComponent(formBuilder, _apiService, _snackBar, router$$1, elementRef) {
            // console.log(this.minDate, 'today===>', this.maxDate)
            this.formBuilder = formBuilder;
            this._apiService = _apiService;
            this._snackBar = _snackBar;
            this.router = router$$1;
            this.elementRef = elementRef;
            // public minDate = new Date(2020, 8, 24);
            // public maxDate = new Date(2020, 8, 31);
            this.dateflag = false;
            this.PasswordVal = '';
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
            /*for progress bar*/
            this.color = 'primary';
            this.mode = 'indeterminate';
            this.value = 50;
            this.bufferValue = 75;
            this.onFormFieldChange = new i0.EventEmitter();
            this.imageChangedEvent = '';
            this.croppedImage = '';
        }
        Object.defineProperty(ShowformComponent.prototype, "formdata", {
            set: /**
             * @param {?} formdata
             * @return {?}
             */ function (formdata) {
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
             */ function (formfieldrefreshdata) {
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
             */ function (formfieldrefresh) {
                this.formfieldrefreshval = formfieldrefresh;
                // console.log(this.formfieldrefreshval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ShowformComponent.prototype, "name", {
            get: /**
             * @return {?}
             */ function () {
                return ( /** @type {?} */(this.formGroup.get('name')));
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                /** @type {?} */
                var passwordFieldData = '';
                passwordFieldData = val.value;
                // for (const g in this.formdataval.fields) {
                //   if (this.formdataval.fields[g].passwordflag == true) {
                //     // console.log(this.formdataval.fields[g].passwordflag, '++++==', this.formdataval.fields[g])
                //     passwordFieldData = this.formdataval.fields[g].value;
                //     // console.log(passwordFieldData, 'PasswordVal', this.formdataval.fields[g])
                //   }
                // }
                // console.log(passwordFieldData, '??')
                if (passwordFieldData != null && passwordFieldData != '') {
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
                        data: { errormessage: 'Please Generate Password..!' }
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
                if (val.value != null && val.value != '') {
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
                        data: { errormessage: 'Please Generate Password..!' }
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                // console.log('in triggerevents', val);
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                // let apiBaseURL=""
                // this.imageChangedEvent = e;
                /** @type {?} */
                var list = document.getElementById('list');
                e.preventDefault();
                // console.log('handleDrop', e);
                /** @type {?} */
                var dt = e.dataTransfer;
                /** @type {?} */
                var files = dt.files;
                var _loop_1 = function (i) {
                    /** @type {?} */
                    var file = files[i];
                    // console.log(files, 'files', e.target.id);
                    // console.log('farr', this.filearray);
                    for (var g in this_1.formdataval.fields) {
                        if (this_1.formdataval.fields[g].type == 'file' && this_1.formdataval.fields[g].name == e.target.id.replace('drop', '')) {
                            console.log('file details', this_1.formdataval.fields[g]);
                            if (this_1.formdataval.fields[g].multiple == null) {
                                // this.deletefile(va)
                                if (this_1.filearray[e.target.id.replace('drop', '')] != null) {
                                    for (var n in this_1.formdataval.fields) {
                                        if (this_1.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                                            this_1.deletefile(this_1.formdataval.fields[n], 1);
                                            setTimeout(( /**
                                             * @return {?}
                                             */function () {
                                                _this.filearray[e.target.id.replace('drop', '')] = files[i];
                                            }), 0);
                                        }
                                    }
                                }
                                else {
                                    this_1.filearray[e.target.id.replace('drop', '')] = files[i];
                                }
                            }
                            else {
                                if (this_1.filearray[e.target.id.replace('drop', '')] == null) {
                                    this_1.filearray[e.target.id.replace('drop', '')] = [];
                                }
                                this_1.filearray[e.target.id.replace('drop', '')].push(files[i]);
                                // console.log('files[0]', files[0]);
                            }
                        }
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
        //   console.log('upppp',h);
        // }
        // uploadfile(val: any) {
        //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
        //   let h:any=this.bucketupload(val);
        //   console.log('upppp',h);
        // }
        /**
         * @param {?} val
         * @return {?}
         */
        ShowformComponent.prototype.uploadfile =
            // uploadfile(val: any) {
            //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
            //   let h:any=this.bucketupload(val);
            //   console.log('upppp',h);
            // }
            /**
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
                reader.onloadend = ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
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
                        .then(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                        // console.log('buck', response);
                        return response.json();
                    }))
                        .then(( /**
                 * @param {?} json
                 * @return {?}
                 */function (json) {
                        return fetch(json.uploadURL, {
                            method: 'PUT',
                            body: new Blob([reader.result], { type: file.type })
                        });
                    }))
                        .then(( /**
                 * @return {?}
                 */function () {
                        // return 'success';
                        file.uploaded = 1;
                        file.fileservername = val.prefix + file.name.split(" ").join("");
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
                var _this = this;
                for (var y in this.filearray[val.name]) {
                    this.deletefilemultiple(val, this.filearray[val.name][y], y);
                }
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.filearray[val.name] = null;
                }), 2000);
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
                // console.log(val,'val');
                // console.log(f,'f');
                if (this.filecount[val.name] == null) {
                    this.filecount[val.name] = 0;
                }
                this.filecount[val.name]++;
                // console.log('file val in m 2', val, f, indexf, 'if',file);
                file.uploaded = 2; // show progressbar
                // show progressbar
                /** @type {?} */
                var temploader = this.fieldloading[val.name];
                temploader = val.name;
                // reader.addEventListener('loadend', function (e) {
                reader.onloadend = ( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
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
                        .then(( /**
                 * @param {?} response
                 * @return {?}
                 */function (response) {
                        // console.log('buck', response);
                        return response.json();
                    }))
                        .then(( /**
                 * @param {?} json
                 * @return {?}
                 */function (json) {
                        return fetch(json.uploadURL, {
                            method: 'PUT',
                            body: new Blob([reader.result], { type: file.type })
                        });
                    }))
                        .then(( /**
                 * @return {?}
                 */function () {
                        // return 'success';
                        file.uploaded = 1;
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
                if (flag === void 0) {
                    flag = '';
                }
                // console.log('this.filearray',this.filearray);
                // console.log('val',val);
                // console.log(val.name);
                /** @type {?} */
                var source = {};
                /** @type {?} */
                var file = this.filearray[val.name];
                source.file = val.prefix + file.name;
                source.path = val.path;
                source.bucket = val.bucket;
                this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success' && flag == '') {
                        // this.formGroup.reset();
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: 'Deleted !!' }
                        });
                        _this.filearray[val.name] = null;
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
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
                if (field === void 0) {
                    field = '';
                }
                /** @type {?} */
                var source = {};
                /** @type {?} */
                var file = this.filearray[val.name][index];
                this.filecount[val.name]--;
                source.file = val.prefix + file.name;
                source.path = val.path;
                source.bucket = val.bucket;
                this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        // this.formGroup.reset();
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: 'Deleted !!' }
                        });
                        if (_this.filearray[val.name] != null)
                            _this.filearray[val.name].splice(index, 1);
                    }
                    if (result.status == 'error') {
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                    }
                }), ( /**
                 * @param {?} error
                 * @return {?}
                 */function (error) {
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
                        setTimeout(( /**
                         * @return {?}
                         */function () {
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
                    var filterval = data.val.filter(( /**
                     * @param {?} e
                     * @return {?}
                     */function (e) {
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
                console.log('manage control', field, type, field.length);
                if (type == 'remove' && field.name != null) {
                    for (var y in this.formdataval.fields) {
                        if (this.formdataval.fields[y].name == field.name) {
                            this.formdataval.fields.splice(parseInt(y), 1);
                            this.formGroup.removeControl(field.name);
                            console.log('removed', field['name'], 'c', y, field);
                        }
                    }
                }
                if (type == 'remove' && field.name == null && field.length > 1) {
                    console.log(field.length, 'fl');
                    for (var y in this.formdataval.fields) {
                        for (var z in field) {
                            if (this.formdataval.fields[y].name == field[z]) {
                                this.formdataval.fields.splice(parseInt(y), 1);
                                this.formGroup.removeControl(field[z]);
                                console.log('removed in array form ', field[z], 'c ar', y, field);
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
                console.log(field, 'change', index, 'index2');
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
                if (initialize === void 0) {
                    initialize = 0;
                }
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
                var _loop_2 = function (n) {
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
                                for (var fa in this_2.filearray[this_2.formdataval.fields[n].name]) {
                                    // console.log('fv', fa);
                                    if (this_2.filearray[this_2.formdataval.fields[n].name][fa] != null) {
                                        // console.log('fr', this.filearray[this.formdataval.fields[n].name][fa]);
                                        this_2.filearray[this_2.formdataval.fields[n].name][fa].uploaded = 1;
                                    }
                                }
                                if (this_2.filearray[this_2.formdataval.fields[n].name] != null) {
                                    this_2.filecount[this_2.formdataval.fields[n].name] = this_2.filearray[this_2.formdataval.fields[n].name].length;
                                }
                            }
                            else {
                                if (this_2.filearray[this_2.formdataval.fields[n].name] != null) {
                                    this_2.filearray[this_2.formdataval.fields[n].name].uploaded = 1;
                                }
                            }
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
                                    temvalidationrule.push(forms.Validators.required);
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'match') {
                                    this_2.formGroup.setValidators(this_2.checkPasswords);
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'autorequired') {
                                    this_2.formGroup.setValidators(this_2.autorequired);
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'pattern') {
                                    temvalidationrule.push(forms.Validators.pattern(this_2.formdataval.fields[n].validations[v].value));
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'maxLength') {
                                    temvalidationrule.push(forms.Validators.maxLength(this_2.formdataval.fields[n].validations[v].value));
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'min') {
                                    temvalidationrule.push(forms.Validators.min(this_2.formdataval.fields[n].validations[v].value));
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'max') {
                                    temvalidationrule.push(forms.Validators.max(this_2.formdataval.fields[n].validations[v].value));
                                }
                                if (this_2.formdataval.fields[n].validations[v].rule == 'minLength') {
                                    temvalidationrule.push(forms.Validators.minLength(this_2.formdataval.fields[n].validations[v].value));
                                }
                                // },0);
                            }
                        }
                        // document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
                        // demoArray[this.formdataval.fields[n].name]=new FormControl('');
                        if (this_2.formdataval.fields[n].type == 'image' && this_2.formdataval.fields[n].value != null) {
                            setTimeout(( /**
                             * @return {?}
                             */function () {
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
                                this_2.formGroup.addControl(this_2.formdataval.fields[n].name + '__' + j, new forms.FormControl(tchvar, temvalidationrule));
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
                            this_2.formGroup.addControl(this_2.formdataval.fields[n].name, new forms.FormControl({ value: temcontrolarr[0], disabled: this_2.formdataval.fields[n].disabled }, temvalidationrule));
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
                    _loop_2(n);
                }
                // =this.checkPasswords(this.formGroup);
                // this.formGroup = this.formBuilder.group(demoArray);
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                this.formGroup.get('validate').valueChanges.subscribe(( /**
                 * @param {?} validate
                 * @return {?}
                 */function (validate) {
                    if (validate == '1') {
                        _this.formGroup.get('name').setValidators([forms.Validators.required, forms.Validators.minLength(3)]);
                        _this.titleAlert = 'You need to specify at least 3 characters';
                    }
                    else {
                        _this.formGroup.get('name').setValidators(forms.Validators.required);
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
                console.log(vals, fields);
                document.querySelectorAll('.imgwrapper').forEach(( /**
                 * @param {?} el
                 * @return {?}
                 */function (el) {
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
                return new rxjs.Observable(( /**
                 * @param {?} observer
                 * @return {?}
                 */function (observer) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
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
                            if (this.filearray[this.formdataval.fields[m].name] != null && this.filearray[this.formdataval.fields[m].name].uploaded == 1) {
                                // fileservername: "Test-1589216992392My Saved Schema.json"
                                // lastModified: 1589174477504
                                // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                                // name: "My Saved Schema.json"
                                // size: 135096
                                // type: "application/json"
                                // uploaded: 1
                                /** @type {?} */
                                var tfile = {};
                                tfile.fileservername = this.filearray[this.formdataval.fields[m].name].fileservername;
                                tfile.name = this.filearray[this.formdataval.fields[m].name].name;
                                tfile.size = this.filearray[this.formdataval.fields[m].name].size;
                                tfile.type = this.filearray[this.formdataval.fields[m].name].type;
                                tfile.path = this.formdataval.fields[m].path;
                                tfile.bucket = this.formdataval.fields[m].bucket;
                                tfile.baseurl = this.formdataval.fields[m].baseurl;
                                this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                            }
                        }
                        if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
                            /** @type {?} */
                            var tfilearr = [];
                            for (var g in this.filearray[this.formdataval.fields[m].name]) {
                                if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 1) {
                                    // fileservername: "Test-1589216992392My Saved Schema.json"
                                    // lastModified: 1589174477504
                                    // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
                                    // name: "My Saved Schema.json"
                                    // size: 135096
                                    // type: "application/json"
                                    // uploaded: 1
                                    /** @type {?} */
                                    var tfile = {};
                                    tfile.fileservername = this.filearray[this.formdataval.fields[m].name][g].fileservername;
                                    tfile.name = this.filearray[this.formdataval.fields[m].name][g].name;
                                    tfile.size = this.filearray[this.formdataval.fields[m].name][g].size;
                                    tfile.type = this.filearray[this.formdataval.fields[m].name][g].type;
                                    tfile.path = this.formdataval.fields[m].path;
                                    tfile.bucket = this.formdataval.fields[m].bucket;
                                    tfile.baseurl = this.formdataval.fields[m].baseurl;
                                    tfilearr.push(tfile);
                                }
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
                    if (this.formdataval.endpoint != null || this.formdataval.apiUrl) {
                        this.loading = true;
                        /** @type {?} */
                        var link = this.formdataval.apiUrl + this.formdataval.endpoint;
                        /** @type {?} */
                        var source = {};
                        source.data = this.formGroup.value;
                        this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe(( /**
                         * @param {?} res
                         * @return {?}
                         */function (res) {
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
                            }
                        }), ( /**
                         * @param {?} error
                         * @return {?}
                         */function (error) {
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
                        this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: 'validationerror', fromval: this.formGroup.value });
                    }
                }
                else {
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
                this.imageChangedEvent = event;
                console.log('event', event);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ShowformComponent.prototype.imageCropped = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.croppedImage = event.base64;
                console.log('this.croppedImage', event);
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
        ShowformComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-showform',
                        template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                visibility_off\n                            </span>\n\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" [rows]=\"fields.rows?fields.rows:6\"\n                            [cols]=\"fields.cols?fields.cols:50\" [formControlName]=\"fields.name\"\n                            (change)=\"inputblur(fields.name)\">\n  </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                        <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                        </ckeditor>\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n\n\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\">Drop files here.\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n                            </div>\n\n\n\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\n                                [aspectRatio]=\"4 / 3\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\"\n                                (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n\n                            <img [src]=\"croppedImage\" />\n\n\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n                                            image\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                            picture_as_pdf\n                                        </span>\n\n                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                            movie_filter\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                            description\n                                        </span>\n                                        <span\n                                            class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                        <br />\n                                        <span\n                                            class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button\n                                                (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n\n                                </ng-container>\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple!=null  && fields.multiple==true\">\n                                    <ng-container *ngFor=\"let files of filearray[fields.name]; let fi=index; \">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <span *ngIf=\"files.uploaded==1\"\n                                                class=\"material-icons fileuploadcompleteicon\">\n                                                cloud_done\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n                                                image\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                description\n                                            </span>\n\n\n                                            <span class=\"fileuploadednameclass\">{{files.name}}</span>\n                                            <br />\n                                            <span class=\"fileuploadedtypeclass\">{{files.type}}</span>\n\n                                            <div class=\"actionbtndiv\">\n\n                                                <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                    mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                    Upload\n                                                </mat-chip>\n                                                <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                    mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                    Delete </mat-chip>\n                                            </div>\n\n                                            <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                    [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                </mat-progress-bar>\n                                            </section>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name]!=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                        styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}"]
                    }] }
        ];
        /** @nocollapse */
        ShowformComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ApiService },
                { type: snackBar.MatSnackBar },
                { type: router.Router },
                { type: i0.ElementRef }
            ];
        };
        ShowformComponent.propDecorators = {
            formdata: [{ type: i0.Input }],
            formfieldrefreshdata: [{ type: i0.Input }],
            formfieldrefresh: [{ type: i0.Input }],
            onFormFieldChange: [{ type: i0.Output }]
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
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            material.MatAutocompleteModule,
                            material.MatBadgeModule,
                            material.MatBottomSheetModule,
                            material.MatButtonModule,
                            material.MatButtonToggleModule,
                            material.MatCardModule,
                            material.MatCheckboxModule,
                            material.MatChipsModule,
                            material.MatStepperModule,
                            material.MatDatepickerModule,
                            material.MatDialogModule,
                            material.MatDividerModule,
                            material.MatExpansionModule,
                            material.MatGridListModule,
                            material.MatIconModule,
                            material.MatInputModule,
                            material.MatListModule,
                            material.MatMenuModule,
                            material.MatNativeDateModule,
                            material.MatPaginatorModule,
                            material.MatProgressBarModule,
                            material.MatProgressSpinnerModule,
                            material.MatRadioModule,
                            material.MatRippleModule,
                            material.MatSelectModule,
                            material.MatSidenavModule,
                            material.MatSliderModule,
                            material.MatSlideToggleModule,
                            material.MatSnackBarModule,
                            material.MatSortModule,
                            material.MatTableModule,
                            material.MatTabsModule,
                            material.MatToolbarModule,
                            material.MatTooltipModule,
                            material.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
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
             */ function (id) {
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
            { type: i0.Component, args: [{
                        selector: 'lib-youtubeplayer',
                        template: "\n<iframe width=\"560\" height=\"300\" [src]=\"id\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        YoutubeplayerComponent.ctorParameters = function () {
            return [
                { type: platformBrowser.DomSanitizer }
            ];
        };
        YoutubeplayerComponent.propDecorators = {
            videoid: [{ type: i0.Input }]
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
            { type: i0.Pipe, args: [{
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
            { type: i0.NgModule, args: [{
                        declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe],
                        imports: [
                            common.CommonModule,
                            // BrowserModule, BrowserAnimationsModule,
                            DemoMaterialModule,
                            forms.FormsModule, forms.ReactiveFormsModule,
                            router.RouterModule,
                            ngxMoment.MomentModule, ng2Ckeditor.CKEditorModule,
                            ngxImageCropper.ImageCropperModule
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [ListingComponent, ShowformComponent
                        ],
                        providers: [ApiService],
                        entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent],
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

    exports.ListingService = ListingService;
    exports.ListingComponent = ListingComponent;
    exports.Confirmdialog = Confirmdialog;
    exports.BottomSheet = BottomSheet;
    exports.VideoPlayer = VideoPlayer;
    exports.ImageView = ImageView;
    exports.SnackbarComponent = SnackbarComponent;
    exports.ShowformComponent = ShowformComponent;
    exports.ListingModule = ListingModule;
    exports.ɵa = ApiService;
    exports.ɵc = CustomdataPipe;
    exports.ɵd = DemoMaterialModule;
    exports.ɵb = YoutubeplayerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=listing-angular7.umd.js.map