(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/collections'), require('ngx-uploader'), require('ngx-cookie-service'), require('@angular/common/http'), require('@angular/animations'), require('moment'), require('rxjs'), require('@angular/material/snack-bar'), require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material'), require('@angular/common'), require('ngx-moment'), require('@angular/router'), require('@angular/platform-browser'), require('ng2-ckeditor'), require('ngx-image-cropper'), require('ngx-material-timepicker'), require('@angular/forms'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('listing-angular7', ['exports', '@angular/cdk/collections', 'ngx-uploader', 'ngx-cookie-service', '@angular/common/http', '@angular/animations', 'moment', 'rxjs', '@angular/material/snack-bar', 'rxjs/operators', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material', '@angular/common', 'ngx-moment', '@angular/router', '@angular/platform-browser', 'ng2-ckeditor', 'ngx-image-cropper', 'ngx-material-timepicker', '@angular/forms', '@angular/core'], factory) :
    (factory((global['listing-angular7'] = {}),global.ng.cdk.collections,global.ngxUploader,global.ngxCookieService,global.ng.common.http,global.ng.animations,global.momentImported,global.rxjs,global.ng.material['snack-bar'],global.rxjs.operators,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material,global.ng.common,global.ngxMoment,global.ng.router,global.ng.platformBrowser,global.ng2Ckeditor,global.ngxImageCropper,global.ngxMaterialTimepicker,global.ng.forms,global.ng.core));
}(this, (function (exports,collections,ngxUploader,ngxCookieService,http,animations,momentImported,rxjs,snackBar,operators,a11y,dragDrop,portal,scrolling,stepper,table,tree,material,common,ngxMoment,router,platformBrowser,ng2Ckeditor,ngxImageCropper,ngxMaterialTimepicker,forms,i0) { 'use strict';

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
                // console.log('');
                // console.log('endpoint');
                // console.log(endpoint);
                // console.log('httpOptions');
                // console.log(httpOptions);
                /** @type {?} */
                var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    // console.log('error caught in service');
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
                // console.log('');
                // console.log('endpoint');
                // console.log(endpoint);
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
                source.secret = this.secretkey;
                source.token = token;
                /** @type {?} */
                var result = this._http.post(link, source, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    // console.log('error caught in service');
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
                // console.log('');
                // console.log('endpoint');
                // console.log(endpoint);
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
                dataval.secret = this.secretkey;
                dataval.token = token;
                /** @type {?} */
                var result = this._http.post(endpoint, dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    // console.log('error caught in service');
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
                dataval.secret = this.secretkey;
                dataval.token = token;
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
                dataval.secret = this.secretkey;
                dataval.token = token;
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
                dataval.secret = this.secretkey;
                dataval.token = token;
                /** @type {?} */
                var result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(operators.catchError(( /**
                 * @param {?} err
                 * @return {?}
                 */function (err) {
                    // console.log('error caught in service');
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
        /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
        ApiService.prototype.postDataApi = /**
         * @param {?} endpoint
         * @param {?} data
         * @return {?}
         */
            function (endpoint, data) {
                /** @type {?} */
                var httpOptions = {
                    headers: new http.HttpHeaders({
                        'Content-Type': 'application/json',
                    })
                };
                // console.log('');
                // console.log('endpoint');
                // console.log(endpoint);
                // console.log('httpOptions');
                // console.log(httpOptions);
                /** @type {?} */
                var result = this._http.post(endpoint, JSON.stringify(data), httpOptions).pipe(operators.catchError(( /**
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
    var ObservableserviceService = /** @class */ (function () {
        function ObservableserviceService() {
            this.subject = new rxjs.Subject();
            this.subject1 = new rxjs.Subject();
            this.apiUrlsubject = new rxjs.Subject();
        }
        /**
         * @param {?} data
         * @return {?}
         */
        ObservableserviceService.prototype.setmultilingualData = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                // console.log("observablee data",data);
                this.subject.next(data);
            };
        /**
         * @return {?}
         */
        ObservableserviceService.prototype.getmultilingualData = /**
         * @return {?}
         */
            function () {
                return this.subject.asObservable();
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ObservableserviceService.prototype.setconvertToLanguage = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                // console.log("setconvertToLanguage data",data);
                this.subject1.next(data);
            };
        /**
         * @return {?}
         */
        ObservableserviceService.prototype.getconvertToLanguage = /**
         * @return {?}
         */
            function () {
                return this.subject1.asObservable();
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ObservableserviceService.prototype.setapiUrl = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                console.log("observablee data", data);
                this.apiUrlsubject.next(data);
            };
        /**
         * @return {?}
         */
        ObservableserviceService.prototype.getapiUrl = /**
         * @return {?}
         */
            function () {
                return this.apiUrlsubject.asObservable();
            };
        ObservableserviceService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ObservableserviceService.ctorParameters = function () { return []; };
        /** @nocollapse */ ObservableserviceService.ngInjectableDef = i0.defineInjectable({ factory: function ObservableserviceService_Factory() { return new ObservableserviceService(); }, token: ObservableserviceService, providedIn: "root" });
        return ObservableserviceService;
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
        function ListingComponent(_apiService, dialog, bottomSheet, fb, router$$1, resolver, container, _http, sanitizer, _snackBar, _elementRef, observableService) {
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
            this.observableService = observableService;
            this.selectedItem = 0;
            this.myControl = new forms.FormControl();
            this.staticTooltip = {
                "delete": "Delete",
                "edit": "Edit",
                "preview": "Preview",
                "changeStatus": "Change Status",
            };
            this.keepPagination = 0;
            this.startDate111 = new Date(1622358050000);
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
            this.newpagingcountFlag = true;
            this.initiateSearch = false;
            this.minDate = "";
            this.onLiblistingChange = new i0.EventEmitter();
            this.onLiblistingButtonChange = new i0.EventEmitter();
            this.searchstrsarr = [];
            this.oldlimitrange = [];
            this.languagedataset = [];
            this.paginationtypeFlag = true;
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
            this.dataSource = new material.MatTableDataSource;
            // myForm:any;
            this.modelChanged = new rxjs.Subject();
            this.modelChangedserver = new rxjs.Subject();
            this.pagechanged = new rxjs.Subject();
            this.subscriptions = [];
            this.subscriptioncount = 0;
            this.tableFooterColumns = [];
            this.testvalue = "s1";
            this.txtQueryChanged = new rxjs.Subject();
            this.limitChangrd = new rxjs.Subject();
            // searchResult$: Observable<SearchResult[]>;
            // for dropdown pagination
            this.pages = [];
            /*@Directive({
                selector: '[Listing]'
              })*/
            this.status = false;
            this.stateGroups = this.searchListval;
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
            // this.txtQueryChanged
            //         .debounceTime(1000) // wait 1 sec after the last event before emitting last event
            //         .distinctUntilChanged() // only emit if value is different from previous value
            //         .subscribe(model => {
            //           this.txtQuery = model;
            //           // Call your function which calls API or do anything you would like do after a lag of 1 sec
            //           this.getDataFromAPI(this.txtQuery);
            //          });
            this.subscriptions[this.subscriptioncount++] = this.txtQueryChanged
                .pipe(operators.debounceTime(2500))
                .subscribe(( /**
         * @return {?}
         */function () {
                // this.searchResult$ = this.api.search(this.model);
                // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
                // this.filterautoval(this.currentautocompleteitem);
                console.log('pageChangeValue subscribed !! ', _this.pageChangeValue, _this.pageCountArray.length);
                if (_this.pageChangeValue > _this.lastpageCountArray) {
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Sorry!! Page number is out of range, highest range is ' + _this.lastpageCountArray }
                    });
                }
                if (_this.pageCountArray.length + 1 > _this.pageChangeValue) {
                    _this.paging(_this.pageChangeValue, '');
                }
                else {
                    //page count out of bound 
                    _this.pageChangeValue = _this.limitcondval.pagecount;
                }
                console.log("first", _this.pageChangeValue, "+++", _this.pageCountArray.length);
            }));
            this.subscriptions[this.subscriptioncount++] = this.limitChangrd
                .pipe(operators.debounceTime(2500))
                .subscribe(( /**
         * @return {?}
         */function () {
                // this.searchResult$ = this.api.search(this.model);
                // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
                // this.filterautoval(this.currentautocompleteitem);
                console.log('pageChangeValue subscribed !! ', _this.pageChangeValue, _this.pageCountArray.length);
                if (_this.pageChangeValue) {
                    _this.paging(_this.pageChangeValue, '');
                }
                else {
                    //page count out of bound 
                    _this.pageChangeValue = _this.limitcondval.pagecount;
                }
            }));
            this.subscriptions[this.subscriptioncount++] = this.modelChanged
                .pipe(operators.debounceTime(1000))
                .subscribe(( /**
         * @return {?}
         */function () {
                // this.searchResult$ = this.api.search(this.model);
                // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
                _this.filterautoval(_this.currentautocompleteitem);
            }));
            this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
                .pipe(operators.debounceTime(1000))
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
                    // console.log("autocomplete debounceTime(1000)",this.libdataval.basecondition);
                    if (typeof _this.libdataval.basecondition == 'undefined' || _this.libdataval.basecondition == null) {
                        _this.libdataval.basecondition = {};
                    }
                    /** @type {?} */
                    var textSearch = {};
                    // this.searchstrsarr.push({ val: this.tsearch[value], label: item.label, key: value });
                    // console.log(this.searchstrsarr, 'this.searchstrsarr');
                    // console.log(this.search_settingsval.search, 'search_settingsval.search');
                    for (var i in _this.tsearch) {
                        // console.log('all search this.tsearch', this.tsearch[i]);
                        if (_this.tsearch[i] != null && _this.tsearch[i].toString().toLowerCase() != '') {
                            textSearch[i] = { $regex: _this.tsearch[i].toString().toLowerCase() };
                        }
                    }
                    /** @type {?} */
                    var buttonsearch = {};
                    for (var bs in _this.buttonSearchData) {
                        for (var k in _this.buttonSearchData[bs].value) {
                            /** @type {?} */
                            var bt = {};
                            bt[_this.buttonSearchData[bs].field] = _this.buttonSearchData[bs].value[k].val.toString().toLowerCase();
                            if (buttonsearch.$or == null) {
                                buttonsearch.$or = [];
                            }
                            // console.log(bt,'bt',bs,'bs')
                            buttonsearch.$or.push(bt);
                        }
                    }
                    source = {
                        search_str: _this.autosearchinput[_this.currentautocompleteitem.field],
                        sort: {
                            field: _this.sortdataval.field,
                            type: _this.sortdataval.type
                        },
                        allSearchCond: _this.allSearchCond,
                        basecondition: _this.libdataval.basecondition,
                        datasearch: _this.dateSearch_condition,
                        textsearch: textSearch,
                        buttonSearch: buttonsearch,
                        selectsearch: _this.selectSearch_condition
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
                            // autocomplete searching snakbar
                            // this._snackBar.openFromComponent(SnackbarComponent, {
                            //   duration: 2000,
                            //   data: { errormessage: 'New Search of data loaded ' }
                            // });
                        }
                        else {
                            _this.currentautosearcharr = [];
                            // this._snackBar.openFromComponent(SnackbarComponent, {
                            //   duration: 6000,
                            //   data: { errormessage: 'No such search record found !!' }
                            // });
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
        Object.defineProperty(ListingComponent.prototype, "languageDataset", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.languagedataset = value;
                // console.log(this.grab_linkval);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "setconvertToLanguage", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.convertToLanguage = value;
                // console.log("developer test",this.convertToLanguage)
                if (typeof this.convertToLanguage != 'undefined' && this.convertToLanguage != null && this.convertToLanguage != '') {
                    this.observableService.setconvertToLanguage(this.convertToLanguage);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ListingComponent.prototype, "search_settings", {
            set: /**
             * @param {?} search_settings
             * @return {?}
             */ function (search_settings) {
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
                if (this.limitcondval.pagecount == null) {
                    this.limitcondval.pagecount = 1;
                }
                this.newcurrentpagingVal = this.limitcondval.pagecount;
                this.pageChangeValue = this.limitcondval.pagecount;
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
                this.pageCountArray = new Array(Math.ceil(date_search_source_countval / this.limitcondval.limit));
                this.lastpageCountArray = Math.ceil(date_search_source_countval / this.limitcondval.limit);
                console.log("this.pageCountArray", Math.ceil(date_search_source_countval / this.limitcondval.limit));
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
                // console.log(this.sortdataval, 'sortdataval');
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
                var _this = this;
                this.libdataval = [];
                this.libdataval = libdataval;
                this.paginationtype = this.libdataval.paginationType;
                if (typeof this.libdataval.paginationType == 'undefined' && this.libdataval.paginationType == null) {
                    this.paginationtypeFlag = false;
                }
                console.log('libdataval', this.libdataval);
                console.log('libdataval', this.paginationtype);
                if (typeof this.libdataval.pages != 'undefined' && this.libdataval.pages != null) {
                    this.pages = this.libdataval.pages;
                }
                // searchBarFlag
                // console.log(libdataval.searchBarFlagVal)
                if (libdataval.searchBarFlagVal != null && libdataval.searchBarFlagVal != '') {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.searchBarFlagVal = libdataval.searchBarFlagVal;
                    }), 1000);
                }
                else {
                    this.searchBarFlag = true;
                }
                if (libdataval.recordfoundflag != null && libdataval.recordfoundflag != '' && libdataval.recordfounddata != null) {
                    setTimeout(( /**
                     * @return {?}
                     */function () {
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
                // console.log("this.apiurlval",this.apiurlval);
                this.observableService.setapiUrl(this.apiurlval + this.libdataval.addlanguagedataEndpoint);
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
        /**
         * @return {?}
         */
        ListingComponent.prototype.clickEvent = /**
         * @return {?}
         */
            function () {
                this.status = !this.status;
            };
        /**
         * @param {?} data
         * @return {?}
         */
        ListingComponent.prototype.autocompletefunction = /**
         * @param {?} data
         * @return {?}
         */
            function (data) {
                this.currentautosearcharr = [];
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        ListingComponent.prototype.ngOnChanges = /**
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
         * @param {?} i
         * @return {?}
         */
        ListingComponent.prototype.counter = /**
         * @param {?} i
         * @return {?}
         */
            function (i) {
                return new Array(i);
            };
        /**
         * @param {?} query
         * @return {?}
         */
        ListingComponent.prototype.onFieldChange = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                // console.log('query', query, this.pageCountArray.length);
                // if (query <= this.pageCountArray.length) {
                if (this.pageCountArray.length + 1 > query) {
                    this.txtQueryChanged.next(query);
                    // console.log('with in bound ');
                }
                // } else {
                //   this._snackBar.openFromComponent(SnackbarComponent, {
                //     duration: 6000,
                //     data: { errormessage: 'Sorry!! Page number is out of range, highest range is ' + this.lastpageCountArray }
                //   });
                //   this.pageChangeValue = this.pageCountArray.length;
                // }
            };
        /**
         * @param {?} query
         * @return {?}
         */
        ListingComponent.prototype.onFieldChangeforlimit = /**
         * @param {?} query
         * @return {?}
         */
            function (query) {
                // console.log('query', query, this.pageCountArray.length);
                // if (query <= this.pageCountArray.length) {
                if (query < 100) {
                    this.limitChangrd.next(query);
                    // console.log('with in bound ');
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
                var _this = this;
                // console.log("this.languagedataset",this.languagedataset);
                this.observableService.setmultilingualData(this.languagedataset);
                // addlanguagedataEndpoint
                // console.log("this.apiurlval", this.apiurlval);
                // if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
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
                    var tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], tooltip: "" + header_list[i], cell: ( /**
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
                this.expandedElement = this.dataSource;
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
                    // console.log("this.search_settingsval.datesearch++", this.search_settingsval.datesearch);
                    if (_this.search_settingsval.datesearch != null && _this.search_settingsval.datesearch[0].value != null && _this.search_settingsval.datesearch[0].value != '') {
                        _this.initiateSearch = true;
                        //   this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte - 86399000;
                        //   this.search_settingsval.datesearch[0].value.$gte= this.search_settingsval.datesearch[0].value.$gte + 10000;
                        //   // this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte;
                        //   this.start_date = moment(new Date(this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-MM-DD").toString();
                        //   this.end_date = moment(new Date(this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-MM-DD").toString();
                        // //  this.startDate=moment(new Date(this.search_settingsval.datesearch[0].value.$gte)).add(1, 'days').format("YYYY-MM-DD").toString();
                        // //  this.endDate=moment(new Date(this.search_settingsval.datesearch[0].value.$lte)).add(1, 'days').format("YYYY-MM-DD").toString();
                        //  this.startDate=new Date(this.search_settingsval.datesearch[0].value.$gte);
                        //  this.endDate=new Date(this.search_settingsval.datesearch[0].value.$lte);
                        //   console.log("this.startDate",this.startDate);
                        //   this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte + 86399000;
                        //   // this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte;
                        //   console.log("start date",this.search_settingsval.datesearch[0].value.$gte);
                        //   console.log("end date",this.search_settingsval.datesearch[0].value.$lte);
                        //   this.dateSearch_condition[this.search_settingsval.datesearch[0].field] = this.search_settingsval.datesearch[0].value;
                        _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte - 86399000;
                        _this.start_date = new Date(_this.search_settingsval.datesearch[0].value.$gte);
                        _this.end_date = new Date(_this.search_settingsval.datesearch[0].value.$lte);
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
                // console.log("this.start_date",new Date(this.start_date).getTime()+86400000);
                this.minDate = moment(new Date(this.start_date).getTime()).format('YYYY-MM-DD');
                // console.log("this.start_date",this.minDate);
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
                // if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
                //   this.start_date=this.startDate;
                //   this.end_date=this.endDate;
                // }
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
         * @param {?} multipleFlag
         * @return {?}
         */
        ListingComponent.prototype.selectSearch = /**
         * @param {?} value
         * @param {?} type
         * @param {?} statusval
         * @param {?} multipleFlag
         * @return {?}
         */
            function (value, type, statusval, multipleFlag) {
                console.log("multipleFlag", this.tsearch[type.field]);
                console.log(value, 'value');
                console.log(type, 'type');
                console.log(statusval, 'statusval');
                // return;
                // let link = this.apiurlval + '' + this.date_search_endpointval;
                // let source: any;
                // let condition: any = {};
                this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
                // console.log("this.searchstrsarr[type.field]", this.searchstrsarr[type.field]);
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
                // this.selectSearch_condition = {};
                if (multipleFlag == 'true') {
                    condition[type.field] = this.tsearch[type.field];
                    this.selectSearch_condition[type.field] = this.tsearch[type.field];
                }
                else {
                    condition[type.field] = value;
                    this.selectSearch_condition[type.field] = value;
                }
                // console.log('selectSearch ', this.selectSearch_condition);
                /** @type {?} */
                var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
                console.log("this.date_search_sourceval", this.selectSearch_condition);
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
                console.log(this.oldlimitrange, 'this.oldlimitrange');
                this.selectedItem = val;
                if (this.limitcondval.pagecount == null)
                    this.limitcondval.pagecount = 1;
                if (this.limitcondval.limit == null)
                    this.limitcondval.limit = 10;
                this.oldlimitrange.push({
                    skip: this.limitcondval.skip,
                    limit: this.limitcondval.limit,
                    pagecount: this.limitcondval.pagecount
                });
                if (this.limitcondval.limit != null && this.limitcondval.limit > 100) ;
                /** @type {?} */
                var maxpagecount = Number(this.date_search_source_countval / (this.limitcondval.limit));
                maxpagecount = ~~(maxpagecount);
                // console.log('this.oldlimitrange', this.oldlimitrange, this.limitcondval, this.date_search_source_countval, maxpagecount);
                // console.log("limit++++", this.limitcondval.limit);
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
                    if (this.paginationtype == 2) {
                        this.limitcondval.pagecount = val;
                    }
                    // console.log("val>1 section ", this.limitcondval.pagecount);
                    if (this.limitcondval.pagecount == null) {
                        this.limitcondval.skip = 0;
                    }
                    else {
                        this.limitcondval.pagecount = val;
                        this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
                    }
                    // this.limitcondval.pagecount--;
                }
                if (val <= 1) {
                    if (this.paginationtype == 2) {
                        this.limitcondval.skip = 0;
                        this.limitcondval.pagecount = 1;
                    }
                }
                if (this.limitcondval.pagecount > (maxpagecount + 1)) {
                    this.limitcondval.pagecount = maxpagecount + 1;
                    this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
                }
                // console.log(val,'ss',this.datacollectionval,this.limitcondval);
                /** @type {?} */
                var textSearch = {};
                // console.log('this.limitcondval, in paging ', this.limitcondval);
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
                this.allpaginationpostData = source;
                /** @type {?} */
                var link = this.apiurlval + '' + this.datacollectionval;
                /*let data:any={
                  "condition":{
                    limit:this.limitcondval.limit,
                    skip:this.limitcondval.skip
                  }
            
                }*/
                this.newpagingcountFlag = false;
                this.loading = true;
                this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    if (_this.limitcondval.pagecount > 5 && _this.paginationtype == 2) {
                        _this.newcurrentpagingVal = _this.limitcondval.pagecount - 5;
                    }
                    // if (this.limitcondval.pagecount > 5 && this.paginationtype == 2 && this.pageCountArray.length - this.limitcondval.pagecount < 10) {
                    //   this.newcurrentpagingVal = this.limitcondval.pagecount - 4 ;
                    //   console.log('in last range area ...', this.newcurrentpagingVal);
                    // }
                    if (_this.limitcondval.pagecount <= 5 && _this.paginationtype == 2) {
                        _this.newcurrentpagingVal = 1;
                    }
                    // console.log("paging success", this.pageCountArray.length);
                    // console.log("paging success", this.limitcondval.pagecount);
                    // console.log('in common  range area ...', this.newcurrentpagingVal);
                    _this.result = res;
                    // console.log(this.result,'res');
                    _this.newpagingcountFlag = true;
                    if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                        _this.onLiblistingChange.emit({ action: 'paging', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, results: _this.result.results.res, totalresults: _this.result });
                        // if (this.libdataval.footersettings != null) {pageChangeValue
                        //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                        // }
                        if (_this.pageChangeValue != _this.limitcondval.pagecount) {
                            _this.pageChangeValue = _this.limitcondval.pagecount;
                        }
                        setTimeout(( /**
                         * @return {?}
                         */function () {
                            // console.log("this.libdataval.containerid",this.libdataval.containerid);
                            if (typeof _this.libdataval.containerid != 'undefined') {
                                document.getElementById(_this.libdataval.containerid).scrollIntoView({ behavior: "smooth" });
                            }
                        }), 100);
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
                        // console.log('o len', this.oldlimitrange.length, this.oldlimitrange,this.oldlimitrange[this.oldlimitrange.length-1]);
                        _this.limitcondval.skip = _this.oldlimitrange[_this.oldlimitrange.length - 1].skip;
                        _this.limitcondval.pagecount = _this.oldlimitrange[_this.oldlimitrange.length - 1].pagecount;
                        _this.limitcondval.limit = _this.oldlimitrange[_this.oldlimitrange.length - 1].limit;
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
                // console.log('asi', data, value, item, this.autosearch[value]);
                this.searchstrsarr.push({ val: this.autosearchinput[value], label: item.label, key: value });
                if (this.autosearch[value] == null) {
                    this.autosearch[value] = [];
                }
                // console.log(this.autosearch[value].includes(data), "includes test", this.autosearch[value]);
                this.autosearch[value].push(data);
                /** @type {?} */
                var resArr = [];
                this.autosearch[value].filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    /** @type {?} */
                    var i = resArr.findIndex(( /**
                     * @param {?} x
                     * @return {?}
                     */function (x) { return x.val == item.val; }));
                    if (i <= -1) {
                        resArr.push(item);
                    }
                    return null;
                }));
                // console.log(resArr);
                this.autosearch[value] = resArr;
                // console.log("temparr value0", filterval);
                // console.log("autosearch this.autosearch", this.autosearch);
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
                this.minDate = "";
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
                            notedata: _this.libdataval.notes,
                            rowdata: val,
                            jwttokenval: _this.jwttokenval,
                            listdata: result.res,
                            _snackBar: _this._snackBar
                        }
                    });
                    dialogRef.afterClosed().subscribe(( /**
                     * @param {?} result
                     * @return {?}
                     */function (result) {
                        _this.keepPagination = 1;
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
                // console.log('data1 ++++++++', data1)
                /** @type {?} */
                var data;
                data = data1;
                /** @type {?} */
                var data2 = [];
                /** @type {?} */
                var headerData = {};
                if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
                    // console.log('== ++++++++', this.libdataval.preview_header)
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
                                _this.onLiblistingChange.emit({ action: 'statusupdate', limitdata: _this.limitcondval, sortdata: _this.sortdataval, totalresults: result });
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
                var bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });
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
                                _this.onLiblistingChange.emit({ action: 'multipledelete', limitdata: _this.limitcondval, sortdata: _this.sortdataval, totalresults: result });
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
                                _this.onLiblistingChange.emit({ action: 'delete', limitdata: _this.limitcondval, sortdata: _this.sortdataval, totalresults: result });
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
                console.log("sorttable function data", field, type);
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
                // console.log("hit limitcondval",this.allpaginationpostData);
                // console.log("hit limitcondval",this.limitcondval);
                // console.log('this.keepPagination first',this.keepPagination);
                var _this = this;
                // console.log("hit limitcondval",this.allpaginationpostData);
                // console.log("hit limitcondval",this.limitcondval);
                // console.log('this.keepPagination first',this.keepPagination);
                // return;
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
                if (typeof (this.limitcondval.pagecount) != 'undefined') {
                    // this.limitcondval.pagecount = this.limitcondval.pagecount;
                    // this.limitcondval.skip = this.limitcondval.skip;
                    //  console.log("typeof(this.limitcondval.pagecount)!='undefined'");
                    this.oldlimitrange.push(this.limitcondval);
                    if (this.keepPagination != 1) {
                        // console.log("this.keepPagination!=1");
                        this.limitcondval.skip = 0;
                        this.limitcondval.pagecount = 1;
                        // source.condition.skip=0;
                        // this.keepPagination=0;
                    }
                }
                else {
                    this.limitcondval.pagecount = 1;
                    this.limitcondval.skip = 0;
                    this.oldlimitrange.push(this.limitcondval);
                }
                /** @type {?} */
                var conditionobj = {};
                conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, buttonsearch, this.selectSearch_condition, this.libdataval.basecondition);
                // console.log(this.selectSearch_condition, 'selectSearch_condition')
                this.allSearchCond = conditionobj;
                // console.warn("this.allpaginationpostData",this.allpaginationpostData);
                if (this.keepPagination != 1) {
                    this.limitcondval.skip = 0;
                    // source.condition.skip=0;
                    this.limitcondval.pagecount = 1;
                    // this.keepPagination=0;
                }
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
                if (typeof this.allpaginationpostData != 'undefined') {
                    // console.warn("conditionobj", conditionobj);
                    source = this.allpaginationpostData;
                    /** @type {?} */
                    var tempsortvalue = {
                        field: this.sortdataval.field,
                        type: this.sortdataval.type
                    };
                    source.sort = tempsortvalue;
                    if (typeof conditionobj != 'undefined' && conditionobj != null) {
                        source.searchcondition = conditionobj;
                        //  source.condition.skip=0;
                        if (this.keepPagination != 1) {
                            this.limitcondval.skip = 0;
                            // source.condition.skip=0;
                            this.limitcondval.pagecount = 1;
                            // this.keepPagination=0;
                        }
                    }
                }
                else {
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
                }
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
                    if (this.keepPagination != 1) {
                        // console.log("this.keepPagination!=1 last part");
                        source.condition.skip = 0;
                    }
                    if (this.keepPagination == 1) {
                        this.keepPagination = 0;
                    }
                    // console.warn("source",source);
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        result = res;
                        // console.log("count log++", this.newcurrentpagingVal);
                        // console.log("pageCountArray log++", this.pageCountArray);
                        _this.pageCountArray = new Array(Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit));
                        _this.lastpageCountArray = Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit);
                        _this.pageChangeValue = _this.limitcondval.pagecount;
                        _this.newcurrentpagingVal = _this.limitcondval.pagecount;
                        if (result.results.res != null && result.results.res.length > 0) {
                            _this.onLiblistingChange.emit({
                                action: 'search',
                                limitdata: _this.limitcondval,
                                searchcondition: conditionobj,
                                sortdata: _this.sortdataval,
                                res: result.results.res.length,
                                totalresults: result,
                                allSearchCond: _this.allSearchCond,
                                autoSearchVal: _this.autosearch,
                                searchdata: _this.search_settingsval,
                                selecteddata: _this.selection.selected
                            });
                            _this.dataSource = new material.MatTableDataSource(result.results.res);
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
                                totalresults: result,
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
                    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
                        /** @type {?} */
                        var result = {};
                        console.log("count log++", _this.newcurrentpagingVal);
                        result = res;
                        _this.date_search_source_countval = (result.count);
                        _this.pageCountArray = new Array(Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit));
                        _this.lastpageCountArray = Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit);
                        _this.pageChangeValue = _this.limitcondval.pagecount;
                        _this.newcurrentpagingVal = _this.limitcondval.pagecount;
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
                bs.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
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
                        template: "<div class=\"container \" id={{libdataval.containerid}}>\n\n\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\" (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\" (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\" [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\" (keyup)=\"autocompletechangedetected(item);\" (click)=\"autocompletefunction(item)\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <!-- single select box -->\n                        <ng-container *ngIf=\"status.multiple===undefined\">\n                            <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\" [(ngModel)]='tsearch[status.field]'>\n                                <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\" (click)=\"selectSearch(statusval.val, status,statusval,'false')\">\n                                    {{statusval.name}}\n                                </mat-option>\n                            </mat-select>\n                        </ng-container>\n                        <!-- multiple select box search -->\n                        <ng-container *ngIf=\"status.multiple==true\">\n                            <mat-select multiple [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\" [(ngModel)]='tsearch[status.field]'>\n                                <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\" (click)=\"selectSearch(statusval.val, status,statusval,'true')\">\n                                    {{statusval.name}}\n                                </mat-option>\n                            </mat-select>\n                        </ng-container>\n\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\" placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\" (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker  #picker1></mat-datepicker>\n                        </mat-form-field> -->\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" (dateChange)=\"dateSearch(status.field,status)\" [min]=\"minDate\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n\n                        </mat-form-field>\n                        <!-- datepicker{{end_date}} -->\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\"\n                                matTooltipClass=\"refreshtooltipcls\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\" matTooltipClass=\"searchtooltipcls\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\" class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\" class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\" class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\" class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\" *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\" (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\" *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\" *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" matTooltip=\"Delete\"\n                    mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\"\n                    matTooltip=\"Update Status\" mat-raised-button (click)=\"managestatusmultiple()\"> Update Status\n                </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" matTooltip=\"{{cbtns?.tooltip}}\" mat-raised-button\n                            (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" min=\"1\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\" [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n\n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"> </span>\n                            <span></span>\n                            </span>\n\n                            <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                            </span>\n\n                            <!-- {{column.header}} -->\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\" class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                            <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\" (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \" data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                            <span [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                        {{row[column.columnDef] | date}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetimeshort') &&  column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                        {{row[column.columnDef] | date:'medium'}}\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime')  && column.columnDef.includes( 'datetimeshort') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                        {{row[column.columnDef] | date:'short'}}\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                        NA\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                        NA\n                    </ng-container>\n\n                    </span>\n                    <!-- for image view  -->\n                    <span *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \" (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                    <!-- for video view -->\n                    <span *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \">\n                                <span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                    </span>\n                    <span *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] =='' \">\n\n                              \n                                    <span class=\"navideo\">\n                                        Not Available\n                                    </span>\n                    </span>\n\n                    <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                    <!--          <span *ngIf=\"sh==true \">-->\n                    <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \" class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                    <!--          </span>-->\n                    <!--          <span *ngIf=\"aud==true \">-->\n                    <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                    <!--// for grap url//-->\n\n                    <span *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \" class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                    <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                    <!--          //grap url end//-->\n\n\n                    <!--          </span>-->\n                    <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n                <ng-container *ngIf=\"column.columnDef== '#' \">\n                    <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                    </td>\n\n                </ng-container>\n\n                <ng-container *ngIf=\"column.columnDef== 'select' \">\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n\n                <!-- action buttons start here -->\n                <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                    <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                        <div class=\"actionbuttonwrapper\">\n                            <div class=\"button_div_custom_cls\">\n\n                                <!-- loader -->\n\n                                <section class=\"example-section example-section-button-1 \">\n                                    <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                                    </mat-progress-bar>\n                                </section>\n\n                                <!-- note block -->\n                                <ng-container *ngIf=\"libdataval.notes!=null \">\n                                    <button mat-raised-button color=\"primary\" class=\"notebtncls\" matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\" matTooltip=\"{{libdataval?.notes?.tooltip }}\" (click)=\"opennotes(row)\">\n                                            <span class=\"notelabelc\"> {{libdataval.notes.label }}</span>\n                                            <!-- <span class=\"notebracket1\">(</span> -->\n                                            <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                            <!-- <span class=\"notebracket2\">)</span> -->\n                                        </button>\n                                </ng-container>\n\n                                <!--custom buttions block -->\n\n                                <ng-container *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                    <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                        <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                            <ng-container *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                <!-- ss {{row['status']}} -->\n                                                <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip }}\" matTooltipClass=\"listnertooltipcls bs {{custombutton?.class}}\" (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label\n                                                        }}</button>\n                                            </ng-container>\n\n                                            <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                        <button mat-raised-button matTooltipClass=\"externallinktooltipcls\" matTooltip=\"{{custombutton?.tooltip}}\" color=\"primary\">{{custombutton.label}}</button>\n                                                    </a>\n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip }}\" matTooltipClass=\"parambtntooltipcls\" (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                <ng-container *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip }}\" (click)=\"openinternallink(custombutton)\">{{custombutton.label\n                                                            }}</button>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\" (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip }}\" (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                <ng-container *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip }}\" (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\" matTooltip=\"{{custombutton?.tooltip}}\" (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                </ng-container>\n\n                                            </ng-container>\n\n                                        </section>\n\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n\n\n\n                            <span class=\"actionbuttonwrapperspan\" *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                    <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                        class=\"cursor\" (click)=\"editdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.edit}}\">\n                                            edit\n                                        </i>\n                                    </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\" class=\"cursor\" (click)=\"deletedata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.delete }}\">\n                                            delete_outline\n                                        </i>\n                                    </span>\n\n                            <!--For modern browsers-->\n                            <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\" class=\"cursor\" (click)=\"viewdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.preview }}\">\n                                            remove_red_eye\n                                        </i>\n                                    </span>\n\n                            <!--For modern browsers-->\n                            <span class=\"cursor\" *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\" (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.changeStatus  }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                            <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{staticTooltip.changeStatus }} \">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                            <!-- hide status toggle with cond-->\n                            <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\" class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                            <!-- artistxp preview start -->\n                            <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                        <i class=\"material-icons\">perm_media</i>\n                                    </span>\n                            <!-- artistxp preview end -->\n\n                            </span>\n                        </div>\n                    </td>\n                </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\" [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </section>\n\n        </ng-container>\n\n\n        <!-- new pagination block  -->\n        <ng-container *ngIf=\"paginationtypeFlag && paginationtype==2 && newpagingcountFlag && tableflag==0\">\n            <div class=\"paginationwrapper\">\n                <span class=\"showingpaginationcls\">Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span> Results\n                </span>\n\n                <div class=\"paginationlistcon\">\n                    <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pagefirst_button\" (click)=\"paging(1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"First Page\">First</button>\n                    <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pageprev_button\" (click)=\"paging(limitcondval.pagecount-1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Previous Page\">Prev</button>\n\n                    <ng-container *ngFor=\"let item of pageCountArray;let i=index\">\n                        <ng-container *ngIf=\"i<10 && (pageCountArray.length > newcurrentpagingVal+i-1)\">\n\n                            <!-- h{{i}}--{{newcurrentpagingVal+i-1}}--{{pageCountArray.length}} -->\n\n\n                            <!-- <span *ngIf=\" (pageCountArray.length - limitcondval.pagecount) < 10\" class=\"pagercls\"\n                        [ngClass]=\"{'active': limitcondval.pagecount ===  limitcondval.pagecount+i-9}\"\n                        (click)=\"paging(limitcondval.pagecount+i-9 ,'')\">\n                        <span>\n                            \n                            {{ limitcondval.pagecount+i-9 }}\n                        </span>\n                    </span> -->\n                            <span class=\"pagercls\" [ngClass]=\"{'active': newcurrentpagingVal+i === limitcondval.pagecount}\" (click)=\"paging(i+newcurrentpagingVal,'')\">\n                                <span class=\"newpagingdatacls\">\n                                    {{ i+newcurrentpagingVal }}\n                                </span>\n                            </span>\n                        </ng-container>\n\n\n                    </ng-container>\n                    <mat-label class=\"gotopagecls\">Go to Page:</mat-label>\n                    <input type=\"number\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\" min=\"1\" max=\"{{lastpageCountArray}}\"> of {{lastpageCountArray}} Pages\n                    <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagenext_button\" (click)=\"paging(limitcondval.pagecount+1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Next Page\">Next</button>\n\n                    <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagelast_button\" (click)=\"paging(lastpageCountArray,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Last Page\">Last</button>\n                </div>\n            </div>\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n    </mat-card>\n\n\n\n</div>\n<!-- <div>{{ startDate111 }}</div>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker  #picker1></mat-datepicker>\n</mat-form-field> -->\n\n<!-- <div>After Translet the word test is : {{\"test\" | languageTranslet}}</div> -->\n<!-- <div>{{\"test\"}}</div> -->\n<!-- <div>\n    <span>{{\"Her knowledge of publishing trends, literary history, and books of every description and genre, however, filled rooms\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"It is authorized to decide all cases of every description, arising under the constitution or laws of the United States\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"For example, he wanted to be a member of as many clubs - of any description - as possible\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"Academic excellence was matched with extra-curricular activities of every description - from drama through sport to foreign travel\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Superb apple pie with sultanas and cloves, interspersed with crusty bread sandwiches of every description\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"being at least one \u2014used to indicate that a logical proposition is asserted only of a subclass or certain members of the class denoted by the term which it modifies.\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"When some is used to modify a number, it is almost always a round number\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Middle English som, adjective & pronoun, from Old English sum; akin to Old High German sum some, Greek ham\u0113 somehow, homos same\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"causing a specified feeling or condition\" | languageTranslet}}</span>\n    <span>\n        {{ \"The assessments of the autonomic nervous system, endothelial function, and Ankle-Brachial Index (ABI) are well-recognized tests to detect early complications in diabetic patients \u2013 diabetic neuropathy risk, cardiovascular risk, and peripheral artery disease. These assessments are recommended by the U.S. and International Medical Associations. Unfortunately, most of these assessments or exams are not routinely performed in daily clinical practice because of concerns about complex procedures, time consumption, and a high level of difficulty in reading and/or interpreting exam reports.\" | languageTranslet }}\n    </span>\n    <br>\n\n\n    \n    <span>\n        {{ \"Our ANS testing medical device platform eliminates these concerns by offering an innovative medical device that provides physicians with new and easy to use tools that simplify complex procedures, significantly reduces the time required by technicians to perform the exams, and offers easy to read and interpret exam reports with clinical guidance support which is backed by studies and peer reviews. Lastly, our most recent innovation includes wireless transmission to increase patient and technician comfort.\" | languageTranslet }}\n    </span>\n</div> -->",
                        animations: [
                            animations.trigger('detailExpand', [
                                animations.state('collapsed', animations.style({ height: '0px', minHeight: '0' })),
                                animations.state('expanded', animations.style({ height: '*' })),
                                animations.transition('expanded <=> collapsed', animations.animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                            ]),
                        ],
                        styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}tr.example-detail-row{height:0}tr.example-element-row:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row:not(.example-expanded-row):active{background:#efefef}.example-element-row td{border-bottom-width:0}.pagercls{cursor:pointer}.active{color:#00f}"]
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
                { type: i0.ElementRef },
                { type: ObservableserviceService }
            ];
        };
        ListingComponent.propDecorators = {
            onLiblistingChange: [{ type: i0.Output }],
            onLiblistingButtonChange: [{ type: i0.Output }],
            languageDataset: [{ type: i0.Input }],
            setconvertToLanguage: [{ type: i0.Input }],
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
            customlistenbutton: [{ type: i0.Input }],
            sort: [{ type: i0.ViewChild, args: [material.MatSort,] }],
            paginator: [{ type: i0.ViewChild, args: [material.MatPaginator,] }]
        };
        return ListingComponent;
    }());
    var Confirmdialog = /** @class */ (function () {
        function Confirmdialog(_apiService, dialogRef, data, sanitizer, dialog) {
            this._apiService = _apiService;
            this.dialogRef = dialogRef;
            this.data = data;
            this.sanitizer = sanitizer;
            this.dialog = dialog;
            this.filearray = [];
            console.log('lib data in modal ', this.data);
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
                var dialogRef = this.dialog.open(DeleteNotesModal, {
                    height: 'auto',
                    panelClass: ['custom-modalbox', 'delete-notes-modal'],
                    disableClose: true
                    // data: {
                    //   isconfirmation: false,
                    //   notes: true, apiurl: this.apiurlval,
                    //   notedata: this.libdataval.notes, rowdata: val,
                    //   jwttokenval: this.jwttokenval,
                    //   listdata: result.res,
                    //   _snackBar: this._snackBar
                    // }
                });
                dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                    // console.log("result",result);
                    if (typeof result != 'undefined' && typeof (result.response) != "undefined" && result.response != "") {
                        /** @type {?} */
                        var source = {
                            id: _this.data.rowdata._id,
                            index: index
                            // note: this.data.notesval,
                            // user: this.data.notedata.user,
                        };
                        _this.data.loading1 = index;
                        _this._apiService.postSearch(_this.data.apiurl + _this.data.notedata.deleteendpoint, _this.data.jwttokenval, source).subscribe(( /**
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
                    }
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
        /**
         * @param {?} e
         * @return {?}
         */
        Confirmdialog.prototype.handleDrop = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
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
                // console.log("dt dataaa++", dt);
                // console.log("dt filechooserFlag++", filechooserFlag);
                /** @type {?} */
                var files = dt.files == null ? dt.target.files : dt.files;
                console.log("handelDrop files", files);
                var _loop_3 = function (i) {
                    /** @type {?} */
                    var file = files[i];
                    // console.log(files, 'files', e.target.id);
                    // console.log('farr', this.filearray);
                    console.log('files++', file);
                    // for (const g in this.formdataval.fields) {
                    // if (this.formdataval.fields[g].type == 'file' && (this.formdataval.fields[g].name == e.target.id.replace('drop', '') || this.formdataval.fields[g].name == e.target.id.replace('filechoosersingle', '') || this.formdataval.fields[g].name == e.target.id.replace('filechoosermultiple', ''))) {
                    // console.log("if part", e.target.id, this.formdataval.fields[g]);
                    // console.log(this.singleImgFormData,'singleImgFormData')
                    // console.log('file details', this.formdataval.fields[g], g);
                    // if (this.formdataval.fields[g].multiple == null) {
                    //   // this.deletefile(va)
                    //   // console.log(files[i], 'files[i]=======single')
                    //   //image preview base/64
                    //   // console.log(" before 2nd if part of type checking", files);
                    //   if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                    //     //Show image preview
                    //     // console.log("2nd if part of type checking");
                    //     let reader = new FileReader();
                    //     reader.onload = (event: any) => {
                    //       this.formdataval.fields[g].imageUrl = event.target.result;
                    //       this.formdataval.fields[g].croppedimagearray = [];
                    //       // console.log(event.target.result, 'event.target.result=========')
                    //       if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                    //         for (let c in this.formdataval.fields[g].aspectratio) {
                    //           this.formdataval.fields[g].croppedImage = [];
                    //           this.formdataval.fields[g].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;
                    //           // this.formdataval.fields[g].aspectratio[c] = Number(this.formdataval.fields[g].aspectratio[c]).toFixed(2);
                    //         }
                    //       }
                    //       // console.log(this.formdataval.fields[g], 'files+++++')
                    //     };
                    //     reader.readAsDataURL(files[i]);
                    //   }
                    //   this.formdataval.fields[g].loaded = 0;
                    //   this.formdataval.fields[g].loadfile = 1;
                    //   if (filechooserFlag == 0) {
                    //     if (this.filearray[e.target.id.replace('drop', '')] != null) {
                    //       for (const n in this.formdataval.fields) {
                    //         if (this.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                    //           this.deletefile(this.formdataval.fields[n], 1);
                    //           setTimeout(() => {
                    //             this.filearray[e.target.id.replace('drop', '')] = files[i];
                    //           }, 0);
                    //         }
                    //       }
                    //       // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                    //     } else {
                    //       this.filearray[e.target.id.replace('drop', '')] = files[i];
                    //     }
                    //   } else if (filechooserFlag == 1) {
                    //     if (this.filearray[e.target.id.replace('filechoosersingle', '')] != null) {
                    //       for (const n in this.formdataval.fields) {
                    //         if (this.formdataval.fields[n].name == e.target.id.replace('filechoosersingle', '')) {
                    //           this.deletefile(this.formdataval.fields[n], 1);
                    //           setTimeout(() => {
                    //             this.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                    //           }, 0);
                    //         }
                    //       }
                    //       // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                    //     } else {
                    //       this.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                    //     }
                    //   }
                    // } else {
                    // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++ >M')
                    // console.log(files[i], 'files[i]======= multiple')
                    if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                        //Show image preview
                        // console.log("++++++if part", files);
                        /** @type {?} */
                        var reader = new FileReader();
                        reader.onload = ( /**
                         * @param {?} event
                         * @return {?}
                         */function (event) {
                            files[i].imageUrl = event.target.result;
                            // if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                            //   // console.log(this.formdataval.fields[g].aspectratio, 'ratio+=====>')
                            //   files[i].croppedImage = [];
                            //   files[i].aspectratio = this.formdataval.fields[g].aspectratio;
                            //   files[i].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;
                            //   files[i].croppedimagearray = [];
                            //   for (let c in files[i].aspectratio) {
                            //     if (files[i].aspectratio != null && files[i].aspectratio[c] != null && typeof (files[i].aspectratio[c]) != 'undefined') {
                            //       // console.log(files[i].aspectratio[c], 'files[i].aspectratio[c]')
                            //       // files[i].aspectratio[c] = Number(files[i].aspectratio[c]).toFixed(2);
                            //     }
                            //   }
                            //   // console.log(files[i], 'files[i]==>')
                            // }
                            // console.log(this.formdataval.fields[g], 'imageUrl+++++')
                        });
                        reader.readAsDataURL(files[i]);
                    }
                    files[i].loaded = 0;
                    files[i].loadfile = 1;
                    // if (this.formdataval.fields[g] != null && this.formdataval.fields[g].imagefields != null && this.formdataval.fields[g].imagefields.length > 0) {
                    //   files[i].imagefields = this.formdataval.fields[g].imagefields;
                    // }
                    //for drag and drop files
                    if (filechooserFlag == 0) {
                        if (this_2.filearray[e.target.id.replace('drop', '')] == null) {
                            this_2.filearray[e.target.id.replace('drop', '')] = [];
                        }
                        this_2.filearray[e.target.id.replace('drop', '')].push(files[i]);
                    }
                    //for choose files
                    if (filechooserFlag == 1) {
                        if (this_2.filearray[e.target.id.replace('filechoosermultiple', '')] == null) {
                            this_2.filearray[e.target.id.replace('filechoosermultiple', '')] = [];
                        }
                        this_2.filearray[e.target.id.replace('filechoosermultiple', '')].push(files[i]);
                    }
                    // }
                    // }
                    // }
                    console.log("files", files);
                };
                var this_2 = this;
                // return;
                // console.log("files count", files.length);
                for (var i = 0; i < files.length; i++) {
                    _loop_3(i);
                }
                return false;
            };
        /**
         * @param {?} val
         * @return {?}
         */
        Confirmdialog.prototype.uploadfile = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log('upppp', val);
                /** @type {?} */
                var reader = new FileReader();
                /** @type {?} */
                var file = this.filearray[val.name];
                console.log("this.filearray", this.filearray);
                // return;
                // console.log('file val', val);
                file.uploaded = 2; // show progressbar
                // let temploader: any = this.fieldloading[val.name];
                // temploader = val.name;
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
                            name: val.prefix + file[0].name.split(" ").join(""),
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
                        file.loadfile = 1;
                        val.loaded = null;
                        file.fileservername = val.prefix + file[0].name.split(" ").join("");
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
                console.log("file", file);
                reader.readAsArrayBuffer(file[0]);
            };
        Confirmdialog.decorators = [
            { type: i0.Component, args: [{
                        selector: 'confirmdialog',
                        template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\n            {{data?.headerData?.header}}\n        </h1>\n\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\n                            <span>By:</span>{{note.notes.user}}\n                        </div>\n                        <div mat-line class=\"line-datetime\"\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\n                            {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span style=\"cursor: pointer;\" *ngIf=\"note.notes.userid==data.notedata.user\"\n                            class=\"material-icons\" (click)=\"deletenote(notej)\" matTooltip=\"Delete Note\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div class=\"textareanotewrapper\">\n                    <!-- notes management form -->\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n\n                    <!-- <div class=\"drop\" >\n                        Browse or Drop Files Here\n\n                        <ng-container >\n                            <input type=\"file\"  id=\"filechoosermultiple{{data.notedata.imagedata.name}}\" multiple  (change)=\"handleDrop($event)\"\n                                >\n                        </ng-container>\n                    </div>\n\n                    <div class=\"actionbtndiv\">\n                        <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\n                            mat-raised-button\n                            (click)=\"uploadfile(data.notedata.imagedata)\">Upload</mat-chip>\n                    </div> -->\n\n                    <button mat-button (click)=\"addnotes()\" matTooltip=\"Add Note\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\n                                    [innerHtml]=\"arr\"></span>\n                                <span\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\n                                    [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\n            (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
                    }] }
        ];
        /** @nocollapse */
        Confirmdialog.ctorParameters = function () {
            return [
                { type: ApiService },
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: platformBrowser.DomSanitizer },
                { type: material.MatDialog }
            ];
        };
        return Confirmdialog;
    }());
    // delete notes confirmation modal
    var DeleteNotesModal = /** @class */ (function () {
        function DeleteNotesModal(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
            // console.warn("bottom-sheet",data);
        }
        /**
         * @return {?}
         */
        DeleteNotesModal.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        DeleteNotesModal.prototype.responseFunction = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.dialogRef.close({ response: value });
            };
        DeleteNotesModal.decorators = [
            { type: i0.Component, args: [{
                        selector: 'deletenotesConfirmationModal',
                        template: "<mat-card class=\"deletenotesparentcls\">\n    <mat-card-content class=\"deletenoteschildcls\">\n        <h3> hey !!</h3>\n        <P>Are you sure you want to delete this note?</P>\n    </mat-card-content>\n    <ng-container>\n        \n        <mat-card-content class=\"deletenotescls\">\n            <button mat-button class=\"liblist_btn_1\" (click)=\"responseFunction('Yes')\">\n                Yes\n            </button>\n            <button mat-button class=\"liblist_btn_2\" (click)=\"onNoClick()\">\n                No\n            </button>\n        </mat-card-content>\n    </ng-container>\n</mat-card>"
                    }] }
        ];
        /** @nocollapse */
        DeleteNotesModal.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] }
            ];
        };
        return DeleteNotesModal;
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
                    this.apiService.postSearch1(link, data).subscribe(( /**
                     * @param {?} res
                     * @return {?}
                     */function (res) {
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
            { type: i0.Component, args: [{
                        selector: 'button-search-modal',
                        template: "<div class=\"bottom-sheet-header-toggle\">\n    <h2 style=\"text-align: center;\"> {{buttonSearchData.items.label}}</h2>\n</div>\n\n\n<div class=\"selecteditemcls\" *ngIf=\"selectedData.length >0\">\n    <span>Selected :</span>\n    <div class=\"navlist\" style=\"display: inline;\">\n        <mat-chip class=\"example-box\" *ngFor=\"let item of selectedData;let i=index;\">{{item.name}}\n            <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"remove(item,i)\">cancel</mat-icon>\n        </mat-chip>\n    </div>\n    <span>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByItem()\">Search\n        </button>\n    </span>\n</div>\n<br><br>\n\n<div>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading_flag == true\"></mat-progress-bar>\n</div>\n<br><br>\n\n<div class=\"searchValcls\">\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Search By Keywords</mat-label>\n        <input matInput placeholder=\"filter\" [(ngModel)]=\"searchVal\" (keyup)=\"searchByKeyword(searchVal)\" [matAutocomplete]=\"auto\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of matAutosearchData;let i = index\" [value]=\"item.name\"\n        (click)=\"chooseChipItem(item,i)\">\n            {{item.name}}\n        </mat-option>\n    </mat-autocomplete>\n\n    <!-- <span class=\"errcls\" style=\"color: brown;\" *ngIf=\"searchVal == null || searchVal == ''\">{{errmsg}}</span> -->\n    <span class='searchByKeywordcls'>\n        <span style=\"cursor: pointer;\" class=\"material-icons\" (click)=\"reset()\">\n            sync\n        </span>\n         <!-- <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByKeyword(searchVal)\">Search\n        </button> -->\n    </span>\n\n</div>\n<br>\n\n<div class=\"chipdatacls\">\n    <div style=\"display: inline;\" *ngIf=\"buttonSearchData.items?.value.length >0\">\n        <h2 style=\"text-align: center;\">OR Choose From <span class=\"material-icons\">\n                south\n            </span></h2>\n        <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n            <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of buttonSearchData.items?.value;let i =index\">\n                <span style=\"cursor: pointer;\" (click)=\"chooseChipItem(item,i)\"> {{item.name}}</span>\n            </mat-chip>\n        </mat-chip-list>\n    </div>\n    <span class='norecordcls' style=\"text-align: center;\" *ngIf=\"buttonSearchData.items?.value.length == 0\"><span\n           >No Record Found</span></span>\n</div>\n\n\n<div class=\"clrcls\">\n    <span style=\"cursor: pointer;\n    float: right;\n    margin-bottom: -6px;\" matTooltip=\"Clear\" class=\"material-icons\" (click)=\"close()\">\n        clear\n    </span>\n</div>"
                    }] }
        ];
        /** @nocollapse */
        ModalForButtomSearch.ctorParameters = function () {
            return [
                { type: material.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [material.MAT_DIALOG_DATA,] }] },
                { type: ApiService }
            ];
        };
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
    // import { CKEditorComponent } from "ng2-ckeditor";
    // import {MatSnackBar} from "@angular/material/snack-bar";
    var ShowformComponent = /** @class */ (function () {
        function ShowformComponent(formBuilder, _apiService, _snackBar, router$$1, elementRef) {
            var _this = this;
            this.formBuilder = formBuilder;
            this._apiService = _apiService;
            this._snackBar = _snackBar;
            this.router = router$$1;
            this.elementRef = elementRef;
            // @ViewChild("myckeditor") ckeditor: CKEditorComponent;
            this.formatFlag = false;
            this.autosearchpostflag = false;
            // public minDate = new Date(2020, 8, 24);
            // public maxDate = new Date(2020, 8, 31);
            this.dateflag = false;
            this.PasswordVal = '';
            this.externalDataVal = [];
            this.customlistenbuttons = {};
            // public ckeConfig:any={};
            this.subscriptions = [];
            this.subscriptioncount = 0;
            this.autoquerychanged = new rxjs.Subject();
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
            this.numberFormatFlag = false;
            this.phonenumberValue = "";
            /*for progress bar*/
            this.color = 'primary';
            this.mode = 'indeterminate';
            this.value = 50;
            this.bufferValue = 75;
            this.onFormFieldChange = new i0.EventEmitter();
            this.timeChanged = new i0.EventEmitter();
            this.imageChangedEvent = "";
            this.croppedImage = "";
            this.subscriptions[this.subscriptioncount++] = this.autoquerychanged
                .pipe(operators.debounceTime(1500))
                .subscribe(( /**
         * @param {?} autores
         * @return {?}
         */function (autores) {
                // console.log('sss .. auto search called  .. ', this.formGroup.value);
                _this.autosearchpostflag = true;
                // this.filterautocomplete(res.val, res.data);
                /** @type {?} */
                var data = autores.data;
                /** @type {?} */
                var val = autores.val;
                console.log("this.formdataval.fields", _this.formdataval.fields, 'this.formdataval.groups', _this.formdataval.groups);
                _this.filerfielddata = [];
                // console.log("filterautocomplete with server options", data); 
                data.showautoprogressbar = true;
                /** @type {?} */
                var link = _this.formdataval.apiUrl + data.endpoint;
                /** @type {?} */
                var source = { "formvalue": _this.formGroup.value };
                /** @type {?} */
                var searchcondition = {};
                searchcondition[data.search_field] = _this.formGroup.controls[val].value;
                source['searchcondition'] = searchcondition;
                // console.log("opopopo", link, searchcondition);
                _this._apiService.postSearch(link, _this.formdataval.jwttoken, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
                    // console.log("autocomplete searching response", res);
                    data.showautoprogressbar = false;
                    if (res.status == "success") {
                        if (res.res.length == 0) {
                            _this._snackBar.openFromComponent(SnackbarComponent, {
                                duration: 6000,
                                data: { errormessage: 'No Records Found!!' }
                            });
                        }
                        if (res.res.length != 0) {
                            _this.filerfielddata = [];
                            _this.filerfielddata = res.res;
                            //  concat earlier data with new results as options  
                            if (data.val == null)
                                data.val = [];
                            data.val = data.val.concat(res.res);
                            // console.log('data.val', data.val);
                            // let temparr: any = Array.from(new Set(data.val.map((item: any) => item)))
                            data.val = _this.unique(data.val, 'key');
                            // data.val = temparr
                            // console.log(data.val, 'data.val', res.res, data.val.length, 'temparr');
                            // this.autosearchpostflag = false;
                            // res.data = data;
                        }
                    }
                }));
            }));
            // console.log(this.minDate, 'today===>', this.maxDate)
        }
        Object.defineProperty(ShowformComponent.prototype, "formdata", {
            set: /**
             * @param {?} formdata
             * @return {?}
             */ function (formdata) {
                this.formdataval = formdata;
                // if (this.formdataval.fields)
                // console.log(this.formdataval, 'htlmmmmmmm');
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
        Object.defineProperty(ShowformComponent.prototype, "custombuttons", {
            set: /**
             * @param {?} val
             * @return {?}
             */ function (val) {
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
             */ function (value) {
                this.externalDataVal = value;
                // console.log(this.externalDataVal, 'this.externalDataVal')
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
        /**
         * @param {?} array
         * @param {?} propertyName
         * @return {?}
         */
        ShowformComponent.prototype.unique = /**
         * @param {?} array
         * @param {?} propertyName
         * @return {?}
         */
            function (array, propertyName) {
                return array.filter(( /**
                 * @param {?} e
                 * @param {?} i
                 * @return {?}
                 */function (e, i) {
                    return array.findIndex(( /**
                     * @param {?} a
                     * @return {?}
                     */function (a) { return a[propertyName] === e[propertyName]; })) === i;
                }));
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
                // console.log("works properly", multipleFlag);
                if (typeof multipleFlag == 'undefined') {
                    // console.log("if part");
                    // this.filechoosersingleTypeFlag=true;
                    document.getElementById("filechoosersingle" + filename).click();
                }
                else {
                    // console.log("else part", document.getElementById("filechooser"));
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
                // console.log("handelDrop", e)
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
                // console.log("dt dataaa++", dt);
                // console.log("dt filechooserFlag++", filechooserFlag);
                /** @type {?} */
                var files = dt.files == null ? dt.target.files : dt.files;
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
                                // console.log(" before 2nd if part of type checking", files);
                                if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                                    //Show image preview
                                    // console.log("2nd if part of type checking");
                                    /** @type {?} */
                                    var reader = new FileReader();
                                    reader.onload = ( /**
                                     * @param {?} event
                                     * @return {?}
                                     */function (event) {
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
                                                setTimeout(( /**
                                                 * @return {?}
                                                 */function () {
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
                                                setTimeout(( /**
                                                 * @return {?}
                                                 */function () {
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
                                    // console.log("++++++if part", files);
                                    /** @type {?} */
                                    var reader = new FileReader();
                                    reader.onload = ( /**
                                     * @param {?} event
                                     * @return {?}
                                     */function (event) {
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
                // console.log("files count", files.length);
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
                console.log("filee++", file);
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
                setTimeout(( /**
                 * @return {?}
                 */function () {
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
                if (flag === void 0) {
                    flag = '';
                }
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
                this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
                if (field === void 0) {
                    field = '';
                }
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
                if (field === void 0) {
                    field = '';
                }
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
                this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) {
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
                                if (_this.formfieldrefreshdataval.field == 'resetform') {
                                    _this.resetformdata();
                                }
                                if (_this.formfieldrefreshdataval.field == 'autocompletevisible') {
                                    _this.autocompletevisible(_this.formfieldrefreshdataval);
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
        ShowformComponent.prototype.autocompletevisible = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                // console.log('val', val, 'autocompletevisible', 'ng-reflect-autocomplete');
                /** @type {?} */
                var autoelements = document.querySelectorAll('.libformclass input[ng-reflect-autocomplete]:not([ng-reflect-autocomplete="0"])');
                // document.querySelectorAll('.libformclass input[ng-reflect-autocomplete]:not([ng-reflect-autocomplete="0"])')[0].style.display = 'none';
                // .forEach((div: any) => {
                //   console.log('got div ', div);
                //   if (div != null) document.querySelector(div).style.display = 'none';
                // });
                // console.log('autoelements', autoelements.length, autoelements);
                for (var i = 0; i <= autoelements.length; i++) {
                    // document.querySelectorAll('.libformclass input[ng-reflect-autocomplete]:not([ng-reflect-autocomplete="0"])')[i].style.display = 'none';
                    /** @type {?} */
                    var elem = document.querySelectorAll('.libformclass input[ng-reflect-autocomplete]:not([ng-reflect-autocomplete="0"])')[i];
                    if (elem != null) {
                        elem.style.display = val.display;
                        // elem.classList.add('hidecls');
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
                // console.log('cc', val, data);
                // return;
                if (data.endpoint != null) {
                    this.autoquerychanged.next({ val: val, data: data });
                    // return
                    // this.formdataval.fields[data.name].showautoprogressbar=true;
                }
                else {
                    /** @type {?} */
                    var fieldval_1 = this.formGroup.controls[val].value;
                    if (fieldval_1 == '' || fieldval_1 == null) {
                        this.filerfielddata = [];
                    }
                    else {
                        /** @type {?} */
                        var filterval = data.val.filter(( /**
                         * @param {?} e
                         * @return {?}
                         */function (e) {
                            // console.log('e', e, fieldval)
                            return e.val.includes(fieldval_1);
                        }));
                        this.filerfielddata = [];
                        this.filerfielddata = filterval;
                        // console.log('fil', filterval);
                    }
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
                // console.log("click in autocomplete called", val);
                this.currentautocomplete = val.name;
                this.filerfielddata = [];
            };
        /**
         * @return {?}
         */
        ShowformComponent.prototype.autocompleteresetmatchip = /**
         * @return {?}
         */
            function () {
                // console.log("click in autocompleteresetmatchip called", this.filerfielddata);
            };
        // for removing selected vals in autocomplete 
        // for removing selected vals in autocomplete 
        /**
         * @param {?} val
         * @param {?} removedData
         * @return {?}
         */
        ShowformComponent.prototype.removechipsingle =
            // for removing selected vals in autocomplete 
            /**
             * @param {?} val
             * @param {?} removedData
             * @return {?}
             */
            function (val, removedData) {
                // console.log("val",val," ",removedData);
                this.autocompletefiledvalue[val.name] = null;
                this.formGroup.controls[val.name].patchValue('');
                this.inputblur(val.name);
                this.onFormFieldChange.emit({ val: val, fieldval: this.formGroup.controls[val.name].value, fromval: this.formGroup.value, autocompletedata: val, autocompletefiledvalue: this.autocompletefiledvalue, removedDataSet: removedData });
            };
        /**
         * @param {?} val
         * @param {?} index
         * @param {?} removedData
         * @return {?}
         */
        ShowformComponent.prototype.removechipmultiple = /**
         * @param {?} val
         * @param {?} index
         * @param {?} removedData
         * @return {?}
         */
            function (val, index, removedData) {
                console.log("val for multiple", index);
                this.autocompletefiledvalue[val.name].splice(index, 1);
                // this.formGroup.controls[val.name].patchValue(this.autocompletefiledvalue[val.name]);
                if (this.autocompletefiledvalue[val.name].length == 0) {
                    this.autocompletefiledvalue[val.name] = null;
                }
                this.formGroup.controls[val.name].patchValue('');
                this.inputblur(val.name);
                this.onFormFieldChange.emit({ val: val, fieldval: this.formGroup.controls[val.name].value, fromval: this.formGroup.value, autocompletedata: val, autocompletefiledvalue: this.autocompletefiledvalue, removedDataSet: removedData, removedIndex: index });
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
                // console.log('ff auto complete set ', val, '00000', field, field.name);
                if (field.multiple == null || typeof field.multiple == 'undefined') {
                    if (val != null && val.key != null)
                        this.autocompletefiledvalue[field.name] = val.key;
                }
                else {
                    if (this.autocompletefiledvalue[field.name] == null) {
                        this.autocompletefiledvalue[field.name] = [];
                    }
                    this.autocompletefiledvalue[field.name].push(val.key);
                }
                if (this.formGroup.controls[field.name] == null) {
                    this.formGroup.controls[field.name].patchValue("");
                    this.inputblur(field.name);
                }
                this.reloadautocomplete(field.name);
                // console.log("field.name", field.value, "opop", this.formGroup.controls[field.name].value);
                this.formGroup.controls[field.name].patchValue("");
                this.onFormFieldChange.emit({ field: field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, autocompletedata: val, autocompletefiledvalue: this.autocompletefiledvalue });
                // if (this.autocompletefiledvalue[field.name] != null && this.autocompletefiledvalue[field.name].length > 0) {
                //   let temparr: any = Array.from(new Set(this.autocompletefiledvalue[field.name].map((item: any) => item)))
                //   this.autocompletefiledvalue[field.name] = temparr;
                // }
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
         * @param {?} val
         * @return {?}
         */
        ShowformComponent.prototype.timepickerchange = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                console.log("PPPP", val);
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
                console.log("timepicker", field, "  ", index);
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
                var _loop_3 = function (n) {
                    if (this_2.formGroup.controls[this_2.formdataval.fields[n]] == null) {
                        /** @type {?} */
                        var temcontrolarr = [];
                        /** @type {?} */
                        var temvalidationrule = [];
                        if (this_2.formdataval.fields[n].value != null) {
                            temcontrolarr.push(this_2.formdataval.fields[n].value);
                            if (this_2.formdataval.fields[n].type == 'numberformat') {
                                this_2.phonenumberValue = this_2.formdataval.fields[n].value;
                            }
                        }
                        else {
                            temcontrolarr.push('');
                        }
                        // console.log("temcontrolarr",temcontrolarr);
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
                            // label: "Doctor/Practice is : ",
                            // name: "docprac",
                            // // hint: 'In months',
                            // type: "checkbox",
                            // multiple: true,
                            // val: [
                            //     { key: 0, val: "Family Medicine" },
                            //     { key: 1, val: "Neurology" },
                            //     { key: 2, val: "D.O Doctor of Osteopathy" },
                            //     { key: 3, val: "General Practice" },
                            //     { key: 4, val: "Internal Medicine" },
                            //     { key: 5, val: "Pain Mgnt (Integrated Practice)" },
                            //     { key: 6, val: "Primary Care" },
                            //     { key: 7, val: "Endocrinology" },
                            //     { key: 8, val: "Integrated Specialty" },
                            //     { key: 9, val: "Cardiology" },
                            // ],
                            // value: [],
                            // validations: [
                            //     { rule: "required", message: "Must be select any of them." },
                            // ],
                            // let tempfieldval: any = {
                            //   label: this.formdataval.fields[n].label,
                            //   name: this.formdataval.fields[n].name,
                            //   value: this.formdataval.fields[n].value,
                            //   validations: this.formdataval.fields[n].validations,
                            //   // value
                            // };
                            // temcontrolarr.push(this.formdataval.fields[n].value);
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
                        // console.log("temvalidationrule", temvalidationrule);
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
                            this_2.formGroup.addControl(this_2.formdataval.fields[n].name, new forms.FormControl({ value: this_2.formdataval.fields[n].value, disabled: this_2.formdataval.fields[n].disabled }, temvalidationrule));
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
                    _loop_3(n);
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
         * @param {?} event
         * @return {?}
         */
        ShowformComponent.prototype.setphonenumberValidate = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (event.target.value.length < 14) {
                    // console.log("not correct");
                    this.numberFormatFlag = true;
                }
                else {
                    // console.log("correct");
                    this.numberFormatFlag = false;
                }
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
                console.log('x', this.formGroup.value);
                // return;
                this.post = post;
                /** @type {?} */
                var tempformval = {};
                for (var x in this.formGroup.controls) {
                    this.formGroup.controls[x].markAsTouched();
                    // if(this.formGroup.controls[x].valid){
                    // console.log('x',this.formGroup);
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
                            if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null) {
                                // console.log(' autoval in form before patch ', this.autocompletefiledvalue[this.formdataval.fields[m].name], this.formdataval.fields[m].name, this.formGroup.controls[this.formdataval.fields[m].name].value, this.formGroup.controls[this.formdataval.fields[m].name].valid);
                                this.formGroup.controls[this.formdataval.fields[m].name].patchValue(this.autocompletefiledvalue[this.formdataval.fields[m].name]);
                                // console.log(' autoval in form after patch', this.autocompletefiledvalue[this.formdataval.fields[m].name], this.formdataval.fields[m].name, this.formGroup.controls[this.formdataval.fields[m].name].value, this.formGroup.controls[this.formdataval.fields[m].name].valid);
                            }
                            if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) ;
                            if (x == this.formdataval.fields[m].name && tempformval[x] == null) {
                                tempformval[x] = this.autocompletefiledvalue[this.formdataval.fields[m].name];
                            }
                        }
                        if (b.length > 1 && b[0] == this.formdataval.fields[m].name && this.formdataval.fields[m].name != x && this.formdataval.fields[m].type == 'checkbox' && this.formdataval.fields[m].multiple != null) {
                            console.log('aaaaff...', this.formGroup.controls[x].value, this.formdataval.fields[m].name);
                            // console.log('aaaaff...',this.formGroup.controls[x].value);
                            if (this.formGroup.controls[x].value == true) {
                                for (var k in this.formdataval.fields[m].val) {
                                    if (this.formdataval.fields[m].val[k].key == b[1]) {
                                        if (tempformval[this.formdataval.fields[m].name] == null) {
                                            tempformval[this.formdataval.fields[m].name] = [];
                                        }
                                        tempformval[this.formdataval.fields[m].name].push(b[1]);
                                        // this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tempformval[this.formdataval.fields[m].name]);
                                        // console.log('gv', b[1], "tempval", tempformval[this.formdataval.fields[m].name], this.formdataval.fields[m].name);
                                    }
                                }
                            }
                            else {
                                for (var k in this.formdataval.fields[m].val) {
                                    if (this.formdataval.fields[m].val[k].key == b[1]) {
                                        if (tempformval[this.formdataval.fields[m].name] == null) {
                                            tempformval[this.formdataval.fields[m].name] = [];
                                        }
                                        // tempformval[this.formdataval.fields[m].name].push(b[1]);
                                        // console.log('gv2', b[1], "tempval", tempformval[this.formdataval.fields[m].name], this.formdataval.fields[m].name);
                                    }
                                }
                            }
                            this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tempformval[this.formdataval.fields[m].name]);
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
                // if (this.phonenumberValue.length<14) {
                //   this._snackBar.open("Please Enter a valid number","ok",{
                //     duration: 1000
                //   })
                //   return;
                // }
                this.findInvalidControls();
                // console.log("valuesof form data", this.formGroup.value);
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
                        // console.log("this.formGroup.value+++++++", this.formGroup.value);
                        // this.formDirective.reset();
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
                                _this.formDirective.resetForm();
                                _this.autocompletefiledvalue = [];
                                _this.filearray = [];
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
                        this.loading = false;
                        this.onFormFieldChange.emit({
                            field: 'fromsubmit', fieldval: 'success', formdataval: this.formdataval, source: source, loading: this.loading,
                            fromval: this.formGroup.value
                        });
                    }
                }
                else {
                    for (var m in this.formdataval.fields) {
                        //reset autocomplete field vals to patch for ui only reason !! so that user can't see selected vals 
                        if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null) {
                            /** @type {?} */
                            var vflag = false;
                            if (this.formGroup.controls[this.formdataval.fields[m].name].valid)
                                vflag = true;
                            this.formGroup.controls[this.formdataval.fields[m].name].patchValue('');
                            // for making valid auto field untouched again so that user dont see error if valu is selected already !! 
                            if (vflag == true)
                                this.formGroup.controls[this.formdataval.fields[m].name].markAsUntouched();
                        }
                    }
                    this.onFormFieldChange.emit({ field: 'fromsubmiterror', fieldval: 'validationerror', fromval: this.formGroup.value, loading: this.loading });
                    this.findInvalidControls();
                    this.scrollToFirstInvalidControl();
                }
            };
        /**
         * @return {?}
         */
        ShowformComponent.prototype.findInvalidControls = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var invalid = [];
                /** @type {?} */
                var controls = this.formGroup.controls;
                for (var name_1 in controls) {
                    if (controls[name_1].invalid) {
                        invalid.push(name_1);
                    }
                }
                console.log("findInvalidControls", invalid);
                return invalid;
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
                // console.log("firstInvalidControl", firstInvalidControl);
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
                if (controlEl == null) {
                    // console.log("controlEl", controlEl);
                    return 0;
                }
                else {
                    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
                }
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
                // console.log("change event hitted", event);
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
                this.getImagetoDataURL(imgUrl, ( /**
                 * @param {?} dataUrl
                 * @return {?}
                 */function (dataUrl) {
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
                this.getImagetoDataURL(imgUrl, ( /**
                 * @param {?} dataUrl
                 * @return {?}
                 */function (dataUrl) {
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
                xhr.onload = ( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var reader = new FileReader();
                    reader.onloadend = ( /**
                     * @return {?}
                     */function () {
                        callback(reader.result);
                    });
                    reader.readAsDataURL(xhr.response);
                });
                xhr.open('GET', url);
                xhr.responseType = 'blob';
                xhr.send();
            };
        ShowformComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-showform',
                        template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container libformclass\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let grp of formdataval.groups ; let grpindex=index;\">\n                <!-- <h1>{{grp}} --//-- {{grpindex}}</h1> -->\n                <div class=\"form-group {{grp}}\">\n\n                    <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n                        <ng-container *ngIf=\"grp==fields.group\">\n\n\n                            <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                                <mat-card class=\"form_header_{{fields.name}}\" *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\">\n                                </mat-card>\n                                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <!-- for select-->\n                                    <!-- <div>ff</div> -->\n                                    <mat-label> Select {{fields.label}} </mat-label>\n                                    <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\" (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                                        <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}\n                                        </mat-option>\n                                    </mat-select>\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n\n                                </mat-form-field>\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <div>\n                                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                                        </mat-label>\n                                    </div>\n\n                                    <div>\n                                        <ng-container *ngFor=\"let imgvals of fields.val\">\n                                            <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                                <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                            </span>\n                                        </ng-container>\n                                    </div>\n\n\n\n                                    <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                            <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                        </ng-container>\n                                    </mat-error>\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n                                </div>\n\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                                    </mat-label>\n                                    <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\">\n                                        {{fields.label}}\n                                    </mat-checkbox>\n\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n                                </div>\n                                <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \" class=\"form-element form_field_{{fields.name}}\">\n                                    <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                                    <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                                    </mat-label>\n\n                                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                                        <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                            <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\" [value]=\"vals.key\">\n                                                {{vals.val}}\n                                            </mat-checkbox>\n                                            <!-- <span></span> -->\n\n                                        </ng-container>\n\n                                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                                        <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n\n                                    </ng-container>\n\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <!-- <ng-container\n                            *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n\n                        </ng-container> -->\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n\n                                </div>\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                                    <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                                        <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                            {{vals.val}}\n                                        </mat-radio-button>\n                                    </mat-radio-group>\n\n                                    <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n\n                                </div>\n\n                                <div>\n                                    <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\n                                        <div class=\"add_form\">\n                                            <div class=\"mat-form-field-wrapper\">\n                                                <div class=\"phonenumber mat-form-field\">\n                                                    <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\" required minlength=\"14\" [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [(ngModel)]=\"phonenumberValue\">\n                                                    <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\n                                                    <ng-container *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n\n                                                        <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                                            <mat-error>\n                                                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                                    <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                                                </ng-container>\n                                                            </mat-error>\n                                                        </ng-container>\n                                                    </ng-container>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </ng-container>\n\n                                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\" class=\"form-element form_field_{{fields.name}}\">\n                                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                                        <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\">\n\n                                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                        <ng-container *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                            <mat-error>\n                                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                    <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                                </ng-container>\n                                            </mat-error>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                        </ng-container>\n\n                                    </mat-form-field>\n\n\n                                    <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                                        <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\" class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\n                                            Generate Password</button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\" matTooltip=\"Copy Password\">\n                                            Copy Password</button> &nbsp;\n\n                                        <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\" (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Show Password\">\n                                            remove_red_eye\n                                        </span>\n\n                                        <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\" (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Hide Password\">\n                                            visibility_off\n                                        </span>\n                                    </div>\n\n                                    <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                                        <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                            <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                                <span>\n                                                    <button mat-raised-button color=\"accent\" type=\"button\"\n                                                        (click)=\"CustomFlagFields(fields,item)\"\n                                                        class=\"CustomFlagFieldscls\">\n                                                        {{item?.labeladd}}<span class=\"material-icons\">\n                                                            add\n                                                        </span></button> &nbsp;\n\n                                                <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                                        {{item?.labelremove}}<span class=\"material-icons\">\n                                                            remove\n                                                        </span></button>\n                                                </span>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                                        <div *ngIf=\"fields?.customheadingtitle != null\">\n                                            <mat-card class=\"customheadingtitlecls\">\n                                                {{fields?.customheadingtitle}}</mat-card>\n                                        </div>\n                                    </div>\n\n                                </div>\n\n                                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                    <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\" [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\" [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n                                </mat-form-field>\n\n                                <!-- timepicker type field in form start here -->\n                                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='timepicker'\" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                                    <input matInput [ngxTimepicker]=\"picker\" [format]=\"fields.format\" (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\" (timeChanged)=\"timepickerchange($event)\">\n                                    <ngx-material-timepicker #picker></ngx-material-timepicker>\n\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n                                </mat-form-field>\n                                <!-- timepicker type field in form end here -->\n\n                                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                                    <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\" [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                                    <mat-datepicker #picker1></mat-datepicker>\n                                    <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n\n                                </mat-form-field>\n                                <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                    <!-- {{fields.val.length}}\n -->\n\n\n\n                                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                                    <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                                    <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\" (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\" placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                                    <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                                    <mat-autocomplete #auto=\"matAutocomplete\">\n                                        <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                            <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\" (click)=\"setautocompletevalue(vals,fields)\">\n                                                <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                                <span>{{vals.val}}</span>\n                                                <!-- <small>Population: {{state.population}}</small> -->\n                                            </mat-option>\n                                        </ng-container>\n\n\n                                    </mat-autocomplete>\n                                    <!-- to check selected auto val ..  -->\n                                    <!-- <span> auto data\n                            <ng-container\n                                *ngIf=\"autocompletefiledvalue!=null && autocompletefiledvalue[fields.name]!=null\">\n                                {{autocompletefiledvalue[fields.name] | json}}\n                            </ng-container>\n\n                        </span> -->\n\n\n                                    <mat-progress-bar *ngIf=\"fields.showautoprogressbar!=null && fields.showautoprogressbar==true\" class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                    </mat-progress-bar>\n\n\n\n\n                                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\" aria-label=\"{{fields.name}} data\">\n                                        <ng-container *ngFor=\"let vals of fields.val \">\n                                            <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                                <mat-chip [removable]=true>{{vals.val}}\n                                                    <mat-icon matChipRemove (click)=\"removechipsingle(fields,vals)\">\n                                                        cancel\n                                                    </mat-icon>\n                                                </mat-chip>\n                                            </ng-container>\n\n                                        </ng-container>\n\n                                    </mat-chip-list>\n\n\n                                    <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\" aria-label=\"{{fields.name}} data\">\n                                        <ng-container *ngFor=\"let vals of fields.val \">\n                                            <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                                <ng-container *ngIf=\"vals.key==avals\">\n                                                    <mat-chip [removable]=true>{{vals.val}}\n                                                        <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib,vals)\">\n                                                            cancel\n                                                        </mat-icon>\n                                                    </mat-chip>\n                                                </ng-container>\n                                            </ng-container>\n\n                                        </ng-container>\n\n                                    </mat-chip-list>\n\n                                    <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                    <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                    <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        <mat-error>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                        <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                    </ng-container>\n\n\n                                </mat-form-field>\n\n                                <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                                    <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                        <!-- <p>test</p> -->\n                                        <ckeditor [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] ,allowedContent:true}\"\n                                            (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\" [formControlName]=\"fields.name\"></ckeditor>\n                                        <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </div>\n\n                                    <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                        <!-- <p>test1</p> -->\n\n                                        <ckeditor [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ],allowedContent:true}\"\n                                            (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                                        <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </div>\n\n\n\n                                </div>\n\n\n\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\" class=\"form-element form_field_{{fields.name}}\">\n\n                                    <span class=\"externalDataFunctioncls\">\n                                        <button type=\"button\" mat-raised-button color=\"primary\"\n                                            (click)=\"externalDataFunction(fields,ival)\"\n                                            matTooltip=\"{{fields.label}}\">{{fields.label}}</button>\n                                    </span>\n                                    <br>\n\n                                    <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                                        <!-- {{fields.value | json}} -->\n\n                                        <div *ngFor=\"let item of fields.value;let i = index\">\n                                            <div class=\"externalcardcls\">\n                                                <mat-card>\n\n                                                    <span class=\"keycls\">\n                                                        {{item.label}} :\n                                                    </span>\n\n                                                    <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                                        {{item.val}}\n                                                    </span>\n\n                                                    <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                                        <img [src]=\"item.val\">\n                                                    </span>\n\n                                                    <span class=\"external_buttoncls\">\n\n\n                                                        <span style=\"cursor: pointer;\"\n                                                            (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                            class=\"material-icons\">\n                                                            create\n                                                        </span>\n\n                                                    <span style=\"cursor: pointer;\" (click)=\"externalDataEditFunction('remove',fields,ival,i)\" class=\"material-icons\">\n                                                            clear\n                                                        </span>\n\n                                                    </span>\n\n                                                </mat-card>\n                                            </div>\n                                        </div>\n\n                                    </ng-container>\n                                    <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                                </div>\n\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                            <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                        </ng-container>\n                                    </mat-error>\n                                </div>\n\n                                <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\" class=\"form-element form_field_{{fields.name}}\">\n                                    <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                    <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                                        <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\" id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">\n                                            Browse or Drop Files Here\n                                            <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                            <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                                <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\" style=\"display:none\" (change)=\"handleDrop($event)\">\n                                            </ng-container>\n\n                                            <ng-container *ngIf=\"fields.multiple == null \">\n                                                <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\" multiple (change)=\"handleDrop($event)\">\n                                            </ng-container>\n                                        </div>\n\n                                        <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                        <!-- <span>{{fields | json}}</span> -->\n\n                                        <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                            <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                            <!-- <div></div> -->\n                                            <ng-container *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                                <div class=\"filecontainerdiv\">\n                                                    <span *ngIf=\"filearray[fields.name].uploaded==1\" class=\"material-icons fileuploadcompleteicon \">\n                                                        cloud_done\n                                                    </span>\n\n\n                                                    <div class=\"imagedivcls\" *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                                        <div class=\"divimagecardcls\">\n                                                            <mat-card class=\"example-card imagecardcls\" *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                                <img mat-card-image [src]=\"fields.imageUrl\">\n                                                            </mat-card>\n                                                        </div>\n\n\n                                                        <div class=\"divimagecardcls\" *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                            <mat-card class=\"example-card imagecardcls\">\n\n                                                                <span class=\"material-icons cropcls\" *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\" (click)=\"opensingleimagecrop(fields)\">\n                                                                    crop\n                                                                </span>\n\n                                                                <img mat-card-image src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                            </mat-card>\n                                                        </div>\n\n\n                                                        <div class=\"cropimagesdiv\" *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                            <h2> Croped Images :</h2>\n\n                                                            <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\" class=\"image-cropper-cls\">\n                                                                <br />\n                                                                <span>Croped Image (Asepect Ratio) :\n                                                                    {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                                <image-cropper [imageBase64]=\"fields.imageUrl\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\" (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\n                                                                    [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                                </image-cropper>\n\n                                                            </ng-container>\n                                                        </div>\n                                                    </div>\n                                                    <div class=\"filesdivcls\">\n                                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                            picture_as_pdf\n                                                        </span>\n\n                                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                            movie_filter\n                                                        </span>\n\n                                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                            description\n                                                        </span>\n\n                                                        <span class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                                        <br />\n                                                        <span class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                                    </div>\n\n\n                                                    <div class=\"filefieldsmaincls\">\n                                                        <ng-container class=\"descdiv\" *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                            <div class=\"filefieldscls\">\n                                                                <div class=\"filefields\" *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                                    <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'text'\">\n                                                                        <input matInput type=\"text\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" name=\"{{item.name}}\" matInput placeholder=\"{{item.label}}\">\n                                                                    </mat-form-field>\n\n                                                                    <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'textarea'\">\n                                                                        <textarea matInput name=\"{{item.name}}\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{item.label}}\" [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n\n                                                                    <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'number'\">\n                                                                        <input type=\"number\" matInput name=\"{{item.name}}\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"fields.imagefields[i].value\" matInput placeholder=\"{{item.label}}\">\n                                                                    </mat-form-field>\n\n                                                                    <div *ngIf=\"item.type == 'checkbox'\">\n                                                                        <mat-checkbox name=\"{{item.name}}\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                                        </mat-checkbox>\n                                                                        &nbsp; {{item.label}}\n                                                                    </div>\n                                                                </div>\n\n                                                            </div>\n                                                        </ng-container>\n                                                    </div>\n\n\n\n                                                    <div class=\"actionbtndiv\">\n                                                        <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\" *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button (click)=\"uploadfile(fields)\">Upload\n                                                        </mat-chip>\n\n                                                        <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\" *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">\n                                                            Delete\n                                                        </mat-chip>\n\n                                                        <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\" *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\" mat-raised-button (click)=\"deletefile(fields)\">Delete\n                                                        </mat-chip>\n                                                    </div>\n\n                                                    <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                                    <section *ngIf=\"filearray[fields.name].uploaded==2 \" class=\"example-section uploadprogress\">\n                                                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                        </mat-progress-bar>\n                                                    </section>\n                                                </div>\n                                            </ng-container>\n\n\n                                            <!-- for multiple file uploads  -->\n                                            <ng-container *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                                <ng-container *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                                    <div class=\"filecontainerdiv\">\n\n                                                        <!-- {{files | json}} ++ -->\n\n                                                        <div *ngIf=\"files.loadfile != null && files.loadfile==1\" class=\"filesdivcls\">\n\n                                                            <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                            <span *ngIf=\"files.uploaded==1\" class=\"material-icons fileuploadcompleteicon\">\n                                                                cloud_done\n                                                            </span>\n\n                                                            <div class=\"divimagecardcls\" *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                                <mat-card class=\"example-card imagecardcls\" *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                                    <img mat-card-image [src]=\"files.imageUrl\">\n                                                                </mat-card>\n\n                                                                <mat-card class=\"example-card imagecardcls\" *ngIf=\"files.imageUrl == null\">\n\n                                                                    <span class=\"material-icons cropcls\" *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\" (click)=\"opensingleimagecropformultiple(files)\">\n                                                                        crop\n                                                                    </span>\n\n\n                                                                    <img mat-card-image src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                                </mat-card>\n\n                                                                <div class=\"cropimagesdiv\" *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                                    <h2> Croped Images :</h2>\n\n                                                                    <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                                        <br />\n                                                                        <span>Croped Image (Asepect Ratio) :\n                                                                            {{files.imagecroppedratiolabel[ci]}}\n                                                                        </span><br>\n\n                                                                        <image-cropper [imageBase64]=\"files.imageUrl\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\" [resizeToWidth]=\"128\" (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                                            (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                                        </image-cropper>\n\n                                                                        <!-- <mat-card class=\"example-card imagecardcls\"\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\n                                                                <span>Croped Image Output : </span><br>\n                                                                <img class=\"croppedImagecls\"\n                                                                    [src]=\"files.croppedImage[ci]\" />\n                                                            </mat-card> -->\n\n                                                                    </ng-container>\n                                                                </div>\n\n\n                                                            </div>\n\n                                                            <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                                picture_as_pdf\n                                                            </span>\n\n                                                            <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                                movie_filter\n                                                            </span>\n\n                                                            <span class=\"material-icons\" *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                                description\n                                                            </span>\n\n                                                            <div class=\"filenamecls\">\n                                                                <span class=\"fileuploadednameclass\">\n                                                                    {{files.name}}</span>\n                                                                <br />\n                                                                <span class=\"fileuploadedtypeclass\">\n                                                                    {{files.type}}</span>\n                                                            </div>\n\n\n                                                            <br>\n                                                            <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                            <!-- multipleImgFormData -->\n                                                            <div class=\"filefieldsmaincls\">\n                                                                <ng-container class=\"descdiv\" *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                                    <!-- fields {{fields | json}}ss -->\n\n                                                                    <div class=\"filefieldscls\" *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                                        <br>\n\n                                                                        <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                                <!-- <span>if imgfields ==</span> -->\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <input matInput type=\"text\" (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                                </mat-form-field>\n                                                                            </div>\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                                <!-- <span>if imgfields ++ </span> -->\n\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <input matInput type=\"text\" (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        value={{filearray[fields.name][fi].imgfields[ind].value}} matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                                </mat-form-field>\n                                                                            </div>\n\n                                                                        </div>\n\n                                                                        <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                                        <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <textarea matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" [rows]='3' [cols]='30'></textarea>\n                                                                                </mat-form-field>\n                                                                            </div>\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <textarea matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" value={{filearray[fields.name][fi].imgfields[ind].value}} [rows]='3' [cols]='30'></textarea>\n                                                                                </mat-form-field>\n                                                                            </div>\n\n\n                                                                        </div>\n\n                                                                        <div *ngIf=\"val.type == 'number'\">\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <input type=\"number\" matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                                </mat-form-field>\n                                                                            </div>\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                                <mat-form-field class=\"example-full-width\">\n                                                                                    <input type=\"number\" matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                        matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                                </mat-form-field>\n                                                                            </div>\n\n                                                                        </div>\n\n\n\n                                                                        <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                                <mat-checkbox name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\" matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" matInput (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                                </mat-checkbox> &nbsp; {{val.label}}\n                                                                            </div>\n\n                                                                            <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                                <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                                <mat-checkbox name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\" matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" matInput (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                                    [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                                </mat-checkbox> &nbsp; {{val.label}}\n                                                                            </div>\n                                                                        </div>\n                                                                    </div>\n\n                                                                    <!-- </div> -->\n                                                                </ng-container>\n                                                            </div>\n\n\n\n                                                            <div class=\"actionbtndiv\">\n\n                                                                <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \" style=\"cursor: pointer;\" mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                                    Upload\n                                                                </mat-chip>\n\n                                                                <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\" *ngIf=\"files.loaded != null && files.loaded==0\" mat-raised-button (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                                    Delete\n                                                                </mat-chip>\n\n                                                                <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\" style=\"cursor: pointer;\" mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                                    Delete </mat-chip>\n                                                            </div>\n\n                                                            <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                                </mat-progress-bar>\n                                                            </section>\n                                                        </div>\n                                                    </div>\n                                                    <br />\n                                                </ng-container>\n                                                <div class=\"actionbtndiv2\">\n                                                    <mat-chip class=\"uploadallfile\" *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\" mat-raised-button (click)=\"uploadall(fields)\">Upload All\n                                                    </mat-chip>\n                                                    <mat-chip class=\"deleteallfile\" mat-raised-button (click)=\"deletefilemultipleall(fields)\">\n                                                        Delete All\n                                                    </mat-chip>\n                                                </div>\n\n                                            </ng-container>\n\n\n\n                                        </div>\n                                    </div>\n\n                                    <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                            <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                        </ng-container>\n                                    </mat-error>\n                                </div>\n\n\n                                <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                    </mat-progress-bar>\n                                </section>\n                            </div>\n                        </ng-container>\n\n\n\n                    </ng-container>\n                </div>\n\n            </ng-container>\n\n            <!-- fields with no group  -->\n\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n                <ng-container *ngIf=\"fields.group== null \">\n\n\n                    <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                        <mat-card class=\"form_header_{{fields.name}}\" *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \" [innerHTML]=\"fields.heading\">\n                        </mat-card>\n                        <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\" class=\"form-element form_field_{{fields.name}}\">\n                            <!-- for select-->\n                            <!-- <div>ff</div> -->\n                            <mat-label> Select {{fields.label}} </mat-label>\n                            <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\" (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [multiple]=\"fields.multiple?true:false\">\n                                <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}\n                                </mat-option>\n                            </mat-select>\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n\n                        </mat-form-field>\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\" class=\"form-element form_field_{{fields.name}}\">\n                            <div>\n                                <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                                </mat-label>\n                            </div>\n\n                            <div>\n                                <ng-container *ngFor=\"let imgvals of fields.val\">\n                                    <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                        <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                    </span>\n                                </ng-container>\n                            </div>\n\n\n\n                            <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                            <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </div>\n\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\" class=\"form-element form_field_{{fields.name}}\">\n                            <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                            <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\">\n                                {{fields.label}}\n                            </mat-checkbox>\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </div>\n                        <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \" class=\"form-element form_field_{{fields.name}}\">\n                            <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n\n                            <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                                <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                    <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\" [value]=\"vals.key\">{{vals.val}}\n                                    </mat-checkbox>\n                                    <!-- <span></span> -->\n\n                                </ng-container>\n\n                                <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                                <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n\n                            </ng-container>\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <!-- <ng-container\n                    *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                    <mat-error>\n                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                            <span\n                                *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                        </ng-container>\n                    </mat-error>\n\n                </ng-container> -->\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n\n                        </div>\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <mat-radio-group aria-labelledby=\"example-radio-group-label\" class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                                <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                    {{vals.val}}\n                                </mat-radio-button>\n                            </mat-radio-group>\n\n                            <!--<ng-container *ngFor=\"let vals of fields.val\">\n     <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n </ng-container>-->\n\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n\n                        </div>\n\n                        <div>\n                            <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\n                                <div class=\"add_form\">\n                                    <div class=\"mat-form-field-wrapper\">\n                                        <div class=\"phonenumber mat-form-field\">\n                                            <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\" required minlength=\"14\" [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\" [(ngModel)]=\"phonenumberValue\">\n                                            <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\n                                            <ng-container *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n\n                                                <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                                    <mat-error>\n                                                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                            <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                                        </ng-container>\n                                                    </mat-error>\n                                                </ng-container>\n                                            </ng-container>\n                                        </div>\n\n                                    </div>\n                                </div>\n                            </ng-container>\n\n                            <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\" class=\"form-element form_field_{{fields.name}}\">\n                                <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                                <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\" [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\">\n\n                                <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                                <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                                <ng-container *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                    <mat-error>\n                                        <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                            <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                        </ng-container>\n                                    </mat-error>\n                                </ng-container>\n\n                                <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                    <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                                </ng-container>\n\n                            </mat-form-field>\n\n\n                            <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                fields.passwordflag == true \">\n                                <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\" class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\n                                    Generate Password</button> &nbsp;\n\n                                <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\" matTooltip=\"Copy Password\">\n                                    Copy Password</button> &nbsp;\n\n                                <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\" (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Show Password\">\n                                    remove_red_eye\n                                </span>\n\n                                <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\" (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\" matTooltip=\"Hide Password\">\n                                    visibility_off\n                                </span>\n                            </div>\n\n                            <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                                <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                    <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                        <span>\n                                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                                (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                                {{item?.labeladd}}<span class=\"material-icons\">\n                                                    add\n                                                </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                                {{item?.labelremove}}<span class=\"material-icons\">\n                                                    remove\n                                                </span></button>\n                                        </span>\n                                    </div>\n                                </div>\n\n                            </div>\n\n                            <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                                <div *ngIf=\"fields?.customheadingtitle != null\">\n                                    <mat-card class=\"customheadingtitlecls\">\n                                        {{fields?.customheadingtitle}}</mat-card>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\" [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\" [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                </textarea>\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n                        </mat-form-field>\n\n                        <!-- timepicker type field in form start here -->\n                        <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='timepicker'\" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                            <input matInput [ngxTimepicker]=\"picker\" [format]=\"fields.format\" (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\" (timeChanged)=\"timepickerchange($event)\">\n                            <ngx-material-timepicker #picker></ngx-material-timepicker>\n\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n                        </mat-form-field>\n                        <!-- timepicker type field in form end here -->\n\n                        <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\" [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                            <!-- <textarea matInput \nplaceholder=\"Comment\" \n[formControlName]=\"fields.name\" \n(change)=\"inputblur(fields.name)\">\n</textarea> -->\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n\n                        </mat-form-field>\n                        <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <!-- {{fields.val.length}}\n-->\n\n\n\n                            <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                            <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\" (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\" placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                            <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                            <mat-autocomplete #auto=\"matAutocomplete\">\n                                <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                    <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\" (click)=\"setautocompletevalue(vals,fields)\">\n                                        <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                        <span>{{vals.val}}</span>\n                                        <!-- <small>Population: {{state.population}}</small> -->\n                                    </mat-option>\n                                </ng-container>\n\n\n                            </mat-autocomplete>\n                            <!-- to check selected auto val ..  -->\n                            <!-- <span> auto data\n                    <ng-container\n                        *ngIf=\"autocompletefiledvalue!=null && autocompletefiledvalue[fields.name]!=null\">\n                        {{autocompletefiledvalue[fields.name] | json}}\n                    </ng-container>\n\n                </span> -->\n\n\n                            <mat-progress-bar *ngIf=\"fields.showautoprogressbar!=null && fields.showautoprogressbar==true\" class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                            </mat-progress-bar>\n\n\n\n\n                            <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\" aria-label=\"{{fields.name}} data\">\n                                <ng-container *ngFor=\"let vals of fields.val \">\n                                    <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipsingle(fields,vals)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n\n                                </ng-container>\n\n                            </mat-chip-list>\n\n\n                            <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\" aria-label=\"{{fields.name}} data\">\n                                <ng-container *ngFor=\"let vals of fields.val \">\n                                    <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                        <ng-container *ngIf=\"vals.key==avals\">\n                                            <mat-chip [removable]=true>{{vals.val}}\n                                                <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib,vals)\">\n                                                    cancel\n                                                </mat-icon>\n                                            </mat-chip>\n                                        </ng-container>\n                                    </ng-container>\n\n                                </ng-container>\n\n                            </mat-chip-list>\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n\n                        </mat-form-field>\n\n                        <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n        (change)=\"onChange($event)\"\n        (editorChange)=\"onEditorChange($event)\" \n        (ready)=\"onReady($event)\"\n        (focus)=\"onFocus($event)\"\n        (blur)=\"onBlur($event)\"\n        (contentDom)=\"onContentDom($event)\"\n        (fileUploadRequest)=\"onFileUploadRequest($event)\"\n        (fileUploadResponse)=\"onFileUploadResponse($event)\"\n        (paste)=\"onPaste($event)\"\n        (drop)=\"onDrop($event)\"\n        debounce=\"500\"\n\n         [ngModelOptions]=\"{standalone: true}\n\n\n           <ckeditor\n        [(ngModel)]=\"ckeditorContent\"\n        [ngModelOptions]=\"{standalone: true}\"\n        \n        \n        >\n      </ckeditor>\n-->\n\n\n\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\" class=\"form-element form_field_{{fields.name}}\">\n                            <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                            <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                                <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                <!-- <p>test</p> -->\n                                <ckeditor [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] ,allowedContent:true}\"\n                                    (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\" [formControlName]=\"fields.name\"></ckeditor>\n                                <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </div>\n\n                            <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                                <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                                <!-- <p>test1</p> -->\n\n                                <ckeditor [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ],allowedContent:true}\"\n                                    (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                                <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </div>\n\n\n\n                        </div>\n\n\n\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\" class=\"form-element form_field_{{fields.name}}\">\n\n                            <span class=\"externalDataFunctioncls\">\n                                <button type=\"button\" mat-raised-button color=\"primary\"\n                                    (click)=\"externalDataFunction(fields,ival)\"\n                                    matTooltip=\"{{fields.label}}\">{{fields.label}}</button>\n                            </span>\n                            <br>\n\n                            <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                                <!-- {{fields.value | json}} -->\n\n                                <div *ngFor=\"let item of fields.value;let i = index\">\n                                    <div class=\"externalcardcls\">\n                                        <mat-card>\n\n                                            <span class=\"keycls\">\n                                                {{item.label}} :\n                                            </span>\n\n                                            <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                                {{item.val}}\n                                            </span>\n\n                                            <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                                <img [src]=\"item.val\">\n                                            </span>\n\n                                            <span class=\"external_buttoncls\">\n\n\n                                                <span style=\"cursor: pointer;\"\n                                                    (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                    class=\"material-icons\">\n                                                    create\n                                                </span>\n\n                                            <span style=\"cursor: pointer;\" (click)=\"externalDataEditFunction('remove',fields,ival,i)\" class=\"material-icons\">\n                                                    clear\n                                                </span>\n\n                                            </span>\n\n                                        </mat-card>\n                                    </div>\n                                </div>\n\n                            </ng-container>\n                            <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                    <ng-container *ngFor=\"let item of externalDataVal\">\n                        <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                            {{item | json}}\n\n                            {{fields.value | json}}\n\n                        </div>\n                    </ng-container>\n\n                </ng-container> -->\n\n                        </div>\n\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\" class=\"form-element form_field_{{fields.name}}\">\n                            <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\">\n                            <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n                        <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\" class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                                <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\" id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">\n                                    Browse or Drop Files Here\n                                    <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                    <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                        <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\" style=\"display:none\" (change)=\"handleDrop($event)\">\n                                    </ng-container>\n\n                                    <ng-container *ngIf=\"fields.multiple == null \">\n                                        <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\" multiple (change)=\"handleDrop($event)\">\n                                    </ng-container>\n                                </div>\n\n                                <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                <!-- <span>{{fields | json}}</span> -->\n\n                                <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                    <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                    <!-- <div></div> -->\n                                    <ng-container *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                        <div class=\"filecontainerdiv\">\n                                            <span *ngIf=\"filearray[fields.name].uploaded==1\" class=\"material-icons fileuploadcompleteicon \">\n                                                cloud_done\n                                            </span>\n\n\n                                            <div class=\"imagedivcls\" *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                                <div class=\"divimagecardcls\">\n                                                    <mat-card class=\"example-card imagecardcls\" *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                        <img mat-card-image [src]=\"fields.imageUrl\">\n                                                    </mat-card>\n                                                </div>\n\n\n                                                <div class=\"divimagecardcls\" *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                    <mat-card class=\"example-card imagecardcls\">\n\n                                                        <span class=\"material-icons cropcls\" *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\" (click)=\"opensingleimagecrop(fields)\">\n                                                            crop\n                                                        </span>\n\n                                                        <img mat-card-image src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                    </mat-card>\n                                                </div>\n\n\n                                                <div class=\"cropimagesdiv\" *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                    <h2> Croped Images :</h2>\n\n                                                    <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\" class=\"image-cropper-cls\">\n                                                        <br />\n                                                        <span>Croped Image (Asepect Ratio) :\n                                                            {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                        <image-cropper [imageBase64]=\"fields.imageUrl\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\" (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\n                                                            [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                        </image-cropper>\n\n                                                    </ng-container>\n                                                </div>\n                                            </div>\n                                            <div class=\"filesdivcls\">\n                                                <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                    picture_as_pdf\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                    movie_filter\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                    description\n                                                </span>\n\n                                                <span class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                                <br />\n                                                <span class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                            </div>\n\n\n                                            <div class=\"filefieldsmaincls\">\n                                                <ng-container class=\"descdiv\" *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                    <div class=\"filefieldscls\">\n                                                        <div class=\"filefields\" *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                            <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'text'\">\n                                                                <input matInput type=\"text\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" name=\"{{item.name}}\" matInput placeholder=\"{{item.label}}\">\n                                                            </mat-form-field>\n\n                                                            <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'textarea'\">\n                                                                <textarea matInput name=\"{{item.name}}\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" placeholder=\"{{item.label}}\" [rows]='3' [cols]='30'></textarea>\n                                                            </mat-form-field>\n\n                                                            <mat-form-field class=\"example-full-width\" *ngIf=\"item.type == 'number'\">\n                                                                <input type=\"number\" matInput name=\"{{item.name}}\" [ngModelOptions]=\"{standalone: true}\" [(ngModel)]=\"fields.imagefields[i].value\" matInput placeholder=\"{{item.label}}\">\n                                                            </mat-form-field>\n\n                                                            <div *ngIf=\"item.type == 'checkbox'\">\n                                                                <mat-checkbox name=\"{{item.name}}\" [(ngModel)]=\"fields.imagefields[i].value\" [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                                </mat-checkbox>\n                                                                &nbsp; {{item.label}}\n                                                            </div>\n                                                        </div>\n\n                                                    </div>\n                                                </ng-container>\n                                            </div>\n\n\n\n                                            <div class=\"actionbtndiv\">\n                                                <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\" *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                                <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\" *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">\n                                                    Delete\n                                                </mat-chip>\n\n                                                <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\" *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\" mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                            </div>\n\n                                            <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                            <section *ngIf=\"filearray[fields.name].uploaded==2 \" class=\"example-section uploadprogress\">\n                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                </mat-progress-bar>\n                                            </section>\n                                        </div>\n                                    </ng-container>\n\n\n                                    <!-- for multiple file uploads  -->\n                                    <ng-container *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                        <ng-container *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                            <div class=\"filecontainerdiv\">\n\n                                                <!-- {{files | json}} ++ -->\n\n                                                <div *ngIf=\"files.loadfile != null && files.loadfile==1\" class=\"filesdivcls\">\n\n                                                    <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                    <span *ngIf=\"files.uploaded==1\" class=\"material-icons fileuploadcompleteicon\">\n                                                        cloud_done\n                                                    </span>\n\n                                                    <div class=\"divimagecardcls\" *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                        <mat-card class=\"example-card imagecardcls\" *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                            <img mat-card-image [src]=\"files.imageUrl\">\n                                                        </mat-card>\n\n                                                        <mat-card class=\"example-card imagecardcls\" *ngIf=\"files.imageUrl == null\">\n\n                                                            <span class=\"material-icons cropcls\" *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\" (click)=\"opensingleimagecropformultiple(files)\">\n                                                                crop\n                                                            </span>\n\n\n                                                            <img mat-card-image src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                        </mat-card>\n\n                                                        <div class=\"cropimagesdiv\" *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                            <h2> Croped Images :</h2>\n\n                                                            <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                                <br />\n                                                                <span>Croped Image (Asepect Ratio) :\n                                                                    {{files.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                                <image-cropper [imageBase64]=\"files.imageUrl\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\" [resizeToWidth]=\"128\" (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\" (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                                    (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                                </image-cropper>\n\n                                                                <!-- <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.croppedImage[ci] != null\">\n                                                        <span>Croped Image Output : </span><br>\n                                                        <img class=\"croppedImagecls\"\n                                                            [src]=\"files.croppedImage[ci]\" />\n                                                    </mat-card> -->\n\n                                                            </ng-container>\n                                                        </div>\n\n\n                                                    </div>\n\n                                                    <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                        picture_as_pdf\n                                                    </span>\n\n                                                    <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                        movie_filter\n                                                    </span>\n\n                                                    <span class=\"material-icons\" *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                        description\n                                                    </span>\n\n                                                    <div class=\"filenamecls\">\n                                                        <span class=\"fileuploadednameclass\"> {{files.name}}</span>\n                                                        <br />\n                                                        <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\n                                                    </div>\n\n\n                                                    <br>\n                                                    <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                    <!-- multipleImgFormData -->\n                                                    <div class=\"filefieldsmaincls\">\n                                                        <ng-container class=\"descdiv\" *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                            <!-- fields {{fields | json}}ss -->\n\n                                                            <div class=\"filefieldscls\" *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                                <br>\n\n                                                                <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                        <!-- <span>if imgfields ==</span> -->\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput type=\"text\" (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                        </mat-form-field>\n                                                                    </div>\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                        <!-- <span>if imgfields ++ </span> -->\n\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input matInput type=\"text\" (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                value={{filearray[fields.name][fi].imgfields[ind].value}} matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                        </mat-form-field>\n                                                                    </div>\n\n                                                                </div>\n\n                                                                <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                                <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <textarea matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" [rows]='3' [cols]='30'></textarea>\n                                                                        </mat-form-field>\n                                                                    </div>\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <textarea matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" value={{filearray[fields.name][fi].imgfields[ind].value}} [rows]='3' [cols]='30'></textarea>\n                                                                        </mat-form-field>\n                                                                    </div>\n\n\n                                                                </div>\n\n                                                                <div *ngIf=\"val.type == 'number'\">\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input type=\"number\" matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                        </mat-form-field>\n                                                                    </div>\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                        <mat-form-field class=\"example-full-width\">\n                                                                            <input type=\"number\" matInput (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\" name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                                matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                        </mat-form-field>\n                                                                    </div>\n\n                                                                </div>\n\n\n\n                                                                <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                        <mat-checkbox name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\" matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" matInput (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                        </mat-checkbox> &nbsp; {{val.label}}\n                                                                    </div>\n\n                                                                    <div *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                        <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                        <mat-checkbox name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\" matInput placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\" matInput (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                            [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                        </mat-checkbox> &nbsp; {{val.label}}\n                                                                    </div>\n                                                                </div>\n                                                            </div>\n\n                                                            <!-- </div> -->\n                                                        </ng-container>\n                                                    </div>\n\n\n\n                                                    <div class=\"actionbtndiv\">\n\n                                                        <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \" style=\"cursor: pointer;\" mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                            Upload\n                                                        </mat-chip>\n\n                                                        <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\" *ngIf=\"files.loaded != null && files.loaded==0\" mat-raised-button (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                            Delete\n                                                        </mat-chip>\n\n                                                        <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\" style=\"cursor: pointer;\" mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                            Delete </mat-chip>\n                                                    </div>\n\n                                                    <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                        </mat-progress-bar>\n                                                    </section>\n                                                </div>\n                                            </div>\n                                            <br />\n                                        </ng-container>\n                                        <div class=\"actionbtndiv2\">\n                                            <mat-chip class=\"uploadallfile\" *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\" mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                            <mat-chip class=\"deleteallfile\" mat-raised-button (click)=\"deletefilemultipleall(fields)\">\n                                                Delete All\n                                            </mat-chip>\n                                        </div>\n\n                                    </ng-container>\n\n\n\n                                </div>\n                            </div>\n\n                            <mat-error *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n\n                        <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                            </mat-progress-bar>\n                        </section>\n                    </div>\n                </ng-container>\n\n\n\n            </ng-container>\n\n\n\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element submitbtnsection\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\" [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\" (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\" (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n\n            <div class=\"custombuttonscls\" *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\" (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                        styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}.cropimagesdiv,.croppedImagecls,.imagecardcls{width:300px}.descdiv{margin:5px 0}.cropcls{cursor:pointer;position:absolute;right:10px;top:19px;background:#fffffff2;border-radius:3px;padding:2px}.hidecls{display:none}"]
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
            formDirective: [{ type: i0.ViewChild, args: [forms.FormGroupDirective,] }],
            formdata: [{ type: i0.Input }],
            formfieldrefreshdata: [{ type: i0.Input }],
            formfieldrefresh: [{ type: i0.Input }],
            custombuttons: [{ type: i0.Input }],
            externaldatavalue: [{ type: i0.Input }],
            onFormFieldChange: [{ type: i0.Output }],
            timeChanged: [{ type: i0.Output }]
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
            { type: i0.Directive, args: [{
                        selector: '[formControlName][appPhoneMask]'
                    },] }
        ];
        /** @nocollapse */
        PhoneFormatingDirective.ctorParameters = function () {
            return [
                { type: forms.NgControl }
            ];
        };
        PhoneFormatingDirective.propDecorators = {
            onModelChange: [{ type: i0.HostListener, args: ['ngModelChange', ['$event'],] }],
            keydownBackspace: [{ type: i0.HostListener, args: ['keydown.backspace', ['$event'],] }]
        };
        return PhoneFormatingDirective;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var LanguageTransletPipe = /** @class */ (function () {
        function LanguageTransletPipe(observableService, apiService) {
            var _this = this;
            this.observableService = observableService;
            this.apiService = apiService;
            this.languageDataSet = [];
            this.convertToLanguageCode = '';
            this.apiUrl = '';
            this.dataSet = [];
            // let serviceData:any;
            /** @type {?} */
            var serviceData = this.observableService.getmultilingualData().subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                _this.languageDataSet = res;
            }));
            // setTimeout(() => {
            /** @type {?} */
            var getconvertToCode = this.observableService.getconvertToLanguage().subscribe(( /**
             * @param {?} res
             * @return {?}
             */function (res) {
                _this.convertToLanguageCode = res;
                // console.log("P{P{P",res);
            }));
            // }, 100);
            // console.log("this.languageDataSet++++",this.languageDataSet);
            /** @type {?} */
            var apiurl = this.observableService.getapiUrl().subscribe(( /**
             * @param {?} response
             * @return {?}
             */function (response) {
                _this.apiUrl = response;
                //  console.log("this.apiUrl=",this.apiUrl);
            }));
        }
        /**
         * @param {?} value
         * @return {?}
         */
        LanguageTransletPipe.prototype.transform = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                var e_1, _a;
                try {
                    // alert("op")
                    // console.log(" this.convertToLanguageCode", this.convertToLanguageCode);
                    for (var _b = __values(this.languageDataSet), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var val = _c.value;
                        if (val.en == value) {
                            return val[this.convertToLanguageCode];
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return))
                            _a.call(_b);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
                // this.dataSet.push(value);
                // if (typeof value!='undefined' && value!=null && value!='') {
                //   let data:any={
                //     "data":{
                //       "en":value
                //     }
                //   }
                //   this.apiService.postDataApi( this.apiUrl,data).subscribe((response:any)=>{
                //   })
                // }
                // console.log(" this.dataSet", this.dataSet)
                return value;
            };
        LanguageTransletPipe.decorators = [
            { type: i0.Pipe, args: [{
                        name: 'languageTranslet'
                    },] }
        ];
        /** @nocollapse */
        LanguageTransletPipe.ctorParameters = function () {
            return [
                { type: ObservableserviceService },
                { type: ApiService }
            ];
        };
        return LanguageTransletPipe;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // import { MatMomentDateModule, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
    var ListingModule = /** @class */ (function () {
        function ListingModule() {
        }
        ListingModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ListingComponent, Confirmdialog, BottomSheet, YoutubeplayerComponent, VideoPlayer, ImageView, SnackbarComponent, ShowformComponent, CustomdataPipe, ModalForButtomSearch, PhoneFormatingDirective, LanguageTransletPipe, DeleteNotesModal],
                        imports: [
                            common.CommonModule,
                            // BrowserModule, BrowserAnimationsModule,
                            DemoMaterialModule,
                            forms.FormsModule, forms.ReactiveFormsModule,
                            router.RouterModule,
                            ngxMoment.MomentModule, ng2Ckeditor.CKEditorModule,
                            ngxImageCropper.ImageCropperModule,
                            ngxMaterialTimepicker.NgxMaterialTimepickerModule
                        ],
                        schemas: [i0.CUSTOM_ELEMENTS_SCHEMA],
                        exports: [ListingComponent, ShowformComponent
                        ],
                        providers: [ApiService, ObservableserviceService],
                        entryComponents: [Confirmdialog, BottomSheet, VideoPlayer, ImageView, SnackbarComponent, ModalForButtomSearch, DeleteNotesModal],
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
    exports.DeleteNotesModal = DeleteNotesModal;
    exports.BottomSheet = BottomSheet;
    exports.ModalForButtomSearch = ModalForButtomSearch;
    exports.VideoPlayer = VideoPlayer;
    exports.ImageView = ImageView;
    exports.SnackbarComponent = SnackbarComponent;
    exports.ShowformComponent = ShowformComponent;
    exports.ListingModule = ListingModule;
    exports.ɵa = ApiService;
    exports.ɵd = CustomdataPipe;
    exports.ɵe = PhoneFormatingDirective;
    exports.ɵg = DemoMaterialModule;
    exports.ɵf = LanguageTransletPipe;
    exports.ɵb = ObservableserviceService;
    exports.ɵc = YoutubeplayerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=listing-angular7.umd.js.map