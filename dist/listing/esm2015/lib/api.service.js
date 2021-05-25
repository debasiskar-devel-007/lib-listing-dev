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
export class ApiService {
    /*@Input()
      set uploadOutput(uploadOutput: any){
        this.uploadOutputval = uploadOutput;
        console.log('this.uploadOutput');
        console.log(this.uploadOutput);
      }*/
    /**
     * @param {?} _http
     * @param {?} _authHttp
     * @param {?} cookieService
     */
    constructor(_http, _authHttp, cookieService) {
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
    onUploadOutput(uploadOutput, arrayvalue, uploadtypec, uploadpath) {
        // this.uploaderInput.nativeElement.value = '';
        if (uploadOutput.type === 'allAddedToQueue') {
            /** @type {?} */
            const event = {
                type: 'uploadAll',
                url: 'http://developmentapi.audiodeadline.com:7031/uploads',
                method: 'POST',
                data: { path: uploadpath }
            };
            this.uploadInput.emit(event);
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
            const index = this.files.findIndex((/**
             * @param {?} file
             * @return {?}
             */
            file => typeof uploadOutput.file !== 'undefined' && file.id === uploadOutput.file.id));
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
            (file) => file !== uploadOutput.file));
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
                for (const b in this.files) {
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
    }
    /**
     * @return {?}
     */
    isTokenExpired() {
        // const helper = new JwtHelperService();
        // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
        // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
        // console.log('refresh_token',localStorage.getItem('refresh_token'))
        // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
        // console.log('id_token isExpired:',isIdTokenExpired)
        // console.log('refresh_token isExpired:',isRefreshTokenExpired)
    }
    /**
     * @return {?}
     */
    getclientip() {
        console.log('endpoint');
        // this.isTokenExpired()
        /** @type {?} */
        const result = this._http.get('http://ipinfo.io/?format=json&token=9797c42b93078a').pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getEndpoint(endpoint) {
        /** @type {?} */
        const httpOptions = {
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
        const result = this._http.post('' + endpoint.source, {}, httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @return {?}
     */
    getData(endpoint) {
        /** @type {?} */
        const httpOptions = {
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
        const result = this._http.post('' + 'datalist', endpoint, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    // getData end
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postData(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
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
        const result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postDatawithoutToken(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        const result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @return {?}
     */
    postlogin(endpoint, data) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        const result = this._http.post(this.getEndpointUrl(endpoint), JSON.stringify(data), httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    } // postData end
    // postData end
    /**
     * @param {?} link
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    postSearch(link, token, source) {
        /** @type {?} */
        const httpOptions = {
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
        const result = this._http.post(link, source, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} link
     * @param {?} source
     * @return {?}
     */
    postSearch1(link, source) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: source.token
            })
        };
        console.log('------ ');
        console.log('link');
        console.log(link);
        /** @type {?} */
        const result = this._http.post(link, source).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} id
     * @return {?}
     */
    putData(endpoint, data, id) {
        /** @type {?} */
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                Authorization: ''
            })
        };
        console.log('');
        console.log('endpoint');
        console.log(endpoint);
        /** @type {?} */
        const result = this._http.put(this.getEndpointUrl(endpoint) + '/' + id, JSON.stringify(data), httpOptions).pipe(map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteOneData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
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
        let dataval;
        dataval = { source, id: data._id };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        const result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatus(endpoint, data, token, source) {
        /*console.log(endpoint);
          console.log(data);
          console.log(token);
          console.log(source);*/
        /*console.log(endpoint);
              console.log(data);
              console.log(token);
              console.log(source);*/
        /** @type {?} */
        const httpOptions = {
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
        let dataval;
        dataval = { source, data };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        const result = this._http.post(endpoint, dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    deteManyData(endpoint, data, token, source) {
        /** @type {?} */
        const httpOptions = {
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
        let dataval;
        dataval = { source, ids: data };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        const result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @param {?} endpoint
     * @param {?} data
     * @param {?} val
     * @param {?} token
     * @param {?} source
     * @return {?}
     */
    togglestatusmany(endpoint, data, val, token, source) {
        /** @type {?} */
        const httpOptions = {
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
        let dataval;
        dataval = { source, data: { ids: data, val } };
        dataval.secret = this.secretkey;
        dataval.token = token;
        /** @type {?} */
        const result = this._http.post(endpoint + 'many', dataval, httpOptions).pipe(catchError((/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.log('error caught in service');
            console.error(err);
            // Handle the error here
            return throwError(err); // Rethrow it back to component
        })), map((/**
         * @param {?} res
         * @return {?}
         */
        res => res)));
        return result;
    }
    /**
     * @private
     * @param {?} endpoint
     * @return {?}
     */
    getEndpointUrl(endpoint) {
        return '' + endpoint;
    }
}
ApiService.decorators = [
    { type: Injectable }
];
/** @nocollapse */
ApiService.ctorParameters = () => [
    { type: HttpClient },
    { type: HttpClient },
    { type: CookieService }
];
ApiService.propDecorators = {
    uploaderInput: [{ type: ViewChild, args: ['fileInput1',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2FwaS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4WEEsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsVUFBVSxFQUFTLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RixPQUFPLEVBQWEsR0FBRyxFQUFhLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDL0QsT0FBTyxFQUF5QyxhQUFhLEVBQWlDLE1BQU0sY0FBYyxDQUFDO0FBQ25ILE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSWxDLE1BQU0sT0FBTyxVQUFVOzs7Ozs7Ozs7Ozs7SUE4QnJCLFlBQW9CLEtBQWlCLEVBQzNCLFNBQXFCLEVBQ3JCLGFBQTRCO1FBRmxCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDM0IsY0FBUyxHQUFULFNBQVMsQ0FB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QUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQztRQUNwQixPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDOzs7Ozs7SUFJTyxjQUFjLENBQUMsUUFBZ0I7UUFDckMsT0FBTyxFQUFFLEdBQUcsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7OztZQTdjRixVQUFVOzs7O1lBTkYsVUFBVTtZQUFWLFVBQVU7WUFFVixhQUFhOzs7NEJBWW5CLFNBQVMsU0FBQyxZQUFZOzs7O0lBTnZCLCtDQUEyRzs7SUFDM0csMkJBQW9COztJQUNwQixpQ0FBdUM7O0lBQ3ZDLG1DQUF3Qjs7SUFDeEIsOEJBQWtCOztJQUNsQiw2QkFBeUI7O0lBQ3pCLG1DQUFtRDs7SUFPbkQsOEJBQWdCOztJQUNoQixrQ0FBb0I7O0lBQ3BCLGdDQUFrQjs7SUFDbEIsOEJBQTBCOztJQUMxQixnQ0FBa0I7O0lBQ2xCLGlDQUE2Qjs7SUFDN0IsK0JBQTZCOztJQUU3QixvQ0FBeUI7Ozs7O0lBUWIsMkJBQXlCOzs7OztJQUNuQywrQkFBNkI7Ozs7O0lBQzdCLG1DQUFvQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7RWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBJbmplY3RhYmxlLCBJbnB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuLy8gaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnN9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuLy8gaW1wb3J0IHsgVXBsb2FkT3V0cHV0LCBVcGxvYWRJbnB1dCwgVXBsb2FkRmlsZSwgaHVtYW5pemVCeXRlcywgVXBsb2FkZXJPcHRpb25zLCBVcGxvYWRTdGF0dXMgfSBmcm9tICduZ3gtdXBsb2FkZXInO1xyXG5cclxuXHJcbi8vIEBJbmplY3RhYmxlKClcclxuLy8gZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG4vLyAgIHB1YmxpYyBkb21haW5fZm9yX2ZpbGV1cGxvYWRfdmFsOiBhbnkgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycgKyAndXBsb2FkcycgO1xyXG4vLyAgIGZpbGVzOiBVcGxvYWRGaWxlW107XHJcbi8vICAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XHJcbi8vICAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XHJcbi8vICAgZHJhZ092ZXI6IGJvb2xlYW47XHJcbi8vICAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xyXG4vLyAgIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xyXG4vLyAgIC8qQElucHV0KClcclxuLy8gICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XHJcbi8vICAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XHJcbi8vICAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xyXG4vLyAgIH0qL1xyXG4vLyAgIHB1YmxpYyBsZW5ndGhpcztcclxuLy8gICBwdWJsaWMgcGVyY2VudGFnZWlzO1xyXG4vLyAgIHB1YmxpYyBpbnByb2dyZXNzO1xyXG4vLyAgIHB1YmxpYyBwcm9ncmVzczphbnk9W107XHJcbi8vICAgcHVibGljIHVwbG9hZHR5cGU7XHJcbi8vICAgcHVibGljIHVwbG9hZGVycm9yOmFueT0nJztcclxuLy8gICAvLyBwdWJsaWMgdXBsb2FkT3V0cHV0dmFsOmFueTtcclxuLy8gICBmaWxlc2VydmVybmFtZTphbnk9W107XHJcbi8vICAgLypASW5wdXQoKVxyXG4vLyAgIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xyXG4vLyAgICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XHJcbi8vICAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWRPdXRwdXQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcclxuLy8gICB9Ki9cclxuLy8gICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4vLyAgICAgICAgICAgICAgIHByaXZhdGUgX2F1dGhIdHRwOiBIdHRwQ2xpZW50LFxyXG4vLyAgICAgICAgICAgICAgICkge1xyXG4vLyAgICAgdGhpcy5vcHRpb25zID0geyBjb25jdXJyZW5jeTogMTAsIG1heFVwbG9hZHM6IDEwIH07XHJcbi8vICAgICB0aGlzLmZpbGVzID0gW107IC8vIGxvY2FsIHVwbG9hZGluZyBmaWxlcyBhcnJheVxyXG4vLyAgICAgdGhpcy51cGxvYWRJbnB1dCA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkSW5wdXQ+KCk7IC8vIGlucHV0IGV2ZW50cywgd2UgdXNlIHRoaXMgdG8gZW1pdCBkYXRhIHRvIG5neC11cGxvYWRlclxyXG4vLyAgICAgdGhpcy5odW1hbml6ZUJ5dGVzID0gaHVtYW5pemVCeXRlcztcclxuLy8gICAgIC8vY29uc29sZS5sb2coJ3RoaXMuZG9tYWluJyk7XHJcbi8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZG9tYWluKTtcclxuLy8gICB9XHJcbi8vICAgb25VcGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBVcGxvYWRPdXRwdXQsIGFycmF5dmFsdWU6IGFueSwgdXBsb2FkdHlwZWM6IGFueSwgdXBsb2FkcGF0aDogYW55KTogdm9pZCB7XHJcbi8vICAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4vLyAgICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xyXG4vLyAgICAgICBjb25zdCBldmVudDogVXBsb2FkSW5wdXQgPSB7XHJcbi8vICAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXHJcbi8vICAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXHJcbi8vICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbi8vICAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cclxuLy8gICAgICAgfTtcclxuLy8gICAgICAgdGhpcy51cGxvYWRJbnB1dC5lbWl0KGV2ZW50KTtcclxuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuLy8gICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XHJcbi8vICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4vLyAgICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuLy8gICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XHJcbi8vICAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4vLyAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XHJcbi8vICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdID0gdXBsb2FkT3V0cHV0LmZpbGU7XHJcbi8vICAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcclxuLy8gICAgICAgaWYodGhpcy5maWxlc1swXSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzIT1udWxsKVxyXG4vLyAgICAgICAgIHRoaXMucGVyY2VudGFnZWlzID0gdGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2U7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbi8vICAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xyXG4vLyAgICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdmVyJykge1xyXG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gdHJ1ZTtcclxuLy8gICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xyXG4vLyAgICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XHJcbi8vICAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJvcCcpIHtcclxuLy8gICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgY29uc29sZS5sb2coJ2ZpbGVzJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuLy8gICAgIGlmKHRoaXMuZmlsZXNbMF0hPW51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyE9bnVsbCkge1xyXG4vLyAgICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT1udWxsKXRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV09MDtcclxuLy8gICAgICAgdGhpcy5pbnByb2dyZXNzPXRydWU7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKCdmaWxlIHVwbG9hZCBwcm9ncmVzc2luZycpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XHJcbi8vICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSAodGhpcy5maWxlc1swXS5wcm9ncmVzcy5kYXRhLnBlcmNlbnRhZ2UpO1xyXG4vLyAgICAgICBpZih0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPT0xMDApIHtcclxuLy8gICAgICAgICB0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdPW51bGw7XHJcbi8vICAgICAgICAgdGhpcy5pbnByb2dyZXNzPW51bGw7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkdHlwZSBpbiBhcGkgc2VydmljZScpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XHJcbi8vICAgICB9XHJcbi8vICAgICBpZiAodXBsb2FkdHlwZWM9PSdzaW5nbGUnKXtcclxuLy8gICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xyXG4vLyAgICAgICBpZih0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID09IG51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XHJcbi8vICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV09W107XHJcbi8vICAgICAgIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcclxuLy8gICAgIH1cclxuLy8gICAgIGlmICh1cGxvYWR0eXBlYyA9PSAnbXVsdGlwbGUnKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzWzBdLnJlc3BvbnNlJyk7XHJcbi8vICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpO1xyXG4vLyAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzLmxlbmd0aCk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4vLyAgICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XHJcbi8vICAgICAgIC8vIGlmKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UhPW51bGwpe1xyXG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD09MSkge1xyXG4vLyAgICAgICAgIGlmKHRoaXMuZmlsZXNbMF0gJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlLmVycm9yX2NvZGU9PW51bGwgKSB7XHJcbi8vICAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XHJcbi8vICAgICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbi8vICAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPScnO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgICBpZih0aGlzLmZpbGVzWzBdICE9bnVsbCAmJiB0aGlzLmZpbGVzWzBdLnJlc3BvbnNlIT1udWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSE9bnVsbCl7XHJcbi8vICAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yPSdlcnJvciBvY2N1cmVkIG9uIHVwbG9hZGluZyAhISEnO1xyXG4vLyAgICAgICAgIH1cclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBpZih0aGlzLmZpbGVzLmxlbmd0aD4xKVxyXG4vLyAgICAgICB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3NkZmRzZj09PT0gaW4gbXVsdGlwbGUgbGVuZ3RoICcpO1xyXG4vLyAgICAgICAgIGZvcihsZXQgYiBpbiB0aGlzLmZpbGVzKXtcclxuLy8gICAgICAgICAgIGlmKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UhPW51bGwgJiYgdGhpcy5maWxlc1tiXS5yZXNwb25zZS5lcnJvcl9jb2RlPT1udWxsKSB7XHJcbi8vICAgICAgICAgICAgIHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0ucHVzaCh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlKTtcclxuLy8gICAgICAgICAgIH1cclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhpcy5maWxlcz1bXTtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICAvL31cclxuLy8gICAgIH1cclxuLy8gICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzZXJ2ZXJuYW1lJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzZXJ2ZXJuYW1lKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkZXJyb3IpO1xyXG4vLyAgICAgLy90aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XHJcbi8vICAgICAvL1VwbG9hZGVyQ29tcG9uZW50LmZpbGVuYW1ldmFsYzE9ODc7XHJcbi8vICAgICAvL2NvbnNvbGUubG9nKGNsYXNzdmFsKTtcclxuXHJcbi8vICAgfVxyXG4vLyAgIGlzVG9rZW5FeHBpcmVkKCkge1xyXG5cclxuLy8gICAgIC8vIGNvbnN0IGhlbHBlciA9IG5ldyBKd3RIZWxwZXJTZXJ2aWNlKCk7XHJcbi8vICAgICAvLyBjb25zdCBkZWNvZGVkVG9rZW4gPSBoZWxwZXIuZGVjb2RlVG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4vLyAgICAgLy8gdmFyIGlzSWRUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkX3Rva2VuJykpO1xyXG4vLyAgICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4nLGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWZyZXNoX3Rva2VuJykpXHJcbi8vICAgICAvLyBjb25zdCBpc1JlZnJlc2hUb2tlbkV4cGlyZWQgPSBoZWxwZXIuaXNUb2tlbkV4cGlyZWQobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSk7XHJcbi8vICAgICAvLyBjb25zb2xlLmxvZygnaWRfdG9rZW4gaXNFeHBpcmVkOicsaXNJZFRva2VuRXhwaXJlZClcclxuLy8gICAgIC8vIGNvbnNvbGUubG9nKCdyZWZyZXNoX3Rva2VuIGlzRXhwaXJlZDonLGlzUmVmcmVzaFRva2VuRXhwaXJlZClcclxuXHJcblxyXG5cclxuLy8gICB9XHJcblxyXG4vLyAgIGdldGNsaWVudGlwKCkge1xyXG5cclxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG5cclxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAuZ2V0KFwiaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGFcIikucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG5cclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG5cclxuXHJcblxyXG4vLyAgIGdldEVuZHBvaW50KGVuZHBvaW50OiBhbnkpIHtcclxuXHJcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogICdhcHBsaWNhdGlvbi9qc29uJyxcclxuLy8gICAgICAgICAnYWNjZXNzLXRva2VuJzogJydcclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xyXG4vLyAgICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJycpO1xyXG5cclxuLy8gICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCgnJyArIGVuZHBvaW50LnNvdXJjZSwge30sIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG4vLyAgIGdldERhdGEoZW5kcG9pbnQ6IGFueSkge1xyXG5cclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiAnJ1xyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcblxyXG4vLyAgICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgJ2RhdGFsaXN0JywgZW5kcG9pbnQsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcblxyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG4vLyAgIC8vIGdldERhdGEgZW5kXHJcblxyXG4vLyAgIHBvc3REYXRhKGVuZHBvaW50OmFueSwgZGF0YSkge1xyXG4vLyAgICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbi8vICAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbi8vICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IGRhdGEudG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xyXG4vLyAgICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdCh0aGlzLmdldEVuZHBvaW50VXJsKGVuZHBvaW50KSwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuLy8gICBwb3N0RGF0YXdpdGhvdXRUb2tlbihlbmRwb2ludDphbnksIGRhdGEpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJycpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfVxyXG4vLyAgIHBvc3Rsb2dpbihlbmRwb2ludDphbnksIGRhdGEpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAgJ2FwcGxpY2F0aW9uL2pzb24nXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJycpO1xyXG4vLyAgICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuLy8gICAgIHJldHVybiByZXN1bHQ7XHJcbi8vICAgfSAvLyBwb3N0RGF0YSBlbmRcclxuXHJcblxyXG5cclxuXHJcbi8vICAgcG9zdFNlYXJjaCggbGluayx0b2tlbixzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhzb3VyY2UpO1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuLy8gcG9zdFNlYXJjaDEoIGxpbmssc291cmNlKSB7XHJcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiBzb3VyY2UudG9rZW5cclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4vLyAgICAgY29uc29sZS5sb2coXCJsaW5rXCIpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobGluayk7XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGxpbmssIHNvdXJjZSkucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gICBwdXREYXRhKGVuZHBvaW50OmFueSwgZGF0YSwgaWQ6YW55KSB7XHJcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICdBdXRob3JpemF0aW9uJzogJydcclxuLy8gICAgICAgfSlcclxuLy8gICAgIH07XHJcbi8vICAgICBjb25zb2xlLmxvZygnJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpKycvJytpZCwgSlNPTi5zdHJpbmdpZnkoZGF0YSksIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcblxyXG4vLyAgIGRldGVPbmVEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcclxuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWQ6ZGF0YS5faWR9XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuLy8gICAgIHRvZ2dsZXN0YXR1cyhlbmRwb2ludDphbnksIGRhdGEsdG9rZW4sc291cmNlKSB7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuLy8gICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKHRva2VuKTtcclxuLy8gICAgICAgY29uc29sZS5sb2coc291cmNlKTtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcclxuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsZGF0YTpkYXRhfVxyXG4vLyAgICAgdmFyIHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcbi8vICAgZGV0ZU1hbnlEYXRhKGVuZHBvaW50OmFueSwgZGF0YSx0b2tlbixzb3VyY2UpIHtcclxuLy8gICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4vLyAgICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4vLyAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbi8vICAgICAgICAgJ2FjY2Vzcy10b2tlbic6IHRva2VuXHJcbi8vICAgICAgIH0pXHJcbi8vICAgICB9O1xyXG4vLyAgICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuLy8gICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbi8vICAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuLy8gICAgIGxldCBkYXRhdmFsOmFueTtcclxuLy8gICAgIGRhdGF2YWw9e3NvdXJjZTpzb3VyY2UsaWRzOmRhdGF9XHJcbi8vICAgICB2YXIgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50KydtYW55JyxkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4vLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuLy8gICB9XHJcbi8vICAgICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OmFueSwgZGF0YSx2YWwsdG9rZW4sc291cmNlKSB7XHJcbi8vICAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuLy8gICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuLy8gICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4vLyAgICAgICAgICdhY2Nlc3MtdG9rZW4nOiB0b2tlblxyXG4vLyAgICAgICB9KVxyXG4vLyAgICAgfTtcclxuLy8gICAgIGNvbnNvbGUubG9nKCctLS0tLS0gJyk7XHJcbi8vICAgICBjb25zb2xlLmxvZyhcImVuZHBvaW50XCIpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4vLyAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbi8vICAgICBsZXQgZGF0YXZhbDphbnk7XHJcbi8vICAgICBkYXRhdmFsPXtzb3VyY2U6c291cmNlLGRhdGE6e2lkczpkYXRhLHZhbDp2YWx9fTtcclxuLy8gICAgIHZhciByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQrJ21hbnknLGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcbi8vICAgICByZXR1cm4gcmVzdWx0O1xyXG4vLyAgIH1cclxuXHJcblxyXG5cclxuLy8gICBwcml2YXRlIGdldEVuZHBvaW50VXJsKGVuZHBvaW50OiBzdHJpbmcpIHtcclxuLy8gICAgICAgcmV0dXJuICcnICsgZW5kcG9pbnQ7XHJcbi8vICAgfVxyXG5cclxuLy8gfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqIEFkZGVkIEJ5IEhpbWFkcmkgdXNpbmcgTGFtZGEgc3RhcnQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG5pbXBvcnQgeyBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEluamVjdGFibGUsIElucHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgc3dpdGNoTWFwLCBtYXAsIHRha2VXaGlsZSwgY2F0Y2hFcnJvciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFVwbG9hZE91dHB1dCwgVXBsb2FkSW5wdXQsIFVwbG9hZEZpbGUsIGh1bWFuaXplQnl0ZXMsIFVwbG9hZGVyT3B0aW9ucywgVXBsb2FkU3RhdHVzIH0gZnJvbSAnbmd4LXVwbG9hZGVyJztcclxuaW1wb3J0IHsgQ29va2llU2VydmljZSB9IGZyb20gJ25neC1jb29raWUtc2VydmljZSc7XHJcbmltcG9ydCB7IHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcGlTZXJ2aWNlIHtcclxuICBwdWJsaWMgZG9tYWluX2Zvcl9maWxldXBsb2FkX3ZhbDogYW55ID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTo3MDMxL3VwbG9hZHMnICsgJ3VwbG9hZHMnO1xyXG4gIGZpbGVzOiBVcGxvYWRGaWxlW107XHJcbiAgdXBsb2FkSW5wdXQ6IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD47XHJcbiAgaHVtYW5pemVCeXRlczogRnVuY3Rpb247XHJcbiAgZHJhZ092ZXI6IGJvb2xlYW47XHJcbiAgb3B0aW9uczogVXBsb2FkZXJPcHRpb25zO1xyXG4gIEBWaWV3Q2hpbGQoJ2ZpbGVJbnB1dDEnKSB1cGxvYWRlcklucHV0OiBFbGVtZW50UmVmO1xyXG4gIC8qQElucHV0KClcclxuICBzZXQgZG9tYWluX2Zvcl9maWxldXBsb2FkKGRvbWFpbl9mb3JfZmlsZXVwbG9hZDogYW55KSB7XHJcbiAgICB0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwgPSBkb21haW5fZm9yX2ZpbGV1cGxvYWQ7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcy5za2lwdmFsJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmRvbWFpbl9mb3JfZmlsZXVwbG9hZF92YWwpO1xyXG4gIH0qL1xyXG4gIHB1YmxpYyBsZW5ndGhpcztcclxuICBwdWJsaWMgcGVyY2VudGFnZWlzO1xyXG4gIHB1YmxpYyBpbnByb2dyZXNzO1xyXG4gIHB1YmxpYyBwcm9ncmVzczogYW55ID0gW107XHJcbiAgcHVibGljIHVwbG9hZHR5cGU7XHJcbiAgcHVibGljIHVwbG9hZGVycm9yOiBhbnkgPSAnJztcclxuICBwdWJsaWMgc2VjcmV0a2V5OiBhbnkgPSAnbmEnO1xyXG4gIC8vIHB1YmxpYyB1cGxvYWRPdXRwdXR2YWw6YW55O1xyXG4gIGZpbGVzZXJ2ZXJuYW1lOiBhbnkgPSBbXTtcclxuXHJcbiAgLypASW5wdXQoKVxyXG4gIHNldCB1cGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBhbnkpe1xyXG4gICAgdGhpcy51cGxvYWRPdXRwdXR2YWwgPSB1cGxvYWRPdXRwdXQ7XHJcbiAgICBjb25zb2xlLmxvZygndGhpcy51cGxvYWRPdXRwdXQnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMudXBsb2FkT3V0cHV0KTtcclxuICB9Ki9cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9odHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBfYXV0aEh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGNvb2tpZVNlcnZpY2U6IENvb2tpZVNlcnZpY2VcclxuXHJcbiAgKSB7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSB7IGNvbmN1cnJlbmN5OiAxMCwgbWF4VXBsb2FkczogMTAgfTtcclxuICAgIHRoaXMuZmlsZXMgPSBbXTsgLy8gbG9jYWwgdXBsb2FkaW5nIGZpbGVzIGFycmF5XHJcbiAgICB0aGlzLnVwbG9hZElucHV0ID0gbmV3IEV2ZW50RW1pdHRlcjxVcGxvYWRJbnB1dD4oKTsgLy8gaW5wdXQgZXZlbnRzLCB3ZSB1c2UgdGhpcyB0byBlbWl0IGRhdGEgdG8gbmd4LXVwbG9hZGVyXHJcbiAgICB0aGlzLmh1bWFuaXplQnl0ZXMgPSBodW1hbml6ZUJ5dGVzO1xyXG4gICAgaWYgKHRoaXMuY29va2llU2VydmljZS5jaGVjaygnc2VjcmV0JykpIHtcclxuICAgICAgdGhpcy5zZWNyZXRrZXkgPSB0aGlzLmNvb2tpZVNlcnZpY2UuZ2V0KCdzZWNyZXQnKTtcclxuICAgIH1cclxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmRvbWFpbicpO1xyXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kb21haW4pO1xyXG4gIH1cclxuXHJcbiAgb25VcGxvYWRPdXRwdXQodXBsb2FkT3V0cHV0OiBVcGxvYWRPdXRwdXQsIGFycmF5dmFsdWU6IGFueSwgdXBsb2FkdHlwZWM6IGFueSwgdXBsb2FkcGF0aDogYW55KTogdm9pZCB7XHJcbiAgICAvLyB0aGlzLnVwbG9hZGVySW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnYWxsQWRkZWRUb1F1ZXVlJykge1xyXG4gICAgICBjb25zdCBldmVudDogVXBsb2FkSW5wdXQgPSB7XHJcbiAgICAgICAgdHlwZTogJ3VwbG9hZEFsbCcsXHJcbiAgICAgICAgdXJsOiAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjcwMzEvdXBsb2FkcycsXHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgZGF0YTogeyBwYXRoOiB1cGxvYWRwYXRoIH1cclxuICAgICAgfTtcclxuICAgICAgdGhpcy51cGxvYWRJbnB1dC5lbWl0KGV2ZW50KTtcclxuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdhZGRlZFRvUXVldWUnICYmIHR5cGVvZiB1cGxvYWRPdXRwdXQuZmlsZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgaWYgKHVwbG9hZE91dHB1dC5maWxlLnJlc3BvbnNlICE9ICcnKSB7XHJcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZmlsZXMucHVzaCh1cGxvYWRPdXRwdXQuZmlsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXMqKioqKioqKionKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgICAgICB0aGlzLmxlbmd0aGlzID0gdGhpcy5maWxlcy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5wZXJjZW50YWdlaXMgPSB0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3VwbG9hZGluZycgJiYgdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuZmlsZXMuZmluZEluZGV4KGZpbGUgPT4gdHlwZW9mIHVwbG9hZE91dHB1dC5maWxlICE9PSAndW5kZWZpbmVkJyAmJiBmaWxlLmlkID09PSB1cGxvYWRPdXRwdXQuZmlsZS5pZCk7XHJcbiAgICAgIHRoaXMuZmlsZXNbaW5kZXhdID0gdXBsb2FkT3V0cHV0LmZpbGU7XHJcbiAgICAgIHRoaXMubGVuZ3RoaXMgPSB0aGlzLmZpbGVzLmxlbmd0aDtcclxuICAgICAgaWYgKHRoaXMuZmlsZXNbMF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVzWzBdLnByb2dyZXNzICE9IG51bGwpIHtcclxuICAgICAgICB0aGlzLnBlcmNlbnRhZ2VpcyA9IHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVzPT09PT09PT09PT09PT09PT09Jyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXMpO1xyXG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ3JlbW92ZWQnKSB7XHJcbiAgICAgIHRoaXMuZmlsZXMgPSB0aGlzLmZpbGVzLmZpbHRlcigoZmlsZTogVXBsb2FkRmlsZSkgPT4gZmlsZSAhPT0gdXBsb2FkT3V0cHV0LmZpbGUpO1xyXG4gICAgfSBlbHNlIGlmICh1cGxvYWRPdXRwdXQudHlwZSA9PT0gJ2RyYWdPdmVyJykge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyID0gdHJ1ZTtcclxuICAgIH0gZWxzZSBpZiAodXBsb2FkT3V0cHV0LnR5cGUgPT09ICdkcmFnT3V0Jykge1xyXG4gICAgICB0aGlzLmRyYWdPdmVyID0gZmFsc2U7XHJcbiAgICB9IGVsc2UgaWYgKHVwbG9hZE91dHB1dC50eXBlID09PSAnZHJvcCcpIHtcclxuICAgICAgdGhpcy5kcmFnT3ZlciA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ2ZpbGVzJyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgIGlmICh0aGlzLmZpbGVzWzBdICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5wcm9ncmVzcyAhPSBudWxsKSB7XHJcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID09IG51bGwpIHsgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9IDA7IH1cclxuICAgICAgdGhpcy5pbnByb2dyZXNzID0gdHJ1ZTtcclxuICAgICAgY29uc29sZS5sb2coJ2ZpbGUgdXBsb2FkIHByb2dyZXNzaW5nJyk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNbMF0ucHJvZ3Jlc3MuZGF0YS5wZXJjZW50YWdlKTtcclxuICAgICAgdGhpcy5wcm9ncmVzc1thcnJheXZhbHVlXSA9ICh0aGlzLmZpbGVzWzBdLnByb2dyZXNzLmRhdGEucGVyY2VudGFnZSk7XHJcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzW2FycmF5dmFsdWVdID09IDEwMCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3NbYXJyYXl2YWx1ZV0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5wcm9ncmVzcyA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ3RoaXMudXBsb2FkdHlwZSBpbiBhcGkgc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1cGxvYWR0eXBlYyk7XHJcbiAgICB9XHJcbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ3NpbmdsZScpIHtcclxuICAgICAgLy8gdGhpcy5maWxlc2VydmVybmFtZSA9IFtdO1xyXG4gICAgICBpZiAodGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXSA9PSBudWxsKSB7IHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPSBbXTsgfVxyXG4gICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107XHJcbiAgICAgIGlmICh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlICE9IG51bGwpIHsgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UpOyB9XHJcbiAgICB9XHJcbiAgICBpZiAodXBsb2FkdHlwZWMgPT0gJ211bHRpcGxlJykge1xyXG4gICAgICBjb25zb2xlLmxvZygndGhpcy5maWxlc1swXS5yZXNwb25zZScpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVzWzBdLnJlc3BvbnNlKTtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5maWxlcy5sZW5ndGgpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVzKTtcclxuICAgICAgaWYgKHRoaXMuZmlsZXNlcnZlcm5hbWVbYXJyYXl2YWx1ZV0gPT0gbnVsbCkgeyB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdID0gW107IH1cclxuICAgICAgLy8gaWYodGhpcy5maWxlc1swXS5yZXNwb25zZSE9bnVsbCl7XHJcbiAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZXNbMF0gJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmZpbGVzZXJ2ZXJuYW1lW2FycmF5dmFsdWVdLnB1c2godGhpcy5maWxlc1swXS5yZXNwb25zZSk7XHJcbiAgICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yID0gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpbGVzWzBdICE9IG51bGwgJiYgdGhpcy5maWxlc1swXS5yZXNwb25zZSAhPSBudWxsICYmIHRoaXMuZmlsZXNbMF0ucmVzcG9uc2UuZXJyb3JfY29kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLnVwbG9hZGVycm9yID0gJ2Vycm9yIG9jY3VyZWQgb24gdXBsb2FkaW5nICEhISc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmZpbGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc2RmZHNmPT09PSBpbiBtdWx0aXBsZSBsZW5ndGggJyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuZmlsZXMpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2JdLnJlc3BvbnNlICE9IG51bGwgJiYgdGhpcy5maWxlc1tiXS5yZXNwb25zZS5lcnJvcl9jb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlc2VydmVybmFtZVthcnJheXZhbHVlXS5wdXNoKHRoaXMuZmlsZXNbYl0ucmVzcG9uc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgIH1cclxuICAgICAgLy8gfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZXNlcnZlcm5hbWUnKTtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZXNlcnZlcm5hbWUpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy51cGxvYWRlcnJvcik7XHJcbiAgICAvLyB0aGlzLnVwbG9hZGVyc2VydmljZS5maWxlbmFtZXZhbGMxPXRoaXMuZmlsZXNlcnZlcm5hbWU7XHJcbiAgICAvLyBVcGxvYWRlckNvbXBvbmVudC5maWxlbmFtZXZhbGMxPTg3O1xyXG4gICAgLy8gY29uc29sZS5sb2coY2xhc3N2YWwpO1xyXG5cclxuICB9XHJcbiAgaXNUb2tlbkV4cGlyZWQoKSB7XHJcblxyXG4gICAgLy8gY29uc3QgaGVscGVyID0gbmV3IEp3dEhlbHBlclNlcnZpY2UoKTtcclxuICAgIC8vIGNvbnN0IGRlY29kZWRUb2tlbiA9IGhlbHBlci5kZWNvZGVUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbiAgICAvLyB2YXIgaXNJZFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRfdG9rZW4nKSk7XHJcbiAgICAvLyBjb25zb2xlLmxvZygncmVmcmVzaF90b2tlbicsbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlZnJlc2hfdG9rZW4nKSlcclxuICAgIC8vIGNvbnN0IGlzUmVmcmVzaFRva2VuRXhwaXJlZCA9IGhlbHBlci5pc1Rva2VuRXhwaXJlZChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncmVmcmVzaF90b2tlbicpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKCdpZF90b2tlbiBpc0V4cGlyZWQ6Jyxpc0lkVG9rZW5FeHBpcmVkKVxyXG4gICAgLy8gY29uc29sZS5sb2coJ3JlZnJlc2hfdG9rZW4gaXNFeHBpcmVkOicsaXNSZWZyZXNoVG9rZW5FeHBpcmVkKVxyXG5cclxuXHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Y2xpZW50aXAoKSB7XHJcblxyXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcblxyXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLmdldCgnaHR0cDovL2lwaW5mby5pby8/Zm9ybWF0PWpzb24mdG9rZW49OTc5N2M0MmI5MzA3OGEnKS5waXBlKG1hcChyZXMgPT4gcmVzKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgZ2V0RW5kcG9pbnQoZW5kcG9pbnQ6IGFueSkge1xyXG5cclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJydcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xyXG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xyXG4gICAgY29uc29sZS5sb2coJycpO1xyXG5cclxuICAgIC8vIHRoaXMuaXNUb2tlbkV4cGlyZWQoKVxyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KCcnICsgZW5kcG9pbnQuc291cmNlLCB7fSwgaHR0cE9wdGlvbnMpLnBpcGUobWFwKHJlcyA9PiByZXMpKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0YShlbmRwb2ludDogYW55KSB7XHJcblxyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiAnJ1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc29sZS5sb2coJ2h0dHBPcHRpb25zJyk7XHJcbiAgICBjb25zb2xlLmxvZyhodHRwT3B0aW9ucyk7XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcblxyXG4gICAgLy8gdGhpcy5pc1Rva2VuRXhwaXJlZCgpXHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoJycgKyAnZGF0YWxpc3QnLCBlbmRwb2ludCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICAvLyBnZXREYXRhIGVuZFxyXG5cclxuICBwb3N0RGF0YShlbmRwb2ludDogYW55LCBkYXRhKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IGRhdGEudG9rZW5cclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKCdodHRwT3B0aW9ucycpO1xyXG4gICAgY29uc29sZS5sb2coaHR0cE9wdGlvbnMpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbiAgcG9zdERhdGF3aXRob3V0VG9rZW4oZW5kcG9pbnQ6IGFueSwgZGF0YSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKCcnKTtcclxuICAgIGNvbnNvbGUubG9nKCdlbmRwb2ludCcpO1xyXG4gICAgY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpLCBKU09OLnN0cmluZ2lmeShkYXRhKSwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIHBvc3Rsb2dpbihlbmRwb2ludDogYW55LCBkYXRhKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coJycpO1xyXG4gICAgY29uc29sZS5sb2coJ2VuZHBvaW50Jyk7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QodGhpcy5nZXRFbmRwb2ludFVybChlbmRwb2ludCksIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0gLy8gcG9zdERhdGEgZW5kXHJcblxyXG5cclxuXHJcblxyXG4gIHBvc3RTZWFyY2gobGluaywgdG9rZW4sIHNvdXJjZSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuICAgIGNvbnNvbGUubG9nKFwibGluayBpbiBwb3N0U2VhcmNoXCIpO1xyXG4gICAgY29uc29sZS5sb2cobGluayk7XHJcbiAgICBjb25zb2xlLmxvZyhzb3VyY2UpOyovXHJcbiAgICBzb3VyY2Uuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XHJcbiAgICBzb3VyY2UudG9rZW4gPSB0b2tlbjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XHJcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICBcclxuICBwb3N0U2VhcmNoMShsaW5rLCBzb3VyY2UpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogc291cmNlLnRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuICAgIGNvbnNvbGUubG9nKCdsaW5rJyk7XHJcbiAgICBjb25zb2xlLmxvZyhsaW5rKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChsaW5rLCBzb3VyY2UpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICBwdXREYXRhKGVuZHBvaW50OiBhbnksIGRhdGEsIGlkOiBhbnkpIHtcclxuICAgIGNvbnN0IGh0dHBPcHRpb25zID0ge1xyXG4gICAgICBoZWFkZXJzOiBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgQXV0aG9yaXphdGlvbjogJydcclxuICAgICAgfSlcclxuICAgIH07XHJcbiAgICBjb25zb2xlLmxvZygnJyk7XHJcbiAgICBjb25zb2xlLmxvZygnZW5kcG9pbnQnKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucHV0KHRoaXMuZ2V0RW5kcG9pbnRVcmwoZW5kcG9pbnQpICsgJy8nICsgaWQsIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBodHRwT3B0aW9ucykucGlwZShtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuICBkZXRlT25lRGF0YShlbmRwb2ludDogYW55LCBkYXRhLCB0b2tlbiwgc291cmNlKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgLyogY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIGNvbnNvbGUubG9nKHRva2VuKTsqL1xyXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcclxuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgaWQ6IGRhdGEuX2lkIH07XHJcbiAgICBkYXRhdmFsLnNlY3JldCA9IHRoaXMuc2VjcmV0a2V5O1xyXG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xyXG4gICAgY29uc3QgcmVzdWx0ID0gdGhpcy5faHR0cC5wb3N0KGVuZHBvaW50LCBkYXRhdmFsLCBodHRwT3B0aW9ucykucGlwZShjYXRjaEVycm9yKChlcnIpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coJ2Vycm9yIGNhdWdodCBpbiBzZXJ2aWNlJyk7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuXHJcbiAgICAgIC8vIEhhbmRsZSB0aGUgZXJyb3IgaGVyZVxyXG5cclxuICAgICAgcmV0dXJuIHRocm93RXJyb3IoZXJyKTsgICAgLy8gUmV0aHJvdyBpdCBiYWNrIHRvIGNvbXBvbmVudFxyXG4gICAgfSksIG1hcChyZXMgPT4gcmVzKSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlc3RhdHVzKGVuZHBvaW50OiBhbnksIGRhdGEsIHRva2VuLCBzb3VyY2UpIHtcclxuICAgIC8qY29uc29sZS5sb2coZW5kcG9pbnQpO1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgY29uc29sZS5sb2codG9rZW4pO1xyXG4gICAgICBjb25zb2xlLmxvZyhzb3VyY2UpOyovXHJcblxyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsqL1xyXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcclxuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgZGF0YSB9O1xyXG4gICAgZGF0YXZhbC5zZWNyZXQgPSB0aGlzLnNlY3JldGtleTtcclxuICAgIGRhdGF2YWwudG9rZW4gPSB0b2tlbjtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCwgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG4gIGRldGVNYW55RGF0YShlbmRwb2ludDogYW55LCBkYXRhLCB0b2tlbiwgc291cmNlKSB7XHJcbiAgICBjb25zdCBodHRwT3B0aW9ucyA9IHtcclxuICAgICAgaGVhZGVyczogbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuXHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG4gICAgLypjb25zb2xlLmxvZygnLS0tLS0tICcpO1xyXG4gICAgY29uc29sZS5sb2coXCJlbmRwb2ludFwiKTtcclxuICAgIGNvbnNvbGUubG9nKGVuZHBvaW50KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpOyovXHJcbiAgICBsZXQgZGF0YXZhbDogYW55O1xyXG4gICAgZGF0YXZhbCA9IHsgc291cmNlLCBpZHM6IGRhdGEgfTtcclxuICAgIGRhdGF2YWwuc2VjcmV0ID0gdGhpcy5zZWNyZXRrZXk7XHJcbiAgICBkYXRhdmFsLnRva2VuID0gdG9rZW47XHJcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLl9odHRwLnBvc3QoZW5kcG9pbnQgKyAnbWFueScsIGRhdGF2YWwsIGh0dHBPcHRpb25zKS5waXBlKGNhdGNoRXJyb3IoKGVycikgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZygnZXJyb3IgY2F1Z2h0IGluIHNlcnZpY2UnKTtcclxuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG5cclxuICAgICAgLy8gSGFuZGxlIHRoZSBlcnJvciBoZXJlXHJcblxyXG4gICAgICByZXR1cm4gdGhyb3dFcnJvcihlcnIpOyAgICAvLyBSZXRocm93IGl0IGJhY2sgdG8gY29tcG9uZW50XHJcbiAgICB9KSwgbWFwKHJlcyA9PiByZXMpKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVzdGF0dXNtYW55KGVuZHBvaW50OiBhbnksIGRhdGEsIHZhbCwgdG9rZW4sIHNvdXJjZSkge1xyXG4gICAgY29uc3QgaHR0cE9wdGlvbnMgPSB7XHJcbiAgICAgIGhlYWRlcnM6IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlblxyXG4gICAgICB9KVxyXG4gICAgfTtcclxuICAgIC8qY29uc29sZS5sb2coJy0tLS0tLSAnKTtcclxuICAgIGNvbnNvbGUubG9nKFwiZW5kcG9pbnRcIik7XHJcbiAgICBjb25zb2xlLmxvZyhlbmRwb2ludCk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKTsqL1xyXG4gICAgbGV0IGRhdGF2YWw6IGFueTtcclxuICAgIGRhdGF2YWwgPSB7IHNvdXJjZSwgZGF0YTogeyBpZHM6IGRhdGEsIHZhbCB9IH07XHJcbiAgICBkYXRhdmFsLnNlY3JldCA9IHRoaXMuc2VjcmV0a2V5O1xyXG4gICAgZGF0YXZhbC50b2tlbiA9IHRva2VuO1xyXG5cclxuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuX2h0dHAucG9zdChlbmRwb2ludCArICdtYW55JywgZGF0YXZhbCwgaHR0cE9wdGlvbnMpLnBpcGUoY2F0Y2hFcnJvcigoZXJyKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBjYXVnaHQgaW4gc2VydmljZScpO1xyXG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcblxyXG4gICAgICAvLyBIYW5kbGUgdGhlIGVycm9yIGhlcmVcclxuXHJcbiAgICAgIHJldHVybiB0aHJvd0Vycm9yKGVycik7ICAgIC8vIFJldGhyb3cgaXQgYmFjayB0byBjb21wb25lbnRcclxuICAgIH0pLCBtYXAocmVzID0+IHJlcykpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgcHJpdmF0ZSBnZXRFbmRwb2ludFVybChlbmRwb2ludDogc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gJycgKyBlbmRwb2ludDtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKiogQWRkZWQgQnkgSGltYWRyaSB1c2luZyBMYW1kYSBlbmQgKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuIl19