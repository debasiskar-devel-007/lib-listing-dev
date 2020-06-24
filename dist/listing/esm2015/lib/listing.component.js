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
        this.subscriptions = [];
        this.subscriptioncount = 0;
        this.tableFooterColumns = [];
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
            console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            this.filterautoval(this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        () => {
            // this.searchResult$ = this.api.search(this.model);
            console.log('after debounce  server', this.autosearchinput, this.currentautocompleteitem);
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
                    console.log(res, 'result');
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
        console.log(this.grab_linkval);
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
        // console.log(this.sortdataval,'sortdataval');
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
        console.log(this.columns, 'cols');
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
        console.log(this.columns, 'cols filter', this.displayedColumns);
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
        console.log('ngAfterContentInit() ...');
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        console.log('ngAfterViewInit called ... ');
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
     * @return {?}
     */
    dateSearch(val) {
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
                console.log('this.tsearch', this.tsearch);
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
     * @return {?}
     */
    selectSearch(value, type) {
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // let source: any;
        // let condition: any = {};
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
     * @return {?}
     */
    paging(val) {
        if (val == 1) {
            this.limitcondval.skip = (this.limitcondval.pagecount) * this.limitcondval.limit;
            this.limitcondval.pagecount++;
        }
        if (val == -1 && this.limitcondval.skip < this.limitcondval.limit) {
            return;
        }
        if (val == -1 && this.limitcondval.skip >= this.limitcondval.limit) {
            console.log('in skip block');
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
            }
            else {
                if (val == 1) {
                    this.limitcondval.pagecount--;
                    this.limitcondval.skip -= this.limitcondval.limit;
                }
                if (val == -1) {
                    this.limitcondval.pagecount++;
                    this.limitcondval.skip += this.limitcondval.limit;
                }
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
     * @param {?} value
     * @param {?} data
     * @return {?}
     */
    autosearchfunction(value, data) {
        // this.autosearchinput[value] = '';
        // console.log(this.autosearchinput,'asi');
        if (this.autosearch[value] == null) {
            this.autosearch[value] = [];
        }
        this.autosearch[value].push(data);
        console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
        this.autosearchinput[value] = null;
        this.currentautosearcharr = [];
        console.log(value, 'selected auto', this.autosearchinput[value], this.autosearchinput[value]);
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
     * @return {?}
     */
    textsearchfunction(value) {
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
    isAllSelected() {
        // console.log('isAllSelected');
        if (this.selection != null && this.selection.select) {
            // console.log('isAllSelected', this.dataSource.data.length, this.selection.selected.length);
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
            data: { message: 'Are you sure you want to delete the selected records?' }
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
            data: { message: 'Are you sure to delete this record ??' }
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
                if (autosearch.$or == null) {
                    autosearch.$or = [];
                }
                autosearch.$or.push(tv);
            }
        }
        // console.log('autos',autosearch);
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
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
                this.rescount = 0;
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
                template: "<div class=\"container\">\n    <mat-card>\n        <mat-toolbar-row class=\"searchbar\" *ngIf=\"rescount>0u\">\n            <ng-container class=\"inputfilterForloop\" *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                    <mat-form-field class=\"searchdiv pad-gap\">\n\n                        <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field)\" (keyup)=\"textsearchfunction(item.field)\" [(ngModel)]='tsearch[item.field]' placeholder=\"{{item.label}}\">\n                        <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                search\n                            </i> &nbsp;</span>\n                    </mat-form-field>\n                </ng-container>\n\n            </ng-container>\n\n            <ng-container class=\"inputfilterForAuto\" *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                    <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                        <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\" [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                            {{v.name}}\n                            <mat-icon matChipRemove>cancel</mat-icon>\n                        </mat-chip>\n                        <input placeholder=\"{{item.label}} \" [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [(ngModel)]=\"autosearchinput[item.field]\" (keyup)=\"autocompletechangedetected(item);\">\n                    </mat-chip-list>\n\n                    <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                    <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                    <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                    <mat-autocomplete #auto=\"matAutocomplete\">\n                        <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                            {{option[item.field]}}\n                        </mat-option>-->\n\n                        <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\" (click)=\"autosearchfunction(item.field,statusval)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-autocomplete>\n                </mat-form-field>\n            </ng-container>\n\n\n\n            <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n\n      <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n        <mat-label>{{item.label}}</mat-label>\n        <mat-select>\n          <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n            {{status.email}}\n          </mat-option>\n        </mat-select>\n      </mat-form-field>\n\n      </span>-->\n            <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n&lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n&lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n        <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n              <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n        </mat-form-field>\n&lt;!&ndash;              </span>&ndash;&gt;\n      </ng-container>-->\n\n\n            <ng-container class=\"filterForTexticon\" *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                <!-- <span>dddddd</span> -->\n                <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                    <mat-label>{{status.label}}</mat-label>\n                    <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                    <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\" [(ngModel)]='tsearch[status.field]'>\n                        <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\" (click)=\"selectSearch(statusval.val, status)\">\n                            {{statusval.name}}\n                        </mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </ng-container>\n\n\n            <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                <!-- <span>D search !!</span> -->\n                <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                    <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\" placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\" (dateChange)=\"dateSearch(status.field)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                    <mat-form-field class=\"filterFordatesearchend\">\n                        <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\" autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\" (dateChange)=\"dateSearch(status.field)\">\n                        <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                        <mat-datepicker #picker1></mat-datepicker>\n                    </mat-form-field>\n\n\n\n                    <!-- <span class=\"search_class\">\n                        <button mat-raised-button color=\"primary\" class=\"add_button\"\n                            (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                    </span> -->\n\n\n\n                </ng-container>\n            </ng-container>\n\n\n            <!-- use for refresh all data -->\n            <span class=\"search_class\">\n                <ng-container class=\"refresh\">\n                    <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                        autorenew\n                    </i>\n                </ng-container>\n                <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                <ng-container class=\"refresh\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\">Search</button>\n                </ng-container>\n\n            </span>\n\n\n\n            <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                <button mat-raised-button color=\"primary\" class=\"add_button\"\n                    [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n            </span>\n        </mat-toolbar-row>\n\n\n\n        <ng-container *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n\n            </span>\n        </ng-container>\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef!= 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n                            {{column.header}}\n                            <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                class=\"material-icons cursor float-right\" (click)=\"sorttable(column.columnDef,'asc')\">\n                                arrow_downward\n                            </span>\n                            <span class=\"material-icons cursor float-right\" *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\" (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                            </span>\n\n                            <span class=\"material-icons cursor\" *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\" (click)=\"sorttable(column.columnDef,'desc')\">\n                                unfold_more\n                            </span>\n\n                            </span>\n\n                        </th>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \" data-title=\"{{column.header}} \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                            {{pdfFlag(row)}}</span>\n                            <span *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n                            <ng-container\n                                *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n                                <span [innerHTML]=\"row[column.columnDef] \"></span>\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                        {{row[column.columnDef] | date}}\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                        {{row[column.columnDef] | date:'medium'}}\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                        NA\n                    </ng-container>\n                    <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                        NA\n                    </ng-container>\n\n                    </span>\n                    <!-- for image view  -->\n                    <span *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \" (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                            </span></span>\n                    <!-- for video view -->\n                    <span *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                <img src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                    alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                    </span>\n\n                    <span *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                    <!--          <span *ngIf=\"sh==true \">-->\n                    <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \" class=\"cursor \">\n                            <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                class=\"material-icons \">cloud_download</i>\n                        </span>\n                    <!--          </span>-->\n                    <!--          <span *ngIf=\"aud==true \">-->\n                    <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                            <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                class=\"material-icons \">cloud_download</i>\n                        </span>\n\n\n                    <!--// for grap url//-->\n\n                    <span *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \" class=\"cursor \">\n                            <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                <!-- <p>{{item | json}}</p> -->\n                                <button mat-button\n                                    (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                            </ng-container>\n                        </span>\n\n                    <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                    <!--          //grap url end//-->\n\n\n                    <!--          </span>-->\n                    <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                    </td>\n                </ng-container>\n                <ng-container *ngIf=\"column.columnDef== '#' \">\n                    <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                    </td>\n                </ng-container>\n\n                <ng-container *ngIf=\"column.columnDef== 'select' \">\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container>\n\n                <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                    <td (click)=\"$event.stopPropagation() \" mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                        <!-- loader -->\n                        <section class=\"example-section \">\n                            <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                            </mat-progress-bar>\n                        </section>\n                        <!-- note block -->\n                        <ng-container *ngIf=\"libdataval.notes!=null \">\n                            <button mat-raised-button color=\"primary\" (click)=\"opennotes(row) \">\n                                {{libdataval.notes.label}}({{row.notescount}})\n                            </button>\n                        </ng-container>\n                        <!--custom buttions block -->\n                        <ng-container *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                            <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                <section class=\"custombutton{{cb}}\">\n                                    <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                        <ng-container *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                <button mat-raised-button color=\"primary\">{{custombutton.label}}</button>\n                                            </a>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button mat-raised-button color=\"primary\" (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                        </ng-container>\n\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                        <ng-container *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\" (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\" (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                            <button mat-raised-button color=\"primary\" (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                        </ng-container>\n\n                                    </ng-container>\n                                    <ng-container *ngIf=\"custombutton.type=='action'\">\n                                        <ng-container *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                            <button mat-raised-button color=\"primary\" (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                    </ng-container>\n                                </section>\n\n                            </ng-container>\n                        </ng-container>\n                        <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                            <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                class=\"cursor\" (click)=\"editdata(row)\">\n                                <i class=\"material-icons\">\n                                    edit\n                                </i>\n                            </span>\n\n                        <!--For modern browsers-->\n                        <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\" class=\"cursor\" (click)=\"deletedata(row)\">\n                                <i class=\"material-icons\">\n                                    delete_outline\n                                </i>\n                            </span>\n\n                        <!--For modern browsers-->\n                        <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\" class=\"cursor\" (click)=\"viewdata(row)\">\n                                <i class=\"material-icons\">\n                                    remove_red_eye\n                                </i>\n                            </span>\n\n                        <!--For modern browsers-->\n                        <span class=\"cursor\" *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\" (click)=\"managestatus(row)\">\n                                <i class=\"material-icons\">\n                                    toggle_off\n                                </i>\n                            </span>\n                        <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\" (click)=\"custombuttonfunc(row)\">\n                                <i class=\"material-icons treeclass\">\n                                    toggle_off\n                                </i>\n                            </span>\n\n                        <!-- artistxp preview start -->\n                        <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                <i class=\"material-icons\">perm_media</i>\n                            </span>\n                        <!-- artistxp preview end -->\n\n                        </span>\n\n                    </td>\n                </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n\n        <mat-card *ngIf=\"tableflag!=0\">No Records Exists !!!</mat-card>\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\" [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
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
    ListingComponent.prototype.subscriptions;
    /** @type {?} */
    ListingComponent.prototype.subscriptioncount;
    /** @type {?} */
    ListingComponent.prototype.tableFooterColumns;
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
            console.log('blank notes');
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
                template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>Notes for :\n                        <ng-container *ngIf=\"data.notedata.header!=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\"> {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\"><span>By:</span>{{note.notes.user}}</div>\n                        <div mat-line class=\"line-datetime\"> <span>On:</span> {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\" (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\" *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\" [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\" *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\" [innerHtml]=\"arr\"></span>\n                                <span *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\" [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true\">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">No\n            Thanks</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>OK</button>\n    </div>\n\n</div>"
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
                template: "\n\n<mat-nav-list class=\"navlist\">\n\n\n    <a *ngFor=\"let item of data.items;\"  mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n\n\n</mat-nav-list>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sS0FB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QTBoRTNCLE1BQU0sU0FBQyxlQUFlOzs7O0lBRHZCLGdDQUEyQzs7SUFDM0MsMkJBQXlDOzs7OztBQWM3QyxNQUFNLE9BQU8sU0FBUzs7Ozs7O0lBR3BCLFlBQ1MsU0FBa0MsRUFDVCxJQUFTO1FBRGxDLGNBQVMsR0FBVCxTQUFTLENBQXlCO1FBQ1QsU0FBSSxHQUFKLElBQUksQ0FBSztRQUN6Qyx3Q0FBd0M7SUFDMUMsQ0FBQzs7OztJQUNELFFBQVE7UUFDTixpQ0FBaUM7SUFDbkMsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQWxCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLHNUQUFrQzthQUNuQzs7OztZQXZpRW1CLFlBQVk7NENBNmlFM0IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsOEJBQXlDOztJQUN6Qyx5QkFBeUM7O0FBcUI3QyxNQUFNLE9BQU8saUJBQWlCOzs7OztJQUM1QixZQUNTLFdBQThDLEVBQ2xCLElBQVM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQW1DO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFNUMsa0NBQWtDO0lBQ3BDLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsbUNBQW1DO2dCQUM3QyxrRkFBcUQ7eUJBQzVDOzs7O0dBSVI7YUFDRjs7OztZQXRqRXlDLGNBQWM7NENBMGpFbkQsTUFBTSxTQUFDLGtCQUFrQjs7OztJQUQxQix3Q0FBcUQ7O0lBQ3JELGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsIFNpbXBsZUNoYW5nZSwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZiwgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyLCBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5pbXBvcnQgKiBhcyBtb21lbnRJbXBvcnRlZCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG4vLyBpbXBvcnQge1Byb2dyZXNzQmFyTW9kZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3MtYmFyJztcbi8vIGltcG9ydCAge0J0bkNvbXBvbmVudH0gZnJvbSAnLi8uLi8uLi8uLi8uLi9zcmMvYXBwL2J0bi9idG4uY29tcG9uZW50J1xuY29uc3QgbW9tZW50ID0gbW9tZW50SW1wb3J0ZWQ7XG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBzZWFyY2hMaXN0dmFsOiBhbnk7XG4gIHJlc2NvdW50OiBudW1iZXIgPSAwO1xuICBwZGZfbGlua192YWw6IGFueTtcbiAgc3RhdHVzYXJydmFsOiBhbnk7XG4gIHNraXB2YWw6IGFueTtcbiAgZXJyb3JtZzogYW55O1xuICBqd3R0b2tlbnZhbDogYW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6IGFueTtcbiAgZGV0YWlsX3NraXBfYXJyYXl2YWw6IGFueTtcbiAgZGVsZXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgZWRpdHJvdXRldmFsOiBhbnk7XG4gIGFwaXVybHZhbDogYW55O1xuICB1cGRhdGVlbmRwb2ludHZhbDogYW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55O1xuICBkYXRhY29sbGVjdGlvbnZhbDogYW55O1xuICBzZWxlY3Rpb246IGFueTtcbiAgc291cmNlZGF0YXZhbDogYW55O1xuICBlbWFpbGFycmF5dmFsOiBhbnk7XG4gIGNvbHVtbnM6IGFueSA9IFtdO1xuICBhdXRvc2VhcmNoaW5wdXQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b3NlYXJjaGFycjogYW55ID0gW107XG4gIG9sZGRhdGE6IGFueSA9IFtdO1xuICB0c2VhcmNoOiBhbnkgPSBbXTtcbiAgdGFibGVmbGFnOiBhbnkgPSAwO1xuICBhdXRvc2VhcmNoOiBhbnkgPSBbXTtcbiAgcHVibGljIHg6IGFueTtcbiAgcHVibGljIGxpYmRhdGF2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgbGltaXRjb25kdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbDogYW55O1xuICBwdWJsaWMgcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIHNvcnRkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIHNoOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyB1cGRhdGV0YWJsZXZhbDogYW55ID0gZmFsc2U7XG4gIGxvYWRlcnJvdzogYW55ID0gbnVsbDtcbiAgY3VycmVudGF1dG9jb21wbGV0ZWl0ZW06IGFueTtcblxuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG4gIEBPdXRwdXQoKSBvbkxpYmxpc3RpbmdDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuXG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hfc2V0dGluZ3Moc2VhcmNoX3NldHRpbmdzOiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCA9IHNlYXJjaF9zZXR0aW5ncztcbiAgICAvKmZvciAobGV0IGk9IDA7IGk8PSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFtpXS5sYWJlbCk7XG4gICAgfSovXG5cbiAgICAvKiAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS5sYWJlbCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0udmFsdWVzKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2gpOyovXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlKGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTogYW55KSB7XG4gICAgdGhpcy5jbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2V2YWwgPSBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpbWl0Y29uZChsaW1pdGNvbmR2YWw6IGFueSkge1xuICAgIHRoaXMubGltaXRjb25kdmFsID0gbGltaXRjb25kdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaW1pdGNvbmR2YWwnLHRoaXMubGltaXRjb25kdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50KGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw7XG4gICAgaWYgKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID09IDApIHsgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTsgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQnLHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBncmFiX2xpbmsoZ3JhYl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLmdyYWJfbGlua3ZhbCA9IGdyYWJfbGluaztcbiAgICBjb25zb2xlLmxvZyh0aGlzLmdyYWJfbGlua3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWJ1dHRvbihjdXN0b21idXR0b246IGFueSkge1xuICAgIHRoaXMuY3VzdG9tYnV0dG9udmFsID0gY3VzdG9tYnV0dG9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX3NvdXJjZShkYXRlX3NlYXJjaF9zb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsID0gZGF0ZV9zZWFyY2hfc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzb3J0ZGF0YShzb3J0ZGF0YXZhbDogYW55KSB7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbCA9IHNvcnRkYXRhdmFsO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc29ydGRhdGF2YWwsJ3NvcnRkYXRhdmFsJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfZW5kcG9pbnQoZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwgPSBkYXRlX3NlYXJjaF9lbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogYW55KSB7XG4gICAgdGhpcy51cmx2YWwgPSB1cmw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaGVuZHBvaW50KHNlYXJjaGVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaGVuZHBvaW50dmFsID0gc2VhcmNoZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBkZl9saW5rKHBkZl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLnBkZl9saW5rX3ZhbCA9IHBkZl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hMaXN0KHNlYXJjaExpc3Q6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoTGlzdHZhbCA9IHNlYXJjaExpc3Q7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGxpYmRhdGEobGliZGF0YXZhbDogYW55KSB7XG4gICAgdGhpcy5saWJkYXRhdmFsID0gW107XG4gICAgdGhpcy5saWJkYXRhdmFsID0gbGliZGF0YXZhbDtcbiAgICAvLyBjb25zb2xlLmxvZygnbGliZGF0YXZhbCcsdGhpcy5saWJkYXRhdmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IFtdO1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFjb2xsZWN0aW9uKGRhdGFjb2xsZWN0aW9udmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFjb2xsZWN0aW9udmFsID0gZGF0YWNvbGxlY3Rpb252YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gIH0gQElucHV0KClcbiAgc2V0IHVwZGF0ZXRhYmxlKHVwZGF0ZXRhYmxlOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZXRhYmxldmFsID0gdXBkYXRldGFibGU7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgIGlmIChqd3R0b2tlbiAhPSBudWxsKSB7IHRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjsgfSBlbHNlIHsgdGhpcy5qd3R0b2tlbnZhbCA9ICcnOyB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCwndG9rZW4nKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHN0YXR1c2FycihzdGF0dXNhcnI6IGFueSkge1xuICAgIHRoaXMuc3RhdHVzYXJydmFsID0gc3RhdHVzYXJyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVtYWlsYXJyYXkoZW1haWxhcnJheTogYW55KSB7XG4gICAgdGhpcy5lbWFpbGFycmF5dmFsID0gZW1haWxhcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0cm91dGUoZWRpdHJvdXRlOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRyb3V0ZXZhbCA9IGVkaXRyb3V0ZTtcbiAgfVxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBzdGFydCAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJldmlld19hcnRpc3R4cChmbHVnOiBhbnkpIHtcbiAgICB0aGlzLnByZXZpZXdGbHVnID0gdHJ1ZTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGVuZCAqL1xuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdID0gdGhpcy5zZWFyY2hMaXN0dmFsO1xuICBzdGF0ZUdyb3VwOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcblxuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgc3RhcnRfZGF0ZTogYW55O1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHNlbGVjdFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgZW5kX2RhdGU6IGFueTtcbiAgcHVibGljIGk6IGFueTtcbiAgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBwcmVyZXN1bHQ6IGFueSA9IHt9O1xuICAvLyBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmRhdGFzb3VyY2V2YWwpO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgLy8gb3B0aW9uczogRm9ybUdyb3VwO1xuICBteUZvcm06IGFueTtcbiAgLy8gbXlGb3JtOmFueTtcbiAgbW9kZWxDaGFuZ2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBtb2RlbENoYW5nZWRzZXJ2ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHN1YnNjcmlwdGlvbmNvdW50ID0gMDtcbiAgdGFibGVGb290ZXJDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICAvLyBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMuYXBpLnNlYXJjaCh0aGlzLm1vZGVsKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGRlYm91bmNlICcsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgdGhpcy5maWx0ZXJhdXRvdmFsKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2Vkc2VydmVyXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgIHNlcnZlcicsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gJycpIHtcbiAgICAgICAgICAvLyB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG5cbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uc2VydmVyc2VhcmNoZGF0YS5lbmRwb2ludDtcblxuICAgICAgICAgIGxldCBzb3VyY2U6IGFueTtcblxuICAgICAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaF9zdHI6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdLFxuICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcywgJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsKSB0aGlzLnJlc2NvdW50ID0gcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IHJlc3VsdC5yZXM7XG4gICAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkICcgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcblxuICAgICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG5cblxuICAgIC8qIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgIH0pOyovXG5cblxuXG4gIH1cbiAgLypARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tMaXN0aW5nXSdcbiAgfSkqL1xuXG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gJycpIHtcblxuICAgIC8vICAgbGV0IHNvdXJjZTogYW55O1xuICAgIC8vICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgLy8gICBzb3VyY2UgPSB7XG4gICAgLy8gICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICAgIGNvbmRpdGlvbjogY29uZGl0aW9uXG4gICAgLy8gICB9O1xuICAgIC8vICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgdGhpcy5wcmVyZXN1bHQgPSB0aGlzLnJlc3VsdC5yZXM7XG4gICAgLy8gICB9KTtcblxuICAgIC8vIH1cblxuICAgIC8vIG5vdCBuZWVkZWQgLFxuXG4gICAgLy8gdGhpcy5fc2VydmljZS5zdWNjZXNzKHRoaXMuY29sdW1uc1swXS5kYXRlLCdkbmRubmQnLHRoaXMub3B0aW9ucyk7XG4gICAgLyogdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgICAgKTsqL1xuXG4gICAgdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICApO1xuXG4gICAgLypjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4qL1xuXG4gICAgdGhpcy54ID0gdGhpcy5kYXRhc291cmNldmFsO1xuICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZXZhbCkgdGhpcy5yZXNjb3VudCA9IHRoaXMuZGF0YXNvdXJjZXZhbC5sZW5ndGg7XG5cbiAgICBsZXQgdGVtcCA9IFtdO1xuICAgIGNvbnN0IGtleXMgPSB4WzBdO1xuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKTsgICAgLypieSBPYmplY3Qua2V5cygpIHdlIGNhbiBmaW5kIHRoZSBmaWVsZG5hbWVzKG9yIGtleXMpIGluIGFuIG9iamVjdCwgaS5lLCBpbiB0ZW1wIG9iamVjdCBmaWVsZCBuYW1lcyBhcmUgc2F2ZWQqL1xuXG4gICAgY29uc3QgY29sZGVmX2xpc3QgPSBbXTtcbiAgICBjb25zdCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCAnXycpKTsgICAgICAvKnRvIHJlcGxhY2Ugc3BhY2VzIGluIGZpZWxkIG5hbWUgYnkgXCJfXCIsIHdlIHVzZSBcInJlcGxhY2UoL1xccy9nLCBcIl9cIilcIiovXG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pO1xuICAgIH1cbiAgICAvLyBjb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy8gaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG4gICAgdGhpcy5jb2x1bW5zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gO1xuICAgICAgY29uc3QgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0dCcsdHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0LmNvbHVtbkRlZicpO1xuICAgICAgLy8gY29uc29sZS5sb2codHQuY29sdW1uRGVmKTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgaWYgKGIgPT0gdHQuaGVhZGVyKSB7IHR0LmhlYWRlciA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5za2lwdmFsLmluZGV4T2YodHQuY29sdW1uRGVmKSA9PSAtMSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh0dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzID0gW107XG4gICAgdGhpcy50YWJsZWZsYWcgPSAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50YWJsZWZsYWcgPSAwO1xuICAgIH0sIDEwMCk7XG5cbiAgICBkaXNwbGF5ZWRjb2xzID0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzICE9IG51bGwpIHtcbiAgICAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgIH1cbiAgICBlbHNlIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gW107XG5cbiAgICBsZXQgY3VzdG9tY29sczogYW55ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coJ2Rpc3BsYXllZGNvbHMnLGRpc3BsYXllZGNvbHMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzICE9IG51bGwpIHtcbiAgICAgIGN1c3RvbWNvbHMgPSB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tY29scyAhPSBudWxsICYmIGN1c3RvbWNvbHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGNjb2x2YWw6IHN0cmluZyA9ICcnO1xuICAgICAgZm9yIChjb25zdCB2IGluIGN1c3RvbWNvbHMpIHtcbiAgICAgICAgaWYgKGRpc3BsYXllZGNvbHMuaW5jbHVkZXMoY3VzdG9tY29sc1t2XSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBjdXN0b21jb2xzW3ZdKSB7IGNjb2x2YWwgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IGN1c3RvbWNvbHNbdl0sIGhlYWRlcjogY2NvbHZhbCwgY2VsbDogJ05BJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGxheWVkY29scyA9IGN1c3RvbWNvbHM7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tY29scycsY3VzdG9tY29scyxkaXNwbGF5ZWRjb2xzLHRoaXMuY29sdW1ucyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlYWN0aW9uID09IG51bGwgfHwgdGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMucHVzaCh0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSA9PSBudWxsID8gJ0FjdGlvbnMnIDogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSwgaGVhZGVyOiAnQWN0aW9ucycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMudW5zaGlmdCgnIycpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICcjJywgaGVhZGVyOiAnIycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY29sdW1ucywgJ2NvbHMnKTtcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRpc3BsYXllZGNvbHM7XG4gICAgLy8gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJyMnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZW11bHRpcGxlc2VsZWN0YnV0dG9uICE9IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3QnKTtcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHsgY29sdW1uRGVmOiAnc2VsZWN0JywgaGVhZGVyOiAnc2VsZWN0JywgY2VsbDogJ05BJyB9KTsgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgfVxuICAgIGxldCB0ZW1wY29sYXJyID0gW107XG4gICAgbGV0IHRlbXBjb2xhcnIyID0gW107XG4gICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKTtcbiAgICBmb3IgKGxldCBuIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKHRlbXBjb2xhcnIuaW5kZXhPZih0aGlzLmNvbHVtbnNbbl0uY29sdW1uRGVmKSA9PSAtMSlcbiAgICAgICAgdGVtcGNvbGFycjIucHVzaCh0aGlzLmNvbHVtbnNbbl0pO1xuICAgICAgdGVtcGNvbGFyci5wdXNoKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpO1xuXG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IHRlbXBjb2xhcnIyO1xuICAgIC8vIHRoaXMuY29sdW1ucyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmNvbHVtbnMubWFwKChpdGVtOiBhbnkpID0+IGl0ZW0uY29sdW1uRGVmKSkpO1xuXG4gICAgLy8gdGhpcy5jb2x1bW5zLm1hcChpdGVtID0+IGl0ZW0uY29sdW1uRGVmKVxuICAgIC8vICAgLmZpbHRlcigodmFsdWUsIGluZGV4LCBzZWxmKSA9PiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleCk7XG4gICAgLy8gdW5pcXVlIGNvbCBuYW1lcyBcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSk7XG4gICAgY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scyBmaWx0ZXInLCB0aGlzLmRpc3BsYXllZENvbHVtbnMpO1xuICAgIGNvbnN0IGRhdGFfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy54Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBkYXRhX2xpc3QucHVzaCh0aGlzLmNyZWF0ZURhdGEoeFtpXSkpO1xuICAgIH1cbiAgICB0aGlzLm9sZGRhdGEgPSBkYXRhX2xpc3Q7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShkYXRhX2xpc3QpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cblxuICAgIC8vIGxvYWQgc2VhcmNoIHByZWRlZmluZGVkIGRhdGFcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcblxuICAgICAgLy8gdGhpcy5zZWxlY3RzZWFyY2hbJ3N0YXR1cyddID0gJzAnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdHNlYXJjaCcsIHRoaXMuc2VsZWN0c2VhcmNoKTtcbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnczEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCkge1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0MScsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLmZpZWxkXSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3QnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDEwMDApO1xuXG5cbiAgfVxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcblxuXG4gIH1cblxuICB1cFRvKGVsLCB0YWdOYW1lKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHdoaWxlIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFueSBET00gbWV0aG9kcyByZXR1cm4gbnVsbCBpZiB0aGV5IGRvbid0IFxuICAgIC8vIGZpbmQgdGhlIGVsZW1lbnQgdGhleSBhcmUgc2VhcmNoaW5nIGZvclxuICAgIC8vIEl0IHdvdWxkIGJlIE9LIHRvIG9taXQgdGhlIGZvbGxvd2luZyBhbmQganVzdFxuICAgIC8vIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlckNvbnRlbnRDaGVja2VkIGNhbGxlZCAuLi4nKTtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICB0aGlzLmVycm9ybWcgPSAnJztcbiAgICBjb25zdCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG4gIGRhdGVTZWFyY2godmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIik7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcbiAgICAvLyBsZXQgc2QgPSBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCk7XG4gICAgLy8gbGV0IGVkID0gbW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cblxuXG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuXG4gICAgICBpZiAodGhpcy5lbmRfZGF0ZSAhPSBudWxsICYmIHRoaXMuc3RhcnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXJ0X2RhdGUgIT0gbnVsbCAmJiAodGhpcy5lbmRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuZW5kX2RhdGUubGVuZ3RoID09IDApKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZW5kX2RhdGUgIT0gbnVsbCAmJiAodGhpcy5zdGFydF9kYXRlID09IG51bGwgfHwgdGhpcy5zdGFydF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKClcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaCk7XG4gICAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0gIT0gJycpIHtcbiAgICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICAgIGNvbnN0IHR2OiBhbnkgPSB7fTtcbiAgICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlIHNlYXJjaCBjb24uLi4nLCBjb25kaXRpb25vYmosIHRoaXMuZW5kX2RhdGUsIHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cblxuXG4gIHNlbGVjdFNlYXJjaCh2YWx1ZTogYW55LCB0eXBlOiBhbnkpIHtcblxuXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICAvLyB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyAvL2NvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIC8vIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIC8vIHNvdXJjZSA9IHtcbiAgICAvLyAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIC8vIH07XG5cblxuXG5cblxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy50c2VhcmNoLCAnY3p4Y3hjenhjJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCB0aGlzLnNlbGVjdHNlYXJjaCwgdmFsdWUsIHR5cGUpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIGNvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvblt0eXBlLmZpZWxkXSA9IHZhbHVlO1xuICAgIGNvbnNvbGUubG9nKCdzZWxlY3RTZWFyY2ggJywgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuICAvLyBmb3IgbWFuYWdpbmcgcGFnaW5hdGlvblxuXG4gIHBhZ2luZyh2YWw6IGFueSkge1xuICAgIGlmICh2YWwgPT0gMSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIDwgdGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID49IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICBjb25zb2xlLmxvZygnaW4gc2tpcCBibG9jaycpO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAyKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmICh2YWwgPiAxKSB7XG4gICAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID09IDEpIHsgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7IH0gZWxzZSB7IHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDsgfVxuICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG5cbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJ3NzJyx0aGlzLmRhdGFjb2xsZWN0aW9udmFsLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcblxuXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgY29uc3Qgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogdGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgLypsZXQgZGF0YTphbnk9e1xuICAgICAgXCJjb25kaXRpb25cIjp7XG4gICAgICAgIGxpbWl0OnRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOnRoaXMubGltaXRjb25kdmFsLnNraXBcbiAgICAgIH1cblxuICAgIH0qL1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yZXN1bHQsJ3JlcycpO1xuICAgICAgaWYgKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgdGhpcy5yZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAncGFnaW5nJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyByYW5nZSBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh2YWwgPT0gMSkge1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgLT0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbCA9PSAtMSkge1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCsrO1xuICAgICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgKz0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIERhdGEgRm91bmQgaW4gdGhpcyByYW5nZSAhIScgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICB9XG5cbiAgYWRkYXV0b3NlYXJjaGRhdGEodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndicsdmFsKTtcblxuICB9XG4gIHJlbW92ZSh2YWw6IGFueSwgaTogYW55LCBmaWVsZDogYW55KSB7XG5cbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW2ZpZWxkXSAhPSBudWxsKSB7IHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0uc3BsaWNlKGksIDEpOyB9XG4gIH1cbiAgYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQoaXRlbSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQnLCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICBpZiAodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhID09IG51bGwpXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZC5uZXh0KCk7XG4gICAgZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gZWxzZSBibG9jayBvZiBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcpO1xuICAgICAgdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXIubmV4dCgpO1xuICAgIH1cblxuICB9XG4gIGZpbHRlcmF1dG92YWwoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmF1dG92YWwnLCBkYXRhLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSk7XG4gICAgY29uc3QgYXV0b3NlbHZhbCA9IHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSAhPSAnJykge1xuICAgICAgY29uc3QgZmlsdGVydmFsID0gZGF0YS52YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGF1dG9zZWx2YWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBmaWx0ZXJ2YWw7XG4gICAgfVxuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0gPSAnJztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2hpbnB1dCwnYXNpJyk7XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSA9IFtdO1xuICAgIH1cbiAgICB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnB1c2goZGF0YSk7XG4gICAgY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSA9IG51bGw7XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICAvLyByZXNldCBhdXRvIHNlYXJjaCBkYXRhICFcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLGRhdGEsJ3NzJyx0aGlzLmF1dG9zZWFyY2gpO1xuICAgIC8qbGV0IHZhbDogYW55ID0gdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXTtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gIT1udWxsICYmIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMCAmJiB7ICRvcjogW3RoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTsqL1xuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzKTtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgLy8gfSk7XG4gIH1cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgY29uc3QgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBsZXQgdmFsID0gJyc7XG4gICAgaWYgKHRoaXMudHNlYXJjaCAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCkge1xuICAgICAgdmFsID0gdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSwgdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXSB9KSB7IGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDsgfVxuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vIGNvbnNvbGUud2Fybih0aGlzLnRzZWFyY2gpO1xuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBhZGQgbG9hZGVyXG4gICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIC8vY2xvc2UgbG9hZGVyXG4gICAgLy8gICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIC8vICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgY29uc29sZS5sb2coJ29vcHMnKTtcbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coXCJlcnJvclwiKTtcbiAgfVxuXG4gIHJlZnJlc2hkYXRhKCkge1xuICAgIHRoaXMuYXV0b3NlYXJjaCA9IFtdO1xuICAgIHRoaXMudHNlYXJjaCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0c2VhcmNoID0gW107XG4gICAgdGhpcy5zdGFydF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLmVuZF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgfVxuICByZWZyZXNoYWxsZGF0YSh2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgaWYgKHZhbC5maWx0ZXJlZERhdGEgIT0gbnVsbCAmJiB2YWwuZmlsdGVyZWREYXRhLmxlbmd0aCA8IHRoaXMub2xkZGF0YS5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWZyZXNoIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgLy8gcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveCcsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3JlZnJlc2hkYXRhJ10sXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJyBVcGRhdGVkISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gIH1cblxuXG5cbiAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gICAgY29uc3QgZmlsdGVyVmFsdWUgPSB2YWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gdGhpcy5zZWFyY2hMaXN0dmFsLmZpbHRlcihvcHRpb24gPT4gb3B0aW9uLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXJWYWx1ZSkpO1xuICB9XG5cbiAgZ2V0c3RhdHVzKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuc3RhdHVzYXJydmFsKSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNhcnJ2YWxbYl0udmFsID09IHZhbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gJ04vQSc7XG4gIH1cbiAgcGRmRmxhZyh2YWw6IGFueSkge1xuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2hhdHRlciBibG9rJyk7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGdyYXB1cmwodmFsOiBhbnkpIHtcbiAgICAvLyAgZm9yIGFsbCByb3cgY2hlY2tpbmdcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpXG4gICAgaWYgKHZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZDIgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZDIgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zaCk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdWQpO1xuICB9XG5cbiAgY29weVRleHQocm93OiBhbnksIHZhbDogc3RyaW5nKSB7XG5cbiAgICBjb25zdCBmdWxsdXJsID0gdmFsICsgJycgKyByb3c7XG4gICAgY29uc3Qgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBzZWxCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgc2VsQm94LnZhbHVlID0gZnVsbHVybDtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgc2VsQm94LmZvY3VzKCk7XG4gICAgc2VsQm94LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuICB9XG5cbiAgb3BlbmludGVybmFsbGluayh2YWw6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt2YWwucm91dGVdKTtcbiAgfVxuICBvcGVuaW50ZXJuYWxsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCByZGF0YTogYW55ID0gW107XG4gICAgcmRhdGEucHVzaCh2YWwucm91dGUpO1xuICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgIHJkYXRhLnB1c2goZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3JhZGF0JywgcmRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHJkYXRhKTtcbiAgfVxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YScsdmFsLGRhdGEpO1xuICAgIGNvbnN0IGRhdGFhcnIgPSBbXTtcbiAgICAvLyBkYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAvLyBkYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgdiBpbiB2YWwuZGF0YWZpZWxkcykge1xuICAgICAgY29uc3QgdGVtcGFyciA9IFtdO1xuICAgICAgdGVtcGFyci5wdXNoKHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSAhPSAnaW1hZ2UnICYmIHZhbC5kYXRhZmllbGRzW3ZdICE9ICd2aWRlbycpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NzJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIHR5cGVvZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2RmJywgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0udG9TdHJpbmcoKSk7XG4gICAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0udG9TdHJpbmcoKS5pbmNsdWRlcygnaWZyYW1lJykpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBzYWZlJywgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCgoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3NzMjInLHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgICAgICAvLyBlbHNlXG4gICAgICAgICAgdGVtcGFyci5wdXNoKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyAnID4gPGJyLz4nKTsgfVxuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdID09ICd2aWRlbycpIHtcbiAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gJycpIHtcbiAgICAgICAgICBsZXQgdGVtcGh0bWw6IGFueSA9ICgnPGlmcmFtZSB3aWR0aD01NjAgaGVpZ2h0PTMxNSBzcmM9aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godGVtcGh0bWwpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aHRtbCcsIHRlbXBodG1sLCBkYXRhW3ZhbC5kYXRhZmllbGRzXSwgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRlbXBhcnIucHVzaCgnTi9BJyk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdsb2NhbCBkYXRhIG0nLCBkYXRhYXJyKTtcbiAgICBsZXQgcmVzOiBhbnkgPSBkYXRhYXJyO1xuXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgcmVzW2JdWzFdLCByZXNbYl1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSByZXNbYl07IH1cblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhYXJyJyxkYXRhYXJyKTtcbiAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgfVxuICAgIHJlcy5tZXNzYWdlID0gdmFsLmhlYWRlcm1lc3NhZ2U7XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94LWFwaWRhdGEnLCAnbW9kYWwtbG9jYWxkYXRhJ10sXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogcmVzIH1cbiAgICB9KTtcbiAgfVxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhJyx2YWwsZGF0YSk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmFwaXVybHZhbCArIHZhbC5lbmRwb2ludDtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIHNvdXJjZVt2YWwucGFyYW1dID0gZGF0YS5faWQ7XG4gICAgaWYgKHZhbC5vdGhlcnBhcmFtICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgbiBpbiB2YWwub3RoZXJwYXJhbSkge1xuICAgICAgICBzb3VyY2VbdmFsLm90aGVycGFyYW1bbl1dID0gZGF0YVt2YWwub3RoZXJwYXJhbVtuXV07XG5cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2FkZXJyb3cgPSBkYXRhLl9pZDtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzJyxyZXN1bHQpO1xuICAgICAgICBsZXQgcmVzZGF0YTogYW55ID0ge307XG4gICAgICAgIHRoaXMubG9hZGVycm93ID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChyZXN1bHQucmVzWzBdICE9IG51bGwpIHtcbiAgICAgICAgICByZXNkYXRhID0gcmVzdWx0LnJlc1swXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZW1wcmRhdGE6IGFueSA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZygncmVzZGF0YT4+PicsIHJlc2RhdGEpO1xuICAgICAgICBpZiAodmFsLmRhdGFmaWVsZHMgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAoY29uc3QgYjEgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd2YWwuZGF0YWZpZWxkcycsIHZhbC5kYXRhZmllbGRzW2IxXSk7XG4gICAgICAgICAgICAvLyBmb3IgKGxldCBiMiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYjInLGIyLGRhdGFbYjJdLGRhdGFhcnJbYjJdWzBdKTtcbiAgICAgICAgICAgIC8vIGlmIChkYXRhYXJyW2IyXVswXSA9PSB2YWwuZGF0YWZpZWxkc1tiMV0pIHJlc2RhdGFmb3Jtb2RhbFtiMV0gPSBbZGF0YWFycltiMl1bMF0sIGRhdGFhcnJbYjJdWzFdXTtcbiAgICAgICAgICAgIHRlbXByZGF0YVt2YWwuZGF0YWZpZWxkc1tiMV1dID0gcmVzZGF0YVt2YWwuZGF0YWZpZWxkc1tiMV1dO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgcmVzZGF0YSA9IHRlbXByZGF0YTtcblxuXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgZGF0YWFyciA9IFtdO1xuICAgICAgICAvLyBkYXRhYXJyLnB1c2goWyduYW1lJywnZGViYXNpcyddKTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgICAgIGZvciAoY29uc3QgdiBpbiByZXNkYXRhKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGFyciA9IFtdO1xuICAgICAgICAgIHRlbXBhcnIucHVzaCh2KTtcbiAgICAgICAgICBpZiAodiAhPSAnaW1hZ2UnICYmIHYgIT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgaWYgKHJlc2RhdGFbdl0gIT0gbnVsbCAmJiB0eXBlb2YgKHJlc2RhdGFbdl0pICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXN2JywgcmVzZGF0YVt2XSk7XG4gICAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHJlc2RhdGFbdl0pKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgICB9IGVsc2UgeyB0ZW1wYXJyLnB1c2gocmVzZGF0YVt2XSk7IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHYgPT0gJ2ltYWdlJykgeyB0ZW1wYXJyLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyByZXNkYXRhW3ZdICsgJyA+IDxici8+Jyk7IH1cbiAgICAgICAgICBpZiAodiA9PSAndmlkZW8nKSB7XG4gICAgICAgICAgICBsZXQgdGVtcGh0bWw6IGFueSA9ICgnPGlmcmFtZSB3aWR0aD01NjAgaGVpZ2h0PTMxNSBzcmM9aHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJyArIHJlc2RhdGFbdl0gKyAnIGZyYW1lYm9yZGVyPTAgYWxsb3c9YWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8YnIvPicpO1xuICAgICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2godGVtcGh0bWwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBpZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgICAgICBkYXRhYXJyLnB1c2godGVtcGFycik7XG5cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBiIGluIGRhdGFhcnIpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gZGF0YWFycltiXVswXSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCBkYXRhYXJyW2JdWzFdLCBkYXRhYXJyW2JdWzBdXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gZGF0YWFycltiXTsgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICAgICAgZGF0YWFyciA9IHJlc2RhdGE7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYyBhcGkgZGF0YSAnLCByZXNkYXRhKTtcbiAgICAgICAgLy8gbGV0IHJlc2RhdGFmb3Jtb2RhbDogYW55ID0ge307XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2RhdGFmb3Jtb2RhbCcsIGRhdGFhcnIsIGRhdGFhcnIpO1xuICAgICAgICBpZiAodmFsLnJlZnJlc2hkYXRhICE9IG51bGwgJiYgdmFsLnJlZnJlc2hkYXRhID09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFhcnJbJ21lc3NhZ2UnXSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdhcGktZGF0YSddLFxuICAgICAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBkYXRhYXJyIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgfSk7XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICB9KTtcbiAgICByZXR1cm47XG5cbiAgfVxuICBvcGVuZXh0bGlua3dpdGhwYXJhbSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcsdmFsLGRhdGEpO1xuICAgIGxldCBxdGV4dDogYW55ID0gJyc7XG4gICAgbGV0IGZ1bGxsaW5rOiBhbnkgPSAnJztcbiAgICBmdWxsbGluayA9IHZhbC5saW5rO1xuICAgIGlmICh2YWwucGFyYW10eXBlID09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgcXRleHQgPSB2YWwucGFyYW1bdl0ucSArICc9JyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG4gICAgICAgIGlmIChwYXJzZUludCh2KSA9PSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnPycgKyBxdGV4dDsgfVxuICAgICAgICBpZiAocGFyc2VJbnQodikgIT0gMCkgeyBmdWxsbGluayA9IGZ1bGxsaW5rICsgJyYnICsgcXRleHQ7IH1cbiAgICAgIH1cbiAgICAgIC8vIHZhbC5saW5rPWZ1bGxsaW5rO1xuICAgIH1cbiAgICBpZiAodmFsLnBhcmFtdHlwZSAhPSBudWxsICYmIHZhbC5wYXJhbXR5cGUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIC8vIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyBcIj1cIiArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG5cbiAgICAgICAgZnVsbGxpbmsgPSBmdWxsbGluayArICcvJyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG5cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2V0VGltZW91dFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsaW5rJyxmdWxsbGluayxkYXRhLHF0ZXh0KTtcbiAgICB9LCAxMCk7XG5cbiAgICB3aW5kb3cub3BlbihmdWxsbGluaywgJ19ibGFuaycpO1xuICB9XG4gIGNsaWNrdXJsKHZhbDogYW55LCB1cmw6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKTtcbiAgfVxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaXNBbGxTZWxlY3RlZCcpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbiAhPSBudWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCk7XG4gICAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcbiAgICAgIGNvbnN0IG51bVJvd3MgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGg7XG4gICAgICByZXR1cm4gbnVtU2VsZWN0ZWQgPT09IG51bVJvd3M7XG4gICAgfVxuICB9XG5cbiAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cbiAgbWFzdGVyVG9nZ2xlKCkge1xuICAgIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cbiAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCkgOlxuICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaChyb3cgPT4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdykpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxuXG4gIGNyZWF0ZURhdGEocG9pbnQ6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgJ18nKV0gPSBwb2ludFtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIC8qYXBwbHlGaWx0ZXIxKGZpbHRlclZhbHVlOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbC52YWx1ZSk7XG4gICAgbGV0IHZhbHVlPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHZhbC52YWx1ZSk7XG5cbiAgICB2YWx1ZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLyEqIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSBmdW5jdGlvbihkYXRhLCBmaWx0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgLy8gcmV0dXJuIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9KiEvXG4gIH0qL1xuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSwgcm93KSB7XG5cbiAgICAvKlxuICAgICBpZiAoY29sX25hbWVbJ2NvbHVtbkRlZiddPT0ncHJvZ3Jlc3MnICYmIHJvd1sncHJvZ3Jlc3MnXT09JzEwMCcpe1xuICAgICByZXR1cm4geydjb2xvcicgOiAncmVkJ31cbiAgICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIHt9XG4gICAgIH1cbiAgICAgKi9cblxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIC8qKnNob3cgdmlkZW8gbW9kYWwgb24gY2xpY2sgb2YgdGhhbW5haWwgZnVuY3Rpb24gYnkgc291cmF2ICovXG4gIGZldGNodmlkZW8odmlkZW9kYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvZGF0YScsdmlkZW9kYXRhKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFZpZGVvUGxheWVyLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JywgJ3ZpZGVvLW1vZGFsJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgcHJldmlld0RhdGE6IHZpZGVvZGF0YSB9XG4gICAgfSk7XG4gIH1cbiAgb3Blbm5vdGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRlcnJvdyA9IHZhbC5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLm5vdGVzLmxpc3RlbmRwb2ludCwgdGhpcy5qd3R0b2tlbnZhbCwgeyBpZDogdmFsLl9pZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnJlcywgJ2xpc3Qgbm90ZXMnKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAvLyB0aGlzLmRhdGEubm90ZXN2YWwgPSAnJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3RlcycsIHZhbCk7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ25vdGVzLW1vZGFsJ10sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgbm90ZXM6IHRydWUsIGFwaXVybDogdGhpcy5hcGl1cmx2YWwsXG4gICAgICAgICAgbm90ZWRhdGE6IHRoaXMubGliZGF0YXZhbC5ub3Rlcywgcm93ZGF0YTogdmFsLFxuICAgICAgICAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgICAgIGxpc3RkYXRhOiByZXN1bHQucmVzLFxuICAgICAgICAgIF9zbmFja0JhcjogdGhpcy5fc25hY2tCYXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICB2aWV3ZGF0YShkYXRhMTogYW55KSB7XG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICBkYXRhID0gZGF0YTE7XG4gICAgY29uc3QgZGF0YTI6IGFueSA9IFtdO1xuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xuICAgICAgY29uc3QgZmxhZ2s6IGFueSA9ICcnO1xuICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdib29sZWFuJykge1xuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gdHJ1ZSkgeyBkYXRhW2tleV0gPSAnWWVzJzsgfVxuICAgICAgICAgIGlmIChkYXRhW2tleV0gPT0gZmFsc2UpIHsgZGF0YVtrZXldID0gJ05vJzsgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChrZXkgPT0gJ2ltYWdlJykge1xuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9ICc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldICsgJz48YnIvPic7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcblxuICAgICAgICB9XG5cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29uc3QgdGVtcGRhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgayBpbiBkYXRhW2tleV0pIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSA9PSAnaW1hZ2UnKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBsZXQgaW1ndmFsOmFueT10aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5maWxldXJsK2RhdGFba2V5XVtrXTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGltZ3ZhbCk7PVwiK1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFba2V5XVtrXS5yZXBsYWNlKC8nL2csICcnKSk7XG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFba2V5XVtrXSArICc+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPHNwYW4+XCIrZGF0YVtrZXldW2tdK1wiPC9zcGFuPjxici8+XCIpXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlICE9ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIGRhdGFba2V5XVtrXSArICc8L3NwYW4+PGJyLz4nKTtcblxuXG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgIT0ga2V5KSB7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XVtrXSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb2JqayBpbiBkYXRhW2tleV1ba10pIHtcbiAgICAgICAgICAgICAgICAgICAgdGVtcGRhdGEucHVzaCgnPHNwYW4+JyArIG9iamsgKyAnIDogJyArIGRhdGFba2V5XVtrXVtvYmprXSArICc8L3NwYW4+PGJyLz4nKTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSB0ZW1wZGF0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgbiBpbiBkYXRhKSB7XG4gICAgICBpZiAoZGF0YVtuXSAhPSBudWxsICYmIGRhdGFbbl0gIT0gJycpIHtcbiAgICAgICAgZGF0YTJbbl0gPSBkYXRhW25dO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoY29uc3QgdiBpbiB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsKSB7XG4gICAgICAvLyBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXT0nJztcbiAgICAgIGRlbGV0ZSBkYXRhMlt0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsW3ZdXTtcbiAgICB9XG4gICAgbGV0IHJlcyA9IE9iamVjdC5lbnRyaWVzKGRhdGEyKTtcbiAgICAvLyBjb25zb2xlLmxvZygndmlldyBkYXRhJyxyZXMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RldGFpbC12aWV3J10sXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogcmVzIH1cbiAgICB9KTtcblxuICB9XG4gIG1hbmFnZXN0YXR1cyhkYXRhOiBhbnkpIHtcbiAgICBjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBwYW5lbENsYXNzOiAnY3VzdG9tLWJvdHRvbXNoZWV0JywgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1cyh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC51cGRhdGVlbmRwb2ludCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5vbGRkYXRhW2NdLl9pZCA9PSBkYXRhLl9pZCkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBkYXRhLnN0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICAvLyB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ3N0YXR1c3VwZGF0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnbWFuYWdlLXN0YXR1cyddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgLy8gZm9yIHRyZWUgdmlldyBpbiBtb2RhbFxuICBjdXN0b21idXR0b25mdW5jKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7ICAgIC8vIHJvdyBkYXRhXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21idXR0b252YWwpOyAgICAvLyBvYmplY3QgZnJvbSB3aGVyZSB0aGUgbGlicmFyeSBoYXMgYmVlbiB1c2VkXG4gICAgbGV0IHVuc2FmZXVybDogYW55ID0gdGhpcy5jdXN0b21idXR0b252YWwudXJsOyAgIC8vIGlmcmFtZSB1cmxcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzKSB7XG4gICAgICB1bnNhZmV1cmwgPSB1bnNhZmV1cmwgKyAnLycgKyBkYXRhW3RoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkc1tiXV07XG4gICAgfVxuICAgIHVuc2FmZXVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpOyAgIC8vIGZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBbeyBkYXRhLCBjdXN0b21kYXRhOiB1bnNhZmV1cmwgfV0gfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpIHtcblxuICAgIGNvbnN0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgLy8gZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICAvLyBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIGNvbnN0IG5ld3N0YXR1czogYW55ID0gcmVzdWx0LnZhbDtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnRvZ2dsZXN0YXR1c21hbnkodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnRtYW55LCBpZHMsIHJlc3VsdC52YWwsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvLyB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKGlkcy5pbmRleE9mKHRoaXMub2xkZGF0YVtjXS5faWQpID4gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gbmV3c3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vIHRoaXMuYWxsU2VhcmNoKCk7XG5cbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZXN0YXR1c3VwZGF0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAndG9vZ2xlLW1hbnknXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZGVsZXRlbXVsdGlwbGUoKSB7XG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1tdWx0aXBsZSddLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGUgc2VsZWN0ZWQgcmVjb3Jkcz8nIH1cbiAgICB9KTtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVNYW55RGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC5kZWxldGVlbmRwb2ludG1hbnksIGlkcywgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG4gIGRlbGV0ZWRhdGEoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gYWxlcnQoNSk7XG4gICAgLy8gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCt0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLGRhdGEsdGhpcy5qd3R0b2tlbnZhbCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEgODg5IC0tLScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdqd3R0b2tlbnZhbCcpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwpO1xuXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHRvIGRlbGV0ZSB0aGlzIHJlY29yZCA/PycgfVxuICAgIH0pO1xuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5kZXRlT25lRGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMuZGVsZXRlZW5kcG9pbnR2YWwsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGRhdGEuX2lkKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdkZWxldGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtc2luZ2xlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZCAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGVkaXRkYXRhKGRhdGE6IGFueSkge1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFt0aGlzLmVkaXRyb3V0ZXZhbCwgZGF0YS5faWRdKTtcbiAgfVxuXG5cbiAgc29ydHRhYmxlKGZpZWxkOiBhbnksIHR5cGU6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwuZmllbGQgPSBmaWVsZDtcbiAgICB0aGlzLnNvcnRkYXRhdmFsLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gIH1cblxuICBhbGxTZWFyY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXRcIik7XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAnc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCcpO1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbGwgc2VhcmNoIHRoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaFtpXSk7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvcycsYXV0b3NlYXJjaCk7XG5cbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuXG5cbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBjb25kaXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOiAwXG4gICAgICB9LFxuICAgICAgc29ydDoge1xuICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICB9LFxuICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgfTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgLy8gcmV0dXJuO1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnc2VhcmNoJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5yZXNjb3VudCA9IDA7XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgfSk7XG5cbiAgICAgIH1cblxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICB9KTtcblxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuXG5cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIHN0YXJ0ICovXG4gIGFydGlzdHhwUHJldmlldyhzaW5nbGVEYXRhOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHsgc291cmNlOiAnYmxvY2tjaGFpbnVzZXJfdmlldycsIGNvbmRpdGlvbjogeyBwb3N0c19pZF9vYmplY3Q6IHNpbmdsZURhdGEuX2lkIH0sIHRva2VuOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3REYXRhKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtYXhwJ10sXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAvLyBwdWJsaWMgbm90ZXN2YWw6YW55PW51bGwsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbGliIGRhdGEgaW4gbW9kYWwgJywgdGhpcy5kYXRhLCB0aGlzLmRhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLCB0aGlzLmRhdGEucm93ZGF0YS5ibG9ndGl0bGUpO1xuICAgIHRoaXMuZGF0YS5jb2xvciA9ICdwcmltYXJ5JztcbiAgICB0aGlzLmRhdGEubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgICB0aGlzLmRhdGEubG9hZGVydmFsdWUgPSA1MDtcbiAgICB0aGlzLmRhdGEuYnVmZmVyVmFsdWUgPSA3NjtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIGRlbGV0ZW5vdGUoaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIC8vIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHtcblxuICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgIGluZGV4XG4gICAgICAvLyBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsXG4gICAgICAvLyB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICB9O1xuICAgIHRoaXMuZGF0YS5sb2FkaW5nMSA9IGluZGV4O1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh0aGlzLmRhdGEuYXBpdXJsICsgdGhpcy5kYXRhLm5vdGVkYXRhLmRlbGV0ZWVuZHBvaW50LCB0aGlzLmRhdGEuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ2FkZCBub3RlcycpO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5saXN0ZGF0YS5wdXNoKHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCBjcmVhdGVkX2RhdGU6IERhdGUubm93KCkgfSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEubGlzdGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG4gICAgLy8gfVxuICB9XG4gIGFkZG5vdGVzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICAgIGlkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsXG4gICAgICAgIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgICAgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuYWRkZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEubGlzdGRhdGEgPT0gbnVsbCkgeyB0aGlzLmRhdGEubGlzdGRhdGEgPSBbXTsgfVxuICAgICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS51bnNoaWZ0KHsgX2lkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsIG5vdGVzOiB7IHVzZXJpZDogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCwgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLmN1cnJlbnR1c2VyZnVsbG5hbWUsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9IH0pO1xuICAgICAgICAgIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHRoaXMuZGF0YS5saXN0ZGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnYmxhbmsgbm90ZXMnKTtcbiAgICAgIHRoaXMuZGF0YS5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm90ZXMgY2FuXFwndCBiZSBibGFuayAhISAnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldHR5cGVvZih2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgKHZhbCk7XG4gIH1cbiAgc2FuaXRpemVVcmwodW5zYWZldXJsOiBhbnksIGRhdGE6IGFueSwgcm93ZGF0YTogYW55KSB7XG4gICAgZm9yIChjb25zdCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIHZpZGVvIHBsYXllciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmlkZW9wbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3ZpZGVvcGxheWVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFZpZGVvUGxheWVyPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybigndmlkZW9wbGF5ZXJNb2RhbCcsZGF0YS5wcmV2aWV3RGF0YS52aWRlbyk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIEltYWdlIFZpZXcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWdfbW9kYWxfdmlldy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3IHtcblxuICAvLyBwdWJsaWMgZGF0YTphbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXc+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCdJbWFnZVZpZXdNb2RhbCcsIGRhdGEpO1xuICB9XG4gIGFkZG5vdGVzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1waXp6YS1wYXJ0eSB7XG4gICAgICBjb2xvcjogaG90cGluaztcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja2JhckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8U25hY2tiYXJDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzbmFjaycsdGhpcy5kYXRhKTtcbiAgfVxufVxuIl19