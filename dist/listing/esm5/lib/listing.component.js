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
    // searchResult$: Observable<SearchResult[]>;
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
            console.log(this.sortdataval, 'sortdataval');
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
            this.libdataval = [];
            this.libdataval = libdataval;
            // console.log('libdataval',this.libdataval);
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
            console.log(this.customButtonFlagVal, 'customButtonFlagVal');
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
            var tt = { columnDef: "" + coldef_list[i], header: "" + header_list[i], cell: (/**
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
                    if (_this.search_settingsval.selectsearch[sl].value != null) {
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
                    if (_this.search_settingsval.textsearch[sl].value != null) {
                        _this.tsearch[_this.search_settingsval.textsearch[sl].field] =
                            _this.search_settingsval.textsearch[sl].value;
                        _this.initiateSearch = true;
                        // console.log(this.initiateSearch, 'initiateSearch text')
                    }
                }
            }
            if (_this.search_settingsval.search != null) {
                for (var ats in _this.search_settingsval.search) {
                    if (_this.search_settingsval.search[ats].value != null && _this.search_settingsval.search[ats].value.length > 0) {
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
            if (_this.search_settingsval.datesearch != null && _this.search_settingsval.datesearch[0].value != null) {
                _this.start_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$gte)).format("YYYY-DD-MM").toString();
                _this.end_date = moment(new Date(_this.search_settingsval.datesearch[0].value.$lte)).format("YYYY-DD-MM").toString();
                _this.dateSearch_condition[_this.search_settingsval.datesearch[0].field] = _this.search_settingsval.datesearch[0].value;
            }
            // console.log(this.search_settingsval, 'search_settingsval', this.dateSearch_condition)
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
            limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, searchdata: this.search_settingsval, buttondata: val, allSearchCond: this.allSearchCond, autoSearchVal: this.autosearch
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
        switch (flag) {
            case true:
                this.searchBarFlag = false;
                break;
            case false:
                this.searchBarFlag = true;
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
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
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
            data: { isconfirmation: false, data: res }
        });
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.managestatus = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        var _this = this;
        /** @type {?} */
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: 'custom-bottomsheet', data: { items: this.statusarrval } });
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
            for (var m in this.autosearch[b]) {
                /** @type {?} */
                var tv = {};
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
        this.limitcondval.pagecount = 1;
        this.limitcondval.skip = 0;
        this.oldlimitrange = this.limitcondval;
        /** @type {?} */
        var conditionobj = {};
        conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
                    _this.onLiblistingChange.emit({ action: 'search', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval });
                    _this.dataSource = new MatTableDataSource(result.results.res);
                    _this._snackBar.openFromComponent(SnackbarComponent, {
                        duration: 2000,
                        data: { errormessage: 'New Search of data loaded' }
                    });
                }
                else {
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
                    template: "<div class=\"container\">\n    <!-- <div>{{testvalue|customdata:\"Mr.\":\"the great\"}}</div> -->\n    <mat-card>\n\n        <div class=\"searchiconcls\" (click)=\"SearchBarToggle(searchBarFlag)\">\n            <span class=\"material-icons\">\n                search\n            </span>\n        </div>\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n            <mat-toolbar-row class=\"searchbar\" *ngIf=\"rescount>0\">\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    <!-- <span>dddddd</span> -->\n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\" autocomplete=\"off\"\n                                placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- use for refresh all data -->\n                <span class=\"search_class\">\n                    <ng-container class=\"refresh\">\n                        <i (click)=\"refreshdata()\" class=\"material-icons cursor\">\n                            autorenew\n                        </i>\n                    </ng-container>\n                    <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                    <ng-container class=\"refresh\">\n                        <button mat-raised-button color=\"primary\" class=\"add_button\"\n                            (click)=\"allSearch()\">Search</button>\n                    </ng-container> <br><br>\n\n                    <!--custom buttons -->\n                    <ng-container class=\"refresh\" *ngIf=\"customButtonFlagVal?.flag == true\" class=\"custombuttons\">\n                        <div *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\" class=\"customButtoncls\">\n                            <button mat-raised-button color=\"primary\" class=\"add_custom_button{{i}}\" type=\"{{bt.type}}\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </div>\n                    </ng-container>\n\n                </span>\n\n\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" mat-raised-button\n                    (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\" mat-raised-button\n                    (click)=\"managestatusmultiple()\"> Update Status </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" mat-raised-button (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n                                <span [innerHtml]=\"column.header\"></span>\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n\n                            </span>\n\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <!-- loader -->\n                            <section class=\"example-section example-section-button-1 \">\n                                <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \" class=\"example-margin \"\n                                    [color]=\"color \" [mode]=\"mode \" [value]=\"value \" [bufferValue]=\"bufferValue \">\n                                </mat-progress-bar>\n                            </section>\n                            <!-- note block -->\n                            <ng-container *ngIf=\"libdataval.notes!=null \">\n                                <button mat-raised-button color=\"primary\" class=\"notebtncls\" (click)=\"opennotes(row) \">\n                                    <span class=\"notelabelc\"> {{libdataval.notes.label}}</span>\n                                    <span class=\"notebracket1\">(</span>\n                                    <span class=\"notecountc\"> {{row.notescount}}</span>\n\n                                    <span class=\"notebracket2\">)</span>\n                                </button>\n                            </ng-container>\n                            <!--custom buttions block -->\n                            <ng-container\n                                *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                <ng-container *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                    <section class=\"custombutton{{cb}}\">\n\n\n                                        <ng-container\n                                            *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                            <!-- ss {{row['status']}} -->\n                                            <button mat-raised-button color=\"primary\"\n                                                (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label}}</button>\n                                        </ng-container>\n\n                                        <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                    <button mat-raised-button\n                                                        color=\"primary\">{{custombutton.label}}</button>\n                                                </a>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallink(custombutton)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                            <ng-container\n                                                *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label}}</button>\n\n                                            </ng-container>\n\n                                        </ng-container>\n                                        <ng-container *ngIf=\"custombutton.type=='action'\">\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n                                            <ng-container\n                                                *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                <button mat-raised-button color=\"primary\"\n                                                    (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label}}</button>\n                                            </ng-container>\n\n                                        </ng-container>\n                                    </section>\n\n                                </ng-container>\n                            </ng-container>\n                            <span *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                    class=\"cursor\" (click)=\"editdata(row)\">\n                                    <i class=\"material-icons\">\n                                        edit\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                    class=\"cursor\" (click)=\"deletedata(row)\">\n                                    <i class=\"material-icons\">\n                                        delete_outline\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                    class=\"cursor\" (click)=\"viewdata(row)\">\n                                    <i class=\"material-icons\">\n                                        remove_red_eye\n                                    </i>\n                                </span>\n\n                                <!--For modern browsers-->\n                                <span class=\"cursor\"\n                                    *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                    (click)=\"managestatus(row)\">\n                                    <i class=\"material-icons\">\n                                        toggle_off\n                                    </i>\n                                </span>\n                                <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                    (click)=\"custombuttonfunc(row)\">\n                                    <i class=\"material-icons treeclass\">\n                                        toggle_off\n                                    </i>\n                                </span>\n\n                                <!-- artistxp preview start -->\n                                <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\" (click)=\"artistxpPreview(row)\">\n                                    <i class=\"material-icons\">perm_media</i>\n                                </span>\n                                <!-- artistxp preview end -->\n\n                            </span>\n\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"=pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.pagecount\" type=\"number\" (keyup)=\"paging(10)\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1)\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1)\">\n                        skip_next\n                    </span>\n                </span>\n            </section>\n\n\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n\n        <!-- <mat-paginator class=\"paginator\" [pageSizeOptions]=\"[5,10, 20, 50,100]\" showFirstLastButtons></mat-paginator>-->\n        <!--<mat-spinner *ngIf=\"loading == true\" ></mat-spinner>-->\n\n\n\n        <!-- <form [formGroup]=\"stateForm\">\n      <mat-form-field>\n        <input type=\"text\" matInput placeholder=\"States Group\" formControlName=\"stateGroup\" required [matAutocomplete]=\"autoGroup\">\n        <mat-autocomplete #autoGroup=\"matAutocomplete\">\n          <mat-optgroup *ngFor=\"let group of stateGroupOptions | async\" [label]=\"group.letter\">\n            <mat-option *ngFor=\"let name of group.names\" [value]=\"name\">\n              {{name}}\n            </mat-option>\n          </mat-optgroup>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>-->\n\n        <!--<form class=\"example-form\">\n      <mat-form-field class=\"example-full-width\">\n        <input type=\"text\" placeholder=\"Select state\" aria-label=\"Number\" matInput [formControl]=\"myControl\" [matAutocomplete]=\"auto\">\n        <mat-autocomplete #auto=\"matAutocomplete\">\n          <mat-option *ngFor=\"let option of stateGroup | async\" [value]=\"option\">\n            {{option}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n    </form>\n-->\n\n    </mat-card>\n\n    <!--\n  <mat-card>\n\n    <div class=\"example-container\">\n\n\n      <mat-card-content >\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('email')\" matInput placeholder=\"email\" type=\"email\" [formControl]=\"myForm.controls['email']\" >\n            <mat-error  *ngIf=\"!myForm.controls['email'].valid && myForm.controls['email'].touched && issubmit==1\">email field can not be blank</mat-error>\n        </mat-form-field>\n\n        <mat-form-field class=\"form-group\">\n            <input (blur)=\"inputblur('password')\" matInput placeholder=\"Password\" type=\"password\" [formControl]=\"myForm.controls['password']\" >\n            <mat-error  *ngIf=\"!myForm.controls['password'].valid && myForm.controls['password'].touched && issubmit==1\">Password field can not be blank</mat-error>\n        </mat-form-field>\n\n            <button mat-button  (click)=\"onSubmit()\" class=\"s_getmyoffer_login_button\"  >Login</button>\n        </mat-card-content>\n\n\n    </div>\n\n  </mat-card>-->\n\n\n\n</div>",
                    styles: [".container{background:#fff}.lib-pager-class{display:block;clear:both;float:right}body{font-family:Roboto,Arial,sans-serif;margin:0;display:none!important}.clear{clear:both;display:block}.float-right{float:right;display:inline;clear:none}.pad-gap{margin-left:18px}.basic-container{padding:30px}.version-info{font-size:8pt;float:right}table{width:100%;color:red}th.mat-sort-header-sorted{color:#000}.cursor{cursor:pointer!important}.custom-modalbox{display:none}.module_imgblock{display:block;width:100px;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_imgblock img{width:100%;height:auto}.module_videoblock{display:block;width:100px;position:relative;overflow:hidden;text-align:center;vertical-align:middle;background:#111}.module_videoblock img{width:100%;height:auto}.module_videoblock::after{content:'';display:block;width:30%;height:38%;background:url(image/video-play-arrow-png.png) 0 0/cover no-repeat;position:absolute;left:31%;top:30%}.tablewrapper tr td,.tablewrapper tr th{padding:5px}.close-btn-modal{float:right!important}.videothumbnailcls{height:50px;width:50px}.searchiconcls{cursor:pointer}"]
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
                    template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>Notes for :\n                        <ng-container *ngIf=\"data.notedata.header!=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\"> {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\"><span>By:</span>{{note.notes.user}}</div>\n                        <div mat-line class=\"line-datetime\"> <span>On:</span> {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\" (click)=\"deletenote(notej)\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\" [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n\n\n\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\" *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\" [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\" *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\" [innerHtml]=\"arr\"></span>\n                                <span *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\" [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\" (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRXpELE9BQU8sS0FB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WTtnREFzMUUzQixNQUFNLFNBQUMsZUFBZTs7SUFVM0IsZ0JBQUM7Q0FBQSxBQW5CRCxJQW1CQztTQWZZLFNBQVM7OztJQUlsQiw4QkFBeUM7O0lBQ3pDLHlCQUF5Qzs7QUFZN0M7SUFVRSwyQkFDUyxXQUE4QyxFQUNsQixJQUFTO1FBRHJDLGdCQUFXLEdBQVgsV0FBVyxDQUFtQztRQUNsQixTQUFJLEdBQUosSUFBSSxDQUFLO1FBRTVDLGtDQUFrQztJQUNwQyxDQUFDOztnQkFmRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLG1DQUFtQztvQkFDN0Msa0ZBQXFEOzZCQUM1QyxnRUFJUjtpQkFDRjs7OztnQkEvMUV5QyxjQUFjO2dEQW0yRW5ELE1BQU0sU0FBQyxrQkFBa0I7O0lBSTlCLHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7U0FQWSxpQkFBaUI7OztJQUUxQix3Q0FBcUQ7O0lBQ3JELGlDQUE0QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgT25Jbml0LCBWaWV3Q2hpbGQsIElucHV0LCBJbmplY3QsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgQ29tcG9uZW50UmVmLFxuICBEaXJlY3RpdmUsXG4gIFZpZXdDb250YWluZXJSZWYsIFNpbXBsZUNoYW5nZSwgT25EZXN0cm95LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQWZ0ZXJWaWV3Q2hlY2tlZCwgRWxlbWVudFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFRhYmxlRGF0YVNvdXJjZSwgTWF0UGFnaW5hdG9yIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYsIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcbmltcG9ydCB7IE1hdEJvdHRvbVNoZWV0LCBNYXRCb3R0b21TaGVldFJlZiwgTUFUX0JPVFRPTV9TSEVFVF9EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Db250cm9sLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ2FuY2VsLCBOYXZpZ2F0aW9uRW5kLCBOYXZpZ2F0aW9uRXJyb3IsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyLCBFdmVudCB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHN0YXJ0V2l0aCwgbWFwLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5pbXBvcnQgKiBhcyBtb21lbnRJbXBvcnRlZCBmcm9tICdtb21lbnQnO1xuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XG5pbXBvcnQgeyBNQVRfU05BQ0tfQkFSX0RBVEEsIE1hdFNuYWNrQmFyLCBNYXRTbmFja0JhclJlZiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5cbi8vIGltcG9ydCB7UHJvZ3Jlc3NCYXJNb2RlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wcm9ncmVzcy1iYXInO1xuLy8gaW1wb3J0ICB7QnRuQ29tcG9uZW50fSBmcm9tICcuLy4uLy4uLy4uLy4uL3NyYy9hcHAvYnRuL2J0bi5jb21wb25lbnQnXG5jb25zdCBtb21lbnQgPSBtb21lbnRJbXBvcnRlZDtcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nRGF0YSB7XG4gIGFsbGRhdGE6IGFueTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1saXN0aW5nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmcubW9kdWxlLmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9saXN0aW5nLm1vZHVsZS5jc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuXG4gIG15Q29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgpO1xuXG5cbiAgZGF0YXNvdXJjZXZhbDogYW55O1xuICBzZWFyY2hfc2V0dGluZ3N2YWw6IGFueTtcbiAgY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsOiBhbnk7XG4gIGdyYWJfbGlua3ZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2V2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw6IGFueTtcbiAgdXJsdmFsOiBhbnk7XG4gIHNlYXJjaGVuZHBvaW50dmFsOiBhbnk7XG4gIHB1YmxpYyBzZWFyY2hMaXN0dmFsOiBhbnk7XG4gIHJlc2NvdW50OiBudW1iZXIgPSAwO1xuICBwZGZfbGlua192YWw6IGFueTtcbiAgc3RhdHVzYXJydmFsOiBhbnk7XG4gIHNraXB2YWw6IGFueTtcbiAgZXJyb3JtZzogYW55O1xuICBqd3R0b2tlbnZhbDogYW55O1xuICBkZXRhaWxfZGF0YXR5cGV2YWw6IGFueTtcbiAgZGV0YWlsX3NraXBfYXJyYXl2YWw6IGFueTtcbiAgZGVsZXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgZWRpdHJvdXRldmFsOiBhbnk7XG4gIGFwaXVybHZhbDogYW55O1xuICB1cGRhdGVlbmRwb2ludHZhbDogYW55O1xuICBtb2RpZnlfaGVhZGVyX2FycmF5dmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55O1xuICBkYXRhY29sbGVjdGlvbnZhbDogYW55O1xuICBzZWxlY3Rpb246IGFueTtcbiAgc291cmNlZGF0YXZhbDogYW55O1xuICBlbWFpbGFycmF5dmFsOiBhbnk7XG4gIGNvbHVtbnM6IGFueSA9IFtdO1xuICBhdXRvc2VhcmNoaW5wdXQ6IGFueSA9IFtdO1xuICBjdXJyZW50YXV0b3NlYXJjaGFycjogYW55ID0gW107XG4gIG9sZGRhdGE6IGFueSA9IFtdO1xuICB0c2VhcmNoOiBhbnkgPSBbXTtcbiAgdGFibGVmbGFnOiBhbnkgPSAwO1xuICBhdXRvc2VhcmNoOiBhbnkgPSBbXTtcbiAgcHVibGljIHg6IGFueTtcbiAgcHVibGljIGxpYmRhdGF2YWw6IGFueSA9IHt9O1xuICBwdWJsaWMgbGltaXRjb25kdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGN1c3RvbWJ1dHRvbnZhbDogYW55O1xuICBwdWJsaWMgcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIHNvcnRkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIHNoOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGFydDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQyOiBhbnkgPSBmYWxzZTtcbiAgcHVibGljIGF1ZDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyB1cGRhdGV0YWJsZXZhbDogYW55ID0gZmFsc2U7XG4gIGxvYWRlcnJvdzogYW55ID0gbnVsbDtcbiAgY3VycmVudGF1dG9jb21wbGV0ZWl0ZW06IGFueTtcbiAgcHVibGljIGN1c3RvbUJ1dHRvbkZsYWdWYWw6IGFueSA9IHt9O1xuICBwdWJsaWMgYWxsU2VhcmNoQ29uZDogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hidXR0b252YWw6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoQmFyRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG5cbiAgcHVibGljIGluaXRpYXRlU2VhcmNoOiBib29sZWFuID0gZmFsc2U7XG5cbiAgQE91dHB1dCgpIG9uTGlibGlzdGluZ0NoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuXG4gIEBPdXRwdXQoKSBvbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcblxuICBzZWFyY2hzdHJzYXJyOiBhbnkgPSBbXTtcbiAgb2xkbGltaXRyYW5nZTogYW55ID0gW107XG5cblxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoX3NldHRpbmdzKHNlYXJjaF9zZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgPSBzZWFyY2hfc2V0dGluZ3M7XG4gICAgLypmb3IgKGxldCBpPSAwOyBpPD0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbaV0ubGFiZWwpO1xuICAgIH0qL1xuXG4gICAgLyogIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbMF0ubGFiZWwpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLnZhbHVlcyk7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKTsqL1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZShjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2U6IGFueSkge1xuICAgIHRoaXMuY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdldmFsID0gY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaW1pdGNvbmQobGltaXRjb25kdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbCA9IGxpbWl0Y29uZHZhbDtcbiAgICB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaChsaW1pdGNvbmR2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaW1pdGNvbmR2YWwnLHRoaXMubGltaXRjb25kdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50KGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw7XG4gICAgaWYgKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID09IDApIHsgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTsgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlX3NlYXJjaF9zb3VyY2VfY291bnQnLHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsKTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBncmFiX2xpbmsoZ3JhYl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLmdyYWJfbGlua3ZhbCA9IGdyYWJfbGluaztcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmdyYWJfbGlua3ZhbCk7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWJ1dHRvbihjdXN0b21idXR0b246IGFueSkge1xuICAgIHRoaXMuY3VzdG9tYnV0dG9udmFsID0gY3VzdG9tYnV0dG9uO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX3NvdXJjZShkYXRlX3NlYXJjaF9zb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsID0gZGF0ZV9zZWFyY2hfc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzb3J0ZGF0YShzb3J0ZGF0YXZhbDogYW55KSB7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbCA9IHNvcnRkYXRhdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc29ydGRhdGF2YWwsICdzb3J0ZGF0YXZhbCcpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRhdGVfc2VhcmNoX2VuZHBvaW50KGRhdGVfc2VhcmNoX2VuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsID0gZGF0ZV9zZWFyY2hfZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHVybCh1cmw6IGFueSkge1xuICAgIHRoaXMudXJsdmFsID0gdXJsO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hlbmRwb2ludChzZWFyY2hlbmRwb2ludDogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hlbmRwb2ludHZhbCA9IHNlYXJjaGVuZHBvaW50O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBwZGZfbGluayhwZGZfbGluazogYW55KSB7XG4gICAgdGhpcy5wZGZfbGlua192YWwgPSBwZGZfbGluaztcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoTGlzdChzZWFyY2hMaXN0OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaExpc3R2YWwgPSBzZWFyY2hMaXN0O1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBsaWJkYXRhKGxpYmRhdGF2YWw6IGFueSkge1xuICAgIHRoaXMubGliZGF0YXZhbCA9IFtdO1xuICAgIHRoaXMubGliZGF0YXZhbCA9IGxpYmRhdGF2YWw7XG4gICAgLy8gY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLHRoaXMubGliZGF0YXZhbCk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0YXNvdXJjZShkYXRhc291cmNlOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBbXTtcbiAgICB0aGlzLmRhdGFzb3VyY2V2YWwgPSBkYXRhc291cmNlO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhY29sbGVjdGlvbihkYXRhY29sbGVjdGlvbnZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCA9IGRhdGFjb2xsZWN0aW9udmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHNraXAoc2tpcDogYW55KSB7XG4gICAgdGhpcy5za2lwdmFsID0gc2tpcDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX2RhdGF0eXBlKGRldGFpbF9kYXRhdHlwZTogYW55KSB7XG4gICAgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWwgPSBkZXRhaWxfZGF0YXR5cGU7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRldGFpbF9za2lwX2FycmF5KGRldGFpbF9za2lwX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9za2lwX2FycmF5dmFsID0gZGV0YWlsX3NraXBfYXJyYXk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc291cmNlZGF0YShzb3VyY2VkYXRhOiBhbnkpIHtcbiAgICB0aGlzLnNvdXJjZWRhdGF2YWwgPSBzb3VyY2VkYXRhO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IG1vZGlmeV9oZWFkZXJfYXJyYXkobW9kaWZ5X2hlYWRlcl9hcnJheTogYW55KSB7XG4gICAgdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsID0gbW9kaWZ5X2hlYWRlcl9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkZWxldGVlbmRwb2ludChkZWxldGVlbmRwb2ludHZhbDogYW55KSB7XG4gICAgdGhpcy5kZWxldGVlbmRwb2ludHZhbCA9IGRlbGV0ZWVuZHBvaW50dmFsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZWVuZHBvaW50KHVwZGF0ZWVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZWVuZHBvaW50dmFsID0gdXBkYXRlZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGFwaXVybChhcGl1cmw6IGFueSkge1xuICAgIHRoaXMuYXBpdXJsdmFsID0gYXBpdXJsO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHVwZGF0ZXRhYmxlKHVwZGF0ZXRhYmxlOiBhbnkpIHtcbiAgICB0aGlzLnVwZGF0ZXRhYmxldmFsID0gdXBkYXRldGFibGU7XG5cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBqd3R0b2tlbihqd3R0b2tlbjogYW55KSB7XG4gICAgaWYgKGp3dHRva2VuICE9IG51bGwpIHsgdGhpcy5qd3R0b2tlbnZhbCA9IGp3dHRva2VuOyB9IGVsc2UgeyB0aGlzLmp3dHRva2VudmFsID0gJyc7IH1cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmp3dHRva2VudmFsLCd0b2tlbicpXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc3RhdHVzYXJyKHN0YXR1c2FycjogYW55KSB7XG4gICAgdGhpcy5zdGF0dXNhcnJ2YWwgPSBzdGF0dXNhcnI7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZW1haWxhcnJheShlbWFpbGFycmF5OiBhbnkpIHtcbiAgICB0aGlzLmVtYWlsYXJyYXl2YWwgPSBlbWFpbGFycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVkaXRyb3V0ZShlZGl0cm91dGU6IGFueSkge1xuICAgIHRoaXMuZWRpdHJvdXRldmFsID0gZWRpdHJvdXRlO1xuICB9XG5cblxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IHN0YXJ0ICovXG4gIEBJbnB1dCgpXG4gIHNldCBwcmV2aWV3X2FydGlzdHhwKGZsdWc6IGFueSkge1xuICAgIHRoaXMucHJldmlld0ZsdWcgPSB0cnVlO1xuICB9XG4gIC8qIGFydGlzdHhwIHByZXZpZXcgZW5kICovXG5cbiAgQElucHV0KClcbiAgc2V0IGN1c3RvbWxpc3RlbmJ1dHRvbih2YWw6IGFueSkge1xuICAgIHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCA9IHZhbFxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tQnV0dG9uRmxhZ1ZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICB9XG5cbiAgLy8gc2VhcmNoIGJ1dHRvbnMgXG4gIC8vIEBJbnB1dCgpXG4gIC8vIHNldCBzZWFyY2hidXR0b25zKHZhbDogYW55KSB7XG4gIC8vICAgdGhpcy5zZWFyY2hidXR0b252YWwgPSB2YWxcbiAgLy8gICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaGJ1dHRvbnZhbCwgJ2N1c3RvbUJ1dHRvbkZsYWdWYWwnKVxuICAvLyB9XG5cblxuICBzdGF0ZUdyb3Vwczogc3RyaW5nW107XG5cbiAgc3RhdGVHcm91cDogT2JzZXJ2YWJsZTxzdHJpbmdbXT47XG5cbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGF0YWNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNoZWFkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvcm1hcnJheTogYW55ID0gW107XG4gIHN0YXJ0X2RhdGU6IGFueTtcbiAgZGF0ZVNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBzZWxlY3RTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgYXV0b1NlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICB0ZXh0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGVuZF9kYXRlOiBhbnk7XG4gIHB1YmxpYyBpOiBhbnk7XG4gIGxvYWRpbmc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgcHJlcmVzdWx0OiBhbnkgPSB7fTtcbiAgLy8gZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5kYXRhc291cmNldmFsKTtcbiAgZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2U7XG5cbiAgQFZpZXdDaGlsZChNYXRTb3J0KSBzb3J0OiBNYXRTb3J0O1xuICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XG4gIC8vIG9wdGlvbnM6IEZvcm1Hcm91cDtcbiAgbXlGb3JtOiBhbnk7XG4gIC8vIG15Rm9ybTphbnk7XG4gIG1vZGVsQ2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgbW9kZWxDaGFuZ2Vkc2VydmVyID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBwYWdlY2hhbmdlZCA9IG5ldyBTdWJqZWN0PGFueT4oKTtcbiAgc3Vic2NyaXB0aW9uczogU3Vic2NyaXB0aW9uW10gPSBbXTtcbiAgc3Vic2NyaXB0aW9uY291bnQgPSAwO1xuICB0YWJsZUZvb3RlckNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIHRlc3R2YWx1ZTogYW55ID0gXCJzMVwiO1xuICAvLyBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdFtdPjtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgX2FwaVNlcnZpY2U6IEFwaVNlcnZpY2UsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcbiAgICBwdWJsaWMgYm90dG9tU2hlZXQ6IE1hdEJvdHRvbVNoZWV0LFxuICAgIHB1YmxpYyBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgcHJpdmF0ZSBjb250YWluZXI6IFZpZXdDb250YWluZXJSZWYsXG4gICAgcHVibGljIF9odHRwOiBIdHRwQ2xpZW50LFxuICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcbiAgICBwcml2YXRlIF9zbmFja0JhcjogTWF0U25hY2tCYXIsXG4gICAgcHJpdmF0ZSBfZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHtcbiAgICB0aGlzLnN0YXRlR3JvdXBzID0gdGhpcy5zZWFyY2hMaXN0dmFsO1xuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50OiBFdmVudCkgPT4ge1xuICAgICAgc3dpdGNoICh0cnVlKSB7XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQ6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kOlxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkNhbmNlbDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FcnJvcjoge1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSg1MDApKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIC8vIHRoaXMuc2VhcmNoUmVzdWx0JCA9IHRoaXMuYXBpLnNlYXJjaCh0aGlzLm1vZGVsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2FmdGVyIGRlYm91bmNlICcsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgdGhpcy5maWx0ZXJhdXRvdmFsKHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMubW9kZWxDaGFuZ2Vkc2VydmVyXG4gICAgICAucGlwZShcbiAgICAgICAgZGVib3VuY2VUaW1lKDUwMCksXG4gICAgICAgIC8vIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgLy8gdGhpcy5zZWFyY2hSZXN1bHQkID0gdGhpcy5hcGkuc2VhcmNoKHRoaXMubW9kZWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnYWZ0ZXIgZGVib3VuY2UgIHNlcnZlcicsIHRoaXMuYXV0b3NlYXJjaGlucHV0LCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gJycpIHtcbiAgICAgICAgICAvLyB0aGlzLmZpbHRlcmF1dG92YWwodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG5cbiAgICAgICAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uc2VydmVyc2VhcmNoZGF0YS5lbmRwb2ludDtcblxuICAgICAgICAgIGxldCBzb3VyY2U6IGFueTtcblxuICAgICAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaF9zdHI6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdLFxuICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb24uLi4nLGNvbmRpdGlvbm9iaix0aGlzLmVuZF9kYXRlKTtcbiAgICAgICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICAgICAgLy8gcmV0dXJuO1xuICAgICAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlcywgJ3Jlc3VsdCcpO1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsKSB0aGlzLnJlc2NvdW50ID0gcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChyZXN1bHQucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IHJlc3VsdC5yZXM7XG4gICAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkICcgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcblxuICAgICAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuXG4gICAgICB9KTtcblxuXG5cblxuICAgIC8qIHRoaXMubXlGb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICAgZW1haWw6IFsnJywgVmFsaWRhdG9ycy5jb21wb3NlKFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLnBhdHRlcm4oL15cXHMqW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXEBbXFx3XFwtXFwrX10rXFwuW1xcd1xcLVxcK19dKyhcXC5bXFx3XFwtXFwrX10rKSpcXHMqJC8pXSldLFxuICAgICAgIHBhc3N3b3JkOiBbJycsIFZhbGlkYXRvcnMucmVxdWlyZWRdXG4gICAgIH0pOyovXG4gIH1cbiAgLypARGlyZWN0aXZlKHtcbiAgICBzZWxlY3RvcjogJ1tMaXN0aW5nXSdcbiAgfSkqL1xuXG5cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuXG4gIGlucHV0Ymx1cih2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbiBibHVyIC4uLi4uJyk7XG4gICAgdGhpcy5teUZvcm0uY29udHJvbHNbdmFsXS5tYXJrQXNVbnRvdWNoZWQoKTtcbiAgfVxuICBuZ09uSW5pdCgpIHtcblxuICAgIC8vIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgLy8gICBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAvLyAgIHNvdXJjZSA9IHtcbiAgICAvLyAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAvLyAgIH07XG4gICAgLy8gICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gbm90IG5lZWRlZCAsXG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBpZiAodGhpcy5kYXRhc291cmNldmFsKSB0aGlzLnJlc2NvdW50ID0gdGhpcy5kYXRhc291cmNldmFsLmxlbmd0aDtcblxuICAgIGxldCB0ZW1wID0gW107XG4gICAgY29uc3Qga2V5cyA9IHhbMF07XG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpOyAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBjb25zdCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csICdfJykpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSk7XG4gICAgfVxuICAgIC8vIGNvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvLyBoZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWA7XG4gICAgICBjb25zdCB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldfWAsIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpLCBvYmpsZW5ndGg6IGhlYWRlcl9saXN0Lmxlbmd0aCB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbCkge1xuICAgICAgICBpZiAoYiA9PSB0dC5oZWFkZXIpIHsgdHQuaGVhZGVyID0gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsW2JdOyB9XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSBbXTtcbiAgICB0aGlzLnRhYmxlZmxhZyA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlZmxhZyA9IDA7XG4gICAgfSwgMTAwKTtcblxuICAgIGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgfVxuXG5cblxuICAgIGVsc2UgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSBbXTtcblxuICAgIGxldCBjdXN0b21jb2xzOiBhbnkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT0gbnVsbCkge1xuICAgICAgY3VzdG9tY29scyA9IHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChjdXN0b21jb2xzICE9IG51bGwgJiYgY3VzdG9tY29scy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2NvbHZhbDogc3RyaW5nID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gY3VzdG9tY29scykge1xuICAgICAgICBpZiAoZGlzcGxheWVkY29scy5pbmNsdWRlcyhjdXN0b21jb2xzW3ZdKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgICAgIGlmIChiID09IGN1c3RvbWNvbHNbdl0pIHsgY2NvbHZhbCA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogY3VzdG9tY29sc1t2XSwgaGVhZGVyOiBjY29sdmFsLCBjZWxsOiAnTkEnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzID0gY3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy5wdXNoKHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUgPT0gbnVsbCA/ICdBY3Rpb25zJyA6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lLCBoZWFkZXI6ICdBY3Rpb25zJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBudWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy51bnNoaWZ0KCcjJyk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogJyMnLCBoZWFkZXI6ICcjJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gW107XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICAvLyB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlbXVsdGlwbGVzZWxlY3RidXR0b24gIT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICdzZWxlY3QnLCBoZWFkZXI6ICdzZWxlY3QnLCBjZWxsOiAnTkEnIH0pOyAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB9XG4gICAgbGV0IHRlbXBjb2xhcnIgPSBbXTtcbiAgICBsZXQgdGVtcGNvbGFycjIgPSBbXTtcbiAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IG4gaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAodGVtcGNvbGFyci5pbmRleE9mKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0ZW1wY29sYXJyMi5wdXNoKHRoaXMuY29sdW1uc1tuXSk7XG4gICAgICB0ZW1wY29sYXJyLnB1c2godGhpcy5jb2x1bW5zW25dLmNvbHVtbkRlZik7XG5cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gdGVtcGNvbGFycjI7XG4gICAgLy8gdGhpcy5jb2x1bW5zID0gQXJyYXkuZnJvbShuZXcgU2V0KHRoaXMuY29sdW1ucy5tYXAoKGl0ZW06IGFueSkgPT4gaXRlbS5jb2x1bW5EZWYpKSk7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMubWFwKGl0ZW0gPT4gaXRlbS5jb2x1bW5EZWYpXG4gICAgLy8gICAuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KTtcbiAgICAvLyB1bmlxdWUgY29sIG5hbWVzIFxuICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IEFycmF5LmZyb20obmV3IFNldCh0aGlzLmRpc3BsYXllZENvbHVtbnMpKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmNvbHVtbnMsICdjb2xzIGZpbHRlcicsIHRoaXMuZGlzcGxheWVkQ29sdW1ucyk7XG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuXG4gICAgLy8gbG9hZCBzZWFyY2ggcHJlZGVmaW5kZWQgZGF0YVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAvLyB0aGlzLnNlbGVjdHNlYXJjaFsnc3RhdHVzJ10gPSAnMCc7XG4gICAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0c2VhcmNoJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzMScsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCk7XG4gICAgICAgIGZvciAoY29uc3Qgc2wgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgLy8gdGhpcy5zZWxlY3RTZWFyY2godGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWVzWzBdKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RzZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlO1xuICAgICAgICAgICAgLy8gc2VsZWN0U2VhcmNoX2NvbmRpdGlvblxuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb25bdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbml0aWF0ZVNlYXJjaCwgJ2luaXRpYXRlU2VhcmNoIHNlbGVjdCcpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgJ3NzKysrKys9PT09PSsrKysnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gsICcrKysrKysnLCB0aGlzLnNlbGVjdHNlYXJjaCk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUsdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlc1swXSwnPz8/Pz8gbmV3IHNlbGVjdFNlYXJjaF9jb25kaXRpb24nLHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbilcblxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0MScsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpO1xuICAgICAgICBmb3IgKGNvbnN0IHNsIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy50c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLmZpZWxkXSA9XG4gICAgICAgICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmluaXRpYXRlU2VhcmNoLCAnaW5pdGlhdGVTZWFyY2ggdGV4dCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsKSB7XG4gICAgICAgIGZvciAobGV0IGF0cyBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS5maWVsZF0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICB0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdID0gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGsgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUsJz4+PT09PT09PScpXG4gICAgICAgICAgICAgIHRoaXMuYXV0b3NlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS5maWVsZF0ucHVzaCh7IHZhbDogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWVba10udmFsLCBuYW1lOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2hbYXRzXS52YWx1ZVtrXS5uYW1lIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIC8vIGRhdGVTZWFyY2hfY29uZGl0aW9uXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUgIT0gbnVsbCkge1xuXG4gICAgICAgIHRoaXMuc3RhcnRfZGF0ZSA9IG1vbWVudChuZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpKS5mb3JtYXQoXCJZWVlZLURELU1NXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIHRoaXMuZW5kX2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlKSkuZm9ybWF0KFwiWVlZWS1ERC1NTVwiKS50b1N0cmluZygpO1xuICAgICAgICB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0uZmllbGRdID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZTtcblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsICdzZWFyY2hfc2V0dGluZ3N2YWwnLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uKVxuXG5cbiAgICAgIGlmICh0aGlzLmluaXRpYXRlU2VhcmNoID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH1cbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIC8vIEN1c3RvbSBGaWx0ZXIgbmV3XG4gIEN1c3RvbUJ1dHRvbkxpc3Rlbih2YWw6IGFueSkge1xuICAgIC8vIGFsbFNlYXJjaENvbmRcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gsICd0aGlzLmFsbFNlYXJjaENvbmQnKVxuXG4gICAgdGhpcy5vbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UuZW1pdChcbiAgICAgIHtcbiAgICAgICAgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIHNlYXJjaGRhdGE6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLCBidXR0b25kYXRhOiB2YWwsIGFsbFNlYXJjaENvbmQ6IHRoaXMuYWxsU2VhcmNoQ29uZCwgYXV0b1NlYXJjaFZhbDogdGhpcy5hdXRvc2VhcmNoXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHZhciBkYXRhOmFueT17XG4gICAgLy8gICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCxzZWFyY2g6dGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsYnV0dG9uVmFsOnZhbFxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCdkYXRhKysrKz09PScsdmFsKVxuICB9XG5cbiAgLyoqaW1hZ2UgdmlldyBtb2RhbCAqL1xuICBpbWdfbW9kYWxfdmlldyhpbWc6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImltZ19tb2RhbF92aWV3XCIsaW1nKVxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oSW1hZ2VWaWV3LCB7XG4gICAgICAvLyBwYW5lbENsYXNzOiAnY3VzdG9tLW1vZGFsYm94LWltYWdlLXByZXZpZXcnLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnY3VzdG9tLW1vZGFsYm94LWltYWdlLXByZXZpZXcnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBhbGxkYXRhOiBpbWcgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudEluaXQoKSAuLi4nKTtcbiAgfVxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlclZpZXdJbml0IGNhbGxlZCAuLi4gJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBpZiAodGhpcy5saWJkYXRhdmFsICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93ICE9IG51bGwpIHtcbiAgICAgICAgZm9yIChjb25zdCBlIGluIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvdykge1xuXG4gICAgICAgICAgY29uc3QgY3JlZCA9IHRoaXMudXBUbyh0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLicgKyB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3dbZV0ua2V5KSwgJ3RyJyk7XG4gICAgICAgICAgaWYgKGNyZWQgIT0gbnVsbCkgY3JlZC5jbGFzc0xpc3QuYWRkKHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS52YWwpO1xuICAgICAgICAgIC8vIGNvbnN0IGNyZWQgPSB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWQnKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5wYXJlbnQoKS5hZGRDbGFzcygnY3JlZHRyJyk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY3JlZCwgJ2NyZWQnLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICAvLyBTZWFyY2ggQmFyIFRvZ2dsZVxuICBTZWFyY2hCYXJUb2dnbGUoZmxhZykge1xuICAgIHN3aXRjaCAoZmxhZykge1xuICAgICAgY2FzZSB0cnVlOlxuICAgICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSBmYWxzZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIGZhbHNlOlxuICAgICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICB1cFRvKGVsLCB0YWdOYW1lKSB7XG4gICAgdGFnTmFtZSA9IHRhZ05hbWUudG9Mb3dlckNhc2UoKTtcblxuICAgIHdoaWxlIChlbCAmJiBlbC5wYXJlbnROb2RlKSB7XG4gICAgICBlbCA9IGVsLnBhcmVudE5vZGU7XG4gICAgICBpZiAoZWwudGFnTmFtZSAmJiBlbC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT0gdGFnTmFtZSkge1xuICAgICAgICByZXR1cm4gZWw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gTWFueSBET00gbWV0aG9kcyByZXR1cm4gbnVsbCBpZiB0aGV5IGRvbid0IFxuICAgIC8vIGZpbmQgdGhlIGVsZW1lbnQgdGhleSBhcmUgc2VhcmNoaW5nIGZvclxuICAgIC8vIEl0IHdvdWxkIGJlIE9LIHRvIG9taXQgdGhlIGZvbGxvd2luZyBhbmQganVzdFxuICAgIC8vIHJldHVybiB1bmRlZmluZWRcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZygnbmdBZnRlckNvbnRlbnRDaGVja2VkIGNhbGxlZCAuLi4nKTtcblxuICB9XG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vIHByZXZlbnQgbWVtb3J5IGxlYWsgd2hlbiBjb21wb25lbnQgZGVzdHJveWVkXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2gocyA9PiBzLnVuc3Vic2NyaWJlKCkpO1xuICB9XG5cbiAgY2xpY2ttdWx0aXBsZXNlbGVjdG9wdGlvbih2YWxzKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0b3B0aW9uY2xpY2snLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCwgYnRuZGF0YTogdmFscyB9KTtcblxuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgbGV0IHg6IGFueTtcbiAgICB0aGlzLmVycm9ybWcgPSAnJztcbiAgICBjb25zdCBkYXRhID0gdGhpcy5teUZvcm0udmFsdWU7XG4gICAgZm9yICh4IGluIHRoaXMubXlGb3JtLmNvbnRyb2xzKSB7XG4gICAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t4XS5tYXJrQXNUb3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWxdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcblxuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBjb25zdCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsICsgJy1jb3VudCc7XG5cbiAgICBsZXQgc291cmNlOiBhbnk7XG4gICAgbGV0IGNvbmRpdGlvbjogYW55O1xuICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuICAgIGNvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgaWYgKG1vbWVudCh0aGlzLmVuZF9kYXRlKS51bml4KCkgIT0gbnVsbCAmJiBtb21lbnQodGhpcy5zdGFydF9kYXRlKS51bml4KCkgIT0gbnVsbCkge1xuXG5cblxuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcblxuICAgICAgaWYgKHRoaXMuZW5kX2RhdGUgIT0gbnVsbCAmJiB0aGlzLnN0YXJ0X2RhdGUgIT0gbnVsbCkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkbHRlOiBuZXcgRGF0ZSh0aGlzLmVuZF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFydF9kYXRlICE9IG51bGwgJiYgKHRoaXMuZW5kX2RhdGUgPT0gbnVsbCB8fCB0aGlzLmVuZF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgKHRoaXMuc3RhcnRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhcnRfZGF0ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLnRzZWFyY2gnLCB0aGlzLnRzZWFyY2gpO1xuICAgICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldICE9ICcnKSB7XG4gICAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgYXV0b3NlYXJjaDogYW55ID0ge307XG4gICAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pIHtcbiAgICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgICAgdHZbYl0gPSB0aGlzLmF1dG9zZWFyY2hbYl1bbV0udmFsLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICBpZiAoYXV0b3NlYXJjaC4kb3IgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRvciAxJylcbiAgICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICAgIHNraXA6IDBcbiAgICAgICAgfSxcbiAgICAgICAgc29ydDoge1xuICAgICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgIH07XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdkYXRlIHNlYXJjaCBjb24uLi4nLCBjb25kaXRpb25vYmosIHRoaXMuZW5kX2RhdGUsIHRoaXMuc3RhcnRfZGF0ZSk7XG4gICAgICAvLyBjb25zb2xlLndhcm4oJ2NvbmQnLGNvbmRpdGlvbix0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLGNvbmRpdGlvbm9iaix0aGlzLnRzZWFyY2gsdGV4dFNlYXJjaCk7XG4gICAgICByZXR1cm47XG4gICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IDA7XG4gICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgaWYgKHJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmsxLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICBpZiAocmVzdWx0LmNvdW50ID09IDApIHsgdGhpcy50YWJsZWZsYWcgPSAxOyB9IGVsc2UgeyB0aGlzLnRhYmxlZmxhZyA9IDA7IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvdW50JyxyZXN1bHQpO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgfSk7XG5cbiAgICAgIC8qdGhpcy5faHR0cC5wb3N0KGxpbmssIHtzb3VyY2U6dGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgICdjcmVhdGVkX2F0Jzoge1xuICAgICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgfVxuICAgICAgICB9LHRva2VuOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgfSkuc3Vic2NyaWJlKCByZXMgPT57XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9e307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coXCJva1wiKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0LnJlcyk7XG4gICAgICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pKi9cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2Vycm9yJyk7XG4gICAgfVxuICB9XG5cblxuXG4gIHNlbGVjdFNlYXJjaCh2YWx1ZTogYW55LCB0eXBlOiBhbnksIHN0YXR1c3ZhbDogYW55KSB7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3ZhbHVlJywgdHlwZSwgJ3R5cGUnLCBzdGF0dXN2YWwsICdzdGF0dXN2YWwnKVxuXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gbGV0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyW3R5cGUuZmllbGRdID0gKHsgdmFsOiBzdGF0dXN2YWwubmFtZSwgbGFiZWw6IHR5cGUubGFiZWwsIGtleTogdHlwZS5maWVsZCB9KTtcbiAgICBsZXQgdmFsID0gJyc7XG4gICAgaWYgKHRoaXMudHNlYXJjaCAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCkge1xuICAgICAgdmFsID0gdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDEgJiYgeyAkb3I6IFt0aGlzLnRzZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIC8vIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICAvLyB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIC8vIC8vY29uc29sZS53YXJuKHRoaXMudHNlYXJjaCk7XG4gICAgLy8gbGV0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgLy8gc291cmNlID0ge1xuICAgIC8vICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgLy8gfTtcblxuXG5cblxuXG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnRzZWFyY2gsICdjenhjeGN6eGMnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gsIHRoaXMuc2VsZWN0c2VhcmNoLCB2YWx1ZSwgdHlwZSk7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgY29uZGl0aW9uW3R5cGUuZmllbGRdID0gdmFsdWU7XG4gICAgLy8gdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3R5cGUuZmllbGRdID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlbGVjdFNlYXJjaCAnLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIGNvbnN0IGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24sIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24sIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgc291cmNlID0ge1xuICAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAgIGNvbmRpdGlvbjogY29uZGl0aW9ub2JqXG4gICAgfTtcbiAgICAvLyBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgIC8vICAgICByZXN1bHQgPSByZXM7XG4gICAgLy8gICAgIGxldCBuZXdkYXRhID0gcmVzdWx0LnJlcztcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzKTtcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAvLyAgIH0pO1xuICAgIC8vIH0gZWxzZSB7XG4gICAgLy8gICBjb25zb2xlLmxvZygnb29wcycpO1xuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xuICB9XG4gIC8vIGZvciBtYW5hZ2luZyBwYWdpbmF0aW9uXG5cbiAgcGFnaW5nKHZhbDogYW55KSB7XG4gICAgLy8gY29uc3QgbHZhbDogYW55ID0gdGhpcy5saW1pdGNvbmR2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5saW1pdGNvbmR2YWwsICdsaW0gdmFsJyk7XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCAhPSBudWxsICYmIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID4gMTAwKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwMDtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1lvdSBjYW4gc2VlIG1heGltdW0gMTAwIHJlY29yZHMgYXQgb25jZSAhJyB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBsZXQgbWF4cGFnZWNvdW50OiBudW1iZXIgPSBOdW1iZXIodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyAodGhpcy5saW1pdGNvbmR2YWwubGltaXQpKTtcbiAgICBtYXhwYWdlY291bnQgPSB+fihtYXhwYWdlY291bnQpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm9sZGxpbWl0cmFuZ2UnLCB0aGlzLm9sZGxpbWl0cmFuZ2UsIHRoaXMubGltaXRjb25kdmFsLCB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCwgbWF4cGFnZWNvdW50KTtcbiAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaCh7XG4gICAgLy8gICBza2lwOiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwLFxuICAgIC8vICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgIC8vICAgcGFnZWNvdW50OiB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnRcbiAgICAvLyB9KTtcbiAgICBpZiAodmFsID09IDEpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA8IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh2YWwgPT0gLTEgJiYgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA+PSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2luIHNraXAgYmxvY2snKTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMikgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodmFsID4gMSkge1xuICAgICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSAxKSB7IHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwOyB9IGVsc2UgeyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDEpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7IH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID4gKG1heHBhZ2Vjb3VudCArIDEpKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSBtYXhwYWdlY291bnQgKyAxO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAxKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHZhbCwnc3MnLHRoaXMuZGF0YWNvbGxlY3Rpb252YWwsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuXG5cbiAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gJycpIHtcbiAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICB9XG4gICAgfVxuXG5cbiAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRvciAyJylcblxuICAgICAgICBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICBjb25zdCBzb3VyY2UgPSB7XG4gICAgICBjb25kaXRpb246IHtcbiAgICAgICAgbGltaXQ6IHRoaXMubGltaXRjb25kdmFsLmxpbWl0LFxuICAgICAgICBza2lwOiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9LFxuICAgICAgc29ydDoge1xuICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICB9LFxuICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgfTtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICAvKmxldCBkYXRhOmFueT17XG4gICAgICBcImNvbmRpdGlvblwiOntcbiAgICAgICAgbGltaXQ6dGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6dGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfVxuXG4gICAgfSovXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCwncmVzJyk7XG4gICAgICBpZiAodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiB0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdwYWdpbmcnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaiwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHJlc3VsdHM6IHRoaXMucmVzdWx0LnJlc3VsdHMucmVzIH0pO1xuXG4gICAgICAgIC8vIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgICAvLyAgIHRoaXMudGFibGVGb290ZXJDb2x1bW5zID0gdGhpcy5saWJkYXRhdmFsLmZvb3RlcnNldHRpbmdzLm1hcCh4ID0+IHgua2V5KVxuICAgICAgICAvLyB9XG5cblxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyByYW5nZSBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2tpcCA9IHRoaXMubGltaXRjb25kdmFsLnNraXA7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5saW1pdCA9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50ID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5vbGRsaW1pdHJhbmdlIGFmdGVyICcsIHRoaXMub2xkbGltaXRyYW5nZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnbyBsZW4nLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoLCB0aGlzLm9sZGxpbWl0cmFuZ2UpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucmV2ZXJzZSgpO1xuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLm9sZGxpbWl0cmFuZ2Uuc2xpY2UoMCwgdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDIpOyBcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSh0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMSwgMSk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5zcGxpY2UoMCwgMSk7XG4gICAgICAgIC8vIHRoaXMucmVmcmVzaGRhdGEoKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aCAtIDFdO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpbWl0Y29uZHZhbCwgdGhpcy5vbGRsaW1pdHJhbmdlLCAnbGF2bCBuIG9sZCAnKTtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IHRoaXMub2xkbGltaXRyYW5nZS5za2lwO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IHRoaXMub2xkbGltaXRyYW5nZS5saW1pdDtcbiAgICAgICAgLy8gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gdGhpcy5vbGRsaW1pdHJhbmdlLnBhZ2Vjb3VudDtcbiAgICAgICAgLy8gaWYgKHZhbCA9PSAxKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCAtPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBpZiAodmFsID09IC0xKSB7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50Kys7XG4gICAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCArPSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gRGF0YSBGb3VuZCBpbiB0aGlzIHJhbmdlICEhJyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIH0pO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gIH1cblxuICBhZGRhdXRvc2VhcmNoZGF0YSh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2Jyx2YWwpO1xuXG4gIH1cbiAgcmVtb3ZlKHZhbDogYW55LCBpOiBhbnksIGZpZWxkOiBhbnkpIHtcblxuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbZmllbGRdICE9IG51bGwpIHsgdGhpcy5hdXRvc2VhcmNoW2ZpZWxkXS5zcGxpY2UoaSwgMSk7IH1cbiAgfVxuXG5cbiAgYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQoaXRlbSkge1xuICAgIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0gPSBpdGVtO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnYXV0b2NvbXBsZXRlY2hhbmdlZGV0ZWN0ZWQnLCB0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICBpZiAodGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhID09IG51bGwpXG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZC5uZXh0KCk7XG4gICAgZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gZWxzZSBibG9jayBvZiBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcpO1xuICAgICAgdGhpcy5tb2RlbENoYW5nZWRzZXJ2ZXIubmV4dCgpO1xuICAgIH1cblxuICB9XG5cblxuICBmaWx0ZXJhdXRvdmFsKGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdmaWx0ZXJhdXRvdmFsJywgZGF0YSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0pO1xuICAgIGNvbnN0IGF1dG9zZWx2YWwgPSB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXTtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdICE9IG51bGwgJiYgdGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gJycpIHtcbiAgICAgIGNvbnN0IGZpbHRlcnZhbCA9IGRhdGEudmFsdWVzLmZpbHRlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZScsIGUsIGZpZWxkdmFsKVxuICAgICAgICByZXR1cm4gZS5uYW1lLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhhdXRvc2VsdmFsLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gZmlsdGVydmFsO1xuICAgIH1cbiAgfVxuICByZXNldGF1dG9jb21wKHZhbDogYW55KSB7XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsLmZpZWxkKTtcbiAgICBlbC52YWx1ZSA9ICcnO1xuICB9XG4gIGF1dG9zZWFyY2hmdW5jdGlvbih2YWx1ZTogYW55LCBkYXRhOiBhbnksIGl0ZW06IGFueSkge1xuICAgIC8vIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSA9ICcnO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b3NlYXJjaGlucHV0LCAnYXNpJywgZGF0YSwgdmFsdWUsIGl0ZW0pO1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdmFsdWVdID09IG51bGwpIHtcbiAgICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPSBbXTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF1dG9zZWFyY2gsICdhdXRvc2VhcmNoIDExMzAnKVxuICAgIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0ucHVzaChkYXRhKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gbnVsbDtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gICAgY29uc3QgZWw6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvY29tcGxldGVzZWFyY2gnICsgdmFsdWUpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0pO1xuICAgIC8vIHJlc2V0IGF1dG8gc2VhcmNoIGRhdGEgIVxuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsZGF0YSwnc3MnLHRoaXMuYXV0b3NlYXJjaCk7XG4gICAgLypsZXQgdmFsOiBhbnkgPSB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSAhPW51bGwgJiYgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAwICYmIHsgJG9yOiBbdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS50b0xvd2VyQ2FzZSgpLCB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvVXBwZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV1dIH0pIGNvbmRpdGlvblt2YWx1ZSArICdfcmVnZXgnXSA9IHZhbDtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9OyovXG4gICAgLy8gbGV0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRlX3NlYXJjaF9lbmRwb2ludHZhbDtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJlc3VsdC5yZXMpO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAvLyB9KTtcbiAgfVxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gPT0gJycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hzdHJzYXJyLmluZGV4T2YodGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgJ2luZGV4Jyk7XG4gICAgICBkZWxldGUgdGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXTtcbiAgICAgIC8vIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIuc3BsaWNlKHZhbHVlLCAxKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0gPSAoeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0c2VhcmNoZnVuY3Rpb24nLCB2YWx1ZSwgaXRlbSwgdGhpcy5zZWFyY2hzdHJzYXJyKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGNvbnN0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgeyBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7IH1cbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gYWRkIGxvYWRlclxuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICAvL2Nsb3NlIGxvYWRlclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuICByZWZyZXNoZGF0YSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycpXG4gICAgdGhpcy5hdXRvc2VhcmNoID0gW107XG4gICAgdGhpcy50c2VhcmNoID0gW107XG4gICAgdGhpcy5zZWxlY3RzZWFyY2ggPSBbXTtcbiAgICB0aGlzLnN0YXJ0X2RhdGUgPSBudWxsO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgIHRoaXMuZW5kX2RhdGUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5hbGxTZWFyY2hDb25kID0gW107XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9IG51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVmcmVzaCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIGdldHN0YXR1cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuICdOL0EnO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgY29uc3QgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGNvbnN0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIHNlbEJveC52YWx1ZSA9IGZ1bGx1cmw7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgIHNlbEJveC5mb2N1cygpO1xuICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcblxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29waWVkIFN1Y2Nlc3NmdWxseSAhISAnIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5pbnRlcm5hbGxpbmsodmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsLnJvdXRlXSk7XG4gIH1cblxuXG4gIG9wZW5pbnRlcm5hbGxpbmt3aXRocGFyYW0odmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHJkYXRhOiBhbnkgPSBbXTtcbiAgICByZGF0YS5wdXNoKHZhbC5yb3V0ZSk7XG4gICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgcmRhdGEucHVzaChkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygncmFkYXQnLCByZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocmRhdGEpO1xuICB9XG5cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEnLHZhbCxkYXRhKTtcbiAgICBjb25zdCBkYXRhYXJyID0gW107XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgIHRlbXBhcnIucHVzaCh2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gIT0gJ2ltYWdlJyAmJiB2YWwuZGF0YWZpZWxkc1t2XSAhPSAndmlkZW8nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzcycsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiB0eXBlb2YgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZicsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2FmZScsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2goKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzczIyJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyA+IDxici8+Jyk7IH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAndmlkZW8nKSB7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGh0bWwnLCB0ZW1waHRtbCwgZGF0YVt2YWwuZGF0YWZpZWxkc10sIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goJ04vQScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9jYWwgZGF0YSBtJywgZGF0YWFycik7XG4gICAgbGV0IHJlczogYW55ID0gZGF0YWFycjtcblxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YWFycicsZGF0YWFycik7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICByZXMubWVzc2FnZSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJywgJ21vZGFsLWxvY2FsZGF0YSddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG4gIH1cblxuXG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEnLHZhbCxkYXRhKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGxpbms6IGFueSA9IHRoaXMuYXBpdXJsdmFsICsgdmFsLmVuZHBvaW50O1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgc291cmNlW3ZhbC5wYXJhbV0gPSBkYXRhLl9pZDtcbiAgICBpZiAodmFsLm90aGVycGFyYW0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBuIGluIHZhbC5vdGhlcnBhcmFtKSB7XG4gICAgICAgIHNvdXJjZVt2YWwub3RoZXJwYXJhbVtuXV0gPSBkYXRhW3ZhbC5vdGhlcnBhcmFtW25dXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2FkZXJyb3cgPSBkYXRhLl9pZDtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcblxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiByZXN1bHQubXNnIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcycscmVzdWx0KTtcbiAgICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVtcHJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2RhdGE+Pj4nLCByZXNkYXRhKTtcbiAgICAgICAgaWYgKHZhbC5kYXRhZmllbGRzICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIxIGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsLmRhdGFmaWVsZHMnLCB2YWwuZGF0YWZpZWxkc1tiMV0pO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgYjIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2IyJyxiMixkYXRhW2IyXSxkYXRhYXJyW2IyXVswXSk7XG4gICAgICAgICAgICAvLyBpZiAoZGF0YWFycltiMl1bMF0gPT0gdmFsLmRhdGFmaWVsZHNbYjFdKSByZXNkYXRhZm9ybW9kYWxbYjFdID0gW2RhdGFhcnJbYjJdWzBdLCBkYXRhYXJyW2IyXVsxXV07XG4gICAgICAgICAgICB0ZW1wcmRhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXSA9IHJlc2RhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlc2RhdGEgPSB0ZW1wcmRhdGE7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFhcnIgPSBbXTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgICAgICBmb3IgKGNvbnN0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgICAgaWYgKHYgIT0gJ2ltYWdlJyAmJiB2ICE9ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdICE9IG51bGwgJiYgdHlwZW9mIChyZXNkYXRhW3ZdKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzdicsIHJlc2RhdGFbdl0pO1xuICAgICAgICAgICAgICBpZiAocmVzZGF0YVt2XS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXNkYXRhW3ZdKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgcmVzZGF0YVt2XSArICcgPiA8YnIvPicpOyB9XG4gICAgICAgICAgaWYgKHYgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyByZXNkYXRhW3ZdICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgZGF0YWFycltiXVsxXSwgZGF0YWFycltiXVswXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IGRhdGFhcnJbYl07IH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgICAgIGRhdGFhcnIgPSByZXNkYXRhO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2MgYXBpIGRhdGEgJywgcmVzZGF0YSk7XG4gICAgICAgIC8vIGxldCByZXNkYXRhZm9ybW9kYWw6IGFueSA9IHt9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhZm9ybW9kYWwnLCBkYXRhYXJyLCBkYXRhYXJyKTtcbiAgICAgICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhYXJyWydtZXNzYWdlJ10gPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnYXBpLWRhdGEnXSxcbiAgICAgICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFyciB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuXG4gIH1cblxuXG4gIG9wZW5leHRsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyx2YWwsZGF0YSk7XG4gICAgbGV0IHF0ZXh0OiBhbnkgPSAnJztcbiAgICBsZXQgZnVsbGxpbms6IGFueSA9ICcnO1xuICAgIGZ1bGxsaW5rID0gdmFsLmxpbms7XG4gICAgaWYgKHZhbC5wYXJhbXR5cGUgPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgJz0nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHYpID09IDApIHsgZnVsbGxpbmsgPSBmdWxsbGluayArICc/JyArIHF0ZXh0OyB9XG4gICAgICAgIGlmIChwYXJzZUludCh2KSAhPSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnJicgKyBxdGV4dDsgfVxuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG4gICAgfVxuICAgIGlmICh2YWwucGFyYW10eXBlICE9IG51bGwgJiYgdmFsLnBhcmFtdHlwZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgLy8gcXRleHQgPSB2YWwucGFyYW1bdl0ucSArIFwiPVwiICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcblxuICAgICAgICBmdWxsbGluayA9IGZ1bGxsaW5rICsgJy8nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgICB9XG4gICAgICAvLyB2YWwubGluaz1mdWxsbGluaztcblxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBzZXRUaW1lb3V0XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsnLGZ1bGxsaW5rLGRhdGEscXRleHQpO1xuICAgIH0sIDEwKTtcblxuICAgIHdpbmRvdy5vcGVuKGZ1bGxsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIGNsaWNrdXJsKHZhbDogYW55LCB1cmw6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKTtcbiAgfVxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgY2hlY2tlZGxpc3QoKSB7XG4gICAgLy8gdGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZGF0YTogYW55ID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubWFwKHggPT4geC5faWQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tlZGxpc3QnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIHNlbGRhdGEpO1xuICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0aW9uY2hhbmdlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQgfSk7XG4gICAgfSwgMTAwKTtcblxuXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaXNBbGxTZWxlY3RlZCcpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbiAhPSBudWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgICB0aGlzLmNoZWNrZWRsaXN0KCk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRhdGFba2V5LnJlcGxhY2UoL1xccy9nLCAnXycpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge307XG4gIH1cbiAgLyoqc2hvdyB2aWRlbyBtb2RhbCBvbiBjbGljayBvZiB0aGFtbmFpbCBmdW5jdGlvbiBieSBzb3VyYXYgKi9cbiAgZmV0Y2h2aWRlbyh2aWRlb2RhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybigndmlkZW9kYXRhJyx2aWRlb2RhdGEpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVmlkZW9QbGF5ZXIsIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94LXZpZGVvcGxheWVyLXByZXZpZXcnLCAndmlkZW8tbW9kYWwnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuICBvcGVubm90ZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVycm93ID0gdmFsLl9pZDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwubm90ZXMubGlzdGVuZHBvaW50LCB0aGlzLmp3dHRva2VudmFsLCB7IGlkOiB2YWwuX2lkIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQucmVzLCAnbGlzdCBub3RlcycpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ25vdGVzJywgdmFsKTtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnbm90ZXMtbW9kYWwnXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlzY29uZmlybWF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBub3RlczogdHJ1ZSwgYXBpdXJsOiB0aGlzLmFwaXVybHZhbCxcbiAgICAgICAgICBub3RlZGF0YTogdGhpcy5saWJkYXRhdmFsLm5vdGVzLCByb3dkYXRhOiB2YWwsXG4gICAgICAgICAgand0dG9rZW52YWw6IHRoaXMuand0dG9rZW52YWwsXG4gICAgICAgICAgbGlzdGRhdGE6IHJlc3VsdC5yZXMsXG4gICAgICAgICAgX3NuYWNrQmFyOiB0aGlzLl9zbmFja0JhclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIHZpZXdkYXRhKGRhdGExOiBhbnkpIHtcbiAgICBsZXQgZGF0YTogYW55O1xuICAgIGRhdGEgPSBkYXRhMTtcbiAgICBjb25zdCBkYXRhMjogYW55ID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBjb25zdCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSB7IGRhdGFba2V5XSA9ICdZZXMnOyB9XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSBmYWxzZSkgeyBkYXRhW2tleV0gPSAnTm8nOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW2tleV0gKyAnPjxici8+JztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlID09ICdpbWFnZScpIHtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBpbWd2YWw6YW55PXRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmZpbGV1cmwrZGF0YVtrZXldW2tdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1ndmFsKTs9XCIrXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldW2tdICsgJz48YnIvPicpO1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIilcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgIT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgZGF0YVtrZXldW2tdICsgJzwvc3Bhbj48YnIvPicpO1xuXG5cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvYmprIGluIGRhdGFba2V5XVtrXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgb2JqayArICcgOiAnICsgZGF0YVtrZXldW2tdW29iamtdICsgJzwvc3Bhbj48YnIvPicpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IHRlbXBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuIGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW25dICE9IG51bGwgJiYgZGF0YVtuXSAhPSAnJykge1xuICAgICAgICBkYXRhMltuXSA9IGRhdGFbbl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dPScnO1xuICAgICAgZGVsZXRlIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dO1xuICAgIH1cbiAgICBsZXQgcmVzID0gT2JqZWN0LmVudHJpZXMoZGF0YTIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWV3IGRhdGEnLHJlcyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgcmVzW2JdWzFdLCByZXNbYl1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSByZXNbYl07IH1cblxuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICAgIHJlcyA9IHJlc2RhdGE7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgIH1cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICAgIG1heEhlaWdodDogJzEwMDB2aCcsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZXRhaWwtdmlldyddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG5cbiAgfVxuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgcGFuZWxDbGFzczogJ2N1c3RvbS1ib3R0b21zaGVldCcsIGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgZGF0YS5zdGF0dXMgPSByZXN1bHQudmFsO1xuICAgICAgICBkYXRhLmlkID0gZGF0YS5faWQ7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXModGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwudXBkYXRlZW5kcG9pbnQsIGRhdGEsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvLyB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ21hbmFnZS1zdGF0dXMnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9ubGlzdG5lcihyb3c6IGFueSwgY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tYnV0dG9ubGlzdG5lcicsIHJvdywgY3VzdG9tYnV0dG9uKTtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2N1c3RvbWJ1dHRvbmNsaWNrJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIGN1c3RvbWJ1dHRvbmNsaWNrOiB7XG4gICAgICAgIGRhdGE6IHJvdywgYnRuaW5mbzogY3VzdG9tYnV0dG9uXG4gICAgICB9XG4gICAgfSk7XG4gIH1cbiAgY3VzdG9tYnV0dG9uZnVuYyhkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YScpO1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpOyAgICAvLyByb3cgZGF0YVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuY3VzdG9tYnV0dG9udmFsKTsgICAgLy8gb2JqZWN0IGZyb20gd2hlcmUgdGhlIGxpYnJhcnkgaGFzIGJlZW4gdXNlZFxuICAgIGxldCB1bnNhZmV1cmw6IGFueSA9IHRoaXMuY3VzdG9tYnV0dG9udmFsLnVybDsgICAvLyBpZnJhbWUgdXJsXG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuY3VzdG9tYnV0dG9udmFsLmZpZWxkcykge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgZGF0YVt0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHNbYl1dO1xuICAgIH1cbiAgICB1bnNhZmV1cmwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodW5zYWZldXJsKTsgICAvLyBmb3Igc2FuaXRpemluZyB0aGUgdXJsIGZvciBzZWN1cml0eSwgb3RoZXJ3aXNlIGl0IHdvbid0IGJlIGFibGUgdG8gc2hvdyB0aGUgcGFnZSBpbiBpZnJhbWUsIGhlbmNlIG1vZGFsXG5cbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHsgICAgICAgLy8gZm9yIG9wZW5pbmcgdGhlIG1vZGFsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdjdXN0b20tZGF0YS1tb2RhbCcsXG4gICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogW3sgZGF0YSwgY3VzdG9tZGF0YTogdW5zYWZldXJsIH1dIH1cbiAgICB9KTtcblxuXG4gIH1cblxuXG5cbiAgbWFuYWdlc3RhdHVzbXVsdGlwbGUoKSB7XG5cbiAgICBjb25zdCBpZHM6IGFueSA9IFtdO1xuICAgIGxldCBjOiBhbnk7XG4gICAgZm9yIChjIGluIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkKSB7XG5cbiAgICAgIGlkcy5wdXNoKHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkW2NdLl9pZCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdkYXRhJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgZGF0YTogeyBpdGVtczogdGhpcy5zdGF0dXNhcnJ2YWwgfSB9KTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gYnMuYWZ0ZXJEaXNtaXNzZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIC8vIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgLy8gZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICBjb25zdCBuZXdzdGF0dXM6IGFueSA9IHJlc3VsdC52YWw7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS50b2dnbGVzdGF0dXNtYW55KHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50bWFueSwgaWRzLCByZXN1bHQudmFsLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLm9sZGRhdGEpIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICAgIGlmIChpZHMuaW5kZXhPZih0aGlzLm9sZGRhdGFbY10uX2lkKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhW2NdLnN0YXR1cyA9IG5ld3N0YXR1cztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICAvLyB0aGlzLmFsbFNlYXJjaCgpO1xuXG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ3Rvb2dsZS1tYW55J10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1N0YXR1cyB1cGRhdGVkIHN1Y2Nlc3NmdWxseSEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGRlbGV0ZW11bHRpcGxlKCkge1xuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbXVsdGlwbGUnXSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbWVzc2FnZTogJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhlc2UgcmVjb3Jkcz8gVGhpcyBwcm9jZXNzIGNhbiBub3QgYmUgdW5kb25lLicsXG4gICAgICAgIHR5cGU6ICdjb25maXJtJ1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnN0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcblxuICAgICAgaWYgKHJlc3VsdCA9PSAneWVzJykge1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UuZGV0ZU1hbnlEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLmRlbGV0ZWVuZHBvaW50bWFueSwgaWRzLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgYyBpbiBpZHMpIHtcbiAgICAgICAgICAgICAgdGhpcy5vbGRkYXRhID0gdGhpcy5vbGRkYXRhLmZpbHRlcihvbGRkYXRhID0+IG9sZGRhdGEuX2lkICE9IGlkc1tjXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVkZWxldGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1tdWx0aXBsZSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdSZWNvcmQocykgIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5ICEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdlcnJvcicpIHtcbiAgICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgICBkYXRhOiByZXN1bHRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG4gIH1cbiAgZGVsZXRlZGF0YShkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBhbGVydCg1KTtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLXNpbmdsZSddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyBUaGlzIHByb2Nlc3MgY2FuIG5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gZGF0YS5faWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2RlbGV0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZWRpdGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZWRpdHJvdXRldmFsLCBkYXRhLl9pZF0pO1xuICB9XG5cblxuICBzb3J0dGFibGUoZmllbGQ6IGFueSwgdHlwZTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coZmllbGQsIHR5cGUpXG4gICAgdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCA9IGZpZWxkO1xuICAgIHRoaXMuc29ydGRhdGF2YWwudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgfVxuXG5cblxuICBhbGxTZWFyY2goKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXRcIik7XG5cbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWw7XG4gICAgY29uc3QgbGluazEgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbCArICctY291bnQnO1xuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgLy8gdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoc3Ryc2FyciwgJ3RoaXMuc2VhcmNoc3Ryc2FycicpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAnc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCcpO1xuICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnRzZWFyY2gpIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdhbGwgc2VhcmNoIHRoaXMudHNlYXJjaCcsIHRoaXMudHNlYXJjaFtpXSk7XG4gICAgICBpZiAodGhpcy50c2VhcmNoW2ldICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSAhPSAnJykge1xuICAgICAgICB0ZXh0U2VhcmNoW2ldID0geyAkcmVnZXg6IHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcbiAgICAvLyB0aGlzLmF1dG9zZWFyY2g7XG4gICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgZm9yIChjb25zdCBtIGluIHRoaXMuYXV0b3NlYXJjaFtiXSkge1xuICAgICAgICBjb25zdCB0djogYW55ID0ge307XG4gICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIC8vIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmIChhdXRvc2VhcmNoLiRvciA9PSBudWxsKSB7IGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRhbmQgMycpXG5cbiAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvcyBxcSsrJywgYXV0b3NlYXJjaCx0aGlzLmF1dG9zZWFyY2gpO1xuXG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICB0aGlzLm9sZGxpbWl0cmFuZ2UgPSB0aGlzLmxpbWl0Y29uZHZhbDtcblxuICAgIGxldCBjb25kaXRpb25vYmo6IG9iamVjdCA9IHt9O1xuXG4gICAgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdzZWxlY3RTZWFyY2hfY29uZGl0aW9uJylcblxuICAgIHRoaXMuYWxsU2VhcmNoQ29uZCA9IGNvbmRpdGlvbm9iajtcblxuICAgIC8vIGNvbmRpdGlvbm9iaiA9IE9iamVjdC5hc3NpZ24oe30sIHRleHRTZWFyY2gsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sIGF1dG9zZWFyY2gsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqICYgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb247XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqLmNvbmNhdCh0aGlzLmxpYmRhdGEuYmFzZWNvbmRpdGlvbik7XG4gICAgLy8gZm9yIChsZXQgYiBpbiBjb25kaXRpb25vYmopIHtcbiAgICAvLyAgIC8vIGlmKGNvbmRpdGlvbm9ialtiXSlcbiAgICAvLyAgIGZvciAobGV0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24pIHtcbiAgICAvLyAgICAgaWYgKGMgPT0gYikge1xuICAgIC8vICAgICAgIC8vIGNvbmRpdGlvbm9ialtiXT17fTtcbiAgICAvLyAgICAgICBsZXQgdG90YWxjb25kOiBhbnk7XG4gICAgLy8gICAgICAgaWYgKHR5cGVvZiAoY29uZGl0aW9ub2JqW2JdKSAhPSAnb2JqZWN0JylcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCB7ICRlcTogY29uZGl0aW9ub2JqW2JdIH0pO1xuICAgIC8vICAgICAgIGVsc2VcbiAgICAvLyAgICAgICAgIHRvdGFsY29uZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCBjb25kaXRpb25vYmpbYl0pO1xuXG4gICAgLy8gICAgICAgY29uc29sZS5sb2coJ2luIGlmIGJsaycsIGMsIGIsIGNvbmRpdGlvbm9ialtiXSwgdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb25bY10sIHRvdGFsY29uZCk7XG4gICAgLy8gICAgICAgY29uZGl0aW9ub2JqW2JdID0gdG90YWxjb25kO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIGNvbmRpdGlvbm9ialtjXSA9IHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdO1xuXG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgfVxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZygndGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24nLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sICdjb25kaXRpb25vYmonLCBjb25kaXRpb25vYmosICd0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbicsIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAvLyBjb25kaXRpb25vYmogPSBjb25kaXRpb25vYmouY29uY2F0KHRoaXMubGliZGF0YS5iYXNlY29uZGl0aW9uKTtcblxuICAgIHNvdXJjZSA9IHtcbiAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgIHNraXA6IDBcbiAgICAgIH0sXG4gICAgICBzb3J0OiB7XG4gICAgICAgIGZpZWxkOiB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkLFxuICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgIH0sXG4gICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICB9O1xuXG4gICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsIGNvbmRpdGlvbm9iaiwgJ2VkJywgdGhpcy5lbmRfZGF0ZSwgJ2wnLCBPYmplY3Qua2V5cyhjb25kaXRpb25vYmopLmxlbmd0aCk7XG4gICAgaWYgKE9iamVjdC5rZXlzKGNvbmRpdGlvbm9iaikubGVuZ3RoIDwgMCkge1xuICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gU2VhcmNoIGNyaXRlcmlhIHNlbGVjdGVkICEhICcgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm47XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgLy8gcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdzZWFyY2gnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaiwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG4gICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IFNlYXJjaCBvZiBkYXRhIGxvYWRlZCcgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHRoaXMucmVzY291bnQgPSAwOyBcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIHN1Y2ggc2VhcmNoIHJlY29yZCBmb3VuZCAhIScgfVxuICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSBmYWxzZTtcblxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuXG5cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIHN0YXJ0ICovXG4gIGFydGlzdHhwUHJldmlldyhzaW5nbGVEYXRhOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHsgc291cmNlOiAnYmxvY2tjaGFpbnVzZXJfdmlldycsIGNvbmRpdGlvbjogeyBwb3N0c19pZF9vYmplY3Q6IHNpbmdsZURhdGEuX2lkIH0sIHRva2VuOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3REYXRhKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtYXhwJ10sXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG5cblxuXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAvLyBwdWJsaWMgbm90ZXN2YWw6YW55PW51bGwsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbGliIGRhdGEgaW4gbW9kYWwgJywgdGhpcy5kYXRhLCB0aGlzLmRhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLCB0aGlzLmRhdGEucm93ZGF0YS5ibG9ndGl0bGUpO1xuICAgIHRoaXMuZGF0YS5jb2xvciA9ICdwcmltYXJ5JztcbiAgICB0aGlzLmRhdGEubW9kZSA9ICdpbmRldGVybWluYXRlJztcbiAgICB0aGlzLmRhdGEubG9hZGVydmFsdWUgPSA1MDtcbiAgICB0aGlzLmRhdGEuYnVmZmVyVmFsdWUgPSA3NjtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG4gIGRlbGV0ZW5vdGUoaW5kZXg6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIC8vIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICBjb25zdCBzb3VyY2U6IGFueSA9IHtcblxuICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgIGluZGV4XG4gICAgICAvLyBub3RlOiB0aGlzLmRhdGEubm90ZXN2YWwsXG4gICAgICAvLyB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICB9O1xuICAgIHRoaXMuZGF0YS5sb2FkaW5nMSA9IGluZGV4O1xuICAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaCh0aGlzLmRhdGEuYXBpdXJsICsgdGhpcy5kYXRhLm5vdGVkYXRhLmRlbGV0ZWVuZHBvaW50LCB0aGlzLmRhdGEuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ2FkZCBub3RlcycpO1xuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5saXN0ZGF0YS5wdXNoKHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCBjcmVhdGVkX2RhdGU6IERhdGUubm93KCkgfSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICB0aGlzLmRhdGEubGlzdGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcxID0gbnVsbDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG4gICAgLy8gfVxuICB9XG4gIGFkZG5vdGVzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICAgIGlmICh0aGlzLmRhdGEubm90ZXN2YWwgIT0gbnVsbCAmJiB0aGlzLmRhdGEubm90ZXN2YWwgIT0gJycpIHtcbiAgICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge1xuXG4gICAgICAgIGlkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsXG4gICAgICAgIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCxcbiAgICAgICAgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsXG4gICAgICB9O1xuICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuYWRkZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgIGlmICh0aGlzLmRhdGEubGlzdGRhdGEgPT0gbnVsbCkgeyB0aGlzLmRhdGEubGlzdGRhdGEgPSBbXTsgfVxuICAgICAgICAgIHRoaXMuZGF0YS5saXN0ZGF0YS51bnNoaWZ0KHsgX2lkOiB0aGlzLmRhdGEucm93ZGF0YS5faWQsIG5vdGVzOiB7IHVzZXJpZDogdGhpcy5kYXRhLm5vdGVkYXRhLnVzZXIsIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCwgdXNlcjogdGhpcy5kYXRhLm5vdGVkYXRhLmN1cnJlbnR1c2VyZnVsbG5hbWUsIGNyZWF0ZWRfZGF0ZTogRGF0ZS5ub3coKSB9IH0pO1xuICAgICAgICAgIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHRoaXMuZGF0YS5saXN0ZGF0YSk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnYmxhbmsgbm90ZXMnKTtcbiAgICAgIHRoaXMuZGF0YS5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm90ZXMgY2FuXFwndCBiZSBibGFuayAhISAnIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldHR5cGVvZih2YWw6IGFueSkge1xuICAgIHJldHVybiB0eXBlb2YgKHZhbCk7XG4gIH1cbiAgc2FuaXRpemVVcmwodW5zYWZldXJsOiBhbnksIGRhdGE6IGFueSwgcm93ZGF0YTogYW55KSB7XG4gICAgZm9yIChjb25zdCBiIGluIGRhdGEpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIHJvd2RhdGFbZGF0YVtiXV07XG5cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh1bnNhZmV1cmwpO1xuICB9XG5cbn1cblxuXG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYm90dG9tLXNoZWV0JyxcbiAgdGVtcGxhdGVVcmw6ICdib3R0b20tc2hlZXQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEJvdHRvbVNoZWV0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBib3R0b21TaGVldFJlZjogTWF0Qm90dG9tU2hlZXRSZWY8Qm90dG9tU2hlZXQ+LCBASW5qZWN0KE1BVF9CT1RUT01fU0hFRVRfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybihcImJvdHRvbS1zaGVldFwiLGRhdGEpO1xuICB9XG5cbiAgb3BlbkxpbmsodmFsOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLmJvdHRvbVNoZWV0UmVmLmRpc21pc3ModmFsKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIHZpZGVvIHBsYXllciAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndmlkZW9wbGF5ZXInLFxuICB0ZW1wbGF0ZVVybDogJ3ZpZGVvcGxheWVyLmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBWaWRlb1BsYXllciB7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPFZpZGVvUGxheWVyPixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybigndmlkZW9wbGF5ZXJNb2RhbCcsZGF0YS5wcmV2aWV3RGF0YS52aWRlbyk7XG4gIH1cblxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipsaXN0aW5nIEltYWdlIFZpZXcgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2ltYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdpbWdfbW9kYWxfdmlldy5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3IHtcblxuICAvLyBwdWJsaWMgZGF0YTphbnk7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxJbWFnZVZpZXc+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKCdJbWFnZVZpZXdNb2RhbCcsIGRhdGEpO1xuICB9XG4gIGFkZG5vdGVzKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsb2cnLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrJyxcbiAgdGVtcGxhdGVVcmw6ICdzbmFjay1iYXItY29tcG9uZW50LWV4YW1wbGUtc25hY2suaHRtbCcsXG4gIHN0eWxlczogW2BcbiAgICAuZXhhbXBsZS1waXp6YS1wYXJ0eSB7XG4gICAgICBjb2xvcjogaG90cGluaztcbiAgICB9XG4gIGBdLFxufSlcbmV4cG9ydCBjbGFzcyBTbmFja2JhckNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzbmFja0JhclJlZjogTWF0U25hY2tCYXJSZWY8U25hY2tiYXJDb21wb25lbnQ+LFxuICAgIEBJbmplY3QoTUFUX1NOQUNLX0JBUl9EQVRBKSBwdWJsaWMgZGF0YTogYW55XG4gICkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdzbmFjaycsdGhpcy5kYXRhKTtcbiAgfVxufVxuIl19