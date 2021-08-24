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
export class ShowformComponent {
    /**
     * @param {?} formBuilder
     * @param {?} _apiService
     * @param {?} _snackBar
     * @param {?} router
     * @param {?} elementRef
     */
    constructor(formBuilder, _apiService, _snackBar, router, elementRef) {
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
        this.imageChangedEvent = "";
        this.croppedImage = "";
        this.subscriptions[this.subscriptioncount++] = this.autoquerychanged
            .pipe(debounceTime(1500))
            .subscribe((/**
         * @param {?} autores
         * @return {?}
         */
        (autores) => {
            console.log('sss .. auto search called  .. ', this.formGroup.value);
            this.autosearchpostflag = true;
            // this.filterautocomplete(res.val, res.data);
            /** @type {?} */
            let data = autores.data;
            /** @type {?} */
            let val = autores.val;
            console.log("this.formdataval.fields", this.formdataval.fields);
            this.filerfielddata = [];
            console.log("filterautocomplete with server options", data);
            data.showautoprogressbar = true;
            /** @type {?} */
            const link = this.formdataval.apiUrl + data.endpoint;
            /** @type {?} */
            let source = { "formvalue": this.formGroup.value };
            /** @type {?} */
            let searchcondition = {};
            searchcondition[data.search_field] = this.formGroup.controls[val].value;
            source['searchcondition'] = searchcondition;
            console.log("opopopo", link, searchcondition);
            this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            (res) => {
                console.log("autocomplete searching response", res);
                data.showautoprogressbar = false;
                if (res.status == "success") {
                    if (res.res.length != 0) {
                        this.filerfielddata = [];
                        this.filerfielddata = res.res;
                        //  concat earlier data with new results as options  
                        if (data.val == null)
                            data.val = [];
                        data.val = data.val.concat(res.res);
                        console.log('data.val', data.val);
                        // let temparr: any = Array.from(new Set(data.val.map((item: any) => item)))
                        data.val = this.unique(data.val, 'key');
                        // data.val = temparr
                        console.log(data.val, 'data.val', res.res, data.val.length, 'temparr');
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
    /**
     * @param {?} formdata
     * @return {?}
     */
    set formdata(formdata) {
        this.formdataval = formdata;
        if (this.formdataval.fields)
            console.log(this.formdataval, 'htlmmmmmmm');
    }
    /**
     * @param {?} formfieldrefreshdata
     * @return {?}
     */
    set formfieldrefreshdata(formfieldrefreshdata) {
        this.formfieldrefreshdataval = formfieldrefreshdata;
        // console.log(this.formfieldrefreshdataval);
    }
    /**
     * @param {?} formfieldrefresh
     * @return {?}
     */
    set formfieldrefresh(formfieldrefresh) {
        this.formfieldrefreshval = formfieldrefresh;
        // console.log(this.formfieldrefreshval);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set custombuttons(val) {
        this.customlistenbuttons = val;
        // console.log(this.customlistenbuttons,'customlistenbuttons form')
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set externaldatavalue(value) {
        this.externalDataVal = value;
        // console.log(this.externalDataVal, 'this.externalDataVal')
    }
    /**
     * @return {?}
     */
    get name() {
        return (/** @type {?} */ (this.formGroup.get('name')));
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.createForm(0);
        // this.setChangeValidate()
    }
    // custom listen buttons
    /**
     * @param {?} val
     * @return {?}
     */
    getFormVal(val) {
        // console.log(val,'+++++++++====')
        this.onFormFieldChange.emit({ field: 'formdata', fieldval: 'formdataval', fromval: this.formGroup.value, buttonval: val, loading: this.loading });
    }
    // CustomFlagFields
    /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    CustomFlagFields(field, item) {
        this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'add' });
    }
    /**
     * @param {?} field
     * @param {?} item
     * @return {?}
     */
    CustomFlagFieldsRemove(field, item) {
        this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'remove' });
    }
    /**
     * @param {?} array
     * @param {?} propertyName
     * @return {?}
     */
    unique(array, propertyName) {
        return array.filter((/**
         * @param {?} e
         * @param {?} i
         * @return {?}
         */
        (e, i) => array.findIndex((/**
         * @param {?} a
         * @return {?}
         */
        a => a[propertyName] === e[propertyName])) === i));
    }
    //Generate Password button
    /**
     * @param {?} val
     * @return {?}
     */
    GeneratePassword(val) {
        this.PasswordVal = '';
        this.PasswordVal = this.makeid(10);
        setTimeout((/**
         * @return {?}
         */
        () => {
            val.value = this.PasswordVal;
            this.formGroup.controls[val.name].patchValue(this.PasswordVal);
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
    }
    /**
     * @param {?} event
     * @param {?} filename
     * @param {?} multipleFlag
     * @return {?}
     */
    onchoosefiles(event, filename, multipleFlag) {
        console.log("works properly", multipleFlag);
        if (typeof multipleFlag == 'undefined') {
            // console.log("if part");
            // this.filechoosersingleTypeFlag=true;
            document.getElementById("filechoosersingle" + filename).click();
        }
        else {
            console.log("else part", document.getElementById("filechooser"));
            document.getElementById("filechoosermultiple" + filename).click();
            // this.filechoosermultipleTypeFlag=true;
        }
    }
    //copy Password button
    /**
     * @param {?} val
     * @return {?}
     */
    copyGeneratePassword(val) {
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
            const el = document.createElement('textarea');
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
    }
    //preview Password button
    /**
     * @param {?} val
     * @return {?}
     */
    previewGeneratePassword(val) {
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
    }
    //generate ran password
    /**
     * @param {?} length
     * @return {?}
     */
    makeid(length) {
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
    }
    // external Data Function
    /**
     * @param {?} value
     * @param {?} index
     * @return {?}
     */
    externalDataFunction(value, index) {
        // this.externalDataVal=[];
        this.onFormFieldChange.emit({ action: 'externaldata', flag: 'add', fieldVal: value, index: index, externalDataVal: this.externalDataVal });
        // console.log(value, this.externalDataVal, index, '++')
    }
    /**
     * @param {?} flag
     * @param {?} field
     * @param {?} ival
     * @param {?} i
     * @return {?}
     */
    externalDataEditFunction(flag, field, ival, i) {
        // console.log(flag, field, ival, i, 'exter ++++')
        if (flag == 'edit') {
            this.onFormFieldChange.emit({ action: 'externaldata', flag: 'edit', fieldVal: field, index: ival, valind: i, externalDataVal: this.externalDataVal });
        }
        if (flag == 'remove') {
            field.value.splice(i, 1);
        }
    }
    // open calendar into date field
    /**
     * @return {?}
     */
    openCalendar() {
        this.dateflag = true;
        // console.log(this.dateflag, 'dateflag')
    }
    /**
     * @return {?}
     */
    navtocancel() {
        this.onFormFieldChange.emit({ field: 'formcancel', fromval: this.formGroup.value, loading: this.loading });
        if (this.formdataval.cancelroute != null) {
            this.router.navigate([this.formdataval.cancelroute]);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        setTimeout((/**
         * @return {?}
         */
        () => {
            // console.log('in after view init trigger');
            for (const g in this.formdataval.fields) {
                if (this.formdataval.fields[g].type == 'file') {
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('drop', this.handleDrop.bind(this));
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragenter', this.cancel.bind(this));
                    this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragover', this.cancel.bind(this));
                }
            }
        }), 1000);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    triggerevents(val) {
        console.log('in triggerevents', val);
        setTimeout((/**
         * @return {?}
         */
        () => {
            // console.log('val loadeed trigger', val);
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('drop', this.handleDrop.bind(this));
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragenter', this.cancel.bind(this));
            this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragdragover', this.cancel.bind(this));
        }), 1000);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    cancel(e) {
        // console.log('cancel',e);
        e.preventDefault();
        return false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleDrop(e) {
        console.log("handelDrop", e);
        // let apiBaseURL=""
        // this.imageChangedEvent = e;
        /** @type {?} */
        const list = document.getElementById('list');
        /** @type {?} */
        const apiBaseURL = 'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev';
        e.preventDefault();
        // console.log('handleDrop', e);
        /** @type {?} */
        const dt = e.dataTransfer == null ? e : e.dataTransfer;
        /** @type {?} */
        const filechooserFlag = e.dataTransfer == null ? 1 : 0;
        console.log("dt dataaa++", dt);
        console.log("dt filechooserFlag++", filechooserFlag);
        /** @type {?} */
        const files = dt.files == null ? dt.target.files : dt.files;
        console.log("files count", files.length);
        for (let i = 0; i < files.length; i++) {
            /** @type {?} */
            const file = files[i];
            // console.log(files, 'files', e.target.id);
            // console.log('farr', this.filearray);
            console.log('files++', file);
            for (const g in this.formdataval.fields) {
                if (this.formdataval.fields[g].type == 'file' && (this.formdataval.fields[g].name == e.target.id.replace('drop', '') || this.formdataval.fields[g].name == e.target.id.replace('filechoosersingle', '') || this.formdataval.fields[g].name == e.target.id.replace('filechoosermultiple', ''))) {
                    console.log("if part", e.target.id, this.formdataval.fields[g]);
                    // console.log(this.singleImgFormData,'singleImgFormData')
                    // console.log('file details', this.formdataval.fields[g], g);
                    if (this.formdataval.fields[g].multiple == null) {
                        // this.deletefile(va)
                        // console.log(files[i], 'files[i]=======single')
                        //image preview base/64
                        console.log(" before 2nd if part of type checking", files);
                        if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                            //Show image preview
                            console.log("2nd if part of type checking");
                            /** @type {?} */
                            let reader = new FileReader();
                            reader.onload = (/**
                             * @param {?} event
                             * @return {?}
                             */
                            (event) => {
                                this.formdataval.fields[g].imageUrl = event.target.result;
                                this.formdataval.fields[g].croppedimagearray = [];
                                // console.log(event.target.result, 'event.target.result=========')
                                if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                                    for (let c in this.formdataval.fields[g].aspectratio) {
                                        this.formdataval.fields[g].croppedImage = [];
                                        this.formdataval.fields[g].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;
                                        // this.formdataval.fields[g].aspectratio[c] = Number(this.formdataval.fields[g].aspectratio[c]).toFixed(2);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'files+++++')
                            });
                            reader.readAsDataURL(files[i]);
                        }
                        this.formdataval.fields[g].loaded = 0;
                        this.formdataval.fields[g].loadfile = 1;
                        if (filechooserFlag == 0) {
                            if (this.filearray[e.target.id.replace('drop', '')] != null) {
                                for (const n in this.formdataval.fields) {
                                    if (this.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                                        this.deletefile(this.formdataval.fields[n], 1);
                                        setTimeout((/**
                                         * @return {?}
                                         */
                                        () => {
                                            this.filearray[e.target.id.replace('drop', '')] = files[i];
                                        }), 0);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                            }
                            else {
                                this.filearray[e.target.id.replace('drop', '')] = files[i];
                            }
                        }
                        else if (filechooserFlag == 1) {
                            if (this.filearray[e.target.id.replace('filechoosersingle', '')] != null) {
                                for (const n in this.formdataval.fields) {
                                    if (this.formdataval.fields[n].name == e.target.id.replace('filechoosersingle', '')) {
                                        this.deletefile(this.formdataval.fields[n], 1);
                                        setTimeout((/**
                                         * @return {?}
                                         */
                                        () => {
                                            this.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                                        }), 0);
                                    }
                                }
                                // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')
                            }
                            else {
                                this.filearray[e.target.id.replace('filechoosersingle', '')] = files[i];
                            }
                        }
                    }
                    else {
                        // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++ >M')
                        // console.log(files[i], 'files[i]======= multiple')
                        if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
                            //Show image preview
                            console.log("++++++if part", files);
                            /** @type {?} */
                            let reader = new FileReader();
                            reader.onload = (/**
                             * @param {?} event
                             * @return {?}
                             */
                            (event) => {
                                files[i].imageUrl = event.target.result;
                                if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                                    // console.log(this.formdataval.fields[g].aspectratio, 'ratio+=====>')
                                    files[i].croppedImage = [];
                                    files[i].aspectratio = this.formdataval.fields[g].aspectratio;
                                    files[i].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;
                                    files[i].croppedimagearray = [];
                                    for (let c in files[i].aspectratio) {
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
                        if (this.formdataval.fields[g] != null && this.formdataval.fields[g].imagefields != null && this.formdataval.fields[g].imagefields.length > 0) {
                            files[i].imagefields = this.formdataval.fields[g].imagefields;
                        }
                        //for drag and drop files
                        if (filechooserFlag == 0) {
                            if (this.filearray[e.target.id.replace('drop', '')] == null) {
                                this.filearray[e.target.id.replace('drop', '')] = [];
                            }
                            this.filearray[e.target.id.replace('drop', '')].push(files[i]);
                        }
                        //for choose files
                        if (filechooserFlag == 1) {
                            if (this.filearray[e.target.id.replace('filechoosermultiple', '')] == null) {
                                this.filearray[e.target.id.replace('filechoosermultiple', '')] = [];
                            }
                            this.filearray[e.target.id.replace('filechoosermultiple', '')].push(files[i]);
                        }
                    }
                }
            }
            // console.log('this.filearray', this.filearray);
            // var reader = new FileReader();
            // reader.addEventListener('loadend', function(e){
            //   fetch(apiBaseURL+"/requestUploadURL", {
            //     method: "POST",
            //     headers: {
            //       'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({
            //       name: file.name,
            //       type: file.type
            //     })
            //   })
            //   .then(function(response){
            //     return response.json();
            //   })
            //   .then(function(json){
            //     return fetch(json.uploadURL, {
            //       method: "PUT",
            //       body: new Blob([reader.result], {type: file.type})
            //     })
            //   })
            //   .then(function(){
            //     var uploadedFileNode = document.createElement('div');
            //     uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
            //     list.appendChild(uploadedFileNode);
            //   });
            // });
            // reader.readAsArrayBuffer(file);
        }
        return false;
    }
    // uploadfile(val: any) {
    //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
    //   let h:any=this.bucketupload(val);
    //   console.log('upppp',h)
    // }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFn(index) {
        return index;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFnMultiple(index) {
        return index;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    trackByFnMulti(index) {
        return index;
    }
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
    keyupVal(val, item, fi, ind, data, fname, sfname, ev) {
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
    }
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
    checkValue(val, item, fi, ind, data, fname, sfname) {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    uploadfile(val) {
        // console.log('upppp', val);
        /** @type {?} */
        const reader = new FileReader();
        /** @type {?} */
        const file = this.filearray[val.name];
        // console.log('file val', val);
        file.uploaded = 2; // show progressbar
        // show progressbar
        /** @type {?} */
        let temploader = this.fieldloading[val.name];
        temploader = val.name;
        // reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    uploadall(val) {
        // this.filearray[val.name].uploadall = 1;
        for (const y in this.filearray[val.name]) {
            /** @type {?} */
            const c = parseInt(y) * 500;
            // console.log('---', val, 'v---', 'this.filearray[val.name]', this.filearray[val.name][y], this.filearray[val.name][y].uploaded);
            if (this.filearray[val.name][y].bucket == null)
                this.uploadfilemultiple(val, this.filearray[val.name][y], y);
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    deletefilemultipleall(val) {
        for (const y in this.filearray[val.name]) {
            /** @type {?} */
            const c = parseInt(y) * 500;
            this.deletefilemultiple(val, this.filearray[val.name][y], y);
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            // this.filearray[val.name] = null;
        }), 3000);
    }
    /**
     * @param {?} val
     * @param {?} f
     * @param {?} indexf
     * @return {?}
     */
    uploadfilemultiple(val, f, indexf) {
        /** @type {?} */
        const reader = new FileReader();
        /** @type {?} */
        const file = this.filearray[val.name][indexf];
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
        let temploader = this.fieldloading[val.name];
        temploader = val.name;
        // reader.addEventListener('loadend', function (e) {
        reader.onloadend = (/**
         * @param {?} e
         * @return {?}
         */
        (e) => {
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
        const ftype = typeof (file);
        // if (ftype == "Blob") 
        reader.readAsArrayBuffer(file);
    }
    /**
     * @param {?} val
     * @param {?=} flag
     * @return {?}
     */
    deletefile(val, flag = '') {
        // console.log('this.filearray',this.filearray);
        // console.log('val++ delete', val, this.filearray[val.name]);
        // console.log(val.name);
        /** @type {?} */
        const source = {};
        /** @type {?} */
        const file = this.filearray[val.name];
        source.file = val.prefix + file.name;
        source.path = val.path;
        source.bucket = val.bucket;
        this.filearray[val.name].uploaded = 2;
        this.filearray[val.name].loadfile = 0;
        this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success' && flag == '') {
                // this.formGroup.reset();
                val.value = {};
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Deleted !!' }
                });
                this.filearray[val.name].uploaded = null;
                this.filearray[val.name].loadfile = 0;
                val.loadfile = 0;
                // console.log(this.filearray[val.name], '????===Delete===?????')
            }
            if (result.status == 'error') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            // console.log('Oooops!');
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            this.loading = false;
        }));
    }
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    deletesinglefile(val, flag) {
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
    }
    /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    deletesinglefilefrommultiple(val, field = '', index) {
        // console.log(val, field, index, '????+++++')
        /** @type {?} */
        const file = this.filearray[val.name][index];
        file.loadfile = 0;
        if (this.filearray[val.name] != null)
            this.filearray[val.name].splice(index, 1);
        // console.log(this.filearray[val.name], 'this.filearray[val.name]==')
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Deleted !!' }
        });
    }
    /**
     * @param {?} val
     * @param {?=} field
     * @param {?=} index
     * @return {?}
     */
    deletefilemultiple(val, field = '', index) {
        // console.log(val, 'val++', index)
        /** @type {?} */
        const source = {};
        /** @type {?} */
        const file = this.filearray[val.name][index];
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
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success') {
                // this.formGroup.reset();
                file.loadfile = 0;
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Deleted !!' }
                });
                if (this.filearray[val.name] != null) {
                    file.loadfile = 0;
                    this.filearray[val.name].splice(index, 1);
                }
                // console.log(this.filearray[val.name], 'this.filearray[val.name]==')
            }
            if (result.status == 'error') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: result
                });
            }
        }), (/**
         * @param {?} error
         * @return {?}
         */
        error => {
            // console.log('Oooops!');
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 6000,
                data: { errormessage: 'Something Went Wrong ,Try Again!!' }
            });
            this.loading = false;
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
        for (const v in changes) {
            // console.log(v,changes[v],'vv');
            if (v == 'formfieldrefreshdata') {
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    // console.log('fff in set tt');
                    if (this.formfieldrefreshdataval != null) {
                        // console.log(this.formfieldrefreshdataval, 'm');
                        // console.log(this.formfieldrefreshdataval.field);
                        // console.log(this.formfieldrefreshdataval.value);
                        if (this.formGroup != null && this.formfieldrefreshdataval.field != null && this.formGroup.controls[this.formfieldrefreshdataval.field] != null) {
                            this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value);
                        }
                        if (this.formfieldrefreshdataval.field == null && this.formfieldrefreshdataval.formvaldata != null && typeof (this.formfieldrefreshdataval.formvaldata) == 'object') {
                            for (const formkey in this.formfieldrefreshdataval.formvaldata) {
                                // console.log('this.formfieldrefreshdataval.data[formkey]', this.formfieldrefreshdataval.formvaldata[formkey]);
                                if (this.formGroup.controls[formkey] != null) {
                                    this.formGroup.controls[formkey].patchValue(this.formfieldrefreshdataval.formvaldata[formkey]);
                                }
                                for (const formdatavalkey in this.formdataval.fields) {
                                    if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (this.formdataval.fields[formdatavalkey].multiple != null && this.formdataval.fields[formdatavalkey].multiple != false)) {
                                        for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            if (this.formfieldrefreshdataval.formvaldata[formkey].indexOf(this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {
                                                this.setautocompletevalue(this.formdataval.fields[formdatavalkey].val[autoselval], this.formdataval.fields[formdatavalkey]);
                                            }
                                        }
                                    }
                                    // end of if
                                    if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (this.formdataval.fields[formdatavalkey].multiple == null || this.formdataval.fields[formdatavalkey].multiple == false)) {
                                        for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val single', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            if (this.formfieldrefreshdataval.formvaldata[formkey] == (this.formdataval.fields[formdatavalkey].val[autoselval].key)) {
                                                this.setautocompletevalue(this.formdataval.fields[formdatavalkey].val[autoselval], this.formdataval.fields[formdatavalkey]);
                                            }
                                        }
                                    }
                                    // enf of if
                                    if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'checkbox' && (this.formdataval.fields[formdatavalkey].multiple != null && this.formdataval.fields[formdatavalkey].multiple != false)) {
                                        for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                                            // console.log('this.formdataval.fields[formdatavalkey].val check box multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                                            // console.log('formkey +  + autoselval', formkey + '__' + autoselval);
                                            if (this.formfieldrefreshdataval.formvaldata[formkey].indexOf(this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {
                                                if (this.formGroup.controls[formkey + '__' + autoselval] != null) {
                                                    this.formGroup.controls[formkey + '__' + autoselval].patchValue(true);
                                                }
                                            }
                                            else {
                                                if (this.formGroup.controls[formkey + '__' + autoselval] != null) {
                                                    this.formGroup.controls[formkey + '__' + autoselval].patchValue(false);
                                                }
                                            }
                                        }
                                    }
                                    // end of if
                                }
                            }
                        }
                        if (this.formfieldrefreshdataval.field == 'showfieldloader') {
                            this.fieldloading = this.formfieldrefreshdataval.value;
                        }
                        if (this.formfieldrefreshdataval.field == 'addfromcontrol') {
                            this.managefromcontrol(this.formfieldrefreshdataval.value, 'add');
                        }
                        if (this.formfieldrefreshdataval.field == 'removefromcontrol') {
                            this.managefromcontrol(this.formfieldrefreshdataval.value, 'remove');
                        }
                        if (this.formfieldrefreshdataval.field == 'resetform') {
                            this.resetformdata();
                        }
                    }
                }), 0);
            }
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        // console.log('on blur .....');
        this.formGroup.controls[val].markAsUntouched();
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    filterautocomplete(val, data) {
        this.inputblur(val);
        console.log('cc', val, data);
        // return;
        if (data.endpoint != null) {
            this.autoquerychanged.next({ val: val, data: data });
            // return
            // this.formdataval.fields[data.name].showautoprogressbar=true;
        }
        else {
            /** @type {?} */
            const fieldval = this.formGroup.controls[val].value;
            if (fieldval == '' || fieldval == null) {
                this.filerfielddata = [];
            }
            else {
                /** @type {?} */
                const filterval = data.val.filter((/**
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
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    reloadautocomplete(val) {
        console.log("click in autocomplete called", val);
        this.currentautocomplete = val.name;
        this.filerfielddata = [];
    }
    /**
     * @return {?}
     */
    autocompleteresetmatchip() {
        console.log("click in autocompleteresetmatchip called", this.filerfielddata);
    }
    // for removing selected vals in autocomplete 
    /**
     * @param {?} val
     * @return {?}
     */
    removechipsingle(val) {
        this.autocompletefiledvalue[val.name] = null;
        this.formGroup.controls[val.name].patchValue('');
        this.inputblur(val.name);
    }
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    removechipmultiple(val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        // this.formGroup.controls[val.name].patchValue(this.autocompletefiledvalue[val.name]);
        if (this.autocompletefiledvalue[val.name].length == 0) {
            this.autocompletefiledvalue[val.name] = null;
        }
        this.formGroup.controls[val.name].patchValue('');
        this.inputblur(val.name);
    }
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    setautocompletevalue(val, field) {
        console.log('ff auto complete set ', val, '00000', field, field.name);
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
        console.log("field.name", field.value, "opop", this.formGroup.controls[field.name].value);
        this.formGroup.controls[field.name].patchValue("");
        this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, autocompletedata: val });
        // if (this.autocompletefiledvalue[field.name] != null && this.autocompletefiledvalue[field.name].length > 0) {
        //   let temparr: any = Array.from(new Set(this.autocompletefiledvalue[field.name].map((item: any) => item)))
        //   this.autocompletefiledvalue[field.name] = temparr;
        // }
    }
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    managefromcontrol(field, type) {
        // console.log('manage control', field, type, field.length);
        if (type == 'remove' && field.name != null) {
            for (const y in this.formdataval.fields) {
                if (this.formdataval.fields[y].name == field.name) {
                    this.formdataval.fields.splice(parseInt(y), 1);
                    this.formGroup.removeControl(field.name);
                    // console.log('removed', field['name'], 'c', y, field);
                }
            }
        }
        if (type == 'remove' && field.name == null && field.length > 1) {
            // console.log(field.length, 'fl');
            for (const y in this.formdataval.fields) {
                for (const z in field) {
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
                for (const y in this.formdataval.fields) {
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
                    for (const v in field) {
                        for (const y in this.formdataval.fields) {
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
    }
    /**
     * @return {?}
     */
    resetformdata() {
        this.formGroup.reset();
        this.filearray = [];
        this.autocompletefiledvalue = [];
        this.currentautocomplete = '';
    }
    /**
     * @param {?} field
     * @param {?} index
     * @return {?}
     */
    checkchange(field, index) {
        // console.log(field, 'change', index, 'index2');
        if (this.formGroup.controls[field.name] != null) {
            this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value });
        }
        if (field.dependent != null && field.dependent.length > 0) {
            /** @type {?} */
            let vc = 0;
            for (const n in field.dependent) {
                if (field.dependent[n].condval.toString() == this.formGroup.controls[field.name].value.toString()) {
                    // let temvalidationrulet: any = [];
                    vc++;
                    // this.formGroup.addControl(field.dependent[n].field.name, new FormControl(field.dependent[n].field.value, temvalidationrulet));
                    // console.log('nnnnn', '--', parseInt(index + 1 + parseInt(vc)), '--', vc + index + 1, index, vc, field.dependent[n].field['name']);
                    this.formdataval.fields.splice(parseInt(index + parseInt(vc)), 0, field.dependent[n].field);
                    this.createForm(1);
                }
                else {
                    for (const y in this.formdataval.fields) {
                        if (this.formdataval.fields[y].name == field.dependent[n].field.name) {
                            this.formdataval.fields.splice(parseInt(y), 1);
                            this.formGroup.removeControl(field.dependent[n].field.name);
                            // console.log('removed', field.dependent[n].field['name'], 'c', y);
                        }
                    }
                }
            }
        }
    }
    /**
     * @param {?=} initialize
     * @return {?}
     */
    createForm(initialize = 0) {
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
        // console.log(this.formGroup, 'fg')
        for (const n in this.formdataval.fields) {
            if (this.formGroup.controls[this.formdataval.fields[n]] == null) {
                /** @type {?} */
                const temcontrolarr = [];
                /** @type {?} */
                const temvalidationrule = [];
                if (this.formdataval.fields[n].value != null) {
                    temcontrolarr.push(this.formdataval.fields[n].value);
                }
                else {
                    temcontrolarr.push('');
                }
                if (this.formdataval.fields[n].type == 'file') {
                    this.filearray[this.formdataval.fields[n].name] = this.formdataval.fields[n].value;
                    // console.log('db', this.filearray[this.formdataval.fields[n].name], this.formdataval.fields[n].name);
                    if (this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                        //use for delete data
                        this.formdataval.fields[n].loadfile = 1;
                        for (const fa in this.filearray[this.formdataval.fields[n].name]) {
                            // console.log('fv', fa);
                            if (this.filearray[this.formdataval.fields[n].name][fa] != null) {
                                // console.log('fr', this.filearray[this.formdataval.fields[n].name][fa]);
                                this.filearray[this.formdataval.fields[n].name][fa].uploaded = 1;
                                this.filearray[this.formdataval.fields[n].name][fa].loadfile = 1;
                                if (this.formdataval.fields[n].aspectratio != null && this.formdataval.fields[n].imagecroppedratiolabel != null && this.formdataval.fields[n].aspectratio != '' && this.formdataval.fields[n].aspectratio.length > 0) {
                                    this.filearray[this.formdataval.fields[n].name][fa].aspectratio = this.formdataval.fields[n].aspectratio;
                                    this.filearray[this.formdataval.fields[n].name][fa].imagecroppedratiolabel = this.formdataval.fields[n].imagecroppedratiolabel;
                                    // for (let c in this.filearray[this.formdataval.fields[n].name][fa]) {
                                    //   this.filearray[this.formdataval.fields[n].name][fa].aspectratio[c] = Number(this.filearray[this.formdataval.fields[n].name][fa].aspectratio[c]).toFixed(2);
                                    // }
                                }
                                // this.filearray[this.formdataval.fields[n].name][fa].imagefields = this.formdataval.fields[n].imagefields;
                            }
                        }
                        if (this.filearray[this.formdataval.fields[n].name] != null) {
                            this.filecount[this.formdataval.fields[n].name] = this.filearray[this.formdataval.fields[n].name].length;
                        }
                    }
                    else {
                        if (this.filearray[this.formdataval.fields[n].name] != null) {
                            this.filearray[this.formdataval.fields[n].name].uploaded = 1;
                            //use for delete data
                            this.formdataval.fields[n].loadfile = 1;
                            this.filearray[this.formdataval.fields[n].name].loadfile = 1;
                            // for (let c in this.formdataval.fields[n]) {
                            //   this.formdataval.fields[n].aspectratio[c] = Number(this.formdataval.fields[n].aspectratio[c]).toFixed(2);
                            // }
                        }
                    }
                    // console.log(this.filearray, 'filearray')
                }
                if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                    if (this.formdataval.fields[n].value == null) {
                        temcontrolarr.push([]);
                    }
                    else {
                        if (this.formdataval.fields[n].val != null) {
                            /** @type {?} */
                            const tcharr = [];
                            for (const b in this.formdataval.fields[n].val) {
                                // console.log('b', b, this.formdataval.fields[n].val[b]);
                                if (this.formdataval.fields[n].value != null && this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[b].key)) {
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
                if (this.formdataval.fields[n].validations != null && this.formdataval.fields[n].validations.length > 0) {
                    for (const v in this.formdataval.fields[n].validations) {
                        // setTimeout( ()=>{
                        if (this.formdataval.fields[n].validations[v].message == null) {
                            this.formdataval.fields[n].validations[v].message = 'Not Valid !!';
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'required') {
                            temvalidationrule.push(Validators.required);
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'match') {
                            this.formGroup.setValidators(this.checkPasswords);
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'autorequired') {
                            this.formGroup.setValidators(this.autorequired);
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'pattern') {
                            temvalidationrule.push(Validators.pattern(this.formdataval.fields[n].validations[v].value));
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'maxLength') {
                            temvalidationrule.push(Validators.maxLength(this.formdataval.fields[n].validations[v].value));
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'min') {
                            temvalidationrule.push(Validators.min(this.formdataval.fields[n].validations[v].value));
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'max') {
                            temvalidationrule.push(Validators.max(this.formdataval.fields[n].validations[v].value));
                        }
                        if (this.formdataval.fields[n].validations[v].rule == 'minLength') {
                            temvalidationrule.push(Validators.minLength(this.formdataval.fields[n].validations[v].value));
                        }
                        // },0);
                    }
                }
                // document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
                // demoArray[this.formdataval.fields[n].name]=new FormControl('');
                if (this.formdataval.fields[n].type == 'image' && this.formdataval.fields[n].value != null) {
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        document.querySelector('.imgwrap_' + this.formdataval.fields[n].name + '_' + this.formdataval.fields[n].value).classList.add('imagechoiceactive');
                    }), 4000);
                }
                if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                    /** @type {?} */
                    let tchvar = false;
                    // let
                    // console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
                    // this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
                    for (const j in this.formdataval.fields[n].val) {
                        if (this.formdataval.fields[n].value != null && this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[j].key)) {
                            tchvar = true;
                        }
                        else {
                            tchvar = false;
                        }
                        // console.log('n', n, j, tchvar);
                        this.formGroup.addControl(this.formdataval.fields[n].name + '__' + j, new FormControl(tchvar, temvalidationrule));
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
                    this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl({ value: temcontrolarr[0], disabled: this.formdataval.fields[n].disabled }, temvalidationrule));
                }
                if (this.formdataval.fields[n].type == 'autocomplete' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
                    for (const at in this.formdataval.fields[n].val) {
                        // console.log('at ...', this.formdataval.fields[n].val[at], at, this.formdataval.fields[n].value, this.formdataval.fields[n].val[at].key);
                        if (this.formdataval.fields[n].value != null && typeof (this.formdataval.fields[n].value) == 'object' && this.formdataval.fields[n].value.indexOf(this.formdataval.fields[n].val[at].key) != -1) {
                            // console.log(this.formdataval.fields[n].val[at].key, 'multi autocomplete triggered  !! ');
                            this.setautocompletevalue(this.formdataval.fields[n].val[at], this.formdataval.fields[n]);
                        }
                    }
                }
                if (this.formdataval.fields[n].type == 'autocomplete' && (this.formdataval.fields[n].multiple == null || this.formdataval.fields[n].multiple == false)) {
                    // console.log('single auto complete trigger block', this.formdataval.fields[n]);
                    if (this.formdataval.fields[n].value != null) {
                        // console.log('set auto complete single triggered', this.formdataval.fields[n]);
                        this.setautocompletevalue(this.formdataval.fields[n].val[0], this.formdataval.fields[n]);
                    }
                }
                // 'newControl', new FormControl('', Validators.required)
            }
        }
        // =this.checkPasswords(this.formGroup);
        // this.formGroup = this.formBuilder.group(demoArray);
        setTimeout((/**
         * @return {?}
         */
        () => {
            // console.log(this.formGroup,'fg',demoArray);
            this.showform = true;
            if (this.formdataval.submitactive == null) {
                this.formdataval.submitactive = true;
            }
            // console.log('grp', this.formGroup.controls);
        }), 10);
    }
    /**
     * @return {?}
     */
    setChangeValidate() {
        this.formGroup.get('validate').valueChanges.subscribe((/**
         * @param {?} validate
         * @return {?}
         */
        (validate) => {
            if (validate == '1') {
                this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
                this.titleAlert = 'You need to specify at least 3 characters';
            }
            else {
                this.formGroup.get('name').setValidators(Validators.required);
            }
            this.formGroup.get('name').updateValueAndValidity();
        }));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setphonenumberValidate(event) {
        if (event.target.value.length < 14) {
            console.log("not correct");
            this.numberFormatFlag = true;
        }
        else {
            console.log("correct");
            this.numberFormatFlag = false;
        }
    }
    /**
     * @param {?} vals
     * @param {?} fields
     * @return {?}
     */
    chooseimg(vals, fields) {
        // console.log(vals, fields);
        document.querySelectorAll('.imgwrapper').forEach((/**
         * @param {?} el
         * @return {?}
         */
        el => {
            /** @type {?} */
            let elem;
            elem = el;
            // elem.style.transition = "opacity 0.5s linear 0s";
            // elem.style.opacity = 0.5;
            elem.classList.remove('imagechoiceactive');
        }));
        // console.log('imgwrap_' + fields.name + '_' + vals.key);
        document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
        this.formGroup.controls[fields.name].patchValue(vals.key);
    }
    /**
     * @param {?} group
     * @return {?}
     */
    checkPasswords(group) {
        // here we have the 'passwords' group
        /** @type {?} */
        const pass = group.controls.password.value;
        /** @type {?} */
        const confirmPass = group.controls.confirmpassword.value;
        if (confirmPass == null || confirmPass == '') {
            group.controls.confirmpassword.setErrors({ required: true });
            return { required: true };
        }
        if (pass != confirmPass) {
            group.controls.confirmpassword.setErrors({ match: true });
            return { match: true };
        }
        // return pass === confirmPass ? null : { notSame: true }
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkPassword(control) {
        /** @type {?} */
        const enteredPassword = control.value;
        /** @type {?} */
        const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
        return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
    }
    /**
     * @param {?} group
     * @return {?}
     */
    autorequired(group) {
        for (const b in group) {
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
    }
    /**
     * @param {?} control
     * @return {?}
     */
    checkInUseEmail(control) {
        // mimic http database access
        /** @type {?} */
        const db = ['tony@gmail.com'];
        return new Observable((/**
         * @param {?} observer
         * @return {?}
         */
        observer => {
            setTimeout((/**
             * @return {?}
             */
            () => {
                /** @type {?} */
                const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
                observer.next(result);
                observer.complete();
            }), 4000);
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    getError(data) {
        // console.log('getError', data);
        return this.formGroup.get('email').hasError('required') ? 'Field is required' :
            this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
                this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
    }
    /**
     * @return {?}
     */
    getErrorPassword() {
        return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
            this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
    }
    /**
     * @param {?} post
     * @return {?}
     */
    onSubmit(post) {
        this.post = post;
        /** @type {?} */
        const tempformval = {};
        for (const x in this.formGroup.controls) {
            this.formGroup.controls[x].markAsTouched();
            // console.log(this.formGroup.controls[x].errors, x, 'err');
            // if(this.formGroup.controls[x].valid){
            // console.log('x',this.formGroup);
            /** @type {?} */
            const b = x.split('__');
            // console.log('b',b,b.length,b[0]);
            for (const m in this.formdataval.fields) {
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
                        const tfile = {};
                        if (this.filearray[this.formdataval.fields[m].name].type == 'image/png' || this.filearray[this.formdataval.fields[m].name].type == 'image/jpg' || this.filearray[this.formdataval.fields[m].name].type == 'image/jpeg') {
                            if (this.formdataval.fields[m].aspectratio != null && this.formdataval.fields[m].aspectratio.length > 0) {
                                tfile.aspectratio = this.formdataval.fields[m].aspectratio;
                                for (let c in this.formdataval.fields[m].croppedimagearray) {
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
                        const tfile = {};
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
                    }
                }
                if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
                    /** @type {?} */
                    const tfilearr = [];
                    for (const g in this.filearray[this.formdataval.fields[m].name]) {
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
                            const tfile = {};
                            if (this.filearray[this.formdataval.fields[m].name][g].type == 'image/png' || this.filearray[this.formdataval.fields[m].name][g].type == 'image/jpg' || this.filearray[this.formdataval.fields[m].name][g].type == 'image/jpeg') {
                                if (this.filearray[this.formdataval.fields[m].name][g].aspectratio != null && this.filearray[this.formdataval.fields[m].name][g].aspectratio.length > 0) {
                                    tfile.aspectratio = this.filearray[this.formdataval.fields[m].name][g].aspectratio;
                                    tfile.croppedimagearray = this.filearray[this.formdataval.fields[m].name][g].croppedimagearray;
                                    for (let c in this.filearray[this.formdataval.fields[m].name][g].croppedimagearray) {
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
                        console.log(' autoval in form before patch ', this.autocompletefiledvalue[this.formdataval.fields[m].name], this.formdataval.fields[m].name, this.formGroup.controls[this.formdataval.fields[m].name].value, this.formGroup.controls[this.formdataval.fields[m].name].valid);
                        this.formGroup.controls[this.formdataval.fields[m].name].patchValue(this.autocompletefiledvalue[this.formdataval.fields[m].name]);
                        console.log(' autoval in form after patch', this.autocompletefiledvalue[this.formdataval.fields[m].name], this.formdataval.fields[m].name, this.formGroup.controls[this.formdataval.fields[m].name].value, this.formGroup.controls[this.formdataval.fields[m].name].valid);
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
                    // console.log('aaaaff...');
                    if (this.formGroup.controls[x].value == true) {
                        for (const k in this.formdataval.fields[m].val) {
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
        // if (this.phonenumberValue.length<14) {
        //   this._snackBar.open("Please Enter a valid number","ok",{
        //     duration: 1000
        //   })
        //   return;
        // }
        this.findInvalidControls();
        // console.log("valuesof form data",this.formGroup.value);
        if (this.formGroup.valid) {
            // if (this.formdataval.endpoint != null || this.formdataval.apiUrl) {
            this.loading = true;
            /** @type {?} */
            const link = this.formdataval.apiUrl + this.formdataval.endpoint;
            /** @type {?} */
            const source = {};
            source.data = this.formGroup.value;
            if (this.formdataval.secret != null && this.formdataval.jwttoken != null) {
                source.secret = this.formdataval.secret;
                source.jwttoken = this.formdataval.jwttoken;
            }
            if (this.formdataval.endpoint != null && this.formdataval.endpoint != '') {
                console.log("this.formGroup.value+++++++", this.formGroup.value);
                // this.formDirective.reset();
                this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
                        this.formGroup.reset();
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: this.formdataval.successmessage }
                        });
                        this.formDirective.resetForm();
                        this.autocompletefiledvalue = [];
                        this.filearray = [];
                        // console.log(result, 'red', this.formdataval.redirectpath);
                        if (this.formdataval.redirectpath != null && this.formdataval.redirectpath != '' && this.formdataval.redirectpath != '/') {
                            this.router.navigate([this.formdataval.redirectpath]);
                        }
                        else {
                            this.loading = false;
                        }
                    }
                    if (result.status == 'error') {
                        this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: result
                        });
                        this.loading = false;
                    }
                }), (/**
                 * @param {?} error
                 * @return {?}
                 */
                error => {
                    // console.log('Oooops!');
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
                    });
                    this.onFormFieldChange.emit({ field: 'fromsubmitservererror', fieldval: 'servererror', fromval: this.formGroup.value });
                    this.loading = false; //disable loader 
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
            for (const m in this.formdataval.fields) {
                //reset autocomplete field vals to patch for ui only reason !! so that user can't see selected vals 
                if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null) {
                    /** @type {?} */
                    let vflag = false;
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
    }
    /**
     * @return {?}
     */
    findInvalidControls() {
        /** @type {?} */
        const invalid = [];
        /** @type {?} */
        const controls = this.formGroup.controls;
        for (const name in controls) {
            if (controls[name].invalid) {
                invalid.push(name);
            }
        }
        console.log("findInvalidControls", invalid);
        return invalid;
    }
    /**
     * @private
     * @return {?}
     */
    scrollToFirstInvalidControl() {
        /** @type {?} */
        const firstInvalidControl = this.elementRef.nativeElement.querySelector("form .ng-invalid");
        console.log("firstInvalidControl", firstInvalidControl);
        window.scroll({
            top: this.getTopOffset(firstInvalidControl),
            left: 0,
            behavior: "smooth"
        });
    }
    /**
     * @private
     * @param {?} controlEl
     * @return {?}
     */
    getTopOffset(controlEl) {
        /** @type {?} */
        const labelOffset = 50;
        if (controlEl == null) {
            console.log("controlEl", controlEl);
            return 0;
        }
        else {
            return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fileChangeEvent(event) {
        console.log("change event hitted", event);
        this.imageChangedEvent = event;
    }
    /**
     * @param {?} event
     * @param {?} field
     * @param {?} ival
     * @param {?} ci
     * @return {?}
     */
    singleimageCropped(event, field, ival, ci) {
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
    }
    /**
     * @param {?} event
     * @param {?} files
     * @param {?} ival
     * @param {?} ci
     * @param {?} fi
     * @param {?} fldval
     * @return {?}
     */
    multipleimageCropped(event, files, ival, ci, fi, fldval) {
        // console.log(event, 'event+++64', this.formdataval.fields[ival], files, ival, ci, '++++++++++++++++', fi, fldval)
        fldval[fi].croppedImage[ci] = event.base64;
        fldval[fi].croppedimagearray[ci] = event;
        for (let c in fldval[fi].aspectratio) {
            fldval[fi].aspectratio[c] = Number(fldval[fi].aspectratio[c]);
        }
        // this.croppedImage = event.base64;
        // console.log(files, 'this.croppedImage output===>>')
    }
    /**
     * @return {?}
     */
    imageLoaded() {
        // show cropper
    }
    /**
     * @return {?}
     */
    cropperReady() {
        // cropper ready
    }
    /**
     * @return {?}
     */
    loadImageFailed() {
        // show message
    }
    /**
     * @param {?} val
     * @return {?}
     */
    opensingleimagecrop(val) {
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    opensingleimagecropformultiple(val) {
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
    }
    // get Image to Data URL
    /**
     * @param {?} url
     * @param {?} callback
     * @return {?}
     */
    getImagetoDataURL(url, callback) {
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
    }
}
ShowformComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-showform',
                template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\n                            <div class=\"add_form\">\n                                <div class=\"mat-form-field-wrapper\">\n                                    <div class=\"phonenumber mat-form-field\">\n                                        <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\" required\n                                            minlength=\"14\" [placeholder]=\"fields.label\"\n                                            (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                                            [(ngModel)]=\"phonenumberValue\">\n                                        <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\n                                        <ng-container\n                                            *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n\n                                            <mat-error>\n                                                <span class=\"showphonenovalidation\">\n                                                    Please Enter valid number\n                                                </span>\n                                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                    <span\n                                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                                </ng-container>\n                                            </mat-error>\n                                        </ng-container>\n                                    </div>\n\n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\"\n                                matTooltip=\"Copy Password\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Show Password\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Hide Password\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n\n\n                        </mat-autocomplete>\n                        <!-- to check selected auto val ..  -->\n                        <!-- <span> auto data\n                            <ng-container\n                                *ngIf=\"autocompletefiledvalue!=null && autocompletefiledvalue[fields.name]!=null\">\n                                {{autocompletefiledvalue[fields.name] | json}}\n                            </ng-container>\n\n                        </span> -->\n\n\n                        <mat-progress-bar *ngIf=\"fields.showautoprogressbar!=null && fields.showautoprogressbar==true\"\n                            class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                        <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\"\n                                [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n                        <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n\n\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\"\n                                matTooltip=\"{{fields.label}}\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                create\n                                            </span>\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                clear\n                                            </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">\n                                Browse or Drop Files Here\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                    <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\"\n                                        style=\"display:none\" (change)=\"handleDrop($event)\">\n                                </ng-container>\n\n                                <ng-container *ngIf=\"fields.multiple == null \">\n                                    <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\"\n                                        multiple (change)=\"handleDrop($event)\">\n                                </ng-container>\n                            </div>\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <!-- <span>{{fields | json}}</span> -->\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n\n\n                                        <div class=\"imagedivcls\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                            <div class=\"divimagecardcls\">\n                                                <mat-card class=\"example-card imagecardcls\"\n                                                    *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                    <img mat-card-image [src]=\"fields.imageUrl\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"divimagecardcls\"\n                                                *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                <mat-card class=\"example-card imagecardcls\">\n\n                                                    <span class=\"material-icons cropcls\"\n                                                        *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\"\n                                                        (click)=\"opensingleimagecrop(fields)\">\n                                                        crop\n                                                    </span>\n\n                                                    <img mat-card-image\n                                                        src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"cropimagesdiv\"\n                                                *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                <h2> Croped Images :</h2>\n\n                                                <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\"\n                                                    class=\"image-cropper-cls\">\n                                                    <br />\n                                                    <span>Croped Image (Asepect Ratio) :\n                                                        {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                    <image-cropper [imageBase64]=\"fields.imageUrl\"\n                                                        [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                        (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\"\n                                                        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                        (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\"\n                                                        [resizeToHeight]=\"300\"></image-cropper>\n\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                        <div class=\"filesdivcls\">\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                description\n                                            </span>\n\n                                            <span\n                                                class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                            <br />\n                                            <span\n                                                class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                        </div>\n\n\n                                        <div class=\"filefieldsmaincls\">\n                                            <ng-container class=\"descdiv\"\n                                                *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                <div class=\"filefieldscls\">\n                                                    <div class=\"filefields\"\n                                                        *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                name=\"{{item.name}}\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'textarea'\">\n                                                            <textarea matInput name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                placeholder=\"{{item.label}}\" [rows]='3'\n                                                                [cols]='30'></textarea>\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'number'\">\n                                                            <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <div *ngIf=\"item.type == 'checkbox'\">\n                                                            <mat-checkbox name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                            </mat-checkbox>\n                                                            &nbsp; {{item.label}}\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </ng-container>\n                                        </div>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button\n                                                (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">Delete\n                                            </mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\"\n                                                mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <!-- {{files | json}} ++ -->\n\n                                            <div *ngIf=\"files.loadfile != null && files.loadfile==1\"\n                                                class=\"filesdivcls\">\n\n                                                <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                <span *ngIf=\"files.uploaded==1\"\n                                                    class=\"material-icons fileuploadcompleteicon\">\n                                                    cloud_done\n                                                </span>\n\n                                                <div class=\"divimagecardcls\"\n                                                    *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                        <img mat-card-image [src]=\"files.imageUrl\">\n                                                    </mat-card>\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl == null\">\n\n                                                        <span class=\"material-icons cropcls\"\n                                                            *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\"\n                                                            (click)=\"opensingleimagecropformultiple(files)\">\n                                                            crop\n                                                        </span>\n\n\n                                                        <img mat-card-image\n                                                            src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                    </mat-card>\n\n                                                    <div class=\"cropimagesdiv\"\n                                                        *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                        <h2> Croped Images :</h2>\n\n                                                        <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                            <br />\n                                                            <span>Croped Image (Asepect Ratio) :\n                                                                {{files.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                            <image-cropper [imageBase64]=\"files.imageUrl\"\n                                                                [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                                [resizeToWidth]=\"128\"\n                                                                (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\"\n                                                                (imageLoaded)=\"imageLoaded()\"\n                                                                (cropperReady)=\"cropperReady()\"\n                                                                (loadImageFailed)=\"loadImageFailed()\"\n                                                                [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                            </image-cropper>\n\n                                                            <!-- <mat-card class=\"example-card imagecardcls\"\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\n                                                                <span>Croped Image Output : </span><br>\n                                                                <img class=\"croppedImagecls\"\n                                                                    [src]=\"files.croppedImage[ci]\" />\n                                                            </mat-card> -->\n\n                                                        </ng-container>\n                                                    </div>\n\n\n                                                </div>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                    picture_as_pdf\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                    movie_filter\n                                                </span>\n\n                                                <span class=\"material-icons\"\n                                                    *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                    description\n                                                </span>\n\n                                                <div class=\"filenamecls\">\n                                                    <span class=\"fileuploadednameclass\"> {{files.name}}</span>\n                                                    <br />\n                                                    <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\n                                                </div>\n\n\n                                                <br>\n                                                <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                <!-- multipleImgFormData -->\n                                                <div class=\"filefieldsmaincls\">\n                                                    <ng-container class=\"descdiv\"\n                                                        *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                        <!-- fields {{fields | json}}ss -->\n\n                                                        <div class=\"filefieldscls\"\n                                                            *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                            <br>\n\n                                                            <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <!-- <span>if imgfields ==</span> -->\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- <span>if imgfields ++ </span> -->\n\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n                                                            <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                            <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n\n                                                            </div>\n\n                                                            <div *ngIf=\"val.type == 'number'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n\n\n                                                            <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                        [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <!-- </div> -->\n                                                    </ng-container>\n                                                </div>\n\n\n\n                                                <div class=\"actionbtndiv\">\n\n                                                    <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                        Upload\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                        *ngIf=\"files.loaded != null && files.loaded==0\"\n                                                        mat-raised-button\n                                                        (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                        Delete\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                        Delete </mat-chip>\n                                                </div>\n\n                                                <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\"\n                                                        [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                    </mat-progress-bar>\n                                                </section>\n                                            </div>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element submitbtnsection\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n\n            <div class=\"custombuttonscls\"\n                *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\"\n                        (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
                styles: [".drop{height:200px;width:200px;border-radius:100px;color:#fff;background-color:#baf;font-size:20px;display:flex;align-items:center}.aligner{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column}.customheadingtitlecls{background-color:#7fffd4;font-size:x-large;text-align:center}.matimg-cls{height:112px;width:295px}.imgcls img{height:100px;width:100px}.external_buttoncls{float:right}.cropimagesdiv,.croppedImagecls,.imagecardcls{width:300px}.descdiv{margin:5px 0}.cropcls{cursor:pointer;position:absolute;right:10px;top:19px;background:#fffffff2;border-radius:3px;padding:2px}"]
            }] }
];
/** @nocollapse */
ShowformComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: ApiService },
    { type: MatSnackBar },
    { type: Router },
    { type: ElementRef }
];
ShowformComponent.propDecorators = {
    formDirective: [{ type: ViewChild, args: [FormGroupDirective,] }],
    formdata: [{ type: Input }],
    formfieldrefreshdata: [{ type: Input }],
    formfieldrefresh: [{ type: Input }],
    custombuttons: [{ type: Input }],
    externaldatavalue: [{ type: Input }],
    onFormFieldChange: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsU0FBUyxFQUFFLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUFhLGtCQUFrQixFQUFVLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEgsT0FBTyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM1QyxPQUFPLEVBQWlCLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFeEUsT0FBTyxFQUFzQixXQUFXLEVBQWtCLE1BQU0sNkJBQTZCLENBQUM7QUFFOUYsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRXpDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBUzlDLE1BQU0sT0FBTyxpQkFBaUI7Ozs7Ozs7O0lBa0Q1QixZQUFvQixXQUF3QixFQUFTLFdBQXVCLEVBQVUsU0FBc0IsRUFBVSxNQUFjLEVBQVUsVUFBc0I7UUFBaEosZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7UUEvQzdKLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDbkMsdUJBQWtCLEdBQVksS0FBSyxDQUFDOzs7UUFxQjdCLGFBQVEsR0FBUSxLQUFLLENB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QUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQzt3QkFDbEUsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzdDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUNqRCxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQzt3QkFFbkQsS0FBSyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7d0JBRTNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDM0Usd0NBQXdDO3FCQUN6QztvQkFFRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxT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QUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFFN1EsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUVsSSxPQUFPLENBQUMsR0FBRyxDQUFDLDhCQUE4QixFQUFFLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUc1UTtvQkFFRCxJQUFJLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxJ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QXNCOztJQUN0QixvREFBa0M7O0lBQ2xDLDJDQUF5Qjs7SUFDekIsbURBQWlDOztJQUNqQyxzQ0FBb0I7O0lBQ3BCLHNDQUFvQjs7SUFDcEIsZ0RBQThCOztJQUM5Qix5Q0FBdUI7O0lBQ3ZCLDhDQUFrQzs7SUFDbEMsOENBQW1DOztJQUVuQyxxQ0FBNkI7O0lBQzdCLDZDQUF5Qzs7SUFDekMsNkNBQWtDOztJQUdsQyxrQ0FBZ0M7O0lBQ2hDLGlDQUE0Qjs7SUFDNUIsa0NBQVc7O0lBQ1gsd0NBQWlCOztJQUNqQiw4Q0FBc0Q7O0lBSXRELDhDQUE0Qjs7SUFDNUIseUNBQXVCOzs7OztJQTRwRHJCLCtCQUFzQjs7Ozs7SUFqd0RaLHdDQUFnQzs7SUFBRSx3Q0FBOEI7Ozs7O0lBQUUsc0NBQThCOzs7OztJQUFFLG1DQUFzQjs7Ozs7SUFBRSx1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LCBTaW1wbGVDaGFuZ2UsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgVmFsaWRhdG9ycywgRm9ybUFycmF5LCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1kaWFsb2csIFNuYWNrYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbi8vIGltcG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIm5nMi1ja2VkaXRvclwiO1xuXG4vLyBpbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hvd2Zvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93Zm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAVmlld0NoaWxkKEZvcm1Hcm91cERpcmVjdGl2ZSkgZm9ybURpcmVjdGl2ZTogRm9ybUdyb3VwRGlyZWN0aXZlO1xuICAvLyBAVmlld0NoaWxkKFwibXlja2VkaXRvclwiKSBja2VkaXRvcjogQ0tFZGl0b3JDb21wb25lbnQ7XG4gIHB1YmxpYyBmb3JtYXRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIGF1dG9zZWFyY2hwb3N0ZmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZGF0YShmb3JtZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZGF0YXZhbCA9IGZvcm1kYXRhO1xuICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcylcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwsICdodGxtbW1tbW1tJyk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2hkYXRhKGZvcm1maWVsZHJlZnJlc2hkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsID0gZm9ybWZpZWxkcmVmcmVzaGRhdGE7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGZvcm1maWVsZHJlZnJlc2goZm9ybWZpZWxkcmVmcmVzaDogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNodmFsID0gZm9ybWZpZWxkcmVmcmVzaDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2h2YWwpO1xuICB9XG5cbiAgLy8gcHVibGljIG1pbkRhdGUgPSBuZXcgRGF0ZSgyMDIwLCA4LCAyNCk7XG4gIC8vIHB1YmxpYyBtYXhEYXRlID0gbmV3IERhdGUoMjAyMCwgOCwgMzEpO1xuICBwdWJsaWMgZGF0ZWZsYWc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgUGFzc3dvcmRWYWw6IGFueSA9ICcnO1xuXG4gIHB1YmxpYyBleHRlcm5hbERhdGFWYWw6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBjdXN0b21saXN0ZW5idXR0b25zOiBhbnkgPSB7fTtcblxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9ucyh2YWw6IGFueSkge1xuICAgIHRoaXMuY3VzdG9tbGlzdGVuYnV0dG9ucyA9IHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWxpc3RlbmJ1dHRvbnMsJ2N1c3RvbWxpc3RlbmJ1dHRvbnMgZm9ybScpXG4gIH1cblxuXG4gIEBJbnB1dCgpXG4gIHNldCBleHRlcm5hbGRhdGF2YWx1ZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5leHRlcm5hbERhdGFWYWwgPSB2YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmV4dGVybmFsRGF0YVZhbCwgJ3RoaXMuZXh0ZXJuYWxEYXRhVmFsJylcbiAgfVxuXG4gIC8vIHB1YmxpYyBja2VDb25maWc6YW55PXt9O1xuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBzdWJzY3JpcHRpb25jb3VudCA9IDA7XG4gIGF1dG9xdWVyeWNoYW5nZWQ6IFN1YmplY3Q8YW55PiA9IG5ldyBTdWJqZWN0PGFueT4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwpIHtcblxuXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuYXV0b3F1ZXJ5Y2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKGF1dG9yZXM6IGFueSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnc3NzIC4uIGF1dG8gc2VhcmNoIGNhbGxlZCAgLi4gJywgdGhpcy5mb3JtR3JvdXAudmFsdWUpO1xuICAgICAgICB0aGlzLmF1dG9zZWFyY2hwb3N0ZmxhZyA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b2NvbXBsZXRlKHJlcy52YWwsIHJlcy5kYXRhKTtcbiAgICAgICAgbGV0IGRhdGE6IGFueSA9IGF1dG9yZXMuZGF0YTtcbiAgICAgICAgbGV0IHZhbDogYW55ID0gYXV0b3Jlcy52YWw7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1wiLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcyk7XG4gICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcImZpbHRlcmF1dG9jb21wbGV0ZSB3aXRoIHNlcnZlciBvcHRpb25zXCIsIGRhdGEpO1xuICAgICAgICBkYXRhLnNob3dhdXRvcHJvZ3Jlc3NiYXIgPSB0cnVlO1xuICAgICAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCArIGRhdGEuZW5kcG9pbnQ7XG4gICAgICAgIGxldCBzb3VyY2UgPSB7IFwiZm9ybXZhbHVlXCI6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH07XG4gICAgICAgIGxldCBzZWFyY2hjb25kaXRpb24gPSB7fVxuICAgICAgICBzZWFyY2hjb25kaXRpb25bZGF0YS5zZWFyY2hfZmllbGRdID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICAgICAgc291cmNlWydzZWFyY2hjb25kaXRpb24nXSA9IHNlYXJjaGNvbmRpdGlvbjtcblxuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJvcG9wb3BvXCIsIGxpbmssIHNlYXJjaGNvbmRpdGlvbik7XG5cbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXV0b2NvbXBsZXRlIHNlYXJjaGluZyByZXNwb25zZVwiLCByZXMpO1xuICAgICAgICAgIGRhdGEuc2hvd2F1dG9wcm9ncmVzc2JhciA9IGZhbHNlO1xuICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XG5cbiAgICAgICAgICAgIGlmIChyZXMucmVzLmxlbmd0aCAhPSAwKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgICAgICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IHJlcy5yZXM7XG4gICAgICAgICAgICAgIC8vICBjb25jYXQgZWFybGllciBkYXRhIHdpdGggbmV3IHJlc3VsdHMgYXMgb3B0aW9ucyAgXG4gICAgICAgICAgICAgIGlmIChkYXRhLnZhbCA9PSBudWxsKSBkYXRhLnZhbCA9IFtdO1xuICAgICAgICAgICAgICBkYXRhLnZhbCA9IGRhdGEudmFsLmNvbmNhdChyZXMucmVzKTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RhdGEudmFsJywgZGF0YS52YWwpO1xuICAgICAgICAgICAgICAvLyBsZXQgdGVtcGFycjogYW55ID0gQXJyYXkuZnJvbShuZXcgU2V0KGRhdGEudmFsLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtKSkpXG4gICAgICAgICAgICAgIGRhdGEudmFsID0gdGhpcy51bmlxdWUoZGF0YS52YWwsICdrZXknKTtcbiAgICAgICAgICAgICAgLy8gZGF0YS52YWwgPSB0ZW1wYXJyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEudmFsLCAnZGF0YS52YWwnLCByZXMucmVzLCBkYXRhLnZhbC5sZW5ndGgsICd0ZW1wYXJyJyk7XG4gICAgICAgICAgICAgIC8vIHRoaXMuYXV0b3NlYXJjaHBvc3RmbGFnID0gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIHJlcy5kYXRhID0gZGF0YTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgLy8gc25ha2JhciBmaXJlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gc25ha2JhciBmYWlsdXJlIG1lc3NhZ2VcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSlcblxuXG5cbiAgICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5taW5EYXRlLCAndG9kYXk9PT0+JywgdGhpcy5tYXhEYXRlKVxuXG4gIH1cbiAgcHVibGljIGZpbGVjaG9vc2Vyc2luZ2xlVHlwZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGZpbGVjaG9vc2VybXVsdGlwbGVUeXBlRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICBnZXQgbmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykgYXMgRm9ybUNvbnRyb2w7XG4gIH1cbiAgZm9ybUdyb3VwOiBGb3JtR3JvdXA7XG4gIHRpdGxlQWxlcnQgPSAnVGhpcyBmaWVsZCBpcyByZXF1aXJlZCc7XG4gIHBvc3Q6IGFueSA9ICcnO1xuICBzaG93Zm9ybSA9IGZhbHNlO1xuICBsb2FkaW5nID0gZmFsc2U7XG4gIGZvcm1maWVsZHJlZnJlc2h2YWwgPSBmYWxzZTtcbiAgZm9ybWRhdGF2YWw6IGFueSA9IHt9O1xuICBmb3JtZmllbGRyZWZyZXNoZGF0YXZhbDogYW55ID0ge307XG4gIGZpbGVyZmllbGRkYXRhOiBhbnkgPSBbXTtcbiAgYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZTogYW55ID0gW107XG4gIGZpbGVhcnJheTogYW55ID0gW107XG4gIGZpbGVjb3VudDogYW55ID0gW107XG4gIGN1cnJlbnRhdXRvY29tcGxldGU6IGFueSA9ICcnO1xuICBmaWVsZGxvYWRpbmc6IGFueSA9ICcnO1xuICBpc1Bhc3N3b3JkVmlzaWJsZTogQm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzaW5nbGVJbWdGb3JtRGF0YTogYW55ID0gW107XG5cbiAgcHVibGljIGltZ1ZhbHVlOiBzdHJpbmcgPSAnJztcbiAgcHVibGljIG51bWJlckZvcm1hdEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHBob25lbnVtYmVyVmFsdWU6IGFueSA9IFwiXCI7XG4gIC8qZm9yIHByb2dyZXNzIGJhciovXG5cbiAgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcbiAgbW9kZTogYW55ID0gJ2luZGV0ZXJtaW5hdGUnO1xuICB2YWx1ZSA9IDUwO1xuICBidWZmZXJWYWx1ZSA9IDc1O1xuICBAT3V0cHV0KCkgb25Gb3JtRmllbGRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG5cbiAgaW1hZ2VDaGFuZ2VkRXZlbnQ6IGFueSA9IFwiXCI7XG4gIGNyb3BwZWRJbWFnZTogYW55ID0gXCJcIjtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZUZvcm0oMCk7XG5cblxuICAgIC8vIHRoaXMuc2V0Q2hhbmdlVmFsaWRhdGUoKVxuICB9XG5cbiAgLy8gY3VzdG9tIGxpc3RlbiBidXR0b25zXG4gIGdldEZvcm1WYWwodmFsKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCcrKysrKysrKys9PT09JylcbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZDogJ2Zvcm1kYXRhJywgZmllbGR2YWw6ICdmb3JtZGF0YXZhbCcsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBidXR0b252YWw6IHZhbCwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0pO1xuICB9XG5cbiAgLy8gQ3VzdG9tRmxhZ0ZpZWxkc1xuICBDdXN0b21GbGFnRmllbGRzKGZpZWxkOiBhbnksIGl0ZW06IGFueSkge1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBjdXN0b21CdXR0b25WYWw6IGl0ZW0sIGN1c3RvbWZpZWxkOiAnYWRkJyB9KTtcbiAgfVxuXG4gIEN1c3RvbUZsYWdGaWVsZHNSZW1vdmUoZmllbGQ6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGN1c3RvbUJ1dHRvblZhbDogaXRlbSwgY3VzdG9tZmllbGQ6ICdyZW1vdmUnIH0pO1xuICB9XG5cbiAgdW5pcXVlKGFycmF5LCBwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gYXJyYXkuZmlsdGVyKChlLCBpKSA9PiBhcnJheS5maW5kSW5kZXgoYSA9PiBhW3Byb3BlcnR5TmFtZV0gPT09IGVbcHJvcGVydHlOYW1lXSkgPT09IGkpO1xuICB9XG5cblxuICAvL0dlbmVyYXRlIFBhc3N3b3JkIGJ1dHRvblxuICBHZW5lcmF0ZVBhc3N3b3JkKHZhbCkge1xuICAgIHRoaXMuUGFzc3dvcmRWYWwgPSAnJztcbiAgICB0aGlzLlBhc3N3b3JkVmFsID0gdGhpcy5tYWtlaWQoMTApO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB2YWwudmFsdWUgPSB0aGlzLlBhc3N3b3JkVmFsO1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnBhdGNoVmFsdWUodGhpcy5QYXNzd29yZFZhbCk7XG4gICAgfSwgMjAwKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuUGFzc3dvcmRWYWwsICdQYXNzd29yZFZhbCsrKysnKVxuXG5cbiAgICAvLyBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAvLyAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5wYXNzd29yZGZsYWcgPT0gdHJ1ZSkge1xuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5wYXNzd29yZGZsYWcsICcrKysrPT0nLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSlcbiAgICAvLyAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10udmFsdWUgPSB0aGlzLlBhc3N3b3JkVmFsO1xuICAgIC8vICAgICAvLyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1sncGFzc3dvcmQnXS5wYXRjaFZhbHVlKHRoaXMuUGFzc3dvcmRWYWwpXG4gICAgLy8gICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGEgPSB7IGZpZWxkOiAncGFzc3dvcmQnLCB2YWx1ZTogdGhpcy5QYXNzd29yZFZhbCB9O1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5QYXNzd29yZFZhbCwgJ1Bhc3N3b3JkVmFsJylcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gIH1cblxuICBvbmNob29zZWZpbGVzKGV2ZW50OiBhbnksIGZpbGVuYW1lOiBhbnksIG11bHRpcGxlRmxhZzogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJ3b3JrcyBwcm9wZXJseVwiLCBtdWx0aXBsZUZsYWcpO1xuICAgIGlmICh0eXBlb2YgbXVsdGlwbGVGbGFnID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcImlmIHBhcnRcIik7XG4gICAgICAvLyB0aGlzLmZpbGVjaG9vc2Vyc2luZ2xlVHlwZUZsYWc9dHJ1ZTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZWNob29zZXJzaW5nbGVcIiArIGZpbGVuYW1lKS5jbGljaygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZyhcImVsc2UgcGFydFwiLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVjaG9vc2VyXCIpKTtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmlsZWNob29zZXJtdWx0aXBsZVwiICsgZmlsZW5hbWUpLmNsaWNrKCk7XG4gICAgICAvLyB0aGlzLmZpbGVjaG9vc2VybXVsdGlwbGVUeXBlRmxhZz10cnVlO1xuXG4gICAgfVxuICB9XG5cbiAgLy9jb3B5IFBhc3N3b3JkIGJ1dHRvblxuICBjb3B5R2VuZXJhdGVQYXNzd29yZCh2YWwpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwnKytwYXNzJyx0aGlzLmZvcm1Hcm91cC52YWx1ZSlcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSwnKys/Pz8nLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC52YWx1ZV0pXG5cblxuICAgIHZhciBwYXNzd29yZEZpZWxkRGF0YTogYW55ID0gJyc7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSAnJykge1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gJyc7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0eXBlb2YodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSwnPz8nLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSlcblxuXG4gICAgaWYgKHBhc3N3b3JkRmllbGREYXRhICE9IG51bGwgJiYgcGFzc3dvcmRGaWVsZERhdGEgIT0gJycgJiYgdHlwZW9mIChwYXNzd29yZEZpZWxkRGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgIGVsLnZhbHVlID0gcGFzc3dvcmRGaWVsZERhdGE7XG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgIGVsLnNlbGVjdCgpO1xuICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29weSBUbyBDbGlwYm9hcmQnIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdQbGVhc2UgR2VuZXJhdGUgb3IgRW50ZXIgUGFzc3dvcmQuLiEnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgLy9wcmV2aWV3IFBhc3N3b3JkIGJ1dHRvblxuICBwcmV2aWV3R2VuZXJhdGVQYXNzd29yZCh2YWwpIHtcblxuICAgIHZhciBwYXNzd29yZEZpZWxkRGF0YTogYW55ID0gJyc7XG5cbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpICE9ICd1bmRlZmluZWQnICYmIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSAnJykge1xuICAgICAgcGFzc3dvcmRGaWVsZERhdGEgPSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkRmllbGREYXRhICE9IG51bGwgJiYgcGFzc3dvcmRGaWVsZERhdGEgIT0gJycgJiYgdHlwZW9mIChwYXNzd29yZEZpZWxkRGF0YSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJysrKysrKysrKysrKycpXG4gICAgICBzd2l0Y2ggKHZhbC50eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Bhc3N3b3JkJzpcbiAgICAgICAgICB2YWwudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICB0aGlzLmlzUGFzc3dvcmRWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgIHZhbC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgICB0aGlzLmlzUGFzc3dvcmRWaXNpYmxlID0gdHJ1ZTtcblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdQbGVhc2UgR2VuZXJhdGUgb3IgRW50ZXIgUGFzc3dvcmQuLiEnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgLy9nZW5lcmF0ZSByYW4gcGFzc3dvcmRcbiAgbWFrZWlkKGxlbmd0aCkge1xuICAgIHZhciByZXN1bHQgPSAnUCc7XG4gICAgbGVuZ3RoID0gbGVuZ3RoICsgMTtcbiAgICB2YXIgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgdmFyIGNoYXJhY3RlcnNMZW5ndGggPSBjaGFyYWN0ZXJzLmxlbmd0aDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cblxuXG4gIC8vIGV4dGVybmFsIERhdGEgRnVuY3Rpb25cbiAgZXh0ZXJuYWxEYXRhRnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgLy8gdGhpcy5leHRlcm5hbERhdGFWYWw9W107XG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgYWN0aW9uOiAnZXh0ZXJuYWxkYXRhJywgZmxhZzogJ2FkZCcsIGZpZWxkVmFsOiB2YWx1ZSwgaW5kZXg6IGluZGV4LCBleHRlcm5hbERhdGFWYWw6IHRoaXMuZXh0ZXJuYWxEYXRhVmFsIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCB0aGlzLmV4dGVybmFsRGF0YVZhbCwgaW5kZXgsICcrKycpXG4gIH1cblxuICBleHRlcm5hbERhdGFFZGl0RnVuY3Rpb24oZmxhZywgZmllbGQsIGl2YWwsIGkpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKGZsYWcsIGZpZWxkLCBpdmFsLCBpLCAnZXh0ZXIgKysrKycpXG5cbiAgICBpZiAoZmxhZyA9PSAnZWRpdCcpIHtcbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2V4dGVybmFsZGF0YScsIGZsYWc6ICdlZGl0JywgZmllbGRWYWw6IGZpZWxkLCBpbmRleDogaXZhbCwgdmFsaW5kOiBpLCBleHRlcm5hbERhdGFWYWw6IHRoaXMuZXh0ZXJuYWxEYXRhVmFsIH0pO1xuICAgIH1cblxuICAgIGlmIChmbGFnID09ICdyZW1vdmUnKSB7XG4gICAgICBmaWVsZC52YWx1ZS5zcGxpY2UoaSwgMSk7XG4gICAgfVxuXG5cbiAgfVxuXG5cblxuXG4gIC8vIG9wZW4gY2FsZW5kYXIgaW50byBkYXRlIGZpZWxkXG4gIG9wZW5DYWxlbmRhcigpIHtcbiAgICB0aGlzLmRhdGVmbGFnID0gdHJ1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVmbGFnLCAnZGF0ZWZsYWcnKVxuICB9XG5cbiAgbmF2dG9jYW5jZWwoKSB7XG5cbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZDogJ2Zvcm1jYW5jZWwnLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0pO1xuXG4gICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwuY2FuY2Vscm91dGVdKTtcbiAgICB9XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIGFmdGVyIHZpZXcgaW5pdCB0cmlnZ2VyJyk7XG4gICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICAgICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIHRoaXMuY2FuY2VsLmJpbmQodGhpcykpO1xuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIHRyaWdnZXJldmVudHModmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnaW4gdHJpZ2dlcmV2ZW50cycsIHZhbCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygndmFsIGxvYWRlZWQgdHJpZ2dlcicsIHZhbCk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIHRoaXMuaGFuZGxlRHJvcC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHZhbC5uYW1lKS5hZGRFdmVudExpc3RlbmVyKCdkcmFnZHJhZ292ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcbiAgICB9LCAxMDAwKTtcblxuICB9XG5cbiAgY2FuY2VsKGUpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY2FuY2VsJyxlKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cblxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcImhhbmRlbERyb3BcIiwgZSlcbiAgICAvLyBsZXQgYXBpQmFzZVVSTD1cIlwiXG4gICAgLy8gdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGU7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsaXN0Jyk7XG4gICAgY29uc3QgYXBpQmFzZVVSTCA9ICdodHRwczovL3RnZTI0YmMybmUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2JztcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hhbmRsZURyb3AnLCBlKTtcblxuICAgIGNvbnN0IGR0ID0gZS5kYXRhVHJhbnNmZXIgPT0gbnVsbCA/IGUgOiBlLmRhdGFUcmFuc2ZlcjtcbiAgICBjb25zdCBmaWxlY2hvb3NlckZsYWcgPSBlLmRhdGFUcmFuc2ZlciA9PSBudWxsID8gMSA6IDA7XG4gICAgY29uc29sZS5sb2coXCJkdCBkYXRhYWErK1wiLCBkdCk7XG4gICAgY29uc29sZS5sb2coXCJkdCBmaWxlY2hvb3NlckZsYWcrK1wiLCBmaWxlY2hvb3NlckZsYWcpO1xuICAgIGNvbnN0IGZpbGVzID0gZHQuZmlsZXMgPT0gbnVsbCA/IGR0LnRhcmdldC5maWxlcyA6IGR0LmZpbGVzO1xuICAgIGNvbnNvbGUubG9nKFwiZmlsZXMgY291bnRcIiwgZmlsZXMubGVuZ3RoKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbaV07XG4gICAgICAvLyBjb25zb2xlLmxvZyhmaWxlcywgJ2ZpbGVzJywgZS50YXJnZXQuaWQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2ZhcnInLCB0aGlzLmZpbGVhcnJheSk7XG4gICAgICBjb25zb2xlLmxvZygnZmlsZXMrKycsIGZpbGUpO1xuXG4gICAgICBmb3IgKGNvbnN0IGcgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnR5cGUgPT0gJ2ZpbGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lID09IGUudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJykgfHwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3NlcnNpbmdsZScsICcnKSB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5uYW1lID09IGUudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2VybXVsdGlwbGUnLCAnJykpKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJpZiBwYXJ0XCIsIGUudGFyZ2V0LmlkLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zaW5nbGVJbWdGb3JtRGF0YSwnc2luZ2xlSW1nRm9ybURhdGEnKVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgZGV0YWlscycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCBnKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5tdWx0aXBsZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRlbGV0ZWZpbGUodmEpXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzW2ldLCAnZmlsZXNbaV09PT09PT09c2luZ2xlJylcblxuICAgICAgICAgICAgLy9pbWFnZSBwcmV2aWV3IGJhc2UvNjRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiIGJlZm9yZSAybmQgaWYgcGFydCBvZiB0eXBlIGNoZWNraW5nXCIsIGZpbGVzKTtcblxuICAgICAgICAgICAgaWYgKGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvanBnJyB8fCBmaWxlc1tpXS50eXBlID09ICdpbWFnZS9qcGVnJykge1xuICAgICAgICAgICAgICAvL1Nob3cgaW1hZ2UgcHJldmlld1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIjJuZCBpZiBwYXJ0IG9mIHR5cGUgY2hlY2tpbmdcIik7XG4gICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZVVybCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uY3JvcHBlZGltYWdlYXJyYXkgPSBbXTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yZXN1bHQsICdldmVudC50YXJnZXQucmVzdWx0PT09PT09PT09JylcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmNyb3BwZWRJbWFnZSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbDtcblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpb1tjXSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICdmaWxlcysrKysrJylcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5sb2FkZWQgPSAwO1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubG9hZGZpbGUgPSAxO1xuICAgICAgICAgICAgaWYgKGZpbGVjaG9vc2VyRmxhZyA9PSAwKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlZmlsZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKys9PScpXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPSBmaWxlc1tpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChmaWxlY2hvb3NlckZsYWcgPT0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJzaW5nbGUnLCAnJyldICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG4gaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lID09IGUudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2Vyc2luZ2xlJywgJycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlZmlsZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2Vyc2luZ2xlJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSsrPT0nKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2Vyc2luZ2xlJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddKysgPk0nKVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlc1tpXSwgJ2ZpbGVzW2ldPT09PT09PSBtdWx0aXBsZScpXG5cbiAgICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvanBlZycpIHtcbiAgICAgICAgICAgICAgLy9TaG93IGltYWdlIHByZXZpZXdcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIrKysrKytpZiBwYXJ0XCIsIGZpbGVzKTtcbiAgICAgICAgICAgICAgbGV0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGZpbGVzW2ldLmltYWdlVXJsID0gZXZlbnQudGFyZ2V0LnJlc3VsdDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8sICdyYXRpbys9PT09PT4nKVxuXG4gICAgICAgICAgICAgICAgICBmaWxlc1tpXS5jcm9wcGVkSW1hZ2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgIGZpbGVzW2ldLmFzcGVjdHJhdGlvID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW87XG4gICAgICAgICAgICAgICAgICBmaWxlc1tpXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbDtcbiAgICAgICAgICAgICAgICAgIGZpbGVzW2ldLmNyb3BwZWRpbWFnZWFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICBmb3IgKGxldCBjIGluIGZpbGVzW2ldLmFzcGVjdHJhdGlvKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWxlc1tpXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIGZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdICE9IG51bGwgJiYgdHlwZW9mIChmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXSwgJ2ZpbGVzW2ldLmFzcGVjdHJhdGlvW2NdJylcbiAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcihmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXNbaV0sICdmaWxlc1tpXT09PicpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCAnaW1hZ2VVcmwrKysrKycpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZmlsZXNbaV0ubG9hZGVkID0gMDtcbiAgICAgICAgICAgIGZpbGVzW2ldLmxvYWRmaWxlID0gMTtcblxuXG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlZmllbGRzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICBmaWxlc1tpXS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlZmllbGRzO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL2ZvciBkcmFnIGFuZCBkcm9wIGZpbGVzXG4gICAgICAgICAgICBpZiAoZmlsZWNob29zZXJGbGFnID09IDApIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldLnB1c2goZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL2ZvciBjaG9vc2UgZmlsZXNcbiAgICAgICAgICAgIGlmIChmaWxlY2hvb3NlckZsYWcgPT0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJtdWx0aXBsZScsICcnKV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2VybXVsdGlwbGUnLCAnJyldID0gW107XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJtdWx0aXBsZScsICcnKV0ucHVzaChmaWxlc1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScsIHRoaXMuZmlsZWFycmF5KTtcblxuICAgICAgLy8gdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgLy8gICBmZXRjaChhcGlCYXNlVVJMK1wiL3JlcXVlc3RVcGxvYWRVUkxcIiwge1xuICAgICAgLy8gICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAvLyAgICAgaGVhZGVyczoge1xuICAgICAgLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgLy8gICAgIH0sXG4gICAgICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgLy8gICAgICAgbmFtZTogZmlsZS5uYW1lLFxuICAgICAgLy8gICAgICAgdHlwZTogZmlsZS50eXBlXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgICAgLy8gICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKGpzb24pe1xuICAgICAgLy8gICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgLy8gICAgICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgICAgLy8gICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7dHlwZTogZmlsZS50eXBlfSlcbiAgICAgIC8vICAgICB9KVxuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbigpe1xuICAgICAgLy8gICAgIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAvLyAgICAgdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAvLyAgICAgbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgIC8vICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICAgIC8vIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIHVwbG9hZGZpbGUodmFsOiBhbnkpIHtcbiAgLy8gICAvL2xldCBhcGlCYXNlVVJMID0gXCJodHRwczovL3RnZTI0YmMybmUuZXhlY3V0ZS1hcGkudXMtZWFzdC0xLmFtYXpvbmF3cy5jb20vZGV2XCI7XG4gIC8vICAgbGV0IGg6YW55PXRoaXMuYnVja2V0dXBsb2FkKHZhbCk7XG4gIC8vICAgY29uc29sZS5sb2coJ3VwcHBwJyxoKVxuICAvLyB9XG5cbiAgdHJhY2tCeUZuKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgdHJhY2tCeUZuTXVsdGlwbGUoaW5kZXgpIHtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuXG4gIHRyYWNrQnlGbk11bHRpKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAga2V5dXBWYWwodmFsLCBpdGVtLCBmaSwgaW5kLCBkYXRhLCBmbmFtZSwgc2ZuYW1lLCBldikge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSBpbiBreXVwdmFsICcsIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWxbZmldLmltYWdlZmllbGRzLCAna2V5dXBWYWwnLCAncycsIGl0ZW0sIGZpLCBpbmQsIGRhdGEsICctLS0nLCB0aGlzLmZpbGVhcnJheSwgJywsJywgZm5hbWUsIHNmbmFtZSwgZXYudGFyZ2V0LnZhbHVlKTtcbiAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmltYWdlZmllbGRzW2luZF1bJ3ZhbHVlJ10gPSBldi50YXJnZXQudmFsdWU7XG4gICAgLy8gaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsKSB7XG4gICAgLy8gICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gW107XG4gICAgLy8gICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IFtdO1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IG51bGwgfHwgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJzExMTExMTExMTExMTExMTExMTExMTExMTExMTExMScpO1xuICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsKSB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPSBbXTtcbiAgICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID0gW107XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSBiZWZvcmUnLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSB7IGtleTogZXYudGFyZ2V0Lm5hbWUsIHZhbHVlOiBldi50YXJnZXQudmFsdWUgfTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gYWZ0ZXInLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgLy8gY29uc29sZS5sb2coc2ZuYW1lLCAnc2ZuYW1lJywgaW5kLCBldi50YXJnZXQudmFsdWUpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGRkJywgZmksIGluZCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXSk7XG4gIH1cblxuXG4gIGNoZWNrVmFsdWUodmFsLCBpdGVtLCBmaSwgaW5kLCBkYXRhLCBmbmFtZSwgc2ZuYW1lKSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAnKysnKVxuXG4gICAgLy8gY29uc29sZS5sb2codmFsW2ZpXS5pbWFnZWZpZWxkcywgJ2tleXVwVmFsJywgJ3MnLCBpdGVtLCBmaSwgaW5kLCBkYXRhLCAnLS0tJywgdGhpcy5maWxlYXJyYXksICcsLCcsIGZuYW1lLCBzZm5hbWUpO1xuXG4gICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsIHx8IHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEnKTtcbiAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCkgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID0gW107XG4gICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IFtdO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdLmtleSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdLmtleSA9PSBzZm5hbWUpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyIGlmJyk7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0udmFsdWUpIHtcblxuICAgICAgICBjYXNlIHRydWU6XG4gICAgICAgICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0udmFsdWUgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXS52YWx1ZSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCczMzMzMzMzMzMzMzMzMzMzMzMzMyBlbHNlJyk7XG5cbiAgICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID0geyBrZXk6IHNmbmFtZSwgdmFsdWU6IHRydWUgfTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gYmVmb3JlJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSBhZnRlcicsIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RkZCcsIGZpLCBpbmQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0pO1xuICB9XG5cblxuXG4gIHVwbG9hZGZpbGUodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndXBwcHAnLCB2YWwpO1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHZhbCcsIHZhbCk7XG4gICAgZmlsZS51cGxvYWRlZCA9IDI7IC8vIHNob3cgcHJvZ3Jlc3NiYXJcbiAgICBsZXQgdGVtcGxvYWRlcjogYW55ID0gdGhpcy5maWVsZGxvYWRpbmdbdmFsLm5hbWVdO1xuICAgIHRlbXBsb2FkZXIgPSB2YWwubmFtZTtcbiAgICAvLyByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZGVuZCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgcmVhZGVyLm9ubG9hZGVuZCA9IChlKSA9PiB7XG4gICAgICBmZXRjaCh2YWwuYXBpdXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgbmFtZTogdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKSxcbiAgICAgICAgICB0eXBlOiBmaWxlLnR5cGUsXG4gICAgICAgICAgcGF0aDogdmFsLnBhdGgsXG4gICAgICAgICAgYnVja2V0OiB2YWwuYnVja2V0XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYnVjaycsIHJlc3BvbnNlKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgIHJldHVybiBmZXRjaChqc29uLnVwbG9hZFVSTCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwgeyB0eXBlOiBmaWxlLnR5cGUgfSlcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIC8vIHJldHVybiAnc3VjY2Vzcyc7XG4gICAgICAgICAgZmlsZS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgZmlsZS5sb2FkZmlsZSA9IDE7XG4gICAgICAgICAgdmFsLmxvYWRlZCA9IG51bGw7XG4gICAgICAgICAgZmlsZS5maWxlc2VydmVybmFtZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgLy8gaWYodmFsLmltYWdlZmllbGRzLmxlbmd0aCA+IDApe1xuICAgICAgICAgIC8vICAgZmlsZS5pbWFnZWZpZWxkcyA9IHZhbC5pbWFnZWZpZWxkc1xuICAgICAgICAgIC8vIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlLnR5cGUsICdmaWxlLnR5cGUnKTtcbiAgICAgICAgICAvLyB0ZW1wbG9hZGVyID0gbnVsbDtcbiAgICAgICAgICAvLyB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgICAgIC8vIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgfTtcbiAgICByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gIH1cblxuXG4gIHVwbG9hZGFsbCh2YWw6IGFueSkge1xuICAgIC8vIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS51cGxvYWRhbGwgPSAxO1xuICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0pIHtcbiAgICAgIGNvbnN0IGM6IGFueSA9IHBhcnNlSW50KHkpICogNTAwO1xuICAgICAgLy8gY29uc29sZS5sb2coJy0tLScsIHZhbCwgJ3YtLS0nLCAndGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdJywgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0udXBsb2FkZWQpO1xuICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XS5idWNrZXQgPT0gbnVsbCkgdGhpcy51cGxvYWRmaWxlbXVsdGlwbGUodmFsLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHkpO1xuICAgIH1cbiAgfVxuXG5cbiAgZGVsZXRlZmlsZW11bHRpcGxlYWxsKHZhbDogYW55KSB7XG4gICAgZm9yIChjb25zdCB5IGluIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSkge1xuICAgICAgY29uc3QgYzogYW55ID0gcGFyc2VJbnQoeSkgKiA1MDA7XG4gICAgICB0aGlzLmRlbGV0ZWZpbGVtdWx0aXBsZSh2YWwsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgeSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdID0gbnVsbDtcbiAgICB9LCAzMDAwKTtcbiAgfVxuXG5cbiAgdXBsb2FkZmlsZW11bHRpcGxlKHZhbDogYW55LCBmOiBhbnksIGluZGV4ZjogYW55KSB7XG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1baW5kZXhmXTtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlLCdmaWxlJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2coZiwnZicpO1xuICAgIGlmICh0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPT0gbnVsbCkgeyB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0gPSAwOyB9XG4gICAgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdKys7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdmFsIGluIG0gMicsIHZhbCwgZiwgaW5kZXhmLCAnaWYnLGZpbGUpO1xuICAgIGZpbGUudXBsb2FkZWQgPSAyOyAvLyBzaG93IHByb2dyZXNzYmFyXG4gICAgZmlsZS5sb2FkZmlsZSA9IDE7XG4gICAgbGV0IHRlbXBsb2FkZXI6IGFueSA9IHRoaXMuZmllbGRsb2FkaW5nW3ZhbC5uYW1lXTtcbiAgICB0ZW1wbG9hZGVyID0gdmFsLm5hbWU7XG4gICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgICAgZmV0Y2godmFsLmFwaXVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHBhdGg6IHZhbC5wYXRoLFxuICAgICAgICAgIGJ1Y2tldDogdmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogZmlsZS50eXBlIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGZpbGUudXBsb2FkZWQgPSAxO1xuICAgICAgICAgIGZpbGUubG9hZGVkID0gbnVsbDtcbiAgICAgICAgICBmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdmFsLnByZWZpeCArIGZpbGUubmFtZS5zcGxpdChcIiBcIikuam9pbihcIlwiKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlLnR5cGUsJ2ZpbGUudHlwZScpXG4gICAgICAgICAgLy8gdGVtcGxvYWRlciA9IG51bGw7XG4gICAgICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgICAgICAvLyBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgIH07XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbGUgdHlwZScsIGZpbGUsIHR5cGVvZiAoZmlsZSkpO1xuICAgIGNvbnN0IGZ0eXBlOiBhbnkgPSB0eXBlb2YgKGZpbGUpO1xuICAgIC8vIGlmIChmdHlwZSA9PSBcIkJsb2JcIikgXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG5cblxuICBkZWxldGVmaWxlKHZhbDogYW55LCBmbGFnOiBhbnkgPSAnJykge1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZpbGVhcnJheScsdGhpcy5maWxlYXJyYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwrKyBkZWxldGUnLCB2YWwsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsLm5hbWUpO1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdO1xuICAgIHNvdXJjZS5maWxlID0gdmFsLnByZWZpeCArIGZpbGUubmFtZTtcbiAgICBzb3VyY2UucGF0aCA9IHZhbC5wYXRoO1xuICAgIHNvdXJjZS5idWNrZXQgPSB2YWwuYnVja2V0O1xuICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS51cGxvYWRlZCA9IDI7XG4gICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLmxvYWRmaWxlID0gMDtcblxuXG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHZhbC5hcGlkZWxldGV1cmwsIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJyAmJiBmbGFnID09ICcnKSB7XG4gICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgIHZhbC52YWx1ZSA9IHt9O1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnVwbG9hZGVkID0gbnVsbDtcbiAgICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLmxvYWRmaWxlID0gMDtcbiAgICAgICAgdmFsLmxvYWRmaWxlID0gMDtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLCAnPz8/Pz09PURlbGV0ZT09PT8/Pz8/JylcblxuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVzaW5nbGVmaWxlKHZhbDogYW55LCBmbGFnOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICd2YWwrKysgZGVsZXRlJywgZmxhZylcbiAgICBpZiAoZmxhZyA9PSAnaW1hZ2UvcG5nJyB8fCBmbGFnID09ICdpbWFnZS9qcGcnIHx8IGZsYWcgPT0gJ2ltYWdlL2pwZWcnKSB7XG4gICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0ubG9hZGZpbGUgPSAwO1xuICAgICAgdmFsLmltYWdlVXJsID0gbnVsbDtcbiAgICAgIHZhbC5sb2FkZmlsZSA9IDA7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLmxvYWRmaWxlID0gMDtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbiAgZGVsZXRlc2luZ2xlZmlsZWZyb21tdWx0aXBsZSh2YWw6IGFueSwgZmllbGQ6IGFueSA9ICcnLCBpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCBmaWVsZCwgaW5kZXgsICc/Pz8/KysrKysnKVxuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVtpbmRleF07XG4gICAgZmlsZS5sb2FkZmlsZSA9IDA7XG4gICAgaWYgKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSAhPSBudWxsKSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSwgJ3RoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXT09JylcbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICB9KTtcbiAgfVxuXG5cblxuICBkZWxldGVmaWxlbXVsdGlwbGUodmFsOiBhbnksIGZpZWxkOiBhbnkgPSAnJywgaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJ3ZhbCsrJywgaW5kZXgpXG4gICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1baW5kZXhdO1xuICAgIHRoaXMuZmlsZWNvdW50W3ZhbC5uYW1lXS0tO1xuICAgIHNvdXJjZS5maWxlID0gdmFsLnByZWZpeCArIGZpbGUubmFtZTtcbiAgICBzb3VyY2UucGF0aCA9IHZhbC5wYXRoO1xuICAgIHNvdXJjZS5idWNrZXQgPSB2YWwuYnVja2V0O1xuICAgIGZpbGUudXBsb2FkZWQgPSAyO1xuICAgIC8vIGZpbGUubG9hZGZpbGUgPSAwO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh2YWwuYXBpZGVsZXRldXJsLCB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAucmVzZXQoKTtcbiAgICAgICAgZmlsZS5sb2FkZmlsZSA9IDA7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICBmaWxlLmxvYWRmaWxlID0gMDtcbiAgICAgICAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0sICd0aGlzLmZpbGVhcnJheVt2YWwubmFtZV09PScpXG5cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgaW4gZm9ybSAhISEnLCBjaGFuZ2VzLCAnZnJ2JywgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCk7XG4gICAgZm9yIChjb25zdCB2IGluIGNoYW5nZXMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHYsY2hhbmdlc1t2XSwndnYnKTtcbiAgICAgIGlmICh2ID09ICdmb3JtZmllbGRyZWZyZXNoZGF0YScpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZmZiBpbiBzZXQgdHQnKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLCAnbScpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cCAhPSBudWxsICYmIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgIT0gbnVsbCAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGRdLnBhdGNoVmFsdWUodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSk7XG4gICAgICAgICAgICB9IGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09IG51bGwgJiYgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBmb3Jta2V5IGluIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5kYXRhW2Zvcm1rZXldJywgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXldICE9IG51bGwpIHsgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleV0ucGF0Y2hWYWx1ZSh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldKTsgfVxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZm9ybWRhdGF2YWxrZXkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubmFtZSA9PSBmb3Jta2V5ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXV0b3NlbHZhbCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwgbXVsdGlwbGUgJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCwgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0uaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmQgb2YgaWZcblxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5uYW1lID09IGZvcm1rZXkgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSA9PSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBzaW5nbGUnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsLCBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XSA9PSAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGF1dG9jb21wbGV0ZXZhbHVlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5mIG9mIGlmXG5cbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubmFtZSA9PSBmb3Jta2V5ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS50eXBlID09ICdjaGVja2JveCcgJiYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS5tdWx0aXBsZSAhPSBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhdXRvc2VsdmFsIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCBjaGVjayBib3ggbXVsdGlwbGUgJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCwgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Zvcm1rZXkgKyAgKyBhdXRvc2VsdmFsJywgZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XS5pbmRleE9mKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSAhPSAtMSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXSAhPSBudWxsKSB7IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0ucGF0Y2hWYWx1ZSh0cnVlKTsgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZm9ybWtleSArICdfXycgKyBhdXRvc2VsdmFsXSAhPSBudWxsKSB7IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0ucGF0Y2hWYWx1ZShmYWxzZSk7IH1cblxuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZCBvZiBpZlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdzaG93ZmllbGRsb2FkZXInKSB7XG4gICAgICAgICAgICAgIHRoaXMuZmllbGRsb2FkaW5nID0gdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkID09ICdhZGRmcm9tY29udHJvbCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5tYW5hZ2Vmcm9tY29udHJvbCh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLnZhbHVlLCAnYWRkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAncmVtb3ZlZnJvbWNvbnRyb2wnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFuYWdlZnJvbWNvbnRyb2wodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSwgJ3JlbW92ZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3Jlc2V0Zm9ybScpIHtcbiAgICAgICAgICAgICAgdGhpcy5yZXNldGZvcm1kYXRhKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuXG4gIGZpbHRlcmF1dG9jb21wbGV0ZSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsKTtcbiAgICBjb25zb2xlLmxvZygnY2MnLCB2YWwsIGRhdGEpO1xuICAgIC8vIHJldHVybjtcbiAgICBpZiAoZGF0YS5lbmRwb2ludCAhPSBudWxsKSB7XG5cbiAgICAgIHRoaXMuYXV0b3F1ZXJ5Y2hhbmdlZC5uZXh0KHsgdmFsOiB2YWwsIGRhdGE6IGRhdGEgfSk7XG4gICAgICAvLyByZXR1cm5cblxuICAgICAgLy8gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZGF0YS5uYW1lXS5zaG93YXV0b3Byb2dyZXNzYmFyPXRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGZpZWxkdmFsID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsXS52YWx1ZTtcbiAgICAgIGlmIChmaWVsZHZhbCA9PSAnJyB8fCBmaWVsZHZhbCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGZpbHRlcnZhbCA9IGRhdGEudmFsLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgICAgcmV0dXJuIGUudmFsLmluY2x1ZGVzKGZpZWxkdmFsKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcmZpZWxkZGF0YSA9IGZpbHRlcnZhbDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2ZpbCcsIGZpbHRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbiAgcmVsb2FkYXV0b2NvbXBsZXRlKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJjbGljayBpbiBhdXRvY29tcGxldGUgY2FsbGVkXCIsIHZhbCk7XG5cbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSB2YWwubmFtZTtcbiAgICB0aGlzLmZpbGVyZmllbGRkYXRhID0gW107XG4gIH1cbiAgYXV0b2NvbXBsZXRlcmVzZXRtYXRjaGlwKCkge1xuICAgIGNvbnNvbGUubG9nKFwiY2xpY2sgaW4gYXV0b2NvbXBsZXRlcmVzZXRtYXRjaGlwIGNhbGxlZFwiLCB0aGlzLmZpbGVyZmllbGRkYXRhKTtcbiAgfVxuICAvLyBmb3IgcmVtb3Zpbmcgc2VsZWN0ZWQgdmFscyBpbiBhdXRvY29tcGxldGUgXG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdID0gbnVsbDtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0ucGF0Y2hWYWx1ZSgnJyk7XG4gICAgdGhpcy5pbnB1dGJsdXIodmFsLm5hbWUpO1xuICB9XG4gIHJlbW92ZWNoaXBtdWx0aXBsZSh2YWw6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvLyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0ucGF0Y2hWYWx1ZSh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdKTtcbiAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXS5sZW5ndGggPT0gMCkge1xuICAgICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS5wYXRjaFZhbHVlKCcnKTtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwubmFtZSk7XG5cbiAgfVxuICBzZXRhdXRvY29tcGxldGV2YWx1ZSh2YWw6IGFueSwgZmllbGQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdmZiBhdXRvIGNvbXBsZXRlIHNldCAnLCB2YWwsICcwMDAwMCcsIGZpZWxkLCBmaWVsZC5uYW1lKTtcblxuXG5cbiAgICBpZiAoZmllbGQubXVsdGlwbGUgPT0gbnVsbCB8fCB0eXBlb2YgZmllbGQubXVsdGlwbGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGlmICh2YWwgIT0gbnVsbCAmJiB2YWwua2V5ICE9IG51bGwpIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9IHZhbC5rZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5wdXNoKHZhbC5rZXkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5wYXRjaFZhbHVlKFwiXCIpO1xuICAgICAgdGhpcy5pbnB1dGJsdXIoZmllbGQubmFtZSk7XG4gICAgfVxuICAgIHRoaXMucmVsb2FkYXV0b2NvbXBsZXRlKGZpZWxkLm5hbWUpO1xuICAgIGNvbnNvbGUubG9nKFwiZmllbGQubmFtZVwiLCBmaWVsZC52YWx1ZSwgXCJvcG9wXCIsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS5wYXRjaFZhbHVlKFwiXCIpO1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLGF1dG9jb21wbGV0ZWRhdGE6IHZhbH0pO1xuXG4gICAgLy8gaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSAhPSBudWxsICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5sZW5ndGggPiAwKSB7XG4gICAgLy8gICBsZXQgdGVtcGFycjogYW55ID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbSkpKVxuICAgIC8vICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2ZpZWxkLm5hbWVdID0gdGVtcGFycjtcbiAgICAvLyB9XG5cblxuICB9XG5cblxuICBtYW5hZ2Vmcm9tY29udHJvbChmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbWFuYWdlIGNvbnRyb2wnLCBmaWVsZCwgdHlwZSwgZmllbGQubGVuZ3RoKTtcbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZC5uYW1lKSB7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkLm5hbWUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGRbJ25hbWUnXSwgJ2MnLCB5LCBmaWVsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHlwZSA9PSAncmVtb3ZlJyAmJiBmaWVsZC5uYW1lID09IG51bGwgJiYgZmllbGQubGVuZ3RoID4gMSkge1xuICAgICAgLy8gY29uc29sZS5sb2coZmllbGQubGVuZ3RoLCAnZmwnKTtcbiAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICBmb3IgKGNvbnN0IHogaW4gZmllbGQpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbeV0ubmFtZSA9PSBmaWVsZFt6XSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGRbel0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbW92ZWQgaW4gYXJyYXkgZm9ybSAnLCBmaWVsZFt6XSwgJ2MgYXInLCB5LCBmaWVsZCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ2FkZCcpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZGQgZm9ybScpO1xuICAgICAgaWYgKGZpZWxkLmFmdGVyICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuYWZ0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSArIDEsIDAsIGZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZGRlZCAuLicsIGZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAodHlwZW9mIChmaWVsZCkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gYXJyYXkgZm9ybSAgYWRkJyk7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIGZpZWxkKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkW3ZdICE9IG51bGwgJiYgZmllbGRbdl0ubmFtZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbdl0uYWZ0ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZFt2XSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVGb3JtKDEpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcnJheSBmaWVsZCBhZGRlZCAuLicsIGZpZWxkW3ZdWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxuICByZXNldGZvcm1kYXRhKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgdGhpcy5maWxlYXJyYXkgPSBbXTtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWUgPSBbXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSAnJztcbiAgfVxuXG5cbiAgY2hlY2tjaGFuZ2UoZmllbGQ6IGFueSwgaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkLCAnY2hhbmdlJywgaW5kZXgsICdpbmRleDInKTtcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQsIGZpZWxkdmFsOiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZSwgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUgfSk7XG4gICAgfVxuICAgIGlmIChmaWVsZC5kZXBlbmRlbnQgIT0gbnVsbCAmJiBmaWVsZC5kZXBlbmRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IHZjOiBhbnkgPSAwO1xuICAgICAgZm9yIChjb25zdCBuIGluIGZpZWxkLmRlcGVuZGVudCkge1xuXG4gICAgICAgIGlmIChmaWVsZC5kZXBlbmRlbnRbbl0uY29uZHZhbC50b1N0cmluZygpID09IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgICAvLyBsZXQgdGVtdmFsaWRhdGlvbnJ1bGV0OiBhbnkgPSBbXTtcbiAgICAgICAgICB2YysrO1xuICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUsIG5ldyBGb3JtQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQudmFsdWUsIHRlbXZhbGlkYXRpb25ydWxldCkpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdubm5ubicsICctLScsIHBhcnNlSW50KGluZGV4ICsgMSArIHBhcnNlSW50KHZjKSksICctLScsIHZjICsgaW5kZXggKyAxLCBpbmRleCwgdmMsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZFsnbmFtZSddKTtcbiAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoaW5kZXggKyBwYXJzZUludCh2YykpLCAwLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQpO1xuICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcblxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpLCAxKTtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGQubmFtZSk7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkJywgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkWyduYW1lJ10sICdjJywgeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG5cbiAgY3JlYXRlRm9ybShpbml0aWFsaXplOiBhbnkgPSAwKSB7XG4gICAgLyp0aGlzLmZvcm1Hcm91cCA9IHRoaXMuZm9ybUJ1aWxkZXIuZ3JvdXAoe1xuICAgICAgJ2VtYWlsJzogW251bGwsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oZW1haWxyZWdleCldLCB0aGlzLmNoZWNrSW5Vc2VFbWFpbF0sXG4gICAgICAnZnVsbG5hbWUnOiBbbnVsbCwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgIC8vICdwYXNzd29yZCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgdGhpcy5jaGVja1Bhc3N3b3JkXV0sXG4gICAgICAvLydkZXNjcmlwdGlvbic6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoNSksIFZhbGlkYXRvcnMubWF4TGVuZ3RoKDEwKV1dLFxuICAgICAgLy8ndmFsaWRhdGUnOiAnJ1xuICAgIH0pOyovXG4gICAgLy8gbGV0IGRlbW9BcnJheTphbnk9W107XG4gICAgaWYgKGluaXRpYWxpemUgPT0gMCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHt9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtR3JvdXAsICdmZycpXG4gICAgZm9yIChjb25zdCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl1dID09IG51bGwpIHtcbiAgICAgICAgY29uc3QgdGVtY29udHJvbGFycjogYW55ID0gW107XG4gICAgICAgIGNvbnN0IHRlbXZhbGlkYXRpb25ydWxlOiBhbnkgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2godGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCgnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnZmlsZScpIHtcbiAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkYicsIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lKTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvL3VzZSBmb3IgZGVsZXRlIGRhdGFcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmxvYWRmaWxlID0gMTtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBmYSBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnYnLCBmYSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmcicsIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLnVwbG9hZGVkID0gMTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0ubG9hZGZpbGUgPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvICE9ICcnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5hc3BlY3RyYXRpbyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvO1xuICAgICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsO1xuXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjIGluIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXSkge1xuICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmFzcGVjdHJhdGlvW2NdKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5pbWFnZWZpZWxkcyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmltYWdlZmllbGRzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVjb3VudFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdLmxlbmd0aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgICAgIC8vdXNlIGZvciBkZWxldGUgZGF0YVxuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5sb2FkZmlsZSA9IDE7XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdLmxvYWRmaWxlID0gMTtcblxuICAgICAgICAgICAgICAvLyBmb3IgKGxldCBjIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKSB7XG4gICAgICAgICAgICAgIC8vICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uYXNwZWN0cmF0aW9bY10pLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSwgJ2ZpbGVhcnJheScpXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSA9PSBudWxsKSB7IHRlbWNvbnRyb2xhcnIucHVzaChbXSk7IH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgY29uc3QgdGNoYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiJywgYiwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZS5pbmNsdWRlcyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYl0ua2V5KSkge1xuICAgICAgICAgICAgICAgICAgdGNoYXJyLnB1c2godHJ1ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgdGNoYXJyLnB1c2goZmFsc2UpOyB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLy8gcHVzaCB0aGUgdmFsXG4gICAgICAgICAgICAgIHRlbWNvbnRyb2xhcnIucHVzaCh0Y2hhcnIpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGNoJywgdGNoYXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZm9yIChjb25zdCB2IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zKSB7XG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCAoKT0+e1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLm1lc3NhZ2UgPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID0gJ05vdCBWYWxpZCAhISc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAncmVxdWlyZWQnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnbWF0Y2gnKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnNldFZhbGlkYXRvcnModGhpcy5jaGVja1Bhc3N3b3Jkcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAnYXV0b3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuYXV0b3JlcXVpcmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdwYXR0ZXJuJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucGF0dGVybih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heExlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heExlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbicpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21heCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1heCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21pbkxlbmd0aCcpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLm1pbkxlbmd0aCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS52YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gfSwwKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICAgICAgLy8gZGVtb0FycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdPW5ldyBGb3JtQ29udHJvbCgnJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2ltYWdlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSArICdfJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKS5jbGFzc0xpc3QuYWRkKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgICAgICAgIH0sIDQwMDApO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBsZXQgdGNodmFyOiBhbnkgPSBmYWxzZTtcbiAgICAgICAgICAvLyBsZXRcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndnYgPz8/ICcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSk7XG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUFycmF5KFtdKSk7XG4gICAgICAgICAgZm9yIChjb25zdCBqIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2pdLmtleSkpIHtcbiAgICAgICAgICAgICAgdGNodmFyID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7IHRjaHZhciA9IGZhbHNlOyB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbicsIG4sIGosIHRjaHZhcik7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgKyAnX18nICsgaiwgbmV3IEZvcm1Db250cm9sKHRjaHZhciwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgICAgIC8vIGlmKClcbiAgICAgICAgICAgIC8qY29uc3QgY29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIpOyAvLyBpZiBmaXJzdCBpdGVtIHNldCB0byB0cnVlLCBlbHNlIGZhbHNlXG4gICAgICAgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdIGFzIEZvcm1BcnJheSkucHVzaChjb250cm9sKTsqL1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRjaHZhcilcbiAgICAgICAgICAgIC8vIF0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvKnRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKGZhbHNlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2wodHJ1ZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICBdKSk7Ki9cbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh0ZW1jb250cm9sYXJyWzBdLCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1Db250cm9sKHsgdmFsdWU6IHRlbWNvbnRyb2xhcnJbMF0sIGRpc2FibGVkOiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5kaXNhYmxlZCB9LCB0ZW12YWxpZGF0aW9ucnVsZSkpO1xuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGF0IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F0IC4uLicsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0sIGF0LCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdHlwZW9mICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSkgPT0gJ29iamVjdCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLmtleSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXksICdtdWx0aSBhdXRvY29tcGxldGUgdHJpZ2dlcmVkICAhISAnKTtcbiAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IGZhbHNlKSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzaW5nbGUgYXV0byBjb21wbGV0ZSB0cmlnZ2VyIGJsb2NrJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuXG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZXQgYXV0byBjb21wbGV0ZSBzaW5nbGUgdHJpZ2dlcmVkJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbMF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vICduZXdDb250cm9sJywgbmV3IEZvcm1Db250cm9sKCcnLCBWYWxpZGF0b3JzLnJlcXVpcmVkKVxuICAgICAgfVxuICAgIH1cbiAgICAvLyA9dGhpcy5jaGVja1Bhc3N3b3Jkcyh0aGlzLmZvcm1Hcm91cCk7XG4gICAgLy8gdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKGRlbW9BcnJheSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCdmZycsZGVtb0FycmF5KTtcbiAgICAgIHRoaXMuc2hvd2Zvcm0gPSB0cnVlO1xuICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5zdWJtaXRhY3RpdmUgPSB0cnVlO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2dycCcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKTtcbiAgICB9LCAxMCk7XG5cbiAgfVxuXG4gIHNldENoYW5nZVZhbGlkYXRlKCkge1xuICAgIHRoaXMuZm9ybUdyb3VwLmdldCgndmFsaWRhdGUnKS52YWx1ZUNoYW5nZXMuc3Vic2NyaWJlKFxuICAgICAgKHZhbGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICh2YWxpZGF0ZSA9PSAnMScpIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS5zZXRWYWxpZGF0b3JzKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCgzKV0pO1xuICAgICAgICAgIHRoaXMudGl0bGVBbGVydCA9ICdZb3UgbmVlZCB0byBzcGVjaWZ5IGF0IGxlYXN0IDMgY2hhcmFjdGVycyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhWYWxpZGF0b3JzLnJlcXVpcmVkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ25hbWUnKS51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XG4gICAgICB9XG4gICAgKTtcbiAgfVxuICBzZXRwaG9uZW51bWJlclZhbGlkYXRlKGV2ZW50OiBhbnkpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LnZhbHVlLmxlbmd0aCA8IDE0KSB7XG4gICAgICBjb25zb2xlLmxvZyhcIm5vdCBjb3JyZWN0XCIpO1xuICAgICAgdGhpcy5udW1iZXJGb3JtYXRGbGFnID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJjb3JyZWN0XCIpO1xuICAgICAgdGhpcy5udW1iZXJGb3JtYXRGbGFnID0gZmFsc2U7XG4gICAgfVxuXG5cbiAgfVxuXG5cblxuXG4gIGNob29zZWltZyh2YWxzOiBhbnksIGZpZWxkczogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codmFscywgZmllbGRzKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaW1nd3JhcHBlcicpLmZvckVhY2goZWwgPT4ge1xuICAgICAgbGV0IGVsZW06IGFueTtcbiAgICAgIGVsZW0gPSBlbDtcbiAgICAgIC8vIGVsZW0uc3R5bGUudHJhbnNpdGlvbiA9IFwib3BhY2l0eSAwLjVzIGxpbmVhciAwc1wiO1xuICAgICAgLy8gZWxlbS5zdHlsZS5vcGFjaXR5ID0gMC41O1xuICAgICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdpbWFnZWNob2ljZWFjdGl2ZScpO1xuICAgIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCdpbWd3cmFwXycgKyBmaWVsZHMubmFtZSArICdfJyArIHZhbHMua2V5KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZHMubmFtZV0ucGF0Y2hWYWx1ZSh2YWxzLmtleSk7XG4gIH1cbiAgY2hlY2tQYXNzd29yZHMoZ3JvdXA6IEZvcm1Hcm91cCkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG4gICAgY29uc3QgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIGlmIChjb25maXJtUGFzcyA9PSBudWxsIHx8IGNvbmZpcm1QYXNzID09ICcnKSB7XG4gICAgICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIH1cbiAgICBpZiAocGFzcyAhPSBjb25maXJtUGFzcykge1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7IG1hdGNoOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIHsgbWF0Y2g6IHRydWUgfTtcbiAgICB9XG5cbiAgICAvLyByZXR1cm4gcGFzcyA9PT0gY29uZmlybVBhc3MgPyBudWxsIDogeyBub3RTYW1lOiB0cnVlIH1cbiAgfVxuICBjaGVja1Bhc3N3b3JkKGNvbnRyb2wpIHtcbiAgICBjb25zdCBlbnRlcmVkUGFzc3dvcmQgPSBjb250cm9sLnZhbHVlO1xuICAgIGNvbnN0IHBhc3N3b3JkQ2hlY2sgPSAvXig/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKlswLTldKSg/PS57OCx9KS87XG4gICAgcmV0dXJuICghcGFzc3dvcmRDaGVjay50ZXN0KGVudGVyZWRQYXNzd29yZCkgJiYgZW50ZXJlZFBhc3N3b3JkKSA/IHsgcmVxdWlyZW1lbnRzOiB0cnVlIH0gOiBudWxsO1xuICB9XG4gIGF1dG9yZXF1aXJlZChncm91cDogYW55KSB7IC8vIGhlcmUgd2UgaGF2ZSB0aGUgJ3Bhc3N3b3JkcycgZ3JvdXBcblxuICAgIGZvciAoY29uc3QgYiBpbiBncm91cCkge1xuICAgICAgaWYgKGdyb3VwW2JdLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnMgIT0gbnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXSAhPSBudWxsICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zWzBdLnJ1bGUgPT0gJ2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwW2JdLm5hbWVdID09IG51bGwpIHtcblxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXS5zZXRFcnJvcnMoeyBhdXRvcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICAgIHJldHVybiB7IGF1dG9yZXF1aXJlZDogdHJ1ZSB9O1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnYmdycnInLGdyb3VwLGdyb3VwLm5hbWUpO1xuICAgIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2dyb3VwLm5hbWVdICE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9ucyE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXSE9bnVsbCAmJiBncm91cC52YWxpZGF0aW9uc1swXS5ydWxlPT0nYXV0b3JlcXVpcmVkJyAmJiB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZ3JvdXAubmFtZV09PW51bGwpe1xuXG5cblxuICAgIC8vIGxldCBwYXNzID0gZ3JvdXAuY29udHJvbHMucGFzc3dvcmQudmFsdWU7XG4gICAgLy8gbGV0IGNvbmZpcm1QYXNzID0gZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnZhbHVlO1xuICAgIC8vIGlmKGNvbmZpcm1QYXNzPT1udWxsIHx8IGNvbmZpcm1QYXNzPT0nJyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHtyZXF1aXJlZDp0cnVlfSk7XG4gICAgLy8gICByZXR1cm4geyByZXF1aXJlZDogdHJ1ZSB9O1xuICAgIC8vIH1cbiAgICAvLyBpZihwYXNzIT1jb25maXJtUGFzcyl7XG4gICAgLy8gICBncm91cC5jb250cm9scy5jb25maXJtcGFzc3dvcmQuc2V0RXJyb3JzKHsnbWF0Y2gnOnRydWV9KTtcbiAgICAvLyAgIHJldHVybiB7bWF0Y2g6dHJ1ZX07XG4gICAgLy8gfVxuXG4gICAgLy8gcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cblxuICBjaGVja0luVXNlRW1haWwoY29udHJvbCkge1xuICAgIC8vIG1pbWljIGh0dHAgZGF0YWJhc2UgYWNjZXNzXG4gICAgY29uc3QgZGIgPSBbJ3RvbnlAZ21haWwuY29tJ107XG4gICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKG9ic2VydmVyID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCByZXN1bHQgPSAoZGIuaW5kZXhPZihjb250cm9sLnZhbHVlKSAhPT0gLTEpID8geyBhbHJlYWR5SW5Vc2U6IHRydWUgfSA6IG51bGw7XG4gICAgICAgIG9ic2VydmVyLm5leHQocmVzdWx0KTtcbiAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcbiAgICAgIH0sIDQwMDApO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0RXJyb3IoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2dldEVycm9yJywgZGF0YSk7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncmVxdWlyZWQnKSA/ICdGaWVsZCBpcyByZXF1aXJlZCcgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdlbWFpbCcpLmhhc0Vycm9yKCdwYXR0ZXJuJykgPyAnTm90IGEgdmFsaWQgZW1haWxhZGRyZXNzJyA6XG4gICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcignYWxyZWFkeUluVXNlJykgPyAnVGhpcyBlbWFpbGFkZHJlc3MgaXMgYWxyZWFkeSBpbiB1c2UnIDogJyc7XG4gIH1cblxuICBnZXRFcnJvclBhc3N3b3JkKCkge1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ3Bhc3N3b3JkJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQgKGF0IGxlYXN0IGVpZ2h0IGNoYXJhY3RlcnMsIG9uZSB1cHBlcmNhc2UgbGV0dGVyIGFuZCBvbmUgbnVtYmVyKScgOlxuICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlbWVudHMnKSA/ICdQYXNzd29yZCBuZWVkcyB0byBiZSBhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlcicgOiAnJztcbiAgfVxuXG4gIG9uU3VibWl0KHBvc3QpIHtcbiAgICB0aGlzLnBvc3QgPSBwb3N0O1xuICAgIGNvbnN0IHRlbXBmb3JtdmFsOiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IHggaW4gdGhpcy5mb3JtR3JvdXAuY29udHJvbHMpIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLmVycm9ycywgeCwgJ2VycicpO1xuICAgICAgLy8gaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsaWQpe1xuICAgICAgLy8gY29uc29sZS5sb2coJ3gnLHRoaXMuZm9ybUdyb3VwKTtcbiAgICAgIGNvbnN0IGIgPSB4LnNwbGl0KCdfXycpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2InLGIsYi5sZW5ndGgsYlswXSk7XG5cblxuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2ZpbGUnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlID09IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCkge1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0sICc+Pj8/PT09PSBub3QgbnVsbCBzdWJtaXQgKysrKycpXG5cbiAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS51cGxvYWRlZCAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnVwbG9hZGVkID09IDEgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ubG9hZGZpbGUgPT0gMSkge1xuICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkOiAxNTg5MTc0NDc3NTA0XG4gICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWREYXRlOiBNb24gTWF5IDExIDIwMjAgMTA6IDUxOiAxNyBHTVQgKyAwNTMwKEluZGlhIFN0YW5kYXJkIFRpbWUpIHsgfVxuICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAvLyBzaXplOiAxMzUwOTZcbiAgICAgICAgICAgIC8vIHR5cGU6IFwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuXG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLCAnPj4/PyBmaWxlIHN1Ym1pdCBzcycpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgJz4+Pz89PT09IGZpbGUgc3VibWl0IGxvYWRmaWxlIDEgPT09JylcblxuICAgICAgICAgICAgY29uc3QgdGZpbGU6IGFueSA9IHt9O1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udHlwZSA9PSAnaW1hZ2UvanBlZycpIHtcblxuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYXNwZWN0cmF0aW8gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGZpbGUuYXNwZWN0cmF0aW8gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5hc3BlY3RyYXRpbztcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uY3JvcHBlZGltYWdlYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5jcm9wcGVkaW1hZ2VhcnJheVtjXS5maWxlO1xuICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmNyb3BwZWRpbWFnZWFycmF5W2NdLmJhc2U2NDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ZmlsZS5jcm9wcGVkaW1hZ2VhcnJheSA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmNyb3BwZWRpbWFnZWFycmF5O1xuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG5cblxuXG4gICAgICAgICAgICB0ZmlsZS5maWxlc2VydmVybmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmZpbGVzZXJ2ZXJuYW1lO1xuICAgICAgICAgICAgdGZpbGUubmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLm5hbWU7XG4gICAgICAgICAgICB0ZmlsZS5zaXplID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2l6ZTtcbiAgICAgICAgICAgIHRmaWxlLnR5cGUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS50eXBlO1xuICAgICAgICAgICAgdGZpbGUucGF0aCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnBhdGg7XG4gICAgICAgICAgICB0ZmlsZS5idWNrZXQgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5idWNrZXQ7XG4gICAgICAgICAgICB0ZmlsZS5iYXNldXJsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYmFzZXVybDtcblxuICAgICAgICAgICAgdGZpbGUuaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZmlsZSwgJ3NpbmdsZSB0ZmlsZT4+JywpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ubG9hZGZpbGUgPT0gMCkge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgJz4+Pz89PT09IGZpbGUgbG9hZGZpbGUgMCA9PT0nKVxuXG4gICAgICAgICAgICBjb25zdCB0ZmlsZTogYW55ID0ge307XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKHRmaWxlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdmaWxlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBjb25zdCB0ZmlsZWFycjogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBnIGluIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLCAndGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gKz09PT09PT09JylcblxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udXBsb2FkZWQgPT0gMSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXSwgJ3RoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddJylcbiAgICAgICAgICAgICAgLy8gZmlsZXNlcnZlcm5hbWU6IFwiVGVzdC0xNTg5MjE2OTkyMzkyTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgICAvLyBsYXN0TW9kaWZpZWQ6IDE1ODkxNzQ0Nzc1MDRcbiAgICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkRGF0ZTogTW9uIE1heSAxMSAyMDIwIDEwOiA1MTogMTcgR01UICsgMDUzMChJbmRpYSBTdGFuZGFyZCBUaW1lKSB7IH1cbiAgICAgICAgICAgICAgLy8gbmFtZTogXCJNeSBTYXZlZCBTY2hlbWEuanNvblwiXG4gICAgICAgICAgICAgIC8vIHNpemU6IDEzNTA5NlxuICAgICAgICAgICAgICAvLyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICAvLyB1cGxvYWRlZDogMVxuICAgICAgICAgICAgICBjb25zdCB0ZmlsZTogYW55ID0ge307XG5cblxuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS50eXBlID09ICdpbWFnZS9qcGcnIHx8IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnR5cGUgPT0gJ2ltYWdlL2pwZWcnKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uYXNwZWN0cmF0aW8gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB0ZmlsZS5hc3BlY3RyYXRpbyA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmFzcGVjdHJhdGlvO1xuICAgICAgICAgICAgICAgICAgdGZpbGUuY3JvcHBlZGltYWdlYXJyYXkgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5jcm9wcGVkaW1hZ2VhcnJheTtcblxuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5jcm9wcGVkaW1hZ2VhcnJheSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uY3JvcHBlZGltYWdlYXJyYXlbY10uYmFzZTY0O1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uY3JvcHBlZGltYWdlYXJyYXlbY10uZmlsZTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdGZpbGUuY3JvcHBlZGltYWdlYXJyYXkgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5jcm9wcGVkaW1hZ2VhcnJheTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIHRmaWxlLmZpbGVzZXJ2ZXJuYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmlsZXNlcnZlcm5hbWU7XG4gICAgICAgICAgICAgIHRmaWxlLm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5uYW1lO1xuICAgICAgICAgICAgICB0ZmlsZS5zaXplID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uc2l6ZTtcbiAgICAgICAgICAgICAgdGZpbGUudHlwZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnR5cGU7XG4gICAgICAgICAgICAgIHRmaWxlLnBhdGggPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5wYXRoO1xuICAgICAgICAgICAgICB0ZmlsZS5idWNrZXQgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5idWNrZXQ7XG4gICAgICAgICAgICAgIHRmaWxlLmJhc2V1cmwgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5iYXNldXJsO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRmaWxlLCAndGZpbGUrKycpXG5cbiAgICAgICAgICAgICAgLy8gdGZpbGUuaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkczsgZmxkc1xuXG4gICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmltYWdlZmllbGRzLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHMsICdmbGRzICcpXG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5pbWFnZWZpZWxkcywgJ2ltYWdlZmllbGRzJylcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAgIHRmaWxlLmltZ2ZpZWxkcyA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHM7XG5cbiAgICAgICAgICAgICAgICAgIHRmaWxlLmZsZHMgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzO1xuXG4gICAgICAgICAgICAgICAgICAvLyBmb3IgKGxldCBpbWcgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uaW1hZ2VmaWVsZHMpIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgZm9yIChsZXQgZmwgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcykge1xuICAgICAgICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzW2ZsXS5rZXkgPT0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uaW1hZ2VmaWVsZHNbaW1nXS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAvLyAgICAgICBjb25zb2xlLmxvZygnaW1hZ2VmaWVsZHMnLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5pbWFnZWZpZWxkc1tpbWddKVxuICAgICAgICAgICAgICAgICAgLy8gICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uaW1hZ2VmaWVsZHNbaW1nXS52YWwgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzW2ZsXS52YWx1ZVxuICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgICAvLyB0ZmlsZS5pbWdmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgICAgICAgLy8gdGZpbGUuaW1nZmlsPXRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHM7XG5cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0ZmlsZSsrKys+JywgdGZpbGUpXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGZpbGVhcnIucHVzaCh0ZmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS51cGxvYWRlZCA9PSAyKSB7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCAnPT09PT09PT0rKysrIHVwbG9hZCAyJylcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZWFycik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJykge1xuXG4gICAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZSAhPSBudWxsICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsKSB7XG5cblxuICAgICAgICAgICAgY29uc29sZS5sb2coJyBhdXRvdmFsIGluIGZvcm0gYmVmb3JlIHBhdGNoICcsIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsdWUsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnZhbGlkKTtcblxuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0pO1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnIGF1dG92YWwgaW4gZm9ybSBhZnRlciBwYXRjaCcsIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSwgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsdWUsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnZhbGlkKTtcblxuXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZSAhPSBudWxsICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbGlkYXRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3InLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IG51bGwgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIGFmdGVyICcsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3Igc2V0JywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNldEVycm9ycyh7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQgYWZ0ZXIgJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoeCA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRlbXBmb3JtdmFsW3hdID09IG51bGwpIHtcbiAgICAgICAgICAgIHRlbXBmb3JtdmFsW3hdID0gdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKGIubGVuZ3RoID4gMSAmJiBiWzBdID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAhPSB4ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSAhPSBudWxsKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FhYWFmZi4uLicpO1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWxba10ua2V5ID09IGJbMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgdGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0gPSBbXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGVtcGZvcm12YWxbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucHVzaChiWzFdKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZ3YnLCBiWzFdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLy9mb3IgbXVsdGlwbGUgZW1haWwgYWRkXG4gICAgICAgIC8vIGlmKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2VtYWlsJyl7XG4gICAgICAgIC8vICAgaWYodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWUgPT0gdHJ1ZSl7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXSwnPT10aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXSsrJyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZSwnPz8nLHRlbXBmb3JtdmFsLCc+Pj4nLGJbMF0pXG4gICAgICAgIC8vICAgICAvLyBmb3IobGV0IGkgIGluIHRlbXBmb3JtdmFsKXtcbiAgICAgICAgLy8gICAgIC8vICAgaWYodGVtcGZvcm12YWxbaV0gPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZS5tYXRjaCgnL2VtYWlsL2cnKSl7XG4gICAgICAgIC8vICAgICAvLyAgICAgY29uc29sZS5sb2codGVtcGZvcm12YWxbaV0sJ3RlbXBmb3JtdmFsW2ldJylcbiAgICAgICAgLy8gICAgIC8vICAgfVxuICAgICAgICAvLyAgICAgLy8gfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuXG5cblxuICAgICAgICAvLyBlbHNle1xuICAgICAgICBpZiAoeCA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICYmIHRlbXBmb3JtdmFsW3hdID09IG51bGwpIHtcbiAgICAgICAgICB0ZW1wZm9ybXZhbFt4XSA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIC8vICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMsIHgsICdlcnIyMicpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwb3N0LCAncG9zdCcsIHRoaXMuZm9ybUdyb3VwLnZhbGlkLCB0aGlzLmZvcm1kYXRhdmFsLCB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCwgJ2ZmZmYnLCB0ZW1wZm9ybXZhbCk7XG5cbiAgICAvLyBpZiAodGhpcy5waG9uZW51bWJlclZhbHVlLmxlbmd0aDwxNCkge1xuICAgIC8vICAgdGhpcy5fc25hY2tCYXIub3BlbihcIlBsZWFzZSBFbnRlciBhIHZhbGlkIG51bWJlclwiLFwib2tcIix7XG4gICAgLy8gICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgLy8gICB9KVxuICAgIC8vICAgcmV0dXJuO1xuICAgIC8vIH1cbiAgICB0aGlzLmZpbmRJbnZhbGlkQ29udHJvbHMoKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlc29mIGZvcm0gZGF0YVwiLHRoaXMuZm9ybUdyb3VwLnZhbHVlKTtcblxuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLnZhbGlkKSB7XG4gICAgICAvLyBpZiAodGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludCAhPSBudWxsIHx8IHRoaXMuZm9ybWRhdGF2YWwuYXBpVXJsKSB7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgY29uc3QgbGluazogYW55ID0gdGhpcy5mb3JtZGF0YXZhbC5hcGlVcmwgKyB0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50O1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICAgIHNvdXJjZS5kYXRhID0gdGhpcy5mb3JtR3JvdXAudmFsdWU7XG5cbiAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLnNlY3JldCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4gIT0gbnVsbCkge1xuICAgICAgICBzb3VyY2Uuc2VjcmV0ID0gdGhpcy5mb3JtZGF0YXZhbC5zZWNyZXQ7XG4gICAgICAgIHNvdXJjZS5qd3R0b2tlbiA9IHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmVuZHBvaW50ICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludCAhPSAnJykge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRoaXMuZm9ybUdyb3VwLnZhbHVlKysrKysrK1wiLCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG4gICAgICAgIC8vIHRoaXMuZm9ybURpcmVjdGl2ZS5yZXNldCgpO1xuICAgICBcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgXG5cbiAgICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiByZXN1bHQuc3RhdHVzLCBmcm9tdmFsOiByZXN1bHQgfSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiB0aGlzLmZvcm1kYXRhdmFsLnN1Y2Nlc3NtZXNzYWdlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZvcm1EaXJlY3RpdmUucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWU9W107XG4gICAgICAgICAgICB0aGlzLmZpbGVhcnJheT1bXTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVkJywgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJycgJiYgdGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gJy8nKSB7XG4gICAgICAgICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiByZXN1bHQuc3RhdHVzLCBmcm9tdmFsOiByZXN1bHQgfSk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZDogJ2Zyb21zdWJtaXRzZXJ2ZXJlcnJvcicsIGZpZWxkdmFsOiAnc2VydmVyZXJyb3InLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSB9KTtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTsgLy9kaXNhYmxlIGxvYWRlciBcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgIGZpZWxkOiAnZnJvbXN1Ym1pdCcsIGZpZWxkdmFsOiAnc3VjY2VzcycsIGZvcm1kYXRhdmFsOiB0aGlzLmZvcm1kYXRhdmFsLCBzb3VyY2U6IHNvdXJjZSwgbG9hZGluZzogdGhpcy5sb2FkaW5nLFxuICAgICAgICAgIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcblxuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIC8vcmVzZXQgYXV0b2NvbXBsZXRlIGZpZWxkIHZhbHMgdG8gcGF0Y2ggZm9yIHVpIG9ubHkgcmVhc29uICEhIHNvIHRoYXQgdXNlciBjYW4ndCBzZWUgc2VsZWN0ZWQgdmFscyBcblxuICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9IG51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICBsZXQgdmZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udmFsaWQpIHZmbGFnID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wYXRjaFZhbHVlKCcnKTtcbiAgICAgICAgICAvLyBmb3IgbWFraW5nIHZhbGlkIGF1dG8gZmllbGQgdW50b3VjaGVkIGFnYWluIHNvIHRoYXQgdXNlciBkb250IHNlZSBlcnJvciBpZiB2YWx1IGlzIHNlbGVjdGVkIGFscmVhZHkgISEgXG4gICAgICAgICAgaWYgKHZmbGFnID09IHRydWUpIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLm1hcmtBc1VudG91Y2hlZCgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdGVycm9yJywgZmllbGR2YWw6ICd2YWxpZGF0aW9uZXJyb3InLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgbG9hZGluZzogdGhpcy5sb2FkaW5nIH0pO1xuICAgICAgdGhpcy5maW5kSW52YWxpZENvbnRyb2xzKCk7XG4gICAgICB0aGlzLnNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpO1xuICAgIH1cblxuICB9XG4gIHB1YmxpYyBmaW5kSW52YWxpZENvbnRyb2xzKCkge1xuICAgIGNvbnN0IGludmFsaWQgPSBbXTtcbiAgICBjb25zdCBjb250cm9scyA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzO1xuICAgIGZvciAoY29uc3QgbmFtZSBpbiBjb250cm9scykge1xuICAgICAgaWYgKGNvbnRyb2xzW25hbWVdLmludmFsaWQpIHtcbiAgICAgICAgaW52YWxpZC5wdXNoKG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhcImZpbmRJbnZhbGlkQ29udHJvbHNcIiwgaW52YWxpZCk7XG5cbiAgICByZXR1cm4gaW52YWxpZDtcbiAgfVxuICBwcml2YXRlIHNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpIHtcbiAgICBjb25zdCBmaXJzdEludmFsaWRDb250cm9sOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0gLm5nLWludmFsaWRcIlxuICAgICk7XG4gICAgY29uc29sZS5sb2coXCJmaXJzdEludmFsaWRDb250cm9sXCIsIGZpcnN0SW52YWxpZENvbnRyb2wpO1xuXG4gICAgd2luZG93LnNjcm9sbCh7XG4gICAgICB0b3A6IHRoaXMuZ2V0VG9wT2Zmc2V0KGZpcnN0SW52YWxpZENvbnRyb2wpLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldFRvcE9mZnNldChjb250cm9sRWw6IEhUTUxFbGVtZW50KTogbnVtYmVyIHtcbiAgICBjb25zdCBsYWJlbE9mZnNldCA9IDUwO1xuICAgIGlmIChjb250cm9sRWwgPT0gbnVsbCkge1xuICAgICAgY29uc29sZS5sb2coXCJjb250cm9sRWxcIiwgY29udHJvbEVsKTtcblxuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb250cm9sRWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgd2luZG93LnNjcm9sbFkgLSBsYWJlbE9mZnNldDtcbiAgICB9XG5cbiAgfSBwcml2YXRlIGVsOiBFbGVtZW50UmVmXG5cblxuICBmaWxlQ2hhbmdlRXZlbnQoZXZlbnQ6IGFueSk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKFwiY2hhbmdlIGV2ZW50IGhpdHRlZFwiLCBldmVudCk7XG4gICAgdGhpcy5pbWFnZUNoYW5nZWRFdmVudCA9IGV2ZW50O1xuICB9XG5cblxuICBzaW5nbGVpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBmaWVsZCwgaXZhbCwgY2kpIHtcbiAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5jcm9wcGVkSW1hZ2VbY2ldID0gZXZlbnQuYmFzZTY0O1xuXG5cbiAgICAvLyBmb3IgKGxldCBjIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmFzcGVjdHJhdGlvKSB7XG4gICAgLy8gICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5hc3BlY3RyYXRpb1tjXSk7XG4gICAgLy8gfVxuXG4gICAgLy8gZGVsZXRlIGV2ZW50LmJhc2U2NDtcbiAgICAvLyBkZWxldGUgZXZlbnQuZmlsZTtcbiAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXS5jcm9wcGVkaW1hZ2VhcnJheVtjaV0gPSBldmVudDtcblxuICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmNyb3BwZWRJbWFnZVtjaV0sICd0aGlzLmNyb3BwZWRJbWFnZT09PT4+JylcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgJ2V2ZW50KysrNjQ9PT09PScsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLCBmaWVsZCwgY2kpO1xuXG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsICdmaWVsZD09PT09JylcblxuICB9XG5cbiAgbXVsdGlwbGVpbWFnZUNyb3BwZWQoZXZlbnQ6IEltYWdlQ3JvcHBlZEV2ZW50LCBmaWxlcywgaXZhbCwgY2ksIGZpLCBmbGR2YWwpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhldmVudCwgJ2V2ZW50KysrNjQnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tpdmFsXSwgZmlsZXMsIGl2YWwsIGNpLCAnKysrKysrKysrKysrKysrKycsIGZpLCBmbGR2YWwpXG4gICAgZmxkdmFsW2ZpXS5jcm9wcGVkSW1hZ2VbY2ldID0gZXZlbnQuYmFzZTY0O1xuXG4gICAgZmxkdmFsW2ZpXS5jcm9wcGVkaW1hZ2VhcnJheVtjaV0gPSBldmVudDtcblxuICAgIGZvciAobGV0IGMgaW4gZmxkdmFsW2ZpXS5hc3BlY3RyYXRpbykge1xuICAgICAgZmxkdmFsW2ZpXS5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcihmbGR2YWxbZmldLmFzcGVjdHJhdGlvW2NdKTtcbiAgICB9XG5cbiAgICAvLyB0aGlzLmNyb3BwZWRJbWFnZSA9IGV2ZW50LmJhc2U2NDtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWxlcywgJ3RoaXMuY3JvcHBlZEltYWdlIG91dHB1dD09PT4+JylcbiAgfVxuXG4gIGltYWdlTG9hZGVkKCkge1xuICAgIC8vIHNob3cgY3JvcHBlclxuICB9XG5cbiAgY3JvcHBlclJlYWR5KCkge1xuICAgIC8vIGNyb3BwZXIgcmVhZHlcbiAgfVxuXG4gIGxvYWRJbWFnZUZhaWxlZCgpIHtcbiAgICAvLyBzaG93IG1lc3NhZ2VcbiAgfVxuXG4gIG9wZW5zaW5nbGVpbWFnZWNyb3AodmFsKSB7XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCAnPT09PT09PT0nKTtcblxuICAgIHZhbC5jcm9wcGVkaW1hZ2VhcnJheSA9IFtdO1xuICAgIHZhbC5jcm9wcGVkSW1hZ2UgPSBbXTtcblxuICAgIC8vIGZvciAobGV0IGMgaW4gdmFsLmFzcGVjdHJhdGlvKSB7XG4gICAgLy8gICB2YWwuYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIodmFsLmFzcGVjdHJhdGlvW2NdKTtcbiAgICAvLyB9XG5cbiAgICB2YXIgaW1nVXJsID0gJ2h0dHBzOi8vJyArIHZhbC52YWx1ZS5idWNrZXQgKyAnLnMzLmFtYXpvbmF3cy5jb20vJyArIHZhbC52YWx1ZS5wYXRoICsgdmFsLnZhbHVlLmZpbGVzZXJ2ZXJuYW1lO1xuXG4gICAgdGhpcy5nZXRJbWFnZXRvRGF0YVVSTChpbWdVcmwsIGZ1bmN0aW9uIChkYXRhVXJsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhVXJsKVxuICAgICAgdmFsLmltYWdlVXJsID0gZGF0YVVybDtcbiAgICAgIHZhbC52YWx1ZSA9IG51bGw7XG4gICAgfSlcbiAgICAvLyB2YWwuZWRpdEltYWdlVXJsID0gJ2h0dHBzOi8vJyArIHZhbC52YWx1ZS5idWNrZXQgKyAnLnMzLmFtYXpvbmF3cy5jb20vJyArIHZhbC52YWx1ZS5wYXRoICsgdmFsLnZhbHVlLmZpbGVzZXJ2ZXJuYW1lO1xuICB9XG5cbiAgb3BlbnNpbmdsZWltYWdlY3JvcGZvcm11bHRpcGxlKHZhbCkge1xuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICc9PT09PT09PScpO1xuXG4gICAgdmFsLmNyb3BwZWRpbWFnZWFycmF5ID0gW107XG4gICAgdmFsLmNyb3BwZWRJbWFnZSA9IFtdO1xuXG4gICAgLy8gZm9yIChsZXQgYyBpbiB2YWwuYXNwZWN0cmF0aW8pIHtcbiAgICAvLyAgIHZhbC5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih2YWwuYXNwZWN0cmF0aW9bY10pO1xuICAgIC8vIH1cblxuICAgIHZhciBpbWdVcmwgPSAnaHR0cHM6Ly8nICsgdmFsLmJ1Y2tldCArICcuczMuYW1hem9uYXdzLmNvbS8nICsgdmFsLnBhdGggKyB2YWwuZmlsZXNlcnZlcm5hbWU7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpbWdVcmwsICdpbWdVcmwnKVxuXG4gICAgdGhpcy5nZXRJbWFnZXRvRGF0YVVSTChpbWdVcmwsIGZ1bmN0aW9uIChkYXRhVXJsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkYXRhVXJsKVxuICAgICAgdmFsLmltYWdlVXJsID0gZGF0YVVybDtcbiAgICB9KVxuICB9XG5cblxuICAvLyBnZXQgSW1hZ2UgdG8gRGF0YSBVUkxcbiAgZ2V0SW1hZ2V0b0RhdGFVUkwodXJsLCBjYWxsYmFjaykge1xuICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgICByZWFkZXIub25sb2FkZW5kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYWxsYmFjayhyZWFkZXIucmVzdWx0KTtcbiAgICAgIH1cbiAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKHhoci5yZXNwb25zZSk7XG4gICAgfTtcbiAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InO1xuICAgIHhoci5zZW5kKCk7XG4gIH1cblxufVxuIl19