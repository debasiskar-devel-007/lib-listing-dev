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
            .pipe(debounceTime(2500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            // this.filterautoval(this.currentautocompleteitem);
            console.log('pageChangeValue subscribed !! ', this.pageChangeValue, this.pageCountArray.length);
            if (this.pageChangeValue > this.lastpageCountArray) {
                this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Sorry!! Page number is out of range, highest range is ' + this.lastpageCountArray }
                });
            }
            if (this.pageCountArray.length + 1 > this.pageChangeValue) {
                this.paging(this.pageChangeValue, '');
            }
            else {
                //page count out of bound 
                this.pageChangeValue = this.limitcondval.pagecount;
            }
            console.log("first", this.pageChangeValue, "+++", this.pageCountArray.length);
        }));
        this.subscriptions[this.subscriptioncount++] = this.limitChangrd
            .pipe(debounceTime(2500))
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
            .pipe(debounceTime(1000))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            this.filterautoval(this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(1000))
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
        // if (query <= this.pageCountArray.length) {
        if (this.pageCountArray.length + 1 > query) {
            this.txtQueryChanged.next(query);
            console.log('with in bound ');
        }
        else {
            //page count out of bound 
        }
        // } else {
        //   this._snackBar.openFromComponent(SnackbarComponent, {
        //     duration: 6000,
        //     data: { errormessage: 'Sorry!! Page number is out of range, highest range is ' + this.lastpageCountArray }
        //   });
        //   this.pageChangeValue = this.pageCountArray.length;
        // }
    }
    /**
     * @param {?} query
     * @return {?}
     */
    onFieldChangeforlimit(query) {
        console.log('query', query, this.pageCountArray.length);
        // if (query <= this.pageCountArray.length) {
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
        console.log(value, 'value', type, 'type', statusval, 'statusval');
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // let source: any;
        // let condition: any = {};
        this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
        console.log("this.searchstrsarr[type.field]", this.searchstrsarr[type.field]);
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
        console.log('selectSearch ', this.selectSearch_condition);
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
            }
            // if (this.limitcondval.pagecount > 5 && this.paginationtype == 2 && this.pageCountArray.length - this.limitcondval.pagecount < 10) {
            //   this.newcurrentpagingVal = this.limitcondval.pagecount - 4 ;
            //   console.log('in last range area ...', this.newcurrentpagingVal);
            // }
            if (this.limitcondval.pagecount <= 5 && this.paginationtype == 2) {
                this.newcurrentpagingVal = 1;
            }
            console.log("paging success", this.pageCountArray.length);
            console.log("paging success", this.limitcondval.pagecount);
            console.log('in common  range area ...', this.newcurrentpagingVal);
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
                console.log("count log++", this.newcurrentpagingVal);
                console.log("pageCountArray log++", this.pageCountArray);
                this.pageCountArray = new Array(Math.ceil(this.date_search_source_countval / this.limitcondval.limit));
                this.lastpageCountArray = Math.ceil(this.date_search_source_countval / this.limitcondval.limit);
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
                console.log("count log++", this.newcurrentpagingVal);
                result = res;
                this.date_search_source_countval = (result.count);
                this.pageCountArray = new Array(Math.ceil(this.date_search_source_countval / this.limitcondval.limit));
                this.lastpageCountArray = Math.ceil(this.date_search_source_countval / this.limitcondval.limit);
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
                template: "<div class=\"container \" id={{libdataval.containerid}}>\n\n\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\" (click)=\"autocompletefunction(item)\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    \n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                       <!-- single select box -->\n                       <ng-container *ngIf=\"status.multiple===undefined\">\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </ng-container>\n                        <!-- multiple select box search -->\n                        <ng-container *ngIf=\"status.multiple==true\">\n                            <mat-select multiple [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                                <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                    (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                    {{statusval.name}}\n                                </mat-option>\n                            </mat-select>\n                       </ng-container>\n\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"\n                                autocomplete=\"off\" placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker  #picker1></mat-datepicker>\n                        </mat-form-field> -->\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\"\n                                matTooltipClass=\"refreshtooltipcls\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\" matTooltipClass=\"searchtooltipcls\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\"\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" matTooltip=\"Delete\"\n                    mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\"\n                    matTooltip=\"Update Status\" mat-raised-button (click)=\"managestatusmultiple()\"> Update Status\n                </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" matTooltip=\"{{cbtns?.tooltip}}\" mat-raised-button\n                            (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" min=\"1\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n\n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"> </span>\n                                    <span></span>\n                                </span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                                </span>\n\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetimeshort') &&  column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime')  && column.columnDef.includes( 'datetimeshort') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'short'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- action buttons start here -->\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <div class=\"actionbuttonwrapper\">\n                                <div class=\"button_div_custom_cls\">\n\n                                    <!-- loader -->\n\n                                    <section class=\"example-section example-section-button-1 \">\n                                        <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\n                                            class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\n                                            [bufferValue]=\"bufferValue \">\n                                        </mat-progress-bar>\n                                    </section>\n\n                                    <!-- note block -->\n                                    <ng-container *ngIf=\"libdataval.notes!=null \">\n                                        <button mat-raised-button color=\"primary\" class=\"notebtncls\"\n                                            matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"\n                                            matTooltip=\"{{libdataval?.notes?.tooltip }}\" (click)=\"opennotes(row)\">\n                                            <span class=\"notelabelc\"> {{libdataval.notes.label }}</span>\n                                            <!-- <span class=\"notebracket1\">(</span> -->\n                                            <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                            <!-- <span class=\"notebracket2\">)</span> -->\n                                        </button>\n                                    </ng-container>\n\n                                    <!--custom buttions block -->\n\n                                    <ng-container\n                                        *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                        <ng-container\n                                            *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                            <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                    <!-- ss {{row['status']}} -->\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip }}\"\n                                                        matTooltipClass=\"listnertooltipcls\"\n                                                        (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label\n                                                        }}</button>\n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                            <button mat-raised-button\n                                                                matTooltipClass=\"externallinktooltipcls\"\n                                                                matTooltip=\"{{custombutton?.tooltip}}\"\n                                                                color=\"primary\">{{custombutton.label}}</button>\n                                                        </a>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            matTooltipClass=\"parambtntooltipcls\"\n                                                            (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallink(custombutton)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip}}\"\n                                                            (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n\n                                                </ng-container>\n\n                                            </section>\n\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n\n\n\n                                <span class=\"actionbuttonwrapperspan\"\n                                    *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                    <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                        class=\"cursor\" (click)=\"editdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.edit}}\">\n                                            edit\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span\n                                        *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                        class=\"cursor\" (click)=\"deletedata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.delete }}\">\n                                            delete_outline\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                        class=\"cursor\" (click)=\"viewdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.preview }}\">\n                                            remove_red_eye\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span class=\"cursor\"\n                                        *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                        (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.changeStatus  }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                        (click)=\"custombuttonfunc(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{staticTooltip.changeStatus }} \">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- hide status toggle with cond-->\n                                    <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\n                                        class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- artistxp preview start -->\n                                    <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\"\n                                        (click)=\"artistxpPreview(row)\">\n                                        <i class=\"material-icons\">perm_media</i>\n                                    </span>\n                                    <!-- artistxp preview end -->\n\n                                </span>\n                            </div>\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </section>\n\n        </ng-container>\n\n\n        <!-- new pagination block  -->\n        <ng-container *ngIf=\"paginationtypeFlag && paginationtype==2 && newpagingcountFlag && tableflag==0\">\n            <div class=\"paginationwrapper\">\n            <span class=\"showingpaginationcls\">Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n                <ng-container\n                    *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                    {{(limitcondval.pagecount)*limitcondval.limit}}\n                </ng-container>\n                <ng-container\n                    *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                    {{date_search_source_countval}}\n                </ng-container>\n\n\n\n                of\n                <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                Results\n            </span>\n\n            <div class=\"paginationlistcon\">\n                <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pagefirst_button\" (click)=\"paging(1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"First Page\">First</button>\n                <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pageprev_button\"\n                    (click)=\"paging(limitcondval.pagecount-1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Previous Page\">Prev</button>\n\n            <ng-container *ngFor=\"let item of pageCountArray;let i=index\">\n                <ng-container *ngIf=\"i<10 && (pageCountArray.length > newcurrentpagingVal+i-1)\">\n\n                    <!-- h{{i}}--{{newcurrentpagingVal+i-1}}--{{pageCountArray.length}} -->\n\n\n                    <!-- <span *ngIf=\" (pageCountArray.length - limitcondval.pagecount) < 10\" class=\"pagercls\"\n                        [ngClass]=\"{'active': limitcondval.pagecount ===  limitcondval.pagecount+i-9}\"\n                        (click)=\"paging(limitcondval.pagecount+i-9 ,'')\">\n                        <span>\n                            \n                            {{ limitcondval.pagecount+i-9 }}\n                        </span>\n                    </span> -->\n                    <span class=\"pagercls\" [ngClass]=\"{'active': newcurrentpagingVal+i === limitcondval.pagecount}\"\n                        (click)=\"paging(i+newcurrentpagingVal,'')\">\n                        <span class=\"newpagingdatacls\">\n                            {{ i+newcurrentpagingVal }}\n                        </span>\n                    </span>\n                </ng-container>\n\n\n            </ng-container>\n             <mat-label class=\"gotopagecls\">Go to Page:</mat-label>\n            <input type=\"number\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\" min=\"1\"\n                max=\"{{lastpageCountArray}}\">\n              of {{lastpageCountArray}} Pages\n            <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagenext_button\"\n                (click)=\"paging(limitcondval.pagecount+1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Next Page\">Next</button>\n\n            <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagelast_button\"\n                (click)=\"paging(lastpageCountArray,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Last Page\">Last</button>\n             </div>\n            </div>\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n    </mat-card>\n\n\n\n</div>\n<!-- <div>{{ startDate111 }}</div>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker  #picker1></mat-datepicker>\n</mat-form-field> -->\n\n<!-- <div>After Translet the word test is : {{\"test\" | languageTranslet}}</div> -->\n<!-- <div>{{\"test\"}}</div> -->\n<!-- <div>\n    <span>{{\"Her knowledge of publishing trends, literary history, and books of every description and genre, however, filled rooms\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"It is authorized to decide all cases of every description, arising under the constitution or laws of the United States\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"For example, he wanted to be a member of as many clubs - of any description - as possible\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"Academic excellence was matched with extra-curricular activities of every description - from drama through sport to foreign travel\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Superb apple pie with sultanas and cloves, interspersed with crusty bread sandwiches of every description\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"being at least one \u2014used to indicate that a logical proposition is asserted only of a subclass or certain members of the class denoted by the term which it modifies.\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"When some is used to modify a number, it is almost always a round number\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Middle English som, adjective & pronoun, from Old English sum; akin to Old High German sum some, Greek ham\u0113 somehow, homos same\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"causing a specified feeling or condition\" | languageTranslet}}</span>\n    <span>\n        {{ \"The assessments of the autonomic nervous system, endothelial function, and Ankle-Brachial Index (ABI) are well-recognized tests to detect early complications in diabetic patients \u2013 diabetic neuropathy risk, cardiovascular risk, and peripheral artery disease. These assessments are recommended by the U.S. and International Medical Associations. Unfortunately, most of these assessments or exams are not routinely performed in daily clinical practice because of concerns about complex procedures, time consumption, and a high level of difficulty in reading and/or interpreting exam reports.\" | languageTranslet }}\n    </span>\n    <br>\n\n\n    \n    <span>\n        {{ \"Our ANS testing medical device platform eliminates these concerns by offering an innovative medical device that provides physicians with new and easy to use tools that simplify complex procedures, significantly reduces the time required by technicians to perform the exams, and offers easy to read and interpret exam reports with clinical guidance support which is backed by studies and peer reviews. Lastly, our most recent innovation includes wireless transmission to increase patient and technician comfort.\" | languageTranslet }}\n    </span>\n</div> -->",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHakYsT0FBTyxLQUFLLGNBQWMsTUFBTSxRQUFRLENBQUM7QUFHekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFdBQVcsRUFBRSxjQUFjLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQzs7OztNQU14RixNQUFNLEdBQUcsY0FBYzs7OztBQUU3QixnQ0FFQzs7O0lBREMsNkJBQWE7O0FBY2YsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7Ozs7Ozs7Ozs7O0lBbVgzQixZQUFtQixXQUF1QixFQUFTLE1BQWlCLEVBQzNELFdBQTJCLEVBQzNCLEVBQWUsRUFDZCxNQUFjLEVBQ2QsUUFBa0MsRUFDbEMsU0FBMkIsRUFDNUIsS0FBaUIsRUFDakIsU0FBdUIsRUFDdEIsU0FBc0IsRUFDdEIsV0FBdUIsRUFDeEIsaUJBQTJDO1FBVmpDLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUMzRCxnQkFBVyxHQUFYLFdBQVcsQ0FBZ0I7UUFDM0IsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQUNkLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUNsQyxjQUFTLEdBQVQsU0FBUyxDQUFrQjtRQUM1QixVQUFLLEdBQUwsS0FBSyxDQUFZO1FBQ2pCLGNBQVMsR0FBVCxTQUFTLENBQWM7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBYTtRQUN0QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN4QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQTBCO1FBNVg3QyxpQkFBWSxHQUFRLENBQUMsQ0FBQztRQUU3QixjQUFTLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUN2QixrQkFBYSxHQUFRO1lBQzFCLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLFNBQVM7WUFDcEIsY0FBYyxFQUFFLGVBQWU7U0FDaEMsQ0FBQTtRQUdNLG1CQUFjLEdBQVEsQ0FBQyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVEsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7UUFXbEQsYUFBUSxHQUFXLENBQUMsQ0FBQztRQWtCckIsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQUMxQix5QkFBb0IsR0FBUSxFQUFFLENBQUM7UUFDL0IsWUFBTyxHQUFRLEVBQUUsQ0FBQztRQUNsQixZQUFPLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLGNBQVMsR0FBUSxDQUFDLENBQUM7UUFDbkIsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUVkLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFFdkIsV0FBTSxHQUFRLEVBQUUsQ0FBQztRQUNqQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztRQUN0QixPQUFFLEdBQVEsS0FBSyxDQUFDO1FBQ2hCLFFBQUcsR0FBUSxLQUFLLENBQUM7UUFDakIsU0FBSSxHQUFRLEtBQUssQ0FBQztRQUNsQixRQUFHLEdBQVEsS0FBSyxDQUFDO1FBQ2pCLG1CQUFjLEdBQVEsS0FBSyxDQUFDO1FBQ25DLGNBQVMsR0FBUSxJQUFJLENBQUM7UUFFZix3QkFBbUIsR0FBUSxFQUFFLENBQUM7UUFDOUIsa0JBQWEsR0FBUSxFQUFFLENBQUM7UUFDeEIsb0JBQWUsR0FBUSxFQUFFLENBQUM7UUFDMUIsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IscUJBQWdCLEdBQVEsaUJBQWlCLENBQUM7UUFDMUMscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBQ2xDLG9CQUFlLEdBQVksS0FBSyxDQUFDO1FBQ2pDLG9CQUFlLEdBQVEsRUFBRSxDQUFDOztRQUdqQyxVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUNoQyxTQUFJLEdBQVEsZUFBZSxDQUFDO1FBQzVCLFVBQUssR0FBRyxFQUFFLENBQUM7UUFDWCxnQkFBVyxHQUFHLEVBQUUsQ0FBQzs7UUFHakIsZ0JBQVcsR0FBUSxLQUFLLENBQUM7UUFDekIsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDaEIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBQ25DLG1CQUFjLEdBQVksS0FBSyxDQUFDO1FBRTdCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFPLENBQUM7UUFFN0MsNkJBQXdCLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUU3RCxrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUNqQixvQkFBZSxHQUFRLEVBQUUsQ0FBQztRQXFHMUIsdUJBQWtCLEdBQVksSUFBSSxDQUFDO1FBa0oxQyxxQkFBZ0IsR0FBYSxFQUFFLENBQUM7UUFDaEMsZ0JBQVcsR0FBYSxFQUFFLENBQUM7UUFDM0IsMkJBQXNCLEdBQWEsRUFBRSxDQUFDO1FBQ3RDLGNBQVMsR0FBUSxFQUFFLENBQUM7UUFFcEIseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBQy9CLDJCQUFzQixHQUFRLEVBQUUsQ0FBQztRQUNqQyx5QkFBb0IsR0FBUSxFQUFFLENBQUM7UUFDL0IseUJBQW9CLEdBQVEsRUFBRSxDQUFDO1FBRy9CLFlBQU8sR0FBUSxLQUFLLENBQUM7UUFDZCxjQUFTLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLHFCQUFnQixHQUFRLEVBQUUsQ0FBQzs7UUFFbEMsZUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUM7O1FBT3BDLGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNsQyx1QkFBa0IsR0FBRyxJQUFJLE9BQU8sRUFBTyxDQUFDO1FBQ3hDLGdCQUFXLEdBQUcsSUFBSSxPQUFPLEVBQU8sQ0FBQztRQUNqQyxrQkFBYSxHQUFtQixFQUFFLENBQUM7UUFDbkMsc0JBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLHVCQUFrQixHQUFhLEVBQUUsQ0FBQztRQUNsQyxjQUFTLEdBQVEsSUFBSSxDQUFDO1FBQ3RCLG9CQUFlLEdBQW9CLElBQUksT0FBTyxFQUFVLENBQUM7UUFDekQsaUJBQVksR0FBb0IsSUFBSSxPQUFPLEVBQVUsQ0FBQzs7O1FBSS9DLFVBQUssR0FBUSxFQUFFLENBQUM7Ozs7UUFpTHZCLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFuS3RCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7O1FBQUMsQ0FBQyxLQUFZLEVBQUUsRUFBRTtZQUM1QyxRQUFRLElBQUksRUFBRTtnQkFDWixLQUFLLEtBQUssWUFBWSxlQUFlLENBQUMsQ0FBQztvQkFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7b0JBQ3BCLE1BQU07aUJBQ1A7Z0JBQ0QsS0FBSyxLQUFLLFlBQVksYUFBYSxDQUFDO2dCQUNwQyxLQUFLLEtBQUssWUFBWSxnQkFBZ0IsQ0FBQztnQkFDdkMsS0FBSyxLQUFLLFlBQVksZUFBZSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixNQUFNO2lCQUNQO2dCQUNELE9BQU8sQ0FBQyxDQUFDO29CQUNQLE1BQU07aUJBQ1A7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFDO1FBSUgsdUJBQXVCO1FBQ3ZCLDRGQUE0RjtRQUM1Rix5RkFBeUY7UUFDekYsZ0NBQWdDO1FBQ2hDLG1DQUFtQztRQUVuQyx3R0FBd0c7UUFDeEcsZ0RBQWdEO1FBQ2hELGVBQWU7UUFFZixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWU7YUFDaEUsSUFBSSxDQUdILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxvREFBb0Q7WUFDcEQsc0ZBQXNGO1lBQ3RGLG9EQUFvRDtZQUNwRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLElBQUksQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNoRyxJQUFJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2dCQUNsRCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsd0RBQXdELEdBQUcsSUFBSSxDQUFDLGtCQUFrQixFQUFFO2lCQUMzRyxDQUFDLENBQUM7YUFDSjtZQUVELElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLEVBQUU7Z0JBQ3pELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDTCwwQkFBMEI7Z0JBQzFCLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7YUFDcEQ7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBR2hGLENBQUMsRUFBQyxDQUFDO1FBR0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZO2FBQzdELElBQUksQ0FDSCxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDcEIsU0FBUzs7O1FBQUMsR0FBRyxFQUFFO1lBQ2Qsb0RBQW9EO1lBQ3BELHNGQUFzRjtZQUN0RixvREFBb0Q7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDaEcsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO2dCQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0wsMEJBQTBCO2dCQUMxQixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQ3BEO1FBQ0gsQ0FBQyxFQUFDLENBQUM7UUFJTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVk7YUFDN0QsSUFBSSxDQUNILFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNwQixTQUFTOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxvREFBb0Q7WUFDcEQsc0ZBQXNGO1lBQ3RGLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDbkQsQ0FBQyxFQUFDLENBQUM7UUFFTCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQjthQUNuRSxJQUFJLENBQ0gsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUVuQjthQUNBLFNBQVM7OztRQUFDLEdBQUcsRUFBRTtZQUNkLG9EQUFvRDtZQUNwRCw2RkFBNkY7WUFDN0YsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFOzs7c0JBR2hJLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLENBQUMsUUFBUTs7b0JBRXJGLE1BQVc7Z0JBRWYsTUFBTSxHQUFHO29CQUNQLFVBQVUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxLQUFLLENBQUM7b0JBQ3BFLElBQUksRUFBRTt3QkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO3dCQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO3FCQUM1QjtpQkFDRixDQUFDO2dCQUVGLG9EQUFvRDtnQkFDcEQsaUdBQWlHO2dCQUNqRyxVQUFVO2dCQUNWLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO2dCQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7d0JBQ3JILE1BQU0sR0FBUSxFQUFFO29CQUNwQiw4QkFBOEI7b0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQixVQUFVO29CQUNWLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2Isd0JBQXdCO29CQUN4QixJQUFJLE1BQU0sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSTt3QkFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztvQkFDdEgsSUFBSSxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7d0JBQy9DLGdFQUFnRTt3QkFDaEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7d0JBQ3ZDLGlDQUFpQzt3QkFFakMsd0RBQXdEO3dCQUN4RCxvQkFBb0I7d0JBQ3BCLHlEQUF5RDt3QkFDekQsTUFBTTtxQkFDUDt5QkFBTTt3QkFDTCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDO3dCQUUvQix3REFBd0Q7d0JBQ3hELG9CQUFvQjt3QkFDcEIsNkRBQTZEO3dCQUM3RCxNQUFNO3FCQUVQO29CQUVELElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO29CQUNyQiw4Q0FBOEM7b0JBQzlDLG9DQUFvQztnQkFDdEMsQ0FBQyxFQUFDLENBQUM7YUFFSjtRQUVILENBQUMsRUFBQyxDQUFDO1FBS0w7OztjQUdNO0lBRVIsQ0FBQzs7Ozs7SUFyY0QsSUFDSSxlQUFlLENBQUMsS0FBVTtRQUM1QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztRQUM3QixrQ0FBa0M7SUFDcEMsQ0FBQzs7Ozs7SUFDRCxJQUNJLG9CQUFvQixDQUFDLEtBQVU7UUFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLEtBQUssQ0FBQztRQUMvQix1REFBdUQ7UUFFdkQsSUFBSSxPQUFPLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksRUFBRSxFQUFFO1lBQ2xILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztTQUNyRTtJQUNILENBQUM7Ozs7O0lBQ0QsSUFDSSxlQUFlLENBQUMsZUFBb0I7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztRQUMxQyxtRUFBbUU7UUFDbkU7O1dBRUc7UUFFSDs7OzREQUdvRDtJQUN0RCxDQUFDOzs7OztJQUVELElBQ0ksMkJBQTJCLENBQUMsMkJBQWdDO1FBQzlELElBQUksQ0FBQyw4QkFBOEIsR0FBRywyQkFBMkIsQ0FBQztJQUNwRSxDQUFDOzs7OztJQUNELElBQ0ksU0FBUyxDQUFDLFlBQWlCO1FBQzdCLElBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUVqQztRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDO1FBQ25ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ3RDLGlEQUFpRDtJQUNuRCxDQUFDOzs7OztJQUlELElBQ0ksd0JBQXdCLENBQUMsMkJBQWdDO1FBQzNELElBQUksQ0FBQywyQkFBMkIsR0FBRywyQkFBMkIsQ0FBQztRQUMvRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUdyRyxJQUFJLElBQUksQ0FBQywyQkFBMkIsSUFBSSxDQUFDLEVBQUU7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7U0FBRTtRQUMvRSw0RUFBNEU7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxTQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO1FBQzlCLGtDQUFrQztJQUNwQyxDQUFDOzs7OztJQUNELElBQ0ksWUFBWSxDQUFDLFlBQWlCO1FBQ2hDLElBQUksQ0FBQyxlQUFlLEdBQUcsWUFBWSxDQUFDO0lBQ3RDLENBQUM7Ozs7O0lBRUQsSUFDSSxrQkFBa0IsQ0FBQyxrQkFBdUI7UUFDNUMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLGtCQUFrQixDQUFDO0lBQ2xELENBQUM7Ozs7O0lBQ0QsSUFDSSxRQUFRLENBQUMsV0FBZ0I7UUFDM0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUM7UUFDL0IsZ0RBQWdEO0lBQ2xELENBQUM7Ozs7O0lBRUQsSUFDSSxvQkFBb0IsQ0FBQyxvQkFBeUI7UUFDaEQsSUFBSSxDQUFDLHVCQUF1QixHQUFHLG9CQUFvQixDQUFDO0lBQ3RELENBQUM7Ozs7O0lBQ0QsSUFDSSxHQUFHLENBQUMsR0FBUTtRQUNkLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7Ozs7O0lBQ0QsSUFDSSxjQUFjLENBQUMsY0FBbUI7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUNELElBQ0ksUUFBUSxDQUFDLFFBQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFDRCxJQUNJLFVBQVUsQ0FBQyxVQUFlO1FBQzVCLElBQUksQ0FBQyxhQUFhLEdBQUcsVUFBVSxDQUFDO0lBQ2xDLENBQUM7Ozs7O0lBR0QsSUFDSSxPQUFPLENBQUMsVUFBZTtRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUU3QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1FBQ3JELElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO1lBQ2xHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7U0FDakM7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDM0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQy9DLElBQUksT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssSUFBSSxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO1lBQ2hGLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUM7U0FDcEM7UUFFRCxnQkFBZ0I7UUFFaEIsMkNBQTJDO1FBRTNDLElBQUksVUFBVSxDQUFDLGdCQUFnQixJQUFJLElBQUksSUFBSSxVQUFVLENBQUMsZ0JBQWdCLElBQUksRUFBRSxFQUFFO1lBQzVFLFVBQVU7OztZQUFDLEdBQUcsRUFBRTtnQkFDZCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1lBQ3RELENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtRQUdELElBQUksVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLGVBQWUsSUFBSSxFQUFFLElBQUksVUFBVSxDQUFDLGVBQWUsSUFBSSxJQUFJLEVBQUU7WUFDaEgsVUFBVTs7O1lBQUMsR0FBRyxFQUFFO2dCQUNkLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLGVBQWUsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxVQUFVLENBQUMsZUFBZSxDQUFDO1lBRXBELENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztTQUNWO2FBQU07WUFDTCxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNILENBQUM7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsVUFBZTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUNELElBQ0ksY0FBYyxDQUFDLGlCQUFzQjtRQUN2QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsaUJBQWlCLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxJQUNJLElBQUksQ0FBQyxJQUFTO1FBQ2hCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBQ0QsSUFDSSxlQUFlLENBQUMsZUFBb0I7UUFDdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGVBQWUsQ0FBQztJQUM1QyxDQUFDOzs7OztJQUNELElBQ0ksaUJBQWlCLENBQUMsaUJBQXNCO1FBQzFDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxpQkFBaUIsQ0FBQztJQUNoRCxDQUFDOzs7OztJQUVELElBQ0ksVUFBVSxDQUFDLFVBQWU7UUFDNUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUM7SUFDbEMsQ0FBQzs7Ozs7SUFFRCxJQUNJLG1CQUFtQixDQUFDLG1CQUF3QjtRQUM5QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsbUJBQW1CLENBQUM7SUFDcEQsQ0FBQzs7Ozs7SUFFRCxJQUNJLGNBQWMsQ0FBQyxpQkFBc0I7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGlCQUFpQixDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsSUFDSSxjQUFjLENBQUMsY0FBbUI7UUFDcEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLGNBQWMsQ0FBQztJQUMxQyxDQUFDOzs7OztJQUNELElBQ0ksTUFBTSxDQUFDLE1BQVc7UUFDcEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7UUFDeEIsZ0RBQWdEO1FBRWhELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHVCQUF1QixDQUFDLENBQUM7SUFDN0YsQ0FBQzs7Ozs7SUFFRCxJQUNJLFdBQVcsQ0FBQyxXQUFnQjtRQUM5QixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQztJQUVwQyxDQUFDOzs7OztJQUVELElBQ0ksUUFBUSxDQUFDLFFBQWE7UUFDeEIsSUFBSSxRQUFRLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUM7U0FBRTthQUFNO1lBQUUsSUFBSSxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7U0FBRTtRQUN0Rix3Q0FBd0M7SUFDMUMsQ0FBQzs7Ozs7SUFFRCxJQUNJLFNBQVMsQ0FBQyxTQUFjO1FBQzFCLElBQUksQ0FBQyxZQUFZLEdBQUcsU0FBUyxDQUFDO0lBQ2hDLENBQUM7Ozs7O0lBRUQsSUFDSSxVQUFVLENBQUMsVUFBZTtRQUM1QixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDOzs7OztJQUVELElBQ0ksU0FBUyxDQUFDLFNBQWM7UUFDMUIsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQzs7Ozs7O0lBSUQsSUFDSSxnQkFBZ0IsQ0FBQyxJQUFTO1FBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzFCLENBQUM7Ozs7OztJQUdELElBQ0ksa0JBQWtCLENBQUMsR0FBUTtRQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsR0FBRyxDQUFBO1FBQzlCLCtEQUErRDtJQUNqRSxDQUFDOzs7O0lBcU9ELFVBQVU7UUFDUixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7OztJQUVELG9CQUFvQixDQUFDLElBQVM7UUFDNUIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxPQUE0QztRQUV0RCx3Q0FBd0M7UUFDeEMsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7WUFDdkIsa0NBQWtDO1lBQ2xDLElBQUksQ0FBQyxJQUFJLGFBQWEsRUFBRTtnQkFDdEIsOEJBQThCO2dCQUM5QixJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxhQUFhLElBQUksSUFBSSxFQUFFO29CQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN2QixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7aUJBRWxCO2FBQ0Y7U0FDRjtJQUNILENBQUM7Ozs7O0lBQ0QsT0FBTyxDQUFDLENBQVM7UUFDZixPQUFPLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFFekIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsNkNBQTZDO1FBQzdDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLEtBQUssRUFBRTtZQUMxQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDL0I7YUFDSTtZQUNILDBCQUEwQjtTQUUzQjtRQUNELFdBQVc7UUFDWCwwREFBMEQ7UUFDMUQsc0JBQXNCO1FBQ3RCLGlIQUFpSDtRQUNqSCxRQUFRO1FBQ1IsdURBQXVEO1FBQ3ZELElBQUk7SUFDTixDQUFDOzs7OztJQUVELHFCQUFxQixDQUFDLEtBQVU7UUFFOUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDeEQsNkNBQTZDO1FBQzdDLElBQUksS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUMvQjthQUNJO1lBQ0gsMEJBQTBCO1NBRTNCO0lBR0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixnQ0FBZ0M7UUFDaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDOUMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTiw0REFBNEQ7UUFDNUQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNqRSwwQkFBMEI7UUFFMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFHOUMsMkhBQTJIO1FBRTNILHFCQUFxQjtRQUNyQiw2QkFBNkI7UUFDN0IsZUFBZTtRQUNmLDBDQUEwQztRQUMxQywyQkFBMkI7UUFDM0IsT0FBTztRQUNQLG1FQUFtRTtRQUNuRSxtRkFBbUY7UUFDbkYseUJBQXlCO1FBQ3pCLHdDQUF3QztRQUN4QyxRQUFRO1FBRVIsSUFBSTtRQUVKLGVBQWU7UUFFZixxRUFBcUU7UUFDckU7Ozs7aUJBSVM7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWTthQUMxQyxJQUFJLENBQ0gsU0FBUyxDQUFDLEVBQUUsQ0FBQyxFQUNiLEdBQUc7Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FDbEMsQ0FBQztRQUVKOzs7Ozs7TUFNRjtRQUVFLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQzs7Y0FDdEIsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ2hCLElBQUksSUFBSSxDQUFDLGFBQWE7WUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDOztZQUU5RCxJQUFJLEdBQUcsRUFBRTs7Y0FDUCxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQixJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFJLGdIQUFnSDs7O2NBRXZJLFdBQVcsR0FBRyxFQUFFOztjQUNoQixXQUFXLEdBQUcsRUFBRTtRQUN0QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNwQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBTSx3RUFBd0U7WUFDNUgsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELCtCQUErQjtRQUMvQiw4QkFBOEI7UUFDOUIsMENBQTBDO1FBQzFDLDBDQUEwQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUVsQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTs7a0JBQ3JDLEVBQUUsR0FBRyxPQUFPLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTs7a0JBQzVCLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxHQUFHLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUk7Ozs7Z0JBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQSxFQUFFLFNBQVMsRUFBRSxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ2hLLHdCQUF3QjtZQUN4QiwrQkFBK0I7WUFDL0IsNkJBQTZCO1lBRTdCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixFQUFFO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFO29CQUFFLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUFFO2FBQ3BFO1lBR0QsdUJBQXVCO1lBQ3ZCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsSUFBSSxXQUFXLEVBQUU7Z0JBQ2hILEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxvQkFBb0IsRUFBRTtvQkFDcEQsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRTt3QkFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQUU7aUJBQy9FO2dCQUNELG1EQUFtRDthQUNwRDtZQUtELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUN2QjtTQUNGOztZQUNHLGFBQWEsR0FBRyxFQUFFO1FBQ3RCLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBQ3JCLENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztRQUVSLGFBQWEsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUMsQ0FBQztRQUNuRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxJQUFJLElBQUksRUFBRTtZQUMxQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFBO1NBQ3pFOztZQUlJLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxFQUFFLENBQUM7O1lBRTlCLFVBQVUsR0FBUSxFQUFFO1FBQ3hCLDhDQUE4QztRQUM5QyxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtZQUNuRSxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUM7U0FDM0M7UUFDRCxJQUFJLFVBQVUsSUFBSSxJQUFJLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2dCQUMzQyxPQUFPLEdBQVcsRUFBRTtZQUN4QixLQUFLLE1BQU0sQ0FBQyxJQUFJLFVBQVUsRUFBRTtnQkFDMUIsSUFBSSxhQUFhLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssRUFBRTtvQkFDbEQsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7d0JBQzNDLElBQUksQ0FBQyxJQUFJLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTs0QkFBRSxPQUFPLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUFFO3FCQUN0RTtvQkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztpQkFDOUU7YUFDRjtZQUNELGFBQWEsR0FBRyxVQUFVLENBQUM7U0FDNUI7UUFHRCxtRUFBbUU7UUFDbkUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLElBQUksS0FBSyxFQUFFO1lBQzdFLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdEcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7U0FDcEo7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsSUFBSSxLQUFLLEVBQUU7WUFDL0UsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNoRTtRQUNELHFDQUFxQztRQUVyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxhQUFhLENBQUM7UUFDdEMsaUdBQWlHO1FBQ2pHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyx3QkFBd0IsSUFBSSxJQUFJLEVBQUU7WUFDcEQsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUN4QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFPLG1EQUFtRDtTQUNwSTs7WUFDRyxVQUFVLEdBQUcsRUFBRTs7WUFDZixXQUFXLEdBQUcsRUFBRTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUMxQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3JELFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUU1QztRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsV0FBVyxDQUFDO1FBRTNCLHVGQUF1RjtRQUV2RiwyQ0FBMkM7UUFDM0Msb0VBQW9FO1FBRXBFLG9CQUFvQjtRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDOzs7Y0FHN0QsU0FBUyxHQUFHLEVBQUU7UUFDcEIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3ZDO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxTQUFTLENBQUM7UUFDekIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFdkMsOENBQThDO1FBQzlDLG9DQUFvQztRQUdwQywrQkFBK0I7UUFDL0IsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBRWQscUNBQXFDO1lBQ3JDLGtEQUFrRDtZQUNsRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUNoRCwyREFBMkQ7Z0JBQzNELEtBQUssTUFBTSxFQUFFLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRTtvQkFDckQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxFQUFFO3dCQUNsSCxnS0FBZ0s7d0JBQ2hLLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQy9ELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNqRCx5QkFBeUI7d0JBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQixJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7NEJBQ3pFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUNqRCw0REFBNEQ7d0JBQzVELCtIQUErSDt3QkFFL0gseU5BQXlOO3FCQUUxTjtpQkFDRjthQUNGO1lBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtnQkFDOUMseURBQXlEO2dCQUN6RCxLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUU7b0JBQ25ELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTt3QkFDOUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQzs0QkFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQy9DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO3dCQUMzQiwwREFBMEQ7cUJBQzNEO2lCQUNGO2FBQ0Y7WUFHRCxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUMxQyxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEVBQUU7b0JBQzlDLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO3dCQUNoSyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt3QkFFM0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFOzRCQUN0RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO3lCQUNqRTt3QkFFRCxLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFOzRCQUN2RCxxRUFBcUU7NEJBQ3JFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3lCQUNyTDtxQkFDRjtpQkFDRjthQUNGO1lBR0QsdUJBQXVCO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0NBQXNDLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hGLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLEVBQUUsRUFBRTtnQkFDMUosSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7Z0JBRTNCLG9IQUFvSDtnQkFDcEgsZ0hBQWdIO2dCQUNoSCw0R0FBNEc7Z0JBRTVHLDBIQUEwSDtnQkFDMUgsd0hBQXdIO2dCQUV4SCx3SUFBd0k7Z0JBQ3hJLHNJQUFzSTtnQkFDdEksOEVBQThFO2dCQUM5RSw0RUFBNEU7Z0JBRTVFLGtEQUFrRDtnQkFDbEQsb0hBQW9IO2dCQUNwSCw0R0FBNEc7Z0JBQzVHLGdGQUFnRjtnQkFDaEYsOEVBQThFO2dCQUU5RSwwSEFBMEg7Z0JBRTFILElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUUvRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM3RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUUzRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFFL0csSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7YUFDdEg7WUFDRCx3RkFBd0Y7WUFJeEYsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxJQUFJLElBQUksRUFBRTtnQkFDaEQsNEZBQTRGO2dCQUM1RixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUU7O3dCQUM5QyxHQUFHLEdBQVEsQ0FBQztvQkFDaEIsR0FBRyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEIsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLElBQUksRUFBRSxFQUFFO3dCQUNsSCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQzt3QkFDM0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUE7cUJBQ3RKO2lCQUNGO2FBQ0Y7WUFFRCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxFQUFFO2dCQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7YUFDbEI7UUFDSCxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7SUFDWCxDQUFDOzs7Ozs7SUFNRCxrQkFBa0IsQ0FBQyxHQUFRO1FBQ3pCLGdCQUFnQjtRQUNoQixvRUFBb0U7UUFFcEUsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FDaEM7WUFDRSxNQUFNLEVBQUUsb0JBQW9CLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLEdBQUcsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsZ0JBQWdCO1NBQ2hTLENBQ0YsQ0FBQTtRQUNELGlCQUFpQjtRQUNqQixpSkFBaUo7UUFDakosSUFBSTtRQUNKLHNDQUFzQztJQUN4QyxDQUFDOzs7Ozs7SUFJRCxjQUFjLENBQUMsR0FBUTs7O2NBRWYsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRTs7WUFFNUMsVUFBVSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsK0JBQStCLENBQUM7WUFDaEUsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFO1NBQ3ZCLENBQUM7SUFDSixDQUFDOzs7O0lBRUQsa0JBQWtCO1FBQ2hCLDJDQUEyQztJQUM3QyxDQUFDOzs7O0lBQ0QsZUFBZTtRQUViLDhDQUE4QztRQUM5QyxVQUFVOzs7UUFBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLElBQUksSUFBSSxFQUFFO2dCQUM5RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLEVBQUU7OzBCQUVqRCxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDO29CQUNoSSxJQUFJLElBQUksSUFBSSxJQUFJO3dCQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3JGLDZIQUE2SDtvQkFDN0gsZ0NBQWdDO2lCQUNqQzthQUNGO1FBRUgsQ0FBQyxHQUFFLElBQUksQ0FBQyxDQUFDO0lBQ1gsQ0FBQzs7Ozs7O0lBR0QsZUFBZSxDQUFDLElBQUk7UUFDbEIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FDaEM7WUFDRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxJQUFJO1NBQ2hDLENBQ0YsQ0FBQTtRQUNELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxJQUFJO2dCQUNQLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUM7Z0JBQzFDLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7Z0JBQzFCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztnQkFDM0MsTUFBTTtTQUNUO0lBQ0gsQ0FBQzs7Ozs7O0lBSUQsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPO1FBQ2QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUVoQyxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFO1lBQzFCLEVBQUUsR0FBRyxFQUFFLENBQUMsVUFBVSxDQUFDO1lBQ25CLElBQUksRUFBRSxDQUFDLE9BQU8sSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxJQUFJLE9BQU8sRUFBRTtnQkFDckQsT0FBTyxFQUFFLENBQUM7YUFDWDtTQUNGO1FBRUQsOENBQThDO1FBQzlDLDBDQUEwQztRQUMxQyxnREFBZ0Q7UUFDaEQsbUJBQW1CO1FBQ25CLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7OztJQUNELHFCQUFxQjtRQUVuQixtREFBbUQ7SUFFckQsQ0FBQzs7OztJQUNELFdBQVc7UUFDVCwrQ0FBK0M7UUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPOzs7O1FBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUMsQ0FBQztJQUNuRCxDQUFDOzs7OztJQUVELHlCQUF5QixDQUFDLElBQUk7UUFDNUIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSwyQkFBMkIsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFFeEwsQ0FBQzs7OztJQUVELFFBQVE7O1lBQ0YsQ0FBTTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDOztjQUNaLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUs7UUFDOUIsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUM7U0FDekM7SUFDSCxDQUFDOzs7Ozs7SUFJRCxVQUFVLENBQUMsR0FBUSxFQUFFLElBQVM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzs7Ozs7OztjQVMzRSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjs7Y0FDbkQsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFROztZQUVqRSxNQUFXOztZQUNYLFNBQWM7O2NBQ1osVUFBVSxHQUFRLEVBQUU7UUFDMUIsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7UUFDM0Isd0ZBQXdGO1FBQ3hGLG9DQUFvQztRQUNwQyxnQ0FBZ0M7UUFDaEMsSUFBSTtRQUVKLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7WUFFbEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDO1lBRXRDLElBQUksSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtvQkFDekMsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRO2lCQUNuRCxDQUFDO2FBQ0g7WUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUU7Z0JBQ25GLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRztvQkFDZixJQUFJLEVBQUUsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE9BQU8sRUFBRTtpQkFDMUMsQ0FBQzthQUNIO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxFQUFFO2dCQUNyRixTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUc7b0JBQ2YsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxRQUFRO2lCQUNuRCxDQUFDO2FBQ0g7WUFFRCxrSUFBa0k7WUFDbEkscUVBQXFFO1lBQ3JFLHNGQUFzRjtZQUN0RixvRUFBb0U7WUFFcEUsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO2dCQUM1Qiw2Q0FBNkM7Z0JBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7b0JBQ3BELFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7aUJBQ3RFO2FBQ0Y7O2tCQUVLLFVBQVUsR0FBUSxFQUFFO1lBQzFCLG1CQUFtQjtZQUNuQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQy9CLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRTs7MEJBQzVCLEVBQUUsR0FBUSxFQUFFO29CQUNsQixFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7b0JBQzNELElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7d0JBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7cUJBQUU7b0JBQ3BELGtEQUFrRDtvQkFDbEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7aUJBQ3pCO2FBQ0Y7O2tCQUVLLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLFVBQVUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUM7WUFDckosTUFBTSxHQUFHO2dCQUNQLFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO29CQUM5QixJQUFJLEVBQUUsQ0FBQztpQkFDUjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztvQkFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTtpQkFDNUI7Z0JBQ0QsZUFBZSxFQUFFLFlBQVk7YUFDOUIsQ0FBQztZQUVGLG1GQUFtRjtZQUNuRixpR0FBaUc7WUFDakcsT0FBTztZQUNQLElBQUksQ0FBQywyQkFBMkIsR0FBRyxDQUFDLENBQUM7WUFDckMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTs7b0JBQ3JILE1BQU0sR0FBUSxFQUFFO2dCQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO2dCQUNiLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQy9ELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO3dCQUNsRCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7cUJBQ3BELENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFFTCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO3dCQUNsRCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsZ0NBQWdDLEVBQUU7cUJBQ3pELENBQUMsQ0FBQztpQkFFSjtnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsOENBQThDO2dCQUM5QyxvQ0FBb0M7WUFDdEMsQ0FBQyxFQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztZQUFDLEdBQUcsQ0FBQyxFQUFFOztvQkFDdEgsTUFBTSxHQUFRLEVBQUU7Z0JBQ3BCLE1BQU0sR0FBRyxHQUFHLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxJQUFJLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxFQUFFO29CQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUFFO3FCQUFNO29CQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2lCQUFFO2dCQUMzRSwrQkFBK0I7Z0JBQy9CLDhDQUE4QztnQkFDOUMsb0NBQW9DO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1lBRUg7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQWlCSTtTQUNMO2FBQU07WUFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7Ozs7OztJQUlELFlBQVksQ0FBQyxLQUFVLEVBQUUsSUFBUyxFQUFFLFNBQWM7UUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBRWpFLGlFQUFpRTtRQUNqRSxtQkFBbUI7UUFDbkIsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7UUFDL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOztZQUUxRSxHQUFHLEdBQUcsRUFBRTtRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDdkQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7Ozs7Ozs7Ozs7OztjQWtCSyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLHVCQUF1Qjs7WUFDM0QsTUFBVzs7WUFDWCxTQUFjO1FBQ2xCLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZixTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUM5QixvQ0FBb0M7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7UUFDaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUM7O2NBQ3BELFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDcEosTUFBTSxHQUFHO1lBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQztRQUNGLHVCQUF1QjtRQUN2QixtRkFBbUY7UUFDbkYsNEJBQTRCO1FBQzVCLG9CQUFvQjtRQUNwQixnQ0FBZ0M7UUFDaEMsNERBQTREO1FBQzVELGtEQUFrRDtRQUNsRCx3Q0FBd0M7UUFDeEMsUUFBUTtRQUNSLFdBQVc7UUFDWCx5QkFBeUI7UUFDekIsSUFBSTtRQUNKLHdCQUF3QjtJQUMxQixDQUFDOzs7Ozs7O0lBR0QsTUFBTSxDQUFDLEdBQVEsRUFBRSxJQUFTO1FBQ3hCLHVDQUF1QztRQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQztRQUV4QixJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxJQUFJLElBQUk7WUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDekUsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxJQUFJO1lBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2xFLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNwRSw0QkFBNEI7WUFDNUIsbUNBQW1DO1lBRW5DLElBQUk7WUFDSixpQ0FBaUM7WUFDakMsd0RBQXdEO1lBQ3hELG9CQUFvQjtZQUNwQix3RUFBd0U7WUFDeEUsTUFBTTtTQUNQOztZQUVHLFlBQVksR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLDJCQUEyQixHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMvRixZQUFZLEdBQUcsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDaEMsNEhBQTRIO1FBQzVILDRCQUE0QjtRQUM1QixrQ0FBa0M7UUFDbEMsb0NBQW9DO1FBQ3BDLDJDQUEyQztRQUMzQyxNQUFNO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUVsRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7WUFDakYsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztTQUMvQjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ2pFLE9BQU87U0FDUjtRQUNELElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxFQUFFO1lBQ2xFLGdDQUFnQztZQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDO1lBQ3JGLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDL0I7UUFDRCxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDWCxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7YUFDbkM7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDM0QsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQzthQUM1QjtpQkFDSTtnQkFDSCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7YUFDdEY7WUFDRCxpQ0FBaUM7U0FDbEM7UUFDRCxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUU7WUFDWixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNqQztTQUNGO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNwRCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUM7U0FDdEY7OztjQUdLLFVBQVUsR0FBUSxFQUFFO1FBRTFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBR2hFLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLElBQUksRUFBRSxFQUFFO2dCQUN0RyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO2FBQ3RFO1NBQ0Y7O2NBR0ssVUFBVSxHQUFRLEVBQUU7UUFDMUIsbUJBQW1CO1FBQ25CLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUMvQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQUU7O3NCQUM1QixFQUFFLEdBQVEsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzRCw4REFBOEQ7Z0JBQzlELElBQUksVUFBVSxDQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQUUsVUFBVSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7aUJBQUU7Z0JBQ3BELGtEQUFrRDtnQkFFbEQsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFDekI7U0FDRjs7Y0FFSyxZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsSUFBSSxDQUFDLHNCQUFzQixFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDOztjQUMvSSxNQUFNLEdBQUc7WUFDYixTQUFTLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSztnQkFDOUIsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSTthQUM3QjtZQUNELElBQUksRUFBRTtnQkFDSixLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLO2dCQUM3QixJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO2FBQzVCO1lBQ0QsZUFBZSxFQUFFLFlBQVk7U0FDOUI7UUFDRCxJQUFJLENBQUMscUJBQXFCLEdBQUcsTUFBTSxDQUFDOztjQUM5QixJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLGlCQUFpQjtRQUN6RDs7Ozs7O1dBTUc7UUFDSCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekgsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7Z0JBQy9ELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7YUFDNUQ7WUFDRCxzSUFBc0k7WUFDdEksaUVBQWlFO1lBQ2pFLHFFQUFxRTtZQUNyRSxJQUFJO1lBQ0osSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2hFLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxDQUFDLENBQUM7YUFDOUI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsMkJBQTJCLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFHbkUsSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbEIsa0NBQWtDO1lBQ2xDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7WUFFL0IsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dCQUN6RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxlQUFlLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO2dCQUU5SywrREFBK0Q7Z0JBQy9ELDZFQUE2RTtnQkFDN0UsSUFBSTtnQkFFSixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEVBQUU7b0JBQ3ZELElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUM7aUJBQ3BEO2dCQUNELFVBQVU7OztnQkFBQyxHQUFHLEVBQUU7b0JBQ2QsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsQ0FBQyxDQUFDO2dCQUM5RixDQUFDLEdBQUUsR0FBRyxDQUFDLENBQUM7Z0JBRVIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNsRSxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsMEJBQTBCLEVBQUU7aUJBQ25ELENBQUMsQ0FBQztnQkFFSCxvREFBb0Q7Z0JBQ3BELHNEQUFzRDtnQkFDdEQsOERBQThEO2dCQUM5RCxnRUFBZ0U7YUFDakU7aUJBQU07Z0JBQ0wsdUVBQXVFO2dCQUN2RSxxREFBcUQ7Z0JBQ3JELG9GQUFvRjtnQkFDcEYsK0RBQStEO2dCQUMvRCxtQ0FBbUM7Z0JBQ25DLHNCQUFzQjtnQkFDdEIseUVBQXlFO2dCQUN6RSxxRUFBcUU7Z0JBQ3JFLG9EQUFvRDtnQkFDcEQsc0RBQXNEO2dCQUN0RCw4REFBOEQ7Z0JBQzlELGtCQUFrQjtnQkFDbEIsbUNBQW1DO2dCQUNuQyx1REFBdUQ7Z0JBQ3ZELElBQUk7Z0JBQ0osbUJBQW1CO2dCQUNuQixtQ0FBbUM7Z0JBQ25DLHVEQUF1RDtnQkFDdkQsSUFBSTtnQkFDSixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsZ0NBQWdDLEVBQUU7aUJBQ3pELENBQUMsQ0FBQzthQUNKO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsOENBQThDO1lBQzlDLG9DQUFvQztRQUV0QyxDQUFDLEVBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxpQkFBaUIsQ0FBQyxHQUFRO1FBQ3hCLHdCQUF3QjtJQUUxQixDQUFDOzs7Ozs7O0lBQ0QsTUFBTSxDQUFDLEdBQVEsRUFBRSxDQUFNLEVBQUUsS0FBVTtRQUVqQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQUU7SUFDOUUsQ0FBQzs7Ozs7SUFHRCwwQkFBMEIsQ0FBQyxJQUFJO1FBQzdCLElBQUksQ0FBQyx1QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFDcEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQiwyRUFBMkU7UUFDM0UsSUFBSSxJQUFJLENBQUMsdUJBQXVCLENBQUMsZ0JBQWdCLElBQUksSUFBSTtZQUN2RCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ3RCO1lBQ0gsOERBQThEO1lBQzlELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNoQztJQUVILENBQUM7Ozs7O0lBR0QsYUFBYSxDQUFDLElBQVM7OztjQUVmLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbkQsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEVBQUU7O2tCQUNoRixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsVUFBVSxDQUFDO2dCQUM5QyxnQ0FBZ0M7Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7WUFDNUUsQ0FBQyxFQUFDO1lBQ0YsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQztTQUN2QztJQUNILENBQUM7Ozs7O0lBQ0QsYUFBYSxDQUFDLEdBQVE7O2NBQ2QsRUFBRSxHQUFRLFFBQVEsQ0FBQyxhQUFhLENBQUMscUJBQXFCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUN6RSxFQUFFLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztJQUNoQixDQUFDOzs7Ozs7O0lBQ0Qsa0JBQWtCLENBQUMsS0FBVSxFQUFFLElBQVMsRUFBRSxJQUFTO1FBQ2pELG9DQUFvQztRQUNwQywrREFBK0Q7UUFDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM3RixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQzdCO1FBRUQsa0RBQWtEO1FBQ2xELElBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2xDLGlHQUFpRztRQUNqRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsRUFBRSxDQUFDOztjQUN6QixFQUFFLEdBQVEsUUFBUSxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFDckUsRUFBRSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZCxpR0FBaUc7UUFDakcsMkJBQTJCO1FBQzNCLG9FQUFvRTtRQUNwRSxnREFBZ0Q7UUFDaEQ7Ozs7Ozs7Ozs7WUFVSTtRQUNKLGlFQUFpRTtRQUNqRSxpRkFBaUY7UUFDakYsdUJBQXVCO1FBQ3ZCLCtEQUErRDtRQUMvRCxnREFBZ0Q7UUFDaEQsc0NBQXNDO1FBRXRDLE1BQU07SUFDUixDQUFDOzs7Ozs7SUFHRCxrQkFBa0IsQ0FBQyxLQUFVLEVBQUUsSUFBUztRQUN0QyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxFQUFFOztrQkFDdkIsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkUsK0JBQStCO1lBQy9CLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNqQyxvQkFBb0I7WUFDcEIsdUNBQXVDO1lBQ3ZDLElBQUk7U0FDTDs7WUFDQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQzs7O2NBRXRGLElBQUksR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsdUJBQXVCOztZQUMzRCxNQUFXOztjQUNULFNBQVMsR0FBUSxFQUFFOztZQUNyQixHQUFHLEdBQUcsRUFBRTtRQUNaLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDdkQsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDcEQ7UUFFRCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFBRSxTQUFTLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxHQUFHLEdBQUcsQ0FBQztTQUFFO1FBQ3ZNLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxFQUFFLENBQUM7UUFDL0IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFNBQVMsQ0FBQzs7O2NBRWhDLFlBQVksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsc0JBQXNCLENBQUM7UUFDcEosTUFBTSxHQUFHO1lBQ1AsTUFBTSxFQUFFLElBQUksQ0FBQyxxQkFBcUI7WUFDbEMsU0FBUyxFQUFFLFlBQVk7U0FDeEIsQ0FBQztRQUNGLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsdUJBQXVCO1FBQ3ZCLG1GQUFtRjtRQUNuRiw0QkFBNEI7UUFDNUIsb0JBQW9CO1FBQ3BCLHFCQUFxQjtRQUNyQiw0QkFBNEI7UUFDNUIsZ0NBQWdDO1FBQ2hDLDREQUE0RDtRQUM1RCxrREFBa0Q7UUFDbEQsd0NBQXdDO1FBQ3hDLFFBQVE7UUFDUixXQUFXO1FBQ1gseUJBQXlCO1FBQ3pCLElBQUk7UUFDSix3QkFBd0I7SUFDMUIsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxzQkFBc0I7UUFDdEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztRQUMvQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLEdBQVE7UUFDckIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM5Qyw4Q0FBOEM7UUFDOUMsb0NBQW9DO1FBRXBDLElBQUksR0FBRyxDQUFDLFlBQVksSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7O2tCQUN2RSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUM7Z0JBQzlDLElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFO2FBQ25FLENBQUM7U0FDSDthQUFNOztrQkFDQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFOztnQkFFaEQsVUFBVSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO2dCQUM5QyxJQUFJLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUU7YUFDdkQsQ0FBQztTQUNIO0lBRUgsQ0FBQzs7Ozs7O0lBSU8sT0FBTyxDQUFDLEtBQWE7O2NBQ3JCLFdBQVcsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFO1FBRWxELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFDLENBQUM7SUFDcEcsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNqQyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQzthQUNsQztZQUNELDBDQUEwQztTQUMzQztRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBUTtRQUNkLElBQUksR0FBRyxDQUFDLDBCQUEwQixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsNEJBQTRCLElBQUksSUFBSSxFQUFFO1lBQ3RGLCtCQUErQjtZQUMvQixJQUFJLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO1FBQ0QsSUFBSSxHQUFHLENBQUMsMEJBQTBCLElBQUksSUFBSSxJQUFJLEdBQUcsQ0FBQyw0QkFBNEIsSUFBSSxJQUFJLEVBQUU7WUFDdEYsSUFBSSxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQztTQUNqQjtRQUNELElBQUksR0FBRyxDQUFDLDBCQUEwQixJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsNEJBQTRCLElBQUksSUFBSSxFQUFFO1lBQ3RGLElBQUksQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDO1lBQ2hCLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDO1NBQ2xCO0lBQ0gsQ0FBQzs7Ozs7SUFDRCxPQUFPLENBQUMsR0FBUTtRQUNkLHdCQUF3QjtRQUN4QixtQkFBbUI7UUFDbkIsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ2YsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUM7WUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUU7WUFDZixJQUFJLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztZQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztTQUNuQjtRQUNELHdCQUF3QjtRQUN4Qix5QkFBeUI7SUFDM0IsQ0FBQzs7Ozs7O0lBRUQsUUFBUSxDQUFDLEdBQVEsRUFBRSxHQUFXOztjQUV0QixPQUFPLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHOztjQUN4QixNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUM7UUFDakQsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7WUFDbEQsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUseUJBQXlCLEVBQUU7U0FDbEQsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxHQUFRO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQzs7Ozs7O0lBR0QseUJBQXlCLENBQUMsR0FBUSxFQUFFLElBQVM7O2NBQ3JDLEtBQUssR0FBUSxFQUFFO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssRUFBRTtZQUN6QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoQztRQUNELCtCQUErQjtRQUMvQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7Ozs7SUFFRCwrQkFBK0IsQ0FBQyxHQUFRLEVBQUUsSUFBUzs7O2NBRTNDLE9BQU8sR0FBRyxFQUFFO1FBQ2xCLG9DQUFvQztRQUNwQyxpQ0FBaUM7UUFDakMsSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksSUFBSSxHQUFHLENBQUMsV0FBVyxJQUFJLElBQUksRUFBRTtZQUN0RCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7UUFDRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLEVBQUU7O2tCQUN4QixPQUFPLEdBQUcsRUFBRTtZQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUNoRSx1Q0FBdUM7Z0JBQ3ZDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7b0JBQ25GLHlEQUF5RDtvQkFDekQsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDNUYsbURBQW1EO3dCQUNuRCxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQy9FO3lCQUFNO3dCQUNMLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDekM7aUJBQ0Y7cUJBQU07b0JBQ0wseUNBQXlDO29CQUN6QyxPQUFPO29CQUNQLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUN2QzthQUNGO1lBQ0QsSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLE9BQU8sRUFBRTtnQkFBRSxPQUFPLENBQUMsSUFBSSxDQUFDLDBCQUEwQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUM7YUFBRTtZQUN0SCxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxFQUFFO2dCQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFOzt3QkFDaEUsUUFBUSxHQUFRLENBQUMsaUVBQWlFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyw4SEFBOEgsQ0FBQztvQkFDbFAsUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3ZCLGlGQUFpRjtpQkFDbEY7cUJBQU07b0JBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckI7YUFDRjtZQUVELGlIQUFpSDtZQUNqSCxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQ3ZCOzs7WUFFRyxHQUFHLEdBQVEsT0FBTztRQUV0QixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTs7a0JBQzNGLE9BQU8sR0FBUSxFQUFFO1lBQ3ZCLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFO2dCQUNuQixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUU7b0JBQ25ELDhGQUE4RjtvQkFDOUYsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzNELCtEQUErRDt3QkFDL0QsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNqRjtpQkFDRjtnQkFDRCxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFBRTthQUVqRDtZQUNELGdDQUFnQztZQUNoQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQ2QsZ0NBQWdDO1NBQ2pDO1FBRUQsa0NBQWtDO1FBQ2xDLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7WUFDdEQsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsR0FBRyxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDOztjQUMxQixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLENBQUMseUJBQXlCLEVBQUUsaUJBQWlCLENBQUM7WUFDMUQsSUFBSSxFQUFFLEVBQUUsY0FBYyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFO1NBQzNDLENBQUM7SUFDSixDQUFDOzs7Ozs7SUFHRCw2QkFBNkIsQ0FBQyxHQUFRLEVBQUUsSUFBUztRQUMvQyx5REFBeUQ7UUFDekQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7O2NBQ2QsSUFBSSxHQUFRLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLFFBQVE7O2NBQ3pDLE1BQU0sR0FBUSxFQUFFO1FBQ3RCLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUM3QixJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksSUFBSSxFQUFFO1lBQzFCLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxDQUFDLFVBQVUsRUFBRTtnQkFDOUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JEO1NBQ0Y7UUFDRCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTs7Z0JBQ3JILE1BQU0sR0FBUSxFQUFFO1lBQ3BCLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDYixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO2dCQUU5QixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO29CQUNsRCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsTUFBTSxDQUFDLEdBQUcsRUFBRTtpQkFDbkMsQ0FBQyxDQUFDOzs7b0JBR0MsT0FBTyxHQUFRLEVBQUU7Z0JBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO2dCQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztnQkFDckIsSUFBSSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTtvQkFDekIsT0FBTyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ3pCO3FCQUFNO29CQUNMLE9BQU8sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDO2lCQUN0Qjs7c0JBQ0ssU0FBUyxHQUFRLEVBQUU7Z0JBQ3pCLHNDQUFzQztnQkFDdEMsSUFBSSxHQUFHLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtvQkFDMUIsS0FBSyxNQUFNLEVBQUUsSUFBSSxHQUFHLENBQUMsVUFBVSxFQUFFO3dCQUMvQixxREFBcUQ7d0JBQ3JELDRCQUE0Qjt3QkFDNUIsZ0RBQWdEO3dCQUNoRCxvR0FBb0c7d0JBQ3BHLFNBQVMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztxQkFDN0Q7b0JBQ0QsSUFBSTtvQkFDSixPQUFPLEdBQUcsU0FBUyxDQUFDO2lCQUdyQjs7b0JBRUcsT0FBTyxHQUFHLEVBQUU7Z0JBQ2hCLG9DQUFvQztnQkFDcEMsaUNBQWlDO2dCQUNqQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLE9BQU8sRUFBRTs7MEJBQ2pCLE9BQU8sR0FBRyxFQUFFO29CQUNsQixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoQixJQUFJLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLE9BQU8sRUFBRTt3QkFDaEMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7NEJBQ3pELG1DQUFtQzs0QkFDbkMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dDQUM1QyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDbEU7aUNBQU07Z0NBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFBRTt5QkFDckM7NkJBQU07NEJBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt5QkFBRTtxQkFDckM7b0JBQ0QsSUFBSSxDQUFDLElBQUksT0FBTyxFQUFFO3dCQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxDQUFDO3FCQUFFO29CQUN6RixJQUFJLENBQUMsSUFBSSxPQUFPLEVBQUU7OzRCQUNaLFFBQVEsR0FBUSxDQUFDLGlFQUFpRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyw4SEFBOEgsQ0FBQzt3QkFDck8sUUFBUSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsUUFBUSxDQUFDLENBQUM7d0JBQzVELE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQ3hCO29CQUNELGlIQUFpSDtvQkFDakgsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFFdkI7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7OzBCQUMzRixPQUFPLEdBQVEsRUFBRTtvQkFDdkIsS0FBSyxNQUFNLENBQUMsSUFBSSxPQUFPLEVBQUU7d0JBQ3ZCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRTs0QkFDbkQsOEZBQThGOzRCQUM5RixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQ0FDL0QsK0RBQStEO2dDQUMvRCxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQ3pGO3lCQUNGO3dCQUNELElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRTs0QkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUFFO3FCQUVyRDtvQkFDRCxnQ0FBZ0M7b0JBQ2hDLE9BQU8sR0FBRyxPQUFPLENBQUM7aUJBRW5CO2dCQUNELHVDQUF1QztnQkFDdkMsaUNBQWlDO2dCQUVqQyxvREFBb0Q7Z0JBQ3BELElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7b0JBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDbEI7Z0JBQ0QsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxhQUFhLENBQUM7O3NCQUNqQyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNoRCxNQUFNLEVBQUUsTUFBTTtvQkFDZCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7b0JBQzNDLElBQUksRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRTtpQkFDL0MsQ0FBQzthQUNIO1lBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTtnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtvQkFDbEQsUUFBUSxFQUFFLElBQUk7b0JBQ2QsSUFBSSxFQUFFLE1BQU07aUJBQ2IsQ0FBQyxDQUFDO2FBQ0o7UUFFSCxDQUFDOzs7O1FBQUUsS0FBSyxDQUFDLEVBQUU7WUFDVCwwQkFBMEI7WUFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO2FBQzVELENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLENBQUMsRUFBQyxDQUFDO1FBQ0gsT0FBTztJQUVULENBQUM7Ozs7OztJQUdELG9CQUFvQixDQUFDLEdBQVEsRUFBRSxJQUFTOzs7WUFFbEMsS0FBSyxHQUFRLEVBQUU7O1lBQ2YsUUFBUSxHQUFRLEVBQUU7UUFDdEIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDcEIsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLElBQUksRUFBRTtZQUN6QixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUU7Z0JBQ3pCLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pFLDhCQUE4QjtnQkFDOUIsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztpQkFBRTtnQkFDNUQsSUFBSSxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUFFLFFBQVEsR0FBRyxRQUFRLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQztpQkFBRTthQUM3RDtZQUNELHFCQUFxQjtTQUN0QjtRQUNELElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksR0FBRyxDQUFDLFNBQVMsSUFBSSxTQUFTLEVBQUU7WUFDdkQsS0FBSyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsS0FBSyxFQUFFO2dCQUN6QixvRUFBb0U7Z0JBQ3BFLDhCQUE4QjtnQkFFOUIsUUFBUSxHQUFHLFFBQVEsR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMzRDtZQUNELHFCQUFxQjtTQUV0QjtRQUNELFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLHdDQUF3QztZQUN4QywyQ0FBMkM7UUFDN0MsQ0FBQyxHQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRVAsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7Ozs7O0lBR0QsUUFBUSxDQUFDLEdBQVEsRUFBRSxHQUFROztjQUNuQixJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsWUFBWTtRQUN4RCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7OztJQUlELFdBQVc7UUFDVCxrQ0FBa0M7UUFDbEMsVUFBVTs7O1FBQUMsR0FBRyxFQUFFOztrQkFDUixPQUFPLEdBQVEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRzs7OztZQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBQztZQUM1RCw2SEFBNkg7O1lBQTdILDZIQUE2SDtZQUM3SCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHlCQUF5QixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7UUFDdkssQ0FBQyxHQUFFLEdBQUcsQ0FBQyxDQUFDO0lBR1YsQ0FBQzs7OztJQUNELGFBQWE7UUFDWCxnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRTs7O2tCQUU3QyxXQUFXLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsTUFBTTs7a0JBQzVDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQzNDLE9BQU8sV0FBVyxLQUFLLE9BQU8sQ0FBQztTQUNoQztJQUNILENBQUM7Ozs7O0lBR0QsWUFBWTtRQUNWLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztZQUN4QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBQyxDQUFDO1FBQ2xFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyQixDQUFDOzs7Ozs7SUFHRCxhQUFhLENBQUMsR0FBUztRQUNyQixJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ1IsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLE1BQU0sQ0FBQztTQUM5RDtRQUNELE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxRQUFRLFFBQVEsR0FBRyxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQztJQUM3RixDQUFDOzs7OztJQUdELFVBQVUsQ0FBQyxLQUFVOztjQUNiLElBQUksR0FBRyxFQUFFO1FBQ2YsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPOzs7O1FBQUMsVUFBVSxHQUFHO1lBQ3RDLElBQUksQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxDQUFDLEVBQUMsQ0FBQztRQUNILE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsV0FBbUI7UUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBRXJFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUU7WUFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQWdCRCxTQUFTLENBQUMsUUFBUSxFQUFFLEdBQUc7UUFFckI7Ozs7OztXQU1HO1FBR0gsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDOzs7Ozs7SUFFRCxVQUFVLENBQUMsU0FBYzs7O2NBRWpCLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDOUMsVUFBVSxFQUFFLENBQUMscUNBQXFDLEVBQUUsYUFBYSxDQUFDO1lBQ2xFLE1BQU0sRUFBRSxNQUFNO1lBQ2QsSUFBSSxFQUFFLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRTtTQUNqQyxDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFDRCxTQUFTLENBQUMsR0FBUTtRQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUM5SCxNQUFNLEdBQVEsRUFBRTtZQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO1lBQ2IseUNBQXlDO1lBQ3pDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDOzs7Ozs7O2tCQU1oQixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO2dCQUNoRCxNQUFNLEVBQUUsTUFBTTtnQkFDZCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxhQUFhLENBQUM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsS0FBSztvQkFDckIsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVM7b0JBQ25DLFFBQVEsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsR0FBRztvQkFDN0MsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO29CQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEdBQUc7b0JBQ3BCLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztpQkFDMUI7YUFDRixDQUFDO1lBQ0YsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7WUFBQyxNQUFNLENBQUMsRUFBRTtnQkFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNuQixDQUFDLEVBQUMsQ0FBQztRQUNMLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBVTs7O1lBRWIsSUFBUztRQUNiLElBQUksR0FBRyxLQUFLLENBQUM7O2NBQ1AsS0FBSyxHQUFRLEVBQUU7O1lBQ2pCLFVBQVUsR0FBUSxFQUFFO1FBRXhCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLE1BQU0sSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUMxSSw2REFBNkQ7WUFDN0QsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1NBQzdDO1FBRUQsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7O2tCQUNoQixLQUFLLEdBQVEsRUFBRTtZQUNyQixJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLFNBQVMsRUFBRTtvQkFDbkMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFO3dCQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUM7cUJBQUU7b0JBQzdDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEtBQUssRUFBRTt3QkFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUFFO2lCQUM5QztnQkFDRCxJQUFJLEdBQUcsSUFBSSxPQUFPLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsMEJBQTBCLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQztpQkFFckU7Z0JBRUQsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO2lCQUVuQztnQkFHRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7OzBCQUM1QixRQUFRLEdBQVEsRUFBRTtvQkFDeEIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ3pCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGtCQUFrQixFQUFFOzRCQUN2QyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksT0FBTyxFQUFFO2dDQUV4RixrRUFBa0U7Z0NBQ2xFLHlCQUF5QjtnQ0FDekIseUJBQXlCO2dDQUN6QiwwQkFBMEI7Z0NBQzFCLCtDQUErQztnQ0FDL0MsUUFBUSxDQUFDLElBQUksQ0FBQywwQkFBMEIsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7Z0NBQ3BFLHNEQUFzRDs2QkFHdkQ7NEJBQ0QsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLE9BQU8sRUFBRTtnQ0FDeEYsa0VBQWtFO2dDQUNsRSxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7NkJBS3pEOzRCQUNELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQUU7Z0NBQ3pDLGtFQUFrRTtnQ0FDbEUsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO29DQUNyQyxLQUFLLE1BQU0sSUFBSSxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTt3Q0FDL0IsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUM7cUNBQzlFO2lDQUVGOzZCQUdGO3lCQUNGO3FCQUVGO29CQUNELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsUUFBUSxDQUFDO2lCQUM1QjthQUNGO1NBQ0Y7UUFFRCxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtnQkFDcEMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUNwQjtTQUNGO1FBRUQsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDekMsMENBQTBDO1lBQzFDLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVDOztZQUNHLEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUMvQixnQ0FBZ0M7UUFDaEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7O2tCQUMzRixPQUFPLEdBQVEsRUFBRTtZQUN2QixLQUFLLE1BQU0sQ0FBQyxJQUFJLEdBQUcsRUFBRTtnQkFDbkIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFO29CQUNuRCw4RkFBOEY7b0JBQzlGLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUMzRCwrREFBK0Q7d0JBQy9ELE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDakY7aUJBQ0Y7Z0JBQ0QsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxFQUFFO29CQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQUU7YUFDakQ7WUFDRCxnQ0FBZ0M7WUFDaEMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUNkLGdDQUFnQztTQUNqQzs7Y0FDSyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hELE1BQU0sRUFBRSxNQUFNO1lBQ2QsU0FBUyxFQUFFLEtBQUs7WUFDaEIsU0FBUyxFQUFFLFFBQVE7WUFDbkIsVUFBVSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsYUFBYSxDQUFDO1lBQzlDLElBQUksRUFBRSxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFO1NBQ25FLENBQUM7SUFFSixDQUFDOzs7Ozs7SUFFRCxZQUFZLENBQUMsSUFBUzs7Y0FDZCxFQUFFLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEVBQUUsVUFBVSxFQUFFLENBQUMsb0JBQW9CLEVBQUUscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFLENBQUM7UUFFaEosSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDcEYsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dCQUNsQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVM7Ozs7Z0JBQUMsR0FBRyxDQUFDLEVBQUU7O3dCQUNwTCxNQUFNLEdBQVEsRUFBRTtvQkFDcEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztvQkFDYixJQUFJLE1BQU0sQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO3dCQUU5QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7NEJBQzVCLHdFQUF3RTs0QkFDeEUsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFFO2dDQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDOzZCQUN0Qzt5QkFDRjt3QkFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDakMsb0JBQW9CO3dCQUNwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7OzhCQUU3RyxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFOzRCQUNoRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7NEJBQ2hELElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFO3lCQUMxRSxDQUFDO3FCQUVIO29CQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7NEJBQ2xELFFBQVEsRUFBRSxJQUFJOzRCQUNkLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtnQkFFSCxDQUFDOzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNULDBCQUEwQjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDbEQsUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO3FCQUM1RCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7YUFDSjtZQUNELHdCQUF3QjtRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUVMLENBQUM7Ozs7Ozs7SUFHRCxtQkFBbUIsQ0FBQyxHQUFRLEVBQUUsWUFBaUI7UUFDN0MseURBQXlEO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUM7WUFDM0IsTUFBTSxFQUFFLG1CQUFtQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFO2dCQUN4RyxJQUFJLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxZQUFZO2FBQ2pDO1NBQ0YsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFHRCxnQkFBZ0IsQ0FBQyxJQUFTOzs7OztZQUlwQixTQUFTLEdBQVEsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHO1FBQzdDLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDM0MsU0FBUyxHQUFHLFNBQVMsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDcEU7UUFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFHLDBHQUEwRzs7O2NBRTVLLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7O1lBQ2hELE1BQU0sRUFBRSxNQUFNO1lBQ2QsVUFBVSxFQUFFLG1CQUFtQjtZQUMvQixJQUFJLEVBQUUsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFO1NBQ3pFLENBQUM7SUFHSixDQUFDOzs7O0lBSUQsb0JBQW9COztjQUNaLEdBQUcsR0FBUSxFQUFFOztZQUNmLENBQU07UUFDVixLQUFLLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRTtZQUVqQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQzFDOzs7O2NBR0ssRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUUsQ0FBQztRQUVyRixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUVwRixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Ozs7c0JBR1osU0FBUyxHQUFRLE1BQU0sQ0FBQyxHQUFHO2dCQUNqQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7d0JBQ3ZNLE1BQU0sR0FBUSxFQUFFO29CQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNiLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7d0JBQzlCLEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTs0QkFDNUIsd0VBQXdFOzRCQUN4RSxJQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtnQ0FDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDOzZCQUNwQzt5QkFDRjt3QkFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dCQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksY0FBYyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDakMsb0JBQW9CO3dCQUVwQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLHNCQUFzQixFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7OEJBRXJILFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ2hELFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGFBQWEsQ0FBQzs0QkFDOUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLCtCQUErQixFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUU7eUJBQzFFLENBQUM7cUJBRUg7Z0JBRUgsQ0FBQzs7OztnQkFBRSxLQUFLLENBQUMsRUFBRTtvQkFDVCwwQkFBMEI7b0JBQzFCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7d0JBQ2xELFFBQVEsRUFBRSxJQUFJO3dCQUNkLElBQUksRUFBRSxFQUFFLFlBQVksRUFBRSxtQ0FBbUMsRUFBRTtxQkFDNUQsQ0FBQyxDQUFDO2dCQUNMLENBQUMsRUFBQyxDQUFDO2FBQ0o7WUFDRCx3QkFBd0I7UUFDMUIsQ0FBQyxFQUFDLENBQUM7SUFFTCxDQUFDOzs7O0lBRUQsY0FBYzs7Y0FDTixTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ2hELFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGlCQUFpQixDQUFDO1lBQ2xELElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsZ0ZBQWdGO2dCQUN6RixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNGLENBQUM7O2NBQ0ksR0FBRyxHQUFRLEVBQUU7O1lBQ2YsQ0FBTTtRQUNWLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFO1lBRWpDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDMUM7UUFFRCxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsU0FBUzs7OztRQUFDLE1BQU0sQ0FBQyxFQUFFO1lBRXpDLElBQUksTUFBTSxJQUFJLEtBQUssRUFBRTtnQkFDbkIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7d0JBQ3ZMLE1BQU0sR0FBUSxFQUFFO29CQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNiLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7d0JBQzlCLEtBQUssTUFBTSxDQUFDLElBQUksR0FBRyxFQUFFOzRCQUNuQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTTs7Ozs0QkFBQyxPQUFPLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUM7eUJBQ3RFO3dCQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDOzs4QkFFL0csU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTs0QkFDaEQsVUFBVSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsaUJBQWlCLENBQUM7NEJBQ2xELElBQUksRUFBRSxFQUFFLE9BQU8sRUFBRSxvQ0FBb0MsRUFBRSxjQUFjLEVBQUUsS0FBSyxFQUFFO3lCQUMvRSxDQUFDO3FCQUVIO29CQUNELElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxPQUFPLEVBQUU7d0JBQzVCLElBQUksQ0FBQyxTQUFTLENBQUMsaUJBQWlCLENBQUMsaUJBQWlCLEVBQUU7NEJBQ2xELFFBQVEsRUFBRSxJQUFJOzRCQUNkLElBQUksRUFBRSxNQUFNO3lCQUNiLENBQUMsQ0FBQztxQkFDSjtnQkFFSCxDQUFDOzs7O2dCQUFFLEtBQUssQ0FBQyxFQUFFO29CQUNULDBCQUEwQjtvQkFDMUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDbEQsUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO3FCQUM1RCxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxFQUFDLENBQUM7YUFFSjtZQUNELHdCQUF3QjtRQUMxQixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7O0lBR0QsVUFBVSxDQUFDLElBQVM7UUFDbEIscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWiw2RkFBNkY7UUFDN0YsK0JBQStCO1FBQy9CLHFCQUFxQjtRQUNyQiw4QkFBOEI7UUFDOUIsaUNBQWlDOzs7Ozs7Ozs7Y0FHM0IsU0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNoRCxVQUFVLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxlQUFlLENBQUM7WUFDaEQsTUFBTSxFQUFFLE1BQU07WUFDZCxJQUFJLEVBQUU7Z0JBQ0osT0FBTyxFQUFFLDhFQUE4RTtnQkFDdkYsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDRixDQUFDO1FBRUYsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUN6QyxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7Z0JBQ25CLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7d0JBQzNLLE1BQU0sR0FBUSxFQUFFO29CQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNiLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7d0JBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNOzs7O3dCQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxFQUFDLENBQUM7d0JBQ3ZFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7d0JBQ3ZELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO3dCQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO3dCQUMzQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNqQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7d0JBQ2pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzs7OEJBQ3ZHLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7NEJBQ2hELFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLGVBQWUsQ0FBQzs0QkFDaEQsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLGNBQWMsRUFBRSxLQUFLLEVBQUU7eUJBQzVFLENBQUM7cUJBQ0g7b0JBQ0QsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE9BQU8sRUFBRTt3QkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTs0QkFDbEQsUUFBUSxFQUFFLElBQUk7NEJBQ2QsSUFBSSxFQUFFLE1BQU07eUJBQ2IsQ0FBQyxDQUFDO3FCQUNKO2dCQUVILENBQUM7Ozs7Z0JBQUUsS0FBSyxDQUFDLEVBQUU7b0JBQ1QsMEJBQTBCO29CQUMxQixJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO3dCQUNsRCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7cUJBQzVELENBQUMsQ0FBQztnQkFDTCxDQUFDLEVBQUMsQ0FBQzthQUVKO1lBQ0Qsd0JBQXdCO1FBQzFCLENBQUMsRUFBQyxDQUFDO0lBRUwsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsSUFBUztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQzs7Ozs7O0lBR0QsU0FBUyxDQUFDLEtBQVUsRUFBRSxJQUFTO1FBQzdCLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDL0IsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7O0lBSUQsU0FBUztRQUNQLDhEQUE4RDtRQUM5RCxxREFBcUQ7UUFDckQsZ0VBQWdFOzs7Ozs7Y0FJMUQsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxpQkFBaUI7O2NBQ25ELEtBQUssR0FBRyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUTs7WUFDakUsTUFBVzs7WUFDWCxTQUFjOztjQUNaLFVBQVUsR0FBUSxFQUFFO1FBQzFCLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDZix3RkFBd0Y7UUFDeEYseURBQXlEO1FBRXpELDRFQUE0RTtRQUM1RSxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDNUIsMkRBQTJEO1lBQzNELElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQzdFLFVBQVUsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUM7YUFDdEU7U0FDRjs7WUFFRyxVQUFVLEdBQVEsRUFBRTtRQUV4QixtQkFBbUI7UUFDbkIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFOztnQkFDM0IsY0FBYyxHQUFRLEVBQUU7WUFFNUIsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFOztzQkFFNUIsRUFBRSxHQUFRLEVBQUU7Z0JBQ2xCLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDM0QsOERBQThEO2dCQUM5RCxJQUFJLGNBQWMsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFO29CQUFFLGNBQWMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO2lCQUFFO2dCQUM1RCxtREFBbUQ7Z0JBQ25ELDJCQUEyQjtnQkFFM0IsY0FBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7YUFFN0I7WUFDRCxJQUFJLFVBQVUsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUFFLFVBQVUsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO2FBQUU7WUFDdEQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7OztnQkFHakMsU0FBYztZQUNsQixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxJQUFJLElBQUksSUFBSSxPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxJQUFJLFdBQVcsRUFBRTtnQkFDbEcsU0FBUyxHQUFHLENBQUMsQ0FBQzthQUNmO2lCQUFNO2dCQUNMLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQzthQUM1QztZQUNELHlIQUF5SDtZQUV6SCwwQ0FBMEM7U0FFM0M7Ozs7Y0FTSyxZQUFZLEdBQVEsRUFBRTtRQUM1QixLQUFLLElBQUksRUFBRSxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNwQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUU7O3NCQUN6QyxFQUFFLEdBQVEsRUFBRTtnQkFDbEIsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztnQkFDdEcsSUFBSSxZQUFZLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRTtvQkFBRSxZQUFZLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztpQkFBRTtnQkFDeEQsK0JBQStCO2dCQUMvQixZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzthQUMzQjtTQUNGO1FBQ0QscURBQXFEO1FBR3JELElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksV0FBVyxFQUFFO1lBQ3ZELDZEQUE2RDtZQUM3RCxtREFBbUQ7WUFDbkQsb0VBQW9FO1lBRXBFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUN2QyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO2dCQUM1Qix5Q0FBeUM7Z0JBRXpDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQywyQkFBMkI7Z0JBQzNCLHlCQUF5QjthQUMxQjtTQUVGO2FBQU07WUFDTCxJQUFJLENBQUMsWUFBWSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztTQUN4Qzs7WUFDRyxZQUFZLEdBQVcsRUFBRTtRQUU3QixZQUFZLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRTlKLHFFQUFxRTtRQUVyRSxJQUFJLENBQUMsYUFBYSxHQUFHLFlBQVksQ0FBQztRQUNsQyx5RUFBeUU7UUFDekUsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7WUFDM0IsMkJBQTJCO1lBQzNCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztZQUNoQyx5QkFBeUI7U0FDMUI7UUFDRCxvSEFBb0g7UUFDcEgsK0RBQStEO1FBQy9ELGtFQUFrRTtRQUNsRSxnQ0FBZ0M7UUFDaEMsMkJBQTJCO1FBQzNCLG1EQUFtRDtRQUNuRCxvQkFBb0I7UUFDcEIsK0JBQStCO1FBQy9CLDRCQUE0QjtRQUM1QixrREFBa0Q7UUFDbEQscUdBQXFHO1FBQ3JHLGFBQWE7UUFDYiw0RkFBNEY7UUFFNUYsc0dBQXNHO1FBQ3RHLHFDQUFxQztRQUNyQyxlQUFlO1FBQ2YsNERBQTREO1FBRTVELFFBQVE7UUFFUixNQUFNO1FBQ04sSUFBSTtRQUNKLDJLQUEySztRQUMzSyxrRUFBa0U7UUFDbEUsSUFBSSxPQUFPLElBQUksQ0FBQyxxQkFBcUIsSUFBSSxXQUFXLEVBQUU7WUFDcEQsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFM0MsTUFBTSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztZQUNwQyxJQUFJLE9BQU8sWUFBWSxJQUFJLFdBQVcsSUFBSSxZQUFZLElBQUksSUFBSSxFQUFFO2dCQUM5RCxNQUFNLENBQUMsZUFBZSxHQUFHLFlBQVksQ0FBQztnQkFDdEMsNEJBQTRCO2dCQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksQ0FBQyxFQUFFO29CQUM1QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7b0JBQzNCLDJCQUEyQjtvQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO29CQUNoQyx5QkFBeUI7aUJBQzFCO2FBQ0Y7U0FDRjthQUFNO1lBQ0wsTUFBTSxHQUFHO2dCQUNQLFNBQVMsRUFBRTtvQkFDVCxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLO29CQUM5QixJQUFJLEVBQUUsQ0FBQztpQkFDUjtnQkFDRCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSztvQkFDN0IsSUFBSSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSTtpQkFDNUI7Z0JBQ0QsZUFBZSxFQUFFLFlBQVk7YUFDOUIsQ0FBQztTQUNIO1FBR0QsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTtnQkFDbEQsUUFBUSxFQUFFLElBQUk7Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLGlDQUFpQyxFQUFFO2FBQzFELENBQUMsQ0FBQztZQUNILE9BQU87U0FFUjthQUFNO1lBQ0wsaUdBQWlHO1lBQ2pHLFVBQVU7WUFDVixJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBRXBCLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxDQUFDLEVBQUU7Z0JBQzVCLG1EQUFtRDtnQkFDbkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUM7YUFHekI7WUFDRCxpQ0FBaUM7WUFFakMsK0RBQStEO1lBRS9ELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7O29CQUNySCxNQUFNLEdBQVEsRUFBRTtnQkFDcEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7Z0JBRXpELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFaEcsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDL0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FDMUI7d0JBQ0UsTUFBTSxFQUFFLFFBQVE7d0JBQ2hCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTt3QkFDNUIsZUFBZSxFQUFFLFlBQVk7d0JBQzdCLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDMUIsR0FBRyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU07d0JBQzlCLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTt3QkFDakMsYUFBYSxFQUFFLElBQUksQ0FBQyxVQUFVO3dCQUM5QixVQUFVLEVBQUUsSUFBSSxDQUFDLGtCQUFrQjt3QkFDbkMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUTtxQkFDdEMsQ0FBQyxDQUFDO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO3dCQUNsRCxRQUFRLEVBQUUsSUFBSTt3QkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7cUJBQ3BELENBQUMsQ0FBQztpQkFDSjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDO3dCQUMzQixNQUFNLEVBQUUsUUFBUTt3QkFDaEIsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZO3dCQUM1QixlQUFlLEVBQUUsWUFBWTt3QkFDN0IsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXO3dCQUMxQixHQUFHLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTTt3QkFDOUIsYUFBYSxFQUFFLElBQUksQ0FBQyxhQUFhO3dCQUNqQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFVBQVU7d0JBQzlCLFVBQVUsRUFBRSxJQUFJLENBQUMsa0JBQWtCO3dCQUNuQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRO3dCQUNyQyxJQUFJLEVBQUUsV0FBVztxQkFDbEIsQ0FBQyxDQUFDO29CQUNILHNCQUFzQjtvQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxpQkFBaUIsRUFBRTt3QkFDbEQsUUFBUSxFQUFFLElBQUk7d0JBQ2QsSUFBSSxFQUFFLEVBQUUsWUFBWSxFQUFFLGdDQUFnQyxFQUFFO3FCQUN6RCxDQUFDLENBQUM7aUJBQ0o7Z0JBRUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLDhDQUE4QztnQkFDOUMsb0NBQW9DO1lBQ3RDLENBQUMsRUFBQyxDQUFDO1lBRUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLE1BQU0sQ0FBQyxDQUFDLFNBQVM7Ozs7WUFBQyxHQUFHLENBQUMsRUFBRTs7b0JBQ3RILE1BQU0sR0FBUSxFQUFFO2dCQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztnQkFFckQsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixJQUFJLENBQUMsMkJBQTJCLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN2RyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDaEcsSUFBSSxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsRUFBRTtvQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztpQkFBRTtxQkFBTTtvQkFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztpQkFBRTtnQkFDM0UsK0JBQStCO2dCQUMvQiw4Q0FBOEM7Z0JBQzlDLG9DQUFvQztZQUN0QyxDQUFDLEVBQUMsQ0FBQztTQUNKO1FBRUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDOUIsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsR0FBUTtRQUNoQixPQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN0QixDQUFDOzs7Ozs7O0lBSUQsd0JBQXdCLENBQUMsSUFBUyxFQUFFLEtBQUs7O1lBQ25DLEtBQUssR0FBRyxDQUFDOzs7Y0FFUCxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsRUFBRSxVQUFVLEVBQUUscUJBQXFCLEVBQUUsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUM7UUFDL0csRUFBRSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLFNBQVM7Ozs7UUFBQyxNQUFNLENBQUMsRUFBRTtZQUNsQyxtREFBbUQ7WUFDbkQsSUFBSSxNQUFNLElBQUksSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxFQUFFO2dCQUMxQyxLQUFLLEdBQUcsQ0FBQyxDQUFDOztvQkFDTixVQUFVLEdBQUcsQ0FBQztnQkFFbEIsaURBQWlEO2dCQUNqRCwyREFBMkQ7Z0JBRTNELElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3BDLFVBQVUsR0FBRyxDQUFDLENBQUM7b0JBQ2YsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7d0JBQ25DLElBQUksSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTs0QkFDeEQsS0FBSyxHQUFHLENBQUMsQ0FBQzs0QkFDVixVQUFVLEdBQUcsQ0FBQyxDQUFDOzRCQUVmLHVDQUF1Qzs0QkFDdkMsS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsWUFBWSxFQUFFO2dDQUNqQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7NkJBQzdEOzRCQUNELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRTtnQ0FDbkIsMENBQTBDO2dDQUMxQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7NkJBQ2xCOzRCQUNELE9BQU87eUJBQ1I7NkJBQU07NEJBQ0wsS0FBSyxHQUFHLENBQUMsQ0FBQTt5QkFDVjtxQkFDRjtvQkFDRCx5Q0FBeUM7b0JBRXpDLDJEQUEyRDtvQkFFM0QsSUFBSSxLQUFLLElBQUksQ0FBQyxFQUFFO3dCQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7d0JBQ2xHLFVBQVUsR0FBRyxDQUFDLENBQUM7cUJBQ2hCO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7b0JBQ2xHLFVBQVUsR0FBRyxDQUFDLENBQUM7aUJBQ2hCO2dCQUVELDBDQUEwQztnQkFFMUMsSUFBSSxVQUFVLElBQUksQ0FBQyxFQUFFO29CQUNuQiwwQ0FBMEM7b0JBQzFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztpQkFDbEI7YUFHRjtRQUNILENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7Ozs7O0lBSUQsc0JBQXNCLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNuQyw4Q0FBOEM7UUFDOUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGdFQUFnRTtRQUVoRSxzREFBc0Q7UUFDdEQsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFO1lBQ2xELElBQUksSUFBSSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRTtnQkFDN0QsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDMUQ7U0FDRjtRQUVELDJGQUEyRjtJQUM3RixDQUFDOzs7Ozs7SUFNRCxlQUFlLENBQUMsVUFBZTs7Y0FDdkIsSUFBSSxHQUFHLCtDQUErQyxHQUFHLFVBQVU7Ozs7O2NBRW5FLElBQUksR0FBUSxFQUFFLE1BQU0sRUFBRSxxQkFBcUIsRUFBRSxTQUFTLEVBQUUsRUFBRSxlQUFlLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFO1FBQzVILDhCQUE4QjtRQUM5QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDLFNBQVM7Ozs7UUFBQyxRQUFRLENBQUMsRUFBRTs7a0JBQ2xHLE1BQU0sR0FBUSxRQUFROzs7a0JBRXRCLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hELFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQztnQkFDN0MsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsSUFBSSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsTUFBTSxFQUFFO2FBQzdDLENBQUM7UUFDSixDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7OztZQWx1RkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxhQUFhO2dCQUN2Qiwwc3ZEQUFvQztnQkFFcEMsVUFBVSxFQUFFO29CQUNWLE9BQU8sQ0FBQyxjQUFjLEVBQUU7d0JBQ3RCLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDNUQsS0FBSyxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQzt3QkFDekMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO3FCQUN0RixDQUFDO2lCQUNIOzthQUNGOzs7O1lBdENRLFVBQVU7WUFDVixTQUFTO1lBQ1QsY0FBYztZQUNkLFdBQVc7WUFDd0QsTUFBTTtZQVhoRix3QkFBd0I7WUFHeEIsZ0JBQWdCO1lBV1QsVUFBVTtZQUNWLFlBQVk7WUFRUSxXQUFXO1lBcEI2QyxVQUFVO1lBYXRGLHdCQUF3Qjs7O2lDQWlIOUIsTUFBTTt1Q0FFTixNQUFNOzhCQUtOLEtBQUs7bUNBS0wsS0FBSzs4QkFTTCxLQUFLOzBDQWNMLEtBQUs7d0JBSUwsS0FBSzt1Q0FlTCxLQUFLO3dCQVlMLEtBQUs7MkJBS0wsS0FBSztpQ0FLTCxLQUFLO3VCQUlMLEtBQUs7bUNBTUwsS0FBSztrQkFJTCxLQUFLOzZCQUlMLEtBQUs7dUJBSUwsS0FBSzt5QkFJTCxLQUFLO3NCQU1MLEtBQUs7eUJBdUNMLEtBQUs7NkJBS0wsS0FBSzttQkFLTCxLQUFLOzhCQUlMLEtBQUs7Z0NBSUwsS0FBSzt5QkFLTCxLQUFLO2tDQUtMLEtBQUs7NkJBS0wsS0FBSzs2QkFLTCxLQUFLO3FCQUlMLEtBQUs7MEJBUUwsS0FBSzt1QkFNTCxLQUFLO3dCQU1MLEtBQUs7eUJBS0wsS0FBSzt3QkFLTCxLQUFLOytCQU9MLEtBQUs7aUNBTUwsS0FBSzttQkFzQ0wsU0FBUyxTQUFDLE9BQU87d0JBQ2pCLFNBQVMsU0FBQyxZQUFZOzs7O0lBald2Qix3Q0FBNkI7O0lBQzdCLDJDQUErQjs7SUFDL0IscUNBQThCOztJQUM5Qix5Q0FLQzs7SUFDRCwrQ0FBZ0M7O0lBQ2hDLHFDQUFzQjs7SUFDdEIsMENBQStCOztJQUMvQix3Q0FBa0Q7O0lBQ2xELG1DQUFvQjs7SUFDcEIseUNBQW1COztJQUNuQiw4Q0FBd0I7O0lBQ3hCLDBEQUFvQzs7SUFDcEMsd0NBQWtCOztJQUNsQixpREFBMkI7O0lBQzNCLG1EQUE2Qjs7SUFDN0Isa0NBQVk7O0lBQ1osNkNBQXVCOztJQUN2Qix5Q0FBMEI7O0lBQzFCLG9DQUFxQjs7SUFDckIsd0NBQWtCOztJQUNsQix3Q0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLG1DQUFhOztJQUNiLHVDQUFpQjs7SUFDakIsOENBQXdCOztJQUN4QixnREFBMEI7O0lBQzFCLDZDQUF1Qjs7SUFDdkIsd0NBQWtCOztJQUNsQixxQ0FBZTs7SUFDZiw2Q0FBdUI7O0lBQ3ZCLGtEQUE0Qjs7SUFDNUIsdURBQWlDOztJQUNqQyw2Q0FBdUI7O0lBQ3ZCLHFDQUFlOztJQUNmLHlDQUFtQjs7SUFDbkIseUNBQW1COztJQUNuQixtQ0FBa0I7O0lBQ2xCLDJDQUEwQjs7SUFDMUIsZ0RBQStCOztJQUMvQixtQ0FBa0I7O0lBQ2xCLG1DQUFrQjs7SUFDbEIscUNBQW1COztJQUNuQixzQ0FBcUI7O0lBQ3JCLDZCQUFjOztJQUNkLHNDQUE0Qjs7SUFDNUIsd0NBQThCOztJQUM5QiwyQ0FBNEI7O0lBQzVCLGtDQUF3Qjs7SUFDeEIsdUNBQTZCOztJQUM3Qiw4QkFBdUI7O0lBQ3ZCLCtCQUF3Qjs7SUFDeEIsZ0NBQXlCOztJQUN6QiwrQkFBd0I7O0lBQ3hCLDBDQUFtQzs7SUFDbkMscUNBQXNCOztJQUN0QixtREFBNkI7O0lBQzdCLCtDQUFxQzs7SUFDckMseUNBQStCOztJQUMvQiwyQ0FBaUM7O0lBQ2pDLHlDQUFzQzs7SUFDdEMsNENBQWlEOztJQUNqRCw0Q0FBeUM7O0lBQ3pDLDJDQUF3Qzs7SUFDeEMsMkNBQWlDOztJQUdqQyxpQ0FBZ0M7O0lBQ2hDLGdDQUE0Qjs7SUFDNUIsaUNBQVc7O0lBQ1gsdUNBQWlCOztJQUdqQix1Q0FBeUI7O0lBQ3pCLHdDQUF1Qjs7SUFDdkIsOENBQTBDOztJQUMxQywwQ0FBdUM7O0lBRXZDLDhDQUF1RDs7SUFFdkQsb0RBQTZEOztJQUM3RCw2Q0FBOEI7O0lBQzlCLHlDQUF3Qjs7SUFDeEIseUNBQXdCOztJQUN4QiwyQ0FBaUM7O0lBNkNqQywwQ0FBMkI7O0lBQzNCLCtDQUFnQzs7SUFDaEMsOENBQStCOztJQXFEL0IsMENBQTJCOztJQUMzQiw4Q0FBMEM7O0lBMkkxQywyQ0FBcUI7O0lBSXJCLHVDQUFzQjs7SUFDdEIsaURBQWtDOztJQUNsQyxzQ0FBaUM7O0lBQ2pDLDRDQUFnQzs7SUFDaEMsdUNBQTJCOztJQUMzQixrREFBc0M7O0lBQ3RDLHFDQUFvQjs7SUFDcEIsc0NBQWdCOztJQUNoQixnREFBK0I7O0lBQy9CLGtEQUFpQzs7SUFDakMsZ0RBQStCOztJQUMvQixnREFBK0I7O0lBQy9CLG9DQUFjOztJQUNkLDZCQUFjOztJQUNkLG1DQUFxQjs7SUFDckIscUNBQTJCOztJQUMzQiw0Q0FBa0M7O0lBRWxDLHNDQUFvQzs7SUFFcEMsZ0NBQWtDOztJQUNsQyxxQ0FBaUQ7O0lBRWpELGtDQUFZOztJQUVaLHdDQUFrQzs7SUFDbEMsOENBQXdDOztJQUN4Qyx1Q0FBaUM7O0lBQ2pDLHlDQUFtQzs7SUFDbkMsNkNBQXNCOztJQUN0Qiw4Q0FBa0M7O0lBQ2xDLHFDQUFzQjs7SUFDdEIsMkNBQXlEOztJQUN6RCx3Q0FBc0Q7O0lBSXRELGlDQUF1Qjs7SUFpTHZCLGtDQUF3Qjs7SUFoTFosdUNBQThCOztJQUFFLGtDQUF3Qjs7SUFDbEUsdUNBQWtDOztJQUNsQyw4QkFBc0I7Ozs7O0lBQ3RCLGtDQUFzQjs7Ozs7SUFDdEIsb0NBQTBDOzs7OztJQUMxQyxxQ0FBbUM7O0lBQ25DLGlDQUF3Qjs7SUFDeEIscUNBQThCOzs7OztJQUM5QixxQ0FBOEI7Ozs7O0lBQzlCLHVDQUErQjs7SUFDL0IsNkNBQWtEOztBQWsyRXRELE1BQU0sT0FBTyxhQUFhOzs7Ozs7OztJQUV4QixZQUNTLFdBQXVCLEVBRXZCLFNBQXNDLEVBQ2IsSUFBUyxFQUFTLFNBQXVCLEVBQVMsTUFBaUI7UUFINUYsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFFdkIsY0FBUyxHQUFULFNBQVMsQ0FBNkI7UUFDYixTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVMsY0FBUyxHQUFULFNBQVMsQ0FBYztRQUFTLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDbkcsMkdBQTJHO1FBQzNHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxlQUFlLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxVQUFVLENBQUMsS0FBVTs7OztjQUdiLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtZQUNuRCxNQUFNLEVBQUUsTUFBTTtZQUNkLFVBQVUsRUFBRSxDQUFDLGlCQUFpQixFQUFFLG9CQUFvQixDQUFDO1lBQ3JELFlBQVksRUFBRSxJQUFJO1lBQ2xCLFVBQVU7WUFDViwyQkFBMkI7WUFDM0IseUNBQXlDO1lBQ3pDLG1EQUFtRDtZQUNuRCxtQ0FBbUM7WUFDbkMsMEJBQTBCO1lBQzFCLDhCQUE4QjtZQUM5QixJQUFJO1NBQ0wsQ0FBQztRQUNGLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsTUFBTSxDQUFDLEVBQUU7WUFDekMsZ0NBQWdDO1lBQ2hDLElBQUksT0FBTyxNQUFNLElBQUksV0FBVyxJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksV0FBVyxJQUFJLE1BQU0sQ0FBQyxRQUFRLElBQUksRUFBRSxFQUFFOztzQkFDOUYsTUFBTSxHQUFRO29CQUVsQixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRztvQkFDekIsS0FBSztvQkFDTCw0QkFBNEI7b0JBQzVCLGlDQUFpQztpQkFDbEM7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUMsU0FBUzs7OztnQkFBQyxHQUFHLENBQUMsRUFBRTs7d0JBQzNILE1BQU0sR0FBUSxFQUFFO29CQUNwQixNQUFNLEdBQUcsR0FBRyxDQUFDO29CQUNiLG9DQUFvQztvQkFDcEMsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTt3QkFDOUIsbUlBQW1JO3dCQUNuSSwyQkFBMkI7d0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztxQkFDM0I7b0JBQ0QsK0JBQStCO29CQUMvQiw4Q0FBOEM7b0JBQzlDLG9DQUFvQztnQkFFdEMsQ0FBQyxFQUFDLENBQUM7YUFDSjtRQUNILENBQUMsRUFBQyxDQUFDO1FBRUgsSUFBSTtJQUNOLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04saUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLEVBQUUsRUFBRTs7a0JBQ3BELE1BQU0sR0FBUTtnQkFFbEIsRUFBRSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUc7Z0JBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVE7Z0JBQ3hCLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJO2FBQzlCO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1lBQ3pCLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxNQUFNLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7O29CQUN4SCxNQUFNLEdBQVEsRUFBRTtnQkFDcEIsTUFBTSxHQUFHLEdBQUcsQ0FBQztnQkFDYixvQ0FBb0M7Z0JBQ3BDLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzlCLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxFQUFFO3dCQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztxQkFBRTtvQkFDNUQsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztvQkFDek0sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO29CQUN4QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7aUJBQzFCO2dCQUNELDJDQUEyQztnQkFDM0MsOENBQThDO2dCQUM5QyxvQ0FBb0M7WUFFdEMsQ0FBQyxFQUFDLENBQUM7U0FDSjthQUFNO1lBQ0wsOEJBQThCO1lBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLGlCQUFpQixFQUFFO2dCQUN2RCxRQUFRLEVBQUUsSUFBSTtnQkFDZCxJQUFJLEVBQUUsRUFBRSxZQUFZLEVBQUUsMkJBQTJCLEVBQUU7YUFDcEQsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxHQUFRO1FBQ2hCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7Ozs7Ozs7SUFDRCxXQUFXLENBQUMsU0FBYyxFQUFFLElBQVMsRUFBRSxPQUFZO1FBQ2pELEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO1lBQ3BCLFNBQVMsR0FBRyxTQUFTLEdBQUcsR0FBRyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUVoRDtRQUNELE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7WUEvR0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6QixtdVJBQWtDO2FBQ25DOzs7O1lBcndGUSxVQUFVO1lBQ0MsWUFBWTs0Q0Eyd0YzQixNQUFNLFNBQUMsZUFBZTtZQXB3RmxCLFlBQVk7WUFQWixTQUFTOzs7O0lBd3dGZCxvQ0FBOEI7O0lBRTlCLGtDQUE2Qzs7SUFDN0MsNkJBQXlDOztJQUFFLGtDQUE4Qjs7SUFBRSwrQkFBd0I7OztBQTZHdkcsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7SUFDM0IsWUFBbUIsU0FBeUMsRUFBa0MsSUFBUztRQUFwRixjQUFTLEdBQVQsU0FBUyxDQUFnQztRQUFrQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQ3JHLHFDQUFxQztJQUN2QyxDQUFDOzs7O0lBQ0QsU0FBUztRQUNQLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFDRCxnQkFBZ0IsQ0FBQyxLQUFVO1FBQ3pCLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDNUMsQ0FBQzs7O1lBYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw4QkFBOEI7Z0JBQ3hDLGduQkFBZ0Q7YUFDakQ7Ozs7WUF2M0ZtQixZQUFZOzRDQXkzRmlDLE1BQU0sU0FBQyxlQUFlOzs7O0lBQXpFLHFDQUFnRDs7SUFBRSxnQ0FBeUM7O0FBa0J6RyxNQUFNLE9BQU8sV0FBVzs7Ozs7SUFDdEIsWUFBb0IsY0FBOEMsRUFBd0MsSUFBUztRQUEvRixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0M7UUFBd0MsU0FBSSxHQUFKLElBQUksQ0FBSztRQUNqSCxxQ0FBcUM7SUFDdkMsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsR0FBUTtRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ25DLENBQUM7OztZQVhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsMFZBQWdDO2FBQ2pDOzs7O1lBejRGd0IsaUJBQWlCOzRDQTI0RjZCLE1BQU0sU0FBQyxxQkFBcUI7Ozs7Ozs7SUFBckYscUNBQXNEOztJQUFFLDJCQUErQzs7QUFjckgsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7O0lBYy9CLFlBQW9CLFNBQTZDLEVBQWtDLElBQVMsRUFBUyxVQUFzQjtRQUF2SCxjQUFTLEdBQVQsU0FBUyxDQUFvQztRQUFrQyxTQUFJLEdBQUosSUFBSSxDQUFLO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQVpwSSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDM0IsaUJBQVksR0FBUSxFQUFFLENBQUM7UUFDdkIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixrQkFBYSxHQUFRLEVBQUUsQ0FBQztRQUN4QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQUM5QixXQUFNLEdBQVEsRUFBRSxDQUFDO1FBQ2pCLGdCQUFXLEdBQVEsRUFBRSxDQUN6QjtRQUNJLHNCQUFpQixHQUFRLEVBQUUsQ0FBQztRQUtqQyw0Q0FBNEM7UUFDNUMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQzdCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQzs7Ozs7O0lBRUQsY0FBYyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3BCLDhCQUE4QjtRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBR0QsWUFBWTtRQUNWLGlDQUFpQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQztRQUMzQyx1QkFBdUI7UUFDdkIsMENBQTBDO1FBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7SUFFekQsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsS0FBSztRQUVuQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxFQUFFO1lBQ2xELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDOztnQkFDckIsSUFBSSxHQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsUUFBUTs7Z0JBQ3BILElBQUksR0FBUTtnQkFDZCxZQUFZLEVBQUUsS0FBSztnQkFDbkIsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUVELElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxTQUFTOzs7O1lBQUMsR0FBRyxDQUFDLEVBQUU7OztvQkFFbEQsTUFBTSxHQUFRLEdBQUc7Z0JBRXJCLElBQUksTUFBTSxDQUFDLE1BQU0sSUFBSSxTQUFTLEVBQUU7b0JBQzlCLDBDQUEwQztvQkFFMUMsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7b0JBRTFCLE1BQU0sR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2pDLDhDQUE4QztvQkFDOUMsbURBQW1EO29CQUNuRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsTUFBTSxDQUFDO2lCQUNqQztZQUNILENBQUMsRUFBQyxDQUFBO1NBQ0g7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQXVCLENBQUM7U0FDdkM7SUFDSCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFbEMsQ0FBQzs7O1lBdkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixtMUZBQXVDO2FBQ3hDOzs7O1lBejVGbUIsWUFBWTs0Q0F3NkZzQyxNQUFNLFNBQUMsZUFBZTtZQXo2Rm5GLFVBQVU7Ozs7SUE2NUZqQixnREFBa0M7O0lBQ2xDLDRDQUE4Qjs7SUFDOUIseUNBQTJCOztJQUMzQiw2Q0FBK0I7O0lBQy9CLDRDQUFxQzs7SUFDckMsc0NBQXdCOztJQUN4QiwyQ0FDRzs7SUFDSCxpREFBbUM7Ozs7O0lBSXZCLHlDQUFxRDs7SUFBRSxvQ0FBeUM7O0lBQUUsMENBQTZCOzs7OztBQWlGN0ksTUFBTSxPQUFPLFdBQVc7Ozs7O0lBRXRCLFlBQ1MsU0FBb0MsRUFDWCxJQUFTO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQTJCO1FBQ1gsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN6QywyREFBMkQ7SUFDN0QsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWRGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsYUFBYTtnQkFDdkIsa0tBQStCO2FBQ2hDOzs7O1lBeC9GbUIsWUFBWTs0Q0E2L0YzQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QixnQ0FBMkM7O0lBQzNDLDJCQUF5Qzs7Ozs7QUFjN0MsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUdwQixZQUNTLFNBQWtDLEVBQ1QsSUFBUztRQURsQyxjQUFTLEdBQVQsU0FBUyxDQUF5QjtRQUNULFNBQUksR0FBSixJQUFJLENBQUs7UUFDekMsd0NBQXdDO0lBQzFDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04saUNBQWlDO0lBQ25DLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixzVEFBa0M7YUFDbkM7Ozs7WUExZ0dtQixZQUFZOzRDQWdoRzNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDhCQUF5Qzs7SUFDekMseUJBQXlDOztBQXFCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFDUyxXQUE4QyxFQUNsQixJQUFTO1FBRHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTVDLGtDQUFrQztJQUNwQyxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0Msa0ZBQXFEO3lCQUM1Qzs7OztHQUlSO2FBQ0Y7Ozs7WUFyaEd5QyxjQUFjOzRDQXloR25ELE1BQU0sU0FBQyxrQkFBa0I7Ozs7SUFEMUIsd0NBQXFEOztJQUNyRCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLCBTaW1wbGVDaGFuZ2UsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0NoZWNrZWQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsIE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgRXZlbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZXNlcnZpY2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9vYnNlcnZhYmxlc2VydmljZS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBUSElTX0VYUFIsIFRocm93U3RtdCB9IGZyb20gJ0Bhbmd1bGFyL2NvbXBpbGVyL3NyYy9vdXRwdXQvb3V0cHV0X2FzdCc7XG5cblxuLy8gaW1wb3J0IHtQcm9ncmVzc0Jhck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG4vLyBpbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gMDtcbiAgcHVibGljIHBhZ2VDaGFuZ2VWYWx1ZTogTnVtYmVyO1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHN0YXRpY1Rvb2x0aXA6IGFueSA9IHtcbiAgICBcImRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgIFwiZWRpdFwiOiBcIkVkaXRcIixcbiAgICBcInByZXZpZXdcIjogXCJQcmV2aWV3XCIsXG4gICAgXCJjaGFuZ2VTdGF0dXNcIjogXCJDaGFuZ2UgU3RhdHVzXCIsXG4gIH1cbiAgcHVibGljIG5ld2N1cnJlbnRwYWdpbmdWYWw6IGFueTtcbiAgcHVibGljIHN0YXJ0RGF0ZTogYW55O1xuICBwdWJsaWMga2VlcFBhZ2luYXRpb246IGFueSA9IDA7XG4gIHB1YmxpYyBzdGFydERhdGUxMTE6IGFueSA9IG5ldyBEYXRlKDE2MjIzNTgwNTAwMDApXG4gIHB1YmxpYyBlbmREYXRlOiBhbnk7XG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBwdWJsaWMgc2VhcmNoTGlzdHZhbDogYW55O1xuICByZXNjb3VudDogbnVtYmVyID0gMDtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgY3VycmVudGF1dG9zZWFyY2hhcnI6IGFueSA9IFtdO1xuICBvbGRkYXRhOiBhbnkgPSBbXTtcbiAgdHNlYXJjaDogYW55ID0gW107XG4gIHRhYmxlZmxhZzogYW55ID0gMDtcbiAgYXV0b3NlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyB4OiBhbnk7XG4gIHB1YmxpYyBsaWJkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGxpbWl0Y29uZHZhbDogYW55ID0ge307XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWw6IGFueTtcbiAgcHVibGljIHJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBzb3J0ZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBzaDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgdXBkYXRldGFibGV2YWw6IGFueSA9IGZhbHNlO1xuICBsb2FkZXJyb3c6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRhdXRvY29tcGxldGVpdGVtOiBhbnk7XG4gIHB1YmxpYyBjdXN0b21CdXR0b25GbGFnVmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGFsbFNlYXJjaENvbmQ6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoYnV0dG9udmFsOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaEJhckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlYXJjaEJhclRvb2xUaXA6IGFueSA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICBwdWJsaWMgc2VhcmNoQmFyRmxhZ1ZhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVjb3JkRm91bmRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNvcmRGb3VuZERhdGE6IGFueSA9ICcnO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyBuZXdwYWdpbmdjb3VudEZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaW5pdGlhdGVTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25MaWJsaXN0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIG9uTGlibGlzdGluZ0J1dHRvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2U6IGFueTtcbiAgc2VhcmNoc3Ryc2FycjogYW55ID0gW107XG4gIG9sZGxpbWl0cmFuZ2U6IGFueSA9IFtdO1xuICBwdWJsaWMgbGFuZ3VhZ2VkYXRhc2V0OiBhbnkgPSBbXTtcbiAgQElucHV0KClcbiAgc2V0IGxhbmd1YWdlRGF0YXNldCh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5sYW5ndWFnZWRhdGFzZXQgPSB2YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyYWJfbGlua3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNldGNvbnZlcnRUb0xhbmd1YWdlKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coXCJkZXZlbG9wZXIgdGVzdFwiLHRoaXMuY29udmVydFRvTGFuZ3VhZ2UpXG5cbiAgICBpZiAodHlwZW9mIHRoaXMuY29udmVydFRvTGFuZ3VhZ2UgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZSAhPSBudWxsICYmIHRoaXMuY29udmVydFRvTGFuZ3VhZ2UgIT0gJycpIHtcbiAgICAgIHRoaXMub2JzZXJ2YWJsZVNlcnZpY2Uuc2V0Y29udmVydFRvTGFuZ3VhZ2UodGhpcy5jb252ZXJ0VG9MYW5ndWFnZSk7XG4gICAgfVxuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hfc2V0dGluZ3Moc2VhcmNoX3NldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCA9IHNlYXJjaF9zZXR0aW5ncztcbiAgICAvLyBjb25zb2xlLmxvZygnc2VhcmNoX3NldHRpbmdzdmFsKysrKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwpXG4gICAgLypmb3IgKGxldCBpPSAwOyBpPD0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbaV0ubGFiZWwpO1xuICAgIH0qL1xuXG4gICAgLyogIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0ubGFiZWwpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLnZhbHVlcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKTsqL1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZShjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U6IGFueSkge1xuICAgIHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsID0gY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdGNvbmQobGltaXRjb25kdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbCA9IGxpbWl0Y29uZHZhbDtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IG51bGwpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG5cbiAgICB9XG4gICAgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKGxpbWl0Y29uZHZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xpbWl0Y29uZHZhbCcsdGhpcy5saW1pdGNvbmR2YWwpO1xuICB9XG4gIHB1YmxpYyBwYWdlQ291bnRBcnJheTogYW55O1xuICBwdWJsaWMgZmlyc3RwYWdlQ291bnRBcnJheTogYW55O1xuICBwdWJsaWMgbGFzdHBhZ2VDb3VudEFycmF5OiBhbnk7XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQoZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDtcbiAgICB0aGlzLnBhZ2VDb3VudEFycmF5ID0gbmV3IEFycmF5KE1hdGguY2VpbChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgIHRoaXMubGFzdHBhZ2VDb3VudEFycmF5ID0gTWF0aC5jZWlsKGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcbiAgICBjb25zb2xlLmxvZyhcInRoaXMucGFnZUNvdW50QXJyYXlcIiwgTWF0aC5jZWlsKGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSk7XG5cblxuICAgIGlmICh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9PSAwKSB7IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7IH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50Jyx0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3JhYl9saW5rKGdyYWJfbGluazogYW55KSB7XG4gICAgdGhpcy5ncmFiX2xpbmt2YWwgPSBncmFiX2xpbms7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCAnc29ydGRhdGF2YWwnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9lbmRwb2ludChkYXRlX3NlYXJjaF9lbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbCA9IGRhdGVfc2VhcmNoX2VuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cmwodXJsOiBhbnkpIHtcbiAgICB0aGlzLnVybHZhbCA9IHVybDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoZW5kcG9pbnQoc2VhcmNoZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoZW5kcG9pbnR2YWwgPSBzZWFyY2hlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGRmX2xpbmsocGRmX2xpbms6IGFueSkge1xuICAgIHRoaXMucGRmX2xpbmtfdmFsID0gcGRmX2xpbms7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaExpc3Qoc2VhcmNoTGlzdDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hMaXN0dmFsID0gc2VhcmNoTGlzdDtcbiAgfVxuICBwdWJsaWMgcGFnaW5hdGlvbnR5cGU6IGFueTtcbiAgcHVibGljIHBhZ2luYXRpb250eXBlRmxhZzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IFtdO1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG5cbiAgICB0aGlzLnBhZ2luYXRpb250eXBlID0gdGhpcy5saWJkYXRhdmFsLnBhZ2luYXRpb25UeXBlO1xuICAgIGlmICh0eXBlb2YgdGhpcy5saWJkYXRhdmFsLnBhZ2luYXRpb25UeXBlID09ICd1bmRlZmluZWQnICYmIHRoaXMubGliZGF0YXZhbC5wYWdpbmF0aW9uVHlwZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnBhZ2luYXRpb250eXBlRmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnbGliZGF0YXZhbCcsIHRoaXMubGliZGF0YXZhbCk7XG4gICAgY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLCB0aGlzLnBhZ2luYXRpb250eXBlKTtcbiAgICBpZiAodHlwZW9mIHRoaXMubGliZGF0YXZhbC5wYWdlcyAhPSAndW5kZWZpbmVkJyAmJiB0aGlzLmxpYmRhdGF2YWwucGFnZXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wYWdlcyA9IHRoaXMubGliZGF0YXZhbC5wYWdlcztcbiAgICB9XG5cbiAgICAvLyBzZWFyY2hCYXJGbGFnXG5cbiAgICAvLyBjb25zb2xlLmxvZyhsaWJkYXRhdmFsLnNlYXJjaEJhckZsYWdWYWwpXG5cbiAgICBpZiAobGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9IG51bGwgJiYgbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9ICcnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnVmFsID0gbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgfVxuXG5cbiAgICBpZiAobGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWcgIT0gbnVsbCAmJiBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZmxhZyAhPSAnJyAmJiBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZGF0YSAhPSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5yZWNvcmRGb3VuZEZsYWcgPSBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZmxhZztcbiAgICAgICAgdGhpcy5yZWNvcmRGb3VuZERhdGEgPSBsaWJkYXRhdmFsLnJlY29yZGZvdW5kZGF0YTtcblxuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVjb3JkRm91bmRGbGFnID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFzb3VyY2UoZGF0YXNvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gW107XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gZGF0YXNvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YWNvbGxlY3Rpb24oZGF0YWNvbGxlY3Rpb252YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgPSBkYXRhY29sbGVjdGlvbnZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBza2lwKHNraXA6IGFueSkge1xuICAgIHRoaXMuc2tpcHZhbCA9IHNraXA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9kYXRhdHlwZShkZXRhaWxfZGF0YXR5cGU6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsID0gZGV0YWlsX2RhdGF0eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfc2tpcF9hcnJheShkZXRhaWxfc2tpcF9hcnJheTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCA9IGRldGFpbF9za2lwX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNvdXJjZWRhdGEoc291cmNlZGF0YTogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VkYXRhdmFsID0gc291cmNlZGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RpZnlfaGVhZGVyX2FycmF5KG1vZGlmeV9oZWFkZXJfYXJyYXk6IGFueSkge1xuICAgIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCA9IG1vZGlmeV9oZWFkZXJfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVsZXRlZW5kcG9pbnQoZGVsZXRlZW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwgPSBkZWxldGVlbmRwb2ludHZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludHZhbCA9IHVwZGF0ZWVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhcGl1cmwoYXBpdXJsOiBhbnkpIHtcbiAgICB0aGlzLmFwaXVybHZhbCA9IGFwaXVybDtcbiAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuYXBpdXJsdmFsXCIsdGhpcy5hcGl1cmx2YWwpO1xuXG4gICAgdGhpcy5vYnNlcnZhYmxlU2VydmljZS5zZXRhcGlVcmwodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwuYWRkbGFuZ3VhZ2VkYXRhRW5kcG9pbnQpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZXRhYmxlKHVwZGF0ZXRhYmxlOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZXRhYmxldmFsID0gdXBkYXRldGFibGU7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBqd3R0b2tlbihqd3R0b2tlbjogYW55KSB7XG4gICAgaWYgKGp3dHRva2VuICE9IG51bGwpIHsgdGhpcy5qd3R0b2tlbnZhbCA9IGp3dHRva2VuOyB9IGVsc2UgeyB0aGlzLmp3dHRva2VudmFsID0gJyc7IH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsLCd0b2tlbicpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICB0aGlzLmVtYWlsYXJyYXl2YWwgPSBlbWFpbGFycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRyb3V0ZShlZGl0cm91dGU6IGFueSkge1xuICAgIHRoaXMuZWRpdHJvdXRldmFsID0gZWRpdHJvdXRlO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWxpc3RlbmJ1dHRvbih2YWw6IGFueSkge1xuICAgIHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCA9IHZhbFxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICB9XG5cbiAgLy8gc2VhcmNoIGJ1dHRvbnMgXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBzZWFyY2hidXR0b25zKHZhbDogYW55KSB7XG4gIC8vICAgdGhpcy5zZWFyY2hidXR0b252YWwgPSB2YWxcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGJ1dHRvbnZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICAvLyB9XG5cblxuICBleHBhbmRlZEVsZW1lbnQ6IGFueTtcblxuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdO1xuICBwdWJsaWMgYWxscGFnaW5hdGlvbnBvc3REYXRhOiBhbnk7XG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgc3RhcnRfZGF0ZTogYW55O1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHNlbGVjdFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgZW5kX2RhdGU6IGFueTtcbiAgcHVibGljIGk6IGFueTtcbiAgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBwcmVyZXN1bHQ6IGFueSA9IHt9O1xuICBwdWJsaWMgYnV0dG9uU2VhcmNoRGF0YTogYW55ID0gW107XG4gIC8vIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICAvLyBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIG15Rm9ybTogYW55O1xuICAvLyBteUZvcm06YW55O1xuICBtb2RlbENoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIG1vZGVsQ2hhbmdlZHNlcnZlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcGFnZWNoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHN1YnNjcmlwdGlvbmNvdW50ID0gMDtcbiAgdGFibGVGb290ZXJDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICB0ZXN0dmFsdWU6IGFueSA9IFwiczFcIjtcbiAgdHh0UXVlcnlDaGFuZ2VkOiBTdWJqZWN0PHN0cmluZz4gPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XG4gIGxpbWl0Q2hhbmdyZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuXG4gIC8vIHNlYXJjaFJlc3VsdCQ6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0W10+O1xuICAvLyBmb3IgZHJvcGRvd24gcGFnaW5hdGlvblxuICBwdWJsaWMgcGFnZXM6IGFueSA9IFtdO1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwdWJsaWMgb2JzZXJ2YWJsZVNlcnZpY2U6IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSxcblxuICApIHtcbiAgICB0aGlzLnN0YXRlR3JvdXBzID0gdGhpcy5zZWFyY2hMaXN0dmFsO1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG5cblxuICAgIC8vIHRoaXMudHh0UXVlcnlDaGFuZ2VkXG4gICAgLy8gICAgICAgICAuZGVib3VuY2VUaW1lKDEwMDApIC8vIHdhaXQgMSBzZWMgYWZ0ZXIgdGhlIGxhc3QgZXZlbnQgYmVmb3JlIGVtaXR0aW5nIGxhc3QgZXZlbnRcbiAgICAvLyAgICAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpIC8vIG9ubHkgZW1pdCBpZiB2YWx1ZSBpcyBkaWZmZXJlbnQgZnJvbSBwcmV2aW91cyB2YWx1ZVxuICAgIC8vICAgICAgICAgLnN1YnNjcmliZShtb2RlbCA9PiB7XG4gICAgLy8gICAgICAgICAgIHRoaXMudHh0UXVlcnkgPSBtb2RlbDtcblxuICAgIC8vICAgICAgICAgICAvLyBDYWxsIHlvdXIgZnVuY3Rpb24gd2hpY2ggY2FsbHMgQVBJIG9yIGRvIGFueXRoaW5nIHlvdSB3b3VsZCBsaWtlIGRvIGFmdGVyIGEgbGFnIG9mIDEgc2VjXG4gICAgLy8gICAgICAgICAgIHRoaXMuZ2V0RGF0YUZyb21BUEkodGhpcy50eHRRdWVyeSk7XG4gICAgLy8gICAgICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMudHh0UXVlcnlDaGFuZ2VkXG4gICAgICAucGlwZShcblxuXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA+IHRoaXMubGFzdHBhZ2VDb3VudEFycmF5KSB7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb3JyeSEhIFBhZ2UgbnVtYmVyIGlzIG91dCBvZiByYW5nZSwgaGlnaGVzdCByYW5nZSBpcyAnICsgdGhpcy5sYXN0cGFnZUNvdW50QXJyYXkgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoICsgMSA+IHRoaXMucGFnZUNoYW5nZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5wYWdpbmcodGhpcy5wYWdlQ2hhbmdlVmFsdWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3BhZ2UgY291bnQgb3V0IG9mIGJvdW5kIFxuICAgICAgICAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIiwgdGhpcy5wYWdlQ2hhbmdlVmFsdWUsIFwiKysrXCIsIHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKTtcblxuXG4gICAgICB9KTtcblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLmxpbWl0Q2hhbmdyZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSkge1xuICAgICAgICAgIHRoaXMucGFnaW5nKHRoaXMucGFnZUNoYW5nZVZhbHVlLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9wYWdlIGNvdW50IG91dCBvZiBib3VuZCBcbiAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZHNlcnZlclxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSxcbiAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSBcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAgc2VydmVyJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLmZpZWxkXSAhPSAnJykge1xuICAgICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcblxuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhLmVuZHBvaW50O1xuXG4gICAgICAgICAgbGV0IHNvdXJjZTogYW55O1xuXG4gICAgICAgICAgc291cmNlID0ge1xuICAgICAgICAgICAgc2VhcmNoX3N0cjogdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0sXG4gICAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLCAncmVzdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgIC8vIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwpIHRoaXMucmVzY291bnQgPSByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gcmVzdWx0LnJlcztcbiAgICAgICAgICAgICAgLy8gYXV0b2NvbXBsZXRlIHNlYXJjaGluZyBzbmFrYmFyXG5cbiAgICAgICAgICAgICAgLy8gdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgLy8gICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgLy8gICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQgJyB9XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgIC8vIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIC8vICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuICB9XG4gIC8qQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbTGlzdGluZ10nXG4gIH0pKi9cbiAgc3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIGNsaWNrRXZlbnQoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG4gIH1cblxuICBhdXRvY29tcGxldGVmdW5jdGlvbihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3VudGVyKGk6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgQXJyYXkoaSk7XG4gIH1cblxuICBvbkZpZWxkQ2hhbmdlKHF1ZXJ5OiBzdHJpbmcpIHtcblxuICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIHF1ZXJ5LCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgLy8gaWYgKHF1ZXJ5IDw9IHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKSB7XG4gICAgaWYgKHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoICsgMSA+IHF1ZXJ5KSB7XG4gICAgICB0aGlzLnR4dFF1ZXJ5Q2hhbmdlZC5uZXh0KHF1ZXJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKCd3aXRoIGluIGJvdW5kICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcGFnZSBjb3VudCBvdXQgb2YgYm91bmQgXG5cbiAgICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgLy8gICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgIC8vICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvcnJ5ISEgUGFnZSBudW1iZXIgaXMgb3V0IG9mIHJhbmdlLCBoaWdoZXN0IHJhbmdlIGlzICcgKyB0aGlzLmxhc3RwYWdlQ291bnRBcnJheSB9XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGg7XG4gICAgLy8gfVxuICB9XG5cbiAgb25GaWVsZENoYW5nZWZvcmxpbWl0KHF1ZXJ5OiBhbnkpIHtcblxuICAgIGNvbnNvbGUubG9nKCdxdWVyeScsIHF1ZXJ5LCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgLy8gaWYgKHF1ZXJ5IDw9IHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKSB7XG4gICAgaWYgKHF1ZXJ5IDwgMTAwKSB7XG4gICAgICB0aGlzLmxpbWl0Q2hhbmdyZC5uZXh0KHF1ZXJ5KTtcbiAgICAgIGNvbnNvbGUubG9nKCd3aXRoIGluIGJvdW5kICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcGFnZSBjb3VudCBvdXQgb2YgYm91bmQgXG5cbiAgICB9XG5cblxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZWRhdGFzZXRcIix0aGlzLmxhbmd1YWdlZGF0YXNldCk7XG4gICAgdGhpcy5vYnNlcnZhYmxlU2VydmljZS5zZXRtdWx0aWxpbmd1YWxEYXRhKHRoaXMubGFuZ3VhZ2VkYXRhc2V0KTtcbiAgICAvLyBhZGRsYW5ndWFnZWRhdGFFbmRwb2ludFxuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzLmFwaXVybHZhbFwiLCB0aGlzLmFwaXVybHZhbCk7XG5cblxuICAgIC8vIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgLy8gICBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAvLyAgIHNvdXJjZSA9IHtcbiAgICAvLyAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAvLyAgIH07XG4gICAgLy8gICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gbm90IG5lZWRlZCAsXG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBpZiAodGhpcy5kYXRhc291cmNldmFsKSB0aGlzLnJlc2NvdW50ID0gdGhpcy5kYXRhc291cmNldmFsLmxlbmd0aDtcblxuICAgIGxldCB0ZW1wID0gW107XG4gICAgY29uc3Qga2V5cyA9IHhbMF07XG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpOyAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBjb25zdCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csICdfJykpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSk7XG4gICAgfVxuICAgIC8vIGNvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvLyBoZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWA7XG4gICAgICBjb25zdCB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldfWAsIHRvb2x0aXA6IGAke2hlYWRlcl9saXN0W2ldfWAsIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpLCBvYmpsZW5ndGg6IGhlYWRlcl9saXN0Lmxlbmd0aCB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuXG4gICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgIGlmIChiID09IHR0LmhlYWRlcikgeyB0dC5oZWFkZXIgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBoZWFkZXIgdG9vbHRpcCBhcnJheVxuICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSB7XG4gICAgICAgICAgaWYgKGIgPT0gdHQudG9vbHRpcCkgeyB0dC50b29sdGlwID0gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5W2JdOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codHQudG9vbHRpcCwgJ3R0LnRvb2x0aXAgPT09PT0rKysrKycpXG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSBbXTtcbiAgICB0aGlzLnRhYmxlZmxhZyA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlZmxhZyA9IDA7XG4gICAgfSwgMTAwKTtcblxuICAgIGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgfVxuXG5cblxuICAgIGVsc2UgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSBbXTtcblxuICAgIGxldCBjdXN0b21jb2xzOiBhbnkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT0gbnVsbCkge1xuICAgICAgY3VzdG9tY29scyA9IHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChjdXN0b21jb2xzICE9IG51bGwgJiYgY3VzdG9tY29scy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2NvbHZhbDogc3RyaW5nID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gY3VzdG9tY29scykge1xuICAgICAgICBpZiAoZGlzcGxheWVkY29scy5pbmNsdWRlcyhjdXN0b21jb2xzW3ZdKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgICAgIGlmIChiID09IGN1c3RvbWNvbHNbdl0pIHsgY2NvbHZhbCA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogY3VzdG9tY29sc1t2XSwgaGVhZGVyOiBjY29sdmFsLCBjZWxsOiAnTkEnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzID0gY3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy5wdXNoKHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUgPT0gbnVsbCA/ICdBY3Rpb25zJyA6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lLCBoZWFkZXI6ICdBY3Rpb25zJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBudWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy51bnNoaWZ0KCcjJyk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogJyMnLCBoZWFkZXI6ICcjJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gW107XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICAvLyB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlbXVsdGlwbGVzZWxlY3RidXR0b24gIT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICdzZWxlY3QnLCBoZWFkZXI6ICdzZWxlY3QnLCBjZWxsOiAnTkEnIH0pOyAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB9XG4gICAgbGV0IHRlbXBjb2xhcnIgPSBbXTtcbiAgICBsZXQgdGVtcGNvbGFycjIgPSBbXTtcbiAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IG4gaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAodGVtcGNvbGFyci5pbmRleE9mKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0ZW1wY29sYXJyMi5wdXNoKHRoaXMuY29sdW1uc1tuXSk7XG4gICAgICB0ZW1wY29sYXJyLnB1c2godGhpcy5jb2x1bW5zW25dLmNvbHVtbkRlZik7XG5cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gdGVtcGNvbGFycjI7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5jb2x1bW5zLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLmNvbHVtbkRlZikpKTtcblxuICAgIC8vIHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiBpdGVtLmNvbHVtbkRlZilcbiAgICAvLyAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xuXG4gICAgLy8gdW5pcXVlIGNvbCBuYW1lcyBcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scyBmaWx0ZXInLCB0aGlzLmRpc3BsYXllZENvbHVtbnMpO1xuXG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gdGhpcy5kYXRhU291cmNlO1xuXG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG5cbiAgICAvLyBsb2FkIHNlYXJjaCBwcmVkZWZpbmRlZCBkYXRhXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIC8vIHRoaXMuc2VsZWN0c2VhcmNoWydzdGF0dXMnXSA9ICcwJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RzZWFyY2gnLCB0aGlzLnNlbGVjdHNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3MxJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUsdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlc1swXSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIHNlbGVjdFNlYXJjaF9jb25kaXRpb25cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5pdGlhdGVTZWFyY2gsICdpbml0aWF0ZVNlYXJjaCBzZWxlY3QnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsICdzcysrKysrPT09PT0rKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0sdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZXNbMF0sJz8/Pz8/IG5ldyBzZWxlY3RTZWFyY2hfY29uZGl0aW9uJyx0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndDEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudHNlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbml0aWF0ZVNlYXJjaCwgJ2luaXRpYXRlU2VhcmNoIHRleHQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBhdHMgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUgIT0gJycgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlLCc+Pj09PT09PT0nKVxuICAgICAgICAgICAgICB0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdLnB1c2goeyB2YWw6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlW2tdLnZhbCwgbmFtZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWVba10ubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRlU2VhcmNoX2NvbmRpdGlvblxuICAgICAgY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKytcIiwgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuXG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUgKyAxMDAwMDtcbiAgICAgICAgLy8gICAvLyB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGU7XG5cbiAgICAgICAgLy8gICB0aGlzLnN0YXJ0X2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAgIHRoaXMuZW5kX2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuXG4gICAgICAgIC8vIC8vICB0aGlzLnN0YXJ0RGF0ZT1tb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuYWRkKDEsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAvLyAgdGhpcy5lbmREYXRlPW1vbWVudChuZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vICB0aGlzLnN0YXJ0RGF0ZT1uZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgdGhpcy5lbmREYXRlPW5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInRoaXMuc3RhcnREYXRlXCIsdGhpcy5zdGFydERhdGUpO1xuICAgICAgICAvLyAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSArIDg2Mzk5MDAwO1xuICAgICAgICAvLyAgIC8vIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZW5kIGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpO1xuXG4gICAgICAgIC8vICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gbmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKTtcbiAgICAgICAgdGhpcy5lbmRfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlICsgODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbCcsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24pXG5cblxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCAndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgICAgICBsZXQgaW5kOiBhbnkgPSAwO1xuICAgICAgICAgIGluZCA9IHBhcnNlSW50KGkpO1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IGZpZWxkOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQsIGtleTogaW5kLCB2YWx1ZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbml0aWF0ZVNlYXJjaCA9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG5cblxuICAvLyBDdXN0b20gRmlsdGVyIG5ld1xuICBDdXN0b21CdXR0b25MaXN0ZW4odmFsOiBhbnkpIHtcbiAgICAvLyBhbGxTZWFyY2hDb25kXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAndGhpcy5hbGxTZWFyY2hDb25kJylcblxuICAgIHRoaXMub25MaWJsaXN0aW5nQnV0dG9uQ2hhbmdlLmVtaXQoXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogJ2N1c3RvbWxpc3RlbmJ1dHRvbicsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgYnV0dG9uZGF0YTogdmFsLCBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsIGF1dG9TZWFyY2hWYWw6IHRoaXMuYXV0b3NlYXJjaCwgYnV0dG9uU2VhcmNoRGF0YTogdGhpcy5idXR0b25TZWFyY2hEYXRhXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHZhciBkYXRhOmFueT17XG4gICAgLy8gICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCxzZWFyY2g6dGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsYnV0dG9uVmFsOnZhbFxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCdkYXRhKysrKz09PScsdmFsKVxuICB9XG5cblxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBCYXIgVG9nZ2xlXG4gIFNlYXJjaEJhclRvZ2dsZShmbGFnKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UuZW1pdChcbiAgICAgIHtcbiAgICAgICAgYWN0aW9uOiAnc2VhcmNoYmFyJywgZmxhZzogZmxhZ1xuICAgICAgfVxuICAgIClcbiAgICBzd2l0Y2ggKGZsYWcpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdDbG9zZSBTZWFyY2ggQmFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuXG4gIHVwVG8oZWwsIHRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgd2hpbGUgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIGlmIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYW55IERPTSBtZXRob2RzIHJldHVybiBudWxsIGlmIHRoZXkgZG9uJ3QgXG4gICAgLy8gZmluZCB0aGUgZWxlbWVudCB0aGV5IGFyZSBzZWFyY2hpbmcgZm9yXG4gICAgLy8gSXQgd291bGQgYmUgT0sgdG8gb21pdCB0aGUgZm9sbG93aW5nIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudENoZWNrZWQgY2FsbGVkIC4uLicpO1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBjbGlja211bHRpcGxlc2VsZWN0b3B0aW9uKHZhbHMpIHtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzZWxlY3RvcHRpb25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBidG5kYXRhOiB2YWxzIH0pO1xuXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWxdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcblxuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGNvbnN0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgKyAnLWNvdW50JztcblxuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAvLyBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLnN0YXJ0X2RhdGU9dGhpcy5zdGFydERhdGU7XG4gICAgLy8gICB0aGlzLmVuZF9kYXRlPXRoaXMuZW5kRGF0ZTtcbiAgICAvLyB9XG5cbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG5cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgdGhpcy5zdGFydF9kYXRlICE9IG51bGwpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFydF9kYXRlICE9IG51bGwgJiYgKHRoaXMuZW5kX2RhdGUgPT0gbnVsbCB8fCB0aGlzLmVuZF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgKHRoaXMuc3RhcnRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhcnRfZGF0ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRndGUsJ2FmdGVyICsgODYzOTkwMDAnLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlKVxuICAgICAgLy8gdmFyIGR0PXRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGd0ZSwnYWZ0ZXIgLSA4NjM5OTAwMCcsZHQgKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgJ2RhdGVTZWFyY2hfY29uZGl0aW9uKysnKTtcblxuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoKTtcbiAgICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXSAhPSAnJykge1xuICAgICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuICAgICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG4gICAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgYXV0b3NlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kb3IgMScpXG4gICAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgICBzb3VyY2UgPSB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZSBzZWFyY2ggY29uLi4uJywgY29uZGl0aW9ub2JqLCB0aGlzLmVuZF9kYXRlLCB0aGlzLnN0YXJ0X2RhdGUpO1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICAvKnRoaXMuX2h0dHAucG9zdChsaW5rLCB7c291cmNlOnRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAnY3JlYXRlZF9hdCc6IHtcbiAgICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIH0pLnN1YnNjcmliZSggcmVzID0+e1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPXt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMpO1xuICAgICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KSovXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG5cblxuICBzZWxlY3RTZWFyY2godmFsdWU6IGFueSwgdHlwZTogYW55LCBzdGF0dXN2YWw6IGFueSkge1xuXG4gICAgY29uc29sZS5sb2codmFsdWUsICd2YWx1ZScsIHR5cGUsICd0eXBlJywgc3RhdHVzdmFsLCAnc3RhdHVzdmFsJylcblxuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gbGV0IHNvdXJjZTogYW55O1xuICAgIC8vIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt0eXBlLmZpZWxkXSA9ICh7IHZhbDogc3RhdHVzdmFsLm5hbWUsIGxhYmVsOiB0eXBlLmxhYmVsLCBrZXk6IHR5cGUuZmllbGQgfSk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaHN0cnNhcnJbdHlwZS5maWVsZF1cIiwgdGhpcy5zZWFyY2hzdHJzYXJyW3R5cGUuZmllbGRdKTtcblxuICAgIGxldCB2YWwgPSAnJztcbiAgICBpZiAodGhpcy50c2VhcmNoICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsKSB7XG4gICAgICB2YWwgPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMSAmJiB7ICRvcjogW3RoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIC8vIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy8gLy9jb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICAvLyBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBzb3VyY2UgPSB7XG4gICAgLy8gICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgIC8vICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICAvLyB9O1xuXG5cblxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHNlYXJjaCwgJ2N6eGN4Y3p4YycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCwgdGhpcy5zZWxlY3RzZWFyY2gsIHZhbHVlLCB0eXBlKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICAvLyB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICBjb25zb2xlLmxvZygnc2VsZWN0U2VhcmNoICcsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cbiAgLy8gZm9yIG1hbmFnaW5nIHBhZ2luYXRpb25cblxuICBwYWdpbmcodmFsOiBhbnksIGZsYWc6IGFueSkge1xuICAgIC8vIGNvbnN0IGx2YWw6IGFueSA9IHRoaXMubGltaXRjb25kdmFsO1xuICAgIGNvbnNvbGUubG9nKHZhbCwgJ3BhZ2luZyB2YWwnKTtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHZhbDtcblxuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPT0gbnVsbCkgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwubGltaXQgPT0gbnVsbCkgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSAxMDtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwubGltaXQgIT0gbnVsbCAmJiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA+IDEwMCkge1xuICAgICAgLy8gaWYoZmxhZyE9XCJzZWxlY3RwYWdpbmdcIil7XG4gICAgICAvLyAgIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gMTAwO1xuXG4gICAgICAvLyB9XG4gICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwMDtcbiAgICAgIC8vIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAvLyAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgLy8gICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1lvdSBjYW4gc2VlIG1heGltdW0gMTAwIHJlY29yZHMgYXQgb25jZSAhJyB9XG4gICAgICAvLyB9KTtcbiAgICB9XG5cbiAgICBsZXQgbWF4cGFnZWNvdW50OiBudW1iZXIgPSBOdW1iZXIodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyAodGhpcy5saW1pdGNvbmR2YWwubGltaXQpKTtcbiAgICBtYXhwYWdlY291bnQgPSB+fihtYXhwYWdlY291bnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm9sZGxpbWl0cmFuZ2UnLCB0aGlzLm9sZGxpbWl0cmFuZ2UsIHRoaXMubGltaXRjb25kdmFsLCB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCwgbWF4cGFnZWNvdW50KTtcbiAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaCh7XG4gICAgLy8gICBza2lwOiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwLFxuICAgIC8vICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgIC8vICAgcGFnZWNvdW50OiB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnRcbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLmxvZyhcImxpbWl0KysrK1wiLCB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCk7XG5cbiAgICBpZiAodmFsID09IDEpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA8IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA+PSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNraXAgYmxvY2snKTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMikgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodmFsID4gMSkge1xuICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbnR5cGUgPT0gMikge1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB2YWw7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInZhbD4xIHNlY3Rpb24gXCIsIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCk7XG4gICAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gdmFsO1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDEpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICB9XG4gICAgaWYgKHZhbCA8PSAxKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPiAobWF4cGFnZWNvdW50ICsgMSkpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IG1heHBhZ2Vjb3VudCArIDE7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDEpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCdzcycsdGhpcy5kYXRhY29sbGVjdGlvbnZhbCx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG5cbiAgICBjb25zb2xlLmxvZygndGhpcy5saW1pdGNvbmR2YWwsIGluIHBhZ2luZyAnLCB0aGlzLmxpbWl0Y29uZHZhbCk7XG5cblxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG4gICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgYXV0b3NlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRvc2VhcmNoLiRhbmQsJ2F1dG9zZWFyY2guJG9yIDInKVxuXG4gICAgICAgIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIGNvbnN0IHNvdXJjZSA9IHtcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6IHRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH0sXG4gICAgICBzb3J0OiB7XG4gICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuICAgIHRoaXMuYWxscGFnaW5hdGlvbnBvc3REYXRhID0gc291cmNlO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICAvKmxldCBkYXRhOmFueT17XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6dGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfVxuXG4gICAgfSovXG4gICAgdGhpcy5uZXdwYWdpbmdjb3VudEZsYWcgPSBmYWxzZTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPiA1ICYmIHRoaXMucGFnaW5hdGlvbnR5cGUgPT0gMikge1xuICAgICAgICB0aGlzLm5ld2N1cnJlbnRwYWdpbmdWYWwgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSA1O1xuICAgICAgfVxuICAgICAgLy8gaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IDUgJiYgdGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyICYmIHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoIC0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IDwgMTApIHtcbiAgICAgIC8vICAgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gNCA7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdpbiBsYXN0IHJhbmdlIGFyZWEgLi4uJywgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsKTtcbiAgICAgIC8vIH1cbiAgICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPD0gNSAmJiB0aGlzLnBhZ2luYXRpb250eXBlID09IDIpIHtcbiAgICAgICAgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsID0gMTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwicGFnaW5nIHN1Y2Nlc3NcIiwgdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGgpO1xuICAgICAgY29uc29sZS5sb2coXCJwYWdpbmcgc3VjY2Vzc1wiLCB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpO1xuICAgICAgY29uc29sZS5sb2coJ2luIGNvbW1vbiAgcmFuZ2UgYXJlYSAuLi4nLCB0aGlzLm5ld2N1cnJlbnRwYWdpbmdWYWwpO1xuXG5cbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZXN1bHQsJ3JlcycpO1xuICAgICAgdGhpcy5uZXdwYWdpbmdjb3VudEZsYWcgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiB0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdwYWdpbmcnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaiwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHJlc3VsdHM6IHRoaXMucmVzdWx0LnJlc3VsdHMucmVzIH0pO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge3BhZ2VDaGFuZ2VWYWx1ZVxuICAgICAgICAvLyAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgICAgICAvLyB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFnZUNoYW5nZVZhbHVlICE9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkge1xuICAgICAgICAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubGliZGF0YXZhbC5jb250YWluZXJpZCkuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogXCJzbW9vdGhcIiB9KTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyByYW5nZSBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2tpcCA9IHRoaXMubGltaXRjb25kdmFsLnNraXA7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5saW1pdCA9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50ID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vbGRsaW1pdHJhbmdlIGFmdGVyICcsIHRoaXMub2xkbGltaXRyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbyBsZW4nLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoLCB0aGlzLm9sZGxpbWl0cmFuZ2UpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucmV2ZXJzZSgpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2xpY2UoMCwgdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDIpOyBcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSh0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vIHRoaXMucmVmcmVzaGRhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0Y29uZHZhbCwgdGhpcy5vbGRsaW1pdHJhbmdlLCAnbGF2bCBuIG9sZCAnKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IHRoaXMub2xkbGltaXRyYW5nZS5za2lwO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IHRoaXMub2xkbGltaXRyYW5nZS5saW1pdDtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gdGhpcy5vbGRsaW1pdHJhbmdlLnBhZ2Vjb3VudDtcbiAgICAgICAgLy8gaWYgKHZhbCA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCAtPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodmFsID09IC0xKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCArPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gRGF0YSBGb3VuZCBpbiB0aGlzIHJhbmdlICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDogYW55LCBpOiBhbnksIGZpZWxkOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9IG51bGwpIHsgdGhpcy5hdXRvc2VhcmNoW2ZpZWxkXS5zcGxpY2UoaSwgMSk7IH1cbiAgfVxuXG5cbiAgYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQoaXRlbSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQnLCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICBpZiAodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhID09IG51bGwpXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZC5uZXh0KCk7XG4gICAgZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gZWxzZSBibG9jayBvZiBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcpO1xuICAgICAgdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXIubmV4dCgpO1xuICAgIH1cblxuICB9XG5cblxuICBmaWx0ZXJhdXRvdmFsKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJhdXRvdmFsJywgZGF0YSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0pO1xuICAgIGNvbnN0IGF1dG9zZWx2YWwgPSB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gJycpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnZhbCA9IGRhdGEudmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZScsIGUsIGZpZWxkdmFsKVxuICAgICAgICByZXR1cm4gZS5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhdXRvc2VsdmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gZmlsdGVydmFsO1xuICAgIH1cbiAgfVxuICByZXNldGF1dG9jb21wKHZhbDogYW55KSB7XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsLmZpZWxkKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LCBkYXRhOiBhbnksIGl0ZW06IGFueSkge1xuICAgIC8vIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSA9ICcnO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b3NlYXJjaGlucHV0LCAnYXNpJywgZGF0YSwgdmFsdWUsIGl0ZW0pO1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdmFsdWVdID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2gsICdhdXRvc2VhcmNoIDExMzAnKVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsdWUpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIHJlc2V0IGF1dG8gc2VhcmNoIGRhdGEgIVxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuXG5cbiAgdGV4dHNlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksIGl0ZW06IGFueSkge1xuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdID09ICcnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VhcmNoc3Ryc2Fyci5pbmRleE9mKHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsICdpbmRleCcpO1xuICAgICAgZGVsZXRlIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV07XG4gICAgICAvLyBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgLy8gdGhpcy5zZWFyY2hzdHJzYXJyLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlXG4gICAgICB0aGlzLnNlYXJjaHN0cnNhcnJbdmFsdWVdID0gKHsgdmFsOiB0aGlzLnRzZWFyY2hbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygndGV4dHNlYXJjaGZ1bmN0aW9uJywgdmFsdWUsIGl0ZW0sIHRoaXMuc2VhcmNoc3Ryc2Fycik7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBjb25zdCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGxldCB2YWwgPSAnJztcbiAgICBpZiAodGhpcy50c2VhcmNoICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsKSB7XG4gICAgICB2YWwgPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMSAmJiB7ICRvcjogW3RoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIHsgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsOyB9XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy8gY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGFkZCBsb2FkZXJcbiAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgLy9jbG9zZSBsb2FkZXJcbiAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcmVmcmVzaGRhdGEoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJysrKysnKVxuICAgIHRoaXMuYXV0b3NlYXJjaCA9IFtdO1xuICAgIHRoaXMudHNlYXJjaCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0c2VhcmNoID0gW107XG4gICAgdGhpcy5zdGFydF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLmVuZF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuYWxsU2VhcmNoQ29uZCA9IFtdO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSA9IFtdO1xuICB9XG4gIHJlZnJlc2hhbGxkYXRhKHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICBpZiAodmFsLmZpbHRlcmVkRGF0YSAhPSBudWxsICYmIHZhbC5maWx0ZXJlZERhdGEubGVuZ3RoIDwgdGhpcy5vbGRkYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3JlZnJlc2hkYXRhJ10sXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlZnJlc2ggc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAvLyBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnIFVwZGF0ZWQhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBnZXRzdGF0dXModmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5zdGF0dXNhcnJ2YWwpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1c2FycnZhbFtiXS52YWwgPT0gdmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAnTi9BJztcbiAgfVxuICBwZGZGbGFnKHZhbDogYW55KSB7XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGF0dGVyIGJsb2snKTtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlID09IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ3JhcHVybCh2YWw6IGFueSkge1xuICAgIC8vICBmb3IgYWxsIHJvdyBjaGVja2luZ1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbClcbiAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkMiA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkMiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1ZCk7XG4gIH1cblxuICBjb3B5VGV4dChyb3c6IGFueSwgdmFsOiBzdHJpbmcpIHtcblxuICAgIGNvbnN0IGZ1bGx1cmwgPSB2YWwgKyAnJyArIHJvdztcbiAgICBjb25zdCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBzZWxCb3gudmFsdWUgPSBmdWxsdXJsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICBzZWxCb3guZm9jdXMoKTtcbiAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG5cbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0NvcGllZCBTdWNjZXNzZnVsbHkgISEgJyB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuaW50ZXJuYWxsaW5rKHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3ZhbC5yb3V0ZV0pO1xuICB9XG5cblxuICBvcGVuaW50ZXJuYWxsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCByZGF0YTogYW55ID0gW107XG4gICAgcmRhdGEucHVzaCh2YWwucm91dGUpO1xuICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgIHJkYXRhLnB1c2goZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3JhZGF0JywgcmRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHJkYXRhKTtcbiAgfVxuXG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhJyx2YWwsZGF0YSk7XG4gICAgY29uc3QgZGF0YWFyciA9IFtdO1xuICAgIC8vIGRhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICBjb25zdCB0ZW1wYXJyID0gW107XG4gICAgICB0ZW1wYXJyLnB1c2godmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdICE9ICdpbWFnZScgJiYgdmFsLmRhdGFmaWVsZHNbdl0gIT0gJ3ZpZGVvJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3MnLHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgdHlwZW9mIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGYnLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXS50b1N0cmluZygpKTtcbiAgICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNhZmUnLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2godGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3MyMicsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gPT0gJ2ltYWdlJykgeyB0ZW1wYXJyLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgPiA8YnIvPicpOyB9XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gPT0gJ3ZpZGVvJykge1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSAnJykge1xuICAgICAgICAgIGxldCB0ZW1waHRtbDogYW55ID0gKCc8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyAnIGZyYW1lYm9yZGVyPTAgYWxsb3c9YWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8YnIvPicpO1xuICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RodG1sJywgdGVtcGh0bWwsIGRhdGFbdmFsLmRhdGFmaWVsZHNdLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKCdOL0EnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgIGRhdGFhcnIucHVzaCh0ZW1wYXJyKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2xvY2FsIGRhdGEgbScsIGRhdGFhcnIpO1xuICAgIGxldCByZXM6IGFueSA9IGRhdGFhcnI7XG5cbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiByZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gcmVzW2JdWzBdKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCByZXNbYl1bMV0sIHJlc1tiXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IHJlc1tiXTsgfVxuXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgcmVzID0gcmVzZGF0YTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGFhcnInLGRhdGFhcnIpO1xuICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB9XG4gICAgcmVzLm1lc3NhZ2UgPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gtYXBpZGF0YScsICdtb2RhbC1sb2NhbGRhdGEnXSxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMgfVxuICAgIH0pO1xuICB9XG5cblxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhJyx2YWwsZGF0YSk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmFwaXVybHZhbCArIHZhbC5lbmRwb2ludDtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIHNvdXJjZVt2YWwucGFyYW1dID0gZGF0YS5faWQ7XG4gICAgaWYgKHZhbC5vdGhlcnBhcmFtICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgbiBpbiB2YWwub3RoZXJwYXJhbSkge1xuICAgICAgICBzb3VyY2VbdmFsLm90aGVycGFyYW1bbl1dID0gZGF0YVt2YWwub3RoZXJwYXJhbVtuXV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9hZGVycm93ID0gZGF0YS5faWQ7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG5cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogcmVzdWx0Lm1zZyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMnLHJlc3VsdCk7XG4gICAgICAgIGxldCByZXNkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlc3VsdC5yZXNbMF0gIT0gbnVsbCkge1xuICAgICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbXByZGF0YTogYW55ID0ge307XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhPj4+JywgcmVzZGF0YSk7XG4gICAgICAgIGlmICh2YWwuZGF0YWZpZWxkcyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBiMSBpbiB2YWwuZGF0YWZpZWxkcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbC5kYXRhZmllbGRzJywgdmFsLmRhdGFmaWVsZHNbYjFdKTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGIyIGluIGRhdGFhcnIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiMicsYjIsZGF0YVtiMl0sZGF0YWFycltiMl1bMF0pO1xuICAgICAgICAgICAgLy8gaWYgKGRhdGFhcnJbYjJdWzBdID09IHZhbC5kYXRhZmllbGRzW2IxXSkgcmVzZGF0YWZvcm1vZGFsW2IxXSA9IFtkYXRhYXJyW2IyXVswXSwgZGF0YWFycltiMl1bMV1dO1xuICAgICAgICAgICAgdGVtcHJkYXRhW3ZhbC5kYXRhZmllbGRzW2IxXV0gPSByZXNkYXRhW3ZhbC5kYXRhZmllbGRzW2IxXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICByZXNkYXRhID0gdGVtcHJkYXRhO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhYXJyID0gW107XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgICAgICAvLyBkYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICAgICAgZm9yIChjb25zdCB2IGluIHJlc2RhdGEpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wYXJyID0gW107XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHYpO1xuICAgICAgICAgIGlmICh2ICE9ICdpbWFnZScgJiYgdiAhPSAndmlkZW8nKSB7XG4gICAgICAgICAgICBpZiAocmVzZGF0YVt2XSAhPSBudWxsICYmIHR5cGVvZiAocmVzZGF0YVt2XSkgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3YnLCByZXNkYXRhW3ZdKTtcbiAgICAgICAgICAgICAgaWYgKHJlc2RhdGFbdl0udG9TdHJpbmcoKS5pbmNsdWRlcygnaWZyYW1lJykpIHtcbiAgICAgICAgICAgICAgICB0ZW1wYXJyLnB1c2godGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocmVzZGF0YVt2XSkpO1xuICAgICAgICAgICAgICB9IGVsc2UgeyB0ZW1wYXJyLnB1c2gocmVzZGF0YVt2XSk7IH1cbiAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodiA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIHJlc2RhdGFbdl0gKyAnID4gPGJyLz4nKTsgfVxuICAgICAgICAgIGlmICh2ID09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGxldCB0ZW1waHRtbDogYW55ID0gKCc8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgcmVzZGF0YVt2XSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICAgIGRhdGFhcnIucHVzaCh0ZW1wYXJyKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSBkYXRhYXJyW2JdWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIGRhdGFhcnJbYl1bMV0sIGRhdGFhcnJbYl1bMF1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSBkYXRhYXJyW2JdOyB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgICAgICBkYXRhYXJyID0gcmVzZGF0YTtcblxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjIGFwaSBkYXRhICcsIHJlc2RhdGEpO1xuICAgICAgICAvLyBsZXQgcmVzZGF0YWZvcm1vZGFsOiBhbnkgPSB7fTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzZGF0YWZvcm1vZGFsJywgZGF0YWFyciwgZGF0YWFycik7XG4gICAgICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YWFyclsnbWVzc2FnZSddID0gdmFsLmhlYWRlcm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2FwaS1kYXRhJ10sXG4gICAgICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IGRhdGFhcnIgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybjtcblxuICB9XG5cblxuICBvcGVuZXh0bGlua3dpdGhwYXJhbSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcsdmFsLGRhdGEpO1xuICAgIGxldCBxdGV4dDogYW55ID0gJyc7XG4gICAgbGV0IGZ1bGxsaW5rOiBhbnkgPSAnJztcbiAgICBmdWxsbGluayA9IHZhbC5saW5rO1xuICAgIGlmICh2YWwucGFyYW10eXBlID09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgcXRleHQgPSB2YWwucGFyYW1bdl0ucSArICc9JyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG4gICAgICAgIGlmIChwYXJzZUludCh2KSA9PSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnPycgKyBxdGV4dDsgfVxuICAgICAgICBpZiAocGFyc2VJbnQodikgIT0gMCkgeyBmdWxsbGluayA9IGZ1bGxsaW5rICsgJyYnICsgcXRleHQ7IH1cbiAgICAgIH1cbiAgICAgIC8vIHZhbC5saW5rPWZ1bGxsaW5rO1xuICAgIH1cbiAgICBpZiAodmFsLnBhcmFtdHlwZSAhPSBudWxsICYmIHZhbC5wYXJhbXR5cGUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIC8vIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyBcIj1cIiArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG5cbiAgICAgICAgZnVsbGxpbmsgPSBmdWxsbGluayArICcvJyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG5cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2V0VGltZW91dFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsaW5rJyxmdWxsbGluayxkYXRhLHF0ZXh0KTtcbiAgICB9LCAxMCk7XG5cbiAgICB3aW5kb3cub3BlbihmdWxsbGluaywgJ19ibGFuaycpO1xuICB9XG5cblxuICBjbGlja3VybCh2YWw6IGFueSwgdXJsOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gdXJsICsgJycgKyB2YWwuX2lkICsgJycgKyB0aGlzLnBkZl9saW5rX3ZhbDtcbiAgICB3aW5kb3cub3BlbihsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGNoZWNrZWRsaXN0KCkge1xuICAgIC8vIHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGRhdGE6IGFueSA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLm1hcCh4ID0+IHguX2lkKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrZWRsaXN0JywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWxkYXRhKTtcbiAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZXNlbGVjdGlvbmNoYW5nZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkIH0pO1xuICAgIH0sIDEwMCk7XG5cblxuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGlvbi5zZWxlY3QpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0FsbFNlbGVjdGVkJywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gICAgdGhpcy5jaGVja2VkbGlzdCgpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxuXG4gIGNyZWF0ZURhdGEocG9pbnQ6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgJ18nKV0gPSBwb2ludFtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIC8qYXBwbHlGaWx0ZXIxKGZpbHRlclZhbHVlOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbC52YWx1ZSk7XG4gICAgbGV0IHZhbHVlPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHZhbC52YWx1ZSk7XG5cbiAgICB2YWx1ZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLyEqIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSBmdW5jdGlvbihkYXRhLCBmaWx0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgLy8gcmV0dXJuIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9KiEvXG4gIH0qL1xuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSwgcm93KSB7XG5cbiAgICAvKlxuICAgICBpZiAoY29sX25hbWVbJ2NvbHVtbkRlZiddPT0ncHJvZ3Jlc3MnICYmIHJvd1sncHJvZ3Jlc3MnXT09JzEwMCcpe1xuICAgICByZXR1cm4geydjb2xvcicgOiAncmVkJ31cbiAgICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIHt9XG4gICAgIH1cbiAgICAgKi9cblxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIC8qKnNob3cgdmlkZW8gbW9kYWwgb24gY2xpY2sgb2YgdGhhbW5haWwgZnVuY3Rpb24gYnkgc291cmF2ICovXG4gIGZldGNodmlkZW8odmlkZW9kYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvZGF0YScsdmlkZW9kYXRhKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFZpZGVvUGxheWVyLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JywgJ3ZpZGVvLW1vZGFsJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgcHJldmlld0RhdGE6IHZpZGVvZGF0YSB9XG4gICAgfSk7XG4gIH1cbiAgb3Blbm5vdGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRlcnJvdyA9IHZhbC5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLm5vdGVzLmxpc3RlbmRwb2ludCwgdGhpcy5qd3R0b2tlbnZhbCwgeyBpZDogdmFsLl9pZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnJlcywgJ2xpc3Qgbm90ZXMnKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAvLyB0aGlzLmRhdGEubm90ZXN2YWwgPSAnJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3RlcycsIHZhbCk7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ25vdGVzLW1vZGFsJ10sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgbm90ZXM6IHRydWUsIGFwaXVybDogdGhpcy5hcGl1cmx2YWwsXG4gICAgICAgICAgbm90ZWRhdGE6IHRoaXMubGliZGF0YXZhbC5ub3Rlcywgcm93ZGF0YTogdmFsLFxuICAgICAgICAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgICAgIGxpc3RkYXRhOiByZXN1bHQucmVzLFxuICAgICAgICAgIF9zbmFja0JhcjogdGhpcy5fc25hY2tCYXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5rZWVwUGFnaW5hdGlvbiA9IDE7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICB9XG5cbiAgdmlld2RhdGEoZGF0YTE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhMSArKysrKysrKycsIGRhdGExKVxuICAgIGxldCBkYXRhOiBhbnk7XG4gICAgZGF0YSA9IGRhdGExO1xuICAgIGNvbnN0IGRhdGEyOiBhbnkgPSBbXTtcbiAgICBsZXQgaGVhZGVyRGF0YTogYW55ID0ge307XG5cbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyLmhlYWRlciAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlci5oZWFkZXIgIT0gJycpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCc9PSArKysrKysrKycsIHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlcilcbiAgICAgIGhlYWRlckRhdGEgPSB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXI7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgY29uc3QgZmxhZ2s6IGFueSA9ICcnO1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gdHJ1ZSkgeyBkYXRhW2tleV0gPSAnWWVzJzsgfVxuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gZmFsc2UpIHsgZGF0YVtrZXldID0gJ05vJzsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9ICc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldICsgJz48YnIvPic7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGRhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltZ3ZhbCk7PVwiK1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFba2V5XVtrXS5yZXBsYWNlKC8nL2csICcnKSk7XG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFba2V5XVtrXSArICc+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIGRhdGFba2V5XVtrXSArICc8L3NwYW4+PGJyLz4nKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XVtrXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIG9iamsgKyAnIDogJyArIGRhdGFba2V5XVtrXVtvYmprXSArICc8L3NwYW4+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbiBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtuXSAhPSBudWxsICYmIGRhdGFbbl0gIT0gJycpIHtcbiAgICAgICAgZGF0YTJbbl0gPSBkYXRhW25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsKSB7XG4gICAgICAvLyBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICB9XG4gICAgbGV0IHJlcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEyKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlldyBkYXRhJyxyZXMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgcmVzID0gcmVzZGF0YTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgfVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgICAgbWF4SGVpZ2h0OiAnMTAwMHZoJyxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RldGFpbC12aWV3J10sXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogcmVzLCBoZWFkZXJEYXRhOiBoZWFkZXJEYXRhIH1cbiAgICB9KTtcblxuICB9XG4gIC8vIHBhcmVudC1ib3R0b20tY2xhc3NcbiAgbWFuYWdlc3RhdHVzKGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6IFsnY3VzdG9tLWJvdHRvbXNoZWV0JywgJ3BhcmVudC1ib3R0b20tY2xhc3MnXSwgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1cyh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC51cGRhdGVlbmRwb2ludCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9sZGRhdGFbY10uX2lkID09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdtYW5hZ2Utc3RhdHVzJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmxpc3RuZXIocm93OiBhbnksIGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2N1c3RvbWJ1dHRvbmxpc3RuZXInLCByb3csIGN1c3RvbWJ1dHRvbik7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7XG4gICAgICBhY3Rpb246ICdjdXN0b21idXR0b25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBjdXN0b21idXR0b25jbGljazoge1xuICAgICAgICBkYXRhOiByb3csIGJ0bmluZm86IGN1c3RvbWJ1dHRvblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBjdXN0b21idXR0b25mdW5jKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7ICAgIC8vIHJvdyBkYXRhXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21idXR0b252YWwpOyAgICAvLyBvYmplY3QgZnJvbSB3aGVyZSB0aGUgbGlicmFyeSBoYXMgYmVlbiB1c2VkXG4gICAgbGV0IHVuc2FmZXVybDogYW55ID0gdGhpcy5jdXN0b21idXR0b252YWwudXJsOyAgIC8vIGlmcmFtZSB1cmxcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzKSB7XG4gICAgICB1bnNhZmV1cmwgPSB1bnNhZmV1cmwgKyAnLycgKyBkYXRhW3RoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkc1tiXV07XG4gICAgfVxuICAgIHVuc2FmZXVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpOyAgIC8vIGZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBbeyBkYXRhLCBjdXN0b21kYXRhOiB1bnNhZmV1cmwgfV0gfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpIHtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy8gZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICBjb25zdCBuZXdzdGF0dXM6IGFueSA9IHJlc3VsdC52YWw7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50bWFueSwgaWRzLCByZXN1bHQudmFsLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZih0aGlzLm9sZGRhdGFbY10uX2lkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IG5ld3N0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICAvLyB0aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3Rvb2dsZS1tYW55J10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRlbGV0ZW11bHRpcGxlKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW11bHRpcGxlJ10sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZXNlIHJlY29yZHM/IFRoaXMgcHJvY2VzcyBjYW4gbm90IGJlIHVuZG9uZS4nLFxuICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVNYW55RGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC5kZWxldGVlbmRwb2ludG1hbnksIGlkcywgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cblxuICBkZWxldGVkYXRhKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGFsZXJ0KDUpO1xuICAgIC8vIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxkYXRhLHRoaXMuand0dG9rZW52YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIDg4OSAtLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnand0dG9rZW52YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtc2luZ2xlJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQ/IFRoaXMgcHJvY2VzcyBjYW4gbm90IGJlIHVuZG9uZS4nLFxuICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBkYXRhLl9pZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLXNpbmdsZSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBlZGl0ZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5lZGl0cm91dGV2YWwsIGRhdGEuX2lkXSk7XG4gIH1cblxuXG4gIHNvcnR0YWJsZShmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCwgdHlwZSlcbiAgICB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC50eXBlID0gdHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cblxuXG4gIGFsbFNlYXJjaCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhpdCBsaW1pdGNvbmR2YWxcIix0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXQgbGltaXRjb25kdmFsXCIsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmtlZXBQYWdpbmF0aW9uIGZpcnN0Jyx0aGlzLmtlZXBQYWdpbmF0aW9uKTtcblxuICAgIC8vIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBjb25zdCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsICsgJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy50c2VhcmNoW3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hzdHJzYXJyLCAndGhpcy5zZWFyY2hzdHJzYXJyJyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gsICdzZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoJyk7XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbCBzZWFyY2ggdGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoW2ldKTtcbiAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcblxuICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICBsZXQgdGVtcGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG5cbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGVtcGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgdGVtcGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRhbmQgMycpXG4gICAgICAgIC8vIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuXG4gICAgICAgIHRlbXBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcblxuICAgICAgfVxuICAgICAgaWYgKGF1dG9zZWFyY2guJGFuZCA9PSBudWxsKSB7IGF1dG9zZWFyY2guJGFuZCA9IFtdOyB9XG4gICAgICBhdXRvc2VhcmNoLiRhbmQucHVzaCh0ZW1wYXV0b3NlYXJjaCk7XG5cbiAgICAgIC8vIGF1dG9zZWFyY2ggPSBPYmplY3QuYXNzaWduKHt9LHRlbXBhdXRvc2VhcmNoLGF1dG9zZWFyY2gpO1xuICAgICAgbGV0IGF1dG9jb3VudDogYW55O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCA9PSBudWxsIHx8IHR5cGVvZiBPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXV0b2NvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dG9jb3VudCA9IE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9jb3VudCwgJ2F1dG9zZWFyY2gubGVuZ3RoKysrKycsIHRlbXBhdXRvc2VhcmNoLE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCxPYmplY3Qua2V5cyhhdXRvc2VhcmNoKSlcblxuICAgICAgLy8gYXV0b3NlYXJjaFthdXRvY291bnRdID0gdGVtcGF1dG9zZWFyY2g7XG5cbiAgICB9XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coJ2F1dG9zIHFxKysnLCBhdXRvc2VhcmNoLCB0aGlzLmF1dG9zZWFyY2gpO1xuXG5cbiAgICAvLyBidXR0b24gU2VhcmNoIERhdGFcblxuICAgIGNvbnN0IGJ1dHRvbnNlYXJjaDogYW55ID0ge307XG4gICAgZm9yIChsZXQgYnMgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZSkge1xuICAgICAgICBjb25zdCBidDogYW55ID0ge307XG4gICAgICAgIGJ0W3RoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10uZmllbGRdID0gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZVtrXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYnV0dG9uc2VhcmNoLiRvciA9PSBudWxsKSB7IGJ1dHRvbnNlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhidCwnYnQnLGJzLCdicycpXG4gICAgICAgIGJ1dHRvbnNlYXJjaC4kb3IucHVzaChidCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvbnNlYXJjaCcpXG5cblxuICAgIGlmICh0eXBlb2YgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSB0aGlzLmxpbWl0Y29uZHZhbC5za2lwO1xuICAgICAgLy8gIGNvbnNvbGUubG9nKFwidHlwZW9mKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkhPSd1bmRlZmluZWQnXCIpO1xuXG4gICAgICB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLmxpbWl0Y29uZHZhbDtcbiAgICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uICE9IDEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmtlZXBQYWdpbmF0aW9uIT0xXCIpO1xuXG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgICAvLyBzb3VyY2UuY29uZGl0aW9uLnNraXA9MDtcbiAgICAgICAgLy8gdGhpcy5rZWVwUGFnaW5hdGlvbj0wO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgIHRoaXMub2xkbGltaXRyYW5nZSA9IHRoaXMubGltaXRjb25kdmFsO1xuICAgIH1cbiAgICBsZXQgY29uZGl0aW9ub2JqOiBvYmplY3QgPSB7fTtcblxuICAgIGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIGJ1dHRvbnNlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdzZWxlY3RTZWFyY2hfY29uZGl0aW9uJylcblxuICAgIHRoaXMuYWxsU2VhcmNoQ29uZCA9IGNvbmRpdGlvbm9iajtcbiAgICAvLyBjb25zb2xlLndhcm4oXCJ0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YVwiLHRoaXMuYWxscGFnaW5hdGlvbnBvc3REYXRhKTtcbiAgICBpZiAodGhpcy5rZWVwUGFnaW5hdGlvbiAhPSAxKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgIC8vIHNvdXJjZS5jb25kaXRpb24uc2tpcD0wO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICAgIC8vIHRoaXMua2VlcFBhZ2luYXRpb249MDtcbiAgICB9XG4gICAgLy8gY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmogJiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbjtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBmb3IgKGxldCBiIGluIGNvbmRpdGlvbm9iaikge1xuICAgIC8vICAgLy8gaWYoY29uZGl0aW9ub2JqW2JdKVxuICAgIC8vICAgZm9yIChsZXQgYyBpbiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbikge1xuICAgIC8vICAgICBpZiAoYyA9PSBiKSB7XG4gICAgLy8gICAgICAgLy8gY29uZGl0aW9ub2JqW2JdPXt9O1xuICAgIC8vICAgICAgIGxldCB0b3RhbGNvbmQ6IGFueTtcbiAgICAvLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb25vYmpbYl0pICE9ICdvYmplY3QnKVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHsgJGVxOiBjb25kaXRpb25vYmpbYl0gfSk7XG4gICAgLy8gICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIGNvbmRpdGlvbm9ialtiXSk7XG5cbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnaW4gaWYgYmxrJywgYywgYiwgY29uZGl0aW9ub2JqW2JdLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXSwgdG90YWxjb25kKTtcbiAgICAvLyAgICAgICBjb25kaXRpb25vYmpbYl0gPSB0b3RhbGNvbmQ7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2NdID0gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY107XG5cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgJ2NvbmRpdGlvbm9iaicsIGNvbmRpdGlvbm9iaiwgJ3RoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uJywgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIC8vIGNvbmRpdGlvbm9iaiA9IGNvbmRpdGlvbm9iai5jb25jYXQodGhpcy5saWJkYXRhLmJhc2Vjb25kaXRpb24pO1xuICAgIGlmICh0eXBlb2YgdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGEgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnNvbGUud2FybihcImNvbmRpdGlvbm9ialwiLCBjb25kaXRpb25vYmopO1xuXG4gICAgICBzb3VyY2UgPSB0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YTtcbiAgICAgIGlmICh0eXBlb2YgY29uZGl0aW9ub2JqICE9ICd1bmRlZmluZWQnICYmIGNvbmRpdGlvbm9iaiAhPSBudWxsKSB7XG4gICAgICAgIHNvdXJjZS5zZWFyY2hjb25kaXRpb24gPSBjb25kaXRpb25vYmo7XG4gICAgICAgIC8vICBzb3VyY2UuY29uZGl0aW9uLnNraXA9MDtcbiAgICAgICAgaWYgKHRoaXMua2VlcFBhZ2luYXRpb24gIT0gMSkge1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgICAgICAgIC8vIHNvdXJjZS5jb25kaXRpb24uc2tpcD0wO1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgICAgICAgLy8gdGhpcy5rZWVwUGFnaW5hdGlvbj0wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG4gICAgfVxuXG5cbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZGl0aW9ub2JqKS5sZW5ndGggPCAwKSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBTZWFyY2ggY3JpdGVyaWEgc2VsZWN0ZWQgISEgJyB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAvLyByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAodGhpcy5rZWVwUGFnaW5hdGlvbiAhPSAxKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5rZWVwUGFnaW5hdGlvbiE9MSBsYXN0IHBhcnRcIik7XG4gICAgICAgIHNvdXJjZS5jb25kaXRpb24uc2tpcCA9IDA7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5rZWVwUGFnaW5hdGlvbiA9PSAxKSB7XG4gICAgICAgIHRoaXMua2VlcFBhZ2luYXRpb24gPSAwO1xuXG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUud2FybihcInNvdXJjZVwiLHNvdXJjZSk7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmtlZXBQYWdpbmF0aW9uIGxhc3QnLHRoaXMua2VlcFBhZ2luYXRpb24pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50IGxvZysrXCIsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFnZUNvdW50QXJyYXkgbG9nKytcIiwgdGhpcy5wYWdlQ291bnRBcnJheSk7XG5cbiAgICAgICAgdGhpcy5wYWdlQ291bnRBcnJheSA9IG5ldyBBcnJheShNYXRoLmNlaWwodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgICAgICB0aGlzLmxhc3RwYWdlQ291bnRBcnJheSA9IE1hdGguY2VpbCh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcblxuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3Rpb246ICdzZWFyY2gnLFxuICAgICAgICAgICAgICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLFxuICAgICAgICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgICAgICAgICAgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsXG4gICAgICAgICAgICAgIHJlczogcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgYWxsU2VhcmNoQ29uZDogdGhpcy5hbGxTZWFyY2hDb25kLFxuICAgICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICAgIHNlYXJjaGRhdGE6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLFxuICAgICAgICAgICAgICBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBhY3Rpb246ICdzZWFyY2gnLFxuICAgICAgICAgICAgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCxcbiAgICAgICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgICAgICAgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsXG4gICAgICAgICAgICByZXM6IHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGgsXG4gICAgICAgICAgICBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsXG4gICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxcbiAgICAgICAgICAgIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsXG4gICAgICAgICAgICBmbGFnOiAnbm9fcmVjb3JkJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIHRoaXMucmVzY291bnQgPSAwOyBcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIHN1Y2ggc2VhcmNoIHJlY29yZCBmb3VuZCAhIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50IGxvZysrXCIsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG4gICAgICAgIFxuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICAgIHRoaXMucGFnZUNvdW50QXJyYXkgPSBuZXcgQXJyYXkoTWF0aC5jZWlsKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsIC8gdGhpcy5saW1pdGNvbmR2YWwubGltaXQpKTtcbiAgICAgICAgdGhpcy5sYXN0cGFnZUNvdW50QXJyYXkgPSBNYXRoLmNlaWwodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCk7XG4gICAgICAgIGlmIChyZXN1bHQuY291bnQgPT0gMCkgeyB0aGlzLnRhYmxlZmxhZyA9IDE7IH0gZWxzZSB7IHRoaXMudGFibGVmbGFnID0gMDsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gZmFsc2U7XG4gIH1cblxuICBnZXR0eXBlb2YodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mICh2YWwpO1xuICB9XG5cblxuICAvLyBvcGVuIEJvdHRvbSBTaGVldCBGb3IgU2VhcmNoXG4gIG9wZW5Cb3R0b21TaGVldEZvclNlYXJjaChkYXRhOiBhbnksIGluZGV4KSB7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCAnb3BlbkJvdHRvbVNoZWV0Rm9yU2VhcmNoJywgaW5kZXgpXG4gICAgY29uc3QgYnMgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsRm9yQnV0dG9tU2VhcmNoLCB7IHBhbmVsQ2xhc3M6ICdidXR0b24tc2VhcmNoLW1vZGFsJywgZGF0YTogeyBpdGVtczogZGF0YSB9IH0pO1xuICAgIGJzLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgYnMuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCsrKys9PT09IGRhdGEnLCBkYXRhKVxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5mbGFnID09ICd5ZXMnKSB7XG4gICAgICAgIGNvdW50ID0gMTtcbiAgICAgICAgdmFyIHNlYXJjaEZsYWcgPSAwO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCsrKys9PT09Pz8nLCBpbmRleClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5idXR0b25TZWFyY2hEYXRhLCAnYnV0dG9uU2VhcmNoRGF0YSAxJylcblxuICAgICAgICBpZiAodGhpcy5idXR0b25TZWFyY2hEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtpXS5maWVsZCA9PSByZXN1bHQuaXRlbXMuZmllbGQpIHtcbiAgICAgICAgICAgICAgY291bnQgPSAyO1xuICAgICAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcblxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJ1ZSArKysgY291bnQnLCBjb3VudClcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiByZXN1bHQuc2VsZWN0ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhW2ldLnZhbHVlLnB1c2gocmVzdWx0LnNlbGVjdGVkRGF0YVtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlYXJjaEZsYWcgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDInKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50LCAnY291bnQgZWxzZSBjaGVjaycpXG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25TZWFyY2hEYXRhIDInKVxuXG4gICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5wdXNoKHsgdmFsdWU6IHJlc3VsdC5zZWxlY3RlZERhdGEsIGtleTogaW5kZXgsIGZpZWxkOiByZXN1bHQuaXRlbXMuZmllbGQgfSk7XG4gICAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLnB1c2goeyB2YWx1ZTogcmVzdWx0LnNlbGVjdGVkRGF0YSwga2V5OiBpbmRleCwgZmllbGQ6IHJlc3VsdC5pdGVtcy5maWVsZCB9KTtcbiAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDEnKVxuXG4gICAgICAgIGlmIChzZWFyY2hGbGFnID09IDEpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGbGFnLCAnc2VhcmNoRmxhZyAyJylcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIGNsZWFyIEJ1dHRvbiBTZWFyY2ggQ2hpcHMgIGRhdGFcbiAgY2xlYXJCdXR0b25TZWFyY2hDaGlwcyhicywgaSwgaXRlbSwgaikge1xuICAgIC8vIGNvbnNvbGUubG9nKGJzLCBpLCBpdGVtLCBqLCAnYnMsaSxpdGVtLGonKTtcbiAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGFbaV0udmFsdWUuc3BsaWNlKGosIDEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvblNlYXJjaERhdGEgc3BsaWNlJylcblxuICAgIC8vIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFticy5rZXldLnZhbHVlc1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLmZpZWxkID09IGJzLmZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0pXG4gICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXS52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaCwndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgfVxuXG5cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIHN0YXJ0ICovXG4gIGFydGlzdHhwUHJldmlldyhzaW5nbGVEYXRhOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHsgc291cmNlOiAnYmxvY2tjaGFpbnVzZXJfdmlldycsIGNvbmRpdGlvbjogeyBwb3N0c19pZF9vYmplY3Q6IHNpbmdsZURhdGEuX2lkIH0sIHRva2VuOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3REYXRhKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtYXhwJ10sXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAvLyBwdWJsaWMgbm90ZXN2YWw6YW55PW51bGwsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWIgZGF0YSBpbiBtb2RhbCAnLCB0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdGhpcy5kYXRhLnJvd2RhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLmJsb2d0aXRsZSk7XG4gICAgdGhpcy5kYXRhLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGF0YS5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuZGF0YS5sb2FkZXJ2YWx1ZSA9IDUwO1xuICAgIHRoaXMuZGF0YS5idWZmZXJWYWx1ZSA9IDc2O1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgZGVsZXRlbm90ZShpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGVsZXRlTm90ZXNNb2RhbCwge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbm90ZXMtbW9kYWwnXSxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZVxuICAgICAgLy8gZGF0YToge1xuICAgICAgLy8gICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAvLyAgIG5vdGVzOiB0cnVlLCBhcGl1cmw6IHRoaXMuYXBpdXJsdmFsLFxuICAgICAgLy8gICBub3RlZGF0YTogdGhpcy5saWJkYXRhdmFsLm5vdGVzLCByb3dkYXRhOiB2YWwsXG4gICAgICAvLyAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgLy8gICBsaXN0ZGF0YTogcmVzdWx0LnJlcyxcbiAgICAgIC8vICAgX3NuYWNrQmFyOiB0aGlzLl9zbmFja0JhclxuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRcIixyZXN1bHQpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIChyZXN1bHQucmVzcG9uc2UpICE9IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0LnJlc3BvbnNlICE9IFwiXCIpIHtcbiAgICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgICBpZDogdGhpcy5kYXRhLnJvd2RhdGEuX2lkLFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICAgLy8gbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICAgIC8vIHVzZXI6IHRoaXMuZGF0YS5ub3RlZGF0YS51c2VyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBpbmRleDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuZGVsZXRlZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGEubGlzdGRhdGEucHVzaCh7IHVzZXJpZDogdGhpcy5kYXRhLm5vdGVkYXRhLmN1cnJlbnR1c2VyZnVsbG5hbWUsIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0pO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRhdGEubGlzdGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nMSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB9XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5kYXRhLmFwaXVybCArIHRoaXMuZGF0YS5ub3RlZGF0YS5hZGRlbmRwb2ludCwgdGhpcy5kYXRhLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdhZGQgbm90ZXMnKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5saXN0ZGF0YSA9PSBudWxsKSB7IHRoaXMuZGF0YS5saXN0ZGF0YSA9IFtdOyB9XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnVuc2hpZnQoeyBfaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCwgbm90ZXM6IHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlciwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0gfSk7XG4gICAgICAgICAgdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcsdGhpcy5kYXRhLmxpc3RkYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdibGFuayBub3RlcycpO1xuICAgICAgdGhpcy5kYXRhLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOb3RlcyBjYW5cXCd0IGJlIGJsYW5rICEhICcgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YSkge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cbn1cblxuLy8gZGVsZXRlIG5vdGVzIGNvbmZpcm1hdGlvbiBtb2RhbFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVsZXRlbm90ZXNDb25maXJtYXRpb25Nb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVsZXRlbm90ZXNDb25maXJtYXRpb25Nb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlTm90ZXNNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWxldGVOb3Rlc01vZGFsPiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oXCJib3R0b20tc2hlZXRcIixkYXRhKTtcbiAgfVxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICByZXNwb25zZUZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7IHJlc3BvbnNlOiB2YWx1ZSB9KTtcbiAgfVxuXG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cblxuICBvcGVuTGluayh2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXNlYXJjaC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXNlYXJjaC1tb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb3JCdXR0b21TZWFyY2gge1xuXG4gIHB1YmxpYyBidXR0b25TZWFyY2hEYXRhOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hWYWw6IGFueSA9ICcnO1xuICBwdWJsaWMgYWxsQnV0dG9uRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBsb2FkaW5nX2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGVycm1zZzogYW55ID0gJyc7XG4gIHB1YmxpYyBtYXRDaGlwRGF0YTogYW55ID0gW11cbiAgICA7XG4gIHB1YmxpYyBtYXRBdXRvc2VhcmNoRGF0YTogYW55ID0gW107XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm5vdHRvUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxGb3JCdXR0b21TZWFyY2g+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImJvdHRvbS1zaGVldC1zZWFyY2hcIiwgZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0ge307XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gZGF0YTtcbiAgICB0aGlzLmFsbEJ1dHRvbkRhdGEgPSBkYXRhLml0ZW1zLnZhbHVlO1xuICB9XG5cbiAgY2hvb3NlQ2hpcEl0ZW0oZGF0YSwgaSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICc/P2RhdGEnKVxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIC8vIHN1Ym1pdCBcbiAgc2VhcmNoQnlJdGVtKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWREYXRhKVxuICAgIHRoaXMuZGF0YS5mbGFnID0gJ3llcyc7XG4gICAgdGhpcy5kYXRhLnNlbGVjdGVkRGF0YSA9IHRoaXMuc2VsZWN0ZWREYXRhO1xuICAgIC8vIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlbW92ZSh2YWwsIGkpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnB1c2godmFsKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gdGhpcy5hbGxCdXR0b25EYXRhO1xuXG4gIH1cblxuICBzZWFyY2hCeUtleXdvcmQodmFsdWUpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaFZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IHRydWU7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEudXJsICsgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEuZW5kcG9pbnQ7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNlYXJjaF9zdHJcIjogdmFsdWUsXG4gICAgICAgIFwibGltaXRcIjogNTBcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RTZWFyY2gxKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXM7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG5cbiAgICAgICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcy5zbGljZSgwLCA1MCk7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCcsIHRoaXMubG9hZGluZ19mbGFnKVxuICAgICAgICAgIHRoaXMubWF0QXV0b3NlYXJjaERhdGEgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJybXNnID0gXCJQbGVhc2UgRW50ZXIgS2V5d29yZHNcIjtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRhdGEuZmxhZyA9ICdubyc7XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcblxuICB9XG5cblxufVxuXG5cblxuLyoqbGlzdGluZyB2aWRlbyBwbGF5ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZGVvcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICd2aWRlb3BsYXllci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvcGxheWVyTW9kYWwnLGRhdGEucHJldmlld0RhdGEudmlkZW8pO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyBJbWFnZSBWaWV3ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1nX21vZGFsX3ZpZXcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyB7XG5cbiAgLy8gcHVibGljIGRhdGE6YW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2VWaWV3TW9kYWwnLCBkYXRhKTtcbiAgfVxuICBhZGRub3RlcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nJywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrYmFyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==