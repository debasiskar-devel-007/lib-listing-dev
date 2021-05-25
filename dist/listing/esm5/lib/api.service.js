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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsR0FBRyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUF5QyxhQUFhLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBeUJFOzs7OztPQUtHO0lBQ0gsb0JBQW9CLEtBQWlCLEVBQzNCLFNBQXFCLEVBQ3JCLGFBQTRCO1FBRmxCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQS9CL0IsOEJBQXlCLEdBQVEsc0RBQXNELEdBQUcsU0FBUyxDQUFDO1FBZ0JwRyxhQUFRLEdBQVEsRUFBRSxDQUFDO1FBRW5CLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLGNBQVMsR0FBUSxJQUFJLENBQUM7O1FBRTdCLG1CQUFjLEdBQVEsRUFBRSxDQUFDO1FBYXZCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUNuRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLDhCQUE4QjtRQUMvQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksWUFBWSxFQUFlLENBQUMsQ0FBQyx5REFBeUQ7UUFDN0csSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDbkMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ25EO1FBQ0QsOEJBQThCO1FBQzlCLDRCQUE0QjtJQUM5QixDQUFDOzs7Ozs7OztJQUVELG1DQUFjOzs7Ozs7O0lBQWQsVUFBZSxZQUEwQixFQUFFLFVBQWUsRUFBRSxXQUFnQixFQUFFLFVBQWU7UUFDM0YsK0NBQStDO1FBQy9DLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxpQkFBaUIsRUFBRTs7Z0JBQ3JDLE9BQUssR0FBZ0I7Z0JBQ3pCLElBQUksRUFBRSxXQUFXO2dCQUNqQixHQUFHLEVBQUUsc0RBQXNEO2dCQUMzRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO2FBQzNCO1lBQ0QsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBSyxDQUFDLENBQUM7U0FDOUI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssY0FBYyxJQUFJLE9BQU8sWUFBWSxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7WUFDM0YsSUFBSSxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO2dCQUNoQixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDbkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQzthQUM1RDtTQUNGO2FBQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxPQUFPLFlBQVksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFOztnQkFDbEYsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUzs7OztZQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxZQUFZLENBQUMsSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUE1RSxDQUE0RSxFQUFDO1lBQ3hILElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsWUFBWSxDQUFDLElBQUksQ0FBQztZQUN0QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ2xDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO2dCQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7YUFDNUQ7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixDQUFDLENBQUM7WUFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNOzs7O1lBQUMsVUFBQyxJQUFnQixJQUFLLE9BQUEsSUFBSSxLQUFLLFlBQVksQ0FBQyxJQUFJLEVBQTFCLENBQTBCLEVBQUMsQ0FBQztTQUNsRjthQUFNLElBQUksWUFBWSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBTSxJQUFJLFlBQVksQ0FBQyxJQUFJLEtBQUssU0FBUyxFQUFFO1lBQzFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ3ZCO2FBQU0sSUFBSSxZQUFZLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUN2QjtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEIsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDM0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtnQkFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUFFO1lBQ3pFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3JFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNqQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzthQUN4QjtZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztZQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO1lBQzNCLDRCQUE0QjtZQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDO2FBQUU7WUFDdEYsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDckMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUFFO1NBQ3RHO1FBQ0QsSUFBSSxXQUFXLElBQUksVUFBVSxFQUFFO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztZQUN0Qyx1Q0FBdUM7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7YUFBRTtZQUN0RixvQ0FBb0M7WUFDcEMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7Z0JBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDaEcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7b0JBQ2hCLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO2lCQUN2QjtnQkFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO29CQUN4RyxJQUFJLENBQUMsV0FBVyxHQUFHLGdDQUFnQyxDQUFDO2lCQUNyRDthQUNGO1lBQ0QsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztnQkFDOUMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO29CQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO3dCQUMvRSxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3FCQUM5RDtpQkFDRjtnQkFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQzthQUNqQjtZQUNELElBQUk7U0FDTDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLENBQUMsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUM5QiwwREFBMEQ7UUFDMUQsc0NBQXNDO1FBQ3RDLHlCQUF5QjtJQUUzQixDQUFDOzs7O0lBQ0QsbUNBQWM7OztJQUFkO1FBRUUseUNBQXlDO1FBQ3pDLDZFQUE2RTtRQUM3RSxrRkFBa0Y7UUFDbEYscUVBQXFFO1FBQ3JFLDhGQUE4RjtRQUM5RixzREFBc0Q7UUFDdEQsZ0VBQWdFO0lBSWxFLENBQUM7Ozs7SUFFRCxnQ0FBVzs7O0lBQVg7UUFFRSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDOzs7WUFHbEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUV6RyxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUlELGdDQUFXOzs7O0lBQVgsVUFBWSxRQUFhOztZQUVqQixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsRUFBRTthQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7OztZQUdWLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUUzRixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7OztJQUVELDRCQUFPOzs7O0lBQVAsVUFBUSxRQUFhOztZQUViLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxFQUFFO2FBQ2xCLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQzs7O1lBR1YsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ3pGLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFFcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGNBQWM7Ozs7Ozs7SUFFZCw2QkFBUTs7Ozs7OztJQUFSLFVBQVMsUUFBYSxFQUFFLElBQUk7O1lBQ3BCLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSzthQUMxQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7O1lBQ25CLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDbkgsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFDRCx5Q0FBb0I7Ozs7O0lBQXBCLFVBQXFCLFFBQWEsRUFBRSxJQUFJOztZQUNoQyxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2FBQ25DLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQ25ILE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBRUQsOEJBQVM7Ozs7O0lBQVQsVUFBVSxRQUFhLEVBQUUsSUFBSTs7WUFDckIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjthQUNuQyxDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBRztZQUNuSCxPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQix3QkFBd0I7WUFFeEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSSwrQkFBK0I7UUFDNUQsQ0FBQyxFQUFDLEVBQUUsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUMsRUFBQyxlQUFlOzs7Ozs7OztJQUtqQiwrQkFBVTs7Ozs7Ozs7SUFBVixVQUFXLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDdEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIO1FBQ0Q7Ozs4QkFHc0I7UUFDdEIsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNmLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVOzs7O1FBQUMsVUFBQyxHQUFHO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN2QyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRW5CLHdCQUF3QjtZQUV4QixPQUFPLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFJLCtCQUErQjtRQUM1RCxDQUFDLEVBQUMsRUFBRSxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDcEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7O0lBR0QsZ0NBQVc7Ozs7O0lBQVgsVUFBWSxJQUFJLEVBQUUsTUFBTTs7WUFDaEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLE1BQU0sQ0FBQyxLQUFLO2FBQzVCLENBQUM7U0FDSDtRQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDOztZQUNaLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDL0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBTUQsNEJBQU87Ozs7OztJQUFQLFVBQVEsUUFBYSxFQUFFLElBQUksRUFBRSxFQUFPOztZQUM1QixXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsRUFBRTthQUNsQixDQUFDO1NBQ0g7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLEVBQUgsQ0FBRyxFQUFDLENBQUM7UUFDaEksT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQzs7Ozs7Ozs7SUFHRCxnQ0FBVzs7Ozs7OztJQUFYLFVBQVksUUFBYSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTTs7WUFDdEMsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIOzs7Ozs7O1lBTUcsT0FBWTtRQUNoQixPQUFPLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxPQUFPLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzs7WUFDaEIsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDakYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7OztJQUVELGlDQUFZOzs7Ozs7O0lBQVosVUFBYSxRQUFhLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNO1FBQzdDOzs7Z0NBR3dCOzs7Ozs7WUFFbEIsV0FBVyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLFdBQVcsQ0FBQztnQkFDdkIsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLEtBQUs7YUFDckIsQ0FBQztTQUNIOzs7Ozs7WUFLRyxPQUFZO1FBQ2hCLE9BQU8sR0FBRyxFQUFFLE1BQU0sUUFBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUM7UUFDM0IsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVTs7OztRQUFDLFVBQUMsR0FBRztZQUNqRixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVuQix3QkFBd0I7WUFFeEIsT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBSSwrQkFBK0I7UUFDNUQsQ0FBQyxFQUFDLEVBQUUsR0FBRzs7OztRQUFDLFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxFQUFILENBQUcsRUFBQyxDQUFDO1FBQ3BCLE9BQU8sTUFBTSxDQUFDO0lBQ2hCLENBQUM7Ozs7Ozs7O0lBRUQsaUNBQVk7Ozs7Ozs7SUFBWixVQUFhLFFBQWEsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU07O1lBQ3ZDLFdBQVcsR0FBRztZQUNsQixPQUFPLEVBQUUsSUFBSSxXQUFXLENBQUM7Z0JBQ3ZCLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxLQUFLO2FBQ3JCLENBQUM7U0FDSDs7Ozs7O1lBS0csT0FBWTtRQUNoQixPQUFPLEdBQUcsRUFBRSxNQUFNLFFBQUEsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDaEMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUNoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7Ozs7SUFFRCxxQ0FBZ0I7Ozs7Ozs7O0lBQWhCLFVBQWlCLFFBQWEsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNOztZQUNoRCxXQUFXLEdBQUc7WUFDbEIsT0FBTyxFQUFFLElBQUksV0FBVyxDQUFDO2dCQUN2QixjQUFjLEVBQUUsa0JBQWtCO2dCQUNsQyxhQUFhLEVBQUUsS0FBSzthQUNyQixDQUFDO1NBQ0g7Ozs7OztZQUtHLE9BQVk7UUFDaEIsT0FBTyxHQUFHLEVBQUUsTUFBTSxRQUFBLEVBQUUsSUFBSSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUEsRUFBRSxFQUFFLENBQUM7UUFDL0MsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2hDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztZQUVoQixNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVU7Ozs7UUFBQyxVQUFDLEdBQUc7WUFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFJTyxtQ0FBYzs7Ozs7SUFBdEIsVUFBdUIsUUFBZ0I7UUFDckMsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7O2dCQTdjRixVQUFVOzs7O2dCQU5GLFVBQVU7Z0JBQVYsVUFBVTtnQkFFVixhQUFhOzs7Z0NBWW5CLFNBQVMsU0FBQyxZQUFZOztJQXVjekIsaUJBQUM7Q0FBQSxBQS9jRCxJQStjQztTQTljWSxVQUFVOzs7SUFDckIsK0NBQTJHOztJQUMzRywyQkFBb0I7O0lBQ3BCLGlDQUF1Qzs7SUFDdkMsbUNBQXdCOztJQUN4Qiw4QkFBa0I7O0lBQ2xCLDZCQUF5Qjs7SUFDekIsbUNBQW1EOztJQU9uRCw4QkFBZ0I7O0lBQ2hCLGtDQUFvQjs7SUFDcEIsZ0NBQWtCOztJQUNsQiw4QkFBMEI7O0lBQzFCLGdDQUFrQjs7SUFDbEIsaUNBQTZCOztJQUM3QiwrQkFBNkI7O0lBRTdCLG9DQUF5Qjs7Ozs7SUFRYiwyQkFBeUI7Ozs7O0lBQ25DLCtCQUE2Qjs7Ozs7SUFDN0IsbUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IHtFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG4vLyBpbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG4vLyBpbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XHJcblxyXG5cclxuLy8gQEluamVjdGFibGUoKVxyXG4vLyBleHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XHJcbi8vICAgcHVibGljIGRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWw6IGFueSA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyArICd1cGxvYWRzJyA7XHJcbi8vICAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcclxuLy8gICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PjtcclxuLy8gICBodW1hbml6ZUJ5dGVzOiBGdW5jdGlvbjtcclxuLy8gICBkcmFnT3ZlcjogYm9vbGVhbjtcclxuLy8gICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XHJcbi8vICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0MScpIHVwbG9hZGVySW5wdXQ6IEVsZW1lbnRSZWY7XHJcbi8vICAgLypASW5wdXQoKVxyXG4vLyAgIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcclxuLy8gICAgIHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCA9IGRvbWFpbl9mb3JfZmlsZXVwbG9hZDtcclxuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XHJcbi8vICAgfSovXHJcbi8vICAgcHVibGljIGxlbmd0aGlzO1xyXG4vLyAgIHB1YmxpYyBwZXJjZW50YWdlaXM7XHJcbi8vICAgcHVibGljIGlucHJvZ3Jlc3M7XHJcbi8vICAgcHVibGljIHByb2dyZXNzOmFueT1bXTtcclxuLy8gICBwdWJsaWMgdXBsb2FkdHlwZTtcclxuLy8gICBwdWJsaWMgdXBsb2FkZXJyb3I6YW55PScnO1xyXG4vLyAgIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xyXG4vLyAgIGZpbGVzZXJ2ZXJuYW1lOmFueT1bXTtcclxuLy8gICAvKkBJbnB1dCgpXHJcbi8vICAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XHJcbi8vICAgICB0aGlzLnVwbG9hZE91dHB1dHZhbCA9IHVwbG9hZE91dHB1dDtcclxuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xyXG4vLyAgIH0qL1xyXG4vLyAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXHJcbi8vICAgICAgICAgICAgICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXHJcbi8vICAgICAgICAgICAgICAgKSB7XHJcbi8vICAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbmN1cnJlbmN5OiAxMCwgbWF4VXBsb2FkczogMTAgfTtcclxuLy8gICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XHJcbi8vICAgICB0aGlzLnVwbG9hZElucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD4oKTsgLy8gaW5wdXQgZXZlbnRzLCB3ZSB1c2UgdGhpcyB0byBlbWl0IGRhdGEgdG8gbmd4LXVwbG9hZGVyXHJcbi8vICAgICB0aGlzLmh1bWFuaXplQnl0ZXMgPSBodW1hbml6ZUJ5dGVzO1xyXG4vLyAgICAgLy9jb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcclxuLy8gICAgIC8vY29uc29sZS5sb2codGhpcy5kb21haW4pO1xyXG4vLyAgIH1cclxuLy8gICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcclxuLy8gICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbi8vICAgICBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhbGxBZGRlZFRvUXVldWUnKSB7XHJcbi8vICAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcclxuLy8gICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcclxuLy8gICAgICAgICB1cmw6ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyxcclxuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuLy8gICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxyXG4vLyAgICAgICB9O1xyXG4vLyAgICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xyXG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgICBpZiAodXBsb2FkT3V0cHV0LmZpbGUucmVzcG9uc2UgIT0gJycpIHtcclxuLy8gICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbi8vICAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcyoqKioqKioqKicpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4vLyAgICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcclxuLy8gICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbi8vICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5maW5kSW5kZXgoZmlsZSA9PiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnICYmIGZpbGUuaWQgPT09IHVwbG9hZE91dHB1dC5maWxlLmlkKTtcclxuLy8gICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcclxuLy8gICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xyXG4vLyAgICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpXHJcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcclxuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXM9PT09PT09PT09PT09PT09PT0nKTtcclxuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XHJcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcclxuLy8gICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBVcGxvYWRGaWxlKSA9PiBmaWxlICE9PSB1cGxvYWRPdXRwdXQuZmlsZSk7XHJcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ092ZXInKSB7XHJcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xyXG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdXQnKSB7XHJcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcclxuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xyXG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XHJcbi8vICAgICB9XHJcbi8vICAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4vLyAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKSB7XHJcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PW51bGwpdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXT0wO1xyXG4vLyAgICAgICB0aGlzLmlucHJvZ3Jlc3M9dHJ1ZTtcclxuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXBsb2FkIHByb2dyZXNzaW5nJyk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcclxuLy8gICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XHJcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PTEwMCkge1xyXG4vLyAgICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09bnVsbDtcclxuLy8gICAgICAgICB0aGlzLmlucHJvZ3Jlc3M9bnVsbDtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHVwbG9hZHR5cGVjKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGlmICh1cGxvYWR0eXBlYz09J3NpbmdsZScpe1xyXG4vLyAgICAgICAvLyB0aGlzLmZpbGVzZXJ2ZXJuYW1lID0gW107XHJcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcclxuLy8gICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcclxuLy8gICAgICAgaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgaWYgKHVwbG9hZHR5cGVjID09ICdtdWx0aXBsZScpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNbMF0ucmVzcG9uc2UnKTtcclxuLy8gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlc1swXS5yZXNwb25zZSk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMubGVuZ3RoKTtcclxuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XHJcbi8vICAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTtcclxuLy8gICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XHJcbi8vICAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPT0xKSB7XHJcbi8vICAgICAgICAgaWYodGhpcy5maWxlc1swXSAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCApIHtcclxuLy8gICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcclxuLy8gICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuLy8gICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9Jyc7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlIT1udWxsKXtcclxuLy8gICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9J2Vycm9yIG9jY3VyZWQgb24gdXBsb2FkaW5nICEhISc7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPjEpXHJcbi8vICAgICAgIHtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XHJcbi8vICAgICAgICAgZm9yKGxldCBiIGluIHRoaXMuZmlsZXMpe1xyXG4vLyAgICAgICAgICAgaWYodGhpcy5maWxlc1tiXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwpIHtcclxuLy8gICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICB0aGlzLmZpbGVzPVtdO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIC8vfVxyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNlcnZlcm5hbWUnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xyXG4vLyAgICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XHJcbi8vICAgICAvL3RoaXMudXBsb2FkZXJzZXJ2aWNlLmZpbGVuYW1ldmFsYzE9dGhpcy5maWxlc2VydmVybmFtZTtcclxuLy8gICAgIC8vVXBsb2FkZXJDb21wb25lbnQuZmlsZW5hbWV2YWxjMT04NztcclxuLy8gICAgIC8vY29uc29sZS5sb2coY2xhc3N2YWwpO1xyXG5cclxuLy8gICB9XHJcbi8vICAgaXNUb2tlbkV4cGlyZWQoKSB7XHJcblxyXG4vLyAgICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcclxuLy8gICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbi8vICAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcclxuLy8gICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxyXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxyXG5cclxuXHJcblxyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0Y2xpZW50aXAoKSB7XHJcblxyXG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcblxyXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vaXBpbmZvLmlvLz9mb3JtYXQ9anNvbiZ0b2tlbj05Nzk3YzQyYjkzMDc4YVwiKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG5cclxuXHJcbi8vICAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xyXG5cclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcblxyXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgZ2V0RGF0YShlbmRwb2ludDogYW55KSB7XHJcblxyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6ICcnXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcclxuXHJcbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuXHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcbi8vICAgLy8gZ2V0RGF0YSBlbmRcclxuXHJcbi8vICAgcG9zdERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhKSB7XHJcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogZGF0YS50b2tlblxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG4vLyAgIHBvc3REYXRhd2l0aG91dFRva2VuKGVuZHBvaW50OmFueSwgZGF0YSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcbi8vICAgcG9zdGxvZ2luKGVuZHBvaW50OmFueSwgZGF0YSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbidcclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9IC8vIHBvc3REYXRhIGVuZFxyXG5cclxuXHJcblxyXG5cclxuLy8gICBwb3N0U2VhcmNoKCBsaW5rLHRva2VuLHNvdXJjZSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJsaW5rIGluIHBvc3RTZWFyY2hcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhsaW5rKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG4vLyBwb3N0U2VhcmNoMSggbGluayxzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHNvdXJjZS50b2tlblxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImxpbmtcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhsaW5rKTtcclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAgIHB1dERhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLCBpZDphbnkpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiAnJ1xyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wdXQodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCkrJy8nK2lkLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG5cclxuXHJcbi8vICAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xyXG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZDpkYXRhLl9pZH1cclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG4vLyAgICAgdG9nZ2xlc3RhdHVzKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcclxuLy8gICAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xyXG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOmRhdGF9XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuLy8gICBkZXRlTWFueURhdGEoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xyXG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxpZHM6ZGF0YX1cclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQrJ21hbnknLGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuLy8gICAgIHRvZ2dsZXN0YXR1c21hbnkoZW5kcG9pbnQ6YW55LCBkYXRhLHZhbCx0b2tlbixzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcclxuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsZGF0YTp7aWRzOmRhdGEsdmFsOnZhbH19O1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG5cclxuXHJcblxyXG4vLyAgIHByaXZhdGUgZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQ6IHN0cmluZykge1xyXG4vLyAgICAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcclxuLy8gICB9XHJcblxyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKiogQWRkZWQgQnkgSGltYWRyaSB1c2luZyBMYW1kYSBzdGFydCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuXHJcbmltcG9ydCB7IEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5qZWN0YWJsZSwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgVXBsb2FkT3V0cHV0LCBVcGxvYWRJbnB1dCwgVXBsb2FkRmlsZSwgaHVtYW5pemVCeXRlcywgVXBsb2FkZXJPcHRpb25zLCBVcGxvYWRTdGF0dXMgfSBmcm9tICduZ3gtdXBsb2FkZXInO1xyXG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4gIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2Fkcyc7XHJcbiAgZmlsZXM6IFVwbG9hZEZpbGVbXTtcclxuICB1cGxvYWRJbnB1dDogRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PjtcclxuICBodW1hbml6ZUJ5dGVzOiBGdW5jdGlvbjtcclxuICBkcmFnT3ZlcjogYm9vbGVhbjtcclxuICBvcHRpb25zOiBVcGxvYWRlck9wdGlvbnM7XHJcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0MScpIHVwbG9hZGVySW5wdXQ6IEVsZW1lbnRSZWY7XHJcbiAgLypASW5wdXQoKVxyXG4gIHNldCBkb21haW5fZm9yX2ZpbGV1cGxvYWQoZG9tYWluX2Zvcl9maWxldXBsb2FkOiBhbnkpIHtcclxuICAgIHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCA9IGRvbWFpbl9mb3JfZmlsZXVwbG9hZDtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzLnNraXB2YWwnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCk7XHJcbiAgfSovXHJcbiAgcHVibGljIGxlbmd0aGlzO1xyXG4gIHB1YmxpYyBwZXJjZW50YWdlaXM7XHJcbiAgcHVibGljIGlucHJvZ3Jlc3M7XHJcbiAgcHVibGljIHByb2dyZXNzOiBhbnkgPSBbXTtcclxuICBwdWJsaWMgdXBsb2FkdHlwZTtcclxuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xyXG4gIHB1YmxpYyBzZWNyZXRrZXk6IGFueSA9ICduYSc7XHJcbiAgLy8gcHVibGljIHVwbG9hZE91dHB1dHZhbDphbnk7XHJcbiAgZmlsZXNlcnZlcm5hbWU6IGFueSA9IFtdO1xyXG5cclxuICAvKkBJbnB1dCgpXHJcbiAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XHJcbiAgICB0aGlzLnVwbG9hZE91dHB1dHZhbCA9IHVwbG9hZE91dHB1dDtcclxuICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xyXG4gIH0qL1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIF9hdXRoSHR0cDogSHR0cENsaWVudCxcclxuICAgIHByaXZhdGUgY29va2llU2VydmljZTogQ29va2llU2VydmljZVxyXG5cclxuICApIHtcclxuICAgIHRoaXMub3B0aW9ucyA9IHsgY29uY3VycmVuY3k6IDEwLCBtYXhVcGxvYWRzOiAxMCB9O1xyXG4gICAgdGhpcy5maWxlcyA9IFtdOyAvLyBsb2NhbCB1cGxvYWRpbmcgZmlsZXMgYXJyYXlcclxuICAgIHRoaXMudXBsb2FkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PigpOyAvLyBpbnB1dCBldmVudHMsIHdlIHVzZSB0aGlzIHRvIGVtaXQgZGF0YSB0byBuZ3gtdXBsb2FkZXJcclxuICAgIHRoaXMuaHVtYW5pemVCeXRlcyA9IGh1bWFuaXplQnl0ZXM7XHJcbiAgICBpZiAodGhpcy5jb29raWVTZXJ2aWNlLmNoZWNrKCdzZWNyZXQnKSkge1xyXG4gICAgICB0aGlzLnNlY3JldGtleSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3NlY3JldCcpO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZG9tYWluJyk7XHJcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbik7XHJcbiAgfVxyXG5cclxuICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIHRoaXMudXBsb2FkZXJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhbGxBZGRlZFRvUXVldWUnKSB7XHJcbiAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcclxuICAgICAgICB0eXBlOiAndXBsb2FkQWxsJyxcclxuICAgICAgICB1cmw6ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiB7IHBhdGg6IHVwbG9hZHBhdGggfVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FkZGVkVG9RdWV1ZScgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBpZiAodXBsb2FkT3V0cHV0LmZpbGUucmVzcG9uc2UgIT0gJycpIHtcclxuICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgICAgdGhpcy5maWxlcy5wdXNoKHVwbG9hZE91dHB1dC5maWxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcyoqKioqKioqKicpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAndXBsb2FkaW5nJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5maW5kSW5kZXgoZmlsZSA9PiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnICYmIGZpbGUuaWQgPT09IHVwbG9hZE91dHB1dC5maWxlLmlkKTtcclxuICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcclxuICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xyXG4gICAgICBpZiAodGhpcy5maWxlc1swXSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MgIT0gbnVsbCkge1xyXG4gICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXM9PT09PT09PT09PT09PT09PT0nKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XHJcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAncmVtb3ZlZCcpIHtcclxuICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKChmaWxlOiBVcGxvYWRGaWxlKSA9PiBmaWxlICE9PSB1cGxvYWRPdXRwdXQuZmlsZSk7XHJcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ092ZXInKSB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdXQnKSB7XHJcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcclxuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcm9wJykge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnZmlsZXMnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgaWYgKHRoaXMuZmlsZXNbMF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzICE9IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgeyB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID0gMDsgfVxyXG4gICAgICB0aGlzLmlucHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xyXG4gICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID0gKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcclxuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPT0gMTAwKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5pbnByb2dyZXNzID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWR0eXBlIGluIGFwaSBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHVwbG9hZHR5cGVjKTtcclxuICAgIH1cclxuICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnc2luZ2xlJykge1xyXG4gICAgICAvLyB0aGlzLmZpbGVzZXJ2ZXJuYW1lID0gW107XHJcbiAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHsgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdOyB9XHJcbiAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTtcclxuICAgICAgaWYgKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UgIT0gbnVsbCkgeyB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7IH1cclxuICAgIH1cclxuICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnbXVsdGlwbGUnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzLmxlbmd0aCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB7IHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTsgfVxyXG4gICAgICAvLyBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKXtcclxuICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxlc1swXSAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlID09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcclxuICAgICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3IgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZXNbMF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3IgPSAnZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzZGZkc2Y9PT09IGluIG11bHRpcGxlIGxlbmd0aCAnKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5maWxlcykge1xyXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UgIT0gbnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1tiXS5yZXNwb25zZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcclxuICAgICAgfVxyXG4gICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc2VydmVybmFtZScpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5maWxlc2VydmVybmFtZSk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnVwbG9hZGVycm9yKTtcclxuICAgIC8vIHRoaXMudXBsb2FkZXJzZXJ2aWNlLmZpbGVuYW1ldmFsYzE9dGhpcy5maWxlc2VydmVybmFtZTtcclxuICAgIC8vIFVwbG9hZGVyQ29tcG9uZW50LmZpbGVuYW1ldmFsYzE9ODc7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhjbGFzc3ZhbCk7XHJcblxyXG4gIH1cclxuICBpc1Rva2VuRXhwaXJlZCgpIHtcclxuXHJcbiAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xyXG4gICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gaGVscGVyLmRlY29kZVRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcclxuICAgIC8vIHZhciBpc0lkVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxyXG4gICAgLy8gY29uc3QgaXNSZWZyZXNoVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpO1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2lkX3Rva2VuIGlzRXhwaXJlZDonLGlzSWRUb2tlbkV4cGlyZWQpXHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXHJcblxyXG5cclxuXHJcbiAgfVxyXG5cclxuICBnZXRjbGllbnRpcCgpIHtcclxuXHJcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuXHJcbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KCdodHRwOi8vaXBpbmZvLmlvLz9mb3JtYXQ9anNvbiZ0b2tlbj05Nzk3YzQyYjkzMDc4YScpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBnZXRFbmRwb2ludChlbmRwb2ludDogYW55KSB7XHJcblxyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcblxyXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyBlbmRwb2ludC5zb3VyY2UsIHt9LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBnZXREYXRhKGVuZHBvaW50OiBhbnkpIHtcclxuXHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246ICcnXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcclxuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcclxuICAgIGNvbnNvbGUubG9nKCcnKTtcclxuXHJcbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArICdkYXRhbGlzdCcsIGVuZHBvaW50LCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIC8vIGdldERhdGEgZW5kXHJcblxyXG4gIHBvc3REYXRhKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogZGF0YS50b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCcnKTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuICBwb3N0RGF0YXdpdGhvdXRUb2tlbihlbmRwb2ludDogYW55LCBkYXRhKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coJycpO1xyXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgcG9zdGxvZ2luKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XHJcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfSAvLyBwb3N0RGF0YSBlbmRcclxuXHJcblxyXG5cclxuXHJcbiAgcG9zdFNlYXJjaChsaW5rLCB0b2tlbiwgc291cmNlKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coXCJsaW5rIGluIHBvc3RTZWFyY2hcIik7XHJcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcclxuICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7Ki9cclxuICAgIHNvdXJjZS5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcclxuICAgIHNvdXJjZS50b2tlbiA9IHRva2VuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIFxyXG4gIHBvc3RTZWFyY2gxKGxpbmssIHNvdXJjZSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiBzb3VyY2UudG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coJ2xpbmsnKTtcclxuICAgIGNvbnNvbGUubG9nKGxpbmspO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gIHB1dERhdGEoZW5kcG9pbnQ6IGFueSwgZGF0YSwgaWQ6IGFueSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCcnKTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wdXQodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCkgKyAnLycgKyBpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG4gIGRldGVPbmVEYXRhKGVuZHBvaW50OiBhbnksIGRhdGEsIHRva2VuLCBzb3VyY2UpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICAvKiBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgY29uc29sZS5sb2codG9rZW4pOyovXHJcbiAgICBsZXQgZGF0YXZhbDogYW55O1xyXG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBpZDogZGF0YS5faWQgfTtcclxuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XHJcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsIGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XHJcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVzdGF0dXMoZW5kcG9pbnQ6IGFueSwgZGF0YSwgdG9rZW4sIHNvdXJjZSkge1xyXG4gICAgLypjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b2tlbik7XHJcbiAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7Ki9cclxuXHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpOyovXHJcbiAgICBsZXQgZGF0YXZhbDogYW55O1xyXG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBkYXRhIH07XHJcbiAgICBkYXRhdmFsLnNlY3JldCA9IHRoaXMuc2VjcmV0a2V5O1xyXG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OiBhbnksIGRhdGEsIHRva2VuLCBzb3VyY2UpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XHJcbiAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cclxuICAgIGxldCBkYXRhdmFsOiBhbnk7XHJcbiAgICBkYXRhdmFsID0geyBzb3VyY2UsIGlkczogZGF0YSB9O1xyXG4gICAgZGF0YXZhbC5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcclxuICAgIGRhdGF2YWwudG9rZW4gPSB0b2tlbjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCArICdtYW55JywgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHRvZ2dsZXN0YXR1c21hbnkoZW5kcG9pbnQ6IGFueSwgZGF0YSwgdmFsLCB0b2tlbiwgc291cmNlKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpOyovXHJcbiAgICBsZXQgZGF0YXZhbDogYW55O1xyXG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBkYXRhOiB7IGlkczogZGF0YSwgdmFsIH0gfTtcclxuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XHJcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50ICsgJ21hbnknLCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBwcml2YXRlIGdldEVuZHBvaW50VXJsKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuICAgIHJldHVybiAnJyArIGVuZHBvaW50O1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKiBBZGRlZCBCeSBIaW1hZHJpIHVzaW5nIExhbWRhIGVuZCAqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG4iXX0=