/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { SnackbarComponent } from '../listing.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
// import {MatSnackBar} from "@angular/material/snack-bar";
var ShowformComponent = /** @class */ (function () {
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
        this.onFormFieldChange = new EventEmitter();
        this.imageChangedEvent = '';
        this.croppedImage = '';
    }
    Object.defineProperty(ShowformComponent.prototype, "formdata", {
        set: /**
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
        // console.log('in triggerevents', val);
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
        // let apiBaseURL=""
        // this.imageChangedEvent = e;
        /** @type {?} */
        var list = document.getElementById('list');
        /** @type {?} */
        var apiBaseURL = 'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev';
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
                                    setTimeout((/**
                                     * @return {?}
                                     */
                                    function () {
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
            /** @type {?} */
            var c = parseInt(y) * 500;
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
            /** @type {?} */
            var c = parseInt(y) * 500;
            this.deletefilemultiple(val, this.filearray[val.name][y], y);
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
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
                file.fileservername = val.prefix + file.name.split(" ").join("");
                // console.log(file.type,'file.type')
                // temploader = null;
                // var uploadedFileNode = document.createElement('div');
                // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
                // list.appendChild(uploadedFileNode);
            }));
            // });
        });
        // console.log('file type', file, typeof (file));
        /** @type {?} */
        var ftype = typeof (file);
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
        // console.log('val',val);
        // console.log(val.name);
        /** @type {?} */
        var source = {};
        /** @type {?} */
        var file = this.filearray[val.name];
        source.file = val.prefix + file.name;
        source.path = val.path;
        source.bucket = val.bucket;
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
        /** @type {?} */
        var source = {};
        /** @type {?} */
        var file = this.filearray[val.name][index];
        this.filecount[val.name]--;
        source.file = val.prefix + file.name;
        source.path = val.path;
        source.bucket = val.bucket;
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
            _loop_2(n);
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
        console.log(vals, fields);
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
        { type: Component, args: [{
                    selector: 'lib-showform',
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                visibility_off\n                            </span>\n\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" [rows]=\"fields.rows?fields.rows:6\"\n                            [cols]=\"fields.cols?fields.cols:50\" [formControlName]=\"fields.name\"\n                            (change)=\"inputblur(fields.name)\">\n  </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                        <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                        </ckeditor>\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n\n\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\">Drop files here.\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n                            </div>\n\n\n\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\n                                [aspectRatio]=\"4 / 3\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\"\n                                (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n\n                            <img [src]=\"croppedImage\" />\n\n\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n                                            image\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                            picture_as_pdf\n                                        </span>\n\n                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                            movie_filter\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                            description\n                                        </span>\n                                        <span\n                                            class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                        <br />\n                                        <span\n                                            class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button\n                                                (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n\n                                </ng-container>\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple!=null  && fields.multiple==true\">\n                                    <ng-container *ngFor=\"let files of filearray[fields.name]; let fi=index; \">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <span *ngIf=\"files.uploaded==1\"\n                                                class=\"material-icons fileuploadcompleteicon\">\n                                                cloud_done\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n                                                image\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                description\n                                            </span>\n\n\n                                            <span class=\"fileuploadednameclass\">{{files.name}}</span>\n                                            <br />\n                                            <span class=\"fileuploadedtypeclass\">{{files.type}}</span>\n\n                                            <div class=\"actionbtndiv\">\n\n                                                <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                    mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                    Upload\n                                                </mat-chip>\n                                                <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                    mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                    Delete </mat-chip>\n                                            </div>\n\n                                            <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                    [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                </mat-progress-bar>\n                                            </section>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name]!=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}"]
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
        onFormFieldChange: [{ type: Output }]
    };
    return ShowformComponent;
}());
export { ShowformComponent };
if (false) {
    /** @type {?} */
    ShowformComponent.prototype.dateflag;
    /** @type {?} */
    ShowformComponent.prototype.PasswordVal;
    /** @type {?} */
    ShowformComponent.prototype.formGroup;
    /** @type {?} */
    ShowformComponent.prototype.titleAlert;
    /** @type {?} */
    ShowformComponent.prototype.post;
    /** @type {?} */
    ShowformComponent.prototype.showform;
    /** @type {?} */
    ShowformComponent.prototype.loading;
    /** @type {?} */
    ShowformComponent.prototype.formfieldrefreshval;
    /** @type {?} */
    ShowformComponent.prototype.formdataval;
    /** @type {?} */
    ShowformComponent.prototype.formfieldrefreshdataval;
    /** @type {?} */
    ShowformComponent.prototype.filerfielddata;
    /** @type {?} */
    ShowformComponent.prototype.autocompletefiledvalue;
    /** @type {?} */
    ShowformComponent.prototype.filearray;
    /** @type {?} */
    ShowformComponent.prototype.filecount;
    /** @type {?} */
    ShowformComponent.prototype.currentautocomplete;
    /** @type {?} */
    ShowformComponent.prototype.fieldloading;
    /** @type {?} */
    ShowformComponent.prototype.isPasswordVisible;
    /** @type {?} */
    ShowformComponent.prototype.color;
    /** @type {?} */
    ShowformComponent.prototype.mode;
    /** @type {?} */
    ShowformComponent.prototype.value;
    /** @type {?} */
    ShowformComponent.prototype.bufferValue;
    /** @type {?} */
    ShowformComponent.prototype.onFormFieldChange;
    /** @type {?} */
    ShowformComponent.prototype.imageChangedEvent;
    /** @type {?} */
    ShowformComponent.prototype.croppedImage;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.formBuilder;
    /** @type {?} */
    ShowformComponent.prototype._apiService;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype._snackBar;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ShowformComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhFLE9BQU8sRUFBc0IsV0FBVyxFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRTlGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekM7SUEyQkUsMkJBQW9CLFdBQXdCLEVBQVMsV0FBdUIsRUFBVSxTQUFzQixFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUVsSyx1REFBdUQ7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7O1FBSDdKLGFBQVEsR0FBUSxLQUFLLENBQUM7UUFDdEIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7UUFZN0IsZUFBVSxHQUFHLHdCQUF3QixDQUFDO1FBQ3RDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsd0JB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LENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFjLEVBQUU7NEJBQ3BFLE9BQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFLLFlBQVksQ0FBQyxDQUFDO3lCQUNqRDt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTs0QkFDL0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUM3Rjt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTs0QkFDakUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUMvRjt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTs0QkFDM0QsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO3lCQUN6Rjt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFB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QUFRLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O2dCQUlyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsb0NBQW9DO1lBQ3BDLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUN2SixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7OzRCQVF0SCxLQUFLLEdBQVEsRUFBRTt3QkFDckIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQzt3QkFDdEYsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNqRCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFDbkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUM1RTtpQkFDRjtnQkFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFOzt3QkFDckksUUFBUSxHQUFRLEVBQUU7b0JBQ3hCLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDL0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7OztnQ0FRNUgsS0FBSyxHQUFRLEVBQUU7NEJBQ3JCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7NEJBQ3pGLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFD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LEtBQUs7b0NBMENMLE1BQU07O0lBb21DVCx3QkFBQztDQUFBLEFBOXBDRCxJQThwQ0M7U0F6cENZLGlCQUFpQjs7O0lBbUI1QixxQ0FBNkI7O0lBQzdCLHdDQUE2Qjs7SUFXN0Isc0NBQXFCOztJQUNyQix1Q0FBc0M7O0lBQ3RDLGlDQUFlOztJQUNmLHFDQUFpQjs7SUFDakIsb0NBQWdCOztJQUNoQixnREFBNEI7O0lBQzVCLHdDQUFzQjs7SUFDdEIsb0RBQWtDOztJQUNsQywyQ0FBeUI7O0lBQ3pCLG1EQUFpQzs7SUFDakMsc0NBQW9COztJQUNwQixzQ0FBb0I7O0lBQ3BCLGdEQUE4Qjs7SUFDOUIseUNBQXVCOztJQUN2Qiw4Q0FBa0M7O0lBSWxDLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7O0lBQ2pCLDhDQUFzRDs7SUFJdEQsOENBQTRCOztJQUM1Qix5Q0FBdUI7Ozs7O0lBMmtDckIsK0JBQXNCOzs7OztJQS9tQ1osd0NBQWdDOztJQUFFLHdDQUE4Qjs7Ozs7SUFBRSxzQ0FBOEI7Ozs7O0lBQUUsbUNBQXNCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlybWRpYWxvZywgU25hY2tiYXJDb21wb25lbnQgfSBmcm9tICcuLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50IH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuLy8gaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNob3dmb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3dmb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hvd2Zvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3dmb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc2V0IGZvcm1kYXRhKGZvcm1kYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1kYXRhdmFsID0gZm9ybWRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2hkYXRhKGZvcm1maWVsZHJlZnJlc2hkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsID0gZm9ybWZpZWxkcmVmcmVzaGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2goZm9ybWZpZWxkcmVmcmVzaDogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNodmFsID0gZm9ybWZpZWxkcmVmcmVzaDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwpO1xuICB9XG5cbiAgLy8gcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZSgyMDIwLCA4LCAyNCk7XG4gIC8vIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUoMjAyMCwgOCwgMzEpO1xuICBwdWJsaWMgZGF0ZWZsYWc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgUGFzc3dvcmRWYWw6IGFueSA9ICcnO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCkge1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5taW5EYXRlLCAndG9kYXk9PT0+JywgdGhpcy5tYXhEYXRlKVxuXG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykgYXMgRm9ybUNvbnRyb2w7XG4gIH1cbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHRpdGxlQWxlcnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIHBvc3Q6IGFueSA9ICcnO1xuICBzaG93Zm9ybSA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGZvcm1maWVsZHJlZnJlc2h2YWwgPSBmYWxzZTtcbiAgZm9ybWRhdGF2YWw6IGFueSA9IHt9O1xuICBmb3JtZmllbGRyZWZyZXNoZGF0YXZhbDogYW55ID0ge307XG4gIGZpbGVyZmllbGRkYXRhOiBhbnkgPSBbXTtcbiAgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTogYW55ID0gW107XG4gIGZpbGVhcnJheTogYW55ID0gW107XG4gIGZpbGVjb3VudDogYW55ID0gW107XG4gIGN1cnJlbnRhdXRvY29tcGxldGU6IGFueSA9ICcnO1xuICBmaWVsZGxvYWRpbmc6IGFueSA9ICcnO1xuICBpc1Bhc3N3b3JkVmlzaWJsZTogQm9vbGVhbiA9IHRydWU7XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG4gIEBPdXRwdXQoKSBvbkZvcm1GaWVsZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cblxuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XG4gIGNyb3BwZWRJbWFnZTogYW55ID0gJyc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKDApO1xuXG5cbiAgICAvLyB0aGlzLnNldENoYW5nZVZhbGlkYXRlKClcbiAgfVxuXG5cbiAgLy9HZW5lcmF0ZSBQYXNzd29yZCBidXR0b25cbiAgR2VuZXJhdGVQYXNzd29yZCh2YWwpIHtcbiAgICB0aGlzLlBhc3N3b3JkVmFsID0gJyc7XG4gICAgdGhpcy5QYXNzd29yZFZhbCA9IHRoaXMubWFrZWlkKDEwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFsLnZhbHVlID0gdGhpcy5QYXNzd29yZFZhbDtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS5wYXRjaFZhbHVlKHRoaXMuUGFzc3dvcmRWYWwpO1xuICAgIH0sIDIwMCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlBhc3N3b3JkVmFsLCAnUGFzc3dvcmRWYWwrKysrJylcblxuXG4gICAgLy8gZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgLy8gICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnID09IHRydWUpIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnLCAnKysrKz09JywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10pXG4gICAgLy8gICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnZhbHVlID0gdGhpcy5QYXNzd29yZFZhbDtcbiAgICAvLyAgICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10ucGF0Y2hWYWx1ZSh0aGlzLlBhc3N3b3JkVmFsKVxuICAgIC8vICAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhID0geyBmaWVsZDogJ3Bhc3N3b3JkJywgdmFsdWU6IHRoaXMuUGFzc3dvcmRWYWwgfTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuUGFzc3dvcmRWYWwsICdQYXNzd29yZFZhbCcpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuXG4gIH1cblxuICAvL2NvcHkgUGFzc3dvcmQgYnV0dG9uXG4gIGNvcHlHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuXG4gICAgdmFyIHBhc3N3b3JkRmllbGREYXRhOiBhbnkgPSAnJztcblxuICAgIHBhc3N3b3JkRmllbGREYXRhID0gdmFsLnZhbHVlO1xuXG4gICAgLy8gZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgLy8gICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnID09IHRydWUpIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnLCAnKysrKz09JywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10pXG4gICAgLy8gICAgIHBhc3N3b3JkRmllbGREYXRhID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udmFsdWU7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHBhc3N3b3JkRmllbGREYXRhLCAnUGFzc3dvcmRWYWwnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSlcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2cocGFzc3dvcmRGaWVsZERhdGEsICc/PycpXG5cbiAgICBpZiAocGFzc3dvcmRGaWVsZERhdGEgIT0gbnVsbCAmJiBwYXNzd29yZEZpZWxkRGF0YSAhPSAnJykge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgZWwudmFsdWUgPSBwYXNzd29yZEZpZWxkRGF0YTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgZWwuc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdDb3B5IFRvIENsaXBib2FyZCcgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1BsZWFzZSBHZW5lcmF0ZSBQYXNzd29yZC4uIScgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICAvL3ByZXZpZXcgUGFzc3dvcmQgYnV0dG9uXG5cbiAgcHJldmlld0dlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG5cbiAgICBpZiAodmFsLnZhbHVlICE9IG51bGwgJiYgdmFsLnZhbHVlICE9ICcnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWwsICcrKysrKysrKysrKysnKVxuICAgICAgc3dpdGNoICh2YWwudHlwZSkge1xuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgdmFsLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICB2YWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgcmFuIHBhc3N3b3JkXG4gIG1ha2VpZChsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1AnO1xuICAgIGxlbmd0aCA9IGxlbmd0aCArIDE7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIC8vIG9wZW4gY2FsZW5kYXIgaW50byBkYXRlIGZpZWxkXG4gIG9wZW5DYWxlbmRhcigpIHtcbiAgICB0aGlzLmRhdGVmbGFnID0gdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVmbGFnLCAnZGF0ZWZsYWcnKVxuICB9XG5cbiAgbmF2dG9jYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGVdKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIGFmdGVyIHZpZXcgaW5pdCB0cmlnZ2VyJyk7XG4gICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdHJpZ2dlcmV2ZW50cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiB0cmlnZ2VyZXZlbnRzJywgdmFsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWwgbG9hZGVlZCB0cmlnZ2VyJywgdmFsKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBjYW5jZWwoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYW5jZWwnLGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaGFuZGxlRHJvcChlKSB7XG4gICAgLy8gbGV0IGFwaUJhc2VVUkw9XCJcIlxuICAgIC8vIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBlO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgIGNvbnN0IGFwaUJhc2VVUkwgPSAnaHR0cHM6Ly90Z2UyNGJjMm5lLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldic7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVEcm9wJywgZSk7XG4gICAgY29uc3QgZHQgPSBlLmRhdGFUcmFuc2ZlcjtcbiAgICBjb25zdCBmaWxlcyA9IGR0LmZpbGVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLCAnZmlsZXMnLCBlLnRhcmdldC5pZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmFycicsIHRoaXMuZmlsZWFycmF5KTtcbiAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZpbGUgZGV0YWlscycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdGhpcy5kZWxldGVmaWxlKHZhKVxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKSkge1xuICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVmaWxlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLCAxKTtcbiAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0ucHVzaChmaWxlc1tpXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsZXNbMF0nLCBmaWxlc1swXSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScsIHRoaXMuZmlsZWFycmF5KTtcblxuICAgICAgLy8gdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgLy8gICBmZXRjaChhcGlCYXNlVVJMK1wiL3JlcXVlc3RVcGxvYWRVUkxcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLy8gICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgLy8gICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKGpzb24pe1xuICAgICAgLy8gICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgLy8gICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgLy8gICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7dHlwZTogZmlsZS50eXBlfSlcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAvLyAgICAgbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIHVwbG9hZGZpbGUodmFsOiBhbnkpIHtcbiAgLy8gICAvL2xldCBhcGlCYXNlVVJMID0gXCJodHRwczovL3RnZTI0YmMybmUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2XCI7XG4gIC8vICAgbGV0IGg6YW55PXRoaXMuYnVja2V0dXBsb2FkKHZhbCk7XG4gIC8vICAgY29uc29sZS5sb2coJ3VwcHBwJyxoKTtcblxuXG4gIC8vIH1cblxuICB1cGxvYWRmaWxlKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3VwcHBwJywgdmFsKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB2YWwnLCB2YWwpO1xuICAgIGZpbGUudXBsb2FkZWQgPSAyOyAvLyBzaG93IHByb2dyZXNzYmFyXG4gICAgbGV0IHRlbXBsb2FkZXI6IGFueSA9IHRoaXMuZmllbGRsb2FkaW5nW3ZhbC5uYW1lXTtcbiAgICB0ZW1wbG9hZGVyID0gdmFsLm5hbWU7XG4gICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgICAgZmV0Y2godmFsLmFwaXVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHBhdGg6IHZhbC5wYXRoLFxuICAgICAgICAgIGJ1Y2tldDogdmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogZmlsZS50eXBlIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGZpbGUudXBsb2FkZWQgPSAxO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwgJ2ZpbGUudHlwZScpO1xuICAgICAgICAgIC8vIHRlbXBsb2FkZXIgPSBudWxsO1xuICAgICAgICAgIC8vIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgLy8gdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAgICAgLy8gbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuICB1cGxvYWRhbGwodmFsOiBhbnkpIHtcbiAgICAvLyB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0udXBsb2FkYWxsID0gMTtcbiAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKSB7XG4gICAgICBjb25zdCBjOiBhbnkgPSBwYXJzZUludCh5KSAqIDUwMDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0nLCB2YWwsICd2LS0tJywgJ3RoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXScsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLnVwbG9hZGVkKTtcbiAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0uYnVja2V0ID09IG51bGwpIHRoaXMudXBsb2FkZmlsZW11bHRpcGxlKHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB5KTtcblxuICAgIH1cblxuICB9XG4gIGRlbGV0ZWZpbGVtdWx0aXBsZWFsbCh2YWw6IGFueSkge1xuICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0pIHtcbiAgICAgIGNvbnN0IGM6IGFueSA9IHBhcnNlSW50KHkpICogNTAwO1xuICAgICAgdGhpcy5kZWxldGVmaWxlbXVsdGlwbGUodmFsLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgfSwgMjAwMCk7XG5cbiAgfVxuICB1cGxvYWRmaWxlbXVsdGlwbGUodmFsOiBhbnksIGY6IGFueSwgaW5kZXhmOiBhbnkpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVtpbmRleGZdO1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbGUsJ2ZpbGUnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGYsJ2YnKTtcbiAgICBpZiAodGhpcy5maWxlY291bnRbdmFsLm5hbWVdID09IG51bGwpIHsgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdID0gMDsgfVxuICAgIHRoaXMuZmlsZWNvdW50W3ZhbC5uYW1lXSsrO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHZhbCBpbiBtIDInLCB2YWwsIGYsIGluZGV4ZiwgJ2lmJyxmaWxlKTtcbiAgICBmaWxlLnVwbG9hZGVkID0gMjsgLy8gc2hvdyBwcm9ncmVzc2JhclxuICAgIGxldCB0ZW1wbG9hZGVyOiBhbnkgPSB0aGlzLmZpZWxkbG9hZGluZ1t2YWwubmFtZV07XG4gICAgdGVtcGxvYWRlciA9IHZhbC5uYW1lO1xuICAgIC8vIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKGUpID0+IHtcbiAgICAgIGZldGNoKHZhbC5hcGl1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBuYW1lOiB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLFxuICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICBwYXRoOiB2YWwucGF0aCxcbiAgICAgICAgICBidWNrZXQ6IHZhbC5idWNrZXRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdidWNrJywgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7IHR5cGU6IGZpbGUudHlwZSB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgICBmaWxlLnVwbG9hZGVkID0gMTtcbiAgICAgICAgICBmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlLnR5cGUsJ2ZpbGUudHlwZScpXG4gICAgICAgICAgLy8gdGVtcGxvYWRlciA9IG51bGw7XG4gICAgICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgICAgICAvLyBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdHlwZScsIGZpbGUsIHR5cGVvZiAoZmlsZSkpO1xuICAgIGNvbnN0IGZ0eXBlOiBhbnkgPSB0eXBlb2YgKGZpbGUpO1xuICAgIC8vIGlmIChmdHlwZSA9PSBcIkJsb2JcIikgXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG4gIGRlbGV0ZWZpbGUodmFsOiBhbnksIGZsYWc6IGFueSA9ICcnKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5Jyx0aGlzLmZpbGVhcnJheSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcsdmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwubmFtZSk7XG4gICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV07XG4gICAgc291cmNlLmZpbGUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lO1xuICAgIHNvdXJjZS5wYXRoID0gdmFsLnBhdGg7XG4gICAgc291cmNlLmJ1Y2tldCA9IHZhbC5idWNrZXQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHZhbC5hcGlkZWxldGV1cmwsIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJyAmJiBmbGFnID09ICcnKSB7XG4gICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gPSBudWxsO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlZmlsZW11bHRpcGxlKHZhbDogYW55LCBmaWVsZDogYW55ID0gJycsIGluZGV4OiBhbnkpIHtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVtpbmRleF07XG4gICAgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdLS07XG4gICAgc291cmNlLmZpbGUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lO1xuICAgIHNvdXJjZS5wYXRoID0gdmFsLnBhdGg7XG4gICAgc291cmNlLmJ1Y2tldCA9IHZhbC5idWNrZXQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHZhbC5hcGlkZWxldGV1cmwsIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSAhPSBudWxsKSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgaW4gZm9ybSAhISEnLCBjaGFuZ2VzLCAnZnJ2JywgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gICAgZm9yIChjb25zdCB2IGluIGNoYW5nZXMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHYsY2hhbmdlc1t2XSwndnYnKTtcbiAgICAgIGlmICh2ID09ICdmb3JtZmllbGRyZWZyZXNoZGF0YScpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZmZiBpbiBzZXQgdHQnKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLCAnbScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cCAhPSBudWxsICYmIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgIT0gbnVsbCAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGRdLnBhdGNoVmFsdWUodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSk7XG4gICAgICAgICAgICB9IGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09IG51bGwgJiYgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3Jta2V5IGluIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5kYXRhW2Zvcm1rZXldJywgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXldICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleV0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldKTsgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZm9ybWRhdGF2YWxrZXkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubmFtZSA9PSBmb3Jta2V5ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXV0b3NlbHZhbCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwgbXVsdGlwbGUgJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCwgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0uaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmQgb2YgaWZcblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSA9PSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBzaW5nbGUnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XSA9PSAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGF1dG9jb21wbGV0ZXZhbHVlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5mIG9mIGlmXG5cbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubmFtZSA9PSBmb3Jta2V5ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS50eXBlID09ICdjaGVja2JveCcgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBjaGVjayBib3ggbXVsdGlwbGUgJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCwgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1rZXkgKyAgKyBhdXRvc2VsdmFsJywgZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XS5pbmRleE9mKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSAhPSAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXSAhPSBudWxsKSB7IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0ucGF0Y2hWYWx1ZSh0cnVlKTsgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXSAhPSBudWxsKSB7IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0ucGF0Y2hWYWx1ZShmYWxzZSk7IH1cblxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBpZlxuXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAnc2hvd2ZpZWxkbG9hZGVyJykge1xuICAgICAgICAgICAgICB0aGlzLmZpZWxkbG9hZGluZyA9IHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAnYWRkZnJvbWNvbnRyb2wnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFuYWdlZnJvbWNvbnRyb2wodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSwgJ2FkZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3JlbW92ZWZyb21jb250cm9sJykge1xuICAgICAgICAgICAgICB0aGlzLm1hbmFnZWZyb21jb250cm9sKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUsICdyZW1vdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgZmlsdGVyYXV0b2NvbXBsZXRlKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYycsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWUsIGRhdGEudmFsKTtcbiAgICBjb25zdCBmaWVsZHZhbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWU7XG4gICAgaWYgKGZpZWxkdmFsID09ICcnIHx8IGZpZWxkdmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVydmFsID0gZGF0YS52YWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLnZhbC5pbmNsdWRlcyhmaWVsZHZhbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBmaWx0ZXJ2YWw7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmlsJywgZmlsdGVydmFsKTtcbiAgICB9XG5cbiAgfVxuICByZWxvYWRhdXRvY29tcGxldGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSB2YWwubmFtZTtcbiAgfVxuXG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdID0gbnVsbDtcbiAgfVxuICByZW1vdmVjaGlwbXVsdGlwbGUodmFsOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0ubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH1cbiAgfVxuICBzZXRhdXRvY29tcGxldGV2YWx1ZSh2YWw6IGFueSwgZmllbGQ6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmZiBhdXRvIGNvbXBsZXRlIHNldCAnLCB2YWwsIGZpZWxkKTtcblxuXG5cbiAgICBpZiAoZmllbGQubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gdmFsLmtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdLnB1c2godmFsLmtleSk7XG5cbiAgICB9XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnBhdGNoVmFsdWUobnVsbCk7XG4gICAgICB0aGlzLmlucHV0Ymx1cihmaWVsZC5uYW1lKTtcbiAgICB9XG5cbiAgfVxuICBtYW5hZ2Vmcm9tY29udHJvbChmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnbWFuYWdlIGNvbnRyb2wnLCBmaWVsZCwgdHlwZSwgZmllbGQubGVuZ3RoKTtcbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLm5hbWUpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGRbJ25hbWUnXSwgJ2MnLCB5LCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lID09IG51bGwgJiYgZmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgY29uc29sZS5sb2coZmllbGQubGVuZ3RoLCAnZmwnKTtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBmb3IgKGNvbnN0IHogaW4gZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZFt6XSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGRbel0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlbW92ZWQgaW4gYXJyYXkgZm9ybSAnLCBmaWVsZFt6XSwgJ2MgYXInLCB5LCBmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2FkZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZGQgZm9ybScpO1xuICAgICAgaWYgKGZpZWxkLmFmdGVyICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuYWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSArIDEsIDAsIGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCAuLicsIGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gYXJyYXkgZm9ybSAgYWRkJyk7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW3ZdICE9IG51bGwgJiYgZmllbGRbdl0ubmFtZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbdl0uYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZFt2XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBmaWVsZCBhZGRlZCAuLicsIGZpZWxkW3ZdWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXNldGZvcm1kYXRhKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSAnJztcblxuICB9XG5cbiAgXG4gIGNoZWNrY2hhbmdlKGZpZWxkOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWVsZCwgJ2NoYW5nZScsIGluZGV4LCAnaW5kZXgyJyk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdICE9IG51bGwpIHtcbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoZmllbGQuZGVwZW5kZW50ICE9IG51bGwgJiYgZmllbGQuZGVwZW5kZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB2YzogYW55ID0gMDtcbiAgICAgIGZvciAoY29uc3QgbiBpbiBmaWVsZC5kZXBlbmRlbnQpIHtcblxuICAgICAgICBpZiAoZmllbGQuZGVwZW5kZW50W25dLmNvbmR2YWwudG9TdHJpbmcoKSA9PSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gbGV0IHRlbXZhbGlkYXRpb25ydWxldDogYW55ID0gW107XG4gICAgICAgICAgdmMrKztcbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lLCBuZXcgRm9ybUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLnZhbHVlLCB0ZW12YWxpZGF0aW9ucnVsZXQpKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm5ubm4nLCAnLS0nLCBwYXJzZUludChpbmRleCArIDEgKyBwYXJzZUludCh2YykpLCAnLS0nLCB2YyArIGluZGV4ICsgMSwgaW5kZXgsIHZjLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGRbJ25hbWUnXSk7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KGluZGV4ICsgcGFyc2VJbnQodmMpKSwgMCwgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oMSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCcsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZFsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGNyZWF0ZUZvcm0oaW5pdGlhbGl6ZTogYW55ID0gMCkge1xuICAgIC8qdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlscmVnZXgpXSwgdGhpcy5jaGVja0luVXNlRW1haWxdLFxuICAgICAgJ2Z1bGxuYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAvLyAncGFzc3dvcmQnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuY2hlY2tQYXNzd29yZF1dLFxuICAgICAgLy8nZGVzY3JpcHRpb24nOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgIC8vJ3ZhbGlkYXRlJzogJydcbiAgICB9KTsqL1xuICAgIC8vIGxldCBkZW1vQXJyYXk6YW55PVtdO1xuICAgIGlmIChpbml0aWFsaXplID09IDApIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCAnZmcnKVxuICAgIGZvciAoY29uc3QgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dXSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlbWNvbnRyb2xhcnI6IGFueSA9IFtdO1xuICAgICAgICBjb25zdCB0ZW12YWxpZGF0aW9ucnVsZTogYW55ID0gW107XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2goJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdmaWxlJykge1xuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWU7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RiJywgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmEgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z2JywgZmEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlY291bnRbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0udXBsb2FkZWQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlID09IG51bGwpIHsgdGVtY29udHJvbGFyci5wdXNoKFtdKTsgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICBjb25zdCB0Y2hhcnI6IGFueSA9IFtdO1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2InLCBiLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluY2x1ZGVzKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtiXS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICB0Y2hhcnIucHVzaCh0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyB0Y2hhcnIucHVzaChmYWxzZSk7IH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAvLyBwdXNoIHRoZSB2YWxcbiAgICAgICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRjaGFycik7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0Y2gnLCB0Y2hhcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHYgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMpIHtcbiAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoICgpPT57XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2UgPSAnTm90IFZhbGlkICEhJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdyZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXRjaCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmNoZWNrUGFzc3dvcmRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdhdXRvcmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5hdXRvcmVxdWlyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ3BhdHRlcm4nKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5wYXR0ZXJuKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF4TGVuZ3RoJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMubWF4TGVuZ3RoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWluJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMubWluKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF4Jykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMubWF4KHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWluTGVuZ3RoJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMubWluTGVuZ3RoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB9LDApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgICAgICAvLyBkZW1vQXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV09bmV3IEZvcm1Db250cm9sKCcnKTtcblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnaW1hZ2UnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWd3cmFwXycgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ18nICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpLmNsYXNzTGlzdC5hZGQoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG5cbiAgICAgICAgICB9LCA0MDAwKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IHRjaHZhcjogYW55ID0gZmFsc2U7XG4gICAgICAgICAgLy8gbGV0XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Z2ID8/PyAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUpO1xuICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICAgIGZvciAoY29uc3QgaiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluY2x1ZGVzKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtqXS5rZXkpKSB7XG4gICAgICAgICAgICAgIHRjaHZhciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgeyB0Y2h2YXIgPSBmYWxzZTsgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ24nLCBuLCBqLCB0Y2h2YXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ19fJyArIGosIG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIsIHRlbXZhbGlkYXRpb25ydWxlKSk7XG4gICAgICAgICAgICAvLyBpZigpXG4gICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSBhcyBGb3JtQXJyYXkpLnB1c2goY29udHJvbCk7Ki9cbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0Y2h2YXIpXG4gICAgICAgICAgICAvLyBdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgXSkpOyovXG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2wodGVtY29udHJvbGFyclswXSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiB0ZW1jb250cm9sYXJyWzBdLCBkaXNhYmxlZDogdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uZGlzYWJsZWQgfSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBhdCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdCAuLi4nLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCBhdCwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpID09ICdvYmplY3QnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5LCAnbXVsdGkgYXV0b2NvbXBsZXRlIHRyaWdnZXJlZCAgISEgJyk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2luZ2xlIGF1dG8gY29tcGxldGUgdHJpZ2dlciBibG9jaycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0IGF1dG8gY29tcGxldGUgc2luZ2xlIHRyaWdnZXJlZCcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcbiAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsWzBdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyAnbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gPXRoaXMuY2hlY2tQYXNzd29yZHModGhpcy5mb3JtR3JvdXApO1xuICAgIC8vIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChkZW1vQXJyYXkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwnZmcnLGRlbW9BcnJheSk7XG4gICAgICB0aGlzLnNob3dmb3JtID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLnN1Ym1pdGFjdGl2ZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdncnAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9scyk7XG4gICAgfSwgMTApO1xuXG4gIH1cblxuICBzZXRDaGFuZ2VWYWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3ZhbGlkYXRlJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICh2YWxpZGF0ZSkgPT4ge1xuICAgICAgICBpZiAodmFsaWRhdGUgPT0gJzEnKSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKTtcbiAgICAgICAgICB0aGlzLnRpdGxlQWxlcnQgPSAnWW91IG5lZWQgdG8gc3BlY2lmeSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuXG4gIGNob29zZWltZyh2YWxzOiBhbnksIGZpZWxkczogYW55KSB7XG4gICAgY29uc29sZS5sb2codmFscywgZmllbGRzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nd3JhcHBlcicpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGVsZW06IGFueTtcbiAgICAgIGVsZW0gPSBlbDtcbiAgICAgIC8vIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjVzIGxpbmVhciAwc1wiO1xuICAgICAgLy8gZWxlbS5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZHMubmFtZV0ucGF0Y2hWYWx1ZSh2YWxzLmtleSk7XG4gIH1cbiAgY2hlY2tQYXNzd29yZHMoZ3JvdXA6IEZvcm1Hcm91cCkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG4gICAgY29uc3QgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmIChjb25maXJtUGFzcyA9PSBudWxsIHx8IGNvbmZpcm1QYXNzID09ICcnKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAocGFzcyAhPSBjb25maXJtUGFzcykge1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7IG1hdGNoOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIHsgbWF0Y2g6IHRydWUgfTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuICBjaGVja1Bhc3N3b3JkKGNvbnRyb2wpIHtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBjb250cm9sLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS57OCx9KS87XG4gICAgcmV0dXJuICghcGFzc3dvcmRDaGVjay50ZXN0KGVudGVyZWRQYXNzd29yZCkgJiYgZW50ZXJlZFBhc3N3b3JkKSA/IHsgcmVxdWlyZW1lbnRzOiB0cnVlIH0gOiBudWxsO1xuICB9XG4gIGF1dG9yZXF1aXJlZChncm91cDogYW55KSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcblxuICAgIGZvciAoY29uc3QgYiBpbiBncm91cCkge1xuICAgICAgaWYgKGdyb3VwW2JdLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXSAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdLnJ1bGUgPT0gJ2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwW2JdLm5hbWVdID09IG51bGwpIHtcblxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXS5zZXRFcnJvcnMoeyBhdXRvcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB7IGF1dG9yZXF1aXJlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnYmdycnInLGdyb3VwLGdyb3VwLm5hbWUpO1xuICAgIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdICE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXAubmFtZV09PW51bGwpe1xuXG5cblxuICAgIC8vIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgLy8gbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIC8vIGlmKGNvbmZpcm1QYXNzPT1udWxsIHx8IGNvbmZpcm1QYXNzPT0nJyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gICAgLy8gICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIC8vIH1cbiAgICAvLyBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgICAvLyAgIHJldHVybiB7bWF0Y2g6dHJ1ZX07XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgY29uc3QgZGIgPSBbJ3RvbnlAZ21haWwuY29tJ107XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoZGIuaW5kZXhPZihjb250cm9sLnZhbHVlKSAhPT0gLTEpID8geyBhbHJlYWR5SW5Vc2U6IHRydWUgfSA6IG51bGw7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0sIDQwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3IoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldEVycm9yJywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCcgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdwYXR0ZXJuJykgPyAnTm90IGEgdmFsaWQgZW1haWxhZGRyZXNzJyA6XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcignYWxyZWFkeUluVXNlJykgPyAnVGhpcyBlbWFpbGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UnIDogJyc7XG4gIH1cblxuICBnZXRFcnJvclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQgKGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyKScgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlbWVudHMnKSA/ICdQYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlcicgOiAnJztcbiAgfVxuXG4gIG9uU3VibWl0KHBvc3QpIHtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICAgIGNvbnN0IHRlbXBmb3JtdmFsOiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHggaW4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLmVycm9ycywgeCwgJ2VycicpO1xuICAgICAgLy8gaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsaWQpe1xuICAgICAgLy8gY29uc29sZS5sb2coJ3gnLHgpO1xuICAgICAgY29uc3QgYiA9IHguc3BsaXQoJ19fJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYicsYixiLmxlbmd0aCxiWzBdKTtcbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkOiAxNTg5MTc0NDc3NTA0XG4gICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAvLyBzaXplOiAxMzUwOTZcbiAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuICAgICAgICAgICAgY29uc3QgdGZpbGU6IGFueSA9IHt9O1xuICAgICAgICAgICAgdGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5maWxlc2VydmVybmFtZTtcbiAgICAgICAgICAgIHRmaWxlLm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5uYW1lO1xuICAgICAgICAgICAgdGZpbGUuc2l6ZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNpemU7XG4gICAgICAgICAgICB0ZmlsZS50eXBlID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udHlwZTtcbiAgICAgICAgICAgIHRmaWxlLnBhdGggPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5wYXRoO1xuICAgICAgICAgICAgdGZpbGUuYnVja2V0ID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYnVja2V0O1xuICAgICAgICAgICAgdGZpbGUuYmFzZXVybCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJhc2V1cmw7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHRmaWxlYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0pIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnVwbG9hZGVkID09IDEpIHtcbiAgICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWQ6IDE1ODkxNzQ0Nzc1MDRcbiAgICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkRGF0ZTogTW9uIE1heSAxMSAyMDIwIDEwOiA1MTogMTcgR01UICsgMDUzMChJbmRpYSBTdGFuZGFyZCBUaW1lKSB7IH1cbiAgICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAgIC8vIHNpemU6IDEzNTA5NlxuICAgICAgICAgICAgICAvLyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuICAgICAgICAgICAgICBjb25zdCB0ZmlsZTogYW55ID0ge307XG4gICAgICAgICAgICAgIHRmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmlsZXNlcnZlcm5hbWU7XG4gICAgICAgICAgICAgIHRmaWxlLm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5uYW1lO1xuICAgICAgICAgICAgICB0ZmlsZS5zaXplID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uc2l6ZTtcbiAgICAgICAgICAgICAgdGZpbGUudHlwZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnR5cGU7XG4gICAgICAgICAgICAgIHRmaWxlLnBhdGggPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5wYXRoO1xuICAgICAgICAgICAgICB0ZmlsZS5idWNrZXQgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5idWNrZXQ7XG4gICAgICAgICAgICAgIHRmaWxlLmJhc2V1cmwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5iYXNldXJsO1xuICAgICAgICAgICAgICB0ZmlsZWFyci5wdXNoKHRmaWxlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZWFycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdhdXRvY29tcGxldGUnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZSAhPSBudWxsICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbGlkYXRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3InLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IG51bGwgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIGFmdGVyICcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0JywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQgYWZ0ZXIgJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeCA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRlbXBmb3JtdmFsW3hdID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBmb3JtdmFsW3hdID0gdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYi5sZW5ndGggPiAxICYmIGJbMF0gPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICE9IHggJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWFhYWZmLi4uJyk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbFtrXS5rZXkgPT0gYlsxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wdXNoKGJbMV0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdndicsIGJbMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2V7XG4gICAgICAgIGlmICh4ID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF0gPT0gbnVsbCkge1xuICAgICAgICAgIHRlbXBmb3JtdmFsW3hdID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIH1cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLmVycm9ycywgeCwgJ2VycjIyJyk7XG5cbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocG9zdCwgJ3Bvc3QnLCB0aGlzLmZvcm1Hcm91cC52YWxpZCwgdGhpcy5mb3JtZGF0YXZhbCwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsICdmZmZmJywgdGVtcGZvcm12YWwpO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG5cblxuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQ7XG4gICAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgICAgIHNvdXJjZS5kYXRhID0gdGhpcy5mb3JtR3JvdXAudmFsdWU7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiByZXN1bHQuc3RhdHVzLCBmcm9tdmFsOiByZXN1bHQgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiB0aGlzLmZvcm1kYXRhdmFsLnN1Y2Nlc3NtZXNzYWdlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVkJywgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJycgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJy8nKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiByZXN1bHQuc3RhdHVzLCBmcm9tdmFsOiByZXN1bHQgfSk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdHNlcnZlcmVycm9yJywgZmllbGR2YWw6ICdzZXJ2ZXJlcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyAvL2Rpc2FibGUgbG9hZGVyIFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6ICd2YWxpZGF0aW9uZXJyb3InLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9KTtcblxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpO1xuICAgIH1cblxuICB9XG5cbiAgcHJpdmF0ZSBzY3JvbGxUb0ZpcnN0SW52YWxpZENvbnRyb2woKSB7XG4gICAgY29uc3QgZmlyc3RJbnZhbGlkQ29udHJvbDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgXCJmb3JtIC5uZy1pbnZhbGlkXCJcbiAgICApO1xuXG4gICAgd2luZG93LnNjcm9sbCh7XG4gICAgICB0b3A6IHRoaXMuZ2V0VG9wT2Zmc2V0KGZpcnN0SW52YWxpZENvbnRyb2wpLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRvcE9mZnNldChjb250cm9sRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IDUwO1xuICAgIHJldHVybiBjb250cm9sRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBsYWJlbE9mZnNldDtcbiAgfSBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG5cbiAgZmlsZUNoYW5nZUV2ZW50KGV2ZW50OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZXZlbnQ7XG4gICAgY29uc29sZS5sb2coJ2V2ZW50JywgZXZlbnQpO1xuICB9XG4gIGltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQpIHtcbiAgICB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcbiAgICBjb25zb2xlLmxvZygndGhpcy5jcm9wcGVkSW1hZ2UnLCBldmVudCk7XG4gIH1cbiAgaW1hZ2VMb2FkZWQoKSB7XG4gICAgLy8gc2hvdyBjcm9wcGVyXG4gIH1cbiAgY3JvcHBlclJlYWR5KCkge1xuICAgIC8vIGNyb3BwZXIgcmVhZHlcbiAgfVxuICBsb2FkSW1hZ2VGYWlsZWQoKSB7XG4gICAgLy8gc2hvdyBtZXNzYWdlXG4gIH1cblxufVxuIl19