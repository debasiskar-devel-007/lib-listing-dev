import {
  Component, OnInit, ViewChild, Input, Inject,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ViewContainerRef, SimpleChange, OnDestroy, Output, EventEmitter, AfterViewChecked, ElementRef
} from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, Event } from '@angular/router';
import { Observable, Subject, Subscription } from 'rxjs';
import { startWith, map, debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import { ObservableserviceService } from "./service/observableservice.service";
import { animate, state, style, transition, trigger } from '@angular/animations';
declare var $: any;

import * as momentImported from 'moment';

import { ThemePalette } from '@angular/material/core';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';


// import {ProgressBarMode} from '@angular/material/progress-bar';
// import  {BtnComponent} from './../../../../src/app/btn/btn.component'
const moment = momentImported;

export interface DialogData {
  alldata: any;
}
@Component({
  selector: 'lib-listing',
  templateUrl: './listing.module.html',
  styleUrls: ['./listing.module.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class ListingComponent implements OnInit, OnDestroy {
  public selectedItem: any = 0;
  public pageChangeValue: Number;
  myControl = new FormControl();
  public staticTooltip: any = {
    "delete": "Delete",
    "edit": "Edit",
    "preview": "Preview",
    "changeStatus": "Change Status",
  }
  public newcurrentpagingVal: any;
  public startDate: any;
  public keepPagination: any = 0;
  public startDate111: any = new Date(1622358050000)
  public endDate: any;
  datasourceval: any;
  search_settingsval: any;
  click_to_add_ananother_pageval: any;
  grab_linkval: any;
  date_search_sourceval: any;
  date_search_endpointval: any;
  urlval: any;
  searchendpointval: any;
  public searchListval: any;
  rescount: number = 0;
  pdf_link_val: any;
  statusarrval: any;
  skipval: any;
  errormg: any;
  jwttokenval: any;
  detail_datatypeval: any;
  detail_skip_arrayval: any;
  deleteendpointval: any;
  editrouteval: any;
  apiurlval: any;
  updateendpointval: any;
  modify_header_arrayval: any;
  date_search_source_countval: any;
  datacollectionval: any;
  selection: any;
  sourcedataval: any;
  emailarrayval: any;
  columns: any = [];
  autosearchinput: any = [];
  currentautosearcharr: any = [];
  olddata: any = [];
  tsearch: any = [];
  tableflag: any = 0;
  autosearch: any = [];
  public x: any;
  public libdataval: any = {};
  public limitcondval: any = {};
  public custombuttonval: any;
  public result: any = {};
  public sortdataval: any = {};
  public sh: any = false;
  public art: any = false;
  public aud2: any = false;
  public aud: any = false;
  public updatetableval: any = false;
  loaderrow: any = null;
  currentautocompleteitem: any;
  public customButtonFlagVal: any = {};
  public allSearchCond: any = [];
  public searchbuttonval: any = [];
  public searchBarFlag: boolean = false;
  public searchBarToolTip: any = 'Open Search Bar';
  public searchBarFlagVal: boolean = false;
  public recordFoundFlag: boolean = false;
  public recordFoundData: any = '';
  /*for progress bar*/

  color: ThemePalette = 'primary';
  mode: any = 'indeterminate';
  value = 50;
  bufferValue = 75;

  /* this variable for artist xp preview */
  previewFlug: any = false;
  selectsearch: any = [];
  public newpagingcountFlag: boolean = true;
  public initiateSearch: boolean = false;

  @Output() onLiblistingChange = new EventEmitter<any>();

  @Output() onLiblistingButtonChange = new EventEmitter<any>();
  public convertToLanguage: any;
  searchstrsarr: any = [];
  oldlimitrange: any = [];
  public languagedataset: any = [];
  @Input()
  set languageDataset(value: any) {
    this.languagedataset = value;
    // console.log(this.grab_linkval);
  }
  @Input()
  set setconvertToLanguage(value: any) {
    this.convertToLanguage = value;
    // console.log("developer test",this.convertToLanguage)

    if (typeof this.convertToLanguage != 'undefined' && this.convertToLanguage != null && this.convertToLanguage != '') {
      this.observableService.setconvertToLanguage(this.convertToLanguage);
    }
  }
  @Input()
  set search_settings(search_settings: any) {
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

  @Input()
  set click_to_add_ananother_page(click_to_add_ananother_page: any) {
    this.click_to_add_ananother_pageval = click_to_add_ananother_page;
  }
  @Input()
  set limitcond(limitcondval: any) {
    this.limitcondval = limitcondval;
    if (this.limitcondval.pagecount == null) {
      this.limitcondval.pagecount = 1;

    }
    this.newcurrentpagingVal = this.limitcondval.pagecount;
    this.pageChangeValue = this.limitcondval.pagecount;
    this.oldlimitrange.push(limitcondval);
    // console.log('limitcondval',this.limitcondval);
  }
  public pageCountArray: any;
  public firstpageCountArray: any;
  public lastpageCountArray: any;
  @Input()
  set date_search_source_count(date_search_source_countval: any) {
    this.date_search_source_countval = date_search_source_countval;
    this.pageCountArray = new Array(Math.ceil(date_search_source_countval / this.limitcondval.limit));
    this.lastpageCountArray = Math.ceil(date_search_source_countval / this.limitcondval.limit);
    console.log("this.pageCountArray", Math.ceil(date_search_source_countval / this.limitcondval.limit));


    if (this.date_search_source_countval == 0) { this.limitcondval.pagecount = 1; }
    // console.log('date_search_source_count',this.date_search_source_countval);
  }

  @Input()
  set grab_link(grab_link: any) {
    this.grab_linkval = grab_link;
    // console.log(this.grab_linkval);
  }
  @Input()
  set custombutton(custombutton: any) {
    this.custombuttonval = custombutton;
  }

  @Input()
  set date_search_source(date_search_source: any) {
    this.date_search_sourceval = date_search_source;
  }
  @Input()
  set sortdata(sortdataval: any) {
    this.sortdataval = sortdataval;
    // console.log(this.sortdataval, 'sortdataval');
  }

  @Input()
  set date_search_endpoint(date_search_endpoint: any) {
    this.date_search_endpointval = date_search_endpoint;
  }
  @Input()
  set url(url: any) {
    this.urlval = url;
  }
  @Input()
  set searchendpoint(searchendpoint: any) {
    this.searchendpointval = searchendpoint;
  }
  @Input()
  set pdf_link(pdf_link: any) {
    this.pdf_link_val = pdf_link;
  }
  @Input()
  set searchList(searchList: any) {
    this.searchListval = searchList;
  }
  public paginationtype: any;
  public paginationtypeFlag: boolean = true;
  @Input()
  set libdata(libdataval: any) {
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
      setTimeout(() => {
        this.searchBarFlagVal = libdataval.searchBarFlagVal;
      }, 1000);
    } else {
      this.searchBarFlag = true;
    }


    if (libdataval.recordfoundflag != null && libdataval.recordfoundflag != '' && libdataval.recordfounddata != null) {
      setTimeout(() => {
        this.recordFoundFlag = libdataval.recordfoundflag;
        this.recordFoundData = libdataval.recordfounddata;

      }, 1000);
    } else {
      this.recordFoundFlag = false;
    }
  }

  @Input()
  set datasource(datasource: any) {
    this.datasourceval = [];
    this.datasourceval = datasource;
  }
  @Input()
  set datacollection(datacollectionval: any) {
    this.datacollectionval = datacollectionval;
  }

  @Input()
  set skip(skip: any) {
    this.skipval = skip;
  }
  @Input()
  set detail_datatype(detail_datatype: any) {
    this.detail_datatypeval = detail_datatype;
  }
  @Input()
  set detail_skip_array(detail_skip_array: any) {
    this.detail_skip_arrayval = detail_skip_array;
  }

  @Input()
  set sourcedata(sourcedata: any) {
    this.sourcedataval = sourcedata;
  }

  @Input()
  set modify_header_array(modify_header_array: any) {
    this.modify_header_arrayval = modify_header_array;
  }

  @Input()
  set deleteendpoint(deleteendpointval: any) {
    this.deleteendpointval = deleteendpointval;
  }

  @Input()
  set updateendpoint(updateendpoint: any) {
    this.updateendpointval = updateendpoint;
  }
  @Input()
  set apiurl(apiurl: any) {
    this.apiurlval = apiurl;
    // console.log("this.apiurlval",this.apiurlval);

    this.observableService.setapiUrl(this.apiurlval + this.libdataval.addlanguagedataEndpoint);
  }

  @Input()
  set updatetable(updatetable: any) {
    this.updatetableval = updatetable;

  }

  @Input()
  set jwttoken(jwttoken: any) {
    if (jwttoken != null) { this.jwttokenval = jwttoken; } else { this.jwttokenval = ''; }
    // console.log(this.jwttokenval,'token')
  }

  @Input()
  set statusarr(statusarr: any) {
    this.statusarrval = statusarr;
  }

  @Input()
  set emailarray(emailarray: any) {
    this.emailarrayval = emailarray;
  }

  @Input()
  set editroute(editroute: any) {
    this.editrouteval = editroute;
  }


  /* artistxp preview start */
  @Input()
  set preview_artistxp(flug: any) {
    this.previewFlug = true;
  }
  /* artistxp preview end */

  @Input()
  set customlistenbutton(val: any) {
    this.customButtonFlagVal = val
    // console.log(this.customButtonFlagVal, 'customButtonFlagVal')
  }

  // search buttons 
  // @Input()
  // set searchbuttons(val: any) {
  //   this.searchbuttonval = val
  //   console.log(this.searchbuttonval, 'customButtonFlagVal')
  // }


  expandedElement: any;



  stateGroups: string[];
  public allpaginationpostData: any;
  stateGroup: Observable<string[]>;
  displayedColumns: string[] = [];
  datacolumns: string[] = [];
  displayedColumnsheader: string[] = [];
  formarray: any = [];
  start_date: any;
  dateSearch_condition: any = {};
  selectSearch_condition: any = {};
  autoSearch_condition: any = {};
  textSearch_condition: any = {};
  end_date: any;
  public i: any;
  loading: any = false;
  public preresult: any = {};
  public buttonSearchData: any = [];
  // dataSource = new MatTableDataSource(this.datasourceval);
  dataSource = new MatTableDataSource;

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  // options: FormGroup;
  myForm: any;
  // myForm:any;
  modelChanged = new Subject<any>();
  modelChangedserver = new Subject<any>();
  pagechanged = new Subject<any>();
  subscriptions: Subscription[] = [];
  subscriptioncount = 0;
  tableFooterColumns: string[] = [];
  testvalue: any = "s1";
  txtQueryChanged: Subject<string> = new Subject<string>();
  limitChangrd: Subject<string> = new Subject<string>();

  // searchResult$: Observable<SearchResult[]>;
  // for dropdown pagination
  public pages: any = [];
  constructor(public _apiService: ApiService, public dialog: MatDialog,
    public bottomSheet: MatBottomSheet,
    public fb: FormBuilder,
    private router: Router,
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef,
    public _http: HttpClient,
    public sanitizer: DomSanitizer,
    private _snackBar: MatSnackBar,
    private _elementRef: ElementRef,
    public observableService: ObservableserviceService,

  ) {
    this.stateGroups = this.searchListval;
    this.router.events.subscribe((event: Event) => {
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
    });



    // this.txtQueryChanged
    //         .debounceTime(1000) // wait 1 sec after the last event before emitting last event
    //         .distinctUntilChanged() // only emit if value is different from previous value
    //         .subscribe(model => {
    //           this.txtQuery = model;

    //           // Call your function which calls API or do anything you would like do after a lag of 1 sec
    //           this.getDataFromAPI(this.txtQuery);
    //          });

    this.subscriptions[this.subscriptioncount++] = this.txtQueryChanged
      .pipe(


        debounceTime(2500))
      .subscribe(() => {
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
        } else {
          //page count out of bound 
          this.pageChangeValue = this.limitcondval.pagecount;
        }
        console.log("first", this.pageChangeValue, "+++", this.pageCountArray.length);


      });


    this.subscriptions[this.subscriptioncount++] = this.limitChangrd
      .pipe(
        debounceTime(2500))
      .subscribe(() => {
        // this.searchResult$ = this.api.search(this.model);
        // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
        // this.filterautoval(this.currentautocompleteitem);
        console.log('pageChangeValue subscribed !! ', this.pageChangeValue, this.pageCountArray.length);
        if (this.pageChangeValue) {
          this.paging(this.pageChangeValue, '');
        } else {
          //page count out of bound 
          this.pageChangeValue = this.limitcondval.pagecount;
        }
      });



    this.subscriptions[this.subscriptioncount++] = this.modelChanged
      .pipe(
        debounceTime(1000))
      .subscribe(() => {
        // this.searchResult$ = this.api.search(this.model);
        // console.log('after debounce ', this.autosearchinput, this.currentautocompleteitem);
        this.filterautoval(this.currentautocompleteitem);
      });

    this.subscriptions[this.subscriptioncount++] = this.modelChangedserver
      .pipe(
        debounceTime(1000),
        // distinctUntilChanged() 
      )
      .subscribe(() => {
        // this.searchResult$ = this.api.search(this.model);
        // console.log('after debounce  server', this.autosearchinput, this.currentautocompleteitem);
        if (this.autosearchinput[this.currentautocompleteitem.field] != null && this.autosearchinput[this.currentautocompleteitem.field] != '') {
          // this.filterautoval(this.currentautocompleteitem);

          const link = this.apiurlval + '' + this.currentautocompleteitem.serversearchdata.endpoint;

          let source: any;

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
          this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
            let result: any = {};
            // console.log(res, 'result');
            this.loading = false;
            // return;
            result = res;
            // this.loading = false;
            if (result != null && result.results != null && result.results.res != null) this.rescount = result.results.res.length;
            if (result.res != null && result.res.length > 0) {
              // this.dataSource = new MatTableDataSource(result.results.res);
              this.currentautosearcharr = result.res;
              // autocomplete searching snakbar

              // this._snackBar.openFromComponent(SnackbarComponent, {
              //   duration: 2000,
              //   data: { errormessage: 'New Search of data loaded ' }
              // });
            } else {
              this.currentautosearcharr = [];

              // this._snackBar.openFromComponent(SnackbarComponent, {
              //   duration: 6000,
              //   data: { errormessage: 'No such search record found !!' }
              // });

            }

            this.loading = false;
            // this.dataSource.paginator = this.paginator;
            // this.dataSource.sort = this.sort;
          });

        }

      });




    /* this.myForm = this.fb.group({
       email: ['', Validators.compose([Validators.required, Validators.pattern(/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/)])],
       password: ['', Validators.required]
     });*/

  }
  /*@Directive({
    selector: '[Listing]'
  })*/
  status: boolean = false;
  clickEvent() {
    this.status = !this.status;
  }

  autocompletefunction(data: any) {
    this.currentautosearcharr = [];
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

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
  counter(i: number) {
    return new Array(i);
  }

  onFieldChange(query: string) {

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

  onFieldChangeforlimit(query: any) {

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

  inputblur(val: any) {
    // console.log('on blur .....');
    this.myForm.controls[val].markAsUntouched();
  }
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
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );

    /*const factory = this.resolver.resolveComponentFactory(
        componentMapper[this.field.type]
    );
    this.componentRef = this.container.createComponent(factory);
    this.componentRef.instance.field = this.field;
    this.componentRef.instance.group = this.group;
*/

    this.x = this.datasourceval;
    const x = this.x;
    if (this.datasourceval) this.rescount = this.datasourceval.length;

    let temp = [];
    const keys = x[0];
    temp = Object.keys(keys);    /*by Object.keys() we can find the fieldnames(or keys) in an object, i.e, in temp object field names are saved*/

    const coldef_list = [];
    const header_list = [];
    for (let i = 0; i < temp.length; i++) {
      coldef_list.push(temp[i].replace(/\s/g, '_'));      /*to replace spaces in field name by "_", we use "replace(/\s/g, "_")"*/
      header_list.push(temp[i]);
    }
    // coldef_list.push('Actions');
    // header_list.push('Actions')
    // console.log('coldef_list',coldef_list);
    // console.log('header_list',header_list);
    this.columns = [];

    for (let i = 0; i < coldef_list.length; i++) {
      const ff = `row.${coldef_list[i]}`;
      const tt = { columnDef: `${coldef_list[i]}`, header: `${header_list[i]}`, tooltip: `${header_list[i]}`, cell: (row) => eval(ff), objlength: header_list.length };
      // console.log('tt',tt);
      // console.log('tt.columnDef');
      // console.log(tt.columnDef);

      for (const b in this.modify_header_arrayval) {
        if (b == tt.header) { tt.header = this.modify_header_arrayval[b]; }
      }


      // header tooltip array
      if (this.libdataval.header_tooltip_array != null && typeof (this.libdataval.header_tooltip_array) != 'undefined') {
        for (const b in this.libdataval.header_tooltip_array) {
          if (b == tt.tooltip) { tt.tooltip = this.libdataval.header_tooltip_array[b]; }
        }
        // console.log(tt.tooltip, 'tt.tooltip =====+++++')
      }




      if (this.skipval.indexOf(tt.columnDef) == -1) {
        this.columns.push(tt);
      }
    }
    let displayedcols = [];
    this.tableflag = 1;
    setTimeout(() => {
      this.tableflag = 0;
    }, 100);

    displayedcols = this.columns.map(x => x.columnDef);
    if (this.libdataval.footersettings != null) {
      this.tableFooterColumns = this.libdataval.footersettings.map(x => x.key)
    }



    else this.tableFooterColumns = [];

    let customcols: any = [];
    // console.log('displayedcols',displayedcols);
    if (this.libdataval != null && this.libdataval.tableheaders != null) {
      customcols = this.libdataval.tableheaders;
    }
    if (customcols != null && customcols.length > 0) {
      let ccolval: string = '';
      for (const v in customcols) {
        if (displayedcols.includes(customcols[v]) == false) {
          for (const b in this.modify_header_arrayval) {
            if (b == customcols[v]) { ccolval = this.modify_header_arrayval[b]; }
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
      this.columns.push({ columnDef: 'select', header: 'select', cell: 'NA' });       /*adds select column in table by unshift function*/
    }
    let tempcolarr = [];
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
    setTimeout(() => {

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
          let ind: any = 0;
          ind = parseInt(i);
          if (this.search_settingsval.buttonsearch[i].values != null && this.search_settingsval.buttonsearch[i].values != '') {
            this.initiateSearch = true;
            this.buttonSearchData.push({ field: this.search_settingsval.buttonsearch[i].field, key: ind, value: this.search_settingsval.buttonsearch[i].values })
          }
        }
      }

      if (this.initiateSearch == true) {
        this.allSearch();
      }
    }, 1000);
  }




  // Custom Filter new
  CustomButtonListen(val: any) {
    // allSearchCond
    // console.log(this.search_settingsval.search, 'this.allSearchCond')

    this.onLiblistingButtonChange.emit(
      {
        action: 'customlistenbutton', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, searchdata: this.search_settingsval, buttondata: val, allSearchCond: this.allSearchCond, autoSearchVal: this.autosearch, buttonSearchData: this.buttonSearchData
      }
    )
    // var data:any={
    //   limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected,search:this.search_settingsval,buttonVal:val
    // }
    // console.log(data,'data++++===',val)
  }


  /**image view modal */
  img_modal_view(img: any) {
    // console.warn("img_modal_view",img)
    const dialogRef = this.dialog.open(ImageView, {
      // panelClass: 'custom-modalbox-image-preview',
      panelClass: ['custom-modalbox', 'custom-modalbox-image-preview'],
      height: 'auto',
      data: { alldata: img }
    });
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit() ...');
  }
  ngAfterViewInit() {

    // console.log('ngAfterViewInit called ... ');
    setTimeout(() => {
      if (this.libdataval != null && this.libdataval.cssoverridesoncelltorow != null) {
        for (const e in this.libdataval.cssoverridesoncelltorow) {

          const cred = this.upTo(this._elementRef.nativeElement.querySelector('.' + this.libdataval.cssoverridesoncelltorow[e].key), 'tr');
          if (cred != null) cred.classList.add(this.libdataval.cssoverridesoncelltorow[e].val);
          // const cred = this._elementRef.nativeElement.querySelector('.cred').parent().parent().parent().parent().addClass('credtr');
          // console.log(cred, 'cred', e);
        }
      }

    }, 2000);
  }

  // Search Bar Toggle
  SearchBarToggle(flag) {
    this.onLiblistingButtonChange.emit(
      {
        action: 'searchbar', flag: flag
      }
    )
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
  ngAfterContentChecked() {

    // console.log('ngAfterContentChecked called ...');

  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  clickmultipleselectoption(vals) {
    this.onLiblistingChange.emit({ action: 'multipleselectoptionclick', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected, btndata: vals });

  }

  onSubmit() {
    let x: any;
    this.errormg = '';
    const data = this.myForm.value;
    for (x in this.myForm.controls) {
      this.myForm.controls[x].markAsTouched();
    }
  }



  dateSearch(val: any, item: any) {
    this.searchstrsarr.push({ val: this.tsearch[val], label: item.label, key: val });
    // console.log("start date");

    // console.log(this.start_date);
    // console.log(this.end_date);

    // let sd = moment(this.start_date).unix();
    // let ed = moment(this.end_date).unix();

    const link = this.apiurlval + '' + this.datacollectionval;
    const link1 = this.apiurlval + '' + this.datacollectionval + '-count';

    let source: any;
    let condition: any;
    const textSearch: any = {};
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

      const autosearch: any = {};
      // this.autosearch;
      for (const b in this.autosearch) {
        for (const m in this.autosearch[b]) {
          const tv: any = {};
          tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
          if (autosearch.$or == null) { autosearch.$or = []; }
          // console.log(autosearch.$and,'autosearch.$or 1')
          autosearch.$or.push(tv);
        }
      }

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
      this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        let result: any = {};
        result = res;
        if (result.results.res != null && result.results.res.length > 0) {
          this.dataSource = new MatTableDataSource(result.results.res);
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 2000,
            data: { errormessage: 'New Search of data loaded' }
          });
        } else {

          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'No such search record found !!' }
          });

        }
        this.loading = false;
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });

      this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(res => {
        let result: any = {};
        result = res;
        this.date_search_source_countval = (result.count);
        if (result.count == 0) { this.tableflag = 1; } else { this.tableflag = 0; }
        // console.log('count',result);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });

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
    } else {
      console.log('error');
    }
  }



  selectSearch(value: any, type: any, statusval: any) {

    console.log(value, 'value', type, 'type', statusval, 'statusval')

    // let link = this.apiurlval + '' + this.date_search_endpointval;
    // let source: any;
    // let condition: any = {};
    this.searchstrsarr[type.field] = ({ val: statusval.name, label: type.label, key: type.field });
    console.log("this.searchstrsarr[type.field]", this.searchstrsarr[type.field]);

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
    const link = this.apiurlval + '' + this.date_search_endpointval;
    let source: any;
    let condition: any;
    condition = {};
    condition[type.field] = value;
    // this.selectSearch_condition = {};
    this.selectSearch_condition[type.field] = value;
    console.log('selectSearch ', this.selectSearch_condition);
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

  paging(val: any, flag: any) {
    // const lval: any = this.limitcondval;
    console.log(val, 'paging val');
    this.selectedItem = val;

    if (this.limitcondval.pagecount == null) this.limitcondval.pagecount = 1;
    if (this.limitcondval.limit == null) this.limitcondval.limit = 10;
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

    let maxpagecount: number = Number(this.date_search_source_countval / (this.limitcondval.limit));
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
    const textSearch: any = {};

    console.log('this.limitcondval, in paging ', this.limitcondval);


    for (const i in this.tsearch) {
      if (this.tsearch[i].toString().toLowerCase() != null && this.tsearch[i].toString().toLowerCase() != '') {
        textSearch[i] = { $regex: this.tsearch[i].toString().toLowerCase() };
      }
    }


    const autosearch: any = {};
    // this.autosearch;
    for (const b in this.autosearch) {
      for (const m in this.autosearch[b]) {
        const tv: any = {};
        tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
        // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
        if (autosearch.$or == null) { autosearch.$or = []; }
        // console.log(autosearch.$and,'autosearch.$or 2')

        autosearch.$or.push(tv);
      }
    }

    const conditionobj = Object.assign({}, textSearch, this.dateSearch_condition, autosearch, this.selectSearch_condition, this.libdataval.basecondition);
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
    const link = this.apiurlval + '' + this.datacollectionval;
    /*let data:any={
      "condition":{
        limit:this.limitcondval.limit,
        skip:this.limitcondval.skip
      }

    }*/
    this.newpagingcountFlag = false;
    this.loading = true;

    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
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
        setTimeout(() => {
          document.getElementById(this.libdataval.containerid).scrollIntoView({ behavior: "smooth" });
        }, 100);

        this.dataSource = new MatTableDataSource(this.result.results.res);
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 2000,
          data: { errormessage: 'New range of data loaded' }
        });

        // this.oldlimitrange.skip = this.limitcondval.skip;
        // this.oldlimitrange.limit = this.limitcondval.limit;
        // this.oldlimitrange.pagecount = this.limitcondval.pagecount;
        // console.log('this.oldlimitrange after ', this.oldlimitrange);
      } else {
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

    });
    this.selection.clear();
  }

  addautosearchdata(val: any) {
    // console.log('v',val);

  }
  remove(val: any, i: any, field: any) {

    if (this.autosearch[field] != null) { this.autosearch[field].splice(i, 1); }
  }


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


  filterautoval(data: any) {
    // console.log('filterautoval', data, this.autosearchinput[data.field]);
    const autoselval = this.autosearchinput[data.field];
    this.currentautosearcharr = [];
    if (this.autosearchinput[data.field] != null && this.autosearchinput[data.field] != '') {
      const filterval = data.values.filter(function (e) {
        // console.log('e', e, fieldval)
        return e.name.toString().toLowerCase().includes(autoselval.toLowerCase());
      });
      this.currentautosearcharr = filterval;
    }
  }
  resetautocomp(val: any) {
    const el: any = document.querySelector('#autocompletesearch' + val.field);
    el.value = '';
  }
  autosearchfunction(value: any, data: any, item: any) {
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
    const el: any = document.querySelector('#autocompletesearch' + value);
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


  textsearchfunction(value: any, item: any) {
    if (this.tsearch[value] == '') {
      const index = this.searchstrsarr.indexOf(this.searchstrsarr[value]);
      // console.log(index, 'index');
      delete this.searchstrsarr[value];
      // if (index > -1) {
      // this.searchstrsarr.splice(value, 1);
      // }
    } else
      this.searchstrsarr[value] = ({ val: this.tsearch[value], label: item.label, key: value });
    // console.log('textsearchfunction', value, item, this.searchstrsarr);
    const link = this.apiurlval + '' + this.date_search_endpointval;
    let source: any;
    const condition: any = {};
    let val = '';
    if (this.tsearch != null && this.tsearch[value] != null) {
      val = this.tsearch[value].toString().toLowerCase();
    }

    if (this.tsearch[value] != null && this.tsearch[value].length > 1 && { $or: [this.tsearch[value].toString().toLowerCase(), this.tsearch[value].toUpperCase()] }) { condition[value + '_regex'] = val; }
    this.textSearch_condition = {};
    this.textSearch_condition = condition;
    // console.warn(this.tsearch);
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
  refreshalldata(val: any) {
    this.dataSource = new MatTableDataSource(this.olddata);
    this.selection = new SelectionModel(true, []);
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;

    if (val.filteredData != null && val.filteredData.length < this.olddata.length) {
      const dialogRef = this.dialog.open(Confirmdialog, {
        panelClass: ['custom-modalbox', 'refreshdata'],
        data: { message: 'Refresh successfully!!', isconfirmation: false }
      });
    } else {
      const dialogRef = this.dialog.open(Confirmdialog, {
        // panelClass: 'custom-modalbox',
        panelClass: ['custom-modalbox', 'refreshdata'],
        data: { message: ' Updated!!', isconfirmation: false }
      });
    }

  }



  private _filter(value: string): string[] {
    const filterValue = value.toString().toLowerCase();

    return this.searchListval.filter(option => option.toString().toLowerCase().includes(filterValue));
  }

  getstatus(val: any) {
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
  pdfFlag(val: any) {
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
  grapurl(val: any) {
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

  copyText(row: any, val: string) {

    const fullurl = val + '' + row;
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

  openinternallink(val: any) {
    this.router.navigate([val.route]);
  }


  openinternallinkwithparam(val: any, data: any) {
    const rdata: any = [];
    rdata.push(val.route);
    for (const v in val.param) {
      rdata.push(data[val.param[v]]);
    }
    // console.log('radat', rdata);
    this.router.navigate(rdata);
  }

  opencustombuttonactionlocaldata(val: any, data: any) {
    // console.log('opencustombuttonactionlocaldata',val,data);
    const dataarr = [];
    // dataarr.push(['name','debasis']);
    // dataarr.push(['desc','test']);
    if (val.refreshdata != null && val.refreshdata == true) {
      this.allSearch();
    }
    for (const v in val.datafields) {
      const temparr = [];
      temparr.push(val.datafields[v]);
      if (val.datafields[v] != 'image' && val.datafields[v] != 'video') {
        // console.log('ss',val.datafields[v]);
        if (data[val.datafields[v]] != null && typeof (data[val.datafields[v]]) != 'object') {
          // console.log('df', data[val.datafields[v]].toString());
          if (data[val.datafields[v]] != null && data[val.datafields[v]].toString().includes('iframe')) {
            // console.log('in safe', data[val.datafields[v]]);
            temparr.push(this.sanitizer.bypassSecurityTrustHtml(data[val.datafields[v]]));
          } else {
            temparr.push((data[val.datafields[v]]));
          }
        } else {
          // console.log('ss22',val.datafields[v]);
          // else
          temparr.push(data[val.datafields[v]]);
        }
      }
      if (val.datafields[v] == 'image') { temparr.push('<img mat-card-image src=' + data[val.datafields[v]] + ' > <br/>'); }
      if (val.datafields[v] == 'video') {
        if (data[val.datafields[v]] != null && data[val.datafields[v]] != '') {
          let temphtml: any = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + data[val.datafields[v]] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
          temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
          temparr.push(temphtml);
          // console.log('thtml', temphtml, data[val.datafields], data[val.datafields[v]]);
        } else {
          temparr.push('N/A');
        }
      }

      // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
      dataarr.push(temparr);
    }
    // console.log('local data m', dataarr);
    let res: any = dataarr;

    if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
      const resdata: any = [];
      for (const b in res) {
        for (const c in this.libdataval.detailview_override) {
          // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
          if (this.libdataval.detailview_override[c].key == res[b][0]) {
            // console.log('h', c, this.libdataval.detailview_override[c]);
            resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
          }
        }
        if (resdata[b] == null) { resdata[b] = res[b]; }

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
    const dialogRef = this.dialog.open(Confirmdialog, {
      height: 'auto',
      panelClass: ['custom-modalbox-apidata', 'modal-localdata'],
      data: { isconfirmation: false, data: res }
    });
  }


  opencustombuttonactionapidata(val: any, data: any) {
    // console.log('opencustombuttonactionapidata',val,data);
    this.loading = true;
    const link: any = this.apiurlval + val.endpoint;
    const source: any = {};
    source[val.param] = data._id;
    if (val.otherparam != null) {
      for (const n in val.otherparam) {
        source[val.otherparam[n]] = data[val.otherparam[n]];
      }
    }
    this.loaderrow = data._id;
    this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == 'success') {

        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 3000,
          data: { errormessage: result.msg }
        });

        // console.log('res',result);
        let resdata: any = {};
        this.loaderrow = null;
        this.loading = false;
        if (result.res[0] != null) {
          resdata = result.res[0];
        } else {
          resdata = result.res;
        }
        const temprdata: any = {};
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

        let dataarr = [];
        // dataarr.push(['name','debasis']);
        // dataarr.push(['desc','test']);
        for (const v in resdata) {
          const temparr = [];
          temparr.push(v);
          if (v != 'image' && v != 'video') {
            if (resdata[v] != null && typeof (resdata[v]) != 'object') {
              // console.log('resv', resdata[v]);
              if (resdata[v].toString().includes('iframe')) {
                temparr.push(this.sanitizer.bypassSecurityTrustHtml(resdata[v]));
              } else { temparr.push(resdata[v]); }
            } else { temparr.push(resdata[v]); }
          }
          if (v == 'image') { temparr.push('<img mat-card-image src=' + resdata[v] + ' > <br/>'); }
          if (v == 'video') {
            let temphtml: any = ('<iframe width=560 height=315 src=https://www.youtube.com/embed/' + resdata[v] + ' frameborder=0 allow=accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture allowfullscreen></iframe> <br/>');
            temphtml = this.sanitizer.bypassSecurityTrustHtml(temphtml);
            temparr.push(temphtml);
          }
          // if(val.datafields[v]=='video') temparr.push("<img mat-card-image src=" + data[val.datafields[v]] + " > <br/>")
          dataarr.push(temparr);

        }
        if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
          const resdata: any = [];
          for (const b in dataarr) {
            for (const c in this.libdataval.detailview_override) {
              // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
              if (this.libdataval.detailview_override[c].key == dataarr[b][0]) {
                // console.log('h', c, this.libdataval.detailview_override[c]);
                resdata[b] = [this.libdataval.detailview_override[c].val, dataarr[b][1], dataarr[b][0]];
              }
            }
            if (resdata[b] == null) { resdata[b] = dataarr[b]; }

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

    }, error => {
      // console.log('Oooops!');
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 6000,
        data: { errormessage: 'Something Went Wrong ,Try Again!!' }
      });
      this.loading = false;
    });
    return;

  }


  openextlinkwithparam(val: any, data: any) {
    // console.log('val',val,data);
    let qtext: any = '';
    let fulllink: any = '';
    fulllink = val.link;
    if (val.paramtype == null) {
      for (const v in val.param) {
        qtext = val.param[v].q + '=' + encodeURI(data[val.param[v].key]);
        // console.log('qtext',qtext);
        if (parseInt(v) == 0) { fulllink = fulllink + '?' + qtext; }
        if (parseInt(v) != 0) { fulllink = fulllink + '&' + qtext; }
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
    setTimeout(() => {
      // console.log("Hello from setTimeout");
      // console.log('link',fulllink,data,qtext);
    }, 10);

    window.open(fulllink, '_blank');
  }


  clickurl(val: any, url: any) {
    const link = url + '' + val._id + '' + this.pdf_link_val;
    window.open(link, '_blank');
  }


  /** Whether the number of selected elements matches the total number of rows. */
  checkedlist() {
    // this.selection.isSelected(row);
    setTimeout(() => {
      const seldata: any = this.selection.selected.map(x => x._id)
      // console.log('checkedlist', this.dataSource.data.length, this.selection.selected.length, this.selection.selected, seldata);
      this.onLiblistingChange.emit({ action: 'multipleselectionchange', limitdata: this.limitcondval, sortdata: this.sortdataval, selecteddata: this.selection.selected });
    }, 100);


  }
  isAllSelected() {
    // console.log('isAllSelected');
    if (this.selection != null && this.selection.select) {
      // console.log('isAllSelected', this.dataSource.data.length, this.selection.selected.length, this.selection.selected);
      const numSelected = this.selection.selected.length;
      const numRows = this.dataSource.data.length;
      return numSelected === numRows;
    }
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
    this.checkedlist();
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  createData(point: any) {
    const data = {};
    Object.keys(point).forEach(function (key) {
      data[key.replace(/\s/g, '_')] = point[key];
    });
    return data;
  }

  applyFilter(filterValue: string) {
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
  /**show video modal on click of thamnail function by sourav */
  fetchvideo(videodata: any) {
    // console.warn('videodata',videodata);
    const dialogRef = this.dialog.open(VideoPlayer, {
      panelClass: ['custom-modalbox-videoplayer-preview', 'video-modal'],
      height: 'auto',
      data: { previewData: videodata }
    });
  }
  opennotes(val: any) {
    this.loading = true;
    this.loaderrow = val._id;
    this._apiService.postSearch(this.apiurlval + this.libdataval.notes.listendpoint, this.jwttokenval, { id: val._id }).subscribe(res => {
      let result: any = {};
      result = res;
      // console.log(result.res, 'list notes');
      this.loading = false;
      this.loaderrow = null;
      // console.log('count',result);
      // this.dataSource.paginator = this.paginator;
      // this.dataSource.sort = this.sort;
      // this.data.notesval = '';
      // console.log('notes', val);
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
      dialogRef.afterClosed().subscribe(result => {
        this.keepPagination = 1;
        this.allSearch();
      });
    });

  }

  viewdata(data1: any) {
    // console.log('data1 ++++++++', data1)
    let data: any;
    data = data1;
    const data2: any = [];
    let headerData: any = {};

    if (this.libdataval.preview_header != null && this.libdataval.preview_header.header != null && this.libdataval.preview_header.header != '') {
      // console.log('== ++++++++', this.libdataval.preview_header)
      headerData = this.libdataval.preview_header;
    }

    for (const key in data) {
      const flagk: any = '';
      if (data.hasOwnProperty(key)) {
        if (typeof (data[key]) == 'boolean') {
          if (data[key] == true) { data[key] = 'Yes'; }
          if (data[key] == false) { data[key] = 'No'; }
        }
        if (key == 'image') {
          data[key + ':'] = '<img mat-card-image src=' + data[key] + '><br/>';

        }

        if (typeof (data[key]) == 'object') {

        }


        if (typeof (data[key]) == 'object') {
          const tempdata: any = [];
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
    let res = Object.entries(data2);
    // console.log('view data',res);
    if (this.libdataval.detailview_override != null && this.libdataval.detailview_override.length > 0) {
      const resdata: any = [];
      for (const b in res) {
        for (const c in this.libdataval.detailview_override) {
          // console.log('hww',c,this.libdataval.detailview_override[c].key,res[b],res[b][0],res[b][1]);
          if (this.libdataval.detailview_override[c].key == res[b][0]) {
            // console.log('h', c, this.libdataval.detailview_override[c]);
            resdata[b] = [this.libdataval.detailview_override[c].val, res[b][1], res[b][0]];
          }
        }
        if (resdata[b] == null) { resdata[b] = res[b]; }
      }
      // console.log('c',res,resdata);
      res = resdata;
      // console.log('c',res,resdata);
    }
    const dialogRef = this.dialog.open(Confirmdialog, {
      height: 'auto',
      autoFocus: false,
      maxHeight: '1000vh',
      panelClass: ['custom-modalbox', 'detail-view'],
      data: { isconfirmation: false, data: res, headerData: headerData }
    });

  }
  // parent-bottom-class
  managestatus(data: any) {
    const bs = this.bottomSheet.open(BottomSheet, { panelClass: ['custom-bottomsheet', 'parent-bottom-class'], data: { items: this.statusarrval } });

    this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe(result => {
      if (result != null) {
        data.status = result.val;
        data.id = data._id;
        this.subscriptions[this.subscriptioncount++] = this._apiService.togglestatus(this.apiurlval + this.libdataval.updateendpoint, data, this.jwttokenval, this.sourcedataval).subscribe(res => {
          let result: any = {};
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

        }, error => {
          // console.log('Oooops!');
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Something Went Wrong ,Try Again!!' }
          });
        });
      }
      // this.animal = result;
    });

  }

  // for tree view in modal
  custombuttonlistner(row: any, custombutton: any) {
    // console.log('custombuttonlistner', row, custombutton);
    this.onLiblistingChange.emit({
      action: 'custombuttonclick', limitdata: this.limitcondval, sortdata: this.sortdataval, custombuttonclick: {
        data: row, btninfo: custombutton
      }
    });
  }


  custombuttonfunc(data: any) {
    // console.log('data');
    // console.log(data);    // row data
    // console.log(this.custombuttonval);    // object from where the library has been used
    let unsafeurl: any = this.custombuttonval.url;   // iframe url
    for (const b in this.custombuttonval.fields) {
      unsafeurl = unsafeurl + '/' + data[this.custombuttonval.fields[b]];
    }
    unsafeurl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);   // for sanitizing the url for security, otherwise it won't be able to show the page in iframe, hence modal

    const dialogRef = this.dialog.open(Confirmdialog, {       // for opening the modal
      height: 'auto',
      panelClass: 'custom-data-modal',
      data: { isconfirmation: false, data: [{ data, customdata: unsafeurl }] }
    });


  }



  managestatusmultiple() {
    const ids: any = [];
    let c: any;
    for (c in this.selection.selected) {

      ids.push(this.selection.selected[c]._id);
    }
    // console.log('data');
    // console.log(data);
    const bs = this.bottomSheet.open(BottomSheet, { data: { items: this.statusarrval } });

    this.subscriptions[this.subscriptioncount++] = bs.afterDismissed().subscribe(result => {

      if (result != null) {
        // data.status = result.val;
        // data.id = data._id;
        const newstatus: any = result.val;
        this.subscriptions[this.subscriptioncount++] = this._apiService.togglestatusmany(this.apiurlval + this.libdataval.updateendpointmany, ids, result.val, this.jwttokenval, this.sourcedataval).subscribe(res => {
          let result: any = {};
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

            const dialogRef = this.dialog.open(Confirmdialog, {
              panelClass: ['custom-modalbox', 'toogle-many'],
              data: { message: 'Status updated successfully!!', isconfirmation: false }
            });

          }

        }, error => {
          // console.log('Oooops!');
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Something Went Wrong ,Try Again!!' }
          });
        });
      }
      // this.animal = result;
    });

  }

  deletemultiple() {
    const dialogRef = this.dialog.open(Confirmdialog, {
      panelClass: ['custom-modalbox', 'delete-multiple'],
      data: {
        message: 'Are you sure you want to delete these records? This process can not be undone.',
        type: 'confirm'
      }
    });
    const ids: any = [];
    let c: any;
    for (c in this.selection.selected) {

      ids.push(this.selection.selected[c]._id);
    }

    dialogRef.afterClosed().subscribe(result => {

      if (result == 'yes') {
        this.subscriptions[this.subscriptioncount++] = this._apiService.deteManyData(this.apiurlval + this.libdataval.deleteendpointmany, ids, this.jwttokenval, this.sourcedataval).subscribe(res => {
          let result: any = {};
          result = res;
          if (result.status == 'success') {
            for (const c in ids) {
              this.olddata = this.olddata.filter(olddata => olddata._id != ids[c]);
            }
            this.dataSource = new MatTableDataSource(this.olddata);
            this.selection = new SelectionModel(true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.allSearch();
            this.onLiblistingChange.emit({ action: 'multipledelete', limitdata: this.limitcondval, sortdata: this.sortdataval });

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

        }, error => {
          // console.log('Oooops!');
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Something Went Wrong ,Try Again!!' }
          });
        });

      }
      // this.animal = result;
    });
  }


  deletedata(data: any) {
    // console.log(data);
    // alert(5);
    // this._apiService.deteOneData(this.apiurlval+this.deleteendpointval,data,this.jwttokenval);
    // console.log('data 889 ---');
    // console.log(data);
    // console.log('jwttokenval');
    // console.log(this.jwttokenval);


    const dialogRef = this.dialog.open(Confirmdialog, {
      panelClass: ['custom-modalbox', 'delete-single'],
      height: 'auto',
      data: {
        message: 'Are you sure you want to delete this record? This process can not be undone.',
        type: 'confirm'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result == 'yes') {
        this.subscriptions[this.subscriptioncount++] = this._apiService.deteOneData(this.apiurlval + this.deleteendpointval, data, this.jwttokenval, this.sourcedataval).subscribe(res => {
          let result: any = {};
          result = res;
          if (result.status == 'success') {
            this.olddata = this.olddata.filter(olddata => olddata._id != data._id);
            this.dataSource = new MatTableDataSource(this.olddata);
            this.selection = new SelectionModel(true, []);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
            this.allSearch();
            this.onLiblistingChange.emit({ action: 'delete', limitdata: this.limitcondval, sortdata: this.sortdataval });
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

        }, error => {
          // console.log('Oooops!');
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Something Went Wrong ,Try Again!!' }
          });
        });

      }
      // this.animal = result;
    });

  }

  editdata(data: any) {
    this.router.navigate([this.editrouteval, data._id]);
  }


  sorttable(field: any, type: any) {
    // console.log(field, type)
    this.sortdataval.field = field;
    this.sortdataval.type = type;
    this.allSearch();
  }



  allSearch() {
    // console.log("hit limitcondval",this.allpaginationpostData);
    // console.log("hit limitcondval",this.limitcondval);
    // console.log('this.keepPagination first',this.keepPagination);

    // return;

    const link = this.apiurlval + '' + this.datacollectionval;
    const link1 = this.apiurlval + '' + this.datacollectionval + '-count';
    let source: any;
    let condition: any;
    const textSearch: any = {};
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

    let autosearch: any = {};

    // this.autosearch;
    for (const b in this.autosearch) {
      let tempautosearch: any = {};

      for (const m in this.autosearch[b]) {

        const tv: any = {};
        tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
        // tv[b] = this.autosearch[b][m].val.toString().toLowerCase();
        if (tempautosearch.$or == null) { tempautosearch.$or = []; }
        // console.log(autosearch.$and,'autosearch.$and 3')
        // autosearch.$or.push(tv);

        tempautosearch.$or.push(tv);

      }
      if (autosearch.$and == null) { autosearch.$and = []; }
      autosearch.$and.push(tempautosearch);

      // autosearch = Object.assign({},tempautosearch,autosearch);
      let autocount: any;
      if (Object.keys(autosearch).length == null || typeof Object.keys(autosearch).length == 'undefined') {
        autocount = 0;
      } else {
        autocount = Object.keys(autosearch).length;
      }
      // console.log(autocount, 'autosearch.length++++', tempautosearch,Object.keys(autosearch).length,Object.keys(autosearch))

      // autosearch[autocount] = tempautosearch;

    }



    // console.log('autos qq++', autosearch, this.autosearch);


    // button Search Data

    const buttonsearch: any = {};
    for (let bs in this.buttonSearchData) {
      for (const k in this.buttonSearchData[bs].value) {
        const bt: any = {};
        bt[this.buttonSearchData[bs].field] = this.buttonSearchData[bs].value[k].val.toString().toLowerCase();
        if (buttonsearch.$or == null) { buttonsearch.$or = []; }
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

    } else {
      this.limitcondval.pagecount = 1;
      this.limitcondval.skip = 0;
      this.oldlimitrange = this.limitcondval;
    }
    let conditionobj: object = {};

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
    } else {
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

    } else {
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

      this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link, this.jwttokenval, source).subscribe(res => {
        let result: any = {};
        result = res;
        console.log("count log++", this.newcurrentpagingVal);
        console.log("pageCountArray log++", this.pageCountArray);

        this.pageCountArray = new Array(Math.ceil(this.date_search_source_countval / this.limitcondval.limit));
        this.lastpageCountArray = Math.ceil(this.date_search_source_countval / this.limitcondval.limit);

        if (result.results.res != null && result.results.res.length > 0) {
          this.onLiblistingChange.emit(
            {
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
        } else {
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
      });

      this.subscriptions[this.subscriptioncount++] = this._apiService.postSearch(link1, this.jwttokenval, source).subscribe(res => {
        let result: any = {};
        console.log("count log++", this.newcurrentpagingVal);
        this.pageCountArray = new Array(Math.ceil(this.date_search_source_countval / this.limitcondval.limit));
        this.lastpageCountArray = Math.ceil(this.date_search_source_countval / this.limitcondval.limit);
        result = res;
        this.date_search_source_countval = (result.count);
        if (result.count == 0) { this.tableflag = 1; } else { this.tableflag = 0; }
        // console.log('count',result);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;
      });
    }

    this.initiateSearch = false;
  }

  gettypeof(val: any) {
    return typeof (val);
  }


  // open Bottom Sheet For Search
  openBottomSheetForSearch(data: any, index) {
    var count = 1;
    // console.log(data, 'openBottomSheetForSearch', index)
    const bs = this.dialog.open(ModalForButtomSearch, { panelClass: 'button-search-modal', data: { items: data } });
    bs.disableClose = true;
    bs.afterClosed().subscribe(result => {
      // console.log(result, 'result++++==== data', data)
      if (result != null && result.flag == 'yes') {
        count = 1;
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
            } else {
              count = 0
            }
          }
          // console.log(count, 'count else check')

          // console.log(this.buttonSearchData, 'buttonSearchData 2')

          if (count == 0) {
            this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
            searchFlag = 1;
          }
        } else {
          this.buttonSearchData.push({ value: result.selectedData, key: index, field: result.items.field });
          searchFlag = 1;
        }

        // console.log(searchFlag, 'searchFlag 1')

        if (searchFlag == 1) {
          // console.log(searchFlag, 'searchFlag 2')
          this.allSearch();
        }


      }
    })
  }


  // clear Button Search Chips  data
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
  artistxpPreview(singleData: any) {
    const link = 'http://developmentapi.audiodeadline.com:3090/' + 'datalist';
    /******* not completed ******/
    const data: any = { source: 'blockchainuser_view', condition: { posts_id_object: singleData._id }, token: this.jwttokenval };
    /******** not completed *****/
    this.subscriptions[this.subscriptioncount++] = this._apiService.postData(link, data).subscribe(response => {
      const restlt: any = response;
      /* open dialog */
      const dialogRef = this.dialog.open(Confirmdialog, {
        panelClass: ['custom-modalbox', 'delete-axp'],
        height: 'auto',
        data: { preview: true, previewData: restlt }
      });
    });
  }
  /* artistxp preview button click function end */
}


@Component({
  selector: 'confirmdialog',
  templateUrl: 'confirm-dialog.html',
})
export class Confirmdialog {

  constructor(
    public _apiService: ApiService,
    // public notesval:any=null,
    public dialogRef: MatDialogRef<Confirmdialog>,
    @Inject(MAT_DIALOG_DATA) public data: any, public sanitizer: DomSanitizer, public dialog: MatDialog) {
    // console.log('lib data in modal ', this.data, this.data, this.data.rowdata, this.data.rowdata.blogtitle);
    this.data.color = 'primary';
    this.data.mode = 'indeterminate';
    this.data.loadervalue = 50;
    this.data.bufferValue = 76;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  deletenote(index: any) {
    // console.log('log', this.data);
    // if (this.data.notesval != null && this.data.notesval != '') {
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
    dialogRef.afterClosed().subscribe(result => {
      // console.log("result",result);
      if (typeof result != 'undefined' && typeof (result.response) != "undefined" && result.response != "") {
        const source: any = {

          id: this.data.rowdata._id,
          index
          // note: this.data.notesval,
          // user: this.data.notedata.user,
        };
        this.data.loading1 = index;
        this._apiService.postSearch(this.data.apiurl + this.data.notedata.deleteendpoint, this.data.jwttokenval, source).subscribe(res => {
          let result: any = {};
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

        });
      }
    });

    // }
  }
  addnotes() {
    // console.log('log', this.data);
    if (this.data.notesval != null && this.data.notesval != '') {
      const source: any = {

        id: this.data.rowdata._id,
        note: this.data.notesval,
        user: this.data.notedata.user,
      };
      this.data.loading = true;
      this._apiService.postSearch(this.data.apiurl + this.data.notedata.addendpoint, this.data.jwttokenval, source).subscribe(res => {
        let result: any = {};
        result = res;
        // console.log(result, 'add notes');
        if (result.status == 'success') {
          if (this.data.listdata == null) { this.data.listdata = []; }
          this.data.listdata.unshift({ _id: this.data.rowdata._id, notes: { userid: this.data.notedata.user, note: this.data.notesval, user: this.data.notedata.currentuserfullname, created_date: Date.now() } });
          this.data.notesval = '';
          this.data.loading = null;
        }
        // console.log('count',this.data.listdata);
        // this.dataSource.paginator = this.paginator;
        // this.dataSource.sort = this.sort;

      });
    } else {
      // console.log('blank notes');
      this.data._snackBar.openFromComponent(SnackbarComponent, {
        duration: 2000,
        data: { errormessage: 'Notes can\'t be blank !! ' }
      });
    }
  }

  gettypeof(val: any) {
    return typeof (val);
  }
  sanitizeUrl(unsafeurl: any, data: any, rowdata: any) {
    for (const b in data) {
      unsafeurl = unsafeurl + '/' + rowdata[data[b]];

    }
    return this.sanitizer.bypassSecurityTrustResourceUrl(unsafeurl);
  }
}

// delete notes confirmation modal
@Component({
  selector: 'deletenotesConfirmationModal',
  templateUrl: 'deletenotesConfirmationModal.html',
})
export class DeleteNotesModal {
  constructor(public dialogRef: MatDialogRef<DeleteNotesModal>, @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.warn("bottom-sheet",data);
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  responseFunction(value: any) {
    this.dialogRef.close({ response: value });
  }


}


@Component({
  selector: 'bottom-sheet',
  templateUrl: 'bottom-sheet.html',
})
export class BottomSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheet>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    // console.warn("bottom-sheet",data);
  }

  openLink(val: any): void {
    this.bottomSheetRef.dismiss(val);
  }
}


@Component({
  selector: 'button-search-modal',
  templateUrl: 'button-search-modal.html',
})
export class ModalForButtomSearch {

  public buttonSearchData: any = {};
  public selectedData: any = [];
  public searchVal: any = '';
  public allButtonData: any = [];
  public loading_flag: boolean = false;
  public errmsg: any = '';
  public matChipData: any = []
    ;
  public matAutosearchData: any = [];



  constructor(private bnottoRef: MatDialogRef<ModalForButtomSearch>, @Inject(MAT_DIALOG_DATA) public data: any, public apiService: ApiService) {
    // console.log("bottom-sheet-search", data);
    this.buttonSearchData = {};
    this.buttonSearchData = data;
    this.allButtonData = data.items.value;
  }

  chooseChipItem(data, i) {
    // console.log(data, '??data')
    this.selectedData.push(data);
    this.buttonSearchData.items.value.splice(i, 1);
  }

  // submit 
  searchByItem() {
    // console.log(this.selectedData)
    this.data.flag = 'yes';
    this.data.selectedData = this.selectedData;
    // this.searchVal = '';
    // this.buttonSearchData.items.value = [];
    this.bnottoRef.close(this.data);
  }

  remove(val, i) {
    this.selectedData.splice(i, 1);
    this.buttonSearchData.items.value.push(val);
  }

  reset() {
    this.searchVal = '';
    this.buttonSearchData.items.value = [];
    this.buttonSearchData.items.value = this.allButtonData;

  }

  searchByKeyword(value) {

    if (this.searchVal != null && this.searchVal != '') {
      this.loading_flag = true;
      let link: any = this.buttonSearchData.items.serversearchdata.url + this.buttonSearchData.items.serversearchdata.endpoint;
      let data: any = {
        "search_str": value,
        "limit": 50
      }

      this.apiService.postSearch1(link, data).subscribe(res => {
        // console.log(data)
        let result: any = res;

        if (result.status == 'success') {
          // this.buttonSearchData.items.value = [];

          this.loading_flag = false;

          result = result.res.slice(0, 50);
          // this.buttonSearchData.items.value = result;
          // console.log(result, 'result', this.loading_flag)
          this.matAutosearchData = result;
        }
      })
    } else {
      this.errmsg = "Please Enter Keywords";
    }
  }

  close() {
    this.data.flag = 'no';
    this.bnottoRef.close(this.data);

  }


}



/**listing video player */
@Component({
  selector: 'videoplayer',
  templateUrl: 'videoplayer.html',
})
export class VideoPlayer {

  constructor(
    public dialogRef: MatDialogRef<VideoPlayer>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.warn('videoplayerModal',data.previewData.video);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

/**listing Image View */
@Component({
  selector: 'image',
  templateUrl: 'img_modal_view.html',
})
export class ImageView {

  // public data:any;
  constructor(
    public dialogRef: MatDialogRef<ImageView>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    // console.warn('ImageViewModal', data);
  }
  addnotes() {
    // console.log('log', this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  selector: 'snack-bar-component-example-snack',
  templateUrl: 'snack-bar-component-example-snack.html',
  styles: [`
    .example-pizza-party {
      color: hotpink;
    }
  `],
})
export class SnackbarComponent {
  constructor(
    public snackBarRef: MatSnackBarRef<SnackbarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: any
  ) {
    // console.log('snack',this.data);
  }
}
