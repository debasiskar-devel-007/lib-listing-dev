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
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        console.log('httpOptions');
        console.log(httpOptions);
        /** @type {?} */
        var result = this._http.post(endpoint, JSON.stringify(data), httpOptions).pipe(catchError((/**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsR0FBRyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUF5QyxhQUFhLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR2xDO0lBeUJFOzs7OztPQUtHO0lBQ0gsb0JBQW9CLEtBQWlCLEVBQzNCLFNBQXFCLEVBQ3JCLGFBQTRCO1FBRmxCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FBWTtRQUNyQixrQkFB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O1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFFbkIsd0JBQXdCO1lBRXhCLE9BQU8sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUksK0JBQStCO1FBQzVELENBQUMsRUFBQyxFQUFFLEdBQUc7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsRUFBSCxDQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOztnQkFwZUYsVUFBVTs7OztnQkFORixVQUFVO2dCQUFWLFVBQVU7Z0JBRVYsYUFBYTs7O2dDQVluQixTQUFTLFNBQUMsWUFBWTs7SUE2ZHpCLGlCQUFDO0NBQUEsQUFyZUQsSUFxZUM7U0FwZVksVUFBVTs7O0lBQ3JCLCtDQUEyRzs7SUFDM0csMkJBQW9COztJQUNwQixpQ0FBdUM7O0lBQ3ZDLG1DQUF3Qjs7SUFDeEIsOEJBQWtCOztJQUNsQiw2QkFBeUI7O0lBQ3pCLG1DQUFtRDs7SUFPbkQsOEJBQWdCOztJQUNoQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7SUFDbEIsOEJBQTBCOztJQUMxQixnQ0FBa0I7O0lBQ2xCLGlDQUE2Qjs7SUFDN0IsK0JBQTZCOztJQUU3QixvQ0FBeUI7Ozs7O0lBUWIsMkJBQXlCOzs7OztJQUNuQywrQkFBNkI7Ozs7O0lBQzdCLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7RWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vIGltcG9ydCB7IHN3aXRjaE1hcCwgbWFwLCB0YWtlV2hpbGUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVyc30gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuLy8gaW1wb3J0IHsgVXBsb2FkT3V0cHV0LCBVcGxvYWRJbnB1dCwgVXBsb2FkRmlsZSwgaHVtYW5pemVCeXRlcywgVXBsb2FkZXJPcHRpb25zLCBVcGxvYWRTdGF0dXMgfSBmcm9tICduZ3gtdXBsb2FkZXInO1xuXG5cbi8vIEBJbmplY3RhYmxlKClcbi8vIGV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcbi8vICAgcHVibGljIGRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWw6IGFueSA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyArICd1cGxvYWRzJyA7XG4vLyAgIGZpbGVzOiBVcGxvYWRGaWxlW107XG4vLyAgIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+O1xuLy8gICBodW1hbml6ZUJ5dGVzOiBGdW5jdGlvbjtcbi8vICAgZHJhZ092ZXI6IGJvb2xlYW47XG4vLyAgIG9wdGlvbnM6IFVwbG9hZGVyT3B0aW9ucztcbi8vICAgQFZpZXdDaGlsZCgnZmlsZUlucHV0MScpIHVwbG9hZGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4vLyAgIC8qQElucHV0KClcbi8vICAgc2V0IGRvbWFpbl9mb3JfZmlsZXVwbG9hZChkb21haW5fZm9yX2ZpbGV1cGxvYWQ6IGFueSkge1xuLy8gICAgIHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCA9IGRvbWFpbl9mb3JfZmlsZXVwbG9hZDtcbi8vICAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsKTtcbi8vICAgfSovXG4vLyAgIHB1YmxpYyBsZW5ndGhpcztcbi8vICAgcHVibGljIHBlcmNlbnRhZ2Vpcztcbi8vICAgcHVibGljIGlucHJvZ3Jlc3M7XG4vLyAgIHB1YmxpYyBwcm9ncmVzczphbnk9W107XG4vLyAgIHB1YmxpYyB1cGxvYWR0eXBlO1xuLy8gICBwdWJsaWMgdXBsb2FkZXJyb3I6YW55PScnO1xuLy8gICAvLyBwdWJsaWMgdXBsb2FkT3V0cHV0dmFsOmFueTtcbi8vICAgZmlsZXNlcnZlcm5hbWU6YW55PVtdO1xuLy8gICAvKkBJbnB1dCgpXG4vLyAgIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xuLy8gICAgIHRoaXMudXBsb2FkT3V0cHV0dmFsID0gdXBsb2FkT3V0cHV0O1xuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLnVwbG9hZE91dHB1dCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcbi8vICAgfSovXG4vLyAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX2h0dHA6IEh0dHBDbGllbnQsXG4vLyAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxuLy8gICAgICAgICAgICAgICApIHtcbi8vICAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbmN1cnJlbmN5OiAxMCwgbWF4VXBsb2FkczogMTAgfTtcbi8vICAgICB0aGlzLmZpbGVzID0gW107IC8vIGxvY2FsIHVwbG9hZGluZyBmaWxlcyBhcnJheVxuLy8gICAgIHRoaXMudXBsb2FkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PigpOyAvLyBpbnB1dCBldmVudHMsIHdlIHVzZSB0aGlzIHRvIGVtaXQgZGF0YSB0byBuZ3gtdXBsb2FkZXJcbi8vICAgICB0aGlzLmh1bWFuaXplQnl0ZXMgPSBodW1hbml6ZUJ5dGVzO1xuLy8gICAgIC8vY29uc29sZS5sb2coJ3RoaXMuZG9tYWluJyk7XG4vLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmRvbWFpbik7XG4vLyAgIH1cbi8vICAgb25VcGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBVcGxvYWRPdXRwdXQsIGFycmF5dmFsdWU6IGFueSwgdXBsb2FkdHlwZWM6IGFueSwgdXBsb2FkcGF0aDogYW55KTogdm9pZCB7XG4vLyAgICAgLy8gdGhpcy51cGxvYWRlcklucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcbi8vICAgICBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhbGxBZGRlZFRvUXVldWUnKSB7XG4vLyAgICAgICBjb25zdCBldmVudDogVXBsb2FkSW5wdXQgPSB7XG4vLyAgICAgICAgIHR5cGU6ICd1cGxvYWRBbGwnLFxuLy8gICAgICAgICB1cmw6ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206NzAzMS91cGxvYWRzJyxcbi8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgICAgIGRhdGE6IHsgcGF0aDogdXBsb2FkcGF0aCB9XG4vLyAgICAgICB9O1xuLy8gICAgICAgdGhpcy51cGxvYWRJbnB1dC5lbWl0KGV2ZW50KTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWRkZWRUb1F1ZXVlJyAmJiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnKSB7XG4vLyAgICAgICBpZiAodXBsb2FkT3V0cHV0LmZpbGUucmVzcG9uc2UgIT0gJycpIHtcbi8vICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuLy8gICAgICAgICB0aGlzLmZpbGVzLnB1c2godXBsb2FkT3V0cHV0LmZpbGUpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcyoqKioqKioqKicpO1xuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICAgICAgdGhpcy5sZW5ndGhpcyA9IHRoaXMuZmlsZXMubGVuZ3RoO1xuLy8gICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xuLy8gICAgICAgfVxuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICd1cGxvYWRpbmcnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbi8vICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5maWxlcy5maW5kSW5kZXgoZmlsZSA9PiB0eXBlb2YgdXBsb2FkT3V0cHV0LmZpbGUgIT09ICd1bmRlZmluZWQnICYmIGZpbGUuaWQgPT09IHVwbG9hZE91dHB1dC5maWxlLmlkKTtcbi8vICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdID0gdXBsb2FkT3V0cHV0LmZpbGU7XG4vLyAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4vLyAgICAgICBpZih0aGlzLmZpbGVzWzBdIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MhPW51bGwpXG4vLyAgICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcz09PT09PT09PT09PT09PT09PScpO1xuLy8gICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3JlbW92ZWQnKSB7XG4vLyAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IFVwbG9hZEZpbGUpID0+IGZpbGUgIT09IHVwbG9hZE91dHB1dC5maWxlKTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ092ZXInKSB7XG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gdHJ1ZTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ091dCcpIHtcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJvcCcpIHtcbi8vICAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coJ2ZpbGVzJyk7XG4vLyAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4vLyAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKSB7XG4vLyAgICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT1udWxsKXRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09MDtcbi8vICAgICAgIHRoaXMuaW5wcm9ncmVzcz10cnVlO1xuLy8gICAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXBsb2FkIHByb2dyZXNzaW5nJyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XG4vLyAgICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID0gKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbi8vICAgICAgIGlmKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09PTEwMCkge1xuLy8gICAgICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPW51bGw7XG4vLyAgICAgICAgIHRoaXMuaW5wcm9ncmVzcz1udWxsO1xuLy8gICAgICAgfVxuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkdHlwZSBpbiBhcGkgc2VydmljZScpO1xuLy8gICAgICAgY29uc29sZS5sb2codXBsb2FkdHlwZWMpO1xuLy8gICAgIH1cbi8vICAgICBpZiAodXBsb2FkdHlwZWM9PSdzaW5nbGUnKXtcbi8vICAgICAgIC8vIHRoaXMuZmlsZXNlcnZlcm5hbWUgPSBbXTtcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXT1bXTtcbi8vICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XG4vLyAgICAgICBpZih0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4vLyAgICAgfVxuLy8gICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnbXVsdGlwbGUnKSB7XG4vLyAgICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc1swXS5yZXNwb25zZScpO1xuLy8gICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzLmxlbmd0aCk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcbi8vICAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTtcbi8vICAgICAgIC8vIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpe1xuLy8gICAgICAgaWYodGhpcy5maWxlcy5sZW5ndGg9PTEpIHtcbi8vICAgICAgICAgaWYodGhpcy5maWxlc1swXSAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZT09bnVsbCApIHtcbi8vICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4vLyAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuLy8gICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9Jyc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgaWYodGhpcy5maWxlc1swXSAhPW51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGUhPW51bGwpe1xuLy8gICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3I9J2Vycm9yIG9jY3VyZWQgb24gdXBsb2FkaW5nICEhISc7XG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICAgIGlmKHRoaXMuZmlsZXMubGVuZ3RoPjEpXG4vLyAgICAgICB7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCdzZGZkc2Y9PT09IGluIG11bHRpcGxlIGxlbmd0aCAnKTtcbi8vICAgICAgICAgZm9yKGxldCBiIGluIHRoaXMuZmlsZXMpe1xuLy8gICAgICAgICAgIGlmKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1tiXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsKSB7XG4vLyAgICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1tiXS5yZXNwb25zZSk7XG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHRoaXMuZmlsZXM9W107XG4vLyAgICAgICB9XG4vLyAgICAgICAvL31cbi8vICAgICB9XG4vLyAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNlcnZlcm5hbWUnKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzZXJ2ZXJuYW1lKTtcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLnVwbG9hZGVycm9yKTtcbi8vICAgICAvL3RoaXMudXBsb2FkZXJzZXJ2aWNlLmZpbGVuYW1ldmFsYzE9dGhpcy5maWxlc2VydmVybmFtZTtcbi8vICAgICAvL1VwbG9hZGVyQ29tcG9uZW50LmZpbGVuYW1ldmFsYzE9ODc7XG4vLyAgICAgLy9jb25zb2xlLmxvZyhjbGFzc3ZhbCk7XG5cbi8vICAgfVxuLy8gICBpc1Rva2VuRXhwaXJlZCgpIHtcblxuLy8gICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XG4vLyAgICAgLy8gY29uc3QgZGVjb2RlZFRva2VuID0gaGVscGVyLmRlY29kZVRva2VuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZF90b2tlbicpKTtcbi8vICAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXG4vLyAgICAgLy8gY29uc3QgaXNSZWZyZXNoVG9rZW5FeHBpcmVkID0gaGVscGVyLmlzVG9rZW5FeHBpcmVkKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpO1xuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcblxuXG5cbi8vICAgfVxuXG4vLyAgIGdldGNsaWVudGlwKCkge1xuXG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG5cbi8vICAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5nZXQoXCJodHRwOi8vaXBpbmZvLmlvLz9mb3JtYXQ9anNvbiZ0b2tlbj05Nzk3YzQyYjkzMDc4YVwiKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cblxuXG4vLyAgIGdldEVuZHBvaW50KGVuZHBvaW50OiBhbnkpIHtcblxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArIGVuZHBvaW50LnNvdXJjZSwge30sIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG5cbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cbi8vICAgZ2V0RGF0YShlbmRwb2ludDogYW55KSB7XG5cbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogJydcbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XG4vLyAgICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xuLy8gICAgIGNvbnNvbGUubG9nKCcnKTtcblxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcblxuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuLy8gICAvLyBnZXREYXRhIGVuZFxuXG4vLyAgIHBvc3REYXRhKGVuZHBvaW50OmFueSwgZGF0YSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBkYXRhLnRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gICBwb3N0RGF0YXdpdGhvdXRUb2tlbihlbmRwb2ludDphbnksIGRhdGEpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyAgIHBvc3Rsb2dpbihlbmRwb2ludDphbnksIGRhdGEpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9IC8vIHBvc3REYXRhIGVuZFxuXG5cblxuXG4vLyAgIHBvc3RTZWFyY2goIGxpbmssdG9rZW4sc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogdG9rZW5cbi8vICAgICAgIH0pXG4vLyAgICAgfTtcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGxpbmspO1xuLy8gICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcbi8vICAgfVxuLy8gcG9zdFNlYXJjaDEoIGxpbmssc291cmNlKSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogc291cmNlLnRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImxpbmtcIik7XG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cblxuXG5cblxuLy8gICBwdXREYXRhKGVuZHBvaW50OmFueSwgZGF0YSwgaWQ6YW55KSB7XG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuLy8gICAgICAgICAnQXV0aG9yaXphdGlvbic6ICcnXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJycpO1xuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnB1dCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSsnLycraWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cblxuXG4vLyAgIGRldGVPbmVEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWQ6ZGF0YS5faWR9XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgICB0b2dnbGVzdGF0dXMoZW5kcG9pbnQ6YW55LCBkYXRhLHRva2VuLHNvdXJjZSkge1xuLy8gICAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgICBjb25zb2xlLmxvZyh0b2tlbik7XG4vLyAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOmRhdGF9XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuLy8gICAgIHJldHVybiByZXN1bHQ7XG4vLyAgIH1cbi8vICAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxuLy8gICAgICAgfSlcbi8vICAgICB9O1xuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4vLyAgICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XG4vLyAgICAgbGV0IGRhdGF2YWw6YW55O1xuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWRzOmRhdGF9XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG4vLyAgICAgdG9nZ2xlc3RhdHVzbWFueShlbmRwb2ludDphbnksIGRhdGEsdmFsLHRva2VuLHNvdXJjZSkge1xuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXG4vLyAgICAgICB9KVxuLy8gICAgIH07XG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XG4vLyAgICAgZGF0YXZhbD17c291cmNlOnNvdXJjZSxkYXRhOntpZHM6ZGF0YSx2YWw6dmFsfX07XG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCsnbWFueScsZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcbi8vICAgICByZXR1cm4gcmVzdWx0O1xuLy8gICB9XG5cblxuXG4vLyAgIHByaXZhdGUgZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQ6IHN0cmluZykge1xuLy8gICAgICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XG4vLyAgIH1cblxuLy8gfVxuXG5cblxuXG5cblxuLyoqKioqKioqKioqKioqKioqKioqKiBBZGRlZCBCeSBIaW1hZHJpIHVzaW5nIExhbWRhIHN0YXJ0ICoqKioqKioqKioqKioqKioqKioqKioqKiovXG5cblxuaW1wb3J0IHsgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAsIG1hcCwgdGFrZVdoaWxlLCBjYXRjaEVycm9yIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBVcGxvYWRPdXRwdXQsIFVwbG9hZElucHV0LCBVcGxvYWRGaWxlLCBodW1hbml6ZUJ5dGVzLCBVcGxvYWRlck9wdGlvbnMsIFVwbG9hZFN0YXR1cyB9IGZyb20gJ25neC11cGxvYWRlcic7XG5pbXBvcnQgeyBDb29raWVTZXJ2aWNlIH0gZnJvbSAnbmd4LWNvb2tpZS1zZXJ2aWNlJztcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSB7XG4gIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2Fkcyc7XG4gIGZpbGVzOiBVcGxvYWRGaWxlW107XG4gIHVwbG9hZElucHV0OiBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+O1xuICBodW1hbml6ZUJ5dGVzOiBGdW5jdGlvbjtcbiAgZHJhZ092ZXI6IGJvb2xlYW47XG4gIG9wdGlvbnM6IFVwbG9hZGVyT3B0aW9ucztcbiAgQFZpZXdDaGlsZCgnZmlsZUlucHV0MScpIHVwbG9hZGVySW5wdXQ6IEVsZW1lbnRSZWY7XG4gIC8qQElucHV0KClcbiAgc2V0IGRvbWFpbl9mb3JfZmlsZXVwbG9hZChkb21haW5fZm9yX2ZpbGV1cGxvYWQ6IGFueSkge1xuICAgIHRoaXMuZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbCA9IGRvbWFpbl9mb3JfZmlsZXVwbG9hZDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5kb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsKTtcbiAgfSovXG4gIHB1YmxpYyBsZW5ndGhpcztcbiAgcHVibGljIHBlcmNlbnRhZ2VpcztcbiAgcHVibGljIGlucHJvZ3Jlc3M7XG4gIHB1YmxpYyBwcm9ncmVzczogYW55ID0gW107XG4gIHB1YmxpYyB1cGxvYWR0eXBlO1xuICBwdWJsaWMgdXBsb2FkZXJyb3I6IGFueSA9ICcnO1xuICBwdWJsaWMgc2VjcmV0a2V5OiBhbnkgPSAnbmEnO1xuICAvLyBwdWJsaWMgdXBsb2FkT3V0cHV0dmFsOmFueTtcbiAgZmlsZXNlcnZlcm5hbWU6IGFueSA9IFtdO1xuXG4gIC8qQElucHV0KClcbiAgc2V0IHVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IGFueSl7XG4gICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XG4gICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkT3V0cHV0Jyk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRPdXRwdXQpO1xuICB9Ki9cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIF9hdXRoSHR0cDogSHR0cENsaWVudCxcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcblxuICApIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbmN1cnJlbmN5OiAxMCwgbWF4VXBsb2FkczogMTAgfTtcbiAgICB0aGlzLmZpbGVzID0gW107IC8vIGxvY2FsIHVwbG9hZGluZyBmaWxlcyBhcnJheVxuICAgIHRoaXMudXBsb2FkSW5wdXQgPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZElucHV0PigpOyAvLyBpbnB1dCBldmVudHMsIHdlIHVzZSB0aGlzIHRvIGVtaXQgZGF0YSB0byBuZ3gtdXBsb2FkZXJcbiAgICB0aGlzLmh1bWFuaXplQnl0ZXMgPSBodW1hbml6ZUJ5dGVzO1xuICAgIGlmICh0aGlzLmNvb2tpZVNlcnZpY2UuY2hlY2soJ3NlY3JldCcpKSB7XG4gICAgICB0aGlzLnNlY3JldGtleSA9IHRoaXMuY29va2llU2VydmljZS5nZXQoJ3NlY3JldCcpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5kb21haW4nKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbik7XG4gIH1cblxuICBvblVwbG9hZE91dHB1dCh1cGxvYWRPdXRwdXQ6IFVwbG9hZE91dHB1dCwgYXJyYXl2YWx1ZTogYW55LCB1cGxvYWR0eXBlYzogYW55LCB1cGxvYWRwYXRoOiBhbnkpOiB2b2lkIHtcbiAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2FsbEFkZGVkVG9RdWV1ZScpIHtcbiAgICAgIGNvbnN0IGV2ZW50OiBVcGxvYWRJbnB1dCA9IHtcbiAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXG4gICAgICAgIHVybDogJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cbiAgICAgIH07XG4gICAgICB0aGlzLnVwbG9hZElucHV0LmVtaXQoZXZlbnQpO1xuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh1cGxvYWRPdXRwdXQuZmlsZS5yZXNwb25zZSAhPSAnJykge1xuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzKioqKioqKioqJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xuICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmaWxlID0+IHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZmlsZS5pZCA9PT0gdXBsb2FkT3V0cHV0LmZpbGUuaWQpO1xuICAgICAgdGhpcy5maWxlc1tpbmRleF0gPSB1cGxvYWRPdXRwdXQuZmlsZTtcbiAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcbiAgICAgIGlmICh0aGlzLmZpbGVzWzBdICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlcz09PT09PT09PT09PT09PT09PScpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3JlbW92ZWQnKSB7XG4gICAgICB0aGlzLmZpbGVzID0gdGhpcy5maWxlcy5maWx0ZXIoKGZpbGU6IFVwbG9hZEZpbGUpID0+IGZpbGUgIT09IHVwbG9hZE91dHB1dC5maWxlKTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ092ZXInKSB7XG4gICAgICB0aGlzLmRyYWdPdmVyID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJhZ091dCcpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJvcCcpIHtcbiAgICAgIHRoaXMuZHJhZ092ZXIgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2ZpbGVzJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgaWYgKHRoaXMuZmlsZXNbMF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID09IG51bGwpIHsgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9IDA7IH1cbiAgICAgIHRoaXMuaW5wcm9ncmVzcyA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygnZmlsZSB1cGxvYWQgcHJvZ3Jlc3NpbmcnKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcbiAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xuICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPT0gMTAwKSB7XG4gICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSBudWxsO1xuICAgICAgICB0aGlzLmlucHJvZ3Jlc3MgPSBudWxsO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkdHlwZSBpbiBhcGkgc2VydmljZScpO1xuICAgICAgY29uc29sZS5sb2codXBsb2FkdHlwZWMpO1xuICAgIH1cbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ3NpbmdsZScpIHtcbiAgICAgIC8vIHRoaXMuZmlsZXNlcnZlcm5hbWUgPSBbXTtcbiAgICAgIGlmICh0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHsgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9IFtdOyB9XG4gICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XG4gICAgICBpZiAodGhpcy5maWxlc1swXS5yZXNwb25zZSAhPSBudWxsKSB7IHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTsgfVxuICAgIH1cbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ211bHRpcGxlJykge1xuICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNbMF0ucmVzcG9uc2UnKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcy5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcyk7XG4gICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB7IHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTsgfVxuICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XG4gICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAodGhpcy5maWxlc1swXSAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZS5lcnJvcl9jb2RlID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XG4gICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3IgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5maWxlc1swXSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UgIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGUgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMudXBsb2FkZXJyb3IgPSAnZXJyb3Igb2NjdXJlZCBvbiB1cGxvYWRpbmcgISEhJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XG4gICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmZpbGVzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UgIT0gbnVsbCAmJiB0aGlzLmZpbGVzW2JdLnJlc3BvbnNlLmVycm9yX2NvZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbGVzID0gW107XG4gICAgICB9XG4gICAgICAvLyB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzZXJ2ZXJuYW1lJyk7XG4gICAgY29uc29sZS5sb2codGhpcy5maWxlc2VydmVybmFtZSk7XG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XG4gICAgLy8gdGhpcy51cGxvYWRlcnNlcnZpY2UuZmlsZW5hbWV2YWxjMT10aGlzLmZpbGVzZXJ2ZXJuYW1lO1xuICAgIC8vIFVwbG9hZGVyQ29tcG9uZW50LmZpbGVuYW1ldmFsYzE9ODc7XG4gICAgLy8gY29uc29sZS5sb2coY2xhc3N2YWwpO1xuXG4gIH1cbiAgaXNUb2tlbkV4cGlyZWQoKSB7XG5cbiAgICAvLyBjb25zdCBoZWxwZXIgPSBuZXcgSnd0SGVscGVyU2VydmljZSgpO1xuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XG4gICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuJyxsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKVxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbiBpc0V4cGlyZWQ6Jyxpc1JlZnJlc2hUb2tlbkV4cGlyZWQpXG5cblxuXG4gIH1cblxuICBnZXRjbGllbnRpcCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5nZXQoJ2h0dHA6Ly9pcGluZm8uaW8vP2Zvcm1hdD1qc29uJnRva2VuPTk3OTdjNDJiOTMwNzhhJykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICBnZXRFbmRwb2ludChlbmRwb2ludDogYW55KSB7XG5cbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246ICcnXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG5cbiAgICAvLyB0aGlzLmlzVG9rZW5FeHBpcmVkKClcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyBlbmRwb2ludC5zb3VyY2UsIHt9LCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGdldERhdGEoZW5kcG9pbnQ6IGFueSkge1xuXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiAnJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4gICAgY29uc29sZS5sb2coJycpO1xuXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgJ2RhdGFsaXN0JywgZW5kcG9pbnQsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgLy8gZ2V0RGF0YSBlbmRcblxuICBwb3N0RGF0YShlbmRwb2ludDogYW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiBkYXRhLnRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zb2xlLmxvZygnaHR0cE9wdGlvbnMnKTtcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHBvc3REYXRhd2l0aG91dFRva2VuKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHBvc3Rsb2dpbihlbmRwb2ludDogYW55LCBkYXRhKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgIH07XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gLy8gcG9zdERhdGEgZW5kXG5cblxuXG5cbiAgcG9zdFNlYXJjaChsaW5rLCB0b2tlbiwgc291cmNlKSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcbiAgICBjb25zb2xlLmxvZyhcImxpbmsgaW4gcG9zdFNlYXJjaFwiKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBjb25zb2xlLmxvZyhzb3VyY2UpOyovXG4gICAgc291cmNlLnNlY3JldCA9IHRoaXMuc2VjcmV0a2V5O1xuICAgIHNvdXJjZS50b2tlbiA9IHRva2VuO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIFxuICBwb3N0U2VhcmNoMShsaW5rLCBzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IHNvdXJjZS50b2tlblxuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coJ2xpbmsnKTtcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QobGluaywgc291cmNlKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuXG5cbiAgcHV0RGF0YShlbmRwb2ludDogYW55LCBkYXRhLCBpZDogYW55KSB7XG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICBBdXRob3JpemF0aW9uOiAnJ1xuICAgICAgfSlcbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKCcnKTtcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wdXQodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCkgKyAnLycgKyBpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cbiAgZGV0ZU9uZURhdGEoZW5kcG9pbnQ6IGFueSwgZGF0YSwgdG9rZW4sIHNvdXJjZSkge1xuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKiBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKHRva2VuKTsqL1xuICAgIGxldCBkYXRhdmFsOiBhbnk7XG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBpZDogZGF0YS5faWQgfTtcbiAgICBkYXRhdmFsLnNlY3JldCA9IHRoaXMuc2VjcmV0a2V5O1xuICAgIGRhdGF2YWwudG9rZW4gPSB0b2tlbjtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsIGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG5cbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxuXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDogYW55LCBkYXRhLCB0b2tlbiwgc291cmNlKSB7XG4gICAgLypjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcbiAgICAgIGNvbnNvbGUubG9nKHNvdXJjZSk7Ki9cblxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICAvKmNvbnNvbGUubG9nKCctLS0tLS0gJyk7XG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XG4gICAgY29uc29sZS5sb2coZGF0YSk7Ki9cbiAgICBsZXQgZGF0YXZhbDogYW55O1xuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgZGF0YSB9O1xuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCwgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OiBhbnksIGRhdGEsIHRva2VuLCBzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpOyovXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcbiAgICBkYXRhdmFsID0geyBzb3VyY2UsIGlkczogZGF0YSB9O1xuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCArICdtYW55JywgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcblxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXG5cbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgdG9nZ2xlc3RhdHVzbWFueShlbmRwb2ludDogYW55LCBkYXRhLCB2YWwsIHRva2VuLCBzb3VyY2UpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXG4gICAgICB9KVxuICAgIH07XG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpOyovXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcbiAgICBkYXRhdmFsID0geyBzb3VyY2UsIGRhdGE6IHsgaWRzOiBkYXRhLCB2YWwgfSB9O1xuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50ICsgJ21hbnknLCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XG4gICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XG4gIH1cbiAgXG4gIHBvc3REYXRhQXBpKGVuZHBvaW50OiBhbnksIGRhdGEpIHtcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIC8vIEF1dGhvcml6YXRpb246IGRhdGEudG9rZW5cbiAgICAgIH0pXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xuICAgIGNvbnNvbGUubG9nKGh0dHBPcHRpb25zKTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcblxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKioqKiogQWRkZWQgQnkgSGltYWRyaSB1c2luZyBMYW1kYSBlbmQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiJdfQ==