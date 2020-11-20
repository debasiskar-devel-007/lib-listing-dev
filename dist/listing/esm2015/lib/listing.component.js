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
    // searchResult$: Observable<SearchResult[]>;
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
     */
    constructor(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar, _elementRef) {
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
        this.myControl = new FormControl();
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
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        this.selectsearch = [];
        this.initiateSearch = false;
        this.onLiblistingChange = new EventEmitter();
        this.onLiblistingButtonChange = new EventEmitter();
        this.searchstrsarr = [];
        this.oldlimitrange = [];
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
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 2000,
                            data: { errormessage: 'New Search of data loaded ' }
                        });
                    }
                    else {
                        this.currentautosearcharr = [];
                        this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: 'No such search record found !!' }
                        });
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
        this.oldlimitrange.push(limitcondval);
        // console.log('limitcondval',this.limitcondval);
    }
    /**
     * @param {?} date_search_source_countval
     * @return {?}
     */
    set date_search_source_count(date_search_source_countval) {
        this.date_search_source_countval = date_search_source_countval;
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
        // console.log('libdataval',this.libdataval);
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
    /*@Directive({
        selector: '[Listing]'
      })*/
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
            const tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i]}`, cell: (/**
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
            if (this.search_settingsval.datesearch != null && this.search_settingsval.datesearch[0].value != null && this.search_settingsval.datesearch[0].value != '') {
                this.initiateSearch = true;
                this.search_settingsval.datesearch[0].value.$lte = this.search_settingsval.datesearch[0].value.$lte - 86399000;
                this.start_date = moment(new Date(this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-MM-DD").toString();
                this.end_date = moment(new Date(this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-MM-DD").toString();
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
     * @return {?}
     */
    paging(val) {
        // const lval: any = this.limitcondval;
        // console.log(this.limitcondval, 'lim val');
        if (this.limitcondval.pagecount == null)
            this.limitcondval.pagecount = 1;
        if (this.limitcondval.limit == null)
            this.limitcondval.limit = 10;
        if (this.limitcondval.limit != null && this.limitcondval.limit > 100) {
            this.limitcondval.limit = 100;
            this._snackBar.openFromComponent(SnackbarComponent, {
                duration: 2000,
                data: { errormessage: 'You can see maximum 100 records at once !' }
            });
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
            if (this.limitcondval.pagecount == 1) {
                this.limitcondval.skip = 0;
            }
            else {
                this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
            }
            // this.limitcondval.pagecount--;
        }
        if (this.limitcondval.pagecount > (maxpagecount + 1)) {
            this.limitcondval.pagecount = maxpagecount + 1;
            this.limitcondval.skip = (this.limitcondval.pagecount - 1) * this.limitcondval.limit;
        }
        // console.log(val,'ss',this.datacollectionval,this.limitcondval);
        /** @type {?} */
        const textSearch = {};
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
        /** @type {?} */
        const link = this.apiurlval + '' + this.datacollectionval;
        /*let data:any={
          "condition":{
            limit:this.limitcondval.limit,
            skip:this.limitcondval.skip
          }
    
        }*/
        this.loading = true;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        res => {
            this.result = res;
            // console.log(this.result,'res');
            if (this.result.results.res != null && this.result.results.res.length > 0) {
                this.onLiblistingChange.emit({ action: 'paging', limitdata: this.limitcondval, searchcondition: conditionobj, sortdata: this.sortdataval, results: this.result.results.res });
                // if (this.libdataval.footersettings != null) {
                //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                // }
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
                this.allSearch();
            }));
        }));
    }
    /**
     * @param {?} data1
     * @return {?}
     */
    viewdata(data1) {
        /** @type {?} */
        let data;
        data = data1;
        /** @type {?} */
        const data2 = [];
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
            data: { isconfirmation: false, data: res }
        });
    }
    /**
     * @param {?} data
     * @return {?}
     */
    managestatus(data) {
        /** @type {?} */
        const bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
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
        // console.log("hit");
        // console.log("hit");
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
                // console.log(autosearch.$and,'autosearch.$and 3')
                autosearch.$or.push(tv);
            }
        }
        // console.log('autos qq++', autosearch,this.autosearch);
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
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        this.oldlimitrange = this.limitcondval;
        /** @type {?} */
        let conditionobj = {};
        conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, buttonsearch, this.selectSearch_condition, this.libdataval.basecondition);
        // console.log(this.selectSearch_condition, 'selectSearch_condition')
        this.allSearchCond = conditionobj;
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
        // console.log('con...', conditionobj, 'ed', this.end_date, 'l', Object.keys(conditionobj).length);
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
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            res => {
                /** @type {?} */
                let result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    this.onLiblistingChange.emit({ action: 'search', limitdata: this.limitcondval, searchcondition: conditionobj, sortdata: this.sortdataval });
                    this.dataSource = new MatTableDataSource(result.results.res);
                    this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
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
                template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n          \n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n                \n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    <!-- <span>dddddd</span> -->\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n        \n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                                placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n            \n \n                <!-- <br><br> <br><br> -->\n \n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"allSearch()\">Search</button>\n                        </ng-container>  \n\n                        <br>\n                    </span>\n\n                </div>\n                \n             \n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true\" class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\"\n                                class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n        \n                \n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n                \n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\" *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\" >\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n                                <span [innerHtml]=\"column.header\"></span>\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n\n                            </span>\n\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <!-- loader -->\n                            <section class=\"example-section example-section-button-1 \">\n                                <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \"\n                                    [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                                </mat-progress-bar>\n                            </section>\n                            <!-- note block -->\n                            <ng-container *ngIf=\"libdataval.notes!=null \">\n                                <button mat-raised-button color=\"primary\" class=\"notebtncls\" (click)=\"opennotes(row) \">\n                                    <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                    <span class=\"notebracket1\">(</span>\n                                    <span class=\"notecountc\"> {{row.notescount}}</span>\n\n                                    <span class=\"notebracket2\">)</span>\n                                </button>\n                            </ng-container>\n                            <!--custom buttions block -->\n                            <ng-container\n                                *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                    <section class=\"custombutton{{cb}}\">\n\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                            <!-- ss {{row['status']}} -->\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                    <button mat-raised-button\n                                                        color=\"primary\">{{custombutton.label}}</button>\n                                                </a>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='action'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                        </ng-container>\n                                    </section>\n\n                                </ng-container>\n                            </ng-container>\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\">\n                                        toggle_off\n                                    </i>\n                                </span>\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}"]
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
    { type: ElementRef }
];
ListingComponent.propDecorators = {
    onLiblistingChange: [{ type: Output }],
    onLiblistingButtonChange: [{ type: Output }],
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
    ListingComponent.prototype.myControl;
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
    ListingComponent.prototype.initiateSearch;
    /** @type {?} */
    ListingComponent.prototype.onLiblistingChange;
    /** @type {?} */
    ListingComponent.prototype.onLiblistingButtonChange;
    /** @type {?} */
    ListingComponent.prototype.searchstrsarr;
    /** @type {?} */
    ListingComponent.prototype.oldlimitrange;
    /** @type {?} */
    ListingComponent.prototype.stateGroups;
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
}
export class Confirmdialog {
    /**
     * @param {?} _apiService
     * @param {?} dialogRef
     * @param {?} data
     * @param {?} sanitizer
     */
    constructor(_apiService, dialogRef, data, sanitizer) {
        this._apiService = _apiService;
        this.dialogRef = dialogRef;
        this.data = data;
        this.sanitizer = sanitizer;
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
                template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>Notes for :\n                        <ng-container *ngIf=\"data.notedata.header!=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\"> {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\"><span>By:</span>{{note.notes.user}}</div>\n                        <div mat-line class=\"line-datetime\"> <span>On:</span> {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\" (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\" *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\" [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\" *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\" [innerHtml]=\"arr\"></span>\n                                <span *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\" [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
            }] }
];
/** @nocollapse */
Confirmdialog.ctorParameters = () => [
    { type: ApiService },
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
    { type: DomSanitizer }
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
// button-search-Modal
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3pELE9BQU8sS0FB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bEIsU0FBSSxHQUFKLElBQUksQ0FBSztRQUU1QyxrQ0FBa0M7SUFDcEMsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxtQ0FBbUM7Z0JBQzdDLGtGQUFxRDt5QkFDNUM7Ozs7R0FJUjthQUNGOzs7O1lBamxGeUMsY0FBYzs0Q0FxbEZuRCxNQUFNLFNBQUMsa0JBQWtCOzs7O0lBRDFCLHdDQUFxRDs7SUFDckQsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0NvbnRhaW5lclJlZiwgU2ltcGxlQ2hhbmdlLCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdDaGVja2VkLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLCBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmRlY2xhcmUgdmFyICQ6IGFueTtcblxuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcblxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8vIGltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuLy8gaW1wb3J0ICB7QnRuQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uLy4uLy4uL3NyYy9hcHAvYnRuL2J0bi5jb21wb25lbnQnXG5jb25zdCBtb21lbnQgPSBtb21lbnRJbXBvcnRlZDtcblxuZXhwb3J0IGludGVyZmFjZSBEaWFsb2dEYXRhIHtcbiAgYWxsZGF0YTogYW55O1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLWxpc3RpbmcnLFxuICB0ZW1wbGF0ZVVybDogJy4vbGlzdGluZy5tb2R1bGUuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmcubW9kdWxlLmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIExpc3RpbmdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG5cbiAgbXlDb250cm9sID0gbmV3IEZvcm1Db250cm9sKCk7XG5cblxuICBkYXRhc291cmNldmFsOiBhbnk7XG4gIHNlYXJjaF9zZXR0aW5nc3ZhbDogYW55O1xuICBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWw6IGFueTtcbiAgZ3JhYl9saW5rdmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9lbmRwb2ludHZhbDogYW55O1xuICB1cmx2YWw6IGFueTtcbiAgc2VhcmNoZW5kcG9pbnR2YWw6IGFueTtcbiAgcHVibGljIHNlYXJjaExpc3R2YWw6IGFueTtcbiAgcmVzY291bnQ6IG51bWJlciA9IDA7XG4gIHBkZl9saW5rX3ZhbDogYW55O1xuICBzdGF0dXNhcnJ2YWw6IGFueTtcbiAgc2tpcHZhbDogYW55O1xuICBlcnJvcm1nOiBhbnk7XG4gIGp3dHRva2VudmFsOiBhbnk7XG4gIGRldGFpbF9kYXRhdHlwZXZhbDogYW55O1xuICBkZXRhaWxfc2tpcF9hcnJheXZhbDogYW55O1xuICBkZWxldGVlbmRwb2ludHZhbDogYW55O1xuICBlZGl0cm91dGV2YWw6IGFueTtcbiAgYXBpdXJsdmFsOiBhbnk7XG4gIHVwZGF0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIG1vZGlmeV9oZWFkZXJfYXJyYXl2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsOiBhbnk7XG4gIGRhdGFjb2xsZWN0aW9udmFsOiBhbnk7XG4gIHNlbGVjdGlvbjogYW55O1xuICBzb3VyY2VkYXRhdmFsOiBhbnk7XG4gIGVtYWlsYXJyYXl2YWw6IGFueTtcbiAgY29sdW1uczogYW55ID0gW107XG4gIGF1dG9zZWFyY2hpbnB1dDogYW55ID0gW107XG4gIGN1cnJlbnRhdXRvc2VhcmNoYXJyOiBhbnkgPSBbXTtcbiAgb2xkZGF0YTogYW55ID0gW107XG4gIHRzZWFyY2g6IGFueSA9IFtdO1xuICB0YWJsZWZsYWc6IGFueSA9IDA7XG4gIGF1dG9zZWFyY2g6IGFueSA9IFtdO1xuICBwdWJsaWMgeDogYW55O1xuICBwdWJsaWMgbGliZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBsaW1pdGNvbmR2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgY3VzdG9tYnV0dG9udmFsOiBhbnk7XG4gIHB1YmxpYyByZXN1bHQ6IGFueSA9IHt9O1xuICBwdWJsaWMgc29ydGRhdGF2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgc2g6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXJ0OiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDI6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIHVwZGF0ZXRhYmxldmFsOiBhbnkgPSBmYWxzZTtcbiAgbG9hZGVycm93OiBhbnkgPSBudWxsO1xuICBjdXJyZW50YXV0b2NvbXBsZXRlaXRlbTogYW55O1xuICBwdWJsaWMgY3VzdG9tQnV0dG9uRmxhZ1ZhbDogYW55ID0ge307XG4gIHB1YmxpYyBhbGxTZWFyY2hDb25kOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaGJ1dHRvbnZhbDogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hCYXJGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzZWFyY2hCYXJUb29sVGlwOiBhbnkgPSAnT3BlbiBTZWFyY2ggQmFyJztcbiAgcHVibGljIHNlYXJjaEJhckZsYWdWYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgLypmb3IgcHJvZ3Jlc3MgYmFyKi9cblxuICBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xuICBtb2RlOiBhbnkgPSAnaW5kZXRlcm1pbmF0ZSc7XG4gIHZhbHVlID0gNTA7XG4gIGJ1ZmZlclZhbHVlID0gNzU7XG5cbiAgLyogdGhpcyB2YXJpYWJsZSBmb3IgYXJ0aXN0IHhwIHByZXZpZXcgKi9cbiAgcHJldmlld0ZsdWc6IGFueSA9IGZhbHNlO1xuICBzZWxlY3RzZWFyY2g6IGFueSA9IFtdO1xuXG4gIHB1YmxpYyBpbml0aWF0ZVNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIEBPdXRwdXQoKSBvbkxpYmxpc3RpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBAT3V0cHV0KCkgb25MaWJsaXN0aW5nQnV0dG9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgc2VhcmNoc3Ryc2FycjogYW55ID0gW107XG4gIG9sZGxpbWl0cmFuZ2U6IGFueSA9IFtdO1xuXG5cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaF9zZXR0aW5ncyhzZWFyY2hfc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsID0gc2VhcmNoX3NldHRpbmdzO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZWFyY2hfc2V0dGluZ3N2YWwrKysrKysnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbClcbiAgICAvKmZvciAobGV0IGk9IDA7IGk8PSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFtpXS5sYWJlbCk7XG4gICAgfSovXG5cbiAgICAvKiAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS5sYWJlbCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0udmFsdWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2gpOyovXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlKGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTogYW55KSB7XG4gICAgdGhpcy5jbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWwgPSBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpbWl0Y29uZChsaW1pdGNvbmR2YWw6IGFueSkge1xuICAgIHRoaXMubGltaXRjb25kdmFsID0gbGltaXRjb25kdmFsO1xuICAgIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKGxpbWl0Y29uZHZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2xpbWl0Y29uZHZhbCcsdGhpcy5saW1pdGNvbmR2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQoZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDtcbiAgICBpZiAodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPT0gMCkgeyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxOyB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCcsdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGdyYWJfbGluayhncmFiX2xpbms6IGFueSkge1xuICAgIHRoaXMuZ3JhYl9saW5rdmFsID0gZ3JhYl9saW5rO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JhYl9saW5rdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9uKGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgdGhpcy5jdXN0b21idXR0b252YWwgPSBjdXN0b21idXR0b247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlKGRhdGVfc2VhcmNoX3NvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNvcnRkYXRhKHNvcnRkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNvcnRkYXRhdmFsID0gc29ydGRhdGF2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zb3J0ZGF0YXZhbCwgJ3NvcnRkYXRhdmFsJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfZW5kcG9pbnQoZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwgPSBkYXRlX3NlYXJjaF9lbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogYW55KSB7XG4gICAgdGhpcy51cmx2YWwgPSB1cmw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaGVuZHBvaW50KHNlYXJjaGVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaGVuZHBvaW50dmFsID0gc2VhcmNoZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBkZl9saW5rKHBkZl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLnBkZl9saW5rX3ZhbCA9IHBkZl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hMaXN0KHNlYXJjaExpc3Q6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoTGlzdHZhbCA9IHNlYXJjaExpc3Q7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpYmRhdGEobGliZGF0YXZhbDogYW55KSB7XG4gICAgdGhpcy5saWJkYXRhdmFsID0gW107XG4gICAgdGhpcy5saWJkYXRhdmFsID0gbGliZGF0YXZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnbGliZGF0YXZhbCcsdGhpcy5saWJkYXRhdmFsKTtcbiAgICAvLyBzZWFyY2hCYXJGbGFnXG5cbiAgICAvLyBjb25zb2xlLmxvZyhsaWJkYXRhdmFsLnNlYXJjaEJhckZsYWdWYWwpXG5cbiAgICBpZiAobGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9IG51bGwgJiYgbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsICE9ICcnKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnVmFsID0gbGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGFzb3VyY2UoZGF0YXNvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gW107XG4gICAgdGhpcy5kYXRhc291cmNldmFsID0gZGF0YXNvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0YWNvbGxlY3Rpb24oZGF0YWNvbGxlY3Rpb252YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgPSBkYXRhY29sbGVjdGlvbnZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBza2lwKHNraXA6IGFueSkge1xuICAgIHRoaXMuc2tpcHZhbCA9IHNraXA7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9kYXRhdHlwZShkZXRhaWxfZGF0YXR5cGU6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsID0gZGV0YWlsX2RhdGF0eXBlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfc2tpcF9hcnJheShkZXRhaWxfc2tpcF9hcnJheTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCA9IGRldGFpbF9za2lwX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNvdXJjZWRhdGEoc291cmNlZGF0YTogYW55KSB7XG4gICAgdGhpcy5zb3VyY2VkYXRhdmFsID0gc291cmNlZGF0YTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBtb2RpZnlfaGVhZGVyX2FycmF5KG1vZGlmeV9oZWFkZXJfYXJyYXk6IGFueSkge1xuICAgIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCA9IG1vZGlmeV9oZWFkZXJfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGVsZXRlZW5kcG9pbnQoZGVsZXRlZW5kcG9pbnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwgPSBkZWxldGVlbmRwb2ludHZhbDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGVlbmRwb2ludCh1cGRhdGVlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy51cGRhdGVlbmRwb2ludHZhbCA9IHVwZGF0ZWVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBhcGl1cmwoYXBpdXJsOiBhbnkpIHtcbiAgICB0aGlzLmFwaXVybHZhbCA9IGFwaXVybDtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGV0YWJsZSh1cGRhdGV0YWJsZTogYW55KSB7XG4gICAgdGhpcy51cGRhdGV0YWJsZXZhbCA9IHVwZGF0ZXRhYmxlO1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgIGlmIChqd3R0b2tlbiAhPSBudWxsKSB7IHRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjsgfSBlbHNlIHsgdGhpcy5qd3R0b2tlbnZhbCA9ICcnOyB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCwndG9rZW4nKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHN0YXR1c2FycihzdGF0dXNhcnI6IGFueSkge1xuICAgIHRoaXMuc3RhdHVzYXJydmFsID0gc3RhdHVzYXJyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVtYWlsYXJyYXkoZW1haWxhcnJheTogYW55KSB7XG4gICAgdGhpcy5lbWFpbGFycmF5dmFsID0gZW1haWxhcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0cm91dGUoZWRpdHJvdXRlOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRyb3V0ZXZhbCA9IGVkaXRyb3V0ZTtcbiAgfVxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBzdGFydCAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJldmlld19hcnRpc3R4cChmbHVnOiBhbnkpIHtcbiAgICB0aGlzLnByZXZpZXdGbHVnID0gdHJ1ZTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGVuZCAqL1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21saXN0ZW5idXR0b24odmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbUJ1dHRvbkZsYWdWYWwgPSB2YWxcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbUJ1dHRvbkZsYWdWYWwsICdjdXN0b21CdXR0b25GbGFnVmFsJylcbiAgfVxuXG4gIC8vIHNlYXJjaCBidXR0b25zIFxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgc2VhcmNoYnV0dG9ucyh2YWw6IGFueSkge1xuICAvLyAgIHRoaXMuc2VhcmNoYnV0dG9udmFsID0gdmFsXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hidXR0b252YWwsICdjdXN0b21CdXR0b25GbGFnVmFsJylcbiAgLy8gfVxuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdO1xuXG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuXG4gIGRpc3BsYXllZENvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRhdGFjb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkaXNwbGF5ZWRDb2x1bW5zaGVhZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBmb3JtYXJyYXk6IGFueSA9IFtdO1xuICBzdGFydF9kYXRlOiBhbnk7XG4gIGRhdGVTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgc2VsZWN0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGF1dG9TZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgdGV4dFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBlbmRfZGF0ZTogYW55O1xuICBwdWJsaWMgaTogYW55O1xuICBsb2FkaW5nOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIHByZXJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBidXR0b25TZWFyY2hEYXRhOiBhbnkgPSBbXTtcbiAgLy8gZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOiBhbnk7XG4gIC8vIG15Rm9ybTphbnk7XG4gIG1vZGVsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgbW9kZWxDaGFuZ2Vkc2VydmVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwYWdlY2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgc3Vic2NyaXB0aW9uY291bnQgPSAwO1xuICB0YWJsZUZvb3RlckNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIHRlc3R2YWx1ZTogYW55ID0gXCJzMVwiO1xuICAvLyBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnN0YXRlR3JvdXBzID0gdGhpcy5zZWFyY2hMaXN0dmFsO1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMuYXBpLnNlYXJjaCh0aGlzLm1vZGVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyIGRlYm91bmNlICcsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgdGhpcy5maWx0ZXJhdXRvdmFsKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2Vkc2VydmVyXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgIHNlcnZlcicsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gJycpIHtcbiAgICAgICAgICAvLyB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG5cbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uc2VydmVyc2VhcmNoZGF0YS5lbmRwb2ludDtcblxuICAgICAgICAgIGxldCBzb3VyY2U6IGFueTtcblxuICAgICAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaF9zdHI6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdLFxuICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcywgJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsKSB0aGlzLnJlc2NvdW50ID0gcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IHJlc3VsdC5yZXM7XG4gICAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkICcgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcblxuICAgICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG5cblxuICAgIC8qIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgIH0pOyovXG4gIH1cbiAgLypARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tMaXN0aW5nXSdcbiAgfSkqL1xuXG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5teUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgLy8gICBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAvLyAgIHNvdXJjZSA9IHtcbiAgICAvLyAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAvLyAgIH07XG4gICAgLy8gICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gbm90IG5lZWRlZCAsXG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBpZiAodGhpcy5kYXRhc291cmNldmFsKSB0aGlzLnJlc2NvdW50ID0gdGhpcy5kYXRhc291cmNldmFsLmxlbmd0aDtcblxuICAgIGxldCB0ZW1wID0gW107XG4gICAgY29uc3Qga2V5cyA9IHhbMF07XG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpOyAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBjb25zdCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csICdfJykpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSk7XG4gICAgfVxuICAgIC8vIGNvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvLyBoZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWA7XG4gICAgICBjb25zdCB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldfWAsIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpLCBvYmpsZW5ndGg6IGhlYWRlcl9saXN0Lmxlbmd0aCB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCkge1xuICAgICAgICBpZiAoYiA9PSB0dC5oZWFkZXIpIHsgdHQuaGVhZGVyID0gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsW2JdOyB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSBbXTtcbiAgICB0aGlzLnRhYmxlZmxhZyA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlZmxhZyA9IDA7XG4gICAgfSwgMTAwKTtcblxuICAgIGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgfVxuXG5cblxuICAgIGVsc2UgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSBbXTtcblxuICAgIGxldCBjdXN0b21jb2xzOiBhbnkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT0gbnVsbCkge1xuICAgICAgY3VzdG9tY29scyA9IHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChjdXN0b21jb2xzICE9IG51bGwgJiYgY3VzdG9tY29scy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2NvbHZhbDogc3RyaW5nID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gY3VzdG9tY29scykge1xuICAgICAgICBpZiAoZGlzcGxheWVkY29scy5pbmNsdWRlcyhjdXN0b21jb2xzW3ZdKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgICAgIGlmIChiID09IGN1c3RvbWNvbHNbdl0pIHsgY2NvbHZhbCA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogY3VzdG9tY29sc1t2XSwgaGVhZGVyOiBjY29sdmFsLCBjZWxsOiAnTkEnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzID0gY3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy5wdXNoKHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUgPT0gbnVsbCA/ICdBY3Rpb25zJyA6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lLCBoZWFkZXI6ICdBY3Rpb25zJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBudWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy51bnNoaWZ0KCcjJyk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogJyMnLCBoZWFkZXI6ICcjJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gW107XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICAvLyB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlbXVsdGlwbGVzZWxlY3RidXR0b24gIT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICdzZWxlY3QnLCBoZWFkZXI6ICdzZWxlY3QnLCBjZWxsOiAnTkEnIH0pOyAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB9XG4gICAgbGV0IHRlbXBjb2xhcnIgPSBbXTtcbiAgICBsZXQgdGVtcGNvbGFycjIgPSBbXTtcbiAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IG4gaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAodGVtcGNvbGFyci5pbmRleE9mKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0ZW1wY29sYXJyMi5wdXNoKHRoaXMuY29sdW1uc1tuXSk7XG4gICAgICB0ZW1wY29sYXJyLnB1c2godGhpcy5jb2x1bW5zW25dLmNvbHVtbkRlZik7XG5cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gdGVtcGNvbGFycjI7XG4gICAgLy8gdGhpcy5jb2x1bW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY29sdW1ucy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5jb2x1bW5EZWYpKSk7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4gaXRlbS5jb2x1bW5EZWYpXG4gICAgLy8gICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcbiAgICAvLyB1bmlxdWUgY29sIG5hbWVzIFxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmRpc3BsYXllZENvbHVtbnMpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnMsICdjb2xzIGZpbHRlcicsIHRoaXMuZGlzcGxheWVkQ29sdW1ucyk7XG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuXG4gICAgLy8gbG9hZCBzZWFyY2ggcHJlZGVmaW5kZWQgZGF0YVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAvLyB0aGlzLnNlbGVjdHNlYXJjaFsnc3RhdHVzJ10gPSAnMCc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0c2VhcmNoJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzMScsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICAgIGZvciAoY29uc3Qgc2wgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnNlbGVjdFNlYXJjaCh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0sdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZXNbMF0pXG4gICAgICAgICAgICB0aGlzLnNlbGVjdHNlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLmZpZWxkXSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWU7XG4gICAgICAgICAgICAvLyBzZWxlY3RTZWFyY2hfY29uZGl0aW9uXG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLmZpZWxkXSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluaXRpYXRlU2VhcmNoLCAnaW5pdGlhdGVTZWFyY2ggc2VsZWN0JylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLCAnc3MrKysrKz09PT09KysrKycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCwgJysrKysrKycsIHRoaXMuc2VsZWN0c2VhcmNoKTtcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWVzWzBdLCc/Pz8/PyBuZXcgc2VsZWN0U2VhcmNoX2NvbmRpdGlvbicsdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKVxuXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3QxJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaCk7XG4gICAgICAgIGZvciAoY29uc3Qgc2wgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLnRzZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWU7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5pdGlhdGVTZWFyY2gsICdpbml0aWF0ZVNlYXJjaCB0ZXh0JylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChsZXQgYXRzIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlICE9ICcnICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0b3NlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS5maWVsZF0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yIChsZXQgayBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZSwnPj49PT09PT09JylcbiAgICAgICAgICAgICAgdGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXS5wdXNoKHsgdmFsOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZVtrXS52YWwsIG5hbWU6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlW2tdLm5hbWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgLy8gZGF0ZVNlYXJjaF9jb25kaXRpb25cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGd0ZSkpLmZvcm1hdChcIllZWVktTU0tRERcIikudG9TdHJpbmcoKTtcbiAgICAgICAgdGhpcy5lbmRfZGF0ZSA9IG1vbWVudChuZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlICsgODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbCcsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24pXG5cblxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCAndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgICAgICBsZXQgaW5kOiBhbnkgPSAwO1xuICAgICAgICAgIGluZCA9IHBhcnNlSW50KGkpO1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IGZpZWxkOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQsIGtleTogaW5kLCB2YWx1ZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbml0aWF0ZVNlYXJjaCA9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG5cblxuICAvLyBDdXN0b20gRmlsdGVyIG5ld1xuICBDdXN0b21CdXR0b25MaXN0ZW4odmFsOiBhbnkpIHtcbiAgICAvLyBhbGxTZWFyY2hDb25kXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAndGhpcy5hbGxTZWFyY2hDb25kJylcblxuICAgIHRoaXMub25MaWJsaXN0aW5nQnV0dG9uQ2hhbmdlLmVtaXQoXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogJ2N1c3RvbWxpc3RlbmJ1dHRvbicsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgYnV0dG9uZGF0YTogdmFsLCBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsIGF1dG9TZWFyY2hWYWw6IHRoaXMuYXV0b3NlYXJjaCwgYnV0dG9uU2VhcmNoRGF0YTogdGhpcy5idXR0b25TZWFyY2hEYXRhXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHZhciBkYXRhOmFueT17XG4gICAgLy8gICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCxzZWFyY2g6dGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsYnV0dG9uVmFsOnZhbFxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCdkYXRhKysrKz09PScsdmFsKVxuICB9XG5cblxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBCYXIgVG9nZ2xlXG4gIFNlYXJjaEJhclRvZ2dsZShmbGFnKSB7XG4gICAgc3dpdGNoIChmbGFnKSB7XG4gICAgICBjYXNlIHRydWU6XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlYXJjaEJhclRvb2xUaXAgPSAnT3BlbiBTZWFyY2ggQmFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSB0cnVlO1xuICAgICAgICB0aGlzLnNlYXJjaEJhclRvb2xUaXAgPSAnQ2xvc2UgU2VhcmNoIEJhcic7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHVwVG8oZWwsIHRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgd2hpbGUgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIGlmIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYW55IERPTSBtZXRob2RzIHJldHVybiBudWxsIGlmIHRoZXkgZG9uJ3QgXG4gICAgLy8gZmluZCB0aGUgZWxlbWVudCB0aGV5IGFyZSBzZWFyY2hpbmcgZm9yXG4gICAgLy8gSXQgd291bGQgYmUgT0sgdG8gb21pdCB0aGUgZm9sbG93aW5nIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudENoZWNrZWQgY2FsbGVkIC4uLicpO1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBjbGlja211bHRpcGxlc2VsZWN0b3B0aW9uKHZhbHMpIHtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzZWxlY3RvcHRpb25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBidG5kYXRhOiB2YWxzIH0pO1xuXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWxdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcblxuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGNvbnN0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgKyAnLWNvdW50JztcblxuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcblxuXG4gICAgaWYgKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkgIT0gbnVsbCAmJiBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCkgIT0gbnVsbCkge1xuXG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXG4gICAgICBpZiAodGhpcy5lbmRfZGF0ZSAhPSBudWxsICYmIHRoaXMuc3RhcnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSArIDg2Mzk5MDAwLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhcnRfZGF0ZSAhPSBudWxsICYmICh0aGlzLmVuZF9kYXRlID09IG51bGwgfHwgdGhpcy5lbmRfZGF0ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5lbmRfZGF0ZSAhPSBudWxsICYmICh0aGlzLnN0YXJ0X2RhdGUgPT0gbnVsbCB8fCB0aGlzLnN0YXJ0X2RhdGUubGVuZ3RoID09IDApKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSArIDg2Mzk5MDAwXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kZ3RlLCdhZnRlciArIDg2Mzk5MDAwJyx0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGx0ZSlcbiAgICAgIC8vIHZhciBkdD10aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGx0ZSAtIDg2Mzk5MDAwO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRndGUsJ2FmdGVyIC0gODYzOTkwMDAnLGR0IClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sICdkYXRlU2VhcmNoX2NvbmRpdGlvbisrJyk7XG5cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaCk7XG4gICAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0gIT0gJycpIHtcbiAgICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRvc2VhcmNoLiRhbmQsJ2F1dG9zZWFyY2guJG9yIDEnKVxuICAgICAgICAgIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgICAgc291cmNlID0ge1xuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgICAgc2tpcDogMFxuICAgICAgICB9LFxuICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgfTtcblxuICAgICAgLy8gY29uc29sZS5sb2coJ2RhdGUgc2VhcmNoIGNvbi4uLicsIGNvbmRpdGlvbm9iaiwgdGhpcy5lbmRfZGF0ZSwgdGhpcy5zdGFydF9kYXRlKTtcbiAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgIHJldHVybjtcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG5cbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIHN1Y2ggc2VhcmNoIHJlY29yZCBmb3VuZCAhIScgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gKHJlc3VsdC5jb3VudCk7XG4gICAgICAgIGlmIChyZXN1bHQuY291bnQgPT0gMCkgeyB0aGlzLnRhYmxlZmxhZyA9IDE7IH0gZWxzZSB7IHRoaXMudGFibGVmbGFnID0gMDsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcblxuICAgICAgLyp0aGlzLl9odHRwLnBvc3QobGluaywge3NvdXJjZTp0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgJ2NyZWF0ZWRfYXQnOiB7XG4gICAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICB9XG4gICAgICAgIH0sdG9rZW46IHRoaXMuand0dG9rZW52YWwsXG4gICAgICB9KS5zdWJzY3JpYmUoIHJlcyA9PntcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID17fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm9rXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQucmVzKTtcbiAgICAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSkqL1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnZXJyb3InKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgc2VsZWN0U2VhcmNoKHZhbHVlOiBhbnksIHR5cGU6IGFueSwgc3RhdHVzdmFsOiBhbnkpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAndmFsdWUnLCB0eXBlLCAndHlwZScsIHN0YXR1c3ZhbCwgJ3N0YXR1c3ZhbCcpXG5cbiAgICAvLyBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vIGxldCBzb3VyY2U6IGFueTtcbiAgICAvLyBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICB0aGlzLnNlYXJjaHN0cnNhcnJbdHlwZS5maWVsZF0gPSAoeyB2YWw6IHN0YXR1c3ZhbC5uYW1lLCBsYWJlbDogdHlwZS5sYWJlbCwga2V5OiB0eXBlLmZpZWxkIH0pO1xuICAgIGxldCB2YWwgPSAnJztcbiAgICBpZiAodGhpcy50c2VhcmNoICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsKSB7XG4gICAgICB2YWwgPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMSAmJiB7ICRvcjogW3RoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIC8vIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy8gLy9jb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICAvLyBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBzb3VyY2UgPSB7XG4gICAgLy8gICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgIC8vICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICAvLyB9O1xuXG5cblxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHNlYXJjaCwgJ2N6eGN4Y3p4YycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCwgdGhpcy5zZWxlY3RzZWFyY2gsIHZhbHVlLCB0eXBlKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICAvLyB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0U2VhcmNoICcsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cbiAgLy8gZm9yIG1hbmFnaW5nIHBhZ2luYXRpb25cblxuICBwYWdpbmcodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zdCBsdmFsOiBhbnkgPSB0aGlzLmxpbWl0Y29uZHZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0Y29uZHZhbCwgJ2xpbSB2YWwnKTtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IG51bGwpIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID09IG51bGwpIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gMTA7XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLmxpbWl0ICE9IG51bGwgJiYgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPiAxMDApIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gMTAwO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnWW91IGNhbiBzZWUgbWF4aW11bSAxMDAgcmVjb3JkcyBhdCBvbmNlICEnIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXhwYWdlY291bnQ6IG51bWJlciA9IE51bWJlcih0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgIG1heHBhZ2Vjb3VudCA9IH5+KG1heHBhZ2Vjb3VudCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMub2xkbGltaXRyYW5nZScsIHRoaXMub2xkbGltaXRyYW5nZSwgdGhpcy5saW1pdGNvbmR2YWwsIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsLCBtYXhwYWdlY291bnQpO1xuICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKHtcbiAgICAvLyAgIHNraXA6IHRoaXMubGltaXRjb25kdmFsLnNraXAsXG4gICAgLy8gICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgLy8gICBwYWdlY291bnQ6IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudFxuICAgIC8vIH0pO1xuICAgIGlmICh2YWwgPT0gMSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIDwgdGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID49IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2tpcCBibG9jaycpO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAyKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmICh2YWwgPiAxKSB7XG4gICAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IDEpIHsgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7IH0gZWxzZSB7IHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDsgfVxuICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPiAobWF4cGFnZWNvdW50ICsgMSkpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IG1heHBhZ2Vjb3VudCArIDE7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDEpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2codmFsLCdzcycsdGhpcy5kYXRhY29sbGVjdGlvbnZhbCx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG5cblxuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cblxuICAgIGNvbnN0IGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG4gICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgLy8gdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgYXV0b3NlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhdXRvc2VhcmNoLiRhbmQsJ2F1dG9zZWFyY2guJG9yIDInKVxuXG4gICAgICAgIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIGNvbnN0IHNvdXJjZSA9IHtcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6IHRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH0sXG4gICAgICBzb3J0OiB7XG4gICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIC8qbGV0IGRhdGE6YW55PXtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9XG5cbiAgICB9Ki9cbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucmVzdWx0LCdyZXMnKTtcbiAgICAgIGlmICh0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHRoaXMucmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ3BhZ2luZycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgcmVzdWx0czogdGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgfSk7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubGliZGF0YXZhbC5mb290ZXJzZXR0aW5ncyAhPSBudWxsKSB7XG4gICAgICAgIC8vICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgICAgIC8vIH1cblxuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IHJhbmdlIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5za2lwID0gdGhpcy5saW1pdGNvbmR2YWwuc2tpcDtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLmxpbWl0ID0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5wYWdlY291bnQgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm9sZGxpbWl0cmFuZ2UgYWZ0ZXIgJywgdGhpcy5vbGRsaW1pdHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvIGxlbicsIHRoaXMub2xkbGltaXRyYW5nZS5sZW5ndGgsIHRoaXMub2xkbGltaXRyYW5nZSk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZSA9IHRoaXMub2xkbGltaXRyYW5nZS5yZXZlcnNlKCk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZSA9IHRoaXMub2xkbGltaXRyYW5nZS5zbGljZSgwLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMik7IFxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc3BsaWNlKHRoaXMub2xkbGltaXRyYW5nZS5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gdGhpcy5yZWZyZXNoZGF0YSgpO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbCA9IHRoaXMub2xkbGltaXRyYW5nZVt0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGltaXRjb25kdmFsLCB0aGlzLm9sZGxpbWl0cmFuZ2UsICdsYXZsIG4gb2xkICcpO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gdGhpcy5vbGRsaW1pdHJhbmdlLnNraXA7XG4gICAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gdGhpcy5vbGRsaW1pdHJhbmdlLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50O1xuICAgICAgICAvLyBpZiAodmFsID09IDEpIHtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIC09IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh2YWwgPT0gLTEpIHtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwICs9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBEYXRhIEZvdW5kIGluIHRoaXMgcmFuZ2UgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgfVxuXG4gIGFkZGF1dG9zZWFyY2hkYXRhKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3YnLHZhbCk7XG5cbiAgfVxuICByZW1vdmUodmFsOiBhbnksIGk6IGFueSwgZmllbGQ6IGFueSkge1xuXG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0gIT0gbnVsbCkgeyB0aGlzLmF1dG9zZWFyY2hbZmllbGRdLnNwbGljZShpLCAxKTsgfVxuICB9XG5cblxuICBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZChpdGVtKSB7XG4gICAgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSA9IGl0ZW07XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgIGlmICh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLnNlcnZlcnNlYXJjaGRhdGEgPT0gbnVsbClcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2VkLm5leHQoKTtcbiAgICBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBlbHNlIGJsb2NrIG9mIGF1dG9jb21wbGV0ZWNoYW5nZWRldGVjdGVkJyk7XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZHNlcnZlci5uZXh0KCk7XG4gICAgfVxuXG4gIH1cblxuXG4gIGZpbHRlcmF1dG92YWwoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmF1dG92YWwnLCBkYXRhLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSk7XG4gICAgY29uc3QgYXV0b3NlbHZhbCA9IHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSAhPSAnJykge1xuICAgICAgY29uc3QgZmlsdGVydmFsID0gZGF0YS52YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGF1dG9zZWx2YWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBmaWx0ZXJ2YWw7XG4gICAgfVxuICB9XG4gIHJlc2V0YXV0b2NvbXAodmFsOiBhbnkpIHtcbiAgICBjb25zdCBlbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dG9jb21wbGV0ZXNlYXJjaCcgKyB2YWwuZmllbGQpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gIH1cbiAgYXV0b3NlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksIGRhdGE6IGFueSwgaXRlbTogYW55KSB7XG4gICAgLy8gdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRvc2VhcmNoaW5wdXQsICdhc2knLCBkYXRhLCB2YWx1ZSwgaXRlbSk7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSA9IFtdO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b3NlYXJjaCwgJ2F1dG9zZWFyY2ggMTEzMCcpXG4gICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5wdXNoKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICBjb25zdCBlbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dG9jb21wbGV0ZXNlYXJjaCcgKyB2YWx1ZSk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gcmVzZXQgYXV0byBzZWFyY2ggZGF0YSAhXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSxkYXRhLCdzcycsdGhpcy5hdXRvc2VhcmNoKTtcbiAgICAvKmxldCB2YWw6IGFueSA9IHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV07XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdmFsdWVdICE9bnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDAgJiYgeyAkb3I6IFt0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07Ki9cbiAgICAvLyBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlcyk7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIC8vIH0pO1xuICB9XG5cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gPT0gJycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hzdHJzYXJyLmluZGV4T2YodGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgJ2luZGV4Jyk7XG4gICAgICBkZWxldGUgdGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXTtcbiAgICAgIC8vIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIuc3BsaWNlKHZhbHVlLCAxKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0gPSAoeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0c2VhcmNoZnVuY3Rpb24nLCB2YWx1ZSwgaXRlbSwgdGhpcy5zZWFyY2hzdHJzYXJyKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGNvbnN0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgeyBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7IH1cbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gYWRkIGxvYWRlclxuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICAvL2Nsb3NlIGxvYWRlclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuICByZWZyZXNoZGF0YSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycpXG4gICAgdGhpcy5hdXRvc2VhcmNoID0gW107XG4gICAgdGhpcy50c2VhcmNoID0gW107XG4gICAgdGhpcy5zZWxlY3RzZWFyY2ggPSBbXTtcbiAgICB0aGlzLnN0YXJ0X2RhdGUgPSBudWxsO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgIHRoaXMuZW5kX2RhdGUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5hbGxTZWFyY2hDb25kID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gW107XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9IG51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVmcmVzaCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIGdldHN0YXR1cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuICdOL0EnO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgY29uc3QgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGNvbnN0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIHNlbEJveC52YWx1ZSA9IGZ1bGx1cmw7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgIHNlbEJveC5mb2N1cygpO1xuICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcblxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29waWVkIFN1Y2Nlc3NmdWxseSAhISAnIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5pbnRlcm5hbGxpbmsodmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsLnJvdXRlXSk7XG4gIH1cblxuXG4gIG9wZW5pbnRlcm5hbGxpbmt3aXRocGFyYW0odmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHJkYXRhOiBhbnkgPSBbXTtcbiAgICByZGF0YS5wdXNoKHZhbC5yb3V0ZSk7XG4gICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgcmRhdGEucHVzaChkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygncmFkYXQnLCByZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocmRhdGEpO1xuICB9XG5cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEnLHZhbCxkYXRhKTtcbiAgICBjb25zdCBkYXRhYXJyID0gW107XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgIHRlbXBhcnIucHVzaCh2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gIT0gJ2ltYWdlJyAmJiB2YWwuZGF0YWZpZWxkc1t2XSAhPSAndmlkZW8nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzcycsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiB0eXBlb2YgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZicsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2FmZScsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2goKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzczIyJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyA+IDxici8+Jyk7IH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAndmlkZW8nKSB7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGh0bWwnLCB0ZW1waHRtbCwgZGF0YVt2YWwuZGF0YWZpZWxkc10sIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goJ04vQScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9jYWwgZGF0YSBtJywgZGF0YWFycik7XG4gICAgbGV0IHJlczogYW55ID0gZGF0YWFycjtcblxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YWFycicsZGF0YWFycik7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICByZXMubWVzc2FnZSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJywgJ21vZGFsLWxvY2FsZGF0YSddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG4gIH1cblxuXG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEnLHZhbCxkYXRhKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGxpbms6IGFueSA9IHRoaXMuYXBpdXJsdmFsICsgdmFsLmVuZHBvaW50O1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgc291cmNlW3ZhbC5wYXJhbV0gPSBkYXRhLl9pZDtcbiAgICBpZiAodmFsLm90aGVycGFyYW0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBuIGluIHZhbC5vdGhlcnBhcmFtKSB7XG4gICAgICAgIHNvdXJjZVt2YWwub3RoZXJwYXJhbVtuXV0gPSBkYXRhW3ZhbC5vdGhlcnBhcmFtW25dXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2FkZXJyb3cgPSBkYXRhLl9pZDtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcblxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiByZXN1bHQubXNnIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcycscmVzdWx0KTtcbiAgICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVtcHJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2RhdGE+Pj4nLCByZXNkYXRhKTtcbiAgICAgICAgaWYgKHZhbC5kYXRhZmllbGRzICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIxIGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsLmRhdGFmaWVsZHMnLCB2YWwuZGF0YWZpZWxkc1tiMV0pO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgYjIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2IyJyxiMixkYXRhW2IyXSxkYXRhYXJyW2IyXVswXSk7XG4gICAgICAgICAgICAvLyBpZiAoZGF0YWFycltiMl1bMF0gPT0gdmFsLmRhdGFmaWVsZHNbYjFdKSByZXNkYXRhZm9ybW9kYWxbYjFdID0gW2RhdGFhcnJbYjJdWzBdLCBkYXRhYXJyW2IyXVsxXV07XG4gICAgICAgICAgICB0ZW1wcmRhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXSA9IHJlc2RhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlc2RhdGEgPSB0ZW1wcmRhdGE7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFhcnIgPSBbXTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgICAgICBmb3IgKGNvbnN0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgICAgaWYgKHYgIT0gJ2ltYWdlJyAmJiB2ICE9ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdICE9IG51bGwgJiYgdHlwZW9mIChyZXNkYXRhW3ZdKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzdicsIHJlc2RhdGFbdl0pO1xuICAgICAgICAgICAgICBpZiAocmVzZGF0YVt2XS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXNkYXRhW3ZdKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgcmVzZGF0YVt2XSArICcgPiA8YnIvPicpOyB9XG4gICAgICAgICAgaWYgKHYgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyByZXNkYXRhW3ZdICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgZGF0YWFycltiXVsxXSwgZGF0YWFycltiXVswXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IGRhdGFhcnJbYl07IH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgICAgIGRhdGFhcnIgPSByZXNkYXRhO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2MgYXBpIGRhdGEgJywgcmVzZGF0YSk7XG4gICAgICAgIC8vIGxldCByZXNkYXRhZm9ybW9kYWw6IGFueSA9IHt9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhZm9ybW9kYWwnLCBkYXRhYXJyLCBkYXRhYXJyKTtcbiAgICAgICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhYXJyWydtZXNzYWdlJ10gPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnYXBpLWRhdGEnXSxcbiAgICAgICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFyciB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuXG4gIH1cblxuXG4gIG9wZW5leHRsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyx2YWwsZGF0YSk7XG4gICAgbGV0IHF0ZXh0OiBhbnkgPSAnJztcbiAgICBsZXQgZnVsbGxpbms6IGFueSA9ICcnO1xuICAgIGZ1bGxsaW5rID0gdmFsLmxpbms7XG4gICAgaWYgKHZhbC5wYXJhbXR5cGUgPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgJz0nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHYpID09IDApIHsgZnVsbGxpbmsgPSBmdWxsbGluayArICc/JyArIHF0ZXh0OyB9XG4gICAgICAgIGlmIChwYXJzZUludCh2KSAhPSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnJicgKyBxdGV4dDsgfVxuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG4gICAgfVxuICAgIGlmICh2YWwucGFyYW10eXBlICE9IG51bGwgJiYgdmFsLnBhcmFtdHlwZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgLy8gcXRleHQgPSB2YWwucGFyYW1bdl0ucSArIFwiPVwiICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcblxuICAgICAgICBmdWxsbGluayA9IGZ1bGxsaW5rICsgJy8nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgICB9XG4gICAgICAvLyB2YWwubGluaz1mdWxsbGluaztcblxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBzZXRUaW1lb3V0XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsnLGZ1bGxsaW5rLGRhdGEscXRleHQpO1xuICAgIH0sIDEwKTtcblxuICAgIHdpbmRvdy5vcGVuKGZ1bGxsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIGNsaWNrdXJsKHZhbDogYW55LCB1cmw6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKTtcbiAgfVxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgY2hlY2tlZGxpc3QoKSB7XG4gICAgLy8gdGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZGF0YTogYW55ID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubWFwKHggPT4geC5faWQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tlZGxpc3QnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIHNlbGRhdGEpO1xuICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0aW9uY2hhbmdlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQgfSk7XG4gICAgfSwgMTAwKTtcblxuXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaXNBbGxTZWxlY3RlZCcpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbiAhPSBudWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgICB0aGlzLmNoZWNrZWRsaXN0KCk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRhdGFba2V5LnJlcGxhY2UoL1xccy9nLCAnXycpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge307XG4gIH1cbiAgLyoqc2hvdyB2aWRlbyBtb2RhbCBvbiBjbGljayBvZiB0aGFtbmFpbCBmdW5jdGlvbiBieSBzb3VyYXYgKi9cbiAgZmV0Y2h2aWRlbyh2aWRlb2RhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybigndmlkZW9kYXRhJyx2aWRlb2RhdGEpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVmlkZW9QbGF5ZXIsIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94LXZpZGVvcGxheWVyLXByZXZpZXcnLCAndmlkZW8tbW9kYWwnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuICBvcGVubm90ZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVycm93ID0gdmFsLl9pZDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwubm90ZXMubGlzdGVuZHBvaW50LCB0aGlzLmp3dHRva2VudmFsLCB7IGlkOiB2YWwuX2lkIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQucmVzLCAnbGlzdCBub3RlcycpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ25vdGVzJywgdmFsKTtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnbm90ZXMtbW9kYWwnXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlzY29uZmlybWF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBub3RlczogdHJ1ZSwgYXBpdXJsOiB0aGlzLmFwaXVybHZhbCxcbiAgICAgICAgICBub3RlZGF0YTogdGhpcy5saWJkYXRhdmFsLm5vdGVzLCByb3dkYXRhOiB2YWwsXG4gICAgICAgICAgand0dG9rZW52YWw6IHRoaXMuand0dG9rZW52YWwsXG4gICAgICAgICAgbGlzdGRhdGE6IHJlc3VsdC5yZXMsXG4gICAgICAgICAgX3NuYWNrQmFyOiB0aGlzLl9zbmFja0JhclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBjb25zdCBkYXRhMjogYW55ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBjb25zdCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSB7IGRhdGFba2V5XSA9ICdZZXMnOyB9XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSBmYWxzZSkgeyBkYXRhW2tleV0gPSAnTm8nOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW2tleV0gKyAnPjxici8+JztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlID09ICdpbWFnZScpIHtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBpbWd2YWw6YW55PXRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmZpbGV1cmwrZGF0YVtrZXldW2tdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1ndmFsKTs9XCIrXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldW2tdICsgJz48YnIvPicpO1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIilcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgIT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgZGF0YVtrZXldW2tdICsgJzwvc3Bhbj48YnIvPicpO1xuXG5cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvYmprIGluIGRhdGFba2V5XVtrXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgb2JqayArICcgOiAnICsgZGF0YVtrZXldW2tdW29iamtdICsgJzwvc3Bhbj48YnIvPicpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IHRlbXBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuIGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW25dICE9IG51bGwgJiYgZGF0YVtuXSAhPSAnJykge1xuICAgICAgICBkYXRhMltuXSA9IGRhdGFbbl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dPScnO1xuICAgICAgZGVsZXRlIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dO1xuICAgIH1cbiAgICBsZXQgcmVzID0gT2JqZWN0LmVudHJpZXMoZGF0YTIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWV3IGRhdGEnLHJlcyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgcmVzW2JdWzFdLCByZXNbYl1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSByZXNbYl07IH1cblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG1heEhlaWdodDogJzEwMDB2aCcsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZXRhaWwtdmlldyddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgcGFuZWxDbGFzczogJ2N1c3RvbS1ib3R0b21zaGVldCcsIGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvLyB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ21hbmFnZS1zdGF0dXMnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9ubGlzdG5lcihyb3c6IGFueSwgY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tYnV0dG9ubGlzdG5lcicsIHJvdywgY3VzdG9tYnV0dG9uKTtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2N1c3RvbWJ1dHRvbmNsaWNrJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIGN1c3RvbWJ1dHRvbmNsaWNrOiB7XG4gICAgICAgIGRhdGE6IHJvdywgYnRuaW5mbzogY3VzdG9tYnV0dG9uXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOiBhbnkgPSB0aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy8gaWZyYW1lIHVybFxuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIGRhdGFbdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzW2JdXTtcbiAgICB9XG4gICAgdW5zYWZldXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy8gZm9yIHNhbml0aXppbmcgdGhlIHVybCBmb3Igc2VjdXJpdHksIG90aGVyd2lzZSBpdCB3b24ndCBiZSBhYmxlIHRvIHNob3cgdGhlIHBhZ2UgaW4gaWZyYW1lLCBoZW5jZSBtb2RhbFxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7ICAgICAgIC8vIGZvciBvcGVuaW5nIHRoZSBtb2RhbFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLWRhdGEtbW9kYWwnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IFt7IGRhdGEsIGN1c3RvbWRhdGE6IHVuc2FmZXVybCB9XSB9XG4gICAgfSk7XG5cblxuICB9XG5cblxuXG4gIG1hbmFnZXN0YXR1c211bHRpcGxlKCkge1xuICAgIGNvbnN0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgLy8gZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICAvLyBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIGNvbnN0IG5ld3N0YXR1czogYW55ID0gcmVzdWx0LnZhbDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1c21hbnkodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnRtYW55LCBpZHMsIHJlc3VsdC52YWwsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvLyB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMub2xkZGF0YVtjXS5faWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gbmV3c3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vIHRoaXMuYWxsU2VhcmNoKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZXN0YXR1c3VwZGF0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAndG9vZ2xlLW1hbnknXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlbXVsdGlwbGUoKSB7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlc2UgcmVjb3Jkcz8gVGhpcyBwcm9jZXNzIGNhbiBub3QgYmUgdW5kb25lLicsXG4gICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU1hbnlEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLmRlbGV0ZWVuZHBvaW50bWFueSwgaWRzLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiBpZHMpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVkZWxldGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1tdWx0aXBsZSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQocykgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cblxuXG4gIGRlbGV0ZWRhdGEoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gYWxlcnQoNSk7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEgODg5IC0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdqd3R0b2tlbnZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD8gVGhpcyBwcm9jZXNzIGNhbiBub3QgYmUgdW5kb25lLicsXG4gICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGRhdGEuX2lkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdkZWxldGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtc2luZ2xlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZCAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOiBhbnksIHR5cGU6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGZpZWxkLCB0eXBlKVxuICAgIHRoaXMuc29ydGRhdGF2YWwuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cblxuXG5cbiAgYWxsU2VhcmNoKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiaGl0XCIpO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGNvbnN0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgKyAnLWNvdW50JztcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIC8vIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLnRzZWFyY2hbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaHN0cnNhcnIsICd0aGlzLnNlYXJjaHN0cnNhcnInKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gnKTtcbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYWxsIHNlYXJjaCB0aGlzLnRzZWFyY2gnLCB0aGlzLnRzZWFyY2hbaV0pO1xuICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gJycpIHtcbiAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgYXV0b3NlYXJjaDogYW55ID0ge307XG4gICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pIHtcbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYXV0b3NlYXJjaC4kb3IgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kYW5kIDMnKVxuXG4gICAgICAgIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnYXV0b3MgcXErKycsIGF1dG9zZWFyY2gsdGhpcy5hdXRvc2VhcmNoKTtcblxuXG4gICAgLy8gYnV0dG9uIFNlYXJjaCBEYXRhXG5cbiAgICBjb25zdCBidXR0b25zZWFyY2g6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGJzIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10udmFsdWUpIHtcbiAgICAgICAgY29uc3QgYnQ6IGFueSA9IHt9O1xuICAgICAgICBidFt0aGlzLmJ1dHRvblNlYXJjaERhdGFbYnNdLmZpZWxkXSA9IHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10udmFsdWVba10udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKGJ1dHRvbnNlYXJjaC4kb3IgPT0gbnVsbCkgeyBidXR0b25zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYnQsJ2J0JyxicywnYnMnKVxuICAgICAgICBidXR0b25zZWFyY2guJG9yLnB1c2goYnQpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25zZWFyY2gnKVxuXG5cblxuICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgdGhpcy5vbGRsaW1pdHJhbmdlID0gdGhpcy5saW1pdGNvbmR2YWw7XG5cbiAgICBsZXQgY29uZGl0aW9ub2JqOiBvYmplY3QgPSB7fTtcblxuICAgIGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIGJ1dHRvbnNlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdzZWxlY3RTZWFyY2hfY29uZGl0aW9uJylcblxuICAgIHRoaXMuYWxsU2VhcmNoQ29uZCA9IGNvbmRpdGlvbm9iajtcblxuICAgIC8vIGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqICYgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb247XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqLmNvbmNhdCh0aGlzLmxpYmRhdGEuYmFzZWNvbmRpdGlvbik7XG4gICAgLy8gZm9yIChsZXQgYiBpbiBjb25kaXRpb25vYmopIHtcbiAgICAvLyAgIC8vIGlmKGNvbmRpdGlvbm9ialtiXSlcbiAgICAvLyAgIGZvciAobGV0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pIHtcbiAgICAvLyAgICAgaWYgKGMgPT0gYikge1xuICAgIC8vICAgICAgIC8vIGNvbmRpdGlvbm9ialtiXT17fTtcbiAgICAvLyAgICAgICBsZXQgdG90YWxjb25kOiBhbnk7XG4gICAgLy8gICAgICAgaWYgKHR5cGVvZiAoY29uZGl0aW9ub2JqW2JdKSAhPSAnb2JqZWN0JylcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCB7ICRlcTogY29uZGl0aW9ub2JqW2JdIH0pO1xuICAgIC8vICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCBjb25kaXRpb25vYmpbYl0pO1xuXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2luIGlmIGJsaycsIGMsIGIsIGNvbmRpdGlvbm9ialtiXSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHRvdGFsY29uZCk7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2JdID0gdG90YWxjb25kO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbmRpdGlvbm9ialtjXSA9IHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdO1xuXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24nLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdjb25kaXRpb25vYmonLCBjb25kaXRpb25vYmosICd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcblxuICAgIHNvdXJjZSA9IHtcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6IDBcbiAgICAgIH0sXG4gICAgICBzb3J0OiB7XG4gICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsIGNvbmRpdGlvbm9iaiwgJ2VkJywgdGhpcy5lbmRfZGF0ZSwgJ2wnLCBPYmplY3Qua2V5cyhjb25kaXRpb25vYmopLmxlbmd0aCk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmRpdGlvbm9iaikubGVuZ3RoIDwgMCkge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gU2VhcmNoIGNyaXRlcmlhIHNlbGVjdGVkICEhICcgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdzZWFyY2gnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaiwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMucmVzY291bnQgPSAwOyBcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIHN1Y2ggc2VhcmNoIHJlY29yZCBmb3VuZCAhIScgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSBmYWxzZTtcbiAgfVxuXG4gIGdldHR5cGVvZih2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgKHZhbCk7XG4gIH1cblxuXG4gIC8vIG9wZW4gQm90dG9tIFNoZWV0IEZvciBTZWFyY2hcbiAgb3BlbkJvdHRvbVNoZWV0Rm9yU2VhcmNoKGRhdGE6IGFueSwgaW5kZXgpIHtcbiAgICB2YXIgY291bnQgPSAxO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICdvcGVuQm90dG9tU2hlZXRGb3JTZWFyY2gnLCBpbmRleClcbiAgICBjb25zdCBicyA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWxGb3JCdXR0b21TZWFyY2gsIHsgcGFuZWxDbGFzczogJ2J1dHRvbi1zZWFyY2gtbW9kYWwnLCBkYXRhOiB7IGl0ZW1zOiBkYXRhIH0gfSk7XG4gICAgYnMuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBicy5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0KysrKz09PT0gZGF0YScsIGRhdGEpXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0LmZsYWcgPT0gJ3llcycpIHtcbiAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB2YXIgc2VhcmNoRmxhZyA9IDA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0KysrKz09PT0/PycsIGluZGV4KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25TZWFyY2hEYXRhIDEnKVxuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvblNlYXJjaERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25TZWFyY2hEYXRhW2ldLmZpZWxkID09IHJlc3VsdC5pdGVtcy5maWVsZCkge1xuICAgICAgICAgICAgICBjb3VudCA9IDI7XG4gICAgICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cnVlICsrKyBjb3VudCcsIGNvdW50KVxuICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHJlc3VsdC5zZWxlY3RlZERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGFbaV0udmFsdWUucHVzaChyZXN1bHQuc2VsZWN0ZWREYXRhW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2VhcmNoRmxhZyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRmxhZywgJ3NlYXJjaEZsYWcgMicpXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQsICdjb3VudCBlbHNlIGNoZWNrJylcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvblNlYXJjaERhdGEgMicpXG5cbiAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLnB1c2goeyB2YWx1ZTogcmVzdWx0LnNlbGVjdGVkRGF0YSwga2V5OiBpbmRleCwgZmllbGQ6IHJlc3VsdC5pdGVtcy5maWVsZCB9KTtcbiAgICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IHZhbHVlOiByZXN1bHQuc2VsZWN0ZWREYXRhLCBrZXk6IGluZGV4LCBmaWVsZDogcmVzdWx0Lml0ZW1zLmZpZWxkIH0pO1xuICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRmxhZywgJ3NlYXJjaEZsYWcgMScpXG5cbiAgICAgICAgaWYgKHNlYXJjaEZsYWcgPT0gMSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDInKVxuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gY2xlYXIgQnV0dG9uIFNlYXJjaCBDaGlwcyAgZGF0YVxuICBjbGVhckJ1dHRvblNlYXJjaENoaXBzKGJzLCBpLCBpdGVtLCBqKSB7XG4gICAgLy8gY29uc29sZS5sb2coYnMsIGksIGl0ZW0sIGosICdicyxpLGl0ZW0saicpO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtpXS52YWx1ZS5zcGxpY2UoaiwgMSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5idXR0b25TZWFyY2hEYXRhLCAnYnV0dG9uU2VhcmNoRGF0YSBzcGxpY2UnKVxuXG4gICAgLy8gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2JzLmtleV0udmFsdWVzXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQgPT0gYnMuZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXSlcbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCd0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gnKVxuICB9XG5cblxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gc3RhcnQgKi9cbiAgYXJ0aXN0eHBQcmV2aWV3KHNpbmdsZURhdGE6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgY29uc3QgZGF0YTogYW55ID0geyBzb3VyY2U6ICdibG9ja2NoYWludXNlcl92aWV3JywgY29uZGl0aW9uOiB7IHBvc3RzX2lkX29iamVjdDogc2luZ2xlRGF0YS5faWQgfSwgdG9rZW46IHRoaXMuand0dG9rZW52YWwgfTtcbiAgICAvKioqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdERhdGEobGluaywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1heHAnXSxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGRhdGE6IHsgcHJldmlldzogdHJ1ZSwgcHJldmlld0RhdGE6IHJlc3RsdCB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBlbmQgKi9cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjb25maXJtLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWRpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIC8vIHB1YmxpYyBub3Rlc3ZhbDphbnk9bnVsbCxcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWRpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWIgZGF0YSBpbiBtb2RhbCAnLCB0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdGhpcy5kYXRhLnJvd2RhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLmJsb2d0aXRsZSk7XG4gICAgdGhpcy5kYXRhLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGF0YS5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuZGF0YS5sb2FkZXJ2YWx1ZSA9IDUwO1xuICAgIHRoaXMuZGF0YS5idWZmZXJWYWx1ZSA9IDc2O1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgZGVsZXRlbm90ZShpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICBpZDogdGhpcy5kYXRhLnJvd2RhdGEuX2lkLFxuICAgICAgaW5kZXhcbiAgICAgIC8vIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgIC8vIHVzZXI6IHRoaXMuZGF0YS5ub3RlZGF0YS51c2VyLFxuICAgIH07XG4gICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gaW5kZXg7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuZGVsZXRlZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gdGhpcy5kYXRhLmxpc3RkYXRhLnB1c2goeyB1c2VyaWQ6IHRoaXMuZGF0YS5ub3RlZGF0YS5jdXJyZW50dXNlcmZ1bGxuYW1lLCBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgICAvLyB9XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5kYXRhLmFwaXVybCArIHRoaXMuZGF0YS5ub3RlZGF0YS5hZGRlbmRwb2ludCwgdGhpcy5kYXRhLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdhZGQgbm90ZXMnKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5saXN0ZGF0YSA9PSBudWxsKSB7IHRoaXMuZGF0YS5saXN0ZGF0YSA9IFtdOyB9XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnVuc2hpZnQoeyBfaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCwgbm90ZXM6IHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlciwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0gfSk7XG4gICAgICAgICAgdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcsdGhpcy5kYXRhLmxpc3RkYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdibGFuayBub3RlcycpO1xuICAgICAgdGhpcy5kYXRhLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOb3RlcyBjYW5cXCd0IGJlIGJsYW5rICEhICcgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YSkge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG5cblxuLy8gYnV0dG9uLXNlYXJjaC1Nb2RhbFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXNlYXJjaC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXNlYXJjaC1tb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb3JCdXR0b21TZWFyY2gge1xuXG4gIHB1YmxpYyBidXR0b25TZWFyY2hEYXRhOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hWYWw6IGFueSA9ICcnO1xuICBwdWJsaWMgYWxsQnV0dG9uRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBsb2FkaW5nX2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGVycm1zZzogYW55ID0gJyc7XG4gIHB1YmxpYyBtYXRDaGlwRGF0YTogYW55ID0gW11cbiAgICA7XG4gIHB1YmxpYyBtYXRBdXRvc2VhcmNoRGF0YTogYW55ID0gW107XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm5vdHRvUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxGb3JCdXR0b21TZWFyY2g+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImJvdHRvbS1zaGVldC1zZWFyY2hcIiwgZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0ge307XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gZGF0YTtcbiAgICB0aGlzLmFsbEJ1dHRvbkRhdGEgPSBkYXRhLml0ZW1zLnZhbHVlO1xuICB9XG5cbiAgY2hvb3NlQ2hpcEl0ZW0oZGF0YSwgaSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICc/P2RhdGEnKVxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIC8vIHN1Ym1pdCBcbiAgc2VhcmNoQnlJdGVtKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWREYXRhKVxuICAgIHRoaXMuZGF0YS5mbGFnID0gJ3llcyc7XG4gICAgdGhpcy5kYXRhLnNlbGVjdGVkRGF0YSA9IHRoaXMuc2VsZWN0ZWREYXRhO1xuICAgIC8vIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlbW92ZSh2YWwsIGkpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnB1c2godmFsKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gdGhpcy5hbGxCdXR0b25EYXRhO1xuXG4gIH1cblxuICBzZWFyY2hCeUtleXdvcmQodmFsdWUpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaFZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IHRydWU7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEudXJsICsgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEuZW5kcG9pbnQ7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNlYXJjaF9zdHJcIjogdmFsdWUsXG4gICAgICAgIFwibGltaXRcIjogNTBcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RTZWFyY2gxKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXM7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG5cbiAgICAgICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcy5zbGljZSgwLCA1MCk7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCcsIHRoaXMubG9hZGluZ19mbGFnKVxuICAgICAgICAgIHRoaXMubWF0QXV0b3NlYXJjaERhdGEgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJybXNnID0gXCJQbGVhc2UgRW50ZXIgS2V5d29yZHNcIjtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRhdGEuZmxhZyA9ICdubyc7XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcblxuICB9XG5cblxufVxuXG5cblxuLyoqbGlzdGluZyB2aWRlbyBwbGF5ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZGVvcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICd2aWRlb3BsYXllci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvcGxheWVyTW9kYWwnLGRhdGEucHJldmlld0RhdGEudmlkZW8pO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyBJbWFnZSBWaWV3ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1nX21vZGFsX3ZpZXcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyB7XG5cbiAgLy8gcHVibGljIGRhdGE6YW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2VWaWV3TW9kYWwnLCBkYXRhKTtcbiAgfVxuICBhZGRub3RlcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nJywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrYmFyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==