import { OnInit, SimpleChange, ElementRef, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
export declare class ShowformComponent implements OnInit {
    private formBuilder;
    _apiService: ApiService;
    private _snackBar;
    private router;
    private elementRef;
    formdata: any;
    formfieldrefreshdata: any;
    formfieldrefresh: any;
    dateflag: any;
    PasswordVal: any;
    externalDataVal: any;
    customlistenbuttons: any;
    custombuttons: any;
    externaldatavalue: any;
    constructor(formBuilder: FormBuilder, _apiService: ApiService, _snackBar: MatSnackBar, router: Router, elementRef: ElementRef);
    readonly name: FormControl;
    formGroup: FormGroup;
    titleAlert: string;
    post: any;
    showform: boolean;
    loading: boolean;
    formfieldrefreshval: boolean;
    formdataval: any;
    formfieldrefreshdataval: any;
    filerfielddata: any;
    autocompletefiledvalue: any;
    filearray: any;
    filecount: any;
    currentautocomplete: any;
    fieldloading: any;
    isPasswordVisible: Boolean;
    singleImgFormData: any;
    imgValue: string;
    color: ThemePalette;
    mode: any;
    value: number;
    bufferValue: number;
    onFormFieldChange: EventEmitter<any>;
    imageChangedEvent: any;
    croppedImage: any;
    ngOnInit(): void;
    CustomFlagFields(field: any, item: any): void;
    CustomFlagFieldsRemove(field: any, item: any): void;
    GeneratePassword(val: any): void;
    copyGeneratePassword(val: any): void;
    previewGeneratePassword(val: any): void;
    makeid(length: any): string;
    externalDataFunction(value: any, index: any): void;
    externalDataEditFunction(flag: any, field: any, ival: any, i: any): void;
    openCalendar(): void;
    navtocancel(): void;
    ngAfterViewInit(): void;
    triggerevents(val: any): void;
    cancel(e: any): boolean;
    handleDrop(e: any): boolean;
    trackByFn(index: any): any;
    trackByFnMultiple(index: any): any;
    trackByFnMulti(index: any): any;
    keyupVal(val: any, item: any, fi: any, ind: any, data: any, fname: any, sfname: any, ev: any): void;
    checkValue(val: any, item: any, fi: any, ind: any, data: any, fname: any, sfname: any): void;
    uploadfile(val: any): void;
    uploadall(val: any): void;
    deletefilemultipleall(val: any): void;
    uploadfilemultiple(val: any, f: any, indexf: any): void;
    deletefile(val: any, flag?: any): void;
    deletesinglefile(val: any, flag: any): void;
    deletesinglefilefrommultiple(val: any, field: any, index: any): void;
    deletefilemultiple(val: any, field: any, index: any): void;
    ngOnChanges(changes: {
        [propKey: string]: SimpleChange;
    }): void;
    inputblur(val: any): void;
    filterautocomplete(val: any, data: any): void;
    reloadautocomplete(val: any): void;
    removechipsingle(val: any): void;
    removechipmultiple(val: any, index: any): void;
    setautocompletevalue(val: any, field: any): void;
    managefromcontrol(field: any, type: any): void;
    resetformdata(): void;
    checkchange(field: any, index: any): void;
    createForm(initialize?: any): void;
    setChangeValidate(): void;
    chooseimg(vals: any, fields: any): void;
    checkPasswords(group: FormGroup): {
        required: boolean;
        match?: undefined;
    } | {
        match: boolean;
        required?: undefined;
    };
    checkPassword(control: any): {
        requirements: boolean;
    };
    autorequired(group: any): {
        autorequired: boolean;
    };
    checkInUseEmail(control: any): Observable<{}>;
    getError(data: any): "" | "Field is required" | "Not a valid emailaddress" | "This emailaddress is already in use";
    getErrorPassword(): "" | "Field is required (at least eight characters, one uppercase letter and one number)" | "Password needs to be at least eight characters, one uppercase letter and one number";
    onSubmit(post: any): void;
    private scrollToFirstInvalidControl;
    private getTopOffset;
    private el;
    fileChangeEvent(event: any): void;
    imageCropped(event: any): void;
    imageLoaded(): void;
    cropperReady(): void;
    loadImageFailed(): void;
}
