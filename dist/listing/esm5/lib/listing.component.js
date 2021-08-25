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
    function ListingComponent(_apiService, dialog, bottomSheet, fb, router, resolver, container, _http, sanitizer, _snackBar, _elementRef, observableService) {
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
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            // this.filterautoval(this.currentautocompleteitem);
            console.log('pageChangeValue subscribed !! ', _this.pageChangeValue, _this.pageCountArray.length);
            if (_this.pageChangeValue > _this.lastpageCountArray) {
                _this._snackBar.openFromComponent(SnackbarComponent, {
                    duration: 6000,
                    data: { errormessage: 'Sorry!! Page number is out of range, highest range is ' + _this.lastpageCountArray }
                });
            }
            if (_this.pageCountArray.length + 1 > _this.pageChangeValue) {
                _this.paging(_this.pageChangeValue, '');
            }
            else {
                //page count out of bound 
                _this.pageChangeValue = _this.limitcondval.pagecount;
            }
            console.log("first", _this.pageChangeValue, "+++", _this.pageCountArray.length);
        }));
        this.subscriptions[this.subscriptioncount++] = this.limitChangrd
            .pipe(debounceTime(2500))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            // this.filterautoval(this.currentautocompleteitem);
            console.log('pageChangeValue subscribed !! ', _this.pageChangeValue, _this.pageCountArray.length);
            if (_this.pageChangeValue) {
                _this.paging(_this.pageChangeValue, '');
            }
            else {
                //page count out of bound 
                _this.pageChangeValue = _this.limitcondval.pagecount;
            }
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChanged
            .pipe(debounceTime(1000))
            .subscribe((/**
         * @return {?}
         */
        function () {
            // this.searchResult$ = this.api.search(this.model);
            // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
            _this.filterautoval(_this.currentautocompleteitem);
        }));
        this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
            .pipe(debounceTime(1000))
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
                // console.log("autocomplete debounceTime(1000)",this.libdataval.basecondition);
                if (typeof _this.libdataval.basecondition == 'undefined' || _this.libdataval.basecondition == null) {
                    _this.libdataval.basecondition = {};
                }
                /** @type {?} */
                var textSearch = {};
                // this.searchstrsarr.push({ val: this.tsearch[value], label: item.label, key: value });
                // console.log(this.searchstrsarr, 'this.searchstrsarr');
                // console.log(this.search_settingsval.search, 'search_settingsval.search');
                for (var i in _this.tsearch) {
                    // console.log('all search this.tsearch', this.tsearch[i]);
                    if (_this.tsearch[i] != null && _this.tsearch[i].toString().toLowerCase() != '') {
                        textSearch[i] = { $regex: _this.tsearch[i].toString().toLowerCase() };
                    }
                }
                /** @type {?} */
                var buttonsearch = {};
                for (var bs in _this.buttonSearchData) {
                    for (var k in _this.buttonSearchData[bs].value) {
                        /** @type {?} */
                        var bt = {};
                        bt[_this.buttonSearchData[bs].field] = _this.buttonSearchData[bs].value[k].val.toString().toLowerCase();
                        if (buttonsearch.$or == null) {
                            buttonsearch.$or = [];
                        }
                        // console.log(bt,'bt',bs,'bs')
                        buttonsearch.$or.push(bt);
                    }
                }
                source = {
                    search_str: _this.autosearchinput[_this.currentautocompleteitem.field],
                    sort: {
                        field: _this.sortdataval.field,
                        type: _this.sortdataval.type
                    },
                    allSearchCond: _this.allSearchCond,
                    basecondition: _this.libdataval.basecondition,
                    datasearch: _this.dateSearch_condition,
                    textsearch: textSearch,
                    buttonSearch: buttonsearch,
                    selectsearch: _this.selectSearch_condition
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
                        // autocomplete searching snakbar
                        // this._snackBar.openFromComponent(SnackbarComponent, {
                        //   duration: 2000,
                        //   data: { errormessage: 'New Search of data loaded ' }
                        // });
                    }
                    else {
                        _this.currentautosearcharr = [];
                        // this._snackBar.openFromComponent(SnackbarComponent, {
                        //   duration: 6000,
                        //   data: { errormessage: 'No such search record found !!' }
                        // });
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
    Object.defineProperty(ListingComponent.prototype, "languageDataset", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.languagedataset = value;
            // console.log(this.grab_linkval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListingComponent.prototype, "setconvertToLanguage", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.convertToLanguage = value;
            // console.log("developer test",this.convertToLanguage)
            if (typeof this.convertToLanguage != 'undefined' && this.convertToLanguage != null && this.convertToLanguage != '') {
                this.observableService.setconvertToLanguage(this.convertToLanguage);
            }
        },
        enumerable: true,
        configurable: true
    });
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
            if (this.limitcondval.pagecount == null) {
                this.limitcondval.pagecount = 1;
            }
            this.newcurrentpagingVal = this.limitcondval.pagecount;
            this.pageChangeValue = this.limitcondval.pagecount;
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
            this.pageCountArray = new Array(Math.ceil(date_search_source_countval / this.limitcondval.limit));
            this.lastpageCountArray = Math.ceil(date_search_source_countval / this.limitcondval.limit);
            console.log("this.pageCountArray", Math.ceil(date_search_source_countval / this.limitcondval.limit));
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
            // console.log("this.apiurlval",this.apiurlval);
            this.observableService.setapiUrl(this.apiurlval + this.libdataval.addlanguagedataEndpoint);
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
    /**
     * @return {?}
     */
    ListingComponent.prototype.clickEvent = /**
     * @return {?}
     */
    function () {
        this.status = !this.status;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    ListingComponent.prototype.autocompletefunction = /**
     * @param {?} data
     * @return {?}
     */
    function (data) {
        this.currentautosearcharr = [];
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ListingComponent.prototype.ngOnChanges = /**
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
     * @param {?} i
     * @return {?}
     */
    ListingComponent.prototype.counter = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        return new Array(i);
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ListingComponent.prototype.onFieldChange = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        // console.log('query', query, this.pageCountArray.length);
        // if (query <= this.pageCountArray.length) {
        if (this.pageCountArray.length + 1 > query) {
            this.txtQueryChanged.next(query);
            // console.log('with in bound ');
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
    };
    /**
     * @param {?} query
     * @return {?}
     */
    ListingComponent.prototype.onFieldChangeforlimit = /**
     * @param {?} query
     * @return {?}
     */
    function (query) {
        // console.log('query', query, this.pageCountArray.length);
        // if (query <= this.pageCountArray.length) {
        if (query < 100) {
            this.limitChangrd.next(query);
            // console.log('with in bound ');
        }
        else {
            //page count out of bound 
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
        var _this = this;
        // console.log("this.languagedataset",this.languagedataset);
        this.observableService.setmultilingualData(this.languagedataset);
        // addlanguagedataEndpoint
        // console.log("this.apiurlval", this.apiurlval);
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
            // console.log("this.search_settingsval.datesearch++", this.search_settingsval.datesearch);
            if (_this.search_settingsval.datesearch != null && _this.search_settingsval.datesearch[0].value != null && _this.search_settingsval.datesearch[0].value != '') {
                _this.initiateSearch = true;
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
                _this.search_settingsval.datesearch[0].value.$lte = _this.search_settingsval.datesearch[0].value.$lte - 86399000;
                _this.start_date = new Date(_this.search_settingsval.datesearch[0].value.$gte);
                _this.end_date = new Date(_this.search_settingsval.datesearch[0].value.$lte);
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
        // console.log("this.searchstrsarr[type.field]", this.searchstrsarr[type.field]);
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
     * @param {?} flag
     * @return {?}
     */
    ListingComponent.prototype.paging = 
    // for managing pagination
    /**
     * @param {?} val
     * @param {?} flag
     * @return {?}
     */
    function (val, flag) {
        var _this = this;
        // const lval: any = this.limitcondval;
        console.log(this.oldlimitrange, 'this.oldlimitrange');
        this.selectedItem = val;
        if (this.limitcondval.pagecount == null)
            this.limitcondval.pagecount = 1;
        if (this.limitcondval.limit == null)
            this.limitcondval.limit = 10;
        this.oldlimitrange.push({
            skip: this.limitcondval.skip,
            limit: this.limitcondval.limit,
            pagecount: this.limitcondval.pagecount
        });
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
        var maxpagecount = Number(this.date_search_source_countval / (this.limitcondval.limit));
        maxpagecount = ~~(maxpagecount);
        // console.log('this.oldlimitrange', this.oldlimitrange, this.limitcondval, this.date_search_source_countval, maxpagecount);
        // console.log("limit++++", this.limitcondval.limit);
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
            // console.log("val>1 section ", this.limitcondval.pagecount);
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
        var textSearch = {};
        // console.log('this.limitcondval, in paging ', this.limitcondval);
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
        this.allpaginationpostData = source;
        /** @type {?} */
        var link = this.apiurlval + '' + this.datacollectionval;
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
        function (res) {
            if (_this.limitcondval.pagecount > 5 && _this.paginationtype == 2) {
                _this.newcurrentpagingVal = _this.limitcondval.pagecount - 5;
            }
            // if (this.limitcondval.pagecount > 5 && this.paginationtype == 2 && this.pageCountArray.length - this.limitcondval.pagecount < 10) {
            //   this.newcurrentpagingVal = this.limitcondval.pagecount - 4 ;
            //   console.log('in last range area ...', this.newcurrentpagingVal);
            // }
            if (_this.limitcondval.pagecount <= 5 && _this.paginationtype == 2) {
                _this.newcurrentpagingVal = 1;
            }
            // console.log("paging success", this.pageCountArray.length);
            // console.log("paging success", this.limitcondval.pagecount);
            // console.log('in common  range area ...', this.newcurrentpagingVal);
            _this.result = res;
            // console.log(this.result,'res');
            _this.newpagingcountFlag = true;
            if (_this.result.results.res != null && _this.result.results.res.length > 0) {
                _this.onLiblistingChange.emit({ action: 'paging', limitdata: _this.limitcondval, searchcondition: conditionobj, sortdata: _this.sortdataval, results: _this.result.results.res });
                // if (this.libdataval.footersettings != null) {pageChangeValue
                //   this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
                // }
                if (_this.pageChangeValue != _this.limitcondval.pagecount) {
                    _this.pageChangeValue = _this.limitcondval.pagecount;
                }
                setTimeout((/**
                 * @return {?}
                 */
                function () {
                    // console.log("this.libdataval.containerid",this.libdataval.containerid);
                    if (typeof _this.libdataval.containerid != 'undefined') {
                        document.getElementById(_this.libdataval.containerid).scrollIntoView({ behavior: "smooth" });
                    }
                }), 100);
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
                // console.log('o len', this.oldlimitrange.length, this.oldlimitrange,this.oldlimitrange[this.oldlimitrange.length-1]);
                _this.limitcondval.skip = _this.oldlimitrange[_this.oldlimitrange.length - 1].skip;
                _this.limitcondval.pagecount = _this.oldlimitrange[_this.oldlimitrange.length - 1].pagecount;
                _this.limitcondval.limit = _this.oldlimitrange[_this.oldlimitrange.length - 1].limit;
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
                _this.keepPagination = 1;
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
        // console.log('data1 ++++++++', data1)
        /** @type {?} */
        var data;
        data = data1;
        /** @type {?} */
        var data2 = [];
        /** @type {?} */
        var headerData = {};
        if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
            // console.log('== ++++++++', this.libdataval.preview_header)
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
        var bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });
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
        console.log("sorttable function data", field, type);
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
        // console.log("hit limitcondval",this.allpaginationpostData);
        // console.log("hit limitcondval",this.limitcondval);
        // console.log('this.keepPagination first',this.keepPagination);
        var _this = this;
        // console.log("hit limitcondval",this.allpaginationpostData);
        // console.log("hit limitcondval",this.limitcondval);
        // console.log('this.keepPagination first',this.keepPagination);
        // return;
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
        if (typeof (this.limitcondval.pagecount) != 'undefined') {
            // this.limitcondval.pagecount = this.limitcondval.pagecount;
            // this.limitcondval.skip = this.limitcondval.skip;
            //  console.log("typeof(this.limitcondval.pagecount)!='undefined'");
            this.oldlimitrange.push(this.limitcondval);
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
            this.oldlimitrange.push(this.limitcondval);
        }
        /** @type {?} */
        var conditionobj = {};
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
            // console.warn("conditionobj", conditionobj);
            source = this.allpaginationpostData;
            /** @type {?} */
            var tempsortvalue = {
                field: this.sortdataval.field,
                type: this.sortdataval.type
            };
            source.sort = tempsortvalue;
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
            this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe((/**
             * @param {?} res
             * @return {?}
             */
            function (res) {
                /** @type {?} */
                var result = {};
                result = res;
                // console.log("count log++", this.newcurrentpagingVal);
                // console.log("pageCountArray log++", this.pageCountArray);
                _this.pageCountArray = new Array(Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit));
                _this.lastpageCountArray = Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit);
                _this.pageChangeValue = _this.limitcondval.pagecount;
                _this.newcurrentpagingVal = _this.limitcondval.pagecount;
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
                console.log("count log++", _this.newcurrentpagingVal);
                result = res;
                _this.date_search_source_countval = (result.count);
                _this.pageCountArray = new Array(Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit));
                _this.lastpageCountArray = Math.ceil(_this.date_search_source_countval / _this.limitcondval.limit);
                _this.pageChangeValue = _this.limitcondval.pagecount;
                _this.newcurrentpagingVal = _this.limitcondval.pagecount;
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
                    template: "<div class=\"container \" id={{libdataval.containerid}}>\n\n\n    <mat-card>\n\n        <div class=\"searchiconcls\" *ngIf=\"searchBarFlagVal == true\">\n            <span class=\"material-icons iconcls\" matTooltip=\"{{searchBarToolTip}}\"\n                (click)=\"SearchBarToggle(searchBarFlag)\">\n                search\n            </span>\n        </div>\n\n\n\n        <div class=\"togglesearchcls\" *ngIf=\"searchBarFlag == true\">\n\n            <mat-toolbar-row class=\"searchbar listmaindivbody\" *ngIf=\"rescount>0\">\n\n\n                <ng-container class=\"inputfilterForloop\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n                    <ng-container *ngFor=\"let item of search_settingsval.textsearch\">\n                        <mat-form-field class=\"searchdiv pad-gap\">\n\n                            <input class=\"filterForText\" matInput (change)=\"textsearchfunction(item.field,item)\"\n                                (keyup)=\"textsearchfunction(item.field,item)\" [(ngModel)]='tsearch[item.field]'\n                                placeholder=\"{{item.label}}\">\n                            <span class=\"filterForTexticon\" matPrefix><i class=\"material-icons searchicon\">\n                                    search\n                                </i> &nbsp;</span>\n                        </mat-form-field>\n                    </ng-container>\n                </ng-container>\n\n                <ng-container class=\"inputfilterForAuto\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.search != null \">\n                    <mat-form-field class=\"filterForAuto searchdiv\" *ngFor=\"let item of search_settingsval.search\">\n\n\n                        <mat-chip-list #chipList aria-label=\"Fruit selection\">\n                            <mat-chip *ngFor=\"let v of autosearch[item.field]; let i=index;\" [selectable]=\"true\"\n                                [removable]=\"true\" (removed)=\"remove(v,i,item.field)\">\n                                {{v.name}}\n                                <mat-icon matChipRemove>cancel</mat-icon>\n                            </mat-chip>\n                            <input id=\"autocompletesearch{{item.field}}\" placeholder=\"{{item.label}} \"\n                                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                                [(ngModel)]=\"autosearchinput[item.field]\" (blur)=\"resetautocomp(item)\"\n                                (keyup)=\"autocompletechangedetected(item);\" (click)=\"autocompletefunction(item)\">\n                        </mat-chip-list>\n\n                        <!--[matChipInputSeparatorKeyCodes]=\"[ENTER, COMMA]\"-->\n                        <!--(matChipInputTokenEnd)=\"addautosearchdata($event)\"-->\n\n\n                        <!--<input class=\"filterForAutoInput\"  type=\"text\" placeholder=\"{{item.label}}\" matInput [(ngModel)]=\"autosearch[item.field]\" [matAutocomplete]=\"auto\">-->\n                        <mat-autocomplete #auto=\"matAutocomplete\">\n                            <!--<mat-option *ngFor=\"let option of item.values | async\" [value]=\"option[item.field]\" (click)=\"autosearchfunction(item.field)\">\n                                {{option[item.field]}}\n                            </mat-option>-->\n\n                            <mat-option *ngFor=\"let statusval of currentautosearcharr\" [value]=\"statusval.val\"\n                                (click)=\"autosearchfunction(item.field,statusval,item)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-autocomplete>\n                    </mat-form-field>\n                </ng-container>\n\n\n\n                <!--      <span *ngIf=\"search_settingsval !=null && search_settingsval != null \">\n    \n          <mat-form-field *ngFor=\"let item of search_settingsval.search\">\n            <mat-label>{{item.label}}</mat-label>\n            <mat-select>\n              <mat-option *ngFor=\"let status of preresult\" [value]=\"status\" (click)=\"autosearchfunction(status.email)\">\n                {{status.email}}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n    \n          </span>-->\n                <!--  <ng-container  *ngIf=\"search_settingsval !=null && search_settingsval.textsearch != null \">\n    &lt;!&ndash;        <span *ngFor=\"let status of this.search_settingsval.textsearch\">&ndash;&gt;\n    &lt;!&ndash;        <mat-form-field *ngFor=\"let statusval of status.value\">&ndash;&gt;\n            <mat-form-field *ngFor=\"let status of this.search_settingsval.textsearch\">\n                  <input matInput (keyup)=\"applyFilter1($event.target.value, status)\" placeholder=\"{{status.label}}\">\n            </mat-form-field>\n    &lt;!&ndash;              </span>&ndash;&gt;\n          </ng-container>-->\n\n\n                <ng-container class=\"filterForTexticon\"\n                    *ngIf=\"search_settingsval !=null && search_settingsval.selectsearch != null \">\n                    \n                    <mat-form-field class=\"searchdiv\" *ngFor=\"let status of search_settingsval.selectsearch\">\n                        <mat-label>{{status.label}}</mat-label>\n                        <!-- <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"selectsearch[status.field]\"> -->\n                       <!-- single select box -->\n                       <ng-container *ngIf=\"status.multiple===undefined\">\n                        <mat-select [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                            <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                {{statusval.name}}\n                            </mat-option>\n                        </mat-select>\n                    </ng-container>\n                        <!-- multiple select box search -->\n                        <ng-container *ngIf=\"status.multiple==true\">\n                            <mat-select multiple [(ngModel)]=\"selectsearch[status.field]\" [(value)]=\"status.value\"\n                            [(ngModel)]='tsearch[status.field]'>\n                                <mat-option *ngFor=\"let statusval of status.values\" [value]=\"statusval.val\"\n                                    (click)=\"selectSearch(statusval.val, status,statusval)\">\n                                    {{statusval.name}}\n                                </mat-option>\n                            </mat-select>\n                       </ng-container>\n\n                    </mat-form-field>\n                </ng-container>\n\n\n                <ng-container *ngIf=\" search_settingsval != null && search_settingsval.datesearch != null \">\n                    <!-- <span>D search !!</span> -->\n                    <ng-container class=\"filterFordatesearch\" *ngFor=\"let status of this.search_settingsval.datesearch\">\n\n                        <mat-form-field class=\"filterFordatesearchformfield searchdiv\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker\"\n                                autocomplete=\"off\" placeholder=\"{{status.startdatelabel}}\" [(ngModel)]=\"start_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <mat-form-field>\n                            <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker  #picker1></mat-datepicker>\n                        </mat-form-field> -->\n\n                        <mat-form-field class=\"filterFordatesearchend\">\n                            <input readonly class=\"filterFordatesearchinput\" matInput [matDatepicker]=\"picker1\"\n                                autocomplete=\"off\" placeholder=\"{{status.enddatelabel}}\" [(ngModel)]=\"end_date\"\n                                (dateChange)=\"dateSearch(status.field,status)\">\n                            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n                            <mat-datepicker #picker1></mat-datepicker>\n                        </mat-form-field>\n\n                        <!-- <span class=\"search_class\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\"\n                                (click)=\"dateSearch(status.field)\">{{status.submit}}</button>\n                        </span> -->\n                    </ng-container>\n                </ng-container>\n\n\n                <!-- <br><br> <br><br> -->\n\n                <div class=\"searchbtncls\">\n                    <!-- use for refresh all data -->\n                    <span class=\"search_class\">\n                        <ng-container class=\"refresh\">\n                            <i (click)=\"refreshdata()\" class=\"material-icons cursor\" matTooltip=\"refresh\"\n                                matTooltipClass=\"refreshtooltipcls\">\n                                autorenew\n                            </i>\n                        </ng-container>\n                        <!-- *ngIf=\"date_search_endpointval ==null || date_search_sourceval == null || search_settingsval.datesearch == null \" -->\n                        <ng-container class=\"refresh\">\n                            <button mat-raised-button color=\"primary\" class=\"add_button\" (click)=\"allSearch()\"\n                                matTooltip=\"search\" matTooltipClass=\"searchtooltipcls\">Search</button>\n                        </ng-container>\n\n                        <br>\n                    </span>\n                </div>\n\n\n                <!--custom buttons -->\n                <div class=\"CustomButtonListen_div\">\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true  && customButtonFlagVal?.tooltipflag != true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button mat-raised-button color=\"primary\" type=\"button\" color=\"primary\" class=\"add_button\"\n                                (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"customButtonFlagVal?.flag == true && customButtonFlagVal?.tooltipflag == true\"\n                        class=\"filterForTexticon\">\n                        <ng-container *ngFor=\"let bt of customButtonFlagVal.buttons;let i = index\"\n                            class=\"add_custom_button\">\n                            <button matTooltip=\"{{bt.tooltip}}\" mat-raised-button color=\"primary\" type=\"button\"\n                                color=\"primary\" class=\"add_button\" (click)=\"CustomButtonListen(bt)\">\n                                {{bt.label}}</button> &nbsp;\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n\n\n\n\n                <!-- for button search  -->\n                <div class=\"buttonsearch_div\">\n                    <ng-container class=\"filterForTexticon\"\n                        *ngIf=\" search_settingsval != null && search_settingsval.buttonsearch != null \">\n                        <ng-container *ngFor=\"let button of search_settingsval.buttonsearch;let i= index\">\n\n                            <button mat-raised-button color=\"primary\" class=\"add_button search_btn_class{{i}}\"\n                                (click)=\"openBottomSheetForSearch(button,i)\">{{button.label}}\n                            </button>\n                        </ng-container>\n                    </ng-container>\n                </div>\n\n                <!-- *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || buttonSearchData[i].value != null \" -->\n\n\n                <!-- buttonvSearch Data div -->\n                <div class=\"buttonSearchDatacls_div\">\n                    <ng-container class=\"buttonSearchDatacls\"\n                        *ngIf=\"buttonSearchData != null && buttonSearchData.length >0\">\n                        <!-- <span>{{buttonSearchData | json}}</span> -->\n                        <div *ngFor=\"let bs of buttonSearchData;let i =index\">\n                            <div *ngIf=\"bs.field == search_settingsval.buttonsearch[bs.key].field\">\n\n                                <h3 class=\"search_settingsval_bs_cls\"\n                                    *ngIf=\" (search_settingsval.buttonsearch[bs.key].values != null && search_settingsval.buttonsearch[bs.key].values.length > 0) || (bs.field == search_settingsval.buttonsearch[bs.key].field && bs.value.length > 0)\">\n                                    {{search_settingsval.buttonsearch[bs.key].label}} :</h3>\n\n                                <mat-chip-list class=\"example-chip\" cdkDropList cdkDropListOrientation=\"horizontal\">\n                                    <mat-chip class=\"example-box\" cdkDrag *ngFor=\"let item of bs.value;let j = index\">\n                                        {{item.name}}\n                                        <mat-icon style=\"cursor: pointer;\" matChipRemove\n                                            (click)=\"clearButtonSearchChips(bs,i,item,j)\">cancel</mat-icon>\n                                    </mat-chip>\n                                </mat-chip-list>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n                <br />\n\n                <span *ngIf=\"click_to_add_ananother_pageval !=null\">\n                    <button mat-raised-button color=\"primary\" class=\"add_button\"\n                        [routerLink]=\"click_to_add_ananother_pageval\">Add</button>\n                </span>\n            </mat-toolbar-row>\n        </div>\n\n        <div class=\"recordflagcls\" *ngIf=\"recordFoundFlag == true && libdataval.recordfounddata != null\">\n            <div class=\"recorddatacls\" [innerHTML]=\"libdataval?.recordfounddata\"></div>\n        </div>\n\n\n\n        <ng-container\n            *ngIf=\"selection.selected !=null && selection.selected.length!=null && selection.selected.length>0\">\n            <span class=\"multipledeleteandupdatebuttan\">\n\n                <button *ngIf=\"libdataval.hidedeletemany==null || libdataval.hidedeletemany==false\" matTooltip=\"Delete\"\n                    mat-raised-button (click)=\"deletemultiple()\"> Delete </button>\n                <button *ngIf=\"libdataval.hideupdatemany==null || libdataval.hideupdatemany==false\"\n                    matTooltip=\"Update Status\" mat-raised-button (click)=\"managestatusmultiple()\"> Update Status\n                </button>\n                <ng-container\n                    *ngIf=\"libdataval!=null && libdataval.customselectbuttons!=null && libdataval.customselectbuttons.length>0\">\n                    <!-- has hhh  -->\n                    <ng-container *ngFor=\"let cbtns of libdataval.customselectbuttons\">\n\n                        <button class=\"customselbtn\" matTooltip=\"{{cbtns?.tooltip}}\" mat-raised-button\n                            (click)=\"clickmultipleselectoption(cbtns)\">\n                            {{cbtns.label}} </button>\n                    </ng-container>\n\n                </ng-container>\n\n            </span>\n        </ng-container>\n\n\n\n\n\n\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) || date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput [(ngModel)]=\"limitcondval.limit\" type=\"number\" min=\"1\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n\n            </section>\n        </ng-container>\n        <!-- <div>{{rescount}} d lemgth </div> -->\n\n        <div class=\"tablewrapper\" *ngIf=\"tableflag==0\">\n\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n\n                <!-- <ng-container matColumnDef=\"select\" *ngIf=\"tableflag==0\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        <mat-checkbox (change)=\"$event ? masterToggle() : null\" [checked]=\"selection.hasValue() && isAllSelected()\" [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                        </mat-checkbox>\n                    </th>\n                    <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                        <mat-checkbox (click)=\"$event.stopPropagation()\" (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                        </mat-checkbox>\n                    </td>\n                </ng-container> -->\n                <!-- <ng-container matColumnDef=\"#\">\n                    <th mat-header-cell *matHeaderCellDef>\n                        #\n                    </th>\n                    <td mat-cell *matCellDef=\"let element; let i = index\">{{limitcondval.skip+(i+1)}}</td>\n                </ng-container> -->\n                <!-- footer loop  -->\n                <ng-container *ngFor=\"let footer of libdataval.footersettings\">\n                    <ng-container matColumnDef=\"{{footer.key}}\">\n                        <td mat-footer-cell *matFooterCellDef [attr.colspan]=\"footer.colspan\">\n                            <span [innerHtml]=\"footer.data\"></span>\n                        </td>\n                    </ng-container>\n                </ng-container>\n\n\n                <ng-container *ngFor=\"let column of columns\" [matColumnDef]=\"column.columnDef\">\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <th mat-header-cell *matHeaderCellDef>\n                            <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                                [checked]=\"selection.hasValue() && isAllSelected()\"\n                                [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n                            </mat-checkbox>\n                        </th>\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef != 'select' \">\n                        <th mat-header-cell *matHeaderCellDef class=\"th-header-center\">\n                            <span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array == null\">\n                                    <span [innerHtml]=\"column.header\"> </span>\n                                    <span></span>\n                                </span>\n\n                                <span *ngIf=\"libdataval.header_tooltip_array != null\">\n                                    <span [innerHtml]=\"column.header\" matTooltip=\"{{column?.tooltip}}\"></span>\n                                </span>\n\n                                <!-- {{column.header}} -->\n                                <span *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='desc'\"\n                                    class=\"material-icons cursor float-right\"\n                                    (click)=\"sorttable(column.columnDef,'asc')\">\n                                    arrow_downward\n                                </span>\n                                <span class=\"material-icons cursor float-right\"\n                                    *ngIf=\"column.columnDef==sortdataval.field && sortdataval.type=='asc'\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">arrow_upward\n                                </span>\n\n                                <span class=\"material-icons cursor\"\n                                    *ngIf=\"sortdataval!=null && sortdataval.options !=null && sortdataval.options.indexOf(column.columnDef) >-1  && column.columnDef!=sortdataval.field\"\n                                    (click)=\"sorttable(column.columnDef,'desc')\">\n                                    unfold_more\n                                </span>\n                            </span>\n                        </th>\n                    </ng-container>\n\n                    <ng-container\n                        *ngIf=\"column.columnDef!= '#' && column.columnDef!= 'Actions' && column.columnDef!= 'select'  \">\n                        <td mat-cell *matCellDef=\"let row \" [ngStyle]=\"styleCell(column,row) \"\n                            data-title=\"{{column.header.split('<br/>').join('')}}  \" class=\"td-cell-center \">\n\n                            <span *ngIf=\"column.columnDef=='status' \">{{ getstatus([column.cell(row)]) }}\n                                {{pdfFlag(row)}}</span>\n                            <span\n                                *ngIf=\"column.columnDef!='status' && column.columnDef!='image' && column.columnDef!='video' \">\n\n                                <ng-container\n                                    *ngIf=\"column!=null && row[column.columnDef]!=null && !column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') \">\n\n                                    <!-- <span>=++++{{row[column.columnDef] |json}} = {{column.columnDef}}</span><br> -->\n\n                                    <span\n                                        [innerHTML]=\"row[column.columnDef] | CustomPipe: column.columnDef:row[column.columnDef]\"></span>\n\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef]\n                        !='NA' ) \">\n                                    {{row[column.columnDef] | date}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetimeshort') &&  column.columnDef.includes( 'datetime') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'medium'}}\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && column.columnDef.includes( 'date') && !column.columnDef.includes( 'datetime')  && column.columnDef.includes( 'datetimeshort') && (row[column.columnDef] !=0 && row[column.columnDef] !='na' && row[column.columnDef] !='NA'\n                        ) \">\n                                    {{row[column.columnDef] | date:'short'}}\n                                </ng-container>\n\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]!=null && (column.columnDef.includes( 'date') || column.columnDef.includes( 'datetime') )&& (row[column.columnDef]==0 || row[column.columnDef]=='na' || row[column.columnDef]=='NA'\n                        ) \">\n                                    NA\n                                </ng-container>\n                                <ng-container *ngIf=\"column!=null && row[column.columnDef]==null \">\n                                    NA\n                                </ng-container>\n\n                            </span>\n                            <!-- for image view  -->\n                            <span\n                                *ngIf=\"column.columnDef=='image' && row[column.columnDef] !=null && row[column.columnDef] !='' \"\n                                (click)=\"img_modal_view(row[column.columnDef]) \"> <span class=\"module_imgblock \">\n                                    <img src=\"{{row[column.columnDef]}} \" alt=\"{{row[column.columnDef]}} \">\n                                </span></span>\n                            <!-- for video view -->\n                            <span\n                                *ngIf=\"column.columnDef=='video' && row[column.columnDef] !=null && row[column.columnDef] !='' \"><span\n                                    class=\"module_videoblock \" (click)=\"fetchvideo(row) \">\n                                    <img class=\"videothumbnailcls\"\n                                        src='https://awsbackend-dev-patient-files-test.s3.amazonaws.com/icon-videoplay.png'>\n                                    <img class=\"videovicls\"\n                                        src=\"https://img.youtube.com/vi/{{row[column.columnDef]}}/sddefault.jpg \"\n                                        alt=\"{{row[column.columnDef]}} \" (click)=\"fetchvideo(row) \"></span>\n                            </span>\n\n                            <span\n                                *ngIf=\"column.columnDef=='grab_url && grab_linkval!=null && grab_linkval[0]!=null' \">{{grapurl(row[this.grab_linkval[0].field_name])}}</span>\n\n\n                            <!--          <span *ngIf=\"sh==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && sh==true && urlval !=null \"\n                                class=\"cursor \">\n                                <i title=\"{{urlval[0].label}} \" (click)=\"clickurl(row,urlval[0].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n                            <!--          </span>-->\n                            <!--          <span *ngIf=\"aud==true \">-->\n                            <span *ngIf=\"column.columnDef=='contractssigned' && aud==true && urlval !=null \">\n                                <i title=\"{{urlval[1].label}} \" (click)=\"clickurl(row,urlval[1].url) \"\n                                    class=\"material-icons \">cloud_download</i>\n                            </span>\n\n                            <!--// for grap url//-->\n\n                            <span\n                                *ngIf=\" grab_linkval!=null && column.columnDef==[grab_linkval.colom_name[0].col_name] \"\n                                class=\"cursor \">\n                                <ng-container *ngFor=\"let item of grab_linkval.field \">\n                                    <!-- <p>{{item | json}}</p> -->\n                                    <button mat-button\n                                        (click)=\"copyText(row[grab_linkval.colom_name[0].field_name],item.url) \">{{item.label}}</button>\n                                </ng-container>\n                            </span>\n\n                            <!-- <span\n                            *ngIf=\" grab_linkval!=null && grab_linkval[0]!=null && column.columnDef==[grab_linkval[0].col_name] \"\n                            class=\"cursor \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[1].url) \">{{grab_linkval[1].label}}</button>\n                        </span>\n                        <span\n                            *ngIf=\"grab_linkval!=null && grab_linkval[0]!=null &&column.columnDef==[ grab_linkval[0].col_name] \">\n                            <button mat-button\n                                (click)=\"copyText(row[grab_linkval[0].field_name],grab_linkval[2].url) \">{{grab_linkval[2].label}}</button>\n                        </span> -->\n\n                            <!--          //grap url end//-->\n\n\n                            <!--          </span>-->\n                            <!-- <span *ngIf=\"column.columnDef=='contractssigned' \">\n            <span *ngFor=\"let item of urlval \" class=\"cursor \">\n            <i title=\"{{item.label}} \" (click)=\"clickurl(row,item.url) \" class=\"material-icons \">cloud_download</i>\n          </span>\n          </span>-->\n                        </td>\n                    </ng-container>\n                    <ng-container *ngIf=\"column.columnDef== '#' \">\n                        <td mat-cell *matCellDef=\"let element; let i=index \">{{limitcondval.skip+(i+1)}}\n                        </td>\n\n                    </ng-container>\n\n                    <ng-container *ngIf=\"column.columnDef== 'select' \">\n                        <td mat-cell *matCellDef=\"let row\" data-label=\"select\">\n                            <mat-checkbox (click)=\"$event.stopPropagation();checkedlist()\"\n                                (change)=\"$event ? selection.toggle(row) : null\" [checked]=\"selection.isSelected(row)\">\n                            </mat-checkbox>\n                        </td>\n                    </ng-container>\n\n                    <!-- action buttons start here -->\n                    <ng-container *ngIf=\"column.columnDef== 'Actions' \">\n                        <td mat-cell *matCellDef=\"let row \" data-label=\"Actions \" class=\"td-cell-center \">\n                            <div class=\"actionbuttonwrapper\">\n                                <div class=\"button_div_custom_cls\">\n\n                                    <!-- loader -->\n\n                                    <section class=\"example-section example-section-button-1 \">\n                                        <mat-progress-bar *ngIf=\"loaderrow!=null && loaderrow==row._id \"\n                                            class=\"example-margin \" [color]=\"color \" [mode]=\"mode \" [value]=\"value \"\n                                            [bufferValue]=\"bufferValue \">\n                                        </mat-progress-bar>\n                                    </section>\n\n                                    <!-- note block -->\n                                    <ng-container *ngIf=\"libdataval.notes!=null \">\n                                        <button mat-raised-button color=\"primary\" class=\"notebtncls\"\n                                            matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"\n                                            matTooltip=\"{{libdataval?.notes?.tooltip }}\" (click)=\"opennotes(row)\">\n                                            <span class=\"notelabelc\"> {{libdataval.notes.label }}</span>\n                                            <!-- <span class=\"notebracket1\">(</span> -->\n                                            <!-- <span class=\"notecountc\"  matBadgeColor=\"warn\" matBadge=\"{{row.notescount}}\"></span> -->\n                                            <!-- <span class=\"notebracket2\">)</span> -->\n                                        </button>\n                                    </ng-container>\n\n                                    <!--custom buttions block -->\n\n                                    <ng-container\n                                        *ngIf=\"libdataval !=null && libdataval.custombuttons !=null && libdataval.custombuttons.length>0 \">\n                                        <ng-container\n                                            *ngFor=\"let custombutton of libdataval.custombuttons; let cb=index\">\n                                            <section class=\"custombutton{{cb}} {{custombutton?.classname}}\">\n                                                <ng-container\n                                                    *ngIf=\"custombutton.type=='listner' && (custombutton.cond==null  || (row[custombutton.cond]==custombutton.condval) ) \">\n                                                    <!-- ss {{row['status']}} -->\n                                                    <button mat-raised-button color=\"primary\"\n                                                        matTooltip=\"{{custombutton?.tooltip }}\"\n                                                        matTooltipClass=\"listnertooltipcls\"\n                                                        (click)=\"custombuttonlistner(row,custombutton)\">{{custombutton.label\n                                                        }}</button>\n                                                </ng-container>\n\n                                                <ng-container *ngIf=\"custombutton.type=='externallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <a target=\"_blank\" href=\"{{custombutton.link}}\">\n                                                            <button mat-raised-button\n                                                                matTooltipClass=\"externallinktooltipcls\"\n                                                                matTooltip=\"{{custombutton?.tooltip}}\"\n                                                                color=\"primary\">{{custombutton.label}}</button>\n                                                        </a>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            matTooltipClass=\"parambtntooltipcls\"\n                                                            (click)=\"openextlinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='internallink'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle == null && custombutton.param==null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallink(custombutton)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.toggle != null && custombutton.toggle == 'delete' && custombutton.toggle!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            (click)=\"deletedata(row)\">{{custombutton.label}}</button>\n                                                    </ng-container>\n\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.param!=null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"openinternallinkwithparam(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n\n                                                    </ng-container>\n\n                                                </ng-container>\n                                                <ng-container *ngIf=\"custombutton.type=='action'\">\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='local' && custombutton != null && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip }}\"\n                                                            (click)=\"opencustombuttonactionlocaldata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n                                                    <ng-container\n                                                        *ngIf=\"custombutton.datatype=='api' && (custombutton.cond==null || row[custombutton.cond]==custombutton.condval )\">\n                                                        <button mat-raised-button color=\"primary\"\n                                                            matTooltip=\"{{custombutton?.tooltip}}\"\n                                                            (click)=\"opencustombuttonactionapidata(custombutton,row)\">{{custombutton.label\n                                                            }}</button>\n                                                    </ng-container>\n\n                                                </ng-container>\n\n                                            </section>\n\n                                        </ng-container>\n                                    </ng-container>\n                                </div>\n\n\n\n                                <span class=\"actionbuttonwrapperspan\"\n                                    *ngIf=\"selection.selected.length==null || selection.selected.length==0\">\n                                    <span *ngIf=\"libdataval.hideeditbutton==null || libdataval.hideeditbutton==false\"\n                                        class=\"cursor\" (click)=\"editdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.edit}}\">\n                                            edit\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span\n                                        *ngIf=\"libdataval.hidedeletebutton==null || libdataval.hidedeletebutton==false\"\n                                        class=\"cursor\" (click)=\"deletedata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.delete }}\">\n                                            delete_outline\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span *ngIf=\"libdataval.hideviewbutton==null || libdataval.hideviewbutton==false\"\n                                        class=\"cursor\" (click)=\"viewdata(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.preview }}\">\n                                            remove_red_eye\n                                        </i>\n                                    </span>\n\n                                    <!--For modern browsers-->\n                                    <span class=\"cursor\"\n                                        *ngIf=\"libdataval.hidestatustogglebutton==null || libdataval.hidestatustogglebutton==false\"\n                                        (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons\" matTooltip=\"{{staticTooltip.changeStatus  }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <span *ngIf=\"custombuttonval!=null\" class=\"cursor treeclass\"\n                                        (click)=\"custombuttonfunc(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{staticTooltip.changeStatus }} \">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- hide status toggle with cond-->\n                                    <span *ngIf=\"libdataval?.hidestatustoggle !=null &&libdataval?.hidestatustoggle?.flag != null && libdataval?.hidestatustoggle?.flag==true \n                                    && (row[libdataval.hidestatustoggle.cond] == libdataval.hidestatustoggle.condval )\"\n                                        class=\"cursor treeclass\" (click)=\"managestatus(row)\">\n                                        <i class=\"material-icons treeclass\"\n                                            matTooltip=\"{{libdataval?.hidestatustoggle?.tooltip }}\">\n                                            toggle_off\n                                        </i>\n                                    </span>\n\n                                    <!-- artistxp preview start -->\n                                    <span *ngIf=\"previewFlug==true\" class=\"cursor treeclass\"\n                                        (click)=\"artistxpPreview(row)\">\n                                        <i class=\"material-icons\">perm_media</i>\n                                    </span>\n                                    <!-- artistxp preview end -->\n\n                                </span>\n                            </div>\n                        </td>\n                    </ng-container>\n\n\n\n\n                </ng-container>\n\n\n\n\n\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\n                <tr mat-footer-row *matFooterRowDef=\"tableFooterColumns\" colspan=\"2\"></tr>\n\n            </table>\n\n        </div>\n\n        <!--for pagination -->\n        <!-- <div>*ngIf=\"tableflag!=0\"</div>\n        <div *ngIf=\"tableflag!=0\"> jio </div> -->\n\n        <mat-card *ngIf=\"tableflag!=0\" class=\"noFoundText\">\n            <div class=\"noFoundTextinner\">\n                <span>Oops !</span>\n                <p>NO Record Found</p>\n            </div>\n        </mat-card>\n        <!-- no record found block  -->\n        <ng-container *ngIf=\"tableflag==0 && !paginationtypeFlag\">\n            <section class=\"lib-pager-class\">\n                <mat-label>\n                    Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n\n                    <ng-container\n                        *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                        {{(limitcondval.pagecount)*limitcondval.limit}}\n                    </ng-container>\n                    <ng-container\n                        *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                        {{date_search_source_countval}}\n                    </ng-container>\n\n\n\n                    of\n                    <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                    <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                </mat-label>\n                <span class=\"pageformfield\">\n                    <mat-form-field>\n                        <mat-label>Page Size</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"limitcondval.limit\" type=\"number\" max=\"100\"\n                            (ngModelChange)=\"onFieldChangeforlimit($event)\">\n                    </mat-form-field>\n\n                    <mat-form-field>\n                        <mat-label>Page No</mat-label>\n                        <input matInput min=\"1\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\"\n                            min=\"1\" max=\"pageCountArray.length\" type=\"number\">\n                    </mat-form-field>\n                </span>\n                <span>\n\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(-1,'')\">\n                        skip_previous\n                    </span>\n\n                    <span class=\"material-icons cursor\" (click)=\"paging(1,'')\">\n                        skip_next\n                    </span>\n                </span>\n                <!-- for pagination in drop down format-->\n                <div class=\"selectpaginationCls\" *ngIf=\"libdataval.selectPagingflag\">\n                    <mat-label>Show Records per Page</mat-label>\n                    <mat-select (selectionChange)=\"paging($event.value,'selectpaging')\"\n                        [(ngModel)]=\"limitcondval.limit\">\n                        <mat-option *ngFor=\"let no of pages\" [value]=\"no.val\">\n                            {{no.name}}\n                        </mat-option>\n                    </mat-select>\n                </div>\n            </section>\n\n        </ng-container>\n\n\n        <!-- new pagination block  -->\n        <ng-container *ngIf=\"paginationtypeFlag && paginationtype==2 && newpagingcountFlag && tableflag==0\">\n            <div class=\"paginationwrapper\">\n            <span class=\"showingpaginationcls\">Showing {{((limitcondval.pagecount-1)*limitcondval.limit)+1}} To\n                <ng-container\n                    *ngIf=\"date_search_source_countval > ((limitcondval.pagecount)*limitcondval.limit) ||  date_search_source_countval==0\">\n                    {{(limitcondval.pagecount)*limitcondval.limit}}\n                </ng-container>\n                <ng-container\n                    *ngIf=\"date_search_source_countval!=0 && date_search_source_countval <= ((limitcondval.pagecount)*limitcondval.limit)\">\n                    {{date_search_source_countval}}\n                </ng-container>\n\n\n\n                of\n                <span *ngIf=\"date_search_source_countval!=0 \"> {{date_search_source_countval}} </span>\n                <span *ngIf=\"date_search_source_countval==0 \"> Many </span>\n\n                Results\n            </span>\n              \n            <div class=\"paginationlistcon\">\n                <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pagefirst_button\" (click)=\"paging(1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"First Page\">First</button>\n                <button *ngIf=\"pageChangeValue>1\" mat-raised-button color=\"primary\" class=\"pageprev_button\"\n                    (click)=\"paging(limitcondval.pagecount-1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Previous Page\">Prev</button>\n\n            <ng-container *ngFor=\"let item of pageCountArray;let i=index\">\n                <ng-container *ngIf=\"i<10 && (pageCountArray.length > newcurrentpagingVal+i-1)\">\n\n                    <!-- h{{i}}--{{newcurrentpagingVal+i-1}}--{{pageCountArray.length}} -->\n\n\n                    <!-- <span *ngIf=\" (pageCountArray.length - limitcondval.pagecount) < 10\" class=\"pagercls\"\n                        [ngClass]=\"{'active': limitcondval.pagecount ===  limitcondval.pagecount+i-9}\"\n                        (click)=\"paging(limitcondval.pagecount+i-9 ,'')\">\n                        <span>\n                            \n                            {{ limitcondval.pagecount+i-9 }}\n                        </span>\n                    </span> -->\n                    <span class=\"pagercls\" [ngClass]=\"{'active': newcurrentpagingVal+i === limitcondval.pagecount}\"\n                        (click)=\"paging(i+newcurrentpagingVal,'')\">\n                        <span class=\"newpagingdatacls\">\n                            {{ i+newcurrentpagingVal }}\n                        </span>\n                    </span>\n                </ng-container>\n\n\n            </ng-container>\n             <mat-label class=\"gotopagecls\">Go to Page:</mat-label>\n            <input type=\"number\" [(ngModel)]=\"pageChangeValue\" (ngModelChange)=\"onFieldChange($event)\" min=\"1\"\n                max=\"{{lastpageCountArray}}\">\n              of {{lastpageCountArray}} Pages\n            <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagenext_button\"\n                (click)=\"paging(limitcondval.pagecount+1,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Next Page\">Next</button>\n\n            <button *ngIf=\"pageChangeValue!=lastpageCountArray\" mat-raised-button color=\"primary\" class=\"pagelast_button\"\n                (click)=\"paging(lastpageCountArray,'')\" matTooltipClass=\"pagebtntooltipcls\" matTooltip=\"Last Page\">Last</button>\n             </div>\n            </div>\n        </ng-container>\n        <section *ngIf=\"loading == true\" class=\"example-section\">\n            <mat-progress-bar class=\"example-margin\" [color]=\"color\" [mode]=\"mode\" [value]=\"value\"\n                [bufferValue]=\"bufferValue\">\n            </mat-progress-bar>\n            <br />\n            <br />\n        </section>\n\n\n    </mat-card>\n\n\n\n</div>\n<!-- <div>{{ startDate111 }}</div>\n<mat-form-field>\n    <input matInput [matDatepicker]=\"picker1\" placeholder=\"From Date\" [(ngModel)]=\"startDate111\">\n    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\n    <mat-datepicker  #picker1></mat-datepicker>\n</mat-form-field> -->\n\n<!-- <div>After Translet the word test is : {{\"test\" | languageTranslet}}</div> -->\n<!-- <div>{{\"test\"}}</div> -->\n<!-- <div>\n    <span>{{\"Her knowledge of publishing trends, literary history, and books of every description and genre, however, filled rooms\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"It is authorized to decide all cases of every description, arising under the constitution or laws of the United States\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"For example, he wanted to be a member of as many clubs - of any description - as possible\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"Academic excellence was matched with extra-curricular activities of every description - from drama through sport to foreign travel\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Superb apple pie with sultanas and cloves, interspersed with crusty bread sandwiches of every description\" |languageTranslet}}</span>\n    <br>\n    <span>{{\"being at least one \u2014used to indicate that a logical proposition is asserted only of a subclass or certain members of the class denoted by the term which it modifies.\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"When some is used to modify a number, it is almost always a round number\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"Middle English som, adjective & pronoun, from Old English sum; akin to Old High German sum some, Greek ham\u0113 somehow, homos same\" | languageTranslet}}</span>\n    <br>\n    <span>{{\"causing a specified feeling or condition\" | languageTranslet}}</span>\n    <span>\n        {{ \"The assessments of the autonomic nervous system, endothelial function, and Ankle-Brachial Index (ABI) are well-recognized tests to detect early complications in diabetic patients \u2013 diabetic neuropathy risk, cardiovascular risk, and peripheral artery disease. These assessments are recommended by the U.S. and International Medical Associations. Unfortunately, most of these assessments or exams are not routinely performed in daily clinical practice because of concerns about complex procedures, time consumption, and a high level of difficulty in reading and/or interpreting exam reports.\" | languageTranslet }}\n    </span>\n    <br>\n\n\n    \n    <span>\n        {{ \"Our ANS testing medical device platform eliminates these concerns by offering an innovative medical device that provides physicians with new and easy to use tools that simplify complex procedures, significantly reduces the time required by technicians to perform the exams, and offers easy to read and interpret exam reports with clinical guidance support which is backed by studies and peer reviews. Lastly, our most recent innovation includes wireless transmission to increase patient and technician comfort.\" | languageTranslet }}\n    </span>\n</div> -->",
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
        { type: ElementRef },
        { type: ObservableserviceService }
    ]; };
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
    return ListingComponent;
}());
export { ListingComponent };
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
var Confirmdialog = /** @class */ (function () {
    function Confirmdialog(_apiService, dialogRef, data, sanitizer, dialog) {
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
        var dialogRef = this.dialog.open(DeleteNotesModal, {
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
        function (result) {
            // console.log("result",result);
            if (typeof result != 'undefined' && typeof (result.response) != "undefined" && result.response != "") {
                /** @type {?} */
                var source = {
                    id: _this.data.rowdata._id,
                    index: index
                    // note: this.data.notesval,
                    // user: this.data.notedata.user,
                };
                _this.data.loading1 = index;
                _this._apiService.postSearch(_this.data.apiurl + _this.data.notedata.deleteendpoint, _this.data.jwttokenval, source).subscribe((/**
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
            }
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
                    template: "<div class=\"maindialog maindialognew\">\n    <span (click)=\"onNoClick()\" style=\"float: right; cursor: pointer;\" class=\"close-btn-modal material-icons\">\n        close\n    </span>\n\n    <div class=\"dialoghead\" *ngIf=\"data.preview != true\">\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.message!=null\">Hey !</h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null && data.data!=null && data.data[0]==null\">Details </h1>\n        <h1 mat-dialog-title *ngIf=\"data!=null  && data.data!=null &&  data.data.message!=null\">{{data.data.message}}\n        </h1>\n        <h1 class=\"preview_{{data?.headerData?.class}}\" mat-dialog-title\n            *ngIf=\"data!=null && data.headerData != null && data.headerData.header != null\">\n            {{data?.headerData?.header}}\n        </h1>\n\n        <div mat-dialog-content>\n            <p *ngIf=\"data!=null && data.message!=null\">{{data.message}}</p>\n\n            <ng-container *ngIf=\"data.notes!=null && data.notes==true\">\n                <!-- <ng-container *ngFor=\"let note of data.listdata;\"> -->\n                <mat-list>\n                    <div mat-subheader>\n                        <ng-container *ngIf=\"data.notedata.header !=null && data.rowdata[data.notedata.header]!=null\">\n                            <span class=\"notesheader\">Notes for : {{data.rowdata[data.notedata.header]}} </span>\n                        </ng-container>\n                    </div>\n                    <!-- <section class=\"example-section\">\n                        <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                            [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                        </mat-progress-bar>\n                        <br />\n                        <br />\n                    </section> -->\n                    <mat-list-item *ngFor=\"let note of data.listdata;let notej=index;\">\n                        <!-- <p>{{note.notes | json}}</p> -->\n\n                        <span class=\"material-icons\">\n                            notes\n                        </span>\n                        <div mat-line>\n                            {{note.notes.note }}\n                        </div>\n                        <!-- <div mat-line class=\"line-user\"><span>By:</span>{{note.note.userid}}</div> -->\n                        <!-- <div mat-line class=\"line-user\"><span>This User:</span>{{data.notedata.user}}</div> -->\n                        <div mat-line class=\"line-user\" *ngIf=\"note.notes != null && note.notes.user != null\">\n                            <span>By:</span>{{note.notes.user}}\n                        </div>\n                        <div mat-line class=\"line-datetime\"\n                            *ngIf=\"note.notes != null && note.notes.created_date != null\"> <span>On:</span>\n                            {{note.notes.created_date | date:'medium' }}\n                        </div>\n                        <span style=\"cursor: pointer;\" *ngIf=\"note.notes.userid==data.notedata.user\" class=\"material-icons\"\n                            (click)=\"deletenote(notej)\" matTooltip=\"Delete Note\">\n                            delete\n                        </span>\n                        <div mat-line *ngIf=\"data.loading1!=null && data.loading1== notej \">\n                            <section class=\"example-section\">\n                                <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                                    [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                                </mat-progress-bar>\n                                <br />\n                                <br />\n                            </section>\n                        </div>\n                        <mat-divider></mat-divider>\n\n\n                    </mat-list-item>\n                    <mat-divider></mat-divider>\n                </mat-list>\n                <div>\n                    <textarea placeholder=\"Add Notes Here !! \" rows=\"5\" cols=\"25\" [(ngModel)]=\"data.notesval\">\n                    </textarea>\n                    <button mat-button (click)=\"addnotes()\" matTooltip=\"Add Note\">Add Note</button>\n\n                </div>\n                <section *ngIf=\"data.loading !=null && data.loading == true\" class=\"example-section\">\n                    <mat-progress-bar class=\"example-margin\" [color]=\"data.color\" [mode]=\"data.mode\"\n                        [value]=\"data.loadervalue\" [bufferValue]=\"data.bufferValue\">\n                    </mat-progress-bar>\n                    <br />\n                    <br />\n                </section>\n                <!-- </ng-container> -->\n            </ng-container>\n\n\n\n            <div *ngIf=\"data!=null && data.data!=null\">\n                <mat-card class=\"example-card\" *ngFor=\"let item of data.data;\">\n                    <mat-card-header id=\"dialogdata{{item[0]}}\">\n                        <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\n                        <mat-card-title>{{item[0]}}</mat-card-title>\n                    </mat-card-header>\n                    <!--<img mat-card-image src=\"https://material.angular.io/assets/img/examples/shiba2.jpg\" alt=\"Photo of a Shiba Inu\">-->\n                    <mat-card-content id=\"dialogdata{{item[0]}}\">\n                        <!-- {{gettypeof(item[1])}} -->\n                        <p class=\"innerhtml-content\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) !='object' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) != 'object')\"\n                            [innerHtml]=\"item[1]\">\n                        </p>\n                        <p class=\"innerhtml-content-video\"\n                            *ngIf=\"(item[2]==null && gettypeof(item[1]) =='object' && item[0]!='image_array' ) || ( item[2]!=null &&  !item[2].includes('date') && !item[2].includes('datetime') && gettypeof(item[1]) == 'object' && (item[0]=='video' || item[0]='vd_array' )) \"\n                            [innerHtml]=\"item[1]\">\n\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && !item[2].includes('datetime') \">\n                            {{item[1] | date}}\n                        </p>\n                        <p *ngIf=\"item[2]!=null && item[2].includes('date') && item[2].includes('datetime') \">\n                            {{item[1] | date:'medium' }}\n                        </p>\n                        <!-- length : {{item[1].length}} {{gettypeof(item[1])}} -->\n                        <p\n                            *ngIf=\" gettypeof(item[1]) == 'object' && item[1].length>1 &&  item[0]!=='video' && !item[0].includes('vd')  \">\n                            <!-- in ng for .. -->\n                            <ng-container *ngFor=\"let arr of item[1]\">\n                                <span\n                                    *ngIf=\" !item[0].includes('image') &&  (item[2]!=null &&   !item[2].includes('image') ) && item[0] !='video_array'\"\n                                    [innerHtml]=\"arr\"></span>\n                                <span\n                                    *ngIf=\"item[0].includes('image') || (item[2]!=null && item[2].includes('image')) \">\n                                    <img [src]=\"arr\" [alt]=\"arr\">\n                                </span>\n                                <span\n                                    *ngIf=\"item[0].includes('video_array') || (item[2]!=null && item[2].includes('video_array'))\"\n                                    [innerHtml]=\"arr\">\n\n                                </span>\n\n                            </ng-container>\n                        </p>\n                    </mat-card-content>\n                </mat-card>\n\n            </div>\n\n            <!--for custom page in modal(mainly used for tree)-->\n            <div *ngIf=\"data!=null && data.data!=null  && data.data[0]!=null &&  data.data[0].customdata!=null\">\n\n                <iframe class=\"custom-datadiv\" height=\"auto\" [src]=\"data.data[0].customdata\"></iframe>\n\n            </div>\n\n        </div>\n    </div>\n\n\n    <div *ngIf=\"data.preview == true\">\n        <lib-singlepost [post1]=\"data.previewData.res[0].posts\" [user]=\"\"></lib-singlepost>\n    </div>\n\n\n\n\n\n    <div mat-dialog-actions *ngIf=\"data.preview != true && data.type=='confirm' \">\n        <button mat-button *ngIf=\"data.isconfirmation==null ||  data.isconfirmation!=false\"\n            (click)=\"onNoClick()\">CANCEL</button>\n        <button mat-button mat-dialog-close=\"yes\" cdkFocusInitial>CONFIRM</button>\n    </div>\n\n</div>"
                }] }
    ];
    /** @nocollapse */
    Confirmdialog.ctorParameters = function () { return [
        { type: ApiService },
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] },
        { type: DomSanitizer },
        { type: MatDialog }
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
    /** @type {?} */
    Confirmdialog.prototype.dialog;
}
// delete notes confirmation modal
var DeleteNotesModal = /** @class */ (function () {
    function DeleteNotesModal(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.warn("bottom-sheet",data);
    }
    /**
     * @return {?}
     */
    DeleteNotesModal.prototype.onNoClick = /**
     * @return {?}
     */
    function () {
        this.dialogRef.close();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    DeleteNotesModal.prototype.responseFunction = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.dialogRef.close({ response: value });
    };
    DeleteNotesModal.decorators = [
        { type: Component, args: [{
                    selector: 'deletenotesConfirmationModal',
                    template: "<mat-card class=\"deletenotesparentcls\">\n    <mat-card-content class=\"deletenoteschildcls\">\n        <h3> hey !!</h3>\n        <P>Are you sure you want to delete this note?</P>\n    </mat-card-content>\n    <ng-container>\n        \n        <mat-card-content class=\"deletenotescls\">\n            <button mat-button class=\"liblist_btn_1\" (click)=\"responseFunction('Yes')\">\n                Yes\n            </button>\n            <button mat-button class=\"liblist_btn_2\" (click)=\"onNoClick()\">\n                No\n            </button>\n        </mat-card-content>\n    </ng-container>\n</mat-card>"
                }] }
    ];
    /** @nocollapse */
    DeleteNotesModal.ctorParameters = function () { return [
        { type: MatDialogRef },
        { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
    ]; };
    return DeleteNotesModal;
}());
export { DeleteNotesModal };
if (false) {
    /** @type {?} */
    DeleteNotesModal.prototype.dialogRef;
    /** @type {?} */
    DeleteNotesModal.prototype.data;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9saXN0aW5nLWFuZ3VsYXI3LyIsInNvdXJjZXMiOlsibGliL2xpc3RpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUFVLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUMzQyx3QkFBd0IsRUFHeEIsZ0JBQWdCLEVBQTJCLE1BQU0sRUFBRSxZQUFZLEVBQW9CLFVBQVUsRUFDOUYsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxlQUFlLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLHFCQUFxQixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0YsT0FBTyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsZUFBZSxFQUFFLE1BQU0sRUFBUyxNQUFNLGlCQUFpQixDQUFDO0FBQ25ILE9BQU8sRUFBYyxPQUFPLEVBQWdCLE1BQU0sTUFBTSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLFlBQVksRUFBbUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUMvRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDbEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3pELE9BQU8sRUFB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aGlsZCwgSW5wdXQsIEluamVjdCxcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBDb21wb25lbnRSZWYsXG4gIERpcmVjdGl2ZSxcbiAgVmlld0NvbnRhaW5lclJlZiwgU2ltcGxlQ2hhbmdlLCBPbkRlc3Ryb3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdDaGVja2VkLCBFbGVtZW50UmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWF0U29ydCwgTWF0VGFibGVEYXRhU291cmNlLCBNYXRQYWdpbmF0b3IgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBTZWxlY3Rpb25Nb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2xsZWN0aW9ucyc7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xuaW1wb3J0IHsgTWF0Qm90dG9tU2hlZXQsIE1hdEJvdHRvbVNoZWV0UmVmLCBNQVRfQk9UVE9NX1NIRUVUX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbCc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5hdmlnYXRpb25DYW5jZWwsIE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25FcnJvciwgTmF2aWdhdGlvblN0YXJ0LCBSb3V0ZXIsIEV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgc3RhcnRXaXRoLCBtYXAsIGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IE9ic2VydmFibGVzZXJ2aWNlU2VydmljZSB9IGZyb20gXCIuL3NlcnZpY2Uvb2JzZXJ2YWJsZXNlcnZpY2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgYW5pbWF0ZSwgc3RhdGUsIHN0eWxlLCB0cmFuc2l0aW9uLCB0cmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XG5kZWNsYXJlIHZhciAkOiBhbnk7XG5cbmltcG9ydCAqIGFzIG1vbWVudEltcG9ydGVkIGZyb20gJ21vbWVudCc7XG5cbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xuaW1wb3J0IHsgTUFUX1NOQUNLX0JBUl9EQVRBLCBNYXRTbmFja0JhciwgTWF0U25hY2tCYXJSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xuaW1wb3J0IHsgVEhJU19FWFBSLCBUaHJvd1N0bXQgfSBmcm9tICdAYW5ndWxhci9jb21waWxlci9zcmMvb3V0cHV0L291dHB1dF9hc3QnO1xuXG5cblxuLy8gaW1wb3J0IHtQcm9ncmVzc0Jhck1vZGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLWJhcic7XG4vLyBpbXBvcnQgIHtCdG5Db21wb25lbnR9IGZyb20gJy4vLi4vLi4vLi4vLi4vc3JjL2FwcC9idG4vYnRuLmNvbXBvbmVudCdcbmNvbnN0IG1vbWVudCA9IG1vbWVudEltcG9ydGVkO1xuXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xuICBhbGxkYXRhOiBhbnk7XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9saXN0aW5nLm1vZHVsZS5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbGlzdGluZy5tb2R1bGUuY3NzJ10sXG4gIGFuaW1hdGlvbnM6IFtcbiAgICB0cmlnZ2VyKCdkZXRhaWxFeHBhbmQnLCBbXG4gICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXG4gICAgICBzdGF0ZSgnZXhwYW5kZWQnLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcbiAgICAgIHRyYW5zaXRpb24oJ2V4cGFuZGVkIDw9PiBjb2xsYXBzZWQnLCBhbmltYXRlKCcyMjVtcyBjdWJpYy1iZXppZXIoMC40LCAwLjAsIDAuMiwgMSknKSksXG4gICAgXSksXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHVibGljIHNlbGVjdGVkSXRlbTogYW55ID0gMDtcbiAgcHVibGljIHBhZ2VDaGFuZ2VWYWx1ZTogTnVtYmVyO1xuICBteUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woKTtcbiAgcHVibGljIHN0YXRpY1Rvb2x0aXA6IGFueSA9IHtcbiAgICBcImRlbGV0ZVwiOiBcIkRlbGV0ZVwiLFxuICAgIFwiZWRpdFwiOiBcIkVkaXRcIixcbiAgICBcInByZXZpZXdcIjogXCJQcmV2aWV3XCIsXG4gICAgXCJjaGFuZ2VTdGF0dXNcIjogXCJDaGFuZ2UgU3RhdHVzXCIsXG4gIH1cbiAgcHVibGljIG5ld2N1cnJlbnRwYWdpbmdWYWw6IGFueTtcbiAgcHVibGljIHN0YXJ0RGF0ZTogYW55O1xuICBwdWJsaWMga2VlcFBhZ2luYXRpb246IGFueSA9IDA7XG4gIHB1YmxpYyBzdGFydERhdGUxMTE6IGFueSA9IG5ldyBEYXRlKDE2MjIzNTgwNTAwMDApXG4gIHB1YmxpYyBlbmREYXRlOiBhbnk7XG4gIGRhdGFzb3VyY2V2YWw6IGFueTtcbiAgc2VhcmNoX3NldHRpbmdzdmFsOiBhbnk7XG4gIGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbDogYW55O1xuICBncmFiX2xpbmt2YWw6IGFueTtcbiAgZGF0ZV9zZWFyY2hfc291cmNldmFsOiBhbnk7XG4gIGRhdGVfc2VhcmNoX2VuZHBvaW50dmFsOiBhbnk7XG4gIHVybHZhbDogYW55O1xuICBzZWFyY2hlbmRwb2ludHZhbDogYW55O1xuICBwdWJsaWMgc2VhcmNoTGlzdHZhbDogYW55O1xuICByZXNjb3VudDogbnVtYmVyID0gMDtcbiAgcGRmX2xpbmtfdmFsOiBhbnk7XG4gIHN0YXR1c2FycnZhbDogYW55O1xuICBza2lwdmFsOiBhbnk7XG4gIGVycm9ybWc6IGFueTtcbiAgand0dG9rZW52YWw6IGFueTtcbiAgZGV0YWlsX2RhdGF0eXBldmFsOiBhbnk7XG4gIGRldGFpbF9za2lwX2FycmF5dmFsOiBhbnk7XG4gIGRlbGV0ZWVuZHBvaW50dmFsOiBhbnk7XG4gIGVkaXRyb3V0ZXZhbDogYW55O1xuICBhcGl1cmx2YWw6IGFueTtcbiAgdXBkYXRlZW5kcG9pbnR2YWw6IGFueTtcbiAgbW9kaWZ5X2hlYWRlcl9hcnJheXZhbDogYW55O1xuICBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw6IGFueTtcbiAgZGF0YWNvbGxlY3Rpb252YWw6IGFueTtcbiAgc2VsZWN0aW9uOiBhbnk7XG4gIHNvdXJjZWRhdGF2YWw6IGFueTtcbiAgZW1haWxhcnJheXZhbDogYW55O1xuICBjb2x1bW5zOiBhbnkgPSBbXTtcbiAgYXV0b3NlYXJjaGlucHV0OiBhbnkgPSBbXTtcbiAgY3VycmVudGF1dG9zZWFyY2hhcnI6IGFueSA9IFtdO1xuICBvbGRkYXRhOiBhbnkgPSBbXTtcbiAgdHNlYXJjaDogYW55ID0gW107XG4gIHRhYmxlZmxhZzogYW55ID0gMDtcbiAgYXV0b3NlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyB4OiBhbnk7XG4gIHB1YmxpYyBsaWJkYXRhdmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGxpbWl0Y29uZHZhbDogYW55ID0ge307XG4gIHB1YmxpYyBjdXN0b21idXR0b252YWw6IGFueTtcbiAgcHVibGljIHJlc3VsdDogYW55ID0ge307XG4gIHB1YmxpYyBzb3J0ZGF0YXZhbDogYW55ID0ge307XG4gIHB1YmxpYyBzaDogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhcnQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgYXVkMjogYW55ID0gZmFsc2U7XG4gIHB1YmxpYyBhdWQ6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgdXBkYXRldGFibGV2YWw6IGFueSA9IGZhbHNlO1xuICBsb2FkZXJyb3c6IGFueSA9IG51bGw7XG4gIGN1cnJlbnRhdXRvY29tcGxldGVpdGVtOiBhbnk7XG4gIHB1YmxpYyBjdXN0b21CdXR0b25GbGFnVmFsOiBhbnkgPSB7fTtcbiAgcHVibGljIGFsbFNlYXJjaENvbmQ6IGFueSA9IFtdO1xuICBwdWJsaWMgc2VhcmNoYnV0dG9udmFsOiBhbnkgPSBbXTtcbiAgcHVibGljIHNlYXJjaEJhckZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHNlYXJjaEJhclRvb2xUaXA6IGFueSA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICBwdWJsaWMgc2VhcmNoQmFyRmxhZ1ZhbDogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmVjb3JkRm91bmRGbGFnOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyByZWNvcmRGb3VuZERhdGE6IGFueSA9ICcnO1xuICAvKmZvciBwcm9ncmVzcyBiYXIqL1xuXG4gIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XG4gIG1vZGU6IGFueSA9ICdpbmRldGVybWluYXRlJztcbiAgdmFsdWUgPSA1MDtcbiAgYnVmZmVyVmFsdWUgPSA3NTtcblxuICAvKiB0aGlzIHZhcmlhYmxlIGZvciBhcnRpc3QgeHAgcHJldmlldyAqL1xuICBwcmV2aWV3Rmx1ZzogYW55ID0gZmFsc2U7XG4gIHNlbGVjdHNlYXJjaDogYW55ID0gW107XG4gIHB1YmxpYyBuZXdwYWdpbmdjb3VudEZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgaW5pdGlhdGVTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBAT3V0cHV0KCkgb25MaWJsaXN0aW5nQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XG5cbiAgQE91dHB1dCgpIG9uTGlibGlzdGluZ0J1dHRvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xuICBwdWJsaWMgY29udmVydFRvTGFuZ3VhZ2U6IGFueTtcbiAgc2VhcmNoc3Ryc2FycjogYW55ID0gW107XG4gIHB1YmxpYyBvbGRsaW1pdHJhbmdlOiBhbnkgPSBbXTtcbiAgcHVibGljIGxhbmd1YWdlZGF0YXNldDogYW55ID0gW107XG4gIEBJbnB1dCgpXG4gIHNldCBsYW5ndWFnZURhdGFzZXQodmFsdWU6IGFueSkge1xuICAgIHRoaXMubGFuZ3VhZ2VkYXRhc2V0ID0gdmFsdWU7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5ncmFiX2xpbmt2YWwpO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZXRjb252ZXJ0VG9MYW5ndWFnZSh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5jb252ZXJ0VG9MYW5ndWFnZSA9IHZhbHVlO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGV2ZWxvcGVyIHRlc3RcIix0aGlzLmNvbnZlcnRUb0xhbmd1YWdlKVxuXG4gICAgaWYgKHR5cGVvZiB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlICE9ICd1bmRlZmluZWQnICYmIHRoaXMuY29udmVydFRvTGFuZ3VhZ2UgIT0gbnVsbCAmJiB0aGlzLmNvbnZlcnRUb0xhbmd1YWdlICE9ICcnKSB7XG4gICAgICB0aGlzLm9ic2VydmFibGVTZXJ2aWNlLnNldGNvbnZlcnRUb0xhbmd1YWdlKHRoaXMuY29udmVydFRvTGFuZ3VhZ2UpO1xuICAgIH1cbiAgfVxuICBASW5wdXQoKVxuICBzZXQgc2VhcmNoX3NldHRpbmdzKHNlYXJjaF9zZXR0aW5nczogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwgPSBzZWFyY2hfc2V0dGluZ3M7XG4gICAgLy8gY29uc29sZS5sb2coJ3NlYXJjaF9zZXR0aW5nc3ZhbCsrKysrKycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsKVxuICAgIC8qZm9yIChsZXQgaT0gMDsgaTw9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2ldLmxhYmVsKTtcbiAgICB9Ki9cblxuICAgIC8qICBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoWzBdLmxhYmVsKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFswXS52YWx1ZXMpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7Ki9cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBjbGlja190b19hZGRfYW5hbm90aGVyX3BhZ2UoY2xpY2tfdG9fYWRkX2FuYW5vdGhlcl9wYWdlOiBhbnkpIHtcbiAgICB0aGlzLmNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZXZhbCA9IGNsaWNrX3RvX2FkZF9hbmFub3RoZXJfcGFnZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgbGltaXRjb25kKGxpbWl0Y29uZHZhbDogYW55KSB7XG4gICAgdGhpcy5saW1pdGNvbmR2YWwgPSBsaW1pdGNvbmR2YWw7XG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuXG4gICAgfVxuICAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaChsaW1pdGNvbmR2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaW1pdGNvbmR2YWwnLHRoaXMubGltaXRjb25kdmFsKTtcbiAgfVxuICBwdWJsaWMgcGFnZUNvdW50QXJyYXk6IGFueTtcbiAgcHVibGljIGZpcnN0cGFnZUNvdW50QXJyYXk6IGFueTtcbiAgcHVibGljIGxhc3RwYWdlQ291bnRBcnJheTogYW55O1xuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50KGRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbDogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWw7XG4gICAgdGhpcy5wYWdlQ291bnRBcnJheSA9IG5ldyBBcnJheShNYXRoLmNlaWwoZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsIC8gdGhpcy5saW1pdGNvbmR2YWwubGltaXQpKTtcbiAgICB0aGlzLmxhc3RwYWdlQ291bnRBcnJheSA9IE1hdGguY2VpbChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCk7XG4gICAgY29uc29sZS5sb2coXCJ0aGlzLnBhZ2VDb3VudEFycmF5XCIsIE1hdGguY2VpbChkYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuXG5cbiAgICBpZiAodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPT0gMCkgeyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxOyB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGVfc2VhcmNoX3NvdXJjZV9jb3VudCcsdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwpO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGdyYWJfbGluayhncmFiX2xpbms6IGFueSkge1xuICAgIHRoaXMuZ3JhYl9saW5rdmFsID0gZ3JhYl9saW5rO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZ3JhYl9saW5rdmFsKTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgY3VzdG9tYnV0dG9uKGN1c3RvbWJ1dHRvbjogYW55KSB7XG4gICAgdGhpcy5jdXN0b21idXR0b252YWwgPSBjdXN0b21idXR0b247XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfc291cmNlKGRhdGVfc2VhcmNoX3NvdXJjZTogYW55KSB7XG4gICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwgPSBkYXRlX3NlYXJjaF9zb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNvcnRkYXRhKHNvcnRkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLnNvcnRkYXRhdmFsID0gc29ydGRhdGF2YWw7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zb3J0ZGF0YXZhbCwgJ3NvcnRkYXRhdmFsJyk7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgZGF0ZV9zZWFyY2hfZW5kcG9pbnQoZGF0ZV9zZWFyY2hfZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWwgPSBkYXRlX3NlYXJjaF9lbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgdXJsKHVybDogYW55KSB7XG4gICAgdGhpcy51cmx2YWwgPSB1cmw7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHNlYXJjaGVuZHBvaW50KHNlYXJjaGVuZHBvaW50OiBhbnkpIHtcbiAgICB0aGlzLnNlYXJjaGVuZHBvaW50dmFsID0gc2VhcmNoZW5kcG9pbnQ7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IHBkZl9saW5rKHBkZl9saW5rOiBhbnkpIHtcbiAgICB0aGlzLnBkZl9saW5rX3ZhbCA9IHBkZl9saW5rO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBzZWFyY2hMaXN0KHNlYXJjaExpc3Q6IGFueSkge1xuICAgIHRoaXMuc2VhcmNoTGlzdHZhbCA9IHNlYXJjaExpc3Q7XG4gIH1cbiAgcHVibGljIHBhZ2luYXRpb250eXBlOiBhbnk7XG4gIHB1YmxpYyBwYWdpbmF0aW9udHlwZUZsYWc6IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKVxuICBzZXQgbGliZGF0YShsaWJkYXRhdmFsOiBhbnkpIHtcbiAgICB0aGlzLmxpYmRhdGF2YWwgPSBbXTtcbiAgICB0aGlzLmxpYmRhdGF2YWwgPSBsaWJkYXRhdmFsO1xuXG4gICAgdGhpcy5wYWdpbmF0aW9udHlwZSA9IHRoaXMubGliZGF0YXZhbC5wYWdpbmF0aW9uVHlwZTtcbiAgICBpZiAodHlwZW9mIHRoaXMubGliZGF0YXZhbC5wYWdpbmF0aW9uVHlwZSA9PSAndW5kZWZpbmVkJyAmJiB0aGlzLmxpYmRhdGF2YWwucGFnaW5hdGlvblR5cGUgPT0gbnVsbCkge1xuICAgICAgdGhpcy5wYWdpbmF0aW9udHlwZUZsYWcgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2xpYmRhdGF2YWwnLCB0aGlzLmxpYmRhdGF2YWwpO1xuICAgIGNvbnNvbGUubG9nKCdsaWJkYXRhdmFsJywgdGhpcy5wYWdpbmF0aW9udHlwZSk7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmxpYmRhdGF2YWwucGFnZXMgIT0gJ3VuZGVmaW5lZCcgJiYgdGhpcy5saWJkYXRhdmFsLnBhZ2VzICE9IG51bGwpIHtcbiAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmxpYmRhdGF2YWwucGFnZXM7XG4gICAgfVxuXG4gICAgLy8gc2VhcmNoQmFyRmxhZ1xuXG4gICAgLy8gY29uc29sZS5sb2cobGliZGF0YXZhbC5zZWFyY2hCYXJGbGFnVmFsKVxuXG4gICAgaWYgKGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbCAhPSBudWxsICYmIGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbCAhPSAnJykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZ1ZhbCA9IGxpYmRhdGF2YWwuc2VhcmNoQmFyRmxhZ1ZhbDtcbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlYXJjaEJhckZsYWcgPSB0cnVlO1xuICAgIH1cblxuXG4gICAgaWYgKGxpYmRhdGF2YWwucmVjb3JkZm91bmRmbGFnICE9IG51bGwgJiYgbGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWcgIT0gJycgJiYgbGliZGF0YXZhbC5yZWNvcmRmb3VuZGRhdGEgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMucmVjb3JkRm91bmRGbGFnID0gbGliZGF0YXZhbC5yZWNvcmRmb3VuZGZsYWc7XG4gICAgICAgIHRoaXMucmVjb3JkRm91bmREYXRhID0gbGliZGF0YXZhbC5yZWNvcmRmb3VuZGRhdGE7XG5cbiAgICAgIH0sIDEwMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY29yZEZvdW5kRmxhZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBkYXRhc291cmNlKGRhdGFzb3VyY2U6IGFueSkge1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IFtdO1xuICAgIHRoaXMuZGF0YXNvdXJjZXZhbCA9IGRhdGFzb3VyY2U7XG4gIH1cbiAgQElucHV0KClcbiAgc2V0IGRhdGFjb2xsZWN0aW9uKGRhdGFjb2xsZWN0aW9udmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFjb2xsZWN0aW9udmFsID0gZGF0YWNvbGxlY3Rpb252YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgc2tpcChza2lwOiBhbnkpIHtcbiAgICB0aGlzLnNraXB2YWwgPSBza2lwO1xuICB9XG4gIEBJbnB1dCgpXG4gIHNldCBkZXRhaWxfZGF0YXR5cGUoZGV0YWlsX2RhdGF0eXBlOiBhbnkpIHtcbiAgICB0aGlzLmRldGFpbF9kYXRhdHlwZXZhbCA9IGRldGFpbF9kYXRhdHlwZTtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgZGV0YWlsX3NraXBfYXJyYXkoZGV0YWlsX3NraXBfYXJyYXk6IGFueSkge1xuICAgIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwgPSBkZXRhaWxfc2tpcF9hcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBzb3VyY2VkYXRhKHNvdXJjZWRhdGE6IGFueSkge1xuICAgIHRoaXMuc291cmNlZGF0YXZhbCA9IHNvdXJjZWRhdGE7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgbW9kaWZ5X2hlYWRlcl9hcnJheShtb2RpZnlfaGVhZGVyX2FycmF5OiBhbnkpIHtcbiAgICB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwgPSBtb2RpZnlfaGVhZGVyX2FycmF5O1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGRlbGV0ZWVuZHBvaW50KGRlbGV0ZWVuZHBvaW50dmFsOiBhbnkpIHtcbiAgICB0aGlzLmRlbGV0ZWVuZHBvaW50dmFsID0gZGVsZXRlZW5kcG9pbnR2YWw7XG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgdXBkYXRlZW5kcG9pbnQodXBkYXRlZW5kcG9pbnQ6IGFueSkge1xuICAgIHRoaXMudXBkYXRlZW5kcG9pbnR2YWwgPSB1cGRhdGVlbmRwb2ludDtcbiAgfVxuICBASW5wdXQoKVxuICBzZXQgYXBpdXJsKGFwaXVybDogYW55KSB7XG4gICAgdGhpcy5hcGl1cmx2YWwgPSBhcGl1cmw7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmFwaXVybHZhbFwiLHRoaXMuYXBpdXJsdmFsKTtcblxuICAgIHRoaXMub2JzZXJ2YWJsZVNlcnZpY2Uuc2V0YXBpVXJsKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLmFkZGxhbmd1YWdlZGF0YUVuZHBvaW50KTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCB1cGRhdGV0YWJsZSh1cGRhdGV0YWJsZTogYW55KSB7XG4gICAgdGhpcy51cGRhdGV0YWJsZXZhbCA9IHVwZGF0ZXRhYmxlO1xuXG4gIH1cblxuICBASW5wdXQoKVxuICBzZXQgand0dG9rZW4oand0dG9rZW46IGFueSkge1xuICAgIGlmIChqd3R0b2tlbiAhPSBudWxsKSB7IHRoaXMuand0dG9rZW52YWwgPSBqd3R0b2tlbjsgfSBlbHNlIHsgdGhpcy5qd3R0b2tlbnZhbCA9ICcnOyB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCwndG9rZW4nKVxuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHN0YXR1c2FycihzdGF0dXNhcnI6IGFueSkge1xuICAgIHRoaXMuc3RhdHVzYXJydmFsID0gc3RhdHVzYXJyO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IGVtYWlsYXJyYXkoZW1haWxhcnJheTogYW55KSB7XG4gICAgdGhpcy5lbWFpbGFycmF5dmFsID0gZW1haWxhcnJheTtcbiAgfVxuXG4gIEBJbnB1dCgpXG4gIHNldCBlZGl0cm91dGUoZWRpdHJvdXRlOiBhbnkpIHtcbiAgICB0aGlzLmVkaXRyb3V0ZXZhbCA9IGVkaXRyb3V0ZTtcbiAgfVxuXG5cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBzdGFydCAqL1xuICBASW5wdXQoKVxuICBzZXQgcHJldmlld19hcnRpc3R4cChmbHVnOiBhbnkpIHtcbiAgICB0aGlzLnByZXZpZXdGbHVnID0gdHJ1ZTtcbiAgfVxuICAvKiBhcnRpc3R4cCBwcmV2aWV3IGVuZCAqL1xuXG4gIEBJbnB1dCgpXG4gIHNldCBjdXN0b21saXN0ZW5idXR0b24odmFsOiBhbnkpIHtcbiAgICB0aGlzLmN1c3RvbUJ1dHRvbkZsYWdWYWwgPSB2YWxcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbUJ1dHRvbkZsYWdWYWwsICdjdXN0b21CdXR0b25GbGFnVmFsJylcbiAgfVxuXG4gIC8vIHNlYXJjaCBidXR0b25zIFxuICAvLyBASW5wdXQoKVxuICAvLyBzZXQgc2VhcmNoYnV0dG9ucyh2YWw6IGFueSkge1xuICAvLyAgIHRoaXMuc2VhcmNoYnV0dG9udmFsID0gdmFsXG4gIC8vICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hidXR0b252YWwsICdjdXN0b21CdXR0b25GbGFnVmFsJylcbiAgLy8gfVxuXG5cbiAgZXhwYW5kZWRFbGVtZW50OiBhbnk7XG5cblxuXG4gIHN0YXRlR3JvdXBzOiBzdHJpbmdbXTtcbiAgcHVibGljIGFsbHBhZ2luYXRpb25wb3N0RGF0YTogYW55O1xuICBzdGF0ZUdyb3VwOiBPYnNlcnZhYmxlPHN0cmluZ1tdPjtcbiAgZGlzcGxheWVkQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgZGF0YWNvbHVtbnM6IHN0cmluZ1tdID0gW107XG4gIGRpc3BsYXllZENvbHVtbnNoZWFkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvcm1hcnJheTogYW55ID0gW107XG4gIHN0YXJ0X2RhdGU6IGFueTtcbiAgZGF0ZVNlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICBzZWxlY3RTZWFyY2hfY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgYXV0b1NlYXJjaF9jb25kaXRpb246IGFueSA9IHt9O1xuICB0ZXh0U2VhcmNoX2NvbmRpdGlvbjogYW55ID0ge307XG4gIGVuZF9kYXRlOiBhbnk7XG4gIHB1YmxpYyBpOiBhbnk7XG4gIGxvYWRpbmc6IGFueSA9IGZhbHNlO1xuICBwdWJsaWMgcHJlcmVzdWx0OiBhbnkgPSB7fTtcbiAgcHVibGljIGJ1dHRvblNlYXJjaERhdGE6IGFueSA9IFtdO1xuICAvLyBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLmRhdGFzb3VyY2V2YWwpO1xuICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZTtcblxuICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XG4gIEBWaWV3Q2hpbGQoTWF0UGFnaW5hdG9yKSBwYWdpbmF0b3I6IE1hdFBhZ2luYXRvcjtcbiAgLy8gb3B0aW9uczogRm9ybUdyb3VwO1xuICBteUZvcm06IGFueTtcbiAgLy8gbXlGb3JtOmFueTtcbiAgbW9kZWxDaGFuZ2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBtb2RlbENoYW5nZWRzZXJ2ZXIgPSBuZXcgU3ViamVjdDxhbnk+KCk7XG4gIHBhZ2VjaGFuZ2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xuICBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuICBzdWJzY3JpcHRpb25jb3VudCA9IDA7XG4gIHRhYmxlRm9vdGVyQ29sdW1uczogc3RyaW5nW10gPSBbXTtcbiAgdGVzdHZhbHVlOiBhbnkgPSBcInMxXCI7XG4gIHR4dFF1ZXJ5Q2hhbmdlZDogU3ViamVjdDxzdHJpbmc+ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xuICBsaW1pdENoYW5ncmQ6IFN1YmplY3Q8c3RyaW5nPiA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcblxuICAvLyBzZWFyY2hSZXN1bHQkOiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdFtdPjtcbiAgLy8gZm9yIGRyb3Bkb3duIHBhZ2luYXRpb25cbiAgcHVibGljIHBhZ2VzOiBhbnkgPSBbXTtcbiAgY29uc3RydWN0b3IocHVibGljIF9hcGlTZXJ2aWNlOiBBcGlTZXJ2aWNlLCBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXG4gICAgcHVibGljIGJvdHRvbVNoZWV0OiBNYXRCb3R0b21TaGVldCxcbiAgICBwdWJsaWMgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgcHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgIHByaXZhdGUgY29udGFpbmVyOiBWaWV3Q29udGFpbmVyUmVmLFxuICAgIHB1YmxpYyBfaHR0cDogSHR0cENsaWVudCxcbiAgICBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXG4gICAgcHJpdmF0ZSBfc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxuICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHVibGljIG9ic2VydmFibGVTZXJ2aWNlOiBPYnNlcnZhYmxlc2VydmljZVNlcnZpY2UsXG5cbiAgKSB7XG4gICAgdGhpcy5zdGF0ZUdyb3VwcyA9IHRoaXMuc2VhcmNoTGlzdHZhbDtcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgIHN3aXRjaCAodHJ1ZSkge1xuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvblN0YXJ0OiB7XG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIGV2ZW50IGluc3RhbmNlb2YgTmF2aWdhdGlvbkVuZDpcbiAgICAgICAgY2FzZSBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25DYW5jZWw6XG4gICAgICAgIGNhc2UgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRXJyb3I6IHtcbiAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OiB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuXG5cbiAgICAvLyB0aGlzLnR4dFF1ZXJ5Q2hhbmdlZFxuICAgIC8vICAgICAgICAgLmRlYm91bmNlVGltZSgxMDAwKSAvLyB3YWl0IDEgc2VjIGFmdGVyIHRoZSBsYXN0IGV2ZW50IGJlZm9yZSBlbWl0dGluZyBsYXN0IGV2ZW50XG4gICAgLy8gICAgICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKSAvLyBvbmx5IGVtaXQgaWYgdmFsdWUgaXMgZGlmZmVyZW50IGZyb20gcHJldmlvdXMgdmFsdWVcbiAgICAvLyAgICAgICAgIC5zdWJzY3JpYmUobW9kZWwgPT4ge1xuICAgIC8vICAgICAgICAgICB0aGlzLnR4dFF1ZXJ5ID0gbW9kZWw7XG5cbiAgICAvLyAgICAgICAgICAgLy8gQ2FsbCB5b3VyIGZ1bmN0aW9uIHdoaWNoIGNhbGxzIEFQSSBvciBkbyBhbnl0aGluZyB5b3Ugd291bGQgbGlrZSBkbyBhZnRlciBhIGxhZyBvZiAxIHNlY1xuICAgIC8vICAgICAgICAgICB0aGlzLmdldERhdGFGcm9tQVBJKHRoaXMudHh0UXVlcnkpO1xuICAgIC8vICAgICAgICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLnR4dFF1ZXJ5Q2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA+IHRoaXMubGFzdHBhZ2VDb3VudEFycmF5KSB7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb3JyeSEhIFBhZ2UgbnVtYmVyIGlzIG91dCBvZiByYW5nZSwgaGlnaGVzdCByYW5nZSBpcyAnICsgdGhpcy5sYXN0cGFnZUNvdW50QXJyYXkgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoICsgMSA+IHRoaXMucGFnZUNoYW5nZVZhbHVlKSB7XG4gICAgICAgICAgdGhpcy5wYWdpbmcodGhpcy5wYWdlQ2hhbmdlVmFsdWUsICcnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvL3BhZ2UgY291bnQgb3V0IG9mIGJvdW5kIFxuICAgICAgICAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZmlyc3RcIiwgdGhpcy5wYWdlQ2hhbmdlVmFsdWUsIFwiKysrXCIsIHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKTtcblxuXG4gICAgICB9KTtcblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLmxpbWl0Q2hhbmdyZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgyNTAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhZ2VDaGFuZ2VWYWx1ZSBzdWJzY3JpYmVkICEhICcsIHRoaXMucGFnZUNoYW5nZVZhbHVlLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAgIGlmICh0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSkge1xuICAgICAgICAgIHRoaXMucGFnaW5nKHRoaXMucGFnZUNoYW5nZVZhbHVlLCAnJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy9wYWdlIGNvdW50IG91dCBvZiBib3VuZCBcbiAgICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cblxuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAnLCB0aGlzLmF1dG9zZWFyY2hpbnB1dCwgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSk7XG4gICAgICAgIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcbiAgICAgIH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLm1vZGVsQ2hhbmdlZHNlcnZlclxuICAgICAgLnBpcGUoXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDAwKSxcbiAgICAgICAgLy8gZGlzdGluY3RVbnRpbENoYW5nZWQoKSBcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICAvLyB0aGlzLnNlYXJjaFJlc3VsdCQgPSB0aGlzLmFwaS5zZWFyY2godGhpcy5tb2RlbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhZnRlciBkZWJvdW5jZSAgc2VydmVyJywgdGhpcy5hdXRvc2VhcmNoaW5wdXQsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgICAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFt0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLmZpZWxkXSAhPSAnJykge1xuICAgICAgICAgIC8vIHRoaXMuZmlsdGVyYXV0b3ZhbCh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtKTtcblxuICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbS5zZXJ2ZXJzZWFyY2hkYXRhLmVuZHBvaW50O1xuXG4gICAgICAgICAgbGV0IHNvdXJjZTogYW55O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXV0b2NvbXBsZXRlIGRlYm91bmNlVGltZSgxMDAwKVwiLHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcbiAgICAgICAgICBpZiAodHlwZW9mIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uID09ICd1bmRlZmluZWQnIHx8IHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uID0ge307XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IHRleHRTZWFyY2g6IGFueSA9IHt9O1xuICAgICAgICAgIC8vIHRoaXMuc2VhcmNoc3Ryc2Fyci5wdXNoKHsgdmFsOiB0aGlzLnRzZWFyY2hbdmFsdWVdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWx1ZSB9KTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaHN0cnNhcnIsICd0aGlzLnNlYXJjaHN0cnNhcnInKTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gnKTtcbiAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGhpcy50c2VhcmNoKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYWxsIHNlYXJjaCB0aGlzLnRzZWFyY2gnLCB0aGlzLnRzZWFyY2hbaV0pO1xuICAgICAgICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gJycpIHtcbiAgICAgICAgICAgICAgdGV4dFNlYXJjaFtpXSA9IHsgJHJlZ2V4OiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGJ1dHRvbnNlYXJjaDogYW55ID0ge307XG4gICAgICAgICAgZm9yIChsZXQgYnMgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZSkge1xuICAgICAgICAgICAgICBjb25zdCBidDogYW55ID0ge307XG4gICAgICAgICAgICAgIGJ0W3RoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10uZmllbGRdID0gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZVtrXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICBpZiAoYnV0dG9uc2VhcmNoLiRvciA9PSBudWxsKSB7IGJ1dHRvbnNlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhidCwnYnQnLGJzLCdicycpXG4gICAgICAgICAgICAgIGJ1dHRvbnNlYXJjaC4kb3IucHVzaChidCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHNvdXJjZSA9IHtcbiAgICAgICAgICAgIHNlYXJjaF9zdHI6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3RoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0uZmllbGRdLFxuICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWxsU2VhcmNoQ29uZDogdGhpcy5hbGxTZWFyY2hDb25kLFxuICAgICAgICAgICAgYmFzZWNvbmRpdGlvbjogdGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24sXG4gICAgICAgICAgICBkYXRhc2VhcmNoOiB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLFxuICAgICAgICAgICAgdGV4dHNlYXJjaDogdGV4dFNlYXJjaCxcbiAgICAgICAgICAgIGJ1dHRvblNlYXJjaDogYnV0dG9uc2VhcmNoLFxuICAgICAgICAgICAgc2VsZWN0c2VhcmNoOiB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb25cbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvbi4uLicsY29uZGl0aW9ub2JqLHRoaXMuZW5kX2RhdGUpO1xuICAgICAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgICAgICAvLyByZXR1cm47XG4gICAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzLCAncmVzdWx0Jyk7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHJldHVybjtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICAgIC8vIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5yZXN1bHRzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwpIHRoaXMucmVzY291bnQgPSByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gcmVzdWx0LnJlcztcbiAgICAgICAgICAgICAgLy8gYXV0b2NvbXBsZXRlIHNlYXJjaGluZyBzbmFrYmFyXG5cbiAgICAgICAgICAgICAgLy8gdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgLy8gICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgICAgICAgLy8gICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQgJyB9XG4gICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuXG4gICAgICAgICAgICAgIC8vIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICAgIC8vICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIC8vICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBzdWNoIHNlYXJjaCByZWNvcmQgZm91bmQgISEnIH1cbiAgICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgIH0pO1xuXG5cblxuXG4gICAgLyogdGhpcy5teUZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgICBlbWFpbDogWycnLCBWYWxpZGF0b3JzLmNvbXBvc2UoW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMucGF0dGVybigvXlxccypbXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxcQFtcXHdcXC1cXCtfXStcXC5bXFx3XFwtXFwrX10rKFxcLltcXHdcXC1cXCtfXSspKlxccyokLyldKV0sXG4gICAgICAgcGFzc3dvcmQ6IFsnJywgVmFsaWRhdG9ycy5yZXF1aXJlZF1cbiAgICAgfSk7Ki9cblxuICB9XG4gIC8qQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbTGlzdGluZ10nXG4gIH0pKi9cbiAgc3RhdHVzOiBib29sZWFuID0gZmFsc2U7XG4gIGNsaWNrRXZlbnQoKSB7XG4gICAgdGhpcy5zdGF0dXMgPSAhdGhpcy5zdGF0dXM7XG4gIH1cblxuICBhdXRvY29tcGxldGVmdW5jdGlvbihkYXRhOiBhbnkpIHtcbiAgICB0aGlzLmN1cnJlbnRhdXRvc2VhcmNoYXJyID0gW107XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtwcm9wS2V5OiBzdHJpbmddOiBTaW1wbGVDaGFuZ2UgfSkge1xuXG4gICAgLy8gY29uc29sZS5sb2coJ25nb25jaGFuZ2UgLi4nLGNoYW5nZXMpO1xuICAgIGZvciAoY29uc3QgdiBpbiBjaGFuZ2VzKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZyh2LGNoYW5nZXNbdl0sJ3Z2Jyk7XG4gICAgICBpZiAodiA9PSAndXBkYXRldGFibGUnKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd1cGRhdGV0YWJsZScpO1xuICAgICAgICBpZiAoY2hhbmdlc1t2XS5wcmV2aW91c1ZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xuICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb3VudGVyKGk6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgQXJyYXkoaSk7XG4gIH1cblxuICBvbkZpZWxkQ2hhbmdlKHF1ZXJ5OiBzdHJpbmcpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdxdWVyeScsIHF1ZXJ5LCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgLy8gaWYgKHF1ZXJ5IDw9IHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKSB7XG4gICAgaWYgKHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoICsgMSA+IHF1ZXJ5KSB7XG4gICAgICB0aGlzLnR4dFF1ZXJ5Q2hhbmdlZC5uZXh0KHF1ZXJ5KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd3aXRoIGluIGJvdW5kICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcGFnZSBjb3VudCBvdXQgb2YgYm91bmQgXG5cbiAgICB9XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgLy8gICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgIC8vICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvcnJ5ISEgUGFnZSBudW1iZXIgaXMgb3V0IG9mIHJhbmdlLCBoaWdoZXN0IHJhbmdlIGlzICcgKyB0aGlzLmxhc3RwYWdlQ291bnRBcnJheSB9XG4gICAgLy8gICB9KTtcbiAgICAvLyAgIHRoaXMucGFnZUNoYW5nZVZhbHVlID0gdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGg7XG4gICAgLy8gfVxuICB9XG5cbiAgb25GaWVsZENoYW5nZWZvcmxpbWl0KHF1ZXJ5OiBhbnkpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCdxdWVyeScsIHF1ZXJ5LCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgLy8gaWYgKHF1ZXJ5IDw9IHRoaXMucGFnZUNvdW50QXJyYXkubGVuZ3RoKSB7XG4gICAgaWYgKHF1ZXJ5IDwgMTAwKSB7XG4gICAgICB0aGlzLmxpbWl0Q2hhbmdyZC5uZXh0KHF1ZXJ5KTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCd3aXRoIGluIGJvdW5kICcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIC8vcGFnZSBjb3VudCBvdXQgb2YgYm91bmQgXG5cbiAgICB9XG5cblxuICB9XG5cbiAgaW5wdXRibHVyKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uIGJsdXIgLi4uLi4nKTtcbiAgICB0aGlzLm15Rm9ybS5jb250cm9sc1t2YWxdLm1hcmtBc1VudG91Y2hlZCgpO1xuICB9XG4gIG5nT25Jbml0KCkge1xuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5sYW5ndWFnZWRhdGFzZXRcIix0aGlzLmxhbmd1YWdlZGF0YXNldCk7XG4gICAgdGhpcy5vYnNlcnZhYmxlU2VydmljZS5zZXRtdWx0aWxpbmd1YWxEYXRhKHRoaXMubGFuZ3VhZ2VkYXRhc2V0KTtcbiAgICAvLyBhZGRsYW5ndWFnZWRhdGFFbmRwb2ludFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmFwaXVybHZhbFwiLCB0aGlzLmFwaXVybHZhbCk7XG5cblxuICAgIC8vIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaCAhPSAnJykge1xuXG4gICAgLy8gICBsZXQgc291cmNlOiBhbnk7XG4gICAgLy8gICBsZXQgY29uZGl0aW9uOiBhbnkgPSB7fTtcbiAgICAvLyAgIHNvdXJjZSA9IHtcbiAgICAvLyAgICAgc291cmNlOiB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZXZhbCxcbiAgICAvLyAgICAgY29uZGl0aW9uOiBjb25kaXRpb25cbiAgICAvLyAgIH07XG4gICAgLy8gICBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgLy8gICAgIHRoaXMucmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICB0aGlzLnByZXJlc3VsdCA9IHRoaXMucmVzdWx0LnJlcztcbiAgICAvLyAgIH0pO1xuXG4gICAgLy8gfVxuXG4gICAgLy8gbm90IG5lZWRlZCAsXG5cbiAgICAvLyB0aGlzLl9zZXJ2aWNlLnN1Y2Nlc3ModGhpcy5jb2x1bW5zWzBdLmRhdGUsJ2RuZG5uZCcsdGhpcy5vcHRpb25zKTtcbiAgICAvKiB0aGlzLnN0YXRlR3JvdXBPcHRpb25zID0gdGhpcy5teUNvbnRyb2wudmFsdWVDaGFuZ2VzXG4gICAgICAgICAucGlwZShcbiAgICAgICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICAgICAgIG1hcCh2YWx1ZSA9PiB0aGlzLl9maWx0ZXJHcm91cCh2YWx1ZSkpXG4gICAgICAgICApOyovXG5cbiAgICB0aGlzLnN0YXRlR3JvdXAgPSB0aGlzLm15Q29udHJvbC52YWx1ZUNoYW5nZXNcbiAgICAgIC5waXBlKFxuICAgICAgICBzdGFydFdpdGgoJycpLFxuICAgICAgICBtYXAodmFsdWUgPT4gdGhpcy5fZmlsdGVyKHZhbHVlKSlcbiAgICAgICk7XG5cbiAgICAvKmNvbnN0IGZhY3RvcnkgPSB0aGlzLnJlc29sdmVyLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KFxuICAgICAgICBjb21wb25lbnRNYXBwZXJbdGhpcy5maWVsZC50eXBlXVxuICAgICk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYgPSB0aGlzLmNvbnRhaW5lci5jcmVhdGVDb21wb25lbnQoZmFjdG9yeSk7XG4gICAgdGhpcy5jb21wb25lbnRSZWYuaW5zdGFuY2UuZmllbGQgPSB0aGlzLmZpZWxkO1xuICAgIHRoaXMuY29tcG9uZW50UmVmLmluc3RhbmNlLmdyb3VwID0gdGhpcy5ncm91cDtcbiovXG5cbiAgICB0aGlzLnggPSB0aGlzLmRhdGFzb3VyY2V2YWw7XG4gICAgY29uc3QgeCA9IHRoaXMueDtcbiAgICBpZiAodGhpcy5kYXRhc291cmNldmFsKSB0aGlzLnJlc2NvdW50ID0gdGhpcy5kYXRhc291cmNldmFsLmxlbmd0aDtcblxuICAgIGxldCB0ZW1wID0gW107XG4gICAgY29uc3Qga2V5cyA9IHhbMF07XG4gICAgdGVtcCA9IE9iamVjdC5rZXlzKGtleXMpOyAgICAvKmJ5IE9iamVjdC5rZXlzKCkgd2UgY2FuIGZpbmQgdGhlIGZpZWxkbmFtZXMob3Iga2V5cykgaW4gYW4gb2JqZWN0LCBpLmUsIGluIHRlbXAgb2JqZWN0IGZpZWxkIG5hbWVzIGFyZSBzYXZlZCovXG5cbiAgICBjb25zdCBjb2xkZWZfbGlzdCA9IFtdO1xuICAgIGNvbnN0IGhlYWRlcl9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb2xkZWZfbGlzdC5wdXNoKHRlbXBbaV0ucmVwbGFjZSgvXFxzL2csICdfJykpOyAgICAgIC8qdG8gcmVwbGFjZSBzcGFjZXMgaW4gZmllbGQgbmFtZSBieSBcIl9cIiwgd2UgdXNlIFwicmVwbGFjZSgvXFxzL2csIFwiX1wiKVwiKi9cbiAgICAgIGhlYWRlcl9saXN0LnB1c2godGVtcFtpXSk7XG4gICAgfVxuICAgIC8vIGNvbGRlZl9saXN0LnB1c2goJ0FjdGlvbnMnKTtcbiAgICAvLyBoZWFkZXJfbGlzdC5wdXNoKCdBY3Rpb25zJylcbiAgICAvLyBjb25zb2xlLmxvZygnY29sZGVmX2xpc3QnLGNvbGRlZl9saXN0KTtcbiAgICAvLyBjb25zb2xlLmxvZygnaGVhZGVyX2xpc3QnLGhlYWRlcl9saXN0KTtcbiAgICB0aGlzLmNvbHVtbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sZGVmX2xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IGZmID0gYHJvdy4ke2NvbGRlZl9saXN0W2ldfWA7XG4gICAgICBjb25zdCB0dCA9IHsgY29sdW1uRGVmOiBgJHtjb2xkZWZfbGlzdFtpXX1gLCBoZWFkZXI6IGAke2hlYWRlcl9saXN0W2ldfWAsIHRvb2x0aXA6IGAke2hlYWRlcl9saXN0W2ldfWAsIGNlbGw6IChyb3cpID0+IGV2YWwoZmYpLCBvYmpsZW5ndGg6IGhlYWRlcl9saXN0Lmxlbmd0aCB9O1xuICAgICAgLy8gY29uc29sZS5sb2coJ3R0Jyx0dCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygndHQuY29sdW1uRGVmJyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0dC5jb2x1bW5EZWYpO1xuXG4gICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5tb2RpZnlfaGVhZGVyX2FycmF5dmFsKSB7XG4gICAgICAgIGlmIChiID09IHR0LmhlYWRlcikgeyB0dC5oZWFkZXIgPSB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWxbYl07IH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBoZWFkZXIgdG9vbHRpcCBhcnJheVxuICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5oZWFkZXJfdG9vbHRpcF9hcnJheSAhPSBudWxsICYmIHR5cGVvZiAodGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5KSB7XG4gICAgICAgICAgaWYgKGIgPT0gdHQudG9vbHRpcCkgeyB0dC50b29sdGlwID0gdGhpcy5saWJkYXRhdmFsLmhlYWRlcl90b29sdGlwX2FycmF5W2JdOyB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2codHQudG9vbHRpcCwgJ3R0LnRvb2x0aXAgPT09PT0rKysrKycpXG4gICAgICB9XG5cblxuXG5cbiAgICAgIGlmICh0aGlzLnNraXB2YWwuaW5kZXhPZih0dC5jb2x1bW5EZWYpID09IC0xKSB7XG4gICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHR0KTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGV0IGRpc3BsYXllZGNvbHMgPSBbXTtcbiAgICB0aGlzLnRhYmxlZmxhZyA9IDE7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLnRhYmxlZmxhZyA9IDA7XG4gICAgfSwgMTAwKTtcblxuICAgIGRpc3BsYXllZGNvbHMgPSB0aGlzLmNvbHVtbnMubWFwKHggPT4geC5jb2x1bW5EZWYpO1xuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgfVxuXG5cblxuICAgIGVsc2UgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSBbXTtcblxuICAgIGxldCBjdXN0b21jb2xzOiBhbnkgPSBbXTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGlzcGxheWVkY29scycsZGlzcGxheWVkY29scyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbCAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnMgIT0gbnVsbCkge1xuICAgICAgY3VzdG9tY29scyA9IHRoaXMubGliZGF0YXZhbC50YWJsZWhlYWRlcnM7XG4gICAgfVxuICAgIGlmIChjdXN0b21jb2xzICE9IG51bGwgJiYgY3VzdG9tY29scy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgY2NvbHZhbDogc3RyaW5nID0gJyc7XG4gICAgICBmb3IgKGNvbnN0IHYgaW4gY3VzdG9tY29scykge1xuICAgICAgICBpZiAoZGlzcGxheWVkY29scy5pbmNsdWRlcyhjdXN0b21jb2xzW3ZdKSA9PSBmYWxzZSkge1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLm1vZGlmeV9oZWFkZXJfYXJyYXl2YWwpIHtcbiAgICAgICAgICAgIGlmIChiID09IGN1c3RvbWNvbHNbdl0pIHsgY2NvbHZhbCA9IHRoaXMubW9kaWZ5X2hlYWRlcl9hcnJheXZhbFtiXTsgfVxuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogY3VzdG9tY29sc1t2XSwgaGVhZGVyOiBjY29sdmFsLCBjZWxsOiAnTkEnIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBkaXNwbGF5ZWRjb2xzID0gY3VzdG9tY29scztcbiAgICB9XG5cblxuICAgIC8vIGNvbnNvbGUubG9nKCdjdXN0b21jb2xzJyxjdXN0b21jb2xzLGRpc3BsYXllZGNvbHMsdGhpcy5jb2x1bW5zKTtcbiAgICBpZiAodGhpcy5saWJkYXRhdmFsLmhpZGVhY3Rpb24gPT0gbnVsbCB8fCB0aGlzLmxpYmRhdGF2YWwuaGlkZWFjdGlvbiA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy5wdXNoKHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lID09IG51bGwgPyAnQWN0aW9ucycgOiB0aGlzLmxpYmRhdGF2YWwuYWN0aW9uY29sbmFtZSk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogdGhpcy5saWJkYXRhdmFsLmFjdGlvbmNvbG5hbWUgPT0gbnVsbCA/ICdBY3Rpb25zJyA6IHRoaXMubGliZGF0YXZhbC5hY3Rpb25jb2xuYW1lLCBoZWFkZXI6ICdBY3Rpb25zJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBudWxsIHx8IHRoaXMubGliZGF0YXZhbC5oaWRlY291bnRlciA9PSBmYWxzZSkge1xuICAgICAgZGlzcGxheWVkY29scy51bnNoaWZ0KCcjJyk7XG4gICAgICB0aGlzLmNvbHVtbnMucHVzaCh7IGNvbHVtbkRlZjogJyMnLCBoZWFkZXI6ICcjJywgY2VsbDogJ05BJyB9KTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scycpO1xuXG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gW107XG4gICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gZGlzcGxheWVkY29scztcbiAgICAvLyB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnIycpOyAgICAgICAgLyphZGRzIHNlbGVjdCBjb2x1bW4gaW4gdGFibGUgYnkgdW5zaGlmdCBmdW5jdGlvbiovXG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5oaWRlbXVsdGlwbGVzZWxlY3RidXR0b24gIT0gdHJ1ZSkge1xuICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ3NlbGVjdCcpO1xuICAgICAgdGhpcy5jb2x1bW5zLnB1c2goeyBjb2x1bW5EZWY6ICdzZWxlY3QnLCBoZWFkZXI6ICdzZWxlY3QnLCBjZWxsOiAnTkEnIH0pOyAgICAgICAvKmFkZHMgc2VsZWN0IGNvbHVtbiBpbiB0YWJsZSBieSB1bnNoaWZ0IGZ1bmN0aW9uKi9cbiAgICB9XG4gICAgbGV0IHRlbXBjb2xhcnIgPSBbXTtcbiAgICBsZXQgdGVtcGNvbGFycjIgPSBbXTtcbiAgICB0aGlzLmNvbHVtbnMucmV2ZXJzZSgpO1xuICAgIGZvciAobGV0IG4gaW4gdGhpcy5jb2x1bW5zKSB7XG4gICAgICBpZiAodGVtcGNvbGFyci5pbmRleE9mKHRoaXMuY29sdW1uc1tuXS5jb2x1bW5EZWYpID09IC0xKVxuICAgICAgICB0ZW1wY29sYXJyMi5wdXNoKHRoaXMuY29sdW1uc1tuXSk7XG4gICAgICB0ZW1wY29sYXJyLnB1c2godGhpcy5jb2x1bW5zW25dLmNvbHVtbkRlZik7XG5cbiAgICB9XG4gICAgdGhpcy5jb2x1bW5zID0gdGVtcGNvbGFycjI7XG5cbiAgICAvLyB0aGlzLmNvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5jb2x1bW5zLm1hcCgoaXRlbTogYW55KSA9PiBpdGVtLmNvbHVtbkRlZikpKTtcblxuICAgIC8vIHRoaXMuY29sdW1ucy5tYXAoaXRlbSA9PiBpdGVtLmNvbHVtbkRlZilcbiAgICAvLyAgIC5maWx0ZXIoKHZhbHVlLCBpbmRleCwgc2VsZikgPT4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpO1xuXG4gICAgLy8gdW5pcXVlIGNvbCBuYW1lcyBcbiAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5kaXNwbGF5ZWRDb2x1bW5zKSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5jb2x1bW5zLCAnY29scyBmaWx0ZXInLCB0aGlzLmRpc3BsYXllZENvbHVtbnMpO1xuXG4gICAgY29uc3QgZGF0YV9saXN0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLngubGVuZ3RoOyBpKyspIHtcbiAgICAgIGRhdGFfbGlzdC5wdXNoKHRoaXMuY3JlYXRlRGF0YSh4W2ldKSk7XG4gICAgfVxuICAgIHRoaXMub2xkZGF0YSA9IGRhdGFfbGlzdDtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKGRhdGFfbGlzdCk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIHRoaXMuZXhwYW5kZWRFbGVtZW50ID0gdGhpcy5kYXRhU291cmNlO1xuXG4gICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG5cbiAgICAvLyBsb2FkIHNlYXJjaCBwcmVkZWZpbmRlZCBkYXRhXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG5cbiAgICAgIC8vIHRoaXMuc2VsZWN0c2VhcmNoWydzdGF0dXMnXSA9ICcwJztcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWxlY3RzZWFyY2gnLCB0aGlzLnNlbGVjdHNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3MxJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2gpIHtcbiAgICAgICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZSAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuc2VsZWN0U2VhcmNoKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0udmFsdWUsdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXSx0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlc1swXSlcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0c2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIHNlbGVjdFNlYXJjaF9jb25kaXRpb25cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0uZmllbGRdID1cbiAgICAgICAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaW5pdGlhdGVTZWFyY2gsICdpbml0aWF0ZVNlYXJjaCBzZWxlY3QnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsICdzcysrKysrPT09PT0rKysrJywgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoLCAnKysrKysrJywgdGhpcy5zZWxlY3RzZWFyY2gpO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWxlY3RzZWFyY2hbc2xdLnZhbHVlLHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaFtzbF0sdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VsZWN0c2VhcmNoW3NsXS52YWx1ZXNbMF0sJz8/Pz8/IG5ldyBzZWxlY3RTZWFyY2hfY29uZGl0aW9uJyx0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pXG5cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndDEnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKTtcbiAgICAgICAgZm9yIChjb25zdCBzbCBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnRleHRzZWFyY2hbc2xdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwudGV4dHNlYXJjaFtzbF0udmFsdWUgIT0gJycpIHtcbiAgICAgICAgICAgIHRoaXMudHNlYXJjaFt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS5maWVsZF0gPVxuICAgICAgICAgICAgICB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC50ZXh0c2VhcmNoW3NsXS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5pbml0aWF0ZVNlYXJjaCwgJ2luaXRpYXRlU2VhcmNoIHRleHQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2ggIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGxldCBhdHMgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUgIT0gJycgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdID09IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvc2VhcmNoW3RoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLmZpZWxkXSA9IFtdO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmb3IgKGxldCBrIGluIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlKSB7XG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlLCc+Pj09PT09PT0nKVxuICAgICAgICAgICAgICB0aGlzLmF1dG9zZWFyY2hbdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10uZmllbGRdLnB1c2goeyB2YWw6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlYXJjaFthdHNdLnZhbHVlW2tdLnZhbCwgbmFtZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoW2F0c10udmFsdWVba10ubmFtZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG4gICAgICAvLyBkYXRlU2VhcmNoX2NvbmRpdGlvblxuICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoKytcIiwgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCk7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaCAhPSBudWxsICYmIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUgIT0gbnVsbCAmJiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlICE9ICcnKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhdGVTZWFyY2ggPSB0cnVlO1xuXG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAgIC8vICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUgKyAxMDAwMDtcbiAgICAgICAgLy8gICAvLyB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUgPSB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGU7XG5cbiAgICAgICAgLy8gICB0aGlzLnN0YXJ0X2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAgIHRoaXMuZW5kX2RhdGUgPSBtb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlKSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuXG4gICAgICAgIC8vIC8vICB0aGlzLnN0YXJ0RGF0ZT1tb21lbnQobmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKSkuYWRkKDEsICdkYXlzJykuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKS50b1N0cmluZygpO1xuICAgICAgICAvLyAvLyAgdGhpcy5lbmREYXRlPW1vbWVudChuZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpKS5hZGQoMSwgJ2RheXMnKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpLnRvU3RyaW5nKCk7XG4gICAgICAgIC8vICB0aGlzLnN0YXJ0RGF0ZT1uZXcgRGF0ZSh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgdGhpcy5lbmREYXRlPW5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInRoaXMuc3RhcnREYXRlXCIsdGhpcy5zdGFydERhdGUpO1xuICAgICAgICAvLyAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSArIDg2Mzk5MDAwO1xuICAgICAgICAvLyAgIC8vIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInN0YXJ0IGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRndGUpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZW5kIGRhdGVcIix0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLnZhbHVlLiRsdGUpO1xuXG4gICAgICAgIC8vICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlIC0gODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5zdGFydF9kYXRlID0gbmV3IERhdGUodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kZ3RlKTtcbiAgICAgICAgdGhpcy5lbmRfZGF0ZSA9IG5ldyBEYXRlKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWUuJGx0ZSk7XG5cbiAgICAgICAgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlID0gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuZGF0ZXNlYXJjaFswXS52YWx1ZS4kbHRlICsgODYzOTkwMDA7XG5cbiAgICAgICAgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvblt0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5kYXRlc2VhcmNoWzBdLmZpZWxkXSA9IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmRhdGVzZWFyY2hbMF0udmFsdWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgJ3NlYXJjaF9zZXR0aW5nc3ZhbCcsIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24pXG5cblxuXG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoICE9IG51bGwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoLCAndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2gpIHtcbiAgICAgICAgICBsZXQgaW5kOiBhbnkgPSAwO1xuICAgICAgICAgIGluZCA9IHBhcnNlSW50KGkpO1xuICAgICAgICAgIGlmICh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0udmFsdWVzICE9IG51bGwgJiYgdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyAhPSAnJykge1xuICAgICAgICAgICAgdGhpcy5pbml0aWF0ZVNlYXJjaCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGEucHVzaCh7IGZpZWxkOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0uZmllbGQsIGtleTogaW5kLCB2YWx1ZTogdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLnZhbHVlcyB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5pbml0aWF0ZVNlYXJjaCA9PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICB9XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuXG5cblxuICAvLyBDdXN0b20gRmlsdGVyIG5ld1xuICBDdXN0b21CdXR0b25MaXN0ZW4odmFsOiBhbnkpIHtcbiAgICAvLyBhbGxTZWFyY2hDb25kXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoLCAndGhpcy5hbGxTZWFyY2hDb25kJylcblxuICAgIHRoaXMub25MaWJsaXN0aW5nQnV0dG9uQ2hhbmdlLmVtaXQoXG4gICAgICB7XG4gICAgICAgIGFjdGlvbjogJ2N1c3RvbWxpc3RlbmJ1dHRvbicsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCwgYnV0dG9uZGF0YTogdmFsLCBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsIGF1dG9TZWFyY2hWYWw6IHRoaXMuYXV0b3NlYXJjaCwgYnV0dG9uU2VhcmNoRGF0YTogdGhpcy5idXR0b25TZWFyY2hEYXRhXG4gICAgICB9XG4gICAgKVxuICAgIC8vIHZhciBkYXRhOmFueT17XG4gICAgLy8gICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgc2VsZWN0ZWRkYXRhOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCxzZWFyY2g6dGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwsYnV0dG9uVmFsOnZhbFxuICAgIC8vIH1cbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCdkYXRhKysrKz09PScsdmFsKVxuICB9XG5cblxuICAvKippbWFnZSB2aWV3IG1vZGFsICovXG4gIGltZ19tb2RhbF92aWV3KGltZzogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiaW1nX21vZGFsX3ZpZXdcIixpbWcpXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihJbWFnZVZpZXcsIHtcbiAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdjdXN0b20tbW9kYWxib3gtaW1hZ2UtcHJldmlldyddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7IGFsbGRhdGE6IGltZyB9XG4gICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ25nQWZ0ZXJDb250ZW50SW5pdCgpIC4uLicpO1xuICB9XG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0luaXQgY2FsbGVkIC4uLiAnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh0aGlzLmxpYmRhdGF2YWwgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwuY3Nzb3ZlcnJpZGVzb25jZWxsdG9yb3cgIT0gbnVsbCkge1xuICAgICAgICBmb3IgKGNvbnN0IGUgaW4gdGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93KSB7XG5cbiAgICAgICAgICBjb25zdCBjcmVkID0gdGhpcy51cFRvKHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuJyArIHRoaXMubGliZGF0YXZhbC5jc3NvdmVycmlkZXNvbmNlbGx0b3Jvd1tlXS5rZXkpLCAndHInKTtcbiAgICAgICAgICBpZiAoY3JlZCAhPSBudWxsKSBjcmVkLmNsYXNzTGlzdC5hZGQodGhpcy5saWJkYXRhdmFsLmNzc292ZXJyaWRlc29uY2VsbHRvcm93W2VdLnZhbCk7XG4gICAgICAgICAgLy8gY29uc3QgY3JlZCA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlZCcpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLnBhcmVudCgpLmFkZENsYXNzKCdjcmVkdHInKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjcmVkLCAnY3JlZCcsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICB9LCAyMDAwKTtcbiAgfVxuXG4gIC8vIFNlYXJjaCBCYXIgVG9nZ2xlXG4gIFNlYXJjaEJhclRvZ2dsZShmbGFnKSB7XG4gICAgdGhpcy5vbkxpYmxpc3RpbmdCdXR0b25DaGFuZ2UuZW1pdChcbiAgICAgIHtcbiAgICAgICAgYWN0aW9uOiAnc2VhcmNoYmFyJywgZmxhZzogZmxhZ1xuICAgICAgfVxuICAgIClcbiAgICBzd2l0Y2ggKGZsYWcpIHtcbiAgICAgIGNhc2UgdHJ1ZTpcbiAgICAgICAgdGhpcy5zZWFyY2hCYXJGbGFnID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdPcGVuIFNlYXJjaCBCYXInO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgZmFsc2U6XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyRmxhZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc2VhcmNoQmFyVG9vbFRpcCA9ICdDbG9zZSBTZWFyY2ggQmFyJztcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cblxuXG4gIHVwVG8oZWwsIHRhZ05hbWUpIHtcbiAgICB0YWdOYW1lID0gdGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgd2hpbGUgKGVsICYmIGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcbiAgICAgIGlmIChlbC50YWdOYW1lICYmIGVsLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PSB0YWdOYW1lKSB7XG4gICAgICAgIHJldHVybiBlbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBNYW55IERPTSBtZXRob2RzIHJldHVybiBudWxsIGlmIHRoZXkgZG9uJ3QgXG4gICAgLy8gZmluZCB0aGUgZWxlbWVudCB0aGV5IGFyZSBzZWFyY2hpbmcgZm9yXG4gICAgLy8gSXQgd291bGQgYmUgT0sgdG8gb21pdCB0aGUgZm9sbG93aW5nIGFuZCBqdXN0XG4gICAgLy8gcmV0dXJuIHVuZGVmaW5lZFxuICAgIHJldHVybiBudWxsO1xuICB9XG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcblxuICAgIC8vIGNvbnNvbGUubG9nKCduZ0FmdGVyQ29udGVudENoZWNrZWQgY2FsbGVkIC4uLicpO1xuXG4gIH1cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy8gcHJldmVudCBtZW1vcnkgbGVhayB3aGVuIGNvbXBvbmVudCBkZXN0cm95ZWRcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChzID0+IHMudW5zdWJzY3JpYmUoKSk7XG4gIH1cblxuICBjbGlja211bHRpcGxlc2VsZWN0b3B0aW9uKHZhbHMpIHtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHsgYWN0aW9uOiAnbXVsdGlwbGVzZWxlY3RvcHRpb25jbGljaycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsLCBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBidG5kYXRhOiB2YWxzIH0pO1xuXG4gIH1cblxuICBvblN1Ym1pdCgpIHtcbiAgICBsZXQgeDogYW55O1xuICAgIHRoaXMuZXJyb3JtZyA9ICcnO1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLm15Rm9ybS52YWx1ZTtcbiAgICBmb3IgKHggaW4gdGhpcy5teUZvcm0uY29udHJvbHMpIHtcbiAgICAgIHRoaXMubXlGb3JtLmNvbnRyb2xzW3hdLm1hcmtBc1RvdWNoZWQoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgZGF0ZVNlYXJjaCh2YWw6IGFueSwgaXRlbTogYW55KSB7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMudHNlYXJjaFt2YWxdLCBsYWJlbDogaXRlbS5sYWJlbCwga2V5OiB2YWwgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJzdGFydCBkYXRlXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zdGFydF9kYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmVuZF9kYXRlKTtcblxuICAgIC8vIGxldCBzZCA9IG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKTtcbiAgICAvLyBsZXQgZWQgPSBtb21lbnQodGhpcy5lbmRfZGF0ZSkudW5peCgpO1xuXG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIGNvbnN0IGxpbmsxID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0YWNvbGxlY3Rpb252YWwgKyAnLWNvdW50JztcblxuICAgIGxldCBzb3VyY2U6IGFueTtcbiAgICBsZXQgY29uZGl0aW9uOiBhbnk7XG4gICAgY29uc3QgdGV4dFNlYXJjaDogYW55ID0ge307XG4gICAgY29uZGl0aW9uID0ge307XG4gICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAvLyBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLnN0YXJ0X2RhdGU9dGhpcy5zdGFydERhdGU7XG4gICAgLy8gICB0aGlzLmVuZF9kYXRlPXRoaXMuZW5kRGF0ZTtcbiAgICAvLyB9XG5cbiAgICBpZiAobW9tZW50KHRoaXMuZW5kX2RhdGUpLnVuaXgoKSAhPSBudWxsICYmIG1vbWVudCh0aGlzLnN0YXJ0X2RhdGUpLnVuaXgoKSAhPSBudWxsKSB7XG5cbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG5cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgdGhpcy5zdGFydF9kYXRlICE9IG51bGwpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGd0ZTogbmV3IERhdGUodGhpcy5zdGFydF9kYXRlKS5nZXRUaW1lKCksXG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDAsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zdGFydF9kYXRlICE9IG51bGwgJiYgKHRoaXMuZW5kX2RhdGUgPT0gbnVsbCB8fCB0aGlzLmVuZF9kYXRlLmxlbmd0aCA9PSAwKSkge1xuICAgICAgICBjb25kaXRpb25bdmFsXSA9IHtcbiAgICAgICAgICAkZ3RlOiBuZXcgRGF0ZSh0aGlzLnN0YXJ0X2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmVuZF9kYXRlICE9IG51bGwgJiYgKHRoaXMuc3RhcnRfZGF0ZSA9PSBudWxsIHx8IHRoaXMuc3RhcnRfZGF0ZS5sZW5ndGggPT0gMCkpIHtcbiAgICAgICAgY29uZGl0aW9uW3ZhbF0gPSB7XG4gICAgICAgICAgJGx0ZTogbmV3IERhdGUodGhpcy5lbmRfZGF0ZSkuZ2V0VGltZSgpICsgODYzOTkwMDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbi5jcmVhdGVkX2RhdGV0aW1lLiRndGUsJ2FmdGVyICsgODYzOTkwMDAnLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlKVxuICAgICAgLy8gdmFyIGR0PXRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24uY3JlYXRlZF9kYXRldGltZS4kbHRlIC0gODYzOTkwMDA7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLmNyZWF0ZWRfZGF0ZXRpbWUuJGd0ZSwnYWZ0ZXIgLSA4NjM5OTAwMCcsZHQgKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgJ2RhdGVTZWFyY2hfY29uZGl0aW9uKysnKTtcblxuICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoKTtcbiAgICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFtpXSAhPSAnJykge1xuICAgICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuICAgICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgICAgZm9yIChjb25zdCBiIGluIHRoaXMuYXV0b3NlYXJjaCkge1xuICAgICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG4gICAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICAgIHR2W2JdID0gdGhpcy5hdXRvc2VhcmNoW2JdW21dLnZhbC50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgaWYgKGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgYXV0b3NlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kb3IgMScpXG4gICAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgICBzb3VyY2UgPSB7XG4gICAgICAgIGNvbmRpdGlvbjoge1xuICAgICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgICBza2lwOiAwXG4gICAgICAgIH0sXG4gICAgICAgIHNvcnQ6IHtcbiAgICAgICAgICBmaWVsZDogdGhpcy5zb3J0ZGF0YXZhbC5maWVsZCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnNvcnRkYXRhdmFsLnR5cGVcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoY29uZGl0aW9uOiBjb25kaXRpb25vYmosXG4gICAgICB9O1xuXG4gICAgICAvLyBjb25zb2xlLmxvZygnZGF0ZSBzZWFyY2ggY29uLi4uJywgY29uZGl0aW9ub2JqLCB0aGlzLmVuZF9kYXRlLCB0aGlzLnN0YXJ0X2RhdGUpO1xuICAgICAgLy8gY29uc29sZS53YXJuKCdjb25kJyxjb25kaXRpb24sdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbixjb25kaXRpb25vYmosdGhpcy50c2VhcmNoLHRleHRTZWFyY2gpO1xuICAgICAgcmV0dXJuO1xuICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAwO1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKGxpbmssIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGlmIChyZXN1bHQucmVzdWx0cy5yZXMgIT0gbnVsbCAmJiByZXN1bHQucmVzdWx0cy5yZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlc3VsdHMucmVzKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05ldyBTZWFyY2ggb2YgZGF0YSBsb2FkZWQnIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcblxuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTm8gc3VjaCBzZWFyY2ggcmVjb3JkIGZvdW5kICEhJyB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rMSwgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgPSAocmVzdWx0LmNvdW50KTtcbiAgICAgICAgaWYgKHJlc3VsdC5jb3VudCA9PSAwKSB7IHRoaXMudGFibGVmbGFnID0gMTsgfSBlbHNlIHsgdGhpcy50YWJsZWZsYWcgPSAwOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIH0pO1xuXG4gICAgICAvKnRoaXMuX2h0dHAucG9zdChsaW5rLCB7c291cmNlOnRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICAnY3JlYXRlZF9hdCc6IHtcbiAgICAgICAgICAgICRsdGU6IG5ldyBEYXRlKHRoaXMuZW5kX2RhdGUpLmdldFRpbWUoKSxcbiAgICAgICAgICAgICRndGU6IG5ldyBEYXRlKHRoaXMuc3RhcnRfZGF0ZSkuZ2V0VGltZSgpLFxuICAgICAgICAgIH1cbiAgICAgICAgfSx0b2tlbjogdGhpcy5qd3R0b2tlbnZhbCxcbiAgICAgIH0pLnN1YnNjcmliZSggcmVzID0+e1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPXt9O1xuICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKFwib2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdC5yZXMpO1xuICAgICAgICBsZXQgbmV3ZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0LnJlcyk7XG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KSovXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdlcnJvcicpO1xuICAgIH1cbiAgfVxuXG5cblxuICBzZWxlY3RTZWFyY2godmFsdWU6IGFueSwgdHlwZTogYW55LCBzdGF0dXN2YWw6IGFueSkge1xuXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICd2YWx1ZScsIHR5cGUsICd0eXBlJywgc3RhdHVzdmFsLCAnc3RhdHVzdmFsJylcblxuICAgIC8vIGxldCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgLy8gbGV0IHNvdXJjZTogYW55O1xuICAgIC8vIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt0eXBlLmZpZWxkXSA9ICh7IHZhbDogc3RhdHVzdmFsLm5hbWUsIGxhYmVsOiB0eXBlLmxhYmVsLCBrZXk6IHR5cGUuZmllbGQgfSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnNlYXJjaHN0cnNhcnJbdHlwZS5maWVsZF1cIiwgdGhpcy5zZWFyY2hzdHJzYXJyW3R5cGUuZmllbGRdKTtcblxuICAgIGxldCB2YWwgPSAnJztcbiAgICBpZiAodGhpcy50c2VhcmNoICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsKSB7XG4gICAgICB2YWwgPSB0aGlzLnRzZWFyY2hbdmFsdWVdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy50c2VhcmNoW3ZhbHVlXSAhPSBudWxsICYmIHRoaXMudHNlYXJjaFt2YWx1ZV0ubGVuZ3RoID4gMSAmJiB7ICRvcjogW3RoaXMudHNlYXJjaFt2YWx1ZV0udG9Mb3dlckNhc2UoKSwgdGhpcy50c2VhcmNoW3ZhbHVlXS50b1VwcGVyQ2FzZSgpXSB9KSBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7XG4gICAgLy8gdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIC8vIHRoaXMudGV4dFNlYXJjaF9jb25kaXRpb24gPSBjb25kaXRpb247XG4gICAgLy8gLy9jb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICAvLyBsZXQgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICAvLyBzb3VyY2UgPSB7XG4gICAgLy8gICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgIC8vICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICAvLyB9O1xuXG5cblxuXG5cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHNlYXJjaCwgJ2N6eGN4Y3p4YycsIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLnNlbGVjdHNlYXJjaCwgdGhpcy5zZWxlY3RzZWFyY2gsIHZhbHVlLCB0eXBlKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICBjb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICAvLyB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb25bdHlwZS5maWVsZF0gPSB2YWx1ZTtcbiAgICAvLyBjb25zb2xlLmxvZygnc2VsZWN0U2VhcmNoICcsIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbik7XG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5hdXRvU2VhcmNoX2NvbmRpdGlvbiwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uKTtcbiAgICBzb3VyY2UgPSB7XG4gICAgICBzb3VyY2U6IHRoaXMuZGF0ZV9zZWFyY2hfc291cmNldmFsLFxuICAgICAgY29uZGl0aW9uOiBjb25kaXRpb25vYmpcbiAgICB9O1xuICAgIC8vIGlmICh2YWx1ZSAhPSBudWxsKSB7XG4gICAgLy8gICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluaywgdGhpcy5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAvLyAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgLy8gICAgIHJlc3VsdCA9IHJlcztcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cbiAgLy8gZm9yIG1hbmFnaW5nIHBhZ2luYXRpb25cblxuICBwYWdpbmcodmFsOiBhbnksIGZsYWc6IGFueSkge1xuICAgIC8vIGNvbnN0IGx2YWw6IGFueSA9IHRoaXMubGltaXRjb25kdmFsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMub2xkbGltaXRyYW5nZSwgJ3RoaXMub2xkbGltaXRyYW5nZScpO1xuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdmFsO1xuICAgIFxuXG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9PSBudWxsKSB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCA9IDEwO1xuICAgIHRoaXMub2xkbGltaXRyYW5nZS5wdXNoKHtcbiAgICAgIHNraXA6IHRoaXMubGltaXRjb25kdmFsLnNraXAsXG4gICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICBwYWdlY291bnQ6IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudFxuICAgIH0pO1xuICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCAhPSBudWxsICYmIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID4gMTAwKSB7XG4gICAgICAvLyBpZihmbGFnIT1cInNlbGVjdHBhZ2luZ1wiKXtcbiAgICAgIC8vICAgdGhpcy5saW1pdGNvbmR2YWwubGltaXQgPSAxMDA7XG5cbiAgICAgIC8vIH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gMTAwO1xuICAgICAgLy8gdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgIC8vICAgZHVyYXRpb246IDIwMDAsXG4gICAgICAvLyAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnWW91IGNhbiBzZWUgbWF4aW11bSAxMDAgcmVjb3JkcyBhdCBvbmNlICEnIH1cbiAgICAgIC8vIH0pO1xuICAgIH1cblxuICAgIGxldCBtYXhwYWdlY291bnQ6IG51bWJlciA9IE51bWJlcih0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvICh0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgIG1heHBhZ2Vjb3VudCA9IH5+KG1heHBhZ2Vjb3VudCk7XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMub2xkbGltaXRyYW5nZScsIHRoaXMub2xkbGltaXRyYW5nZSwgdGhpcy5saW1pdGNvbmR2YWwsIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsLCBtYXhwYWdlY291bnQpO1xuICAgIFxuICAgIC8vIGNvbnNvbGUubG9nKFwibGltaXQrKysrXCIsIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcblxuICAgIGlmICh2YWwgPT0gMSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQpICogdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIDwgdGhpcy5saW1pdGNvbmR2YWwubGltaXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSAtMSAmJiB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID49IHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2tpcCBibG9jaycpO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9ICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSAyKSAqIHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50LS07XG4gICAgfVxuICAgIGlmICh2YWwgPiAxKSB7XG4gICAgICBpZiAodGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IHZhbDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidmFsPjEgc2VjdGlvbiBcIiwgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KTtcbiAgICAgIGlmICh0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB2YWw7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudC0tO1xuICAgIH1cbiAgICBpZiAodmFsIDw9IDEpIHtcbiAgICAgIGlmICh0aGlzLnBhZ2luYXRpb250eXBlID09IDIpIHtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IChtYXhwYWdlY291bnQgKyAxKSkge1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gbWF4cGFnZWNvdW50ICsgMTtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50IC0gMSkgKiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyh2YWwsJ3NzJyx0aGlzLmRhdGFjb2xsZWN0aW9udmFsLHRoaXMubGltaXRjb25kdmFsKTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcblxuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmxpbWl0Y29uZHZhbCwgaW4gcGFnaW5nICcsIHRoaXMubGltaXRjb25kdmFsKTtcblxuXG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgaWYgKHRoaXMudHNlYXJjaFtpXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuXG4gICAgY29uc3QgYXV0b3NlYXJjaDogYW55ID0ge307XG4gICAgLy8gdGhpcy5hdXRvc2VhcmNoO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmF1dG9zZWFyY2gpIHtcbiAgICAgIGZvciAoY29uc3QgbSBpbiB0aGlzLmF1dG9zZWFyY2hbYl0pIHtcbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYXV0b3NlYXJjaC4kb3IgPT0gbnVsbCkgeyBhdXRvc2VhcmNoLiRvciA9IFtdOyB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9zZWFyY2guJGFuZCwnYXV0b3NlYXJjaC4kb3IgMicpXG5cbiAgICAgICAgYXV0b3NlYXJjaC4kb3IucHVzaCh0dik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgY29uc3Qgc291cmNlID0ge1xuICAgICAgY29uZGl0aW9uOiB7XG4gICAgICAgIGxpbWl0OiB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDogdGhpcy5saW1pdGNvbmR2YWwuc2tpcFxuICAgICAgfSxcbiAgICAgIHNvcnQ6IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfSxcbiAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgIH07XG4gICAgdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGEgPSBzb3VyY2U7XG4gICAgY29uc3QgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsO1xuICAgIC8qbGV0IGRhdGE6YW55PXtcbiAgICAgIFwiY29uZGl0aW9uXCI6e1xuICAgICAgICBsaW1pdDp0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCxcbiAgICAgICAgc2tpcDp0aGlzLmxpbWl0Y29uZHZhbC5za2lwXG4gICAgICB9XG5cbiAgICB9Ki9cbiAgICB0aGlzLm5ld3BhZ2luZ2NvdW50RmxhZyA9IGZhbHNlO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA+IDUgJiYgdGhpcy5wYWdpbmF0aW9udHlwZSA9PSAyKSB7XG4gICAgICAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCAtIDU7XG4gICAgICB9XG4gICAgICAvLyBpZiAodGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID4gNSAmJiB0aGlzLnBhZ2luYXRpb250eXBlID09IDIgJiYgdGhpcy5wYWdlQ291bnRBcnJheS5sZW5ndGggLSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPCAxMCkge1xuICAgICAgLy8gICB0aGlzLm5ld2N1cnJlbnRwYWdpbmdWYWwgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgLSA0IDtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2luIGxhc3QgcmFuZ2UgYXJlYSAuLi4nLCB0aGlzLm5ld2N1cnJlbnRwYWdpbmdWYWwpO1xuICAgICAgLy8gfVxuICAgICAgaWYgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA8PSA1ICYmIHRoaXMucGFnaW5hdGlvbnR5cGUgPT0gMikge1xuICAgICAgICB0aGlzLm5ld2N1cnJlbnRwYWdpbmdWYWwgPSAxO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2coXCJwYWdpbmcgc3VjY2Vzc1wiLCB0aGlzLnBhZ2VDb3VudEFycmF5Lmxlbmd0aCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBhZ2luZyBzdWNjZXNzXCIsIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZygnaW4gY29tbW9uICByYW5nZSBhcmVhIC4uLicsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG5cblxuICAgICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdCwncmVzJyk7XG4gICAgICB0aGlzLm5ld3BhZ2luZ2NvdW50RmxhZyA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLnJlc3VsdC5yZXN1bHRzLnJlcyAhPSBudWxsICYmIHRoaXMucmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ3BhZ2luZycsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCwgcmVzdWx0czogdGhpcy5yZXN1bHQucmVzdWx0cy5yZXMgfSk7XG5cbiAgICAgICAgLy8gaWYgKHRoaXMubGliZGF0YXZhbC5mb290ZXJzZXR0aW5ncyAhPSBudWxsKSB7cGFnZUNoYW5nZVZhbHVlXG4gICAgICAgIC8vICAgdGhpcy50YWJsZUZvb3RlckNvbHVtbnMgPSB0aGlzLmxpYmRhdGF2YWwuZm9vdGVyc2V0dGluZ3MubWFwKHggPT4geC5rZXkpXG4gICAgICAgIC8vIH1cblxuICAgICAgICBpZiAodGhpcy5wYWdlQ2hhbmdlVmFsdWUgIT0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50KSB7XG4gICAgICAgICAgdGhpcy5wYWdlQ2hhbmdlVmFsdWUgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ7XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmxpYmRhdGF2YWwuY29udGFpbmVyaWRcIix0aGlzLmxpYmRhdGF2YWwuY29udGFpbmVyaWQpO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5saWJkYXRhdmFsLmNvbnRhaW5lcmlkIT0ndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5saWJkYXRhdmFsLmNvbnRhaW5lcmlkKS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiBcInNtb290aFwiIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5yZXN1bHQucmVzdWx0cy5yZXMpO1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnTmV3IHJhbmdlIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5za2lwID0gdGhpcy5saW1pdGNvbmR2YWwuc2tpcDtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLmxpbWl0ID0gdGhpcy5saW1pdGNvbmR2YWwubGltaXQ7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZS5wYWdlY291bnQgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLm9sZGxpbWl0cmFuZ2UgYWZ0ZXIgJywgdGhpcy5vbGRsaW1pdHJhbmdlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdvIGxlbicsIHRoaXMub2xkbGltaXRyYW5nZS5sZW5ndGgsIHRoaXMub2xkbGltaXRyYW5nZSx0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aC0xXSk7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aC0xXS5za2lwO1xuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB0aGlzLm9sZGxpbWl0cmFuZ2VbdGhpcy5vbGRsaW1pdHJhbmdlLmxlbmd0aC0xXS5wYWdlY291bnQ7XG4gICAgICAgIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gdGhpcy5vbGRsaW1pdHJhbmdlW3RoaXMub2xkbGltaXRyYW5nZS5sZW5ndGgtMV0ubGltaXQ7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZSA9IHRoaXMub2xkbGltaXRyYW5nZS5yZXZlcnNlKCk7XG4gICAgICAgIC8vIHRoaXMub2xkbGltaXRyYW5nZSA9IHRoaXMub2xkbGltaXRyYW5nZS5zbGljZSgwLCB0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMik7IFxuICAgICAgICAvLyB0aGlzLm9sZGxpbWl0cmFuZ2Uuc3BsaWNlKHRoaXMub2xkbGltaXRyYW5nZS5sZW5ndGggLSAxLCAxKTtcbiAgICAgICAgLy8gdGhpcy5vbGRsaW1pdHJhbmdlLnNwbGljZSgwLCAxKTtcbiAgICAgICAgLy8gdGhpcy5yZWZyZXNoZGF0YSgpO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbCA9IHRoaXMub2xkbGltaXRyYW5nZVt0aGlzLm9sZGxpbWl0cmFuZ2UubGVuZ3RoIC0gMV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGltaXRjb25kdmFsLCB0aGlzLm9sZGxpbWl0cmFuZ2UsICdsYXZsIG4gb2xkICcpO1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gdGhpcy5vbGRsaW1pdHJhbmdlLnNraXA7XG4gICAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLmxpbWl0ID0gdGhpcy5vbGRsaW1pdHJhbmdlLmxpbWl0O1xuICAgICAgICAvLyB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSB0aGlzLm9sZGxpbWl0cmFuZ2UucGFnZWNvdW50O1xuICAgICAgICAvLyBpZiAodmFsID09IDEpIHtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQtLTtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwIC09IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB9XG4gICAgICAgIC8vIGlmICh2YWwgPT0gLTEpIHtcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQrKztcbiAgICAgICAgLy8gICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwICs9IHRoaXMubGltaXRjb25kdmFsLmxpbWl0O1xuICAgICAgICAvLyB9XG4gICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdObyBEYXRhIEZvdW5kIGluIHRoaXMgcmFuZ2UgISEnIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuXG4gICAgfSk7XG4gICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcbiAgfVxuXG4gIGFkZGF1dG9zZWFyY2hkYXRhKHZhbDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ3YnLHZhbCk7XG5cbiAgfVxuICByZW1vdmUodmFsOiBhbnksIGk6IGFueSwgZmllbGQ6IGFueSkge1xuXG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFtmaWVsZF0gIT0gbnVsbCkgeyB0aGlzLmF1dG9zZWFyY2hbZmllbGRdLnNwbGljZShpLCAxKTsgfVxuICB9XG5cblxuICBhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZChpdGVtKSB7XG4gICAgdGhpcy5jdXJyZW50YXV0b2NvbXBsZXRlaXRlbSA9IGl0ZW07XG4gICAgdGhpcy5jdXJyZW50YXV0b3NlYXJjaGFyciA9IFtdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhdXRvY29tcGxldGVjaGFuZ2VkZXRlY3RlZCcsIHRoaXMuY3VycmVudGF1dG9jb21wbGV0ZWl0ZW0pO1xuICAgIGlmICh0aGlzLmN1cnJlbnRhdXRvY29tcGxldGVpdGVtLnNlcnZlcnNlYXJjaGRhdGEgPT0gbnVsbClcbiAgICAgIHRoaXMubW9kZWxDaGFuZ2VkLm5leHQoKTtcbiAgICBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdpbiBlbHNlIGJsb2NrIG9mIGF1dG9jb21wbGV0ZWNoYW5nZWRldGVjdGVkJyk7XG4gICAgICB0aGlzLm1vZGVsQ2hhbmdlZHNlcnZlci5uZXh0KCk7XG4gICAgfVxuXG4gIH1cblxuXG4gIGZpbHRlcmF1dG92YWwoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZpbHRlcmF1dG92YWwnLCBkYXRhLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSk7XG4gICAgY29uc3QgYXV0b3NlbHZhbCA9IHRoaXMuYXV0b3NlYXJjaGlucHV0W2RhdGEuZmllbGRdO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICBpZiAodGhpcy5hdXRvc2VhcmNoaW5wdXRbZGF0YS5maWVsZF0gIT0gbnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hpbnB1dFtkYXRhLmZpZWxkXSAhPSAnJykge1xuICAgICAgY29uc3QgZmlsdGVydmFsID0gZGF0YS52YWx1ZXMuZmlsdGVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdlJywgZSwgZmllbGR2YWwpXG4gICAgICAgIHJldHVybiBlLm5hbWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGF1dG9zZWx2YWwudG9Mb3dlckNhc2UoKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBmaWx0ZXJ2YWw7XG4gICAgfVxuICB9XG4gIHJlc2V0YXV0b2NvbXAodmFsOiBhbnkpIHtcbiAgICBjb25zdCBlbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dG9jb21wbGV0ZXNlYXJjaCcgKyB2YWwuZmllbGQpO1xuICAgIGVsLnZhbHVlID0gJyc7XG4gIH1cbiAgYXV0b3NlYXJjaGZ1bmN0aW9uKHZhbHVlOiBhbnksIGRhdGE6IGFueSwgaXRlbTogYW55KSB7XG4gICAgLy8gdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdID0gJyc7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5hdXRvc2VhcmNoaW5wdXQsICdhc2knLCBkYXRhLCB2YWx1ZSwgaXRlbSk7XG4gICAgdGhpcy5zZWFyY2hzdHJzYXJyLnB1c2goeyB2YWw6IHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgaWYgKHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0gPT0gbnVsbCkge1xuICAgICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXSA9IFtdO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXV0b3NlYXJjaCwgJ2F1dG9zZWFyY2ggMTEzMCcpXG4gICAgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXS5wdXNoKGRhdGEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlLCAnc2VsZWN0ZWQgYXV0bycsIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSwgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0gPSBudWxsO1xuICAgIHRoaXMuY3VycmVudGF1dG9zZWFyY2hhcnIgPSBbXTtcbiAgICBjb25zdCBlbDogYW55ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2F1dG9jb21wbGV0ZXNlYXJjaCcgKyB2YWx1ZSk7XG4gICAgZWwudmFsdWUgPSAnJztcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSwgJ3NlbGVjdGVkIGF1dG8nLCB0aGlzLmF1dG9zZWFyY2hpbnB1dFt2YWx1ZV0sIHRoaXMuYXV0b3NlYXJjaGlucHV0W3ZhbHVlXSk7XG4gICAgLy8gcmVzZXQgYXV0byBzZWFyY2ggZGF0YSAhXG4gICAgLy8gY29uc29sZS5sb2codmFsdWUsICdzZWxlY3RlZCBhdXRvJywgdGhpcy5hdXRvc2VhcmNoaW5wdXRbdmFsdWVdKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWx1ZSxkYXRhLCdzcycsdGhpcy5hdXRvc2VhcmNoKTtcbiAgICAvKmxldCB2YWw6IGFueSA9IHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV07XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueSA9IHt9O1xuICAgIGlmICh0aGlzLmF1dG9zZWFyY2hbdmFsdWVdICE9bnVsbCAmJiB0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLmxlbmd0aCA+IDAgJiYgeyAkb3I6IFt0aGlzLmF1dG9zZWFyY2hbdmFsdWVdLnRvTG93ZXJDYXNlKCksIHRoaXMuYXV0b3NlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKSwgdGhpcy5hdXRvc2VhcmNoW3ZhbHVlXV0gfSkgY29uZGl0aW9uW3ZhbHVlICsgJ19yZWdleCddID0gdmFsO1xuICAgIHRoaXMuYXV0b1NlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uID0gY29uZGl0aW9uO1xuICAgIGxldCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07Ki9cbiAgICAvLyBsZXQgbGluayA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGVfc2VhcmNoX2VuZHBvaW50dmFsO1xuICAgIC8vIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgdGhpcy5yZXN1bHQgPSByZXM7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMucmVzdWx0LnJlcyk7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIC8vIH0pO1xuICB9XG5cblxuICB0ZXh0c2VhcmNoZnVuY3Rpb24odmFsdWU6IGFueSwgaXRlbTogYW55KSB7XG4gICAgaWYgKHRoaXMudHNlYXJjaFt2YWx1ZV0gPT0gJycpIHtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5zZWFyY2hzdHJzYXJyLmluZGV4T2YodGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhpbmRleCwgJ2luZGV4Jyk7XG4gICAgICBkZWxldGUgdGhpcy5zZWFyY2hzdHJzYXJyW3ZhbHVlXTtcbiAgICAgIC8vIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIuc3BsaWNlKHZhbHVlLCAxKTtcbiAgICAgIC8vIH1cbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuc2VhcmNoc3Ryc2Fyclt2YWx1ZV0gPSAoeyB2YWw6IHRoaXMudHNlYXJjaFt2YWx1ZV0sIGxhYmVsOiBpdGVtLmxhYmVsLCBrZXk6IHZhbHVlIH0pO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0ZXh0c2VhcmNoZnVuY3Rpb24nLCB2YWx1ZSwgaXRlbSwgdGhpcy5zZWFyY2hzdHJzYXJyKTtcbiAgICBjb25zdCBsaW5rID0gdGhpcy5hcGl1cmx2YWwgKyAnJyArIHRoaXMuZGF0ZV9zZWFyY2hfZW5kcG9pbnR2YWw7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGNvbnN0IGNvbmRpdGlvbjogYW55ID0ge307XG4gICAgbGV0IHZhbCA9ICcnO1xuICAgIGlmICh0aGlzLnRzZWFyY2ggIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwpIHtcbiAgICAgIHZhbCA9IHRoaXMudHNlYXJjaFt2YWx1ZV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnRzZWFyY2hbdmFsdWVdICE9IG51bGwgJiYgdGhpcy50c2VhcmNoW3ZhbHVlXS5sZW5ndGggPiAxICYmIHsgJG9yOiBbdGhpcy50c2VhcmNoW3ZhbHVlXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCksIHRoaXMudHNlYXJjaFt2YWx1ZV0udG9VcHBlckNhc2UoKV0gfSkgeyBjb25kaXRpb25bdmFsdWUgKyAnX3JlZ2V4J10gPSB2YWw7IH1cbiAgICB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uID0ge307XG4gICAgdGhpcy50ZXh0U2VhcmNoX2NvbmRpdGlvbiA9IGNvbmRpdGlvbjtcbiAgICAvLyBjb25zb2xlLndhcm4odGhpcy50c2VhcmNoKTtcbiAgICBjb25zdCBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRleHRTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCB0aGlzLmF1dG9TZWFyY2hfY29uZGl0aW9uLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIHNvdXJjZSA9IHtcbiAgICAgIHNvdXJjZTogdGhpcy5kYXRlX3NlYXJjaF9zb3VyY2V2YWwsXG4gICAgICBjb25kaXRpb246IGNvbmRpdGlvbm9ialxuICAgIH07XG4gICAgLy8gYWRkIGxvYWRlclxuICAgIC8vIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgLy8gaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyAgIHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgIC8vICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAvLyAgICAgcmVzdWx0ID0gcmVzO1xuICAgIC8vICAgICAvL2Nsb3NlIGxvYWRlclxuICAgIC8vICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAvLyAgICAgbGV0IG5ld2RhdGEgPSByZXN1bHQucmVzO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXMpO1xuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgIC8vICAgfSk7XG4gICAgLy8gfSBlbHNlIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdvb3BzJyk7XG4gICAgLy8gfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XG4gIH1cblxuICByZWZyZXNoZGF0YSgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnKysrKycpXG4gICAgdGhpcy5hdXRvc2VhcmNoID0gW107XG4gICAgdGhpcy50c2VhcmNoID0gW107XG4gICAgdGhpcy5zZWxlY3RzZWFyY2ggPSBbXTtcbiAgICB0aGlzLnN0YXJ0X2RhdGUgPSBudWxsO1xuICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgIHRoaXMuZW5kX2RhdGUgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiA9IHt9O1xuICAgIHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24gPSB7fTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XG4gICAgdGhpcy5hbGxTZWFyY2hDb25kID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gW107XG4gIH1cbiAgcmVmcmVzaGFsbGRhdGEodmFsOiBhbnkpIHtcbiAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHRoaXMub2xkZGF0YSk7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgIGlmICh2YWwuZmlsdGVyZWREYXRhICE9IG51bGwgJiYgdmFsLmZpbHRlcmVkRGF0YS5sZW5ndGggPCB0aGlzLm9sZGRhdGEubGVuZ3RoKSB7XG4gICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAncmVmcmVzaGRhdGEnXSxcbiAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVmcmVzaCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgIC8vIHBhbmVsQ2xhc3M6ICdjdXN0b20tbW9kYWxib3gnLFxuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdyZWZyZXNoZGF0YSddLFxuICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICcgVXBkYXRlZCEhJywgaXNjb25maXJtYXRpb246IGZhbHNlIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICB9XG5cblxuXG4gIHByaXZhdGUgX2ZpbHRlcih2YWx1ZTogc3RyaW5nKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdmFsdWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoTGlzdHZhbC5maWx0ZXIob3B0aW9uID0+IG9wdGlvbi50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcbiAgfVxuXG4gIGdldHN0YXR1cyh2YWw6IGFueSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCd2YWwnKTtcbiAgICAvLyBjb25zb2xlLmxvZyh2YWwpO1xuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLnN0YXR1c2FycnZhbCkge1xuICAgICAgaWYgKHRoaXMuc3RhdHVzYXJydmFsW2JdLnZhbCA9PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhdHVzYXJydmFsW2JdLm5hbWU7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0YXR1c2FycnZhbFtiXS5uYW1lKTtcbiAgICB9XG4gICAgcmV0dXJuICdOL0EnO1xuICB9XG4gIHBkZkZsYWcodmFsOiBhbnkpIHtcbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3NoYXR0ZXIgYmxvaycpO1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAodmFsLnNoYXR0ZXJibG9rX2FncmVlbWVudF9kYXRlICE9IG51bGwgJiYgdmFsLmF1ZGlvZGVhZGxpbmVfYWdyZWVtZW50X2RhdGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaCA9IHRydWU7XG4gICAgICB0aGlzLmF1ZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICh2YWwuc2hhdHRlcmJsb2tfYWdyZWVtZW50X2RhdGUgPT0gbnVsbCAmJiB2YWwuYXVkaW9kZWFkbGluZV9hZ3JlZW1lbnRfZGF0ZSA9PSBudWxsKSB7XG4gICAgICB0aGlzLnNoID0gZmFsc2U7XG4gICAgICB0aGlzLmF1ZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBncmFwdXJsKHZhbDogYW55KSB7XG4gICAgLy8gIGZvciBhbGwgcm93IGNoZWNraW5nXG4gICAgLy8gY29uc29sZS5sb2codmFsKVxuICAgIGlmICh2YWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hcnQgPSB0cnVlO1xuICAgICAgdGhpcy5hdWQyID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFydCA9IGZhbHNlO1xuICAgICAgdGhpcy5hdWQyID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2gpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXVkKTtcbiAgfVxuXG4gIGNvcHlUZXh0KHJvdzogYW55LCB2YWw6IHN0cmluZykge1xuXG4gICAgY29uc3QgZnVsbHVybCA9IHZhbCArICcnICsgcm93O1xuICAgIGNvbnN0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcbiAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIHNlbEJveC52YWx1ZSA9IGZ1bGx1cmw7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgIHNlbEJveC5mb2N1cygpO1xuICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcblxuICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnQ29waWVkIFN1Y2Nlc3NmdWxseSAhISAnIH1cbiAgICB9KTtcbiAgfVxuXG4gIG9wZW5pbnRlcm5hbGxpbmsodmFsOiBhbnkpIHtcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdmFsLnJvdXRlXSk7XG4gIH1cblxuXG4gIG9wZW5pbnRlcm5hbGxpbmt3aXRocGFyYW0odmFsOiBhbnksIGRhdGE6IGFueSkge1xuICAgIGNvbnN0IHJkYXRhOiBhbnkgPSBbXTtcbiAgICByZGF0YS5wdXNoKHZhbC5yb3V0ZSk7XG4gICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgcmRhdGEucHVzaChkYXRhW3ZhbC5wYXJhbVt2XV0pO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygncmFkYXQnLCByZGF0YSk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUocmRhdGEpO1xuICB9XG5cbiAgb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmxvY2FsZGF0YSh2YWw6IGFueSwgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29wZW5jdXN0b21idXR0b25hY3Rpb25sb2NhbGRhdGEnLHZhbCxkYXRhKTtcbiAgICBjb25zdCBkYXRhYXJyID0gW107XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgLy8gZGF0YWFyci5wdXNoKFsnZGVzYycsJ3Rlc3QnXSk7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHYgaW4gdmFsLmRhdGFmaWVsZHMpIHtcbiAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgIHRlbXBhcnIucHVzaCh2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICBpZiAodmFsLmRhdGFmaWVsZHNbdl0gIT0gJ2ltYWdlJyAmJiB2YWwuZGF0YWZpZWxkc1t2XSAhPSAndmlkZW8nKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzcycsdmFsLmRhdGFmaWVsZHNbdl0pO1xuICAgICAgICBpZiAoZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gIT0gbnVsbCAmJiB0eXBlb2YgKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkZicsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkpO1xuICAgICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dLnRvU3RyaW5nKCkuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW4gc2FmZScsIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wYXJyLnB1c2goKGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdzczIyJyx2YWwuZGF0YWZpZWxkc1t2XSk7XG4gICAgICAgICAgLy8gZWxzZVxuICAgICAgICAgIHRlbXBhcnIucHVzaChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAnaW1hZ2UnKSB7IHRlbXBhcnIucHVzaCgnPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9JyArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgJyA+IDxici8+Jyk7IH1cbiAgICAgIGlmICh2YWwuZGF0YWZpZWxkc1t2XSA9PSAndmlkZW8nKSB7XG4gICAgICAgIGlmIChkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSAhPSBudWxsICYmIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICE9ICcnKSB7XG4gICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyBkYXRhW3ZhbC5kYXRhZmllbGRzW3ZdXSArICcgZnJhbWVib3JkZXI9MCBhbGxvdz1hY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+IDxici8+Jyk7XG4gICAgICAgICAgdGVtcGh0bWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0ZW1waHRtbCk7XG4gICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygndGh0bWwnLCB0ZW1waHRtbCwgZGF0YVt2YWwuZGF0YWZpZWxkc10sIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2goJ04vQScpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGlmKHZhbC5kYXRhZmllbGRzW3ZdPT0ndmlkZW8nKSB0ZW1wYXJyLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIiArIGRhdGFbdmFsLmRhdGFmaWVsZHNbdl1dICsgXCIgPiA8YnIvPlwiKVxuICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZygnbG9jYWwgZGF0YSBtJywgZGF0YWFycik7XG4gICAgbGV0IHJlczogYW55ID0gZGF0YWFycjtcblxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSAhPSBudWxsICYmIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiIGluIHJlcykge1xuICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaHd3JyxjLHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSxyZXNbYl0scmVzW2JdWzBdLHJlc1tiXVsxXSk7XG4gICAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLmtleSA9PSByZXNbYl1bMF0pIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdoJywgYywgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10pO1xuICAgICAgICAgICAgcmVzZGF0YVtiXSA9IFt0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS52YWwsIHJlc1tiXVsxXSwgcmVzW2JdWzBdXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc2RhdGFbYl0gPT0gbnVsbCkgeyByZXNkYXRhW2JdID0gcmVzW2JdOyB9XG5cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YWFycicsZGF0YWFycik7XG4gICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgIH1cbiAgICByZXMubWVzc2FnZSA9IHZhbC5oZWFkZXJtZXNzYWdlO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveC1hcGlkYXRhJywgJ21vZGFsLWxvY2FsZGF0YSddLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IHJlcyB9XG4gICAgfSk7XG4gIH1cblxuXG4gIG9wZW5jdXN0b21idXR0b25hY3Rpb25hcGlkYXRhKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnb3BlbmN1c3RvbWJ1dHRvbmFjdGlvbmFwaWRhdGEnLHZhbCxkYXRhKTtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIGNvbnN0IGxpbms6IGFueSA9IHRoaXMuYXBpdXJsdmFsICsgdmFsLmVuZHBvaW50O1xuICAgIGNvbnN0IHNvdXJjZTogYW55ID0ge307XG4gICAgc291cmNlW3ZhbC5wYXJhbV0gPSBkYXRhLl9pZDtcbiAgICBpZiAodmFsLm90aGVycGFyYW0gIT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCBuIGluIHZhbC5vdGhlcnBhcmFtKSB7XG4gICAgICAgIHNvdXJjZVt2YWwub3RoZXJwYXJhbVtuXV0gPSBkYXRhW3ZhbC5vdGhlcnBhcmFtW25dXTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5sb2FkZXJyb3cgPSBkYXRhLl9pZDtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcblxuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiByZXN1bHQubXNnIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlcycscmVzdWx0KTtcbiAgICAgICAgbGV0IHJlc2RhdGE6IGFueSA9IHt9O1xuICAgICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAocmVzdWx0LnJlc1swXSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXNbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzZGF0YSA9IHJlc3VsdC5yZXM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGVtcHJkYXRhOiBhbnkgPSB7fTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jlc2RhdGE+Pj4nLCByZXNkYXRhKTtcbiAgICAgICAgaWYgKHZhbC5kYXRhZmllbGRzICE9IG51bGwpIHtcbiAgICAgICAgICBmb3IgKGNvbnN0IGIxIGluIHZhbC5kYXRhZmllbGRzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndmFsLmRhdGFmaWVsZHMnLCB2YWwuZGF0YWZpZWxkc1tiMV0pO1xuICAgICAgICAgICAgLy8gZm9yIChsZXQgYjIgaW4gZGF0YWFycikge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2IyJyxiMixkYXRhW2IyXSxkYXRhYXJyW2IyXVswXSk7XG4gICAgICAgICAgICAvLyBpZiAoZGF0YWFycltiMl1bMF0gPT0gdmFsLmRhdGFmaWVsZHNbYjFdKSByZXNkYXRhZm9ybW9kYWxbYjFdID0gW2RhdGFhcnJbYjJdWzBdLCBkYXRhYXJyW2IyXVsxXV07XG4gICAgICAgICAgICB0ZW1wcmRhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXSA9IHJlc2RhdGFbdmFsLmRhdGFmaWVsZHNbYjFdXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHJlc2RhdGEgPSB0ZW1wcmRhdGE7XG5cblxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGRhdGFhcnIgPSBbXTtcbiAgICAgICAgLy8gZGF0YWFyci5wdXNoKFsnbmFtZScsJ2RlYmFzaXMnXSk7XG4gICAgICAgIC8vIGRhdGFhcnIucHVzaChbJ2Rlc2MnLCd0ZXN0J10pO1xuICAgICAgICBmb3IgKGNvbnN0IHYgaW4gcmVzZGF0YSkge1xuICAgICAgICAgIGNvbnN0IHRlbXBhcnIgPSBbXTtcbiAgICAgICAgICB0ZW1wYXJyLnB1c2godik7XG4gICAgICAgICAgaWYgKHYgIT0gJ2ltYWdlJyAmJiB2ICE9ICd2aWRlbycpIHtcbiAgICAgICAgICAgIGlmIChyZXNkYXRhW3ZdICE9IG51bGwgJiYgdHlwZW9mIChyZXNkYXRhW3ZdKSAhPSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygncmVzdicsIHJlc2RhdGFbdl0pO1xuICAgICAgICAgICAgICBpZiAocmVzZGF0YVt2XS50b1N0cmluZygpLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xuICAgICAgICAgICAgICAgIHRlbXBhcnIucHVzaCh0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChyZXNkYXRhW3ZdKSk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7IHRlbXBhcnIucHVzaChyZXNkYXRhW3ZdKTsgfVxuICAgICAgICAgICAgfSBlbHNlIHsgdGVtcGFyci5wdXNoKHJlc2RhdGFbdl0pOyB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICh2ID09ICdpbWFnZScpIHsgdGVtcGFyci5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgcmVzZGF0YVt2XSArICcgPiA8YnIvPicpOyB9XG4gICAgICAgICAgaWYgKHYgPT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgbGV0IHRlbXBodG1sOiBhbnkgPSAoJzxpZnJhbWUgd2lkdGg9NTYwIGhlaWdodD0zMTUgc3JjPWh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLycgKyByZXNkYXRhW3ZdICsgJyBmcmFtZWJvcmRlcj0wIGFsbG93PWFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4gPGJyLz4nKTtcbiAgICAgICAgICAgIHRlbXBodG1sID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodGVtcGh0bWwpO1xuICAgICAgICAgICAgdGVtcGFyci5wdXNoKHRlbXBodG1sKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gaWYodmFsLmRhdGFmaWVsZHNbdl09PSd2aWRlbycpIHRlbXBhcnIucHVzaChcIjxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPVwiICsgZGF0YVt2YWwuZGF0YWZpZWxkc1t2XV0gKyBcIiA+IDxici8+XCIpXG4gICAgICAgICAgZGF0YWFyci5wdXNoKHRlbXBhcnIpO1xuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHJlc2RhdGE6IGFueSA9IFtdO1xuICAgICAgICAgIGZvciAoY29uc3QgYiBpbiBkYXRhYXJyKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2h3dycsYyx0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXS5rZXkscmVzW2JdLHJlc1tiXVswXSxyZXNbYl1bMV0pO1xuICAgICAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IGRhdGFhcnJbYl1bMF0pIHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaCcsIGMsIHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdKTtcbiAgICAgICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgZGF0YWFycltiXVsxXSwgZGF0YWFycltiXVswXV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXNkYXRhW2JdID09IG51bGwpIHsgcmVzZGF0YVtiXSA9IGRhdGFhcnJbYl07IH1cblxuICAgICAgICAgIH1cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYycscmVzLHJlc2RhdGEpO1xuICAgICAgICAgIGRhdGFhcnIgPSByZXNkYXRhO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2MgYXBpIGRhdGEgJywgcmVzZGF0YSk7XG4gICAgICAgIC8vIGxldCByZXNkYXRhZm9ybW9kYWw6IGFueSA9IHt9O1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdyZXNkYXRhZm9ybW9kYWwnLCBkYXRhYXJyLCBkYXRhYXJyKTtcbiAgICAgICAgaWYgKHZhbC5yZWZyZXNoZGF0YSAhPSBudWxsICYmIHZhbC5yZWZyZXNoZGF0YSA9PSB0cnVlKSB7XG4gICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgfVxuICAgICAgICBkYXRhYXJyWydtZXNzYWdlJ10gPSB2YWwuaGVhZGVybWVzc2FnZTtcbiAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnYXBpLWRhdGEnXSxcbiAgICAgICAgICBkYXRhOiB7IGlzY29uZmlybWF0aW9uOiBmYWxzZSwgZGF0YTogZGF0YWFyciB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgIGR1cmF0aW9uOiA2MDAwLFxuICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdPb29vcHMhJyk7XG4gICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdTb21ldGhpbmcgV2VudCBXcm9uZyAsVHJ5IEFnYWluISEnIH1cbiAgICAgIH0pO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgfSk7XG4gICAgcmV0dXJuO1xuXG4gIH1cblxuXG4gIG9wZW5leHRsaW5rd2l0aHBhcmFtKHZhbDogYW55LCBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygndmFsJyx2YWwsZGF0YSk7XG4gICAgbGV0IHF0ZXh0OiBhbnkgPSAnJztcbiAgICBsZXQgZnVsbGxpbms6IGFueSA9ICcnO1xuICAgIGZ1bGxsaW5rID0gdmFsLmxpbms7XG4gICAgaWYgKHZhbC5wYXJhbXR5cGUgPT0gbnVsbCkge1xuICAgICAgZm9yIChjb25zdCB2IGluIHZhbC5wYXJhbSkge1xuICAgICAgICBxdGV4dCA9IHZhbC5wYXJhbVt2XS5xICsgJz0nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcbiAgICAgICAgaWYgKHBhcnNlSW50KHYpID09IDApIHsgZnVsbGxpbmsgPSBmdWxsbGluayArICc/JyArIHF0ZXh0OyB9XG4gICAgICAgIGlmIChwYXJzZUludCh2KSAhPSAwKSB7IGZ1bGxsaW5rID0gZnVsbGxpbmsgKyAnJicgKyBxdGV4dDsgfVxuICAgICAgfVxuICAgICAgLy8gdmFsLmxpbms9ZnVsbGxpbms7XG4gICAgfVxuICAgIGlmICh2YWwucGFyYW10eXBlICE9IG51bGwgJiYgdmFsLnBhcmFtdHlwZSA9PSAnYW5ndWxhcicpIHtcbiAgICAgIGZvciAoY29uc3QgdiBpbiB2YWwucGFyYW0pIHtcbiAgICAgICAgLy8gcXRleHQgPSB2YWwucGFyYW1bdl0ucSArIFwiPVwiICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdLmtleV0pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncXRleHQnLHF0ZXh0KTtcblxuICAgICAgICBmdWxsbGluayA9IGZ1bGxsaW5rICsgJy8nICsgZW5jb2RlVVJJKGRhdGFbdmFsLnBhcmFtW3ZdXSk7XG4gICAgICB9XG4gICAgICAvLyB2YWwubGluaz1mdWxsbGluaztcblxuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwiSGVsbG8gZnJvbSBzZXRUaW1lb3V0XCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2xpbmsnLGZ1bGxsaW5rLGRhdGEscXRleHQpO1xuICAgIH0sIDEwKTtcblxuICAgIHdpbmRvdy5vcGVuKGZ1bGxsaW5rLCAnX2JsYW5rJyk7XG4gIH1cblxuXG4gIGNsaWNrdXJsKHZhbDogYW55LCB1cmw6IGFueSkge1xuICAgIGNvbnN0IGxpbmsgPSB1cmwgKyAnJyArIHZhbC5faWQgKyAnJyArIHRoaXMucGRmX2xpbmtfdmFsO1xuICAgIHdpbmRvdy5vcGVuKGxpbmssICdfYmxhbmsnKTtcbiAgfVxuXG5cbiAgLyoqIFdoZXRoZXIgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBlbGVtZW50cyBtYXRjaGVzIHRoZSB0b3RhbCBudW1iZXIgb2Ygcm93cy4gKi9cbiAgY2hlY2tlZGxpc3QoKSB7XG4gICAgLy8gdGhpcy5zZWxlY3Rpb24uaXNTZWxlY3RlZChyb3cpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZGF0YTogYW55ID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQubWFwKHggPT4geC5faWQpXG4gICAgICAvLyBjb25zb2xlLmxvZygnY2hlY2tlZGxpc3QnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIHNlbGRhdGEpO1xuICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc2VsZWN0aW9uY2hhbmdlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQgfSk7XG4gICAgfSwgMTAwKTtcblxuXG4gIH1cbiAgaXNBbGxTZWxlY3RlZCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnaXNBbGxTZWxlY3RlZCcpO1xuICAgIGlmICh0aGlzLnNlbGVjdGlvbiAhPSBudWxsICYmIHRoaXMuc2VsZWN0aW9uLnNlbGVjdCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2lzQWxsU2VsZWN0ZWQnLCB0aGlzLmRhdGFTb3VyY2UuZGF0YS5sZW5ndGgsIHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aCwgdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpO1xuICAgICAgY29uc3QgbnVtU2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5sZW5ndGg7XG4gICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEubGVuZ3RoO1xuICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xuICAgIH1cbiAgfVxuXG4gIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXG4gIG1hc3RlclRvZ2dsZSgpIHtcbiAgICB0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/XG4gICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcbiAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2gocm93ID0+IHRoaXMuc2VsZWN0aW9uLnNlbGVjdChyb3cpKTtcbiAgICB0aGlzLmNoZWNrZWRsaXN0KCk7XG4gIH1cblxuICAvKiogVGhlIGxhYmVsIGZvciB0aGUgY2hlY2tib3ggb24gdGhlIHBhc3NlZCByb3cgKi9cbiAgY2hlY2tib3hMYWJlbChyb3c/OiBhbnkpOiBzdHJpbmcge1xuICAgIGlmICghcm93KSB7XG4gICAgICByZXR1cm4gYCR7dGhpcy5pc0FsbFNlbGVjdGVkKCkgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCd9IGFsbGA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0aGlzLnNlbGVjdGlvbi5pc1NlbGVjdGVkKHJvdykgPyAnZGVzZWxlY3QnIDogJ3NlbGVjdCd9IHJvdyAke3Jvdy5wb3NpdGlvbiArIDF9YDtcbiAgfVxuXG5cbiAgY3JlYXRlRGF0YShwb2ludDogYW55KSB7XG4gICAgY29uc3QgZGF0YSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKHBvaW50KS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGRhdGFba2V5LnJlcGxhY2UoL1xccy9nLCAnXycpXSA9IHBvaW50W2tleV07XG4gICAgfSk7XG4gICAgcmV0dXJuIGRhdGE7XG4gIH1cblxuICBhcHBseUZpbHRlcihmaWx0ZXJWYWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xuICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvci5maXJzdFBhZ2UoKTtcbiAgICB9XG4gIH1cbiAgLyphcHBseUZpbHRlcjEoZmlsdGVyVmFsdWU6IHN0cmluZywgdmFsOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJWYWx1ZSk7XG4gICAgY29uc29sZS5sb2codmFsLnZhbHVlKTtcbiAgICBsZXQgdmFsdWU9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodmFsLnZhbHVlKTtcblxuICAgIHZhbHVlLmZpbHRlciA9IGZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcbiAgICAvISogdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IGZ1bmN0aW9uKGRhdGEsIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgICAvLyByZXR1cm4gZGF0YS5uYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyKTtcbiAgICB9O1xuICAgIGlmICh0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yKSB7XG4gICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xuICAgIH0qIS9cbiAgfSovXG5cbiAgc3R5bGVDZWxsKGNvbF9uYW1lLCByb3cpIHtcblxuICAgIC8qXG4gICAgIGlmIChjb2xfbmFtZVsnY29sdW1uRGVmJ109PSdwcm9ncmVzcycgJiYgcm93Wydwcm9ncmVzcyddPT0nMTAwJyl7XG4gICAgIHJldHVybiB7J2NvbG9yJyA6ICdyZWQnfVxuICAgICB9IGVsc2Uge1xuICAgICByZXR1cm4ge31cbiAgICAgfVxuICAgICAqL1xuXG5cbiAgICByZXR1cm4ge307XG4gIH1cbiAgLyoqc2hvdyB2aWRlbyBtb2RhbCBvbiBjbGljayBvZiB0aGFtbmFpbCBmdW5jdGlvbiBieSBzb3VyYXYgKi9cbiAgZmV0Y2h2aWRlbyh2aWRlb2RhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybigndmlkZW9kYXRhJyx2aWRlb2RhdGEpO1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oVmlkZW9QbGF5ZXIsIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94LXZpZGVvcGxheWVyLXByZXZpZXcnLCAndmlkZW8tbW9kYWwnXSxcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgZGF0YTogeyBwcmV2aWV3RGF0YTogdmlkZW9kYXRhIH1cbiAgICB9KTtcbiAgfVxuICBvcGVubm90ZXModmFsOiBhbnkpIHtcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVycm93ID0gdmFsLl9pZDtcbiAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwubm90ZXMubGlzdGVuZHBvaW50LCB0aGlzLmp3dHRva2VudmFsLCB7IGlkOiB2YWwuX2lkIH0pLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICByZXN1bHQgPSByZXM7XG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQucmVzLCAnbGlzdCBub3RlcycpO1xuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICB0aGlzLmxvYWRlcnJvdyA9IG51bGw7XG4gICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcbiAgICAgIC8vIHRoaXMuZGF0YS5ub3Rlc3ZhbCA9ICcnO1xuICAgICAgLy8gY29uc29sZS5sb2coJ25vdGVzJywgdmFsKTtcbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnbm90ZXMtbW9kYWwnXSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGlzY29uZmlybWF0aW9uOiBmYWxzZSxcbiAgICAgICAgICBub3RlczogdHJ1ZSwgYXBpdXJsOiB0aGlzLmFwaXVybHZhbCxcbiAgICAgICAgICBub3RlZGF0YTogdGhpcy5saWJkYXRhdmFsLm5vdGVzLCByb3dkYXRhOiB2YWwsXG4gICAgICAgICAgand0dG9rZW52YWw6IHRoaXMuand0dG9rZW52YWwsXG4gICAgICAgICAgbGlzdGRhdGE6IHJlc3VsdC5yZXMsXG4gICAgICAgICAgX3NuYWNrQmFyOiB0aGlzLl9zbmFja0JhclxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgICB0aGlzLmtlZXBQYWdpbmF0aW9uID0gMTtcbiAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICB2aWV3ZGF0YShkYXRhMTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGExICsrKysrKysrJywgZGF0YTEpXG4gICAgbGV0IGRhdGE6IGFueTtcbiAgICBkYXRhID0gZGF0YTE7XG4gICAgY29uc3QgZGF0YTI6IGFueSA9IFtdO1xuICAgIGxldCBoZWFkZXJEYXRhOiBhbnkgPSB7fTtcblxuICAgIGlmICh0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIgIT0gbnVsbCAmJiB0aGlzLmxpYmRhdGF2YWwucHJldmlld19oZWFkZXIuaGVhZGVyICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyLmhlYWRlciAhPSAnJykge1xuICAgICAgLy8gY29uc29sZS5sb2coJz09ICsrKysrKysrJywgdGhpcy5saWJkYXRhdmFsLnByZXZpZXdfaGVhZGVyKVxuICAgICAgaGVhZGVyRGF0YSA9IHRoaXMubGliZGF0YXZhbC5wcmV2aWV3X2hlYWRlcjtcbiAgICB9XG5cbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhKSB7XG4gICAgICBjb25zdCBmbGFnazogYW55ID0gJyc7XG4gICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSB0cnVlKSB7IGRhdGFba2V5XSA9ICdZZXMnOyB9XG4gICAgICAgICAgaWYgKGRhdGFba2V5XSA9PSBmYWxzZSkgeyBkYXRhW2tleV0gPSAnTm8nOyB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgZGF0YVtrZXkgKyAnOiddID0gJzxpbWcgbWF0LWNhcmQtaW1hZ2Ugc3JjPScgKyBkYXRhW2tleV0gKyAnPjxici8+JztcblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldKSA9PSAnb2JqZWN0Jykge1xuXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmICh0eXBlb2YgKGRhdGFba2V5XSkgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjb25zdCB0ZW1wZGF0YTogYW55ID0gW107XG4gICAgICAgICAgZm9yIChjb25zdCBrIGluIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBwIGluIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmRldGFpbF9kYXRhdHlwZXZhbFtwXS5rZXkgPT0ga2V5ICYmIHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLnZhbHVlID09ICdpbWFnZScpIHtcblxuICAgICAgICAgICAgICAgIC8vIGxldCBpbWd2YWw6YW55PXRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmZpbGV1cmwrZGF0YVtrZXldW2tdO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbWd2YWwnKTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW1ndmFsJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1ndmFsKTs9XCIrXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YVtrZXldW2tdLnJlcGxhY2UoLycvZywgJycpKTtcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz0nICsgZGF0YVtrZXldW2tdICsgJz48YnIvPicpO1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8c3Bhbj5cIitkYXRhW2tleV1ba10rXCI8L3NwYW4+PGJyLz5cIilcblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSA9PSBrZXkgJiYgdGhpcy5kZXRhaWxfZGF0YXR5cGV2YWxbcF0udmFsdWUgIT0gJ2ltYWdlJykge1xuICAgICAgICAgICAgICAgIC8vIHRlbXBkYXRhLnB1c2goXCI8aW1nIG1hdC1jYXJkLWltYWdlIHNyYz1cIitkYXRhW2tleV1ba10rXCI+PGJyLz5cIilcbiAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgZGF0YVtrZXldW2tdICsgJzwvc3Bhbj48YnIvPicpO1xuXG5cblxuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHRoaXMuZGV0YWlsX2RhdGF0eXBldmFsW3BdLmtleSAhPSBrZXkpIHtcbiAgICAgICAgICAgICAgICAvLyB0ZW1wZGF0YS5wdXNoKFwiPGltZyBtYXQtY2FyZC1pbWFnZSBzcmM9XCIrZGF0YVtrZXldW2tdK1wiPjxici8+XCIpXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAoZGF0YVtrZXldW2tdKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBvYmprIGluIGRhdGFba2V5XVtrXSkge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wZGF0YS5wdXNoKCc8c3Bhbj4nICsgb2JqayArICcgOiAnICsgZGF0YVtrZXldW2tdW29iamtdICsgJzwvc3Bhbj48YnIvPicpO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfVxuICAgICAgICAgIGRhdGFba2V5ICsgJzonXSA9IHRlbXBkYXRhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBuIGluIGRhdGEpIHtcbiAgICAgIGlmIChkYXRhW25dICE9IG51bGwgJiYgZGF0YVtuXSAhPSAnJykge1xuICAgICAgICBkYXRhMltuXSA9IGRhdGFbbl07XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCB2IGluIHRoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWwpIHtcbiAgICAgIC8vIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dPScnO1xuICAgICAgZGVsZXRlIGRhdGEyW3RoaXMuZGV0YWlsX3NraXBfYXJyYXl2YWxbdl1dO1xuICAgIH1cbiAgICBsZXQgcmVzID0gT2JqZWN0LmVudHJpZXMoZGF0YTIpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd2aWV3IGRhdGEnLHJlcyk7XG4gICAgaWYgKHRoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlICE9IG51bGwgJiYgdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGUubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcmVzZGF0YTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGIgaW4gcmVzKSB7XG4gICAgICAgIGZvciAoY29uc3QgYyBpbiB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdod3cnLGMsdGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5LHJlc1tiXSxyZXNbYl1bMF0scmVzW2JdWzFdKTtcbiAgICAgICAgICBpZiAodGhpcy5saWJkYXRhdmFsLmRldGFpbHZpZXdfb3ZlcnJpZGVbY10ua2V5ID09IHJlc1tiXVswXSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2gnLCBjLCB0aGlzLmxpYmRhdGF2YWwuZGV0YWlsdmlld19vdmVycmlkZVtjXSk7XG4gICAgICAgICAgICByZXNkYXRhW2JdID0gW3RoaXMubGliZGF0YXZhbC5kZXRhaWx2aWV3X292ZXJyaWRlW2NdLnZhbCwgcmVzW2JdWzFdLCByZXNbYl1bMF1dO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzZGF0YVtiXSA9PSBudWxsKSB7IHJlc2RhdGFbYl0gPSByZXNbYl07IH1cbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKCdjJyxyZXMscmVzZGF0YSk7XG4gICAgICByZXMgPSByZXNkYXRhO1xuICAgICAgLy8gY29uc29sZS5sb2coJ2MnLHJlcyxyZXNkYXRhKTtcbiAgICB9XG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIGF1dG9Gb2N1czogZmFsc2UsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAwdmgnLFxuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGV0YWlsLXZpZXcnXSxcbiAgICAgIGRhdGE6IHsgaXNjb25maXJtYXRpb246IGZhbHNlLCBkYXRhOiByZXMsIGhlYWRlckRhdGE6IGhlYWRlckRhdGEgfVxuICAgIH0pO1xuXG4gIH1cbiAgLy8gcGFyZW50LWJvdHRvbS1jbGFzc1xuICBtYW5hZ2VzdGF0dXMoZGF0YTogYW55KSB7XG4gICAgY29uc3QgYnMgPSB0aGlzLmJvdHRvbVNoZWV0Lm9wZW4oQm90dG9tU2hlZXQsIHsgcGFuZWxDbGFzczogWydjdXN0b20tYm90dG9tc2hlZXQnLCAncGFyZW50LWJvdHRvbS1jbGFzcyddLCBkYXRhOiB7IGl0ZW1zOiB0aGlzLnN0YXR1c2FycnZhbCB9IH0pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSBicy5hZnRlckRpc21pc3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgIGRhdGEuc3RhdHVzID0gcmVzdWx0LnZhbDtcbiAgICAgICAgZGF0YS5pZCA9IGRhdGEuX2lkO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5saWJkYXRhdmFsLnVwZGF0ZWVuZHBvaW50LCBkYXRhLCB0aGlzLmp3dHRva2VudmFsLCB0aGlzLnNvdXJjZWRhdGF2YWwpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICAgIHJlc3VsdCA9IHJlcztcbiAgICAgICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PSAnc3VjY2VzcycpIHtcblxuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIHRoaXMub2xkZGF0YSkge1xuICAgICAgICAgICAgICAvLyB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgICAgaWYgKHRoaXMub2xkZGF0YVtjXS5faWQgPT0gZGF0YS5faWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9sZGRhdGFbY10uc3RhdHVzID0gZGF0YS5zdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdzdGF0dXN1cGRhdGUnLCBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLCBzb3J0ZGF0YTogdGhpcy5zb3J0ZGF0YXZhbCB9KTtcblxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ21hbmFnZS1zdGF0dXMnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnU3RhdHVzIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5ISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgLy8gdGhpcy5hbmltYWwgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgfVxuXG4gIC8vIGZvciB0cmVlIHZpZXcgaW4gbW9kYWxcbiAgY3VzdG9tYnV0dG9ubGlzdG5lcihyb3c6IGFueSwgY3VzdG9tYnV0dG9uOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnY3VzdG9tYnV0dG9ubGlzdG5lcicsIHJvdywgY3VzdG9tYnV0dG9uKTtcbiAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KHtcbiAgICAgIGFjdGlvbjogJ2N1c3RvbWJ1dHRvbmNsaWNrJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsIGN1c3RvbWJ1dHRvbmNsaWNrOiB7XG4gICAgICAgIGRhdGE6IHJvdywgYnRuaW5mbzogY3VzdG9tYnV0dG9uXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuXG4gIGN1c3RvbWJ1dHRvbmZ1bmMoZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTsgICAgLy8gcm93IGRhdGFcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1c3RvbWJ1dHRvbnZhbCk7ICAgIC8vIG9iamVjdCBmcm9tIHdoZXJlIHRoZSBsaWJyYXJ5IGhhcyBiZWVuIHVzZWRcbiAgICBsZXQgdW5zYWZldXJsOiBhbnkgPSB0aGlzLmN1c3RvbWJ1dHRvbnZhbC51cmw7ICAgLy8gaWZyYW1lIHVybFxuICAgIGZvciAoY29uc3QgYiBpbiB0aGlzLmN1c3RvbWJ1dHRvbnZhbC5maWVsZHMpIHtcbiAgICAgIHVuc2FmZXVybCA9IHVuc2FmZXVybCArICcvJyArIGRhdGFbdGhpcy5jdXN0b21idXR0b252YWwuZmllbGRzW2JdXTtcbiAgICB9XG4gICAgdW5zYWZldXJsID0gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7ICAgLy8gZm9yIHNhbml0aXppbmcgdGhlIHVybCBmb3Igc2VjdXJpdHksIG90aGVyd2lzZSBpdCB3b24ndCBiZSBhYmxlIHRvIHNob3cgdGhlIHBhZ2UgaW4gaWZyYW1lLCBoZW5jZSBtb2RhbFxuXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7ICAgICAgIC8vIGZvciBvcGVuaW5nIHRoZSBtb2RhbFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiAnY3VzdG9tLWRhdGEtbW9kYWwnLFxuICAgICAgZGF0YTogeyBpc2NvbmZpcm1hdGlvbjogZmFsc2UsIGRhdGE6IFt7IGRhdGEsIGN1c3RvbWRhdGE6IHVuc2FmZXVybCB9XSB9XG4gICAgfSk7XG5cblxuICB9XG5cblxuXG4gIG1hbmFnZXN0YXR1c211bHRpcGxlKCkge1xuICAgIGNvbnN0IGlkczogYW55ID0gW107XG4gICAgbGV0IGM6IGFueTtcbiAgICBmb3IgKGMgaW4gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpIHtcblxuICAgICAgaWRzLnB1c2godGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbY10uX2lkKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coJ2RhdGEnKTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICBjb25zdCBicyA9IHRoaXMuYm90dG9tU2hlZXQub3BlbihCb3R0b21TaGVldCwgeyBwYW5lbENsYXNzOiBbJ2N1c3RvbS1ib3R0b21zaGVldCcsICdwYXJlbnQtYm90dG9tLWNsYXNzJ10sIGRhdGE6IHsgaXRlbXM6IHRoaXMuc3RhdHVzYXJydmFsIH0gfSk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IGJzLmFmdGVyRGlzbWlzc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG5cbiAgICAgIGlmIChyZXN1bHQgIT0gbnVsbCkge1xuICAgICAgICAvLyBkYXRhLnN0YXR1cyA9IHJlc3VsdC52YWw7XG4gICAgICAgIC8vIGRhdGEuaWQgPSBkYXRhLl9pZDtcbiAgICAgICAgY29uc3QgbmV3c3RhdHVzOiBhbnkgPSByZXN1bHQudmFsO1xuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UudG9nZ2xlc3RhdHVzbWFueSh0aGlzLmFwaXVybHZhbCArIHRoaXMubGliZGF0YXZhbC51cGRhdGVlbmRwb2ludG1hbnksIGlkcywgcmVzdWx0LnZhbCwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGMgaW4gdGhpcy5vbGRkYXRhKSB7XG4gICAgICAgICAgICAgIC8vIHRoaXMub2xkZGF0YSA9IHRoaXMub2xkZGF0YS5maWx0ZXIob2xkZGF0YSA9PiBvbGRkYXRhLl9pZCAhPSBpZHNbY10pO1xuICAgICAgICAgICAgICBpZiAoaWRzLmluZGV4T2YodGhpcy5vbGRkYXRhW2NdLl9pZCkgPiAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMub2xkZGF0YVtjXS5zdGF0dXMgPSBuZXdzdGF0dXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgLy8gdGhpcy5hbGxTZWFyY2goKTtcblxuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ211bHRpcGxlc3RhdHVzdXBkYXRlJywgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCwgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICd0b29nbGUtbWFueSddLFxuICAgICAgICAgICAgICBkYXRhOiB7IG1lc3NhZ2U6ICdTdGF0dXMgdXBkYXRlZCBzdWNjZXNzZnVsbHkhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgIH1cblxuICAgICAgICB9LCBlcnJvciA9PiB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coJ09vb29wcyEnKTtcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ1NvbWV0aGluZyBXZW50IFdyb25nICxUcnkgQWdhaW4hIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIHRoaXMuYW5pbWFsID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIH1cblxuICBkZWxldGVtdWx0aXBsZSgpIHtcbiAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1tdWx0aXBsZSddLFxuICAgICAgZGF0YToge1xuICAgICAgICBtZXNzYWdlOiAnQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGVzZSByZWNvcmRzPyBUaGlzIHByb2Nlc3MgY2FuIG5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgaWRzOiBhbnkgPSBbXTtcbiAgICBsZXQgYzogYW55O1xuICAgIGZvciAoYyBpbiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZCkge1xuXG4gICAgICBpZHMucHVzaCh0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZFtjXS5faWQpO1xuICAgIH1cblxuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuXG4gICAgICBpZiAocmVzdWx0ID09ICd5ZXMnKSB7XG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uc1t0aGlzLnN1YnNjcmlwdGlvbmNvdW50KytdID0gdGhpcy5fYXBpU2VydmljZS5kZXRlTWFueURhdGEodGhpcy5hcGl1cmx2YWwgKyB0aGlzLmxpYmRhdGF2YWwuZGVsZXRlZW5kcG9pbnRtYW55LCBpZHMsIHRoaXMuand0dG9rZW52YWwsIHRoaXMuc291cmNlZGF0YXZhbCkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgICAgbGV0IHJlc3VsdDogYW55ID0ge307XG4gICAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgZm9yIChjb25zdCBjIGluIGlkcykge1xuICAgICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gaWRzW2NdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UodGhpcy5vbGRkYXRhKTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xuICAgICAgICAgICAgdGhpcy5hbGxTZWFyY2goKTtcbiAgICAgICAgICAgIHRoaXMub25MaWJsaXN0aW5nQ2hhbmdlLmVtaXQoeyBhY3Rpb246ICdtdWx0aXBsZWRlbGV0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKENvbmZpcm1kaWFsb2csIHtcbiAgICAgICAgICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLW11bHRpcGxlJ10sXG4gICAgICAgICAgICAgIGRhdGE6IHsgbWVzc2FnZTogJ1JlY29yZChzKSAgZGVsZXRlZCBzdWNjZXNzZnVsbHkgISEnLCBpc2NvbmZpcm1hdGlvbjogZmFsc2UgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcbiAgfVxuXG5cbiAgZGVsZXRlZGF0YShkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAvLyBhbGVydCg1KTtcbiAgICAvLyB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsK3RoaXMuZGVsZXRlZW5kcG9pbnR2YWwsZGF0YSx0aGlzLmp3dHRva2VudmFsKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZGF0YSA4ODkgLS0tJyk7XG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coJ2p3dHRva2VudmFsJyk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5qd3R0b2tlbnZhbCk7XG5cblxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgcGFuZWxDbGFzczogWydjdXN0b20tbW9kYWxib3gnLCAnZGVsZXRlLXNpbmdsZSddLFxuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIG1lc3NhZ2U6ICdBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgcmVjb3JkPyBUaGlzIHByb2Nlc3MgY2FuIG5vdCBiZSB1bmRvbmUuJyxcbiAgICAgICAgdHlwZTogJ2NvbmZpcm0nXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIGlmIChyZXN1bHQgPT0gJ3llcycpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLmRldGVPbmVEYXRhKHRoaXMuYXBpdXJsdmFsICsgdGhpcy5kZWxldGVlbmRwb2ludHZhbCwgZGF0YSwgdGhpcy5qd3R0b2tlbnZhbCwgdGhpcy5zb3VyY2VkYXRhdmFsKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICB0aGlzLm9sZGRhdGEgPSB0aGlzLm9sZGRhdGEuZmlsdGVyKG9sZGRhdGEgPT4gb2xkZGF0YS5faWQgIT0gZGF0YS5faWQpO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLm9sZGRhdGEpO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb24gPSBuZXcgU2VsZWN0aW9uTW9kZWwodHJ1ZSwgW10pO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7IGFjdGlvbjogJ2RlbGV0ZScsIGxpbWl0ZGF0YTogdGhpcy5saW1pdGNvbmR2YWwsIHNvcnRkYXRhOiB0aGlzLnNvcnRkYXRhdmFsIH0pO1xuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihDb25maXJtZGlhbG9nLCB7XG4gICAgICAgICAgICAgIHBhbmVsQ2xhc3M6IFsnY3VzdG9tLW1vZGFsYm94JywgJ2RlbGV0ZS1zaW5nbGUnXSxcbiAgICAgICAgICAgICAgZGF0YTogeyBtZXNzYWdlOiAnUmVjb3JkICBkZWxldGVkIHN1Y2Nlc3NmdWxseSAhIScsIGlzY29uZmlybWF0aW9uOiBmYWxzZSB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICAgIGRhdGE6IHJlc3VsdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZygnT29vb3BzIScpO1xuICAgICAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNjAwMCxcbiAgICAgICAgICAgIGRhdGE6IHsgZXJyb3JtZXNzYWdlOiAnU29tZXRoaW5nIFdlbnQgV3JvbmcgLFRyeSBBZ2FpbiEhJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9XG4gICAgICAvLyB0aGlzLmFuaW1hbCA9IHJlc3VsdDtcbiAgICB9KTtcblxuICB9XG5cbiAgZWRpdGRhdGEoZGF0YTogYW55KSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW3RoaXMuZWRpdHJvdXRldmFsLCBkYXRhLl9pZF0pO1xuICB9XG5cblxuICBzb3J0dGFibGUoZmllbGQ6IGFueSwgdHlwZTogYW55KSB7XG4gICAgY29uc29sZS5sb2coXCJzb3J0dGFibGUgZnVuY3Rpb24gZGF0YVwiLCBmaWVsZCwgdHlwZSlcbiAgICB0aGlzLnNvcnRkYXRhdmFsLmZpZWxkID0gZmllbGQ7XG4gICAgdGhpcy5zb3J0ZGF0YXZhbC50eXBlID0gdHlwZTtcbiAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICB9XG5cblxuXG4gIGFsbFNlYXJjaCgpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImhpdCBsaW1pdGNvbmR2YWxcIix0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJoaXQgbGltaXRjb25kdmFsXCIsdGhpcy5saW1pdGNvbmR2YWwpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd0aGlzLmtlZXBQYWdpbmF0aW9uIGZpcnN0Jyx0aGlzLmtlZXBQYWdpbmF0aW9uKTtcblxuICAgIC8vIHJldHVybjtcblxuICAgIGNvbnN0IGxpbmsgPSB0aGlzLmFwaXVybHZhbCArICcnICsgdGhpcy5kYXRhY29sbGVjdGlvbnZhbDtcbiAgICBjb25zdCBsaW5rMSA9IHRoaXMuYXBpdXJsdmFsICsgJycgKyB0aGlzLmRhdGFjb2xsZWN0aW9udmFsICsgJy1jb3VudCc7XG4gICAgbGV0IHNvdXJjZTogYW55O1xuICAgIGxldCBjb25kaXRpb246IGFueTtcbiAgICBjb25zdCB0ZXh0U2VhcmNoOiBhbnkgPSB7fTtcbiAgICBjb25kaXRpb24gPSB7fTtcbiAgICAvLyB0aGlzLnNlYXJjaHN0cnNhcnIucHVzaCh7IHZhbDogdGhpcy50c2VhcmNoW3ZhbHVlXSwgbGFiZWw6IGl0ZW0ubGFiZWwsIGtleTogdmFsdWUgfSk7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5zZWFyY2hzdHJzYXJyLCAndGhpcy5zZWFyY2hzdHJzYXJyJyk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5zZWFyY2gsICdzZWFyY2hfc2V0dGluZ3N2YWwuc2VhcmNoJyk7XG4gICAgZm9yIChjb25zdCBpIGluIHRoaXMudHNlYXJjaCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ2FsbCBzZWFyY2ggdGhpcy50c2VhcmNoJywgdGhpcy50c2VhcmNoW2ldKTtcbiAgICAgIGlmICh0aGlzLnRzZWFyY2hbaV0gIT0gbnVsbCAmJiB0aGlzLnRzZWFyY2hbaV0udG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpICE9ICcnKSB7XG4gICAgICAgIHRleHRTZWFyY2hbaV0gPSB7ICRyZWdleDogdGhpcy50c2VhcmNoW2ldLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKSB9O1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBhdXRvc2VhcmNoOiBhbnkgPSB7fTtcblxuICAgIC8vIHRoaXMuYXV0b3NlYXJjaDtcbiAgICBmb3IgKGNvbnN0IGIgaW4gdGhpcy5hdXRvc2VhcmNoKSB7XG4gICAgICBsZXQgdGVtcGF1dG9zZWFyY2g6IGFueSA9IHt9O1xuXG4gICAgICBmb3IgKGNvbnN0IG0gaW4gdGhpcy5hdXRvc2VhcmNoW2JdKSB7XG5cbiAgICAgICAgY29uc3QgdHY6IGFueSA9IHt9O1xuICAgICAgICB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAvLyB0dltiXSA9IHRoaXMuYXV0b3NlYXJjaFtiXVttXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGVtcGF1dG9zZWFyY2guJG9yID09IG51bGwpIHsgdGVtcGF1dG9zZWFyY2guJG9yID0gW107IH1cbiAgICAgICAgLy8gY29uc29sZS5sb2coYXV0b3NlYXJjaC4kYW5kLCdhdXRvc2VhcmNoLiRhbmQgMycpXG4gICAgICAgIC8vIGF1dG9zZWFyY2guJG9yLnB1c2godHYpO1xuXG4gICAgICAgIHRlbXBhdXRvc2VhcmNoLiRvci5wdXNoKHR2KTtcblxuICAgICAgfVxuICAgICAgaWYgKGF1dG9zZWFyY2guJGFuZCA9PSBudWxsKSB7IGF1dG9zZWFyY2guJGFuZCA9IFtdOyB9XG4gICAgICBhdXRvc2VhcmNoLiRhbmQucHVzaCh0ZW1wYXV0b3NlYXJjaCk7XG5cbiAgICAgIC8vIGF1dG9zZWFyY2ggPSBPYmplY3QuYXNzaWduKHt9LHRlbXBhdXRvc2VhcmNoLGF1dG9zZWFyY2gpO1xuICAgICAgbGV0IGF1dG9jb3VudDogYW55O1xuICAgICAgaWYgKE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCA9PSBudWxsIHx8IHR5cGVvZiBPYmplY3Qua2V5cyhhdXRvc2VhcmNoKS5sZW5ndGggPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgYXV0b2NvdW50ID0gMDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGF1dG9jb3VudCA9IE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aDtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKGF1dG9jb3VudCwgJ2F1dG9zZWFyY2gubGVuZ3RoKysrKycsIHRlbXBhdXRvc2VhcmNoLE9iamVjdC5rZXlzKGF1dG9zZWFyY2gpLmxlbmd0aCxPYmplY3Qua2V5cyhhdXRvc2VhcmNoKSlcblxuICAgICAgLy8gYXV0b3NlYXJjaFthdXRvY291bnRdID0gdGVtcGF1dG9zZWFyY2g7XG5cbiAgICB9XG5cblxuXG4gICAgLy8gY29uc29sZS5sb2coJ2F1dG9zIHFxKysnLCBhdXRvc2VhcmNoLCB0aGlzLmF1dG9zZWFyY2gpO1xuXG5cbiAgICAvLyBidXR0b24gU2VhcmNoIERhdGFcblxuICAgIGNvbnN0IGJ1dHRvbnNlYXJjaDogYW55ID0ge307XG4gICAgZm9yIChsZXQgYnMgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhKSB7XG4gICAgICBmb3IgKGNvbnN0IGsgaW4gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZSkge1xuICAgICAgICBjb25zdCBidDogYW55ID0ge307XG4gICAgICAgIGJ0W3RoaXMuYnV0dG9uU2VhcmNoRGF0YVtic10uZmllbGRdID0gdGhpcy5idXR0b25TZWFyY2hEYXRhW2JzXS52YWx1ZVtrXS52YWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAoYnV0dG9uc2VhcmNoLiRvciA9PSBudWxsKSB7IGJ1dHRvbnNlYXJjaC4kb3IgPSBbXTsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhidCwnYnQnLGJzLCdicycpXG4gICAgICAgIGJ1dHRvbnNlYXJjaC4kb3IucHVzaChidCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvbnNlYXJjaCcpXG5cblxuICAgIGlmICh0eXBlb2YgKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgIC8vIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSB0aGlzLmxpbWl0Y29uZHZhbC5za2lwO1xuICAgICAgLy8gIGNvbnNvbGUubG9nKFwidHlwZW9mKHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudCkhPSd1bmRlZmluZWQnXCIpO1xuXG4gICAgICB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaCh0aGlzLmxpbWl0Y29uZHZhbCk7XG4gICAgICBpZiAodGhpcy5rZWVwUGFnaW5hdGlvbiAhPSAxKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5rZWVwUGFnaW5hdGlvbiE9MVwiKTtcblxuICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgICAgdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50ID0gMTtcbiAgICAgICAgLy8gc291cmNlLmNvbmRpdGlvbi5za2lwPTA7XG4gICAgICAgIC8vIHRoaXMua2VlcFBhZ2luYXRpb249MDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgdGhpcy5saW1pdGNvbmR2YWwuc2tpcCA9IDA7XG4gICAgICB0aGlzLm9sZGxpbWl0cmFuZ2UucHVzaCh0aGlzLmxpbWl0Y29uZHZhbCk7XG4gICAgfVxuICAgIGxldCBjb25kaXRpb25vYmo6IG9iamVjdCA9IHt9O1xuXG4gICAgY29uZGl0aW9ub2JqID0gT2JqZWN0LmFzc2lnbih7fSwgdGV4dFNlYXJjaCwgdGhpcy5kYXRlU2VhcmNoX2NvbmRpdGlvbiwgYXV0b3NlYXJjaCwgYnV0dG9uc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0U2VhcmNoX2NvbmRpdGlvbiwgJ3NlbGVjdFNlYXJjaF9jb25kaXRpb24nKVxuXG4gICAgdGhpcy5hbGxTZWFyY2hDb25kID0gY29uZGl0aW9ub2JqO1xuICAgIC8vIGNvbnNvbGUud2FybihcInRoaXMuYWxscGFnaW5hdGlvbnBvc3REYXRhXCIsdGhpcy5hbGxwYWdpbmF0aW9ucG9zdERhdGEpO1xuICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uICE9IDEpIHtcbiAgICAgIHRoaXMubGltaXRjb25kdmFsLnNraXAgPSAwO1xuICAgICAgLy8gc291cmNlLmNvbmRpdGlvbi5za2lwPTA7XG4gICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgLy8gdGhpcy5rZWVwUGFnaW5hdGlvbj0wO1xuICAgIH1cbiAgICAvLyBjb25kaXRpb25vYmogPSBPYmplY3QuYXNzaWduKHt9LCB0ZXh0U2VhcmNoLCB0aGlzLmRhdGVTZWFyY2hfY29uZGl0aW9uLCBhdXRvc2VhcmNoLCB0aGlzLnNlbGVjdFNlYXJjaF9jb25kaXRpb24pO1xuICAgIC8vIGNvbmRpdGlvbm9iaiA9IGNvbmRpdGlvbm9iaiAmIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uO1xuICAgIC8vIGNvbmRpdGlvbm9iaiA9IGNvbmRpdGlvbm9iai5jb25jYXQodGhpcy5saWJkYXRhLmJhc2Vjb25kaXRpb24pO1xuICAgIC8vIGZvciAobGV0IGIgaW4gY29uZGl0aW9ub2JqKSB7XG4gICAgLy8gICAvLyBpZihjb25kaXRpb25vYmpbYl0pXG4gICAgLy8gICBmb3IgKGxldCBjIGluIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uKSB7XG4gICAgLy8gICAgIGlmIChjID09IGIpIHtcbiAgICAvLyAgICAgICAvLyBjb25kaXRpb25vYmpbYl09e307XG4gICAgLy8gICAgICAgbGV0IHRvdGFsY29uZDogYW55O1xuICAgIC8vICAgICAgIGlmICh0eXBlb2YgKGNvbmRpdGlvbm9ialtiXSkgIT0gJ29iamVjdCcpXG4gICAgLy8gICAgICAgICB0b3RhbGNvbmQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXSwgeyAkZXE6IGNvbmRpdGlvbm9ialtiXSB9KTtcbiAgICAvLyAgICAgICBlbHNlXG4gICAgLy8gICAgICAgICB0b3RhbGNvbmQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXSwgY29uZGl0aW9ub2JqW2JdKTtcblxuICAgIC8vICAgICAgIGNvbnNvbGUubG9nKCdpbiBpZiBibGsnLCBjLCBiLCBjb25kaXRpb25vYmpbYl0sIHRoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uW2NdLCB0b3RhbGNvbmQpO1xuICAgIC8vICAgICAgIGNvbmRpdGlvbm9ialtiXSA9IHRvdGFsY29uZDtcbiAgICAvLyAgICAgfSBlbHNlIHtcbiAgICAvLyAgICAgICBjb25kaXRpb25vYmpbY10gPSB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbltjXTtcblxuICAgIC8vICAgICB9XG5cbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gY29uc29sZS5sb2coJ3RoaXMubGliZGF0YXZhbC5iYXNlY29uZGl0aW9uJywgdGhpcy5zZWxlY3RTZWFyY2hfY29uZGl0aW9uLCAnY29uZGl0aW9ub2JqJywgY29uZGl0aW9ub2JqLCAndGhpcy5saWJkYXRhdmFsLmJhc2Vjb25kaXRpb24nLCB0aGlzLmxpYmRhdGF2YWwuYmFzZWNvbmRpdGlvbik7XG4gICAgLy8gY29uZGl0aW9ub2JqID0gY29uZGl0aW9ub2JqLmNvbmNhdCh0aGlzLmxpYmRhdGEuYmFzZWNvbmRpdGlvbik7XG4gICAgaWYgKHR5cGVvZiB0aGlzLmFsbHBhZ2luYXRpb25wb3N0RGF0YSAhPSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gY29uc29sZS53YXJuKFwiY29uZGl0aW9ub2JqXCIsIGNvbmRpdGlvbm9iaik7XG5cbiAgICAgIHNvdXJjZSA9IHRoaXMuYWxscGFnaW5hdGlvbnBvc3REYXRhO1xuICAgICAgbGV0IHRlbXBzb3J0dmFsdWU6IGFueSA9IHtcbiAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgIHR5cGU6IHRoaXMuc29ydGRhdGF2YWwudHlwZVxuICAgICAgfVxuICAgICAgc291cmNlLnNvcnQgPSB0ZW1wc29ydHZhbHVlO1xuXG4gICAgICBpZiAodHlwZW9mIGNvbmRpdGlvbm9iaiAhPSAndW5kZWZpbmVkJyAmJiBjb25kaXRpb25vYmogIT0gbnVsbCkge1xuICAgICAgICBzb3VyY2Uuc2VhcmNoY29uZGl0aW9uID0gY29uZGl0aW9ub2JqO1xuICAgICAgICAvLyAgc291cmNlLmNvbmRpdGlvbi5za2lwPTA7XG4gICAgICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uICE9IDEpIHtcbiAgICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5za2lwID0gMDtcbiAgICAgICAgICAvLyBzb3VyY2UuY29uZGl0aW9uLnNraXA9MDtcbiAgICAgICAgICB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQgPSAxO1xuICAgICAgICAgIC8vIHRoaXMua2VlcFBhZ2luYXRpb249MDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcblxuICAgICAgc291cmNlID0ge1xuICAgICAgICBjb25kaXRpb246IHtcbiAgICAgICAgICBsaW1pdDogdGhpcy5saW1pdGNvbmR2YWwubGltaXQsXG4gICAgICAgICAgc2tpcDogMFxuICAgICAgICB9LFxuICAgICAgICBzb3J0OiB7XG4gICAgICAgICAgZmllbGQ6IHRoaXMuc29ydGRhdGF2YWwuZmllbGQsXG4gICAgICAgICAgdHlwZTogdGhpcy5zb3J0ZGF0YXZhbC50eXBlXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgfTtcbiAgICB9XG5cblxuICAgIGlmIChPYmplY3Qua2V5cyhjb25kaXRpb25vYmopLmxlbmd0aCA8IDApIHtcbiAgICAgIHRoaXMuX3NuYWNrQmFyLm9wZW5Gcm9tQ29tcG9uZW50KFNuYWNrYmFyQ29tcG9uZW50LCB7XG4gICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIFNlYXJjaCBjcml0ZXJpYSBzZWxlY3RlZCAhISAnIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUud2FybignY29uZCcsY29uZGl0aW9uLHRoaXMuZGF0ZVNlYXJjaF9jb25kaXRpb24sY29uZGl0aW9ub2JqLHRoaXMudHNlYXJjaCx0ZXh0U2VhcmNoKTtcbiAgICAgIC8vIHJldHVybjtcbiAgICAgIHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsID0gMDtcbiAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uICE9IDEpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmtlZXBQYWdpbmF0aW9uIT0xIGxhc3QgcGFydFwiKTtcbiAgICAgICAgc291cmNlLmNvbmRpdGlvbi5za2lwID0gMDtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmtlZXBQYWdpbmF0aW9uID09IDEpIHtcbiAgICAgICAgdGhpcy5rZWVwUGFnaW5hdGlvbiA9IDA7XG5cblxuICAgICAgfVxuXG4gICAgICAvLyBjb25zb2xlLndhcm4oXCJzb3VyY2VcIixzb3VyY2UpO1xuXG4gICAgICB0aGlzLnN1YnNjcmlwdGlvbnNbdGhpcy5zdWJzY3JpcHRpb25jb3VudCsrXSA9IHRoaXMuX2FwaVNlcnZpY2UucG9zdFNlYXJjaChsaW5rLCB0aGlzLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvdW50IGxvZysrXCIsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFnZUNvdW50QXJyYXkgbG9nKytcIiwgdGhpcy5wYWdlQ291bnRBcnJheSk7XG5cbiAgICAgICAgdGhpcy5wYWdlQ291bnRBcnJheSA9IG5ldyBBcnJheShNYXRoLmNlaWwodGhpcy5kYXRlX3NlYXJjaF9zb3VyY2VfY291bnR2YWwgLyB0aGlzLmxpbWl0Y29uZHZhbC5saW1pdCkpO1xuICAgICAgICB0aGlzLmxhc3RwYWdlQ291bnRBcnJheSA9IE1hdGguY2VpbCh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KTtcbiAgICAgICAgdGhpcy5wYWdlQ2hhbmdlVmFsdWUgPSB0aGlzLmxpbWl0Y29uZHZhbC5wYWdlY291bnQ7XG4gICAgICAgIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudFxuICAgICAgICBpZiAocmVzdWx0LnJlc3VsdHMucmVzICE9IG51bGwgJiYgcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB0aGlzLm9uTGlibGlzdGluZ0NoYW5nZS5lbWl0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhY3Rpb246ICdzZWFyY2gnLFxuICAgICAgICAgICAgICBsaW1pdGRhdGE6IHRoaXMubGltaXRjb25kdmFsLFxuICAgICAgICAgICAgICBzZWFyY2hjb25kaXRpb246IGNvbmRpdGlvbm9iaixcbiAgICAgICAgICAgICAgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsXG4gICAgICAgICAgICAgIHJlczogcmVzdWx0LnJlc3VsdHMucmVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgYWxsU2VhcmNoQ29uZDogdGhpcy5hbGxTZWFyY2hDb25kLFxuICAgICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICAgIHNlYXJjaGRhdGE6IHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLFxuICAgICAgICAgICAgICBzZWxlY3RlZGRhdGE6IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdC5yZXN1bHRzLnJlcyk7XG4gICAgICAgICAgdGhpcy5fc25hY2tCYXIub3BlbkZyb21Db21wb25lbnQoU25hY2tiYXJDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwLFxuICAgICAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOZXcgU2VhcmNoIG9mIGRhdGEgbG9hZGVkJyB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vbkxpYmxpc3RpbmdDaGFuZ2UuZW1pdCh7XG4gICAgICAgICAgICBhY3Rpb246ICdzZWFyY2gnLFxuICAgICAgICAgICAgbGltaXRkYXRhOiB0aGlzLmxpbWl0Y29uZHZhbCxcbiAgICAgICAgICAgIHNlYXJjaGNvbmRpdGlvbjogY29uZGl0aW9ub2JqLFxuICAgICAgICAgICAgc29ydGRhdGE6IHRoaXMuc29ydGRhdGF2YWwsXG4gICAgICAgICAgICByZXM6IHJlc3VsdC5yZXN1bHRzLnJlcy5sZW5ndGgsXG4gICAgICAgICAgICBhbGxTZWFyY2hDb25kOiB0aGlzLmFsbFNlYXJjaENvbmQsXG4gICAgICAgICAgICBhdXRvU2VhcmNoVmFsOiB0aGlzLmF1dG9zZWFyY2gsXG4gICAgICAgICAgICBzZWFyY2hkYXRhOiB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbCxcbiAgICAgICAgICAgIHNlbGVjdGVkZGF0YTogdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsXG4gICAgICAgICAgICBmbGFnOiAnbm9fcmVjb3JkJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8vIHRoaXMucmVzY291bnQgPSAwOyBcbiAgICAgICAgICB0aGlzLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICAgICAgZHVyYXRpb246IDYwMDAsXG4gICAgICAgICAgICBkYXRhOiB7IGVycm9ybWVzc2FnZTogJ05vIHN1Y2ggc2VhcmNoIHJlY29yZCBmb3VuZCAhIScgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2gobGluazEsIHRoaXMuand0dG9rZW52YWwsIHNvdXJjZSkuc3Vic2NyaWJlKHJlcyA9PiB7XG4gICAgICAgIGxldCByZXN1bHQ6IGFueSA9IHt9O1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvdW50IGxvZysrXCIsIHRoaXMubmV3Y3VycmVudHBhZ2luZ1ZhbCk7XG5cbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICB0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCA9IChyZXN1bHQuY291bnQpO1xuICAgICAgICB0aGlzLnBhZ2VDb3VudEFycmF5ID0gbmV3IEFycmF5KE1hdGguY2VpbCh0aGlzLmRhdGVfc2VhcmNoX3NvdXJjZV9jb3VudHZhbCAvIHRoaXMubGltaXRjb25kdmFsLmxpbWl0KSk7XG4gICAgICAgIHRoaXMubGFzdHBhZ2VDb3VudEFycmF5ID0gTWF0aC5jZWlsKHRoaXMuZGF0ZV9zZWFyY2hfc291cmNlX2NvdW50dmFsIC8gdGhpcy5saW1pdGNvbmR2YWwubGltaXQpO1xuICAgICAgICB0aGlzLnBhZ2VDaGFuZ2VWYWx1ZSA9IHRoaXMubGltaXRjb25kdmFsLnBhZ2Vjb3VudDtcbiAgICAgICAgdGhpcy5uZXdjdXJyZW50cGFnaW5nVmFsID0gdGhpcy5saW1pdGNvbmR2YWwucGFnZWNvdW50XG4gICAgICAgIGlmIChyZXN1bHQuY291bnQgPT0gMCkgeyB0aGlzLnRhYmxlZmxhZyA9IDE7IH0gZWxzZSB7IHRoaXMudGFibGVmbGFnID0gMDsgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZygnY291bnQnLHJlc3VsdCk7XG4gICAgICAgIC8vIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLmluaXRpYXRlU2VhcmNoID0gZmFsc2U7XG4gIH1cblxuICBnZXR0eXBlb2YodmFsOiBhbnkpIHtcbiAgICByZXR1cm4gdHlwZW9mICh2YWwpO1xuICB9XG5cblxuICAvLyBvcGVuIEJvdHRvbSBTaGVldCBGb3IgU2VhcmNoXG4gIG9wZW5Cb3R0b21TaGVldEZvclNlYXJjaChkYXRhOiBhbnksIGluZGV4KSB7XG4gICAgdmFyIGNvdW50ID0gMTtcbiAgICAvLyBjb25zb2xlLmxvZyhkYXRhLCAnb3BlbkJvdHRvbVNoZWV0Rm9yU2VhcmNoJywgaW5kZXgpXG4gICAgY29uc3QgYnMgPSB0aGlzLmRpYWxvZy5vcGVuKE1vZGFsRm9yQnV0dG9tU2VhcmNoLCB7IHBhbmVsQ2xhc3M6ICdidXR0b24tc2VhcmNoLW1vZGFsJywgZGF0YTogeyBpdGVtczogZGF0YSB9IH0pO1xuICAgIGJzLmRpc2FibGVDbG9zZSA9IHRydWU7XG4gICAgYnMuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCsrKys9PT09IGRhdGEnLCBkYXRhKVxuICAgICAgaWYgKHJlc3VsdCAhPSBudWxsICYmIHJlc3VsdC5mbGFnID09ICd5ZXMnKSB7XG4gICAgICAgIGNvdW50ID0gMTtcbiAgICAgICAgdmFyIHNlYXJjaEZsYWcgPSAwO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCsrKys9PT09Pz8nLCBpbmRleClcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5idXR0b25TZWFyY2hEYXRhLCAnYnV0dG9uU2VhcmNoRGF0YSAxJylcblxuICAgICAgICBpZiAodGhpcy5idXR0b25TZWFyY2hEYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuYnV0dG9uU2VhcmNoRGF0YSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYnV0dG9uU2VhcmNoRGF0YVtpXS5maWVsZCA9PSByZXN1bHQuaXRlbXMuZmllbGQpIHtcbiAgICAgICAgICAgICAgY291bnQgPSAyO1xuICAgICAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcblxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygndHJ1ZSArKysgY291bnQnLCBjb3VudClcbiAgICAgICAgICAgICAgZm9yIChsZXQgaiBpbiByZXN1bHQuc2VsZWN0ZWREYXRhKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhW2ldLnZhbHVlLnB1c2gocmVzdWx0LnNlbGVjdGVkRGF0YVtqXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHNlYXJjaEZsYWcgPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDInKVxuICAgICAgICAgICAgICAgIHRoaXMuYWxsU2VhcmNoKCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY291bnQgPSAwXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNvdW50LCAnY291bnQgZWxzZSBjaGVjaycpXG5cbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJ1dHRvblNlYXJjaERhdGEsICdidXR0b25TZWFyY2hEYXRhIDInKVxuXG4gICAgICAgICAgaWYgKGNvdW50ID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uU2VhcmNoRGF0YS5wdXNoKHsgdmFsdWU6IHJlc3VsdC5zZWxlY3RlZERhdGEsIGtleTogaW5kZXgsIGZpZWxkOiByZXN1bHQuaXRlbXMuZmllbGQgfSk7XG4gICAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLnB1c2goeyB2YWx1ZTogcmVzdWx0LnNlbGVjdGVkRGF0YSwga2V5OiBpbmRleCwgZmllbGQ6IHJlc3VsdC5pdGVtcy5maWVsZCB9KTtcbiAgICAgICAgICBzZWFyY2hGbGFnID0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaEZsYWcsICdzZWFyY2hGbGFnIDEnKVxuXG4gICAgICAgIGlmIChzZWFyY2hGbGFnID09IDEpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hGbGFnLCAnc2VhcmNoRmxhZyAyJylcbiAgICAgICAgICB0aGlzLmFsbFNlYXJjaCgpO1xuICAgICAgICB9XG5cblxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuXG4gIC8vIGNsZWFyIEJ1dHRvbiBTZWFyY2ggQ2hpcHMgIGRhdGFcbiAgY2xlYXJCdXR0b25TZWFyY2hDaGlwcyhicywgaSwgaXRlbSwgaikge1xuICAgIC8vIGNvbnNvbGUubG9nKGJzLCBpLCBpdGVtLCBqLCAnYnMsaSxpdGVtLGonKTtcbiAgICB0aGlzLmJ1dHRvblNlYXJjaERhdGFbaV0udmFsdWUuc3BsaWNlKGosIDEpO1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYnV0dG9uU2VhcmNoRGF0YSwgJ2J1dHRvblNlYXJjaERhdGEgc3BsaWNlJylcblxuICAgIC8vIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFticy5rZXldLnZhbHVlc1xuICAgIGZvciAobGV0IGkgaW4gdGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoKSB7XG4gICAgICBpZiAodGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoW2ldLmZpZWxkID09IGJzLmZpZWxkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCcnLCB0aGlzLnNlYXJjaF9zZXR0aW5nc3ZhbC5idXR0b25zZWFyY2hbaV0pXG4gICAgICAgIHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaFtpXS52YWx1ZS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoX3NldHRpbmdzdmFsLmJ1dHRvbnNlYXJjaCwndGhpcy5zZWFyY2hfc2V0dGluZ3N2YWwuYnV0dG9uc2VhcmNoJylcbiAgfVxuXG5cblxuXG4gIC8qIGFydGlzdHhwIHByZXZpZXcgYnV0dG9uIGNsaWNrIGZ1bmN0aW9uIHN0YXJ0ICovXG4gIGFydGlzdHhwUHJldmlldyhzaW5nbGVEYXRhOiBhbnkpIHtcbiAgICBjb25zdCBsaW5rID0gJ2h0dHA6Ly9kZXZlbG9wbWVudGFwaS5hdWRpb2RlYWRsaW5lLmNvbTozMDkwLycgKyAnZGF0YWxpc3QnO1xuICAgIC8qKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKioqL1xuICAgIGNvbnN0IGRhdGE6IGFueSA9IHsgc291cmNlOiAnYmxvY2tjaGFpbnVzZXJfdmlldycsIGNvbmRpdGlvbjogeyBwb3N0c19pZF9vYmplY3Q6IHNpbmdsZURhdGEuX2lkIH0sIHRva2VuOiB0aGlzLmp3dHRva2VudmFsIH07XG4gICAgLyoqKioqKioqIG5vdCBjb21wbGV0ZWQgKioqKiovXG4gICAgdGhpcy5zdWJzY3JpcHRpb25zW3RoaXMuc3Vic2NyaXB0aW9uY291bnQrK10gPSB0aGlzLl9hcGlTZXJ2aWNlLnBvc3REYXRhKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXNwb25zZSA9PiB7XG4gICAgICBjb25zdCByZXN0bHQ6IGFueSA9IHJlc3BvbnNlO1xuICAgICAgLyogb3BlbiBkaWFsb2cgKi9cbiAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQ29uZmlybWRpYWxvZywge1xuICAgICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtYXhwJ10sXG4gICAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgICBkYXRhOiB7IHByZXZpZXc6IHRydWUsIHByZXZpZXdEYXRhOiByZXN0bHQgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLyogYXJ0aXN0eHAgcHJldmlldyBidXR0b24gY2xpY2sgZnVuY3Rpb24gZW5kICovXG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY29uZmlybWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnY29uZmlybS1kaWFsb2cuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIENvbmZpcm1kaWFsb2cge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBfYXBpU2VydmljZTogQXBpU2VydmljZSxcbiAgICAvLyBwdWJsaWMgbm90ZXN2YWw6YW55PW51bGwsXG4gICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPENvbmZpcm1kaWFsb2c+LFxuICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55LCBwdWJsaWMgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZykge1xuICAgIC8vIGNvbnNvbGUubG9nKCdsaWIgZGF0YSBpbiBtb2RhbCAnLCB0aGlzLmRhdGEsIHRoaXMuZGF0YSwgdGhpcy5kYXRhLnJvd2RhdGEsIHRoaXMuZGF0YS5yb3dkYXRhLmJsb2d0aXRsZSk7XG4gICAgdGhpcy5kYXRhLmNvbG9yID0gJ3ByaW1hcnknO1xuICAgIHRoaXMuZGF0YS5tb2RlID0gJ2luZGV0ZXJtaW5hdGUnO1xuICAgIHRoaXMuZGF0YS5sb2FkZXJ2YWx1ZSA9IDUwO1xuICAgIHRoaXMuZGF0YS5idWZmZXJWYWx1ZSA9IDc2O1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbiAgZGVsZXRlbm90ZShpbmRleDogYW55KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgLy8gaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oRGVsZXRlTm90ZXNNb2RhbCwge1xuICAgICAgaGVpZ2h0OiAnYXV0bycsXG4gICAgICBwYW5lbENsYXNzOiBbJ2N1c3RvbS1tb2RhbGJveCcsICdkZWxldGUtbm90ZXMtbW9kYWwnXSxcbiAgICAgIGRpc2FibGVDbG9zZTogdHJ1ZVxuICAgICAgLy8gZGF0YToge1xuICAgICAgLy8gICBpc2NvbmZpcm1hdGlvbjogZmFsc2UsXG4gICAgICAvLyAgIG5vdGVzOiB0cnVlLCBhcGl1cmw6IHRoaXMuYXBpdXJsdmFsLFxuICAgICAgLy8gICBub3RlZGF0YTogdGhpcy5saWJkYXRhdmFsLm5vdGVzLCByb3dkYXRhOiB2YWwsXG4gICAgICAvLyAgIGp3dHRva2VudmFsOiB0aGlzLmp3dHRva2VudmFsLFxuICAgICAgLy8gICBsaXN0ZGF0YTogcmVzdWx0LnJlcyxcbiAgICAgIC8vICAgX3NuYWNrQmFyOiB0aGlzLl9zbmFja0JhclxuICAgICAgLy8gfVxuICAgIH0pO1xuICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xuICAgICAgLy8gY29uc29sZS5sb2coXCJyZXN1bHRcIixyZXN1bHQpO1xuICAgICAgaWYgKHR5cGVvZiByZXN1bHQgIT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIChyZXN1bHQucmVzcG9uc2UpICE9IFwidW5kZWZpbmVkXCIgJiYgcmVzdWx0LnJlc3BvbnNlICE9IFwiXCIpIHtcbiAgICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgICBpZDogdGhpcy5kYXRhLnJvd2RhdGEuX2lkLFxuICAgICAgICAgIGluZGV4XG4gICAgICAgICAgLy8gbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICAgIC8vIHVzZXI6IHRoaXMuZGF0YS5ub3RlZGF0YS51c2VyLFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGEubG9hZGluZzEgPSBpbmRleDtcbiAgICAgICAgdGhpcy5fYXBpU2VydmljZS5wb3N0U2VhcmNoKHRoaXMuZGF0YS5hcGl1cmwgKyB0aGlzLmRhdGEubm90ZWRhdGEuZGVsZXRlZW5kcG9pbnQsIHRoaXMuZGF0YS5qd3R0b2tlbnZhbCwgc291cmNlKS5zdWJzY3JpYmUocmVzID0+IHtcbiAgICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgICByZXN1bHQgPSByZXM7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzdWx0LCAnYWRkIG5vdGVzJyk7XG4gICAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgICAvLyB0aGlzLmRhdGEubGlzdGRhdGEucHVzaCh7IHVzZXJpZDogdGhpcy5kYXRhLm5vdGVkYXRhLmN1cnJlbnR1c2VyZnVsbG5hbWUsIG5vdGU6IHRoaXMuZGF0YS5ub3Rlc3ZhbCwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0pO1xuICAgICAgICAgICAgLy8gdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRhdGEubGlzdGRhdGEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5sb2FkaW5nMSA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcscmVzdWx0KTtcbiAgICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yID0gdGhpcy5wYWdpbmF0b3I7XG4gICAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XG5cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyB9XG4gIH1cbiAgYWRkbm90ZXMoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2xvZycsIHRoaXMuZGF0YSk7XG4gICAgaWYgKHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSBudWxsICYmIHRoaXMuZGF0YS5ub3Rlc3ZhbCAhPSAnJykge1xuICAgICAgY29uc3Qgc291cmNlOiBhbnkgPSB7XG5cbiAgICAgICAgaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCxcbiAgICAgICAgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLFxuICAgICAgICB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlcixcbiAgICAgIH07XG4gICAgICB0aGlzLmRhdGEubG9hZGluZyA9IHRydWU7XG4gICAgICB0aGlzLl9hcGlTZXJ2aWNlLnBvc3RTZWFyY2godGhpcy5kYXRhLmFwaXVybCArIHRoaXMuZGF0YS5ub3RlZGF0YS5hZGRlbmRwb2ludCwgdGhpcy5kYXRhLmp3dHRva2VudmFsLCBzb3VyY2UpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSB7fTtcbiAgICAgICAgcmVzdWx0ID0gcmVzO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQsICdhZGQgbm90ZXMnKTtcbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgaWYgKHRoaXMuZGF0YS5saXN0ZGF0YSA9PSBudWxsKSB7IHRoaXMuZGF0YS5saXN0ZGF0YSA9IFtdOyB9XG4gICAgICAgICAgdGhpcy5kYXRhLmxpc3RkYXRhLnVuc2hpZnQoeyBfaWQ6IHRoaXMuZGF0YS5yb3dkYXRhLl9pZCwgbm90ZXM6IHsgdXNlcmlkOiB0aGlzLmRhdGEubm90ZWRhdGEudXNlciwgbm90ZTogdGhpcy5kYXRhLm5vdGVzdmFsLCB1c2VyOiB0aGlzLmRhdGEubm90ZWRhdGEuY3VycmVudHVzZXJmdWxsbmFtZSwgY3JlYXRlZF9kYXRlOiBEYXRlLm5vdygpIH0gfSk7XG4gICAgICAgICAgdGhpcy5kYXRhLm5vdGVzdmFsID0gJyc7XG4gICAgICAgICAgdGhpcy5kYXRhLmxvYWRpbmcgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb3VudCcsdGhpcy5kYXRhLmxpc3RkYXRhKTtcbiAgICAgICAgLy8gdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xuICAgICAgICAvLyB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcblxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdibGFuayBub3RlcycpO1xuICAgICAgdGhpcy5kYXRhLl9zbmFja0Jhci5vcGVuRnJvbUNvbXBvbmVudChTbmFja2JhckNvbXBvbmVudCwge1xuICAgICAgICBkdXJhdGlvbjogMjAwMCxcbiAgICAgICAgZGF0YTogeyBlcnJvcm1lc3NhZ2U6ICdOb3RlcyBjYW5cXCd0IGJlIGJsYW5rICEhICcgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZ2V0dHlwZW9mKHZhbDogYW55KSB7XG4gICAgcmV0dXJuIHR5cGVvZiAodmFsKTtcbiAgfVxuICBzYW5pdGl6ZVVybCh1bnNhZmV1cmw6IGFueSwgZGF0YTogYW55LCByb3dkYXRhOiBhbnkpIHtcbiAgICBmb3IgKGNvbnN0IGIgaW4gZGF0YSkge1xuICAgICAgdW5zYWZldXJsID0gdW5zYWZldXJsICsgJy8nICsgcm93ZGF0YVtkYXRhW2JdXTtcblxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdFJlc291cmNlVXJsKHVuc2FmZXVybCk7XG4gIH1cbn1cblxuLy8gZGVsZXRlIG5vdGVzIGNvbmZpcm1hdGlvbiBtb2RhbFxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZGVsZXRlbm90ZXNDb25maXJtYXRpb25Nb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnZGVsZXRlbm90ZXNDb25maXJtYXRpb25Nb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgRGVsZXRlTm90ZXNNb2RhbCB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxEZWxldGVOb3Rlc01vZGFsPiwgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oXCJib3R0b20tc2hlZXRcIixkYXRhKTtcbiAgfVxuICBvbk5vQ2xpY2soKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxuICByZXNwb25zZUZ1bmN0aW9uKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSh7IHJlc3BvbnNlOiB2YWx1ZSB9KTtcbiAgfVxuXG5cbn1cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdib3R0b20tc2hlZXQnLFxuICB0ZW1wbGF0ZVVybDogJ2JvdHRvbS1zaGVldC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQm90dG9tU2hlZXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJvdHRvbVNoZWV0UmVmOiBNYXRCb3R0b21TaGVldFJlZjxCb3R0b21TaGVldD4sIEBJbmplY3QoTUFUX0JPVFRPTV9TSEVFVF9EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XG4gICAgLy8gY29uc29sZS53YXJuKFwiYm90dG9tLXNoZWV0XCIsZGF0YSk7XG4gIH1cblxuICBvcGVuTGluayh2YWw6IGFueSk6IHZvaWQge1xuICAgIHRoaXMuYm90dG9tU2hlZXRSZWYuZGlzbWlzcyh2YWwpO1xuICB9XG59XG5cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYnV0dG9uLXNlYXJjaC1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnYnV0dG9uLXNlYXJjaC1tb2RhbC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgTW9kYWxGb3JCdXR0b21TZWFyY2gge1xuXG4gIHB1YmxpYyBidXR0b25TZWFyY2hEYXRhOiBhbnkgPSB7fTtcbiAgcHVibGljIHNlbGVjdGVkRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBzZWFyY2hWYWw6IGFueSA9ICcnO1xuICBwdWJsaWMgYWxsQnV0dG9uRGF0YTogYW55ID0gW107XG4gIHB1YmxpYyBsb2FkaW5nX2ZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGVycm1zZzogYW55ID0gJyc7XG4gIHB1YmxpYyBtYXRDaGlwRGF0YTogYW55ID0gW11cbiAgICA7XG4gIHB1YmxpYyBtYXRBdXRvc2VhcmNoRGF0YTogYW55ID0gW107XG5cblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYm5vdHRvUmVmOiBNYXREaWFsb2dSZWY8TW9kYWxGb3JCdXR0b21TZWFyY2g+LCBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSwgcHVibGljIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImJvdHRvbS1zaGVldC1zZWFyY2hcIiwgZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0ge307XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhID0gZGF0YTtcbiAgICB0aGlzLmFsbEJ1dHRvbkRhdGEgPSBkYXRhLml0ZW1zLnZhbHVlO1xuICB9XG5cbiAgY2hvb3NlQ2hpcEl0ZW0oZGF0YSwgaSkge1xuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEsICc/P2RhdGEnKVxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLnB1c2goZGF0YSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnNwbGljZShpLCAxKTtcbiAgfVxuXG4gIC8vIHN1Ym1pdCBcbiAgc2VhcmNoQnlJdGVtKCkge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWREYXRhKVxuICAgIHRoaXMuZGF0YS5mbGFnID0gJ3llcyc7XG4gICAgdGhpcy5kYXRhLnNlbGVjdGVkRGF0YSA9IHRoaXMuc2VsZWN0ZWREYXRhO1xuICAgIC8vIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcbiAgfVxuXG4gIHJlbW92ZSh2YWwsIGkpIHtcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5zcGxpY2UoaSwgMSk7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlLnB1c2godmFsKTtcbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIHRoaXMuc2VhcmNoVmFsID0gJyc7XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG4gICAgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gdGhpcy5hbGxCdXR0b25EYXRhO1xuXG4gIH1cblxuICBzZWFyY2hCeUtleXdvcmQodmFsdWUpIHtcblxuICAgIGlmICh0aGlzLnNlYXJjaFZhbCAhPSBudWxsICYmIHRoaXMuc2VhcmNoVmFsICE9ICcnKSB7XG4gICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IHRydWU7XG4gICAgICBsZXQgbGluazogYW55ID0gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEudXJsICsgdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnNlcnZlcnNlYXJjaGRhdGEuZW5kcG9pbnQ7XG4gICAgICBsZXQgZGF0YTogYW55ID0ge1xuICAgICAgICBcInNlYXJjaF9zdHJcIjogdmFsdWUsXG4gICAgICAgIFwibGltaXRcIjogNTBcbiAgICAgIH1cblxuICAgICAgdGhpcy5hcGlTZXJ2aWNlLnBvc3RTZWFyY2gxKGxpbmssIGRhdGEpLnN1YnNjcmliZShyZXMgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKVxuICAgICAgICBsZXQgcmVzdWx0OiBhbnkgPSByZXM7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT0gJ3N1Y2Nlc3MnKSB7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gW107XG5cbiAgICAgICAgICB0aGlzLmxvYWRpbmdfZmxhZyA9IGZhbHNlO1xuXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcy5zbGljZSgwLCA1MCk7XG4gICAgICAgICAgLy8gdGhpcy5idXR0b25TZWFyY2hEYXRhLml0ZW1zLnZhbHVlID0gcmVzdWx0O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdCwgJ3Jlc3VsdCcsIHRoaXMubG9hZGluZ19mbGFnKVxuICAgICAgICAgIHRoaXMubWF0QXV0b3NlYXJjaERhdGEgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZXJybXNnID0gXCJQbGVhc2UgRW50ZXIgS2V5d29yZHNcIjtcbiAgICB9XG4gIH1cblxuICBjbG9zZSgpIHtcbiAgICB0aGlzLmRhdGEuZmxhZyA9ICdubyc7XG4gICAgdGhpcy5ibm90dG9SZWYuY2xvc2UodGhpcy5kYXRhKTtcblxuICB9XG5cblxufVxuXG5cblxuLyoqbGlzdGluZyB2aWRlbyBwbGF5ZXIgKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3ZpZGVvcGxheWVyJyxcbiAgdGVtcGxhdGVVcmw6ICd2aWRlb3BsYXllci5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIge1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBkaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxWaWRlb1BsYXllcj4sXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBhbnkpIHtcbiAgICAvLyBjb25zb2xlLndhcm4oJ3ZpZGVvcGxheWVyTW9kYWwnLGRhdGEucHJldmlld0RhdGEudmlkZW8pO1xuICB9XG5cbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xuICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XG4gIH1cbn1cblxuLyoqbGlzdGluZyBJbWFnZSBWaWV3ICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdpbWFnZScsXG4gIHRlbXBsYXRlVXJsOiAnaW1nX21vZGFsX3ZpZXcuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlVmlldyB7XG5cbiAgLy8gcHVibGljIGRhdGE6YW55O1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8SW1hZ2VWaWV3PixcbiAgICBASW5qZWN0KE1BVF9ESUFMT0dfREFUQSkgcHVibGljIGRhdGE6IGFueSkge1xuICAgIC8vIGNvbnNvbGUud2FybignSW1hZ2VWaWV3TW9kYWwnLCBkYXRhKTtcbiAgfVxuICBhZGRub3RlcygpIHtcbiAgICAvLyBjb25zb2xlLmxvZygnbG9nJywgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIG9uTm9DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NuYWNrLWJhci1jb21wb25lbnQtZXhhbXBsZS1zbmFjaycsXG4gIHRlbXBsYXRlVXJsOiAnc25hY2stYmFyLWNvbXBvbmVudC1leGFtcGxlLXNuYWNrLmh0bWwnLFxuICBzdHlsZXM6IFtgXG4gICAgLmV4YW1wbGUtcGl6emEtcGFydHkge1xuICAgICAgY29sb3I6IGhvdHBpbms7XG4gICAgfVxuICBgXSxcbn0pXG5leHBvcnQgY2xhc3MgU25hY2tiYXJDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgc25hY2tCYXJSZWY6IE1hdFNuYWNrQmFyUmVmPFNuYWNrYmFyQ29tcG9uZW50PixcbiAgICBASW5qZWN0KE1BVF9TTkFDS19CQVJfREFUQSkgcHVibGljIGRhdGE6IGFueVxuICApIHtcbiAgICAvLyBjb25zb2xlLmxvZygnc25hY2snLHRoaXMuZGF0YSk7XG4gIH1cbn1cbiJdfQ==