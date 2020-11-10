/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// import {ElementRef, EventEmitter, Injectable, Input, ViewChild} from '@angular/core';
// import { switchMap, map, takeWhile } from 'rxjs/operators';
// import { HttpClient, HttpHeaders} from '@angular/common/http';
// import { UploadOutput, UploadInput, UploadFile, humanizeBytes, UploaderOptions, UploadStatus } from 'ngx-uploader';
// @Injectable()
// export class ApiService {
//   public domain_for_fileupload_val: any = 'http://developmentapi.audiodeadline.com:7031/uploads' + 'uploads' ;
//   files: UploadFile[];
//   uploadInput: EventEmitter<UploadInput>;
//   humanizeBytes: Function;
//   dragOver: boolean;
//   options: UploaderOptions;
//   @ViewChild('fileInput1') uploaderInput: ElementRef;
//   /*@Input()
//   set domain_for_fileupload(domain_for_fileupload: any) {
//     this.domain_for_fileupload_val = domain_for_fileupload;
//     console.log('this.skipval');
//     console.log(this.domain_for_fileupload_val);
//   }*/
//   public lengthis;
//   public percentageis;
//   public inprogress;
//   public progress:any=[];
//   public uploadtype;
//   public uploaderror:any='';
//   // public uploadOutputval:any;
//   fileservername:any=[];
//   /*@Input()
//   set uploadOutput(uploadOutput: any){
//     this.uploadOutputval = uploadOutput;
//     console.log('this.uploadOutput');
//     console.log(this.uploadOutput);
//   }*/
//   constructor(private _http: HttpClient,
//               private _authHttp: HttpClient,
//               ) {
//     this.options = { concurrency: 10, maxUploads: 10 };
//     this.files = []; // local uploading files array
//     this.uploadInput = new EventEmitter<UploadInput>(); // input events, we use this to emit data to ngx-uploader
//     this.humanizeBytes = humanizeBytes;
//     //console.log('this.domain');
//     //console.log(this.domain);
//   }
//   onUploadOutput(uploadOutput: UploadOutput, arrayvalue: any, uploadtypec: any, uploadpath: any): void {
//     // this.uploaderInput.nativeElement.value = '';
//     if (uploadOutput.type === 'allAddedToQueue') {
//       const event: UploadInput = {
//         type: 'uploadAll',
//         url: 'http://developmentapi.audiodeadline.com:7031/uploads',
//         method: 'POST',
//         data: { path: uploadpath }
//       };
//       this.uploadInput.emit(event);
//     } else if (uploadOutput.type === 'addedToQueue' && typeof uploadOutput.file !== 'undefined') {
//       if (uploadOutput.file.response != '') {
//         this.files = [];
//         this.files.push(uploadOutput.file);
//         console.log('this.files*********');
//         console.log(this.files);
//         this.lengthis = this.files.length;
//         this.percentageis = this.files[0].progress.data.percentage;
//       }
//     } else if (uploadOutput.type === 'uploading' && typeof uploadOutput.file !== 'undefined') {
//       const index = this.files.findIndex(file => typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id);
//       this.files[index] = uploadOutput.file;
//       this.lengthis = this.files.length;
//       if(this.files[0]!=null && this.files[0].progress!=null)
//         this.percentageis = this.files[0].progress.data.percentage;
//       console.log('this.files==================');
//       console.log(this.files);
//     } else if (uploadOutput.type === 'removed') {
//       this.files = this.files.filter((file: UploadFile) => file !== uploadOutput.file);
//     } else if (uploadOutput.type === 'dragOver') {
//       this.dragOver = true;
//     } else if (uploadOutput.type === 'dragOut') {
//       this.dragOver = false;
//     } else if (uploadOutput.type === 'drop') {
//       this.dragOver = false;
//     }
//     console.log('files');
//     console.log(this.files);
//     if(this.files[0]!=null && this.files[0].progress!=null) {
//       if(this.progress[arrayvalue]==null)this.progress[arrayvalue]=0;
//       this.inprogress=true;
//       console.log('file upload progressing');
//       console.log(this.files[0].progress.data.percentage);
//       this.progress[arrayvalue] = (this.files[0].progress.data.percentage);
//       if(this.progress[arrayvalue]==100) {
//         this.progress[arrayvalue]=null;
//         this.inprogress=null;
//       }
//       console.log('this.uploadtype in api service');
//       console.log(uploadtypec);
//     }
//     if (uploadtypec=='single'){
//       // this.fileservername = [];
//       if(this.fileservername[arrayvalue] == null) this.fileservername[arrayvalue]=[];
//       this.fileservername[arrayvalue]=[];
//       if(this.files[0].response!=null) this.fileservername[arrayvalue].push(this.files[0].response);
//     }
//     if (uploadtypec == 'multiple') {
//       console.log('this.files[0].response');
//       // console.log(this.files[0].response);
//       console.log(this.files.length);
//       console.log(this.files);
//       if (this.fileservername[arrayvalue] == null) this.fileservername[arrayvalue] = [];
//       // if(this.files[0].response!=null){
//       if(this.files.length==1) {
//         if(this.files[0] && this.files[0].response!=null && this.files[0].response.error_code==null ) {
//           this.fileservername[arrayvalue].push(this.files[0].response);
//           this.files = [];
//           this.uploaderror='';
//         }
//         if(this.files[0] !=null && this.files[0].response!=null && this.files[0].response.error_code!=null){
//           this.uploaderror='error occured on uploading !!!';
//         }
//       }
//       if(this.files.length>1)
//       {
//         console.log('sdfdsf==== in multiple length ');
//         for(let b in this.files){
//           if(this.files[b].response!=null && this.files[b].response.error_code==null) {
//             this.fileservername[arrayvalue].push(this.files[b].response);
//           }
//         }
//         this.files=[];
//       }
//       //}
//     }
//     console.log('this.fileservername');
//     console.log(this.fileservername);
//     console.log(this.uploaderror);
//     //this.uploaderservice.filenamevalc1=this.fileservername;
//     //UploaderComponent.filenamevalc1=87;
//     //console.log(classval);
//   }
//   isTokenExpired() {
//     // const helper = new JwtHelperService();
//     // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
//     // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
//     // console.log('refresh_token',localStorage.getItem('refresh_token'))
//     // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
//     // console.log('id_token isExpired:',isIdTokenExpired)
//     // console.log('refresh_token isExpired:',isRefreshTokenExpired)
//   }
//   getclientip() {
//     console.log('endpoint');
//     // this.isTokenExpired()
//     var result = this._http.get("http://ipinfo.io/?format=json&token=9797c42b93078a").pipe(map(res => res));
//     return result;
//   }
//   getEndpoint(endpoint: any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': ''
//       })
//     };
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     console.log('');
//     // this.isTokenExpired()
//     var result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   getData(endpoint: any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': ''
//       })
//     };
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     console.log('');
//     // this.isTokenExpired()
//     var result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   // getData end
//   postData(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json',
//         'access-token': data.token
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     console.log('httpOptions');
//     console.log(httpOptions);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   postDatawithoutToken(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   postlogin(endpoint:any, data) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type':  'application/json'
//       })
//     };
//     console.log('');
//     console.log('endpoint');
//     console.log(endpoint);
//     var result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   } // postData end
//   postSearch( link,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("link in postSearch");
//     console.log(link);
//     console.log(source);
//     var result = this._http.post(link, source, httpOptions).pipe(map(res => res));
//     return result;
//   }
// postSearch1( link,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': source.token
//       })
//     };
//     console.log('------ ');
//     console.log("link");
//     console.log(link);
//     var result = this._http.post(link, source).pipe(map(res => res));
//     return result;
//   }
//   putData(endpoint:any, data, id:any) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'Authorization': ''
//       })
//     };
//     console.log('');
//     console.log("endpoint");
//     console.log(endpoint);
//     var result = this._http.put(this.getEndpointUrl(endpoint)+'/'+id, JSON.stringify(data), httpOptions).pipe(map(res => res));
//     return result;
//   }
//   deteOneData(endpoint:any, data,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,id:data._id}
//     var result = this._http.post(endpoint,dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//     togglestatus(endpoint:any, data,token,source) {
//       console.log(endpoint);
//       console.log(data);
//       console.log(token);
//       console.log(source);
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,data:data}
//     var result = this._http.post(endpoint,dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   deteManyData(endpoint:any, data,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,ids:data}
//     var result = this._http.post(endpoint+'many',dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//     togglestatusmany(endpoint:any, data,val,token,source) {
//     const httpOptions = {
//       headers: new HttpHeaders({
//         'Content-Type': 'application/json',
//         'access-token': token
//       })
//     };
//     console.log('------ ');
//     console.log("endpoint");
//     console.log(endpoint);
//     console.log(data);
//     let dataval:any;
//     dataval={source:source,data:{ids:data,val:val}};
//     var result = this._http.post(endpoint+'many',dataval, httpOptions).pipe(map(res => res));
//     return result;
//   }
//   private getEndpointUrl(endpoint: string) {
//       return '' + endpoint;
//   }
// }
/********************* Added By Himadri using Lamda start *************************/
import { ElementRef, EventEmitter, Injectable, ViewChild } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { humanizeBytes } from 'ngx-uploader';
import { CookieService } from 'ngx-cookie-service';
import { throwError } from 'rxjs';
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
export { ApiService };
if (false) {
    /** @type {?} */
    ApiService.prototype.domain_for_fileupload_val;
    /** @type {?} */
    ApiService.prototype.files;
    /** @type {?} */
    ApiService.prototype.uploadInput;
    /** @type {?} */
    ApiService.prototype.humanizeBytes;
    /** @type {?} */
    ApiService.prototype.dragOver;
    /** @type {?} */
    ApiService.prototype.options;
    /** @type {?} */
    ApiService.prototype.uploaderInput;
    /** @type {?} */
    ApiService.prototype.lengthis;
    /** @type {?} */
    ApiService.prototype.percentageis;
    /** @type {?} */
    ApiService.prototype.inprogress;
    /** @type {?} */
    ApiService.prototype.progress;
    /** @type {?} */
    ApiService.prototype.uploadtype;
    /** @type {?} */
    ApiService.prototype.uploaderror;
    /** @type {?} */
    ApiService.prototype.secretkey;
    /** @type {?} */
    ApiService.prototype.fileservername;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._http;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype._authHttp;
    /**
     * @type {?}
     * @private
     */
    ApiService.prototype.cookieService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsR0FBRyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUF5QyxhQUFhLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBeUJFOzs7OztPQUtHO0lBQ0gsb0JBQW9CLEtBQWlCLEVBQzNCLFNBQXFCLEVBQ3JCLGFBQTRCO1FBRmxCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CL0IsOEJBQXlCLEdBQVEsc0RBQXNELEdBQUcsU0FBUyxDQUFDO1FBZ0JwRyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBUSxJQUFJLENBQUM7O1FBRTdCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBYXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUMsQ0FBQyx5REFBeUQ7UUFDN0csSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsOEJBQThCO1FBQzlCLDRCQUE0QjtJQUM5QixDQUFDOzs7Ozs7OztJQUVELG1DQUFjOzs7Ozs7O0lBQWQsVUFBZSxZQUEwQixFQUFFLFVBQWUsRUFBRSxXQUFnQixFQUFFLFVBQWU7UUFDM0YsK0NBQStDO1FBQy9DLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxpQkFBaUIsRUFBRTs7Z0JBQ3JDLE9BQUssR0FBZ0I7Z0JBQ3pCLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsc0RBQXNEO2dCQUMzRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssY0FBYyxJQUFJLE9BQU8sWUFBWSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDM0YsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUM1RDtTQUNGO2FBQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLFlBQVksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFOztnQkFDbEYsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxZQUFZLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUE1RSxDQUE0RSxFQUFDO1lBQ3hILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDNUQ7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztTQUNsRjthQUFNLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFO1lBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO1lBQzNCLDRCQUE0QjtZQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQUU7WUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFFO1NBQ3RHO1FBQ0QsSUFBSSxXQUFXLElBQUksVUFBVSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0Qyx1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7YUFBRTtZQUN0RixvQ0FBb0M7WUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDaEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO29CQUN4RyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxDQUFDO2lCQUNyRDthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO3dCQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5RDtpQkFDRjtnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUk7U0FDTDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QiwwREFBMEQ7UUFDMUQsc0NBQXNDO1FBQ3RDLHlCQUF5QjtJQUUzQixDQUFDOzs7O0lBQ0QsbUNBQWM7OztJQUFkO1FBRUUseUNBQXlDO1FBQ3pDLDZFQUE2RTtRQUM3RSxrRkFBa0Y7UUFDbEYscUVBQXFFO1FBQ3JFLDhGQUE4RjtRQUM5RixzREFBc0Q7UUFDdEQsZ0VBQWdFO0lBSWxFLENBQUM7Ozs7SUFFRCxnQ0FBVzs7O0lBQVg7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7WUFHbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUV6RyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUlELGdDQUFXOzs7O0lBQVgsVUFBWSxRQUFhOztZQUVqQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsRUFBRTthQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7OztZQUdWLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUUzRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELDRCQUFPOzs7O0lBQVAsVUFBUSxRQUFhOztZQUViLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxFQUFFO2FBQ2xCLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O1lBR1YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFFcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGNBQWM7Ozs7Ozs7SUFFZCw2QkFBUTs7Ozs7OztJQUFSLFVBQVMsUUFBYSxFQUFFLElBQUk7O1lBQ3BCLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSzthQUMxQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFDRCx5Q0FBb0I7Ozs7O0lBQXBCLFVBQXFCLFFBQWEsRUFBRSxJQUFJOztZQUNoQyxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ25ILE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxRQUFhLEVBQUUsSUFBSTs7WUFDckIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBRztZQUNuSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQix3QkFBd0I7WUFFeEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSSwrQkFBK0I7UUFDNUQsQ0FBQyxFQUFDLEVBQUUsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBQyxlQUFlOzs7Ozs7OztJQUtqQiwrQkFBVTs7Ozs7Ozs7SUFBVixVQUFXLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDdEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIO1FBQ0Q7Ozs4QkFHc0I7UUFDdEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBQ0QsZ0NBQVc7Ozs7O0lBQVgsVUFBWSxJQUFJLEVBQUUsTUFBTTs7WUFDaEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQzVCLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBTUQsNEJBQU87Ozs7OztJQUFQLFVBQVEsUUFBYSxFQUFFLElBQUksRUFBRSxFQUFPOztZQUM1QixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsRUFBRTthQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDaEksT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7SUFHRCxnQ0FBVzs7Ozs7OztJQUFYLFVBQVksUUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDdEMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIOzs7Ozs7O1lBTUcsT0FBWTtRQUNoQixPQUFPLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQUVELGlDQUFZOzs7Ozs7O0lBQVosVUFBYSxRQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNO1FBQzdDOzs7Z0NBR3dCOzs7Ozs7WUFFbEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIOzs7Ozs7WUFLRyxPQUFZO1FBQ2hCLE9BQU8sR0FBRyxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBRztZQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQix3QkFBd0I7WUFFeEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSSwrQkFBK0I7UUFDNUQsQ0FBQyxFQUFDLEVBQUUsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBRUQsaUNBQVk7Ozs7Ozs7SUFBWixVQUFhLFFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07O1lBQ3ZDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUM7U0FDSDs7Ozs7O1lBS0csT0FBWTtRQUNoQixPQUFPLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQWlCLFFBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNOztZQUNoRCxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDO1NBQ0g7Ozs7OztZQUtHLE9BQVk7UUFDaEIsT0FBTyxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUEsRUFBRSxFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUVoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFJTyxtQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7UUFDckMsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O2dCQTNjRixVQUFVOzs7O2dCQU5GLFVBQVU7Z0JBQVYsVUFBVTtnQkFFVixhQUFhOzs7Z0NBWW5CLFNBQVMsU0FBQyxZQUFZOztJQXFjekIsaUJBQUM7Q0FBQSxBQTdjRCxJQTZjQztTQTVjWSxVQUFVOzs7SUFDckIsK0NBQTJHOztJQUMzRywyQkFBb0I7O0lBQ3BCLGlDQUF1Qzs7SUFDdkMsbUNBQXdCOztJQUN4Qiw4QkFBa0I7O0lBQ2xCLDZCQUF5Qjs7SUFDekIsbUNBQW1EOztJQU9uRCw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQiw4QkFBMEI7O0lBQzFCLGdDQUFrQjs7SUFDbEIsaUNBQTZCOztJQUM3QiwrQkFBNkI7O0lBRTdCLG9DQUF5Qjs7Ozs7SUFRYiwyQkFBeUI7Ozs7O0lBQ25DLCtCQUE2Qjs7Ozs7SUFDN0IsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy8gaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG4vLyBpbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XG5cblxuLy8gQEluamVjdGFibGUoKVxuLy8gZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xuLy8gICBwdWJsaWMgZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbDogYW55ID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnICsgJ3VwbG9hZHMnIDtcbi8vICAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcbi8vICAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XG4vLyAgIGh1bWFuaXplQnl0ZXM6IEZ1bmN0aW9uO1xuLy8gICBkcmFnT3ZlcjogYm9vbGVhbjtcbi8vICAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuLy8gICBAVmlld0NoaWxkKCdmaWxlSW5wdXQxJykgdXBsb2FkZXJJbnB1dDogRWxlbWVudFJlZjtcbi8vICAgLypASW5wdXQoKVxuLy8gICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XG4vLyAgICAgdGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsID0gZG9tYWluX2Zvcl9maWxldXBsb2FkO1xuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xuLy8gICB9Ki9cbi8vICAgcHVibGljIGxlbmd0aGlzO1xuLy8gICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuLy8gICBwdWJsaWMgaW5wcm9ncmVzcztcbi8vICAgcHVibGljIHByb2dyZXNzOmFueT1bXTtcbi8vICAgcHVibGljIHVwbG9hZHR5cGU7XG4vLyAgIHB1YmxpYyB1cGxvYWRlcnJvcjphbnk9Jyc7XG4vLyAgIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xuLy8gICBmaWxlc2VydmVybmFtZTphbnk9W107XG4vLyAgIC8qQElucHV0KClcbi8vICAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XG4vLyAgICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkT3V0cHV0Jyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xuLy8gICB9Ki9cbi8vICAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbi8vICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXG4vLyAgICAgICAgICAgICAgICkge1xuLy8gICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuLy8gICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4vLyAgICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuLy8gICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4vLyAgICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbi8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbi8vICAgfVxuLy8gICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcbi8vICAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuLy8gICAgIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FsbEFkZGVkVG9RdWV1ZScpIHtcbi8vICAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcbi8vICAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXG4vLyAgICAgICAgIHVybDogJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnLFxuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cbi8vICAgICAgIH07XG4vLyAgICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgIGlmICh1cGxvYWRPdXRwdXQuZmlsZS5yZXNwb25zZSAhPSAnJykge1xuLy8gICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzKioqKioqKioqJyk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4vLyAgICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4vLyAgICAgICB9XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuLy8gICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmaWxlID0+IHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5pZCA9PT0gdXBsb2FkT3V0cHV0LmZpbGUuaWQpO1xuLy8gICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcbi8vICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbClcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcbi8vICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3ZlcicpIHtcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpIHtcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PW51bGwpdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT0wO1xuLy8gICAgICAgdGhpcy5pbnByb2dyZXNzPXRydWU7XG4vLyAgICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbi8vICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuLy8gICAgICAgaWYodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT09MTAwKSB7XG4vLyAgICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09bnVsbDtcbi8vICAgICAgICAgdGhpcy5pbnByb2dyZXNzPW51bGw7XG4vLyAgICAgICB9XG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh1cGxvYWR0eXBlYz09J3NpbmdsZScpe1xuLy8gICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xuLy8gICAgICAgaWYodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdPVtdO1xuLy8gICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICB9XG4vLyAgICAgaWYgKHVwbG9hZHR5cGVjID09ICdtdWx0aXBsZScpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XG4vLyAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMubGVuZ3RoKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuLy8gICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdO1xuLy8gICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD09MSkge1xuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsICkge1xuLy8gICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSE9bnVsbCl7XG4vLyAgICAgICAgICAgdGhpcy51cGxvYWRlcnJvcj0nZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg+MSlcbi8vICAgICAgIHtcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkZmRzZj09PT0gaW4gbXVsdGlwbGUgbGVuZ3RoICcpO1xuLy8gICAgICAgICBmb3IobGV0IGIgaW4gdGhpcy5maWxlcyl7XG4vLyAgICAgICAgICAgaWYodGhpcy5maWxlc1tiXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwpIHtcbi8vICAgICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlKTtcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgdGhpcy5maWxlcz1bXTtcbi8vICAgICAgIH1cbi8vICAgICAgIC8vfVxuLy8gICAgIH1cbi8vICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc2VydmVybmFtZScpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkZXJyb3IpO1xuLy8gICAgIC8vdGhpcy51cGxvYWRlcnNlcnZpY2UuZmlsZW5hbWV2YWxjMT10aGlzLmZpbGVzZXJ2ZXJuYW1lO1xuLy8gICAgIC8vVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04Nztcbi8vICAgICAvL2NvbnNvbGUubG9nKGNsYXNzdmFsKTtcblxuLy8gICB9XG4vLyAgIGlzVG9rZW5FeHBpcmVkKCkge1xuXG4vLyAgICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcbi8vICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuLy8gICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbi8vICAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcbi8vICAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxuXG5cblxuLy8gICB9XG5cbi8vICAgZ2V0Y2xpZW50aXAoKSB7XG5cbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcblxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLmdldChcImh0dHA6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPTk3OTdjNDJiOTMwNzhhXCIpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xuXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG5cbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuLy8gICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcblxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArICdkYXRhbGlzdCcsIGVuZHBvaW50LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG4vLyAgIC8vIGdldERhdGEgZW5kXG5cbi8vICAgcG9zdERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IGRhdGEudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyAgIHBvc3REYXRhd2l0aG91dFRva2VuKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgcG9zdGxvZ2luKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH0gLy8gcG9zdERhdGEgZW5kXG5cblxuXG5cbi8vICAgcG9zdFNlYXJjaCggbGluayx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJsaW5rIGluIHBvc3RTZWFyY2hcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XG4vLyAgICAgY29uc29sZS5sb2coc291cmNlKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyBwb3N0U2VhcmNoMSggbGluayxzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBzb3VyY2UudG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGlua1wiKTtcbi8vICAgICBjb25zb2xlLmxvZyhsaW5rKTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cblxuXG4vLyAgIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdBdXRob3JpemF0aW9uJzogJydcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuXG5cbi8vICAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZDpkYXRhLl9pZH1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICAgIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbi8vICAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZHM6ZGF0YX1cbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6e2lkczpkYXRhLHZhbDp2YWx9fTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG5cbi8vICAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4vLyAgICAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcbi8vICAgfVxuXG4vLyB9XG5cblxuXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgc3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUsIGNhdGNoRXJyb3IgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkSW5wdXQsIFVwbG9hZEZpbGUsIGh1bWFuaXplQnl0ZXMsIFVwbG9hZGVyT3B0aW9ucywgVXBsb2FkU3RhdHVzIH0gZnJvbSAnbmd4LXVwbG9hZGVyJztcbmltcG9ydCB7IENvb2tpZVNlcnZpY2UgfSBmcm9tICduZ3gtY29va2llLXNlcnZpY2UnO1xuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbiAgcHVibGljIGRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWw6IGFueSA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyArICd1cGxvYWRzJztcbiAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcbiAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XG4gIGh1bWFuaXplQnl0ZXM6IEZ1bmN0aW9uO1xuICBkcmFnT3ZlcjogYm9vbGVhbjtcbiAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xuICBAVmlld0NoaWxkKCdmaWxlSW5wdXQxJykgdXBsb2FkZXJJbnB1dDogRWxlbWVudFJlZjtcbiAgLypASW5wdXQoKVxuICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XG4gICAgdGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsID0gZG9tYWluX2Zvcl9maWxldXBsb2FkO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xuICB9Ki9cbiAgcHVibGljIGxlbmd0aGlzO1xuICBwdWJsaWMgcGVyY2VudGFnZWlzO1xuICBwdWJsaWMgaW5wcm9ncmVzcztcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcbiAgcHVibGljIHVwbG9hZHR5cGU7XG4gIHB1YmxpYyB1cGxvYWRlcnJvcjogYW55ID0gJyc7XG4gIHB1YmxpYyBzZWNyZXRrZXk6IGFueSA9ICduYSc7XG4gIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xuICBmaWxlc2VydmVybmFtZTogYW55ID0gW107XG5cbiAgLypASW5wdXQoKVxuICBzZXQgdXBsb2FkT3V0cHV0KHVwbG9hZE91dHB1dDogYW55KXtcbiAgICB0aGlzLnVwbG9hZE91dHB1dHZhbCA9IHVwbG9hZE91dHB1dDtcbiAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWRPdXRwdXQnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwbG9hZE91dHB1dCk7XG4gIH0qL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZVxuXG4gICkge1xuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xuICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XG4gICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxuICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XG4gICAgaWYgKHRoaXMuY29va2llU2VydmljZS5jaGVjaygnc2VjcmV0JykpIHtcbiAgICAgIHRoaXMuc2VjcmV0a2V5ID0gdGhpcy5jb29raWVTZXJ2aWNlLmdldCgnc2VjcmV0Jyk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmRvbWFpbicpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcbiAgfVxuXG4gIG9uVXBsb2FkT3V0cHV0KHVwbG9hZE91dHB1dDogVXBsb2FkT3V0cHV0LCBhcnJheXZhbHVlOiBhbnksIHVwbG9hZHR5cGVjOiBhbnksIHVwbG9hZHBhdGg6IGFueSk6IHZvaWQge1xuICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XG4gICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xuICAgICAgY29uc3QgZXZlbnQ6IFVwbG9hZElucHV0ID0ge1xuICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcbiAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxuICAgICAgfTtcbiAgICAgIHRoaXMudXBsb2FkSW5wdXQuZW1pdChldmVudCk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XG4gICAgICB0aGlzLmZpbGVzW2luZGV4XSA9IHVwbG9hZE91dHB1dC5maWxlO1xuICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuICAgICAgaWYgKHRoaXMuZmlsZXNbMF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3ZlcicpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xuICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICBpZiAodGhpcy5maWxlc1swXSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MgIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgeyB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID0gMDsgfVxuICAgICAgdGhpcy5pbnByb2dyZXNzID0gdHJ1ZTtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZCBwcm9ncmVzc2luZycpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4gICAgICBpZiAodGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9PSAxMDApIHtcbiAgICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9IG51bGw7XG4gICAgICAgIHRoaXMuaW5wcm9ncmVzcyA9IG51bGw7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XG4gICAgfVxuICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnc2luZ2xlJykge1xuICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xuICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgeyB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107IH1cbiAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTtcbiAgICAgIGlmICh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlICE9IG51bGwpIHsgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpOyB9XG4gICAgfVxuICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnbXVsdGlwbGUnKSB7XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc1swXS5yZXNwb25zZScpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzLmxlbmd0aCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbiAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHsgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdOyB9XG4gICAgICAvLyBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKXtcbiAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmZpbGVzWzBdICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UgIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGUgPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcbiAgICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgICAgdGhpcy51cGxvYWRlcnJvciA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZpbGVzWzBdICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy51cGxvYWRlcnJvciA9ICdlcnJvciBvY2N1cmVkIG9uIHVwbG9hZGluZyAhISEnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZGZkc2Y9PT09IGluIG11bHRpcGxlIGxlbmd0aCAnKTtcbiAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuZmlsZXMpIHtcbiAgICAgICAgICBpZiAodGhpcy5maWxlc1tiXS5yZXNwb25zZSAhPSBudWxsICYmIHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UuZXJyb3JfY29kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1tiXS5yZXNwb25zZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgIH1cbiAgICAgIC8vIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNlcnZlcm5hbWUnKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzZXJ2ZXJuYW1lKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwbG9hZGVycm9yKTtcbiAgICAvLyB0aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XG4gICAgLy8gVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04NztcbiAgICAvLyBjb25zb2xlLmxvZyhjbGFzc3ZhbCk7XG5cbiAgfVxuICBpc1Rva2VuRXhwaXJlZCgpIHtcblxuICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4gICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gaGVscGVyLmRlY29kZVRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbiAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXG4gICAgLy8gY29uc3QgaXNSZWZyZXNoVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcblxuXG5cbiAgfVxuXG4gIGdldGNsaWVudGlwKCkge1xuXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLmdldCgnaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGEnKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG4gIGdldEVuZHBvaW50KGVuZHBvaW50OiBhbnkpIHtcblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJydcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuICAgIGNvbnNvbGUubG9nKCcnKTtcblxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArIGVuZHBvaW50LnNvdXJjZSwge30sIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZ2V0RGF0YShlbmRwb2ludDogYW55KSB7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvLyBnZXREYXRhIGVuZFxuXG4gIHBvc3REYXRhKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IGRhdGEudG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgcG9zdERhdGF3aXRob3V0VG9rZW4oZW5kcG9pbnQ6IGFueSwgZGF0YSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcG9zdGxvZ2luKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSAvLyBwb3N0RGF0YSBlbmRcblxuXG5cblxuICBwb3N0U2VhcmNoKGxpbmssIHRva2VuLCBzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7Ki9cbiAgICBzb3VyY2Uuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XG4gICAgc291cmNlLnRva2VuID0gdG9rZW47XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHBvc3RTZWFyY2gxKGxpbmssIHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogc291cmNlLnRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZygnbGluaycpO1xuICAgIGNvbnNvbGUubG9nKGxpbmspO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG5cblxuICBwdXREYXRhKGVuZHBvaW50OiBhbnksIGRhdGEsIGlkOiBhbnkpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnB1dCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSArICcvJyArIGlkLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuICBkZXRlT25lRGF0YShlbmRwb2ludDogYW55LCBkYXRhLCB0b2tlbiwgc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIC8qIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc29sZS5sb2codG9rZW4pOyovXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcbiAgICBkYXRhdmFsID0geyBzb3VyY2UsIGlkOiBkYXRhLl9pZCB9O1xuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCwgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9nZ2xlc3RhdHVzKGVuZHBvaW50OiBhbnksIGRhdGEsIHRva2VuLCBzb3VyY2UpIHtcbiAgICAvKmNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xuICAgICAgY29uc29sZS5sb2coc291cmNlKTsqL1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsqL1xuICAgIGxldCBkYXRhdmFsOiBhbnk7XG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBkYXRhIH07XG4gICAgZGF0YXZhbC5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6IGFueSwgZGF0YSwgdG9rZW4sIHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cbiAgICBsZXQgZGF0YXZhbDogYW55O1xuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgaWRzOiBkYXRhIH07XG4gICAgZGF0YXZhbC5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50ICsgJ21hbnknLCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OiBhbnksIGRhdGEsIHZhbCwgdG9rZW4sIHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cbiAgICBsZXQgZGF0YXZhbDogYW55O1xuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgZGF0YTogeyBpZHM6IGRhdGEsIHZhbCB9IH07XG4gICAgZGF0YXZhbC5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XG5cbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQgKyAnbWFueScsIGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBwcml2YXRlIGdldEVuZHBvaW50VXJsKGVuZHBvaW50OiBzdHJpbmcpIHtcbiAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcbiAgfVxuXG59XG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgZW5kICoqKioqKioqKioqKioqKioqKioqKioqKiovXG4iXX0=