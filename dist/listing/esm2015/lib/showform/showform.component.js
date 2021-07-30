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
// import { CKEditorComponent } from "ng2-ckeditor";
// import {MatSnackBar} from "@angular/material/snack-bar";
export class ShowformComponent {
    // public ckeConfig:any={};
    /**
     * @param {?} formBuilder
     * @param {?} _apiService
     * @param {?} _snackBar
     * @param {?} router
     * @param {?} elementRef
     */
    constructor(formBuilder, _apiService, _snackBar, router, elementRef) {
        // console.log(this.minDate, 'today===>', this.maxDate)
        this.formBuilder = formBuilder;
        this._apiService = _apiService;
        this._snackBar = _snackBar;
        this.router = router;
        this.elementRef = elementRef;
        // @ViewChild("myckeditor") ckeditor: CKEditorComponent;
        this.formatFlag = false;
        // public minDate = new Date(2020, 8, 24);
        // public maxDate = new Date(2020, 8, 31);
        this.dateflag = false;
        this.PasswordVal = '';
        this.externalDataVal = [];
        this.customlistenbuttons = {};
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
        // console.log('cc', this.formGroup.controls[val].value, data.val);
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
    /**
     * @param {?} val
     * @return {?}
     */
    reloadautocomplete(val) {
        this.currentautocomplete = val.name;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    removechipsingle(val) {
        this.autocompletefiledvalue[val.name] = null;
    }
    /**
     * @param {?} val
     * @param {?} index
     * @return {?}
     */
    removechipmultiple(val, index) {
        this.autocompletefiledvalue[val.name].splice(index, 1);
        if (this.autocompletefiledvalue[val.name].length == 0) {
            this.autocompletefiledvalue[val.name] = null;
        }
    }
    /**
     * @param {?} val
     * @param {?} field
     * @return {?}
     */
    setautocompletevalue(val, field) {
        console.log('ff auto complete set ', val, '00000', field);
        if (field.multiple == null || typeof field.multiple == 'undefined') {
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
                console.log("this.formGroup.value", this.formGroup.value);
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
            this.onFormFieldChange.emit({ field: 'fromsubmiterror', fieldval: 'validationerror', fromval: this.formGroup.value, loading: this.loading });
            this.scrollToFirstInvalidControl();
        }
    }
    /**
     * @private
     * @return {?}
     */
    scrollToFirstInvalidControl() {
        /** @type {?} */
        const firstInvalidControl = this.elementRef.nativeElement.querySelector("form .ng-invalid");
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
        return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
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
                template: "<!--<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\">My Reactive Form with Material</span>\n</mat-toolbar>-->\n\n\n\n\n\n<section *ngIf=\"loading == true\" class=\"example-section\">\n    <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n    </mat-progress-bar>\n</section>\n<div class=\"container\" *ngIf=\"showform; else forminfo\" novalidate>\n\n    <form [formGroup]=\"formGroup\" (ngSubmit)=\"onSubmit(formGroup.value)\" class=\"form\">\n\n        <ng-container *ngIf=\"formdataval.fields!=null && formdataval.fields.length>0\">\n            <ng-container *ngFor=\"let fields of formdataval.fields ; let ival=index;\">\n\n                <div class=\"form_field_wrapper form_field_wrapper{{fields.name}}\">\n                    <mat-card class=\"form_header_{{fields.name}}\"\n                        *ngIf=\"fields.heading!=null && formGroup.controls[fields.name]!=null \"\n                        [innerHTML]=\"fields.heading\">\n                    </mat-card>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='select'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- for select-->\n                        <!-- <div>ff</div> -->\n                        <mat-label> Select {{fields.label}} </mat-label>\n                        <mat-select (blur)=\"inputblur(fields.name)\" (closed)=\"inputblur(fields.name)\"\n                            (selectionChange)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                            [multiple]=\"fields.multiple?true:false\">\n                            <mat-option *ngFor=\"let data of fields.val\" [value]=\"data.val\"> {{data.name}}</mat-option>\n                        </mat-select>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='image'  )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <div>\n                            <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                            </mat-label>\n                        </div>\n\n                        <div>\n                            <ng-container *ngFor=\"let imgvals of fields.val\">\n                                <span class=\"imgwrapper imgwrap_{{fields.name}}_{{imgvals.key}}\">\n                                    <img (click)=\"chooseimg(imgvals,fields)\" src=\"{{imgvals.image}}\">\n                                </span>\n                            </ng-container>\n                        </div>\n\n\n\n                        <input (blur)=\"inputblur(fields.name)\" type=\"hidden\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='checkbox' && fields.multiple==null )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n                        <mat-checkbox *ngIf=\"fields.multiple ==null && !fields.multiple\" class=\" example-margin\"\n                            (blur)=\"inputblur(fields.name)\" (change)=\"checkchange(fields,ival)\"\n                            [formControlName]=\"fields.name\" [labelPosition]=\"fields.labelPosition\"> {{fields.label}}\n                        </mat-checkbox>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n                    </div>\n                    <div *ngIf=\"fields.name!=null && (fields.type=='checkbox' ) && fields.multiple !=null && fields.multiple==true \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input   (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"  [formControlName]=\"fields.name\">-->\n                        <mat-label *ngIf=\"fields.multiple !=null && fields.multiple\" [innerHTML]=\"fields.label\">\n                        </mat-label>\n\n                        <ng-container *ngIf=\"fields.multiple !=null && fields.multiple\">\n                            <ng-container *ngFor=\"let vals of fields.val , let vi=index;\">\n                                <mat-checkbox class=\"example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                    (change)=\"checkchange(fields,ival)\" formControlName=\"{{fields.name}}__{{vi}}\"\n                                    [value]=\"vals.key\">{{vals.val}}\n                                </mat-checkbox>\n\n                            </ng-container>\n                        </ng-container>\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <!-- <ng-container *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                        <mat-error >\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span *ngIf=\"formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n\n                    </ng-container>-->\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='radio' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <mat-radio-group aria-labelledby=\"example-radio-group-label\"\n                            class=\"example-radio-group form_field_{{fields.name}}\" [formControlName]=\"fields.name\">\n                            <mat-radio-button class=\" example-radio-button\" (blur)=\"inputblur(fields.name)\"\n                                (change)=\"checkchange(fields,ival)\" *ngFor=\"let vals of fields.val\" [value]=\"vals.key\">\n                                {{vals.val}}\n                            </mat-radio-button>\n                        </mat-radio-group>\n\n                        <!--<ng-container *ngFor=\"let vals of fields.val\">\n             <mat-checkbox class=\"form_field_{{fields.name}} example-radio-button\" (blur)=\"inputblur(fields.name)\"   [formControlName]=\"fields.name\" [value]=\"vals.key\">{{vals.val}}</mat-checkbox>\n\n         </ng-container>-->\n\n\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\" formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </div>\n\n                    <div>\n                        <ng-container *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='numberformat'\">\n                            <div class=\"add_form\">\n                                <div class=\"mat-form-field-wrapper\">\n                                    <div class=\"phonenumber mat-form-field\">\n                                        <input appPhoneMask (blur)=\"inputblur(fields.name)\" type=\"text\" required\n                                            minlength=\"14\" [placeholder]=\"fields.label\"\n                                            (change)=\"checkchange(fields,ival)\" [formControlName]=\"fields.name\"\n                                            [(ngModel)]=\"phonenumberValue\" >\n                                        <label class=\"matlabel\" [for]=\"fields.name\">{{fields.label}}</label>\n                                        <ng-container\n                                        *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                        \n                                        <mat-error>\n                                            <span class=\"showphonenovalidation\">\n                                                Please Enter valid number\n                                            </span>\n                                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                                <span\n                                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                            </ng-container>\n                                        </mat-error>\n                                    </ng-container>\n                                    </div>\n                               \n                                </div>\n                            </div>\n                        </ng-container>\n\n                        <mat-form-field\n                            *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='email' || fields.type=='number' || fields.type=='text' || fields.type == 'password')\"\n                            class=\"form-element form_field_{{fields.name}}\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n\n                            <input matInput (blur)=\"inputblur(fields.name)\" [type]=\"fields.type\"\n                                [placeholder]=\"fields.label\" (change)=\"checkchange(fields,ival)\"\n                                [formControlName]=\"fields.name\">\n\n                            <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                            <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                            <ng-container\n                                *ngIf=\"formGroup.controls[fields.name] !=null && !formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                                <mat-error>\n                                    <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                        <span\n                                            *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                    </ng-container>\n                                </mat-error>\n                            </ng-container>\n\n                            <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                                <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                            </ng-container>\n\n                        </mat-form-field>\n\n\n                        <div class=\"passbuttoncls\" *ngIf=\"formGroup.controls[fields.name] != null && (fields.type == 'password'||fields.type == 'text' ) && \n                        fields.passwordflag == true \">\n                            <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"GeneratePassword(fields)\"\n                                class=\"GeneratePasswordcls\" matTooltip=\"Generate Password\">\n                                Generate Password</button> &nbsp;\n\n                            <button mat-raised-button color=\"accent\" type=\"button\"\n                                (click)=\"copyGeneratePassword(fields)\" class=\"GeneratePasswordcls\"\n                                matTooltip=\"Copy Password\">\n                                Copy Password</button> &nbsp;\n\n                            <span *ngIf=\"isPasswordVisible == true\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Show Password\">\n                                remove_red_eye\n                            </span>\n\n                            <span *ngIf=\"isPasswordVisible == false\" class=\"material-icons\"\n                                (click)=\"previewGeneratePassword(fields)\" style=\"cursor: pointer;\"\n                                matTooltip=\"Hide Password\">\n                                visibility_off\n                            </span>\n                        </div>\n\n                        <div class=\"passbuttoncls\"\n                            *ngIf=\"formGroup.controls[fields.name] != null && customlistenbuttons?.flag == true\">\n\n\n                            <div *ngFor=\"let item of customlistenbuttons.buttons\">\n\n                                <div *ngIf=\"fields.type == item.type && fields?.custombuttonflag == true\">\n                                    <span>\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFields(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labeladd}}<span class=\"material-icons\">\n                                                add\n                                            </span></button> &nbsp;\n\n                                        <button mat-raised-button color=\"accent\" type=\"button\"\n                                            (click)=\"CustomFlagFieldsRemove(fields,item)\" class=\"CustomFlagFieldscls\">\n                                            {{item?.labelremove}}<span class=\"material-icons\">\n                                                remove\n                                            </span></button>\n                                    </span>\n                                </div>\n                            </div>\n\n                        </div>\n\n                        <div *ngIf=\" fields?.customheadingflag != null &&  fields?.customheadingflag == true\">\n                            <div *ngIf=\"fields?.customheadingtitle != null\">\n                                <mat-card class=\"customheadingtitlecls\">\n                                    {{fields?.customheadingtitle}}</mat-card>\n                            </div>\n                        </div>\n\n                    </div>\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='textarea' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <textarea matInput placeholder=\"Comment\" (blur)=\"inputblur(fields.name)\"\n                            [rows]=\"fields.rows?fields.rows:6\" [cols]=\"fields.cols?fields.cols:50\"\n                            [formControlName]=\"fields.name\" (change)=\"inputblur(fields.name)\">\n                        </textarea>\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n                    </mat-form-field>\n\n\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='date' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n\n                        <input matInput [matDatepicker]=\"picker1\" [formControlName]=\"fields.name\" [min]=\"fields.minDate\"\n                            [max]=\"fields.maxDate\" (focus)=\"picker1.open()\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n                    <mat-form-field *ngIf=\"formGroup.controls[fields.name]!=null && fields.type=='autocomplete' \"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <!-- {{fields.val.length}}\n -->\n\n\n\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-valid -->\n                        <!-- mat-input-element mat-form-field-autofill-control cdk-text-field-autofill-monitored ng-untouched ng-dirty ng-invalid -->\n\n                        <input matInput (blur)=\"inputblur(fields.name)\" (click)=\"reloadautocomplete(fields)\"\n                            (keyup)=filterautocomplete(fields.name,fields) [formControlName]=\"fields.name\"\n                            placeholder=\"{{fields.label}}\" [matAutocomplete]=\"auto\">\n\n                        <!-- <mat-autocomplete #auto=\"matAutocomplete\" *ngIf=\"currentautocomplete==fields.name || currentautocomplete=='' \"> -->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <ng-container *ngIf=\"filerfielddata!=null && filerfielddata.length>0 \">\n                                <mat-option *ngFor=\"let vals of filerfielddata \" [value]=\"vals.key\"\n                                    (click)=\"setautocompletevalue(vals,fields)\">\n                                    <!-- <img class=\"example-option-img\" aria-hidden [src]=\"state.flag\" height=\"25\"> -->\n                                    <span>{{vals.val}}</span>\n                                    <!-- <small>Population: {{state.population}}</small> -->\n                                </mat-option>\n                            </ng-container>\n                        </mat-autocomplete>\n\n\n\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple==null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngIf=\"vals.key==autocompletefiledvalue[fields.name]\">\n                                    <mat-chip [removable]=true>{{vals.val}}\n                                        <mat-icon matChipRemove (click)=\"removechipsingle(fields)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n\n                        <mat-chip-list *ngIf=\"autocompletefiledvalue[fields.name] !=null && fields.multiple!=null\"\n                            aria-label=\"{{fields.name}} data\">\n                            <ng-container *ngFor=\"let vals of fields.val \">\n                                <ng-container *ngFor=\"let avals of autocompletefiledvalue[fields.name] ; let ib=index \">\n                                    <ng-container *ngIf=\"vals.key==avals\">\n                                        <mat-chip [removable]=true>{{vals.val}}\n                                            <mat-icon matChipRemove (click)=\"removechipmultiple(fields,ib)\">cancel\n                                            </mat-icon>\n                                        </mat-chip>\n                                    </ng-container>\n                                </ng-container>\n\n                            </ng-container>\n\n                        </mat-chip-list>\n\n                        <!-- <textarea matInput \n     placeholder=\"Comment\" \n     [formControlName]=\"fields.name\" \n     (change)=\"inputblur(fields.name)\">\n  </textarea> -->\n                        <span *ngIf=\"fields.prefix!=null\" matPrefix> {{fields.prefix}} &nbsp;</span>\n                        <span *ngIf=\"fields.suffix!=null\" matSuffix>{{fields.suffix}}</span>\n\n                        <ng-container\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n\n                            <mat-error>\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </ng-container>\n\n                        <ng-container *ngIf=\"  fields.hint!=null && formGroup.controls[fields.name]!=null  \">\n                            <mat-hint align=\"start\">{{fields.hint}}</mat-hint>\n                        </ng-container>\n\n\n                    </mat-form-field>\n\n                    <!-- [config]=\"{uiColor: '#99000'}\" \n\n[readonly]=\"false\"\n                (change)=\"onChange($event)\"\n                (editorChange)=\"onEditorChange($event)\" \n                (ready)=\"onReady($event)\"\n                (focus)=\"onFocus($event)\"\n                (blur)=\"onBlur($event)\"\n                (contentDom)=\"onContentDom($event)\"\n                (fileUploadRequest)=\"onFileUploadRequest($event)\"\n                (fileUploadResponse)=\"onFileUploadResponse($event)\"\n                (paste)=\"onPaste($event)\"\n                (drop)=\"onDrop($event)\"\n                debounce=\"500\"\n\n                 [ngModelOptions]=\"{standalone: true}\n\n\n                   <ckeditor\n                [(ngModel)]=\"ckeditorContent\"\n                [ngModelOptions]=\"{standalone: true}\"\n                \n                \n                >\n              </ckeditor>\n-->\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='editor' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <!-- <input  (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\" formControlName=\"{{fields.name}}\"> -->\n\n                        <div *ngIf=\"fields.ckeConfig != null && fields.ckeConfig != ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [config]=\"fields.ckeConfig\"\n                                [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n                        <div *ngIf=\"fields.ckeConfig == null || fields.ckeConfig == ''\">\n                            <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                            <ckeditor\n                                [config]=\"{ toolbar: [ [ 'Bold','Italic','Source','Cut','Copy','Paste','Undo','Redo','Outdent','Indent','-','Font','Size','Underline','Text Color','Styles','Format','RemoveFormat','Image','Strike' ,'Link','NumberedList','BulletedList','Scayt','SpecialChar'] ] }\"\n                                (blur)=\"inputblur(fields.name)\" [formControlName]=\"fields.name\"></ckeditor>\n                            <mat-error\n                                *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                                <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                    <span\n                                        *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                                </ng-container>\n                            </mat-error>\n                        </div>\n\n\n\n                    </div>\n\n\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='externaldata' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n\n                        <span class=\"externalDataFunctioncls\">\n                            <button type=\"button\" mat-raised-button color=\"primary\"\n                                (click)=\"externalDataFunction(fields,ival)\"\n                                matTooltip=\"{{fields.label}}\">{{fields.label}}</button>\n                        </span>\n                        <br>\n\n                        <ng-container *ngIf=\"fields.value != null && fields.value.length >0\">\n                            <!-- {{fields.value | json}} -->\n\n                            <div *ngFor=\"let item of fields.value;let i = index\">\n                                <div class=\"externalcardcls\">\n                                    <mat-card>\n\n                                        <span class=\"keycls\">\n                                            {{item.label}} :\n                                        </span>\n\n                                        <span class=\"valcls\" *ngIf=\"item.imgflag == null\">\n                                            {{item.val}}\n                                        </span>\n\n                                        <span class=\"imgcls\" *ngIf=\"item.imgflag != null && item.imgflag == true\">\n                                            <img [src]=\"item.val\">\n                                        </span>\n\n                                        <span class=\"external_buttoncls\">\n\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('edit',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                create\n                                            </span>\n\n                                            <span style=\"cursor: pointer;\"\n                                                (click)=\"externalDataEditFunction('remove',fields,ival,i)\"\n                                                class=\"material-icons\">\n                                                clear\n                                            </span>\n\n                                        </span>\n\n                                    </mat-card>\n                                </div>\n                            </div>\n\n                        </ng-container>\n                        <!-- <ng-container *ngIf=\"externalDataVal != null && externalDataVal.length >0\">\n\n                            <ng-container *ngFor=\"let item of externalDataVal\">\n                                <div *ngIf=\"fields.name == item.name && item.value != null && item.value.length >0\">\n\n                                    {{item | json}}\n\n                                    {{fields.value | json}}\n\n                                </div>\n                            </ng-container>\n\n                        </ng-container> -->\n\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='hidden' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <input (blur)=\"inputblur(fields.name)\" type=\"{{fields.type}}\" placeholder=\"{{fields.label}}\"\n                            formControlName=\"{{fields.name}}\">\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n                    <div *ngIf=\"formGroup.controls[fields.name]!=null && (fields.type=='file' )\"\n                        class=\"form-element form_field_{{fields.name}}\">\n                        <mat-label [innerHTML]=\"fields.label\"></mat-label>\n                        <div class=\"aligner\" (load)=\"triggerevents(fields)\">\n                            <div class=\"drop\" (change)=\"fileChangeEvent($event)\" [attr.fileid]=\"fields.name\"\n                                id=\"drop{{fields.name}}\" (click)=\"onchoosefiles($event,fields.name,fields.multiple)\">\n                                Browse or Drop Files Here\n                                <!-- Or <br><input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                                <ng-container *ngIf=\"fields.multiple !=null && fields.multiple==true\">\n                                    <input type=\"file\" multiple id=\"filechoosermultiple{{fields.name}}\"\n                                        style=\"display:none\" (change)=\"handleDrop($event)\">\n                                </ng-container>\n\n                                <ng-container *ngIf=\"fields.multiple == null \">\n                                    <input type=\"file\" id=\"filechoosersingle{{fields.name}}\" style=\"display:none\"\n                                        multiple (change)=\"handleDrop($event)\">\n                                </ng-container>\n                            </div>\n\n                            <!-- <input type=\"file\" (change)=\"fileChangeEvent($event)\" /> -->\n\n                            <!-- <span>{{fields | json}}</span> -->\n\n                            <div class=\"filesid\" id=\"list{{fields.name}}\">\n                                <h1 *ngIf=\"filearray[fields.name]!=null \">Files:</h1>\n                                <!-- <div></div> -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name] !=null  && fields.multiple==null && fields.loadfile != null && fields.loadfile == 1\">\n                                    <div class=\"filecontainerdiv\">\n                                        <span *ngIf=\"filearray[fields.name].uploaded==1\"\n                                            class=\"material-icons fileuploadcompleteicon \">\n                                            cloud_done\n                                        </span>\n\n\n                                        <div class=\"imagedivcls\"\n                                            *ngIf=\"filearray[fields.name].type == 'image/jpeg' || filearray[fields.name].type == 'image/png' || filearray[fields.name].type == 'image/jpg'\">\n\n                                            <div class=\"divimagecardcls\">\n                                                <mat-card class=\"example-card imagecardcls\"\n                                                    *ngIf=\"fields.imageUrl != null && fields.imageUrl != ''\">\n                                                    <img mat-card-image [src]=\"fields.imageUrl\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"divimagecardcls\"\n                                                *ngIf=\"fields.value != null && fields.value != '' && fields.value.fileservername != null\">\n\n                                                <mat-card class=\"example-card imagecardcls\">\n\n                                                    <span class=\"material-icons cropcls\"\n                                                        *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0\"\n                                                        (click)=\"opensingleimagecrop(fields)\">\n                                                        crop\n                                                    </span>\n\n                                                    <img mat-card-image\n                                                        src=\"https://{{fields.value.bucket}}.s3.amazonaws.com/{{fields.value.path}}{{fields.value.fileservername}}\">\n                                                </mat-card>\n                                            </div>\n\n\n                                            <div class=\"cropimagesdiv\"\n                                                *ngIf=\"fields.aspectratio != null && fields.aspectratio != '' && fields.aspectratio.length > 0 && fields.imageUrl != null && fields.imageUrl != ''\">\n                                                <h2> Croped Images :</h2>\n\n                                                <ng-container *ngFor=\"let c of fields.aspectratio;let ci=index\"\n                                                    class=\"image-cropper-cls\">\n                                                    <br />\n                                                    <span>Croped Image (Asepect Ratio) :\n                                                        {{fields.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                    <image-cropper [imageBase64]=\"fields.imageUrl\"\n                                                        [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                        (imageCropped)=\"singleimageCropped($event,fields,ival,ci)\"\n                                                        (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\"\n                                                        (loadImageFailed)=\"loadImageFailed()\" [imageQuality]=\"100\"\n                                                        [resizeToHeight]=\"300\"></image-cropper>\n\n                                                </ng-container>\n                                            </div>\n                                        </div>\n                                        <div class=\"filesdivcls\">\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'application/pdf'\">\n                                                picture_as_pdf\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'video/mp4'\">\n                                                movie_filter\n                                            </span>\n\n                                            <span class=\"material-icons\"\n                                                *ngIf=\"filearray[fields.name].type == 'text/csv' || filearray[fields.name].type == 'text/plain'\">\n                                                description\n                                            </span>\n\n                                            <span\n                                                class=\"uploadedfilename uploadedfilename_{{filearray[fields.name]}}\">{{filearray[fields.name].name}}</span>\n                                            <br />\n                                            <span\n                                                class=\"uploadedfiletype uploadedfiletype_{{filearray[fields.name]}}\">{{filearray[fields.name].type}}</span>\n                                        </div>\n\n\n                                        <div class=\"filefieldsmaincls\">\n                                            <ng-container class=\"descdiv\"\n                                                *ngIf=\" filearray[fields.name] !=null && fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0 \">\n                                                <div class=\"filefieldscls\">\n                                                    <div class=\"filefields\"\n                                                        *ngFor=\"let item of fields.imagefields;let i =index;trackBy: trackByFn\">\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'text'\">\n                                                            <input matInput type=\"text\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                name=\"{{item.name}}\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'textarea'\">\n                                                            <textarea matInput name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                placeholder=\"{{item.label}}\" [rows]='3'\n                                                                [cols]='30'></textarea>\n                                                        </mat-form-field>\n\n                                                        <mat-form-field class=\"example-full-width\"\n                                                            *ngIf=\"item.type == 'number'\">\n                                                            <input type=\"number\" matInput name=\"{{item.name}}\"\n                                                                [ngModelOptions]=\"{standalone: true}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\" matInput\n                                                                placeholder=\"{{item.label}}\">\n                                                        </mat-form-field>\n\n                                                        <div *ngIf=\"item.type == 'checkbox'\">\n                                                            <mat-checkbox name=\"{{item.name}}\"\n                                                                [(ngModel)]=\"fields.imagefields[i].value\"\n                                                                [ngModelOptions]=\"{standalone: true}\" matInput>\n                                                            </mat-checkbox>\n                                                            &nbsp; {{item.label}}\n                                                        </div>\n                                                    </div>\n\n                                                </div>\n                                            </ng-container>\n                                        </div>\n\n\n\n                                        <div class=\"actionbtndiv\">\n                                            <mat-chip class=\"fileuploadbutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded==null \" mat-raised-button\n                                                (click)=\"uploadfile(fields)\">Upload</mat-chip>\n\n                                            <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                *ngIf=\"fields.loaded != null && fields.loaded==0\" mat-raised-button\n                                                (click)=\"deletesinglefile(fields,filearray[fields.name].type)\">Delete\n                                            </mat-chip>\n\n                                            <mat-chip class=\"filedeletebutton\" style=\"cursor: pointer;\"\n                                                *ngIf=\"filearray[fields.name].uploaded != null && filearray[fields.name].uploaded==1\"\n                                                mat-raised-button (click)=\"deletefile(fields)\">Delete</mat-chip>\n                                        </div>\n\n                                        <!-- <mat-chip>Papadum</mat-chip> -->\n\n                                        <section *ngIf=\"filearray[fields.name].uploaded==2 \"\n                                            class=\"example-section uploadprogress\">\n                                            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\"\n                                                [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                            </mat-progress-bar>\n                                        </section>\n                                    </div>\n                                </ng-container>\n\n\n                                <!-- for multiple file uploads  -->\n                                <ng-container\n                                    *ngIf=\"filearray[fields.name]!=null && fields.multiple !=null  && fields.multiple==true\">\n                                    <ng-container\n                                        *ngFor=\"let files of filearray[fields.name]; let fi=index;trackBy: trackByFnMulti\">\n                                        <div class=\"filecontainerdiv\">\n\n                                            <!-- {{files | json}} ++ -->\n\n                                            <div *ngIf=\"files.loadfile != null && files.loadfile==1\"\n                                                class=\"filesdivcls\">\n\n                                                <!-- {{files.loadfile}}+++++++++++== -->\n\n                                                <span *ngIf=\"files.uploaded==1\"\n                                                    class=\"material-icons fileuploadcompleteicon\">\n                                                    cloud_done\n                                                </span>\n\n                                                <div class=\"divimagecardcls\"\n                                                    *ngIf=\"files.type == 'image/jpeg' || files.type == 'image/png' || files.type == 'image/jpg'\">\n\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl != null && files.imageUrl != ''\">\n                                                        <img mat-card-image [src]=\"files.imageUrl\">\n                                                    </mat-card>\n\n                                                    <mat-card class=\"example-card imagecardcls\"\n                                                        *ngIf=\"files.imageUrl == null\">\n\n                                                        <span class=\"material-icons cropcls\"\n                                                            *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0\"\n                                                            (click)=\"opensingleimagecropformultiple(files)\">\n                                                            crop\n                                                        </span>\n\n\n                                                        <img mat-card-image\n                                                            src=\"https://{{files.bucket}}.s3.amazonaws.com/{{files.path}}{{files.fileservername}}\">\n                                                    </mat-card>\n\n                                                    <div class=\"cropimagesdiv\"\n                                                        *ngIf=\"files.aspectratio != null && files.aspectratio != '' && files.aspectratio.length > 0 && files.imageUrl != null && files.imageUrl != ''\">\n                                                        <h2> Croped Images :</h2>\n\n                                                        <ng-container *ngFor=\"let c of files.aspectratio;let ci=index\">\n                                                            <br />\n                                                            <span>Croped Image (Asepect Ratio) :\n                                                                {{files.imagecroppedratiolabel[ci]}} </span><br>\n\n                                                            <image-cropper [imageBase64]=\"files.imageUrl\"\n                                                                [maintainAspectRatio]=\"true\" [aspectRatio]=\"c\"\n                                                                [resizeToWidth]=\"128\"\n                                                                (imageCropped)=\"multipleimageCropped($event,files,ival,ci,fi,filearray[fields.name])\"\n                                                                (imageLoaded)=\"imageLoaded()\"\n                                                                (cropperReady)=\"cropperReady()\"\n                                                                (loadImageFailed)=\"loadImageFailed()\"\n                                                                [imageQuality]=\"100\" [resizeToHeight]=\"300\">\n                                                            </image-cropper>\n\n                                                            <!-- <mat-card class=\"example-card imagecardcls\"\n                                                                *ngIf=\"files.croppedImage[ci] != null\">\n                                                                <span>Croped Image Output : </span><br>\n                                                                <img class=\"croppedImagecls\"\n                                                                    [src]=\"files.croppedImage[ci]\" />\n                                                            </mat-card> -->\n\n                                                        </ng-container>\n                                                    </div>\n\n\n                                                </div>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'application/pdf'\">\n                                                    picture_as_pdf\n                                                </span>\n\n                                                <span class=\"material-icons\" *ngIf=\"files.type == 'video/mp4'\">\n                                                    movie_filter\n                                                </span>\n\n                                                <span class=\"material-icons\"\n                                                    *ngIf=\"files.type == 'text/csv' || files.type == 'text/plain'\">\n                                                    description\n                                                </span>\n\n                                                <div class=\"filenamecls\">\n                                                    <span class=\"fileuploadednameclass\"> {{files.name}}</span>\n                                                    <br />\n                                                    <span class=\"fileuploadedtypeclass\"> {{files.type}}</span>\n                                                </div>\n\n\n                                                <br>\n                                                <!-- files ++++ 22 => {{files.imagefields | json}}    -->\n                                                <!-- multipleImgFormData -->\n                                                <div class=\"filefieldsmaincls\">\n                                                    <ng-container class=\"descdiv\"\n                                                        *ngIf=\"fields.imagefields != null && fields.imagefields != '' && fields.imagefields.length > 0\">\n\n                                                        <!-- fields {{fields | json}}ss -->\n\n                                                        <div class=\"filefieldscls\"\n                                                            *ngFor=\"let val of fields.imagefields;let ind=index;trackBy: trackByFnMultiple \">\n\n                                                            <br>\n\n                                                            <div *ngIf=\"val.type == 'text'\" class=\"filefields\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <!-- <span>if imgfields ==</span> -->\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- <span>if imgfields ++ </span> -->\n\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input matInput type=\"text\"\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n                                                            <!-- [(ngModel)]=\"filearray[fields.name][fi].imagefields[ind].value\" -->\n\n                                                            <div *ngIf=\"val.type == 'textarea'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <textarea matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}\n                                                                            [rows]='3' [cols]='30'></textarea>\n                                                                    </mat-form-field>\n                                                                </div>\n\n\n                                                            </div>\n\n                                                            <div *ngIf=\"val.type == 'number'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\">\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <mat-form-field class=\"example-full-width\">\n                                                                        <input type=\"number\" matInput\n                                                                            (keyup)=\"keyupVal(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name,$event)\"\n                                                                            name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                            matInput\n                                                                            placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                            value={{filearray[fields.name][fi].imgfields[ind].value}}>\n                                                                    </mat-form-field>\n                                                                </div>\n\n                                                            </div>\n\n\n\n                                                            <div *ngIf=\"val.type == 'checkbox'\">\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields == null\">\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n\n                                                                <div\n                                                                    *ngIf=\"filearray[fields.name][fi].imgfields != null && filearray[fields.name][fi].imgfields.length > 0\">\n                                                                    <!-- chk = >{{filearray[fields.name][fi].imgfields[ind].value}} -->\n                                                                    <mat-checkbox\n                                                                        name=\"{{filearray[fields.name][fi].imagefields[ind].name}}\"\n                                                                        matInput\n                                                                        placeholder=\"{{filearray[fields.name][fi].imagefields[ind].label}}\"\n                                                                        matInput\n                                                                        (change)=\"checkValue(filearray[fields.name],fields.imagefields,fi,ind,filearray[fields.name][fi].imagefields[ind],fields.name,filearray[fields.name][fi].imagefields[ind].name)\"\n                                                                        [checked]=\"filearray[fields.name][fi].imgfields[ind].value\">\n                                                                    </mat-checkbox> &nbsp; {{val.label}}\n                                                                </div>\n                                                            </div>\n                                                        </div>\n\n                                                        <!-- </div> -->\n                                                    </ng-container>\n                                                </div>\n\n\n\n                                                <div class=\"actionbtndiv\">\n\n                                                    <mat-chip class=\"fileuploadbutton\" *ngIf=\"files.uploaded==null \"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"uploadfilemultiple(fields,files,fi)\">\n                                                        Upload\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"deletesinglefilecls\" style=\"cursor: pointer;\"\n                                                        *ngIf=\"files.loaded != null && files.loaded==0\"\n                                                        mat-raised-button\n                                                        (click)=\"deletesinglefilefrommultiple(fields,files,fi)\">\n                                                        Delete\n                                                    </mat-chip>\n\n                                                    <mat-chip class=\"filedeletebutton\" *ngIf=\"files.uploaded==1\"\n                                                        style=\"cursor: pointer;\" mat-raised-button\n                                                        (click)=\"deletefilemultiple(fields,files,fi)\">\n                                                        Delete </mat-chip>\n                                                </div>\n\n                                                <section *ngIf=\"files.uploaded==2 \" class=\"example-section\">\n                                                    <mat-progress-bar class=\"example-margin\" [color]=\"color\"\n                                                        [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n                                                    </mat-progress-bar>\n                                                </section>\n                                            </div>\n                                        </div>\n                                        <br />\n                                    </ng-container>\n                                    <div class=\"actionbtndiv2\">\n                                        <mat-chip class=\"uploadallfile\"\n                                            *ngIf=\"(filecount[fields.name] !=null && filecount[fields.name] !=filearray[fields.name].length ) || filecount[fields.name]==null\"\n                                            mat-raised-button (click)=\"uploadall(fields)\">Upload All</mat-chip>\n                                        <mat-chip class=\"deleteallfile\" mat-raised-button\n                                            (click)=\"deletefilemultipleall(fields)\">\n                                            Delete All\n                                        </mat-chip>\n                                    </div>\n\n                                </ng-container>\n\n\n\n                            </div>\n                        </div>\n\n                        <mat-error\n                            *ngIf=\"!formGroup.controls[fields.name].valid && formGroup.controls[fields.name].touched\">\n                            <ng-container *ngFor=\"let valdidations of fields.validations\">\n                                <span\n                                    *ngIf=\"formGroup.controls[fields.name].errors!=null && formGroup.controls[fields.name].errors[valdidations.rule.toLowerCase()]\">{{valdidations.message}}</span>\n                            </ng-container>\n                        </mat-error>\n                    </div>\n\n\n                    <section *ngIf=\"fieldloading == fields.name \" class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                            [bufferValue]=\"bufferValue\">\n                        </mat-progress-bar>\n                    </section>\n                </div>\n\n            </ng-container>\n        </ng-container>\n\n\n\n        <!-- <div class=\"aligner\">\n            <div id=\"drop\">Drop files here.</div>\n            <div id=\"list\">\n              <h1>Uploaded Files:</h1>\n            </div>\n          </div> -->\n\n        <!-- <label for=\"singleFile\">Upload file</label>\n<input id=\"singleFile\" type=\"file\" [fileUploadInputFor]= \"fileUploadQueue\"/>\n<br>\n\n<mat-file-upload-queue #fileUploadQueue\n    [fileAlias]=\"'file'\"\n    [httpUrl]=\"'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev'\">\n\n    <mat-file-upload [file]=\"file\" [id]=\"i\" *ngFor=\"let file of fileUploadQueue.files; let i = index\"></mat-file-upload>\n</mat-file-upload-queue> -->\n\n\n        <!--<mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Emailaddress\" formControlName=\"email\">\n      <mat-error *ngIf=\"!formGroup.controls['email'].valid && formGroup.controls['email'].touched\">\n        {{ getErrorEmail() }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Name\" formControlName=\"name\">\n      <mat-error *ngIf=\"!name.valid && name.touched\">\n        {{ titleAlert }}\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <textarea matInput placeholder=\"Description\" matTextareaAutosize matAutosizeMinRows=\"2\" matAutosizeMaxRows=\"5\" formControlName=\"description\"></textarea>\n      <mat-error *ngIf=\"!formGroup.controls['description'].valid && formGroup.controls['description'].touched\">\n        Required field, must be between 5 and 10 characters.\n      </mat-error>\n    </mat-form-field>\n\n    <mat-form-field class=\"form-element\">\n      <input matInput placeholder=\"Password\" formControlName=\"password\">\n      <mat-hint>Choose a password of at least eight characters, one uppercase letter and one number</mat-hint>\n      <mat-error *ngIf=\"!formGroup.controls['password'].valid && formGroup.controls['password'].touched\">\n        {{ getErrorPassword() }}\n      </mat-error>\n    </mat-form-field>\n\n    <div class=\"form-element\">\n      <mat-checkbox formControlName=\"validate\" value=\"1\">Name min. 3 characters</mat-checkbox>\n    </div>-->\n\n        <div class=\"form-element submitbtnsection\">\n            <button mat-raised-button color=\"primary\" type=\"submit\" class=\"button\"\n                [disabled]=\"!formdataval.submitactive\">{{formdataval.submittext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidecancel\" type=\"button\" class=\"button\"\n                (click)=\"navtocancel()\">{{formdataval.canceltext}}</button>\n            <button mat-raised-button color=\"primary\" *ngIf=\"!formdataval.hidereset\" type=\"reset\"\n                (click)=\"resetformdata()\" class=\"button\">{{formdataval.resettext}}</button>\n\n            <div class=\"custombuttonscls\"\n                *ngIf=\"formdataval.custombuttons != null && formdataval?.custombuttons.length > 0\">\n                <div *ngFor=\"let val of formdataval?.custombuttons\">\n                    <button mat-raised-button color=\"primary\" *ngIf=\"val?.name !=null && val?.name !=''\" type=\"button\"\n                        (click)=\"getFormVal(val)\" class=\"button\" matTooltip=\"{{val?.tooltip}}\">{{val?.label}}</button>\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n<ng-template #forminfo>\n    <div class=\"container\">\n        {{ post | json }}\n    </div>\n</ng-template>",
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
    formdata: [{ type: Input }],
    formfieldrefreshdata: [{ type: Input }],
    formfieldrefresh: [{ type: Input }],
    custombuttons: [{ type: Input }],
    externaldatavalue: [{ type: Input }],
    onFormFieldChange: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    ShowformComponent.prototype.formatFlag;
    /** @type {?} */
    ShowformComponent.prototype.dateflag;
    /** @type {?} */
    ShowformComponent.prototype.PasswordVal;
    /** @type {?} */
    ShowformComponent.prototype.externalDataVal;
    /** @type {?} */
    ShowformComponent.prototype.customlistenbuttons;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvd2Zvcm0uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbGlzdGluZy1hbmd1bGFyNy8iLCJzb3VyY2VzIjpbImxpYi9zaG93Zm9ybS9zaG93Zm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBd0IsVUFBVSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUgsT0FBTyxFQUFFLFdBQVcsRUFBYSxXQUFXLEVBQUUsVUFBVSxFQUF5QyxNQUFNLGdCQUFnQixDQUFDO0FBQ3hILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDbEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzVDLE9BQU8sRUFBaUIsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUV4RSxPQUFPLEVBQXNCLFdBQVcsRUFBa0IsTUFBTSw2QkFBNkIsQ0FBQztBQUU5RixPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0saUJBQWlCLENBQUM7OztBQVV6QyxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7Ozs7SUE4QzVCLFlBQW9CLFdBQXdCLEVBQVMsV0FBdUIsRUFBVSxTQUFzQixFQUFVLE1BQWMsRUFBVSxVQUFzQjtRQUVsSyx1REFBdUQ7UUFGckMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsZUFBVSxHQUFWLFVBQVUsQ0FBWTs7UUEzQzdKLGVBQVUsR0FBWSxLQUFLLENBQUM7OztRQXFCNUIsYUFBUSxHQUFRLEtBQUssQ0FBQztRQUN0QixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUV0QixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUUxQix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFz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OzthQUV6Qzs7OztZQWhCUSxXQUFXO1lBRVgsVUFBVTtZQUdVLFdBQVc7WUFFL0IsTUFBTTtZQVJxRCxVQUFVOzs7dUJBdUIzRSxLQUFLO21DQU1MLEtBQUs7K0JBS0wsS0FBSzs0QkFlTCxLQUFLO2dDQU9MLEtBQUs7Z0NBNENMLE1BQU07Ozs7SUEvRVAsdUNBQW1DOztJQXFCbkMscUNBQTZCOztJQUM3Qix3Q0FBNkI7O0lBRTdCLDRDQUFpQzs7SUFFakMsZ0RBQXFDOztJQXNCckMsc0RBQWtEOztJQUNsRCx3REFBb0Q7O0lBSXBELHNDQUFxQjs7SUFDckIsdUNBQXNDOztJQUN0QyxpQ0FBZTs7SUFDZixxQ0FBaUI7O0lBQ2pCLG9DQUFnQjs7SUFDaEIsZ0RBQTRCOztJQUM1Qix3Q0FBc0I7O0lBQ3RCLG9EQUFrQzs7SUFDbEMsMkNBQXlCOztJQUN6QixtREFBaUM7O0lBQ2pDLHNDQUFvQjs7SUFDcEIsc0NBQW9COztJQUNwQixnREFBOEI7O0lBQzlCLHlDQUF1Qjs7SUFDdkIsOENBQWtDOztJQUNsQyw4Q0FBbUM7O0lBRW5DLHFDQUE2Qjs7SUFDN0IsNkNBQXlDOztJQUN6Qyw2Q0FBa0M7O0lBR2xDLGtDQUFnQzs7SUFDaEMsaUNBQTRCOztJQUM1QixrQ0FBVzs7SUFDWCx3Q0FBaUI7O0lBQ2pCLDhDQUFzRDs7SUFJdEQsOENBQTRCOztJQUM1Qix5Q0FBdUI7Ozs7O0lBK2pEckIsK0JBQXNCOzs7OztJQXhtRFosd0NBQWdDOztJQUFFLHdDQUE4Qjs7Ozs7SUFBRSxzQ0FBOEI7Ozs7O0lBQUUsbUNBQXNCOzs7OztJQUFFLHVDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsIFNpbXBsZUNoYW5nZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLCBWYWxpZGF0b3JzLCBGb3JtQXJyYXksIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4uL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IENvbmZpcm1kaWFsb2csIFNuYWNrYmFyQ29tcG9uZW50IH0gZnJvbSAnLi4vbGlzdGluZy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBJbWFnZUNyb3BwZWRFdmVudCB9IGZyb20gJ25neC1pbWFnZS1jcm9wcGVyJztcbi8vIGltcG9ydCB7IENLRWRpdG9yQ29tcG9uZW50IH0gZnJvbSBcIm5nMi1ja2VkaXRvclwiO1xuXG4vLyBpbXBvcnQge01hdFNuYWNrQmFyfSBmcm9tIFwiQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyXCI7XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItc2hvd2Zvcm0nLFxuICB0ZW1wbGF0ZVVybDogJy4vc2hvd2Zvcm0uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9zaG93Zm9ybS5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd2Zvcm1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vIEBWaWV3Q2hpbGQoXCJteWNrZWRpdG9yXCIpIGNrZWRpdG9yOiBDS0VkaXRvckNvbXBvbmVudDtcbiAgcHVibGljIGZvcm1hdEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASW5wdXQoKVxuICBzZXQgZm9ybWRhdGEoZm9ybWRhdGE6IGFueSkge1xuICAgIHRoaXMuZm9ybWRhdGF2YWwgPSBmb3JtZGF0YTtcbiAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLCAnaHRsbW1tbW1tbScpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoZGF0YShmb3JtZmllbGRyZWZyZXNoZGF0YTogYW55KSB7XG4gICAgdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCA9IGZvcm1maWVsZHJlZnJlc2hkYXRhO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBmb3JtZmllbGRyZWZyZXNoKGZvcm1maWVsZHJlZnJlc2g6IGFueSkge1xuICAgIHRoaXMuZm9ybWZpZWxkcmVmcmVzaHZhbCA9IGZvcm1maWVsZHJlZnJlc2g7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNodmFsKTtcbiAgfVxuXG4gIC8vIHB1YmxpYyBtaW5EYXRlID0gbmV3IERhdGUoMjAyMCwgOCwgMjQpO1xuICAvLyBwdWJsaWMgbWF4RGF0ZSA9IG5ldyBEYXRlKDIwMjAsIDgsIDMxKTtcbiAgcHVibGljIGRhdGVmbGFnOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIFBhc3N3b3JkVmFsOiBhbnkgPSAnJztcblxuICBwdWJsaWMgZXh0ZXJuYWxEYXRhVmFsOiBhbnkgPSBbXTtcblxuICBwdWJsaWMgY3VzdG9tbGlzdGVuYnV0dG9uczogYW55ID0ge307XG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWJ1dHRvbnModmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWxpc3RlbmJ1dHRvbnMgPSB2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21saXN0ZW5idXR0b25zLCdjdXN0b21saXN0ZW5idXR0b25zIGZvcm0nKVxuICB9XG5cblxuICBASW5wdXQoKVxuICBzZXQgZXh0ZXJuYWxkYXRhdmFsdWUodmFsdWU6IGFueSkge1xuICAgIHRoaXMuZXh0ZXJuYWxEYXRhVmFsID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5leHRlcm5hbERhdGFWYWwsICd0aGlzLmV4dGVybmFsRGF0YVZhbCcpXG4gIH1cblxuICAvLyBwdWJsaWMgY2tlQ29uZmlnOmFueT17fTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZvcm1CdWlsZGVyOiBGb3JtQnVpbGRlciwgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWluRGF0ZSwgJ3RvZGF5PT09PicsIHRoaXMubWF4RGF0ZSlcblxuICB9XG4gIHB1YmxpYyBmaWxlY2hvb3NlcnNpbmdsZVR5cGVGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBmaWxlY2hvb3Nlcm11bHRpcGxlVHlwZUZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IG5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpIGFzIEZvcm1Db250cm9sO1xuICB9XG4gIGZvcm1Hcm91cDogRm9ybUdyb3VwO1xuICB0aXRsZUFsZXJ0ID0gJ1RoaXMgZmllbGQgaXMgcmVxdWlyZWQnO1xuICBwb3N0OiBhbnkgPSAnJztcbiAgc2hvd2Zvcm0gPSBmYWxzZTtcbiAgbG9hZGluZyA9IGZhbHNlO1xuICBmb3JtZmllbGRyZWZyZXNodmFsID0gZmFsc2U7XG4gIGZvcm1kYXRhdmFsOiBhbnkgPSB7fTtcbiAgZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWw6IGFueSA9IHt9O1xuICBmaWxlcmZpZWxkZGF0YTogYW55ID0gW107XG4gIGF1dG9jb21wbGV0ZWZpbGVkdmFsdWU6IGFueSA9IFtdO1xuICBmaWxlYXJyYXk6IGFueSA9IFtdO1xuICBmaWxlY291bnQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b2NvbXBsZXRlOiBhbnkgPSAnJztcbiAgZmllbGRsb2FkaW5nOiBhbnkgPSAnJztcbiAgaXNQYXNzd29yZFZpc2libGU6IEJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgc2luZ2xlSW1nRm9ybURhdGE6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBpbWdWYWx1ZTogc3RyaW5nID0gJyc7XG4gIHB1YmxpYyBudW1iZXJGb3JtYXRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBwaG9uZW51bWJlclZhbHVlOiBhbnkgPSBcIlwiO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcbiAgQE91dHB1dCgpIG9uRm9ybUZpZWxkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cblxuXG4gIGltYWdlQ2hhbmdlZEV2ZW50OiBhbnkgPSBcIlwiO1xuICBjcm9wcGVkSW1hZ2U6IGFueSA9IFwiXCI7XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jcmVhdGVGb3JtKDApO1xuXG5cbiAgICAvLyB0aGlzLnNldENoYW5nZVZhbGlkYXRlKClcbiAgfVxuXG4gIC8vIGN1c3RvbSBsaXN0ZW4gYnV0dG9uc1xuICBnZXRGb3JtVmFsKHZhbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwnKysrKysrKysrPT09PScpXG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmb3JtZGF0YScsIGZpZWxkdmFsOiAnZm9ybWRhdGF2YWwnLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgYnV0dG9udmFsOiB2YWwsIGxvYWRpbmc6IHRoaXMubG9hZGluZyB9KTtcbiAgfVxuXG4gIC8vIEN1c3RvbUZsYWdGaWVsZHNcbiAgQ3VzdG9tRmxhZ0ZpZWxkcyhmaWVsZDogYW55LCBpdGVtOiBhbnkpIHtcbiAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBmaWVsZCwgZmllbGR2YWw6IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdLnZhbHVlLCBmcm9tdmFsOiB0aGlzLmZvcm1Hcm91cC52YWx1ZSwgY3VzdG9tQnV0dG9uVmFsOiBpdGVtLCBjdXN0b21maWVsZDogJ2FkZCcgfSk7XG4gIH1cblxuICBDdXN0b21GbGFnRmllbGRzUmVtb3ZlKGZpZWxkOiBhbnksIGl0ZW06IGFueSkge1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBjdXN0b21CdXR0b25WYWw6IGl0ZW0sIGN1c3RvbWZpZWxkOiAncmVtb3ZlJyB9KTtcbiAgfVxuXG5cbiAgLy9HZW5lcmF0ZSBQYXNzd29yZCBidXR0b25cbiAgR2VuZXJhdGVQYXNzd29yZCh2YWwpIHtcbiAgICB0aGlzLlBhc3N3b3JkVmFsID0gJyc7XG4gICAgdGhpcy5QYXNzd29yZFZhbCA9IHRoaXMubWFrZWlkKDEwKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdmFsLnZhbHVlID0gdGhpcy5QYXNzd29yZFZhbDtcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS5wYXRjaFZhbHVlKHRoaXMuUGFzc3dvcmRWYWwpO1xuICAgIH0sIDIwMCk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLlBhc3N3b3JkVmFsLCAnUGFzc3dvcmRWYWwrKysrJylcblxuXG4gICAgLy8gZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgLy8gICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnID09IHRydWUpIHtcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ucGFzc3dvcmRmbGFnLCAnKysrKz09JywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10pXG4gICAgLy8gICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLnZhbHVlID0gdGhpcy5QYXNzd29yZFZhbDtcbiAgICAvLyAgICAgLy8gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbJ3Bhc3N3b3JkJ10ucGF0Y2hWYWx1ZSh0aGlzLlBhc3N3b3JkVmFsKVxuICAgIC8vICAgICB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhID0geyBmaWVsZDogJ3Bhc3N3b3JkJywgdmFsdWU6IHRoaXMuUGFzc3dvcmRWYWwgfTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuUGFzc3dvcmRWYWwsICdQYXNzd29yZFZhbCcpXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9XG5cbiAgb25jaG9vc2VmaWxlcyhldmVudDogYW55LCBmaWxlbmFtZTogYW55LCBtdWx0aXBsZUZsYWc6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKFwid29ya3MgcHJvcGVybHlcIiwgbXVsdGlwbGVGbGFnKTtcbiAgICBpZiAodHlwZW9mIG11bHRpcGxlRmxhZyA9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJpZiBwYXJ0XCIpO1xuICAgICAgLy8gdGhpcy5maWxlY2hvb3NlcnNpbmdsZVR5cGVGbGFnPXRydWU7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVjaG9vc2Vyc2luZ2xlXCIgKyBmaWxlbmFtZSkuY2xpY2soKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coXCJlbHNlIHBhcnRcIiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWxlY2hvb3NlclwiKSk7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbGVjaG9vc2VybXVsdGlwbGVcIiArIGZpbGVuYW1lKS5jbGljaygpO1xuICAgICAgLy8gdGhpcy5maWxlY2hvb3Nlcm11bHRpcGxlVHlwZUZsYWc9dHJ1ZTtcblxuICAgIH1cbiAgfVxuXG4gIC8vY29weSBQYXNzd29yZCBidXR0b25cbiAgY29weUdlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJysrcGFzcycsdGhpcy5mb3JtR3JvdXAudmFsdWUpXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUsJysrPz8/Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwudmFsdWVdKVxuXG5cbiAgICB2YXIgcGFzc3dvcmRGaWVsZERhdGE6IGFueSA9ICcnO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9ICcnO1xuICAgIH1cblxuXG4gICAgLy8gY29uc29sZS5sb2codHlwZW9mKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSksJz8/Jyx0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUpXG5cblxuICAgIGlmIChwYXNzd29yZEZpZWxkRGF0YSAhPSBudWxsICYmIHBhc3N3b3JkRmllbGREYXRhICE9ICcnICYmIHR5cGVvZiAocGFzc3dvcmRGaWVsZERhdGEpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICBlbC52YWx1ZSA9IHBhc3N3b3JkRmllbGREYXRhO1xuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbCk7XG4gICAgICBlbC5zZWxlY3QoKTtcbiAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0NvcHkgVG8gQ2xpcGJvYXJkJyB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIG9yIEVudGVyIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vcHJldmlldyBQYXNzd29yZCBidXR0b25cbiAgcHJldmlld0dlbmVyYXRlUGFzc3dvcmQodmFsKSB7XG5cbiAgICB2YXIgcGFzc3dvcmRGaWVsZERhdGE6IGFueSA9ICcnO1xuXG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbC5uYW1lXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlKSAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWwubmFtZV0udmFsdWUgIT0gJycpIHtcbiAgICAgIHBhc3N3b3JkRmllbGREYXRhID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdmFsLm5hbWVdLnZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXNzd29yZEZpZWxkRGF0YSA9ICcnO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZEZpZWxkRGF0YSAhPSBudWxsICYmIHBhc3N3b3JkRmllbGREYXRhICE9ICcnICYmIHR5cGVvZiAocGFzc3dvcmRGaWVsZERhdGEpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2YWwsICcrKysrKysrKysrKysnKVxuICAgICAgc3dpdGNoICh2YWwudHlwZSkge1xuICAgICAgICBjYXNlICdwYXNzd29yZCc6XG4gICAgICAgICAgdmFsLnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICB2YWwudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgICAgdGhpcy5pc1Bhc3N3b3JkVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnUGxlYXNlIEdlbmVyYXRlIG9yIEVudGVyIFBhc3N3b3JkLi4hJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIC8vZ2VuZXJhdGUgcmFuIHBhc3N3b3JkXG4gIG1ha2VpZChsZW5ndGgpIHtcbiAgICB2YXIgcmVzdWx0ID0gJ1AnO1xuICAgIGxlbmd0aCA9IGxlbmd0aCArIDE7XG4gICAgdmFyIGNoYXJhY3RlcnMgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODknO1xuICAgIHZhciBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG5cblxuICAvLyBleHRlcm5hbCBEYXRhIEZ1bmN0aW9uXG4gIGV4dGVybmFsRGF0YUZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgIC8vIHRoaXMuZXh0ZXJuYWxEYXRhVmFsPVtdO1xuICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2V4dGVybmFsZGF0YScsIGZsYWc6ICdhZGQnLCBmaWVsZFZhbDogdmFsdWUsIGluZGV4OiBpbmRleCwgZXh0ZXJuYWxEYXRhVmFsOiB0aGlzLmV4dGVybmFsRGF0YVZhbCB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgdGhpcy5leHRlcm5hbERhdGFWYWwsIGluZGV4LCAnKysnKVxuICB9XG5cbiAgZXh0ZXJuYWxEYXRhRWRpdEZ1bmN0aW9uKGZsYWcsIGZpZWxkLCBpdmFsLCBpKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmbGFnLCBmaWVsZCwgaXZhbCwgaSwgJ2V4dGVyICsrKysnKVxuXG4gICAgaWYgKGZsYWcgPT0gJ2VkaXQnKSB7XG4gICAgICB0aGlzLm9uRm9ybUZpZWxkQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdleHRlcm5hbGRhdGEnLCBmbGFnOiAnZWRpdCcsIGZpZWxkVmFsOiBmaWVsZCwgaW5kZXg6IGl2YWwsIHZhbGluZDogaSwgZXh0ZXJuYWxEYXRhVmFsOiB0aGlzLmV4dGVybmFsRGF0YVZhbCB9KTtcbiAgICB9XG5cbiAgICBpZiAoZmxhZyA9PSAncmVtb3ZlJykge1xuICAgICAgZmllbGQudmFsdWUuc3BsaWNlKGksIDEpO1xuICAgIH1cblxuXG4gIH1cblxuXG5cblxuICAvLyBvcGVuIGNhbGVuZGFyIGludG8gZGF0ZSBmaWVsZFxuICBvcGVuQ2FsZW5kYXIoKSB7XG4gICAgdGhpcy5kYXRlZmxhZyA9IHRydWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlZmxhZywgJ2RhdGVmbGFnJylcbiAgfVxuXG4gIG5hdnRvY2FuY2VsKCkge1xuXG4gICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmb3JtY2FuY2VsJywgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWUsIGxvYWRpbmc6IHRoaXMubG9hZGluZyB9KTtcblxuICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmZvcm1kYXRhdmFsLmNhbmNlbHJvdXRlXSk7XG4gICAgfVxuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBhZnRlciB2aWV3IGluaXQgdHJpZ2dlcicpO1xuICAgICAgZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS50eXBlID09ICdmaWxlJykge1xuICAgICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkcm9wJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCB0aGlzLmNhbmNlbC5iaW5kKHRoaXMpKTtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICB0cmlnZ2VyZXZlbnRzKHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2luIHRyaWdnZXJldmVudHMnLCB2YWwpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbCBsb2FkZWVkIHRyaWdnZXInLCB2YWwpO1xuICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignI2Ryb3AnICsgdmFsLm5hbWUpLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCB0aGlzLmhhbmRsZURyb3AuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjZHJvcCcgKyB2YWwubmFtZSkuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2RyYWdvdmVyJywgdGhpcy5jYW5jZWwuYmluZCh0aGlzKSk7XG4gICAgfSwgMTAwMCk7XG5cbiAgfVxuXG4gIGNhbmNlbChlKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2NhbmNlbCcsZSk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG5cbiAgaGFuZGxlRHJvcChlKSB7XG4gICAgY29uc29sZS5sb2coXCJoYW5kZWxEcm9wXCIsIGUpXG4gICAgLy8gbGV0IGFwaUJhc2VVUkw9XCJcIlxuICAgIC8vIHRoaXMuaW1hZ2VDaGFuZ2VkRXZlbnQgPSBlO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbGlzdCcpO1xuICAgIGNvbnN0IGFwaUJhc2VVUkwgPSAnaHR0cHM6Ly90Z2UyNGJjMm5lLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2Rldic7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdoYW5kbGVEcm9wJywgZSk7XG5cbiAgICBjb25zdCBkdCA9IGUuZGF0YVRyYW5zZmVyID09IG51bGwgPyBlIDogZS5kYXRhVHJhbnNmZXI7XG4gICAgY29uc3QgZmlsZWNob29zZXJGbGFnID0gZS5kYXRhVHJhbnNmZXIgPT0gbnVsbCA/IDEgOiAwO1xuICAgIGNvbnNvbGUubG9nKFwiZHQgZGF0YWFhKytcIiwgZHQpO1xuICAgIGNvbnNvbGUubG9nKFwiZHQgZmlsZWNob29zZXJGbGFnKytcIiwgZmlsZWNob29zZXJGbGFnKTtcbiAgICBjb25zdCBmaWxlcyA9IGR0LmZpbGVzID09IG51bGwgPyBkdC50YXJnZXQuZmlsZXMgOiBkdC5maWxlcztcbiAgICBjb25zb2xlLmxvZyhcImZpbGVzIGNvdW50XCIsIGZpbGVzLmxlbmd0aCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgZmlsZSA9IGZpbGVzW2ldO1xuICAgICAgLy8gY29uc29sZS5sb2coZmlsZXMsICdmaWxlcycsIGUudGFyZ2V0LmlkKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdmYXJyJywgdGhpcy5maWxlYXJyYXkpO1xuICAgICAgY29uc29sZS5sb2coJ2ZpbGVzKysnLCBmaWxlKTtcblxuICAgICAgZm9yIChjb25zdCBnIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS50eXBlID09ICdmaWxlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpIHx8IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZmlsZWNob29zZXJzaW5nbGUnLCAnJykgfHwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3Nlcm11bHRpcGxlJywgJycpKSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaWYgcGFydFwiLCBlLnRhcmdldC5pZCwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10pO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2luZ2xlSW1nRm9ybURhdGEsJ3NpbmdsZUltZ0Zvcm1EYXRhJylcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIGRldGFpbHMnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgZyk7XG5cbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubXVsdGlwbGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdGhpcy5kZWxldGVmaWxlKHZhKVxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlc1tpXSwgJ2ZpbGVzW2ldPT09PT09PXNpbmdsZScpXG5cbiAgICAgICAgICAgIC8vaW1hZ2UgcHJldmlldyBiYXNlLzY0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIiBiZWZvcmUgMm5kIGlmIHBhcnQgb2YgdHlwZSBjaGVja2luZ1wiLCBmaWxlcyk7XG5cbiAgICAgICAgICAgIGlmIChmaWxlc1tpXS50eXBlID09ICdpbWFnZS9wbmcnIHx8IGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL2pwZycgfHwgZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvanBlZycpIHtcbiAgICAgICAgICAgICAgLy9TaG93IGltYWdlIHByZXZpZXdcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCIybmQgaWYgcGFydCBvZiB0eXBlIGNoZWNraW5nXCIpO1xuICAgICAgICAgICAgICBsZXQgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VVcmwgPSBldmVudC50YXJnZXQucmVzdWx0O1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmNyb3BwZWRpbWFnZWFycmF5ID0gW107XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQucmVzdWx0LCAnZXZlbnQudGFyZ2V0LnJlc3VsdD09PT09PT09PScpXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8gIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5hc3BlY3RyYXRpbykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5jcm9wcGVkSW1hZ2UgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlY3JvcHBlZHJhdGlvbGFiZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uYXNwZWN0cmF0aW9bY10pLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCAnZmlsZXMrKysrKycpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10ubG9hZGVkID0gMDtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmxvYWRmaWxlID0gMTtcbiAgICAgICAgICAgIGlmIChmaWxlY2hvb3NlckZsYWcgPT0gMCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgPT0gZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZWZpbGUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0sIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9IGZpbGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSsrPT0nKVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2Ryb3AnLCAnJyldID0gZmlsZXNbaV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZmlsZWNob29zZXJGbGFnID09IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2Vyc2luZ2xlJywgJycpXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBuIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSA9PSBlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3NlcnNpbmdsZScsICcnKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZWZpbGUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0sIDEpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3NlcnNpbmdsZScsICcnKV0gPSBmaWxlc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLCAndGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10rKz09JylcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3NlcnNpbmdsZScsICcnKV0gPSBmaWxlc1tpXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10sICd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSsrID5NJylcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXNbaV0sICdmaWxlc1tpXT09PT09PT0gbXVsdGlwbGUnKVxuXG4gICAgICAgICAgICBpZiAoZmlsZXNbaV0udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCBmaWxlc1tpXS50eXBlID09ICdpbWFnZS9qcGcnIHx8IGZpbGVzW2ldLnR5cGUgPT0gJ2ltYWdlL2pwZWcnKSB7XG4gICAgICAgICAgICAgIC8vU2hvdyBpbWFnZSBwcmV2aWV3XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiKysrKysraWYgcGFydFwiLCBmaWxlcyk7XG4gICAgICAgICAgICAgIGxldCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBmaWxlc1tpXS5pbWFnZVVybCA9IGV2ZW50LnRhcmdldC5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvLCAncmF0aW8rPT09PT0+JylcblxuICAgICAgICAgICAgICAgICAgZmlsZXNbaV0uY3JvcHBlZEltYWdlID0gW107XG4gICAgICAgICAgICAgICAgICBmaWxlc1tpXS5hc3BlY3RyYXRpbyA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmFzcGVjdHJhdGlvO1xuICAgICAgICAgICAgICAgICAgZmlsZXNbaV0uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddLmltYWdlY3JvcHBlZHJhdGlvbGFiZWw7XG4gICAgICAgICAgICAgICAgICBmaWxlc1tpXS5jcm9wcGVkaW1hZ2VhcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgZm9yIChsZXQgYyBpbiBmaWxlc1tpXS5hc3BlY3RyYXRpbykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZXNbaV0uYXNwZWN0cmF0aW8gIT0gbnVsbCAmJiBmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXSAhPSBudWxsICYmIHR5cGVvZiAoZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10pICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10sICdmaWxlc1tpXS5hc3BlY3RyYXRpb1tjXScpXG4gICAgICAgICAgICAgICAgICAgICAgLy8gZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10gPSBOdW1iZXIoZmlsZXNbaV0uYXNwZWN0cmF0aW9bY10pLnRvRml4ZWQoMik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzW2ldLCAnZmlsZXNbaV09PT4nKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXSwgJ2ltYWdlVXJsKysrKysnKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlc1tpXSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZpbGVzW2ldLmxvYWRlZCA9IDA7XG4gICAgICAgICAgICBmaWxlc1tpXS5sb2FkZmlsZSA9IDE7XG5cblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2ddICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZ10uaW1hZ2VmaWVsZHMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgZmlsZXNbaV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tnXS5pbWFnZWZpZWxkcztcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9mb3IgZHJhZyBhbmQgZHJvcCBmaWxlc1xuICAgICAgICAgICAgaWYgKGZpbGVjaG9vc2VyRmxhZyA9PSAwKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbZS50YXJnZXQuaWQucmVwbGFjZSgnZHJvcCcsICcnKV0gPSBbXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdkcm9wJywgJycpXS5wdXNoKGZpbGVzW2ldKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9mb3IgY2hvb3NlIGZpbGVzXG4gICAgICAgICAgICBpZiAoZmlsZWNob29zZXJGbGFnID09IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2VybXVsdGlwbGUnLCAnJyldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVtlLnRhcmdldC5pZC5yZXBsYWNlKCdmaWxlY2hvb3Nlcm11bHRpcGxlJywgJycpXSA9IFtdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2UudGFyZ2V0LmlkLnJlcGxhY2UoJ2ZpbGVjaG9vc2VybXVsdGlwbGUnLCAnJyldLnB1c2goZmlsZXNbaV0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknLCB0aGlzLmZpbGVhcnJheSk7XG5cbiAgICAgIC8vIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbihlKXtcbiAgICAgIC8vICAgZmV0Y2goYXBpQmFzZVVSTCtcIi9yZXF1ZXN0VXBsb2FkVVJMXCIsIHtcbiAgICAgIC8vICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgLy8gICAgIGhlYWRlcnM6IHtcbiAgICAgIC8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgIC8vICAgICB9LFxuICAgICAgLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIC8vICAgICAgIG5hbWU6IGZpbGUubmFtZSxcbiAgICAgIC8vICAgICAgIHR5cGU6IGZpbGUudHlwZVxuICAgICAgLy8gICAgIH0pXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICAgIC8vICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgLy8gICB9KVxuICAgICAgLy8gICAudGhlbihmdW5jdGlvbihqc29uKXtcbiAgICAgIC8vICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgIC8vICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgIC8vICAgICAgIGJvZHk6IG5ldyBCbG9iKFtyZWFkZXIucmVzdWx0XSwge3R5cGU6IGZpbGUudHlwZX0pXG4gICAgICAvLyAgICAgfSlcbiAgICAgIC8vICAgfSlcbiAgICAgIC8vICAgLnRoZW4oZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgICB2YXIgdXBsb2FkZWRGaWxlTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgLy8gICAgIHVwbG9hZGVkRmlsZU5vZGUuaW5uZXJIVE1MID0gJzxhIGhyZWY9XCIvL3MzLmFtYXpvbmF3cy5jb20vc2xzdXBsb2FkLycrIGZpbGUubmFtZSArJ1wiPicrIGZpbGUubmFtZSArJzwvYT4nO1xuICAgICAgLy8gICAgIGxpc3QuYXBwZW5kQ2hpbGQodXBsb2FkZWRGaWxlTm9kZSk7XG4gICAgICAvLyAgIH0pO1xuICAgICAgLy8gfSk7XG4gICAgICAvLyByZWFkZXIucmVhZEFzQXJyYXlCdWZmZXIoZmlsZSk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyB1cGxvYWRmaWxlKHZhbDogYW55KSB7XG4gIC8vICAgLy9sZXQgYXBpQmFzZVVSTCA9IFwiaHR0cHM6Ly90Z2UyNGJjMm5lLmV4ZWN1dGUtYXBpLnVzLWVhc3QtMS5hbWF6b25hd3MuY29tL2RldlwiO1xuICAvLyAgIGxldCBoOmFueT10aGlzLmJ1Y2tldHVwbG9hZCh2YWwpO1xuICAvLyAgIGNvbnNvbGUubG9nKCd1cHBwcCcsaClcbiAgLy8gfVxuXG4gIHRyYWNrQnlGbihpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIHRyYWNrQnlGbk11bHRpcGxlKGluZGV4KSB7XG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cblxuICB0cmFja0J5Rm5NdWx0aShpbmRleCkge1xuICAgIHJldHVybiBpbmRleDtcbiAgfVxuXG4gIGtleXVwVmFsKHZhbCwgaXRlbSwgZmksIGluZCwgZGF0YSwgZm5hbWUsIHNmbmFtZSwgZXYpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gaW4ga3l1cHZhbCAnLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsW2ZpXS5pbWFnZWZpZWxkcywgJ2tleXVwVmFsJywgJ3MnLCBpdGVtLCBmaSwgaW5kLCBkYXRhLCAnLS0tJywgdGhpcy5maWxlYXJyYXksICcsLCcsIGZuYW1lLCBzZm5hbWUsIGV2LnRhcmdldC52YWx1ZSk7XG4gICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5pbWFnZWZpZWxkc1tpbmRdWyd2YWx1ZSddID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIC8vIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IFtdO1xuICAgIC8vICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSBbXTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9PSBudWxsIHx8IHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCcxMTExMTExMTExMTExMTExMTExMTExMTExMTExMTEnKTtcbiAgICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCkgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID0gW107XG4gICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IFtdO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gYmVmb3JlJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdID0geyBrZXk6IGV2LnRhcmdldC5uYW1lLCB2YWx1ZTogZXYudGFyZ2V0LnZhbHVlIH07XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGFmdGVyJywgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHNmbmFtZSwgJ3NmbmFtZScsIGluZCwgZXYudGFyZ2V0LnZhbHVlKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RkZCcsIGZpLCBpbmQpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0pO1xuICB9XG5cblxuICBjaGVja1ZhbHVlKHZhbCwgaXRlbSwgZmksIGluZCwgZGF0YSwgZm5hbWUsIHNmbmFtZSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJysrJylcblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbFtmaV0uaW1hZ2VmaWVsZHMsICdrZXl1cFZhbCcsICdzJywgaXRlbSwgZmksIGluZCwgZGF0YSwgJy0tLScsIHRoaXMuZmlsZWFycmF5LCAnLCwnLCBmbmFtZSwgc2ZuYW1lKTtcblxuICAgIGlmICh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHMgPT0gbnVsbCB8fCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExJyk7XG4gICAgICBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzID09IG51bGwpIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkcyA9IFtdO1xuICAgICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gPSBbXTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXS5rZXkgIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXS5rZXkgPT0gc2ZuYW1lKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMiBpZicpO1xuXG4gICAgICBzd2l0Y2ggKHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdLnZhbHVlKSB7XG5cbiAgICAgICAgY2FzZSB0cnVlOlxuICAgICAgICAgIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdLnZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgICAgdGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0udmFsdWUgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnMzMzMzMzMzMzMzMzMzMzMzMzMzMgZWxzZScpO1xuXG4gICAgICB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSA9IHsga2V5OiBzZm5hbWUsIHZhbHVlOiB0cnVlIH07XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdIGJlZm9yZScsIHRoaXMuZmlsZWFycmF5W2ZuYW1lXVtmaV0uZmxkc1tpbmRdKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXlbZm5hbWVdW2ZpXS5mbGRzW2luZF0gYWZ0ZXInLCB0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldLmZsZHNbaW5kXSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZmlsZWFycmF5Jyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXkpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkZGQnLCBmaSwgaW5kKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVtmbmFtZV1bZmldKTtcbiAgfVxuXG5cblxuICB1cGxvYWRmaWxlKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3VwcHBwJywgdmFsKTtcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsZSB2YWwnLCB2YWwpO1xuICAgIGZpbGUudXBsb2FkZWQgPSAyOyAvLyBzaG93IHByb2dyZXNzYmFyXG4gICAgbGV0IHRlbXBsb2FkZXI6IGFueSA9IHRoaXMuZmllbGRsb2FkaW5nW3ZhbC5uYW1lXTtcbiAgICB0ZW1wbG9hZGVyID0gdmFsLm5hbWU7XG4gICAgLy8gcmVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWRlbmQnLCBmdW5jdGlvbiAoZSkge1xuICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoZSkgPT4ge1xuICAgICAgZmV0Y2godmFsLmFwaXVybCwge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIG5hbWU6IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIiksXG4gICAgICAgICAgdHlwZTogZmlsZS50eXBlLFxuICAgICAgICAgIHBhdGg6IHZhbC5wYXRoLFxuICAgICAgICAgIGJ1Y2tldDogdmFsLmJ1Y2tldFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2J1Y2snLCByZXNwb25zZSk7XG4gICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKGpzb24pIHtcbiAgICAgICAgICByZXR1cm4gZmV0Y2goanNvbi51cGxvYWRVUkwsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgICBib2R5OiBuZXcgQmxvYihbcmVhZGVyLnJlc3VsdF0sIHsgdHlwZTogZmlsZS50eXBlIH0pXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyByZXR1cm4gJ3N1Y2Nlc3MnO1xuICAgICAgICAgIGZpbGUudXBsb2FkZWQgPSAxO1xuICAgICAgICAgIGZpbGUubG9hZGZpbGUgPSAxO1xuICAgICAgICAgIHZhbC5sb2FkZWQgPSBudWxsO1xuICAgICAgICAgIGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpO1xuICAgICAgICAgIC8vIGlmKHZhbC5pbWFnZWZpZWxkcy5sZW5ndGggPiAwKXtcbiAgICAgICAgICAvLyAgIGZpbGUuaW1hZ2VmaWVsZHMgPSB2YWwuaW1hZ2VmaWVsZHNcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZS50eXBlLCAnZmlsZS50eXBlJyk7XG4gICAgICAgICAgLy8gdGVtcGxvYWRlciA9IG51bGw7XG4gICAgICAgICAgLy8gdmFyIHVwbG9hZGVkRmlsZU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAvLyB1cGxvYWRlZEZpbGVOb2RlLmlubmVySFRNTCA9ICc8YSBocmVmPVwiLy9zMy5hbWF6b25hd3MuY29tL3Nsc3VwbG9hZC8nKyBmaWxlLm5hbWUgKydcIj4nKyBmaWxlLm5hbWUgKyc8L2E+JztcbiAgICAgICAgICAvLyBsaXN0LmFwcGVuZENoaWxkKHVwbG9hZGVkRmlsZU5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgIC8vIH0pO1xuICAgIH07XG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xuICB9XG5cblxuICB1cGxvYWRhbGwodmFsOiBhbnkpIHtcbiAgICAvLyB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0udXBsb2FkYWxsID0gMTtcbiAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdKSB7XG4gICAgICBjb25zdCBjOiBhbnkgPSBwYXJzZUludCh5KSAqIDUwMDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCctLS0nLCB2YWwsICd2LS0tJywgJ3RoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXScsIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXVt5XSwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLnVwbG9hZGVkKTtcbiAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0uYnVja2V0ID09IG51bGwpIHRoaXMudXBsb2FkZmlsZW11bHRpcGxlKHZhbCwgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW3ldLCB5KTtcbiAgICB9XG4gIH1cblxuXG4gIGRlbGV0ZWZpbGVtdWx0aXBsZWFsbCh2YWw6IGFueSkge1xuICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0pIHtcbiAgICAgIGNvbnN0IGM6IGFueSA9IHBhcnNlSW50KHkpICogNTAwO1xuICAgICAgdGhpcy5kZWxldGVmaWxlbXVsdGlwbGUodmFsLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1beV0sIHkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSA9IG51bGw7XG4gICAgfSwgMzAwMCk7XG4gIH1cblxuXG4gIHVwbG9hZGZpbGVtdWx0aXBsZSh2YWw6IGFueSwgZjogYW55LCBpbmRleGY6IGFueSkge1xuICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW2luZGV4Zl07XG4gICAgLy8gY29uc29sZS5sb2coZmlsZSwnZmlsZScpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKGYsJ2YnKTtcbiAgICBpZiAodGhpcy5maWxlY291bnRbdmFsLm5hbWVdID09IG51bGwpIHsgdGhpcy5maWxlY291bnRbdmFsLm5hbWVdID0gMDsgfVxuICAgIHRoaXMuZmlsZWNvdW50W3ZhbC5uYW1lXSsrO1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHZhbCBpbiBtIDInLCB2YWwsIGYsIGluZGV4ZiwgJ2lmJyxmaWxlKTtcbiAgICBmaWxlLnVwbG9hZGVkID0gMjsgLy8gc2hvdyBwcm9ncmVzc2JhclxuICAgIGZpbGUubG9hZGZpbGUgPSAxO1xuICAgIGxldCB0ZW1wbG9hZGVyOiBhbnkgPSB0aGlzLmZpZWxkbG9hZGluZ1t2YWwubmFtZV07XG4gICAgdGVtcGxvYWRlciA9IHZhbC5uYW1lO1xuICAgIC8vIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkZW5kJywgZnVuY3Rpb24gKGUpIHtcbiAgICByZWFkZXIub25sb2FkZW5kID0gKGUpID0+IHtcbiAgICAgIGZldGNoKHZhbC5hcGl1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBuYW1lOiB2YWwucHJlZml4ICsgZmlsZS5uYW1lLnNwbGl0KFwiIFwiKS5qb2luKFwiXCIpLFxuICAgICAgICAgIHR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgICBwYXRoOiB2YWwucGF0aCxcbiAgICAgICAgICBidWNrZXQ6IHZhbC5idWNrZXRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdidWNrJywgcmVzcG9uc2UpO1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgcmV0dXJuIGZldGNoKGpzb24udXBsb2FkVVJMLCB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQVVQnLFxuICAgICAgICAgICAgYm9keTogbmV3IEJsb2IoW3JlYWRlci5yZXN1bHRdLCB7IHR5cGU6IGZpbGUudHlwZSB9KVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgLy8gcmV0dXJuICdzdWNjZXNzJztcbiAgICAgICAgICBmaWxlLnVwbG9hZGVkID0gMTtcbiAgICAgICAgICBmaWxlLmxvYWRlZCA9IG51bGw7XG4gICAgICAgICAgZmlsZS5maWxlc2VydmVybmFtZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWUuc3BsaXQoXCIgXCIpLmpvaW4oXCJcIik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZS50eXBlLCdmaWxlLnR5cGUnKVxuICAgICAgICAgIC8vIHRlbXBsb2FkZXIgPSBudWxsO1xuICAgICAgICAgIC8vIHZhciB1cGxvYWRlZEZpbGVOb2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgLy8gdXBsb2FkZWRGaWxlTm9kZS5pbm5lckhUTUwgPSAnPGEgaHJlZj1cIi8vczMuYW1hem9uYXdzLmNvbS9zbHN1cGxvYWQvJysgZmlsZS5uYW1lICsnXCI+JysgZmlsZS5uYW1lICsnPC9hPic7XG4gICAgICAgICAgLy8gbGlzdC5hcHBlbmRDaGlsZCh1cGxvYWRlZEZpbGVOb2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAvLyB9KTtcbiAgICB9O1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWxlIHR5cGUnLCBmaWxlLCB0eXBlb2YgKGZpbGUpKTtcbiAgICBjb25zdCBmdHlwZTogYW55ID0gdHlwZW9mIChmaWxlKTtcbiAgICAvLyBpZiAoZnR5cGUgPT0gXCJCbG9iXCIpIFxuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihmaWxlKTtcbiAgfVxuXG5cbiAgZGVsZXRlZmlsZSh2YWw6IGFueSwgZmxhZzogYW55ID0gJycpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5maWxlYXJyYXknLHRoaXMuZmlsZWFycmF5KTtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsKysgZGVsZXRlJywgdmFsLCB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbC5uYW1lKTtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIGNvbnN0IGZpbGU6IGFueSA9IHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0udXBsb2FkZWQgPSAyO1xuICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5sb2FkZmlsZSA9IDA7XG5cblxuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh2YWwuYXBpZGVsZXRldXJsLCB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycgJiYgZmxhZyA9PSAnJykge1xuICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgICAgICB2YWwudmFsdWUgPSB7fTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0RlbGV0ZWQgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS51cGxvYWRlZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5sb2FkZmlsZSA9IDA7XG4gICAgICAgIHZhbC5sb2FkZmlsZSA9IDA7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSwgJz8/Pz89PT1EZWxldGU9PT0/Pz8/PycpXG5cbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICB9XG5cbiAgZGVsZXRlc2luZ2xlZmlsZSh2YWw6IGFueSwgZmxhZzogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2codmFsLCAndmFsKysrIGRlbGV0ZScsIGZsYWcpXG4gICAgaWYgKGZsYWcgPT0gJ2ltYWdlL3BuZycgfHwgZmxhZyA9PSAnaW1hZ2UvanBnJyB8fCBmbGFnID09ICdpbWFnZS9qcGVnJykge1xuICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLmxvYWRmaWxlID0gMDtcbiAgICAgIHZhbC5pbWFnZVVybCA9IG51bGw7XG4gICAgICB2YWwubG9hZGZpbGUgPSAwO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXS5sb2FkZmlsZSA9IDA7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4gIGRlbGV0ZXNpbmdsZWZpbGVmcm9tbXVsdGlwbGUodmFsOiBhbnksIGZpZWxkOiBhbnkgPSAnJywgaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgZmllbGQsIGluZGV4LCAnPz8/PysrKysrJylcbiAgICBjb25zdCBmaWxlOiBhbnkgPSB0aGlzLmZpbGVhcnJheVt2YWwubmFtZV1baW5kZXhdO1xuICAgIGZpbGUubG9hZGZpbGUgPSAwO1xuICAgIGlmICh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0gIT0gbnVsbCkgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt2YWwubmFtZV0sICd0aGlzLmZpbGVhcnJheVt2YWwubmFtZV09PScpXG4gICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdEZWxldGVkICEhJyB9XG4gICAgfSk7XG4gIH1cblxuXG5cbiAgZGVsZXRlZmlsZW11bHRpcGxlKHZhbDogYW55LCBmaWVsZDogYW55ID0gJycsIGluZGV4OiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICd2YWwrKycsIGluZGV4KVxuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgY29uc3QgZmlsZTogYW55ID0gdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdW2luZGV4XTtcbiAgICB0aGlzLmZpbGVjb3VudFt2YWwubmFtZV0tLTtcbiAgICBzb3VyY2UuZmlsZSA9IHZhbC5wcmVmaXggKyBmaWxlLm5hbWU7XG4gICAgc291cmNlLnBhdGggPSB2YWwucGF0aDtcbiAgICBzb3VyY2UuYnVja2V0ID0gdmFsLmJ1Y2tldDtcbiAgICBmaWxlLnVwbG9hZGVkID0gMjtcbiAgICAvLyBmaWxlLmxvYWRmaWxlID0gMDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godmFsLmFwaWRlbGV0ZXVybCwgdGhpcy5mb3JtZGF0YXZhbC5qd3R0b2tlbiwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgIGZpbGUubG9hZGZpbGUgPSAwO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnRGVsZXRlZCAhIScgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3ZhbC5uYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgZmlsZS5sb2FkZmlsZSA9IDA7XG4gICAgICAgICAgdGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdLCAndGhpcy5maWxlYXJyYXlbdmFsLm5hbWVdPT0nKVxuXG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbcHJvcEtleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ29uY2hhbmdlIGluIGZvcm0gISEhJywgY2hhbmdlcywgJ2ZydicsIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAnZm9ybWZpZWxkcmVmcmVzaGRhdGEnKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmZmYgaW4gc2V0IHR0Jyk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbCwgJ20nKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtR3JvdXAgIT0gbnVsbCAmJiB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkICE9IG51bGwgJiYgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZpZWxkXS5wYXRjaFZhbHVlKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUpO1xuICAgICAgICAgICAgfSBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSBudWxsICYmIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGEgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGEpID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgZm9ybWtleSBpbiB0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZGF0YVtmb3Jta2V5XScsIHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0pO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5XSAhPSBudWxsKSB7IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXldLnBhdGNoVmFsdWUodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5mb3JtdmFsZGF0YVtmb3Jta2V5XSk7IH1cbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZvcm1kYXRhdmFsa2V5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm5hbWUgPT0gZm9ybWtleSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm11bHRpcGxlICE9IGZhbHNlKSkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGF1dG9zZWx2YWwgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCkge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsIG11bHRpcGxlICcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwsIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1maWVsZHJlZnJlc2hkYXRhdmFsLmZvcm12YWxkYXRhW2Zvcm1rZXldLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbFthdXRvc2VsdmFsXS5rZXkpICE9IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldGF1dG9jb21wbGV0ZXZhbHVlKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0sIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy8gZW5kIG9mIGlmXG5cbiAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubmFtZSA9PSBmb3Jta2V5ICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS50eXBlID09ICdhdXRvY29tcGxldGUnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgPT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgPT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXV0b3NlbHZhbCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwgc2luZ2xlJywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLnZhbCwgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0gPT0gKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWxbYXV0b3NlbHZhbF0ua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRhdXRvY29tcGxldGV2YWx1ZSh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIGVuZiBvZiBpZlxuXG4gICAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbZm9ybWRhdGF2YWxrZXldLm5hbWUgPT0gZm9ybWtleSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udHlwZSA9PSAnY2hlY2tib3gnICYmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0ubXVsdGlwbGUgIT0gZmFsc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXV0b3NlbHZhbCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwgY2hlY2sgYm94IG11bHRpcGxlICcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2Zvcm1kYXRhdmFsa2V5XS52YWwsIGF1dG9zZWx2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdmb3Jta2V5ICsgICsgYXV0b3NlbHZhbCcsIGZvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZm9ybXZhbGRhdGFbZm9ybWtleV0uaW5kZXhPZih0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tmb3JtZGF0YXZhbGtleV0udmFsW2F1dG9zZWx2YWxdLmtleSkgIT0gLTEpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0gIT0gbnVsbCkgeyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdLnBhdGNoVmFsdWUodHJ1ZSk7IH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2Zvcm1rZXkgKyAnX18nICsgYXV0b3NlbHZhbF0gIT0gbnVsbCkgeyB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmb3Jta2V5ICsgJ19fJyArIGF1dG9zZWx2YWxdLnBhdGNoVmFsdWUoZmFsc2UpOyB9XG5cbiAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyBlbmQgb2YgaWZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAnc2hvd2ZpZWxkbG9hZGVyJykge1xuICAgICAgICAgICAgICB0aGlzLmZpZWxkbG9hZGluZyA9IHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC5maWVsZCA9PSAnYWRkZnJvbWNvbnRyb2wnKSB7XG4gICAgICAgICAgICAgIHRoaXMubWFuYWdlZnJvbWNvbnRyb2wodGhpcy5mb3JtZmllbGRyZWZyZXNoZGF0YXZhbC52YWx1ZSwgJ2FkZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwuZmllbGQgPT0gJ3JlbW92ZWZyb21jb250cm9sJykge1xuICAgICAgICAgICAgICB0aGlzLm1hbmFnZWZyb21jb250cm9sKHRoaXMuZm9ybWZpZWxkcmVmcmVzaGRhdGF2YWwudmFsdWUsICdyZW1vdmUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgfSwgMCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG5cbiAgZmlsdGVyYXV0b2NvbXBsZXRlKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmlucHV0Ymx1cih2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdjYycsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWUsIGRhdGEudmFsKTtcbiAgICBjb25zdCBmaWVsZHZhbCA9IHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3ZhbF0udmFsdWU7XG4gICAgaWYgKGZpZWxkdmFsID09ICcnIHx8IGZpZWxkdmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZmlsdGVydmFsID0gZGF0YS52YWwuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLnZhbC5pbmNsdWRlcyhmaWVsZHZhbCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBbXTtcbiAgICAgIHRoaXMuZmlsZXJmaWVsZGRhdGEgPSBmaWx0ZXJ2YWw7XG4gICAgICAvLyBjb25zb2xlLmxvZygnZmlsJywgZmlsdGVydmFsKTtcbiAgICB9XG5cbiAgfVxuICByZWxvYWRhdXRvY29tcGxldGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGUgPSB2YWwubmFtZTtcbiAgfVxuXG4gIHJlbW92ZWNoaXBzaW5nbGUodmFsOiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdID0gbnVsbDtcbiAgfVxuICByZW1vdmVjaGlwbXVsdGlwbGUodmFsOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdmFsLm5hbWVdLnNwbGljZShpbmRleCwgMSk7XG4gICAgaWYgKHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0ubGVuZ3RoID09IDApIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVt2YWwubmFtZV0gPSBudWxsO1xuICAgIH1cbiAgfVxuICBzZXRhdXRvY29tcGxldGV2YWx1ZSh2YWw6IGFueSwgZmllbGQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdmZiBhdXRvIGNvbXBsZXRlIHNldCAnLCB2YWwsICcwMDAwMCcsIGZpZWxkKTtcblxuXG5cbiAgICBpZiAoZmllbGQubXVsdGlwbGUgPT0gbnVsbCB8fCB0eXBlb2YgZmllbGQubXVsdGlwbGUgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXSA9IHZhbC5rZXk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbZmllbGQubmFtZV0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtmaWVsZC5uYW1lXS5wdXNoKHZhbC5rZXkpO1xuICAgIH1cbiAgICBcbiAgICBpZiAodGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0gPT0gbnVsbCkge1xuICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0ucGF0Y2hWYWx1ZShcIlwiKTtcbiAgICAgIHRoaXMuaW5wdXRibHVyKGZpZWxkLm5hbWUpO1xuICAgIH1cblxuXG5cbiAgfVxuXG5cbiAgbWFuYWdlZnJvbWNvbnRyb2woZmllbGQ6IGFueSwgdHlwZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ21hbmFnZSBjb250cm9sJywgZmllbGQsIHR5cGUsIGZpZWxkLmxlbmd0aCk7XG4gICAgaWYgKHR5cGUgPT0gJ3JlbW92ZScgJiYgZmllbGQubmFtZSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGQubmFtZSkge1xuICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSwgMSk7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAucmVtb3ZlQ29udHJvbChmaWVsZC5uYW1lKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCcsIGZpZWxkWyduYW1lJ10sICdjJywgeSwgZmllbGQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGUgPT0gJ3JlbW92ZScgJiYgZmllbGQubmFtZSA9PSBudWxsICYmIGZpZWxkLmxlbmd0aCA+IDEpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkLmxlbmd0aCwgJ2ZsJyk7XG4gICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgZm9yIChjb25zdCB6IGluIGZpZWxkKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW3ldLm5hbWUgPT0gZmllbGRbel0pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSwgMSk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5yZW1vdmVDb250cm9sKGZpZWxkW3pdKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZW1vdmVkIGluIGFycmF5IGZvcm0gJywgZmllbGRbel0sICdjIGFyJywgeSwgZmllbGQpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0eXBlID09ICdhZGQnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gYWRkIGZvcm0nKTtcbiAgICAgIGlmIChmaWVsZC5hZnRlciAhPSBudWxsKSB7XG4gICAgICAgIGZvciAoY29uc3QgeSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLmFmdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcy5zcGxpY2UocGFyc2VJbnQoeSkgKyAxLCAwLCBmaWVsZCk7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oMSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWRkZWQgLi4nLCBmaWVsZFsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZmllbGQpID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIGFycmF5IGZvcm0gIGFkZCcpO1xuICAgICAgICAgIGZvciAoY29uc3QgdiBpbiBmaWVsZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB5IGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzKSB7XG4gICAgICAgICAgICAgIGlmIChmaWVsZFt2XSAhPSBudWxsICYmIGZpZWxkW3ZdLm5hbWUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkW3ZdLmFmdGVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KHkpICsgMSwgMCwgZmllbGRbdl0pO1xuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlRm9ybSgxKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXJyYXkgZmllbGQgYWRkZWQgLi4nLCBmaWVsZFt2XVsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH1cblxuICB9XG5cbiAgcmVzZXRmb3JtZGF0YSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5yZXNldCgpO1xuICAgIHRoaXMuZmlsZWFycmF5ID0gW107XG4gICAgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlID0gW107XG4gICAgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlID0gJyc7XG4gIH1cblxuXG4gIGNoZWNrY2hhbmdlKGZpZWxkOiBhbnksIGluZGV4OiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCwgJ2NoYW5nZScsIGluZGV4LCAnaW5kZXgyJyk7XG4gICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW2ZpZWxkLm5hbWVdICE9IG51bGwpIHtcbiAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkLCBmaWVsZHZhbDogdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGQubmFtZV0udmFsdWUsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgIH1cbiAgICBpZiAoZmllbGQuZGVwZW5kZW50ICE9IG51bGwgJiYgZmllbGQuZGVwZW5kZW50Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB2YzogYW55ID0gMDtcbiAgICAgIGZvciAoY29uc3QgbiBpbiBmaWVsZC5kZXBlbmRlbnQpIHtcblxuICAgICAgICBpZiAoZmllbGQuZGVwZW5kZW50W25dLmNvbmR2YWwudG9TdHJpbmcoKSA9PSB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tmaWVsZC5uYW1lXS52YWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgICAgLy8gbGV0IHRlbXZhbGlkYXRpb25ydWxldDogYW55ID0gW107XG4gICAgICAgICAgdmMrKztcbiAgICAgICAgICAvLyB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lLCBuZXcgRm9ybUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLnZhbHVlLCB0ZW12YWxpZGF0aW9ucnVsZXQpKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnbm5ubm4nLCAnLS0nLCBwYXJzZUludChpbmRleCArIDEgKyBwYXJzZUludCh2YykpLCAnLS0nLCB2YyArIGluZGV4ICsgMSwgaW5kZXgsIHZjLCBmaWVsZC5kZXBlbmRlbnRbbl0uZmllbGRbJ25hbWUnXSk7XG4gICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMuc3BsaWNlKHBhcnNlSW50KGluZGV4ICsgcGFyc2VJbnQodmMpKSwgMCwgZmllbGQuZGVwZW5kZW50W25dLmZpZWxkKTtcbiAgICAgICAgICB0aGlzLmNyZWF0ZUZvcm0oMSk7XG5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IHkgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1t5XS5uYW1lID09IGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZC5uYW1lKSB7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzLnNwbGljZShwYXJzZUludCh5KSwgMSk7XG4gICAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlbW92ZUNvbnRyb2woZmllbGQuZGVwZW5kZW50W25dLmZpZWxkLm5hbWUpO1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVtb3ZlZCcsIGZpZWxkLmRlcGVuZGVudFtuXS5maWVsZFsnbmFtZSddLCAnYycsIHkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuXG4gIGNyZWF0ZUZvcm0oaW5pdGlhbGl6ZTogYW55ID0gMCkge1xuICAgIC8qdGhpcy5mb3JtR3JvdXAgPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICdlbWFpbCc6IFtudWxsLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5wYXR0ZXJuKGVtYWlscmVnZXgpXSwgdGhpcy5jaGVja0luVXNlRW1haWxdLFxuICAgICAgJ2Z1bGxuYW1lJzogW251bGwsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAvLyAncGFzc3dvcmQnOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIHRoaXMuY2hlY2tQYXNzd29yZF1dLFxuICAgICAgLy8nZGVzY3JpcHRpb24nOiBbbnVsbCwgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDUpLCBWYWxpZGF0b3JzLm1heExlbmd0aCgxMCldXSxcbiAgICAgIC8vJ3ZhbGlkYXRlJzogJydcbiAgICB9KTsqL1xuICAgIC8vIGxldCBkZW1vQXJyYXk6YW55PVtdO1xuICAgIGlmIChpbml0aWFsaXplID09IDApIHtcbiAgICAgIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7fSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLCAnZmcnKVxuICAgIGZvciAoY29uc3QgbiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dXSA9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRlbWNvbnRyb2xhcnI6IGFueSA9IFtdO1xuICAgICAgICBjb25zdCB0ZW12YWxpZGF0aW9ucnVsZTogYW55ID0gW107XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgdGVtY29udHJvbGFyci5wdXNoKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2goJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2ZpbGUnKSB7XG4gICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgLy91c2UgZm9yIGRlbGV0ZSBkYXRhXG4gICAgICAgICAgICB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5sb2FkZmlsZSA9IDE7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZmEgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0pIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Z2JywgZmEpO1xuICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZnInLCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS51cGxvYWRlZCA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmxvYWRmaWxlID0gMTtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbyAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmltYWdlY3JvcHBlZHJhdGlvbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbyAhPSAnJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpby5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uYXNwZWN0cmF0aW8gPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5hc3BlY3RyYXRpbztcbiAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5pbWFnZWNyb3BwZWRyYXRpb2xhYmVsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uaW1hZ2Vjcm9wcGVkcmF0aW9sYWJlbDtcblxuICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgYyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0pIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV1bZmFdLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdW2ZhXS5hc3BlY3RyYXRpb1tjXSkudG9GaXhlZCgyKTtcbiAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXVtmYV0uaW1hZ2VmaWVsZHMgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5pbWFnZWZpZWxkcztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlY291bnRbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0gPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZV0udXBsb2FkZWQgPSAxO1xuICAgICAgICAgICAgICAvL3VzZSBmb3IgZGVsZXRlIGRhdGFcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubG9hZGZpbGUgPSAxO1xuICAgICAgICAgICAgICB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXS5sb2FkZmlsZSA9IDE7XG5cbiAgICAgICAgICAgICAgLy8gZm9yIChsZXQgYyBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSkge1xuICAgICAgICAgICAgICAvLyAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLmFzcGVjdHJhdGlvW2NdKS50b0ZpeGVkKDIpO1xuICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXksICdmaWxlYXJyYXknKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2NoZWNrYm94JyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm11bHRpcGxlID09IHRydWUpIHtcbiAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgPT0gbnVsbCkgeyB0ZW1jb250cm9sYXJyLnB1c2goW10pOyB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIGNvbnN0IHRjaGFycjogYW55ID0gW107XG4gICAgICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYicsIGIsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtiXSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUuaW5jbHVkZXModGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2JdLmtleSkpIHtcbiAgICAgICAgICAgICAgICAgIHRjaGFyci5wdXNoKHRydWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7IHRjaGFyci5wdXNoKGZhbHNlKTsgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8vIHB1c2ggdGhlIHZhbFxuICAgICAgICAgICAgICB0ZW1jb250cm9sYXJyLnB1c2godGNoYXJyKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RjaCcsIHRjaGFycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9ucykge1xuICAgICAgICAgICAgLy8gc2V0VGltZW91dCggKCk9PntcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5tZXNzYWdlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ubWVzc2FnZSA9ICdOb3QgVmFsaWQgISEnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ3JlcXVpcmVkJykge1xuICAgICAgICAgICAgICB0ZW12YWxpZGF0aW9ucnVsZS5wdXNoKFZhbGlkYXRvcnMucmVxdWlyZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ21hdGNoJykge1xuICAgICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5zZXRWYWxpZGF0b3JzKHRoaXMuY2hlY2tQYXNzd29yZHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbGlkYXRpb25zW3ZdLnJ1bGUgPT0gJ2F1dG9yZXF1aXJlZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuc2V0VmFsaWRhdG9ycyh0aGlzLmF1dG9yZXF1aXJlZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0ucnVsZSA9PSAncGF0dGVybicpIHtcbiAgICAgICAgICAgICAgdGVtdmFsaWRhdGlvbnJ1bGUucHVzaChWYWxpZGF0b3JzLnBhdHRlcm4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXhMZW5ndGgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXhMZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtaW4nKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW4odGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtYXgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5tYXgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxpZGF0aW9uc1t2XS5ydWxlID09ICdtaW5MZW5ndGgnKSB7XG4gICAgICAgICAgICAgIHRlbXZhbGlkYXRpb25ydWxlLnB1c2goVmFsaWRhdG9ycy5taW5MZW5ndGgodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsaWRhdGlvbnNbdl0udmFsdWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIH0sMCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ3dyYXBfJyArIGZpZWxkcy5uYW1lICsgJ18nICsgdmFscy5rZXkpLmNsYXNzTGlzdC5hZGQoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgICAgIC8vIGRlbW9BcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXT1uZXcgRm9ybUNvbnRyb2woJycpO1xuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdpbWFnZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ3dyYXBfJyArIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUgKyAnXycgKyB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSkuY2xhc3NMaXN0LmFkZCgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICAgICAgICB9LCA0MDAwKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS50eXBlID09ICdjaGVja2JveCcgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgbGV0IHRjaHZhcjogYW55ID0gZmFsc2U7XG4gICAgICAgICAgLy8gbGV0XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Z2ID8/PyAnLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUpO1xuICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSwgbmV3IEZvcm1BcnJheShbXSkpO1xuICAgICAgICAgIGZvciAoY29uc3QgaiBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluY2x1ZGVzKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFtqXS5rZXkpKSB7XG4gICAgICAgICAgICAgIHRjaHZhciA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgeyB0Y2h2YXIgPSBmYWxzZTsgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ24nLCBuLCBqLCB0Y2h2YXIpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lICsgJ19fJyArIGosIG5ldyBGb3JtQ29udHJvbCh0Y2h2YXIsIHRlbXZhbGlkYXRpb25ydWxlKSk7XG4gICAgICAgICAgICAvLyBpZigpXG4gICAgICAgICAgICAvKmNvbnN0IGNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2wodGNodmFyKTsgLy8gaWYgZmlyc3QgaXRlbSBzZXQgdG8gdHJ1ZSwgZWxzZSBmYWxzZVxuICAgICAgICh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lXSBhcyBGb3JtQXJyYXkpLnB1c2goY29udHJvbCk7Ki9cbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUdyb3VwLmFkZENvbnRyb2wodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubmFtZSx0aGlzLmZvcm1CdWlsZGVyLmFycmF5KFtcbiAgICAgICAgICAgIC8vIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0Y2h2YXIpXG4gICAgICAgICAgICAvLyBdKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLyp0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsdGhpcy5mb3JtQnVpbGRlci5hcnJheShbXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbChmYWxzZSksXG4gICAgICAgIHRoaXMuZm9ybUJ1aWxkZXIuY29udHJvbCh0cnVlKSxcbiAgICAgICAgdGhpcy5mb3JtQnVpbGRlci5jb250cm9sKHRydWUpLFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmNvbnRyb2woZmFsc2UpLFxuICAgICAgXSkpOyovXG4gICAgICAgICAgLy8gdGhpcy5mb3JtR3JvdXAuYWRkQ29udHJvbCh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5uYW1lLCBuZXcgRm9ybUNvbnRyb2wodGVtY29udHJvbGFyclswXSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5hZGRDb250cm9sKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLm5hbWUsIG5ldyBGb3JtQ29udHJvbCh7IHZhbHVlOiB0ZW1jb250cm9sYXJyWzBdLCBkaXNhYmxlZDogdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0uZGlzYWJsZWQgfSwgdGVtdmFsaWRhdGlvbnJ1bGUpKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBhdCBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWwpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdCAuLi4nLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWxbYXRdLCBhdCwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsdWUpID09ICdvYmplY3QnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbHVlLmluZGV4T2YodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XS5rZXkpICE9IC0xKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dLnZhbFthdF0ua2V5LCAnbXVsdGkgYXV0b2NvbXBsZXRlIHRyaWdnZXJlZCAgISEgJyk7XG4gICAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsW2F0XSwgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udHlwZSA9PSAnYXV0b2NvbXBsZXRlJyAmJiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0ubXVsdGlwbGUgPT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS5tdWx0aXBsZSA9PSBmYWxzZSkpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2luZ2xlIGF1dG8gY29tcGxldGUgdHJpZ2dlciBibG9jaycsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcblxuICAgICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXS52YWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc2V0IGF1dG8gY29tcGxldGUgc2luZ2xlIHRyaWdnZXJlZCcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW25dKTtcbiAgICAgICAgICAgIHRoaXMuc2V0YXV0b2NvbXBsZXRldmFsdWUodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbl0udmFsWzBdLCB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1tuXSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyAnbmV3Q29udHJvbCcsIG5ldyBGb3JtQ29udHJvbCgnJywgVmFsaWRhdG9ycy5yZXF1aXJlZClcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gPXRoaXMuY2hlY2tQYXNzd29yZHModGhpcy5mb3JtR3JvdXApO1xuICAgIC8vIHRoaXMuZm9ybUdyb3VwID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cChkZW1vQXJyYXkpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cCwnZmcnLGRlbW9BcnJheSk7XG4gICAgICB0aGlzLnNob3dmb3JtID0gdHJ1ZTtcbiAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLnN1Ym1pdGFjdGl2ZSA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuZm9ybWRhdGF2YWwuc3VibWl0YWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdncnAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9scyk7XG4gICAgfSwgMTApO1xuXG4gIH1cblxuICBzZXRDaGFuZ2VWYWxpZGF0ZSgpIHtcbiAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ3ZhbGlkYXRlJykudmFsdWVDaGFuZ2VzLnN1YnNjcmliZShcbiAgICAgICh2YWxpZGF0ZSkgPT4ge1xuICAgICAgICBpZiAodmFsaWRhdGUgPT0gJzEnKSB7XG4gICAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykuc2V0VmFsaWRhdG9ycyhbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMyldKTtcbiAgICAgICAgICB0aGlzLnRpdGxlQWxlcnQgPSAnWW91IG5lZWQgdG8gc3BlY2lmeSBhdCBsZWFzdCAzIGNoYXJhY3RlcnMnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnbmFtZScpLnNldFZhbGlkYXRvcnMoVmFsaWRhdG9ycy5yZXF1aXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuZ2V0KCduYW1lJykudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xuICAgICAgfVxuICAgICk7XG4gIH1cbiAgc2V0cGhvbmVudW1iZXJWYWxpZGF0ZShldmVudDogYW55KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC52YWx1ZS5sZW5ndGggPCAxNCkge1xuICAgICAgY29uc29sZS5sb2coXCJub3QgY29ycmVjdFwiKTtcbiAgICAgIHRoaXMubnVtYmVyRm9ybWF0RmxhZyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiY29ycmVjdFwiKTtcbiAgICAgIHRoaXMubnVtYmVyRm9ybWF0RmxhZyA9IGZhbHNlO1xuICAgIH1cblxuXG4gIH1cblxuXG5cblxuICBjaG9vc2VpbWcodmFsczogYW55LCBmaWVsZHM6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHMsIGZpZWxkcyk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmltZ3dyYXBwZXInKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGxldCBlbGVtOiBhbnk7XG4gICAgICBlbGVtID0gZWw7XG4gICAgICAvLyBlbGVtLnN0eWxlLnRyYW5zaXRpb24gPSBcIm9wYWNpdHkgMC41cyBsaW5lYXIgMHNcIjtcbiAgICAgIC8vIGVsZW0uc3R5bGUub3BhY2l0eSA9IDAuNTtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaW1hZ2VjaG9pY2VhY3RpdmUnKTtcbiAgICB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaW1nd3JhcF8nICsgZmllbGRzLm5hbWUgKyAnXycgKyB2YWxzLmtleSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmltZ3dyYXBfJyArIGZpZWxkcy5uYW1lICsgJ18nICsgdmFscy5rZXkpLmNsYXNzTGlzdC5hZGQoJ2ltYWdlY2hvaWNlYWN0aXZlJyk7XG4gICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZmllbGRzLm5hbWVdLnBhdGNoVmFsdWUodmFscy5rZXkpO1xuICB9XG4gIGNoZWNrUGFzc3dvcmRzKGdyb3VwOiBGb3JtR3JvdXApIHsgLy8gaGVyZSB3ZSBoYXZlIHRoZSAncGFzc3dvcmRzJyBncm91cFxuICAgIGNvbnN0IHBhc3MgPSBncm91cC5jb250cm9scy5wYXNzd29yZC52YWx1ZTtcbiAgICBjb25zdCBjb25maXJtUGFzcyA9IGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC52YWx1ZTtcbiAgICBpZiAoY29uZmlybVBhc3MgPT0gbnVsbCB8fCBjb25maXJtUGFzcyA9PSAnJykge1xuICAgICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7IHJlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgcmV0dXJuIHsgcmVxdWlyZWQ6IHRydWUgfTtcbiAgICB9XG4gICAgaWYgKHBhc3MgIT0gY29uZmlybVBhc3MpIHtcbiAgICAgIGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC5zZXRFcnJvcnMoeyBtYXRjaDogdHJ1ZSB9KTtcbiAgICAgIHJldHVybiB7IG1hdGNoOiB0cnVlIH07XG4gICAgfVxuXG4gICAgLy8gcmV0dXJuIHBhc3MgPT09IGNvbmZpcm1QYXNzID8gbnVsbCA6IHsgbm90U2FtZTogdHJ1ZSB9XG4gIH1cbiAgY2hlY2tQYXNzd29yZChjb250cm9sKSB7XG4gICAgY29uc3QgZW50ZXJlZFBhc3N3b3JkID0gY29udHJvbC52YWx1ZTtcbiAgICBjb25zdCBwYXNzd29yZENoZWNrID0gL14oPz0uKlthLXpdKSg/PS4qW0EtWl0pKD89LipbMC05XSkoPz0uezgsfSkvO1xuICAgIHJldHVybiAoIXBhc3N3b3JkQ2hlY2sudGVzdChlbnRlcmVkUGFzc3dvcmQpICYmIGVudGVyZWRQYXNzd29yZCkgPyB7IHJlcXVpcmVtZW50czogdHJ1ZSB9IDogbnVsbDtcbiAgfVxuICBhdXRvcmVxdWlyZWQoZ3JvdXA6IGFueSkgeyAvLyBoZXJlIHdlIGhhdmUgdGhlICdwYXNzd29yZHMnIGdyb3VwXG5cbiAgICBmb3IgKGNvbnN0IGIgaW4gZ3JvdXApIHtcbiAgICAgIGlmIChncm91cFtiXS50eXBlID09ICdhdXRvY29tcGxldGUnICYmIGdyb3VwW2JdLnZhbGlkYXRpb25zICE9IG51bGwgJiYgZ3JvdXBbYl0udmFsaWRhdGlvbnNbMF0gIT0gbnVsbCAmJiBncm91cFtiXS52YWxpZGF0aW9uc1swXS5ydWxlID09ICdhdXRvcmVxdWlyZWQnICYmIHRoaXMuYXV0b2NvbXBsZXRlZmlsZWR2YWx1ZVtncm91cFtiXS5uYW1lXSA9PSBudWxsKSB7XG5cbiAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbZ3JvdXAubmFtZV0uc2V0RXJyb3JzKHsgYXV0b3JlcXVpcmVkOiB0cnVlIH0pO1xuICAgICAgICByZXR1cm4geyBhdXRvcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2JncnJyJyxncm91cCxncm91cC5uYW1lKTtcbiAgICAvLyBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1tncm91cC5uYW1lXSAhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnMhPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0hPW51bGwgJiYgZ3JvdXAudmFsaWRhdGlvbnNbMF0ucnVsZT09J2F1dG9yZXF1aXJlZCcgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW2dyb3VwLm5hbWVdPT1udWxsKXtcblxuXG5cbiAgICAvLyBsZXQgcGFzcyA9IGdyb3VwLmNvbnRyb2xzLnBhc3N3b3JkLnZhbHVlO1xuICAgIC8vIGxldCBjb25maXJtUGFzcyA9IGdyb3VwLmNvbnRyb2xzLmNvbmZpcm1wYXNzd29yZC52YWx1ZTtcbiAgICAvLyBpZihjb25maXJtUGFzcz09bnVsbCB8fCBjb25maXJtUGFzcz09Jycpe1xuICAgIC8vICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7cmVxdWlyZWQ6dHJ1ZX0pO1xuICAgIC8vICAgcmV0dXJuIHsgcmVxdWlyZWQ6IHRydWUgfTtcbiAgICAvLyB9XG4gICAgLy8gaWYocGFzcyE9Y29uZmlybVBhc3Mpe1xuICAgIC8vICAgZ3JvdXAuY29udHJvbHMuY29uZmlybXBhc3N3b3JkLnNldEVycm9ycyh7J21hdGNoJzp0cnVlfSk7XG4gICAgLy8gICByZXR1cm4ge21hdGNoOnRydWV9O1xuICAgIC8vIH1cblxuICAgIC8vIHJldHVybiBwYXNzID09PSBjb25maXJtUGFzcyA/IG51bGwgOiB7IG5vdFNhbWU6IHRydWUgfVxuICB9XG5cbiAgY2hlY2tJblVzZUVtYWlsKGNvbnRyb2wpIHtcbiAgICAvLyBtaW1pYyBodHRwIGRhdGFiYXNlIGFjY2Vzc1xuICAgIGNvbnN0IGRiID0gWyd0b255QGdtYWlsLmNvbSddO1xuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZShvYnNlcnZlciA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gKGRiLmluZGV4T2YoY29udHJvbC52YWx1ZSkgIT09IC0xKSA/IHsgYWxyZWFkeUluVXNlOiB0cnVlIH0gOiBudWxsO1xuICAgICAgICBvYnNlcnZlci5uZXh0KHJlc3VsdCk7XG4gICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XG4gICAgICB9LCA0MDAwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldEVycm9yKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdnZXRFcnJvcicsIGRhdGEpO1xuICAgIHJldHVybiB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ3JlcXVpcmVkJykgPyAnRmllbGQgaXMgcmVxdWlyZWQnIDpcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgnZW1haWwnKS5oYXNFcnJvcigncGF0dGVybicpID8gJ05vdCBhIHZhbGlkIGVtYWlsYWRkcmVzcycgOlxuICAgICAgICB0aGlzLmZvcm1Hcm91cC5nZXQoJ2VtYWlsJykuaGFzRXJyb3IoJ2FscmVhZHlJblVzZScpID8gJ1RoaXMgZW1haWxhZGRyZXNzIGlzIGFscmVhZHkgaW4gdXNlJyA6ICcnO1xuICB9XG5cbiAgZ2V0RXJyb3JQYXNzd29yZCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb3JtR3JvdXAuZ2V0KCdwYXNzd29yZCcpLmhhc0Vycm9yKCdyZXF1aXJlZCcpID8gJ0ZpZWxkIGlzIHJlcXVpcmVkIChhdCBsZWFzdCBlaWdodCBjaGFyYWN0ZXJzLCBvbmUgdXBwZXJjYXNlIGxldHRlciBhbmQgb25lIG51bWJlciknIDpcbiAgICAgIHRoaXMuZm9ybUdyb3VwLmdldCgncGFzc3dvcmQnKS5oYXNFcnJvcigncmVxdWlyZW1lbnRzJykgPyAnUGFzc3dvcmQgbmVlZHMgdG8gYmUgYXQgbGVhc3QgZWlnaHQgY2hhcmFjdGVycywgb25lIHVwcGVyY2FzZSBsZXR0ZXIgYW5kIG9uZSBudW1iZXInIDogJyc7XG4gIH1cblxuICBvblN1Ym1pdChwb3N0KSB7XG4gICAgdGhpcy5wb3N0ID0gcG9zdDtcbiAgICBjb25zdCB0ZW1wZm9ybXZhbDogYW55ID0ge307XG4gICAgZm9yIChjb25zdCB4IGluIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS5lcnJvcnMsIHgsICdlcnInKTtcbiAgICAgIC8vIGlmKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbGlkKXtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd4Jyx0aGlzLmZvcm1Hcm91cCk7XG4gICAgICBjb25zdCBiID0geC5zcGxpdCgnX18nKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdiJyxiLGIubGVuZ3RoLGJbMF0pO1xuXG5cbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkcykge1xuXG4gICAgICAgIGlmICh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS50eXBlID09ICdmaWxlJyAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSA9PSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwpIHtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLCAnPj4/Pz09PT0gbm90IG51bGwgc3VibWl0ICsrKysnKVxuXG4gICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udXBsb2FkZWQgIT0gbnVsbCAmJiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS51cGxvYWRlZCA9PSAxICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmxvYWRmaWxlID09IDEpIHtcbiAgICAgICAgICAgIC8vIGZpbGVzZXJ2ZXJuYW1lOiBcIlRlc3QtMTU4OTIxNjk5MjM5Mk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZDogMTU4OTE3NDQ3NzUwNFxuICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkRGF0ZTogTW9uIE1heSAxMSAyMDIwIDEwOiA1MTogMTcgR01UICsgMDUzMChJbmRpYSBTdGFuZGFyZCBUaW1lKSB7IH1cbiAgICAgICAgICAgIC8vIG5hbWU6IFwiTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgLy8gc2l6ZTogMTM1MDk2XG4gICAgICAgICAgICAvLyB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgLy8gdXBsb2FkZWQ6IDFcblxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXSwgJz4+Pz8gZmlsZSBzdWJtaXQgc3MnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0sICc+Pj8/PT09PSBmaWxlIHN1Ym1pdCBsb2FkZmlsZSAxID09PScpXG5cbiAgICAgICAgICAgIGNvbnN0IHRmaWxlOiBhbnkgPSB7fTtcblxuXG4gICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udHlwZSA9PSAnaW1hZ2UvcG5nJyB8fCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS50eXBlID09ICdpbWFnZS9qcGcnIHx8IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnR5cGUgPT0gJ2ltYWdlL2pwZWcnKSB7XG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYXNwZWN0cmF0aW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRmaWxlLmFzcGVjdHJhdGlvID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYXNwZWN0cmF0aW87XG5cbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjIGluIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmNyb3BwZWRpbWFnZWFycmF5KSB7XG4gICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uY3JvcHBlZGltYWdlYXJyYXlbY10uZmlsZTtcbiAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5jcm9wcGVkaW1hZ2VhcnJheVtjXS5iYXNlNjQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGZpbGUuY3JvcHBlZGltYWdlYXJyYXkgPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5jcm9wcGVkaW1hZ2VhcnJheTtcblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuXG5cblxuICAgICAgICAgICAgdGZpbGUuZmlsZXNlcnZlcm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5maWxlc2VydmVybmFtZTtcbiAgICAgICAgICAgIHRmaWxlLm5hbWUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5uYW1lO1xuICAgICAgICAgICAgdGZpbGUuc2l6ZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnNpemU7XG4gICAgICAgICAgICB0ZmlsZS50eXBlID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0udHlwZTtcbiAgICAgICAgICAgIHRmaWxlLnBhdGggPSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5wYXRoO1xuICAgICAgICAgICAgdGZpbGUuYnVja2V0ID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYnVja2V0O1xuICAgICAgICAgICAgdGZpbGUuYmFzZXVybCA9IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLmJhc2V1cmw7XG5cbiAgICAgICAgICAgIHRmaWxlLmltYWdlZmllbGRzID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uaW1hZ2VmaWVsZHM7XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnBhdGNoVmFsdWUodGZpbGUpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGZpbGUsICdzaW5nbGUgdGZpbGU+PicsKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmxvYWRmaWxlID09IDApIHtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0sICc+Pj8/PT09PSBmaWxlIGxvYWRmaWxlIDAgPT09JylcblxuICAgICAgICAgICAgY29uc3QgdGZpbGU6IGFueSA9IHt9O1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0ucGF0Y2hWYWx1ZSh0ZmlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZmlsZScgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubXVsdGlwbGUgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5tdWx0aXBsZSA9PSB0cnVlKSB7XG4gICAgICAgICAgY29uc3QgdGZpbGVhcnI6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgZyBpbiB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSkge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXSwgJ3RoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICs9PT09PT09PScpXG5cbiAgICAgICAgICAgIGlmICh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXSAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnVwbG9hZGVkID09IDEpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10sICd0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXScpXG4gICAgICAgICAgICAgIC8vIGZpbGVzZXJ2ZXJuYW1lOiBcIlRlc3QtMTU4OTIxNjk5MjM5Mk15IFNhdmVkIFNjaGVtYS5qc29uXCJcbiAgICAgICAgICAgICAgLy8gbGFzdE1vZGlmaWVkOiAxNTg5MTc0NDc3NTA0XG4gICAgICAgICAgICAgIC8vIGxhc3RNb2RpZmllZERhdGU6IE1vbiBNYXkgMTEgMjAyMCAxMDogNTE6IDE3IEdNVCArIDA1MzAoSW5kaWEgU3RhbmRhcmQgVGltZSkgeyB9XG4gICAgICAgICAgICAgIC8vIG5hbWU6IFwiTXkgU2F2ZWQgU2NoZW1hLmpzb25cIlxuICAgICAgICAgICAgICAvLyBzaXplOiAxMzUwOTZcbiAgICAgICAgICAgICAgLy8gdHlwZTogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgICAgICAgICAgLy8gdXBsb2FkZWQ6IDFcbiAgICAgICAgICAgICAgY29uc3QgdGZpbGU6IGFueSA9IHt9O1xuXG5cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnR5cGUgPT0gJ2ltYWdlL3BuZycgfHwgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udHlwZSA9PSAnaW1hZ2UvanBnJyB8fCB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS50eXBlID09ICdpbWFnZS9qcGVnJykge1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmFzcGVjdHJhdGlvICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uYXNwZWN0cmF0aW8ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgdGZpbGUuYXNwZWN0cmF0aW8gPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5hc3BlY3RyYXRpbztcbiAgICAgICAgICAgICAgICAgIHRmaWxlLmNyb3BwZWRpbWFnZWFycmF5ID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uY3JvcHBlZGltYWdlYXJyYXk7XG5cbiAgICAgICAgICAgICAgICAgIGZvciAobGV0IGMgaW4gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uY3JvcHBlZGltYWdlYXJyYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmNyb3BwZWRpbWFnZWFycmF5W2NdLmJhc2U2NDtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmNyb3BwZWRpbWFnZWFycmF5W2NdLmZpbGU7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHRmaWxlLmNyb3BwZWRpbWFnZWFycmF5ID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uY3JvcHBlZGltYWdlYXJyYXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICB0ZmlsZS5maWxlc2VydmVybmFtZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZpbGVzZXJ2ZXJuYW1lO1xuICAgICAgICAgICAgICB0ZmlsZS5uYW1lID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10ubmFtZTtcbiAgICAgICAgICAgICAgdGZpbGUuc2l6ZSA9IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLnNpemU7XG4gICAgICAgICAgICAgIHRmaWxlLnR5cGUgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS50eXBlO1xuICAgICAgICAgICAgICB0ZmlsZS5wYXRoID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ucGF0aDtcbiAgICAgICAgICAgICAgdGZpbGUuYnVja2V0ID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYnVja2V0O1xuICAgICAgICAgICAgICB0ZmlsZS5iYXNldXJsID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uYmFzZXVybDtcblxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZmlsZSwgJ3RmaWxlKysnKVxuXG4gICAgICAgICAgICAgIC8vIHRmaWxlLmltYWdlZmllbGRzID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uaW1hZ2VmaWVsZHM7IGZsZHNcblxuICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uaW1hZ2VmaWVsZHMgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5pbWFnZWZpZWxkcy5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzLCAnZmxkcyAnKVxuXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uaW1hZ2VmaWVsZHMsICdpbWFnZWZpZWxkcycpXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcyAhPSBudWxsICYmIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHMubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgICB0ZmlsZS5pbWdmaWVsZHMgPSB0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzO1xuXG4gICAgICAgICAgICAgICAgICB0ZmlsZS5mbGRzID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkcztcblxuICAgICAgICAgICAgICAgICAgLy8gZm9yIChsZXQgaW1nIGluIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmltYWdlZmllbGRzKSB7XG4gICAgICAgICAgICAgICAgICAvLyAgIGZvciAobGV0IGZsIGluIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmZsZHMpIHtcbiAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkc1tmbF0ua2V5ID09IHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmltYWdlZmllbGRzW2ltZ10ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ2ltYWdlZmllbGRzJywgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uaW1hZ2VmaWVsZHNbaW1nXSlcbiAgICAgICAgICAgICAgICAgIC8vICAgICAgIHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddLmltYWdlZmllbGRzW2ltZ10udmFsID0gdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10uZmxkc1tmbF0udmFsdWVcbiAgICAgICAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgICAgICAgLy8gdGZpbGUuaW1nZmllbGRzID0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0uaW1hZ2VmaWVsZHM7XG5cbiAgICAgICAgICAgICAgICAgIC8vIHRmaWxlLmltZ2ZpbD10aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXVtnXS5mbGRzO1xuXG4gICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGZpbGUrKysrPicsIHRmaWxlKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRmaWxlYXJyLnB1c2godGZpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZmlsZWFycmF5W3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdW2ddICE9IG51bGwgJiYgdGhpcy5maWxlYXJyYXlbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV1bZ10udXBsb2FkZWQgPT0gMikge1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpbGVhcnJheVt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSwgJz09PT09PT09KysrKyB1cGxvYWQgMicpXG4gICAgICAgICAgICAvLyB9XG5cbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLnBhdGNoVmFsdWUodGZpbGVhcnIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnR5cGUgPT0gJ2F1dG9jb21wbGV0ZScpIHtcbiAgICAgICAgICBpZiAodGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlICE9IG51bGwgJiYgdGhpcy5hdXRvY29tcGxldGVmaWxlZHZhbHVlW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdICE9IG51bGwgJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udmFsaWRhdGlvbnMgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvcicsIHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3RoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWVdLmVycm9ycyk7XG4gICAgICAgICAgICB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5zZXRFcnJvcnMoeyByZXF1aXJlZDogbnVsbCB9KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvZXJyb3IgYWZ0ZXIgJywgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uZXJyb3JzKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2F1dG9lcnJvciBzZXQnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuICAgICAgICAgICAgdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV0uc2V0RXJyb3JzKHsgcmVxdWlyZWQ6IHRydWUgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXV0b2Vycm9yIHNldCBhZnRlciAnLCB0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5lcnJvcnMpO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh4ID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGVtcGZvcm12YWxbeF0gPSB0aGlzLmF1dG9jb21wbGV0ZWZpbGVkdmFsdWVbdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAoYi5sZW5ndGggPiAxICYmIGJbMF0gPT0gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0ubmFtZSAmJiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lICE9IHggJiYgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnY2hlY2tib3gnICYmIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm11bHRpcGxlICE9IG51bGwpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWFhYWZmLi4uJyk7XG4gICAgICAgICAgaWYgKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlID09IHRydWUpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgayBpbiB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS52YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLnZhbFtrXS5rZXkgPT0gYlsxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXSA9IFtdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0ZW1wZm9ybXZhbFt0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lXS5wdXNoKGJbMV0pO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdndicsIGJbMV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICAvL2ZvciBtdWx0aXBsZSBlbWFpbCBhZGRcbiAgICAgICAgLy8gaWYodGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbbV0udHlwZSA9PSAnZW1haWwnKXtcbiAgICAgICAgLy8gICBpZih0aGlzLmZvcm1Hcm91cC5jb250cm9sc1t4XS52YWx1ZSA9PSB0cnVlKXtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLCc9PXRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dKysnLHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLnZhbHVlLCc/PycsdGVtcGZvcm12YWwsJz4+PicsYlswXSlcbiAgICAgICAgLy8gICAgIC8vIGZvcihsZXQgaSAgaW4gdGVtcGZvcm12YWwpe1xuICAgICAgICAvLyAgICAgLy8gICBpZih0ZW1wZm9ybXZhbFtpXSA9PSB0aGlzLmZvcm1kYXRhdmFsLmZpZWxkc1ttXS5uYW1lLm1hdGNoKCcvZW1haWwvZycpKXtcbiAgICAgICAgLy8gICAgIC8vICAgICBjb25zb2xlLmxvZyh0ZW1wZm9ybXZhbFtpXSwndGVtcGZvcm12YWxbaV0nKVxuICAgICAgICAvLyAgICAgLy8gICB9XG4gICAgICAgIC8vICAgICAvLyB9XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyB9XG5cblxuXG4gICAgICAgIC8vIGVsc2V7XG4gICAgICAgIGlmICh4ID09IHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW21dLm5hbWUgJiYgdGVtcGZvcm12YWxbeF0gPT0gbnVsbCkge1xuICAgICAgICAgIHRlbXBmb3JtdmFsW3hdID0gdGhpcy5mb3JtR3JvdXAuY29udHJvbHNbeF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gIH1cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZm9ybUdyb3VwLmNvbnRyb2xzW3hdLmVycm9ycywgeCwgJ2VycjIyJyk7XG4gICAgICAvLyB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHBvc3QsICdwb3N0JywgdGhpcy5mb3JtR3JvdXAudmFsaWQsIHRoaXMuZm9ybWRhdGF2YWwsIHRoaXMuZm9ybWRhdGF2YWwuYXBpVXJsLCAnZmZmZicsIHRlbXBmb3JtdmFsKTtcblxuICAgIC8vIGlmICh0aGlzLnBob25lbnVtYmVyVmFsdWUubGVuZ3RoPDE0KSB7XG4gICAgLy8gICB0aGlzLl9zbmFja0Jhci5vcGVuKFwiUGxlYXNlIEVudGVyIGEgdmFsaWQgbnVtYmVyXCIsXCJva1wiLHtcbiAgICAvLyAgICAgZHVyYXRpb246IDEwMDBcbiAgICAvLyAgIH0pXG4gICAgLy8gICByZXR1cm47XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLmZvcm1Hcm91cC52YWxpZCkge1xuICAgICAgLy8gaWYgKHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gbnVsbCB8fCB0aGlzLmZvcm1kYXRhdmFsLmFwaVVybCkge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIGNvbnN0IGxpbms6IGFueSA9IHRoaXMuZm9ybWRhdGF2YWwuYXBpVXJsICsgdGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludDtcbiAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgICBzb3VyY2UuZGF0YSA9IHRoaXMuZm9ybUdyb3VwLnZhbHVlO1xuXG4gICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5zZWNyZXQgIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuICE9IG51bGwpIHtcbiAgICAgICAgc291cmNlLnNlY3JldCA9IHRoaXMuZm9ybWRhdGF2YWwuc2VjcmV0O1xuICAgICAgICBzb3VyY2Uuand0dG9rZW4gPSB0aGlzLmZvcm1kYXRhdmFsLmp3dHRva2VuO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5lbmRwb2ludCAhPSBudWxsICYmIHRoaXMuZm9ybWRhdGF2YWwuZW5kcG9pbnQgIT0gJycpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzLmZvcm1Hcm91cC52YWx1ZVwiLCB0aGlzLmZvcm1Hcm91cC52YWx1ZSk7XG5cbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuZm9ybWRhdGF2YWwuand0dG9rZW4sIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuZm9ybUdyb3VwLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6IHRoaXMuZm9ybWRhdGF2YWwuc3VjY2Vzc21lc3NhZ2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZWQnLCB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCk7XG4gICAgICAgICAgICBpZiAodGhpcy5mb3JtZGF0YXZhbC5yZWRpcmVjdHBhdGggIT0gbnVsbCAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnJyAmJiB0aGlzLmZvcm1kYXRhdmFsLnJlZGlyZWN0cGF0aCAhPSAnLycpIHtcbiAgICAgICAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZm9ybWRhdGF2YWwucmVkaXJlY3RwYXRoXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6IHJlc3VsdC5zdGF0dXMsIGZyb212YWw6IHJlc3VsdCB9KTtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7IGZpZWxkOiAnZnJvbXN1Ym1pdHNlcnZlcmVycm9yJywgZmllbGR2YWw6ICdzZXJ2ZXJlcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlIH0pO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlOyAvL2Rpc2FibGUgbG9hZGVyIFxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXG4gICAgICAgIHRoaXMub25Gb3JtRmllbGRDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgZmllbGQ6ICdmcm9tc3VibWl0JywgZmllbGR2YWw6ICdzdWNjZXNzJywgZm9ybWRhdGF2YWw6IHRoaXMuZm9ybWRhdGF2YWwsIHNvdXJjZTogc291cmNlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcsXG4gICAgICAgICAgZnJvbXZhbDogdGhpcy5mb3JtR3JvdXAudmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5vbkZvcm1GaWVsZENoYW5nZS5lbWl0KHsgZmllbGQ6ICdmcm9tc3VibWl0ZXJyb3InLCBmaWVsZHZhbDogJ3ZhbGlkYXRpb25lcnJvcicsIGZyb212YWw6IHRoaXMuZm9ybUdyb3VwLnZhbHVlLCBsb2FkaW5nOiB0aGlzLmxvYWRpbmcgfSk7XG5cbiAgICAgIHRoaXMuc2Nyb2xsVG9GaXJzdEludmFsaWRDb250cm9sKCk7XG4gICAgfVxuXG4gIH1cblxuICBwcml2YXRlIHNjcm9sbFRvRmlyc3RJbnZhbGlkQ29udHJvbCgpIHtcbiAgICBjb25zdCBmaXJzdEludmFsaWRDb250cm9sOiBIVE1MRWxlbWVudCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcImZvcm0gLm5nLWludmFsaWRcIlxuICAgICk7XG5cbiAgICB3aW5kb3cuc2Nyb2xsKHtcbiAgICAgIHRvcDogdGhpcy5nZXRUb3BPZmZzZXQoZmlyc3RJbnZhbGlkQ29udHJvbCksXG4gICAgICBsZWZ0OiAwLFxuICAgICAgYmVoYXZpb3I6IFwic21vb3RoXCJcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VG9wT2Zmc2V0KGNvbnRyb2xFbDogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICAgIGNvbnN0IGxhYmVsT2Zmc2V0ID0gNTA7XG4gICAgcmV0dXJuIGNvbnRyb2xFbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgKyB3aW5kb3cuc2Nyb2xsWSAtIGxhYmVsT2Zmc2V0O1xuICB9IHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcblxuXG4gIGZpbGVDaGFuZ2VFdmVudChldmVudDogYW55KTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coXCJjaGFuZ2UgZXZlbnQgaGl0dGVkXCIsIGV2ZW50KTtcbiAgICB0aGlzLmltYWdlQ2hhbmdlZEV2ZW50ID0gZXZlbnQ7XG4gIH1cblxuXG4gIHNpbmdsZWltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQsIGZpZWxkLCBpdmFsLCBjaSkge1xuICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmNyb3BwZWRJbWFnZVtjaV0gPSBldmVudC5iYXNlNjQ7XG5cblxuICAgIC8vIGZvciAobGV0IGMgaW4gdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbaXZhbF0uYXNwZWN0cmF0aW8pIHtcbiAgICAvLyAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmFzcGVjdHJhdGlvW2NdKTtcbiAgICAvLyB9XG5cbiAgICAvLyBkZWxldGUgZXZlbnQuYmFzZTY0O1xuICAgIC8vIGRlbGV0ZSBldmVudC5maWxlO1xuICAgIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLmNyb3BwZWRpbWFnZWFycmF5W2NpXSA9IGV2ZW50O1xuXG4gICAgLy8gdGhpcy5jcm9wcGVkSW1hZ2UgPSBldmVudC5iYXNlNjQ7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbaXZhbF0uY3JvcHBlZEltYWdlW2NpXSwgJ3RoaXMuY3JvcHBlZEltYWdlPT09Pj4nKVxuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCAnZXZlbnQrKys2ND09PT09JywgdGhpcy5mb3JtZGF0YXZhbC5maWVsZHNbaXZhbF0sIGZpZWxkLCBjaSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCwgJ2ZpZWxkPT09PT0nKVxuXG4gIH1cblxuICBtdWx0aXBsZWltYWdlQ3JvcHBlZChldmVudDogSW1hZ2VDcm9wcGVkRXZlbnQsIGZpbGVzLCBpdmFsLCBjaSwgZmksIGZsZHZhbCkge1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LCAnZXZlbnQrKys2NCcsIHRoaXMuZm9ybWRhdGF2YWwuZmllbGRzW2l2YWxdLCBmaWxlcywgaXZhbCwgY2ksICcrKysrKysrKysrKysrKysrJywgZmksIGZsZHZhbClcbiAgICBmbGR2YWxbZmldLmNyb3BwZWRJbWFnZVtjaV0gPSBldmVudC5iYXNlNjQ7XG5cbiAgICBmbGR2YWxbZmldLmNyb3BwZWRpbWFnZWFycmF5W2NpXSA9IGV2ZW50O1xuXG4gICAgZm9yIChsZXQgYyBpbiBmbGR2YWxbZmldLmFzcGVjdHJhdGlvKSB7XG4gICAgICBmbGR2YWxbZmldLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKGZsZHZhbFtmaV0uYXNwZWN0cmF0aW9bY10pO1xuICAgIH1cblxuICAgIC8vIHRoaXMuY3JvcHBlZEltYWdlID0gZXZlbnQuYmFzZTY0O1xuICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLCAndGhpcy5jcm9wcGVkSW1hZ2Ugb3V0cHV0PT09Pj4nKVxuICB9XG5cbiAgaW1hZ2VMb2FkZWQoKSB7XG4gICAgLy8gc2hvdyBjcm9wcGVyXG4gIH1cblxuICBjcm9wcGVyUmVhZHkoKSB7XG4gICAgLy8gY3JvcHBlciByZWFkeVxuICB9XG5cbiAgbG9hZEltYWdlRmFpbGVkKCkge1xuICAgIC8vIHNob3cgbWVzc2FnZVxuICB9XG5cbiAgb3BlbnNpbmdsZWltYWdlY3JvcCh2YWwpIHtcblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsICc9PT09PT09PScpO1xuXG4gICAgdmFsLmNyb3BwZWRpbWFnZWFycmF5ID0gW107XG4gICAgdmFsLmNyb3BwZWRJbWFnZSA9IFtdO1xuXG4gICAgLy8gZm9yIChsZXQgYyBpbiB2YWwuYXNwZWN0cmF0aW8pIHtcbiAgICAvLyAgIHZhbC5hc3BlY3RyYXRpb1tjXSA9IE51bWJlcih2YWwuYXNwZWN0cmF0aW9bY10pO1xuICAgIC8vIH1cblxuICAgIHZhciBpbWdVcmwgPSAnaHR0cHM6Ly8nICsgdmFsLnZhbHVlLmJ1Y2tldCArICcuczMuYW1hem9uYXdzLmNvbS8nICsgdmFsLnZhbHVlLnBhdGggKyB2YWwudmFsdWUuZmlsZXNlcnZlcm5hbWU7XG5cbiAgICB0aGlzLmdldEltYWdldG9EYXRhVVJMKGltZ1VybCwgZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFVcmwpXG4gICAgICB2YWwuaW1hZ2VVcmwgPSBkYXRhVXJsO1xuICAgICAgdmFsLnZhbHVlID0gbnVsbDtcbiAgICB9KVxuICAgIC8vIHZhbC5lZGl0SW1hZ2VVcmwgPSAnaHR0cHM6Ly8nICsgdmFsLnZhbHVlLmJ1Y2tldCArICcuczMuYW1hem9uYXdzLmNvbS8nICsgdmFsLnZhbHVlLnBhdGggKyB2YWwudmFsdWUuZmlsZXNlcnZlcm5hbWU7XG4gIH1cblxuICBvcGVuc2luZ2xlaW1hZ2Vjcm9wZm9ybXVsdGlwbGUodmFsKSB7XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwgJz09PT09PT09Jyk7XG5cbiAgICB2YWwuY3JvcHBlZGltYWdlYXJyYXkgPSBbXTtcbiAgICB2YWwuY3JvcHBlZEltYWdlID0gW107XG5cbiAgICAvLyBmb3IgKGxldCBjIGluIHZhbC5hc3BlY3RyYXRpbykge1xuICAgIC8vICAgdmFsLmFzcGVjdHJhdGlvW2NdID0gTnVtYmVyKHZhbC5hc3BlY3RyYXRpb1tjXSk7XG4gICAgLy8gfVxuXG4gICAgdmFyIGltZ1VybCA9ICdodHRwczovLycgKyB2YWwuYnVja2V0ICsgJy5zMy5hbWF6b25hd3MuY29tLycgKyB2YWwucGF0aCArIHZhbC5maWxlc2VydmVybmFtZTtcblxuICAgIC8vIGNvbnNvbGUubG9nKGltZ1VybCwgJ2ltZ1VybCcpXG5cbiAgICB0aGlzLmdldEltYWdldG9EYXRhVVJMKGltZ1VybCwgZnVuY3Rpb24gKGRhdGFVcmwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFVcmwpXG4gICAgICB2YWwuaW1hZ2VVcmwgPSBkYXRhVXJsO1xuICAgIH0pXG4gIH1cblxuXG4gIC8vIGdldCBJbWFnZSB0byBEYXRhIFVSTFxuICBnZXRJbWFnZXRvRGF0YVVSTCh1cmwsIGNhbGxiYWNrKSB7XG4gICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhoci5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbGxiYWNrKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfVxuICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoeGhyLnJlc3BvbnNlKTtcbiAgICB9O1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgeGhyLnNlbmQoKTtcbiAgfVxuXG59XG4iXX0=