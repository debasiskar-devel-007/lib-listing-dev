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
import { animate, state, style, transition, trigger } from '@angular/animations';
import * as momentImported from 'moment';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
// import {ProgressBarMode} from '@angular/material/progress-bar';
// import  {BtnComponent} from './../../../../src/app/btn/btn.component'
/** @type {?} */
var moment = momentImported;
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.alldata;
}
var ListingComponent = /** @class */ (function () {
    function ListingComponent(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar, _elementRef) {
        var _this = this;
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
        // searchResult$: Observable<SearchResult[]>;
        // for dropdown pagination
        this.pages = [
            { val: 50, name: '50' },
            { val: 100, name: '100' },
            { val: 150, name: '150' },
            { val: 200, name: '200' },
            { val: 250, name: '250' },
            { val: 300, name: '300' },
            { val: 350, name: '350' },
            { val: 400, name: '400' },
            { val: 450, name: '450' },
            { val: 500, name: '500' },
        ];
        this.stateGroups = this.searchListval;
        this.router.events.subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            switch (true) {
                case event instanceof NavigationStart: {
                    _this.loading = true;
                    break;
                }
                case event instanceof NavigationEnd:
                case event instanceof NavigationCancel:
                case event instanceof NavigationError: {
                    _this.loading = false;
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
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            _this.filterautoval(_this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce  server', this.autosearchinput, this.currentautocompleteitem);
            if (_this.autosearchinput[_this.currentautocompleteitem.field] != null && _this.autosearchinput[_this.currentautocompleteitem.field] != '') {
                // this.filterautoval(this.currentautocompleteitem);
                /** @type {?} */
                var link = _this.apiurlval + '' + _this.currentautocompleteitem.serversearchdata.endpoint;
                /** @type {?} */
                var source = void 0;
                source = {
                    search_str: _this.autosearchinput[_this.currentautocompleteitem.field],
                    sort: {
                        field: _this.sortdataval.field,
                        type: _this.sortdataval.type
                    }
                };
                // console.log('con...',conditionobj,this.end_date);
                // console.warn('cond',condition,this.dateSearch_condition,conditionobj,this.tsearch,textSearch);
                // return;
                _this.date_search_source_countval = 0;
                _this.loading = true;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.postSearch(link, _this.jwttokenval, source).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    // console.log(res, 'result');
                    _this.loading = false;
                    // return;
                    result = res;
                    // this.loading = false;
                    if (result != null && result.results != null && result.results.res != null)
                        _this.rescount = result.results.res.length;
                    if (result.res != null && result.res.length > 0) {
                        // this.dataSource = new MatTableDataSource(result.results.res);
                        _this.currentautosearcharr = result.res;
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 2000,
                            data: { errormessage: 'New Search of data loaded ' }
                        });
                    }
                    else {
                        _this.currentautosearcharr = [];
                        _this._snackBar.openFromComponent(SnackbarComponent, {
                            duration: 6000,
                            data: { errormessage: 'No such search record found !!' }
                        });
                    }
                    _this.loading = false;
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
    Object.defineProperty(ListingComponent.prototype, "search_settings", {
        set: /**
         * @param {?} search_settings
         * @return {?}
         */
        function (search_settings) {
            this.search_settingsval = search_settings;
            // console.log('search_settingsval++++++', this.search_settingsval)
            /*for (let i= 0; i<= this.search_settingsval.search.length; i++) {
              console.log(this.search_settingsval.search[i].label);
            }*/
            /*  console.log(this.search_settingsval.selectsearch);
              console.log(this.search_settingsval.selectsearch[0].label);
              console.log(this.search_settingsval.selectsearch[0].values);
              console.log(this.search_settingsval.datesearch);*/
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "click_to_add_ananother_page", {
        set: /**
         * @param {?} click_to_add_ananother_page
         * @return {?}
         */
        function (click_to_add_ananother_page) {
            this.click_to_add_ananother_pageval = click_to_add_ananother_page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "limitcond", {
        set: /**
         * @param {?} limitcondval
         * @return {?}
         */
        function (limitcondval) {
            this.limitcondval = limitcondval;
            this.oldlimitrange.push(limitcondval);
            // console.log('limitcondval',this.limitcondval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source_count", {
        set: /**
         * @param {?} date_search_source_countval
         * @return {?}
         */
        function (date_search_source_countval) {
            this.date_search_source_countval = date_search_source_countval;
            if (this.date_search_source_countval == 0) {
                this.limitcondval.pagecount = 1;
            }
            // console.log('date_search_source_count',this.date_search_source_countval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "grab_link", {
        set: /**
         * @param {?} grab_link
         * @return {?}
         */
        function (grab_link) {
            this.grab_linkval = grab_link;
            // console.log(this.grab_linkval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "custombutton", {
        set: /**
         * @param {?} custombutton
         * @return {?}
         */
        function (custombutton) {
            this.custombuttonval = custombutton;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_source", {
        set: /**
         * @param {?} date_search_source
         * @return {?}
         */
        function (date_search_source) {
            this.date_search_sourceval = date_search_source;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sortdata", {
        set: /**
         * @param {?} sortdataval
         * @return {?}
         */
        function (sortdataval) {
            this.sortdataval = sortdataval;
            // console.log(this.sortdataval, 'sortdataval');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "date_search_endpoint", {
        set: /**
         * @param {?} date_search_endpoint
         * @return {?}
         */
        function (date_search_endpoint) {
            this.date_search_endpointval = date_search_endpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "url", {
        set: /**
         * @param {?} url
         * @return {?}
         */
        function (url) {
            this.urlval = url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchendpoint", {
        set: /**
         * @param {?} searchendpoint
         * @return {?}
         */
        function (searchendpoint) {
            this.searchendpointval = searchendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "pdf_link", {
        set: /**
         * @param {?} pdf_link
         * @return {?}
         */
        function (pdf_link) {
            this.pdf_link_val = pdf_link;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "searchList", {
        set: /**
         * @param {?} searchList
         * @return {?}
         */
        function (searchList) {
            this.searchListval = searchList;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "libdata", {
        set: /**
         * @param {?} libdataval
         * @return {?}
         */
        function (libdataval) {
            var _this = this;
            this.libdataval = [];
            this.libdataval = libdataval;
            // console.log('libdataval',this.libdataval);
            // searchBarFlag
            // console.log(libdataval.searchBarFlagVal)
            if (libdataval.searchBarFlagVal != null && libdataval.searchBarFlagVal != '') {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.searchBarFlagVal = libdataval.searchBarFlagVal;
                }), 1000);
            }
            else {
                this.searchBarFlag = true;
            }
            if (libdataval.recordfoundflag != null && libdataval.recordfoundflag != '' && libdataval.recordfounddata != null) {
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    _this.recordFoundFlag = libdataval.recordfoundflag;
                    _this.recordFoundData = libdataval.recordfounddata;
                }), 1000);
            }
            else {
                this.recordFoundFlag = false;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datasource", {
        set: /**
         * @param {?} datasource
         * @return {?}
         */
        function (datasource) {
            this.datasourceval = [];
            this.datasourceval = datasource;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "datacollection", {
        set: /**
         * @param {?} datacollectionval
         * @return {?}
         */
        function (datacollectionval) {
            this.datacollectionval = datacollectionval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "skip", {
        set: /**
         * @param {?} skip
         * @return {?}
         */
        function (skip) {
            this.skipval = skip;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_datatype", {
        set: /**
         * @param {?} detail_datatype
         * @return {?}
         */
        function (detail_datatype) {
            this.detail_datatypeval = detail_datatype;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "detail_skip_array", {
        set: /**
         * @param {?} detail_skip_array
         * @return {?}
         */
        function (detail_skip_array) {
            this.detail_skip_arrayval = detail_skip_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "sourcedata", {
        set: /**
         * @param {?} sourcedata
         * @return {?}
         */
        function (sourcedata) {
            this.sourcedataval = sourcedata;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "modify_header_array", {
        set: /**
         * @param {?} modify_header_array
         * @return {?}
         */
        function (modify_header_array) {
            this.modify_header_arrayval = modify_header_array;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "deleteendpoint", {
        set: /**
         * @param {?} deleteendpointval
         * @return {?}
         */
        function (deleteendpointval) {
            this.deleteendpointval = deleteendpointval;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updateendpoint", {
        set: /**
         * @param {?} updateendpoint
         * @return {?}
         */
        function (updateendpoint) {
            this.updateendpointval = updateendpoint;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "apiurl", {
        set: /**
         * @param {?} apiurl
         * @return {?}
         */
        function (apiurl) {
            this.apiurlval = apiurl;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "updatetable", {
        set: /**
         * @param {?} updatetable
         * @return {?}
         */
        function (updatetable) {
            this.updatetableval = updatetable;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "jwttoken", {
        set: /**
         * @param {?} jwttoken
         * @return {?}
         */
        function (jwttoken) {
            if (jwttoken != null) {
                this.jwttokenval = jwttoken;
            }
            else {
                this.jwttokenval = '';
            }
            // console.log(this.jwttokenval,'token')
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "statusarr", {
        set: /**
         * @param {?} statusarr
         * @return {?}
         */
        function (statusarr) {
            this.statusarrval = statusarr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "emailarray", {
        set: /**
         * @param {?} emailarray
         * @return {?}
         */
        function (emailarray) {
            this.emailarrayval = emailarray;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "editroute", {
        set: /**
         * @param {?} editroute
         * @return {?}
         */
        function (editroute) {
            this.editrouteval = editroute;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "preview_artistxp", {
        /* artistxp preview start */
        set: /* artistxp preview start */
        /**
         * @param {?} flug
         * @return {?}
         */
        function (flug) {
            this.previewFlug = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "customlistenbutton", {
        /* artistxp preview end */
        set: /* artistxp preview end */
        /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this.customButtonFlagVal = val;
            // console.log(this.customButtonFlagVal, 'customButtonFlagVal')
        },
        enumerable: true,
        configurable: true
    });
    /*@Directive({
      selector: '[Listing]'
    })*/
    /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    ListingComponent.prototype.ngOnChanges = /*@Directive({
        selector: '[Listing]'
      })*/
    /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // console.log('ngonchange ..',changes);
        for (var v in changes) {
            // console.log(v,changes[v],'vv');
            if (v == 'updatetable') {
                // console.log('updatetable');
                if (changes[v].previousValue != null) {
                    this.selection.clear();
                    this.allSearch();
                }
            }
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.inputblur = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('on blur .....');
        this.myForm.controls[val].markAsUntouched();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // if (this.search_settingsval != null && this.search_settingsval.search != null && this.search_settingsval.search != '') {
        var _this = this;
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
        function (value) { return _this._filter(value); })));
        /*const factory = this.resolver.resolveComponentFactory(
            componentMapper[this.field.type]
        );
        this.componentRef = this.container.createComponent(factory);
        this.componentRef.instance.field = this.field;
        this.componentRef.instance.group = this.group;
    */
        this.x = this.datasourceval;
        /** @type {?} */
        var x = this.x;
        if (this.datasourceval)
            this.rescount = this.datasourceval.length;
        /** @type {?} */
        var temp = [];
        /** @type {?} */
        var keys = x[0];
        temp = Object.keys(keys); /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/
        /** @type {?} */
        var coldef_list = [];
        /** @type {?} */
        var header_list = [];
        for (var i = 0; i < temp.length; i++) {
            coldef_list.push(temp[i].replace(/\s/g, '_')); /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
            header_list.push(temp[i]);
        }
        // coldef_list.push('Actions');
        // header_list.push('Actions')
        // console.log('coldef_list',coldef_list);
        // console.log('header_list',header_list);
        this.columns = [];
        var _loop_1 = function (i) {
            /** @type {?} */
            var ff = "row." + coldef_list[i];
            /** @type {?} */
            var tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], tooltip: "" + header_list[i], cell: (/**
                 * @param {?} row
                 * @return {?}
                 */
                function (row) { return eval(ff); }), objlength: header_list.length };
            // console.log('tt',tt);
            // console.log('tt.columnDef');
            // console.log(tt.columnDef);
            for (var b in this_1.modify_header_arrayval) {
                if (b == tt.header) {
                    tt.header = this_1.modify_header_arrayval[b];
                }
            }
            // header tooltip array
            if (this_1.libdataval.header_tooltip_array != null && typeof (this_1.libdataval.header_tooltip_array) != 'undefined') {
                for (var b in this_1.libdataval.header_tooltip_array) {
                    if (b == tt.tooltip) {
                        tt.tooltip = this_1.libdataval.header_tooltip_array[b];
                    }
                }
                // console.log(tt.tooltip, 'tt.tooltip =====+++++')
            }
            if (this_1.skipval.indexOf(tt.columnDef) == -1) {
                this_1.columns.push(tt);
            }
        };
        var this_1 = this;
        for (var i = 0; i < coldef_list.length; i++) {
            _loop_1(i);
        }
        /** @type {?} */
        var displayedcols = [];
        this.tableflag = 1;
        setTimeout((/**
         * @return {?}
         */
        function () {
            _this.tableflag = 0;
        }), 100);
        displayedcols = this.columns.map((/**
         * @param {?} x
         * @return {?}
         */
        function (x) { return x.columnDef; }));
        if (this.libdataval.footersettings != null) {
            this.tableFooterColumns = this.libdataval.footersettings.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x.key; }));
        }
        else
            this.tableFooterColumns = [];
        /** @type {?} */
        var customcols = [];
        // console.log('displayedcols',displayedcols);
        if (this.libdataval != null && this.libdataval.tableheaders != null) {
            customcols = this.libdataval.tableheaders;
        }
        if (customcols != null && customcols.length > 0) {
            /** @type {?} */
            var ccolval = '';
            for (var v in customcols) {
                if (displayedcols.includes(customcols[v]) == false) {
                    for (var b in this.modify_header_arrayval) {
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
        var tempcolarr = [];
        /** @type {?} */
        var tempcolarr2 = [];
        this.columns.reverse();
        for (var n in this.columns) {
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
        var data_list = [];
        for (var i = 0; i < this.x.length; i++) {
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
        function () {
            // this.selectsearch['status'] = '0';
            // console.log('selectsearch', this.selectsearch);
            if (_this.search_settingsval.selectsearch != null) {
                // console.log('s1', this.search_settingsval.selectsearch);
                for (var sl in _this.search_settingsval.selectsearch) {
                    if (_this.search_settingsval.selectsearch[sl].value != null && _this.search_settingsval.selectsearch[sl].value != '') {
                        // this.selectSearch(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0])
                        _this.selectsearch[_this.search_settingsval.selectsearch[sl].field] =
                            _this.search_settingsval.selectsearch[sl].value;
                        // selectSearch_condition
                        _this.initiateSearch = true;
                        _this.selectSearch_condition[_this.search_settingsval.selectsearch[sl].field] =
                            _this.search_settingsval.selectsearch[sl].value;
                        // console.log(this.initiateSearch, 'initiateSearch select')
                        // console.log(this.search_settingsval, 'ss+++++=====++++', this.search_settingsval.selectsearch, '++++++', this.selectsearch);
                        // console.log(this.search_settingsval.selectsearch[sl].value,this.search_settingsval.selectsearch[sl],this.search_settingsval.selectsearch[sl].values[0],'????? new selectSearch_condition',this.selectSearch_condition)
                    }
                }
            }
            if (_this.search_settingsval.textsearch != null) {
                // console.log('t1', this.search_settingsval.textsearch);
                for (var sl in _this.search_settingsval.textsearch) {
                    if (_this.search_settingsval.textsearch[sl].value != null && _this.search_settingsval.textsearch[sl].value != '') {
                        _this.tsearch[_this.search_settingsval.textsearch[sl].field] =
                            _this.search_settingsval.textsearch[sl].value;
                        _this.initiateSearch = true;
                        // console.log(this.initiateSearch, 'initiateSearch text')
                    }
                }
            }
            if (_this.search_settingsval.search != null) {
                for (var ats in _this.search_settingsval.search) {
                    if (_this.search_settingsval.search[ats].value != null && _this.search_settingsval.search[ats].value != '' && _this.search_settingsval.search[ats].value.length > 0) {
                        _this.initiateSearch = true;
                        if (_this.autosearch[_this.search_settingsval.search[ats].field] == null) {
                            _this.autosearch[_this.search_settingsval.search[ats].field] = [];
                        }
                        for (var k in _this.search_settingsval.search[ats].value) {
                            // console.log(this.search_settingsval.search[ats].value,'>>=======')
                            _this.autosearch[_this.search_settingsval.search[ats].field].push({ val: _this.search_settingsval.search[ats].value[k].val, name: _this.search_settingsval.search[ats].value[k].name });
                        }
                    }
                }
            }
            // dateSearch_condition
            if (_this.search_settingsval.datesearch != null && _this.search_settingsval.datesearch[0].value != null && _this.search_settingsval.datesearch[0].value != '') {
                _this.initiateSearch = true;
                _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte - 86399000;
                _this.start_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-MM-DD").toString();
                _this.end_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-MM-DD").toString();
                _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte + 86399000;
                _this.dateSearch_condition[_this.search_settingsval.datesearch[0].field] = _this.search_settingsval.datesearch[0].value;
            }
            // console.log(this.search_settingsval, 'search_settingsval', this.dateSearch_condition)
            if (_this.search_settingsval.buttonsearch != null) {
                // console.log(this.search_settingsval.buttonsearch, 'this.search_settingsval.buttonsearch')
                for (var i in _this.search_settingsval.buttonsearch) {
                    /** @type {?} */
                    var ind = 0;
                    ind = parseInt(i);
                    if (_this.search_settingsval.buttonsearch[i].values != null && _this.search_settingsval.buttonsearch[i].values != '') {
                        _this.initiateSearch = true;
                        _this.buttonSearchData.push({ field: _this.search_settingsval.buttonsearch[i].field, key: ind, value: _this.search_settingsval.buttonsearch[i].values });
                    }
                }
            }
            if (_this.initiateSearch == true) {
                _this.allSearch();
            }
        }), 1000);
    };
    // Custom Filter new
    // Custom Filter new
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.CustomButtonListen = 
    // Custom Filter new
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // allSearchCond
        // console.log(this.search_settingsval.search, 'this.allSearchCond')
        this.onLiblistingButtonChange.emit({
            action: 'customlistenbutton', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, searchdata: this.search_settingsval, buttondata: val, allSearchCond: this.allSearchCond, autoSearchVal: this.autosearch, buttonSearchData: this.buttonSearchData
        });
        // var data:any={
        //   limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected,search:this.search_settingsval,buttonVal:val
        // }
        // console.log(data,'data++++===',val)
    };
    /**image view modal */
    /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    ListingComponent.prototype.img_modal_view = /**
     * image view modal
     * @param {?} img
     * @return {?}
     */
    function (img) {
        // console.warn("img_modal_view",img)
        /** @type {?} */
        var dialogRef = this.dialog.open(ImageView, {
            // panelClass: 'custom-modalbox-image-preview',
            panelClass: ['custom-modalbox', 'custom-modalbox-image-preview'],
            height: 'auto',
            data: { alldata: img }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentInit() ...');
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('ngAfterViewInit called ... ');
        setTimeout((/**
         * @return {?}
         */
        function () {
            if (_this.libdataval != null && _this.libdataval.cssoverridesoncelltorow != null) {
                for (var e in _this.libdataval.cssoverridesoncelltorow) {
                    /** @type {?} */
                    var cred = _this.upTo(_this._elementRef.nativeElement.querySelector('.' + _this.libdataval.cssoverridesoncelltorow[e].key), 'tr');
                    if (cred != null)
                        cred.classList.add(_this.libdataval.cssoverridesoncelltorow[e].val);
                    // const cred = this._elementRef.nativeElement.querySelector('.cred').parent().parent().parent().parent().addClass('credtr');
                    // console.log(cred, 'cred', e);
                }
            }
        }), 2000);
    };
    // Search Bar Toggle
    // Search Bar Toggle
    /**
     * @param {?} flag
     * @return {?}
     */
    ListingComponent.prototype.SearchBarToggle = 
    // Search Bar Toggle
    /**
     * @param {?} flag
     * @return {?}
     */
    function (flag) {
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
    };
    /**
     * @param {?} el
     * @param {?} tagName
     * @return {?}
     */
    ListingComponent.prototype.upTo = /**
     * @param {?} el
     * @param {?} tagName
     * @return {?}
     */
    function (el, tagName) {
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
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngAfterContentChecked = /**
     * @return {?}
     */
    function () {
        // console.log('ngAfterContentChecked called ...');
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        // prevent memory leak when component destroyed
        this.subscriptions.forEach((/**
         * @param {?} s
         * @return {?}
         */
        function (s) { return s.unsubscribe(); }));
    };
    /**
     * @param {?} vals
     * @return {?}
     */
    ListingComponent.prototype.clickmultipleselectoption = /**
     * @param {?} vals
     * @return {?}
     */
    function (vals) {
        this.onLiblistingChange.emit({ action: 'multipleselectoptionclick', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, btndata: vals });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x;
        this.errormg = '';
        /** @type {?} */
        var data = this.myForm.value;
        for (x in this.myForm.controls) {
            this.myForm.controls[x].markAsTouched();
        }
    };
    /**
     * @param {?} val
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.dateSearch = /**
     * @param {?} val
     * @param {?} item
     * @return {?}
     */
    function (val, item) {
        var _this = this;
        this.searchstrsarr.push({ val: this.tsearch[val], label: item.label, key: val });
        // console.log("start date");
        // console.log(this.start_date);
        // console.log(this.end_date);
        // let sd = moment(this.start_date).unix();
        // let ed = moment(this.end_date).unix();
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        /** @type {?} */
        var textSearch = {};
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
            for (var i in this.tsearch) {
                // console.log('this.tsearch', this.tsearch);
                if (this.tsearch[i] != null && this.tsearch[i] != '') {
                    textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
                }
            }
            /** @type {?} */
            var autosearch = {};
            // this.autosearch;
            for (var b in this.autosearch) {
                for (var m in this.autosearch[b]) {
                    /** @type {?} */
                    var tv = {};
                    tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
                    if (autosearch.$or == null) {
                        autosearch.$or = [];
                    }
                    // console.log(autosearch.$and,'autosearch.$or 1')
                    autosearch.$or.push(tv);
                }
            }
            /** @type {?} */
            var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                _this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                _this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    _this.tableflag = 1;
                }
                else {
                    _this.tableflag = 0;
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
    };
    /**
     * @param {?} value
     * @param {?} type
     * @param {?} statusval
     * @return {?}
     */
    ListingComponent.prototype.selectSearch = /**
     * @param {?} value
     * @param {?} type
     * @param {?} statusval
     * @return {?}
     */
    function (value, type, statusval) {
        // console.log(value, 'value', type, 'type', statusval, 'statusval')
        // let link = this.apiurlval + '' + this.date_search_endpointval;
        // let source: any;
        // let condition: any = {};
        this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
        /** @type {?} */
        var val = '';
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
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        condition = {};
        condition[type.field] = value;
        // this.selectSearch_condition = {};
        this.selectSearch_condition[type.field] = value;
        // console.log('selectSearch ', this.selectSearch_condition);
        /** @type {?} */
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
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
    };
    // for managing pagination
    // for managing pagination
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.paging = 
    // for managing pagination
    /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
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
        var maxpagecount = Number(this.date_search_source_countval / (this.limitcondval.limit));
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
        var textSearch = {};
        for (var i in this.tsearch) {
            if (this.tsearch[i].toString().toLowerCase() != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        var autosearch = {};
        // this.autosearch;
        for (var b in this.autosearch) {
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
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
        var conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
        /** @type {?} */
        var source = {
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
        var link = this.apiurlval + '' + this.datacollectionval;
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
        function (res) {
            _this.result = res;
            // console.log(this.result,'res');
            if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                _this.onLiblistingChange.emit({ action: 'paging', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, results: _this.result.results.res });
                // if (this.libdataval.footersettings != null) {
                //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                // }
                _this.dataSource = new MatTableDataSource(_this.result.results.res);
                _this._snackBar.openFromComponent(SnackbarComponent, {
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
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'No Data Found in this range !!' }
                });
            }
            _this.loading = false;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }));
        this.selection.clear();
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.addautosearchdata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('v',val);
    };
    /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    ListingComponent.prototype.remove = /**
     * @param {?} val
     * @param {?} i
     * @param {?} field
     * @return {?}
     */
    function (val, i, field) {
        if (this.autosearch[field] != null) {
            this.autosearch[field].splice(i, 1);
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.autocompletechangedetected = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.currentautocompleteitem = item;
        this.currentautosearcharr = [];
        // console.log('autocompletechangedetected', this.currentautocompleteitem);
        if (this.currentautocompleteitem.serversearchdata == null)
            this.modelChanged.next();
        else {
            // console.log('in else block of autocompletechangedetected');
            this.modelChangedserver.next();
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.filterautoval = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('filterautoval', data, this.autosearchinput[data.field]);
        /** @type {?} */
        var autoselval = this.autosearchinput[data.field];
        this.currentautosearcharr = [];
        if (this.autosearchinput[data.field] != null && this.autosearchinput[data.field] != '') {
            /** @type {?} */
            var filterval = data.values.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) {
                // console.log('e', e, fieldval)
                return e.name.toString().toLowerCase().includes(autoselval.toLowerCase());
            }));
            this.currentautosearcharr = filterval;
        }
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.resetautocomp = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        /** @type {?} */
        var el = document.querySelector('#autocompletesearch' + val.field);
        el.value = '';
    };
    /**
     * @param {?} value
     * @param {?} data
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.autosearchfunction = /**
     * @param {?} value
     * @param {?} data
     * @param {?} item
     * @return {?}
     */
    function (value, data, item) {
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
        var el = document.querySelector('#autocompletesearch' + value);
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
    };
    /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    ListingComponent.prototype.textsearchfunction = /**
     * @param {?} value
     * @param {?} item
     * @return {?}
     */
    function (value, item) {
        if (this.tsearch[value] == '') {
            /** @type {?} */
            var index = this.searchstrsarr.indexOf(this.searchstrsarr[value]);
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
        var link = this.apiurlval + '' + this.date_search_endpointval;
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition = {};
        /** @type {?} */
        var val = '';
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
        var conditionobj = Object.assign({}, this.textSearch_condition, this.dateSearch_condition, this.autoSearch_condition, this.selectSearch_condition);
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
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.refreshdata = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.refreshalldata = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.dataSource = new MatTableDataSource(this.olddata);
        this.selection = new SelectionModel(true, []);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
        if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: 'Refresh successfully!!', isconfirmation: false }
            });
        }
        else {
            /** @type {?} */
            var dialogRef = this.dialog.open(Confirmdialog, {
                // panelClass: 'custom-modalbox',
                panelClass: ['custom-modalbox', 'refreshdata'],
                data: { message: ' Updated!!', isconfirmation: false }
            });
        }
    };
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    ListingComponent.prototype._filter = /**
     * @private
     * @param {?} value
     * @return {?}
     */
    function (value) {
        /** @type {?} */
        var filterValue = value.toString().toLowerCase();
        return this.searchListval.filter((/**
         * @param {?} option
         * @return {?}
         */
        function (option) { return option.toString().toLowerCase().includes(filterValue); }));
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.getstatus = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        // console.log('val');
        // console.log(val);
        for (var b in this.statusarrval) {
            if (this.statusarrval[b].val == val) {
                return this.statusarrval[b].name;
            }
            // console.log(this.statusarrval[b].name);
        }
        return 'N/A';
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.pdfFlag = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.grapurl = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
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
    };
    /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.copyText = /**
     * @param {?} row
     * @param {?} val
     * @return {?}
     */
    function (row, val) {
        /** @type {?} */
        var fullurl = val + '' + row;
        /** @type {?} */
        var selBox = document.createElement('textarea');
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.openinternallink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.router.navigate([val.route]);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openinternallinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        /** @type {?} */
        var rdata = [];
        rdata.push(val.route);
        for (var v in val.param) {
            rdata.push(data[val.param[v]]);
        }
        // console.log('radat', rdata);
        this.router.navigate(rdata);
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionlocaldata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        // console.log('opencustombuttonactionlocaldata',val,data);
        /** @type {?} */
        var dataarr = [];
        // dataarr.push(['name','debasis']);
        // dataarr.push(['desc','test']);
        if (val.refreshdata != null && val.refreshdata == true) {
            this.allSearch();
        }
        for (var v in val.datafields) {
            /** @type {?} */
            var temparr = [];
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
                    var temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + data[val.datafields[v]] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
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
        var res = dataarr;
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
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
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            panelClass: ['custom-modalbox-apidata', 'modal-localdata'],
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.opencustombuttonactionapidata = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        var _this = this;
        // console.log('opencustombuttonactionapidata',val,data);
        this.loading = true;
        /** @type {?} */
        var link = this.apiurlval + val.endpoint;
        /** @type {?} */
        var source = {};
        source[val.param] = data._id;
        if (val.otherparam != null) {
            for (var n in val.otherparam) {
                source[val.otherparam[n]] = data[val.otherparam[n]];
            }
        }
        this.loaderrow = data._id;
        this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            if (result.status == 'success') {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 3000,
                    data: { errormessage: result.msg }
                });
                // console.log('res',result);
                /** @type {?} */
                var resdata = {};
                _this.loaderrow = null;
                _this.loading = false;
                if (result.res[0] != null) {
                    resdata = result.res[0];
                }
                else {
                    resdata = result.res;
                }
                /** @type {?} */
                var temprdata = {};
                // console.log('resdata>>>', resdata);
                if (val.datafields != null) {
                    for (var b1 in val.datafields) {
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
                var dataarr = [];
                // dataarr.push(['name','debasis']);
                // dataarr.push(['desc','test']);
                for (var v in resdata) {
                    /** @type {?} */
                    var temparr = [];
                    temparr.push(v);
                    if (v != 'image' && v != 'video') {
                        if (resdata[v] != null && typeof (resdata[v]) != 'object') {
                            // console.log('resv', resdata[v]);
                            if (resdata[v].toString().includes('iframe')) {
                                temparr.push(_this.sanitizer.bypassSecurityTrustHtml(resdata[v]));
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
                        var temphtml = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + resdata[v] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
                        temphtml = _this.sanitizer.bypassSecurityTrustHtml(temphtml);
                        temparr.push(temphtml);
                    }
                    // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
                    dataarr.push(temparr);
                }
                if (_this.libdataval.detailview_override != null && _this.libdataval.detailview_override.length > 0) {
                    /** @type {?} */
                    var resdata_1 = [];
                    for (var b in dataarr) {
                        for (var c in _this.libdataval.detailview_override) {
                            // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
                            if (_this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                                // console.log('h', c, this.libdataval.detailview_override[c]);
                                resdata_1[b] = [_this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
                            }
                        }
                        if (resdata_1[b] == null) {
                            resdata_1[b] = dataarr[b];
                        }
                    }
                    // console.log('c',res,resdata);
                    dataarr = resdata_1;
                }
                // console.log('c api data ', resdata);
                // let resdataformodal: any = {};
                // console.log('resdataformodal', dataarr, dataarr);
                if (val.refreshdata != null && val.refreshdata == true) {
                    _this.allSearch();
                }
                dataarr['message'] = val.headermessage;
                /** @type {?} */
                var dialogRef = _this.dialog.open(Confirmdialog, {
                    height: 'auto',
                    panelClass: ['custom-modalbox', 'api-data'],
                    data: { isconfirmation: false, data: dataarr }
                });
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
        return;
    };
    /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.openextlinkwithparam = /**
     * @param {?} val
     * @param {?} data
     * @return {?}
     */
    function (val, data) {
        // console.log('val',val,data);
        /** @type {?} */
        var qtext = '';
        /** @type {?} */
        var fulllink = '';
        fulllink = val.link;
        if (val.paramtype == null) {
            for (var v in val.param) {
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
            for (var v in val.param) {
                // qtext = val.param[v].q + "=" + encodeURI(data[val.param[v].key]);
                // console.log('qtext',qtext);
                fulllink = fulllink + '/' + encodeURI(data[val.param[v]]);
            }
            // val.link=fulllink;
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            // console.log("Hello from setTimeout");
            // console.log('link',fulllink,data,qtext);
        }), 10);
        window.open(fulllink, '_blank');
    };
    /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    ListingComponent.prototype.clickurl = /**
     * @param {?} val
     * @param {?} url
     * @return {?}
     */
    function (val, url) {
        /** @type {?} */
        var link = url + '' + val._id + '' + this.pdf_link_val;
        window.open(link, '_blank');
    };
    /** Whether the number of selected elements matches the total number of rows. */
    /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    ListingComponent.prototype.checkedlist = /**
     * Whether the number of selected elements matches the total number of rows.
     * @return {?}
     */
    function () {
        var _this = this;
        // this.selection.isSelected(row);
        setTimeout((/**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var seldata = _this.selection.selected.map((/**
             * @param {?} x
             * @return {?}
             */
            function (x) { return x._id; }))
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            ;
            // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
            _this.onLiblistingChange.emit({ action: 'multipleselectionchange', limitdata: _this.limitcondval, sortdata: _this.sortdataval, selecteddata: _this.selection.selected });
        }), 100);
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.isAllSelected = /**
     * @return {?}
     */
    function () {
        // console.log('isAllSelected');
        if (this.selection != null && this.selection.select) {
            // console.log('isAllSelected', this.dataSource.data.length, this.selection.selected.length, this.selection.selected);
            /** @type {?} */
            var numSelected = this.selection.selected.length;
            /** @type {?} */
            var numRows = this.dataSource.data.length;
            return numSelected === numRows;
        }
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    ListingComponent.prototype.masterToggle = /**
     * Selects all rows if they are not all selected; otherwise clear selection.
     * @return {?}
     */
    function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((/**
             * @param {?} row
             * @return {?}
             */
            function (row) { return _this.selection.select(row); }));
        this.checkedlist();
    };
    /** The label for the checkbox on the passed row */
    /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    ListingComponent.prototype.checkboxLabel = /**
     * The label for the checkbox on the passed row
     * @param {?=} row
     * @return {?}
     */
    function (row) {
        if (!row) {
            return (this.isAllSelected() ? 'select' : 'deselect') + " all";
        }
        return (this.selection.isSelected(row) ? 'deselect' : 'select') + " row " + (row.position + 1);
    };
    /**
     * @param {?} point
     * @return {?}
     */
    ListingComponent.prototype.createData = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        /** @type {?} */
        var data = {};
        Object.keys(point).forEach((/**
         * @param {?} key
         * @return {?}
         */
        function (key) {
            data[key.replace(/\s/g, '_')] = point[key];
        }));
        return data;
    };
    /**
     * @param {?} filterValue
     * @return {?}
     */
    ListingComponent.prototype.applyFilter = /**
     * @param {?} filterValue
     * @return {?}
     */
    function (filterValue) {
        this.dataSource.filter = filterValue.trim().toString().toLowerCase();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
    };
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
    ListingComponent.prototype.styleCell = /*applyFilter1(filterValue: string, val: any) {
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
    function (col_name, row) {
        /*
         if (col_name['columnDef']=='progress' && row['progress']=='100'){
         return {'color' : 'red'}
         } else {
         return {}
         }
         */
        return {};
    };
    /**show video modal on click of thamnail function by sourav */
    /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    ListingComponent.prototype.fetchvideo = /**
     * show video modal on click of thamnail function by sourav
     * @param {?} videodata
     * @return {?}
     */
    function (videodata) {
        // console.warn('videodata',videodata);
        /** @type {?} */
        var dialogRef = this.dialog.open(VideoPlayer, {
            panelClass: ['custom-modalbox-videoplayer-preview', 'video-modal'],
            height: 'auto',
            data: { previewData: videodata }
        });
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.opennotes = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        var _this = this;
        this.loading = true;
        this.loaderrow = val._id;
        this._apiService.postSearch(this.apiurlval + this.libdataval.notes.listendpoint, this.jwttokenval, { id: val._id }).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            // console.log(result.res, 'list notes');
            _this.loading = false;
            _this.loaderrow = null;
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
            // this.data.notesval = '';
            // console.log('notes', val);
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                height: 'auto',
                panelClass: ['custom-modalbox', 'notes-modal'],
                data: {
                    isconfirmation: false,
                    notes: true, apiurl: _this.apiurlval,
                    notedata: _this.libdataval.notes, rowdata: val,
                    jwttokenval: _this.jwttokenval,
                    listdata: result.res,
                    _snackBar: _this._snackBar
                }
            });
            dialogRef.afterClosed().subscribe((/**
             * @param {?} result
             * @return {?}
             */
            function (result) {
                _this.allSearch();
            }));
        }));
    };
    /**
     * @param {?} data1
     * @return {?}
     */
    ListingComponent.prototype.viewdata = /**
     * @param {?} data1
     * @return {?}
     */
    function (data1) {
        console.log('data1 ++++++++', data1);
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
        /** @type {?} */
        var headerData = {};
        if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
            console.log('== ++++++++', this.libdataval.preview_header);
            headerData = this.libdataval.preview_header;
        }
        for (var key in data) {
            /** @type {?} */
            var flagk = '';
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
                    var tempdata = [];
                    for (var k in data[key]) {
                        for (var p in this.detail_datatypeval) {
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
                                    for (var objk in data[key][k]) {
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
        for (var n in data) {
            if (data[n] != null && data[n] != '') {
                data2[n] = data[n];
            }
        }
        for (var v in this.detail_skip_arrayval) {
            // data2[this.detail_skip_arrayval[v]]='';
            delete data2[this.detail_skip_arrayval[v]];
        }
        /** @type {?} */
        var res = Object.entries(data2);
        // console.log('view data',res);
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
            /** @type {?} */
            var resdata = [];
            for (var b in res) {
                for (var c in this.libdataval.detailview_override) {
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
        var dialogRef = this.dialog.open(Confirmdialog, {
            height: 'auto',
            autoFocus: false,
            maxHeight: '1000vh',
            panelClass: ['custom-modalbox', 'detail-view'],
            data: { isconfirmation: false, data: res, headerData: headerData }
        });
    };
    // parent-bottom-class
    // parent-bottom-class
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.managestatus = 
    // parent-bottom-class
    /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                data.status = result.val;
                data.id = data._id;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatus(_this.apiurlval + _this.libdataval.updateendpoint, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c in _this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (_this.olddata[c]._id == data._id) {
                                _this.olddata[c].status = data.status;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        // this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'statusupdate', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'manage-status'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    };
    // for tree view in modal
    // for tree view in modal
    /**
     * @param {?} row
     * @param {?} custombutton
     * @return {?}
     */
    ListingComponent.prototype.custombuttonlistner = 
    // for tree view in modal
    /**
     * @param {?} row
     * @param {?} custombutton
     * @return {?}
     */
    function (row, custombutton) {
        // console.log('custombuttonlistner', row, custombutton);
        this.onLiblistingChange.emit({
            action: 'custombuttonclick', limitdata: this.limitcondval, sortdata: this.sortdataval, custombuttonclick: {
                data: row, btninfo: custombutton
            }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.custombuttonfunc = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log('data');
        // console.log(data);    // row data
        // console.log(this.custombuttonval);    // object from where the library has been used
        /** @type {?} */
        var unsafeurl = this.custombuttonval.url;
        for (var b in this.custombuttonval.fields) {
            unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
        }
        unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl); // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            // for opening the modal
            height: 'auto',
            panelClass: 'custom-data-modal',
            data: { isconfirmation: false, data: [{ data: data, customdata: unsafeurl }] }
        });
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.managestatusmultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        // console.log('data');
        // console.log(data);
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });
        this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result != null) {
                // data.status = result.val;
                // data.id = data._id;
                /** @type {?} */
                var newstatus_1 = result.val;
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.togglestatusmany(_this.apiurlval + _this.libdataval.updateendpointmany, ids, result.val, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        for (var c_1 in _this.olddata) {
                            // this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
                            if (ids.indexOf(_this.olddata[c_1]._id) > -1) {
                                _this.olddata[c_1].status = newstatus_1;
                            }
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        // this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'multiplestatusupdate', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'toogle-many'],
                            data: { message: 'Status updated successfully!!', isconfirmation: false }
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
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.deletemultiple = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
            panelClass: ['custom-modalbox', 'delete-multiple'],
            data: {
                message: 'Are you sure you want to delete these records? This process can not be undone.',
                type: 'confirm'
            }
        });
        /** @type {?} */
        var ids = [];
        /** @type {?} */
        var c;
        for (c in this.selection.selected) {
            ids.push(this.selection.selected[c]._id);
        }
        dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            if (result == 'yes') {
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteManyData(_this.apiurlval + _this.libdataval.deleteendpointmany, ids, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        var _loop_2 = function (c_2) {
                            _this.olddata = _this.olddata.filter((/**
                             * @param {?} olddata
                             * @return {?}
                             */
                            function (olddata) { return olddata._id != ids[c_2]; }));
                        };
                        for (var c_2 in ids) {
                            _loop_2(c_2);
                        }
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'multipledelete', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef_1 = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-multiple'],
                            data: { message: 'Record(s)  deleted successfully !!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.deletedata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        var _this = this;
        // console.log(data);
        // alert(5);
        // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
        // console.log('data 889 ---');
        // console.log(data);
        // console.log('jwttokenval');
        // console.log(this.jwttokenval);
        /** @type {?} */
        var dialogRef = this.dialog.open(Confirmdialog, {
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
        function (result) {
            if (result == 'yes') {
                _this.subscriptions[_this.subscriptioncount++] = _this._apiService.deteOneData(_this.apiurlval + _this.deleteendpointval, data, _this.jwttokenval, _this.sourcedataval).subscribe((/**
                 * @param {?} res
                 * @return {?}
                 */
                function (res) {
                    /** @type {?} */
                    var result = {};
                    result = res;
                    if (result.status == 'success') {
                        _this.olddata = _this.olddata.filter((/**
                         * @param {?} olddata
                         * @return {?}
                         */
                        function (olddata) { return olddata._id != data._id; }));
                        _this.dataSource = new MatTableDataSource(_this.olddata);
                        _this.selection = new SelectionModel(true, []);
                        _this.dataSource.paginator = _this.paginator;
                        _this.dataSource.sort = _this.sort;
                        _this.allSearch();
                        _this.onLiblistingChange.emit({ action: 'delete', limitdata: _this.limitcondval, sortdata: _this.sortdataval });
                        /** @type {?} */
                        var dialogRef_2 = _this.dialog.open(Confirmdialog, {
                            panelClass: ['custom-modalbox', 'delete-single'],
                            data: { message: 'Record  deleted successfully !!', isconfirmation: false }
                        });
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
                }));
            }
            // this.animal = result;
        }));
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.editdata = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.router.navigate([this.editrouteval, data._id]);
    };
    /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    ListingComponent.prototype.sorttable = /**
     * @param {?} field
     * @param {?} type
     * @return {?}
     */
    function (field, type) {
        // console.log(field, type)
        this.sortdataval.field = field;
        this.sortdataval.type = type;
        this.allSearch();
    };
    /**
     * @return {?}
     */
    ListingComponent.prototype.allSearch = /**
     * @return {?}
     */
    function () {
        // console.log("hit");
        var _this = this;
        // console.log("hit");
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
        /** @type {?} */
        var link1 = this.apiurlval + '' + this.datacollectionval + '-count';
        /** @type {?} */
        var source;
        /** @type {?} */
        var condition;
        /** @type {?} */
        var textSearch = {};
        condition = {};
        // this.searchstrsarr.push({ val: this.tsearch[value], label: item.label, key: value });
        // console.log(this.searchstrsarr, 'this.searchstrsarr');
        // console.log(this.search_settingsval.search, 'search_settingsval.search');
        for (var i in this.tsearch) {
            // console.log('all search this.tsearch', this.tsearch[i]);
            if (this.tsearch[i] != null && this.tsearch[i].toString().toLowerCase() != '') {
                textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
            }
        }
        /** @type {?} */
        var autosearch = {};
        // this.autosearch;
        for (var b in this.autosearch) {
            /** @type {?} */
            var tempautosearch = {};
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
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
            var autocount = void 0;
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
        var buttonsearch = {};
        for (var bs in this.buttonSearchData) {
            for (var k in this.buttonSearchData[bs].value) {
                /** @type {?} */
                var bt = {};
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
        var conditionobj = {};
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
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                if (result.results.res != null && result.results.res.length > 0) {
                    _this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: _this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: _this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: _this.allSearchCond,
                        autoSearchVal: _this.autosearch,
                        searchdata: _this.search_settingsval,
                        selecteddata: _this.selection.selected
                    });
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
                    _this.onLiblistingChange.emit({
                        action: 'search',
                        limitdata: _this.limitcondval,
                        searchcondition: conditionobj,
                        sortdata: _this.sortdataval,
                        res: result.results.res.length,
                        allSearchCond: _this.allSearchCond,
                        autoSearchVal: _this.autosearch,
                        searchdata: _this.search_settingsval,
                        selecteddata: _this.selection.selected,
                        flag: 'no_record'
                    });
                    // this.rescount = 0; 
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 6000,
                        data: { errormessage: 'No such search record found !!' }
                    });
                }
                _this.loading = false;
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                _this.date_search_source_countval = (result.count);
                if (result.count == 0) {
                    _this.tableflag = 1;
                }
                else {
                    _this.tableflag = 0;
                }
                // console.log('count',result);
                // this.dataSource.paginator = this.paginator;
                // this.dataSource.sort = this.sort;
            }));
        }
        this.initiateSearch = false;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    ListingComponent.prototype.gettypeof = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return typeof (val);
    };
    // open Bottom Sheet For Search
    // open Bottom Sheet For Search
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    ListingComponent.prototype.openBottomSheetForSearch = 
    // open Bottom Sheet For Search
    /**
     * @param {?} data
     * @param {?} index
     * @return {?}
     */
    function (data, index) {
        var _this = this;
        /** @type {?} */
        var count = 1;
        // console.log(data, 'openBottomSheetForSearch', index)
        /** @type {?} */
        var bs = this.dialog.open(ModalForButtomSearch, { panelClass: 'button-search-modal', data: { items: data } });
        bs.disableClose = true;
        bs.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        function (result) {
            // console.log(result, 'result++++==== data', data)
            if (result != null && result.flag == 'yes') {
                count = 1;
                /** @type {?} */
                var searchFlag = 0;
                // console.log(result, 'result++++====??', index)
                // console.log(this.buttonSearchData, 'buttonSearchData 1')
                if (_this.buttonSearchData.length > 0) {
                    searchFlag = 1;
                    for (var i in _this.buttonSearchData) {
                        if (_this.buttonSearchData[i].field == result.items.field) {
                            count = 2;
                            searchFlag = 1;
                            // console.log('true +++ count', count)
                            for (var j in result.selectedData) {
                                _this.buttonSearchData[i].value.push(result.selectedData[j]);
                            }
                            if (searchFlag == 1) {
                                // console.log(searchFlag, 'searchFlag 2')
                                _this.allSearch();
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
                        _this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                        searchFlag = 1;
                    }
                }
                else {
                    _this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
                    searchFlag = 1;
                }
                // console.log(searchFlag, 'searchFlag 1')
                if (searchFlag == 1) {
                    // console.log(searchFlag, 'searchFlag 2')
                    _this.allSearch();
                }
            }
        }));
    };
    // clear Button Search Chips  data
    // clear Button Search Chips  data
    /**
     * @param {?} bs
     * @param {?} i
     * @param {?} item
     * @param {?} j
     * @return {?}
     */
    ListingComponent.prototype.clearButtonSearchChips = 
    // clear Button Search Chips  data
    /**
     * @param {?} bs
     * @param {?} i
     * @param {?} item
     * @param {?} j
     * @return {?}
     */
    function (bs, i, item, j) {
        // console.log(bs, i, item, j, 'bs,i,item,j');
        this.buttonSearchData[i].value.splice(j, 1);
        // console.log(this.buttonSearchData, 'buttonSearchData splice')
        // this.search_settingsval.buttonsearch[bs.key].values
        for (var i_1 in this.search_settingsval.buttonsearch) {
            if (this.search_settingsval.buttonsearch[i_1].field == bs.field) {
                // console.log('', this.search_settingsval.buttonsearch[i])
                this.search_settingsval.buttonsearch[i_1].value.push(item);
            }
        }
        // console.log(this.search_settingsval.buttonsearch,'this.search_settingsval.buttonsearch')
    };
    /* artistxp preview button click function start */
    /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    ListingComponent.prototype.artistxpPreview = /* artistxp preview button click function start */
    /**
     * @param {?} singleData
     * @return {?}
     */
    function (singleData) {
        var _this = this;
        /** @type {?} */
        var link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
        /**
         * **** not completed *****
         * @type {?}
         */
        var data = { source: 'blockchainuser_view', condition: { posts_id_object: singleData._id }, token: this.jwttokenval };
        /******** not completed *****/
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(link, data).subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            /** @type {?} */
            var restlt = response;
            /* open dialog */
            /** @type {?} */
            var dialogRef = _this.dialog.open(Confirmdialog, {
                panelClass: ['custom-modalbox', 'delete-axp'],
                height: 'auto',
                data: { preview: true, previewData: restlt }
            });
        }));
    };
    ListingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'lib-listing',
                    template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    <!-- <span>dddddd</span> -->\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                                placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\"\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Select an option</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value)\" [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n                \n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"></span>\n                                </span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                                </span>\n\n\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n\n                            <div class=\"button_div_custom_cls\">\n\n                                <!-- loader -->\n\n                                <section class=\"example-section example-section-button-1 \">\n                                    <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\n                                        class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\n                                        [bufferValue]=\"bufferValue \">\n                                    </mat-progress-bar>\n                                </section>\n\n                                <!-- note block -->\n                                <ng-container *ngIf=\"libdataval.notes!=null \">\n                                    <button mat-raised-button color=\"primary\" class=\"notebtncls\" matBadgeColor=\"warn\"\n                                        matBadge=\"{{row.notescount}}\" matTooltip=\"{{libdataval?.notes?.tooltip}}\"\n                                        (click)=\"opennotes(row) \">\n                                        <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                        <!-- <span class=\"notebracket1\">(</span> -->\n                                        <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                        <!-- <span class=\"notebracket2\">)</span> -->\n                                    </button>\n                                </ng-container>\n\n                                <!--custom buttions block -->\n\n                                <ng-container\n                                    *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                    <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                        <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                <!-- ss {{row['status']}} -->\n                                                <button mat-raised-button color=\"primary\"\n                                                    matTooltip=\"{{custombutton?.tooltip}}\"\n                                                    (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                        <button mat-raised-button matTooltip=\"{{custombutton?.tooltip}}\"\n                                                            color=\"primary\">{{custombutton.label}}</button>\n                                                    </a>\n                                                </ng-container>\n\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                                </ng-container>\n                                                <ng-container\n                                                    *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n\n                                                <ng-container\n                                                    *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                                </ng-container>\n\n                                            </ng-container>\n                                            <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n                                                <ng-container\n                                                    *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip}}\"\n                                                        (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                                </ng-container>\n\n                                            </ng-container>\n\n                                        </section>\n\n                                    </ng-container>\n                                </ng-container>\n                            </div>\n\n\n\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Edit\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Delete\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Preview\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\" matTooltip=\"Change Status\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\" matTooltip=\"Change Status\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- hide status toggle with cond-->\n                                <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\n                                    class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons treeclass\"\n                                        matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip}}\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Select an option</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value)\" [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                    animations: [
                        trigger('detailExpand', [
                            state('collapsed', style({ height: '0px', minHeight: '0' })),
                            state('expanded', style({ height: '*' })),
                            transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                        ]),
                    ],
                    styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.container .searchiconcls{height:55px;width:99%;background:#f5f5f5;padding:6px;margin:7px}.searchiconcls .iconcls{cursor:pointer;font-size:53px}.CustomButtonListen_div{padding:10px}.buttonsearch_div button{float:none}.buttonSearchDatacls_div{padding:10px}.searchbtncls{text-align:right}.searchbtncls button{float:none}tr.example-detail-row{height:0}tr.example-element-row:not(.example-expanded-row):hover{background:#f5f5f5}tr.example-element-row:not(.example-expanded-row):active{background:#efefef}.example-element-row td{border-bottom-width:0}"]
                }] }
    ];
    /** @nocollapse */
    ListingComponent.ctorParameters = function () { return [
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
    ]; };
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
    return ListingComponent;
}());
export { ListingComponent };
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
    ListingComponent.prototype.expandedElement;
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
    ListingComponent.prototype.pages;
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
var Confirmdialog = /** @class */ (function () {
    function Confirmdialog(_apiService, dialogRef, data, sanitizer) {
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
    Confirmdialog.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    Confirmdialog.prototype.deletenote = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        var _this = this;
        // console.log('log', this.data);
        // if (this.data.notesval != null && this.data.notesval != '') {
        /** @type {?} */
        var source = {
            id: this.data.rowdata._id,
            index: index
            // note: this.data.notesval,
            // user: this.data.notedata.user,
        };
        this.data.loading1 = index;
        this._apiService.postSearch(this.data.apiurl + this.data.notedata.deleteendpoint, this.data.jwttokenval, source).subscribe((/**
         * @param {?} res
         * @return {?}
         */
        function (res) {
            /** @type {?} */
            var result = {};
            result = res;
            // console.log(result, 'add notes');
            if (result.status == 'success') {
                // this.data.listdata.push({ userid: this.data.notedata.currentuserfullname, note: this.data.notesval, created_date: Date.now() });
                // this.data.notesval = '';
                _this.data.listdata.splice(index, 1);
                _this.data.loading1 = null;
            }
            // console.log('count',result);
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
        }));
        // }
    };
    /**
     * @return {?}
     */
    Confirmdialog.prototype.addnotes = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // console.log('log', this.data);
        if (this.data.notesval != null && this.data.notesval != '') {
            /** @type {?} */
            var source = {
                id: this.data.rowdata._id,
                note: this.data.notesval,
                user: this.data.notedata.user,
            };
            this.data.loading = true;
            this._apiService.postSearch(this.data.apiurl + this.data.notedata.addendpoint, this.data.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                // console.log(result, 'add notes');
                if (result.status == 'success') {
                    if (_this.data.listdata == null) {
                        _this.data.listdata = [];
                    }
                    _this.data.listdata.unshift({ _id: _this.data.rowdata._id, notes: { userid: _this.data.notedata.user, note: _this.data.notesval, user: _this.data.notedata.currentuserfullname, created_date: Date.now() } });
                    _this.data.notesval = '';
                    _this.data.loading = null;
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
    };
    /**
     * @param {?} val
     * @return {?}
     */
    Confirmdialog.prototype.gettypeof = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        return typeof (val);
    };
    /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    Confirmdialog.prototype.sanitizeUrl = /**
     * @param {?} unsafeurl
     * @param {?} data
     * @param {?} rowdata
     * @return {?}
     */
    function (unsafeurl, data, rowdata) {
        for (var b in data) {
            unsafeurl = unsafeurl + '/' + rowdata[data[b]];
        }
        return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
    };
    Confirmdialog.decorators = [
        { type: Component, args: [{
                    selector: 'confirmdialog',
                    template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\n            {{data?.headerData?.header}}\n        </h1>\n\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\n                            <span>By:</span>{{note.notes.user}}\n                        </div>\n                        <div mat-line class=\"line-datetime\"\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\n                            {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\"\n                            (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\n                                    [innerHtml]=\"arr\"></span>\n                                <span\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\n                                    [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\n            (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: ApiService },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer }
    ]; };
    return Confirmdialog;
}());
export { Confirmdialog };
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
var BottomSheet = /** @class */ (function () {
    function BottomSheet(bottomSheetRef, data) {
        this.bottomSheetRef = bottomSheetRef;
        this.data = data;
        // console.warn("bottom-sheet",data);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    BottomSheet.prototype.openLink = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.bottomSheetRef.dismiss(val);
    };
    BottomSheet.decorators = [
        { type: Component, args: [{
                    selector: 'bottom-sheet',
                    template: "<div class=\"bottom-sheet-header-toggle\">\n    You are about to change status of these record(s)\n\n</div>\n<mat-nav-list class=\"navlist\">\n    <a *ngFor=\"let item of data.items;\" mat-list-item (click)=\"openLink(item)\">\n        <span class=\"bottom-sheet{{item.name}}\" mat-line>{{item.name}}</span>\n    </a>\n</mat-nav-list>"
                }] }
    ];
    /** @nocollapse */
    BottomSheet.ctorParameters = function () { return [
        { type: MatBottomSheetRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_BOTTOM_SHEET_DATA,] }] }
    ]; };
    return BottomSheet;
}());
export { BottomSheet };
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
var ModalForButtomSearch = /** @class */ (function () {
    function ModalForButtomSearch(bnottoRef, data, apiService) {
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
    ModalForButtomSearch.prototype.chooseChipItem = /**
     * @param {?} data
     * @param {?} i
     * @return {?}
     */
    function (data, i) {
        // console.log(data, '??data')
        this.selectedData.push(data);
        this.buttonSearchData.items.value.splice(i, 1);
    };
    // submit 
    // submit 
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.searchByItem = 
    // submit 
    /**
     * @return {?}
     */
    function () {
        // console.log(this.selectedData)
        this.data.flag = 'yes';
        this.data.selectedData = this.selectedData;
        // this.searchVal = '';
        // this.buttonSearchData.items.value = [];
        this.bnottoRef.close(this.data);
    };
    /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    ModalForButtomSearch.prototype.remove = /**
     * @param {?} val
     * @param {?} i
     * @return {?}
     */
    function (val, i) {
        this.selectedData.splice(i, 1);
        this.buttonSearchData.items.value.push(val);
    };
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.searchVal = '';
        this.buttonSearchData.items.value = [];
        this.buttonSearchData.items.value = this.allButtonData;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ModalForButtomSearch.prototype.searchByKeyword = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        var _this = this;
        if (this.searchVal != null && this.searchVal != '') {
            this.loading_flag = true;
            /** @type {?} */
            var link = this.buttonSearchData.items.serversearchdata.url + this.buttonSearchData.items.serversearchdata.endpoint;
            /** @type {?} */
            var data = {
                "search_str": value,
                "limit": 50
            };
            this.apiService.postSearch1(link, data).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                // console.log(data)
                /** @type {?} */
                var result = res;
                if (result.status == 'success') {
                    // this.buttonSearchData.items.value = [];
                    _this.loading_flag = false;
                    result = result.res.slice(0, 50);
                    // this.buttonSearchData.items.value = result;
                    // console.log(result, 'result', this.loading_flag)
                    _this.matAutosearchData = result;
                }
            }));
        }
        else {
            this.errmsg = "Please Enter Keywords";
        }
    };
    /**
     * @return {?}
     */
    ModalForButtomSearch.prototype.close = /**
     * @return {?}
     */
    function () {
        this.data.flag = 'no';
        this.bnottoRef.close(this.data);
    };
    ModalForButtomSearch.decorators = [
        { type: Component, args: [{
                    selector: 'button-search-modal',
                    template: "<div class=\"bottom-sheet-header-toggle\">\n    <h2 style=\"text-align: center;\"> {{buttonSearchData.items.label}}</h2>\n</div>\n\n\n<div class=\"selecteditemcls\" *ngIf=\"selectedData.length >0\">\n    <span>Selected :</span>\n    <div class=\"navlist\" style=\"display: inline;\">\n        <mat-chip class=\"example-box\" *ngFor=\"let item of selectedData;let i=index;\">{{item.name}}\n            <mat-icon style=\"cursor: pointer;\" matChipRemove (click)=\"remove(item,i)\">cancel</mat-icon>\n        </mat-chip>\n    </div>\n    <span>\n        <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByItem()\">Search\n        </button>\n    </span>\n</div>\n<br><br>\n\n<div>\n    <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loading_flag == true\"></mat-progress-bar>\n</div>\n<br><br>\n\n<div class=\"searchValcls\">\n    <mat-form-field class=\"example-full-width\">\n        <mat-label>Search By Keywords</mat-label>\n        <input matInput placeholder=\"filter\" [(ngModel)]=\"searchVal\" (keyup)=\"searchByKeyword(searchVal)\" [matAutocomplete]=\"auto\">\n    </mat-form-field>\n    <mat-autocomplete #auto=\"matAutocomplete\">\n        <mat-option *ngFor=\"let item of matAutosearchData;let i = index\" [value]=\"item.name\"\n        (click)=\"chooseChipItem(item,i)\">\n            {{item.name}}\n        </mat-option>\n    </mat-autocomplete>\n\n    <!-- <span class=\"errcls\" style=\"color: brown;\" *ngIf=\"searchVal == null || searchVal == ''\">{{errmsg}}</span> -->\n    <span class='searchByKeywordcls'>\n        <span style=\"cursor: pointer;\" class=\"material-icons\" (click)=\"reset()\">\n            sync\n        </span>\n         <!-- <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"searchByKeyword(searchVal)\">Search\n        </button> -->\n    </span>\n\n</div>\n<br>\n\n<div class=\"chipdatacls\">\n    <div style=\"display: inline;\" *ngIf=\"buttonSearchData.items?.value.length >0\">\n        <h2 style=\"text-align: center;\">OR Choose From <span class=\"material-icons\">\n                south\n            </span></h2>\n        <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n            <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of buttonSearchData.items?.value;let i =index\">\n                <span style=\"cursor: pointer;\" (click)=\"chooseChipItem(item,i)\"> {{item.name}}</span>\n            </mat-chip>\n        </mat-chip-list>\n    </div>\n    <span class='norecordcls' style=\"text-align: center;\" *ngIf=\"buttonSearchData.items?.value.length == 0\"><span\n           >No Record Found</span></span>\n</div>\n\n\n<div class=\"clrcls\">\n    <span style=\"cursor: pointer;\n    float: right;\n    margin-bottom: -6px;\" matTooltip=\"Clear\" class=\"material-icons\" (click)=\"close()\">\n        clear\n    </span>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ModalForButtomSearch.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: ApiService }
    ]; };
    return ModalForButtomSearch;
}());
export { ModalForButtomSearch };
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
var VideoPlayer = /** @class */ (function () {
    function VideoPlayer(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('videoplayerModal',data.previewData.video);
    }
    /**
     * @return {?}
     */
    VideoPlayer.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    VideoPlayer.decorators = [
        { type: Component, args: [{
                    selector: 'videoplayer',
                    template: "<lib-youtubeplayer [videoid]=\"data.previewData.video\"></lib-youtubeplayer>\n<button type=\"button\" mat-dialog-close class=\"closemodal\">x</button>"
                }] }
    ];
    /** @nocollapse */
    VideoPlayer.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return VideoPlayer;
}());
export { VideoPlayer };
if (false) {
    /** @type {?} */
    VideoPlayer.prototype.dialogRef;
    /** @type {?} */
    VideoPlayer.prototype.data;
}
/**
 * listing Image View
 */
var ImageView = /** @class */ (function () {
    // public data:any;
    function ImageView(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn('ImageViewModal', data);
    }
    /**
     * @return {?}
     */
    ImageView.prototype.addnotes = /**
     * @return {?}
     */
    function () {
        // console.log('log', this.data);
    };
    /**
     * @return {?}
     */
    ImageView.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    ImageView.decorators = [
        { type: Component, args: [{
                    selector: 'image',
                    template: "<mat-card class=\"imgmodalcls\">\n    <mat-card-container>\n        <span>\n            <img src={{data.alldata}} height=\"100%\" width=\"100%\">\n        </span>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>Close</button>        \n    </mat-card-container>\n    </mat-card>"
                }] }
    ];
    /** @nocollapse */
    ImageView.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return ImageView;
}());
export { ImageView };
if (false) {
    /** @type {?} */
    ImageView.prototype.dialogRef;
    /** @type {?} */
    ImageView.prototype.data;
}
var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(snackBarRef, data) {
        this.snackBarRef = snackBarRef;
        this.data = data;
        // console.log('snack',this.data);
    }
    SnackbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'snack-bar-component-example-snack',
                    template: "<span class=\"snack-bar-message\">\n  {{data.errormessage}}\n</span>\n",
                    styles: ["\n    .example-pizza-party {\n      color: hotpink;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    SnackbarComponent.ctorParameters = function () { return [
        { type: MatSnackBarRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_SNACK_BAR_DATA,] }] }
    ]; };
    return SnackbarComponent;
}());
export { SnackbarComponent };
if (false) {
    /** @type {?} */
    SnackbarComponent.prototype.snackBarRef;
    /** @type {?} */
    SnackbarComponent.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFB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LEdBQVQsU0FBUyxDQUF5QjtRQUNULFNBQUksR0FBSixJQUFJLENBQUs7UUFDekMsd0NBQXdDO0lBQzFDLENBQUM7Ozs7SUFDRCw0QkFBUTs7O0lBQVI7UUFDRSxpQ0FBaUM7SUFDbkMsQ0FBQzs7OztJQUVELDZCQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Z0JBbEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsT0FBTztvQkFDakIsc1RBQWtDO2lCQUNuQzs7OztnQkFsckZtQixZQUFZO2dEQXdyRjNCLE1BQU0sU0FBQyxlQUFlOztJQVUzQixnQkFBQztDQUFBLEFBbkJELElBbUJDO1NBZlksU0FBUzs7O0lBSWxCLDhCQUF5Qzs7SUFDekMseUJBQXlDOztBQVk3QztJQVVFLDJCQUNTLFdBQThDLEVBQ2xCLElBQVM7UUFEckMsZ0JBQVcsR0FBWCxXQUFXLENBQW1DO1FBQ2xCLFNBQUksR0FBSixJQUFJLENBQUs7UUFFNUMsa0NBQWtDO0lBQ3BDLENBQUM7O2dCQWZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsbUNBQW1DO29CQUM3QyxrRkFBcUQ7NkJBQzVDLGdFQUlSO2lCQUNGOzs7O2dCQTlyRnlDLGNBQWM7Z0RBa3NGbkQsTUFBTSxTQUFDLGtCQUFrQjs7SUFJOUIsd0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVBZLGlCQUFpQjs7O0lBRTFCLHdDQUFxRDs7SUFDckQsaUNBQTRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgSW5wdXQsIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0NvbnRhaW5lclJlZiwgU2ltcGxlQ2hhbmdlLCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdDaGVja2VkLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLCBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IGFuaW1hdGUsIHN0YXRlLCBzdHlsZSwgdHJhbnNpdGlvbiwgdHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xuZGVjbGFyZSB2YXIgJDogYW55O1xuXG5pbXBvcnQgKiBhcyBtb21lbnRJbXBvcnRlZCBmcm9tICdtb21lbnQnO1xuXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcbmltcG9ydCB7IE1BVF9TTkFDS19CQVJfREFUQSwgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcblxuLy8gaW1wb3J0IHtQcm9ncmVzc0Jhck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG4vLyBpbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcblxuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcblxuXG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBwdWJsaWMgc2VhcmNoTGlzdHZhbDogYW55O1xuICByZXNjb3VudDogbnVtYmVyID0gMDtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgY3VycmVudGF1dG9zZWFyY2hhcnI6IGFueSA9IFtdO1xuICBvbGRkYXRhOiBhbnkgPSBbXTtcbiAgdHNlYXJjaDogYW55ID0gW107XG4gIHRhYmxlZmxhZzogYW55ID0gMDtcbiAgYXV0b3NlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyB4OiBhbnk7XG4gIHB1YmxpYyBsaWJkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGxpbWl0Y29uZHZhbDogYW55ID0ge307XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWw6IGFueTtcbiAgcHVibGljIHJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBzb3J0ZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBzaDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgdXBkYXRldGFibGV2YWw6IGFueSA9IGZhbHNlO1xuICBsb2FkZXJyb3c6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRhdXRvY29tcGxldGVpdGVtOiBhbnk7XG4gIHB1YmxpYyBjdXN0b21CdXR0b25GbGFnVmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGFsbFNlYXJjaENvbmQ6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoYnV0dG9udmFsOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaEJhckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlYXJjaEJhclRvb2xUaXA6IGFueSA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICBwdWJsaWMgc2VhcmNoQmFyRmxhZ1ZhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVjb3JkRm91bmRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNvcmRGb3VuZERhdGE6IGFueSA9ICcnO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG5cbiAgcHVibGljIGluaXRpYXRlU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9uTGlibGlzdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBvbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzZWFyY2hzdHJzYXJyOiBhbnkgPSBbXTtcbiAgb2xkbGltaXRyYW5nZTogYW55ID0gW107XG5cblxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoX3NldHRpbmdzKHNlYXJjaF9zZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgPSBzZWFyY2hfc2V0dGluZ3M7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlYXJjaF9zZXR0aW5nc3ZhbCsrKysrKycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsKVxuICAgIC8qZm9yIChsZXQgaT0gMDsgaTw9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2ldLmxhYmVsKTtcbiAgICB9Ki9cblxuICAgIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS52YWx1ZXMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGltaXRjb25kKGxpbWl0Y29uZHZhbDogYW55KSB7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwgPSBsaW1pdGNvbmR2YWw7XG4gICAgdGhpcy5vbGRsaW1pdHJhbmdlLnB1c2gobGltaXRjb25kdmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnbGltaXRjb25kdmFsJyx0aGlzLmxpbWl0Y29uZHZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsO1xuICAgIGlmICh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9PSAwKSB7IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7IH1cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50Jyx0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZ3JhYl9saW5rKGdyYWJfbGluazogYW55KSB7XG4gICAgdGhpcy5ncmFiX2xpbmt2YWwgPSBncmFiX2xpbms7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21idXR0b24oY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbWJ1dHRvbnZhbCA9IGN1c3RvbWJ1dHRvbjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9zb3VyY2UoZGF0ZV9zZWFyY2hfc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCA9IGRhdGVfc2VhcmNoX3NvdXJjZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc29ydGRhdGEoc29ydGRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMuc29ydGRhdGF2YWwgPSBzb3J0ZGF0YXZhbDtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNvcnRkYXRhdmFsLCAnc29ydGRhdGF2YWwnKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRlX3NlYXJjaF9lbmRwb2ludChkYXRlX3NlYXJjaF9lbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbCA9IGRhdGVfc2VhcmNoX2VuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCB1cmwodXJsOiBhbnkpIHtcbiAgICB0aGlzLnVybHZhbCA9IHVybDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoZW5kcG9pbnQoc2VhcmNoZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoZW5kcG9pbnR2YWwgPSBzZWFyY2hlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgcGRmX2xpbmsocGRmX2xpbms6IGFueSkge1xuICAgIHRoaXMucGRmX2xpbmtfdmFsID0gcGRmX2xpbms7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaExpc3Qoc2VhcmNoTGlzdDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hMaXN0dmFsID0gc2VhcmNoTGlzdDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGliZGF0YShsaWJkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpYmRhdGF2YWwgPSBbXTtcbiAgICB0aGlzLmxpYmRhdGF2YWwgPSBsaWJkYXRhdmFsO1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLHRoaXMubGliZGF0YXZhbCk7XG4gICAgLy8gc2VhcmNoQmFyRmxhZ1xuXG4gICAgLy8gY29uc29sZS5sb2cobGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsKVxuXG4gICAgaWYgKGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbCAhPSBudWxsICYmIGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbCAhPSAnJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZ1ZhbCA9IGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbDtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgaWYgKGxpYmRhdGF2YWwucmVjb3JkZm91bmRmbGFnICE9IG51bGwgJiYgbGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWcgIT0gJycgJiYgbGliZGF0YXZhbC5yZWNvcmRmb3VuZGRhdGEgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVjb3JkRm91bmRGbGFnID0gbGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWc7XG4gICAgICAgIHRoaXMucmVjb3JkRm91bmREYXRhID0gbGliZGF0YXZhbC5yZWNvcmRmb3VuZGRhdGE7XG5cbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY29yZEZvdW5kRmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IFtdO1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFjb2xsZWN0aW9uKGRhdGFjb2xsZWN0aW9udmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFjb2xsZWN0aW9udmFsID0gZGF0YWNvbGxlY3Rpb252YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRldGFibGUodXBkYXRldGFibGU6IGFueSkge1xuICAgIHRoaXMudXBkYXRldGFibGV2YWwgPSB1cGRhdGV0YWJsZTtcblxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGp3dHRva2VuKGp3dHRva2VuOiBhbnkpIHtcbiAgICBpZiAoand0dG9rZW4gIT0gbnVsbCkgeyB0aGlzLmp3dHRva2VudmFsID0gand0dG9rZW47IH0gZWxzZSB7IHRoaXMuand0dG9rZW52YWwgPSAnJzsgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuand0dG9rZW52YWwsJ3Rva2VuJylcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzdGF0dXNhcnIoc3RhdHVzYXJyOiBhbnkpIHtcbiAgICB0aGlzLnN0YXR1c2FycnZhbCA9IHN0YXR1c2FycjtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlbWFpbGFycmF5KGVtYWlsYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZW1haWxhcnJheXZhbCA9IGVtYWlsYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZWRpdHJvdXRlKGVkaXRyb3V0ZTogYW55KSB7XG4gICAgdGhpcy5lZGl0cm91dGV2YWwgPSBlZGl0cm91dGU7XG4gIH1cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgc3RhcnQgKi9cbiAgQElucHV0KClcbiAgc2V0IHByZXZpZXdfYXJ0aXN0eHAoZmx1ZzogYW55KSB7XG4gICAgdGhpcy5wcmV2aWV3Rmx1ZyA9IHRydWU7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBlbmQgKi9cblxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tbGlzdGVuYnV0dG9uKHZhbDogYW55KSB7XG4gICAgdGhpcy5jdXN0b21CdXR0b25GbGFnVmFsID0gdmFsXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21CdXR0b25GbGFnVmFsLCAnY3VzdG9tQnV0dG9uRmxhZ1ZhbCcpXG4gIH1cblxuICAvLyBzZWFyY2ggYnV0dG9ucyBcbiAgLy8gQElucHV0KClcbiAgLy8gc2V0IHNlYXJjaGJ1dHRvbnModmFsOiBhbnkpIHtcbiAgLy8gICB0aGlzLnNlYXJjaGJ1dHRvbnZhbCA9IHZhbFxuICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoYnV0dG9udmFsLCAnY3VzdG9tQnV0dG9uRmxhZ1ZhbCcpXG4gIC8vIH1cblxuICBleHBhbmRlZEVsZW1lbnQ6IGFueTtcblxuXG5cbiAgc3RhdGVHcm91cHM6IHN0cmluZ1tdO1xuXG4gIHN0YXRlR3JvdXA6IE9ic2VydmFibGU8c3RyaW5nW10+O1xuICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICBkYXRhY29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGlzcGxheWVkQ29sdW1uc2hlYWRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9ybWFycmF5OiBhbnkgPSBbXTtcbiAgc3RhcnRfZGF0ZTogYW55O1xuICBkYXRlU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHNlbGVjdFNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBhdXRvU2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIHRleHRTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgZW5kX2RhdGU6IGFueTtcbiAgcHVibGljIGk6IGFueTtcbiAgbG9hZGluZzogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBwcmVyZXN1bHQ6IGFueSA9IHt9O1xuICBwdWJsaWMgYnV0dG9uU2VhcmNoRGF0YTogYW55ID0gW107XG4gIC8vIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMuZGF0YXNvdXJjZXZhbCk7XG4gIGRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlO1xuXG4gIEBWaWV3Q2hpbGQoTWF0U29ydCkgc29ydDogTWF0U29ydDtcbiAgQFZpZXdDaGlsZChNYXRQYWdpbmF0b3IpIHBhZ2luYXRvcjogTWF0UGFnaW5hdG9yO1xuICAvLyBvcHRpb25zOiBGb3JtR3JvdXA7XG4gIG15Rm9ybTogYW55O1xuICAvLyBteUZvcm06YW55O1xuICBtb2RlbENoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIG1vZGVsQ2hhbmdlZHNlcnZlciA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgcGFnZWNoYW5nZWQgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG4gIHN1YnNjcmlwdGlvbmNvdW50ID0gMDtcbiAgdGFibGVGb290ZXJDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xuICB0ZXN0dmFsdWU6IGFueSA9IFwiczFcIjtcbiAgLy8gc2VhcmNoUmVzdWx0JDogT2JzZXJ2YWJsZTxTZWFyY2hSZXN1bHRbXT47XG4gIC8vIGZvciBkcm9wZG93biBwYWdpbmF0aW9uXG4gIHB1YmxpYyBwYWdlczphbnk9IFtcbiAgICB7dmFsOiA1MCwgbmFtZTogJzUwJ30sXG4gICAge3ZhbDogMTAwLCBuYW1lOiAnMTAwJ30sXG4gICAge3ZhbDogMTUwLCBuYW1lOiAnMTUwJ30sXG4gICAge3ZhbDogMjAwLCBuYW1lOiAnMjAwJ30sXG4gICAge3ZhbDogMjUwLCBuYW1lOiAnMjUwJ30sXG4gICAge3ZhbDogMzAwLCBuYW1lOiAnMzAwJ30sXG4gICAge3ZhbDogMzUwLCBuYW1lOiAnMzUwJ30sXG4gICAge3ZhbDogNDAwLCBuYW1lOiAnNDAwJ30sXG4gICAge3ZhbDogNDUwLCBuYW1lOiAnNDUwJ30sXG4gICAge3ZhbDogNTAwLCBuYW1lOiAnNTAwJ30sXG4gIF07XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSwgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxuICAgIHB1YmxpYyBib3R0b21TaGVldDogTWF0Qm90dG9tU2hlZXQsXG4gICAgcHVibGljIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgIHByaXZhdGUgcmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICBwcml2YXRlIGNvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcbiAgICBwdWJsaWMgX2h0dHA6IEh0dHBDbGllbnQsXG4gICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxuICAgIHByaXZhdGUgX3NuYWNrQmFyOiBNYXRTbmFja0JhcixcbiAgICBwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge1xuICAgIHRoaXMuc3RhdGVHcm91cHMgPSB0aGlzLnNlYXJjaExpc3R2YWw7XG4gICAgdGhpcy5yb3V0ZXIuZXZlbnRzLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7XG4gICAgICBzd2l0Y2ggKHRydWUpIHtcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25TdGFydDoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQ6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uQ2FuY2VsOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVycm9yOiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgZGVmYXVsdDoge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2VkXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXJcbiAgICAgIC5waXBlKFxuICAgICAgICBkZWJvdW5jZVRpbWUoNTAwKSxcbiAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSBcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAgc2VydmVyJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLmZpZWxkXSAhPSAnJykge1xuICAgICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcblxuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhLmVuZHBvaW50O1xuXG4gICAgICAgICAgbGV0IHNvdXJjZTogYW55O1xuXG4gICAgICAgICAgc291cmNlID0ge1xuICAgICAgICAgICAgc2VhcmNoX3N0cjogdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0sXG4gICAgICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLCAncmVzdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgIC8vIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwpIHRoaXMucmVzY291bnQgPSByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gcmVzdWx0LnJlcztcbiAgICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQgJyB9XG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cbiAgfVxuICAvKkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW0xpc3RpbmddJ1xuICB9KSovXG5cblxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW3Byb3BLZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdvbmNoYW5nZSAuLicsY2hhbmdlcyk7XG4gICAgZm9yIChjb25zdCB2IGluIGNoYW5nZXMpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHYsY2hhbmdlc1t2XSwndnYnKTtcbiAgICAgIGlmICh2ID09ICd1cGRhdGV0YWJsZScpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3VwZGF0ZXRhYmxlJyk7XG4gICAgICAgIGlmIChjaGFuZ2VzW3ZdLnByZXZpb3VzVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuICBpbnB1dGJsdXIodmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb24gYmx1ciAuLi4uLicpO1xuICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3ZhbF0ubWFya0FzVW50b3VjaGVkKCk7XG4gIH1cbiAgbmdPbkluaXQoKSB7XG5cbiAgICAvLyBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gJycpIHtcblxuICAgIC8vICAgbGV0IHNvdXJjZTogYW55O1xuICAgIC8vICAgbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgLy8gICBzb3VyY2UgPSB7XG4gICAgLy8gICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgLy8gICAgIGNvbmRpdGlvbjogY29uZGl0aW9uXG4gICAgLy8gICB9O1xuICAgIC8vICAgbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICB0aGlzLnJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgdGhpcy5wcmVyZXN1bHQgPSB0aGlzLnJlc3VsdC5yZXM7XG4gICAgLy8gICB9KTtcblxuICAgIC8vIH1cblxuICAgIC8vIG5vdCBuZWVkZWQgLFxuXG4gICAgLy8gdGhpcy5fc2VydmljZS5zdWNjZXNzKHRoaXMuY29sdW1uc1swXS5kYXRlLCdkbmRubmQnLHRoaXMub3B0aW9ucyk7XG4gICAgLyogdGhpcy5zdGF0ZUdyb3VwT3B0aW9ucyA9IHRoaXMubXlDb250cm9sLnZhbHVlQ2hhbmdlc1xuICAgICAgICAgLnBpcGUoXG4gICAgICAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyR3JvdXAodmFsdWUpKVxuICAgICAgICAgKTsqL1xuXG4gICAgdGhpcy5zdGF0ZUdyb3VwID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAucGlwZShcbiAgICAgICAgc3RhcnRXaXRoKCcnKSxcbiAgICAgICAgbWFwKHZhbHVlID0+IHRoaXMuX2ZpbHRlcih2YWx1ZSkpXG4gICAgICApO1xuXG4gICAgLypjb25zdCBmYWN0b3J5ID0gdGhpcy5yZXNvbHZlci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeShcbiAgICAgICAgY29tcG9uZW50TWFwcGVyW3RoaXMuZmllbGQudHlwZV1cbiAgICApO1xuICAgIHRoaXMuY29tcG9uZW50UmVmID0gdGhpcy5jb250YWluZXIuY3JlYXRlQ29tcG9uZW50KGZhY3RvcnkpO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmZpZWxkID0gdGhpcy5maWVsZDtcbiAgICB0aGlzLmNvbXBvbmVudFJlZi5pbnN0YW5jZS5ncm91cCA9IHRoaXMuZ3JvdXA7XG4qL1xuXG4gICAgdGhpcy54ID0gdGhpcy5kYXRhc291cmNldmFsO1xuICAgIGNvbnN0IHggPSB0aGlzLng7XG4gICAgaWYgKHRoaXMuZGF0YXNvdXJjZXZhbCkgdGhpcy5yZXNjb3VudCA9IHRoaXMuZGF0YXNvdXJjZXZhbC5sZW5ndGg7XG5cbiAgICBsZXQgdGVtcCA9IFtdO1xuICAgIGNvbnN0IGtleXMgPSB4WzBdO1xuICAgIHRlbXAgPSBPYmplY3Qua2V5cyhrZXlzKTsgICAgLypieSBPYmplY3Qua2V5cygpIHdlIGNhbiBmaW5kIHRoZSBmaWVsZG5hbWVzKG9yIGtleXMpIGluIGFuIG9iamVjdCwgaS5lLCBpbiB0ZW1wIG9iamVjdCBmaWVsZCBuYW1lcyBhcmUgc2F2ZWQqL1xuXG4gICAgY29uc3QgY29sZGVmX2xpc3QgPSBbXTtcbiAgICBjb25zdCBoZWFkZXJfbGlzdCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcC5sZW5ndGg7IGkrKykge1xuICAgICAgY29sZGVmX2xpc3QucHVzaCh0ZW1wW2ldLnJlcGxhY2UoL1xccy9nLCAnXycpKTsgICAgICAvKnRvIHJlcGxhY2Ugc3BhY2VzIGluIGZpZWxkIG5hbWUgYnkgXCJfXCIsIHdlIHVzZSBcInJlcGxhY2UoL1xccy9nLCBcIl9cIilcIiovXG4gICAgICBoZWFkZXJfbGlzdC5wdXNoKHRlbXBbaV0pO1xuICAgIH1cbiAgICAvLyBjb2xkZWZfbGlzdC5wdXNoKCdBY3Rpb25zJyk7XG4gICAgLy8gaGVhZGVyX2xpc3QucHVzaCgnQWN0aW9ucycpXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbGRlZl9saXN0Jyxjb2xkZWZfbGlzdCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2hlYWRlcl9saXN0JyxoZWFkZXJfbGlzdCk7XG4gICAgdGhpcy5jb2x1bW5zID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGRlZl9saXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBmZiA9IGByb3cuJHtjb2xkZWZfbGlzdFtpXX1gO1xuICAgICAgY29uc3QgdHQgPSB7IGNvbHVtbkRlZjogYCR7Y29sZGVmX2xpc3RbaV19YCwgaGVhZGVyOiBgJHtoZWFkZXJfbGlzdFtpXX1gLCB0b29sdGlwOiBgJHtoZWFkZXJfbGlzdFtpXX1gLCBjZWxsOiAocm93KSA9PiBldmFsKGZmKSwgb2JqbGVuZ3RoOiBoZWFkZXJfbGlzdC5sZW5ndGggfTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd0dCcsdHQpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0LmNvbHVtbkRlZicpO1xuICAgICAgLy8gY29uc29sZS5sb2codHQuY29sdW1uRGVmKTtcblxuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCkge1xuICAgICAgICBpZiAoYiA9PSB0dC5oZWFkZXIpIHsgdHQuaGVhZGVyID0gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsW2JdOyB9XG4gICAgICB9XG5cblxuICAgICAgLy8gaGVhZGVyIHRvb2x0aXAgYXJyYXlcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGVhZGVyX3Rvb2x0aXBfYXJyYXkgIT0gbnVsbCAmJiB0eXBlb2YgKHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheSkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheSkge1xuICAgICAgICAgIGlmIChiID09IHR0LnRvb2x0aXApIHsgdHQudG9vbHRpcCA9IHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheVtiXTsgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHR0LnRvb2x0aXAsICd0dC50b29sdGlwID09PT09KysrKysnKVxuICAgICAgfVxuXG5cblxuXG4gICAgICBpZiAodGhpcy5za2lwdmFsLmluZGV4T2YodHQuY29sdW1uRGVmKSA9PSAtMSkge1xuICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh0dCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxldCBkaXNwbGF5ZWRjb2xzID0gW107XG4gICAgdGhpcy50YWJsZWZsYWcgPSAxO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy50YWJsZWZsYWcgPSAwO1xuICAgIH0sIDEwMCk7XG5cbiAgICBkaXNwbGF5ZWRjb2xzID0gdGhpcy5jb2x1bW5zLm1hcCh4ID0+IHguY29sdW1uRGVmKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzICE9IG51bGwpIHtcbiAgICAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgIH1cblxuXG5cbiAgICBlbHNlIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gW107XG5cbiAgICBsZXQgY3VzdG9tY29sczogYW55ID0gW107XG4gICAgLy8gY29uc29sZS5sb2coJ2Rpc3BsYXllZGNvbHMnLGRpc3BsYXllZGNvbHMpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzICE9IG51bGwpIHtcbiAgICAgIGN1c3RvbWNvbHMgPSB0aGlzLmxpYmRhdGF2YWwudGFibGVoZWFkZXJzO1xuICAgIH1cbiAgICBpZiAoY3VzdG9tY29scyAhPSBudWxsICYmIGN1c3RvbWNvbHMubGVuZ3RoID4gMCkge1xuICAgICAgbGV0IGNjb2x2YWw6IHN0cmluZyA9ICcnO1xuICAgICAgZm9yIChjb25zdCB2IGluIGN1c3RvbWNvbHMpIHtcbiAgICAgICAgaWYgKGRpc3BsYXllZGNvbHMuaW5jbHVkZXMoY3VzdG9tY29sc1t2XSkgPT0gZmFsc2UpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgICAgICBpZiAoYiA9PSBjdXN0b21jb2xzW3ZdKSB7IGNjb2x2YWwgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IGN1c3RvbWNvbHNbdl0sIGhlYWRlcjogY2NvbHZhbCwgY2VsbDogJ05BJyB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZGlzcGxheWVkY29scyA9IGN1c3RvbWNvbHM7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tY29scycsY3VzdG9tY29scyxkaXNwbGF5ZWRjb2xzLHRoaXMuY29sdW1ucyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlYWN0aW9uID09IG51bGwgfHwgdGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMucHVzaCh0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSA9PSBudWxsID8gJ0FjdGlvbnMnIDogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSwgaGVhZGVyOiAnQWN0aW9ucycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWNvdW50ZXIgPT0gZmFsc2UpIHtcbiAgICAgIGRpc3BsYXllZGNvbHMudW5zaGlmdCgnIycpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICcjJywgaGVhZGVyOiAnIycsIGNlbGw6ICdOQScgfSk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY29sdW1ucywgJ2NvbHMnKTtcblxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IFtdO1xuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IGRpc3BsYXllZGNvbHM7XG4gICAgLy8gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJyMnKTsgICAgICAgIC8qYWRkcyBzZWxlY3QgY29sdW1uIGluIHRhYmxlIGJ5IHVuc2hpZnQgZnVuY3Rpb24qL1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuaGlkZW11bHRpcGxlc2VsZWN0YnV0dG9uICE9IHRydWUpIHtcbiAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdzZWxlY3QnKTtcbiAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHsgY29sdW1uRGVmOiAnc2VsZWN0JywgaGVhZGVyOiAnc2VsZWN0JywgY2VsbDogJ05BJyB9KTsgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgfVxuICAgIGxldCB0ZW1wY29sYXJyID0gW107XG4gICAgbGV0IHRlbXBjb2xhcnIyID0gW107XG4gICAgdGhpcy5jb2x1bW5zLnJldmVyc2UoKTtcbiAgICBmb3IgKGxldCBuIGluIHRoaXMuY29sdW1ucykge1xuICAgICAgaWYgKHRlbXBjb2xhcnIuaW5kZXhPZih0aGlzLmNvbHVtbnNbbl0uY29sdW1uRGVmKSA9PSAtMSlcbiAgICAgICAgdGVtcGNvbGFycjIucHVzaCh0aGlzLmNvbHVtbnNbbl0pO1xuICAgICAgdGVtcGNvbGFyci5wdXNoKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpO1xuXG4gICAgfVxuICAgIHRoaXMuY29sdW1ucyA9IHRlbXBjb2xhcnIyO1xuXG4gICAgLy8gdGhpcy5jb2x1bW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY29sdW1ucy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5jb2x1bW5EZWYpKSk7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4gaXRlbS5jb2x1bW5EZWYpXG4gICAgLy8gICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcbiAgICAvLyB1bmlxdWUgY29sIG5hbWVzIFxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmRpc3BsYXllZENvbHVtbnMpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnMsICdjb2xzIGZpbHRlcicsIHRoaXMuZGlzcGxheWVkQ29sdW1ucyk7XG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gdGhpcy5kYXRhU291cmNlO1xuXG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG5cbiAgICAvLyBsb2FkIHNlYXJjaCBwcmVkZWZpbmRlZCBkYXRhXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIC8vIHRoaXMuc2VsZWN0c2VhcmNoWydzdGF0dXMnXSA9ICcwJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RzZWFyY2gnLCB0aGlzLnNlbGVjdHNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3MxJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUsdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlc1swXSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIHNlbGVjdFNlYXJjaF9jb25kaXRpb25cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5pdGlhdGVTZWFyY2gsICdpbml0aWF0ZVNlYXJjaCBzZWxlY3QnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsICdzcysrKysrPT09PT0rKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0sdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZXNbMF0sJz8/Pz8/IG5ldyBzZWxlY3RTZWFyY2hfY29uZGl0aW9uJyx0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndDEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudHNlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbml0aWF0ZVNlYXJjaCwgJ2luaXRpYXRlU2VhcmNoIHRleHQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBhdHMgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUgIT0gJycgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlLCc+Pj09PT09PT0nKVxuICAgICAgICAgICAgICB0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdLnB1c2goeyB2YWw6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlW2tdLnZhbCwgbmFtZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWVba10ubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRlU2VhcmNoX2NvbmRpdGlvblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZSAhPSAnJykge1xuICAgICAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgLSA4NjM5OTAwMDtcblxuICAgICAgICB0aGlzLnN0YXJ0X2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmVuZF9kYXRlID0gbW9tZW50KG5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSkpLmZvcm1hdChcIllZWVktTU0tRERcIikudG9TdHJpbmcoKTtcblxuICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgKyA4NjM5OTAwMDtcblxuICAgICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0uZmllbGRdID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLCAnc2VhcmNoX3NldHRpbmdzdmFsJywgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbilcblxuXG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gsICd0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gnKVxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaCkge1xuICAgICAgICAgIGxldCBpbmQ6IGFueSA9IDA7XG4gICAgICAgICAgaW5kID0gcGFyc2VJbnQoaSk7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXS52YWx1ZXMgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzICE9ICcnKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5wdXNoKHsgZmllbGQ6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXS5maWVsZCwga2V5OiBpbmQsIHZhbHVlOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmluaXRpYXRlU2VhcmNoID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG5cblxuXG4gIC8vIEN1c3RvbSBGaWx0ZXIgbmV3XG4gIEN1c3RvbUJ1dHRvbkxpc3Rlbih2YWw6IGFueSkge1xuICAgIC8vIGFsbFNlYXJjaENvbmRcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gsICd0aGlzLmFsbFNlYXJjaENvbmQnKVxuXG4gICAgdGhpcy5vbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UuZW1pdChcbiAgICAgIHtcbiAgICAgICAgYWN0aW9uOiAnY3VzdG9tbGlzdGVuYnV0dG9uJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIHNlYXJjaGRhdGE6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLCBidXR0b25kYXRhOiB2YWwsIGFsbFNlYXJjaENvbmQ6IHRoaXMuYWxsU2VhcmNoQ29uZCwgYXV0b1NlYXJjaFZhbDogdGhpcy5hdXRvc2VhcmNoLCBidXR0b25TZWFyY2hEYXRhOiB0aGlzLmJ1dHRvblNlYXJjaERhdGFcbiAgICAgIH1cbiAgICApXG4gICAgLy8gdmFyIGRhdGE6YW55PXtcbiAgICAvLyAgIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLHNlYXJjaDp0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxidXR0b25WYWw6dmFsXG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsJ2RhdGErKysrPT09Jyx2YWwpXG4gIH1cblxuXG4gIC8qKmltYWdlIHZpZXcgbW9kYWwgKi9cbiAgaW1nX21vZGFsX3ZpZXcoaW1nOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oXCJpbWdfbW9kYWxfdmlld1wiLGltZylcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEltYWdlVmlldywge1xuICAgICAgLy8gcGFuZWxDbGFzczogJ2N1c3RvbS1tb2RhbGJveC1pbWFnZS1wcmV2aWV3JyxcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2N1c3RvbS1tb2RhbGJveC1pbWFnZS1wcmV2aWV3J10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgYWxsZGF0YTogaW1nIH1cbiAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlckNvbnRlbnRJbml0KCkgLi4uJyk7XG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3SW5pdCBjYWxsZWQgLi4uICcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3JvdyAhPSBudWxsKSB7XG4gICAgICAgIGZvciAoY29uc3QgZSBpbiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cpIHtcblxuICAgICAgICAgIGNvbnN0IGNyZWQgPSB0aGlzLnVwVG8odGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy4nICsgdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLmtleSksICd0cicpO1xuICAgICAgICAgIGlmIChjcmVkICE9IG51bGwpIGNyZWQuY2xhc3NMaXN0LmFkZCh0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3dbZV0udmFsKTtcbiAgICAgICAgICAvLyBjb25zdCBjcmVkID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVkJykucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkucGFyZW50KCkuYWRkQ2xhc3MoJ2NyZWR0cicpO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNyZWQsICdjcmVkJywgZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgIH0sIDIwMDApO1xuICB9XG5cbiAgLy8gU2VhcmNoIEJhciBUb2dnbGVcbiAgU2VhcmNoQmFyVG9nZ2xlKGZsYWcpIHtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0J1dHRvbkNoYW5nZS5lbWl0KFxuICAgICAge1xuICAgICAgICBhY3Rpb246ICdzZWFyY2hiYXInLCBmbGFnOiBmbGFnXG4gICAgICB9XG4gICAgKVxuICAgIHN3aXRjaCAoZmxhZykge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJUb29sVGlwID0gJ09wZW4gU2VhcmNoIEJhcic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBmYWxzZTpcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJUb29sVGlwID0gJ0Nsb3NlIFNlYXJjaCBCYXInO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB1cFRvKGVsLCB0YWdOYW1lKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHdoaWxlIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFueSBET00gbWV0aG9kcyByZXR1cm4gbnVsbCBpZiB0aGV5IGRvbid0IFxuICAgIC8vIGZpbmQgdGhlIGVsZW1lbnQgdGhleSBhcmUgc2VhcmNoaW5nIGZvclxuICAgIC8vIEl0IHdvdWxkIGJlIE9LIHRvIG9taXQgdGhlIGZvbGxvd2luZyBhbmQganVzdFxuICAgIC8vIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlckNvbnRlbnRDaGVja2VkIGNhbGxlZCAuLi4nKTtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgY2xpY2ttdWx0aXBsZXNlbGVjdG9wdGlvbih2YWxzKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0b3B0aW9uY2xpY2snLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCwgYnRuZGF0YTogdmFscyB9KTtcblxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICB0aGlzLmVycm9ybWcgPSAnJztcbiAgICBjb25zdCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cblxuXG4gIGRhdGVTZWFyY2godmFsOiBhbnksIGl0ZW06IGFueSkge1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLnRzZWFyY2hbdmFsXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnQgZGF0ZVwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5lbmRfZGF0ZSk7XG5cbiAgICAvLyBsZXQgc2QgPSBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCk7XG4gICAgLy8gbGV0IGVkID0gbW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKTtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBjb25zdCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsICsgJy1jb3VudCc7XG5cbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG5cblxuICAgIGlmIChtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpICE9IG51bGwgJiYgbW9tZW50KHRoaXMuc3RhcnRfZGF0ZSkudW5peCgpICE9IG51bGwpIHtcblxuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblxuICAgICAgaWYgKHRoaXMuZW5kX2RhdGUgIT0gbnVsbCAmJiB0aGlzLnN0YXJ0X2RhdGUgIT0gbnVsbCkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCkgKyA4NjM5OTAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXJ0X2RhdGUgIT0gbnVsbCAmJiAodGhpcy5lbmRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuZW5kX2RhdGUubGVuZ3RoID09IDApKSB7XG4gICAgICAgIGNvbmRpdGlvblt2YWxdID0ge1xuICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZW5kX2RhdGUgIT0gbnVsbCAmJiAodGhpcy5zdGFydF9kYXRlID09IG51bGwgfHwgdGhpcy5zdGFydF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCkgKyA4NjM5OTAwMFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGd0ZSwnYWZ0ZXIgKyA4NjM5OTAwMCcsdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRsdGUpXG4gICAgICAvLyB2YXIgZHQ9dGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRsdGUgLSA4NjM5OTAwMDtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kZ3RlLCdhZnRlciAtIDg2Mzk5MDAwJyxkdCApXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCAnZGF0ZVNlYXJjaF9jb25kaXRpb24rKycpO1xuXG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnRzZWFyY2gnLCB0aGlzLnRzZWFyY2gpO1xuICAgICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldICE9ICcnKSB7XG4gICAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYXV0b3NlYXJjaDogYW55ID0ge307XG4gICAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pIHtcbiAgICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgICAgdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoYXV0b3NlYXJjaC4kb3IgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRvciAxJylcbiAgICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlIHNlYXJjaCBjb24uLi4nLCBjb25kaXRpb25vYmosIHRoaXMuZW5kX2RhdGUsIHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cblxuXG4gIHNlbGVjdFNlYXJjaCh2YWx1ZTogYW55LCB0eXBlOiBhbnksIHN0YXR1c3ZhbDogYW55KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3ZhbHVlJywgdHlwZSwgJ3R5cGUnLCBzdGF0dXN2YWwsICdzdGF0dXN2YWwnKVxuXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyW3R5cGUuZmllbGRdID0gKHsgdmFsOiBzdGF0dXN2YWwubmFtZSwgbGFiZWw6IHR5cGUubGFiZWwsIGtleTogdHlwZS5maWVsZCB9KTtcbiAgICBsZXQgdmFsID0gJyc7XG4gICAgaWYgKHRoaXMudHNlYXJjaCAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCkge1xuICAgICAgdmFsID0gdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIC8vIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICAvLyB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vIC8vY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgLy8gbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgLy8gc291cmNlID0ge1xuICAgIC8vICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgLy8gfTtcblxuXG5cblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRzZWFyY2gsICdjenhjeGN6eGMnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gsIHRoaXMuc2VsZWN0c2VhcmNoLCB2YWx1ZSwgdHlwZSk7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgY29uZGl0aW9uW3R5cGUuZmllbGRdID0gdmFsdWU7XG4gICAgLy8gdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3R5cGUuZmllbGRdID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdFNlYXJjaCAnLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG4gIC8vIGZvciBtYW5hZ2luZyBwYWdpbmF0aW9uXG5cbiAgcGFnaW5nKHZhbDogYW55KSB7XG4gICAgLy8gY29uc3QgbHZhbDogYW55ID0gdGhpcy5saW1pdGNvbmR2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5saW1pdGNvbmR2YWwsICdsaW0gdmFsJyk7XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCAhPSBudWxsICYmIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID4gMTAwKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwMDtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1lvdSBjYW4gc2VlIG1heGltdW0gMTAwIHJlY29yZHMgYXQgb25jZSAhJyB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgbWF4cGFnZWNvdW50OiBudW1iZXIgPSBOdW1iZXIodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyAodGhpcy5saW1pdGNvbmR2YWwubGltaXQpKTtcbiAgICBtYXhwYWdlY291bnQgPSB+fihtYXhwYWdlY291bnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm9sZGxpbWl0cmFuZ2UnLCB0aGlzLm9sZGxpbWl0cmFuZ2UsIHRoaXMubGltaXRjb25kdmFsLCB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCwgbWF4cGFnZWNvdW50KTtcbiAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaCh7XG4gICAgLy8gICBza2lwOiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwLFxuICAgIC8vICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgIC8vICAgcGFnZWNvdW50OiB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnRcbiAgICAvLyB9KTtcbiAgICBpZiAodmFsID09IDEpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA8IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA+PSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNraXAgYmxvY2snKTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMikgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodmFsID4gMSkge1xuICAgICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSAxKSB7IHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwOyB9IGVsc2UgeyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDEpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7IH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID4gKG1heHBhZ2Vjb3VudCArIDEpKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSBtYXhwYWdlY291bnQgKyAxO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAxKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwnc3MnLHRoaXMuZGF0YWNvbGxlY3Rpb252YWwsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuXG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gJycpIHtcbiAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRvciAyJylcblxuICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBjb25zdCBzb3VyY2UgPSB7XG4gICAgICBjb25kaXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9LFxuICAgICAgc29ydDoge1xuICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICB9LFxuICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICAvKmxldCBkYXRhOmFueT17XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6dGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfVxuXG4gICAgfSovXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCwncmVzJyk7XG4gICAgICBpZiAodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiB0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdwYWdpbmcnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaiwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHJlc3VsdHM6IHRoaXMucmVzdWx0LnJlc3VsdHMucmVzIH0pO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgICAvLyAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgICAgICAvLyB9XG5cblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyByYW5nZSBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2tpcCA9IHRoaXMubGltaXRjb25kdmFsLnNraXA7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5saW1pdCA9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50ID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vbGRsaW1pdHJhbmdlIGFmdGVyICcsIHRoaXMub2xkbGltaXRyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbyBsZW4nLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoLCB0aGlzLm9sZGxpbWl0cmFuZ2UpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucmV2ZXJzZSgpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2xpY2UoMCwgdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDIpOyBcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSh0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vIHRoaXMucmVmcmVzaGRhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0Y29uZHZhbCwgdGhpcy5vbGRsaW1pdHJhbmdlLCAnbGF2bCBuIG9sZCAnKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IHRoaXMub2xkbGltaXRyYW5nZS5za2lwO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IHRoaXMub2xkbGltaXRyYW5nZS5saW1pdDtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gdGhpcy5vbGRsaW1pdHJhbmdlLnBhZ2Vjb3VudDtcbiAgICAgICAgLy8gaWYgKHZhbCA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCAtPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodmFsID09IC0xKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCArPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gRGF0YSBGb3VuZCBpbiB0aGlzIHJhbmdlICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDogYW55LCBpOiBhbnksIGZpZWxkOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9IG51bGwpIHsgdGhpcy5hdXRvc2VhcmNoW2ZpZWxkXS5zcGxpY2UoaSwgMSk7IH1cbiAgfVxuXG5cbiAgYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQoaXRlbSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQnLCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICBpZiAodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhID09IG51bGwpXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZC5uZXh0KCk7XG4gICAgZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gZWxzZSBibG9jayBvZiBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcpO1xuICAgICAgdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXIubmV4dCgpO1xuICAgIH1cblxuICB9XG5cblxuICBmaWx0ZXJhdXRvdmFsKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJhdXRvdmFsJywgZGF0YSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0pO1xuICAgIGNvbnN0IGF1dG9zZWx2YWwgPSB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gJycpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnZhbCA9IGRhdGEudmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZScsIGUsIGZpZWxkdmFsKVxuICAgICAgICByZXR1cm4gZS5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhdXRvc2VsdmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gZmlsdGVydmFsO1xuICAgIH1cbiAgfVxuICByZXNldGF1dG9jb21wKHZhbDogYW55KSB7XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsLmZpZWxkKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LCBkYXRhOiBhbnksIGl0ZW06IGFueSkge1xuICAgIC8vIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSA9ICcnO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b3NlYXJjaGlucHV0LCAnYXNpJywgZGF0YSwgdmFsdWUsIGl0ZW0pO1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdmFsdWVdID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2gsICdhdXRvc2VhcmNoIDExMzAnKVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsdWUpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIHJlc2V0IGF1dG8gc2VhcmNoIGRhdGEgIVxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuXG5cbiAgdGV4dHNlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksIGl0ZW06IGFueSkge1xuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdID09ICcnKSB7XG4gICAgICBjb25zdCBpbmRleCA9IHRoaXMuc2VhcmNoc3Ryc2Fyci5pbmRleE9mKHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0pO1xuICAgICAgLy8gY29uc29sZS5sb2coaW5kZXgsICdpbmRleCcpO1xuICAgICAgZGVsZXRlIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV07XG4gICAgICAvLyBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgLy8gdGhpcy5zZWFyY2hzdHJzYXJyLnNwbGljZSh2YWx1ZSwgMSk7XG4gICAgICAvLyB9XG4gICAgfSBlbHNlXG4gICAgICB0aGlzLnNlYXJjaHN0cnNhcnJbdmFsdWVdID0gKHsgdmFsOiB0aGlzLnRzZWFyY2hbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICAvLyBjb25zb2xlLmxvZygndGV4dHNlYXJjaGZ1bmN0aW9uJywgdmFsdWUsIGl0ZW0sIHRoaXMuc2VhcmNoc3Ryc2Fycik7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBjb25zdCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGxldCB2YWwgPSAnJztcbiAgICBpZiAodGhpcy50c2VhcmNoICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsKSB7XG4gICAgICB2YWwgPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMSAmJiB7ICRvcjogW3RoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLCB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCldIH0pIHsgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsOyB9XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy8gY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGFkZCBsb2FkZXJcbiAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgLy9jbG9zZSBsb2FkZXJcbiAgICAvLyAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG5cbiAgcmVmcmVzaGRhdGEoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJysrKysnKVxuICAgIHRoaXMuYXV0b3NlYXJjaCA9IFtdO1xuICAgIHRoaXMudHNlYXJjaCA9IFtdO1xuICAgIHRoaXMuc2VsZWN0c2VhcmNoID0gW107XG4gICAgdGhpcy5zdGFydF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLmVuZF9kYXRlID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgIHRoaXMuYWxsU2VhcmNoQ29uZCA9IFtdO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSA9IFtdO1xuICB9XG4gIHJlZnJlc2hhbGxkYXRhKHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICBpZiAodmFsLmZpbHRlcmVkRGF0YSAhPSBudWxsICYmIHZhbC5maWx0ZXJlZERhdGEubGVuZ3RoIDwgdGhpcy5vbGRkYXRhLmxlbmd0aCkge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3JlZnJlc2hkYXRhJ10sXG4gICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlZnJlc2ggc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAvLyBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94JyxcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnIFVwZGF0ZWQhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgfVxuXG5cblxuICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcblxuICAgIHJldHVybiB0aGlzLnNlYXJjaExpc3R2YWwuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlclZhbHVlKSk7XG4gIH1cblxuICBnZXRzdGF0dXModmFsOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codmFsKTtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5zdGF0dXNhcnJ2YWwpIHtcbiAgICAgIGlmICh0aGlzLnN0YXR1c2FycnZhbFtiXS52YWwgPT0gdmFsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0dXNhcnJ2YWxbYl0ubmFtZSk7XG4gICAgfVxuICAgIHJldHVybiAnTi9BJztcbiAgfVxuICBwZGZGbGFnKHZhbDogYW55KSB7XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlID09IG51bGwpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzaGF0dGVyIGJsb2snKTtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHZhbC5zaGF0dGVyYmxva19hZ3JlZW1lbnRfZGF0ZSAhPSBudWxsICYmIHZhbC5hdWRpb2RlYWRsaW5lX2FncmVlbWVudF9kYXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2ggPSB0cnVlO1xuICAgICAgdGhpcy5hdWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlID09IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cbiAgZ3JhcHVybCh2YWw6IGFueSkge1xuICAgIC8vICBmb3IgYWxsIHJvdyBjaGVja2luZ1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbClcbiAgICBpZiAodmFsICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYXJ0ID0gdHJ1ZTtcbiAgICAgIHRoaXMuYXVkMiA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSBmYWxzZTtcbiAgICAgIHRoaXMuYXVkMiA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNoKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1ZCk7XG4gIH1cblxuICBjb3B5VGV4dChyb3c6IGFueSwgdmFsOiBzdHJpbmcpIHtcblxuICAgIGNvbnN0IGZ1bGx1cmwgPSB2YWwgKyAnJyArIHJvdztcbiAgICBjb25zdCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBzZWxCb3gudmFsdWUgPSBmdWxsdXJsO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICBzZWxCb3guZm9jdXMoKTtcbiAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG5cbiAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ0NvcGllZCBTdWNjZXNzZnVsbHkgISEgJyB9XG4gICAgfSk7XG4gIH1cblxuICBvcGVuaW50ZXJuYWxsaW5rKHZhbDogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3ZhbC5yb3V0ZV0pO1xuICB9XG5cblxuICBvcGVuaW50ZXJuYWxsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICBjb25zdCByZGF0YTogYW55ID0gW107XG4gICAgcmRhdGEucHVzaCh2YWwucm91dGUpO1xuICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgIHJkYXRhLnB1c2goZGF0YVt2YWwucGFyYW1bdl1dKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ3JhZGF0JywgcmRhdGEpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKHJkYXRhKTtcbiAgfVxuXG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEodmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvcGVuY3VzdG9tYnV0dG9uYWN0aW9ubG9jYWxkYXRhJyx2YWwsZGF0YSk7XG4gICAgY29uc3QgZGF0YWFyciA9IFtdO1xuICAgIC8vIGRhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB2IGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICBjb25zdCB0ZW1wYXJyID0gW107XG4gICAgICB0ZW1wYXJyLnB1c2godmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgaWYgKHZhbC5kYXRhZmllbGRzW3ZdICE9ICdpbWFnZScgJiYgdmFsLmRhdGFmaWVsZHNbdl0gIT0gJ3ZpZGVvJykge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3MnLHZhbC5kYXRhZmllbGRzW3ZdKTtcbiAgICAgICAgaWYgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9IG51bGwgJiYgdHlwZW9mIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZGYnLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXS50b1N0cmluZygpKTtcbiAgICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNhZmUnLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2godGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnc3MyMicsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICAgIC8vIGVsc2VcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gPT0gJ2ltYWdlJykgeyB0ZW1wYXJyLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgPiA8YnIvPicpOyB9XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gPT0gJ3ZpZGVvJykge1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSAnJykge1xuICAgICAgICAgIGxldCB0ZW1waHRtbDogYW55ID0gKCc8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyAnIGZyYW1lYm9yZGVyPTAgYWxsb3c9YWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPiA8YnIvPicpO1xuICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ3RodG1sJywgdGVtcGh0bWwsIGRhdGFbdmFsLmRhdGFmaWVsZHNdLCBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKCdOL0EnKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBpZih2YWwuZGF0YWZpZWxkc1t2XT09J3ZpZGVvJykgdGVtcGFyci5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArIFwiID4gPGJyLz5cIilcbiAgICAgIGRhdGFhcnIucHVzaCh0ZW1wYXJyKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2xvY2FsIGRhdGEgbScsIGRhdGFhcnIpO1xuICAgIGxldCByZXM6IGFueSA9IGRhdGFhcnI7XG5cbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiByZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gcmVzW2JdWzBdKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCByZXNbYl1bMV0sIHJlc1tiXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IHJlc1tiXTsgfVxuXG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgcmVzID0gcmVzZGF0YTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGFhcnInLGRhdGFhcnIpO1xuICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICB9XG4gICAgcmVzLm1lc3NhZ2UgPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gtYXBpZGF0YScsICdtb2RhbC1sb2NhbGRhdGEnXSxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMgfVxuICAgIH0pO1xuICB9XG5cblxuICBvcGVuY3VzdG9tYnV0dG9uYWN0aW9uYXBpZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhJyx2YWwsZGF0YSk7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICBjb25zdCBsaW5rOiBhbnkgPSB0aGlzLmFwaXVybHZhbCArIHZhbC5lbmRwb2ludDtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHt9O1xuICAgIHNvdXJjZVt2YWwucGFyYW1dID0gZGF0YS5faWQ7XG4gICAgaWYgKHZhbC5vdGhlcnBhcmFtICE9IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgbiBpbiB2YWwub3RoZXJwYXJhbSkge1xuICAgICAgICBzb3VyY2VbdmFsLm90aGVycGFyYW1bbl1dID0gZGF0YVt2YWwub3RoZXJwYXJhbVtuXV07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMubG9hZGVycm93ID0gZGF0YS5faWQ7XG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG5cbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogcmVzdWx0Lm1zZyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXMnLHJlc3VsdCk7XG4gICAgICAgIGxldCByZXNkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKHJlc3VsdC5yZXNbMF0gIT0gbnVsbCkge1xuICAgICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzWzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc2RhdGEgPSByZXN1bHQucmVzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRlbXByZGF0YTogYW55ID0ge307XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhPj4+JywgcmVzZGF0YSk7XG4gICAgICAgIGlmICh2YWwuZGF0YWZpZWxkcyAhPSBudWxsKSB7XG4gICAgICAgICAgZm9yIChjb25zdCBiMSBpbiB2YWwuZGF0YWZpZWxkcykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbC5kYXRhZmllbGRzJywgdmFsLmRhdGFmaWVsZHNbYjFdKTtcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGIyIGluIGRhdGFhcnIpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdiMicsYjIsZGF0YVtiMl0sZGF0YWFycltiMl1bMF0pO1xuICAgICAgICAgICAgLy8gaWYgKGRhdGFhcnJbYjJdWzBdID09IHZhbC5kYXRhZmllbGRzW2IxXSkgcmVzZGF0YWZvcm1vZGFsW2IxXSA9IFtkYXRhYXJyW2IyXVswXSwgZGF0YWFycltiMl1bMV1dO1xuICAgICAgICAgICAgdGVtcHJkYXRhW3ZhbC5kYXRhZmllbGRzW2IxXV0gPSByZXNkYXRhW3ZhbC5kYXRhZmllbGRzW2IxXV07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIH1cbiAgICAgICAgICByZXNkYXRhID0gdGVtcHJkYXRhO1xuXG5cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkYXRhYXJyID0gW107XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ25hbWUnLCdkZWJhc2lzJ10pO1xuICAgICAgICAvLyBkYXRhYXJyLnB1c2goWydkZXNjJywndGVzdCddKTtcbiAgICAgICAgZm9yIChjb25zdCB2IGluIHJlc2RhdGEpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wYXJyID0gW107XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHYpO1xuICAgICAgICAgIGlmICh2ICE9ICdpbWFnZScgJiYgdiAhPSAndmlkZW8nKSB7XG4gICAgICAgICAgICBpZiAocmVzZGF0YVt2XSAhPSBudWxsICYmIHR5cGVvZiAocmVzZGF0YVt2XSkgIT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc3YnLCByZXNkYXRhW3ZdKTtcbiAgICAgICAgICAgICAgaWYgKHJlc2RhdGFbdl0udG9TdHJpbmcoKS5pbmNsdWRlcygnaWZyYW1lJykpIHtcbiAgICAgICAgICAgICAgICB0ZW1wYXJyLnB1c2godGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocmVzZGF0YVt2XSkpO1xuICAgICAgICAgICAgICB9IGVsc2UgeyB0ZW1wYXJyLnB1c2gocmVzZGF0YVt2XSk7IH1cbiAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAodiA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIHJlc2RhdGFbdl0gKyAnID4gPGJyLz4nKTsgfVxuICAgICAgICAgIGlmICh2ID09ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGxldCB0ZW1waHRtbDogYW55ID0gKCc8aWZyYW1lIHdpZHRoPTU2MCBoZWlnaHQ9MzE1IHNyYz1odHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8nICsgcmVzZGF0YVt2XSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgICB0ZW1waHRtbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHRlbXBodG1sKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0ZW1waHRtbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgICAgIGRhdGFhcnIucHVzaCh0ZW1wYXJyKTtcblxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSBkYXRhYXJyW2JdWzBdKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIGRhdGFhcnJbYl1bMV0sIGRhdGFhcnJbYl1bMF1dO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSBkYXRhYXJyW2JdOyB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgICAgICBkYXRhYXJyID0gcmVzZGF0YTtcblxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjIGFwaSBkYXRhICcsIHJlc2RhdGEpO1xuICAgICAgICAvLyBsZXQgcmVzZGF0YWZvcm1vZGFsOiBhbnkgPSB7fTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzZGF0YWZvcm1vZGFsJywgZGF0YWFyciwgZGF0YWFycik7XG4gICAgICAgIGlmICh2YWwucmVmcmVzaGRhdGEgIT0gbnVsbCAmJiB2YWwucmVmcmVzaGRhdGEgPT0gdHJ1ZSkge1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgICAgZGF0YWFyclsnbWVzc2FnZSddID0gdmFsLmhlYWRlcm1lc3NhZ2U7XG4gICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2FwaS1kYXRhJ10sXG4gICAgICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IGRhdGFhcnIgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICB9LCBlcnJvciA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICB9KTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHJldHVybjtcblxuICB9XG5cblxuICBvcGVuZXh0bGlua3dpdGhwYXJhbSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZhbCcsdmFsLGRhdGEpO1xuICAgIGxldCBxdGV4dDogYW55ID0gJyc7XG4gICAgbGV0IGZ1bGxsaW5rOiBhbnkgPSAnJztcbiAgICBmdWxsbGluayA9IHZhbC5saW5rO1xuICAgIGlmICh2YWwucGFyYW10eXBlID09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgcXRleHQgPSB2YWwucGFyYW1bdl0ucSArICc9JyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG4gICAgICAgIGlmIChwYXJzZUludCh2KSA9PSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnPycgKyBxdGV4dDsgfVxuICAgICAgICBpZiAocGFyc2VJbnQodikgIT0gMCkgeyBmdWxsbGluayA9IGZ1bGxsaW5rICsgJyYnICsgcXRleHQ7IH1cbiAgICAgIH1cbiAgICAgIC8vIHZhbC5saW5rPWZ1bGxsaW5rO1xuICAgIH1cbiAgICBpZiAodmFsLnBhcmFtdHlwZSAhPSBudWxsICYmIHZhbC5wYXJhbXR5cGUgPT0gJ2FuZ3VsYXInKSB7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLnBhcmFtKSB7XG4gICAgICAgIC8vIHF0ZXh0ID0gdmFsLnBhcmFtW3ZdLnEgKyBcIj1cIiArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XS5rZXldKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3F0ZXh0JyxxdGV4dCk7XG5cbiAgICAgICAgZnVsbGxpbmsgPSBmdWxsbGluayArICcvJyArIGVuY29kZVVSSShkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG5cbiAgICB9XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIkhlbGxvIGZyb20gc2V0VGltZW91dFwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdsaW5rJyxmdWxsbGluayxkYXRhLHF0ZXh0KTtcbiAgICB9LCAxMCk7XG5cbiAgICB3aW5kb3cub3BlbihmdWxsbGluaywgJ19ibGFuaycpO1xuICB9XG5cblxuICBjbGlja3VybCh2YWw6IGFueSwgdXJsOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gdXJsICsgJycgKyB2YWwuX2lkICsgJycgKyB0aGlzLnBkZl9saW5rX3ZhbDtcbiAgICB3aW5kb3cub3BlbihsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXG4gIGNoZWNrZWRsaXN0KCkge1xuICAgIC8vIHRoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IHNlbGRhdGE6IGFueSA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLm1hcCh4ID0+IHguX2lkKVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrZWRsaXN0JywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWxkYXRhKTtcbiAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZXNlbGVjdGlvbmNoYW5nZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkIH0pO1xuICAgIH0sIDEwMCk7XG5cblxuICB9XG4gIGlzQWxsU2VsZWN0ZWQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnKTtcbiAgICBpZiAodGhpcy5zZWxlY3Rpb24gIT0gbnVsbCAmJiB0aGlzLnNlbGVjdGlvbi5zZWxlY3QpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpc0FsbFNlbGVjdGVkJywgdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoLCB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKTtcbiAgICAgIGNvbnN0IG51bVNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubGVuZ3RoO1xuICAgICAgY29uc3QgbnVtUm93cyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmxlbmd0aDtcbiAgICAgIHJldHVybiBudW1TZWxlY3RlZCA9PT0gbnVtUm93cztcbiAgICB9XG4gIH1cblxuICAvKiogU2VsZWN0cyBhbGwgcm93cyBpZiB0aGV5IGFyZSBub3QgYWxsIHNlbGVjdGVkOyBvdGhlcndpc2UgY2xlYXIgc2VsZWN0aW9uLiAqL1xuICBtYXN0ZXJUb2dnbGUoKSB7XG4gICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xuICAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XG4gICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKHJvdyA9PiB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KSk7XG4gICAgdGhpcy5jaGVja2VkbGlzdCgpO1xuICB9XG5cbiAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXG4gIGNoZWNrYm94TGFiZWwocm93PzogYW55KTogc3RyaW5nIHtcbiAgICBpZiAoIXJvdykge1xuICAgICAgcmV0dXJuIGAke3RoaXMuaXNBbGxTZWxlY3RlZCgpID8gJ3NlbGVjdCcgOiAnZGVzZWxlY3QnfSBhbGxgO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpID8gJ2Rlc2VsZWN0JyA6ICdzZWxlY3QnfSByb3cgJHtyb3cucG9zaXRpb24gKyAxfWA7XG4gIH1cblxuXG4gIGNyZWF0ZURhdGEocG9pbnQ6IGFueSkge1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhwb2ludCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICBkYXRhW2tleS5yZXBsYWNlKC9cXHMvZywgJ18nKV0gPSBwb2ludFtrZXldO1xuICAgIH0pO1xuICAgIHJldHVybiBkYXRhO1xuICB9XG5cbiAgYXBwbHlGaWx0ZXIoZmlsdGVyVmFsdWU6IHN0cmluZykge1xuICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IpIHtcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IuZmlyc3RQYWdlKCk7XG4gICAgfVxuICB9XG4gIC8qYXBwbHlGaWx0ZXIxKGZpbHRlclZhbHVlOiBzdHJpbmcsIHZhbDogYW55KSB7XG4gICAgY29uc29sZS5sb2coZmlsdGVyVmFsdWUpO1xuICAgIGNvbnNvbGUubG9nKHZhbC52YWx1ZSk7XG4gICAgbGV0IHZhbHVlPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHZhbC52YWx1ZSk7XG5cbiAgICB2YWx1ZS5maWx0ZXIgPSBmaWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zb2xlLmxvZyh2YWx1ZSk7XG4gICAgLyEqIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJQcmVkaWNhdGUgPSBmdW5jdGlvbihkYXRhLCBmaWx0ZXI6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgLy8gcmV0dXJuIGRhdGEubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGZpbHRlcik7XG4gICAgfTtcbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9KiEvXG4gIH0qL1xuXG4gIHN0eWxlQ2VsbChjb2xfbmFtZSwgcm93KSB7XG5cbiAgICAvKlxuICAgICBpZiAoY29sX25hbWVbJ2NvbHVtbkRlZiddPT0ncHJvZ3Jlc3MnICYmIHJvd1sncHJvZ3Jlc3MnXT09JzEwMCcpe1xuICAgICByZXR1cm4geydjb2xvcicgOiAncmVkJ31cbiAgICAgfSBlbHNlIHtcbiAgICAgcmV0dXJuIHt9XG4gICAgIH1cbiAgICAgKi9cblxuXG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIC8qKnNob3cgdmlkZW8gbW9kYWwgb24gY2xpY2sgb2YgdGhhbW5haWwgZnVuY3Rpb24gYnkgc291cmF2ICovXG4gIGZldGNodmlkZW8odmlkZW9kYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvZGF0YScsdmlkZW9kYXRhKTtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKFZpZGVvUGxheWVyLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC12aWRlb3BsYXllci1wcmV2aWV3JywgJ3ZpZGVvLW1vZGFsJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHsgcHJldmlld0RhdGE6IHZpZGVvZGF0YSB9XG4gICAgfSk7XG4gIH1cbiAgb3Blbm5vdGVzKHZhbDogYW55KSB7XG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLmxvYWRlcnJvdyA9IHZhbC5faWQ7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLm5vdGVzLmxpc3RlbmRwb2ludCwgdGhpcy5qd3R0b2tlbnZhbCwgeyBpZDogdmFsLl9pZCB9KS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LnJlcywgJ2xpc3Qgbm90ZXMnKTtcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgdGhpcy5sb2FkZXJyb3cgPSBudWxsO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAvLyB0aGlzLmRhdGEubm90ZXN2YWwgPSAnJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdub3RlcycsIHZhbCk7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ25vdGVzLW1vZGFsJ10sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAgICAgbm90ZXM6IHRydWUsIGFwaXVybDogdGhpcy5hcGl1cmx2YWwsXG4gICAgICAgICAgbm90ZWRhdGE6IHRoaXMubGliZGF0YXZhbC5ub3Rlcywgcm93ZGF0YTogdmFsLFxuICAgICAgICAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgICAgIGxpc3RkYXRhOiByZXN1bHQucmVzLFxuICAgICAgICAgIF9zbmFja0JhcjogdGhpcy5fc25hY2tCYXJcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICB2aWV3ZGF0YShkYXRhMTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ2RhdGExICsrKysrKysrJywgZGF0YTEpXG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICBkYXRhID0gZGF0YTE7XG4gICAgY29uc3QgZGF0YTI6IGFueSA9IFtdO1xuICAgIGxldCBoZWFkZXJEYXRhOmFueSA9IHt9O1xuXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlciAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlci5oZWFkZXIgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIuaGVhZGVyICE9ICcnKSB7XG4gICAgICBjb25zb2xlLmxvZygnPT0gKysrKysrKysnLCB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIpXG4gICAgICBoZWFkZXJEYXRhID0gdGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyO1xuICAgIH1cblxuICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcbiAgICAgIGNvbnN0IGZsYWdrOiBhbnkgPSAnJztcbiAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IHRydWUpIHsgZGF0YVtrZXldID0gJ1llcyc7IH1cbiAgICAgICAgICBpZiAoZGF0YVtrZXldID09IGZhbHNlKSB7IGRhdGFba2V5XSA9ICdObyc7IH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoa2V5ID09ICdpbWFnZScpIHtcbiAgICAgICAgICBkYXRhW2tleSArICc6J10gPSAnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFba2V5XSArICc+PGJyLz4nO1xuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV0pID09ICdvYmplY3QnKSB7XG5cbiAgICAgICAgfVxuXG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNvbnN0IHRlbXBkYXRhOiBhbnkgPSBbXTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gZGF0YVtrZXldKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHAgaW4gdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgPT0gJ2ltYWdlJykge1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGltZ3ZhbDphbnk9dGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0uZmlsZXVybCtkYXRhW2tleV1ba107XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltZ3ZhbCcpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpbWd2YWwpOz1cIitcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhW2tleV1ba10ucmVwbGFjZSgvJy9nLCAnJykpO1xuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW2tleV1ba10gKyAnPjxici8+Jyk7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxzcGFuPlwiK2RhdGFba2V5XVtrXStcIjwvc3Bhbj48YnIvPlwiKVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ID09IGtleSAmJiB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS52YWx1ZSAhPSAnaW1hZ2UnKSB7XG4gICAgICAgICAgICAgICAgLy8gdGVtcGRhdGEucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiK2RhdGFba2V5XVtrXStcIj48YnIvPlwiKVxuICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxzcGFuPicgKyBkYXRhW2tleV1ba10gKyAnPC9zcGFuPjxici8+Jyk7XG5cblxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAodGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0ua2V5ICE9IGtleSkge1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIChkYXRhW2tleV1ba10pID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG9iamsgaW4gZGF0YVtrZXldW2tdKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBkYXRhLnB1c2goJzxzcGFuPicgKyBvYmprICsgJyA6ICcgKyBkYXRhW2tleV1ba11bb2Jqa10gKyAnPC9zcGFuPjxici8+Jyk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gdGVtcGRhdGE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IG4gaW4gZGF0YSkge1xuICAgICAgaWYgKGRhdGFbbl0gIT0gbnVsbCAmJiBkYXRhW25dICE9ICcnKSB7XG4gICAgICAgIGRhdGEyW25dID0gZGF0YVtuXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IHYgaW4gdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbCkge1xuICAgICAgLy8gZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV09Jyc7XG4gICAgICBkZWxldGUgZGF0YTJbdGhpcy5kZXRhaWxfc2tpcF9hcnJheXZhbFt2XV07XG4gICAgfVxuICAgIGxldCByZXMgPSBPYmplY3QuZW50cmllcyhkYXRhMik7XG4gICAgLy8gY29uc29sZS5sb2coJ3ZpZXcgZGF0YScscmVzKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZS5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCByZXNkYXRhOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYiBpbiByZXMpIHtcbiAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkgPT0gcmVzW2JdWzBdKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgIHJlc2RhdGFbYl0gPSBbdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10udmFsLCByZXNbYl1bMV0sIHJlc1tiXVswXV07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IHJlc1tiXTsgfVxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG1heEhlaWdodDogJzEwMDB2aCcsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZXRhaWwtdmlldyddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyAsaGVhZGVyRGF0YTpoZWFkZXJEYXRhfVxuICAgIH0pO1xuXG4gIH1cbiAgLy8gcGFyZW50LWJvdHRvbS1jbGFzc1xuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgcGFuZWxDbGFzczogWydjdXN0b20tYm90dG9tc2hlZXQnLCAncGFyZW50LWJvdHRvbS1jbGFzcyddLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50LCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm9sZGRhdGFbY10uX2lkID09IGRhdGEuX2lkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IGRhdGEuc3RhdHVzO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIC8vIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdtYW5hZ2Utc3RhdHVzJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBmb3IgdHJlZSB2aWV3IGluIG1vZGFsXG4gIGN1c3RvbWJ1dHRvbmxpc3RuZXIocm93OiBhbnksIGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2N1c3RvbWJ1dHRvbmxpc3RuZXInLCByb3csIGN1c3RvbWJ1dHRvbik7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7XG4gICAgICBhY3Rpb246ICdjdXN0b21idXR0b25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBjdXN0b21idXR0b25jbGljazoge1xuICAgICAgICBkYXRhOiByb3csIGJ0bmluZm86IGN1c3RvbWJ1dHRvblxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cblxuICBjdXN0b21idXR0b25mdW5jKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7ICAgIC8vIHJvdyBkYXRhXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jdXN0b21idXR0b252YWwpOyAgICAvLyBvYmplY3QgZnJvbSB3aGVyZSB0aGUgbGlicmFyeSBoYXMgYmVlbiB1c2VkXG4gICAgbGV0IHVuc2FmZXVybDogYW55ID0gdGhpcy5jdXN0b21idXR0b252YWwudXJsOyAgIC8vIGlmcmFtZSB1cmxcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzKSB7XG4gICAgICB1bnNhZmV1cmwgPSB1bnNhZmV1cmwgKyAnLycgKyBkYXRhW3RoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkc1tiXV07XG4gICAgfVxuICAgIHVuc2FmZXVybCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpOyAgIC8vIGZvciBzYW5pdGl6aW5nIHRoZSB1cmwgZm9yIHNlY3VyaXR5LCBvdGhlcndpc2UgaXQgd29uJ3QgYmUgYWJsZSB0byBzaG93IHRoZSBwYWdlIGluIGlmcmFtZSwgaGVuY2UgbW9kYWxcblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywgeyAgICAgICAvLyBmb3Igb3BlbmluZyB0aGUgbW9kYWxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgcGFuZWxDbGFzczogJ2N1c3RvbS1kYXRhLW1vZGFsJyxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiBbeyBkYXRhLCBjdXN0b21kYXRhOiB1bnNhZmV1cmwgfV0gfVxuICAgIH0pO1xuXG5cbiAgfVxuXG5cblxuICBtYW5hZ2VzdGF0dXNtdWx0aXBsZSgpIHtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy8gZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICBjb25zdCBuZXdzdGF0dXM6IGFueSA9IHJlc3VsdC52YWw7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50bWFueSwgaWRzLCByZXN1bHQudmFsLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZih0aGlzLm9sZGRhdGFbY10uX2lkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IG5ld3N0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICAvLyB0aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3Rvb2dsZS1tYW55J10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRlbGV0ZW11bHRpcGxlKCkge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW11bHRpcGxlJ10sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZXNlIHJlY29yZHM/IFRoaXMgcHJvY2VzcyBjYW4gbm90IGJlIHVuZG9uZS4nLFxuICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuXG4gICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVNYW55RGF0YSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC5kZWxldGVlbmRwb2ludG1hbnksIGlkcywgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gaWRzKSB7XG4gICAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkKHMpICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuICB9XG5cblxuICBkZWxldGVkYXRhKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIC8vIGFsZXJ0KDUpO1xuICAgIC8vIHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwrdGhpcy5kZWxldGVlbmRwb2ludHZhbCxkYXRhLHRoaXMuand0dG9rZW52YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhIDg4OSAtLS0nKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZygnand0dG9rZW52YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsKTtcblxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtc2luZ2xlJ10sXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyByZWNvcmQ/IFRoaXMgcHJvY2VzcyBjYW4gbm90IGJlIHVuZG9uZS4nLFxuICAgICAgICB0eXBlOiAnY29uZmlybSdcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU9uZURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsLCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBkYXRhLl9pZCk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnZGVsZXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLXNpbmdsZSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgICAgZGF0YTogcmVzdWx0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBlZGl0ZGF0YShkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5lZGl0cm91dGV2YWwsIGRhdGEuX2lkXSk7XG4gIH1cblxuXG4gIHNvcnR0YWJsZShmaWVsZDogYW55LCB0eXBlOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhmaWVsZCwgdHlwZSlcbiAgICB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC50eXBlID0gdHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cblxuXG4gIGFsbFNlYXJjaCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhpdFwiKTtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBjb25zdCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsICsgJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy50c2VhcmNoW3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hzdHJzYXJyLCAndGhpcy5zZWFyY2hzdHJzYXJyJyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gsICdzZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoJyk7XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbCBzZWFyY2ggdGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoW2ldKTtcbiAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcblxuICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICBsZXQgdGVtcGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG5cbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGVtcGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgdGVtcGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRhbmQgMycpXG4gICAgICAgIC8vIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuXG4gICAgICAgIHRlbXBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcblxuICAgICAgfVxuICAgICAgaWYgKGF1dG9zZWFyY2guJGFuZCA9PSBudWxsKSB7IGF1dG9zZWFyY2guJGFuZCA9IFtdOyB9XG4gICAgICBhdXRvc2VhcmNoLiRhbmQucHVzaCh0ZW1wYXV0b3NlYXJjaCk7XG5cbiAgICAgIC8vIGF1dG9zZWFyY2ggPSBPYmplY3QuYXNzaWduKHt9LHRlbXBhdXRvc2VhcmNoLGF1dG9zZWFyY2gpO1xuICAgICAgbGV0IGF1dG9jb3VudDogYW55O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCA9PSBudWxsIHx8IHR5cGVvZiBPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXV0b2NvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dG9jb3VudCA9IE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9jb3VudCwgJ2F1dG9zZWFyY2gubGVuZ3RoKysrKycsIHRlbXBhdXRvc2VhcmNoLE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCxPYmplY3Qua2V5cyhhdXRvc2VhcmNoKSlcblxuICAgICAgLy8gYXV0b3NlYXJjaFthdXRvY291bnRdID0gdGVtcGF1dG9zZWFyY2g7XG5cbiAgICB9XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coJ2F1dG9zIHFxKysnLCBhdXRvc2VhcmNoLCB0aGlzLmF1dG9zZWFyY2gpO1xuXG5cbiAgICAvLyBidXR0b24gU2VhcmNoIERhdGFcblxuICAgIGNvbnN0IGJ1dHRvbnNlYXJjaDogYW55ID0ge307XG4gICAgZm9yIChsZXQgYnMgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZSkge1xuICAgICAgICBjb25zdCBidDogYW55ID0ge307XG4gICAgICAgIGJ0W3RoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10uZmllbGRdID0gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZVtrXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYnV0dG9uc2VhcmNoLiRvciA9PSBudWxsKSB7IGJ1dHRvbnNlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhidCwnYnQnLGJzLCdicycpXG4gICAgICAgIGJ1dHRvbnNlYXJjaC4kb3IucHVzaChidCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvbnNlYXJjaCcpXG5cblxuXG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLmxpbWl0Y29uZHZhbDtcblxuICAgIGxldCBjb25kaXRpb25vYmo6IG9iamVjdCA9IHt9O1xuXG4gICAgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgYnV0dG9uc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgJ3NlbGVjdFNlYXJjaF9jb25kaXRpb24nKVxuXG4gICAgdGhpcy5hbGxTZWFyY2hDb25kID0gY29uZGl0aW9ub2JqO1xuXG4gICAgLy8gY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmogJiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbjtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBmb3IgKGxldCBiIGluIGNvbmRpdGlvbm9iaikge1xuICAgIC8vICAgLy8gaWYoY29uZGl0aW9ub2JqW2JdKVxuICAgIC8vICAgZm9yIChsZXQgYyBpbiB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbikge1xuICAgIC8vICAgICBpZiAoYyA9PSBiKSB7XG4gICAgLy8gICAgICAgLy8gY29uZGl0aW9ub2JqW2JdPXt9O1xuICAgIC8vICAgICAgIGxldCB0b3RhbGNvbmQ6IGFueTtcbiAgICAvLyAgICAgICBpZiAodHlwZW9mIChjb25kaXRpb25vYmpbYl0pICE9ICdvYmplY3QnKVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHsgJGVxOiBjb25kaXRpb25vYmpbYl0gfSk7XG4gICAgLy8gICAgICAgZWxzZVxuICAgIC8vICAgICAgICAgdG90YWxjb25kID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIGNvbmRpdGlvbm9ialtiXSk7XG5cbiAgICAvLyAgICAgICBjb25zb2xlLmxvZygnaW4gaWYgYmxrJywgYywgYiwgY29uZGl0aW9ub2JqW2JdLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXSwgdG90YWxjb25kKTtcbiAgICAvLyAgICAgICBjb25kaXRpb25vYmpbYl0gPSB0b3RhbGNvbmQ7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2NdID0gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY107XG5cbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgJ2NvbmRpdGlvbm9iaicsIGNvbmRpdGlvbm9iaiwgJ3RoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uJywgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pO1xuICAgIC8vIGNvbmRpdGlvbm9iaiA9IGNvbmRpdGlvbm9iai5jb25jYXQodGhpcy5saWJkYXRhLmJhc2Vjb25kaXRpb24pO1xuXG4gICAgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogMFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG5cbiAgICAvLyBjb25zb2xlLmxvZygnY29uLi4uJywgY29uZGl0aW9ub2JqLCAnZWQnLCB0aGlzLmVuZF9kYXRlLCAnbCcsIE9iamVjdC5rZXlzKGNvbmRpdGlvbm9iaikubGVuZ3RoKTtcbiAgICBpZiAoT2JqZWN0LmtleXMoY29uZGl0aW9ub2JqKS5sZW5ndGggPCAwKSB7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBTZWFyY2ggY3JpdGVyaWEgc2VsZWN0ZWQgISEgJyB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcblxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAvLyByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgIGFjdGlvbjogJ3NlYXJjaCcsIFxuICAgICAgICAgICAgICAgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCxcbiAgICAgICAgICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgICAgICAgICAgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIFxuICAgICAgICAgICAgICAgcmVzOiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoLCBcbiAgICAgICAgICAgICAgIGFsbFNlYXJjaENvbmQ6IHRoaXMuYWxsU2VhcmNoQ29uZCwgXG4gICAgICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICAgICBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxcbiAgICAgICAgICAgICAgIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IFxuICAgICAgICAgICAgYWN0aW9uOiAnc2VhcmNoJywgXG4gICAgICAgICAgICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBcbiAgICAgICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLCBcbiAgICAgICAgICAgIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBcbiAgICAgICAgICAgIHJlczogcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCxcbiAgICAgICAgICAgIGFsbFNlYXJjaENvbmQ6IHRoaXMuYWxsU2VhcmNoQ29uZCwgXG4gICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxcbiAgICAgICAgICAgIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIFxuICAgICAgICAgICAgZmxhZzogJ25vX3JlY29yZCcgXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gdGhpcy5yZXNjb3VudCA9IDA7IFxuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSBmYWxzZTtcbiAgfVxuXG4gIGdldHR5cGVvZih2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgKHZhbCk7XG4gIH1cblxuXG4gIC8vIG9wZW4gQm90dG9tIFNoZWV0IEZvciBTZWFyY2hcbiAgb3BlbkJvdHRvbVNoZWV0Rm9yU2VhcmNoKGRhdGE6IGFueSwgaW5kZXgpIHtcbiAgICB2YXIgY291bnQgPSAxO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICdvcGVuQm90dG9tU2hlZXRGb3JTZWFyY2gnLCBpbmRleClcbiAgICBjb25zdCBicyA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWxGb3JCdXR0b21TZWFyY2gsIHsgcGFuZWxDbGFzczogJ2J1dHRvbi1zZWFyY2gtbW9kYWwnLCBkYXRhOiB7IGl0ZW1zOiBkYXRhIH0gfSk7XG4gICAgYnMuZGlzYWJsZUNsb3NlID0gdHJ1ZTtcbiAgICBicy5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0KysrKz09PT0gZGF0YScsIGRhdGEpXG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwgJiYgcmVzdWx0LmZsYWcgPT0gJ3llcycpIHtcbiAgICAgICAgY291bnQgPSAxO1xuICAgICAgICB2YXIgc2VhcmNoRmxhZyA9IDA7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAncmVzdWx0KysrKz09PT0/PycsIGluZGV4KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25TZWFyY2hEYXRhIDEnKVxuXG4gICAgICAgIGlmICh0aGlzLmJ1dHRvblNlYXJjaERhdGEubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5idXR0b25TZWFyY2hEYXRhW2ldLmZpZWxkID09IHJlc3VsdC5pdGVtcy5maWVsZCkge1xuICAgICAgICAgICAgICBjb3VudCA9IDI7XG4gICAgICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCd0cnVlICsrKyBjb3VudCcsIGNvdW50KVxuICAgICAgICAgICAgICBmb3IgKGxldCBqIGluIHJlc3VsdC5zZWxlY3RlZERhdGEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGFbaV0udmFsdWUucHVzaChyZXN1bHQuc2VsZWN0ZWREYXRhW2pdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoc2VhcmNoRmxhZyA9PSAxKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRmxhZywgJ3NlYXJjaEZsYWcgMicpXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb3VudCA9IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY291bnQsICdjb3VudCBlbHNlIGNoZWNrJylcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvblNlYXJjaERhdGEgMicpXG5cbiAgICAgICAgICBpZiAoY291bnQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLnB1c2goeyB2YWx1ZTogcmVzdWx0LnNlbGVjdGVkRGF0YSwga2V5OiBpbmRleCwgZmllbGQ6IHJlc3VsdC5pdGVtcy5maWVsZCB9KTtcbiAgICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IHZhbHVlOiByZXN1bHQuc2VsZWN0ZWREYXRhLCBrZXk6IGluZGV4LCBmaWVsZDogcmVzdWx0Lml0ZW1zLmZpZWxkIH0pO1xuICAgICAgICAgIHNlYXJjaEZsYWcgPSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coc2VhcmNoRmxhZywgJ3NlYXJjaEZsYWcgMScpXG5cbiAgICAgICAgaWYgKHNlYXJjaEZsYWcgPT0gMSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDInKVxuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cblxuXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG5cbiAgLy8gY2xlYXIgQnV0dG9uIFNlYXJjaCBDaGlwcyAgZGF0YVxuICBjbGVhckJ1dHRvblNlYXJjaENoaXBzKGJzLCBpLCBpdGVtLCBqKSB7XG4gICAgLy8gY29uc29sZS5sb2coYnMsIGksIGl0ZW0sIGosICdicyxpLGl0ZW0saicpO1xuICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtpXS52YWx1ZS5zcGxpY2UoaiwgMSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5idXR0b25TZWFyY2hEYXRhLCAnYnV0dG9uU2VhcmNoRGF0YSBzcGxpY2UnKVxuXG4gICAgLy8gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2JzLmtleV0udmFsdWVzXG4gICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQgPT0gYnMuZmllbGQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXSlcbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlLnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCd0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gnKVxuICB9XG5cblxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gc3RhcnQgKi9cbiAgYXJ0aXN0eHBQcmV2aWV3KHNpbmdsZURhdGE6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSAnaHR0cDovL2RldmVsb3BtZW50YXBpLmF1ZGlvZGVhZGxpbmUuY29tOjMwOTAvJyArICdkYXRhbGlzdCc7XG4gICAgLyoqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKiovXG4gICAgY29uc3QgZGF0YTogYW55ID0geyBzb3VyY2U6ICdibG9ja2NoYWludXNlcl92aWV3JywgY29uZGl0aW9uOiB7IHBvc3RzX2lkX29iamVjdDogc2luZ2xlRGF0YS5faWQgfSwgdG9rZW46IHRoaXMuand0dG9rZW52YWwgfTtcbiAgICAvKioqKioqKiogbm90IGNvbXBsZXRlZCAqKioqKi9cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdERhdGEobGluaywgZGF0YSkuc3Vic2NyaWJlKHJlc3BvbnNlID0+IHtcbiAgICAgIGNvbnN0IHJlc3RsdDogYW55ID0gcmVzcG9uc2U7XG4gICAgICAvKiBvcGVuIGRpYWxvZyAqL1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1heHAnXSxcbiAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgIGRhdGE6IHsgcHJldmlldzogdHJ1ZSwgcHJldmlld0RhdGE6IHJlc3RsdCB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGJ1dHRvbiBjbGljayBmdW5jdGlvbiBlbmQgKi9cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjb25maXJtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICdjb25maXJtLWRpYWxvZy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29uZmlybWRpYWxvZyB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLFxuICAgIC8vIHB1YmxpYyBub3Rlc3ZhbDphbnk9bnVsbCxcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8Q29uZmlybWRpYWxvZz4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnksIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcikge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWIgZGF0YSBpbiBtb2RhbCAnLCB0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdGhpcy5kYXRhLnJvd2RhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLmJsb2d0aXRsZSk7XG4gICAgdGhpcy5kYXRhLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGF0YS5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuZGF0YS5sb2FkZXJ2YWx1ZSA9IDUwO1xuICAgIHRoaXMuZGF0YS5idWZmZXJWYWx1ZSA9IDc2O1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgZGVsZXRlbm90ZShpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICBpZDogdGhpcy5kYXRhLnJvd2RhdGEuX2lkLFxuICAgICAgaW5kZXhcbiAgICAgIC8vIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgIC8vIHVzZXI6IHRoaXMuZGF0YS5ub3RlZGF0YS51c2VyLFxuICAgIH07XG4gICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gaW5kZXg7XG4gICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuZGVsZXRlZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgLy8gdGhpcy5kYXRhLmxpc3RkYXRhLnB1c2goeyB1c2VyaWQ6IHRoaXMuZGF0YS5ub3RlZGF0YS5jdXJyZW50dXNlcmZ1bGxuYW1lLCBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBudWxsO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICB9KTtcbiAgICAvLyB9XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5kYXRhLmFwaXVybCArIHRoaXMuZGF0YS5ub3RlZGF0YS5hZGRlbmRwb2ludCwgdGhpcy5kYXRhLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdhZGQgbm90ZXMnKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5saXN0ZGF0YSA9PSBudWxsKSB7IHRoaXMuZGF0YS5saXN0ZGF0YSA9IFtdOyB9XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnVuc2hpZnQoeyBfaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCwgbm90ZXM6IHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlciwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0gfSk7XG4gICAgICAgICAgdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcsdGhpcy5kYXRhLmxpc3RkYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdibGFuayBub3RlcycpO1xuICAgICAgdGhpcy5kYXRhLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOb3RlcyBjYW5cXCd0IGJlIGJsYW5rICEhICcgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YSkge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG5cblxuLy8gYnV0dG9uLXNlYXJjaC1Nb2RhbFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXNlYXJjaC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXNlYXJjaC1tb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb3JCdXR0b21TZWFyY2gge1xuXG4gIHB1YmxpYyBidXR0b25TZWFyY2hEYXRhOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hWYWw6IGFueSA9ICcnO1xuICBwdWJsaWMgYWxsQnV0dG9uRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBsb2FkaW5nX2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGVycm1zZzogYW55ID0gJyc7XG4gIHB1YmxpYyBtYXRDaGlwRGF0YTogYW55ID0gW11cbiAgICA7XG4gIHB1YmxpYyBtYXRBdXRvc2VhcmNoRGF0YTogYW55ID0gW107XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm5vdHRvUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxGb3JCdXR0b21TZWFyY2g+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImJvdHRvbS1zaGVldC1zZWFyY2hcIiwgZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0ge307XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gZGF0YTtcbiAgICB0aGlzLmFsbEJ1dHRvbkRhdGEgPSBkYXRhLml0ZW1zLnZhbHVlO1xuICB9XG5cbiAgY2hvb3NlQ2hpcEl0ZW0oZGF0YSwgaSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICc/P2RhdGEnKVxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIC8vIHN1Ym1pdCBcbiAgc2VhcmNoQnlJdGVtKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWREYXRhKVxuICAgIHRoaXMuZGF0YS5mbGFnID0gJ3llcyc7XG4gICAgdGhpcy5kYXRhLnNlbGVjdGVkRGF0YSA9IHRoaXMuc2VsZWN0ZWREYXRhO1xuICAgIC8vIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlbW92ZSh2YWwsIGkpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnB1c2godmFsKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gdGhpcy5hbGxCdXR0b25EYXRhO1xuXG4gIH1cblxuICBzZWFyY2hCeUtleXdvcmQodmFsdWUpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaFZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IHRydWU7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEudXJsICsgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEuZW5kcG9pbnQ7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNlYXJjaF9zdHJcIjogdmFsdWUsXG4gICAgICAgIFwibGltaXRcIjogNTBcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RTZWFyY2gxKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXM7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG5cbiAgICAgICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcy5zbGljZSgwLCA1MCk7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCcsIHRoaXMubG9hZGluZ19mbGFnKVxuICAgICAgICAgIHRoaXMubWF0QXV0b3NlYXJjaERhdGEgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJybXNnID0gXCJQbGVhc2UgRW50ZXIgS2V5d29yZHNcIjtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRhdGEuZmxhZyA9ICdubyc7XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcblxuICB9XG5cblxufVxuXG5cblxuLyoqbGlzdGluZyB2aWRlbyBwbGF5ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZGVvcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICd2aWRlb3BsYXllci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvcGxheWVyTW9kYWwnLGRhdGEucHJldmlld0RhdGEudmlkZW8pO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyBJbWFnZSBWaWV3ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1nX21vZGFsX3ZpZXcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyB7XG5cbiAgLy8gcHVibGljIGRhdGE6YW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2VWaWV3TW9kYWwnLCBkYXRhKTtcbiAgfVxuICBhZGRub3RlcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nJywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrYmFyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==