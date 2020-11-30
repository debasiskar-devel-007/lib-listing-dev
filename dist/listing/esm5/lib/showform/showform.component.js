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
                        console.log(this_1.formdataval.fields[g], 'this.formdataval.fields[g]++');
                        if (this_1.formdataval.fields[g] != null && this_1.formdataval.fields[g].imagefields != null && this_1.formdataval.fields[g].imagefields.length > 0) {
                            files[i].imagefields = this_1.formdataval.fields[g].imagefields;
                        }
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
        console.log(val[fi].imagefields, 'keyupVal', 's', item, fi, ind, data, '---', this.filearray, ',,', fname, sfname, ev.target.value);
        this.filearray[fname][fi].imagefields[ind]['value'] = ev.target.value;
        // if (this.filearray[fname][fi].flds == null) {
        //   this.filearray[fname][fi].flds == [];
        //   this.filearray[fname][fi].flds[ind] = [];
        // }
        if (this.filearray[fname][fi].flds == null || this.filearray[fname][fi].flds[ind] == null) {
            console.log('111111111111111111111111111111');
            if (this.filearray[fname][fi].flds == null)
                this.filearray[fname][fi].flds = [];
            this.filearray[fname][fi].flds[ind] = [];
        }
        console.log('this.filearray[fname][fi].flds[ind] before', this.filearray[fname][fi].flds[ind]);
        this.filearray[fname][fi].flds[ind][sfname] = ev.target.value;
        console.log('this.filearray[fname][fi].flds[ind] after', this.filearray[fname][fi].flds[ind]);
        console.log(sfname, 'sfname', ind, ev.target.value);
        console.log('this.filearray');
        console.log(this.filearray);
        console.log('ddd', fi, ind);
        console.log(this.filearray[fname][fi]);
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
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <ckeditor (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\">\n                        </ckeditor>\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                create\n                                            </span>\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                clear\n                                            </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n\n\n\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\">Drop files here.\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n                            </div>\n\n\n\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\"\n                                [aspectRatio]=\"4 / 3\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\"\n                                (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\n\n                            <img [src]=\"croppedImage\" />\n\n\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container *ngIf=\"filearray[fields.name]!=null  && fields.multiple==null\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n                                            image\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                            picture_as_pdf\n                                        </span>\n\n                                        <span class=\"material-icons\" *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                            movie_filter\n                                        </span>\n\n                                        <span class=\"material-icons\"\n                                            *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                            description\n                                        </span>\n\n                                        <!-- <mat-card class=\"matimg-cls\">\n                                            <img mat-card-image [src]=\"apiBaseURL + path + filearray[fields.name].name\" alt=\"\">\n                                        </mat-card> -->\n\n                                        <span\n                                            class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                        <br />\n                                        <span\n                                            class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n\n                                        <!-- singleImgFormData -->\n                                        <ng-container class=\"descdiv\">\n                                            <div\n                                                *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                <div\n                                                    *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'text'\">\n                                                        <input matInput type=\"text\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\" name=\"{{item.name}}\"\n                                                            matInput placeholder=\"{{item.label}}\">\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'textarea'\">\n                                                        <textarea matInput name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            placeholder=\"{{item.label}}\" [rows]='3'\n                                                            [cols]='30'></textarea>\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"item.type == 'number'\">\n                                                        <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                            [ngModelOptions]=\"{standalone: true}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                            placeholder=\"{{item.label}}\">\n                                                    </mat-form-field>\n\n                                                    <div *ngIf=\"item.type == 'checkbox'\">\n                                                        <mat-checkbox name=\"{{item.name}}\"\n                                                            [(ngModel)]=\"fields.imagefields[i].value\"\n                                                            [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                        </mat-checkbox>\n                                                        &nbsp; {{item.label}}\n                                                    </div>\n                                                </div>\n\n                                            </div>\n                                        </ng-container>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\"\n                                                *ngIf=\"filearray[fields.name].uploaded==1\" mat-raised-button\n                                                (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple!=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <span *ngIf=\"files.uploaded==1\"\n                                                class=\"material-icons fileuploadcompleteicon\">\n                                                cloud_done\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n                                                image\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                description\n                                            </span>\n\n\n                                            <span class=\"fileuploadednameclass\">++ {{files.name}}</span>\n                                            <br />\n                                            <span class=\"fileuploadedtypeclass\"> == {{files.type}}</span>\n\n                                            <br>\n                                            <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                            <!-- multipleImgFormData -->\n                                            <ng-container class=\"descdiv\"\n                                                *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                <!-- fields {{fields | json}}ss -->\n\n\n                                                <!-- {{filearray[fields.name] | json}} filearray -->\n\n                                                <!-- <div *ngIf=\"fields.imagefields != null && fields.imagefields.length >0\"> -->\n                                                <div\n                                                    *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                    <!-- fields ==> {{fields.imagefields[ind] |json }} fi= {{fi}}\n                                                        ind={{ind}} ival={{ival}} ww++ -->\n                                                    <!-- \n                                                        imagefields ==> {{fields.imagefields.length}} fi= {{fi}}\n                                                        ind={{ind}} ival={{ival}} -->\n                                                    <br>\n\n                                                    <!-- arr=>   {{files[fi][formdataval.fields[fi].imagefields[ind].value]}} -->\n\n                                                    <!-- files 33 ++=> -->\n                                                    <!-- {{filearray[fields.name][fi].imagefields[fi].value}} -->\n\n\n                                                    <div>\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"val.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                matInput\n                                                                placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                        </mat-form-field>\n                                                    </div>\n\n                                                    <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"val.type == 'textarea'\">\n                                                        <textarea matInput\n                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                            matInput\n                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                            [rows]='3' [cols]='30'></textarea>\n                                                    </mat-form-field>\n\n                                                    <mat-form-field class=\"example-full-width\"\n                                                        *ngIf=\"val.type == 'number'\">\n                                                        <input type=\"number\" matInput\n                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                            matInput\n                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                            >\n                                                    </mat-form-field>\n\n\n                                                    <div *ngIf=\"val.type == 'checkbox'\">\n                                                        <mat-checkbox\n                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                            matInput\n                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                            matInput>\n                                                        </mat-checkbox>\n                                                        &nbsp;\n                                                    </div>\n                                                </div>\n\n                                                <!-- </div> -->\n                                            </ng-container>\n\n                                            <div class=\"actionbtndiv\">\n\n                                                <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                    mat-raised-button (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                    Upload\n                                                </mat-chip>\n                                                <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                    mat-raised-button (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                    Delete </mat-chip>\n                                            </div>\n\n                                            <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                    [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                </mat-progress-bar>\n                                            </section>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name]!=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n        </div>\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFpQixpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBRXhFLE9BQU8sRUFBc0IsV0FBVyxFQUFrQixNQUFNLDZCQUE2QixDQUFDO0FBRTlGLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7QUFHekM7SUE0Q0UsMkJBQW9CLFdBQXdCLEVBQVMsV0FBdUIsRUFBVSxTQUFzQixFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUVsSyx1REFBdUQ7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7O1FBcEI3SixhQUFRLEdBQVEsS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBRXRCLG9CQUFlLEdBQVEsRUFBRSxDQUFDO1FBRTFCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQXlCckMsZUFBVSxHQUFHLHdCQUF3QixDQUFDO1FBQ3RDLFNBQUksR0FBUSxFQUFFLENBQUM7UUFDZixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEIsd0JBQW1CLEdBQUcsS0FBSyxDQUFDO1FBQzVCLGdCQUFXLEdBQVEsRUFBRSxDQUFDO1FBQ3RCLDRCQUF1QixHQUFRLEVBQUUsQ0FBQztRQUNsQyxtQkFBYyxHQUFRLEVBQUUsQ0FBQztRQUN6QiwyQkFBc0IsR0FBUSxFQUFFLENBQUM7UUFDakMsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHdCQUFtQixHQUFRLEVBQUUsQ0FBQztRQUM5QixpQkFBWSxHQUFRLEVBQUUsQ0FBQztRQUN2QixzQkFBaUIsR0FBWSxJQUFJLENBQUM7UUFDM0Isc0JBQWlCLEdBQVEsRUFBRSxDQUFDO1FBRTVCLGFBQVEsR0FBVyxFQUFFLENBQUM7O1FBSTdCLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBQ2hDLFNBQUksR0FBUSxlQUFlLENBQUM7UUFDNUIsVUFBSyxHQUFHLEVBQUUsQ0FBQztRQUNYLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBQ1Asc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUl0RCxzQkFBaUIsR0FBUSxFQUFFLENBQUM7UUFDNUIsaUJBQVksR0FBUSxFQUFFLENBQUM7SUFuQ3ZCLENBQUM7SUExQ0Qsc0JBQ0ksdUNBQVE7Ozs7O1FBRFosVUFDYSxRQUFhO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDO1lBQzVCLGlDQUFpQztRQUNuQyxDQUFDOzs7T0FBQTtJQUNELHNCQUNJLG1EQUFvQjs7Ozs7UUFEeEIsVUFDeUIsb0JBQXlCO1lBQ2hELElBQUksQ0FBQyx1QkFBdUIsR0FBRyxvQkFBb0IsQ0FBQztZQUNwRCw2Q0FBNkM7UUFDL0MsQ0FBQzs7O09BQUE7SUFDRCxzQkFDSSwrQ0FBZ0I7Ozs7O1FBRHBCLFVBQ3FCLGdCQUFxQjtZQUN4QyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZ0JBQWdCLENBQUM7WUFDNUMseUNBQXlDO1FBQzNDLENBQUM7OztPQUFBO0lBV0Qsc0JBQ0ksNENBQWE7Ozs7O1FBRGpCLFVBQ2tCLEdBQVE7WUFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQztZQUMvQixtRUFBbUU7UUFDckUsQ0FBQzs7O09BQUE7SUFHRCxzQkFDSSxnREFBaUI7Ozs7O1FBRHJCLFVBQ3NCLEtBQVU7WUFDOUIsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLHNCQUFzQixDQUFDLENBQUE7UUFDM0QsQ0FBQzs7O09BQUE7SUFRRCxzQkFBSSxtQ0FBSTs7OztRQUFSO1lBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBZSxDQUFDO1FBQ25ELENBQUM7OztPQUFBOzs7O0lBaUNELG9DQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHbkIsMkJBQTJCO0lBQzdCLENBQUM7SUFHRCxtQkFBbUI7Ozs7Ozs7SUFDbkIsNENBQWdCOzs7Ozs7O0lBQWhCLFVBQWlCLEtBQVUsRUFBRSxJQUFTO1FBQ3BDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUN4SyxDQUFDOzs7Ozs7SUFFRCxrREFBc0I7Ozs7O0lBQXRCLFVBQXVCLEtBQVUsRUFBRSxJQUFTO1FBQzFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMzSyxDQUFDO0lBR0QsMEJBQTBCOzs7Ozs7SUFDMUIsNENBQWdCOzs7Ozs7SUFBaEIsVUFBaUIsR0FBRztRQUFwQixpQkFzQkM7UUFyQkMsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRW5DLFVBQVU7OztRQUFDO1lBQ1QsR0FBRyxDQUFDLEtBQUssR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDO1lBQzdCLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2pFLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUVSLG1EQUFtRDtRQUduRCw2Q0FBNkM7UUFDN0MsMkRBQTJEO1FBQzNELG9HQUFvRztRQUNwRywyREFBMkQ7UUFDM0QsMEVBQTBFO1FBQzFFLGtGQUFrRjtRQUVsRiwrQ0FBK0M7UUFDL0MsTUFBTTtRQUNOLElBQUk7SUFDTixDQUFDO0lBRUQsc0JBQXNCOzs7Ozs7SUFDdEIsZ0RBQW9COzs7Ozs7SUFBcEIsVUFBcUIsR0FBRztRQUV0QixpREFBaUQ7Ozs7WUFLN0MsaUJBQWlCLEdBQVEsRUFBRTtRQUUvQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksV0FBVyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO1lBQ3ZLLGlCQUFpQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDN0Q7YUFBTTtZQUNMLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUdELDRHQUE0RztRQUc1RyxJQUFJLGlCQUFpQixJQUFJLElBQUksSUFBSSxpQkFBaUIsSUFBSSxFQUFFLElBQUksT0FBTyxDQUFDLGlCQUFpQixDQUFDLElBQUksV0FBVyxFQUFFOztnQkFDL0YsRUFBRSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO1lBQzdDLEVBQUUsQ0FBQyxLQUFLLEdBQUcsaUJBQWlCLENBQUM7WUFDN0IsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDOUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ1osUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO2dCQUNsRCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsbUJBQW1CLEVBQUU7YUFDNUMsQ0FBQyxDQUFDO1NBQ0o7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2xELFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBRTthQUMvRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFHRCx5QkFBeUI7Ozs7OztJQUN6QixtREFBdUI7Ozs7OztJQUF2QixVQUF3QixHQUFHOztZQUVyQixpQkFBaUIsR0FBUSxFQUFFO1FBRS9CLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxFQUFFLEVBQUU7WUFDdkssaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUM3RDthQUFNO1lBQ0wsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1NBQ3hCO1FBRUQsSUFBSSxpQkFBaUIsSUFBSSxJQUFJLElBQUksaUJBQWlCLElBQUksRUFBRSxJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLFdBQVcsRUFBRTtZQUNyRyxtQ0FBbUM7WUFDbkMsUUFBUSxHQUFHLENBQUMsSUFBSSxFQUFFO2dCQUNoQixLQUFLLFVBQVU7b0JBQ2IsR0FBRyxDQUFDLElBQUksR0FBRyxNQUFNLENBQUM7b0JBQ2xCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7b0JBQy9CLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULEdBQUcsQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDO29CQUN0QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO29CQUU5QixNQUFNO2FBQ1Q7U0FDRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFO2FBQy9ELENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUdELHVCQUF1Qjs7Ozs7O0lBQ3ZCLGtDQUFNOzs7Ozs7SUFBTixVQUFPLE1BQU07O1lBQ1AsTUFBTSxHQUFHLEdBQUc7UUFDaEIsTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUM7O1lBQ2hCLFVBQVUsR0FBRyxnRUFBZ0U7O1lBQzdFLGdCQUFnQixHQUFHLFVBQVUsQ0FBQyxNQUFNO1FBQ3hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDL0IsTUFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1NBQzNFO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUlELHlCQUF5Qjs7Ozs7OztJQUN6QixnREFBb0I7Ozs7Ozs7SUFBcEIsVUFBcUIsS0FBSyxFQUFFLEtBQUs7UUFDL0IsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztRQUMzSSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUN2RCxDQUFDOzs7Ozs7OztJQUVELG9EQUF3Qjs7Ozs7OztJQUF4QixVQUF5QixJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDO1FBRTNDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFBO1FBRS9DLElBQUksSUFBSSxJQUFJLE1BQU0sRUFBRTtZQUNsQixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxFQUFFLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUMsQ0FBQztTQUN2SjtRQUVELElBQUksSUFBSSxJQUFJLFFBQVEsRUFBRTtZQUNwQixLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FDMUI7SUFHSCxDQUFDO0lBS0QsZ0NBQWdDOzs7OztJQUNoQyx3Q0FBWTs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLHlDQUF5QztJQUMzQyxDQUFDOzs7O0lBRUQsdUNBQVc7OztJQUFYO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDeEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7SUFDSCxDQUFDOzs7O0lBQ0QsMkNBQWU7OztJQUFmO1FBQUEsaUJBYUM7UUFaQyxVQUFVOzs7UUFBQztZQUNULDZDQUE2QztZQUM3QyxLQUFLLElBQU0sQ0FBQyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7b0JBQzdDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzVJLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7b0JBQzdJLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxDQUFDLENBQUM7aUJBRTdJO2FBQ0Y7UUFFSCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7OztJQUVELHlDQUFhOzs7O0lBQWIsVUFBYyxHQUFRO1FBQXRCLGlCQVNDO1FBUkMsd0NBQXdDO1FBQ3hDLFVBQVU7OztRQUFDO1lBQ1QsMkNBQTJDO1lBQzNDLEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3JILEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLFdBQVcsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3RILEtBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzNILENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUVYLENBQUM7Ozs7O0lBRUQsa0NBQU07Ozs7SUFBTixVQUFPLENBQUM7UUFDTiwyQkFBMkI7UUFDM0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQ25CLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFHRCxzQ0FBVTs7OztJQUFWLFVBQVcsQ0FBQztRQUFaLGlCQXdGQzs7OztZQXJGTyxJQUFJLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUM7O1lBQ3RDLFVBQVUsR0FBRyw0REFBNEQ7UUFDL0UsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDOzs7WUFFYixFQUFFLEdBQUcsQ0FBQyxDQUFDLFlBQVk7O1lBQ25CLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSztnQ0FDYixDQUFDOztnQkFDRixJQUFJLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQztZQUNyQiw0Q0FBNEM7WUFDNUMsdUNBQXVDO1lBRXZDLEtBQUssSUFBTSxDQUFDLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN2QyxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtvQkFFbkgsMERBQTBEO29CQUUxRCw4REFBOEQ7b0JBRTlELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7d0JBQy9DLHNCQUFzQjt3QkFDdEIsSUFBSSxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUMzRCxLQUFLLElBQU0sQ0FBQyxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sRUFBRTtnQ0FDdkMsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLEVBQUU7b0NBQ3RFLE9BQUssVUFBVSxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FDL0MsVUFBVTs7O29DQUFDO3dDQUNULEtBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztvQ0FDN0QsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2lDQUNQOzZCQUNGO3lCQUNGOzZCQUFNOzRCQUNMLE9BQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7eUJBQzVEO3FCQUNGO3lCQUFNO3dCQUVMLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLDhCQUE4QixDQUFDLENBQUE7d0JBRXZFLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7NEJBRTdJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzt5QkFFL0Q7d0JBSUQsSUFBSSxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUMzRCxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUN0RDt3QkFDRCxPQUFLLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUMvRCxxQ0FBcUM7cUJBQ3RDO2lCQUVGO2FBQ0Y7OztRQTlDSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUU7b0JBQTVCLENBQUM7U0E2RVQ7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCx5QkFBeUI7SUFDekIscUZBQXFGO0lBQ3JGLHNDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsSUFBSTs7Ozs7Ozs7OztJQUVKLHFDQUFTOzs7Ozs7Ozs7O0lBQVQsVUFBVSxLQUFLO1FBQ2IsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELDZDQUFpQjs7OztJQUFqQixVQUFrQixLQUFLO1FBQ3JCLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFHRCwwQ0FBYzs7OztJQUFkLFVBQWUsS0FBSztRQUNsQixPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7Ozs7Ozs7Ozs7OztJQUVELG9DQUFROzs7Ozs7Ozs7OztJQUFSLFVBQVMsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUU7UUFDbEQsdUdBQXVHO1FBQ3ZHLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxVQUFVLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3BJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ3RFLGdEQUFnRDtRQUNoRCwwQ0FBMEM7UUFDMUMsOENBQThDO1FBQzlDLElBQUk7UUFDSixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1lBQzlDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSTtnQkFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7WUFDaEYsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzFDO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQzlELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM5RixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7OztJQUlELHNDQUFVOzs7O0lBQVYsVUFBVyxHQUFROzs7WUFFWCxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7O1lBQ3pCLElBQUksR0FBUSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDMUMsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsbUJBQW1COzs7WUFDbEMsVUFBVSxHQUFRLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNqRCxVQUFVLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN0QixvREFBb0Q7UUFDcEQsTUFBTSxDQUFDLFNBQVM7Ozs7UUFBRyxVQUFDLENBQUM7WUFDbkIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ2hCLE1BQU0sRUFBRSxNQUFNO2dCQUNkLE9BQU8sRUFBRTtvQkFDUCxjQUFjLEVBQUUsa0JBQWtCO2lCQUNuQztnQkFDRCxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQztvQkFDbkIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztvQkFDaEQsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO29CQUNmLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSTtvQkFDZCxNQUFNLEVBQUUsR0FBRyxDQUFDLE1BQU07aUJBQ25CLENBQUM7YUFDSCxDQUFDO2lCQUNDLElBQUk7Ozs7WUFBQyxVQUFVLFFBQVE7Z0JBQ3RCLGlDQUFpQztnQkFDakMsT0FBTyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDekIsQ0FBQyxFQUFDO2lCQUNELElBQUk7Ozs7WUFBQyxVQUFVLElBQUk7Z0JBQ2xCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQzNCLE1BQU0sRUFBRSxLQUFLO29CQUNiLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7aUJBQ3JELENBQUMsQ0FBQztZQUNMLENBQUMsRUFBQztpQkFDRCxJQUFJOzs7WUFBQztnQkFDSixvQkFBb0I7Z0JBQ3BCLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNqRSxrQ0FBa0M7Z0JBQ2xDLHVDQUF1QztnQkFDdkMsSUFBSTtnQkFDSix1Q0FBdUM7Z0JBQ3ZDLHFCQUFxQjtnQkFDckIsd0RBQXdEO2dCQUN4RCw2R0FBNkc7Z0JBQzdHLHNDQUFzQztZQUN4QyxDQUFDLEVBQUMsQ0FBQztZQUNMLE1BQU07UUFDUixDQUFDLENBQUEsQ0FBQztRQUNGLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUNELHFDQUFTOzs7O0lBQVQsVUFBVSxHQUFRO1FBQ2hCLDBDQUEwQztRQUMxQyxLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDbEMsQ0FBQyxHQUFRLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHO1lBQ2hDLGtJQUFrSTtZQUNsSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJO2dCQUFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7U0FFOUc7SUFFSCxDQUFDOzs7OztJQUNELGlEQUFxQjs7OztJQUFyQixVQUFzQixHQUFRO1FBQTlCLGlCQVNDO1FBUkMsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs7Z0JBQ2xDLENBQUMsR0FBUSxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztZQUNoQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsVUFBVTs7O1FBQUM7WUFDVCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBRVgsQ0FBQzs7Ozs7OztJQUNELDhDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLEdBQVEsRUFBRSxDQUFNLEVBQUUsTUFBVzs7WUFDeEMsTUFBTSxHQUFHLElBQUksVUFBVSxFQUFFOztZQUN6QixJQUFJLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xELDRCQUE0QjtRQUM1QiwyQkFBMkI7UUFDM0Isc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQUU7UUFDdkUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztRQUMzQiw2REFBNkQ7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxtQkFBbUI7OztZQUNsQyxVQUFVLEdBQVEsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pELFVBQVUsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3RCLG9EQUFvRDtRQUNwRCxNQUFNLENBQUMsU0FBUzs7OztRQUFHLFVBQUMsQ0FBQztZQUNuQixLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRTtnQkFDaEIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsT0FBTyxFQUFFO29CQUNQLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ25DO2dCQUNELElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUNuQixJQUFJLEVBQUUsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO29CQUNoRCxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUk7b0JBQ2YsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJO29CQUNkLE1BQU0sRUFBRSxHQUFHLENBQUMsTUFBTTtpQkFDbkIsQ0FBQzthQUNILENBQUM7aUJBQ0MsSUFBSTs7OztZQUFDLFVBQVUsUUFBUTtnQkFDdEIsaUNBQWlDO2dCQUNqQyxPQUFPLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QixDQUFDLEVBQUM7aUJBQ0QsSUFBSTs7OztZQUFDLFVBQVUsSUFBSTtnQkFDbEIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTtvQkFDM0IsTUFBTSxFQUFFLEtBQUs7b0JBQ2IsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztpQkFDckQsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFDO2lCQUNELElBQUk7OztZQUFDO2dCQUNKLG9CQUFvQjtnQkFDcEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ2pFLHFDQUFxQztnQkFDckMscUJBQXFCO2dCQUNyQix3REFBd0Q7Z0JBQ3hELDZHQUE2RztnQkFDN0csc0NBQXNDO1lBQ3hDLENBQUMsRUFBQyxDQUFDO1lBQ0wsTUFBTTtRQUNSLENBQUMsQ0FBQSxDQUFDOzs7WUFFSSxLQUFLLEdBQVEsT0FBTyxDQUFDLElBQUksQ0FBQztRQUNoQyx3QkFBd0I7UUFDeEIsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUNELHNDQUFVOzs7OztJQUFWLFVBQVcsR0FBUSxFQUFFLElBQWM7UUFBbkMsaUJBbUNDO1FBbkNvQixxQkFBQSxFQUFBLFNBQWM7Ozs7O1lBSTNCLE1BQU0sR0FBUSxFQUFFOztZQUNoQixJQUFJLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JDLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztRQUN2QixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxHQUFHOztnQkFDeEYsTUFBTSxHQUFRLEVBQUU7WUFDcEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUNiLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLElBQUksSUFBSSxJQUFJLEVBQUUsRUFBRTtnQkFDNUMsMEJBQTBCO2dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFO2lCQUNyQyxDQUFDLENBQUM7Z0JBQ0gsS0FBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ2pDO1lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDbEQsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7UUFFSCxDQUFDOzs7O1FBQUUsVUFBQSxLQUFLO1lBQ04sMEJBQTBCO1lBQzFCLEtBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7Z0JBQ2xELFFBQVEsRUFBRSxJQUFJO2dCQUNkLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTthQUM1RCxDQUFDLENBQUM7WUFDSCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUN2QixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7Ozs7SUFDRCw4Q0FBa0I7Ozs7OztJQUFsQixVQUFtQixHQUFRLEVBQUUsS0FBZSxFQUFFLEtBQVU7UUFBeEQsaUJBaUNDO1FBakM0QixzQkFBQSxFQUFBLFVBQWU7O1lBQ3BDLE1BQU0sR0FBUSxFQUFFOztZQUNoQixJQUFJLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ2pELElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDM0IsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDckMsTUFBTSxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUc7O2dCQUN4RixNQUFNLEdBQVEsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtnQkFDOUIsMEJBQTBCO2dCQUMxQixLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFO2lCQUNyQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJO29CQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDakY7WUFDRCxJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksT0FBTyxFQUFFO2dCQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsTUFBTTtpQkFDYixDQUFDLENBQUM7YUFDSjtRQUVILENBQUM7Ozs7UUFBRSxVQUFBLEtBQUs7WUFDTiwwQkFBMEI7WUFDMUIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO2FBQzVELENBQUMsQ0FBQztZQUNILEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCx1Q0FBVzs7OztJQUFYLFVBQVksT0FBNEM7UUFBeEQsaUJBZ0ZDO1FBOUVDLHVGQUF1RjtRQUN2RixLQUFLLElBQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTtZQUN2QixrQ0FBa0M7WUFDbEMsSUFBSSxDQUFDLElBQUksc0JBQXNCLEVBQUU7Z0JBQy9CLFVBQVU7OztnQkFBQztvQkFDVCxnQ0FBZ0M7b0JBQ2hDLElBQUksS0FBSSxDQUFDLHVCQUF1QixJQUFJLElBQUksRUFBRTt3QkFDeEMsa0RBQWtEO3dCQUNsRCxtREFBbUQ7d0JBQ25ELG1EQUFtRDt3QkFDbkQsSUFBSSxLQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUMvSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLENBQUMsVUFBVSxDQUFDLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsQ0FBQzt5QkFDNUc7d0JBQUMsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxJQUFJLFFBQVEsRUFBRTs0QkFDckssS0FBSyxJQUFNLE9BQU8sSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxFQUFFO2dDQUM5RCxnSEFBZ0g7Z0NBQ2hILElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxFQUFFO29DQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7aUNBQUU7Z0NBQ2pKLEtBQUssSUFBTSxjQUFjLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7b0NBQ3BELElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxJQUFJLE9BQU8sSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLElBQUksY0FBYyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLElBQUksS0FBSyxDQUFDLEVBQUU7d0NBQ3hQLEtBQUssSUFBTSxVQUFVLElBQUksS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxFQUFFOzRDQUNwRSxpSUFBaUk7NENBQ2pJLElBQUksS0FBSSxDQUFDLHVCQUF1QixDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dEQUNoSSxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NkNBQzdIO3lDQUVGO3FDQUVGO29DQUNELFlBQVk7b0NBRVosSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFjLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsRUFBRTt3Q0FDeFAsS0FBSyxJQUFNLFVBQVUsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUU7NENBQ3BFLDhIQUE4SDs0Q0FDOUgsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dEQUN0SCxLQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7NkNBQzdIO3lDQUVGO3FDQUVGO29DQUNELFlBQVk7b0NBRVosSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxJQUFJLElBQUksT0FBTyxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksQ0FBQyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsRUFBRTt3Q0FDcFAsS0FBSyxJQUFNLFVBQVUsSUFBSSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEVBQUU7NENBQ3BFLDJJQUEySTs0Q0FDM0ksdUVBQXVFOzRDQUN2RSxJQUFJLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRTtnREFFaEksSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtvREFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpREFBRTs2Q0FDN0k7aURBQU07Z0RBQ0wsSUFBSSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxJQUFJLElBQUksRUFBRTtvREFBRSxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpREFBRTs2Q0FFOUk7eUNBRUY7cUNBRUY7b0NBQ0QsWUFBWTtpQ0FHYjs2QkFDRjt5QkFHRjt3QkFDRCxJQUFJLEtBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLElBQUksaUJBQWlCLEVBQUU7NEJBQzNELEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssQ0FBQzt5QkFDeEQ7d0JBQ0QsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxJQUFJLGdCQUFnQixFQUFFOzRCQUMxRCxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQzt5QkFDbkU7d0JBQ0QsSUFBSSxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxJQUFJLG1CQUFtQixFQUFFOzRCQUM3RCxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLHVCQUF1QixDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQzt5QkFDdEU7cUJBRUY7Z0JBQ0gsQ0FBQyxHQUFFLENBQUMsQ0FBQyxDQUFDO2FBQ1A7U0FDRjtJQUNILENBQUM7Ozs7O0lBRUQscUNBQVM7Ozs7SUFBVCxVQUFVLEdBQVE7UUFDaEIsZ0NBQWdDO1FBQ2hDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7OztJQUVELDhDQUFrQjs7Ozs7SUFBbEIsVUFBbUIsR0FBUSxFQUFFLElBQVM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQzs7O1lBRWQsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUs7UUFDbkQsSUFBSSxRQUFRLElBQUksRUFBRSxJQUFJLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDdEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUM7U0FDMUI7YUFBTTs7Z0JBQ0MsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTTs7OztZQUFDLFVBQVUsQ0FBQztnQkFDM0MsZ0NBQWdDO2dCQUNoQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLENBQUMsRUFBQztZQUNGLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLGlDQUFpQztTQUNsQztJQUVILENBQUM7Ozs7O0lBQ0QsOENBQWtCOzs7O0lBQWxCLFVBQW1CLEdBQVE7UUFDekIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7Ozs7SUFFRCw0Q0FBZ0I7Ozs7SUFBaEIsVUFBaUIsR0FBUTtRQUN2QixJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztJQUMvQyxDQUFDOzs7Ozs7SUFDRCw4Q0FBa0I7Ozs7O0lBQWxCLFVBQW1CLEdBQVEsRUFBRSxLQUFVO1FBQ3JDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUNyRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QztJQUNILENBQUM7Ozs7OztJQUNELGdEQUFvQjs7Ozs7SUFBcEIsVUFBcUIsR0FBUSxFQUFFLEtBQVU7UUFDdkMsb0RBQW9EO1FBSXBELElBQUksS0FBSyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7WUFDMUIsSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDO1NBQ25EO2FBQU07WUFDTCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO2dCQUNuRCxJQUFJLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQzthQUM5QztZQUNELElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUV2RDtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksRUFBRTtZQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQzVCO0lBRUgsQ0FBQzs7Ozs7O0lBR0QsNkNBQWlCOzs7OztJQUFqQixVQUFrQixLQUFVLEVBQUUsSUFBUztRQUNyQyw0REFBNEQ7UUFDNUQsSUFBSSxJQUFJLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQzFDLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUU7b0JBQ2pELElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsd0RBQXdEO2lCQUN6RDthQUNGO1NBQ0Y7UUFFRCxJQUFJLElBQUksSUFBSSxRQUFRLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDOUQsbUNBQW1DO1lBQ25DLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO29CQUNyQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQy9DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN2QyxxRUFBcUU7cUJBQ3RFO2lCQUNGO2FBQ0Y7U0FDRjtRQUVELElBQUksSUFBSSxJQUFJLEtBQUssRUFBRTtZQUNqQiw4QkFBOEI7WUFDOUIsSUFBSSxLQUFLLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtnQkFDdkIsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtvQkFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLEtBQUssRUFBRTt3QkFDbEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO3dCQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixrREFBa0Q7cUJBQ25EO2lCQUNGO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxFQUFFO29CQUM5QixxQ0FBcUM7b0JBQ3JDLEtBQUssSUFBTSxDQUFDLElBQUksS0FBSyxFQUFFO3dCQUNyQixLQUFLLElBQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFOzRCQUN2QyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUU7Z0NBQ2xHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQ0FDbkIsaUVBQWlFOzZCQUNsRTt5QkFDRjtxQkFFRjtpQkFDRjthQUNGO1NBRUY7SUFFSCxDQUFDOzs7O0lBRUQseUNBQWE7OztJQUFiO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsc0JBQXNCLEdBQUcsRUFBRSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxFQUFFLENBQUM7SUFFaEMsQ0FBQzs7Ozs7O0lBR0QsdUNBQVc7Ozs7O0lBQVgsVUFBWSxLQUFVLEVBQUUsS0FBVTtRQUNoQyxpREFBaUQ7UUFDakQsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO1NBQzVIO1FBQ0QsSUFBSSxLQUFLLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUNyRCxFQUFFLEdBQVEsQ0FBQztZQUNmLEtBQUssSUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLFNBQVMsRUFBRTtnQkFFL0IsSUFBSSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNqRyxvQ0FBb0M7b0JBQ3BDLEVBQUUsRUFBRSxDQUFDO29CQUNMLGlJQUFpSTtvQkFDakkscUlBQXFJO29CQUNySSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFFcEI7cUJBQU07b0JBQ0wsS0FBSyxJQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTt3QkFDdkMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFOzRCQUNwRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDOzRCQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs0QkFDNUQsb0VBQW9FO3lCQUNyRTtxQkFDRjtpQkFFRjthQUNGO1NBQ0Y7SUFDSCxDQUFDOzs7OztJQUlELHNDQUFVOzs7O0lBQVYsVUFBVyxVQUFtQjtRQUE5QixpQkFtTEM7UUFuTFUsMkJBQUEsRUFBQSxjQUFtQjtRQUM1Qjs7Ozs7O2FBTUs7UUFDTCx3QkFBd0I7UUFDeEIsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDN0M7Z0NBRVUsQ0FBQztZQUNWLElBQUksT0FBSyxTQUFTLENBQUMsUUFBUSxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTs7b0JBQ3pELGFBQWEsR0FBUSxFQUFFOztvQkFDdkIsaUJBQWlCLEdBQVEsRUFBRTtnQkFDakMsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksRUFBRTtvQkFDNUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3hCO2dCQUVELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLEVBQUU7b0JBQzdDLE9BQUssU0FBUyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO29CQUNuRix1R0FBdUc7b0JBQ3ZHLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7d0JBQzlGLEtBQUssSUFBTSxFQUFFLElBQUksT0FBSyxTQUFTLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNoRSx5QkFBeUI7NEJBQ3pCLElBQUksT0FBSyxTQUFTLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLElBQUksRUFBRTtnQ0FDL0QsMEVBQTBFO2dDQUMxRSxPQUFLLFNBQVMsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztnQ0FFakUsNEdBQTRHOzZCQUM3Rzt5QkFFRjt3QkFDRCxJQUFJLE9BQUssU0FBUyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBQzNELE9BQUssU0FBUyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxPQUFLLFNBQVMsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDO3lCQUMxRztxQkFFRjt5QkFBTTt3QkFDTCxJQUFJLE9BQUssU0FBUyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7NEJBQzNELE9BQUssU0FBUyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO3lCQUU5RDtxQkFDRjtvQkFFRCwyQ0FBMkM7aUJBQzVDO2dCQUVELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7b0JBQy9JLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7d0JBQUUsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztxQkFBRTt5QkFBTTt3QkFDN0UsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTs7Z0NBQ3BDLE1BQU0sR0FBUSxFQUFFOzRCQUN0QixLQUFLLElBQU0sQ0FBQyxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUU7Z0NBQzlDLDBEQUEwRDtnQ0FDMUQsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLElBQUksSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29DQUNoSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lDQUNuQjtxQ0FBTTtvQ0FBRSxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lDQUFFOzZCQUMvQjs0QkFDRCxlQUFlOzRCQUNmLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7NEJBQzNCLDhCQUE4Qjt5QkFDL0I7cUJBQ0Y7aUJBQ0Y7Z0JBRUQsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZHLEtBQUssSUFBTSxDQUFDLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRTt3QkFDdEQsb0JBQW9CO3dCQUNwQixJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksRUFBRTs0QkFDN0QsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEdBQUcsY0FBYyxDQUFDO3lCQUNwRTt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFVBQVUsRUFBRTs0QkFDaEUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQzt5QkFDN0M7d0JBQ0QsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLEVBQUU7NEJBQzdELE9BQUssU0FBUyxDQUFDLGFBQWEsQ0FBQyxPQUFLLGNBQWMsQ0FBQyxDQUFDO3lCQUNuRDt3QkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGNBQWMsRUFBRTs0QkFDcEUsT0FBSyxTQUFTLENBQUMsYUFBYSxDQUFDLE9BQUssWUFBWSxDQUFDLENBQUM7eUJBQ2pEO3dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFOzRCQUMvRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQzdGO3dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFOzRCQUNqRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQy9GO3dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFOzRCQUMzRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ3pGO3dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFOzRCQUMzRCxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQ3pGO3dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFOzRCQUNqRSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7eUJBQy9GO3dCQUNELFFBQVE7cUJBQ1Q7aUJBQ0Y7Z0JBRUQseUdBQXlHO2dCQUN6RyxrRUFBa0U7Z0JBRWxFLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxPQUFPLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7b0JBQzFGLFVBQVU7OztvQkFBQzt3QkFDVCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFDcEosQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO2lCQUVWO2dCQUNELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxVQUFVLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7O3dCQUMzSSxNQUFNLEdBQVEsS0FBSztvQkFDdkIsTUFBTTtvQkFDTixrSUFBa0k7b0JBQ2xJLGlGQUFpRjtvQkFDakYsS0FBSyxJQUFNLENBQUMsSUFBSSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFO3dCQUM5QyxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7NEJBQ2hJLE1BQU0sR0FBRyxJQUFJLENBQUM7eUJBQ2Y7NkJBQU07NEJBQUUsTUFBTSxHQUFHLEtBQUssQ0FBQzt5QkFBRTt3QkFDMUIsa0NBQWtDO3dCQUNsQyxPQUFLLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksV0FBVyxDQUFDLE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7d0JBQ2xILE9BQU87d0JBQ1A7MkdBQ21GO3dCQUNuRixxRkFBcUY7d0JBQ3JGLG1DQUFtQzt3QkFDbkMsT0FBTztxQkFDUjtvQkFFRDs7Ozs7c0JBS0U7b0JBQ0Ysb0hBQW9IO2lCQUNySDtxQkFBTTtvQkFDTCxPQUFLLFNBQVMsQ0FBQyxVQUFVLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxFQUFFLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7aUJBQzVLO2dCQUdELElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFjLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLEVBQUU7b0JBQ25KLEtBQUssSUFBTSxFQUFFLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRTt3QkFDL0MsMklBQTJJO3dCQUMzSSxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksUUFBUSxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7NEJBQy9MLDRGQUE0Rjs0QkFDNUYsT0FBSyxvQkFBb0IsQ0FBQyxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUMzRjtxQkFDRjtpQkFDRjtnQkFDRCxJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksY0FBYyxJQUFJLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxLQUFLLENBQUMsRUFBRTtvQkFDdEosaUZBQWlGO29CQUVqRixJQUFJLE9BQUssV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO3dCQUM1QyxpRkFBaUY7d0JBQ2pGLE9BQUssb0JBQW9CLENBQUMsT0FBSyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFLLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFFMUY7aUJBRUY7Z0JBSUQseURBQXlEO2FBQzFEOzs7UUF6Skgsb0NBQW9DO1FBQ3BDLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNO29CQUE1QixDQUFDO1NBeUpYO1FBQ0Qsd0NBQXdDO1FBQ3hDLHNEQUFzRDtRQUV0RCxVQUFVOzs7UUFBQztZQUNULDhDQUE4QztZQUM5QyxLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLEtBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDekMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO2FBQ3RDO1lBQ0QsK0NBQStDO1FBQ2pELENBQUMsR0FBRSxFQUFFLENBQUMsQ0FBQztJQUVULENBQUM7Ozs7SUFFRCw2Q0FBaUI7OztJQUFqQjtRQUFBLGlCQVlDO1FBWEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsWUFBWSxDQUFDLFNBQVM7Ozs7UUFDbkQsVUFBQyxRQUFRO1lBQ1AsSUFBSSxRQUFRLElBQUksR0FBRyxFQUFFO2dCQUNuQixLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6RixLQUFJLENBQUMsVUFBVSxHQUFHLDJDQUEyQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7YUFDL0Q7WUFDRCxLQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO1FBQ3RELENBQUMsRUFDRixDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBR0QscUNBQVM7Ozs7O0lBQVQsVUFBVSxJQUFTLEVBQUUsTUFBVztRQUM5Qiw2QkFBNkI7UUFDN0IsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU87Ozs7UUFBQyxVQUFBLEVBQUU7O2dCQUM3QyxJQUFTO1lBQ2IsSUFBSSxHQUFHLEVBQUUsQ0FBQztZQUNWLG9EQUFvRDtZQUNwRCw0QkFBNEI7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztRQUNILDBEQUEwRDtRQUMxRCxRQUFRLENBQUMsYUFBYSxDQUFDLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzVELENBQUM7Ozs7O0lBQ0QsMENBQWM7Ozs7SUFBZCxVQUFlLEtBQWdCOzs7WUFDdkIsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUs7O1lBQ3BDLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxLQUFLO1FBQ3hELElBQUksV0FBVyxJQUFJLElBQUksSUFBSSxXQUFXLElBQUksRUFBRSxFQUFFO1lBQzVDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQzdELE9BQU8sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLENBQUM7U0FDM0I7UUFDRCxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7WUFDdkIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7WUFDMUQsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQztTQUN4QjtRQUVELHlEQUF5RDtJQUMzRCxDQUFDOzs7OztJQUNELHlDQUFhOzs7O0lBQWIsVUFBYyxPQUFPOztZQUNiLGVBQWUsR0FBRyxPQUFPLENBQUMsS0FBSzs7WUFDL0IsYUFBYSxHQUFHLDZDQUE2QztRQUNuRSxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25HLENBQUM7Ozs7O0lBQ0Qsd0NBQVk7Ozs7SUFBWixVQUFhLEtBQVU7UUFFckIsS0FBSyxJQUFNLENBQUMsSUFBSSxLQUFLLEVBQUU7WUFDckIsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLGNBQWMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxjQUFjLElBQUksSUFBSSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLEVBQUU7Z0JBRTlNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQzthQUMvQjtTQUNGO1FBQ0QseUNBQXlDO1FBQ3pDLHlNQUF5TTtRQUl6TSw0Q0FBNEM7UUFDNUMsMERBQTBEO1FBQzFELDRDQUE0QztRQUM1QywrREFBK0Q7UUFDL0QsK0JBQStCO1FBQy9CLElBQUk7UUFDSix5QkFBeUI7UUFDekIsOERBQThEO1FBQzlELHlCQUF5QjtRQUN6QixJQUFJO1FBRUoseURBQXlEO0lBQzNELENBQUM7Ozs7O0lBRUQsMkNBQWU7Ozs7SUFBZixVQUFnQixPQUFPOzs7WUFFZixFQUFFLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQztRQUM3QixPQUFPLElBQUksVUFBVTs7OztRQUFDLFVBQUEsUUFBUTtZQUM1QixVQUFVOzs7WUFBQzs7b0JBQ0gsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUk7Z0JBQ2pGLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3RCLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN0QixDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDWCxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBRUQsb0NBQVE7Ozs7SUFBUixVQUFTLElBQVM7UUFDaEIsaUNBQWlDO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1lBQzdFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDNUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hHLENBQUM7Ozs7SUFFRCw0Q0FBZ0I7OztJQUFoQjtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvRkFBb0YsQ0FBQyxDQUFDO1lBQ2pKLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMscUZBQXFGLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN6SixDQUFDOzs7OztJQUVELG9DQUFROzs7O0lBQVIsVUFBUyxJQUFJO1FBQWIsaUJBaU1DO1FBaE1DLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDOztZQUNYLFdBQVcsR0FBUSxFQUFFO1FBQzNCLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUU7WUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7Ozs7O2dCQUlyQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7WUFDdkIsb0NBQW9DO1lBR3BDLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxFQUFFO29CQUN2SixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTs7Ozs7Ozs7OzRCQVV0SCxLQUFLLEdBQVEsRUFBRTt3QkFDckIsS0FBSyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQzt3QkFDdEYsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNqRCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFFbkQsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7d0JBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFM0Usa0VBQWtFO3FCQUNuRTtpQkFDRjtnQkFHRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFOzt3QkFDckksUUFBUSxHQUFRLEVBQUU7b0JBQ3hCLEtBQUssSUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTt3QkFDL0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7OztnQ0FRNUgsS0FBSyxHQUFRLEVBQUU7NEJBQ3JCLEtBQUssQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUM7NEJBQ3pGLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NEJBQ3JFLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzRCQUM3QyxLQUFLLENBQUMs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Q0FBcUI7O0lBQ3JCLHVDQUFzQzs7SUFDdEMsaUNBQWU7O0lBQ2YscUNBQWlCOztJQUNqQixvQ0FBZ0I7O0lBQ2hCLGdEQUE0Qjs7SUFDNUIsd0NBQXNCOztJQUN0QixvREFBa0M7O0lBQ2xDLDJDQUF5Qjs7SUFDekIsbURBQWlDOztJQUNqQyxzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsZ0RBQThCOztJQUM5Qix5Q0FBdUI7O0lBQ3ZCLDhDQUFrQzs7SUFDbEMsOENBQW1DOztJQUVuQyxxQ0FBNkI7O0lBSTdCLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7O0lBQ2pCLDhDQUFzRDs7SUFJdEQsOENBQTRCOztJQUM1Qix5Q0FBdUI7Ozs7O0lBc3VDckIsK0JBQXNCOzs7OztJQTd3Q1osd0NBQWdDOztJQUFFLHdDQUE4Qjs7Ozs7SUFBRSxzQ0FBOEI7Ozs7O0lBQUUsbUNBQXNCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXkgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlybWRpYWxvZywgU25hY2tiYXJDb21wb25lbnQgfSBmcm9tICcuLi9saXN0aW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEltYWdlQ3JvcHBlZEV2ZW50IH0gZnJvbSAnbmd4LWltYWdlLWNyb3BwZXInO1xuLy8gaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNob3dmb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3dmb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hvd2Zvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3dmb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgc2V0IGZvcm1kYXRhKGZvcm1kYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1kYXRhdmFsID0gZm9ybWRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2hkYXRhKGZvcm1maWVsZHJlZnJlc2hkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsID0gZm9ybWZpZWxkcmVmcmVzaGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2goZm9ybWZpZWxkcmVmcmVzaDogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNodmFsID0gZm9ybWZpZWxkcmVmcmVzaDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwpO1xuICB9XG5cbiAgLy8gcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZSgyMDIwLCA4LCAyNCk7XG4gIC8vIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUoMjAyMCwgOCwgMzEpO1xuICBwdWJsaWMgZGF0ZWZsYWc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgUGFzc3dvcmRWYWw6IGFueSA9ICcnO1xuXG4gIHB1YmxpYyBleHRlcm5hbERhdGFWYWw6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBjdXN0b21saXN0ZW5idXR0b25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9ucyh2YWw6IGFueSkge1xuICAgIHRoaXMuY3VzdG9tbGlzdGVuYnV0dG9ucyA9IHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWxpc3RlbmJ1dHRvbnMsJ2N1c3RvbWxpc3RlbmJ1dHRvbnMgZm9ybScpXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBleHRlcm5hbGRhdGF2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5leHRlcm5hbERhdGFWYWwgPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmV4dGVybmFsRGF0YVZhbCwgJ3RoaXMuZXh0ZXJuYWxEYXRhVmFsJylcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhciwgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLCkge1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5taW5EYXRlLCAndG9kYXk9PT0+JywgdGhpcy5tYXhEYXRlKVxuXG4gIH1cblxuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykgYXMgRm9ybUNvbnRyb2w7XG4gIH1cbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHRpdGxlQWxlcnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIHBvc3Q6IGFueSA9ICcnO1xuICBzaG93Zm9ybSA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGZvcm1maWVsZHJlZnJlc2h2YWwgPSBmYWxzZTtcbiAgZm9ybWRhdGF2YWw6IGFueSA9IHt9O1xuICBmb3JtZmllbGRyZWZyZXNoZGF0YXZhbDogYW55ID0ge307XG4gIGZpbGVyZmllbGRkYXRhOiBhbnkgPSBbXTtcbiAgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTogYW55ID0gW107XG4gIGZpbGVhcnJheTogYW55ID0gW107XG4gIGZpbGVjb3VudDogYW55ID0gW107XG4gIGN1cnJlbnRhdXRvY29tcGxldGU6IGFueSA9ICcnO1xuICBmaWVsZGxvYWRpbmc6IGFueSA9ICcnO1xuICBpc1Bhc3N3b3JkVmlzaWJsZTogQm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzaW5nbGVJbWdGb3JtRGF0YTogYW55ID0gW107XG5cbiAgcHVibGljIGltZ1ZhbHVlOiBzdHJpbmcgPSAnJztcblxuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcbiAgQE91dHB1dCgpIG9uRm9ybUZpZWxkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxuXG4gIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSAnJztcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSAnJztcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oMCk7XG5cblxuICAgIC8vIHRoaXMuc2V0Q2hhbmdlVmFsaWRhdGUoKVxuICB9XG5cblxuICAvLyBDdXN0b21GbGFnRmllbGRzXG4gIEN1c3RvbUZsYWdGaWVsZHMoZmllbGQ6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGN1c3RvbUJ1dHRvblZhbDogaXRlbSwgY3VzdG9tZmllbGQ6ICdhZGQnIH0pO1xuICB9XG5cbiAgQ3VzdG9tRmxhZ0ZpZWxkc1JlbW92ZShmaWVsZDogYW55LCBpdGVtOiBhbnkpIHtcbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgY3VzdG9tQnV0dG9uVmFsOiBpdGVtLCBjdXN0b21maWVsZDogJ3JlbW92ZScgfSk7XG4gIH1cblxuXG4gIC8vR2VuZXJhdGUgUGFzc3dvcmQgYnV0dG9uXG4gIEdlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG4gICAgdGhpcy5QYXNzd29yZFZhbCA9ICcnO1xuICAgIHRoaXMuUGFzc3dvcmRWYWwgPSB0aGlzLm1ha2VpZCgxMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhbC52YWx1ZSA9IHRoaXMuUGFzc3dvcmRWYWw7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0ucGF0Y2hWYWx1ZSh0aGlzLlBhc3N3b3JkVmFsKTtcbiAgICB9LCAyMDApO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5QYXNzd29yZFZhbCwgJ1Bhc3N3b3JkVmFsKysrKycpXG5cblxuICAgIC8vIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgIC8vICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnBhc3N3b3JkZmxhZyA9PSB0cnVlKSB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnBhc3N3b3JkZmxhZywgJysrKys9PScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKVxuICAgIC8vICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS52YWx1ZSA9IHRoaXMuUGFzc3dvcmRWYWw7XG4gICAgLy8gICAgIC8vIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwYXNzd29yZCddLnBhdGNoVmFsdWUodGhpcy5QYXNzd29yZFZhbClcbiAgICAvLyAgICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YSA9IHsgZmllbGQ6ICdwYXNzd29yZCcsIHZhbHVlOiB0aGlzLlBhc3N3b3JkVmFsIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlBhc3N3b3JkVmFsLCAnUGFzc3dvcmRWYWwnKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIC8vY29weSBQYXNzd29yZCBidXR0b25cbiAgY29weUdlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJysrcGFzcycsdGhpcy5mb3JtR3JvdXAudmFsdWUpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUsJysrPz8/Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwudmFsdWVdKVxuXG5cbiAgICB2YXIgcGFzc3dvcmRGaWVsZERhdGE6IGFueSA9ICcnO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9ICcnO1xuICAgIH1cblxuXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSksJz8/Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpXG5cblxuICAgIGlmIChwYXNzd29yZEZpZWxkRGF0YSAhPSBudWxsICYmIHBhc3N3b3JkRmllbGREYXRhICE9ICcnICYmIHR5cGVvZiAocGFzc3dvcmRGaWVsZERhdGEpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBlbC52YWx1ZSA9IHBhc3N3b3JkRmllbGREYXRhO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICBlbC5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIG9yIEVudGVyIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vcHJldmlldyBQYXNzd29yZCBidXR0b25cbiAgcHJldmlld0dlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG5cbiAgICB2YXIgcGFzc3dvcmRGaWVsZERhdGE6IGFueSA9ICcnO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZEZpZWxkRGF0YSAhPSBudWxsICYmIHBhc3N3b3JkRmllbGREYXRhICE9ICcnICYmIHR5cGVvZiAocGFzc3dvcmRGaWVsZERhdGEpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWwsICcrKysrKysrKysrKysnKVxuICAgICAgc3dpdGNoICh2YWwudHlwZSkge1xuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgdmFsLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICB2YWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIG9yIEVudGVyIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgcmFuIHBhc3N3b3JkXG4gIG1ha2VpZChsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1AnO1xuICAgIGxlbmd0aCA9IGxlbmd0aCArIDE7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICAvLyBleHRlcm5hbCBEYXRhIEZ1bmN0aW9uXG4gIGV4dGVybmFsRGF0YUZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgIC8vIHRoaXMuZXh0ZXJuYWxEYXRhVmFsPVtdO1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2V4dGVybmFsZGF0YScsIGZsYWc6ICdhZGQnLCBmaWVsZFZhbDogdmFsdWUsIGluZGV4OiBpbmRleCwgZXh0ZXJuYWxEYXRhVmFsOiB0aGlzLmV4dGVybmFsRGF0YVZhbCB9KTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSwgdGhpcy5leHRlcm5hbERhdGFWYWwsIGluZGV4LCAnKysnKVxuICB9XG5cbiAgZXh0ZXJuYWxEYXRhRWRpdEZ1bmN0aW9uKGZsYWcsIGZpZWxkLCBpdmFsLCBpKSB7XG5cbiAgICBjb25zb2xlLmxvZyhmbGFnLCBmaWVsZCwgaXZhbCwgaSwgJ2V4dGVyICsrKysnKVxuXG4gICAgaWYgKGZsYWcgPT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdleHRlcm5hbGRhdGEnLCBmbGFnOiAnZWRpdCcsIGZpZWxkVmFsOiBmaWVsZCwgaW5kZXg6IGl2YWwsIHZhbGluZDogaSwgZXh0ZXJuYWxEYXRhVmFsOiB0aGlzLmV4dGVybmFsRGF0YVZhbCB9KTtcbiAgICB9XG5cbiAgICBpZiAoZmxhZyA9PSAncmVtb3ZlJykge1xuICAgICAgZmllbGQudmFsdWUuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuXG4gIH1cblxuXG5cblxuICAvLyBvcGVuIGNhbGVuZGFyIGludG8gZGF0ZSBmaWVsZFxuICBvcGVuQ2FsZW5kYXIoKSB7XG4gICAgdGhpcy5kYXRlZmxhZyA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlZmxhZywgJ2RhdGVmbGFnJylcbiAgfVxuXG4gIG5hdnRvY2FuY2VsKCkge1xuICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlXSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZnRlciB2aWV3IGluaXQgdHJpZ2dlcicpO1xuICAgICAgZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS50eXBlID09ICdmaWxlJykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHRyaWdnZXJldmVudHModmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaW4gdHJpZ2dlcmV2ZW50cycsIHZhbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmFsIGxvYWRlZWQgdHJpZ2dlcicsIHZhbCk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZHJhZ292ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgY2FuY2VsKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2FuY2VsJyxlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICAvLyBsZXQgYXBpQmFzZVVSTD1cIlwiXG4gICAgLy8gdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGU7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgY29uc3QgYXBpQmFzZVVSTCA9ICdodHRwczovL3RnZTI0YmMybmUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2JztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZURyb3AnLCBlKTtcbiAgICBjb25zdCBkdCA9IGUuZGF0YVRyYW5zZmVyO1xuICAgIGNvbnN0IGZpbGVzID0gZHQuZmlsZXM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsZXMsICdmaWxlcycsIGUudGFyZ2V0LmlkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmYXJyJywgdGhpcy5maWxlYXJyYXkpO1xuXG4gICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKSkge1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaW5nbGVJbWdGb3JtRGF0YSwnc2luZ2xlSW1nRm9ybURhdGEnKVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgZGV0YWlscycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCBnKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRlbGV0ZWZpbGUodmEpXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZWZpbGUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0sIDEpO1xuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSsrJylcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgZmlsZXNbaV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldLnB1c2goZmlsZXNbaV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbGVzWzBdJywgZmlsZXNbMF0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknLCB0aGlzLmZpbGVhcnJheSk7XG5cbiAgICAgIC8vIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbihlKXtcbiAgICAgIC8vICAgZmV0Y2goYXBpQmFzZVVSTCtcIi9yZXF1ZXN0VXBsb2FkVVJMXCIsIHtcbiAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIC8vICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgIC8vICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgIC8vICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIC8vICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwge3R5cGU6IGZpbGUudHlwZX0pXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gICAgIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgLy8gICAgIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyB1cGxvYWRmaWxlKHZhbDogYW55KSB7XG4gIC8vICAgLy9sZXQgYXBpQmFzZVVSTCA9IFwiaHR0cHM6Ly90Z2UyNGJjMm5lLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2RldlwiO1xuICAvLyAgIGxldCBoOmFueT10aGlzLmJ1Y2tldHVwbG9hZCh2YWwpO1xuICAvLyAgIGNvbnNvbGUubG9nKCd1cHBwcCcsaClcbiAgLy8gfVxuXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHRyYWNrQnlGbk11bHRpcGxlKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cblxuICB0cmFja0J5Rm5NdWx0aShpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGtleXVwVmFsKHZhbCwgaXRlbSwgZmksIGluZCwgZGF0YSwgZm5hbWUsIHNmbmFtZSwgZXYpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gaW4ga3l1cHZhbCAnLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgY29uc29sZS5sb2codmFsW2ZpXS5pbWFnZWZpZWxkcywgJ2tleXVwVmFsJywgJ3MnLCBpdGVtLCBmaSwgaW5kLCBkYXRhLCAnLS0tJywgdGhpcy5maWxlYXJyYXksICcsLCcsIGZuYW1lLCBzZm5hbWUsIGV2LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5pbWFnZWZpZWxkc1tpbmRdWyd2YWx1ZSddID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IFtdO1xuICAgIC8vICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSBbXTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsIHx8IHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKCcxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEnKTtcbiAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCkgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID0gW107XG4gICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IFtdO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gYmVmb3JlJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdW3NmbmFtZV0gPSBldi50YXJnZXQudmFsdWU7XG4gICAgY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGFmdGVyJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIGNvbnNvbGUubG9nKHNmbmFtZSwgJ3NmbmFtZScsIGluZCwgZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSk7XG4gICAgY29uc29sZS5sb2coJ2RkZCcsIGZpLCBpbmQpO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0pO1xuICB9XG5cblxuXG4gIHVwbG9hZGZpbGUodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBwcHAnLCB2YWwpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHZhbCcsIHZhbCk7XG4gICAgZmlsZS51cGxvYWRlZCA9IDI7IC8vIHNob3cgcHJvZ3Jlc3NiYXJcbiAgICBsZXQgdGVtcGxvYWRlcjogYW55ID0gdGhpcy5maWVsZGxvYWRpbmdbdmFsLm5hbWVdO1xuICAgIHRlbXBsb2FkZXIgPSB2YWwubmFtZTtcbiAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgICBmZXRjaCh2YWwuYXBpdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aDogdmFsLnBhdGgsXG4gICAgICAgICAgYnVja2V0OiB2YWwuYnVja2V0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYnVjaycsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwgeyB0eXBlOiBmaWxlLnR5cGUgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgZmlsZS5maWxlc2VydmVybmFtZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgLy8gaWYodmFsLmltYWdlZmllbGRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIC8vICAgZmlsZS5pbWFnZWZpZWxkcyA9IHZhbC5pbWFnZWZpZWxkc1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlLnR5cGUsICdmaWxlLnR5cGUnKTtcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cbiAgdXBsb2FkYWxsKHZhbDogYW55KSB7XG4gICAgLy8gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnVwbG9hZGFsbCA9IDE7XG4gICAgZm9yIChjb25zdCB5IGluIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSkge1xuICAgICAgY29uc3QgYzogYW55ID0gcGFyc2VJbnQoeSkgKiA1MDA7XG4gICAgICAvLyBjb25zb2xlLmxvZygnLS0tJywgdmFsLCAndi0tLScsICd0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0nLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XS51cGxvYWRlZCk7XG4gICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLmJ1Y2tldCA9PSBudWxsKSB0aGlzLnVwbG9hZGZpbGVtdWx0aXBsZSh2YWwsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgeSk7XG5cbiAgICB9XG5cbiAgfVxuICBkZWxldGVmaWxlbXVsdGlwbGVhbGwodmFsOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKSB7XG4gICAgICBjb25zdCBjOiBhbnkgPSBwYXJzZUludCh5KSAqIDUwMDtcbiAgICAgIHRoaXMuZGVsZXRlZmlsZW11bHRpcGxlKHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB5KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH0sIDIwMDApO1xuXG4gIH1cbiAgdXBsb2FkZmlsZW11bHRpcGxlKHZhbDogYW55LCBmOiBhbnksIGluZGV4ZjogYW55KSB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1baW5kZXhmXTtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlLCdmaWxlJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2coZiwnZicpO1xuICAgIGlmICh0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPT0gbnVsbCkgeyB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPSAwOyB9XG4gICAgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdKys7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdmFsIGluIG0gMicsIHZhbCwgZiwgaW5kZXhmLCAnaWYnLGZpbGUpO1xuICAgIGZpbGUudXBsb2FkZWQgPSAyOyAvLyBzaG93IHByb2dyZXNzYmFyXG4gICAgbGV0IHRlbXBsb2FkZXI6IGFueSA9IHRoaXMuZmllbGRsb2FkaW5nW3ZhbC5uYW1lXTtcbiAgICB0ZW1wbG9hZGVyID0gdmFsLm5hbWU7XG4gICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgICAgZmV0Y2godmFsLmFwaXVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHBhdGg6IHZhbC5wYXRoLFxuICAgICAgICAgIGJ1Y2tldDogdmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogZmlsZS50eXBlIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGZpbGUudXBsb2FkZWQgPSAxO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwnZmlsZS50eXBlJylcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB0eXBlJywgZmlsZSwgdHlwZW9mIChmaWxlKSk7XG4gICAgY29uc3QgZnR5cGU6IGFueSA9IHR5cGVvZiAoZmlsZSk7XG4gICAgLy8gaWYgKGZ0eXBlID09IFwiQmxvYlwiKSBcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cbiAgZGVsZXRlZmlsZSh2YWw6IGFueSwgZmxhZzogYW55ID0gJycpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknLHRoaXMuZmlsZWFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyx2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGZsYWcgPT0gJycpIHtcbiAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuICBkZWxldGVmaWxlbXVsdGlwbGUodmFsOiBhbnksIGZpZWxkOiBhbnkgPSAnJywgaW5kZXg6IGFueSkge1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW2luZGV4XTtcbiAgICB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0tLTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdICE9IG51bGwpIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSBpbiBmb3JtICEhIScsIGNoYW5nZXMsICdmcnYnLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgICBmb3IgKGNvbnN0IHYgaW4gY2hhbmdlcykge1xuICAgICAgLy8gY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYgKHYgPT0gJ2Zvcm1maWVsZHJlZnJlc2hkYXRhJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsICdtJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwICE9IG51bGwgJiYgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCAhPSBudWxsICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGRdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKTtcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gbnVsbCAmJiB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZvcm1rZXkgaW4gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmRhdGFbZm9ybWtleV0nLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleV0gIT0gbnVsbCkgeyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5XS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0pOyB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3JtZGF0YXZhbGtleSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XS5pbmRleE9mKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBpZlxuXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm5hbWUgPT0gZm9ybWtleSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IG51bGwgfHwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIHNpbmdsZScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwsIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldID09ICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmYgb2YgaWZcblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIGNoZWNrIGJveCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybWtleSArICArIGF1dG9zZWx2YWwnLCBmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpICE9IC0xKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKHRydWUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKGZhbHNlKTsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5kIG9mIGlmXG5cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdzaG93ZmllbGRsb2FkZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRsb2FkaW5nID0gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdhZGRmcm9tY29udHJvbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5tYW5hZ2Vmcm9tY29udHJvbCh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAncmVtb3ZlZnJvbWNvbnRyb2wnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFuYWdlZnJvbWNvbnRyb2wodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSwgJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cblxuICBmaWx0ZXJhdXRvY29tcGxldGUodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIHRoaXMuaW5wdXRibHVyKHZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2NjJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZSwgZGF0YS52YWwpO1xuICAgIGNvbnN0IGZpZWxkdmFsID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICBpZiAoZmllbGR2YWwgPT0gJycgfHwgZmllbGR2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBmaWx0ZXJ2YWwgPSBkYXRhLnZhbC5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2UnLCBlLCBmaWVsZHZhbClcbiAgICAgICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IFtdO1xuICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IGZpbHRlcnZhbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWwnLCBmaWx0ZXJ2YWwpO1xuICAgIH1cblxuICB9XG4gIHJlbG9hZGF1dG9jb21wbGV0ZSh2YWw6IGFueSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZSA9IHZhbC5uYW1lO1xuICB9XG5cbiAgcmVtb3ZlY2hpcHNpbmdsZSh2YWw6IGFueSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICB9XG4gIHJlbW92ZWNoaXBtdWx0aXBsZSh2YWw6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgfVxuICB9XG4gIHNldGF1dG9jb21wbGV0ZXZhbHVlKHZhbDogYW55LCBmaWVsZDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZmIGF1dG8gY29tcGxldGUgc2V0ICcsIHZhbCwgZmllbGQpO1xuXG5cblxuICAgIGlmIChmaWVsZC5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPSB2YWwua2V5O1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gW107XG4gICAgICB9XG4gICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0ucHVzaCh2YWwua2V5KTtcblxuICAgIH1cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0ucGF0Y2hWYWx1ZShudWxsKTtcbiAgICAgIHRoaXMuaW5wdXRibHVyKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuICB9XG5cblxuICBtYW5hZ2Vmcm9tY29udHJvbChmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlIGNvbnRyb2wnLCBmaWVsZCwgdHlwZSwgZmllbGQubGVuZ3RoKTtcbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLm5hbWUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGRbJ25hbWUnXSwgJ2MnLCB5LCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lID09IG51bGwgJiYgZmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubGVuZ3RoLCAnZmwnKTtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBmb3IgKGNvbnN0IHogaW4gZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZFt6XSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGRbel0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQgaW4gYXJyYXkgZm9ybSAnLCBmaWVsZFt6XSwgJ2MgYXInLCB5LCBmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2FkZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZGQgZm9ybScpO1xuICAgICAgaWYgKGZpZWxkLmFmdGVyICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuYWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSArIDEsIDAsIGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCAuLicsIGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gYXJyYXkgZm9ybSAgYWRkJyk7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW3ZdICE9IG51bGwgJiYgZmllbGRbdl0ubmFtZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbdl0uYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZFt2XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBmaWVsZCBhZGRlZCAuLicsIGZpZWxkW3ZdWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXNldGZvcm1kYXRhKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSAnJztcblxuICB9XG5cblxuICBjaGVja2NoYW5nZShmaWVsZDogYW55LCBpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsICdjaGFuZ2UnLCBpbmRleCwgJ2luZGV4MicpO1xuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXSAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9KTtcbiAgICB9XG4gICAgaWYgKGZpZWxkLmRlcGVuZGVudCAhPSBudWxsICYmIGZpZWxkLmRlcGVuZGVudC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdmM6IGFueSA9IDA7XG4gICAgICBmb3IgKGNvbnN0IG4gaW4gZmllbGQuZGVwZW5kZW50KSB7XG5cbiAgICAgICAgaWYgKGZpZWxkLmRlcGVuZGVudFtuXS5jb25kdmFsLnRvU3RyaW5nKCkgPT0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICAgIC8vIGxldCB0ZW12YWxpZGF0aW9ucnVsZXQ6IGFueSA9IFtdO1xuICAgICAgICAgIHZjKys7XG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSwgbmV3IEZvcm1Db250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC52YWx1ZSwgdGVtdmFsaWRhdGlvbnJ1bGV0KSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ25ubm5uJywgJy0tJywgcGFyc2VJbnQoaW5kZXggKyAxICsgcGFyc2VJbnQodmMpKSwgJy0tJywgdmMgKyBpbmRleCArIDEsIGluZGV4LCB2YywgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkWyduYW1lJ10pO1xuICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludChpbmRleCArIHBhcnNlSW50KHZjKSksIDAsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZCk7XG4gICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSksIDEpO1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQnLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGRbJ25hbWUnXSwgJ2MnLCB5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cblxuICBjcmVhdGVGb3JtKGluaXRpYWxpemU6IGFueSA9IDApIHtcbiAgICAvKnRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XG4gICAgICAnZW1haWwnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybihlbWFpbHJlZ2V4KV0sIHRoaXMuY2hlY2tJblVzZUVtYWlsXSxcbiAgICAgICdmdWxsbmFtZSc6IFtudWxsLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgLy8gJ3Bhc3N3b3JkJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCB0aGlzLmNoZWNrUGFzc3dvcmRdXSxcbiAgICAgIC8vJ2Rlc2NyaXB0aW9uJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg1KSwgVmFsaWRhdG9ycy5tYXhMZW5ndGgoMTApXV0sXG4gICAgICAvLyd2YWxpZGF0ZSc6ICcnXG4gICAgfSk7Ki9cbiAgICAvLyBsZXQgZGVtb0FycmF5OmFueT1bXTtcbiAgICBpZiAoaW5pdGlhbGl6ZSA9PSAwKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe30pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwgJ2ZnJylcbiAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXV0gPT0gbnVsbCkge1xuICAgICAgICBjb25zdCB0ZW1jb250cm9sYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgY29uc3QgdGVtdmFsaWRhdGlvbnJ1bGU6IGFueSA9IFtdO1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKCcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdmaWxlJykge1xuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWU7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RiJywgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmEgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z2JywgZmEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS51cGxvYWRlZCA9IDE7XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5pbWFnZWZpZWxkcztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVjb3VudFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS51cGxvYWRlZCA9IDE7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSwgJ2ZpbGVhcnJheScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSA9PSBudWxsKSB7IHRlbWNvbnRyb2xhcnIucHVzaChbXSk7IH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGNoYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiJywgYiwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0ua2V5KSkge1xuICAgICAgICAgICAgICAgICAgdGNoYXJyLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgdGNoYXJyLnB1c2goZmFsc2UpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgdmFsXG4gICAgICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0Y2hhcnIpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGNoJywgdGNoYXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCAoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID0gJ05vdCBWYWxpZCAhISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF0Y2gnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5jaGVja1Bhc3N3b3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuYXV0b3JlcXVpcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdwYXR0ZXJuJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heExlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbicpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbkxlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfSwwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICAgICAgLy8gZGVtb0FycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdPW5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2ltYWdlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSArICdfJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgICAgICAgIH0sIDQwMDApO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBsZXQgdGNodmFyOiBhbnkgPSBmYWxzZTtcbiAgICAgICAgICAvLyBsZXRcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndnYgPz8/ICcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSk7XG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUFycmF5KFtdKSk7XG4gICAgICAgICAgZm9yIChjb25zdCBqIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2pdLmtleSkpIHtcbiAgICAgICAgICAgICAgdGNodmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7IHRjaHZhciA9IGZhbHNlOyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbicsIG4sIGosIHRjaHZhcik7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgKyAnX18nICsgaiwgbmV3IEZvcm1Db250cm9sKHRjaHZhciwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgICAgIC8vIGlmKClcbiAgICAgICAgICAgIC8qY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIpOyAvLyBpZiBmaXJzdCBpdGVtIHNldCB0byB0cnVlLCBlbHNlIGZhbHNlXG4gICAgICAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdIGFzIEZvcm1BcnJheSkucHVzaChjb250cm9sKTsqL1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRjaHZhcilcbiAgICAgICAgICAgIC8vIF0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKnRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodHJ1ZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICBdKSk7Ki9cbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHRlbWNvbnRyb2xhcnJbMF0sIGRpc2FibGVkOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5kaXNhYmxlZCB9LCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGF0IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F0IC4uLicsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0sIGF0LCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSkgPT0gJ29iamVjdCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLmtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXksICdtdWx0aSBhdXRvY29tcGxldGUgdHJpZ2dlcmVkICAhISAnKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaW5nbGUgYXV0byBjb21wbGV0ZSB0cmlnZ2VyIGJsb2NrJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXQgYXV0byBjb21wbGV0ZSBzaW5nbGUgdHJpZ2dlcmVkJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbMF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vICduZXdDb250cm9sJywgbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyA9dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy8gdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGRlbW9BcnJheSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycsZGVtb0FycmF5KTtcbiAgICAgIHRoaXMuc2hvd2Zvcm0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2dycCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIHNldENoYW5nZVZhbGlkYXRlKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgndmFsaWRhdGUnKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0ZSA9PSAnMScpIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pO1xuICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9ICdZb3UgbmVlZCB0byBzcGVjaWZ5IGF0IGxlYXN0IDMgY2hhcmFjdGVycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuXG5cbiAgY2hvb3NlaW1nKHZhbHM6IGFueSwgZmllbGRzOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWxzLCBmaWVsZHMpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbWd3cmFwcGVyJykuZm9yRWFjaChlbCA9PiB7XG4gICAgICBsZXQgZWxlbTogYW55O1xuICAgICAgZWxlbSA9IGVsO1xuICAgICAgLy8gZWxlbS5zdHlsZS50cmFuc2l0aW9uID0gXCJvcGFjaXR5IDAuNXMgbGluZWFyIDBzXCI7XG4gICAgICAvLyBlbGVtLnN0eWxlLm9wYWNpdHkgPSAwLjU7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ltZ3dyYXBfJyArIGZpZWxkcy5uYW1lICsgJ18nICsgdmFscy5rZXkpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkcy5uYW1lXS5wYXRjaFZhbHVlKHZhbHMua2V5KTtcbiAgfVxuICBjaGVja1Bhc3N3b3Jkcyhncm91cDogRm9ybUdyb3VwKSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcbiAgICBjb25zdCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgY29uc3QgY29uZmlybVBhc3MgPSBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQudmFsdWU7XG4gICAgaWYgKGNvbmZpcm1QYXNzID09IG51bGwgfHwgY29uZmlybVBhc3MgPT0gJycpIHtcbiAgICAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoeyByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgfVxuICAgIGlmIChwYXNzICE9IGNvbmZpcm1QYXNzKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgbWF0Y2g6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyBtYXRjaDogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIHJldHVybiBwYXNzID09PSBjb25maXJtUGFzcyA/IG51bGwgOiB7IG5vdFNhbWU6IHRydWUgfVxuICB9XG4gIGNoZWNrUGFzc3dvcmQoY29udHJvbCkge1xuICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGNvbnRyb2wudmFsdWU7XG4gICAgY29uc3QgcGFzc3dvcmRDaGVjayA9IC9eKD89LipbYS16XSkoPz0uKltBLVpdKSg/PS4qWzAtOV0pKD89Lns4LH0pLztcbiAgICByZXR1cm4gKCFwYXNzd29yZENoZWNrLnRlc3QoZW50ZXJlZFBhc3N3b3JkKSAmJiBlbnRlcmVkUGFzc3dvcmQpID8geyByZXF1aXJlbWVudHM6IHRydWUgfSA6IG51bGw7XG4gIH1cbiAgYXV0b3JlcXVpcmVkKGdyb3VwOiBhbnkpIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuXG4gICAgZm9yIChjb25zdCBiIGluIGdyb3VwKSB7XG4gICAgICBpZiAoZ3JvdXBbYl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiBncm91cFtiXS52YWxpZGF0aW9ucyAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdICE9IG51bGwgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnNbMF0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXBbYl0ubmFtZV0gPT0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdLnNldEVycm9ycyh7IGF1dG9yZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgcmV0dXJuIHsgYXV0b3JlcXVpcmVkOiB0cnVlIH07XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdiZ3JycicsZ3JvdXAsZ3JvdXAubmFtZSk7XG4gICAgLy8gaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZ3JvdXAubmFtZV0gIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zWzBdIT1udWxsICYmIGdyb3VwLnZhbGlkYXRpb25zWzBdLnJ1bGU9PSdhdXRvcmVxdWlyZWQnICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtncm91cC5uYW1lXT09bnVsbCl7XG5cblxuXG4gICAgLy8gbGV0IHBhc3MgPSBncm91cC5jb250cm9scy5wYXNzd29yZC52YWx1ZTtcbiAgICAvLyBsZXQgY29uZmlybVBhc3MgPSBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQudmFsdWU7XG4gICAgLy8gaWYoY29uZmlybVBhc3M9PW51bGwgfHwgY29uZmlybVBhc3M9PScnKXtcbiAgICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoe3JlcXVpcmVkOnRydWV9KTtcbiAgICAvLyAgIHJldHVybiB7IHJlcXVpcmVkOiB0cnVlIH07XG4gICAgLy8gfVxuICAgIC8vIGlmKHBhc3MhPWNvbmZpcm1QYXNzKXtcbiAgICAvLyAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoeydtYXRjaCc6dHJ1ZX0pO1xuICAgIC8vICAgcmV0dXJuIHttYXRjaDp0cnVlfTtcbiAgICAvLyB9XG5cbiAgICAvLyByZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuXG4gIGNoZWNrSW5Vc2VFbWFpbChjb250cm9sKSB7XG4gICAgLy8gbWltaWMgaHR0cCBkYXRhYmFzZSBhY2Nlc3NcbiAgICBjb25zdCBkYiA9IFsndG9ueUBnbWFpbC5jb20nXTtcbiAgICByZXR1cm4gbmV3IE9ic2VydmFibGUob2JzZXJ2ZXIgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IChkYi5pbmRleE9mKGNvbnRyb2wudmFsdWUpICE9PSAtMSkgPyB7IGFscmVhZHlJblVzZTogdHJ1ZSB9IDogbnVsbDtcbiAgICAgICAgb2JzZXJ2ZXIubmV4dChyZXN1bHQpO1xuICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xuICAgICAgfSwgNDAwMCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRFcnJvcihkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZ2V0RXJyb3InLCBkYXRhKTtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ0ZpZWxkIGlzIHJlcXVpcmVkJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3BhdHRlcm4nKSA/ICdOb3QgYSB2YWxpZCBlbWFpbGFkZHJlc3MnIDpcbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdhbHJlYWR5SW5Vc2UnKSA/ICdUaGlzIGVtYWlsYWRkcmVzcyBpcyBhbHJlYWR5IGluIHVzZScgOiAnJztcbiAgfVxuXG4gIGdldEVycm9yUGFzc3dvcmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCAoYXQgbGVhc3QgZWlnaHQgY2hhcmFjdGVycywgb25lIHVwcGVyY2FzZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXIpJyA6XG4gICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVtZW50cycpID8gJ1Bhc3N3b3JkIG5lZWRzIHRvIGJlIGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyJyA6ICcnO1xuICB9XG5cbiAgb25TdWJtaXQocG9zdCkge1xuICAgIHRoaXMucG9zdCA9IHBvc3Q7XG4gICAgY29uc3QgdGVtcGZvcm12YWw6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3QgeCBpbiB0aGlzLmZvcm1Hcm91cC5jb250cm9scykge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLCB4LCAnZXJyJyk7XG4gICAgICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWxpZCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygneCcseCk7XG4gICAgICBjb25zdCBiID0geC5zcGxpdCgnX18nKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiJyxiLGIubGVuZ3RoLGJbMF0pO1xuXG5cbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkOiAxNTg5MTc0NDc3NTA0XG4gICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAvLyBzaXplOiAxMzUwOTZcbiAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuXG5cbiAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgIHRmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZmlsZXNlcnZlcm5hbWU7XG4gICAgICAgICAgICB0ZmlsZS5uYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ubmFtZTtcbiAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zaXplO1xuICAgICAgICAgICAgdGZpbGUudHlwZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGU7XG4gICAgICAgICAgICB0ZmlsZS5wYXRoID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ucGF0aDtcbiAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgIHRmaWxlLmJhc2V1cmwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5iYXNldXJsO1xuXG4gICAgICAgICAgICB0ZmlsZS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGZpbGUsICd0ZmlsZT4+JywgdGZpbGUuaW1hZ2VmaWVsZHMsICdpbWFnZWZpZWxkcycpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgdGZpbGVhcnI6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgICAvLyBmaWxlc2VydmVybmFtZTogXCJUZXN0LTE1ODkyMTY5OTIzOTJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZDogMTU4OTE3NDQ3NzUwNFxuICAgICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgICAvLyBuYW1lOiBcIk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgICAgLy8gc2l6ZTogMTM1MDk2XG4gICAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIC8vIHVwbG9hZGVkOiAxXG4gICAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgICAgdGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5maWxlc2VydmVybmFtZTtcbiAgICAgICAgICAgICAgdGZpbGUubmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLm5hbWU7XG4gICAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5zaXplO1xuICAgICAgICAgICAgICB0ZmlsZS50eXBlID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZTtcbiAgICAgICAgICAgICAgdGZpbGUucGF0aCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnBhdGg7XG4gICAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgICAgdGZpbGUuYmFzZXVybCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJhc2V1cmw7XG5cbiAgICAgICAgICAgICAgdGZpbGUuaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgICB0ZmlsZWFyci5wdXNoKHRmaWxlKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZWFycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJykge1xuICAgICAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgIT0gbnVsbCAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWxpZGF0aW9ucyAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7IHJlcXVpcmVkOiBudWxsIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBhZnRlciAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoeyByZXF1aXJlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0IGFmdGVyICcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0ZW1wZm9ybXZhbFt4XSA9IHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmIChiLmxlbmd0aCA+IDEgJiYgYlswXSA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgIT0geCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgIT0gbnVsbCkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYWFhZmYuLi4nKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsW2tdLmtleSA9PSBiWzFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2d2JywgYlsxXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8vZm9yIG11bHRpcGxlIGVtYWlsIGFkZFxuICAgICAgICAvLyBpZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdlbWFpbCcpe1xuICAgICAgICAvLyAgIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlID09IHRydWUpe1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0sJz09dGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0rKycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUsJz8/Jyx0ZW1wZm9ybXZhbCwnPj4+JyxiWzBdKVxuICAgICAgICAvLyAgICAgLy8gZm9yKGxldCBpICBpbiB0ZW1wZm9ybXZhbCl7XG4gICAgICAgIC8vICAgICAvLyAgIGlmKHRlbXBmb3JtdmFsW2ldID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUubWF0Y2goJy9lbWFpbC9nJykpe1xuICAgICAgICAvLyAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRlbXBmb3JtdmFsW2ldLCd0ZW1wZm9ybXZhbFtpXScpXG4gICAgICAgIC8vICAgICAvLyAgIH1cbiAgICAgICAgLy8gICAgIC8vIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cblxuXG5cbiAgICAgICAgLy8gZWxzZXtcbiAgICAgICAgaWYgKHggPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0ZW1wZm9ybXZhbFt4XSA9PSBudWxsKSB7XG4gICAgICAgICAgdGVtcGZvcm12YWxbeF0gPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0uZXJyb3JzLCB4LCAnZXJyMjInKTtcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2cocG9zdCwgJ3Bvc3QnLCB0aGlzLmZvcm1Hcm91cC52YWxpZCwgdGhpcy5mb3JtZGF0YXZhbCwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwsICdmZmZmJywgdGVtcGZvcm12YWwpO1xuXG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAudmFsaWQpIHtcbiAgICAgIC8vIGlmICh0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50ICE9IG51bGwgfHwgdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwpIHtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQ7XG4gICAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgICAgc291cmNlLmRhdGEgPSB0aGlzLmZvcm1Hcm91cC52YWx1ZTtcblxuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc2VjcmV0ICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZS5zZWNyZXQgPSB0aGlzLmZvcm1kYXRhdmFsLnNlY3JldDtcbiAgICAgICAgc291cmNlLmp3dHRva2VuID0gdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50ICE9ICcnKSB7XG5cbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6IHRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZWQnLCB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnJyAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnLycpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdHNlcnZlcmVycm9yJywgZmllbGR2YWw6ICdzZXJ2ZXJlcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyAvL2Rpc2FibGUgbG9hZGVyIFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6ICdzdWNjZXNzJywgZm9ybWRhdGF2YWw6IHRoaXMuZm9ybWRhdGF2YWwsIHNvdXJjZTogc291cmNlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0ZXJyb3InLCBmaWVsZHZhbDogJ3ZhbGlkYXRpb25lcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcgfSk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9GaXJzdEludmFsaWRDb250cm9sKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpIHtcbiAgICBjb25zdCBmaXJzdEludmFsaWRDb250cm9sOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0gLm5nLWludmFsaWRcIlxuICAgICk7XG5cbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogdGhpcy5nZXRUb3BPZmZzZXQoZmlyc3RJbnZhbGlkQ29udHJvbCksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9wT2Zmc2V0KGNvbnRyb2xFbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGxhYmVsT2Zmc2V0ID0gNTA7XG4gICAgcmV0dXJuIGNvbnRyb2xFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIGxhYmVsT2Zmc2V0O1xuICB9IHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBldmVudDtcbiAgICBjb25zb2xlLmxvZygnZXZlbnQnLCBldmVudCk7XG4gIH1cbiAgaW1hZ2VDcm9wcGVkKGV2ZW50OiBJbWFnZUNyb3BwZWRFdmVudCkge1xuICAgIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIGNvbnNvbGUubG9nKCd0aGlzLmNyb3BwZWRJbWFnZScsIGV2ZW50KTtcbiAgfVxuICBpbWFnZUxvYWRlZCgpIHtcbiAgICAvLyBzaG93IGNyb3BwZXJcbiAgfVxuICBjcm9wcGVyUmVhZHkoKSB7XG4gICAgLy8gY3JvcHBlciByZWFkeVxuICB9XG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG59XG4iXX0=