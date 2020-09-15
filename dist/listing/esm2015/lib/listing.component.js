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
        /*for progress bar*/
        this.color = 'primary';
        this.mode = 'indeterminate';
        this.value = 50;
        this.bufferValue = 75;
        /* this variable for artist xp preview */
        this.previewFlug = false;
        this.selectsearch = [];
        this.onLiblistingChange = new EventEmitter();
        this.searchstrsarr = [];
        this.oldlimitrange = [];
        /* artistxp preview end */
        this.stateGroups = this.searchListval;
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
        console.log(this.sortdataval, 'sortdataval');
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
                    if (this.search_settingsval.selectsearch[sl].value != null) {
                        this.selectsearch[this.search_settingsval.selectsearch[sl].field] =
                            this.search_settingsval.selectsearch[sl].value;
                        // console.log('s', this.search_settingsval.selectsearch, '++++++', this.selectsearch);
                    }
                }
            }
            if (this.search_settingsval.textsearch != null) {
                // console.log('t1', this.search_settingsval.textsearch);
                for (const sl in this.search_settingsval.textsearch) {
                    if (this.search_settingsval.textsearch[sl].value != null) {
                        this.tsearch[this.search_settingsval.textsearch[sl].field] =
                            this.search_settingsval.textsearch[sl].value;
                        // console.log('t', this.search_settingsval.textsearch);
                    }
                }
            }
        }), 1000);
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
                    $lte: new Date(this.end_date).getTime(),
                    $gte: new Date(this.start_date).getTime(),
                };
            }
            if (this.start_date != null && (this.end_date == null || this.end_date.length == 0)) {
                condition[val] = {
                    $gte: new Date(this.start_date).getTime(),
                };
            }
            if (this.end_date != null && (this.start_date == null || this.start_date.length == 0)) {
                condition[val] = {
                    $lte: new Date(this.end_date).getTime()
                };
            }
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
        console.log(this.limitcondval, 'lim val');
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
        const conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, this.autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
                this.onLiblistingChange.emit({ action: 'paging', limitdata: this.limitcondval, searchcondition: conditionobj, sortdata: this.sortdataval });
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
        // console.log(this.autosearchinput, 'asi', data, value);
        this.searchstrsarr.push({ val: this.autosearchinput[value], label: item.label, key: value });
        if (this.autosearch[value] == null) {
            this.autosearch[value] = [];
        }
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
            console.log(index, 'index');
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
        this.autosearch = [];
        this.tsearch = [];
        this.selectsearch = [];
        this.start_date = null;
        this.limitcondval.skip = 0;
        this.end_date = null;
        this.selectSearch_condition = {};
        this.dateSearch_condition = {};
        this.allSearch();
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
                console.log('resdata>>>', resdata);
                if (val.datafields != null) {
                    for (const b1 in val.datafields) {
                        console.log('val.datafields', val.datafields[b1]);
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
            x => x._id));
            console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
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
        console.log(field, type);
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
                autosearch.$or.push(tv);
            }
        }
        // console.log('autos', autosearch);
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        this.oldlimitrange = this.limitcondval;
        /** @type {?} */
        let conditionobj = {};
        conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
    }
    /**
     * @param {?} val
     * @return {?}
     */
    gettypeof(val) {
        return typeof (val);
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
                template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\" *ngIf=\"rescount>0\">\n            <ng-container class=\"inputfilterForloop\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                            (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                            placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                search\n                            </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </ng-container>\n\n            <ng-container class=\"inputfilterForAuto\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                            [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                        <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                            [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                            [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                            (keyup)=\"autocompletechangedetected(item);\">\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                            (click)=\"autosearchfunction(item.field,statusval,item)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </ng-container>\n\n\n\n            <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container class=\"filterForTexticon\"\n                *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <!-- <span>dddddd</span> -->\n                <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                        [(ngModel)]='tsearch[status.field]'>\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                            (click)=\"selectSearch(statusval.val, status,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                <!-- <span>D search !!</span> -->\n                <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                            placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                            (dateChange)=\"dateSearch(status.field,status)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\"\n                            placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                            (dateChange)=\"dateSearch(status.field,status)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n\n\n\n                    <!-- <span class=\"search_class\">\n                        <button mat-raised-button color=\"primary\" class=\"add_button\"\n                            (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                    </span> -->\n\n\n\n                </ng-container>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <span class=\"search_class\">\n                <ng-container class=\"refresh\">\n                    <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                        autorenew\n                    </i>\n                </ng-container>\n                <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                <ng-container class=\"refresh\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\">Search</button>\n                </ng-container>\n\n            </span>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"\n                    [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n                                <span [innerHtml]=\"column.header\"></span>\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n\n                            </span>\n\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n                                \n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <!-- loader -->\n                            <section class=\"example-section example-section-button-1 \">\n                                <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \"\n                                    [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                                </mat-progress-bar>\n                            </section>\n                            <!-- note block -->\n                            <ng-container *ngIf=\"libdataval.notes!=null \">\n                                <button mat-raised-button color=\"primary\" class=\"notebtncls\" (click)=\"opennotes(row) \">\n                                    <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                    <span class=\"notebracket1\">(</span>\n                                    <span class=\"notecountc\"> {{row.notescount}}</span>\n\n                                    <span class=\"notebracket2\">)</span>\n                                </button>\n                            </ng-container>\n                            <!--custom buttions block -->\n                            <ng-container\n                                *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                    <section class=\"custombutton{{cb}}\">\n\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                            <!-- ss {{row['status']}} -->\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                    <button mat-raised-button\n                                                        color=\"primary\">{{custombutton.label}}</button>\n                                                </a>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='action'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                        </ng-container>\n                                    </section>\n\n                                </ng-container>\n                            </ng-container>\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\">\n                                        toggle_off\n                                    </i>\n                                </span>\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}"]
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
    ListingComponent.prototype.onLiblistingChange;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sS0FB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WTs0Q0F1cUUzQixNQUFNLFNBQUMsZUFBZTs7OztJQUR2QixnQ0FBMkM7O0lBQzNDLDJCQUF5Qzs7Ozs7QUFjN0MsTUFBTSxPQUFPLFNBQVM7Ozs7OztJQUdwQixZQUNTLFNBQWtDLEVBQ1QsSUFBUztRQURsQyxjQUFTLEdBQVQsU0FBUyxDQUF5QjtRQUNULFNBQUksR0FBSixJQUFJLENBQUs7UUFDekMsd0NBQXdDO0lBQzFDLENBQUM7Ozs7SUFDRCxRQUFRO1FBQ04saUNBQWlDO0lBQ25DLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7WUFsQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2dCQUNqQixzVEFBa0M7YUFDbkM7Ozs7WUFwckVtQixZQUFZOzRDQTByRTNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLDhCQUF5Qzs7SUFDekMseUJBQXlDOztBQXFCN0MsTUFBTSxPQUFPLGlCQUFpQjs7Ozs7SUFDNUIsWUFDUyxXQUE4QyxFQUNsQixJQUFTO1FBRHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTVDLGtDQUFrQztJQUNwQyxDQUFDOzs7WUFmRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztnQkFDN0Msa0ZBQXFEO3lCQUM1Qzs7OztHQUlSO2FBQ0Y7Ozs7WUFuc0V5QyxjQUFjOzRDQXVzRW5ELE1BQU0sU0FBQyxrQkFBa0I7Ozs7SUFEMUIsd0NBQXFEOztJQUNyRCxpQ0FBNEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBJbnB1dCwgSW5qZWN0LFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIENvbXBvbmVudFJlZixcbiAgRGlyZWN0aXZlLFxuICBWaWV3Q29udGFpbmVyUmVmLCBTaW1wbGVDaGFuZ2UsIE9uRGVzdHJveSwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEFmdGVyVmlld0NoZWNrZWQsIEVsZW1lbnRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFBhZ2luYXRvciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IFNlbGVjdGlvbk1vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvbGxlY3Rpb25zJztcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBNYXRCb3R0b21TaGVldCwgTWF0Qm90dG9tU2hlZXRSZWYsIE1BVF9CT1RUT01fU0hFRVRfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtQ29udHJvbCwgRm9ybUdyb3VwLCBWYWxpZGF0b3JzIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNhbmNlbCwgTmF2aWdhdGlvbkVuZCwgTmF2aWdhdGlvbkVycm9yLCBOYXZpZ2F0aW9uU3RhcnQsIFJvdXRlciwgRXZlbnQgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzdGFydFdpdGgsIG1hcCwgZGVib3VuY2VUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuaW1wb3J0ICogYXMgbW9tZW50SW1wb3J0ZWQgZnJvbSAnbW9tZW50JztcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuXG4vLyBpbXBvcnQge1Byb2dyZXNzQmFyTW9kZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbi8vIGltcG9ydCAge0J0bkNvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2J0bi9idG4uY29tcG9uZW50J1xuY29uc3QgbW9tZW50ID0gbW9tZW50SW1wb3J0ZWQ7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBzZWFyY2hMaXN0dmFsOiBhbnk7XG4gIHJlc2NvdW50OiBudW1iZXIgPSAwO1xuICBwZGZfbGlua192YWw6IGFueTtcbiAgc3RhdHVzYXJydmFsOiBhbnk7XG4gIHNraXB2YWw6IGFueTtcbiAgZXJyb3JtZzogYW55O1xuICBqd3R0b2tlbnZhbDogYW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6IGFueTtcbiAgZGV0YWlsX3NraXBfYXJyYXl2YWw6IGFueTtcbiAgZGVsZXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgZWRpdHJvdXRldmFsOiBhbnk7XG4gIGFwaXVybHZhbDogYW55O1xuICB1cGRhdGVlbmRwb2ludHZhbDogYW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55O1xuICBkYXRhY29sbGVjdGlvbnZhbDogYW55O1xuICBzZWxlY3Rpb246IGFueTtcbiAgc291cmNlZGF0YXZhbDogYW55O1xuICBlbWFpbGFycmF5dmFsOiBhbnk7XG4gIGNvbHVtbnM6IGFueSA9IFtdO1xuICBhdXRvc2VhcmNoaW5wdXQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b3NlYXJjaGFycjogYW55ID0gW107XG4gIG9sZGRhdGE6IGFueSA9IFtdO1xuICB0c2VhcmNoOiBhbnkgPSBbXTtcbiAgdGFibGVmbGFnOiBhbnkgPSAwO1xuICBhdXRvc2VhcmNoOiBhbnkgPSBbXTtcbiAgcHVibGljIHg6IGFueTtcbiAgcHVibGljIGxpYmRhdGF2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgbGltaXRjb25kdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbDogYW55O1xuICBwdWJsaWMgcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIHNvcnRkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIHNoOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyB1cGRhdGV0YWJsZXZhbDogYW55ID0gZmFsc2U7XG4gIGxvYWRlcnJvdzogYW55ID0gbnVsbDtcbiAgY3VycmVudGF1dG9jb21wbGV0ZWl0ZW06IGFueTtcblxuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG4gIEBPdXRwdXQoKSBvbkxpYmxpc3RpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcbiAgc2VhcmNoc3Ryc2FycjogYW55ID0gW107XG4gIG9sZGxpbWl0cmFuZ2U6IGFueSA9IFtdO1xuXG5cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaF9zZXR0aW5ncyhzZWFyY2hfc2V0dGluZ3M6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsID0gc2VhcmNoX3NldHRpbmdzO1xuICAgIC8qZm9yIChsZXQgaT0gMDsgaTw9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2ldLmxhYmVsKTtcbiAgICB9Ki9cblxuICAgIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS52YWx1ZXMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGltaXRjb25kKGxpbWl0Y29uZHZhbDogYW55KSB7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwgPSBsaW1pdGNvbmR2YWw7XG4gICAgdGhpcy5vbGRsaW1pdHJhbmdlLnB1c2gobGltaXRjb25kdmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGltaXRjb25kdmFsJyx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsO1xuICAgIGlmICh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9PSAwKSB7IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7IH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50Jyx0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3JhYl9saW5rKGdyYWJfbGluazogYW55KSB7XG4gICAgdGhpcy5ncmFiX2xpbmt2YWwgPSBncmFiX2xpbms7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCdzb3J0ZGF0YXZhbCcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX2VuZHBvaW50KGRhdGVfc2VhcmNoX2VuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsID0gZGF0ZV9zZWFyY2hfZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVybCh1cmw6IGFueSkge1xuICAgIHRoaXMudXJsdmFsID0gdXJsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hlbmRwb2ludChzZWFyY2hlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hlbmRwb2ludHZhbCA9IHNlYXJjaGVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwZGZfbGluayhwZGZfbGluazogYW55KSB7XG4gICAgdGhpcy5wZGZfbGlua192YWwgPSBwZGZfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoTGlzdChzZWFyY2hMaXN0OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaExpc3R2YWwgPSBzZWFyY2hMaXN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IFtdO1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG4gICAgLy8gY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLHRoaXMubGliZGF0YXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YXNvdXJjZShkYXRhc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBbXTtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBkYXRhc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhY29sbGVjdGlvbihkYXRhY29sbGVjdGlvbnZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCA9IGRhdGFjb2xsZWN0aW9udmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNraXAoc2tpcDogYW55KSB7XG4gICAgdGhpcy5za2lwdmFsID0gc2tpcDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX2RhdGF0eXBlKGRldGFpbF9kYXRhdHlwZTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwgPSBkZXRhaWxfZGF0YXR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9za2lwX2FycmF5KGRldGFpbF9za2lwX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsID0gZGV0YWlsX3NraXBfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc291cmNlZGF0YShzb3VyY2VkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZWRhdGF2YWwgPSBzb3VyY2VkYXRhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGlmeV9oZWFkZXJfYXJyYXkobW9kaWZ5X2hlYWRlcl9hcnJheTogYW55KSB7XG4gICAgdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsID0gbW9kaWZ5X2hlYWRlcl9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludHZhbCA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50dmFsID0gdXBkYXRlZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFwaXVybChhcGl1cmw6IGFueSkge1xuICAgIHRoaXMuYXBpdXJsdmFsID0gYXBpdXJsO1xuICB9IEBJbnB1dCgpXG4gIHNldCB1cGRhdGV0YWJsZSh1cGRhdGV0YWJsZTogYW55KSB7XG4gICAgdGhpcy51cGRhdGV0YWJsZXZhbCA9IHVwZGF0ZXRhYmxlO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGp3dHRva2VuKGp3dHRva2VuOiBhbnkpIHtcbiAgICBpZiAoand0dG9rZW4gIT0gbnVsbCkgeyB0aGlzLmp3dHRva2VudmFsID0gand0dG9rZW47IH0gZWxzZSB7IHRoaXMuand0dG9rZW52YWwgPSAnJzsgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwsJ3Rva2VuJylcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdGF0dXNhcnIoc3RhdHVzYXJyOiBhbnkpIHtcbiAgICB0aGlzLnN0YXR1c2FycnZhbCA9IHN0YXR1c2FycjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlbWFpbGFycmF5KGVtYWlsYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZW1haWxhcnJheXZhbCA9IGVtYWlsYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZWRpdHJvdXRlKGVkaXRyb3V0ZTogYW55KSB7XG4gICAgdGhpcy5lZGl0cm91dGV2YWwgPSBlZGl0cm91dGU7XG4gIH1cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgc3RhcnQgKi9cbiAgQElucHV0KClcbiAgc2V0IHByZXZpZXdfYXJ0aXN0eHAoZmx1ZzogYW55KSB7XG4gICAgdGhpcy5wcmV2aWV3Rmx1ZyA9IHRydWU7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBlbmQgKi9cblxuXG4gIHN0YXRlR3JvdXBzOiBzdHJpbmdbXSA9IHRoaXMuc2VhcmNoTGlzdHZhbDtcbiAgc3RhdGVHcm91cDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGF0YWNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNoZWFkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvcm1hcnJheTogYW55ID0gW107XG4gIHN0YXJ0X2RhdGU6IGFueTtcbiAgZGF0ZVNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBzZWxlY3RTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgYXV0b1NlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICB0ZXh0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGVuZF9kYXRlOiBhbnk7XG4gIHB1YmxpYyBpOiBhbnk7XG4gIGxvYWRpbmc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgcHJlcmVzdWx0OiBhbnkgPSB7fTtcbiAgLy8gZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOiBhbnk7XG4gIC8vIG15Rm9ybTphbnk7XG4gIG1vZGVsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgbW9kZWxDaGFuZ2Vkc2VydmVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwYWdlY2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgc3Vic2NyaXB0aW9uY291bnQgPSAwO1xuICB0YWJsZUZvb3RlckNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIHRlc3R2YWx1ZTogYW55ID0gXCJzMVwiO1xuICAvLyBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMuYXBpLnNlYXJjaCh0aGlzLm1vZGVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyIGRlYm91bmNlICcsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgdGhpcy5maWx0ZXJhdXRvdmFsKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2Vkc2VydmVyXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgIHNlcnZlcicsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gJycpIHtcbiAgICAgICAgICAvLyB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG5cbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uc2VydmVyc2VhcmNoZGF0YS5lbmRwb2ludDtcblxuICAgICAgICAgIGxldCBzb3VyY2U6IGFueTtcblxuICAgICAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaF9zdHI6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdLFxuICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcywgJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsKSB0aGlzLnJlc2NvdW50ID0gcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IHJlc3VsdC5yZXM7XG4gICAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkICcgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcblxuICAgICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG5cblxuICAgIC8qIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgIH0pOyovXG5cblxuXG4gIH1cbiAgLypARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tMaXN0aW5nXSdcbiAgfSkqL1xuXG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gJycpIHtcblxuICAgIC8vICAgbGV0IHNvdXJjZTogYW55O1xuICAgIC8vICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgLy8gICBzb3VyY2UgPSB7XG4gICAgLy8gICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICAgIGNvbmRpdGlvbjogY29uZGl0aW9uXG4gICAgLy8gICB9O1xuICAgIC8vICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgdGhpcy5wcmVyZXN1bHQgPSB0aGlzLnJlc3VsdC5yZXM7XG4gICAgLy8gICB9KTtcblxuICAgIC8vIH1cblxuICAgIC8vIG5vdCBuZWVkZWQgLFxuXG4gICAgLy8gdGhpcy5fc2VydmljZS5zdWNjZXNzKHRoaXMuY29sdW1uc1swXS5kYXRlLCdkbmRubmQnLHRoaXMub3B0aW9ucyk7XG4gICAgLyogdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgICAgKTsqL1xuXG4gICAgdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICApO1xuXG4gICAgLypjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4qL1xuXG4gICAgdGhpcy54ID0gdGhpcy5kYXRhc291cmNldmFsO1xuICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZXZhbCkgdGhpcy5yZXNjb3VudCA9IHRoaXMuZGF0YXNvdXJjZXZhbC5sZW5ndGg7XG5cbiAgICBsZXQgdGVtcCA9IFtdO1xuICAgIGNvbnN0IGtleXMgPSB4WzBdO1xuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKTsgICAgLypieSBPYmplY3Qua2V5cygpIHdlIGNhbiBmaW5kIHRoZSBmaWVsZG5hbWVzKG9yIGtleXMpIGluIGFuIG9iamVjdCwgaS5lLCBpbiB0ZW1wIG9iamVjdCBmaWVsZCBuYW1lcyBhcmUgc2F2ZWQqL1xuXG4gICAgY29uc3QgY29sZGVmX2xpc3QgPSBbXTtcbiAgICBjb25zdCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCAnXycpKTsgICAgICAvKnRvIHJlcGxhY2Ugc3BhY2VzIGluIGZpZWxkIG5hbWUgYnkgXCJfXCIsIHdlIHVzZSBcInJlcGxhY2UoL1xccy9nLCBcIl9cIilcIiovXG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pO1xuICAgIH1cbiAgICAvLyBjb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy8gaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG4gICAgdGhpcy5jb2x1bW5zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gO1xuICAgICAgY29uc3QgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0dCcsdHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0LmNvbHVtbkRlZicpO1xuICAgICAgLy8gY29uc29sZS5sb2codHQuY29sdW1uRGVmKTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgaWYgKGIgPT0gdHQuaGVhZGVyKSB7IHR0LmhlYWRlciA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5za2lwdmFsLmluZGV4T2YodHQuY29sdW1uRGVmKSA9PSAtMSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh0dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzID0gW107XG4gICAgdGhpcy50YWJsZWZsYWcgPSAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50YWJsZWZsYWcgPSAwO1xuICAgIH0sIDEwMCk7XG5cbiAgICBkaXNwbGF5ZWRjb2xzID0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzICE9IG51bGwpIHtcbiAgICAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgIH1cbiAgICBlbHNlIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gW107XG5cbiAgICBsZXQgY3VzdG9tY29sczogYW55ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coJ2Rpc3BsYXllZGNvbHMnLGRpc3BsYXllZGNvbHMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzICE9IG51bGwpIHtcbiAgICAgIGN1c3RvbWNvbHMgPSB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tY29scyAhPSBudWxsICYmIGN1c3RvbWNvbHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGNjb2x2YWw6IHN0cmluZyA9ICcnO1xuICAgICAgZm9yIChjb25zdCB2IGluIGN1c3RvbWNvbHMpIHtcbiAgICAgICAgaWYgKGRpc3BsYXllZGNvbHMuaW5jbHVkZXMoY3VzdG9tY29sc1t2XSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBjdXN0b21jb2xzW3ZdKSB7IGNjb2x2YWwgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IGN1c3RvbWNvbHNbdl0sIGhlYWRlcjogY2NvbHZhbCwgY2VsbDogJ05BJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGxheWVkY29scyA9IGN1c3RvbWNvbHM7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tY29scycsY3VzdG9tY29scyxkaXNwbGF5ZWRjb2xzLHRoaXMuY29sdW1ucyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlYWN0aW9uID09IG51bGwgfHwgdGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMucHVzaCh0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSA9PSBudWxsID8gJ0FjdGlvbnMnIDogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSwgaGVhZGVyOiAnQWN0aW9ucycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMudW5zaGlmdCgnIycpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICcjJywgaGVhZGVyOiAnIycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29sdW1ucywgJ2NvbHMnKTtcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRpc3BsYXllZGNvbHM7XG4gICAgLy8gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJyMnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZW11bHRpcGxlc2VsZWN0YnV0dG9uICE9IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3QnKTtcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHsgY29sdW1uRGVmOiAnc2VsZWN0JywgaGVhZGVyOiAnc2VsZWN0JywgY2VsbDogJ05BJyB9KTsgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgfVxuICAgIGxldCB0ZW1wY29sYXJyID0gW107XG4gICAgbGV0IHRlbXBjb2xhcnIyID0gW107XG4gICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKTtcbiAgICBmb3IgKGxldCBuIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKHRlbXBjb2xhcnIuaW5kZXhPZih0aGlzLmNvbHVtbnNbbl0uY29sdW1uRGVmKSA9PSAtMSlcbiAgICAgICAgdGVtcGNvbGFycjIucHVzaCh0aGlzLmNvbHVtbnNbbl0pO1xuICAgICAgdGVtcGNvbGFyci5wdXNoKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpO1xuXG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IHRlbXBjb2xhcnIyO1xuICAgIC8vIHRoaXMuY29sdW1ucyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmNvbHVtbnMubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0uY29sdW1uRGVmKSkpO1xuXG4gICAgLy8gdGhpcy5jb2x1bW5zLm1hcChpdGVtID0+IGl0ZW0uY29sdW1uRGVmKVxuICAgIC8vICAgLmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XG4gICAgLy8gdW5pcXVlIGNvbCBuYW1lcyBcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scyBmaWx0ZXInLCB0aGlzLmRpc3BsYXllZENvbHVtbnMpO1xuICAgIGNvbnN0IGRhdGFfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhX2xpc3QucHVzaCh0aGlzLmNyZWF0ZURhdGEoeFtpXSkpO1xuICAgIH1cbiAgICB0aGlzLm9sZGRhdGEgPSBkYXRhX2xpc3Q7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShkYXRhX2xpc3QpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cblxuICAgIC8vIGxvYWQgc2VhcmNoIHByZWRlZmluZGVkIGRhdGFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgLy8gdGhpcy5zZWxlY3RzZWFyY2hbJ3N0YXR1cyddID0gJzAnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdHNlYXJjaCcsIHRoaXMuc2VsZWN0c2VhcmNoKTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnczEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0MScsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLmZpZWxkXSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3QnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuXG5cbiAgfVxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcblxuXG4gIH1cblxuICB1cFRvKGVsLCB0YWdOYW1lKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHdoaWxlIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFueSBET00gbWV0aG9kcyByZXR1cm4gbnVsbCBpZiB0aGV5IGRvbid0IFxuICAgIC8vIGZpbmQgdGhlIGVsZW1lbnQgdGhleSBhcmUgc2VhcmNoaW5nIGZvclxuICAgIC8vIEl0IHdvdWxkIGJlIE9LIHRvIG9taXQgdGhlIGZvbGxvd2luZyBhbmQganVzdFxuICAgIC8vIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlckNvbnRlbnRDaGVja2VkIGNhbGxlZCAuLi4nKTtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgY2xpY2ttdWx0aXBsZXNlbGVjdG9wdGlvbih2YWxzKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0b3B0aW9uY2xpY2snLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCwgYnRuZGF0YTogdmFscyB9KTtcbiAgfVxuXG4gIG9uU3VibWl0KCkge1xuICAgIGxldCB4OiBhbnk7XG4gICAgdGhpcy5lcnJvcm1nID0gJyc7XG4gICAgY29uc3QgZGF0YSA9IHRoaXMubXlGb3JtLnZhbHVlO1xuICAgIGZvciAoeCBpbiB0aGlzLm15Rm9ybS5jb250cm9scykge1xuICAgICAgdGhpcy5teUZvcm0uY29udHJvbHNbeF0ubWFya0FzVG91Y2hlZCgpO1xuICAgIH1cbiAgfVxuICBkYXRlU2VhcmNoKHZhbDogYW55LCBpdGVtOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy50c2VhcmNoW3ZhbF0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbCB9KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIik7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcbiAgICAvLyBsZXQgc2QgPSBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCk7XG4gICAgLy8gbGV0IGVkID0gbW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cblxuXG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXG4gICAgICBpZiAodGhpcy5lbmRfZGF0ZSAhPSBudWxsICYmIHRoaXMuc3RhcnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXJ0X2RhdGUgIT0gbnVsbCAmJiAodGhpcy5lbmRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuZW5kX2RhdGUubGVuZ3RoID09IDApKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZW5kX2RhdGUgIT0gbnVsbCAmJiAodGhpcy5zdGFydF9kYXRlID09IG51bGwgfHwgdGhpcy5zdGFydF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaCk7XG4gICAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0gIT0gJycpIHtcbiAgICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlIHNlYXJjaCBjb24uLi4nLCBjb25kaXRpb25vYmosIHRoaXMuZW5kX2RhdGUsIHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cblxuXG4gIHNlbGVjdFNlYXJjaCh2YWx1ZTogYW55LCB0eXBlOiBhbnksIHN0YXR1c3ZhbDogYW55KSB7XG5cblxuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gbGV0IHNvdXJjZTogYW55O1xuICAgIC8vIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt0eXBlLmZpZWxkXSA9ICh7IHZhbDogc3RhdHVzdmFsLm5hbWUsIGxhYmVsOiB0eXBlLmxhYmVsLCBrZXk6IHR5cGUuZmllbGQgfSk7XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICAvLyB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyAvL2NvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIC8vIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIC8vIHNvdXJjZSA9IHtcbiAgICAvLyAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIC8vIH07XG5cblxuXG5cblxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy50c2VhcmNoLCAnY3p4Y3hjenhjJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCB0aGlzLnNlbGVjdHNlYXJjaCwgdmFsdWUsIHR5cGUpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGNvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RTZWFyY2ggJywgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuICAvLyBmb3IgbWFuYWdpbmcgcGFnaW5hdGlvblxuXG4gIHBhZ2luZyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnN0IGx2YWw6IGFueSA9IHRoaXMubGltaXRjb25kdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMubGltaXRjb25kdmFsLCAnbGltIHZhbCcpO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPT0gbnVsbCkgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwubGltaXQgPT0gbnVsbCkgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSAxMDtcbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwubGltaXQgIT0gbnVsbCAmJiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA+IDEwMCkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSAxMDA7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdZb3UgY2FuIHNlZSBtYXhpbXVtIDEwMCByZWNvcmRzIGF0IG9uY2UgIScgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgbGV0IG1heHBhZ2Vjb3VudDogbnVtYmVyID0gTnVtYmVyKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsIC8gKHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSk7XG4gICAgbWF4cGFnZWNvdW50ID0gfn4obWF4cGFnZWNvdW50KTtcbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vbGRsaW1pdHJhbmdlJywgdGhpcy5vbGRsaW1pdHJhbmdlLCB0aGlzLmxpbWl0Y29uZHZhbCwgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwsIG1heHBhZ2Vjb3VudCk7XG4gICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnB1c2goe1xuICAgIC8vICAgc2tpcDogdGhpcy5saW1pdGNvbmR2YWwuc2tpcCxcbiAgICAvLyAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAvLyAgIHBhZ2Vjb3VudDogdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50XG4gICAgLy8gfSk7XG4gICAgaWYgKHZhbCA9PSAxKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCsrO1xuICAgIH1cbiAgICBpZiAodmFsID09IC0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXAgPCB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodmFsID09IC0xICYmIHRoaXMubGltaXRjb25kdmFsLnNraXAgPj0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBza2lwIGJsb2NrJyk7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDIpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICB9XG4gICAgaWYgKHZhbCA+IDEpIHtcbiAgICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPT0gMSkgeyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDsgfSBlbHNlIHsgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAxKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0OyB9XG4gICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IChtYXhwYWdlY291bnQgKyAxKSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gbWF4cGFnZWNvdW50ICsgMTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJ3NzJyx0aGlzLmRhdGFjb2xsZWN0aW9udmFsLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcblxuXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgY29uc3Qgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogdGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgLypsZXQgZGF0YTphbnk9e1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOnRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH1cblxuICAgIH0qL1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZXN1bHQsJ3JlcycpO1xuICAgICAgaWYgKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgdGhpcy5yZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAncGFnaW5nJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyByYW5nZSBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2tpcCA9IHRoaXMubGltaXRjb25kdmFsLnNraXA7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5saW1pdCA9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50ID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vbGRsaW1pdHJhbmdlIGFmdGVyICcsIHRoaXMub2xkbGltaXRyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbyBsZW4nLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoLCB0aGlzLm9sZGxpbWl0cmFuZ2UpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucmV2ZXJzZSgpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2xpY2UoMCwgdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDIpOyBcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSh0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vIHRoaXMucmVmcmVzaGRhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0Y29uZHZhbCwgdGhpcy5vbGRsaW1pdHJhbmdlLCAnbGF2bCBuIG9sZCAnKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IHRoaXMub2xkbGltaXRyYW5nZS5za2lwO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IHRoaXMub2xkbGltaXRyYW5nZS5saW1pdDtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gdGhpcy5vbGRsaW1pdHJhbmdlLnBhZ2Vjb3VudDtcbiAgICAgICAgLy8gaWYgKHZhbCA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCAtPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodmFsID09IC0xKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCArPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gRGF0YSBGb3VuZCBpbiB0aGlzIHJhbmdlICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDogYW55LCBpOiBhbnksIGZpZWxkOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9IG51bGwpIHsgdGhpcy5hdXRvc2VhcmNoW2ZpZWxkXS5zcGxpY2UoaSwgMSk7IH1cbiAgfVxuICBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZChpdGVtKSB7XG4gICAgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSA9IGl0ZW07XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgIGlmICh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLnNlcnZlcnNlYXJjaGRhdGEgPT0gbnVsbClcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2VkLm5leHQoKTtcbiAgICBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBlbHNlIGJsb2NrIG9mIGF1dG9jb21wbGV0ZWNoYW5nZWRldGVjdGVkJyk7XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZHNlcnZlci5uZXh0KCk7XG4gICAgfVxuXG4gIH1cbiAgZmlsdGVyYXV0b3ZhbChkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZmlsdGVyYXV0b3ZhbCcsIGRhdGEsIHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdKTtcbiAgICBjb25zdCBhdXRvc2VsdmFsID0gdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF07XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSAhPSBudWxsICYmIHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdICE9ICcnKSB7XG4gICAgICBjb25zdCBmaWx0ZXJ2YWwgPSBkYXRhLnZhbHVlcy5maWx0ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2UnLCBlLCBmaWVsZHZhbClcbiAgICAgICAgcmV0dXJuIGUubmFtZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoYXV0b3NlbHZhbC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IGZpbHRlcnZhbDtcbiAgICB9XG4gIH1cbiAgcmVzZXRhdXRvY29tcCh2YWw6IGFueSkge1xuICAgIGNvbnN0IGVsOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0b2NvbXBsZXRlc2VhcmNoJyArIHZhbC5maWVsZCk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgfVxuICBhdXRvc2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgZGF0YTogYW55LCBpdGVtOiBhbnkpIHtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0gPSAnJztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2hpbnB1dCwgJ2FzaScsIGRhdGEsIHZhbHVlKTtcbiAgICB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdID0gW107XG4gICAgfVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsdWUpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIHJlc2V0IGF1dG8gc2VhcmNoIGRhdGEgIVxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gPT0gJycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hzdHJzYXJyLmluZGV4T2YodGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXSk7XG4gICAgICBjb25zb2xlLmxvZyhpbmRleCwgJ2luZGV4Jyk7XG4gICAgICBkZWxldGUgdGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXTtcbiAgICAgIC8vIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIuc3BsaWNlKHZhbHVlLCAxKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0gPSAoeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0c2VhcmNoZnVuY3Rpb24nLCB2YWx1ZSwgaXRlbSwgdGhpcy5zZWFyY2hzdHJzYXJyKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGNvbnN0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgeyBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7IH1cbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gYWRkIGxvYWRlclxuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICAvL2Nsb3NlIGxvYWRlclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuICByZWZyZXNoZGF0YSgpIHtcbiAgICB0aGlzLmF1dG9zZWFyY2ggPSBbXTtcbiAgICB0aGlzLnRzZWFyY2ggPSBbXTtcbiAgICB0aGlzLnNlbGVjdHNlYXJjaCA9IFtdO1xuICAgIHRoaXMuc3RhcnRfZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgdGhpcy5lbmRfZGF0ZSA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9IG51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVmcmVzaCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIGdldHN0YXR1cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuICdOL0EnO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgY29uc3QgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGNvbnN0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIHNlbEJveC52YWx1ZSA9IGZ1bGx1cmw7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgIHNlbEJveC5mb2N1cygpO1xuICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcblxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29waWVkIFN1Y2Nlc3NmdWxseSAhISAnIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5pbnRlcm5hbGxpbmsodmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsLnJvdXRlXSk7XG4gIH1cbiAgb3BlbmludGVybmFsbGlua3dpdGhwYXJhbSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgY29uc3QgcmRhdGE6IGFueSA9IFtdO1xuICAgIHJkYXRhLnB1c2godmFsLnJvdXRlKTtcbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICByZGF0YS5wdXNoKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdyYWRhdCcsIHJkYXRhKTtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShyZGF0YSk7XG4gIH1cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEnLHZhbCxkYXRhKTtcbiAgICBjb25zdCBkYXRhYXJyID0gW107XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgIHRlbXBhcnIucHVzaCh2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gIT0gJ2ltYWdlJyAmJiB2YWwuZGF0YWZpZWxkc1t2XSAhPSAndmlkZW8nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzcycsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiB0eXBlb2YgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZicsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2FmZScsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2goKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzczIyJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyA+IDxici8+Jyk7IH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAndmlkZW8nKSB7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGh0bWwnLCB0ZW1waHRtbCwgZGF0YVt2YWwuZGF0YWZpZWxkc10sIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goJ04vQScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9jYWwgZGF0YSBtJywgZGF0YWFycik7XG4gICAgbGV0IHJlczogYW55ID0gZGF0YWFycjtcblxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YWFycicsZGF0YWFycik7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICByZXMubWVzc2FnZSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJywgJ21vZGFsLWxvY2FsZGF0YSddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG4gIH1cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YScsdmFsLGRhdGEpO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgY29uc3QgbGluazogYW55ID0gdGhpcy5hcGl1cmx2YWwgKyB2YWwuZW5kcG9pbnQ7XG4gICAgY29uc3Qgc291cmNlOiBhbnkgPSB7fTtcbiAgICBzb3VyY2VbdmFsLnBhcmFtXSA9IGRhdGEuX2lkO1xuICAgIGlmICh2YWwub3RoZXJwYXJhbSAhPSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IG4gaW4gdmFsLm90aGVycGFyYW0pIHtcbiAgICAgICAgc291cmNlW3ZhbC5vdGhlcnBhcmFtW25dXSA9IGRhdGFbdmFsLm90aGVycGFyYW1bbl1dO1xuXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9hZGVycm93ID0gZGF0YS5faWQ7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcycscmVzdWx0KTtcbiAgICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVtcHJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgY29uc29sZS5sb2coJ3Jlc2RhdGE+Pj4nLCByZXNkYXRhKTtcbiAgICAgICAgaWYgKHZhbC5kYXRhZmllbGRzICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIxIGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygndmFsLmRhdGFmaWVsZHMnLCB2YWwuZGF0YWZpZWxkc1tiMV0pO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgYjIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2IyJyxiMixkYXRhW2IyXSxkYXRhYXJyW2IyXVswXSk7XG4gICAgICAgICAgICAvLyBpZiAoZGF0YWFycltiMl1bMF0gPT0gdmFsLmRhdGFmaWVsZHNbYjFdKSByZXNkYXRhZm9ybW9kYWxbYjFdID0gW2RhdGFhcnJbYjJdWzBdLCBkYXRhYXJyW2IyXVsxXV07XG4gICAgICAgICAgICB0ZW1wcmRhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXSA9IHJlc2RhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlc2RhdGEgPSB0ZW1wcmRhdGE7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFhcnIgPSBbXTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgICAgICBmb3IgKGNvbnN0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgICAgaWYgKHYgIT0gJ2ltYWdlJyAmJiB2ICE9ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdICE9IG51bGwgJiYgdHlwZW9mIChyZXNkYXRhW3ZdKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzdicsIHJlc2RhdGFbdl0pO1xuICAgICAgICAgICAgICBpZiAocmVzZGF0YVt2XS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXNkYXRhW3ZdKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgcmVzZGF0YVt2XSArICcgPiA8YnIvPicpOyB9XG4gICAgICAgICAgaWYgKHYgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyByZXNkYXRhW3ZdICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgZGF0YWFycltiXVsxXSwgZGF0YWFycltiXVswXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IGRhdGFhcnJbYl07IH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgICAgIGRhdGFhcnIgPSByZXNkYXRhO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2MgYXBpIGRhdGEgJywgcmVzZGF0YSk7XG4gICAgICAgIC8vIGxldCByZXNkYXRhZm9ybW9kYWw6IGFueSA9IHt9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhZm9ybW9kYWwnLCBkYXRhYXJyLCBkYXRhYXJyKTtcbiAgICAgICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhYXJyWydtZXNzYWdlJ10gPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnYXBpLWRhdGEnXSxcbiAgICAgICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFyciB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuXG4gIH1cbiAgb3BlbmV4dGxpbmt3aXRocGFyYW0odmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnLHZhbCxkYXRhKTtcbiAgICBsZXQgcXRleHQ6IGFueSA9ICcnO1xuICAgIGxldCBmdWxsbGluazogYW55ID0gJyc7XG4gICAgZnVsbGxpbmsgPSB2YWwubGluaztcbiAgICBpZiAodmFsLnBhcmFtdHlwZSA9PSBudWxsKSB7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyAnPScgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuICAgICAgICBpZiAocGFyc2VJbnQodikgPT0gMCkgeyBmdWxsbGluayA9IGZ1bGxsaW5rICsgJz8nICsgcXRleHQ7IH1cbiAgICAgICAgaWYgKHBhcnNlSW50KHYpICE9IDApIHsgZnVsbGxpbmsgPSBmdWxsbGluayArICcmJyArIHF0ZXh0OyB9XG4gICAgICB9XG4gICAgICAvLyB2YWwubGluaz1mdWxsbGluaztcbiAgICB9XG4gICAgaWYgKHZhbC5wYXJhbXR5cGUgIT0gbnVsbCAmJiB2YWwucGFyYW10eXBlID09ICdhbmd1bGFyJykge1xuICAgICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICAvLyBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgXCI9XCIgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl0ua2V5XSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdxdGV4dCcscXRleHQpO1xuXG4gICAgICAgIGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnLycgKyBlbmNvZGVVUkkoZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICAgIH1cbiAgICAgIC8vIHZhbC5saW5rPWZ1bGxsaW5rO1xuXG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJIZWxsbyBmcm9tIHNldFRpbWVvdXRcIik7XG4gICAgICAvLyBjb25zb2xlLmxvZygnbGluaycsZnVsbGxpbmssZGF0YSxxdGV4dCk7XG4gICAgfSwgMTApO1xuXG4gICAgd2luZG93Lm9wZW4oZnVsbGxpbmssICdfYmxhbmsnKTtcbiAgfVxuICBjbGlja3VybCh2YWw6IGFueSwgdXJsOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gdXJsICsgJycgKyB2YWwuX2lkICsgJycgKyB0aGlzLnBkZl9saW5rX3ZhbDtcbiAgICB3aW5kb3cub3BlbihsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGNoZWNrZWRsaXN0KCkge1xuICAgIC8vIHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGRhdGE6IGFueSA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLm1hcCh4ID0+IHguX2lkKVxuICAgICAgY29uc29sZS5sb2coJ2NoZWNrZWRsaXN0JywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWxkYXRhKTtcbiAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZXNlbGVjdGlvbmNoYW5nZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkIH0pO1xuICAgIH0sIDEwMCk7XG5cblxuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGlvbi5zZWxlY3QpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0FsbFNlbGVjdGVkJywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gICAgdGhpcy5jaGVja2VkbGlzdCgpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxuXG4gIGNyZWF0ZURhdGEocG9pbnQ6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgJ18nKV0gPSBwb2ludFtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIC8qYXBwbHlGaWx0ZXIxKGZpbHRlclZhbHVlOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbC52YWx1ZSk7XG4gICAgbGV0IHZhbHVlPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHZhbC52YWx1ZSk7XG5cbiAgICB2YWx1ZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLyEqIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSBmdW5jdGlvbihkYXRhLCBmaWx0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgLy8gcmV0dXJuIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9KiEvXG4gIH0qL1xuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSwgcm93KSB7XG5cbiAgICAvKlxuICAgICBpZiAoY29sX25hbWVbJ2NvbHVtbkRlZiddPT0ncHJvZ3Jlc3MnICYmIHJvd1sncHJvZ3Jlc3MnXT09JzEwMCcpe1xuICAgICByZXR1cm4geydjb2xvcicgOiAncmVkJ31cbiAgICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIHt9XG4gICAgIH1cbiAgICAgKi9cblxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIC8qKnNob3cgdmlkZW8gbW9kYWwgb24gY2xpY2sgb2YgdGhhbW5haWwgZnVuY3Rpb24gYnkgc291cmF2ICovXG4gIGZldGNodmlkZW8odmlkZW9kYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvZGF0YScsdmlkZW9kYXRhKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFZpZGVvUGxheWVyLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JywgJ3ZpZGVvLW1vZGFsJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgcHJldmlld0RhdGE6IHZpZGVvZGF0YSB9XG4gICAgfSk7XG4gIH1cbiAgb3Blbm5vdGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRlcnJvdyA9IHZhbC5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLm5vdGVzLmxpc3RlbmRwb2ludCwgdGhpcy5qd3R0b2tlbnZhbCwgeyBpZDogdmFsLl9pZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnJlcywgJ2xpc3Qgbm90ZXMnKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAvLyB0aGlzLmRhdGEubm90ZXN2YWwgPSAnJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3RlcycsIHZhbCk7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ25vdGVzLW1vZGFsJ10sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgbm90ZXM6IHRydWUsIGFwaXVybDogdGhpcy5hcGl1cmx2YWwsXG4gICAgICAgICAgbm90ZWRhdGE6IHRoaXMubGliZGF0YXZhbC5ub3Rlcywgcm93ZGF0YTogdmFsLFxuICAgICAgICAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgICAgIGxpc3RkYXRhOiByZXN1bHQucmVzLFxuICAgICAgICAgIF9zbmFja0JhcjogdGhpcy5fc25hY2tCYXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICB2aWV3ZGF0YShkYXRhMTogYW55KSB7XG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICBkYXRhID0gZGF0YTE7XG4gICAgY29uc3QgZGF0YTI6IGFueSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgY29uc3QgZmxhZ2s6IGFueSA9ICcnO1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gdHJ1ZSkgeyBkYXRhW2tleV0gPSAnWWVzJzsgfVxuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gZmFsc2UpIHsgZGF0YVtrZXldID0gJ05vJzsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9ICc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldICsgJz48YnIvPic7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGRhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltZ3ZhbCk7PVwiK1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFba2V5XVtrXS5yZXBsYWNlKC8nL2csICcnKSk7XG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFba2V5XVtrXSArICc+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIGRhdGFba2V5XVtrXSArICc8L3NwYW4+PGJyLz4nKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XVtrXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIG9iamsgKyAnIDogJyArIGRhdGFba2V5XVtrXVtvYmprXSArICc8L3NwYW4+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbiBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtuXSAhPSBudWxsICYmIGRhdGFbbl0gIT0gJycpIHtcbiAgICAgICAgZGF0YTJbbl0gPSBkYXRhW25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsKSB7XG4gICAgICAvLyBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICB9XG4gICAgbGV0IHJlcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEyKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlldyBkYXRhJyxyZXMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAwdmgnLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGV0YWlsLXZpZXcnXSxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMgfVxuICAgIH0pO1xuXG4gIH1cbiAgbWFuYWdlc3RhdHVzKGRhdGE6IGFueSkge1xuICAgIGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IHBhbmVsQ2xhc3M6ICdjdXN0b20tYm90dG9tc2hlZXQnLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50LCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9sZGRhdGFbY10uX2lkID09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdtYW5hZ2Utc3RhdHVzJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmxpc3RuZXIocm93OiBhbnksIGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2N1c3RvbWJ1dHRvbmxpc3RuZXInLCByb3csIGN1c3RvbWJ1dHRvbik7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7XG4gICAgICBhY3Rpb246ICdjdXN0b21idXR0b25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBjdXN0b21idXR0b25jbGljazoge1xuICAgICAgICBkYXRhOiByb3csIGJ0bmluZm86IGN1c3RvbWJ1dHRvblxuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOiBhbnkgPSB0aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy8gaWZyYW1lIHVybFxuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIGRhdGFbdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzW2JdXTtcbiAgICB9XG4gICAgdW5zYWZldXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy8gZm9yIHNhbml0aXppbmcgdGhlIHVybCBmb3Igc2VjdXJpdHksIG90aGVyd2lzZSBpdCB3b24ndCBiZSBhYmxlIHRvIHNob3cgdGhlIHBhZ2UgaW4gaWZyYW1lLCBoZW5jZSBtb2RhbFxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7ICAgICAgIC8vIGZvciBvcGVuaW5nIHRoZSBtb2RhbFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLWRhdGEtbW9kYWwnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IFt7IGRhdGEsIGN1c3RvbWRhdGE6IHVuc2FmZXVybCB9XSB9XG4gICAgfSk7XG5cblxuICB9XG5cblxuXG4gIG1hbmFnZXN0YXR1c211bHRpcGxlKCkge1xuXG4gICAgY29uc3QgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnN0IGJzID0gdGhpcy5ib3R0b21TaGVldC5vcGVuKEJvdHRvbVNoZWV0LCB7IGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAvLyBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIC8vIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgY29uc3QgbmV3c3RhdHVzOiBhbnkgPSByZXN1bHQudmFsO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC51cGRhdGVlbmRwb2ludG1hbnksIGlkcywgcmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICd0b29nbGUtbWFueSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVtdWx0aXBsZSgpIHtcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW11bHRpcGxlJ10sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZXNlIHJlY29yZHM/IFRoaXMgcHJvY2VzcyBjYW4gbm90IGJlIHVuZG9uZS4nLFxuICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVNYW55RGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC5kZWxldGVlbmRwb2ludG1hbnksIGlkcywgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZWRhdGEoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gYWxlcnQoNSk7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEgODg5IC0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdqd3R0b2tlbnZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIHJlY29yZD8gVGhpcyBwcm9jZXNzIGNhbiBub3QgYmUgdW5kb25lLicsXG4gICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGRhdGEuX2lkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdkZWxldGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtc2luZ2xlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZCAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOiBhbnksIHR5cGU6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKGZpZWxkLCB0eXBlKVxuICAgIHRoaXMuc29ydGRhdGF2YWwuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cblxuICBhbGxTZWFyY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXRcIik7XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoc3Ryc2FyciwgJ3RoaXMuc2VhcmNoc3Ryc2FycicpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAnc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCcpO1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbGwgc2VhcmNoIHRoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaFtpXSk7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvcycsIGF1dG9zZWFyY2gpO1xuXG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLmxpbWl0Y29uZHZhbDtcblxuICAgIGxldCBjb25kaXRpb25vYmo6IG9iamVjdCA9IHt9O1xuXG4gICAgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgLy8gY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmogJiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbjtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBmb3IgKGxldCBiIGluIGNvbmRpdGlvbm9iaikge1xuICAgIC8vICAgLy8gaWYoY29uZGl0aW9ub2JqW2JdKVxuICAgIC8vICAgZm9yIChsZXQgYyBpbiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbikge1xuICAgIC8vICAgICBpZiAoYyA9PSBiKSB7XG4gICAgLy8gICAgICAgLy8gY29uZGl0aW9ub2JqW2JdPXt9O1xuICAgIC8vICAgICAgIGxldCB0b3RhbGNvbmQ6IGFueTtcbiAgICAvLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb25vYmpbYl0pICE9ICdvYmplY3QnKVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHsgJGVxOiBjb25kaXRpb25vYmpbYl0gfSk7XG4gICAgLy8gICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIGNvbmRpdGlvbm9ialtiXSk7XG5cbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnaW4gaWYgYmxrJywgYywgYiwgY29uZGl0aW9ub2JqW2JdLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXSwgdG90YWxjb25kKTtcbiAgICAvLyAgICAgICBjb25kaXRpb25vYmpbYl0gPSB0b3RhbGNvbmQ7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2NdID0gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY107XG5cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgJ2NvbmRpdGlvbm9iaicsIGNvbmRpdGlvbm9iaiwgJ3RoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uJywgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIC8vIGNvbmRpdGlvbm9iaiA9IGNvbmRpdGlvbm9iai5jb25jYXQodGhpcy5saWJkYXRhLmJhc2Vjb25kaXRpb24pO1xuXG4gICAgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogMFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY29uLi4uJywgY29uZGl0aW9ub2JqLCAnZWQnLCB0aGlzLmVuZF9kYXRlLCAnbCcsIE9iamVjdC5rZXlzKGNvbmRpdGlvbm9iaikubGVuZ3RoKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZGl0aW9ub2JqKS5sZW5ndGggPCAwKSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBTZWFyY2ggY3JpdGVyaWEgc2VsZWN0ZWQgISEgJyB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAvLyByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ3NlYXJjaCcsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gdGhpcy5yZXNjb3VudCA9IDA7IFxuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuICBnZXR0eXBlb2YodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mICh2YWwpO1xuICB9XG5cblxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gc3RhcnQgKi9cbiAgYXJ0aXN0eHBQcmV2aWV3KHNpbmdsZURhdGE6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgY29uc3QgZGF0YTogYW55ID0geyBzb3VyY2U6ICdibG9ja2NoYWludXNlcl92aWV3JywgY29uZGl0aW9uOiB7IHBvc3RzX2lkX29iamVjdDogc2luZ2xlRGF0YS5faWQgfSwgdG9rZW46IHRoaXMuand0dG9rZW52YWwgfTtcbiAgICAvKioqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdERhdGEobGluaywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1heHAnXSxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGRhdGE6IHsgcHJldmlldzogdHJ1ZSwgcHJldmlld0RhdGE6IHJlc3RsdCB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBlbmQgKi9cblxuXG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjb25maXJtLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWRpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIC8vIHB1YmxpYyBub3Rlc3ZhbDphbnk9bnVsbCxcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWRpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWIgZGF0YSBpbiBtb2RhbCAnLCB0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdGhpcy5kYXRhLnJvd2RhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLmJsb2d0aXRsZSk7XG4gICAgdGhpcy5kYXRhLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGF0YS5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuZGF0YS5sb2FkZXJ2YWx1ZSA9IDUwO1xuICAgIHRoaXMuZGF0YS5idWZmZXJWYWx1ZSA9IDc2O1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgZGVsZXRlbm90ZShpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICBpZDogdGhpcy5kYXRhLnJvd2RhdGEuX2lkLFxuICAgICAgaW5kZXhcbiAgICAgIC8vIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgIC8vIHVzZXI6IHRoaXMuZGF0YS5ub3RlZGF0YS51c2VyLFxuICAgIH07XG4gICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gaW5kZXg7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuZGVsZXRlZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gdGhpcy5kYXRhLmxpc3RkYXRhLnB1c2goeyB1c2VyaWQ6IHRoaXMuZGF0YS5ub3RlZGF0YS5jdXJyZW50dXNlcmZ1bGxuYW1lLCBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgICAvLyB9XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5kYXRhLmFwaXVybCArIHRoaXMuZGF0YS5ub3RlZGF0YS5hZGRlbmRwb2ludCwgdGhpcy5kYXRhLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdhZGQgbm90ZXMnKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5saXN0ZGF0YSA9PSBudWxsKSB7IHRoaXMuZGF0YS5saXN0ZGF0YSA9IFtdOyB9XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnVuc2hpZnQoeyBfaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCwgbm90ZXM6IHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlciwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0gfSk7XG4gICAgICAgICAgdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcsdGhpcy5kYXRhLmxpc3RkYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdibGFuayBub3RlcycpO1xuICAgICAgdGhpcy5kYXRhLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOb3RlcyBjYW5cXCd0IGJlIGJsYW5rICEhICcgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YSkge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cblxufVxuXG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cblxuICBvcGVuTGluayh2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgdmlkZW8gcGxheWVyICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICd2aWRlb3BsYXllcicsXG4gIHRlbXBsYXRlVXJsOiAndmlkZW9wbGF5ZXIuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIFZpZGVvUGxheWVyIHtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8VmlkZW9QbGF5ZXI+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCd2aWRlb3BsYXllck1vZGFsJyxkYXRhLnByZXZpZXdEYXRhLnZpZGVvKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbi8qKmxpc3RpbmcgSW1hZ2UgVmlldyAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ2ltZ19tb2RhbF92aWV3Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXcge1xuXG4gIC8vIHB1YmxpYyBkYXRhOmFueTtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEltYWdlVmlldz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ0ltYWdlVmlld01vZGFsJywgZGF0YSk7XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2snLFxuICB0ZW1wbGF0ZVVybDogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjay5odG1sJyxcbiAgc3R5bGVzOiBbYFxuICAgIC5leGFtcGxlLXBpenphLXBhcnR5IHtcbiAgICAgIGNvbG9yOiBob3RwaW5rO1xuICAgIH1cbiAgYF0sXG59KVxuZXhwb3J0IGNsYXNzIFNuYWNrYmFyQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHNuYWNrQmFyUmVmOiBNYXRTbmFja0JhclJlZjxTbmFja2JhckNvbXBvbmVudD4sXG4gICAgQEluamVjdChNQVRfU05BQ0tfQkFSX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnlcbiAgKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3NuYWNrJyx0aGlzLmRhdGEpO1xuICB9XG59XG4iXX0=