/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, Input, Inject, ComponentFactoryResolver, ViewContainerRef, Output, EventEmitter, ElementRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ObservableserviceService } from "./service/observableservice.service";
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as momentImported from 'moment';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
// import {ProgressBarMode} from '@angular/material/progress-bar';
// import  {BtnComponent} from './../../../../src/app/btn/btn.component'
/** @type {?} */
const moment = momentImported;
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.alldata;
}
export class ListingComponent {
    /**
     * @param {?} _apiService
     * @param {?} dialog
     * @param {?} bottomSheet
     * @param {?} fb
     * @param {?} router
     * @param {?} resolver
     * @param {?} container
     * @param {?} _http
     * @param {?} sanitizer
     * @param {?} _snackBar
     * @param {?} _elementRef
     * @param {?} observableService
     */
    constructor(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar, _elementRef, observableService) {
        this._apiService = _apiService;
        this.dialog = dialog;
        this.bottomSheet = bottomSheet;
        this.fb = fb;
        this.router = router;
        this.resolver = resolver;
        this.container = container;
        this._http = _http;
        this.sanitizer = sanitizer;
        this._snackBar = _snackBar;
        this._elementRef = _elementRef;
        this.observableService = observableService;
        this.selectedItem = 0;
        this.myControl = new FormControl();
        this.staticTooltip = {
            "delete": "Delete",
            "edit": "Edit",
            "preview": "Preview",
            "changeStatus": "Change Status",
        };
        this.keepPagination = 0;
        this.startDate111 = new Date(1622358050000);
        this.rescount = 0;
        this.columns = [];
        this.autosearchinput = [];
        this.currentautosearcharr = [];
        this.olddata = [];
        this.tsearch = [];
        this.tableflag = 0;
        this.autosearch = [];
        this.libdataval = {};
        this.limitcondval = {};
        this.result = {};
        this.sortdataval = {};
        this.sh = false;
        this.art = false;
        this.aud2 = false;
        this.aud = false;
        this.updatetableval = false;
        this.loaderrow = null;
        this.customButtonFlagVal = {};
        this.allSearchCond = [];
        this.searchbuttonval = [];
        this.searchBarFlag = false;
        this.searchBarToolTip = 'Open Search Bar';
        this.searchBarFlagVal = false;
        this.recordFoundFlag = false;
        this.recordFoundData = '';
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        this.selectsearch = [];
        this.newpagingcountFlag = true;
        this.initiateSearch = false;
        this.onLiblistingChange = new EventEmitter();
        this.onLiblistingButtonChange = new EventEmitter();
        this.searchstrsarr = [];
        this.oldlimitrange = [];
        this.languagedataset = [];
        this.paginationtypeFlag = true;
        this.displayedColumns = [];
        this.datacolumns = [];
        this.displayedColumnsheader = [];
        this.formarray = [];
        this.dateSearch_condition = {};
        this.selectSearch_condition = {};
        this.autoSearch_condition = {};
        this.textSearch_condition = {};
        this.loading = false;
        this.preresult = {};
        this.buttonSearchData = [];
        // dataSource = new MatTableDataSource(this.datasourceval);
        this.dataSource = new MatTableDataSource;
        // myForm:any;
        this.modelChanged = new Subject();
        this.modelChangedserver = new Subject();
        this.pagechanged = new Subject();
        this.subscriptions = [];
        this.subscriptioncount = 0;
        this.tableFooterColumns = [];
        this.testvalue = "s1";
        this.txtQueryChanged = new Subject();
        this.limitChangrd = new Subject();
        // searchResult$: Observable<SearchResult[]>;
        // for dropdown pagination
        this.pages = [];
        /*@Directive({
            selector: '[Listing]'
          })*/
        this.status = false;
        this.stateGroups = this.searchListval;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        (event) => {
            switch (true) {
                case event instanceof NavigationStart: {
                    this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        }));
        // this.txtQueryChanged
        //         .debounceTime(1000) // wait 1 sec after the last event before emitting last event
        //         .distinctUntilChanged() // only emit if value is different from previous value
        //         .subscribe(model => {
        //           this.txtQuery = model;
        //           // Call your function which calls API or do anything you would like do after a lag of 1 sec
        //           this.getDataFromAPI(this.txtQuery);
        //          });
        this.subscriptions[this.subscriptioncount++] = this.txtQueryChanged
            .pipe(debounceTime(1000))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            // this.filterautoval(this.currentautocompleteitem);
            console.log('pageChangeValue subscribed !! ', this.pageChangeValue, this.pageCountArray.length);
            if (this.pageChangeValue > this.pageCountArray.length) {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Sorry!! Page number is out of range.' }
                });
            }
            if (this.pageCountArray.length > this.pageChangeValue) {
                this.paging(this.pageChangeValue, '');
            }
            else {
                //page count out of bound 
                this.pageChangeValue = this.limitcondval.pagecount;
            }
            console.log("first", this.pageChangeValue, "+++", this.pageCountArray.length);
        }));
        this.subscriptions[this.subscriptioncount++] = this.limitChangrd
            .pipe(debounceTime(1000))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            // this.filterautoval(this.currentautocompleteitem);
            console.log('pageChangeValue subscribed !! ', this.pageChangeValue, this.pageCountArray.length);
            if (this.pageChangeValue) {
                this.paging(this.pageChangeValue, '');
            }
            else {
                //page count out of bound 
                this.pageChangeValue = this.limitcondval.pagecount;
            }
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChanged
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            this.filterautoval(this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce  server', this.autosearchinput, this.currentautocompleteitem);
            if (this.autosearchinput[this.currentautocompleteitem.field] != null && this.autosearchinput[this.currentautocompleteitem.field] != '') {
                // this.filterautoval(this.currentautocompleteitem);
                /** @type {?} */
                const link = this.apiurlval + '' + this.currentautocompleteitem.serversearchdata.endpoint;
                /** @type {?} */
                let source;
                source = {
                    search_str: this.autosearchinput[this.currentautocompleteitem.field],
                    sort: {
                        field: this.sortdataval.field,
                        type: this.sortdataval.type
                    }
                };
                // console.log('con...',conditionobj,this.end_date);
                // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
                // return;
                this.date_search_source_countval = 0;
                this.loading = true;
                this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    // console.log(res, 'result');
                    this.loading = false;
                    // return;
                    result = res;
                    // this.loading = false;
                    if (result != null && result.results != null && result.results.res != null)
                        this.rescount = result.results.res.length;
                    if (result.res != null && result.res.length > 0) {
                        // this.dataSource = new MatTableDataSource(result.results.res);
                        this.currentautosearcharr = result.res;
                        // autocomplete searching snakbar
                        // this._snackBar.openFromComponent(SnackbarComponent, {
                        //   duration: 2000,
                        //   data: { errormessage: 'New Search of data loaded ' }
                        // });
                    }
                    else {
                        this.currentautosearcharr = [];
                        // this._snackBar.openFromComponent(SnackbarComponent, {
                        //   duration: 6000,
                        //   data: { errormessage: 'No such search record found !!' }
                        // });
                    }
                    this.loading = false;
                    // this.dataSource.paginator = this.paginator;
                    // this.dataSource.sort = this.sort;
                }));
            }
        }));
        /* this.myForm = this.fb.group({
           email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
           password: ['', Validators.required]
         });*/
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set languageDataset(value) {
        this.languagedataset = value;
        // console.log(this.grab_linkval);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set setconvertToLanguage(value) {
        this.convertToLanguage = value;
        // console.log("developer test",this.convertToLanguage)
        if (typeof this.convertToLanguage != 'undefined' && this.convertToLanguage != null && this.convertToLanguage != '') {
            this.observableService.setconvertToLanguage(this.convertToLanguage);
        }
    }
    /**
     * @param {?} search_settings
     * @return {?}
     */
    set search_settings(search_settings) {
        this.search_settingsval = search_settings;
        // console.log('search_settingsval++++++', this.search_settingsval)
        /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
          console.log(this.search_settingsval.search[i].label);
        }*/
        /*  console.log(this.search_settingsval.selectsearch);
          console.log(this.search_settingsval.selectsearch[0].label);
          console.log(this.search_settingsval.selectsearch[0].values);
          console.log(this.search_settingsval.datesearch);*/
    }
    /**
     * @param {?} click_to_add_ananother_page
     * @return {?}
     */
    set click_to_add_ananother_page(click_to_add_ananother_page) {
        this.click_to_add_ananother_pageval = click_to_add_ananother_page;
    }
    /**
     * @param {?} limitcondval
     * @return {?}
     */
    set limitcond(limitcondval) {
        this.limitcondval = limitcondval;
        if (this.limitcondval.pagecount == null) {
            this.limitcondval.pagecount = 1;
        }
        this.newcurrentpagingVal = this.limitcondval.pagecount;
        this.pageChangeValue = this.limitcondval.pagecount;
        this.oldlimitrange.push(limitcondval);
        // console.log('limitcondval',this.limitcondval);
    }
    /**
     * @param {?} date_search_source_countval
     * @return {?}
     */
    set date_search_source_count(date_search_source_countval) {
        this.date_search_source_countval = date_search_source_countval;
        this.pageCountArray = new Array(Math.ceil(date_search_source_countval / this.limitcondval.limit));
        this.lastpageCountArray = Math.ceil(date_search_source_countval / this.limitcondval.limit);
        console.log("this.pageCountArray", Math.ceil(date_search_source_countval / this.limitcondval.limit));
        if (this.date_search_source_countval == 0) {
            this.limitcondval.pagecount = 1;
        }
        // console.log('date_search_source_count',this.date_search_source_countval);
    }
    /**
     * @param {?} grab_link
     * @return {?}
     */
    set grab_link(grab_link) {
        this.grab_linkval = grab_link;
        // console.log(this.grab_linkval);
    }
    /**
     * @param {?} custombutton
     * @return {?}
     */
    set custombutton(custombutton) {
        this.custombuttonval = custombutton;
    }
    /**
     * @param {?} date_search_source
     * @return {?}
     */
    set date_search_source(date_search_source) {
        this.date_search_sourceval = date_search_source;
    }
    /**
     * @param {?} sortdataval
     * @return {?}
     */
    set sortdata(sortdataval) {
        this.sortdataval = sortdataval;
        // console.log(this.sortdataval, 'sortdataval');
    }
    /**
     * @param {?} date_search_endpoint
     * @return {?}
     */
    set date_search_endpoint(date_search_endpoint) {
        this.date_search_endpointval = date_search_endpoint;
    }
    /**
     * @param {?} url
     * @return {?}
     */
    set url(url) {
        this.urlval = url;
    }
    /**
     * @param {?} searchendpoint
     * @return {?}
     */
    set searchendpoint(searchendpoint) {
        this.searchendpointval = searchendpoint;
    }
    /**
     * @param {?} pdf_link
     * @return {?}
     */
    set pdf_link(pdf_link) {
        this.pdf_link_val = pdf_link;
    }
    /**
     * @param {?} searchList
     * @return {?}
     */
    set searchList(searchList) {
        this.searchListval = searchList;
    }
    /**
     * @param {?} libdataval
     * @return {?}
     */
    set libdata(libdataval) {
        this.libdataval = [];
        this.libdataval = libdataval;
        this.paginationtype = this.libdataval.paginationType;
        if (typeof this.libdataval.paginationType == 'undefined' && this.libdataval.paginationType == null) {
            this.paginationtypeFlag = false;
        }
        console.log('libdataval', this.libdataval);
        console.log('libdataval', this.paginationtype);
        if (typeof this.libdataval.pages != 'undefined' && this.libdataval.pages != null) {
            this.pages = this.libdataval.pages;
        }
        // searchBarFlag
        // console.log(libdataval.searchBarFlagVal)
        if (libdataval.searchBarFlagVal != null && libdataval.searchBarFlagVal != '') {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.searchBarFlagVal = libdataval.searchBarFlagVal;
            }), 1000);
        }
        else {
            this.searchBarFlag = true;
        }
        if (libdataval.recordfoundflag != null && libdataval.recordfoundflag != '' && libdataval.recordfounddata != null) {
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.recordFoundFlag = libdataval.recordfoundflag;
                this.recordFoundData = libdataval.recordfounddata;
            }), 1000);
        }
        else {
            this.recordFoundFlag = false;
        }
    }
    /**
     * @param {?} datasource
     * @return {?}
     */
    set datasource(datasource) {
        this.datasourceval = [];
        this.datasourceval = datasource;
    }
    /**
     * @param {?} datacollectionval
     * @return {?}
     */
    set datacollection(datacollectionval) {
        this.datacollectionval = datacollectionval;
    }
    /**
     * @param {?} skip
     * @return {?}
     */
    set skip(skip) {
        this.skipval = skip;
    }
    /**
     * @param {?} detail_datatype
     * @return {?}
     */
    set detail_datatype(detail_datatype) {
        this.detail_datatypeval = detail_datatype;
    }
    /**
     * @param {?} detail_skip_array
     * @return {?}
     */
    set detail_skip_array(detail_skip_array) {
        this.detail_skip_arrayval = detail_skip_array;
    }
    /**
     * @param {?} sourcedata
     * @return {?}
     */
    set sourcedata(sourcedata) {
        this.sourcedataval = sourcedata;
    }
    /**
     * @param {?} modify_header_array
     * @return {?}
     */
    set modify_header_array(modify_header_array) {
        this.modify_header_arrayval = modify_header_array;
    }
    /**
     * @param {?} deleteendpointval
     * @return {?}
     */
    set deleteendpoint(deleteendpointval) {
        this.deleteendpointval = deleteendpointval;
    }
    /**
     * @param {?} updateendpoint
     * @return {?}
     */
    set updateendpoint(updateendpoint) {
        this.updateendpointval = updateendpoint;
    }
    /**
     * @param {?} apiurl
     * @return {?}
     */
    set apiurl(apiurl) {
        this.apiurlval = apiurl;
        // console.log("this.apiurlval",this.apiurlval);
        this.observableService.setapiUrl(this.apiurlval + this.libdataval.addlanguagedataEndpoint);
    }
    /**
     * @param {?} updatetable
     * @return {?}
     */
    set updatetable(updatetable) {
        this.updatetableval = updatetable;
    }
    /**
     * @param {?} jwttoken
     * @return {?}
     */
    set jwttoken(jwttoken) {
        if (jwttoken != null) {
            this.jwttokenval = jwttoken;
        }
        else {
            this.jwttokenval = '';
        }
        // console.log(this.jwttokenval,'token')
    }
    /**
     * @param {?} statusarr
     * @return {?}
     */
    set statusarr(statusarr) {
        this.statusarrval = statusarr;
    }
    /**
     * @param {?} emailarray
     * @return {?}
     */
    set emailarray(emailarray) {
        this.emailarrayval = emailarray;
    }
    /**
     * @param {?} editroute
     * @return {?}
     */
    set editroute(editroute) {
        this.editrouteval = editroute;
    }
    /* artistxp preview start */
    /**
     * @param {?} flug
     * @return {?}
     */
    set preview_artistxp(flug) {
        this.previewFlug = true;
    }
    /* artistxp preview end */
    /**
     * @param {?} val
     * @return {?}
     */
    set customlistenbutton(val) {
        this.customButtonFlagVal = val;
        // console.log(this.customButtonFlagVal, 'customButtonFlagVal')
    }
    /**
     * @return {?}
     */
    clickEvent() {
        this.status = !this.status;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    autocompletefunction(data) {
        this.currentautosearcharr = [];
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // console.log('ngonchange ..',changes);
        for (const v in changes) {
            // console.log(v,changes[v],'vv');
            if (v == 'updatetable') {
                // console.log('updatetable');
                if (changes[v].previousValue != null) {
                    this.selection.clear();
                    this.allSearch();
                }
            }
        }
    }
    /**
     * @param {?} i
     * @return {?}
     */
    counter(i) {
        return new Array(i);
    }
    /**
     * @param {?} query
     * @return {?}
     */
    onFieldChange(query) {
        console.log('query', query, this.pageCountArray.length);
        if (this.pageCountArray.length > query) {
            this.txtQueryChanged.next(query);
            console.log('with in bound ');
        }
        else {
            //page count out of bound 
        }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    onFieldChangeforlimit(query) {
        console.log('query', query, this.pageCountArray.length);
        if (query < 100) {
            this.limitChangrd.next(query);
            console.log('with in bound ');
        }
        else {
            //page count out of bound 
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    inputblur(val) {
        // console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // console.log("this.languagedataset",this.languagedataset);
        this.observableService.setmultilingualData(this.languagedataset);
        // addlanguagedataEndpoint
        console.log("this.apiurlval", this.apiurlval);
        // if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
        //   let source: any;
        //   let condition: any = {};
        //   source = {
        //     source: this.date_search_sourceval,
        //     condition: condition
        //   };
        //   let link = this.apiurlval + '' + this.date_search_endpointval;
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     this.result = res;
        //     this.preresult = this.result.res;
        //   });
        // }
        // not needed ,
        // this._service.success(this.columns[0].date,'dndnnd',this.options);
        /* this.stateGroupOptions = this.myControl.valueChanges
             .pipe(
                 startWith(''),
                 map(value => this._filterGroup(value))
             );*/
        this.stateGroup = this.myControl.valueChanges
            .pipe(startWith(''), map((/**
         * @param {?} value
         * @return {?}
         */
        value => this._filter(value))));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        const x = this.x;
        if (this.datasourceval)
            this.rescount = this.datasourceval.length;
        /** @type {?} */
        let temp = [];
        /** @type {?} */
        const keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        const coldef_list = [];
        /** @type {?} */
        const header_list = [];
        for (let i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, '_')); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        // coldef_list.push('Actions');
        // header_list.push('Actions')
        // console.log('coldef_list',coldef_list);
        // console.log('header_list',header_list);
        this.columns = [];
        for (let i = 0; i < coldef_list.length; i++) {
            /** @type {?} */
            const ff = `row.${coldef_list[i]}`;
            /** @type {?} */
            const tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i]}`, tooltip: `${header_list[i]}`, cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                (row) => eval(ff)), objlength: header_list.length };
            // console.log('tt',tt);
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (const b in this.modify_header_arrayval) {
                if (b == tt.header) {
                    tt.header = this.modify_header_arrayval[b];
                }
            }
            // header tooltip array
            if (this.libdataval.header_tooltip_array != null && typeof (this.libdataval.header_tooltip_array) != 'undefined') {
                for (const b in this.libdataval.header_tooltip_array) {
                    if (b == tt.tooltip) {
                        tt.tooltip = this.libdataval.header_tooltip_array[b];
                    }
                }
                // console.log(tt.tooltip, 'tt.tooltip =====+++++')
            }
            if (this.skipval.indexOf(tt.columnDef) == -1) {
                this.columns.push(tt);
            }
        }
        /** @type {?} */
        let displayedcols = [];
        this.tableflag = 1;
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.tableflag = 0;
        }), 100);
        displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        x => x.columnDef));
        if (this.libdataval.footersettings != null) {
            this.tableFooterColumns = this.libdataval.footersettings.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x.key));
        }
        else
            this.tableFooterColumns = [];
        /** @type {?} */
        let customcols = [];
        // console.log('displayedcols',displayedcols);
        if (this.libdataval != null && this.libdataval.tableheaders != null) {
            customcols = this.libdataval.tableheaders;
        }
        if (customcols != null && customcols.length > 0) {
            /** @type {?} */
            let ccolval = '';
            for (const v in customcols) {
                if (displayedcols.includes(customcols[v]) == false) {
                    for (const b in this.modify_header_arrayval) {
                        if (b == customcols[v]) {
                            ccolval = this.modify_header_arrayval[b];
                        }
                    }
                    this.columns.push({ columnDef: customcols[v], header: ccolval, cell: 'NA' });
                }
            }
            displayedcols = customcols;
        }
        // console.log('customcols',customcols,displayedcols,this.columns);
        if (this.libdataval.hideaction == null || this.libdataval.hideaction == false) {
            displayedcols.push(this.libdataval.actioncolname == null ? 'Actions' : this.libdataval.actioncolname);
            this.columns.push({ columnDef: this.libdataval.actioncolname == null ? 'Actions' : this.libdataval.actioncolname, header: 'Actions', cell: 'NA' });
        }
        if (this.libdataval.hidecounter == null || this.libdataval.hidecounter == false) {
            displayedcols.unshift('#');
            this.columns.push({ columnDef: '#', header: '#', cell: 'NA' });
        }
        // console.log(this.columns, 'cols');
        this.displayedColumns = [];
        this.displayedColumns = displayedcols;
        // this.displayedColumns.unshift('#');        /*adds select column in table by unshift function*/
        if (this.libdataval.hidemultipleselectbutton != true) {
            this.displayedColumns.unshift('select');
            this.columns.push({ columnDef: 'select', header: 'select', cell: 'NA' }); /*adds select column in table by unshift function*/
        }
        /** @type {?} */
        let tempcolarr = [];
        /** @type {?} */
        let tempcolarr2 = [];
        this.columns.reverse();
        for (let n in this.columns) {
            if (tempcolarr.indexOf(this.columns[n].columnDef) == -1)
                tempcolarr2.push(this.columns[n]);
            tempcolarr.push(this.columns[n].columnDef);
        }
        this.columns = tempcolarr2;
        // this.columns = Array.from(new Set(this.columns.map((item: any) => item.columnDef)));
        // this.columns.map(item => item.columnDef)
        //   .filter((value, index, self) => self.indexOf(value) === index);
        // unique col names 
        this.displayedColumns = Array.from(new Set(this.displayedColumns));
        // console.log(this.columns, 'cols filter', this.displayedColumns);
        /** @type {?} */
        const data_list = [];
        for (let i = 0; i < this.x.length; i++) {
            data_list.push(this.createData(x[i]));
        }
        this.olddata = data_list;
        this.dataSource = new MatTableDataSource([]);
        this.dataSource = new MatTableDataSource(data_list);
        this.selection = new SelectionModel(true, []);
        this.expandedElement = this.dataSource;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        // load search predefinded data
        setTimeout((/**
         * @return {?}
         */
        () => {
            // this.selectsearch['status'] = '0';
            // console.log('selectsearch', this.selectsearch);
            if (this.search_settingsval.selectsearch != null) {
                // console.log('s1', this.search_settingsval.selectsearch);
                for (const sl in this.search_settingsval.selectsearch) {
                    if (this.search_settingsval.selectsearch[sl].value != null && this.search_settingsval.selectsearch[sl].value != '') {
                        // this.selectSearch(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0])
                        this.selectsearch[this.search_settingsval.selectsearch[sl].field] =
                            this.search_settingsval.selectsearch[sl].value;
                        // selectSearch_condition
                        this.initiateSearch = true;
                        this.selectSearch_condition[this.search_settingsval.selectsearch[sl].field] =
                            this.search_settingsval.selectsearch[sl].value;
                        // console.log(this.initiateSearch, 'initiateSearch select')
                        // console.log(this.search_settingsval, 'ss+++++=====++++', this.search_settingsval.selectsearch, '++++++', this.selectsearch);
                        // console.log(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0],'????? new selectSearch_condition',this.selectSearch_condition)
                    }
                }
            }
            if (this.search_settingsval.textsearch != null) {
                // console.log('t1', this.search_settingsval.textsearch);
                for (const sl in this.search_settingsval.textsearch) {
                    if (this.search_settingsval.textsearch[sl].value != null && this.search_settingsval.textsearch[sl].value != '') {
                        this.tsearch[this.search_settingsval.textsearch[sl].field] =
                            this.search_settingsval.textsearch[sl].value;
                        this.initiateSearch = true;
                        // console.log(this.initiateSearch, 'initiateSearch text')
                    }
                }
            }
            if (this.search_settingsval.search != null) {
                for (let ats in this.search_settingsval.search) {
                    if (this.search_settingsval.search[ats].value != null && this.search_settingsval.search[ats].value != '' && this.search_settingsval.search[ats].value.length > 0) {
                        this.initiateSearch = true;
                        if (this.autosearch[this.search_settingsval.search[ats].field] == null) {
                            this.autosearch[this.search_settingsval.search[ats].field] = [];
                        }
                        for (let k in this.search_settingsval.search[ats].value) {
                            // console.log(this.search_settingsval.search[ats].value,'>>=======')
                            this.autosearch[this.search_settingsval.search[ats].field].push({ val: this.search_settingsval.search[ats].value[k].val, name: this.search_settingsval.search[ats].value[k].name });
                        }
                    }
                }
            }
            // dateSearch_condition
            console.log("this.search_settingsval.datesearch++", this.search_settingsval.datesearch);
            if (this.search_settingsval.datesearch != null && this.search_settingsval.datesearch[0].value != null && this.search_settingsval.datesearch[0].value != '') {
                this.initiateSearch = true;
                //   this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte - 86399000;
                //   this.search_settingsval.datesearch[0].value.$gte= this.search_settingsval.datesearch[0].value.$gte + 10000;
                //   // this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte;
                //   this.start_date = moment(new Date(this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-MM-DD").toString();
                //   this.end_date = moment(new Date(this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-MM-DD").toString();
                // //  this.startDate=moment(new Date(this.search_settingsval.datesearch[0].value.$gte)).add(1, 'days').format("YYYY-MM-DD").toString();
                // //  this.endDate=moment(new Date(this.search_settingsval.datesearch[0].value.$lte)).add(1, 'days').format("YYYY-MM-DD").toString();
                //  this.startDate=new Date(this.search_settingsval.datesearch[0].value.$gte);
                //  this.endDate=new Date(this.search_settingsval.datesearch[0].value.$lte);
                //   console.log("this.startDate",this.startDate);
                //   this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte + 86399000;
                //   // this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte;
                //   console.log("start date",this.search_settingsval.datesearch[0].value.$gte);
                //   console.log("end date",this.search_settingsval.datesearch[0].value.$lte);
                //   this.dateSearch_condition[this.search_settingsval.datesearch[0].field] = this.search_settingsval.datesearch[0].value;
                this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte - 86399000;
                this.start_date = new Date(this.search_settingsval.datesearch[0].value.$gte);
                this.end_date = new Date(this.search_settingsval.datesearch[0].value.$lte);
                this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte + 86399000;
                this.dateSearch_condition[this.search_settingsval.datesearch[0].field] = this.search_settingsval.datesearch[0].value;
            }
            // console.log(this.search_settingsval, 'search_settingsval', this.dateSearch_condition)
            if (this.search_settingsval.buttonsearch != null) {
                // console.log(this.search_settingsval.buttonsearch, 'this.search_settingsval.buttonsearch')
                for (let i in this.search_settingsval.buttonsearch) {
                    /** @type {?} */
                    let ind = 0;
                    ind = parseInt(i);
                    if (this.search_settingsval.buttonsearch[i].values != null && this.search_settingsval.buttonsearch[i].values != '') {
                        this.initiateSearch = true;
                        this.buttonSearchData.push({ field: this.search_settingsval.buttonsearch[i].field, key: ind, value: this.search_settingsval.buttonsearch[i].values });
                    }
                }
            }
            if (this.initiateSearch == true) {
                this.allSearch();
            }
        }), 1000);
    }
    // Custom Filter new
    /**
     * @param {?} val
     * @return {?}
     */
    CustomButtonListen(val) {
        // allSearchCond
        // console.log(this.search_settingsval.search, 'this.allSearchCond')
        this.onLiblistingButtonChange.emit({
            action: 'customlistenbutton', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, searchdata: this.search_settingsval, buttondata: val, allSearchCond: this.allSearchCond, autoSearchVal: this.autosearch, buttonSearchData: this.buttonSearchData
        });
        // var data:any={
        //   limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected,search:this.search_settingsval,buttonVal:val
        // }
        // console.log(data,'data++++===',val)
    }
    /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    img_modal_view(img) {
        // console.warn("img_modal_view",img)
        /** @type {?} */
        const dialogRef = this.dialog.open(ImageView, {
            // panelClass: 'custom-modalbox-image-preview',
            panelClass: ['custom-modalbox', 'custom-modalbox-image-preview'],
            height: 'auto',
            data: { alldata: img }
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // console.log('ngAfterContentInit() ...');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // console.log('ngAfterViewInit called ... ');
        setTimeout((/**
         * @return {?}
         */
        () => {
            if (this.libdataval != null && this.libdataval.cssoverridesoncelltorow != null) {
                for (const e in this.libdataval.cssoverridesoncelltorow) {
                    /** @type {?} */
                    const cred = this.upTo(this._elementRef.nativeElement.querySelector('.' + this.libdataval.cssoverridesoncelltorow[e].key), 'tr');
                    if (cred != null)
                        cred.classList.add(this.libdataval.cssoverridesoncelltorow[e].val);
                    // const cred = this._elementRef.nativeElement.querySelector('.cred').parent().parent().parent().parent().addClass('credtr');
                    // console.log(cred, 'cred', e);
                }
            }
        }), 2000);
    }
    // Search Bar Toggle
    /**
     * @param {?} flag
     * @return {?}
     */
    SearchBarToggle(flag) {
        this.onLiblistingButtonChange.emit({
            action: 'searchbar', flag: flag
        });
        switch (flag) {
            case true:
                this.searchBarFlag = false;
                this.searchBarToolTip = 'Open Search Bar';
                break;
            case false:
                this.searchBarFlag = true;
                this.searchBarToolTip = 'Close Search Bar';
                break;
        }
    }
    /**
     * @param {?} el
     * @param {?} tagName
     * @return {?}
     */
    upTo(el, tagName) {
        tagName = tagName.toLowerCase();
        while (el && el.parentNode) {
            el = el.parentNode;
            if (el.tagName && el.tagName.toLowerCase() == tagName) {
                return el;
            }
        }
        // Many DOM methods return null if they don't 
        // find the element they are searching for
        // It would be OK to omit the following and just
        // return undefined
        return null;
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        // console.log('ngAfterContentChecked called ...');
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        s => s.unsubscribe()));
    }
    /**
     * @param {?} vals
     * @return {?}
     */
    clickmultipleselectoption(vals) {
        this.onLiblistingChange.emit({ action: 'multipleselectoptionclick', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, btndata: vals });
    }
    /**
     * @return {?}
     */
    onSubmit() {
        /** @type {?} */
        let x;
        this.errormg = '';
        /** @type {?} */
        const data = this.myForm.value;
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    }
    /**
     * @param {?} val
     * @param {?} item
     * @return {?}
     */
    dateSearch(val, item) {
        this.searchstrsarr.push({ val: this.tsearch[val], label: item.label, key: val });
        // console.log("start date");
        // console.log(this.start_date);
        // console.log(this.end_date);
        // let sd = moment(this.start_date).unix();
        // let ed = moment(this.end_date).unix();
        /** @type {?} */
        const link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        const link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition;
        /** @type {?} */
        const textSearch = {};
        condition = {};
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        // if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
        //   this.start_date=this.startDate;
        //   this.end_date=this.endDate;
        // }
        if (moment(this.end_date).unix() != null && moment(this.start_date).unix() != null) {
            this.dateSearch_condition = {};
            this.dateSearch_condition = condition;
            if (this.end_date != null && this.start_date != null) {
                condition[val] = {
                    $gte: new Date(this.start_date).getTime(),
                    $lte: new Date(this.end_date).getTime() + 86399000,
                };
            }
            if (this.start_date != null && (this.end_date == null || this.end_date.length == 0)) {
                condition[val] = {
                    $gte: new Date(this.start_date).getTime(),
                };
            }
            if (this.end_date != null && (this.start_date == null || this.start_date.length == 0)) {
                condition[val] = {
                    $lte: new Date(this.end_date).getTime() + 86399000
                };
            }
            // console.log(this.dateSearch_condition.created_datetime.$gte,'after + 86399000',this.dateSearch_condition.created_datetime.$lte)
            // var dt=this.dateSearch_condition.created_datetime.$lte - 86399000;
            // console.log(this.dateSearch_condition.created_datetime.$gte,'after - 86399000',dt )
            // console.log(this.dateSearch_condition, 'dateSearch_condition++');
            for (const i in this.tsearch) {
                // console.log('this.tsearch', this.tsearch);
                if (this.tsearch[i] != null && this.tsearch[i] != '') {
                    textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
                }
            }
            /** @type {?} */
            const autosearch = {};
            // this.autosearch;
            for (const b in this.autosearch) {
                for (const m in this.autosearch[b]) {
                    /** @type {?} */
                    const tv = {};
                    tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                    if (autosearch.$or == null) {
                        autosearch.$or = [];
                    }
                    // console.log(autosearch.$and,'autosearch.$or 1')
                    autosearch.$or.push(tv);
                }
            }
            /** @type {?} */
            const conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
            source = {
                condition: {
                    limit: this.limitcondval.limit,
                    skip: 0
                },
                sort: {
                    field: this.sortdataval.field,
                    type: this.sortdataval.type
                },
                searchcondition: conditionobj,
            };
            // console.log('date search con...', conditionobj, this.end_date, this.start_date);
            // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
            return;
            this.date_search_source_countval = 0;
            this.loading = true;
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    this.dataSource = new MatTableDataSource(result.results.res);
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    this.tableflag = 1;
                }
                else {
                    this.tableflag = 0;
                }
                // console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            /*this._http.post(link, {source:this.date_search_sourceval,
              condition: {
                'created_at': {
                  $lte: new Date(this.end_date).getTime(),
                  $gte: new Date(this.start_date).getTime(),
                }
              },token: this.jwttokenval,
            }).subscribe( res =>{
              let result: any ={};
              result = res;
              console.log("ok");
              console.log(res);
              console.log(result.res);
              let newdata = result.res;
              this.dataSource = new MatTableDataSource(result.res);
              this.dataSource.paginator = this.paginator;
              this.dataSource.sort = this.sort;
            })*/
        }
        else {
            console.log('error');
        }
    }
    /**
     * @param {?} value
     * @param {?} type
     * @param {?} statusval
     * @return {?}
     */
    selectSearch(value, type, statusval) {
        // console.log(value, 'value', type, 'type', statusval, 'statusval')
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // let source: any;
        // let condition: any = {};
        this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
        /** @type {?} */
        let val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toString().toLowerCase();
        }
        // if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toLowerCase(), this.tsearch[value].toUpperCase()] }) condition[value + '_regex'] = val;
        // this.textSearch_condition = {};
        // this.textSearch_condition = condition;
        // //console.warn(this.tsearch);
        // let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        // source = {
        //   source: this.date_search_sourceval,
        //   condition: conditionobj
        // };
        // console.log(this.tsearch, 'czxcxczxc', this.search_settingsval.selectsearch, this.selectsearch, value, type);
        /** @type {?} */
        const link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition;
        condition = {};
        condition[type.field] = value;
        // this.selectSearch_condition = {};
        this.selectSearch_condition[type.field] = value;
        // console.log('selectSearch ', this.selectSearch_condition);
        /** @type {?} */
        const conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    }
    // for managing pagination
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    paging(val, flag) {
        // const lval: any = this.limitcondval;
        console.log(val, 'paging val');
        this.selectedItem = val;
        if (this.limitcondval.pagecount == null)
            this.limitcondval.pagecount = 1;
        if (this.limitcondval.limit == null)
            this.limitcondval.limit = 10;
        if (this.limitcondval.limit != null && this.limitcondval.limit > 100) {
            // if(flag!="selectpaging"){
            //   this.limitcondval.limit = 100;
            // }
            // this.limitcondval.limit = 100;
            // this._snackBar.openFromComponent(SnackbarComponent, {
            //   duration: 2000,
            //   data: { errormessage: 'You can see maximum 100 records at once !' }
            // });
        }
        /** @type {?} */
        let maxpagecount = Number(this.date_search_source_countval / (this.limitcondval.limit));
        maxpagecount = ~~(maxpagecount);
        // console.log('this.oldlimitrange', this.oldlimitrange, this.limitcondval, this.date_search_source_countval, maxpagecount);
        // this.oldlimitrange.push({
        //   skip: this.limitcondval.skip,
        //   limit: this.limitcondval.limit,
        //   pagecount: this.limitcondval.pagecount
        // });
        console.log("limit++++", this.limitcondval.limit);
        if (val == 1) {
            this.limitcondval.skip = (this.limitcondval.pagecount) * this.limitcondval.limit;
            this.limitcondval.pagecount++;
        }
        if (val == -1 && this.limitcondval.skip < this.limitcondval.limit) {
            return;
        }
        if (val == -1 && this.limitcondval.skip >= this.limitcondval.limit) {
            // console.log('in skip block');
            this.limitcondval.skip = (this.limitcondval.pagecount - 2) * this.limitcondval.limit;
            this.limitcondval.pagecount--;
        }
        if (val > 1) {
            if (this.paginationtype == 2) {
                this.limitcondval.pagecount = val;
            }
            console.log("val>1 section ", this.limitcondval.pagecount);
            if (this.limitcondval.pagecount == null) {
                this.limitcondval.skip = 0;
            }
            else {
                this.limitcondval.pagecount = val;
                this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
            }
            // this.limitcondval.pagecount--;
        }
        if (val <= 1) {
            if (this.paginationtype == 2) {
                this.limitcondval.skip = 0;
                this.limitcondval.pagecount = 1;
            }
        }
        if (this.limitcondval.pagecount > (maxpagecount + 1)) {
            this.limitcondval.pagecount = maxpagecount + 1;
            this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
        }
        // console.log(val,'ss',this.datacollectionval,this.limitcondval);
        /** @type {?} */
        const textSearch = {};
        console.log('this.limitcondval, in paging ', this.limitcondval);
        for (const i in this.tsearch) {
            if (this.tsearch[i].toString().toLowerCase() != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        const autosearch = {};
        // this.autosearch;
        for (const b in this.autosearch) {
            for (const m in this.autosearch[b]) {
                /** @type {?} */
                const tv = {};
                tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                if (autosearch.$or == null) {
                    autosearch.$or = [];
                }
                // console.log(autosearch.$and,'autosearch.$or 2')
                autosearch.$or.push(tv);
            }
        }
        /** @type {?} */
        const conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        /** @type {?} */
        const source = {
            condition: {
                limit: this.limitcondval.limit,
                skip: this.limitcondval.skip
            },
            sort: {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            },
            searchcondition: conditionobj,
        };
        this.allpaginationpostData = source;
        /** @type {?} */
        const link = this.apiurlval + '' + this.datacollectionval;
        /*let data:any={
          "condition":{
            limit:this.limitcondval.limit,
            skip:this.limitcondval.skip
          }
    
        }*/
        this.newpagingcountFlag = false;
        this.loading = true;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            if (this.limitcondval.pagecount > 5 && this.paginationtype == 2) {
                this.newcurrentpagingVal = this.limitcondval.pagecount - 5;
                console.log('in common  range area ...', this.newcurrentpagingVal);
            }
            // if (this.limitcondval.pagecount > 5 && this.paginationtype == 2 && this.pageCountArray.length - this.limitcondval.pagecount < 10) {
            //   this.newcurrentpagingVal = this.limitcondval.pagecount - 4 ;
            //   console.log('in last range area ...', this.newcurrentpagingVal);
            // }
            if (this.limitcondval.pagecount <= 5 && this.paginationtype == 2) {
                this.newcurrentpagingVal = this.limitcondval.pagecount;
            }
            console.log("paging success", this.pageCountArray.length);
            this.result = res;
            // console.log(this.result,'res');
            this.newpagingcountFlag = true;
            if (this.result.results.res != null && this.result.results.res.length > 0) {
                this.onLiblistingChange.emit({ action: 'paging', limitdata: this.limitcondval, searchcondition: conditionobj, sortdata: this.sortdataval, results: this.result.results.res });
                // if (this.libdataval.footersettings != null) {pageChangeValue
                //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                // }
                if (this.pageChangeValue != this.limitcondval.pagecount) {
                    this.pageChangeValue = this.limitcondval.pagecount;
                }
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    document.getElementById(this.libdataval.containerid).scrollIntoView({ behavior: "smooth" });
                }), 100);
                this.dataSource = new MatTableDataSource(this.result.results.res);
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 2000,
                    data: { errormessage: 'New range of data loaded' }
                });
                // this.oldlimitrange.skip = this.limitcondval.skip;
                // this.oldlimitrange.limit = this.limitcondval.limit;
                // this.oldlimitrange.pagecount = this.limitcondval.pagecount;
                // console.log('this.oldlimitrange after ', this.oldlimitrange);
            }
            else {
                // console.log('o len', this.oldlimitrange.length, this.oldlimitrange);
                // this.oldlimitrange = this.oldlimitrange.reverse();
                // this.oldlimitrange = this.oldlimitrange.slice(0, this.oldlimitrange.length - 2); 
                // this.oldlimitrange.splice(this.oldlimitrange.length - 1, 1);
                // this.oldlimitrange.splice(0, 1);
                // this.refreshdata();
                // this.limitcondval = this.oldlimitrange[this.oldlimitrange.length - 1];
                // console.log(this.limitcondval, this.oldlimitrange, 'lavl n old ');
                // this.limitcondval.skip = this.oldlimitrange.skip;
                // this.limitcondval.limit = this.oldlimitrange.limit;
                // this.limitcondval.pagecount = this.oldlimitrange.pagecount;
                // if (val == 1) {
                //   this.limitcondval.pagecount--;
                //   this.limitcondval.skip -= this.limitcondval.limit;
                // }
                // if (val == -1) {
                //   this.limitcondval.pagecount++;
                //   this.limitcondval.skip += this.limitcondval.limit;
                // }
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'No Data Found in this range !!' }
                });
            }
            this.loading = false;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }));
        this.selection.clear();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    addautosearchdata(val) {
        // console.log('v',val);
    }
    /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    remove(val, i, field) {
        if (this.autosearch[field] != null) {
            this.autosearch[field].splice(i, 1);
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    autocompletechangedetected(item) {
        this.currentautocompleteitem = item;
        this.currentautosearcharr = [];
        // console.log('autocompletechangedetected', this.currentautocompleteitem);
        if (this.currentautocompleteitem.serversearchdata == null)
            this.modelChanged.next();
        else {
            // console.log('in else block of autocompletechangedetected');
            this.modelChangedserver.next();
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    filterautoval(data) {
        // console.log('filterautoval', data, this.autosearchinput[data.field]);
        /** @type {?} */
        const autoselval = this.autosearchinput[data.field];
        this.currentautosearcharr = [];
        if (this.autosearchinput[data.field] != null && this.autosearchinput[data.field] != '') {
            /** @type {?} */
            const filterval = data.values.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // console.log('e', e, fieldval)
                return e.name.toString().toLowerCase().includes(autoselval.toLowerCase());
            }));
            this.currentautosearcharr = filterval;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    resetautocomp(val) {
        /** @type {?} */
        const el = document.querySelector('#autocompletesearch' + val.field);
        el.value = '';
    }
    /**
     * @param {?} value
     * @param {?} data
     * @param {?} item
     * @return {?}
     */
    autosearchfunction(value, data, item) {
        // this.autosearchinput[value] = '';
        // console.log(this.autosearchinput, 'asi', data, value, item);
        this.searchstrsarr.push({ val: this.autosearchinput[value], label: item.label, key: value });
        if (this.autosearch[value] == null) {
            this.autosearch[value] = [];
        }
        // console.log(this.autosearch, 'autosearch 1130')
        this.autosearch[value].push(data);
        // console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
        this.autosearchinput[value] = null;
        this.currentautosearcharr = [];
        /** @type {?} */
        const el = document.querySelector('#autocompletesearch' + value);
        el.value = '';
        // console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
        // reset auto search data !
        // console.log(value, 'selected auto', this.autosearchinput[value]);
        // console.log(value,data,'ss',this.autosearch);
        /*let val: any = this.autosearch[value];
        let source: any;
        let condition: any = {};
        if (this.autosearch[value] !=null && this.autosearch[value].length > 0 && { $or: [this.autosearch[value].toLowerCase(), this.autosearch[value].toUpperCase(), this.autosearch[value]] }) condition[value + '_regex'] = val;
        this.autoSearch_condition = {};
        this.autoSearch_condition = condition;
        let conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
          source: this.date_search_sourceval,
          condition: conditionobj
        };*/
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //   this.result = res;
        //   this.dataSource = new MatTableDataSource(this.result.res);
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        // });
    }
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    textsearchfunction(value, item) {
        if (this.tsearch[value] == '') {
            /** @type {?} */
            const index = this.searchstrsarr.indexOf(this.searchstrsarr[value]);
            // console.log(index, 'index');
            delete this.searchstrsarr[value];
            // if (index > -1) {
            // this.searchstrsarr.splice(value, 1);
            // }
        }
        else
            this.searchstrsarr[value] = ({ val: this.tsearch[value], label: item.label, key: value });
        // console.log('textsearchfunction', value, item, this.searchstrsarr);
        /** @type {?} */
        const link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        let source;
        /** @type {?} */
        const condition = {};
        /** @type {?} */
        let val = '';
        if (this.tsearch != null && this.tsearch[value] != null) {
            val = this.tsearch[value].toString().toLowerCase();
        }
        if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toString().toLowerCase(), this.tsearch[value].toUpperCase()] }) {
            condition[value + '_regex'] = val;
        }
        this.textSearch_condition = {};
        this.textSearch_condition = condition;
        // console.warn(this.tsearch);
        /** @type {?} */
        const conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
        source = {
            source: this.date_search_sourceval,
            condition: conditionobj
        };
        // add loader
        // this.loading = true;
        // if (value != null) {
        //   this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        //     let result: any = {};
        //     result = res;
        //     //close loader
        //     this.loading = false;
        //     let newdata = result.res;
        //     this.dataSource = new MatTableDataSource(result.res);
        //     this.dataSource.paginator = this.paginator;
        //     this.dataSource.sort = this.sort;
        //   });
        // } else {
        //   console.log('oops');
        // }
        // console.log("error");
    }
    /**
     * @return {?}
     */
    refreshdata() {
        // console.log('++++')
        this.autosearch = [];
        this.tsearch = [];
        this.selectsearch = [];
        this.start_date = null;
        this.limitcondval.skip = 0;
        this.end_date = null;
        this.selectSearch_condition = {};
        this.dateSearch_condition = {};
        this.allSearch();
        this.selection.clear();
        this.allSearchCond = [];
        this.buttonSearchData = [];
    }
    /**
     * @param {?} val
     * @return {?}
     */
    refreshalldata(val) {
        this.dataSource = new MatTableDataSource(this.olddata);
        this.selection = new SelectionModel(true, []);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
            /** @type {?} */
            const dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: 'Refresh successfully!!', isconfirmation: false }
            });
        }
        else {
            /** @type {?} */
            const dialogRef = this.dialog.open(Confirmdialog, {
                // panelClass: 'custom-modalbox',
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: ' Updated!!', isconfirmation: false }
            });
        }
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    _filter(value) {
        /** @type {?} */
        const filterValue = value.toString().toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        option => option.toString().toLowerCase().includes(filterValue)));
    }
    /**
     * @param {?} val
     * @return {?}
     */
    getstatus(val) {
        // console.log('val');
        // console.log(val);
        for (const b in this.statusarrval) {
            if (this.statusarrval[b].val == val) {
                return this.statusarrval[b].name;
            }
            // console.log(this.statusarrval[b].name);
        }
        return 'N/A';
    }
    /**
     * @param {?} val
     * @return {?}
     */
    pdfFlag(val) {
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date == null) {
            // console.log('shatter blok');
            this.sh = true;
            this.aud = false;
        }
        if (val.shatterblok_agreement_date != null && val.audiodeadline_agreement_date != null) {
            this.sh = true;
            this.aud = true;
        }
        if (val.shatterblok_agreement_date == null && val.audiodeadline_agreement_date == null) {
            this.sh = false;
            this.aud = false;
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    grapurl(val) {
        //  for all row checking
        // console.log(val)
        if (val != null) {
            this.art = true;
            this.aud2 = true;
        }
        if (val == null) {
            this.art = false;
            this.aud2 = false;
        }
        // console.log(this.sh);
        // console.log(this.aud);
    }
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    copyText(row, val) {
        /** @type {?} */
        const fullurl = val + '' + row;
        /** @type {?} */
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = fullurl;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Copied Successfully !! ' }
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    openinternallink(val) {
        this.router.navigate([val.route]);
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    openinternallinkwithparam(val, data) {
        /** @type {?} */
        const rdata = [];
        rdata.push(val.route);
        for (const v in val.param) {
            rdata.push(data[val.param[v]]);
        }
        // console.log('radat', rdata);
        this.router.navigate(rdata);
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    opencustombuttonactionlocaldata(val, data) {
        // console.log('opencustombuttonactionlocaldata',val,data);
        /** @type {?} */
        const dataarr = [];
        // dataarr.push(['name','debasis']);
        // dataarr.push(['desc','test']);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        for (const v in val.datafields) {
            /** @type {?} */
            const temparr = [];
            temparr.push(val.datafields[v]);
            if (val.datafields[v] != 'image' && val.datafields[v] != 'video') {
                // console.log('ss',val.datafields[v]);
                if (data[val.datafields[v]] != null && typeof (data[val.datafields[v]]) != 'object') {
                    // console.log('df', data[val.datafields[v]].toString());
                    if (data[val.datafields[v]] != null && data[val.datafields[v]].toString().includes('iframe')) {
                        // console.log('in safe', data[val.datafields[v]]);
                        temparr.push(this.sanitizer.bypassSecurityTrustHtml(data[val.datafields[v]]));
                    }
                    else {
                        temparr.push((data[val.datafields[v]]));
                    }
                }
                else {
                    // console.log('ss22',val.datafields[v]);
                    // else
                    temparr.push(data[val.datafields[v]]);
                }
            }
            if (val.datafields[v] == 'image') {
                temparr.push('<img mat-card-image src=' + data[val.datafields[v]] + ' > <br/>');
            }
            if (val.datafields[v] == 'video') {
                if (data[val.datafields[v]] != null && data[val.datafields[v]] != '') {
                    /** @type {?} */
                    let temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + data[val.datafields[v]] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
                    temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                    temparr.push(temphtml);
                    // console.log('thtml', temphtml, data[val.datafields], data[val.datafields[v]]);
                }
                else {
                    temparr.push('N/A');
                }
            }
            // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
            dataarr.push(temparr);
        }
        // console.log('local data m', dataarr);
        /** @type {?} */
        let res = dataarr;
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            const resdata = [];
            for (const b in res) {
                for (const c in this.libdataval.detailview_override) {
                    // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        // console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null) {
                    resdata[b] = res[b];
                }
            }
            // console.log('c',res,resdata);
            res = resdata;
            // console.log('c',res,resdata);
        }
        // console.log('dataarr',dataarr);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        res.message = val.headermessage;
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: ['custom-modalbox-apidata', 'modal-localdata'],
            data: { isconfirmation: false, data: res }
        });
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    opencustombuttonactionapidata(val, data) {
        // console.log('opencustombuttonactionapidata',val,data);
        this.loading = true;
        /** @type {?} */
        const link = this.apiurlval + val.endpoint;
        /** @type {?} */
        const source = {};
        source[val.param] = data._id;
        if (val.otherparam != null) {
            for (const n in val.otherparam) {
                source[val.otherparam[n]] = data[val.otherparam[n]];
            }
        }
        this.loaderrow = data._id;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            if (result.status == 'success') {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: { errormessage: result.msg }
                });
                // console.log('res',result);
                /** @type {?} */
                let resdata = {};
                this.loaderrow = null;
                this.loading = false;
                if (result.res[0] != null) {
                    resdata = result.res[0];
                }
                else {
                    resdata = result.res;
                }
                /** @type {?} */
                const temprdata = {};
                // console.log('resdata>>>', resdata);
                if (val.datafields != null) {
                    for (const b1 in val.datafields) {
                        // console.log('val.datafields', val.datafields[b1]);
                        // for (let b2 in dataarr) {
                        // console.log('b2',b2,data[b2],dataarr[b2][0]);
                        // if (dataarr[b2][0] == val.datafields[b1]) resdataformodal[b1] = [dataarr[b2][0], dataarr[b2][1]];
                        temprdata[val.datafields[b1]] = resdata[val.datafields[b1]];
                    }
                    // }
                    resdata = temprdata;
                }
                /** @type {?} */
                let dataarr = [];
                // dataarr.push(['name','debasis']);
                // dataarr.push(['desc','test']);
                for (const v in resdata) {
                    /** @type {?} */
                    const temparr = [];
                    temparr.push(v);
                    if (v != 'image' && v != 'video') {
                        if (resdata[v] != null && typeof (resdata[v]) != 'object') {
                            // console.log('resv', resdata[v]);
                            if (resdata[v].toString().includes('iframe')) {
                                temparr.push(this.sanitizer.bypassSecurityTrustHtml(resdata[v]));
                            }
                            else {
                                temparr.push(resdata[v]);
                            }
                        }
                        else {
                            temparr.push(resdata[v]);
                        }
                    }
                    if (v == 'image') {
                        temparr.push('<img mat-card-image src=' + resdata[v] + ' > <br/>');
                    }
                    if (v == 'video') {
                        /** @type {?} */
                        let temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + resdata[v] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
                        temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
                        temparr.push(temphtml);
                    }
                    // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
                    dataarr.push(temparr);
                }
                if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
                    /** @type {?} */
                    const resdata = [];
                    for (const b in dataarr) {
                        for (const c in this.libdataval.detailview_override) {
                            // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                            if (this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                                // console.log('h', c, this.libdataval.detailview_override[c]);
                                resdata[b] = [this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
                            }
                        }
                        if (resdata[b] == null) {
                            resdata[b] = dataarr[b];
                        }
                    }
                    // console.log('c',res,resdata);
                    dataarr = resdata;
                }
                // console.log('c api data ', resdata);
                // let resdataformodal: any = {};
                // console.log('resdataformodal', dataarr, dataarr);
                if (val.refreshdata != null && val.refreshdata == true) {
                    this.allSearch();
                }
                dataarr['message'] = val.headermessage;
                /** @type {?} */
                const dialogRef = this.dialog.open(Confirmdialog, {
                    height: 'auto',
                    panelClass: ['custom-modalbox', 'api-data'],
                    data: { isconfirmation: false, data: dataarr }
                });
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
        return;
    }
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    openextlinkwithparam(val, data) {
        // console.log('val',val,data);
        /** @type {?} */
        let qtext = '';
        /** @type {?} */
        let fulllink = '';
        fulllink = val.link;
        if (val.paramtype == null) {
            for (const v in val.param) {
                qtext = val.param[v].q + '=' + encodeURI(data[val.param[v].key]);
                // console.log('qtext',qtext);
                if (parseInt(v) == 0) {
                    fulllink = fulllink + '?' + qtext;
                }
                if (parseInt(v) != 0) {
                    fulllink = fulllink + '&' + qtext;
                }
            }
            // val.link=fulllink;
        }
        if (val.paramtype != null && val.paramtype == 'angular') {
            for (const v in val.param) {
                // qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                // console.log('qtext',qtext);
                fulllink = fulllink + '/' + encodeURI(data[val.param[v]]);
            }
            // val.link=fulllink;
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            // console.log("Hello from setTimeout");
            // console.log('link',fulllink,data,qtext);
        }), 10);
        window.open(fulllink, '_blank');
    }
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    clickurl(val, url) {
        /** @type {?} */
        const link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, '_blank');
    }
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    checkedlist() {
        // this.selection.isSelected(row);
        setTimeout((/**
         * @return {?}
         */
        () => {
            /** @type {?} */
            const seldata = this.selection.selected.map((/**
             * @param {?} x
             * @return {?}
             */
            x => x._id))
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            ;
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            this.onLiblistingChange.emit({ action: 'multipleselectionchange', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected });
        }), 100);
    }
    /**
     * @return {?}
     */
    isAllSelected() {
        // console.log('isAllSelected');
        if (this.selection != null && this.selection.select) {
            // console.log('isAllSelected', this.dataSource.data.length, this.selection.selected.length, this.selection.selected);
            /** @type {?} */
            const numSelected = this.selection.selected.length;
            /** @type {?} */
            const numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    }
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            row => this.selection.select(row)));
        this.checkedlist();
    }
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    /**
     * @param {?} point
     * @return {?}
     */
    createData(point) {
        /** @type {?} */
        const data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, '_')] = point[key];
        }));
        return data;
    }
    /**
     * @param {?} filterValue
     * @return {?}
     */
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toString().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    }
    /*applyFilter1(filterValue: string, val: any) {
        console.log(filterValue);
        console.log(val.value);
        let value= new MatTableDataSource(val.value);
    
        value.filter = filterValue.trim().toLowerCase();
        console.log(value);
        /!* this.dataSource.filterPredicate = function(data, filter: string): boolean {
          // return data.name.toLowerCase().includes(filter);
        };
        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }*!/
      }*/
    /**
     * @param {?} col_name
     * @param {?} row
     * @return {?}
     */
    styleCell(col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    }
    /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    fetchvideo(videodata) {
        // console.warn('videodata',videodata);
        /** @type {?} */
        const dialogRef = this.dialog.open(VideoPlayer, {
            panelClass: ['custom-modalbox-videoplayer-preview', 'video-modal'],
            height: 'auto',
            data: { previewData: videodata }
        });
    }
    /**
     * @param {?} val
     * @return {?}
     */
    opennotes(val) {
        this.loading = true;
        this.loaderrow = val._id;
        this._apiService.postSearch(this.apiurlval + this.libdataval.notes.listendpoint, this.jwttokenval, { id: val._id }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            /** @type {?} */
            let result = {};
            result = res;
            // console.log(result.res, 'list notes');
            this.loading = false;
            this.loaderrow = null;
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.data.notesval = '';
            // console.log('notes', val);
            /** @type {?} */
            const dialogRef = this.dialog.open(Confirmdialog, {
                height: 'auto',
                panelClass: ['custom-modalbox', 'notes-modal'],
                data: {
                    isconfirmation: false,
                    notes: true, apiurl: this.apiurlval,
                    notedata: this.libdataval.notes, rowdata: val,
                    jwttokenval: this.jwttokenval,
                    listdata: result.res,
                    _snackBar: this._snackBar
                }
            });
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            result => {
                this.keepPagination = 1;
                this.allSearch();
            }));
        }));
    }
    /**
     * @param {?} data1
     * @return {?}
     */
    viewdata(data1) {
        // console.log('data1 ++++++++', data1)
        /** @type {?} */
        let data;
        data = data1;
        /** @type {?} */
        const data2 = [];
        /** @type {?} */
        let headerData = {};
        if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
            // console.log('== ++++++++', this.libdataval.preview_header)
            headerData = this.libdataval.preview_header;
        }
        for (const key in data) {
            /** @type {?} */
            const flagk = '';
            if (data.hasOwnProperty(key)) {
                if (typeof (data[key]) == 'boolean') {
                    if (data[key] == true) {
                        data[key] = 'Yes';
                    }
                    if (data[key] == false) {
                        data[key] = 'No';
                    }
                }
                if (key == 'image') {
                    data[key + ':'] = '<img mat-card-image src=' + data[key] + '><br/>';
                }
                if (typeof (data[key]) == 'object') {
                }
                if (typeof (data[key]) == 'object') {
                    /** @type {?} */
                    const tempdata = [];
                    for (const k in data[key]) {
                        for (const p in this.detail_datatypeval) {
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value == 'image') {
                                // let imgval:any=this.detail_datatypeval[p].fileurl+data[key][k];
                                // console.log('imgval');
                                // console.log('imgval');
                                // console.log(imgval);="+
                                // console.log(data[key][k].replace(/'/g, ''));
                                tempdata.push('<img mat-card-image src=' + data[key][k] + '><br/>');
                                // tempdata.push("<span>"+data[key][k]+"</span><br/>")
                            }
                            if (this.detail_datatypeval[p].key == key && this.detail_datatypeval[p].value != 'image') {
                                // tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                tempdata.push('<span>' + data[key][k] + '</span><br/>');
                            }
                            if (this.detail_datatypeval[p].key != key) {
                                // tempdata.push("<img mat-card-image src="+data[key][k]+"><br/>")
                                if (typeof (data[key][k]) == 'object') {
                                    for (const objk in data[key][k]) {
                                        tempdata.push('<span>' + objk + ' : ' + data[key][k][objk] + '</span><br/>');
                                    }
                                }
                            }
                        }
                    }
                    data[key + ':'] = tempdata;
                }
            }
        }
        for (const n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (const v in this.detail_skip_arrayval) {
            // data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
        }
        /** @type {?} */
        let res = Object.entries(data2);
        // console.log('view data',res);
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            const resdata = [];
            for (const b in res) {
                for (const c in this.libdataval.detailview_override) {
                    // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                    if (this.libdataval.detailview_override[c].key == res[b][0]) {
                        // console.log('h', c, this.libdataval.detailview_override[c]);
                        resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
                    }
                }
                if (resdata[b] == null) {
                    resdata[b] = res[b];
                }
            }
            // console.log('c',res,resdata);
            res = resdata;
            // console.log('c',res,resdata);
        }
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            autoFocus: false,
            maxHeight: '1000vh',
            panelClass: ['custom-modalbox', 'detail-view'],
            data: { isconfirmation: false, data: res, headerData: headerData }
        });
    }
    // parent-bottom-class
    /**
     * @param {?} data
     * @return {?}
     */
    managestatus(data) {
        /** @type {?} */
        const bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                this.subscriptions[this.subscriptioncount++] = this._apiService.togglestatus(this.apiurlval + this.libdataval.updateendpoint, data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (const c in this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (this.olddata[c]._id == data._id) {
                                this.olddata[c].status = data.status;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        // this.allSearch();
                        this.onLiblistingChange.emit({ action: 'statusupdate', limitdata: this.limitcondval, sortdata: this.sortdataval });
                        /** @type {?} */
                        const dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'manage-status'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    }
    // for tree view in modal
    /**
     * @param {?} row
     * @param {?} custombutton
     * @return {?}
     */
    custombuttonlistner(row, custombutton) {
        // console.log('custombuttonlistner', row, custombutton);
        this.onLiblistingChange.emit({
            action: 'custombuttonclick', limitdata: this.limitcondval, sortdata: this.sortdataval, custombuttonclick: {
                data: row, btninfo: custombutton
            }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    custombuttonfunc(data) {
        // console.log('data');
        // console.log(data);    // row data
        // console.log(this.custombuttonval);    // object from where the library has been used
        /** @type {?} */
        let unsafeurl = this.custombuttonval.url;
        for (const b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data, customdata: unsafeurl }] }
        });
    }
    /**
     * @return {?}
     */
    managestatusmultiple() {
        /** @type {?} */
        const ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        // console.log('data');
        // console.log(data);
        /** @type {?} */
        const bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result != null) {
                // data.status = result.val;
                // data.id = data._id;
                /** @type {?} */
                const newstatus = result.val;
                this.subscriptions[this.subscriptioncount++] = this._apiService.togglestatusmany(this.apiurlval + this.libdataval.updateendpointmany, ids, result.val, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (const c in this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(this.olddata[c]._id) > -1) {
                                this.olddata[c].status = newstatus;
                            }
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        // this.allSearch();
                        this.onLiblistingChange.emit({ action: 'multiplestatusupdate', limitdata: this.limitcondval, sortdata: this.sortdataval });
                        /** @type {?} */
                        const dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'toogle-many'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
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
                }));
            }
            // this.animal = result;
        }));
    }
    /**
     * @return {?}
     */
    deletemultiple() {
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: ['custom-modalbox', 'delete-multiple'],
            data: {
                message: 'Are you sure you want to delete these records? This process can not be undone.',
                type: 'confirm'
            }
        });
        /** @type {?} */
        const ids = [];
        /** @type {?} */
        let c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result == 'yes') {
                this.subscriptions[this.subscriptioncount++] = this._apiService.deteManyData(this.apiurlval + this.libdataval.deleteendpointmany, ids, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (const c in ids) {
                            this.olddata = this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            olddata => olddata._id != ids[c]));
                        }
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.allSearch();
                        this.onLiblistingChange.emit({ action: 'multipledelete', limitdata: this.limitcondval, sortdata: this.sortdataval });
                        /** @type {?} */
                        const dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-multiple'],
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    deletedata(data) {
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        /** @type {?} */
        const dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: ['custom-modalbox', 'delete-single'],
            height: 'auto',
            data: {
                message: 'Are you sure you want to delete this record? This process can not be undone.',
                type: 'confirm'
            }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            if (result == 'yes') {
                this.subscriptions[this.subscriptioncount++] = this._apiService.deteOneData(this.apiurlval + this.deleteendpointval, data, this.jwttokenval, this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    if (result.status == 'success') {
                        this.olddata = this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        olddata => olddata._id != data._id));
                        this.dataSource = new MatTableDataSource(this.olddata);
                        this.selection = new SelectionModel(true, []);
                        this.dataSource.paginator = this.paginator;
                        this.dataSource.sort = this.sort;
                        this.allSearch();
                        this.onLiblistingChange.emit({ action: 'delete', limitdata: this.limitcondval, sortdata: this.sortdataval });
                        /** @type {?} */
                        const dialogRef = this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-single'],
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    }
    /**
     * @param {?} data
     * @return {?}
     */
    editdata(data) {
        this.router.navigate([this.editrouteval, data._id]);
    }
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    sorttable(field, type) {
        // console.log(field, type)
        this.sortdataval.field = field;
        this.sortdataval.type = type;
        this.allSearch();
    }
    /**
     * @return {?}
     */
    allSearch() {
        // console.log("hit limitcondval",this.allpaginationpostData);
        // console.log("hit limitcondval",this.limitcondval);
        // console.log('this.keepPagination first',this.keepPagination);
        // console.log("hit limitcondval",this.allpaginationpostData);
        // console.log("hit limitcondval",this.limitcondval);
        // console.log('this.keepPagination first',this.keepPagination);
        // return;
        /** @type {?} */
        const link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        const link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        let source;
        /** @type {?} */
        let condition;
        /** @type {?} */
        const textSearch = {};
        condition = {};
        // this.searchstrsarr.push({ val: this.tsearch[value], label: item.label, key: value });
        // console.log(this.searchstrsarr, 'this.searchstrsarr');
        // console.log(this.search_settingsval.search, 'search_settingsval.search');
        for (const i in this.tsearch) {
            // console.log('all search this.tsearch', this.tsearch[i]);
            if (this.tsearch[i] != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        let autosearch = {};
        // this.autosearch;
        for (const b in this.autosearch) {
            /** @type {?} */
            let tempautosearch = {};
            for (const m in this.autosearch[b]) {
                /** @type {?} */
                const tv = {};
                tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                if (tempautosearch.$or == null) {
                    tempautosearch.$or = [];
                }
                // console.log(autosearch.$and,'autosearch.$and 3')
                // autosearch.$or.push(tv);
                tempautosearch.$or.push(tv);
            }
            if (autosearch.$and == null) {
                autosearch.$and = [];
            }
            autosearch.$and.push(tempautosearch);
            // autosearch = Object.assign({},tempautosearch,autosearch);
            /** @type {?} */
            let autocount;
            if (Object.keys(autosearch).length == null || typeof Object.keys(autosearch).length == 'undefined') {
                autocount = 0;
            }
            else {
                autocount = Object.keys(autosearch).length;
            }
            // console.log(autocount, 'autosearch.length++++', tempautosearch,Object.keys(autosearch).length,Object.keys(autosearch))
            // autosearch[autocount] = tempautosearch;
        }
        // console.log('autos qq++', autosearch, this.autosearch);
        // button Search Data
        /** @type {?} */
        const buttonsearch = {};
        for (let bs in this.buttonSearchData) {
            for (const k in this.buttonSearchData[bs].value) {
                /** @type {?} */
                const bt = {};
                bt[this.buttonSearchData[bs].field] = this.buttonSearchData[bs].value[k].val.toString().toLowerCase();
                if (buttonsearch.$or == null) {
                    buttonsearch.$or = [];
                }
                // console.log(bt,'bt',bs,'bs')
                buttonsearch.$or.push(bt);
            }
        }
        // console.log(this.buttonSearchData, 'buttonsearch')
        if (typeof (this.limitcondval.pagecount) != 'undefined') {
            // this.limitcondval.pagecount = this.limitcondval.pagecount;
            // this.limitcondval.skip = this.limitcondval.skip;
            //  console.log("typeof(this.limitcondval.pagecount)!='undefined'");
            this.oldlimitrange = this.limitcondval;
            if (this.keepPagination != 1) {
                // console.log("this.keepPagination!=1");
                this.limitcondval.skip = 0;
                this.limitcondval.pagecount = 1;
                // source.condition.skip=0;
                // this.keepPagination=0;
            }
        }
        else {
            this.limitcondval.pagecount = 1;
            this.limitcondval.skip = 0;
            this.oldlimitrange = this.limitcondval;
        }
        /** @type {?} */
        let conditionobj = {};
        conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, buttonsearch, this.selectSearch_condition, this.libdataval.basecondition);
        // console.log(this.selectSearch_condition, 'selectSearch_condition')
        this.allSearchCond = conditionobj;
        // console.warn("this.allpaginationpostData",this.allpaginationpostData);
        if (this.keepPagination != 1) {
            this.limitcondval.skip = 0;
            // source.condition.skip=0;
            this.limitcondval.pagecount = 1;
            // this.keepPagination=0;
        }
        // conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition);
        // conditionobj = conditionobj & this.libdataval.basecondition;
        // conditionobj = conditionobj.concat(this.libdata.basecondition);
        // for (let b in conditionobj) {
        //   // if(conditionobj[b])
        //   for (let c in this.libdataval.basecondition) {
        //     if (c == b) {
        //       // conditionobj[b]={};
        //       let totalcond: any;
        //       if (typeof (conditionobj[b]) != 'object')
        //         totalcond = Object.assign({}, this.libdataval.basecondition[c], { $eq: conditionobj[b] });
        //       else
        //         totalcond = Object.assign({}, this.libdataval.basecondition[c], conditionobj[b]);
        //       console.log('in if blk', c, b, conditionobj[b], this.libdataval.basecondition[c], totalcond);
        //       conditionobj[b] = totalcond;
        //     } else {
        //       conditionobj[c] = this.libdataval.basecondition[c];
        //     }
        //   }
        // }
        // console.log('this.libdataval.basecondition', this.selectSearch_condition, 'conditionobj', conditionobj, 'this.libdataval.basecondition', this.libdataval.basecondition);
        // conditionobj = conditionobj.concat(this.libdata.basecondition);
        if (typeof this.allpaginationpostData != 'undefined') {
            console.warn("conditionobj", conditionobj);
            source = this.allpaginationpostData;
            if (typeof conditionobj != 'undefined' && conditionobj != null) {
                source.searchcondition = conditionobj;
                //  source.condition.skip=0;
                if (this.keepPagination != 1) {
                    this.limitcondval.skip = 0;
                    // source.condition.skip=0;
                    this.limitcondval.pagecount = 1;
                    // this.keepPagination=0;
                }
            }
        }
        else {
            source = {
                condition: {
                    limit: this.limitcondval.limit,
                    skip: 0
                },
                sort: {
                    field: this.sortdataval.field,
                    type: this.sortdataval.type
                },
                searchcondition: conditionobj,
            };
        }
        if (Object.keys(conditionobj).length < 0) {
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'No Search criteria selected !! ' }
            });
            return;
        }
        else {
            // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
            // return;
            this.date_search_source_countval = 0;
            this.loading = true;
            if (this.keepPagination != 1) {
                // console.log("this.keepPagination!=1 last part");
                source.condition.skip = 0;
            }
            if (this.keepPagination == 1) {
                this.keepPagination = 0;
            }
            // console.warn("source",source);
            // console.log('this.keepPagination last',this.keepPagination);
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: this.allSearchCond,
                        autoSearchVal: this.autosearch,
                        searchdata: this.search_settingsval,
                        selecteddata: this.selection.selected
                    });
                    this.dataSource = new MatTableDataSource(result.results.res);
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: this.allSearchCond,
                        autoSearchVal: this.autosearch,
                        searchdata: this.search_settingsval,
                        selecteddata: this.selection.selected,
                        flag: 'no_record'
                    });
                    // this.rescount = 0; 
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    this.tableflag = 1;
                }
                else {
                    this.tableflag = 0;
                }
                // console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
        }
        this.initiateSearch = false;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    gettypeof(val) {
        return typeof (val);
    }
    // open Bottom Sheet For Search
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    openBottomSheetForSearch(data, index) {
        /** @type {?} */
        var count = 1;
        // console.log(data, 'openBottomSheetForSearch', index)
        /** @type {?} */
        const bs = this.dialog.open(ModalForButtomSearch, { panelClass: 'button-search-modal', data: { items: data } });
        bs.disableClose = true;
        bs.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            // console.log(result, 'result++++==== data', data)
            if (result != null && result.flag == 'yes') {
                count = 1;
                /** @type {?} */
                var searchFlag = 0;
                // console.log(result, 'result++++====??', index)
                // console.log(this.buttonSearchData, 'buttonSearchData 1')
                if (this.buttonSearchData.length > 0) {
                    searchFlag = 1;
                    for (let i in this.buttonSearchData) {
                        if (this.buttonSearchData[i].field == result.items.field) {
                            count = 2;
                            searchFlag = 1;
                            // console.log('true +++ count', count)
                            for (let j in result.selectedData) {
                                this.buttonSearchData[i].value.push(result.selectedData[j]);
                            }
                            if (searchFlag == 1) {
                                // console.log(searchFlag, 'searchFlag 2')
                                this.allSearch();
                            }
                            return;
                        }
                        else {
                            count = 0;
                        }
                    }
                    // console.log(count, 'count else check')
                    // console.log(this.buttonSearchData, 'buttonSearchData 2')
                    if (count == 0) {
                        this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                        searchFlag = 1;
                    }
                }
                else {
                    this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                    searchFlag = 1;
                }
                // console.log(searchFlag, 'searchFlag 1')
                if (searchFlag == 1) {
                    // console.log(searchFlag, 'searchFlag 2')
                    this.allSearch();
                }
            }
        }));
    }
    // clear Button Search Chips  data
    /**
     * @param {?} bs
     * @param {?} i
     * @param {?} item
     * @param {?} j
     * @return {?}
     */
    clearButtonSearchChips(bs, i, item, j) {
        // console.log(bs, i, item, j, 'bs,i,item,j');
        this.buttonSearchData[i].value.splice(j, 1);
        // console.log(this.buttonSearchData, 'buttonSearchData splice')
        // this.search_settingsval.buttonsearch[bs.key].values
        for (let i in this.search_settingsval.buttonsearch) {
            if (this.search_settingsval.buttonsearch[i].field == bs.field) {
                // console.log('', this.search_settingsval.buttonsearch[i])
                this.search_settingsval.buttonsearch[i].value.push(item);
            }
        }
        // console.log(this.search_settingsval.buttonsearch,'this.search_settingsval.buttonsearch')
    }
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    artistxpPreview(singleData) {
        /** @type {?} */
        const link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        const data = { source: 'blockchainuser_view', condition: { posts_id_object: singleData._id }, token: this.jwttokenval };
        /******** not completed *****/
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        response => {
            /** @type {?} */
            const restlt = response;
            /* open dialog */
            /** @type {?} */
            const dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'delete-axp'],
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    }
}
ListingComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing',
                template: "<div class=\"container \" id={{libdataval.containerid}}>\n\n\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\" (click)=\"autocompletefunction(item)\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    <!-- <span>dddddd</span> -->\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"\n                                autocomplete=\"off\" placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker  #picker1></mat-datepicker>\n                        </mat-form-field> -->\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\"\n                                matTooltipClass=\"refreshtooltipcls\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\" matTooltipClass=\"searchtooltipcls\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\"\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" matTooltip=\"Delete\"\n                    mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\"\n                    matTooltip=\"Update Status\" mat-raised-button (click)=\"managestatusmultiple()\"> Update Status\n                </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" matTooltip=\"{{cbtns?.tooltip}}\" mat-raised-button\n                            (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" min=\"1\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n\n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"> </span>\n                                    <span></span>\n                                </span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                                </span>\n\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetimeshort') &&  column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime')  && column.columnDef.includes( 'datetimeshort') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'short'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- action buttons start here -->\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <div class=\"actionbuttonwrapper\">\n                                <div class=\"button_div_custom_cls\">\n\n                                    <!-- loader -->\n\n                                    <section class=\"example-section example-section-button-1 \">\n                                        <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\n                                            class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\n                                            [bufferValue]=\"bufferValue \">\n                                        </mat-progress-bar>\n                                    </section>\n\n                                    <!-- note block -->\n                                    <ng-container *ngIf=\"libdataval.notes!=null \">\n                                        <button mat-raised-button color=\"primary\" class=\"notebtncls\"\n                                            matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"\n                                            matTooltip=\"{{libdataval?.notes?.tooltip }}\" (click)=\"opennotes(row)\">\n                                            <span class=\"notelabelc\"> {{libdataval.notes.label }}</span>\n                                            <!-- <span class=\"notebracket1\">(</span> -->\n                                            <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                            <!-- <span class=\"notebracket2\">)</span> -->\n                                        </button>\n                                    </ng-container>\n\n                                    <!--custom buttions block -->\n\n                                    <ng-container\n                                        *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                        <ng-container\n                                            *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                            <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                    <!-- ss {{row['status']}} -->\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip }}\"\n                                                        matTooltipClass=\"listnertooltipcls\"\n                                                        (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label\n                                                        }}</button>\n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                            <button mat-raised-button\n                                                                matTooltipClass=\"externallinktooltipcls\"\n                                                                matTooltip=\"{{custombutton?.tooltip}}\"\n                                                                color=\"primary\">{{custombutton.label}}</button>\n                                                        </a>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            matTooltipClass=\"parambtntooltipcls\"\n                                                            (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallink(custombutton)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip}}\"\n                                                            (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n\n                                                </ng-container>\n\n                                            </section>\n\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n\n\n\n                                <span class=\"actionbuttonwrapperspan\"\n                                    *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                    <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                        class=\"cursor\" (click)=\"editdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.edit}}\">\n                                            edit\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span\n                                        *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                        class=\"cursor\" (click)=\"deletedata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.delete }}\">\n                                            delete_outline\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                        class=\"cursor\" (click)=\"viewdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.preview }}\">\n                                            remove_red_eye\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span class=\"cursor\"\n                                        *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                        (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.changeStatus  }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                        (click)=\"custombuttonfunc(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{staticTooltip.changeStatus }} \">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- hide status toggle with cond-->\n                                    <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\n                                        class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- artistxp preview start -->\n                                    <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\"\n                                        (click)=\"artistxpPreview(row)\">\n                                        <i class=\"material-icons\">perm_media</i>\n                                    </span>\n                                    <!-- artistxp preview end -->\n\n                                </span>\n                            </div>\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </section>\n\n        </ng-container>\n\n\n        <!-- new pagination block  -->\n        <ng-container *ngIf=\"paginationtypeFlag && paginationtype==2 && newpagingcountFlag\">\n            <span class=\"showingpaginationcls\">Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n                <ng-container\n                    *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                    {{(limitcondval.pagecount)*limitcondval.limit}}\n                </ng-container>\n                <ng-container\n                    *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                    {{date_search_source_countval}}\n                </ng-container>\n\n\n\n                of\n                <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                Results\n            </span>\n\n            <button mat-raised-button color=\"primary\" class=\"pagefirst_button\" (click)=\"paging(1,'')\">First</button>\n            <button mat-raised-button color=\"primary\" class=\"pageprev_button\"\n                (click)=\"paging(limitcondval.pagecount-1,'')\">Prev</button>\n\n            <ng-container *ngFor=\"let item of pageCountArray;let i=index\">\n                <ng-container *ngIf=\"i<10 && pageCountArray.length > newcurrentpagingVal+i-1 \">\n\n                    <!-- h{{i}}--{{newcurrentpagingVal+i-1}}--{{pageCountArray.length}} -->\n\n\n                    <!-- <span *ngIf=\" (pageCountArray.length - limitcondval.pagecount) < 10\" class=\"pagercls\"\n                        [ngClass]=\"{'active': limitcondval.pagecount ===  limitcondval.pagecount+i-9}\"\n                        (click)=\"paging(limitcondval.pagecount+i-9 ,'')\">\n                        <span>\n                            \n                            {{ limitcondval.pagecount+i-9 }}\n                        </span>\n                    </span> -->\n                    <span class=\"pagercls\" [ngClass]=\"{'active': newcurrentpagingVal+i === limitcondval.pagecount}\"\n                        (click)=\"paging(i+newcurrentpagingVal,'')\">\n                        <span class=\"newpagingdatacls\">\n                            {{ i+newcurrentpagingVal }}\n                        </span>\n                    </span>\n                </ng-container>\n\n\n            </ng-container>\n\n            <input type=\"number\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\" min=\"1\"\n                max=\"pageCountArray.length\">\n\n            <button mat-raised-button color=\"primary\" class=\"pagenext_button\"\n                (click)=\"paging(limitcondval.pagecount+1,'')\">Next</button>\n\n            <button mat-raised-button color=\"primary\" class=\"pagelast_button\"\n                (click)=\"paging(lastpageCountArray,'')\">Last</button>\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n    </mat-card>\n\n\n\n</div>\n<!-- <div>{{ startDate111 }}</div>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker  #picker1></mat-datepicker>\n</mat-form-field> -->\n\n<!-- <div>After Translet the word test is : {{\"test\" | languageTranslet}}</div> -->\n<!-- <div>{{\"test\"}}</div> -->\n<!-- <div>\n    <span>{{\"Her knowledge of publishing trends, literary history, and books of every description and genre, however, filled rooms\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"It is authorized to decide all cases of every description, arising under the constitution or laws of the United States\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"For example, he wanted to be a member of as many clubs - of any description - as possible\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"Academic excellence was matched with extra-curricular activities of every description - from drama through sport to foreign travel\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Superb apple pie with sultanas and cloves, interspersed with crusty bread sandwiches of every description\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"being at least one \u2014used to indicate that a logical proposition is asserted only of a subclass or certain members of the class denoted by the term which it modifies.\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"When some is used to modify a number, it is almost always a round number\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Middle English som, adjective & pronoun, from Old English sum; akin to Old High German sum some, Greek ham\u0113 somehow, homos same\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"causing a specified feeling or condition\" | languageTranslet}}</span>\n    <span>\n        {{ \"The assessments of the autonomic nervous system, endothelial function, and Ankle-Brachial Index (ABI) are well-recognized tests to detect early complications in diabetic patients \u2013 diabetic neuropathy risk, cardiovascular risk, and peripheral artery disease. These assessments are recommended by the U.S. and International Medical Associations. Unfortunately, most of these assessments or exams are not routinely performed in daily clinical practice because of concerns about complex procedures, time consumption, and a high level of difficulty in reading and/or interpreting exam reports.\" | languageTranslet }}\n    </span>\n    <br>\n\n\n    \n    <span>\n        {{ \"Our ANS testing medical device platform eliminates these concerns by offering an innovative medical device that provides physicians with new and easy to use tools that simplify complex procedures, significantly reduces the time required by technicians to perform the exams, and offers easy to read and interpret exam reports with clinical guidance support which is backed by studies and peer reviews. Lastly, our most recent innovation includes wireless transmission to increase patient and technician comfort.\" | languageTranslet }}\n    </span>\n</div> -->",
                animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ],
                styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}tr.example-detail-row{height:0}tr.example-element-row:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row:not(.example-expanded-row):active{background:#efefef}.example-element-row td{border-bottom-width:0}.pagercls{cursor:pointer}.active{color:#00f}"]
            }] }
];
/** @nocollapse */
ListingComponent.ctorParameters = () => [
    { type: ApiService },
    { type: MatDialog },
    { type: MatBottomSheet },
    { type: FormBuilder },
    { type: Router },
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef },
    { type: HttpClient },
    { type: DomSanitizer },
    { type: MatSnackBar },
    { type: ElementRef },
    { type: ObservableserviceService }
];
ListingComponent.propDecorators = {
    onLiblistingChange: [{ type: Output }],
    onLiblistingButtonChange: [{ type: Output }],
    languageDataset: [{ type: Input }],
    setconvertToLanguage: [{ type: Input }],
    search_settings: [{ type: Input }],
    click_to_add_ananother_page: [{ type: Input }],
    limitcond: [{ type: Input }],
    date_search_source_count: [{ type: Input }],
    grab_link: [{ type: Input }],
    custombutton: [{ type: Input }],
    date_search_source: [{ type: Input }],
    sortdata: [{ type: Input }],
    date_search_endpoint: [{ type: Input }],
    url: [{ type: Input }],
    searchendpoint: [{ type: Input }],
    pdf_link: [{ type: Input }],
    searchList: [{ type: Input }],
    libdata: [{ type: Input }],
    datasource: [{ type: Input }],
    datacollection: [{ type: Input }],
    skip: [{ type: Input }],
    detail_datatype: [{ type: Input }],
    detail_skip_array: [{ type: Input }],
    sourcedata: [{ type: Input }],
    modify_header_array: [{ type: Input }],
    deleteendpoint: [{ type: Input }],
    updateendpoint: [{ type: Input }],
    apiurl: [{ type: Input }],
    updatetable: [{ type: Input }],
    jwttoken: [{ type: Input }],
    statusarr: [{ type: Input }],
    emailarray: [{ type: Input }],
    editroute: [{ type: Input }],
    preview_artistxp: [{ type: Input }],
    customlistenbutton: [{ type: Input }],
    sort: [{ type: ViewChild, args: [MatSort,] }],
    paginator: [{ type: ViewChild, args: [MatPaginator,] }]
};
if (false) {
    /** @type {?} */
    ListingComponent.prototype.selectedItem;
    /** @type {?} */
    ListingComponent.prototype.pageChangeValue;
    /** @type {?} */
    ListingComponent.prototype.myControl;
    /** @type {?} */
    ListingComponent.prototype.staticTooltip;
    /** @type {?} */
    ListingComponent.prototype.newcurrentpagingVal;
    /** @type {?} */
    ListingComponent.prototype.startDate;
    /** @type {?} */
    ListingComponent.prototype.keepPagination;
    /** @type {?} */
    ListingComponent.prototype.startDate111;
    /** @type {?} */
    ListingComponent.prototype.endDate;
    /** @type {?} */
    ListingComponent.prototype.datasourceval;
    /** @type {?} */
    ListingComponent.prototype.search_settingsval;
    /** @type {?} */
    ListingComponent.prototype.click_to_add_ananother_pageval;
    /** @type {?} */
    ListingComponent.prototype.grab_linkval;
    /** @type {?} */
    ListingComponent.prototype.date_search_sourceval;
    /** @type {?} */
    ListingComponent.prototype.date_search_endpointval;
    /** @type {?} */
    ListingComponent.prototype.urlval;
    /** @type {?} */
    ListingComponent.prototype.searchendpointval;
    /** @type {?} */
    ListingComponent.prototype.searchListval;
    /** @type {?} */
    ListingComponent.prototype.rescount;
    /** @type {?} */
    ListingComponent.prototype.pdf_link_val;
    /** @type {?} */
    ListingComponent.prototype.statusarrval;
    /** @type {?} */
    ListingComponent.prototype.skipval;
    /** @type {?} */
    ListingComponent.prototype.errormg;
    /** @type {?} */
    ListingComponent.prototype.jwttokenval;
    /** @type {?} */
    ListingComponent.prototype.detail_datatypeval;
    /** @type {?} */
    ListingComponent.prototype.detail_skip_arrayval;
    /** @type {?} */
    ListingComponent.prototype.deleteendpointval;
    /** @type {?} */
    ListingComponent.prototype.editrouteval;
    /** @type {?} */
    ListingComponent.prototype.apiurlval;
    /** @type {?} */
    ListingComponent.prototype.updateendpointval;
    /** @type {?} */
    ListingComponent.prototype.modify_header_arrayval;
    /** @type {?} */
    ListingComponent.prototype.date_search_source_countval;
    /** @type {?} */
    ListingComponent.prototype.datacollectionval;
    /** @type {?} */
    ListingComponent.prototype.selection;
    /** @type {?} */
    ListingComponent.prototype.sourcedataval;
    /** @type {?} */
    ListingComponent.prototype.emailarrayval;
    /** @type {?} */
    ListingComponent.prototype.columns;
    /** @type {?} */
    ListingComponent.prototype.autosearchinput;
    /** @type {?} */
    ListingComponent.prototype.currentautosearcharr;
    /** @type {?} */
    ListingComponent.prototype.olddata;
    /** @type {?} */
    ListingComponent.prototype.tsearch;
    /** @type {?} */
    ListingComponent.prototype.tableflag;
    /** @type {?} */
    ListingComponent.prototype.autosearch;
    /** @type {?} */
    ListingComponent.prototype.x;
    /** @type {?} */
    ListingComponent.prototype.libdataval;
    /** @type {?} */
    ListingComponent.prototype.limitcondval;
    /** @type {?} */
    ListingComponent.prototype.custombuttonval;
    /** @type {?} */
    ListingComponent.prototype.result;
    /** @type {?} */
    ListingComponent.prototype.sortdataval;
    /** @type {?} */
    ListingComponent.prototype.sh;
    /** @type {?} */
    ListingComponent.prototype.art;
    /** @type {?} */
    ListingComponent.prototype.aud2;
    /** @type {?} */
    ListingComponent.prototype.aud;
    /** @type {?} */
    ListingComponent.prototype.updatetableval;
    /** @type {?} */
    ListingComponent.prototype.loaderrow;
    /** @type {?} */
    ListingComponent.prototype.currentautocompleteitem;
    /** @type {?} */
    ListingComponent.prototype.customButtonFlagVal;
    /** @type {?} */
    ListingComponent.prototype.allSearchCond;
    /** @type {?} */
    ListingComponent.prototype.searchbuttonval;
    /** @type {?} */
    ListingComponent.prototype.searchBarFlag;
    /** @type {?} */
    ListingComponent.prototype.searchBarToolTip;
    /** @type {?} */
    ListingComponent.prototype.searchBarFlagVal;
    /** @type {?} */
    ListingComponent.prototype.recordFoundFlag;
    /** @type {?} */
    ListingComponent.prototype.recordFoundData;
    /** @type {?} */
    ListingComponent.prototype.color;
    /** @type {?} */
    ListingComponent.prototype.mode;
    /** @type {?} */
    ListingComponent.prototype.value;
    /** @type {?} */
    ListingComponent.prototype.bufferValue;
    /** @type {?} */
    ListingComponent.prototype.previewFlug;
    /** @type {?} */
    ListingComponent.prototype.selectsearch;
    /** @type {?} */
    ListingComponent.prototype.newpagingcountFlag;
    /** @type {?} */
    ListingComponent.prototype.initiateSearch;
    /** @type {?} */
    ListingComponent.prototype.onLiblistingChange;
    /** @type {?} */
    ListingComponent.prototype.onLiblistingButtonChange;
    /** @type {?} */
    ListingComponent.prototype.convertToLanguage;
    /** @type {?} */
    ListingComponent.prototype.searchstrsarr;
    /** @type {?} */
    ListingComponent.prototype.oldlimitrange;
    /** @type {?} */
    ListingComponent.prototype.languagedataset;
    /** @type {?} */
    ListingComponent.prototype.pageCountArray;
    /** @type {?} */
    ListingComponent.prototype.firstpageCountArray;
    /** @type {?} */
    ListingComponent.prototype.lastpageCountArray;
    /** @type {?} */
    ListingComponent.prototype.paginationtype;
    /** @type {?} */
    ListingComponent.prototype.paginationtypeFlag;
    /** @type {?} */
    ListingComponent.prototype.expandedElement;
    /** @type {?} */
    ListingComponent.prototype.stateGroups;
    /** @type {?} */
    ListingComponent.prototype.allpaginationpostData;
    /** @type {?} */
    ListingComponent.prototype.stateGroup;
    /** @type {?} */
    ListingComponent.prototype.displayedColumns;
    /** @type {?} */
    ListingComponent.prototype.datacolumns;
    /** @type {?} */
    ListingComponent.prototype.displayedColumnsheader;
    /** @type {?} */
    ListingComponent.prototype.formarray;
    /** @type {?} */
    ListingComponent.prototype.start_date;
    /** @type {?} */
    ListingComponent.prototype.dateSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.selectSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.autoSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.textSearch_condition;
    /** @type {?} */
    ListingComponent.prototype.end_date;
    /** @type {?} */
    ListingComponent.prototype.i;
    /** @type {?} */
    ListingComponent.prototype.loading;
    /** @type {?} */
    ListingComponent.prototype.preresult;
    /** @type {?} */
    ListingComponent.prototype.buttonSearchData;
    /** @type {?} */
    ListingComponent.prototype.dataSource;
    /** @type {?} */
    ListingComponent.prototype.sort;
    /** @type {?} */
    ListingComponent.prototype.paginator;
    /** @type {?} */
    ListingComponent.prototype.myForm;
    /** @type {?} */
    ListingComponent.prototype.modelChanged;
    /** @type {?} */
    ListingComponent.prototype.modelChangedserver;
    /** @type {?} */
    ListingComponent.prototype.pagechanged;
    /** @type {?} */
    ListingComponent.prototype.subscriptions;
    /** @type {?} */
    ListingComponent.prototype.subscriptioncount;
    /** @type {?} */
    ListingComponent.prototype.tableFooterColumns;
    /** @type {?} */
    ListingComponent.prototype.testvalue;
    /** @type {?} */
    ListingComponent.prototype.txtQueryChanged;
    /** @type {?} */
    ListingComponent.prototype.limitChangrd;
    /** @type {?} */
    ListingComponent.prototype.pages;
    /** @type {?} */
    ListingComponent.prototype.status;
    /** @type {?} */
    ListingComponent.prototype._apiService;
    /** @type {?} */
    ListingComponent.prototype.dialog;
    /** @type {?} */
    ListingComponent.prototype.bottomSheet;
    /** @type {?} */
    ListingComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.router;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype.container;
    /** @type {?} */
    ListingComponent.prototype._http;
    /** @type {?} */
    ListingComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype._snackBar;
    /**
     * @type {?}
     * @private
     */
    ListingComponent.prototype._elementRef;
    /** @type {?} */
    ListingComponent.prototype.observableService;
}
export class Confirmdialog {
    /**
     * @param {?} _apiService
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} sanitizer
     * @param {?} dialog
     */
    constructor(_apiService, dialogRef, data, sanitizer, dialog) {
        this._apiService = _apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
        this.dialog = dialog;
        // console.log('lib data in modal ', this.data, this.data, this.data.rowdata, this.data.rowdata.blogtitle);
        this.data.color = 'primary';
        this.data.mode = 'indeterminate';
        this.data.loadervalue = 50;
        this.data.bufferValue = 76;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    deletenote(index) {
        // console.log('log', this.data);
        // if (this.data.notesval != null && this.data.notesval != '') {
        /** @type {?} */
        const dialogRef = this.dialog.open(DeleteNotesModal, {
            height: 'auto',
            panelClass: ['custom-modalbox', 'delete-notes-modal'],
            disableClose: true
            // data: {
            //   isconfirmation: false,
            //   notes: true, apiurl: this.apiurlval,
            //   notedata: this.libdataval.notes, rowdata: val,
            //   jwttokenval: this.jwttokenval,
            //   listdata: result.res,
            //   _snackBar: this._snackBar
            // }
        });
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
            // console.log("result",result);
            if (typeof result != 'undefined' && typeof (result.response) != "undefined" && result.response != "") {
                /** @type {?} */
                const source = {
                    id: this.data.rowdata._id,
                    index
                    // note: this.data.notesval,
                    // user: this.data.notedata.user,
                };
                this.data.loading1 = index;
                this._apiService.postSearch(this.data.apiurl + this.data.notedata.deleteendpoint, this.data.jwttokenval, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                res => {
                    /** @type {?} */
                    let result = {};
                    result = res;
                    // console.log(result, 'add notes');
                    if (result.status == 'success') {
                        // this.data.listdata.push({ userid: this.data.notedata.currentuserfullname, note: this.data.notesval, created_date: Date.now() });
                        // this.data.notesval = '';
                        this.data.listdata.splice(index, 1);
                        this.data.loading1 = null;
                    }
                    // console.log('count',result);
                    // this.dataSource.paginator = this.paginator;
                    // this.dataSource.sort = this.sort;
                }));
            }
        }));
        // }
    }
    /**
     * @return {?}
     */
    addnotes() {
        // console.log('log', this.data);
        if (this.data.notesval != null && this.data.notesval != '') {
            /** @type {?} */
            const source = {
                id: this.data.rowdata._id,
                note: this.data.notesval,
                user: this.data.notedata.user,
            };
            this.data.loading = true;
            this._apiService.postSearch(this.data.apiurl + this.data.notedata.addendpoint, this.data.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                // console.log(result, 'add notes');
                if (result.status == 'success') {
                    if (this.data.listdata == null) {
                        this.data.listdata = [];
                    }
                    this.data.listdata.unshift({ _id: this.data.rowdata._id, notes: { userid: this.data.notedata.user, note: this.data.notesval, user: this.data.notedata.currentuserfullname, created_date: Date.now() } });
                    this.data.notesval = '';
                    this.data.loading = null;
                }
                // console.log('count',this.data.listdata);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
        }
        else {
            // console.log('blank notes');
            this.data._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'Notes can\'t be blank !! ' }
            });
        }
    }
    /**
     * @param {?} val
     * @return {?}
     */
    gettypeof(val) {
        return typeof (val);
    }
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    sanitizeUrl(unsafeurl, data, rowdata) {
        for (const b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    }
}
Confirmdialog.decorators = [
    { type: Component, args: [{
                selector: 'confirmdialog',
                template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\n            {{data?.headerData?.header}}\n        </h1>\n\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\n                            <span>By:</span>{{note.notes.user}}\n                        </div>\n                        <div mat-line class=\"line-datetime\"\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\n                            {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span style=\"cursor: pointer;\" *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\"\n                            (click)=\"deletenote(notej)\" matTooltip=\"Delete Note\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\" matTooltip=\"Add Note\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\n                                    [innerHtml]=\"arr\"></span>\n                                <span\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\n                                    [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\n            (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
            }] }
];
/** @nocollapse */
Confirmdialog.ctorParameters = () => [
    { type: ApiService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: DomSanitizer },
    { type: MatDialog }
];
if (false) {
    /** @type {?} */
    Confirmdialog.prototype._apiService;
    /** @type {?} */
    Confirmdialog.prototype.dialogRef;
    /** @type {?} */
    Confirmdialog.prototype.data;
    /** @type {?} */
    Confirmdialog.prototype.sanitizer;
    /** @type {?} */
    Confirmdialog.prototype.dialog;
}
// delete notes confirmation modal
export class DeleteNotesModal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn("bottom-sheet",data);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    responseFunction(value) {
        this.dialogRef.close({ response: value });
    }
}
DeleteNotesModal.decorators = [
    { type: Component, args: [{
                selector: 'deletenotesConfirmationModal',
                template: "<mat-card class=\"deletenotesparentcls\">\n    <mat-card-content class=\"deletenoteschildcls\">\n        <h3> hey !!</h3>\n        <P>Are you sure you want to delete this note?</P>\n    </mat-card-content>\n    <ng-container>\n        \n        <mat-card-content class=\"deletenotescls\">\n            <button mat-button class=\"liblist_btn_1\" (click)=\"responseFunction('Yes')\">\n                Yes\n            </button>\n            <button mat-button class=\"liblist_btn_2\" (click)=\"onNoClick()\">\n                No\n            </button>\n        </mat-card-content>\n    </ng-container>\n</mat-card>"
            }] }
];
/** @nocollapse */
DeleteNotesModal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    DeleteNotesModal.prototype.dialogRef;
    /** @type {?} */
    DeleteNotesModal.prototype.data;
}
export class BottomSheet {
    /**
     * @param {?} bottomSheetRef
     * @param {?} data
     */
    constructor(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        // console.warn("bottom-sheet",data);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    openLink(val) {
        this.bottomSheetRef.dismiss(val);
    }
}
BottomSheet.decorators = [
    { type: Component, args: [{
                selector: 'bottom-sheet',
                template: "<div class=\"bottom-sheet-header-toggle\">\n    You are about to change status of these record(s)\n\n</div>\n<mat-nav-list class=\"navlist\">\n    <a *ngFor=\"let item of data.items;\" mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n</mat-nav-list>"
            }] }
];
/** @nocollapse */
BottomSheet.ctorParameters = () => [
    { type: MatBottomSheetRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    BottomSheet.prototype.bottomSheetRef;
    /** @type {?} */
    BottomSheet.prototype.data;
}
export class ModalForButtomSearch {
    /**
     * @param {?} bnottoRef
     * @param {?} data
     * @param {?} apiService
     */
    constructor(bnottoRef, data, apiService) {
        this.bnottoRef = bnottoRef;
        this.data = data;
        this.apiService = apiService;
        this.buttonSearchData = {};
        this.selectedData = [];
        this.searchVal = '';
        this.allButtonData = [];
        this.loading_flag = false;
        this.errmsg = '';
        this.matChipData = [];
        this.matAutosearchData = [];
        // console.log("bottom-sheet-search", data);
        this.buttonSearchData = {};
        this.buttonSearchData = data;
        this.allButtonData = data.items.value;
    }
    /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    chooseChipItem(data, i) {
        // console.log(data, '??data')
        this.selectedData.push(data);
        this.buttonSearchData.items.value.splice(i, 1);
    }
    // submit 
    /**
     * @return {?}
     */
    searchByItem() {
        // console.log(this.selectedData)
        this.data.flag = 'yes';
        this.data.selectedData = this.selectedData;
        // this.searchVal = '';
        // this.buttonSearchData.items.value = [];
        this.bnottoRef.close(this.data);
    }
    /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    remove(val, i) {
        this.selectedData.splice(i, 1);
        this.buttonSearchData.items.value.push(val);
    }
    /**
     * @return {?}
     */
    reset() {
        this.searchVal = '';
        this.buttonSearchData.items.value = [];
        this.buttonSearchData.items.value = this.allButtonData;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    searchByKeyword(value) {
        if (this.searchVal != null && this.searchVal != '') {
            this.loading_flag = true;
            /** @type {?} */
            let link = this.buttonSearchData.items.serversearchdata.url + this.buttonSearchData.items.serversearchdata.endpoint;
            /** @type {?} */
            let data = {
                "search_str": value,
                "limit": 50
            };
            this.apiService.postSearch1(link, data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                // console.log(data)
                /** @type {?} */
                let result = res;
                if (result.status == 'success') {
                    // this.buttonSearchData.items.value = [];
                    this.loading_flag = false;
                    result = result.res.slice(0, 50);
                    // this.buttonSearchData.items.value = result;
                    // console.log(result, 'result', this.loading_flag)
                    this.matAutosearchData = result;
                }
            }));
        }
        else {
            this.errmsg = "Please Enter Keywords";
        }
    }
    /**
     * @return {?}
     */
    close() {
        this.data.flag = 'no';
        this.bnottoRef.close(this.data);
    }
}
ModalForButtomSearch.decorators = [
    { type: Component, args: [{
                selector: 'button-search-modal',
                template: "<div class=\"bottom-sheet-header-toggle\">\n    <h2 style=\"text-align: center;\"> {{buttonSearchData.items.label}}</h2>\n</div>\n\n\n<div class=\"selecteditemcls\" *ngIf=\"selectedData.length >0\">\n    <span>Selected :</span>\n    <div class=\"navlist\" style=\"display: inline;\">\n        <mat-chip class=\"example-box\" *ngFor=\"let item of selectedData;let i=index;\">{{item.name}}\n            <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"remove(item,i)\">cancel</mat-icon>\n        </mat-chip>\n    </div>\n    <span>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByItem()\">Search\n        </button>\n    </span>\n</div>\n<br><br>\n\n<div>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading_flag == true\"></mat-progress-bar>\n</div>\n<br><br>\n\n<div class=\"searchValcls\">\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Search By Keywords</mat-label>\n        <input matInput placeholder=\"filter\" [(ngModel)]=\"searchVal\" (keyup)=\"searchByKeyword(searchVal)\" [matAutocomplete]=\"auto\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of matAutosearchData;let i = index\" [value]=\"item.name\"\n        (click)=\"chooseChipItem(item,i)\">\n            {{item.name}}\n        </mat-option>\n    </mat-autocomplete>\n\n    <!-- <span class=\"errcls\" style=\"color: brown;\" *ngIf=\"searchVal == null || searchVal == ''\">{{errmsg}}</span> -->\n    <span class='searchByKeywordcls'>\n        <span style=\"cursor: pointer;\" class=\"material-icons\" (click)=\"reset()\">\n            sync\n        </span>\n         <!-- <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByKeyword(searchVal)\">Search\n        </button> -->\n    </span>\n\n</div>\n<br>\n\n<div class=\"chipdatacls\">\n    <div style=\"display: inline;\" *ngIf=\"buttonSearchData.items?.value.length >0\">\n        <h2 style=\"text-align: center;\">OR Choose From <span class=\"material-icons\">\n                south\n            </span></h2>\n        <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n            <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of buttonSearchData.items?.value;let i =index\">\n                <span style=\"cursor: pointer;\" (click)=\"chooseChipItem(item,i)\"> {{item.name}}</span>\n            </mat-chip>\n        </mat-chip-list>\n    </div>\n    <span class='norecordcls' style=\"text-align: center;\" *ngIf=\"buttonSearchData.items?.value.length == 0\"><span\n           >No Record Found</span></span>\n</div>\n\n\n<div class=\"clrcls\">\n    <span style=\"cursor: pointer;\n    float: right;\n    margin-bottom: -6px;\" matTooltip=\"Clear\" class=\"material-icons\" (click)=\"close()\">\n        clear\n    </span>\n</div>"
            }] }
];
/** @nocollapse */
ModalForButtomSearch.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: ApiService }
];
if (false) {
    /** @type {?} */
    ModalForButtomSearch.prototype.buttonSearchData;
    /** @type {?} */
    ModalForButtomSearch.prototype.selectedData;
    /** @type {?} */
    ModalForButtomSearch.prototype.searchVal;
    /** @type {?} */
    ModalForButtomSearch.prototype.allButtonData;
    /** @type {?} */
    ModalForButtomSearch.prototype.loading_flag;
    /** @type {?} */
    ModalForButtomSearch.prototype.errmsg;
    /** @type {?} */
    ModalForButtomSearch.prototype.matChipData;
    /** @type {?} */
    ModalForButtomSearch.prototype.matAutosearchData;
    /**
     * @type {?}
     * @private
     */
    ModalForButtomSearch.prototype.bnottoRef;
    /** @type {?} */
    ModalForButtomSearch.prototype.data;
    /** @type {?} */
    ModalForButtomSearch.prototype.apiService;
}
/**
 * listing video player
 */
export class VideoPlayer {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('videoplayerModal',data.previewData.video);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
VideoPlayer.decorators = [
    { type: Component, args: [{
                selector: 'videoplayer',
                template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
            }] }
];
/** @nocollapse */
VideoPlayer.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    VideoPlayer.prototype.dialogRef;
    /** @type {?} */
    VideoPlayer.prototype.data;
}
/**
 * listing Image View
 */
export class ImageView {
    // public data:any;
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('ImageViewModal', data);
    }
    /**
     * @return {?}
     */
    addnotes() {
        // console.log('log', this.data);
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
ImageView.decorators = [
    { type: Component, args: [{
                selector: 'image',
                template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
            }] }
];
/** @nocollapse */
ImageView.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    ImageView.prototype.dialogRef;
    /** @type {?} */
    ImageView.prototype.data;
}
export class SnackbarComponent {
    /**
     * @param {?} snackBarRef
     * @param {?} data
     */
    constructor(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        // console.log('snack',this.data);
    }
}
SnackbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'snack-bar-component-example-snack',
                template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `]
            }] }
];
/** @nocollapse */
SnackbarComponent.ctorParameters = () => [
    { type: MatSnackBarRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
];
if (false) {
    /** @type {?} */
    SnackbarComponent.prototype.snackBarRef;
    /** @type {?} */
    SnackbarComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFB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QU0sU0FBQyxlQUFlOzs7O0lBRHZCLDhCQUF5Qzs7SUFDekMseUJBQXlDOztBQXFCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFDUyxXQUE4QyxFQUNsQixJQUFTO1FBRHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTVDLGtDQUFrQztJQUNwQyxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0Msa0ZBQXFEO3lCQUM1Qzs7OztHQUlSO2FBQ0Y7Ozs7WUE1L0Z5QyxjQUFjOzRDQWdnR25ELE1BQU0sU0FBQyxrQkFBa0I7Ozs7SUFEMUIsd0NBQXFEOztJQUNyRCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLCBTaW1wbGVDaGFuZ2UsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0NoZWNrZWQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsIE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgRXZlbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUSElTX0VYUFIsIFRocm93U3RtdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2FzdCc7XG5cblxuLy8gaW1wb3J0IHtQcm9ncmVzc0Jhck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG4vLyBpbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gMDtcbiAgcHVibGljIHBhZ2VDaGFuZ2VWYWx1ZTogTnVtYmVyO1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHN0YXRpY1Rvb2x0aXA6IGFueSA9IHtcbiAgICBcImRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgIFwiZWRpdFwiOiBcIkVkaXRcIixcbiAgICBcInByZXZpZXdcIjogXCJQcmV2aWV3XCIsXG4gICAgXCJjaGFuZ2VTdGF0dXNcIjogXCJDaGFuZ2UgU3RhdHVzXCIsXG4gIH1cbiAgcHVibGljIG5ld2N1cnJlbnRwYWdpbmdWYWw6IGFueTtcbiAgcHVibGljIHN0YXJ0RGF0ZTogYW55O1xuICBwdWJsaWMga2VlcFBhZ2luYXRpb246IGFueSA9IDA7XG4gIHB1YmxpYyBzdGFydERhdGUxMTE6IGFueSA9IG5ldyBEYXRlKDE2MjIzNTgwNTAwMDApXG4gIHB1YmxpYyBlbmREYXRlOiBhbnk7XG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBwdWJsaWMgc2VhcmNoTGlzdHZhbDogYW55O1xuICByZXNjb3VudDogbnVtYmVyID0gMDtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgY3VycmVudGF1dG9zZWFyY2hhcnI6IGFueSA9IFtdO1xuICBvbGRkYXRhOiBhbnkgPSBbXTtcbiAgdHNlYXJjaDogYW55ID0gW107XG4gIHRhYmxlZmxhZzogYW55ID0gMDtcbiAgYXV0b3NlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyB4OiBhbnk7XG4gIHB1YmxpYyBsaWJkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGxpbWl0Y29uZHZhbDogYW55ID0ge307XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWw6IGFueTtcbiAgcHVibGljIHJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBzb3J0ZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBzaDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgdXBkYXRldGFibGV2YWw6IGFueSA9IGZhbHNlO1xuICBsb2FkZXJyb3c6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRhdXRvY29tcGxldGVpdGVtOiBhbnk7XG4gIHB1YmxpYyBjdXN0b21CdXR0b25GbGFnVmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGFsbFNlYXJjaENvbmQ6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoYnV0dG9udmFsOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaEJhckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlYXJjaEJhclRvb2xUaXA6IGFueSA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICBwdWJsaWMgc2VhcmNoQmFyRmxhZ1ZhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVjb3JkRm91bmRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNvcmRGb3VuZERhdGE6IGFueSA9ICcnO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyBuZXdwYWdpbmdjb3VudEZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaW5pdGlhdGVTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25MaWJsaXN0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIG9uTGlibGlzdGluZ0J1dHRvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2U6IGFueTtcbiAgc2VhcmNoc3Ryc2FycjogYW55ID0gW107XG4gIG9sZGxpbWl0cmFuZ2U6IGFueSA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2VkYXRhc2V0OiBhbnkgPSBbXTtcbiAgQElucHV0KClcbiAgc2V0IGxhbmd1YWdlRGF0YXNldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5sYW5ndWFnZWRhdGFzZXQgPSB2YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyYWJfbGlua3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNldGNvbnZlcnRUb0xhbmd1YWdlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJkZXZlbG9wZXIgdGVzdFwiLHRoaXMuY29udmVydFRvTGFuZ3VhZ2UpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29udmVydFRvTGFuZ3VhZ2UgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZSAhPSBudWxsICYmIHRoaXMuY29udmVydFRvTGFuZ3VhZ2UgIT0gJycpIHtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZVNlcnZpY2Uuc2V0Y29udmVydFRvTGFuZ3VhZ2UodGhpcy5jb252ZXJ0VG9MYW5ndWFnZSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hfc2V0dGluZ3Moc2VhcmNoX3NldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCA9IHNlYXJjaF9zZXR0aW5ncztcbiAgICAvLyBjb25zb2xlLmxvZygnc2VhcmNoX3NldHRpbmdzdmFsKysrKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwpXG4gICAgLypmb3IgKGxldCBpPSAwOyBpPD0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbaV0ubGFiZWwpO1xuICAgIH0qL1xuXG4gICAgLyogIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0ubGFiZWwpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLnZhbHVlcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKTsqL1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZShjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U6IGFueSkge1xuICAgIHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsID0gY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdGNvbmQobGltaXRjb25kdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbCA9IGxpbWl0Y29uZHZhbDtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IG51bGwpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG5cbiAgICB9XG4gICAgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKGxpbWl0Y29uZHZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xpbWl0Y29uZHZhbCcsdGhpcy5saW1pdGNvbmR2YWwpO1xuICB9XG4gIHB1YmxpYyBwYWdlQ291bnRBcnJheTogYW55O1xuICBwdWJsaWMgZmlyc3RwYWdlQ291bnRBcnJheTogYW55O1xuICBwdWJsaWMgbGFzdHBhZ2VDb3VudEFycmF5OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQoZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDtcbiAgICB0aGlzLnBhZ2VDb3VudEFycmF5ID0gbmV3IEFycmF5KE1hdGguY2VpbChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgIHRoaXMubGFzdHBhZ2VDb3VudEFycmF5ID0gTWF0aC5jZWlsKGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMucGFnZUNvdW50QXJyYXlcIiwgTWF0aC5jZWlsKGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSk7XG5cblxuICAgIGlmICh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9PSAwKSB7IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7IH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50Jyx0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3JhYl9saW5rKGdyYWJfbGluazogYW55KSB7XG4gICAgdGhpcy5ncmFiX2xpbmt2YWwgPSBncmFiX2xpbms7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCAnc29ydGRhdGF2YWwnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9lbmRwb2ludChkYXRlX3NlYXJjaF9lbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbCA9IGRhdGVfc2VhcmNoX2VuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cmwodXJsOiBhbnkpIHtcbiAgICB0aGlzLnVybHZhbCA9IHVybDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoZW5kcG9pbnQoc2VhcmNoZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoZW5kcG9pbnR2YWwgPSBzZWFyY2hlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGRmX2xpbmsocGRmX2xpbms6IGFueSkge1xuICAgIHRoaXMucGRmX2xpbmtfdmFsID0gcGRmX2xpbms7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaExpc3Qoc2VhcmNoTGlzdDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hMaXN0dmFsID0gc2VhcmNoTGlzdDtcbiAgfVxuICBwdWJsaWMgcGFnaW5hdGlvbnR5cGU6IGFueTtcbiAgcHVibGljIHBhZ2luYXRpb250eXBlRmxhZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IFtdO1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG5cbiAgICB0aGlzLnBhZ2luYXRpb250eXBlID0gdGhpcy5saWJkYXRhdmFsLnBhZ2luYXRpb25UeXBlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5saWJkYXRhdmFsLnBhZ2luYXRpb25UeXBlID09ICd1bmRlZmluZWQnICYmIHRoaXMubGliZGF0YXZhbC5wYWdpbmF0aW9uVHlwZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb250eXBlRmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnbGliZGF0YXZhbCcsIHRoaXMubGliZGF0YXZhbCk7XG4gICAgY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLCB0aGlzLnBhZ2luYXRpb250eXBlKTtcbiAgICBpZiAodHlwZW9mIHRoaXMubGliZGF0YXZhbC5wYWdlcyAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmxpYmRhdGF2YWwucGFnZXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wYWdlcyA9IHRoaXMubGliZGF0YXZhbC5wYWdlcztcbiAgICB9XG5cbiAgICAvLyBzZWFyY2hCYXJGbGFnXG5cbiAgICAvLyBjb25zb2xlLmxvZyhsaWJkYXRhdmFsLnNlYXJjaEJhckZsYWdWYWwpXG5cbiAgICBpZiAobGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9IG51bGwgJiYgbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9ICcnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnVmFsID0gbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBpZiAobGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWcgIT0gbnVsbCAmJiBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZmxhZyAhPSAnJyAmJiBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZGF0YSAhPSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWNvcmRGb3VuZEZsYWcgPSBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZmxhZztcbiAgICAgICAgdGhpcy5yZWNvcmRGb3VuZERhdGEgPSBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZGF0YTtcblxuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb3JkRm91bmRGbGFnID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFzb3VyY2UoZGF0YXNvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gW107XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gZGF0YXNvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YWNvbGxlY3Rpb24oZGF0YWNvbGxlY3Rpb252YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgPSBkYXRhY29sbGVjdGlvbnZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBza2lwKHNraXA6IGFueSkge1xuICAgIHRoaXMuc2tpcHZhbCA9IHNraXA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9kYXRhdHlwZShkZXRhaWxfZGF0YXR5cGU6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsID0gZGV0YWlsX2RhdGF0eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfc2tpcF9hcnJheShkZXRhaWxfc2tpcF9hcnJheTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCA9IGRldGFpbF9za2lwX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNvdXJjZWRhdGEoc291cmNlZGF0YTogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VkYXRhdmFsID0gc291cmNlZGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RpZnlfaGVhZGVyX2FycmF5KG1vZGlmeV9oZWFkZXJfYXJyYXk6IGFueSkge1xuICAgIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCA9IG1vZGlmeV9oZWFkZXJfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVsZXRlZW5kcG9pbnQoZGVsZXRlZW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwgPSBkZWxldGVlbmRwb2ludHZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludHZhbCA9IHVwZGF0ZWVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhcGl1cmwoYXBpdXJsOiBhbnkpIHtcbiAgICB0aGlzLmFwaXVybHZhbCA9IGFwaXVybDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuYXBpdXJsdmFsXCIsdGhpcy5hcGl1cmx2YWwpO1xuXG4gICAgdGhpcy5vYnNlcnZhYmxlU2VydmljZS5zZXRhcGlVcmwodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwuYWRkbGFuZ3VhZ2VkYXRhRW5kcG9pbnQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZXRhYmxlKHVwZGF0ZXRhYmxlOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZXRhYmxldmFsID0gdXBkYXRldGFibGU7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBqd3R0b2tlbihqd3R0b2tlbjogYW55KSB7XG4gICAgaWYgKGp3dHRva2VuICE9IG51bGwpIHsgdGhpcy5qd3R0b2tlbnZhbCA9IGp3dHRva2VuOyB9IGVsc2UgeyB0aGlzLmp3dHRva2VudmFsID0gJyc7IH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsLCd0b2tlbicpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICB0aGlzLmVtYWlsYXJyYXl2YWwgPSBlbWFpbGFycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRyb3V0ZShlZGl0cm91dGU6IGFueSkge1xuICAgIHRoaXMuZWRpdHJvdXRldmFsID0gZWRpdHJvdXRlO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWxpc3RlbmJ1dHRvbih2YWw6IGFueSkge1xuICAgIHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCA9IHZhbFxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICB9XG5cbiAgLy8gc2VhcmNoIGJ1dHRvbnMgXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBzZWFyY2hidXR0b25zKHZhbDogYW55KSB7XG4gIC8vICAgdGhpcy5zZWFyY2hidXR0b252YWwgPSB2YWxcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGJ1dHRvbnZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICAvLyB9XG5cblxuICBleHBhbmRlZEVsZW1lbnQ6IGFueTtcblxuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdO1xuICBwdWJsaWMgYWxscGFnaW5hdGlvbnBvc3REYXRhOiBhbnk7XG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgc3RhcnRfZGF0ZTogYW55O1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHNlbGVjdFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgZW5kX2RhdGU6IGFueTtcbiAgcHVibGljIGk6IGFueTtcbiAgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBwcmVyZXN1bHQ6IGFueSA9IHt9O1xuICBwdWJsaWMgYnV0dG9uU2VhcmNoRGF0YTogYW55ID0gW107XG4gIC8vIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICAvLyBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIG15Rm9ybTogYW55O1xuICAvLyBteUZvcm06YW55O1xuICBtb2RlbENoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIG1vZGVsQ2hhbmdlZHNlcnZlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcGFnZWNoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHN1YnNjcmlwdGlvbmNvdW50ID0gMDtcbiAgdGFibGVGb290ZXJDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICB0ZXN0dmFsdWU6IGFueSA9IFwiczFcIjtcbiAgdHh0UXVlcnlDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGxpbWl0Q2hhbmdyZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBcbiAgLy8gc2VhcmNoUmVzdWx0JDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRbXT47XG4gIC8vIGZvciBkcm9wZG93biBwYWdpbmF0aW9uXG4gIHB1YmxpYyBwYWdlczogYW55ID0gW107XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQsXG4gICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHB1YmxpYyBvYnNlcnZhYmxlU2VydmljZTogT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlLFxuXG4gICkge1xuICAgIHRoaXMuc3RhdGVHcm91cHMgPSB0aGlzLnNlYXJjaExpc3R2YWw7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cblxuXG4gICAgLy8gdGhpcy50eHRRdWVyeUNoYW5nZWRcbiAgICAvLyAgICAgICAgIC5kZWJvdW5jZVRpbWUoMTAwMCkgLy8gd2FpdCAxIHNlYyBhZnRlciB0aGUgbGFzdCBldmVudCBiZWZvcmUgZW1pdHRpbmcgbGFzdCBldmVudFxuICAgIC8vICAgICAgICAgLmRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgLy8gb25seSBlbWl0IGlmIHZhbHVlIGlzIGRpZmZlcmVudCBmcm9tIHByZXZpb3VzIHZhbHVlXG4gICAgLy8gICAgICAgICAuc3Vic2NyaWJlKG1vZGVsID0+IHtcbiAgICAvLyAgICAgICAgICAgdGhpcy50eHRRdWVyeSA9IG1vZGVsO1xuXG4gICAgLy8gICAgICAgICAgIC8vIENhbGwgeW91ciBmdW5jdGlvbiB3aGljaCBjYWxscyBBUEkgb3IgZG8gYW55dGhpbmcgeW91IHdvdWxkIGxpa2UgZG8gYWZ0ZXIgYSBsYWcgb2YgMSBzZWNcbiAgICAvLyAgICAgICAgICAgdGhpcy5nZXREYXRhRnJvbUFQSSh0aGlzLnR4dFF1ZXJ5KTtcbiAgICAvLyAgICAgICAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy50eHRRdWVyeUNoYW5nZWRcbiAgICAgIC5waXBlKFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZT50aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb3JyeSEhIFBhZ2UgbnVtYmVyIGlzIG91dCBvZiByYW5nZS4nIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGggPiB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSkge1xuICAgICAgICAgIHRoaXMucGFnaW5nKHRoaXMucGFnZUNoYW5nZVZhbHVlLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9wYWdlIGNvdW50IG91dCBvZiBib3VuZCBcbiAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0XCIsdGhpcy5wYWdlQ2hhbmdlVmFsdWUsXCIrKytcIix0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIH0pO1xuXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubGltaXRDaGFuZ3JkXG4gICAgLnBpcGUoXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwMCkpXG4gICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgLy8gdGhpcy5maWx0ZXJhdXRvdmFsKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICBpZiAoIHRoaXMucGFnZUNoYW5nZVZhbHVlKSB7XG4gICAgICAgIHRoaXMucGFnaW5nKHRoaXMucGFnZUNoYW5nZVZhbHVlLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvL3BhZ2UgY291bnQgb3V0IG9mIGJvdW5kIFxuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgIH1cbiAgICB9KTtcblxuXG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2VkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXJcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSBcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAgc2VydmVyJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLmZpZWxkXSAhPSAnJykge1xuICAgICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcblxuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhLmVuZHBvaW50O1xuXG4gICAgICAgICAgbGV0IHNvdXJjZTogYW55O1xuXG4gICAgICAgICAgc291cmNlID0ge1xuICAgICAgICAgICAgc2VhcmNoX3N0cjogdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0sXG4gICAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLCAncmVzdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgIC8vIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwpIHRoaXMucmVzY291bnQgPSByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gcmVzdWx0LnJlcztcbiAgICAgICAgICAgICAgLy8gYXV0b2NvbXBsZXRlIHNlYXJjaGluZyBzbmFrYmFyXG5cbiAgICAgICAgICAgICAgLy8gdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgLy8gICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgLy8gICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQgJyB9XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgIC8vIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIC8vICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuICB9XG4gIC8qQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbTGlzdGluZ10nXG4gIH0pKi9cbiAgc3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIGNsaWNrRXZlbnQoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG4gIH1cblxuICBhdXRvY29tcGxldGVmdW5jdGlvbihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3VudGVyKGk6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgQXJyYXkoaSk7XG4gIH1cblxuICBvbkZpZWxkQ2hhbmdlKHF1ZXJ5OiBzdHJpbmcpIHtcbiAgICBjb25zb2xlLmxvZygncXVlcnknLCBxdWVyeSwgdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGgpO1xuICAgIGlmICh0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCA+IHF1ZXJ5KSB7XG4gICAgICB0aGlzLnR4dFF1ZXJ5Q2hhbmdlZC5uZXh0KHF1ZXJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKCd3aXRoIGluIGJvdW5kICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcGFnZSBjb3VudCBvdXQgb2YgYm91bmQgXG5cbiAgICB9XG4gIH1cblxuICBvbkZpZWxkQ2hhbmdlZm9ybGltaXQocXVlcnk6IGFueSkge1xuXG4gICAgY29uc29sZS5sb2coJ3F1ZXJ5JywgcXVlcnksIHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKTtcbiAgICBpZiAocXVlcnkgPCAxMDApIHtcbiAgICAgIHRoaXMubGltaXRDaGFuZ3JkLm5leHQocXVlcnkpO1xuICAgICAgY29uc29sZS5sb2coJ3dpdGggaW4gYm91bmQgJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgLy9wYWdlIGNvdW50IG91dCBvZiBib3VuZCBcblxuICAgIH1cblxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZWRhdGFzZXRcIix0aGlzLmxhbmd1YWdlZGF0YXNldCk7XG4gICAgdGhpcy5vYnNlcnZhYmxlU2VydmljZS5zZXRtdWx0aWxpbmd1YWxEYXRhKHRoaXMubGFuZ3VhZ2VkYXRhc2V0KTtcbiAgICAvLyBhZGRsYW5ndWFnZWRhdGFFbmRwb2ludFxuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmFwaXVybHZhbFwiLCB0aGlzLmFwaXVybHZhbCk7XG5cblxuICAgIC8vIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgLy8gICBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAvLyAgIHNvdXJjZSA9IHtcbiAgICAvLyAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAvLyAgIH07XG4gICAgLy8gICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gbm90IG5lZWRlZCAsXG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBpZiAodGhpcy5kYXRhc291cmNldmFsKSB0aGlzLnJlc2NvdW50ID0gdGhpcy5kYXRhc291cmNldmFsLmxlbmd0aDtcblxuICAgIGxldCB0ZW1wID0gW107XG4gICAgY29uc3Qga2V5cyA9IHhbMF07XG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpOyAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBjb25zdCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csICdfJykpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSk7XG4gICAgfVxuICAgIC8vIGNvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvLyBoZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWA7XG4gICAgICBjb25zdCB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldfWAsIHRvb2x0aXA6IGAke2hlYWRlcl9saXN0W2ldfWAsIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpLCBvYmpsZW5ndGg6IGhlYWRlcl9saXN0Lmxlbmd0aCB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuXG4gICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgIGlmIChiID09IHR0LmhlYWRlcikgeyB0dC5oZWFkZXIgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBoZWFkZXIgdG9vbHRpcCBhcnJheVxuICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSB7XG4gICAgICAgICAgaWYgKGIgPT0gdHQudG9vbHRpcCkgeyB0dC50b29sdGlwID0gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5W2JdOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codHQudG9vbHRpcCwgJ3R0LnRvb2x0aXAgPT09PT0rKysrKycpXG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSBbXTtcbiAgICB0aGlzLnRhYmxlZmxhZyA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlZmxhZyA9IDA7XG4gICAgfSwgMTAwKTtcblxuICAgIGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgfVxuXG5cblxuICAgIGVsc2UgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSBbXTtcblxuICAgIGxldCBjdXN0b21jb2xzOiBhbnkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT0gbnVsbCkge1xuICAgICAgY3VzdG9tY29scyA9IHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChjdXN0b21jb2xzICE9IG51bGwgJiYgY3VzdG9tY29scy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2NvbHZhbDogc3RyaW5nID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gY3VzdG9tY29scykge1xuICAgICAgICBpZiAoZGlzcGxheWVkY29scy5pbmNsdWRlcyhjdXN0b21jb2xzW3ZdKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgICAgIGlmIChiID09IGN1c3RvbWNvbHNbdl0pIHsgY2NvbHZhbCA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogY3VzdG9tY29sc1t2XSwgaGVhZGVyOiBjY29sdmFsLCBjZWxsOiAnTkEnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzID0gY3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy5wdXNoKHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUgPT0gbnVsbCA/ICdBY3Rpb25zJyA6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lLCBoZWFkZXI6ICdBY3Rpb25zJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBudWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy51bnNoaWZ0KCcjJyk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogJyMnLCBoZWFkZXI6ICcjJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gW107XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICAvLyB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlbXVsdGlwbGVzZWxlY3RidXR0b24gIT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICdzZWxlY3QnLCBoZWFkZXI6ICdzZWxlY3QnLCBjZWxsOiAnTkEnIH0pOyAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB9XG4gICAgbGV0IHRlbXBjb2xhcnIgPSBbXTtcbiAgICBsZXQgdGVtcGNvbGFycjIgPSBbXTtcbiAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IG4gaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAodGVtcGNvbGFyci5pbmRleE9mKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0ZW1wY29sYXJyMi5wdXNoKHRoaXMuY29sdW1uc1tuXSk7XG4gICAgICB0ZW1wY29sYXJyLnB1c2godGhpcy5jb2x1bW5zW25dLmNvbHVtbkRlZik7XG5cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gdGVtcGNvbGFycjI7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5jb2x1bW5zLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLmNvbHVtbkRlZikpKTtcblxuICAgIC8vIHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiBpdGVtLmNvbHVtbkRlZilcbiAgICAvLyAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xuXG4gICAgLy8gdW5pcXVlIGNvbCBuYW1lcyBcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scyBmaWx0ZXInLCB0aGlzLmRpc3BsYXllZENvbHVtbnMpO1xuXG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gdGhpcy5kYXRhU291cmNlO1xuXG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG5cbiAgICAvLyBsb2FkIHNlYXJjaCBwcmVkZWZpbmRlZCBkYXRhXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIC8vIHRoaXMuc2VsZWN0c2VhcmNoWydzdGF0dXMnXSA9ICcwJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RzZWFyY2gnLCB0aGlzLnNlbGVjdHNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3MxJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUsdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlc1swXSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIHNlbGVjdFNlYXJjaF9jb25kaXRpb25cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5pdGlhdGVTZWFyY2gsICdpbml0aWF0ZVNlYXJjaCBzZWxlY3QnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsICdzcysrKysrPT09PT0rKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0sdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZXNbMF0sJz8/Pz8/IG5ldyBzZWxlY3RTZWFyY2hfY29uZGl0aW9uJyx0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndDEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudHNlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbml0aWF0ZVNlYXJjaCwgJ2luaXRpYXRlU2VhcmNoIHRleHQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBhdHMgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUgIT0gJycgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlLCc+Pj09PT09PT0nKVxuICAgICAgICAgICAgICB0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdLnB1c2goeyB2YWw6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlW2tdLnZhbCwgbmFtZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWVba10ubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRlU2VhcmNoX2NvbmRpdGlvblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKytcIiwgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuXG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUgKyAxMDAwMDtcbiAgICAgICAgLy8gICAvLyB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGU7XG5cbiAgICAgICAgLy8gICB0aGlzLnN0YXJ0X2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAgIHRoaXMuZW5kX2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuXG4gICAgICAgIC8vIC8vICB0aGlzLnN0YXJ0RGF0ZT1tb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuYWRkKDEsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAvLyAgdGhpcy5lbmREYXRlPW1vbWVudChuZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vICB0aGlzLnN0YXJ0RGF0ZT1uZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgdGhpcy5lbmREYXRlPW5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInRoaXMuc3RhcnREYXRlXCIsdGhpcy5zdGFydERhdGUpO1xuICAgICAgICAvLyAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSArIDg2Mzk5MDAwO1xuICAgICAgICAvLyAgIC8vIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZW5kIGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpO1xuXG4gICAgICAgIC8vICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gbmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKTtcbiAgICAgICAgdGhpcy5lbmRfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlICsgODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbCcsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24pXG5cblxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCAndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgICAgICBsZXQgaW5kOiBhbnkgPSAwO1xuICAgICAgICAgIGluZCA9IHBhcnNlSW50KGkpO1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IGZpZWxkOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQsIGtleTogaW5kLCB2YWx1ZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbml0aWF0ZVNlYXJjaCA9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG5cblxuICAvLyBDdXN0b20gRmlsdGVyIG5ld1xuICBDdXN0b21CdXR0b25MaXN0ZW4odmFsOiBhbnkpIHtcbiAgICAvLyBhbGxTZWFyY2hDb25kXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAndGhpcy5hbGxTZWFyY2hDb25kJylcblxuICAgIHRoaXMub25MaWJsaXN0aW5nQnV0dG9uQ2hhbmdlLmVtaXQoXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogJ2N1c3RvbWxpc3RlbmJ1dHRvbicsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgYnV0dG9uZGF0YTogdmFsLCBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsIGF1dG9TZWFyY2hWYWw6IHRoaXMuYXV0b3NlYXJjaCwgYnV0dG9uU2VhcmNoRGF0YTogdGhpcy5idXR0b25TZWFyY2hEYXRhXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHZhciBkYXRhOmFueT17XG4gICAgLy8gICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCxzZWFyY2g6dGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsYnV0dG9uVmFsOnZhbFxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCdkYXRhKysrKz09PScsdmFsKVxuICB9XG5cblxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBCYXIgVG9nZ2xlXG4gIFNlYXJjaEJhclRvZ2dsZShmbGFnKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UuZW1pdChcbiAgICAgIHtcbiAgICAgICAgYWN0aW9uOiAnc2VhcmNoYmFyJywgZmxhZzogZmxhZ1xuICAgICAgfVxuICAgIClcbiAgICBzd2l0Y2ggKGZsYWcpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdDbG9zZSBTZWFyY2ggQmFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuXG4gIHVwVG8oZWwsIHRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgd2hpbGUgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIGlmIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYW55IERPTSBtZXRob2RzIHJldHVybiBudWxsIGlmIHRoZXkgZG9uJ3QgXG4gICAgLy8gZmluZCB0aGUgZWxlbWVudCB0aGV5IGFyZSBzZWFyY2hpbmcgZm9yXG4gICAgLy8gSXQgd291bGQgYmUgT0sgdG8gb21pdCB0aGUgZm9sbG93aW5nIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudENoZWNrZWQgY2FsbGVkIC4uLicpO1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBjbGlja211bHRpcGxlc2VsZWN0b3B0aW9uKHZhbHMpIHtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzZWxlY3RvcHRpb25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBidG5kYXRhOiB2YWxzIH0pO1xuXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWxdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcblxuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGNvbnN0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgKyAnLWNvdW50JztcblxuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAvLyBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLnN0YXJ0X2RhdGU9dGhpcy5zdGFydERhdGU7XG4gICAgLy8gICB0aGlzLmVuZF9kYXRlPXRoaXMuZW5kRGF0ZTtcbiAgICAvLyB9XG5cbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG5cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgdGhpcy5zdGFydF9kYXRlICE9IG51bGwpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFydF9kYXRlICE9IG51bGwgJiYgKHRoaXMuZW5kX2RhdGUgPT0gbnVsbCB8fCB0aGlzLmVuZF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgKHRoaXMuc3RhcnRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhcnRfZGF0ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRndGUsJ2FmdGVyICsgODYzOTkwMDAnLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlKVxuICAgICAgLy8gdmFyIGR0PXRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGd0ZSwnYWZ0ZXIgLSA4NjM5OTAwMCcsZHQgKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgJ2RhdGVTZWFyY2hfY29uZGl0aW9uKysnKTtcblxuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoKTtcbiAgICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXSAhPSAnJykge1xuICAgICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuICAgICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG4gICAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgYXV0b3NlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kb3IgMScpXG4gICAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgICBzb3VyY2UgPSB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZSBzZWFyY2ggY29uLi4uJywgY29uZGl0aW9ub2JqLCB0aGlzLmVuZF9kYXRlLCB0aGlzLnN0YXJ0X2RhdGUpO1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICAvKnRoaXMuX2h0dHAucG9zdChsaW5rLCB7c291cmNlOnRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAnY3JlYXRlZF9hdCc6IHtcbiAgICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIH0pLnN1YnNjcmliZSggcmVzID0+e1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPXt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMpO1xuICAgICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KSovXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG5cblxuICBzZWxlY3RTZWFyY2godmFsdWU6IGFueSwgdHlwZTogYW55LCBzdGF0dXN2YWw6IGFueSkge1xuXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICd2YWx1ZScsIHR5cGUsICd0eXBlJywgc3RhdHVzdmFsLCAnc3RhdHVzdmFsJylcblxuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gbGV0IHNvdXJjZTogYW55O1xuICAgIC8vIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt0eXBlLmZpZWxkXSA9ICh7IHZhbDogc3RhdHVzdmFsLm5hbWUsIGxhYmVsOiB0eXBlLmxhYmVsLCBrZXk6IHR5cGUuZmllbGQgfSk7XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICAvLyB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyAvL2NvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIC8vIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIC8vIHNvdXJjZSA9IHtcbiAgICAvLyAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIC8vIH07XG5cblxuXG5cblxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy50c2VhcmNoLCAnY3p4Y3hjenhjJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCB0aGlzLnNlbGVjdHNlYXJjaCwgdmFsdWUsIHR5cGUpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGNvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RTZWFyY2ggJywgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuICAvLyBmb3IgbWFuYWdpbmcgcGFnaW5hdGlvblxuXG4gIHBhZ2luZyh2YWw6IGFueSwgZmxhZzogYW55KSB7XG4gICAgLy8gY29uc3QgbHZhbDogYW55ID0gdGhpcy5saW1pdGNvbmR2YWw7XG4gICAgY29uc29sZS5sb2codmFsLCAncGFnaW5nIHZhbCcpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdmFsO1xuXG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCAhPSBudWxsICYmIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID4gMTAwKSB7XG4gICAgICAvLyBpZihmbGFnIT1cInNlbGVjdHBhZ2luZ1wiKXtcbiAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSAxMDA7XG5cbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gMTAwO1xuICAgICAgLy8gdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgIC8vICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAvLyAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnWW91IGNhbiBzZWUgbWF4aW11bSAxMDAgcmVjb3JkcyBhdCBvbmNlICEnIH1cbiAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXhwYWdlY291bnQ6IG51bWJlciA9IE51bWJlcih0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgIG1heHBhZ2Vjb3VudCA9IH5+KG1heHBhZ2Vjb3VudCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMub2xkbGltaXRyYW5nZScsIHRoaXMub2xkbGltaXRyYW5nZSwgdGhpcy5saW1pdGNvbmR2YWwsIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsLCBtYXhwYWdlY291bnQpO1xuICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKHtcbiAgICAvLyAgIHNraXA6IHRoaXMubGltaXRjb25kdmFsLnNraXAsXG4gICAgLy8gICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgLy8gICBwYWdlY291bnQ6IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudFxuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKFwibGltaXQrKysrXCIsIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcblxuICAgIGlmICh2YWwgPT0gMSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIDwgdGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID49IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2tpcCBibG9jaycpO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAyKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmICh2YWwgPiAxKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IHZhbDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidmFsPjEgc2VjdGlvbiBcIiwgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KTtcbiAgICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB2YWw7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodmFsIDw9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb250eXBlID09IDIpIHtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IChtYXhwYWdlY291bnQgKyAxKSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gbWF4cGFnZWNvdW50ICsgMTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJ3NzJyx0aGlzLmRhdGFjb2xsZWN0aW9udmFsLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcblxuICAgIGNvbnNvbGUubG9nKCd0aGlzLmxpbWl0Y29uZHZhbCwgaW4gcGFnaW5nICcsIHRoaXMubGltaXRjb25kdmFsKTtcblxuXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgYXV0b3NlYXJjaDogYW55ID0ge307XG4gICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pIHtcbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYXV0b3NlYXJjaC4kb3IgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kb3IgMicpXG5cbiAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgY29uc3Qgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogdGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG4gICAgdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGEgPSBzb3VyY2U7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIC8qbGV0IGRhdGE6YW55PXtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9XG5cbiAgICB9Ki9cbiAgICB0aGlzLm5ld3BhZ2luZ2NvdW50RmxhZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IDUgJiYgdGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDU7XG4gICAgICAgIGNvbnNvbGUubG9nKCdpbiBjb21tb24gIHJhbmdlIGFyZWEgLi4uJywgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsKTtcbiAgICAgIH1cbiAgICAgIC8vIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPiA1ICYmIHRoaXMucGFnaW5hdGlvbnR5cGUgPT0gMiAmJiB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCAtIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA8IDEwKSB7XG4gICAgICAvLyAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDQgO1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnaW4gbGFzdCByYW5nZSBhcmVhIC4uLicsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG4gICAgICAvLyB9XG4gICAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IDw9IDUgJiYgdGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwicGFnaW5nIHN1Y2Nlc3NcIiwgdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGgpO1xuXG4gICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0LCdyZXMnKTtcbiAgICAgIHRoaXMubmV3cGFnaW5nY291bnRGbGFnID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgdGhpcy5yZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAncGFnaW5nJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCByZXN1bHRzOiB0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyB9KTtcblxuICAgICAgICAvLyBpZiAodGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzICE9IG51bGwpIHtwYWdlQ2hhbmdlVmFsdWVcbiAgICAgICAgLy8gICB0aGlzLnRhYmxlRm9vdGVyQ29sdW1ucyA9IHRoaXMubGliZGF0YXZhbC5mb290ZXJzZXR0aW5ncy5tYXAoeCA9PiB4LmtleSlcbiAgICAgICAgLy8gfVxuXG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSAhPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpIHtcbiAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmxpYmRhdGF2YWwuY29udGFpbmVyaWQpLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6IFwic21vb3RoXCIgfSk7XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgcmFuZ2Ugb2YgZGF0YSBsb2FkZWQnIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNraXAgPSB0aGlzLmxpbWl0Y29uZHZhbC5za2lwO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UubGltaXQgPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnBhZ2Vjb3VudCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMub2xkbGltaXRyYW5nZSBhZnRlciAnLCB0aGlzLm9sZGxpbWl0cmFuZ2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ28gbGVuJywgdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCwgdGhpcy5vbGRsaW1pdHJhbmdlKTtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlID0gdGhpcy5vbGRsaW1pdHJhbmdlLnJldmVyc2UoKTtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlID0gdGhpcy5vbGRsaW1pdHJhbmdlLnNsaWNlKDAsIHRoaXMub2xkbGltaXRyYW5nZS5sZW5ndGggLSAyKTsgXG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5zcGxpY2UodGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDEsIDEpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc3BsaWNlKDAsIDEpO1xuICAgICAgICAvLyB0aGlzLnJlZnJlc2hkYXRhKCk7XG4gICAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsID0gdGhpcy5vbGRsaW1pdHJhbmdlW3RoaXMub2xkbGltaXRyYW5nZS5sZW5ndGggLSAxXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5saW1pdGNvbmR2YWwsIHRoaXMub2xkbGltaXRyYW5nZSwgJ2xhdmwgbiBvbGQgJyk7XG4gICAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2tpcDtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSB0aGlzLm9sZGxpbWl0cmFuZ2UubGltaXQ7XG4gICAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IHRoaXMub2xkbGltaXRyYW5nZS5wYWdlY291bnQ7XG4gICAgICAgIC8vIGlmICh2YWwgPT0gMSkge1xuICAgICAgICAvLyAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgICAgICAvLyAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgLT0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gaWYgKHZhbCA9PSAtMSkge1xuICAgICAgICAvLyAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCsrO1xuICAgICAgICAvLyAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgKz0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIC8vIH1cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIERhdGEgRm91bmQgaW4gdGhpcyByYW5nZSAhIScgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICB9XG5cbiAgYWRkYXV0b3NlYXJjaGRhdGEodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndicsdmFsKTtcblxuICB9XG4gIHJlbW92ZSh2YWw6IGFueSwgaTogYW55LCBmaWVsZDogYW55KSB7XG5cbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW2ZpZWxkXSAhPSBudWxsKSB7IHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0uc3BsaWNlKGksIDEpOyB9XG4gIH1cblxuXG4gIGF1dG9jb21wbGV0ZWNoYW5nZWRldGVjdGVkKGl0ZW0pIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtID0gaXRlbTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgLy8gY29uc29sZS5sb2coJ2F1dG9jb21wbGV0ZWNoYW5nZWRldGVjdGVkJywgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgaWYgKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uc2VydmVyc2VhcmNoZGF0YSA9PSBudWxsKVxuICAgICAgdGhpcy5tb2RlbENoYW5nZWQubmV4dCgpO1xuICAgIGVsc2Uge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIGVsc2UgYmxvY2sgb2YgYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQnKTtcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2Vkc2VydmVyLm5leHQoKTtcbiAgICB9XG5cbiAgfVxuXG5cbiAgZmlsdGVyYXV0b3ZhbChkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyYXV0b3ZhbCcsIGRhdGEsIHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdKTtcbiAgICBjb25zdCBhdXRvc2VsdmFsID0gdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF07XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSAhPSBudWxsICYmIHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdICE9ICcnKSB7XG4gICAgICBjb25zdCBmaWx0ZXJ2YWwgPSBkYXRhLnZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2UnLCBlLCBmaWVsZHZhbClcbiAgICAgICAgcmV0dXJuIGUubmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXV0b3NlbHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IGZpbHRlcnZhbDtcbiAgICB9XG4gIH1cbiAgcmVzZXRhdXRvY29tcCh2YWw6IGFueSkge1xuICAgIGNvbnN0IGVsOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0b2NvbXBsZXRlc2VhcmNoJyArIHZhbC5maWVsZCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgfVxuICBhdXRvc2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgZGF0YTogYW55LCBpdGVtOiBhbnkpIHtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0gPSAnJztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2hpbnB1dCwgJ2FzaScsIGRhdGEsIHZhbHVlLCBpdGVtKTtcbiAgICB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdID0gW107XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRvc2VhcmNoLCAnYXV0b3NlYXJjaCAxMTMwJylcbiAgICB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnB1c2goZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIGNvbnN0IGVsOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0b2NvbXBsZXRlc2VhcmNoJyArIHZhbHVlKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICAvLyByZXNldCBhdXRvIHNlYXJjaCBkYXRhICFcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLGRhdGEsJ3NzJyx0aGlzLmF1dG9zZWFyY2gpO1xuICAgIC8qbGV0IHZhbDogYW55ID0gdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXTtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gIT1udWxsICYmIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMCAmJiB7ICRvcjogW3RoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTsqL1xuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzKTtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgLy8gfSk7XG4gIH1cblxuXG4gIHRleHRzZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LCBpdGVtOiBhbnkpIHtcbiAgICBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSA9PSAnJykge1xuICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnNlYXJjaHN0cnNhcnIuaW5kZXhPZih0aGlzLnNlYXJjaHN0cnNhcnJbdmFsdWVdKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKGluZGV4LCAnaW5kZXgnKTtcbiAgICAgIGRlbGV0ZSB0aGlzLnNlYXJjaHN0cnNhcnJbdmFsdWVdO1xuICAgICAgLy8gaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIC8vIHRoaXMuc2VhcmNoc3Ryc2Fyci5zcGxpY2UodmFsdWUsIDEpO1xuICAgICAgLy8gfVxuICAgIH0gZWxzZVxuICAgICAgdGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXSA9ICh7IHZhbDogdGhpcy50c2VhcmNoW3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RleHRzZWFyY2hmdW5jdGlvbicsIHZhbHVlLCBpdGVtLCB0aGlzLnNlYXJjaHN0cnNhcnIpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgY29uc3QgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBsZXQgdmFsID0gJyc7XG4gICAgaWYgKHRoaXMudHNlYXJjaCAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCkge1xuICAgICAgdmFsID0gdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSwgdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXSB9KSB7IGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDsgfVxuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vIGNvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBhZGQgbG9hZGVyXG4gICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIC8vY2xvc2UgbG9hZGVyXG4gICAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG4gIHJlZnJlc2hkYXRhKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCcrKysrJylcbiAgICB0aGlzLmF1dG9zZWFyY2ggPSBbXTtcbiAgICB0aGlzLnRzZWFyY2ggPSBbXTtcbiAgICB0aGlzLnNlbGVjdHNlYXJjaCA9IFtdO1xuICAgIHRoaXMuc3RhcnRfZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgdGhpcy5lbmRfZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgICB0aGlzLmFsbFNlYXJjaENvbmQgPSBbXTtcbiAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEgPSBbXTtcbiAgfVxuICByZWZyZXNoYWxsZGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgaWYgKHZhbC5maWx0ZXJlZERhdGEgIT0gbnVsbCAmJiB2YWwuZmlsdGVyZWREYXRhLmxlbmd0aCA8IHRoaXMub2xkZGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWZyZXNoIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgLy8gcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3JlZnJlc2hkYXRhJ10sXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJyBVcGRhdGVkISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hMaXN0dmFsLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgZ2V0c3RhdHVzKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuc3RhdHVzYXJydmFsKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNhcnJ2YWxbYl0udmFsID09IHZhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gJ04vQSc7XG4gIH1cbiAgcGRmRmxhZyh2YWw6IGFueSkge1xuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hhdHRlciBibG9rJyk7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdyYXB1cmwodmFsOiBhbnkpIHtcbiAgICAvLyAgZm9yIGFsbCByb3cgY2hlY2tpbmdcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZDIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZDIgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zaCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdWQpO1xuICB9XG5cbiAgY29weVRleHQocm93OiBhbnksIHZhbDogc3RyaW5nKSB7XG5cbiAgICBjb25zdCBmdWxsdXJsID0gdmFsICsgJycgKyByb3c7XG4gICAgY29uc3Qgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBzZWxCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2VsQm94LnZhbHVlID0gZnVsbHVybDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgc2VsQm94LmZvY3VzKCk7XG4gICAgc2VsQm94LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuXG4gICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdDb3BpZWQgU3VjY2Vzc2Z1bGx5ICEhICcgfVxuICAgIH0pO1xuICB9XG5cbiAgb3BlbmludGVybmFsbGluayh2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt2YWwucm91dGVdKTtcbiAgfVxuXG5cbiAgb3BlbmludGVybmFsbGlua3dpdGhwYXJhbSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgY29uc3QgcmRhdGE6IGFueSA9IFtdO1xuICAgIHJkYXRhLnB1c2godmFsLnJvdXRlKTtcbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICByZGF0YS5wdXNoKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdyYWRhdCcsIHJkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShyZGF0YSk7XG4gIH1cblxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YScsdmFsLGRhdGEpO1xuICAgIGNvbnN0IGRhdGFhcnIgPSBbXTtcbiAgICAvLyBkYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAvLyBkYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBpbiB2YWwuZGF0YWZpZWxkcykge1xuICAgICAgY29uc3QgdGVtcGFyciA9IFtdO1xuICAgICAgdGVtcGFyci5wdXNoKHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSAhPSAnaW1hZ2UnICYmIHZhbC5kYXRhZmllbGRzW3ZdICE9ICd2aWRlbycpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NzJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIHR5cGVvZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RmJywgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0udG9TdHJpbmcoKS5pbmNsdWRlcygnaWZyYW1lJykpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBzYWZlJywgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCgoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NzMjInLHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgdGVtcGFyci5wdXNoKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyAnID4gPGJyLz4nKTsgfVxuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdID09ICd2aWRlbycpIHtcbiAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gJycpIHtcbiAgICAgICAgICBsZXQgdGVtcGh0bWw6IGFueSA9ICgnPGlmcmFtZSB3aWR0aD01NjAgaGVpZ2h0PTMxNSBzcmM9aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godGVtcGh0bWwpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHRtbCcsIHRlbXBodG1sLCBkYXRhW3ZhbC5kYXRhZmllbGRzXSwgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBhcnIucHVzaCgnTi9BJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdsb2NhbCBkYXRhIG0nLCBkYXRhYXJyKTtcbiAgICBsZXQgcmVzOiBhbnkgPSBkYXRhYXJyO1xuXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgcmVzW2JdWzFdLCByZXNbYl1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSByZXNbYl07IH1cblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhYXJyJyxkYXRhYXJyKTtcbiAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgfVxuICAgIHJlcy5tZXNzYWdlID0gdmFsLmhlYWRlcm1lc3NhZ2U7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94LWFwaWRhdGEnLCAnbW9kYWwtbG9jYWxkYXRhJ10sXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogcmVzIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YScsdmFsLGRhdGEpO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgbGluazogYW55ID0gdGhpcy5hcGl1cmx2YWwgKyB2YWwuZW5kcG9pbnQ7XG4gICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICBzb3VyY2VbdmFsLnBhcmFtXSA9IGRhdGEuX2lkO1xuICAgIGlmICh2YWwub3RoZXJwYXJhbSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IG4gaW4gdmFsLm90aGVycGFyYW0pIHtcbiAgICAgICAgc291cmNlW3ZhbC5vdGhlcnBhcmFtW25dXSA9IGRhdGFbdmFsLm90aGVycGFyYW1bbl1dO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmxvYWRlcnJvdyA9IGRhdGEuX2lkO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuXG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDMwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6IHJlc3VsdC5tc2cgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzJyxyZXN1bHQpO1xuICAgICAgICBsZXQgcmVzZGF0YTogYW55ID0ge307XG4gICAgICAgIHRoaXMubG9hZGVycm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXN1bHQucmVzWzBdICE9IG51bGwpIHtcbiAgICAgICAgICByZXNkYXRhID0gcmVzdWx0LnJlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wcmRhdGE6IGFueSA9IHt9O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzZGF0YT4+PicsIHJlc2RhdGEpO1xuICAgICAgICBpZiAodmFsLmRhdGFmaWVsZHMgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAoY29uc3QgYjEgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd2YWwuZGF0YWZpZWxkcycsIHZhbC5kYXRhZmllbGRzW2IxXSk7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBiMiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYjInLGIyLGRhdGFbYjJdLGRhdGFhcnJbYjJdWzBdKTtcbiAgICAgICAgICAgIC8vIGlmIChkYXRhYXJyW2IyXVswXSA9PSB2YWwuZGF0YWZpZWxkc1tiMV0pIHJlc2RhdGFmb3Jtb2RhbFtiMV0gPSBbZGF0YWFycltiMl1bMF0sIGRhdGFhcnJbYjJdWzFdXTtcbiAgICAgICAgICAgIHRlbXByZGF0YVt2YWwuZGF0YWZpZWxkc1tiMV1dID0gcmVzZGF0YVt2YWwuZGF0YWZpZWxkc1tiMV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgcmVzZGF0YSA9IHRlbXByZGF0YTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YWFyciA9IFtdO1xuICAgICAgICAvLyBkYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgICAgIGZvciAoY29uc3QgdiBpbiByZXNkYXRhKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGFyciA9IFtdO1xuICAgICAgICAgIHRlbXBhcnIucHVzaCh2KTtcbiAgICAgICAgICBpZiAodiAhPSAnaW1hZ2UnICYmIHYgIT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgaWYgKHJlc2RhdGFbdl0gIT0gbnVsbCAmJiB0eXBlb2YgKHJlc2RhdGFbdl0pICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXN2JywgcmVzZGF0YVt2XSk7XG4gICAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHJlc2RhdGFbdl0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgICB9IGVsc2UgeyB0ZW1wYXJyLnB1c2gocmVzZGF0YVt2XSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHYgPT0gJ2ltYWdlJykgeyB0ZW1wYXJyLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyByZXNkYXRhW3ZdICsgJyA+IDxici8+Jyk7IH1cbiAgICAgICAgICBpZiAodiA9PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBsZXQgdGVtcGh0bWw6IGFueSA9ICgnPGlmcmFtZSB3aWR0aD01NjAgaGVpZ2h0PTMxNSBzcmM9aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHJlc2RhdGFbdl0gKyAnIGZyYW1lYm9yZGVyPTAgYWxsb3c9YWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8YnIvPicpO1xuICAgICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2godGVtcGh0bWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBiIGluIGRhdGFhcnIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gZGF0YWFycltiXVswXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCBkYXRhYXJyW2JdWzFdLCBkYXRhYXJyW2JdWzBdXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gZGF0YWFycltiXTsgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICAgICAgZGF0YWFyciA9IHJlc2RhdGE7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYyBhcGkgZGF0YSAnLCByZXNkYXRhKTtcbiAgICAgICAgLy8gbGV0IHJlc2RhdGFmb3Jtb2RhbDogYW55ID0ge307XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2RhdGFmb3Jtb2RhbCcsIGRhdGFhcnIsIGRhdGFhcnIpO1xuICAgICAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFhcnJbJ21lc3NhZ2UnXSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdhcGktZGF0YSddLFxuICAgICAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBkYXRhYXJyIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm47XG5cbiAgfVxuXG5cbiAgb3BlbmV4dGxpbmt3aXRocGFyYW0odmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnLHZhbCxkYXRhKTtcbiAgICBsZXQgcXRleHQ6IGFueSA9ICcnO1xuICAgIGxldCBmdWxsbGluazogYW55ID0gJyc7XG4gICAgZnVsbGxpbmsgPSB2YWwubGluaztcbiAgICBpZiAodmFsLnBhcmFtdHlwZSA9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyAnPScgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuICAgICAgICBpZiAocGFyc2VJbnQodikgPT0gMCkgeyBmdWxsbGluayA9IGZ1bGxsaW5rICsgJz8nICsgcXRleHQ7IH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHYpICE9IDApIHsgZnVsbGxpbmsgPSBmdWxsbGluayArICcmJyArIHF0ZXh0OyB9XG4gICAgICB9XG4gICAgICAvLyB2YWwubGluaz1mdWxsbGluaztcbiAgICB9XG4gICAgaWYgKHZhbC5wYXJhbXR5cGUgIT0gbnVsbCAmJiB2YWwucGFyYW10eXBlID09ICdhbmd1bGFyJykge1xuICAgICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICAvLyBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgXCI9XCIgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuXG4gICAgICAgIGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnLycgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICAgIH1cbiAgICAgIC8vIHZhbC5saW5rPWZ1bGxsaW5rO1xuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHNldFRpbWVvdXRcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbGluaycsZnVsbGxpbmssZGF0YSxxdGV4dCk7XG4gICAgfSwgMTApO1xuXG4gICAgd2luZG93Lm9wZW4oZnVsbGxpbmssICdfYmxhbmsnKTtcbiAgfVxuXG5cbiAgY2xpY2t1cmwodmFsOiBhbnksIHVybDogYW55KSB7XG4gICAgY29uc3QgbGluayA9IHVybCArICcnICsgdmFsLl9pZCArICcnICsgdGhpcy5wZGZfbGlua192YWw7XG4gICAgd2luZG93Lm9wZW4obGluaywgJ19ibGFuaycpO1xuICB9XG5cblxuICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xuICBjaGVja2VkbGlzdCgpIHtcbiAgICAvLyB0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBjb25zdCBzZWxkYXRhOiBhbnkgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5tYXAoeCA9PiB4Ll9pZClcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjaGVja2VkbGlzdCcsIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCwgc2VsZGF0YSk7XG4gICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzZWxlY3Rpb25jaGFuZ2UnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCB9KTtcbiAgICB9LCAxMDApO1xuXG5cbiAgfVxuICBpc0FsbFNlbGVjdGVkKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdpc0FsbFNlbGVjdGVkJyk7XG4gICAgaWYgKHRoaXMuc2VsZWN0aW9uICE9IG51bGwgJiYgdGhpcy5zZWxlY3Rpb24uc2VsZWN0KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaXNBbGxTZWxlY3RlZCcsIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCk7XG4gICAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICAgIHRoaXMuY2hlY2tlZGxpc3QoKTtcbiAgfVxuXG4gIC8qKiBUaGUgbGFiZWwgZm9yIHRoZSBjaGVja2JveCBvbiB0aGUgcGFzc2VkIHJvdyAqL1xuICBjaGVja2JveExhYmVsKHJvdz86IGFueSk6IHN0cmluZyB7XG4gICAgaWYgKCFyb3cpIHtcbiAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xuICB9XG5cblxuICBjcmVhdGVEYXRhKHBvaW50OiBhbnkpIHtcbiAgICBjb25zdCBkYXRhID0ge307XG4gICAgT2JqZWN0LmtleXMocG9pbnQpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgZGF0YVtrZXkucmVwbGFjZSgvXFxzL2csICdfJyldID0gcG9pbnRba2V5XTtcbiAgICB9KTtcbiAgICByZXR1cm4gZGF0YTtcbiAgfVxuXG4gIGFwcGx5RmlsdGVyKGZpbHRlclZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH1cbiAgfVxuICAvKmFwcGx5RmlsdGVyMShmaWx0ZXJWYWx1ZTogc3RyaW5nLCB2YWw6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGZpbHRlclZhbHVlKTtcbiAgICBjb25zb2xlLmxvZyh2YWwudmFsdWUpO1xuICAgIGxldCB2YWx1ZT0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh2YWwudmFsdWUpO1xuXG4gICAgdmFsdWUuZmlsdGVyID0gZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc29sZS5sb2codmFsdWUpO1xuICAgIC8hKiB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gZnVuY3Rpb24oZGF0YSwgZmlsdGVyOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICAgIC8vIHJldHVybiBkYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIpO1xuICAgIH07XG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfSohL1xuICB9Ki9cblxuICBzdHlsZUNlbGwoY29sX25hbWUsIHJvdykge1xuXG4gICAgLypcbiAgICAgaWYgKGNvbF9uYW1lWydjb2x1bW5EZWYnXT09J3Byb2dyZXNzJyAmJiByb3dbJ3Byb2dyZXNzJ109PScxMDAnKXtcbiAgICAgcmV0dXJuIHsnY29sb3InIDogJ3JlZCd9XG4gICAgIH0gZWxzZSB7XG4gICAgIHJldHVybiB7fVxuICAgICB9XG4gICAgICovXG5cblxuICAgIHJldHVybiB7fTtcbiAgfVxuICAvKipzaG93IHZpZGVvIG1vZGFsIG9uIGNsaWNrIG9mIHRoYW1uYWlsIGZ1bmN0aW9uIGJ5IHNvdXJhdiAqL1xuICBmZXRjaHZpZGVvKHZpZGVvZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCd2aWRlb2RhdGEnLHZpZGVvZGF0YSk7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihWaWRlb1BsYXllciwge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gtdmlkZW9wbGF5ZXItcHJldmlldycsICd2aWRlby1tb2RhbCddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IHByZXZpZXdEYXRhOiB2aWRlb2RhdGEgfVxuICAgIH0pO1xuICB9XG4gIG9wZW5ub3Rlcyh2YWw6IGFueSkge1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5sb2FkZXJyb3cgPSB2YWwuX2lkO1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC5ub3Rlcy5saXN0ZW5kcG9pbnQsIHRoaXMuand0dG9rZW52YWwsIHsgaWQ6IHZhbC5faWQgfSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMsICdsaXN0IG5vdGVzJyk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIHRoaXMubG9hZGVycm93ID0gbnVsbDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbm90ZXMnLCB2YWwpO1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdub3Rlcy1tb2RhbCddLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaXNjb25maXJtYXRpb246IGZhbHNlLFxuICAgICAgICAgIG5vdGVzOiB0cnVlLCBhcGl1cmw6IHRoaXMuYXBpdXJsdmFsLFxuICAgICAgICAgIG5vdGVkYXRhOiB0aGlzLmxpYmRhdGF2YWwubm90ZXMsIHJvd2RhdGE6IHZhbCxcbiAgICAgICAgICBqd3R0b2tlbnZhbDogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgICAgICBsaXN0ZGF0YTogcmVzdWx0LnJlcyxcbiAgICAgICAgICBfc25hY2tCYXI6IHRoaXMuX3NuYWNrQmFyXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAgIHRoaXMua2VlcFBhZ2luYXRpb24gPSAxO1xuICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YTEgKysrKysrKysnLCBkYXRhMSlcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBjb25zdCBkYXRhMjogYW55ID0gW107XG4gICAgbGV0IGhlYWRlckRhdGE6IGFueSA9IHt9O1xuXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlciAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlci5oZWFkZXIgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIuaGVhZGVyICE9ICcnKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnPT0gKysrKysrKysnLCB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIpXG4gICAgICBoZWFkZXJEYXRhID0gdGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZsYWdrOiBhbnkgPSAnJztcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IHRydWUpIHsgZGF0YVtrZXldID0gJ1llcyc7IH1cbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IGZhbHNlKSB7IGRhdGFba2V5XSA9ICdObyc7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09ICdpbWFnZScpIHtcbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSAnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFba2V5XSArICc+PGJyLz4nO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHRlbXBkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gZGF0YVtrZXldKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgPT0gJ2ltYWdlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWd2YWwpOz1cIitcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJykpO1xuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW2tleV1ba10gKyAnPjxici8+Jyk7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiK2RhdGFba2V5XVtrXStcIjwvc3Bhbj48YnIvPlwiKVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSAhPSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxzcGFuPicgKyBkYXRhW2tleV1ba10gKyAnPC9zcGFuPjxici8+Jyk7XG5cblxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ICE9IGtleSkge1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV1ba10pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9iamsgaW4gZGF0YVtrZXldW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxzcGFuPicgKyBvYmprICsgJyA6ICcgKyBkYXRhW2tleV1ba11bb2Jqa10gKyAnPC9zcGFuPjxici8+Jyk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gdGVtcGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG4gaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFbbl0gIT0gbnVsbCAmJiBkYXRhW25dICE9ICcnKSB7XG4gICAgICAgIGRhdGEyW25dID0gZGF0YVtuXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHYgaW4gdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCkge1xuICAgICAgLy8gZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgfVxuICAgIGxldCByZXMgPSBPYmplY3QuZW50cmllcyhkYXRhMik7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZXcgZGF0YScscmVzKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiByZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gcmVzW2JdWzBdKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCByZXNbYl1bMV0sIHJlc1tiXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IHJlc1tiXTsgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG1heEhlaWdodDogJzEwMDB2aCcsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZXRhaWwtdmlldyddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcywgaGVhZGVyRGF0YTogaGVhZGVyRGF0YSB9XG4gICAgfSk7XG5cbiAgfVxuICAvLyBwYXJlbnQtYm90dG9tLWNsYXNzXG4gIG1hbmFnZXN0YXR1cyhkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBwYW5lbENsYXNzOiBbJ2N1c3RvbS1ib3R0b21zaGVldCcsICdwYXJlbnQtYm90dG9tLWNsYXNzJ10sIGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vbGRkYXRhW2NdLl9pZCA9PSBkYXRhLl9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICAvLyB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ3N0YXR1c3VwZGF0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnbWFuYWdlLXN0YXR1cyddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgLy8gZm9yIHRyZWUgdmlldyBpbiBtb2RhbFxuICBjdXN0b21idXR0b25saXN0bmVyKHJvdzogYW55LCBjdXN0b21idXR0b246IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21idXR0b25saXN0bmVyJywgcm93LCBjdXN0b21idXR0b24pO1xuICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoe1xuICAgICAgYWN0aW9uOiAnY3VzdG9tYnV0dG9uY2xpY2snLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgY3VzdG9tYnV0dG9uY2xpY2s6IHtcbiAgICAgICAgZGF0YTogcm93LCBidG5pbmZvOiBjdXN0b21idXR0b25cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG5cbiAgY3VzdG9tYnV0dG9uZnVuYyhkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpOyAgICAvLyByb3cgZGF0YVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tYnV0dG9udmFsKTsgICAgLy8gb2JqZWN0IGZyb20gd2hlcmUgdGhlIGxpYnJhcnkgaGFzIGJlZW4gdXNlZFxuICAgIGxldCB1bnNhZmV1cmw6IGFueSA9IHRoaXMuY3VzdG9tYnV0dG9udmFsLnVybDsgICAvLyBpZnJhbWUgdXJsXG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkcykge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgZGF0YVt0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHNbYl1dO1xuICAgIH1cbiAgICB1bnNhZmV1cmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTsgICAvLyBmb3Igc2FuaXRpemluZyB0aGUgdXJsIGZvciBzZWN1cml0eSwgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIGFibGUgdG8gc2hvdyB0aGUgcGFnZSBpbiBpZnJhbWUsIGhlbmNlIG1vZGFsXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHsgICAgICAgLy8gZm9yIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tZGF0YS1tb2RhbCcsXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogW3sgZGF0YSwgY3VzdG9tZGF0YTogdW5zYWZldXJsIH1dIH1cbiAgICB9KTtcblxuXG4gIH1cblxuXG5cbiAgbWFuYWdlc3RhdHVzbXVsdGlwbGUoKSB7XG4gICAgY29uc3QgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAvLyBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIC8vIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgY29uc3QgbmV3c3RhdHVzOiBhbnkgPSByZXN1bHQudmFsO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC51cGRhdGVlbmRwb2ludG1hbnksIGlkcywgcmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICd0b29nbGUtbWFueSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVtdWx0aXBsZSgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1tdWx0aXBsZSddLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSByZWNvcmRzPyBUaGlzIHByb2Nlc3MgY2FuIG5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5kZXRlTWFueURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwuZGVsZXRlZW5kcG9pbnRtYW55LCBpZHMsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIGlkcykge1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZWRlbGV0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW11bHRpcGxlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZChzKSAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG5cbiAgZGVsZXRlZGF0YShkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBhbGVydCg1KTtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLXNpbmdsZSddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyBUaGlzIHByb2Nlc3MgY2FuIG5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gZGF0YS5faWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2RlbGV0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZWRpdGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZWRpdHJvdXRldmFsLCBkYXRhLl9pZF0pO1xuICB9XG5cblxuICBzb3J0dGFibGUoZmllbGQ6IGFueSwgdHlwZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsIHR5cGUpXG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCA9IGZpZWxkO1xuICAgIHRoaXMuc29ydGRhdGF2YWwudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgfVxuXG5cblxuICBhbGxTZWFyY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXQgbGltaXRjb25kdmFsXCIsdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0IGxpbWl0Y29uZHZhbFwiLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5rZWVwUGFnaW5hdGlvbiBmaXJzdCcsdGhpcy5rZWVwUGFnaW5hdGlvbik7XG5cbiAgICAvLyByZXR1cm47XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoc3Ryc2FyciwgJ3RoaXMuc2VhcmNoc3Ryc2FycicpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAnc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCcpO1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbGwgc2VhcmNoIHRoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaFtpXSk7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgYXV0b3NlYXJjaDogYW55ID0ge307XG5cbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgbGV0IHRlbXBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcblxuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuXG4gICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRlbXBhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IHRlbXBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kYW5kIDMnKVxuICAgICAgICAvLyBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcblxuICAgICAgICB0ZW1wYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG5cbiAgICAgIH1cbiAgICAgIGlmIChhdXRvc2VhcmNoLiRhbmQgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRhbmQgPSBbXTsgfVxuICAgICAgYXV0b3NlYXJjaC4kYW5kLnB1c2godGVtcGF1dG9zZWFyY2gpO1xuXG4gICAgICAvLyBhdXRvc2VhcmNoID0gT2JqZWN0LmFzc2lnbih7fSx0ZW1wYXV0b3NlYXJjaCxhdXRvc2VhcmNoKTtcbiAgICAgIGxldCBhdXRvY291bnQ6IGFueTtcbiAgICAgIGlmIChPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGggPT0gbnVsbCB8fCB0eXBlb2YgT2JqZWN0LmtleXMoYXV0b3NlYXJjaCkubGVuZ3RoID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGF1dG9jb3VudCA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhdXRvY291bnQgPSBPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGg7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhhdXRvY291bnQsICdhdXRvc2VhcmNoLmxlbmd0aCsrKysnLCB0ZW1wYXV0b3NlYXJjaCxPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGgsT2JqZWN0LmtleXMoYXV0b3NlYXJjaCkpXG5cbiAgICAgIC8vIGF1dG9zZWFyY2hbYXV0b2NvdW50XSA9IHRlbXBhdXRvc2VhcmNoO1xuXG4gICAgfVxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvcyBxcSsrJywgYXV0b3NlYXJjaCwgdGhpcy5hdXRvc2VhcmNoKTtcblxuXG4gICAgLy8gYnV0dG9uIFNlYXJjaCBEYXRhXG5cbiAgICBjb25zdCBidXR0b25zZWFyY2g6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGJzIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10udmFsdWUpIHtcbiAgICAgICAgY29uc3QgYnQ6IGFueSA9IHt9O1xuICAgICAgICBidFt0aGlzLmJ1dHRvblNlYXJjaERhdGFbYnNdLmZpZWxkXSA9IHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10udmFsdWVba10udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGJ1dHRvbnNlYXJjaC4kb3IgPT0gbnVsbCkgeyBidXR0b25zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYnQsJ2J0JyxicywnYnMnKVxuICAgICAgICBidXR0b25zZWFyY2guJG9yLnB1c2goYnQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25zZWFyY2gnKVxuXG5cbiAgICBpZiAodHlwZW9mICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ7XG4gICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gdGhpcy5saW1pdGNvbmR2YWwuc2tpcDtcbiAgICAgIC8vICBjb25zb2xlLmxvZyhcInR5cGVvZih0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpIT0ndW5kZWZpbmVkJ1wiKTtcblxuICAgICAgdGhpcy5vbGRsaW1pdHJhbmdlID0gdGhpcy5saW1pdGNvbmR2YWw7XG4gICAgICBpZiAodGhpcy5rZWVwUGFnaW5hdGlvbiAhPSAxKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5rZWVwUGFnaW5hdGlvbiE9MVwiKTtcblxuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICAgICAgLy8gc291cmNlLmNvbmRpdGlvbi5za2lwPTA7XG4gICAgICAgIC8vIHRoaXMua2VlcFBhZ2luYXRpb249MDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLmxpbWl0Y29uZHZhbDtcbiAgICB9XG4gICAgbGV0IGNvbmRpdGlvbm9iajogb2JqZWN0ID0ge307XG5cbiAgICBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCBidXR0b25zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCAnc2VsZWN0U2VhcmNoX2NvbmRpdGlvbicpXG5cbiAgICB0aGlzLmFsbFNlYXJjaENvbmQgPSBjb25kaXRpb25vYmo7XG4gICAgLy8gY29uc29sZS53YXJuKFwidGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGFcIix0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YSk7XG4gICAgaWYgKHRoaXMua2VlcFBhZ2luYXRpb24gIT0gMSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICAvLyBzb3VyY2UuY29uZGl0aW9uLnNraXA9MDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgICAvLyB0aGlzLmtlZXBQYWdpbmF0aW9uPTA7XG4gICAgfVxuICAgIC8vIGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqICYgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb247XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqLmNvbmNhdCh0aGlzLmxpYmRhdGEuYmFzZWNvbmRpdGlvbik7XG4gICAgLy8gZm9yIChsZXQgYiBpbiBjb25kaXRpb25vYmopIHtcbiAgICAvLyAgIC8vIGlmKGNvbmRpdGlvbm9ialtiXSlcbiAgICAvLyAgIGZvciAobGV0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pIHtcbiAgICAvLyAgICAgaWYgKGMgPT0gYikge1xuICAgIC8vICAgICAgIC8vIGNvbmRpdGlvbm9ialtiXT17fTtcbiAgICAvLyAgICAgICBsZXQgdG90YWxjb25kOiBhbnk7XG4gICAgLy8gICAgICAgaWYgKHR5cGVvZiAoY29uZGl0aW9ub2JqW2JdKSAhPSAnb2JqZWN0JylcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCB7ICRlcTogY29uZGl0aW9ub2JqW2JdIH0pO1xuICAgIC8vICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCBjb25kaXRpb25vYmpbYl0pO1xuXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2luIGlmIGJsaycsIGMsIGIsIGNvbmRpdGlvbm9ialtiXSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHRvdGFsY29uZCk7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2JdID0gdG90YWxjb25kO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbmRpdGlvbm9ialtjXSA9IHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdO1xuXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24nLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdjb25kaXRpb25vYmonLCBjb25kaXRpb25vYmosICd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcbiAgICBpZiAodHlwZW9mIHRoaXMuYWxscGFnaW5hdGlvbnBvc3REYXRhICE9ICd1bmRlZmluZWQnKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJjb25kaXRpb25vYmpcIiwgY29uZGl0aW9ub2JqKTtcblxuICAgICAgc291cmNlID0gdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGE7XG4gICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbm9iaiAhPSAndW5kZWZpbmVkJyAmJiBjb25kaXRpb25vYmogIT0gbnVsbCkge1xuICAgICAgICBzb3VyY2Uuc2VhcmNoY29uZGl0aW9uID0gY29uZGl0aW9ub2JqO1xuICAgICAgICAvLyAgc291cmNlLmNvbmRpdGlvbi5za2lwPTA7XG4gICAgICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uICE9IDEpIHtcbiAgICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgICAgICAvLyBzb3VyY2UuY29uZGl0aW9uLnNraXA9MDtcbiAgICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgICAgIC8vIHRoaXMua2VlcFBhZ2luYXRpb249MDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzb3VyY2UgPSB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuICAgIH1cblxuXG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmRpdGlvbm9iaikubGVuZ3RoIDwgMCkge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gU2VhcmNoIGNyaXRlcmlhIHNlbGVjdGVkICEhICcgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgaWYgKHRoaXMua2VlcFBhZ2luYXRpb24gIT0gMSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMua2VlcFBhZ2luYXRpb24hPTEgbGFzdCBwYXJ0XCIpO1xuICAgICAgICBzb3VyY2UuY29uZGl0aW9uLnNraXAgPSAwO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMua2VlcFBhZ2luYXRpb24gPT0gMSkge1xuICAgICAgICB0aGlzLmtlZXBQYWdpbmF0aW9uID0gMDtcblxuXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJzb3VyY2VcIixzb3VyY2UpO1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5rZWVwUGFnaW5hdGlvbiBsYXN0Jyx0aGlzLmtlZXBQYWdpbmF0aW9uKTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWN0aW9uOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCxcbiAgICAgICAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICAgICAgICAgIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLFxuICAgICAgICAgICAgICByZXM6IHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGgsXG4gICAgICAgICAgICAgIGFsbFNlYXJjaENvbmQ6IHRoaXMuYWxsU2VhcmNoQ29uZCxcbiAgICAgICAgICAgICAgYXV0b1NlYXJjaFZhbDogdGhpcy5hdXRvc2VhcmNoLFxuICAgICAgICAgICAgICBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxcbiAgICAgICAgICAgICAgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoe1xuICAgICAgICAgICAgYWN0aW9uOiAnc2VhcmNoJyxcbiAgICAgICAgICAgIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsXG4gICAgICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgICAgICAgIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLFxuICAgICAgICAgICAgcmVzOiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoLFxuICAgICAgICAgICAgYWxsU2VhcmNoQ29uZDogdGhpcy5hbGxTZWFyY2hDb25kLFxuICAgICAgICAgICAgYXV0b1NlYXJjaFZhbDogdGhpcy5hdXRvc2VhcmNoLFxuICAgICAgICAgICAgc2VhcmNoZGF0YTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsXG4gICAgICAgICAgICBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLFxuICAgICAgICAgICAgZmxhZzogJ25vX3JlY29yZCdcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyB0aGlzLnJlc2NvdW50ID0gMDsgXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuXG5cbiAgLy8gb3BlbiBCb3R0b20gU2hlZXQgRm9yIFNlYXJjaFxuICBvcGVuQm90dG9tU2hlZXRGb3JTZWFyY2goZGF0YTogYW55LCBpbmRleCkge1xuICAgIHZhciBjb3VudCA9IDE7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSwgJ29wZW5Cb3R0b21TaGVldEZvclNlYXJjaCcsIGluZGV4KVxuICAgIGNvbnN0IGJzID0gdGhpcy5kaWFsb2cub3BlbihNb2RhbEZvckJ1dHRvbVNlYXJjaCwgeyBwYW5lbENsYXNzOiAnYnV0dG9uLXNlYXJjaC1tb2RhbCcsIGRhdGE6IHsgaXRlbXM6IGRhdGEgfSB9KTtcbiAgICBicy5kaXNhYmxlQ2xvc2UgPSB0cnVlO1xuICAgIGJzLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZXN1bHQrKysrPT09PSBkYXRhJywgZGF0YSlcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQuZmxhZyA9PSAneWVzJykge1xuICAgICAgICBjb3VudCA9IDE7XG4gICAgICAgIHZhciBzZWFyY2hGbGFnID0gMDtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZXN1bHQrKysrPT09PT8/JywgaW5kZXgpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvblNlYXJjaERhdGEgMScpXG5cbiAgICAgICAgaWYgKHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgc2VhcmNoRmxhZyA9IDE7XG4gICAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmJ1dHRvblNlYXJjaERhdGEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJ1dHRvblNlYXJjaERhdGFbaV0uZmllbGQgPT0gcmVzdWx0Lml0ZW1zLmZpZWxkKSB7XG4gICAgICAgICAgICAgIGNvdW50ID0gMjtcbiAgICAgICAgICAgICAgc2VhcmNoRmxhZyA9IDE7XG5cbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RydWUgKysrIGNvdW50JywgY291bnQpXG4gICAgICAgICAgICAgIGZvciAobGV0IGogaW4gcmVzdWx0LnNlbGVjdGVkRGF0YSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtpXS52YWx1ZS5wdXNoKHJlc3VsdC5zZWxlY3RlZERhdGFbal0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChzZWFyY2hGbGFnID09IDEpIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGbGFnLCAnc2VhcmNoRmxhZyAyJylcbiAgICAgICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvdW50ID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjb3VudCwgJ2NvdW50IGVsc2UgY2hlY2snKVxuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5idXR0b25TZWFyY2hEYXRhLCAnYnV0dG9uU2VhcmNoRGF0YSAyJylcblxuICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IHZhbHVlOiByZXN1bHQuc2VsZWN0ZWREYXRhLCBrZXk6IGluZGV4LCBmaWVsZDogcmVzdWx0Lml0ZW1zLmZpZWxkIH0pO1xuICAgICAgICAgICAgc2VhcmNoRmxhZyA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5wdXNoKHsgdmFsdWU6IHJlc3VsdC5zZWxlY3RlZERhdGEsIGtleTogaW5kZXgsIGZpZWxkOiByZXN1bHQuaXRlbXMuZmllbGQgfSk7XG4gICAgICAgICAgc2VhcmNoRmxhZyA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGbGFnLCAnc2VhcmNoRmxhZyAxJylcblxuICAgICAgICBpZiAoc2VhcmNoRmxhZyA9PSAxKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRmxhZywgJ3NlYXJjaEZsYWcgMicpXG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgfVxuXG5cbiAgICAgIH1cbiAgICB9KVxuICB9XG5cblxuICAvLyBjbGVhciBCdXR0b24gU2VhcmNoIENoaXBzICBkYXRhXG4gIGNsZWFyQnV0dG9uU2VhcmNoQ2hpcHMoYnMsIGksIGl0ZW0sIGopIHtcbiAgICAvLyBjb25zb2xlLmxvZyhicywgaSwgaXRlbSwgaiwgJ2JzLGksaXRlbSxqJyk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhW2ldLnZhbHVlLnNwbGljZShqLCAxKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25TZWFyY2hEYXRhIHNwbGljZScpXG5cbiAgICAvLyB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbYnMua2V5XS52YWx1ZXNcbiAgICBmb3IgKGxldCBpIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaCkge1xuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXS5maWVsZCA9PSBicy5maWVsZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldKVxuICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWUucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gsJ3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaCcpXG4gIH1cblxuXG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBzdGFydCAqL1xuICBhcnRpc3R4cFByZXZpZXcoc2luZ2xlRGF0YTogYW55KSB7XG4gICAgY29uc3QgbGluayA9ICdodHRwOi8vZGV2ZWxvcG1lbnRhcGkuYXVkaW9kZWFkbGluZS5jb206MzA5MC8nICsgJ2RhdGFsaXN0JztcbiAgICAvKioqKioqKiBub3QgY29tcGxldGVkICoqKioqKi9cbiAgICBjb25zdCBkYXRhOiBhbnkgPSB7IHNvdXJjZTogJ2Jsb2NrY2hhaW51c2VyX3ZpZXcnLCBjb25kaXRpb246IHsgcG9zdHNfaWRfb2JqZWN0OiBzaW5nbGVEYXRhLl9pZCB9LCB0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCB9O1xuICAgIC8qKioqKioqKiBub3QgY29tcGxldGVkICoqKioqL1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0RGF0YShsaW5rLCBkYXRhKS5zdWJzY3JpYmUocmVzcG9uc2UgPT4ge1xuICAgICAgY29uc3QgcmVzdGx0OiBhbnkgPSByZXNwb25zZTtcbiAgICAgIC8qIG9wZW4gZGlhbG9nICovXG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLWF4cCddLFxuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgZGF0YTogeyBwcmV2aWV3OiB0cnVlLCBwcmV2aWV3RGF0YTogcmVzdGx0IH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIGVuZCAqL1xufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2NvbmZpcm1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbmZpcm0tZGlhbG9nLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDb25maXJtZGlhbG9nIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsXG4gICAgLy8gcHVibGljIG5vdGVzdmFsOmFueT1udWxsLFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxDb25maXJtZGlhbG9nPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSwgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbGliIGRhdGEgaW4gbW9kYWwgJywgdGhpcy5kYXRhLCB0aGlzLmRhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLCB0aGlzLmRhdGEucm93ZGF0YS5ibG9ndGl0bGUpO1xuICAgIHRoaXMuZGF0YS5jb2xvciA9ICdwcmltYXJ5JztcbiAgICB0aGlzLmRhdGEubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgICB0aGlzLmRhdGEubG9hZGVydmFsdWUgPSA1MDtcbiAgICB0aGlzLmRhdGEuYnVmZmVyVmFsdWUgPSA3NjtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIGRlbGV0ZW5vdGUoaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIC8vIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKERlbGV0ZU5vdGVzTW9kYWwsIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW5vdGVzLW1vZGFsJ10sXG4gICAgICBkaXNhYmxlQ2xvc2U6IHRydWVcbiAgICAgIC8vIGRhdGE6IHtcbiAgICAgIC8vICAgaXNjb25maXJtYXRpb246IGZhbHNlLFxuICAgICAgLy8gICBub3RlczogdHJ1ZSwgYXBpdXJsOiB0aGlzLmFwaXVybHZhbCxcbiAgICAgIC8vICAgbm90ZWRhdGE6IHRoaXMubGliZGF0YXZhbC5ub3Rlcywgcm93ZGF0YTogdmFsLFxuICAgICAgLy8gICBqd3R0b2tlbnZhbDogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIC8vICAgbGlzdGRhdGE6IHJlc3VsdC5yZXMsXG4gICAgICAvLyAgIF9zbmFja0JhcjogdGhpcy5fc25hY2tCYXJcbiAgICAgIC8vIH1cbiAgICB9KTtcbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0XCIscmVzdWx0KTtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9ICd1bmRlZmluZWQnICYmIHR5cGVvZiAocmVzdWx0LnJlc3BvbnNlKSAhPSBcInVuZGVmaW5lZFwiICYmIHJlc3VsdC5yZXNwb25zZSAhPSBcIlwiKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgICBpbmRleFxuICAgICAgICAgIC8vIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgICAgICAvLyB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gaW5kZXg7XG4gICAgICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh0aGlzLmRhdGEuYXBpdXJsICsgdGhpcy5kYXRhLm5vdGVkYXRhLmRlbGV0ZWVuZHBvaW50LCB0aGlzLmRhdGEuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ2FkZCBub3RlcycpO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhLmxpc3RkYXRhLnB1c2goeyB1c2VyaWQ6IHRoaXMuZGF0YS5ub3RlZGF0YS5jdXJyZW50dXNlcmZ1bGxuYW1lLCBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gfVxuICB9XG4gIGFkZG5vdGVzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICAgIGlkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsXG4gICAgICAgIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgICAgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuYWRkZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEubGlzdGRhdGEgPT0gbnVsbCkgeyB0aGlzLmRhdGEubGlzdGRhdGEgPSBbXTsgfVxuICAgICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS51bnNoaWZ0KHsgX2lkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsIG5vdGVzOiB7IHVzZXJpZDogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCwgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLmN1cnJlbnR1c2VyZnVsbG5hbWUsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9IH0pO1xuICAgICAgICAgIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHRoaXMuZGF0YS5saXN0ZGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYmxhbmsgbm90ZXMnKTtcbiAgICAgIHRoaXMuZGF0YS5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm90ZXMgY2FuXFwndCBiZSBibGFuayAhISAnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldHR5cGVvZih2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgKHZhbCk7XG4gIH1cbiAgc2FuaXRpemVVcmwodW5zYWZldXJsOiBhbnksIGRhdGE6IGFueSwgcm93ZGF0YTogYW55KSB7XG4gICAgZm9yIChjb25zdCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG59XG5cbi8vIGRlbGV0ZSBub3RlcyBjb25maXJtYXRpb24gbW9kYWxcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2RlbGV0ZW5vdGVzQ29uZmlybWF0aW9uTW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2RlbGV0ZW5vdGVzQ29uZmlybWF0aW9uTW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIERlbGV0ZU5vdGVzTW9kYWwge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8RGVsZXRlTm90ZXNNb2RhbD4sIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgcmVzcG9uc2VGdW5jdGlvbih2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoeyByZXNwb25zZTogdmFsdWUgfSk7XG4gIH1cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2J1dHRvbi1zZWFyY2gtbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJ2J1dHRvbi1zZWFyY2gtbW9kYWwuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIE1vZGFsRm9yQnV0dG9tU2VhcmNoIHtcblxuICBwdWJsaWMgYnV0dG9uU2VhcmNoRGF0YTogYW55ID0ge307XG4gIHB1YmxpYyBzZWxlY3RlZERhdGE6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoVmFsOiBhbnkgPSAnJztcbiAgcHVibGljIGFsbEJ1dHRvbkRhdGE6IGFueSA9IFtdO1xuICBwdWJsaWMgbG9hZGluZ19mbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBlcnJtc2c6IGFueSA9ICcnO1xuICBwdWJsaWMgbWF0Q2hpcERhdGE6IGFueSA9IFtdXG4gICAgO1xuICBwdWJsaWMgbWF0QXV0b3NlYXJjaERhdGE6IGFueSA9IFtdO1xuXG5cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJub3R0b1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsRm9yQnV0dG9tU2VhcmNoPiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBhcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJib3R0b20tc2hlZXQtc2VhcmNoXCIsIGRhdGEpO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSA9IHt9O1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSA9IGRhdGE7XG4gICAgdGhpcy5hbGxCdXR0b25EYXRhID0gZGF0YS5pdGVtcy52YWx1ZTtcbiAgfVxuXG4gIGNob29zZUNoaXBJdGVtKGRhdGEsIGkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCAnPz9kYXRhJylcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5wdXNoKGRhdGEpO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZS5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICAvLyBzdWJtaXQgXG4gIHNlYXJjaEJ5SXRlbSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkRGF0YSlcbiAgICB0aGlzLmRhdGEuZmxhZyA9ICd5ZXMnO1xuICAgIHRoaXMuZGF0YS5zZWxlY3RlZERhdGEgPSB0aGlzLnNlbGVjdGVkRGF0YTtcbiAgICAvLyB0aGlzLnNlYXJjaFZhbCA9ICcnO1xuICAgIC8vIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZSA9IFtdO1xuICAgIHRoaXMuYm5vdHRvUmVmLmNsb3NlKHRoaXMuZGF0YSk7XG4gIH1cblxuICByZW1vdmUodmFsLCBpKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGEuc3BsaWNlKGksIDEpO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZS5wdXNoKHZhbCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLnNlYXJjaFZhbCA9ICcnO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZSA9IFtdO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZSA9IHRoaXMuYWxsQnV0dG9uRGF0YTtcblxuICB9XG5cbiAgc2VhcmNoQnlLZXl3b3JkKHZhbHVlKSB7XG5cbiAgICBpZiAodGhpcy5zZWFyY2hWYWwgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaFZhbCAhPSAnJykge1xuICAgICAgdGhpcy5sb2FkaW5nX2ZsYWcgPSB0cnVlO1xuICAgICAgbGV0IGxpbms6IGFueSA9IHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy5zZXJ2ZXJzZWFyY2hkYXRhLnVybCArIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy5zZXJ2ZXJzZWFyY2hkYXRhLmVuZHBvaW50O1xuICAgICAgbGV0IGRhdGE6IGFueSA9IHtcbiAgICAgICAgXCJzZWFyY2hfc3RyXCI6IHZhbHVlLFxuICAgICAgICBcImxpbWl0XCI6IDUwXG4gICAgICB9XG5cbiAgICAgIHRoaXMuYXBpU2VydmljZS5wb3N0U2VhcmNoMShsaW5rLCBkYXRhKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSlcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0gcmVzO1xuXG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIC8vIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZSA9IFtdO1xuXG4gICAgICAgICAgdGhpcy5sb2FkaW5nX2ZsYWcgPSBmYWxzZTtcblxuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXMuc2xpY2UoMCwgNTApO1xuICAgICAgICAgIC8vIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5pdGVtcy52YWx1ZSA9IHJlc3VsdDtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdyZXN1bHQnLCB0aGlzLmxvYWRpbmdfZmxhZylcbiAgICAgICAgICB0aGlzLm1hdEF1dG9zZWFyY2hEYXRhID0gcmVzdWx0O1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmVycm1zZyA9IFwiUGxlYXNlIEVudGVyIEtleXdvcmRzXCI7XG4gICAgfVxuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5kYXRhLmZsYWcgPSAnbm8nO1xuICAgIHRoaXMuYm5vdHRvUmVmLmNsb3NlKHRoaXMuZGF0YSk7XG5cbiAgfVxuXG5cbn1cblxuXG5cbi8qKmxpc3RpbmcgdmlkZW8gcGxheWVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aWRlb3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAndmlkZW9wbGF5ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFZpZGVvUGxheWVyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VmlkZW9QbGF5ZXI+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCd2aWRlb3BsYXllck1vZGFsJyxkYXRhLnByZXZpZXdEYXRhLnZpZGVvKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgSW1hZ2UgVmlldyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ2ltZ19tb2RhbF92aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcge1xuXG4gIC8vIHB1YmxpYyBkYXRhOmFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlldz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ0ltYWdlVmlld01vZGFsJywgZGF0YSk7XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNuYWNrQmFyUmVmOiBNYXRTbmFja0JhclJlZjxTbmFja2JhckNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NuYWNrJyx0aGlzLmRhdGEpO1xuICB9XG59XG4iXX0=