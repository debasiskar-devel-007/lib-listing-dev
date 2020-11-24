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
        this.externalDataVal = [];
        this.customlistenbuttons = {};
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
            console.log(this.externalDataVal, 'this.externalDataVal');
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
        console.log(value, this.externalDataVal, index, '++');
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
        console.log(flag, field, ival, i, 'exter ++++');
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
                    if (this_1.formdataval.fields[g] != null && this_1.formdataval.fields[g].imagefields != null && this_1.formdataval.fields[g].imagefields.length > 0) {
                        files[i].imagefields = this_1.formdataval.fields[g].imagefields;
                        // for(let i in this.formdataval.fields[g].imagefields){
                        //   this.formdataval.fields[g].imagefields = this.formdataval.fields[g].imagefields[i];
                        // }
                    }
                    // console.log(this.singleImgFormData,'singleImgFormData')
                    // console.log('file details', this.formdataval.fields[g], g);
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
     * @param {?} index
     * @return {?}
     */
    ShowformComponent.prototype.trackByFn = 
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h);
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
     * @return {?}
     */
    ShowformComponent.prototype.keyupVal = /**
     * @param {?} val
     * @param {?} item
     * @param {?} fi
     * @param {?} ind
     * @return {?}
     */
    function (val, item, fi, ind) {
        // console.log(val[fi].imagefields, 'keyupVal', item, fi, ind)
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
        // console.log(val, 'val');
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
                        tfile.imagefields = this.formdataval.fields[m].imagefields;
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                        // console.log(tfile, 'tfile>>', tfile.imagefields, 'imagefields')
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
                            tfile.imagefields = this.formdataval.fields[m].imagefields;
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
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                        </ckeditor>\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n                                        \n                                                <span style=\"cursor: pointer;\"  (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                    class=\"material-icons\">\n                                                    create\n                                                </span>\n                                                \n                                                <span style=\"cursor: pointer;\"  (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                    class=\"material-icons\">\n                                                    clear\n                                                </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n\n\n\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\">Drop files here.\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n                            </div>\n\n\n\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\n                                [aspectRatio]=\"4 / 3\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\"\n                                (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n\n                            <img [src]=\"croppedImage\" />\n\n\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n                                            image\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                            picture_as_pdf\n                                        </span>\n\n                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                            movie_filter\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                            description\n                                        </span>\n\n                                        <!-- <mat-card class=\"matimg-cls\">\n                                            <img mat-card-image [src]=\"apiBaseURL + path + filearray[fields.name].name\" alt=\"\">\n                                        </mat-card> -->\n\n                                        <span\n                                            class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                        <br />\n                                        <span\n                                            class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n\n                                        <!-- singleImgFormData -->\n                                        <ng-container class=\"descdiv\">\n                                            <div *ngIf=\"fields.imagefields.length > 0\">\n\n                                                <div\n                                                    *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'text'\">\n                                                        <input matInput type=\"text\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\" name=\"{{item.name}}\"\n                                                            matInput placeholder=\"{{item.label}}\">\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'textarea'\">\n                                                        <textarea matInput name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            placeholder=\"{{item.label}}\" [rows]='3'\n                                                            [cols]='30'></textarea>\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'number'\">\n                                                        <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                            placeholder=\"{{item.label}}\">\n                                                    </mat-form-field>\n\n                                                    <div *ngIf=\"item.type == 'checkbox'\">\n                                                        <mat-checkbox name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                        </mat-checkbox>\n                                                        &nbsp;\n                                                        {{item.label}}\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </ng-container>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button\n                                                (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple!=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <span *ngIf=\"files.uploaded==1\"\n                                                class=\"material-icons fileuploadcompleteicon\">\n                                                cloud_done\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n                                                image\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                description\n                                            </span>\n\n\n                                            <span class=\"fileuploadednameclass\">++ {{files.name}}</span>\n                                            <br />\n                                            <span class=\"fileuploadedtypeclass\"> == {{files.type}}</span>\n\n                                            <br>\n                                            <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                            <!-- multipleImgFormData -->\n                                            <ng-container class=\"descdiv\">\n\n                                                <!-- fields {{fields | json}}ss -->\n\n\n                                                <!-- {{filearray[fields.name] | json}} ww -->\n\n                                                <!-- <div *ngIf=\"fields.imagefields != null && fields.imagefields.length >0\"> -->\n                                                <div\n                                                    *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                    <!-- fields ==> {{fields.imagefields[ind] |json }} fi= {{fi}}\n                                                        ind={{ind}} ival={{ival}} ww++ -->\n                                                    <!-- \n                                                        imagefields ==> {{fields.imagefields.length}} fi= {{fi}}\n                                                        ind={{ind}} ival={{ival}} -->\n\n                                                    <br>\n\n                                                    <!-- arr=>   {{files[fi][formdataval.fields[fi].imagefields[ind].value]}} -->\n\n                                                    <!-- files 33 ++=> -->\n                                                    <!-- {{filearray[fields.name][fi].imagefields[fi].value}} -->\n\n\n                                                    <div>\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"val.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind)\"\n                                                                [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                matInput\n                                                                placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                        </mat-form-field>\n                                                    </div>\n\n                                                    <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                    <!-- <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'textarea'\">\n                                                        <textarea matInput name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            placeholder=\"{{item.label}}\" [rows]='3'\n                                                            [cols]='30'></textarea>\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'number'\">\n                                                        <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                            placeholder=\"{{item.label}}\">\n                                                    </mat-form-field>\n\n                                                    <div *ngIf=\"item.type == 'checkbox'\">\n                                                        <mat-checkbox name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                        </mat-checkbox>\n                                                        &nbsp;\n                                                        {{item.label}}\n                                                    </div> -->\n                                                </div>\n\n                                                <!-- </div> -->\n                                            </ng-container>\n\n                                            <div class=\"actionbtndiv\">\n\n                                                <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                    mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                    Upload\n                                                </mat-chip>\n                                                <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                    mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                    Delete </mat-chip>\n                                            </div>\n\n                                            <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                    [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                </mat-progress-bar>\n                                            </section>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name]!=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}"]
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
export { ShowformComponent };
if (false) {
    /** @type {?} */
    ShowformComponent.prototype.dateflag;
    /** @type {?} */
    ShowformComponent.prototype.PasswordVal;
    /** @type {?} */
    ShowformComponent.prototype.externalDataVal;
    /** @type {?} */
    ShowformComponent.prototype.customlistenbuttons;
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
    ShowformComponent.prototype.singleImgFormData;
    /** @type {?} */
    ShowformComponent.prototype.imgValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhFLE9BQU8sRUFBc0IsV0FBVyxFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRTlGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekM7SUE0Q0UsMkJBQW9CLFdBQXdCLEVBQVMsV0FBdUIsRUFBVSxTQUFzQixFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUVsSyx1REFBdUQ7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7O1FBcEI3SixhQUFRLEdBQVEsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBRXRCLG9CQUFlLEdBQUssRUFBRSxDQUFDO1FBRXZCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQXlCckMsZUFBVSxHQUFHLHdCQUF3QixDQUFDO1FBQ3RDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFD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QUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNsRSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNsRSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDO3dCQUNsRSxLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDN0MsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7d0JBQ2pELEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDO3dCQUVuRCxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzt3QkFFM0QsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUUzRSxrRUFBa0U7cUJBQ25FO2lCQUNGO2dCQUdELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7O3dCQUNySSxRQUFRLEdBQVEsRUFBRTtvQkFDeEIsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUMvRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7O2dDQVE1SCxLQUFLLEdBQVEsRUFBRTs0QkFDckIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQzs0QkFDekYsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDckUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzs0QkFDckUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFX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dUNBS0wsS0FBSzttQ0FLTCxLQUFLO2dDQWVMLEtBQUs7b0NBT0wsS0FBSztvQ0F3Q0wsTUFBTTs7SUE2dUNULHdCQUFDO0NBQUEsQUEzekNELElBMnpDQztTQXR6Q1ksaUJBQWlCOzs7SUFtQjVCLHFDQUE2Qjs7SUFDN0Isd0NBQTZCOztJQUU3Qiw0Q0FBOEI7O0lBRTlCLGdEQUFxQzs7SUF3QnJDLHNDQUFxQjs7SUFDckIsdUNBQXNDOztJQUN0QyxpQ0FBZTs7SUFDZixxQ0FBaUI7O0lBQ2pCLG9DQUFnQjs7SUFDaEIsZ0RBQTRCOztJQUM1Qix3Q0FBc0I7O0lBQ3RCLG9EQUFrQzs7SUFDbEMsMkNBQXlCOztJQUN6QixtREFBaUM7O0lBQ2pDLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLHlDQUF1Qjs7SUFDdkIsOENBQWtDOztJQUNsQyw4Q0FBbUM7O0lBRW5DLHFDQUE2Qjs7SUFJN0Isa0NBQWdDOztJQUNoQyxpQ0FBNEI7O0lBQzVCLGtDQUFXOztJQUNYLHdDQUFpQjs7SUFDakIsOENBQXNEOztJQUl0RCw4Q0FBNEI7O0lBQzVCLHlDQUF1Qjs7Ozs7SUFvdENyQiwrQkFBc0I7Ozs7O0lBM3ZDWix3Q0FBZ0M7O0lBQUUsd0NBQThCOzs7OztJQUFFLHNDQUE4Qjs7Ozs7SUFBRSxtQ0FBc0I7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCwgU2ltcGxlQ2hhbmdlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtZGlhbG9nLCBTbmFja2JhckNvbXBvbmVudCB9IGZyb20gJy4uL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG4vLyBpbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hvd2Zvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93Zm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKVxuICBzZXQgZm9ybWRhdGEoZm9ybWRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWRhdGF2YWwgPSBmb3JtZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9ybWZpZWxkcmVmcmVzaGRhdGEoZm9ybWZpZWxkcmVmcmVzaGRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwgPSBmb3JtZmllbGRyZWZyZXNoZGF0YTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZm9ybWZpZWxkcmVmcmVzaChmb3JtZmllbGRyZWZyZXNoOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwgPSBmb3JtZmllbGRyZWZyZXNoO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCk7XG4gIH1cblxuICAvLyBwdWJsaWMgbWluRGF0ZSA9IG5ldyBEYXRlKDIwMjAsIDgsIDI0KTtcbiAgLy8gcHVibGljIG1heERhdGUgPSBuZXcgRGF0ZSgyMDIwLCA4LCAzMSk7XG4gIHB1YmxpYyBkYXRlZmxhZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBQYXNzd29yZFZhbDogYW55ID0gJyc7XG5cbiAgcHVibGljIGV4dGVybmFsRGF0YVZhbDphbnk9W107XG5cbiAgcHVibGljIGN1c3RvbWxpc3RlbmJ1dHRvbnM6IGFueSA9IHt9O1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b25zKHZhbDogYW55KSB7XG4gICAgdGhpcy5jdXN0b21saXN0ZW5idXR0b25zID0gdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tbGlzdGVuYnV0dG9ucywnY3VzdG9tbGlzdGVuYnV0dG9ucyBmb3JtJylcbiAgfVxuXG5cbiAgQElucHV0KClcbiAgc2V0IGV4dGVybmFsZGF0YXZhbHVlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmV4dGVybmFsRGF0YVZhbCA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZXh0ZXJuYWxEYXRhVmFsLCd0aGlzLmV4dGVybmFsRGF0YVZhbCcpXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWluRGF0ZSwgJ3RvZGF5PT09PicsIHRoaXMubWF4RGF0ZSlcblxuICB9XG5cbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sO1xuICB9XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB0aXRsZUFsZXJ0ID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICBwb3N0OiBhbnkgPSAnJztcbiAgc2hvd2Zvcm0gPSBmYWxzZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBmb3JtZmllbGRyZWZyZXNodmFsID0gZmFsc2U7XG4gIGZvcm1kYXRhdmFsOiBhbnkgPSB7fTtcbiAgZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWw6IGFueSA9IHt9O1xuICBmaWxlcmZpZWxkZGF0YTogYW55ID0gW107XG4gIGF1dG9jb21wbGV0ZWZpbGVkdmFsdWU6IGFueSA9IFtdO1xuICBmaWxlYXJyYXk6IGFueSA9IFtdO1xuICBmaWxlY291bnQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b2NvbXBsZXRlOiBhbnkgPSAnJztcbiAgZmllbGRsb2FkaW5nOiBhbnkgPSAnJztcbiAgaXNQYXNzd29yZFZpc2libGU6IEJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2luZ2xlSW1nRm9ybURhdGE6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBpbWdWYWx1ZTogc3RyaW5nID0gJyc7XG5cbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG4gIEBPdXRwdXQoKSBvbkZvcm1GaWVsZENoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cblxuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gJyc7XG4gIGNyb3BwZWRJbWFnZTogYW55ID0gJyc7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKDApO1xuXG5cbiAgICAvLyB0aGlzLnNldENoYW5nZVZhbGlkYXRlKClcbiAgfVxuXG5cbiAgLy8gQ3VzdG9tRmxhZ0ZpZWxkc1xuICBDdXN0b21GbGFnRmllbGRzKGZpZWxkOiBhbnksIGl0ZW06IGFueSkge1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBjdXN0b21CdXR0b25WYWw6IGl0ZW0sIGN1c3RvbWZpZWxkOiAnYWRkJyB9KTtcbiAgfVxuXG4gIEN1c3RvbUZsYWdGaWVsZHNSZW1vdmUoZmllbGQ6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGN1c3RvbUJ1dHRvblZhbDogaXRlbSwgY3VzdG9tZmllbGQ6ICdyZW1vdmUnIH0pO1xuICB9XG5cblxuICAvL0dlbmVyYXRlIFBhc3N3b3JkIGJ1dHRvblxuICBHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuICAgIHRoaXMuUGFzc3dvcmRWYWwgPSAnJztcbiAgICB0aGlzLlBhc3N3b3JkVmFsID0gdGhpcy5tYWtlaWQoMTApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YWwudmFsdWUgPSB0aGlzLlBhc3N3b3JkVmFsO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnBhdGNoVmFsdWUodGhpcy5QYXNzd29yZFZhbCk7XG4gICAgfSwgMjAwKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuUGFzc3dvcmRWYWwsICdQYXNzd29yZFZhbCsrKysnKVxuXG5cbiAgICAvLyBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAvLyAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5wYXNzd29yZGZsYWcgPT0gdHJ1ZSkge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5wYXNzd29yZGZsYWcsICcrKysrPT0nLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSlcbiAgICAvLyAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udmFsdWUgPSB0aGlzLlBhc3N3b3JkVmFsO1xuICAgIC8vICAgICAvLyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS5wYXRjaFZhbHVlKHRoaXMuUGFzc3dvcmRWYWwpXG4gICAgLy8gICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGEgPSB7IGZpZWxkOiAncGFzc3dvcmQnLCB2YWx1ZTogdGhpcy5QYXNzd29yZFZhbCB9O1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5QYXNzd29yZFZhbCwgJ1Bhc3N3b3JkVmFsJylcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICAvL2NvcHkgUGFzc3dvcmQgYnV0dG9uXG4gIGNvcHlHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCcrK3Bhc3MnLHRoaXMuZm9ybUdyb3VwLnZhbHVlKVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlLCcrKz8/PycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLnZhbHVlXSlcbiAgXG5cbiAgICB2YXIgcGFzc3dvcmRGaWVsZERhdGE6IGFueSA9Jyc7XG5cbiAgICBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gJycpe1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gJyc7XG4gICAgfVxuICAgIFxuXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSksJz8/Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpXG5cblxuICAgIGlmIChwYXNzd29yZEZpZWxkRGF0YSAhPSBudWxsICYmIHBhc3N3b3JkRmllbGREYXRhICE9ICcnICYmIHR5cGVvZihwYXNzd29yZEZpZWxkRGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGVsLnZhbHVlID0gcGFzc3dvcmRGaWVsZERhdGE7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIGVsLnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29weSBUbyBDbGlwYm9hcmQnIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdQbGVhc2UgR2VuZXJhdGUgb3IgRW50ZXIgUGFzc3dvcmQuLiEnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgLy9wcmV2aWV3IFBhc3N3b3JkIGJ1dHRvblxuICBwcmV2aWV3R2VuZXJhdGVQYXNzd29yZCh2YWwpIHtcblxuICAgIHZhciBwYXNzd29yZEZpZWxkRGF0YTogYW55ID0nJztcblxuICAgIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSAnJyl7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSAnJztcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmRGaWVsZERhdGEgIT0gbnVsbCAmJiBwYXNzd29yZEZpZWxkRGF0YSAhPSAnJyAmJiB0eXBlb2YocGFzc3dvcmRGaWVsZERhdGEpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWwsICcrKysrKysrKysrKysnKVxuICAgICAgc3dpdGNoICh2YWwudHlwZSkge1xuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgdmFsLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICB2YWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIG9yIEVudGVyIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgcmFuIHBhc3N3b3JkXG4gIG1ha2VpZChsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1AnO1xuICAgIGxlbmd0aCA9IGxlbmd0aCArIDE7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICAvLyBleHRlcm5hbCBEYXRhIEZ1bmN0aW9uXG4gIGV4dGVybmFsRGF0YUZ1bmN0aW9uKHZhbHVlLGluZGV4KSB7XG4gICAgLy8gdGhpcy5leHRlcm5hbERhdGFWYWw9W107XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgYWN0aW9uOiAnZXh0ZXJuYWxkYXRhJyxmbGFnOidhZGQnLCAgZmllbGRWYWw6IHZhbHVlLGluZGV4OmluZGV4LCBleHRlcm5hbERhdGFWYWw6IHRoaXMuZXh0ZXJuYWxEYXRhVmFsIH0pO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlLCB0aGlzLmV4dGVybmFsRGF0YVZhbCxpbmRleCwnKysnKVxuICB9XG5cbiAgZXh0ZXJuYWxEYXRhRWRpdEZ1bmN0aW9uKGZsYWcsZmllbGQsaXZhbCxpKXtcblxuICAgIGNvbnNvbGUubG9nKGZsYWcsZmllbGQsaXZhbCxpLCdleHRlciArKysrJylcblxuICAgIGlmKGZsYWcgPT0gJ2VkaXQnKXtcbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2V4dGVybmFsZGF0YScsZmxhZzonZWRpdCcsICBmaWVsZFZhbDogZmllbGQsaW5kZXg6aXZhbCx2YWxpbmQ6aSxleHRlcm5hbERhdGFWYWw6IHRoaXMuZXh0ZXJuYWxEYXRhVmFsIH0pO1xuICAgIH1cblxuICAgIGlmKGZsYWcgPT0gJ3JlbW92ZScpe1xuICAgICAgZmllbGQudmFsdWUuc3BsaWNlKGksMSk7XG4gICAgfVxuXG5cbiAgfVxuXG5cblxuXG4gIC8vIG9wZW4gY2FsZW5kYXIgaW50byBkYXRlIGZpZWxkXG4gIG9wZW5DYWxlbmRhcigpIHtcbiAgICB0aGlzLmRhdGVmbGFnID0gdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVmbGFnLCAnZGF0ZWZsYWcnKVxuICB9XG5cbiAgbmF2dG9jYW5jZWwoKSB7XG4gICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGVdKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIGFmdGVyIHZpZXcgaW5pdCB0cmlnZ2VyJyk7XG4gICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdHJpZ2dlcmV2ZW50cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiB0cmlnZ2VyZXZlbnRzJywgdmFsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWwgbG9hZGVlZCB0cmlnZ2VyJywgdmFsKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBjYW5jZWwoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYW5jZWwnLGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG4gIGhhbmRsZURyb3AoZSkge1xuICAgIC8vIGxldCBhcGlCYXNlVVJMPVwiXCJcbiAgICAvLyB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcbiAgICBjb25zdCBhcGlCYXNlVVJMID0gJ2h0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYnO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlRHJvcCcsIGUpO1xuICAgIGNvbnN0IGR0ID0gZS5kYXRhVHJhbnNmZXI7XG4gICAgY29uc3QgZmlsZXMgPSBkdC5maWxlcztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlcywgJ2ZpbGVzJywgZS50YXJnZXQuaWQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2ZhcnInLCB0aGlzLmZpbGVhcnJheSk7XG5cbiAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpKSB7XG5cblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlZmllbGRzICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZmlsZXNbaV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcztcbiAgICAgICAgICAgIC8vIGZvcihsZXQgaSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcyl7XG4gICAgICAgICAgICAvLyAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlZmllbGRzID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHNbaV07XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaW5nbGVJbWdGb3JtRGF0YSwnc2luZ2xlSW1nRm9ybURhdGEnKVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgZGV0YWlscycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCBnKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRlbGV0ZWZpbGUodmEpXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZWZpbGUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0sIDEpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcblxuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXS5wdXNoKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlc1swXScsIGZpbGVzWzBdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5JywgdGhpcy5maWxlYXJyYXkpO1xuXG4gICAgICAvLyB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIC8vIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24oZSl7XG4gICAgICAvLyAgIGZldGNoKGFwaUJhc2VVUkwrXCIvcmVxdWVzdFVwbG9hZFVSTFwiLCB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAvLyAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAvLyAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oanNvbil7XG4gICAgICAvLyAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAvLyAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAvLyAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHt0eXBlOiBmaWxlLnR5cGV9KVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAvLyAgICAgdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgIC8vICAgICBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gdXBsb2FkZmlsZSh2YWw6IGFueSkge1xuICAvLyAgIC8vbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgLy8gICBsZXQgaDphbnk9dGhpcy5idWNrZXR1cGxvYWQodmFsKTtcbiAgLy8gICBjb25zb2xlLmxvZygndXBwcHAnLGgpO1xuXG5cbiAgLy8gfVxuXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHRyYWNrQnlGbk11bHRpcGxlKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cblxuICB0cmFja0J5Rm5NdWx0aShpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGtleXVwVmFsKHZhbCwgaXRlbSwgZmksIGluZCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbFtmaV0uaW1hZ2VmaWVsZHMsICdrZXl1cFZhbCcsIGl0ZW0sIGZpLCBpbmQpXG5cbiAgfVxuXG4gIHVwbG9hZGZpbGUodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBwcHAnLCB2YWwpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHZhbCcsIHZhbCk7XG4gICAgZmlsZS51cGxvYWRlZCA9IDI7IC8vIHNob3cgcHJvZ3Jlc3NiYXJcbiAgICBsZXQgdGVtcGxvYWRlcjogYW55ID0gdGhpcy5maWVsZGxvYWRpbmdbdmFsLm5hbWVdO1xuICAgIHRlbXBsb2FkZXIgPSB2YWwubmFtZTtcbiAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgICBmZXRjaCh2YWwuYXBpdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aDogdmFsLnBhdGgsXG4gICAgICAgICAgYnVja2V0OiB2YWwuYnVja2V0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYnVjaycsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwgeyB0eXBlOiBmaWxlLnR5cGUgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgZmlsZS5maWxlc2VydmVybmFtZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgLy8gaWYodmFsLmltYWdlZmllbGRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIC8vICAgZmlsZS5pbWFnZWZpZWxkcyA9IHZhbC5pbWFnZWZpZWxkc1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlLnR5cGUsICdmaWxlLnR5cGUnKTtcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cbiAgdXBsb2FkYWxsKHZhbDogYW55KSB7XG4gICAgLy8gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnVwbG9hZGFsbCA9IDE7XG4gICAgZm9yIChjb25zdCB5IGluIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSkge1xuICAgICAgY29uc3QgYzogYW55ID0gcGFyc2VJbnQoeSkgKiA1MDA7XG4gICAgICAvLyBjb25zb2xlLmxvZygnLS0tJywgdmFsLCAndi0tLScsICd0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0nLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XS51cGxvYWRlZCk7XG4gICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLmJ1Y2tldCA9PSBudWxsKSB0aGlzLnVwbG9hZGZpbGVtdWx0aXBsZSh2YWwsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgeSk7XG5cbiAgICB9XG5cbiAgfVxuICBkZWxldGVmaWxlbXVsdGlwbGVhbGwodmFsOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKSB7XG4gICAgICBjb25zdCBjOiBhbnkgPSBwYXJzZUludCh5KSAqIDUwMDtcbiAgICAgIHRoaXMuZGVsZXRlZmlsZW11bHRpcGxlKHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB5KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH0sIDIwMDApO1xuXG4gIH1cbiAgdXBsb2FkZmlsZW11bHRpcGxlKHZhbDogYW55LCBmOiBhbnksIGluZGV4ZjogYW55KSB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1baW5kZXhmXTtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlLCdmaWxlJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2coZiwnZicpO1xuICAgIGlmICh0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPT0gbnVsbCkgeyB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPSAwOyB9XG4gICAgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdKys7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdmFsIGluIG0gMicsIHZhbCwgZiwgaW5kZXhmLCAnaWYnLGZpbGUpO1xuICAgIGZpbGUudXBsb2FkZWQgPSAyOyAvLyBzaG93IHByb2dyZXNzYmFyXG4gICAgbGV0IHRlbXBsb2FkZXI6IGFueSA9IHRoaXMuZmllbGRsb2FkaW5nW3ZhbC5uYW1lXTtcbiAgICB0ZW1wbG9hZGVyID0gdmFsLm5hbWU7XG4gICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgICAgZmV0Y2godmFsLmFwaXVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHBhdGg6IHZhbC5wYXRoLFxuICAgICAgICAgIGJ1Y2tldDogdmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogZmlsZS50eXBlIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGZpbGUudXBsb2FkZWQgPSAxO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwnZmlsZS50eXBlJylcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB0eXBlJywgZmlsZSwgdHlwZW9mIChmaWxlKSk7XG4gICAgY29uc3QgZnR5cGU6IGFueSA9IHR5cGVvZiAoZmlsZSk7XG4gICAgLy8gaWYgKGZ0eXBlID09IFwiQmxvYlwiKSBcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cbiAgZGVsZXRlZmlsZSh2YWw6IGFueSwgZmxhZzogYW55ID0gJycpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknLHRoaXMuZmlsZWFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyx2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGZsYWcgPT0gJycpIHtcbiAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVmaWxlbXVsdGlwbGUodmFsOiBhbnksIGZpZWxkOiBhbnkgPSAnJywgaW5kZXg6IGFueSkge1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW2luZGV4XTtcbiAgICB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0tLTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdICE9IG51bGwpIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSBpbiBmb3JtICEhIScsIGNoYW5nZXMsICdmcnYnLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgICBmb3IgKGNvbnN0IHYgaW4gY2hhbmdlcykge1xuICAgICAgLy8gY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYgKHYgPT0gJ2Zvcm1maWVsZHJlZnJlc2hkYXRhJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsICdtJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwICE9IG51bGwgJiYgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCAhPSBudWxsICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGRdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKTtcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gbnVsbCAmJiB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZvcm1rZXkgaW4gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmRhdGFbZm9ybWtleV0nLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleV0gIT0gbnVsbCkgeyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5XS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0pOyB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3JtZGF0YXZhbGtleSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XS5pbmRleE9mKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBpZlxuXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm5hbWUgPT0gZm9ybWtleSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IG51bGwgfHwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIHNpbmdsZScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwsIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldID09ICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmYgb2YgaWZcblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIGNoZWNrIGJveCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybWtleSArICArIGF1dG9zZWx2YWwnLCBmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpICE9IC0xKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKHRydWUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKGZhbHNlKTsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5kIG9mIGlmXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdzaG93ZmllbGRsb2FkZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRsb2FkaW5nID0gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdhZGRmcm9tY29udHJvbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5tYW5hZ2Vmcm9tY29udHJvbCh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAncmVtb3ZlZnJvbWNvbnRyb2wnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFuYWdlZnJvbWNvbnRyb2wodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSwgJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICBmaWx0ZXJhdXRvY29tcGxldGUodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIHRoaXMuaW5wdXRibHVyKHZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NjJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZSwgZGF0YS52YWwpO1xuICAgIGNvbnN0IGZpZWxkdmFsID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICBpZiAoZmllbGR2YWwgPT0gJycgfHwgZmllbGR2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJ2YWwgPSBkYXRhLnZhbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2UnLCBlLCBmaWVsZHZhbClcbiAgICAgICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IFtdO1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IGZpbHRlcnZhbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWwnLCBmaWx0ZXJ2YWwpO1xuICAgIH1cblxuICB9XG4gIHJlbG9hZGF1dG9jb21wbGV0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZSA9IHZhbC5uYW1lO1xuICB9XG5cbiAgcmVtb3ZlY2hpcHNpbmdsZSh2YWw6IGFueSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICB9XG4gIHJlbW92ZWNoaXBtdWx0aXBsZSh2YWw6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHNldGF1dG9jb21wbGV0ZXZhbHVlKHZhbDogYW55LCBmaWVsZDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZmIGF1dG8gY29tcGxldGUgc2V0ICcsIHZhbCwgZmllbGQpO1xuXG5cblxuICAgIGlmIChmaWVsZC5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPSB2YWwua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0ucHVzaCh2YWwua2V5KTtcblxuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0ucGF0Y2hWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuaW5wdXRibHVyKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICB9XG5cblxuICBtYW5hZ2Vmcm9tY29udHJvbChmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlIGNvbnRyb2wnLCBmaWVsZCwgdHlwZSwgZmllbGQubGVuZ3RoKTtcbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLm5hbWUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGRbJ25hbWUnXSwgJ2MnLCB5LCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lID09IG51bGwgJiYgZmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubGVuZ3RoLCAnZmwnKTtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBmb3IgKGNvbnN0IHogaW4gZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZFt6XSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGRbel0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQgaW4gYXJyYXkgZm9ybSAnLCBmaWVsZFt6XSwgJ2MgYXInLCB5LCBmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2FkZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZGQgZm9ybScpO1xuICAgICAgaWYgKGZpZWxkLmFmdGVyICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuYWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSArIDEsIDAsIGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCAuLicsIGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gYXJyYXkgZm9ybSAgYWRkJyk7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW3ZdICE9IG51bGwgJiYgZmllbGRbdl0ubmFtZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbdl0uYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZFt2XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBmaWVsZCBhZGRlZCAuLicsIGZpZWxkW3ZdWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXNldGZvcm1kYXRhKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSAnJztcblxuICB9XG5cblxuICBjaGVja2NoYW5nZShmaWVsZDogYW55LCBpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsICdjaGFuZ2UnLCBpbmRleCwgJ2luZGV4MicpO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLmRlcGVuZGVudCAhPSBudWxsICYmIGZpZWxkLmRlcGVuZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdmM6IGFueSA9IDA7XG4gICAgICBmb3IgKGNvbnN0IG4gaW4gZmllbGQuZGVwZW5kZW50KSB7XG5cbiAgICAgICAgaWYgKGZpZWxkLmRlcGVuZGVudFtuXS5jb25kdmFsLnRvU3RyaW5nKCkgPT0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGxldCB0ZW12YWxpZGF0aW9ucnVsZXQ6IGFueSA9IFtdO1xuICAgICAgICAgIHZjKys7XG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSwgbmV3IEZvcm1Db250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC52YWx1ZSwgdGVtdmFsaWRhdGlvbnJ1bGV0KSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ25ubm5uJywgJy0tJywgcGFyc2VJbnQoaW5kZXggKyAxICsgcGFyc2VJbnQodmMpKSwgJy0tJywgdmMgKyBpbmRleCArIDEsIGluZGV4LCB2YywgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkWyduYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludChpbmRleCArIHBhcnNlSW50KHZjKSksIDAsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSksIDEpO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQnLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGRbJ25hbWUnXSwgJ2MnLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBjcmVhdGVGb3JtKGluaXRpYWxpemU6IGFueSA9IDApIHtcbiAgICAvKnRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbHJlZ2V4KV0sIHRoaXMuY2hlY2tJblVzZUVtYWlsXSxcbiAgICAgICdmdWxsbmFtZSc6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgLy8gJ3Bhc3N3b3JkJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmNoZWNrUGFzc3dvcmRdXSxcbiAgICAgIC8vJ2Rlc2NyaXB0aW9uJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApXV0sXG4gICAgICAvLyd2YWxpZGF0ZSc6ICcnXG4gICAgfSk7Ki9cbiAgICAvLyBsZXQgZGVtb0FycmF5OmFueT1bXTtcbiAgICBpZiAoaW5pdGlhbGl6ZSA9PSAwKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwgJ2ZnJylcbiAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXV0gPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZW1jb250cm9sYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgY29uc3QgdGVtdmFsaWRhdGlvbnJ1bGU6IGFueSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdmaWxlJykge1xuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWU7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RiJywgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmEgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z2JywgZmEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS51cGxvYWRlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5pbWFnZWZpZWxkcztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVjb3VudFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS51cGxvYWRlZCA9IDE7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSwgJ2ZpbGVhcnJheScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSA9PSBudWxsKSB7IHRlbWNvbnRyb2xhcnIucHVzaChbXSk7IH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGNoYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiJywgYiwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0ua2V5KSkge1xuICAgICAgICAgICAgICAgICAgdGNoYXJyLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgdGNoYXJyLnB1c2goZmFsc2UpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgdmFsXG4gICAgICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0Y2hhcnIpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGNoJywgdGNoYXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCAoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID0gJ05vdCBWYWxpZCAhISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF0Y2gnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5jaGVja1Bhc3N3b3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuYXV0b3JlcXVpcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdwYXR0ZXJuJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heExlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbicpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbkxlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfSwwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICAgICAgLy8gZGVtb0FycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdPW5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2ltYWdlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSArICdfJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgICAgICAgIH0sIDQwMDApO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBsZXQgdGNodmFyOiBhbnkgPSBmYWxzZTtcbiAgICAgICAgICAvLyBsZXRcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndnYgPz8/ICcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSk7XG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUFycmF5KFtdKSk7XG4gICAgICAgICAgZm9yIChjb25zdCBqIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2pdLmtleSkpIHtcbiAgICAgICAgICAgICAgdGNodmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7IHRjaHZhciA9IGZhbHNlOyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbicsIG4sIGosIHRjaHZhcik7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgKyAnX18nICsgaiwgbmV3IEZvcm1Db250cm9sKHRjaHZhciwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgICAgIC8vIGlmKClcbiAgICAgICAgICAgIC8qY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIpOyAvLyBpZiBmaXJzdCBpdGVtIHNldCB0byB0cnVlLCBlbHNlIGZhbHNlXG4gICAgICAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdIGFzIEZvcm1BcnJheSkucHVzaChjb250cm9sKTsqL1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRjaHZhcilcbiAgICAgICAgICAgIC8vIF0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKnRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodHJ1ZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICBdKSk7Ki9cbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHRlbWNvbnRyb2xhcnJbMF0sIGRpc2FibGVkOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5kaXNhYmxlZCB9LCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGF0IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F0IC4uLicsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0sIGF0LCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSkgPT0gJ29iamVjdCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLmtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXksICdtdWx0aSBhdXRvY29tcGxldGUgdHJpZ2dlcmVkICAhISAnKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaW5nbGUgYXV0byBjb21wbGV0ZSB0cmlnZ2VyIGJsb2NrJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXQgYXV0byBjb21wbGV0ZSBzaW5nbGUgdHJpZ2dlcmVkJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbMF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vICduZXdDb250cm9sJywgbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyA9dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy8gdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGRlbW9BcnJheSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycsZGVtb0FycmF5KTtcbiAgICAgIHRoaXMuc2hvd2Zvcm0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2dycCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIHNldENoYW5nZVZhbGlkYXRlKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgndmFsaWRhdGUnKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0ZSA9PSAnMScpIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pO1xuICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9ICdZb3UgbmVlZCB0byBzcGVjaWZ5IGF0IGxlYXN0IDMgY2hhcmFjdGVycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG5cbiAgY2hvb3NlaW1nKHZhbHM6IGFueSwgZmllbGRzOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWxzLCBmaWVsZHMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWd3cmFwcGVyJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBsZXQgZWxlbTogYW55O1xuICAgICAgZWxlbSA9IGVsO1xuICAgICAgLy8gZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuNXMgbGluZWFyIDBzXCI7XG4gICAgICAvLyBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltZ3dyYXBfJyArIGZpZWxkcy5uYW1lICsgJ18nICsgdmFscy5rZXkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkcy5uYW1lXS5wYXRjaFZhbHVlKHZhbHMua2V5KTtcbiAgfVxuICBjaGVja1Bhc3N3b3Jkcyhncm91cDogRm9ybUdyb3VwKSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcbiAgICBjb25zdCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgY29uc3QgY29uZmlybVBhc3MgPSBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQudmFsdWU7XG4gICAgaWYgKGNvbmZpcm1QYXNzID09IG51bGwgfHwgY29uZmlybVBhc3MgPT0gJycpIHtcbiAgICAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoeyByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChwYXNzICE9IGNvbmZpcm1QYXNzKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgbWF0Y2g6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyBtYXRjaDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIHJldHVybiBwYXNzID09PSBjb25maXJtUGFzcyA/IG51bGwgOiB7IG5vdFNhbWU6IHRydWUgfVxuICB9XG4gIGNoZWNrUGFzc3dvcmQoY29udHJvbCkge1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGNvbnRyb2wudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmRDaGVjayA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89Lns4LH0pLztcbiAgICByZXR1cm4gKCFwYXNzd29yZENoZWNrLnRlc3QoZW50ZXJlZFBhc3N3b3JkKSAmJiBlbnRlcmVkUGFzc3dvcmQpID8geyByZXF1aXJlbWVudHM6IHRydWUgfSA6IG51bGw7XG4gIH1cbiAgYXV0b3JlcXVpcmVkKGdyb3VwOiBhbnkpIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuXG4gICAgZm9yIChjb25zdCBiIGluIGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXBbYl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiBncm91cFtiXS52YWxpZGF0aW9ucyAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdICE9IG51bGwgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnNbMF0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXBbYl0ubmFtZV0gPT0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdLnNldEVycm9ycyh7IGF1dG9yZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHsgYXV0b3JlcXVpcmVkOiB0cnVlIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdiZ3JycicsZ3JvdXAsZ3JvdXAubmFtZSk7XG4gICAgLy8gaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZ3JvdXAubmFtZV0gIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zWzBdIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zWzBdLnJ1bGU9PSdhdXRvcmVxdWlyZWQnICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtncm91cC5uYW1lXT09bnVsbCl7XG5cblxuXG4gICAgLy8gbGV0IHBhc3MgPSBncm91cC5jb250cm9scy5wYXNzd29yZC52YWx1ZTtcbiAgICAvLyBsZXQgY29uZmlybVBhc3MgPSBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQudmFsdWU7XG4gICAgLy8gaWYoY29uZmlybVBhc3M9PW51bGwgfHwgY29uZmlybVBhc3M9PScnKXtcbiAgICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoe3JlcXVpcmVkOnRydWV9KTtcbiAgICAvLyAgIHJldHVybiB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgLy8gfVxuICAgIC8vIGlmKHBhc3MhPWNvbmZpcm1QYXNzKXtcbiAgICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoeydtYXRjaCc6dHJ1ZX0pO1xuICAgIC8vICAgcmV0dXJuIHttYXRjaDp0cnVlfTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuXG4gIGNoZWNrSW5Vc2VFbWFpbChjb250cm9sKSB7XG4gICAgLy8gbWltaWMgaHR0cCBkYXRhYmFzZSBhY2Nlc3NcbiAgICBjb25zdCBkYiA9IFsndG9ueUBnbWFpbC5jb20nXTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChkYi5pbmRleE9mKGNvbnRyb2wudmFsdWUpICE9PSAtMSkgPyB7IGFscmVhZHlJblVzZTogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFcnJvcihkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0RXJyb3InLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ0ZpZWxkIGlzIHJlcXVpcmVkJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSA/ICdOb3QgYSB2YWxpZCBlbWFpbGFkZHJlc3MnIDpcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdhbHJlYWR5SW5Vc2UnKSA/ICdUaGlzIGVtYWlsYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZScgOiAnJztcbiAgfVxuXG4gIGdldEVycm9yUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCAoYXQgbGVhc3QgZWlnaHQgY2hhcmFjdGVycywgb25lIHVwcGVyY2FzZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXIpJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVtZW50cycpID8gJ1Bhc3N3b3JkIG5lZWRzIHRvIGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJyA6ICcnO1xuICB9XG5cbiAgb25TdWJtaXQocG9zdCkge1xuICAgIHRoaXMucG9zdCA9IHBvc3Q7XG4gICAgY29uc3QgdGVtcGZvcm12YWw6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgeCBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLCB4LCAnZXJyJyk7XG4gICAgICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWxpZCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygneCcseCk7XG4gICAgICBjb25zdCBiID0geC5zcGxpdCgnX18nKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiJyxiLGIubGVuZ3RoLGJbMF0pO1xuXG5cbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkOiAxNTg5MTc0NDc3NTA0XG4gICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAvLyBzaXplOiAxMzUwOTZcbiAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgIHRmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZmlsZXNlcnZlcm5hbWU7XG4gICAgICAgICAgICB0ZmlsZS5uYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ubmFtZTtcbiAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zaXplO1xuICAgICAgICAgICAgdGZpbGUudHlwZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGU7XG4gICAgICAgICAgICB0ZmlsZS5wYXRoID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ucGF0aDtcbiAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgIHRmaWxlLmJhc2V1cmwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5iYXNldXJsO1xuXG4gICAgICAgICAgICB0ZmlsZS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGZpbGUsICd0ZmlsZT4+JywgdGZpbGUuaW1hZ2VmaWVsZHMsICdpbWFnZWZpZWxkcycpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgdGZpbGVhcnI6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgICAvLyBmaWxlc2VydmVybmFtZTogXCJUZXN0LTE1ODkyMTY5OTIzOTJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZDogMTU4OTE3NDQ3NzUwNFxuICAgICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgICAvLyBuYW1lOiBcIk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgICAgLy8gc2l6ZTogMTM1MDk2XG4gICAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIC8vIHVwbG9hZGVkOiAxXG4gICAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgdGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5maWxlc2VydmVybmFtZTtcbiAgICAgICAgICAgICAgdGZpbGUubmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLm5hbWU7XG4gICAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5zaXplO1xuICAgICAgICAgICAgICB0ZmlsZS50eXBlID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZTtcbiAgICAgICAgICAgICAgdGZpbGUucGF0aCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnBhdGg7XG4gICAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgICAgdGZpbGUuYmFzZXVybCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJhc2V1cmw7XG5cbiAgICAgICAgICAgICAgdGZpbGUuaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgICB0ZmlsZWFyci5wdXNoKHRmaWxlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZWFycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgIT0gbnVsbCAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWxpZGF0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7IHJlcXVpcmVkOiBudWxsIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBhZnRlciAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoeyByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0IGFmdGVyICcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wZm9ybXZhbFt4XSA9IHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChiLmxlbmd0aCA+IDEgJiYgYlswXSA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgIT0geCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYWFhZmYuLi4nKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsW2tdLmtleSA9PSBiWzFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2d2JywgYlsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vZm9yIG11bHRpcGxlIGVtYWlsIGFkZFxuICAgICAgICAvLyBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdlbWFpbCcpe1xuICAgICAgICAvLyAgIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlID09IHRydWUpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0sJz09dGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0rKycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUsJz8/Jyx0ZW1wZm9ybXZhbCwnPj4+JyxiWzBdKVxuICAgICAgICAvLyAgICAgLy8gZm9yKGxldCBpICBpbiB0ZW1wZm9ybXZhbCl7XG4gICAgICAgIC8vICAgICAvLyAgIGlmKHRlbXBmb3JtdmFsW2ldID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUubWF0Y2goJy9lbWFpbC9nJykpe1xuICAgICAgICAvLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRlbXBmb3JtdmFsW2ldLCd0ZW1wZm9ybXZhbFtpXScpXG4gICAgICAgIC8vICAgICAvLyAgIH1cbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cblxuXG5cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKSB7XG4gICAgICAgICAgdGVtcGZvcm12YWxbeF0gPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLCB4LCAnZXJyMjInKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocG9zdCwgJ3Bvc3QnLCB0aGlzLmZvcm1Hcm91cC52YWxpZCwgdGhpcy5mb3JtZGF0YXZhbCwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsICdmZmZmJywgdGVtcGZvcm12YWwpO1xuXG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgIC8vIGlmICh0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50ICE9IG51bGwgfHwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQ7XG4gICAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgICAgc291cmNlLmRhdGEgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcblxuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc2VjcmV0ICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZS5zZWNyZXQgPSB0aGlzLmZvcm1kYXRhdmFsLnNlY3JldDtcbiAgICAgICAgc291cmNlLmp3dHRva2VuID0gdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50ICE9ICcnKSB7XG5cbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6IHRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZWQnLCB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnJyAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnLycpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdHNlcnZlcmVycm9yJywgZmllbGR2YWw6ICdzZXJ2ZXJlcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyAvL2Rpc2FibGUgbG9hZGVyIFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6ICdzdWNjZXNzJywgZm9ybWRhdGF2YWw6IHRoaXMuZm9ybWRhdGF2YWwsIHNvdXJjZTogc291cmNlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0ZXJyb3InLCBmaWVsZHZhbDogJ3ZhbGlkYXRpb25lcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcgfSk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9GaXJzdEludmFsaWRDb250cm9sKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpIHtcbiAgICBjb25zdCBmaXJzdEludmFsaWRDb250cm9sOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0gLm5nLWludmFsaWRcIlxuICAgICk7XG5cbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogdGhpcy5nZXRUb3BPZmZzZXQoZmlyc3RJbnZhbGlkQ29udHJvbCksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9wT2Zmc2V0KGNvbnRyb2xFbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGxhYmVsT2Zmc2V0ID0gNTA7XG4gICAgcmV0dXJuIGNvbnRyb2xFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIGxhYmVsT2Zmc2V0O1xuICB9IHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gIH1cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCkge1xuICAgIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNyb3BwZWRJbWFnZScsIGV2ZW50KTtcbiAgfVxuICBpbWFnZUxvYWRlZCgpIHtcbiAgICAvLyBzaG93IGNyb3BwZXJcbiAgfVxuICBjcm9wcGVyUmVhZHkoKSB7XG4gICAgLy8gY3JvcHBlciByZWFkeVxuICB9XG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG59XG4iXX0=