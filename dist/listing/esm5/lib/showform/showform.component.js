/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { ApiService } from '../api.service';
import { SnackbarComponent } from '../listing.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
// import { CKEditorComponent } from "ng2-ckeditor";
// import {MatSnackBar} from "@angular/material/snack-bar";
var ShowformComponent = /** @class */ (function () {
    function ShowformComponent(formBuilder, _apiService, _snackBar, router, elementRef) {
        var _this = this;
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this._snackBar = _snackBar;
        this.router = router;
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
        this.autoquerychanged = new Subject();
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
        this.onFormFieldChange = new EventEmitter();
        this.timeChanged = new EventEmitter();
        this.imageChangedEvent = "";
        this.croppedImage = "";
        this.subscriptions[this.subscriptioncount++] = this.autoquerychanged
            .pipe(debounceTime(1500))
            .subscribe((/**
         * @param {?} autores
         * @return {?}
         */
        function (autores) {
            // console.log('sss .. auto search called  .. ', this.formGroup.value);
            _this.autosearchpostflag = true;
            // this.filterautocomplete(res.val, res.data);
            /** @type {?} */
            var data = autores.data;
            /** @type {?} */
            var val = autores.val;
            // console.log("this.formdataval.fields", this.formdataval.fields);
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
            _this._apiService.postSearch(link, _this.formdataval.jwttoken, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
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
                    else {
                        // snakbar fire
                    }
                }
                else {
                    // snakbar failure message
                }
            }));
        }));
        // console.log(this.minDate, 'today===>', this.maxDate)
    }
    Object.defineProperty(ShowformComponent.prototype, "formdata", {
        set: /**
         * @param {?} formdata
         * @return {?}
         */
        function (formdata) {
            this.formdataval = formdata;
            // if (this.formdataval.fields)
            //   console.log(this.formdataval, 'htlmmmmmmm');
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
        return array.filter((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        function (e, i) { return array.findIndex((/**
         * @param {?} a
         * @return {?}
         */
        function (a) { return a[propertyName] === e[propertyName]; })) === i; }));
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
        // console.log("handelDrop", e)
        // let apiBaseURL=""
        // this.imageChangedEvent = e;
        /** @type {?} */
        var list = document.getElementById('list');
        /** @type {?} */
        var apiBaseURL = 'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev';
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
                            // console.log("++++++if part", files);
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
                                        if (files[i].aspectratio != null && files[i].aspectratio[c] != null && typeof (files[i].aspectratio[c]) != 'undefined') {
                                            // console.log(files[i].aspectratio[c], 'files[i].aspectratio[c]')
                                            // files[i].aspectratio[c] = Number(files[i].aspectratio[c]).toFixed(2);
                                        }
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
        for (var y in this.filearray[val.name]) {
            /** @type {?} */
            var c = parseInt(y) * 500;
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
                var filterval = data.val.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
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
                // console.log("temvalidationrule", temvalidationrule);
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
                    this_2.formGroup.addControl(this_2.formdataval.fields[n].name, new FormControl({ value: this_2.formdataval.fields[n].value, disabled: this_2.formdataval.fields[n].disabled }, temvalidationrule));
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
                    if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) {
                        // console.log('autoerror', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        // this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: null });
                        // console.log('autoerror after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
                    else {
                        // console.log('autoerror set', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                        // this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: true });
                        // console.log('autoerror set after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
                    }
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
        { type: Component, args: [{
                    selector: 'lib-showform',
                    template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container libformclass\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n                                <!-- <span></span> -->\n\n                            </ng-container>\n\n                            <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                                formControlName=\"{{fields.name}}\">\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container\n                            *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n\n                        </ng-container> -->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\n                            <div class=\"add_form\">\n                                <div class=\"mat-form-field-wrapper\">\n                                    <div class=\"phonenumber mat-form-field\">\n                                        <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\" required\n                                            minlength=\"14\" [placeholder]=\"fields.label\"\n                                            (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                                            [(ngModel)]=\"phonenumberValue\"\n                                           >\n                                        <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\n                                        <ng-container\n                                            *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n\n                                            <ng-container\n                                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                \n                                            <mat-error>\n                                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                    <span\n                                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                                </ng-container>\n                                            </mat-error>\n                                        </ng-container>\n                                        </ng-container>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\"\n                               >\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\"\n                                matTooltip=\"Copy Password\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Show Password\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Hide Password\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n                    <!-- timepicker type field in form start here -->\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='timepicker'\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                        <input matInput [ngxTimepicker]=\"picker\" [format]=\"fields.format\" (blur)=\"inputblur(fields.name)\"\n                            [formControlName]=\"fields.name\"  (timeChanged)=\"timepickerchange($event)\">\n                        <ngx-material-timepicker #picker></ngx-material-timepicker>\n\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n                    <!-- timepicker type field in form end here -->\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n\n\n                        </mat-autocomplete>\n                        <!-- to check selected auto val ..  -->\n                        <!-- <span> auto data\n                            <ng-container\n                                *ngIf=\"autocompletefiledvalue!=null && autocompletefiledvalue[fields.name]!=null\">\n                                {{autocompletefiledvalue[fields.name] | json}}\n                            </ng-container>\n\n                        </span> -->\n\n\n                        <mat-progress-bar *ngIf=\"fields.showautoprogressbar!=null && fields.showautoprogressbar==true\"\n                            class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields,vals)\">cancel\n                                        </mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib,vals)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                        <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\"\n                                [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n                        <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n\n\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\"\n                                matTooltip=\"{{fields.label}}\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                create\n                                            </span>\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                clear\n                                            </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">\n                                Browse or Drop Files Here\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                    <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\"\n                                        style=\"display:none\" (change)=\"handleDrop($event)\">\n                                </ng-container>\n\n                                <ng-container *ngIf=\"fields.multiple == null \">\n                                    <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\"\n                                        multiple (change)=\"handleDrop($event)\">\n                                </ng-container>\n                            </div>\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <!-- <span>{{fields | json}}</span> -->\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n\n\n                                        <div class=\"imagedivcls\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                            <div class=\"divimagecardcls\">\n                                                <mat-card class=\"example-card imagecardcls\"\n                                                    *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                    <img mat-card-image [src]=\"fields.imageUrl\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"divimagecardcls\"\n                                                *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                <mat-card class=\"example-card imagecardcls\">\n\n                                                    <span class=\"material-icons cropcls\"\n                                                        *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\"\n                                                        (click)=\"opensingleimagecrop(fields)\">\n                                                        crop\n                                                    </span>\n\n                                                    <img mat-card-image\n                                                        src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"cropimagesdiv\"\n                                                *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                <h2> Croped Images :</h2>\n\n                                                <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\"\n                                                    class=\"image-cropper-cls\">\n                                                    <br />\n                                                    <span>Croped Image (Asepect Ratio) :\n                                                        {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                    <image-cropper [imageBase64]=\"fields.imageUrl\"\n                                                        [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                        (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\"\n                                                        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                        (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\"\n                                                        [resizeToHeight]=\"300\"></image-cropper>\n\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                        <div class=\"filesdivcls\">\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                description\n                                            </span>\n\n                                            <span\n                                                class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                            <br />\n                                            <span\n                                                class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                        </div>\n\n\n                                        <div class=\"filefieldsmaincls\">\n                                            <ng-container class=\"descdiv\"\n                                                *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                <div class=\"filefieldscls\">\n                                                    <div class=\"filefields\"\n                                                        *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                name=\"{{item.name}}\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'textarea'\">\n                                                            <textarea matInput name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                placeholder=\"{{item.label}}\" [rows]='3'\n                                                                [cols]='30'></textarea>\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'number'\">\n                                                            <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                                placeholder=\"{{item.label}}\"\n                                                               \n                                                                >\n                                                        </mat-form-field>\n\n                                                        <div *ngIf=\"item.type == 'checkbox'\">\n                                                            <mat-checkbox name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                            </mat-checkbox>\n                                                            &nbsp; {{item.label}}\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </ng-container>\n                                        </div>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button\n                                                (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">Delete\n                                            </mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\"\n                                                mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <!-- {{files | json}} ++ -->\n\n                                            <div *ngIf=\"files.loadfile != null && files.loadfile==1\"\n                                                class=\"filesdivcls\">\n\n                                                <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                <span *ngIf=\"files.uploaded==1\"\n                                                    class=\"material-icons fileuploadcompleteicon\">\n                                                    cloud_done\n                                                </span>\n\n                                                <div class=\"divimagecardcls\"\n                                                    *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                        <img mat-card-image [src]=\"files.imageUrl\">\n                                                    </mat-card>\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl == null\">\n\n                                                        <span class=\"material-icons cropcls\"\n                                                            *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\"\n                                                            (click)=\"opensingleimagecropformultiple(files)\">\n                                                            crop\n                                                        </span>\n\n\n                                                        <img mat-card-image\n                                                            src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                    </mat-card>\n\n                                                    <div class=\"cropimagesdiv\"\n                                                        *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                        <h2> Croped Images :</h2>\n\n                                                        <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                            <br />\n                                                            <span>Croped Image (Asepect Ratio) :\n                                                                {{files.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                            <image-cropper [imageBase64]=\"files.imageUrl\"\n                                                                [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                                [resizeToWidth]=\"128\"\n                                                                (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\"\n                                                                (imageLoaded)=\"imageLoaded()\"\n                                                                (cropperReady)=\"cropperReady()\"\n                                                                (loadImageFailed)=\"loadImageFailed()\"\n                                                                [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                            </image-cropper>\n\n                                                            <!-- <mat-card class=\"example-card imagecardcls\"\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\n                                                                <span>Croped Image Output : </span><br>\n                                                                <img class=\"croppedImagecls\"\n                                                                    [src]=\"files.croppedImage[ci]\" />\n                                                            </mat-card> -->\n\n                                                        </ng-container>\n                                                    </div>\n\n\n                                                </div>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                    picture_as_pdf\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                    movie_filter\n                                                </span>\n\n                                                <span class=\"material-icons\"\n                                                    *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                    description\n                                                </span>\n\n                                                <div class=\"filenamecls\">\n                                                    <span class=\"fileuploadednameclass\"> {{files.name}}</span>\n                                                    <br />\n                                                    <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\n                                                </div>\n\n\n                                                <br>\n                                                <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                <!-- multipleImgFormData -->\n                                                <div class=\"filefieldsmaincls\">\n                                                    <ng-container class=\"descdiv\"\n                                                        *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                        <!-- fields {{fields | json}}ss -->\n\n                                                        <div class=\"filefieldscls\"\n                                                            *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                            <br>\n\n                                                            <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <!-- <span>if imgfields ==</span> -->\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- <span>if imgfields ++ </span> -->\n\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n                                                            <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                            <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n\n                                                            </div>\n\n                                                            <div *ngIf=\"val.type == 'number'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n\n\n                                                            <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                        [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <!-- </div> -->\n                                                    </ng-container>\n                                                </div>\n\n\n\n                                                <div class=\"actionbtndiv\">\n\n                                                    <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                        Upload\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                        *ngIf=\"files.loaded != null && files.loaded==0\"\n                                                        mat-raised-button\n                                                        (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                        Delete\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                        Delete </mat-chip>\n                                                </div>\n\n                                                <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\"\n                                                        [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                    </mat-progress-bar>\n                                                </section>\n                                            </div>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element submitbtnsection\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n\n            <div class=\"custombuttonscls\"\n                *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\"\n                        (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                    styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}.cropimagesdiv,.croppedImagecls,.imagecardcls{width:300px}.descdiv{margin:5px 0}.cropcls{cursor:pointer;position:absolute;right:10px;top:19px;background:#fffffff2;border-radius:3px;padding:2px}.hidecls{display:none}"]
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
        formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
        formdata: [{ type: Input }],
        formfieldrefreshdata: [{ type: Input }],
        formfieldrefresh: [{ type: Input }],
        custombuttons: [{ type: Input }],
        externaldatavalue: [{ type: Input }],
        onFormFieldChange: [{ type: Output }],
        timeChanged: [{ type: Output }]
    };
    return ShowformComponent;
}());
export { ShowformComponent };
if (false) {
    /** @type {?} */
    ShowformComponent.prototype.formDirective;
    /** @type {?} */
    ShowformComponent.prototype.formatFlag;
    /** @type {?} */
    ShowformComponent.prototype.autosearchpostflag;
    /** @type {?} */
    ShowformComponent.prototype.dateflag;
    /** @type {?} */
    ShowformComponent.prototype.PasswordVal;
    /** @type {?} */
    ShowformComponent.prototype.externalDataVal;
    /** @type {?} */
    ShowformComponent.prototype.customlistenbuttons;
    /** @type {?} */
    ShowformComponent.prototype.subscriptions;
    /** @type {?} */
    ShowformComponent.prototype.subscriptioncount;
    /** @type {?} */
    ShowformComponent.prototype.autoquerychanged;
    /** @type {?} */
    ShowformComponent.prototype.filechoosersingleTypeFlag;
    /** @type {?} */
    ShowformComponent.prototype.filechoosermultipleTypeFlag;
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
    ShowformComponent.prototype.numberFormatFlag;
    /** @type {?} */
    ShowformComponent.prototype.phonenumberValue;
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
    ShowformComponent.prototype.timeChanged;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFVLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEUsT0FBTyxFQUFzQixXQUFXLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFFOUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSTlDO0lBdURFLDJCQUFvQixXQUF3QixFQUFTLFdBQXVCLEVBQVUsU0FBc0IsRUFBVSxNQUFjLEVBQVUsVUFBc0I7UUFBcEssaUJBdUVDO1FBdkVtQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFTLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVUsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZOztRQS9DN0osZUFBVSxHQUFZLEtBQUssQ0FBQztRQUNuQyx1QkFBa0IsR0FBWSxLQUFLLENBQUM7OztRQXFCN0IsYUFBUSxHQUFRLEtBQUssQ0FBQztRQUN0Qixn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QUMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Z0NBUzVILEtBQUssR0FBUSxFQUFFOzRCQUdyQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLFdBQVcsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dDQUUvTixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO29DQUN2SixLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO29DQUNuRixLQUFLLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJ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Z0JyQywwQ0FBbUM7O0lBQ25DLDhDQUFzQjs7SUFDdEIsNkNBQW9EOztJQTBFcEQsc0RBQWtEOztJQUNsRCx3REFBb0Q7O0lBSXBELHNDQUFxQjs7SUFDckIsdUNBQXNDOztJQUN0QyxpQ0FBZTs7SUFDZixxQ0FBaUI7O0lBQ2pCLG9DQUFnQjs7SUFDaEIsZ0RBQTRCOztJQUM1Qix3Q0FBc0I7O0lBQ3RCLG9EQUFrQzs7SUFDbEMsMkNBQXlCOztJQUN6QixtREFBaUM7O0lBQ2pDLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLHlDQUF1Qjs7SUFDdkIsOENBQWtDOztJQUNsQyw4Q0FBbUM7O0lBRW5DLHFDQUE2Qjs7SUFDN0IsNkNBQXlDOztJQUN6Qyw2Q0FBa0M7O0lBR2xDLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7O0lBQ2pCLDhDQUFzRDs7SUFDdEQsd0NBQWdEOztJQUloRCw4Q0FBNEI7O0lBQzVCLHlDQUF1Qjs7Ozs7SUFzd0RyQiwrQkFBc0I7Ozs7O0lBbjNEWix3Q0FBZ0M7O0lBQUUsd0NBQThCOzs7OztJQUFFLHNDQUE4Qjs7Ozs7SUFBRSxtQ0FBc0I7Ozs7O0lBQUUsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCwgU2ltcGxlQ2hhbmdlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgRm9ybUNvbnRyb2wsIFZhbGlkYXRvcnMsIEZvcm1BcnJheSwgRm9ybUdyb3VwRGlyZWN0aXZlLCBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBDb25maXJtZGlhbG9nLCBTbmFja2JhckNvbXBvbmVudCB9IGZyb20gJy4uL2xpc3RpbmcuY29tcG9uZW50JztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgSW1hZ2VDcm9wcGVkRXZlbnQgfSBmcm9tICduZ3gtaW1hZ2UtY3JvcHBlcic7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG4vLyBpbXBvcnQgeyBDS0VkaXRvckNvbXBvbmVudCB9IGZyb20gXCJuZzItY2tlZGl0b3JcIjtcblxuLy8gaW1wb3J0IHtNYXRTbmFja0Jhcn0gZnJvbSBcIkBhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhclwiO1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLXNob3dmb3JtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3Nob3dmb3JtLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vc2hvd2Zvcm0uY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNob3dmb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQFZpZXdDaGlsZChGb3JtR3JvdXBEaXJlY3RpdmUpIGZvcm1EaXJlY3RpdmU6IEZvcm1Hcm91cERpcmVjdGl2ZTtcbiAgLy8gQFZpZXdDaGlsZChcIm15Y2tlZGl0b3JcIikgY2tlZGl0b3I6IENLRWRpdG9yQ29tcG9uZW50O1xuICBwdWJsaWMgZm9ybWF0RmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBhdXRvc2VhcmNocG9zdGZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWRhdGEoZm9ybWRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWRhdGF2YWwgPSBmb3JtZGF0YTtcbiAgICAvLyBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpXG4gICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLCAnaHRsbW1tbW1tbScpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoZGF0YShmb3JtZmllbGRyZWZyZXNoZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCA9IGZvcm1maWVsZHJlZnJlc2hkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoKGZvcm1maWVsZHJlZnJlc2g6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCA9IGZvcm1maWVsZHJlZnJlc2g7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNodmFsKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtaW5EYXRlID0gbmV3IERhdGUoMjAyMCwgOCwgMjQpO1xuICAvLyBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKDIwMjAsIDgsIDMxKTtcbiAgcHVibGljIGRhdGVmbGFnOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIFBhc3N3b3JkVmFsOiBhbnkgPSAnJztcblxuICBwdWJsaWMgZXh0ZXJuYWxEYXRhVmFsOiBhbnkgPSBbXTtcblxuICBwdWJsaWMgY3VzdG9tbGlzdGVuYnV0dG9uczogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWJ1dHRvbnModmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWxpc3RlbmJ1dHRvbnMgPSB2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21saXN0ZW5idXR0b25zLCdjdXN0b21saXN0ZW5idXR0b25zIGZvcm0nKVxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgZXh0ZXJuYWxkYXRhdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZXh0ZXJuYWxEYXRhVmFsID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5leHRlcm5hbERhdGFWYWwsICd0aGlzLmV4dGVybmFsRGF0YVZhbCcpXG4gIH1cblxuICAvLyBwdWJsaWMgY2tlQ29uZmlnOmFueT17fTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgc3Vic2NyaXB0aW9uY291bnQgPSAwO1xuICBhdXRvcXVlcnljaGFuZ2VkOiBTdWJqZWN0PGFueT4gPSBuZXcgU3ViamVjdDxhbnk+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSwgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLCBwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsKSB7XG5cblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLmF1dG9xdWVyeWNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTUwMCkpXG4gICAgICAuc3Vic2NyaWJlKChhdXRvcmVzOiBhbnkpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NzcyAuLiBhdXRvIHNlYXJjaCBjYWxsZWQgIC4uICcsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAgICAgdGhpcy5hdXRvc2VhcmNocG9zdGZsYWcgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLmZpbHRlcmF1dG9jb21wbGV0ZShyZXMudmFsLCByZXMuZGF0YSk7XG4gICAgICAgIGxldCBkYXRhOiBhbnkgPSBhdXRvcmVzLmRhdGE7XG4gICAgICAgIGxldCB2YWw6IGFueSA9IGF1dG9yZXMudmFsO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5mb3JtZGF0YXZhbC5maWVsZHNcIiwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpO1xuICAgICAgICB0aGlzLmZpbGVyZmllbGRkYXRhID0gW107XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWx0ZXJhdXRvY29tcGxldGUgd2l0aCBzZXJ2ZXIgb3B0aW9uc1wiLCBkYXRhKTtcbiAgICAgICAgZGF0YS5zaG93YXV0b3Byb2dyZXNzYmFyID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgbGluazogYW55ID0gdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwgKyBkYXRhLmVuZHBvaW50O1xuICAgICAgICBsZXQgc291cmNlID0geyBcImZvcm12YWx1ZVwiOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9O1xuICAgICAgICBsZXQgc2VhcmNoY29uZGl0aW9uID0ge31cbiAgICAgICAgc2VhcmNoY29uZGl0aW9uW2RhdGEuc2VhcmNoX2ZpZWxkXSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWU7XG4gICAgICAgIHNvdXJjZVsnc2VhcmNoY29uZGl0aW9uJ10gPSBzZWFyY2hjb25kaXRpb247XG5cblxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib3BvcG9wb1wiLCBsaW5rLCBzZWFyY2hjb25kaXRpb24pO1xuXG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuLCBzb3VyY2UpLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImF1dG9jb21wbGV0ZSBzZWFyY2hpbmcgcmVzcG9uc2VcIiwgcmVzKTtcbiAgICAgICAgICBkYXRhLnNob3dhdXRvcHJvZ3Jlc3NiYXIgPSBmYWxzZTtcbiAgICAgICAgICBpZiAocmVzLnN0YXR1cyA9PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgIGlmIChyZXMucmVzLmxlbmd0aD09MCkge1xuICAgICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gUmVjb3JkcyBGb3VuZCEhJyB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocmVzLnJlcy5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVyZmllbGRkYXRhID0gW107XG4gICAgICAgICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSByZXMucmVzO1xuICAgICAgICAgICAgICAvLyAgY29uY2F0IGVhcmxpZXIgZGF0YSB3aXRoIG5ldyByZXN1bHRzIGFzIG9wdGlvbnMgIFxuICAgICAgICAgICAgICBpZiAoZGF0YS52YWwgPT0gbnVsbCkgZGF0YS52YWwgPSBbXTtcbiAgICAgICAgICAgICAgZGF0YS52YWwgPSBkYXRhLnZhbC5jb25jYXQocmVzLnJlcyk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhLnZhbCcsIGRhdGEudmFsKTtcbiAgICAgICAgICAgICAgLy8gbGV0IHRlbXBhcnI6IGFueSA9IEFycmF5LmZyb20obmV3IFNldChkYXRhLnZhbC5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbSkpKVxuICAgICAgICAgICAgICBkYXRhLnZhbCA9IHRoaXMudW5pcXVlKGRhdGEudmFsLCAna2V5Jyk7XG4gICAgICAgICAgICAgIC8vIGRhdGEudmFsID0gdGVtcGFyclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnZhbCwgJ2RhdGEudmFsJywgcmVzLnJlcywgZGF0YS52YWwubGVuZ3RoLCAndGVtcGFycicpO1xuICAgICAgICAgICAgICAvLyB0aGlzLmF1dG9zZWFyY2hwb3N0ZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAvLyByZXMuZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHNuYWtiYXIgZmlyZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHNuYWtiYXIgZmFpbHVyZSBtZXNzYWdlXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0pXG5cblxuXG4gICAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWluRGF0ZSwgJ3RvZGF5PT09PicsIHRoaXMubWF4RGF0ZSlcblxuICB9XG4gIHB1YmxpYyBmaWxlY2hvb3NlcnNpbmdsZVR5cGVGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWxlY2hvb3Nlcm11bHRpcGxlVHlwZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sO1xuICB9XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB0aXRsZUFsZXJ0ID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICBwb3N0OiBhbnkgPSAnJztcbiAgc2hvd2Zvcm0gPSBmYWxzZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBmb3JtZmllbGRyZWZyZXNodmFsID0gZmFsc2U7XG4gIGZvcm1kYXRhdmFsOiBhbnkgPSB7fTtcbiAgZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWw6IGFueSA9IHt9O1xuICBmaWxlcmZpZWxkZGF0YTogYW55ID0gW107XG4gIGF1dG9jb21wbGV0ZWZpbGVkdmFsdWU6IGFueSA9IFtdO1xuICBmaWxlYXJyYXk6IGFueSA9IFtdO1xuICBmaWxlY291bnQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b2NvbXBsZXRlOiBhbnkgPSAnJztcbiAgZmllbGRsb2FkaW5nOiBhbnkgPSAnJztcbiAgaXNQYXNzd29yZFZpc2libGU6IEJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2luZ2xlSW1nRm9ybURhdGE6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBpbWdWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBudW1iZXJGb3JtYXRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwaG9uZW51bWJlclZhbHVlOiBhbnkgPSBcIlwiO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcbiAgQE91dHB1dCgpIG9uRm9ybUZpZWxkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG4gIEBPdXRwdXQoKSB0aW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG5cblxuICBpbWFnZUNoYW5nZWRFdmVudDogYW55ID0gXCJcIjtcbiAgY3JvcHBlZEltYWdlOiBhbnkgPSBcIlwiO1xuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3JlYXRlRm9ybSgwKTtcblxuXG4gICAgLy8gdGhpcy5zZXRDaGFuZ2VWYWxpZGF0ZSgpXG4gIH1cblxuICAvLyBjdXN0b20gbGlzdGVuIGJ1dHRvbnNcbiAgZ2V0Rm9ybVZhbCh2YWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJysrKysrKysrKz09PT0nKVxuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZm9ybWRhdGEnLCBmaWVsZHZhbDogJ2Zvcm1kYXRhdmFsJywgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGJ1dHRvbnZhbDogdmFsLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcgfSk7XG4gIH1cblxuICAvLyBDdXN0b21GbGFnRmllbGRzXG4gIEN1c3RvbUZsYWdGaWVsZHMoZmllbGQ6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGN1c3RvbUJ1dHRvblZhbDogaXRlbSwgY3VzdG9tZmllbGQ6ICdhZGQnIH0pO1xuICB9XG5cbiAgQ3VzdG9tRmxhZ0ZpZWxkc1JlbW92ZShmaWVsZDogYW55LCBpdGVtOiBhbnkpIHtcbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgY3VzdG9tQnV0dG9uVmFsOiBpdGVtLCBjdXN0b21maWVsZDogJ3JlbW92ZScgfSk7XG4gIH1cblxuICB1bmlxdWUoYXJyYXksIHByb3BlcnR5TmFtZSkge1xuICAgIHJldHVybiBhcnJheS5maWx0ZXIoKGUsIGkpID0+IGFycmF5LmZpbmRJbmRleChhID0+IGFbcHJvcGVydHlOYW1lXSA9PT0gZVtwcm9wZXJ0eU5hbWVdKSA9PT0gaSk7XG4gIH1cblxuXG4gIC8vR2VuZXJhdGUgUGFzc3dvcmQgYnV0dG9uXG4gIEdlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG4gICAgdGhpcy5QYXNzd29yZFZhbCA9ICcnO1xuICAgIHRoaXMuUGFzc3dvcmRWYWwgPSB0aGlzLm1ha2VpZCgxMCk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHZhbC52YWx1ZSA9IHRoaXMuUGFzc3dvcmRWYWw7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0ucGF0Y2hWYWx1ZSh0aGlzLlBhc3N3b3JkVmFsKTtcbiAgICB9LCAyMDApO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5QYXNzd29yZFZhbCwgJ1Bhc3N3b3JkVmFsKysrKycpXG5cblxuICAgIC8vIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgIC8vICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnBhc3N3b3JkZmxhZyA9PSB0cnVlKSB7XG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnBhc3N3b3JkZmxhZywgJysrKys9PScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKVxuICAgIC8vICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS52YWx1ZSA9IHRoaXMuUGFzc3dvcmRWYWw7XG4gICAgLy8gICAgIC8vIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzWydwYXNzd29yZCddLnBhdGNoVmFsdWUodGhpcy5QYXNzd29yZFZhbClcbiAgICAvLyAgICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YSA9IHsgZmllbGQ6ICdwYXNzd29yZCcsIHZhbHVlOiB0aGlzLlBhc3N3b3JkVmFsIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlBhc3N3b3JkVmFsLCAnUGFzc3dvcmRWYWwnKVxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgfVxuXG4gIG9uY2hvb3NlZmlsZXMoZXZlbnQ6IGFueSwgZmlsZW5hbWU6IGFueSwgbXVsdGlwbGVGbGFnOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIndvcmtzIHByb3Blcmx5XCIsIG11bHRpcGxlRmxhZyk7XG4gICAgaWYgKHR5cGVvZiBtdWx0aXBsZUZsYWcgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiaWYgcGFydFwiKTtcbiAgICAgIC8vIHRoaXMuZmlsZWNob29zZXJzaW5nbGVUeXBlRmxhZz10cnVlO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlY2hvb3NlcnNpbmdsZVwiICsgZmlsZW5hbWUpLmNsaWNrKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxzZSBwYXJ0XCIsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZWNob29zZXJcIikpO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlY2hvb3Nlcm11bHRpcGxlXCIgKyBmaWxlbmFtZSkuY2xpY2soKTtcbiAgICAgIC8vIHRoaXMuZmlsZWNob29zZXJtdWx0aXBsZVR5cGVGbGFnPXRydWU7XG5cbiAgICB9XG4gIH1cblxuICAvL2NvcHkgUGFzc3dvcmQgYnV0dG9uXG4gIGNvcHlHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCcrK3Bhc3MnLHRoaXMuZm9ybUdyb3VwLnZhbHVlKVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlLCcrKz8/PycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLnZhbHVlXSlcblxuXG4gICAgdmFyIHBhc3N3b3JkRmllbGREYXRhOiBhbnkgPSAnJztcblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlICE9ICcnKSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSAnJztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHR5cGVvZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpLCc/PycsdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKVxuXG5cbiAgICBpZiAocGFzc3dvcmRGaWVsZERhdGEgIT0gbnVsbCAmJiBwYXNzd29yZEZpZWxkRGF0YSAhPSAnJyAmJiB0eXBlb2YgKHBhc3N3b3JkRmllbGREYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgZWwudmFsdWUgPSBwYXNzd29yZEZpZWxkRGF0YTtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICAgZWwuc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdDb3B5IFRvIENsaXBib2FyZCcgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1BsZWFzZSBHZW5lcmF0ZSBvciBFbnRlciBQYXNzd29yZC4uIScgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICAvL3ByZXZpZXcgUGFzc3dvcmQgYnV0dG9uXG4gIHByZXZpZXdHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuXG4gICAgdmFyIHBhc3N3b3JkRmllbGREYXRhOiBhbnkgPSAnJztcblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSkgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlICE9ICcnKSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSAnJztcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmRGaWVsZERhdGEgIT0gbnVsbCAmJiBwYXNzd29yZEZpZWxkRGF0YSAhPSAnJyAmJiB0eXBlb2YgKHBhc3N3b3JkRmllbGREYXRhKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gY29uc29sZS5sb2codmFsLCAnKysrKysrKysrKysrJylcbiAgICAgIHN3aXRjaCAodmFsLnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFzc3dvcmQnOlxuICAgICAgICAgIHZhbC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgIHRoaXMuaXNQYXNzd29yZFZpc2libGUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgdmFsLnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICAgIHRoaXMuaXNQYXNzd29yZFZpc2libGUgPSB0cnVlO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1BsZWFzZSBHZW5lcmF0ZSBvciBFbnRlciBQYXNzd29yZC4uIScgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICAvL2dlbmVyYXRlIHJhbiBwYXNzd29yZFxuICBtYWtlaWQobGVuZ3RoKSB7XG4gICAgdmFyIHJlc3VsdCA9ICdQJztcbiAgICBsZW5ndGggPSBsZW5ndGggKyAxO1xuICAgIHZhciBjaGFyYWN0ZXJzID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgICB2YXIgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHJlc3VsdCArPSBjaGFyYWN0ZXJzLmNoYXJBdChNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFyYWN0ZXJzTGVuZ3RoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuXG5cbiAgLy8gZXh0ZXJuYWwgRGF0YSBGdW5jdGlvblxuICBleHRlcm5hbERhdGFGdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAvLyB0aGlzLmV4dGVybmFsRGF0YVZhbD1bXTtcbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdleHRlcm5hbGRhdGEnLCBmbGFnOiAnYWRkJywgZmllbGRWYWw6IHZhbHVlLCBpbmRleDogaW5kZXgsIGV4dGVybmFsRGF0YVZhbDogdGhpcy5leHRlcm5hbERhdGFWYWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsIHRoaXMuZXh0ZXJuYWxEYXRhVmFsLCBpbmRleCwgJysrJylcbiAgfVxuXG4gIGV4dGVybmFsRGF0YUVkaXRGdW5jdGlvbihmbGFnLCBmaWVsZCwgaXZhbCwgaSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coZmxhZywgZmllbGQsIGl2YWwsIGksICdleHRlciArKysrJylcblxuICAgIGlmIChmbGFnID09ICdlZGl0Jykge1xuICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgYWN0aW9uOiAnZXh0ZXJuYWxkYXRhJywgZmxhZzogJ2VkaXQnLCBmaWVsZFZhbDogZmllbGQsIGluZGV4OiBpdmFsLCB2YWxpbmQ6IGksIGV4dGVybmFsRGF0YVZhbDogdGhpcy5leHRlcm5hbERhdGFWYWwgfSk7XG4gICAgfVxuXG4gICAgaWYgKGZsYWcgPT0gJ3JlbW92ZScpIHtcbiAgICAgIGZpZWxkLnZhbHVlLnNwbGljZShpLCAxKTtcbiAgICB9XG5cblxuICB9XG5cblxuXG5cbiAgLy8gb3BlbiBjYWxlbmRhciBpbnRvIGRhdGUgZmllbGRcbiAgb3BlbkNhbGVuZGFyKCkge1xuICAgIHRoaXMuZGF0ZWZsYWcgPSB0cnVlO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0ZWZsYWcsICdkYXRlZmxhZycpXG4gIH1cblxuICBuYXZ0b2NhbmNlbCgpIHtcblxuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZm9ybWNhbmNlbCcsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcgfSk7XG5cbiAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5jYW5jZWxyb3V0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5mb3JtZGF0YXZhbC5jYW5jZWxyb3V0ZV0pO1xuICAgIH1cbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gYWZ0ZXIgdmlldyBpbml0IHRyaWdnZXInKTtcbiAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZSA9PSAnZmlsZScpIHtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgdHJpZ2dlcmV2ZW50cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbiB0cmlnZ2VyZXZlbnRzJywgdmFsKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWwgbG9hZGVlZCB0cmlnZ2VyJywgdmFsKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgdGhpcy5oYW5kbGVEcm9wLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuICAgIH0sIDEwMDApO1xuXG4gIH1cblxuICBjYW5jZWwoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYW5jZWwnLGUpO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuXG4gIGhhbmRsZURyb3AoZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaGFuZGVsRHJvcFwiLCBlKVxuICAgIC8vIGxldCBhcGlCYXNlVVJMPVwiXCJcbiAgICAvLyB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xpc3QnKTtcbiAgICBjb25zdCBhcGlCYXNlVVJMID0gJ2h0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXYnO1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlRHJvcCcsIGUpO1xuXG4gICAgY29uc3QgZHQgPSBlLmRhdGFUcmFuc2ZlciA9PSBudWxsID8gZSA6IGUuZGF0YVRyYW5zZmVyO1xuICAgIGNvbnN0IGZpbGVjaG9vc2VyRmxhZyA9IGUuZGF0YVRyYW5zZmVyID09IG51bGwgPyAxIDogMDtcbiAgICAvLyBjb25zb2xlLmxvZyhcImR0IGRhdGFhYSsrXCIsIGR0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImR0IGZpbGVjaG9vc2VyRmxhZysrXCIsIGZpbGVjaG9vc2VyRmxhZyk7XG4gICAgY29uc3QgZmlsZXMgPSBkdC5maWxlcyA9PSBudWxsID8gZHQudGFyZ2V0LmZpbGVzIDogZHQuZmlsZXM7XG4gICAgLy8gY29uc29sZS5sb2coXCJmaWxlcyBjb3VudFwiLCBmaWxlcy5sZW5ndGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tpXTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLCAnZmlsZXMnLCBlLnRhcmdldC5pZCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmFycicsIHRoaXMuZmlsZWFycmF5KTtcbiAgICAgIGNvbnNvbGUubG9nKCdmaWxlcysrJywgZmlsZSk7XG5cbiAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udHlwZSA9PSAnZmlsZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKSB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lID09IGUudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2Vyc2luZ2xlJywgJycpIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJtdWx0aXBsZScsICcnKSkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImlmIHBhcnRcIiwgZS50YXJnZXQuaWQsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNpbmdsZUltZ0Zvcm1EYXRhLCdzaW5nbGVJbWdGb3JtRGF0YScpXG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlsZSBkZXRhaWxzJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sIGcpO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm11bHRpcGxlID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuZGVsZXRlZmlsZSh2YSlcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXNbaV0sICdmaWxlc1tpXT09PT09PT1zaW5nbGUnKVxuXG4gICAgICAgICAgICAvL2ltYWdlIHByZXZpZXcgYmFzZS82NFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIgYmVmb3JlIDJuZCBpZiBwYXJ0IG9mIHR5cGUgY2hlY2tpbmdcIiwgZmlsZXMpO1xuXG4gICAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlc1tpXS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL2pwZWcnKSB7XG4gICAgICAgICAgICAgIC8vU2hvdyBpbWFnZSBwcmV2aWV3XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiMm5kIGlmIHBhcnQgb2YgdHlwZSBjaGVja2luZ1wiKTtcbiAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlVXJsID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5jcm9wcGVkaW1hZ2VhcnJheSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LnJlc3VsdCwgJ2V2ZW50LnRhcmdldC5yZXN1bHQ9PT09PT09PT0nKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uY3JvcHBlZEltYWdlID0gW107XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvW2NdKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgJ2ZpbGVzKysrKysnKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmxvYWRlZCA9IDA7XG4gICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5sb2FkZmlsZSA9IDE7XG4gICAgICAgICAgICBpZiAoZmlsZWNob29zZXJGbGFnID09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lID09IGUudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVmaWxlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPSBmaWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCAndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10rKz09JylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGZpbGVjaG9vc2VyRmxhZyA9PSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3NlcnNpbmdsZScsICcnKV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJzaW5nbGUnLCAnJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVmaWxlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJzaW5nbGUnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKys9PScpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJzaW5nbGUnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCAndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10rKyA+TScpXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzW2ldLCAnZmlsZXNbaV09PT09PT09IG11bHRpcGxlJylcblxuICAgICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlc1tpXS50eXBlID09ICdpbWFnZS9qcGVnJykge1xuICAgICAgICAgICAgICAvL1Nob3cgaW1hZ2UgcHJldmlld1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIisrKysrK2lmIHBhcnRcIiwgZmlsZXMpO1xuICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgZmlsZXNbaV0uaW1hZ2VVcmwgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpbywgJ3JhdGlvKz09PT09PicpXG5cbiAgICAgICAgICAgICAgICAgIGZpbGVzW2ldLmNyb3BwZWRJbWFnZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgZmlsZXNbaV0uYXNwZWN0cmF0aW8gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpbztcbiAgICAgICAgICAgICAgICAgIGZpbGVzW2ldLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsO1xuICAgICAgICAgICAgICAgICAgZmlsZXNbaV0uY3JvcHBlZGltYWdlYXJyYXkgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgaW4gZmlsZXNbaV0uYXNwZWN0cmF0aW8pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGVzW2ldLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10gIT0gbnVsbCAmJiB0eXBlb2YgKGZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdKSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdLCAnZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10nKVxuICAgICAgICAgICAgICAgICAgICAgIC8vIGZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKGZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlc1tpXSwgJ2ZpbGVzW2ldPT0+JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICdpbWFnZVVybCsrKysrJylcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmaWxlc1tpXS5sb2FkZWQgPSAwO1xuICAgICAgICAgICAgZmlsZXNbaV0ubG9hZGZpbGUgPSAxO1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlZmllbGRzICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgIGZpbGVzW2ldLmltYWdlZmllbGRzID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHM7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vZm9yIGRyYWcgYW5kIGRyb3AgZmlsZXNcbiAgICAgICAgICAgIGlmIChmaWxlY2hvb3NlckZsYWcgPT0gMCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0ucHVzaChmaWxlc1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vZm9yIGNob29zZSBmaWxlc1xuICAgICAgICAgICAgaWYgKGZpbGVjaG9vc2VyRmxhZyA9PSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3Nlcm11bHRpcGxlJywgJycpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJtdWx0aXBsZScsICcnKV0gPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3Nlcm11bHRpcGxlJywgJycpXS5wdXNoKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5JywgdGhpcy5maWxlYXJyYXkpO1xuXG4gICAgICAvLyB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIC8vIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24oZSl7XG4gICAgICAvLyAgIGZldGNoKGFwaUJhc2VVUkwrXCIvcmVxdWVzdFVwbG9hZFVSTFwiLCB7XG4gICAgICAvLyAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIC8vICAgICBoZWFkZXJzOiB7XG4gICAgICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAvLyAgICAgfSxcbiAgICAgIC8vICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAvLyAgICAgICBuYW1lOiBmaWxlLm5hbWUsXG4gICAgICAvLyAgICAgICB0eXBlOiBmaWxlLnR5cGVcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAgICAvLyAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oanNvbil7XG4gICAgICAvLyAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAvLyAgICAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgICAvLyAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHt0eXBlOiBmaWxlLnR5cGV9KVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKCl7XG4gICAgICAvLyAgICAgdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIC8vICAgICB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgIC8vICAgICBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgLy8gICB9KTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gdXBsb2FkZmlsZSh2YWw6IGFueSkge1xuICAvLyAgIC8vbGV0IGFwaUJhc2VVUkwgPSBcImh0dHBzOi8vdGdlMjRiYzJuZS5leGVjdXRlLWFwaS51cy1lYXN0LTEuYW1hem9uYXdzLmNvbS9kZXZcIjtcbiAgLy8gICBsZXQgaDphbnk9dGhpcy5idWNrZXR1cGxvYWQodmFsKTtcbiAgLy8gICBjb25zb2xlLmxvZygndXBwcHAnLGgpXG4gIC8vIH1cblxuICB0cmFja0J5Rm4oaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICB0cmFja0J5Rm5NdWx0aXBsZShpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG5cbiAgdHJhY2tCeUZuTXVsdGkoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBrZXl1cFZhbCh2YWwsIGl0ZW0sIGZpLCBpbmQsIGRhdGEsIGZuYW1lLCBzZm5hbWUsIGV2KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGluIGt5dXB2YWwgJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbFtmaV0uaW1hZ2VmaWVsZHMsICdrZXl1cFZhbCcsICdzJywgaXRlbSwgZmksIGluZCwgZGF0YSwgJy0tLScsIHRoaXMuZmlsZWFycmF5LCAnLCwnLCBmbmFtZSwgc2ZuYW1lLCBldi50YXJnZXQudmFsdWUpO1xuICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uaW1hZ2VmaWVsZHNbaW5kXVsndmFsdWUnXSA9IGV2LnRhcmdldC52YWx1ZTtcbiAgICAvLyBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBbXTtcbiAgICAvLyAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID0gW107XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCB8fCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExJyk7XG4gICAgICBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IG51bGwpIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9IFtdO1xuICAgICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSBbXTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGJlZm9yZScsIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdKTtcbiAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IHsga2V5OiBldi50YXJnZXQubmFtZSwgdmFsdWU6IGV2LnRhcmdldC52YWx1ZSB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSBhZnRlcicsIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdKTtcbiAgICAvLyBjb25zb2xlLmxvZyhzZm5hbWUsICdzZm5hbWUnLCBpbmQsIGV2LnRhcmdldC52YWx1ZSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkZGQnLCBmaSwgaW5kKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldKTtcbiAgfVxuXG5cbiAgY2hlY2tWYWx1ZSh2YWwsIGl0ZW0sIGZpLCBpbmQsIGRhdGEsIGZuYW1lLCBzZm5hbWUpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICcrKycpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWxbZmldLmltYWdlZmllbGRzLCAna2V5dXBWYWwnLCAncycsIGl0ZW0sIGZpLCBpbmQsIGRhdGEsICctLS0nLCB0aGlzLmZpbGVhcnJheSwgJywsJywgZm5hbWUsIHNmbmFtZSk7XG5cbiAgICBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IG51bGwgfHwgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMScpO1xuICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsKSB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPSBbXTtcbiAgICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID0gW107XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0ua2V5ICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0ua2V5ID09IHNmbmFtZSkge1xuICAgICAgLy8gY29uc29sZS5sb2coJzIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIgaWYnKTtcblxuICAgICAgc3dpdGNoICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXS52YWx1ZSkge1xuXG4gICAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXS52YWx1ZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIGZhbHNlOlxuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdLnZhbHVlID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJzMzMzMzMzMzMzMzMzMzMzMzMzMzIGVsc2UnKTtcblxuICAgICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSB7IGtleTogc2ZuYW1lLCB2YWx1ZTogdHJ1ZSB9O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSBiZWZvcmUnLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGFmdGVyJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGRkJywgZmksIGluZCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXSk7XG4gIH1cblxuXG5cbiAgdXBsb2FkZmlsZSh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd1cHBwcCcsIHZhbCk7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV07XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdmFsJywgdmFsKTtcbiAgICBmaWxlLnVwbG9hZGVkID0gMjsgLy8gc2hvdyBwcm9ncmVzc2JhclxuICAgIGxldCB0ZW1wbG9hZGVyOiBhbnkgPSB0aGlzLmZpZWxkbG9hZGluZ1t2YWwubmFtZV07XG4gICAgdGVtcGxvYWRlciA9IHZhbC5uYW1lO1xuICAgIC8vIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKGUpID0+IHtcbiAgICAgIGZldGNoKHZhbC5hcGl1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBuYW1lOiB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLFxuICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICBwYXRoOiB2YWwucGF0aCxcbiAgICAgICAgICBidWNrZXQ6IHZhbC5idWNrZXRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdidWNrJywgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7IHR5cGU6IGZpbGUudHlwZSB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgICBmaWxlLnVwbG9hZGVkID0gMTtcbiAgICAgICAgICBmaWxlLmxvYWRmaWxlID0gMTtcbiAgICAgICAgICB2YWwubG9hZGVkID0gbnVsbDtcbiAgICAgICAgICBmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICAgICAgICAvLyBpZih2YWwuaW1hZ2VmaWVsZHMubGVuZ3RoID4gMCl7XG4gICAgICAgICAgLy8gICBmaWxlLmltYWdlZmllbGRzID0gdmFsLmltYWdlZmllbGRzXG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwgJ2ZpbGUudHlwZScpO1xuICAgICAgICAgIC8vIHRlbXBsb2FkZXIgPSBudWxsO1xuICAgICAgICAgIC8vIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgLy8gdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAgICAgLy8gbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICB9O1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuXG5cbiAgdXBsb2FkYWxsKHZhbDogYW55KSB7XG4gICAgLy8gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnVwbG9hZGFsbCA9IDE7XG4gICAgZm9yIChjb25zdCB5IGluIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSkge1xuICAgICAgY29uc3QgYzogYW55ID0gcGFyc2VJbnQoeSkgKiA1MDA7XG4gICAgICAvLyBjb25zb2xlLmxvZygnLS0tJywgdmFsLCAndi0tLScsICd0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0nLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XS51cGxvYWRlZCk7XG4gICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLmJ1Y2tldCA9PSBudWxsKSB0aGlzLnVwbG9hZGZpbGVtdWx0aXBsZSh2YWwsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgeSk7XG4gICAgfVxuICB9XG5cblxuICBkZWxldGVmaWxlbXVsdGlwbGVhbGwodmFsOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKSB7XG4gICAgICBjb25zdCBjOiBhbnkgPSBwYXJzZUludCh5KSAqIDUwMDtcbiAgICAgIHRoaXMuZGVsZXRlZmlsZW11bHRpcGxlKHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB5KTtcbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH0sIDMwMDApO1xuICB9XG5cblxuICB1cGxvYWRmaWxlbXVsdGlwbGUodmFsOiBhbnksIGY6IGFueSwgaW5kZXhmOiBhbnkpIHtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVtpbmRleGZdO1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbGUsJ2ZpbGUnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhmLCdmJyk7XG4gICAgaWYgKHRoaXMuZmlsZWNvdW50W3ZhbC5uYW1lXSA9PSBudWxsKSB7IHRoaXMuZmlsZWNvdW50W3ZhbC5uYW1lXSA9IDA7IH1cbiAgICB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0rKztcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB2YWwgaW4gbSAyJywgdmFsLCBmLCBpbmRleGYsICdpZicsZmlsZSk7XG4gICAgZmlsZS51cGxvYWRlZCA9IDI7IC8vIHNob3cgcHJvZ3Jlc3NiYXJcbiAgICBmaWxlLmxvYWRmaWxlID0gMTtcbiAgICBsZXQgdGVtcGxvYWRlcjogYW55ID0gdGhpcy5maWVsZGxvYWRpbmdbdmFsLm5hbWVdO1xuICAgIHRlbXBsb2FkZXIgPSB2YWwubmFtZTtcbiAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgICBmZXRjaCh2YWwuYXBpdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aDogdmFsLnBhdGgsXG4gICAgICAgICAgYnVja2V0OiB2YWwuYnVja2V0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYnVjaycsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwgeyB0eXBlOiBmaWxlLnR5cGUgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgZmlsZS5sb2FkZWQgPSBudWxsO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGUudHlwZSwnZmlsZS50eXBlJylcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB0eXBlJywgZmlsZSwgdHlwZW9mIChmaWxlKSk7XG4gICAgY29uc3QgZnR5cGU6IGFueSA9IHR5cGVvZiAoZmlsZSk7XG4gICAgLy8gaWYgKGZ0eXBlID09IFwiQmxvYlwiKSBcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuXG4gIGRlbGV0ZWZpbGUodmFsOiBhbnksIGZsYWc6IGFueSA9ICcnKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5Jyx0aGlzLmZpbGVhcnJheSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCsrIGRlbGV0ZScsIHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwubmFtZSk7XG4gICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV07XG4gICAgc291cmNlLmZpbGUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lO1xuICAgIHNvdXJjZS5wYXRoID0gdmFsLnBhdGg7XG4gICAgc291cmNlLmJ1Y2tldCA9IHZhbC5idWNrZXQ7XG4gICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnVwbG9hZGVkID0gMjtcbiAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0ubG9hZGZpbGUgPSAwO1xuXG5cbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnICYmIGZsYWcgPT0gJycpIHtcbiAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgdmFsLnZhbHVlID0ge307XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0udXBsb2FkZWQgPSBudWxsO1xuICAgICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0ubG9hZGZpbGUgPSAwO1xuICAgICAgICB2YWwubG9hZGZpbGUgPSAwO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0sICc/Pz8/PT09RGVsZXRlPT09Pz8/Pz8nKVxuXG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIGRlbGV0ZXNpbmdsZWZpbGUodmFsOiBhbnksIGZsYWc6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJ3ZhbCsrKyBkZWxldGUnLCBmbGFnKVxuICAgIGlmIChmbGFnID09ICdpbWFnZS9wbmcnIHx8IGZsYWcgPT0gJ2ltYWdlL2pwZycgfHwgZmxhZyA9PSAnaW1hZ2UvanBlZycpIHtcbiAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5sb2FkZmlsZSA9IDA7XG4gICAgICB2YWwuaW1hZ2VVcmwgPSBudWxsO1xuICAgICAgdmFsLmxvYWRmaWxlID0gMDtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0ubG9hZGZpbGUgPSAwO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuICBkZWxldGVzaW5nbGVmaWxlZnJvbW11bHRpcGxlKHZhbDogYW55LCBmaWVsZDogYW55ID0gJycsIGluZGV4OiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsIGZpZWxkLCBpbmRleCwgJz8/Pz8rKysrKycpXG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW2luZGV4XTtcbiAgICBmaWxlLmxvYWRmaWxlID0gMDtcbiAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdICE9IG51bGwpIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLCAndGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdPT0nKVxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgIH0pO1xuICB9XG5cblxuXG4gIGRlbGV0ZWZpbGVtdWx0aXBsZSh2YWw6IGFueSwgZmllbGQ6IGFueSA9ICcnLCBpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAndmFsKysnLCBpbmRleClcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVtpbmRleF07XG4gICAgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdLS07XG4gICAgc291cmNlLmZpbGUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lO1xuICAgIHNvdXJjZS5wYXRoID0gdmFsLnBhdGg7XG4gICAgc291cmNlLmJ1Y2tldCA9IHZhbC5idWNrZXQ7XG4gICAgZmlsZS51cGxvYWRlZCA9IDI7XG4gICAgLy8gZmlsZS5sb2FkZmlsZSA9IDA7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHZhbC5hcGlkZWxldGV1cmwsIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICBmaWxlLmxvYWRmaWxlID0gMDtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgIGZpbGUubG9hZGZpbGUgPSAwO1xuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSwgJ3RoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXT09JylcblxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSBpbiBmb3JtICEhIScsIGNoYW5nZXMsICdmcnYnLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsKTtcbiAgICBmb3IgKGNvbnN0IHYgaW4gY2hhbmdlcykge1xuICAgICAgLy8gY29uc29sZS5sb2codixjaGFuZ2VzW3ZdLCd2dicpO1xuICAgICAgaWYgKHYgPT0gJ2Zvcm1maWVsZHJlZnJlc2hkYXRhJykge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZmZmIGluIHNldCB0dCcpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwsICdtJyk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwICE9IG51bGwgJiYgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCAhPSBudWxsICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGRdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKTtcbiAgICAgICAgICAgIH0gaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gbnVsbCAmJiB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZvcm1rZXkgaW4gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmRhdGFbZm9ybWtleV0nLCB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleV0gIT0gbnVsbCkgeyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5XS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0pOyB9XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3JtZGF0YXZhbGtleSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XS5pbmRleE9mKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBpZlxuXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm5hbWUgPT0gZm9ybWtleSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IG51bGwgfHwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIHNpbmdsZScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwsIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldID09ICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmYgb2YgaWZcblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIGNoZWNrIGJveCBtdWx0aXBsZSAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZm9ybWtleSArICArIGF1dG9zZWx2YWwnLCBmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpICE9IC0xKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKHRydWUpOyB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXS5wYXRjaFZhbHVlKGZhbHNlKTsgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5kIG9mIGlmXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3Nob3dmaWVsZGxvYWRlcicpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWVsZGxvYWRpbmcgPSB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ2FkZGZyb21jb250cm9sJykge1xuICAgICAgICAgICAgICB0aGlzLm1hbmFnZWZyb21jb250cm9sKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUsICdhZGQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdyZW1vdmVmcm9tY29udHJvbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5tYW5hZ2Vmcm9tY29udHJvbCh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlLCAncmVtb3ZlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAncmVzZXRmb3JtJykge1xuICAgICAgICAgICAgICB0aGlzLnJlc2V0Zm9ybWRhdGEoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdhdXRvY29tcGxldGV2aXNpYmxlJykge1xuICAgICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZXZpc2libGUodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGF1dG9jb21wbGV0ZXZpc2libGUodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJywgdmFsLCAnYXV0b2NvbXBsZXRldmlzaWJsZScsICduZy1yZWZsZWN0LWF1dG9jb21wbGV0ZScpO1xuICAgIGxldCBhdXRvZWxlbWVudHM6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWJmb3JtY2xhc3MgaW5wdXRbbmctcmVmbGVjdC1hdXRvY29tcGxldGVdOm5vdChbbmctcmVmbGVjdC1hdXRvY29tcGxldGU9XCIwXCJdKScpO1xuICAgIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5saWJmb3JtY2xhc3MgaW5wdXRbbmctcmVmbGVjdC1hdXRvY29tcGxldGVdOm5vdChbbmctcmVmbGVjdC1hdXRvY29tcGxldGU9XCIwXCJdKScpWzBdLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy8gLmZvckVhY2goKGRpdjogYW55KSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnZ290IGRpdiAnLCBkaXYpO1xuICAgIC8vICAgaWYgKGRpdiAhPSBudWxsKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGRpdikuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIC8vIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZWxlbWVudHMnLCBhdXRvZWxlbWVudHMubGVuZ3RoLCBhdXRvZWxlbWVudHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IGF1dG9lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxpYmZvcm1jbGFzcyBpbnB1dFtuZy1yZWZsZWN0LWF1dG9jb21wbGV0ZV06bm90KFtuZy1yZWZsZWN0LWF1dG9jb21wbGV0ZT1cIjBcIl0pJylbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGxldCBlbGVtOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGliZm9ybWNsYXNzIGlucHV0W25nLXJlZmxlY3QtYXV0b2NvbXBsZXRlXTpub3QoW25nLXJlZmxlY3QtYXV0b2NvbXBsZXRlPVwiMFwiXSknKVtpXTtcbiAgICAgIGlmIChlbGVtICE9IG51bGwpIHtcbiAgICAgICAgZWxlbS5zdHlsZS5kaXNwbGF5ID0gdmFsLmRpc3BsYXk7XG4gICAgICAgIC8vIGVsZW0uY2xhc3NMaXN0LmFkZCgnaGlkZWNscycpO1xuICAgICAgfVxuXG4gICAgfVxuXG5cbiAgfVxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIGZpbHRlcmF1dG9jb21wbGV0ZSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnY2MnLCB2YWwsIGRhdGEpO1xuICAgIC8vIHJldHVybjtcbiAgICBpZiAoZGF0YS5lbmRwb2ludCAhPSBudWxsKSB7XG5cbiAgICAgIHRoaXMuYXV0b3F1ZXJ5Y2hhbmdlZC5uZXh0KHsgdmFsOiB2YWwsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAvLyByZXR1cm5cblxuICAgICAgLy8gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZGF0YS5uYW1lXS5zaG93YXV0b3Byb2dyZXNzYmFyPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpZWxkdmFsID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICAgIGlmIChmaWVsZHZhbCA9PSAnJyB8fCBmaWVsZHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnZhbCA9IGRhdGEudmFsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IGZpbHRlcnZhbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbCcsIGZpbHRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgcmVsb2FkYXV0b2NvbXBsZXRlKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJjbGljayBpbiBhdXRvY29tcGxldGUgY2FsbGVkXCIsIHZhbCk7XG5cbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSB2YWwubmFtZTtcbiAgICB0aGlzLmZpbGVyZmllbGRkYXRhID0gW107XG4gIH1cbiAgYXV0b2NvbXBsZXRlcmVzZXRtYXRjaGlwKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2xpY2sgaW4gYXV0b2NvbXBsZXRlcmVzZXRtYXRjaGlwIGNhbGxlZFwiLCB0aGlzLmZpbGVyZmllbGRkYXRhKTtcbiAgfVxuICAvLyBmb3IgcmVtb3Zpbmcgc2VsZWN0ZWQgdmFscyBpbiBhdXRvY29tcGxldGUgXG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOiBhbnkscmVtb3ZlZERhdGE6YW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJ2YWxcIix2YWwsXCIgXCIscmVtb3ZlZERhdGEpO1xuICAgIFxuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS5wYXRjaFZhbHVlKCcnKTtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwubmFtZSk7XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgdmFsLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgYXV0b2NvbXBsZXRlZGF0YTogdmFsLCBhdXRvY29tcGxldGVmaWxlZHZhbHVlOiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgLHJlbW92ZWREYXRhU2V0OnJlbW92ZWREYXRhfSk7XG4gIH1cbiAgcmVtb3ZlY2hpcG11bHRpcGxlKHZhbDogYW55LCBpbmRleDogYW55LHJlbW92ZWREYXRhOmFueSkge1xuICAgIGNvbnNvbGUubG9nKFwidmFsIGZvciBtdWx0aXBsZVwiLGluZGV4KTtcbiAgICBcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnBhdGNoVmFsdWUodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXSk7XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0ubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0ucGF0Y2hWYWx1ZSgnJyk7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsLm5hbWUpO1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IHZhbCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGF1dG9jb21wbGV0ZWRhdGE6IHZhbCwgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTogdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICxyZW1vdmVkRGF0YVNldDpyZW1vdmVkRGF0YSxyZW1vdmVkSW5kZXg6aW5kZXh9KTtcblxuICB9XG4gIHNldGF1dG9jb21wbGV0ZXZhbHVlKHZhbDogYW55LCBmaWVsZDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZmIGF1dG8gY29tcGxldGUgc2V0ICcsIHZhbCwgJzAwMDAwJywgZmllbGQsIGZpZWxkLm5hbWUpO1xuXG5cblxuICAgIGlmIChmaWVsZC5tdWx0aXBsZSA9PSBudWxsIHx8IHR5cGVvZiBmaWVsZC5tdWx0aXBsZSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgaWYgKHZhbCAhPSBudWxsICYmIHZhbC5rZXkgIT0gbnVsbCkgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gdmFsLmtleTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9IFtdO1xuICAgICAgfVxuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdLnB1c2godmFsLmtleSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdID09IG51bGwpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnBhdGNoVmFsdWUoXCJcIik7XG4gICAgICB0aGlzLmlucHV0Ymx1cihmaWVsZC5uYW1lKTtcbiAgICB9XG4gICAgdGhpcy5yZWxvYWRhdXRvY29tcGxldGUoZmllbGQubmFtZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmaWVsZC5uYW1lXCIsIGZpZWxkLnZhbHVlLCBcIm9wb3BcIiwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUpO1xuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnBhdGNoVmFsdWUoXCJcIik7XG4gICAgXG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGF1dG9jb21wbGV0ZWRhdGE6IHZhbCwgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTogdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlIH0pO1xuXG4gICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSAhPSBudWxsICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgLy8gICBsZXQgdGVtcGFycjogYW55ID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbSkpKVxuICAgIC8vICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gdGVtcGFycjtcbiAgICAvLyB9XG5cblxuICB9XG5cblxuICBtYW5hZ2Vmcm9tY29udHJvbChmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlIGNvbnRyb2wnLCBmaWVsZCwgdHlwZSwgZmllbGQubGVuZ3RoKTtcbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLm5hbWUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGRbJ25hbWUnXSwgJ2MnLCB5LCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lID09IG51bGwgJiYgZmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubGVuZ3RoLCAnZmwnKTtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBmb3IgKGNvbnN0IHogaW4gZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZFt6XSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGRbel0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQgaW4gYXJyYXkgZm9ybSAnLCBmaWVsZFt6XSwgJ2MgYXInLCB5LCBmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2FkZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZGQgZm9ybScpO1xuICAgICAgaWYgKGZpZWxkLmFmdGVyICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuYWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSArIDEsIDAsIGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCAuLicsIGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gYXJyYXkgZm9ybSAgYWRkJyk7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW3ZdICE9IG51bGwgJiYgZmllbGRbdl0ubmFtZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbdl0uYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZFt2XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBmaWVsZCBhZGRlZCAuLicsIGZpZWxkW3ZdWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXNldGZvcm1kYXRhKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSAnJztcbiAgfVxuICB0aW1lcGlja2VyY2hhbmdlKHZhbDphbnkpe1xuICAgIGNvbnNvbGUubG9nKFwiUFBQUFwiLHZhbCk7XG4gICAgXG4gIH1cblxuICBjaGVja2NoYW5nZShmaWVsZDogYW55LCBpbmRleDogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJ0aW1lcGlja2VyXCIsZmllbGQsXCIgIFwiLGluZGV4KTtcbiAgICBcbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCwgJ2NoYW5nZScsIGluZGV4LCAnaW5kZXgyJyk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdICE9IG51bGwpIHtcbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoZmllbGQuZGVwZW5kZW50ICE9IG51bGwgJiYgZmllbGQuZGVwZW5kZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB2YzogYW55ID0gMDtcbiAgICAgIGZvciAoY29uc3QgbiBpbiBmaWVsZC5kZXBlbmRlbnQpIHtcblxuICAgICAgICBpZiAoZmllbGQuZGVwZW5kZW50W25dLmNvbmR2YWwudG9TdHJpbmcoKSA9PSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gbGV0IHRlbXZhbGlkYXRpb25ydWxldDogYW55ID0gW107XG4gICAgICAgICAgdmMrKztcbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lLCBuZXcgRm9ybUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLnZhbHVlLCB0ZW12YWxpZGF0aW9ucnVsZXQpKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm5ubm4nLCAnLS0nLCBwYXJzZUludChpbmRleCArIDEgKyBwYXJzZUludCh2YykpLCAnLS0nLCB2YyArIGluZGV4ICsgMSwgaW5kZXgsIHZjLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGRbJ25hbWUnXSk7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KGluZGV4ICsgcGFyc2VJbnQodmMpKSwgMCwgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oMSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCcsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZFsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGNyZWF0ZUZvcm0oaW5pdGlhbGl6ZTogYW55ID0gMCkge1xuICAgIC8qdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlscmVnZXgpXSwgdGhpcy5jaGVja0luVXNlRW1haWxdLFxuICAgICAgJ2Z1bGxuYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAvLyAncGFzc3dvcmQnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuY2hlY2tQYXNzd29yZF1dLFxuICAgICAgLy8nZGVzY3JpcHRpb24nOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgIC8vJ3ZhbGlkYXRlJzogJydcbiAgICB9KTsqL1xuICAgIC8vIGxldCBkZW1vQXJyYXk6YW55PVtdO1xuICAgIGlmIChpbml0aWFsaXplID09IDApIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCAnZmcnKVxuICAgIGZvciAoY29uc3QgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dXSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlbWNvbnRyb2xhcnI6IGFueSA9IFtdO1xuICAgICAgICBjb25zdCB0ZW12YWxpZGF0aW9ucnVsZTogYW55ID0gW107XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgXG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnbnVtYmVyZm9ybWF0Jyl7XG4gICAgICAgICAgICB0aGlzLnBob25lbnVtYmVyVmFsdWU9dGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKCcnKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZW1jb250cm9sYXJyXCIsdGVtY29udHJvbGFycik7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy91c2UgZm9yIGRlbGV0ZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5sb2FkZmlsZSA9IDE7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZmEgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z2JywgZmEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmxvYWRmaWxlID0gMTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbyAhPSAnJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uYXNwZWN0cmF0aW8gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbztcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbDtcblxuICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgYyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5hc3BlY3RyYXRpb1tjXSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5pbWFnZWZpZWxkcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlY291bnRbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0udXBsb2FkZWQgPSAxO1xuICAgICAgICAgICAgICAvL3VzZSBmb3IgZGVsZXRlIGRhdGFcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubG9hZGZpbGUgPSAxO1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS5sb2FkZmlsZSA9IDE7XG5cbiAgICAgICAgICAgICAgLy8gZm9yIChsZXQgYyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSkge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvW2NdKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXksICdmaWxlYXJyYXknKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcblxuXG4gICAgICAgICAgLy8gbGFiZWw6IFwiRG9jdG9yL1ByYWN0aWNlIGlzIDogXCIsXG4gICAgICAgICAgLy8gbmFtZTogXCJkb2NwcmFjXCIsXG4gICAgICAgICAgLy8gLy8gaGludDogJ0luIG1vbnRocycsXG4gICAgICAgICAgLy8gdHlwZTogXCJjaGVja2JveFwiLFxuICAgICAgICAgIC8vIG11bHRpcGxlOiB0cnVlLFxuICAgICAgICAgIC8vIHZhbDogW1xuICAgICAgICAgIC8vICAgICB7IGtleTogMCwgdmFsOiBcIkZhbWlseSBNZWRpY2luZVwiIH0sXG4gICAgICAgICAgLy8gICAgIHsga2V5OiAxLCB2YWw6IFwiTmV1cm9sb2d5XCIgfSxcbiAgICAgICAgICAvLyAgICAgeyBrZXk6IDIsIHZhbDogXCJELk8gRG9jdG9yIG9mIE9zdGVvcGF0aHlcIiB9LFxuICAgICAgICAgIC8vICAgICB7IGtleTogMywgdmFsOiBcIkdlbmVyYWwgUHJhY3RpY2VcIiB9LFxuICAgICAgICAgIC8vICAgICB7IGtleTogNCwgdmFsOiBcIkludGVybmFsIE1lZGljaW5lXCIgfSxcbiAgICAgICAgICAvLyAgICAgeyBrZXk6IDUsIHZhbDogXCJQYWluIE1nbnQgKEludGVncmF0ZWQgUHJhY3RpY2UpXCIgfSxcbiAgICAgICAgICAvLyAgICAgeyBrZXk6IDYsIHZhbDogXCJQcmltYXJ5IENhcmVcIiB9LFxuICAgICAgICAgIC8vICAgICB7IGtleTogNywgdmFsOiBcIkVuZG9jcmlub2xvZ3lcIiB9LFxuICAgICAgICAgIC8vICAgICB7IGtleTogOCwgdmFsOiBcIkludGVncmF0ZWQgU3BlY2lhbHR5XCIgfSxcbiAgICAgICAgICAvLyAgICAgeyBrZXk6IDksIHZhbDogXCJDYXJkaW9sb2d5XCIgfSxcbiAgICAgICAgICAvLyBdLFxuICAgICAgICAgIC8vIHZhbHVlOiBbXSxcbiAgICAgICAgICAvLyB2YWxpZGF0aW9uczogW1xuICAgICAgICAgIC8vICAgICB7IHJ1bGU6IFwicmVxdWlyZWRcIiwgbWVzc2FnZTogXCJNdXN0IGJlIHNlbGVjdCBhbnkgb2YgdGhlbS5cIiB9LFxuICAgICAgICAgIC8vIF0sXG4gICAgICAgICAgLy8gbGV0IHRlbXBmaWVsZHZhbDogYW55ID0ge1xuICAgICAgICAgIC8vICAgbGFiZWw6IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmxhYmVsLFxuICAgICAgICAgIC8vICAgbmFtZTogdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSxcbiAgICAgICAgICAvLyAgIHZhbHVlOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSxcbiAgICAgICAgICAvLyAgIHZhbGlkYXRpb25zOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucyxcblxuICAgICAgICAgIC8vICAgLy8gdmFsdWVcblxuICAgICAgICAgIC8vIH07XG4gICAgICAgICAgLy8gdGVtY29udHJvbGFyci5wdXNoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKTtcblxuXG5cbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgPT0gbnVsbCkgeyB0ZW1jb250cm9sYXJyLnB1c2goW10pOyB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRjaGFycjogYW55ID0gW107XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYicsIGIsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgIHRjaGFyci5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IHRjaGFyci5wdXNoKGZhbHNlKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHB1c2ggdGhlIHZhbFxuICAgICAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2godGNoYXJyKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RjaCcsIHRjaGFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZSA9ICdOb3QgVmFsaWQgISEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21hdGNoJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ2F1dG9yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmF1dG9yZXF1aXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAncGF0dGVybicpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXhMZW5ndGgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtaW4nKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtaW5MZW5ndGgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0sMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ3dyYXBfJyArIGZpZWxkcy5uYW1lICsgJ18nICsgdmFscy5rZXkpLmNsYXNzTGlzdC5hZGQoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgICAgIC8vIGRlbW9BcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXT1uZXcgRm9ybUNvbnRyb2woJycpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlbXZhbGlkYXRpb25ydWxlXCIsIHRlbXZhbGlkYXRpb25ydWxlKTtcblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnaW1hZ2UnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbWd3cmFwXycgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ18nICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpLmNsYXNzTGlzdC5hZGQoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgICAgICAgfSwgNDAwMCk7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGxldCB0Y2h2YXI6IGFueSA9IGZhbHNlO1xuXG4gICAgICAgICAgLy8gbGV0XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Z2ID8/PyAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUpO1xuICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICAgIGZvciAoY29uc3QgaiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluY2x1ZGVzKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtqXS5rZXkpKSB7XG4gICAgICAgICAgICAgIHRjaHZhciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgeyB0Y2h2YXIgPSBmYWxzZTsgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ24nLCBuLCBqLCB0Y2h2YXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ19fJyArIGosIG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIsIHRlbXZhbGlkYXRpb25ydWxlKSk7XG4gICAgICAgICAgICAvLyBpZigpXG4gICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSBhcyBGb3JtQXJyYXkpLnB1c2goY29udHJvbCk7Ki9cbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0Y2h2YXIpXG4gICAgICAgICAgICAvLyBdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2woeyB2YWx1ZTogdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUsIGRpc2FibGVkOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5kaXNhYmxlZCB9LCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuXG4gICAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgXSkpOyovXG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2wodGVtY29udHJvbGFyclswXSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiB0ZW1jb250cm9sYXJyWzBdLCBkaXNhYmxlZDogdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uZGlzYWJsZWQgfSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBhdCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdCAuLi4nLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCBhdCwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpID09ICdvYmplY3QnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5LCAnbXVsdGkgYXV0b2NvbXBsZXRlIHRyaWdnZXJlZCAgISEgJyk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2luZ2xlIGF1dG8gY29tcGxldGUgdHJpZ2dlciBibG9jaycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0IGF1dG8gY29tcGxldGUgc2luZ2xlIHRyaWdnZXJlZCcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcbiAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsWzBdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyAnbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBcbiAgICAvLyA9dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy8gdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGRlbW9BcnJheSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycsZGVtb0FycmF5KTtcbiAgICAgIHRoaXMuc2hvd2Zvcm0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2dycCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIHNldENoYW5nZVZhbGlkYXRlKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgndmFsaWRhdGUnKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0ZSA9PSAnMScpIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pO1xuICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9ICdZb3UgbmVlZCB0byBzcGVjaWZ5IGF0IGxlYXN0IDMgY2hhcmFjdGVycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBzZXRwaG9uZW51bWJlclZhbGlkYXRlKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDE0KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm5vdCBjb3JyZWN0XCIpO1xuICAgICAgdGhpcy5udW1iZXJGb3JtYXRGbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgdGhpcy5udW1iZXJGb3JtYXRGbGFnID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgfVxuXG5cblxuXG4gIGNob29zZWltZyh2YWxzOiBhbnksIGZpZWxkczogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codmFscywgZmllbGRzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nd3JhcHBlcicpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGVsZW06IGFueTtcbiAgICAgIGVsZW0gPSBlbDtcbiAgICAgIC8vIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjVzIGxpbmVhciAwc1wiO1xuICAgICAgLy8gZWxlbS5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZHMubmFtZV0ucGF0Y2hWYWx1ZSh2YWxzLmtleSk7XG4gIH1cbiAgY2hlY2tQYXNzd29yZHMoZ3JvdXA6IEZvcm1Hcm91cCkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG4gICAgY29uc3QgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmIChjb25maXJtUGFzcyA9PSBudWxsIHx8IGNvbmZpcm1QYXNzID09ICcnKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAocGFzcyAhPSBjb25maXJtUGFzcykge1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7IG1hdGNoOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIHsgbWF0Y2g6IHRydWUgfTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuICBjaGVja1Bhc3N3b3JkKGNvbnRyb2wpIHtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBjb250cm9sLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS57OCx9KS87XG4gICAgcmV0dXJuICghcGFzc3dvcmRDaGVjay50ZXN0KGVudGVyZWRQYXNzd29yZCkgJiYgZW50ZXJlZFBhc3N3b3JkKSA/IHsgcmVxdWlyZW1lbnRzOiB0cnVlIH0gOiBudWxsO1xuICB9XG4gIGF1dG9yZXF1aXJlZChncm91cDogYW55KSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcblxuICAgIGZvciAoY29uc3QgYiBpbiBncm91cCkge1xuICAgICAgaWYgKGdyb3VwW2JdLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXSAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdLnJ1bGUgPT0gJ2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwW2JdLm5hbWVdID09IG51bGwpIHtcblxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXS5zZXRFcnJvcnMoeyBhdXRvcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB7IGF1dG9yZXF1aXJlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnYmdycnInLGdyb3VwLGdyb3VwLm5hbWUpO1xuICAgIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdICE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXAubmFtZV09PW51bGwpe1xuXG5cblxuICAgIC8vIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgLy8gbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIC8vIGlmKGNvbmZpcm1QYXNzPT1udWxsIHx8IGNvbmZpcm1QYXNzPT0nJyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gICAgLy8gICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIC8vIH1cbiAgICAvLyBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgICAvLyAgIHJldHVybiB7bWF0Y2g6dHJ1ZX07XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgY29uc3QgZGIgPSBbJ3RvbnlAZ21haWwuY29tJ107XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoZGIuaW5kZXhPZihjb250cm9sLnZhbHVlKSAhPT0gLTEpID8geyBhbHJlYWR5SW5Vc2U6IHRydWUgfSA6IG51bGw7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0sIDQwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3IoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldEVycm9yJywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCcgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdwYXR0ZXJuJykgPyAnTm90IGEgdmFsaWQgZW1haWxhZGRyZXNzJyA6XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcignYWxyZWFkeUluVXNlJykgPyAnVGhpcyBlbWFpbGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UnIDogJyc7XG4gIH1cblxuICBnZXRFcnJvclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQgKGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyKScgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlbWVudHMnKSA/ICdQYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlcicgOiAnJztcbiAgfVxuXG4gIG9uU3VibWl0KHBvc3QpIHtcbiAgICBjb25zb2xlLmxvZygneCcsIHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcbiAgICAvLyByZXR1cm47XG4gICAgdGhpcy5wb3N0ID0gcG9zdDtcbiAgICBjb25zdCB0ZW1wZm9ybXZhbDogYW55ID0ge307XG4gICAgZm9yIChjb25zdCB4IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWxpZCl7XG4gICAgICAvLyBjb25zb2xlLmxvZygneCcsdGhpcy5mb3JtR3JvdXApO1xuICAgICAgY29uc3QgYiA9IHguc3BsaXQoJ19fJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYicsYixiLmxlbmd0aCxiWzBdKTtcblxuXG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsKSB7XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgJz4+Pz89PT09IG5vdCBudWxsIHN1Ym1pdCArKysrJylcblxuICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnVwbG9hZGVkICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udXBsb2FkZWQgPT0gMSAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5sb2FkZmlsZSA9PSAxKSB7XG4gICAgICAgICAgICAvLyBmaWxlc2VydmVybmFtZTogXCJUZXN0LTE1ODkyMTY5OTIzOTJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWQ6IDE1ODkxNzQ0Nzc1MDRcbiAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZERhdGU6IE1vbiBNYXkgMTEgMjAyMCAxMDogNTE6IDE3IEdNVCArIDA1MzAoSW5kaWEgU3RhbmRhcmQgVGltZSkgeyB9XG4gICAgICAgICAgICAvLyBuYW1lOiBcIk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgIC8vIHNpemU6IDEzNTA5NlxuICAgICAgICAgICAgLy8gdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgIC8vIHVwbG9hZGVkOiAxXG5cblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0sICc+Pj8/IGZpbGUgc3VibWl0IHNzJylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCAnPj4/Pz09PT0gZmlsZSBzdWJtaXQgbG9hZGZpbGUgMSA9PT0nKVxuXG4gICAgICAgICAgICBjb25zdCB0ZmlsZTogYW55ID0ge307XG5cblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udHlwZSA9PSAnaW1hZ2UvanBnJyB8fCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS50eXBlID09ICdpbWFnZS9qcGVnJykge1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmFzcGVjdHJhdGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0ZmlsZS5hc3BlY3RyYXRpbyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmFzcGVjdHJhdGlvO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5jcm9wcGVkaW1hZ2VhcnJheSkge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmNyb3BwZWRpbWFnZWFycmF5W2NdLmZpbGU7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uY3JvcHBlZGltYWdlYXJyYXlbY10uYmFzZTY0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRmaWxlLmNyb3BwZWRpbWFnZWFycmF5ID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uY3JvcHBlZGltYWdlYXJyYXk7XG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cblxuXG5cbiAgICAgICAgICAgIHRmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZmlsZXNlcnZlcm5hbWU7XG4gICAgICAgICAgICB0ZmlsZS5uYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ubmFtZTtcbiAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zaXplO1xuICAgICAgICAgICAgdGZpbGUudHlwZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGU7XG4gICAgICAgICAgICB0ZmlsZS5wYXRoID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ucGF0aDtcbiAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgIHRmaWxlLmJhc2V1cmwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5iYXNldXJsO1xuXG4gICAgICAgICAgICB0ZmlsZS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRmaWxlLCAnc2luZ2xlIHRmaWxlPj4nLClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5sb2FkZmlsZSA9PSAwKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCAnPj4/Pz09PT0gZmlsZSBsb2FkZmlsZSAwID09PScpXG5cbiAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnBhdGNoVmFsdWUodGZpbGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGNvbnN0IHRmaWxlYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0pIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10sICd0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSArPT09PT09PT0nKVxuXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS51cGxvYWRlZCA9PSAxKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLCAndGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10nKVxuICAgICAgICAgICAgICAvLyBmaWxlc2VydmVybmFtZTogXCJUZXN0LTE1ODkyMTY5OTIzOTJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZDogMTU4OTE3NDQ3NzUwNFxuICAgICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgICAvLyBuYW1lOiBcIk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgICAgLy8gc2l6ZTogMTM1MDk2XG4gICAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAgIC8vIHVwbG9hZGVkOiAxXG4gICAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcblxuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZSA9PSAnaW1hZ2UvanBlZycpIHtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmFzcGVjdHJhdGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHRmaWxlLmFzcGVjdHJhdGlvID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uYXNwZWN0cmF0aW87XG4gICAgICAgICAgICAgICAgICB0ZmlsZS5jcm9wcGVkaW1hZ2VhcnJheSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmNyb3BwZWRpbWFnZWFycmF5O1xuXG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmNyb3BwZWRpbWFnZWFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5jcm9wcGVkaW1hZ2VhcnJheVtjXS5iYXNlNjQ7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5jcm9wcGVkaW1hZ2VhcnJheVtjXS5maWxlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB0ZmlsZS5jcm9wcGVkaW1hZ2VhcnJheSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmNyb3BwZWRpbWFnZWFycmF5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgdGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5maWxlc2VydmVybmFtZTtcbiAgICAgICAgICAgICAgdGZpbGUubmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLm5hbWU7XG4gICAgICAgICAgICAgIHRmaWxlLnNpemUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5zaXplO1xuICAgICAgICAgICAgICB0ZmlsZS50eXBlID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZTtcbiAgICAgICAgICAgICAgdGZpbGUucGF0aCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnBhdGg7XG4gICAgICAgICAgICAgIHRmaWxlLmJ1Y2tldCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJ1Y2tldDtcbiAgICAgICAgICAgICAgdGZpbGUuYmFzZXVybCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJhc2V1cmw7XG5cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGZpbGUsICd0ZmlsZSsrJylcblxuICAgICAgICAgICAgICAvLyB0ZmlsZS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzOyBmbGRzXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uaW1hZ2VmaWVsZHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcywgJ2ZsZHMgJylcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmltYWdlZmllbGRzLCAnaW1hZ2VmaWVsZHMnKVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHMgIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgICAgdGZpbGUuaW1nZmllbGRzID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcztcblxuICAgICAgICAgICAgICAgICAgdGZpbGUuZmxkcyA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHM7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGZvciAobGV0IGltZyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5pbWFnZWZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgLy8gICBmb3IgKGxldCBmbCBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzKSB7XG4gICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHNbZmxdLmtleSA9PSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5pbWFnZWZpZWxkc1tpbWddLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdpbWFnZWZpZWxkcycsIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmltYWdlZmllbGRzW2ltZ10pXG4gICAgICAgICAgICAgICAgICAvLyAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5pbWFnZWZpZWxkc1tpbWddLnZhbCA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHNbZmxdLnZhbHVlXG4gICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAgIC8vIHRmaWxlLmltZ2ZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzO1xuXG4gICAgICAgICAgICAgICAgICAvLyB0ZmlsZS5pbWdmaWw9dGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcztcblxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RmaWxlKysrKz4nLCB0ZmlsZSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0ZmlsZWFyci5wdXNoKHRmaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnVwbG9hZGVkID09IDIpIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0sICc9PT09PT09PSsrKysgdXBsb2FkIDInKVxuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlYXJyKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdhdXRvY29tcGxldGUnKSB7XG5cbiAgICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9IG51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwpIHtcblxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnIGF1dG92YWwgaW4gZm9ybSBiZWZvcmUgcGF0Y2ggJywgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS52YWx1ZSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsaWQpO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCcgYXV0b3ZhbCBpbiBmb3JtIGFmdGVyIHBhdGNoJywgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS52YWx1ZSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsaWQpO1xuXG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9IG51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsaWRhdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvcicsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoeyByZXF1aXJlZDogbnVsbCB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3IgYWZ0ZXIgJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCBhZnRlciAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGZvcm12YWxbeF0gPSB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoYi5sZW5ndGggPiAxICYmIGJbMF0gPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICE9IHggJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlICE9IG51bGwpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnYWFhYWZmLi4uJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhYWFhZmYuLi4nLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsW2tdLmtleSA9PSBiWzFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ3YnLCBiWzFdLCBcInRlbXB2YWxcIiwgdGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbFtrXS5rZXkgPT0gYlsxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnB1c2goYlsxXSk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ3YyJywgYlsxXSwgXCJ0ZW1wdmFsXCIsIHRlbXBmb3JtdmFsW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSk7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9mb3IgbXVsdGlwbGUgZW1haWwgYWRkXG4gICAgICAgIC8vIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2VtYWlsJyl7XG4gICAgICAgIC8vICAgaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUgPT0gdHJ1ZSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXSwnPT10aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXSsrJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZSwnPz8nLHRlbXBmb3JtdmFsLCc+Pj4nLGJbMF0pXG4gICAgICAgIC8vICAgICAvLyBmb3IobGV0IGkgIGluIHRlbXBmb3JtdmFsKXtcbiAgICAgICAgLy8gICAgIC8vICAgaWYodGVtcGZvcm12YWxbaV0gPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZS5tYXRjaCgnL2VtYWlsL2cnKSl7XG4gICAgICAgIC8vICAgICAvLyAgICAgY29uc29sZS5sb2codGVtcGZvcm12YWxbaV0sJ3RlbXBmb3JtdmFsW2ldJylcbiAgICAgICAgLy8gICAgIC8vICAgfVxuICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICAvLyBlbHNle1xuICAgICAgICBpZiAoeCA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRlbXBmb3JtdmFsW3hdID09IG51bGwpIHtcbiAgICAgICAgICB0ZW1wZm9ybXZhbFt4XSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMsIHgsICdlcnIyMicpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwb3N0LCAncG9zdCcsIHRoaXMuZm9ybUdyb3VwLnZhbGlkLCB0aGlzLmZvcm1kYXRhdmFsLCB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCwgJ2ZmZmYnLCB0ZW1wZm9ybXZhbCk7XG5cbiAgICAvLyBpZiAodGhpcy5waG9uZW51bWJlclZhbHVlLmxlbmd0aDwxNCkge1xuICAgIC8vICAgdGhpcy5fc25hY2tCYXIub3BlbihcIlBsZWFzZSBFbnRlciBhIHZhbGlkIG51bWJlclwiLFwib2tcIix7XG4gICAgLy8gICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgLy8gICB9KVxuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICB0aGlzLmZpbmRJbnZhbGlkQ29udHJvbHMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlc29mIGZvcm0gZGF0YVwiLCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG5cblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgLy8gaWYgKHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpbms6IGFueSA9IHRoaXMuZm9ybWRhdGF2YWwuYXBpVXJsICsgdGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludDtcbiAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgICBzb3VyY2UuZGF0YSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5zZWNyZXQgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlLnNlY3JldCA9IHRoaXMuZm9ybWRhdGF2YWwuc2VjcmV0O1xuICAgICAgICBzb3VyY2Uuand0dG9rZW4gPSB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gJycpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmZvcm1Hcm91cC52YWx1ZSsrKysrKytcIiwgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICAvLyB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXQoKTtcblxuICAgICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG5cblxuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6IHRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldEZvcm0oKTtcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZSA9IFtdO1xuICAgICAgICAgICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVkJywgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJycgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJy8nKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiByZXN1bHQuc3RhdHVzLCBmcm9tdmFsOiByZXN1bHQgfSk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZDogJ2Zyb21zdWJtaXRzZXJ2ZXJlcnJvcicsIGZpZWxkdmFsOiAnc2VydmVyZXJyb3InLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTsgLy9kaXNhYmxlIGxvYWRlciBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiAnc3VjY2VzcycsIGZvcm1kYXRhdmFsOiB0aGlzLmZvcm1kYXRhdmFsLCBzb3VyY2U6IHNvdXJjZSwgbG9hZGluZzogdGhpcy5sb2FkaW5nLFxuICAgICAgICAgIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIC8vcmVzZXQgYXV0b2NvbXBsZXRlIGZpZWxkIHZhbHMgdG8gcGF0Y2ggZm9yIHVpIG9ubHkgcmVhc29uICEhIHNvIHRoYXQgdXNlciBjYW4ndCBzZWUgc2VsZWN0ZWQgdmFscyBcblxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9IG51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICBsZXQgdmZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsaWQpIHZmbGFnID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAvLyBmb3IgbWFraW5nIHZhbGlkIGF1dG8gZmllbGQgdW50b3VjaGVkIGFnYWluIHNvIHRoYXQgdXNlciBkb250IHNlZSBlcnJvciBpZiB2YWx1IGlzIHNlbGVjdGVkIGFscmVhZHkgISEgXG4gICAgICAgICAgaWYgKHZmbGFnID09IHRydWUpIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdGVycm9yJywgZmllbGR2YWw6ICd2YWxpZGF0aW9uZXJyb3InLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0pO1xuICAgICAgdGhpcy5maW5kSW52YWxpZENvbnRyb2xzKCk7XG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBmaW5kSW52YWxpZENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGludmFsaWQgPSBbXTtcbiAgICBjb25zdCBjb250cm9scyA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgaWYgKGNvbnRyb2xzW25hbWVdLmludmFsaWQpIHtcbiAgICAgICAgaW52YWxpZC5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImZpbmRJbnZhbGlkQ29udHJvbHNcIiwgaW52YWxpZCk7XG5cbiAgICByZXR1cm4gaW52YWxpZDtcbiAgfVxuICBwcml2YXRlIHNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpIHtcbiAgICBjb25zdCBmaXJzdEludmFsaWRDb250cm9sOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0gLm5nLWludmFsaWRcIlxuICAgICk7XG4gICAgLy8gY29uc29sZS5sb2coXCJmaXJzdEludmFsaWRDb250cm9sXCIsIGZpcnN0SW52YWxpZENvbnRyb2wpO1xuXG4gICAgd2luZG93LnNjcm9sbCh7XG4gICAgICB0b3A6IHRoaXMuZ2V0VG9wT2Zmc2V0KGZpcnN0SW52YWxpZENvbnRyb2wpLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRvcE9mZnNldChjb250cm9sRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IDUwO1xuICAgIGlmIChjb250cm9sRWwgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJjb250cm9sRWxcIiwgY29udHJvbEVsKTtcblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb250cm9sRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBsYWJlbE9mZnNldDtcbiAgICB9XG5cbiAgfSBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG5cblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhbmdlIGV2ZW50IGhpdHRlZFwiLCBldmVudCk7XG4gICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGV2ZW50O1xuICB9XG5cblxuICBzaW5nbGVpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBmaWVsZCwgaXZhbCwgY2kpIHtcbiAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5jcm9wcGVkSW1hZ2VbY2ldID0gZXZlbnQuYmFzZTY0O1xuXG5cbiAgICAvLyBmb3IgKGxldCBjIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmFzcGVjdHJhdGlvKSB7XG4gICAgLy8gICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5hc3BlY3RyYXRpb1tjXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZGVsZXRlIGV2ZW50LmJhc2U2NDtcbiAgICAvLyBkZWxldGUgZXZlbnQuZmlsZTtcbiAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5jcm9wcGVkaW1hZ2VhcnJheVtjaV0gPSBldmVudDtcblxuICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmNyb3BwZWRJbWFnZVtjaV0sICd0aGlzLmNyb3BwZWRJbWFnZT09PT4+JylcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgJ2V2ZW50KysrNjQ9PT09PScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLCBmaWVsZCwgY2kpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsICdmaWVsZD09PT09JylcblxuICB9XG5cbiAgbXVsdGlwbGVpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBmaWxlcywgaXZhbCwgY2ksIGZpLCBmbGR2YWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgJ2V2ZW50KysrNjQnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXSwgZmlsZXMsIGl2YWwsIGNpLCAnKysrKysrKysrKysrKysrKycsIGZpLCBmbGR2YWwpXG4gICAgZmxkdmFsW2ZpXS5jcm9wcGVkSW1hZ2VbY2ldID0gZXZlbnQuYmFzZTY0O1xuXG4gICAgZmxkdmFsW2ZpXS5jcm9wcGVkaW1hZ2VhcnJheVtjaV0gPSBldmVudDtcblxuICAgIGZvciAobGV0IGMgaW4gZmxkdmFsW2ZpXS5hc3BlY3RyYXRpbykge1xuICAgICAgZmxkdmFsW2ZpXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcihmbGR2YWxbZmldLmFzcGVjdHJhdGlvW2NdKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlcywgJ3RoaXMuY3JvcHBlZEltYWdlIG91dHB1dD09PT4+JylcbiAgfVxuXG4gIGltYWdlTG9hZGVkKCkge1xuICAgIC8vIHNob3cgY3JvcHBlclxuICB9XG5cbiAgY3JvcHBlclJlYWR5KCkge1xuICAgIC8vIGNyb3BwZXIgcmVhZHlcbiAgfVxuXG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG4gIG9wZW5zaW5nbGVpbWFnZWNyb3AodmFsKSB7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCAnPT09PT09PT0nKTtcblxuICAgIHZhbC5jcm9wcGVkaW1hZ2VhcnJheSA9IFtdO1xuICAgIHZhbC5jcm9wcGVkSW1hZ2UgPSBbXTtcblxuICAgIC8vIGZvciAobGV0IGMgaW4gdmFsLmFzcGVjdHJhdGlvKSB7XG4gICAgLy8gICB2YWwuYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIodmFsLmFzcGVjdHJhdGlvW2NdKTtcbiAgICAvLyB9XG5cbiAgICB2YXIgaW1nVXJsID0gJ2h0dHBzOi8vJyArIHZhbC52YWx1ZS5idWNrZXQgKyAnLnMzLmFtYXpvbmF3cy5jb20vJyArIHZhbC52YWx1ZS5wYXRoICsgdmFsLnZhbHVlLmZpbGVzZXJ2ZXJuYW1lO1xuXG4gICAgdGhpcy5nZXRJbWFnZXRvRGF0YVVSTChpbWdVcmwsIGZ1bmN0aW9uIChkYXRhVXJsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhVXJsKVxuICAgICAgdmFsLmltYWdlVXJsID0gZGF0YVVybDtcbiAgICAgIHZhbC52YWx1ZSA9IG51bGw7XG4gICAgfSlcbiAgICAvLyB2YWwuZWRpdEltYWdlVXJsID0gJ2h0dHBzOi8vJyArIHZhbC52YWx1ZS5idWNrZXQgKyAnLnMzLmFtYXpvbmF3cy5jb20vJyArIHZhbC52YWx1ZS5wYXRoICsgdmFsLnZhbHVlLmZpbGVzZXJ2ZXJuYW1lO1xuICB9XG5cbiAgb3BlbnNpbmdsZWltYWdlY3JvcGZvcm11bHRpcGxlKHZhbCkge1xuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICc9PT09PT09PScpO1xuXG4gICAgdmFsLmNyb3BwZWRpbWFnZWFycmF5ID0gW107XG4gICAgdmFsLmNyb3BwZWRJbWFnZSA9IFtdO1xuXG4gICAgLy8gZm9yIChsZXQgYyBpbiB2YWwuYXNwZWN0cmF0aW8pIHtcbiAgICAvLyAgIHZhbC5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih2YWwuYXNwZWN0cmF0aW9bY10pO1xuICAgIC8vIH1cblxuICAgIHZhciBpbWdVcmwgPSAnaHR0cHM6Ly8nICsgdmFsLmJ1Y2tldCArICcuczMuYW1hem9uYXdzLmNvbS8nICsgdmFsLnBhdGggKyB2YWwuZmlsZXNlcnZlcm5hbWU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpbWdVcmwsICdpbWdVcmwnKVxuXG4gICAgdGhpcy5nZXRJbWFnZXRvRGF0YVVSTChpbWdVcmwsIGZ1bmN0aW9uIChkYXRhVXJsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhVXJsKVxuICAgICAgdmFsLmltYWdlVXJsID0gZGF0YVVybDtcbiAgICB9KVxuICB9XG5cblxuICAvLyBnZXQgSW1hZ2UgdG8gRGF0YSBVUkxcbiAgZ2V0SW1hZ2V0b0RhdGFVUkwodXJsLCBjYWxsYmFjaykge1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxufVxuIl19