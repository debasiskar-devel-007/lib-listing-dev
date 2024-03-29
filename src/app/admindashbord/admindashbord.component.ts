import { Component, OnInit, ViewChild, Inject } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../api.service";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../field.interface";
import { Subscription } from "rxjs";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import * as data from "../../assets/translet_json_dev/transletlanguagedata.json";
import { CookieService } from "ngx-cookie-service";
// import example from '../../assets/translet_json_dev/languagetranslet.json';

declare var moment: any;

export interface DialogData {
  data: any;
  flag: any;
  externaldatavalue: any;
  name: any;
  value: any;
}

@Component({
  selector: "app-admindashbord",
  templateUrl: "./admindashbord.component.html",
  styleUrls: ["./admindashbord.component.css"],
})
export class AdmindashbordComponent implements OnInit {
  public languageSelection: any = [
    { value: "en", viewValue: "en" },
    { value: "es", viewValue: "es" },
    { value: "fr", viewValue: "fr" },
  ];
  componentRef: any;
  datasource: any;
  public transletlanguageDataset: any;
  public setconvertToLanguage: any = "";
  status_gretterthan_zero: any;
  pendingapplication_view: any;
  joquuserlist: any;
  custombutton: any = {
    label: "my tree",
    fields: ["type", "name", "_id"],
    url: "http://localhost:4200/affiliate-tree",
  };
  placeholder: any = ["placeholder"];
  type: any = ["text"];
  name: any = ["Username"];

  public externaldatavalue: any = [
    {
      name: "externalmodaldata",
      value: [{ key: "companyName", val: "ss" }],
    },
  ];

  public minDate = new Date(2020, 8, 24);
  public maxDate = new Date(2020, 8, 31);

  public fieldEmailNumber: number = 0;

  public totalRecordFound: number = 30;
  // use for Download the PDF
  public urlforlist: any =
    "https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/";
  // public urlforlist: any = "https://17nrap7g07.execute-api.us-east-1.amazonaws.com/dev/api/";
  custom_link: any = [
    {
      label: "shatterblok",
      url: "http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=",
      action: "null",
    },
    {
      label: "Audiodateline",
      url: "http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=",
      action: "null",
    },
  ];

  public ckeConfig: any = {
    toolbar: [
      { name: "editing", items: ["Scayt", "Find", "Replace", "SelectAll"] },
      {
        name: "clipboard",
        items: [
          "Cut",
          "Copy",
          "Paste",
          "PasteText",
          "PasteFromWord",
          "-",
          "Undo",
          "Redo",
        ],
      },
      { name: "links", items: ["Link", "Unlink", "Anchor"] },
      {
        name: "tools",
        items: ["Maximize", "ShowBlocks", "Preview", "Print", "Templates"],
      },
      { name: "document", items: ["Source"] },
      {
        name: "insert",
        items: [
          "Image",
          "Table",
          "HorizontalRule",
          "SpecialChar",
          "Iframe",
          "imageExplorer",
        ],
      },
      "/",
      {
        name: "basicstyles",
        items: [
          "Bold",
          "Italic",
          "Underline",
          "Strike",
          "Subscript",
          "Superscript",
          "-",
          "RemoveFormat",
        ],
      },
      {
        name: "paragraph",
        items: [
          "NumberedList",
          "BulletedList",
          "-",
          "Outdent",
          "Indent",
          "CreateDiv",
          "-",
          "Blockquote",
        ],
      },
      {
        name: "justify",
        items: ["JustifyLeft", "JustifyCenter", "JustifyRight", "JustifyBlock"],
      },
      {
        name: "styles",
        items: ["Styles", "Format", "FontSize", "-", "TextColor", "BGColor"],
      },
    ],
  };

  // use for grab the link
  grab_link: any = {
    colom_name: [
      {
        col_name: "author",
        field_name: "author",
      },
    ],
    field: [
      {
        label: "shatterblok grab url",
        url: "artixtxp.com/",
        action: "null",
      },
    ],
  };

  pendingmodelapplicationarray: any = [];

  public status: any = [
    { val: 1, name: "Active" },
    { val: 0, name: "Inactive" },
  ];

  // use for status search

  statusarray: any = [
    { val: 1, name: "Approve" },
    { val: 4, name: "Decline" },
    { val: 3, name: "Lock" },
  ];

  // use for ststic email search
  //  Example like this
  emailarray: any = [
    { val: "sourotest222@gmail.com", name: "sourotest222@gmail.com" },
    { val: "octtest@yopmail.com", name: "octtest@yopmail.com" },
    { val: "septest@yopmail.com", name: "septest@yopmail.com" },
  ];

  // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },

  //  Example like this
  editroute: any = "editroute";
  // use for Table Header modification

  // Like Table head name is " firstname" => "First Name"
  modify_header_array: any = {
    fullname: "Name",
    phone: "Phone",
    email: "Email",
    status: "Status",
    user_type_txt: "Type",
    logincounts: "Login Count",
    createdon_datetime: "Joined On",
  };

  // use for Table Header Skip
  pendingmodelapplicationarray_skip: any = [
    "_id",
    "video_thamnail",
    "type",
    "password",
    "blogs_image",
    "created_at",
  ];

  // use for Table Detail Field Skip
  pendingmodelapplicationarray_detail_skip: any = [
    "_id",
    "email",
    "name",
    "blogtitle",
    "Blogs image",
  ];

  // use for Table Detail inside the modal image path
  pendingmodelapplicationarray_detail_datatype: any = [
    {
      key: "images",
      value: "image",
      fileurl: "http://18.222.26.198/upload/brandimages/", // Image path
    },
  ];

  // updateendpoint is use for data update endpoint
  updateendpoint = "addorupdatedata";

  // deleteendpoint is use for data delete endpoint
  deleteendpoint = "deletesingledata";

  // this is a database collection name
  tablename = "users";

  // searchendpoint is use for data search endpoint
  searchendpoint = "datalist";

  // use for click to another page routing path
  click_to_add_ananother_page = "/adminlist";

  // date_search_endpoint is use for date search endpoint
  date_search_endpoint: any = "datalist";
  // send basic limit data
  limitcond: any = {
    limit: 10,
    skip: 0,
    // "AUth": 1
  };
  libdata: any = {
    basecondition: "",
    updateendpoint: "api/statusupdate",
    notes: {
      label: "Notes",
      addendpoint: "api/addnotedata",
      deleteendpoint: "api/deletenotedata",
      listendpoint: "api/listnotedata",
      user: "test",
      currentuserfullname: " ",
      header: "fullname",
      imagedata: {
        label: "You can upload a maximum of 50 (Fifty) Reports at a time.",
        name: "upload_file",
        type: "file",
        multiple: true,
        prefix: Date.now(),
        path: "training/",
        baseurl: "training/",
        bucket: "pece-training-files",
        apiurl:
          "https://57lsaxmih2.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
        apideleteurl:
          "https://57lsaxmih2.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
        validations: [{ rule: "required", message: "File  required !!" }],
      },
    },
    updateendpointmany: "api/statusupdate",
    deleteendpointmany: "api/deletesingledata",
    custombuttons: [
      {
        label: "Add Tech",
        route: "admin/tech/add",
        type: "internallink",
        // cond:'status',
        // condval:0,
        param: ["_id", "parent_type", "parent_id"],
      },
      {
        label: "Add Biller",
        route: "admin/biller/add",
        type: "internallink",
        // cond:'status',
        // condval:0,
        param: ["_id", "parent_type", "parent_id"],
      },

      {
        label: "Add Scheduling Manager",
        route: "admin/doctor-office-management/add",
        type: "internallink",
        cond: "isScheduler",
        condval: 1,
        param: ["_id", "parent_type", "parent_id"],
      },
      {
        label: "Add Doctor",
        route: "admin/doctor/add",
        type: "internallink",
        // cond:'status',
        // condval:0,
        param: ["_id", "parent_type", "parent_id"],
      },
      {
        label: "Add Nurse Practitioner",
        route: "admin/nurse-practitioner/add",
        type: "internallink",
        cond: "status",
        condval: 0,
        param: ["_id", "parent_type", "parent_id"],
      },
      {
        label: "Log Me now",
        type: "listner",
        id: "ilogme-1",
        class: "lme2 lmr4",
        cond: "status",
        condval: 1,
      },
      {
        label: "Add Physician Assistant",
        route: "admin/physician-assistant/add",
        type: "internallink",
        cond: "status",
        class: "logme-class",
        condval: 0,
        param: ["_id", "parent_type", "parent_id"],
      },
      // { label: "Switch Interface", type: 'listner', id: 'i1' },
    ],
    // hideeditbutton:false,// all these button options are optional not mandatory
    // hidedeletebutton:false,
    // hideviewbutton:false,
    // hidestatustogglebutton:false,
    hideaction: false,
    tableheaders: [
      "video",
      "question",
      "category_name",
      "priority",
      "status",
      "userrole",
      "createdon_datetime",
    ],
    // custombuttons: [{label: "Log Me",type: 'listner',id: 'i1'}]
    detailview_override: [
      { key: "practice_info", val: "Practice Info" },
      { key: "location_details", val: "Location Details" },
      { key: "cost_per_test", val: "Cost Per Test" },
      { key: "ein_number", val: "EIN Number" },
      // { key: "created_date", val: "Date Added only" },
      // { key: "descriptionb", val: "Blog Dc" },
      // { key: "blogtitleb", val: "Blog T1" },
    ],
  };
  public patient_libdata: any = {
    basecondition: { status: { $in: [17] } },
    updateendpoint: "api/status-update-single",
    updateendpointmany: "api/status-update-admin-",
    // notes: {
    //   label: "Add Notes",
    //   addendpoint: "addnotedata",
    //   deleteendpoint: "deletenotedata",
    //   listendpoint: "api/listnotedata",
    //   user: "",
    //   tooltip: 'Add Notes',
    //   currentuserfullname: "",
    //   header: 'patient_name',
    // },
    customselectbuttons: [
      {
        label: "Status Update",
        id: "customselid1",
      },
    ],
    custombuttons: [
      {
        label: "View Report",
        type: "listner",
        id: "view_report",
        tooltip: "View Report",
      },
      {
        label: "Others Action",
        type: "listner",
        id: "a2",
        tooltip: "Other Actions",
      },
    ],
    hideeditbutton: true,
    hidedeletebutton: true,
    hidestatustogglebutton: true,
    hidedeletemany: false,
    hidemultipleselectbutton: false,
    hideupdatemany: true,
    hideviewbutton: true,
    hideaction: false,
    // searchBarFlagVal: true,
    recordfoundflag: true,
    recordfounddata: "",
    tableheaders: ["practicename", "coloredstatus", "created_at_datetime"],
    hidestatustoggle: {
      flag: true,
      cond: "viewdetailsFlag",
      condval: 1,
      tooltip: "toggle status",
    },
    preview_header: {
      header: "Preview Data for Details",
      class: "preheadercls",
    },
  };
  // other data
  // libdata: any = {
  //     // basecondition: { blogtitle: { $regex: 'ying' } },
  //     footersettings: [
  //         { key: 'f0', data: '', colspan: 4 },
  //         { key: 'f5', data: 'SubTotal', colspan: 2 },
  //         { key: 'f6', data: '829', colspan: 2 },
  //         { key: 'f1', data: 'Total', colspan: 2 },
  //         { key: 'f2', data: '89', colspan: 2 },
  //         { key: 'f3', data: 'F3 Data', colspan: 1 },
  //         { key: 'f4', data: 'F4 Data', colspan: 5 },
  //         // { key: 'f5', data: 'F5 Data', colspan: 1 },
  //         // { key: 'f6', data: 'F6 Data', colspan: 1 },
  //     ],
  //     cssoverridesoncelltorow: [
  //         { key: 'cred', val: 'credtr' },
  //         { key: 'cblack', val: 'cblacktr' },
  //         { key: 'cgrey', val: 'cgreytr' },
  //         { key: 'cgreen', val: 'cgreentr' },
  //         { key: 'cblue', val: 'cbluetr' }
  //     ],
  //     detailview_override: [
  //         { key: "tags_array", val: "Tags" },
  //         { key: "author", val: "Written By" },
  //         { key: "blogtitle", val: "Title" },
  //         { key: "created_datetime", val: "Date Added with time" },
  //         { key: "created_date", val: "Date Added only" },
  //         { key: "descriptionb", val: "Blog Dc" },
  //         { key: "blogtitleb", val: "Blog T1" },
  //     ], // optional

  //     updateendpoint: 'statusupdate',
  //     notes: {
  //         label: "Blog Notes",
  //         addendpoint: "addnotedata",
  //         deleteendpoint: "deletenotedata",
  //         listendpoint: "listnotedata",
  //         user: "5e0c80cd3a339a042de8717d",
  //         currentuserfullname: "Debasis 8 ",
  //         header: 'blogtitle',
  //         tooltip: 'Notes'
  //     },
  //     updateendpointmany: 'updateendpointmany',
  //     deleteendpointmany: 'deleteendpointmany',
  //     // hideeditbutton: true,// all these button options are optional not mandatory
  //     // hidedeletebutton: true,
  //     //hideviewbutton:false,
  //     hidestatustogglebutton: false,

  //     hidestatustoggle: {
  //         flag: true,
  //         cond: 'statusval',
  //         condval: 1,
  //         tooltip: 'toggle status'
  //     },

  //     hidemultipleselectbutton: null,
  //     hidecounter: null,
  //     // hidedeletemany: true,
  //     // hideupdatemany: false,
  //     hideaction: null,
  //     // actioncolname: 'Actn',

  //     searchBarFlagVal: true,

  //     recordfoundflag: true,
  //     selectPagingflag: true,    /*this flag is used for pagination in drop down format*/
  //     addlanguagedataEndpoint:'translatedataadd',
  //     pages: [
  //         {val: 50, name: '50'},
  //         {val: 100, name: '100'},
  //         {val: 150, name: '150'},
  //         {val: 200, name: '200'},
  //         {val: 250, name: '250'},
  //         {val: 300, name: '300'},
  //         {val: 350, name: '350'},
  //         {val: 400, name: '400'},
  //         {val: 450, name: '450'},
  //         {val: 500, name: '500'},
  //       ],
  //     recordfounddata: '',

  //     resettable: false,

  //     tableheaders:  ['fullname','email','phone','status','user_type_txt','logincounts','createdon_datetime'],

  //     header_tooltip_array: {
  //         "description_html": "Desc Tooltip new",
  //         'firstname': "First Name",
  //         'email': 'Email Id',
  //         'lastname': 'Last Name',
  //         'name': "Full Name",
  //         'blogtitle': "Blog Title 9 Tooltip",
  //         "created_date": "Dated Added",
  //         "created_datetime": "Created Date with Time 111",
  //         "author": "Author <br/> Name Tooltip",
  //         "priority": "Priority of B Tooltip",
  //         "status": "Active ?",
  //         'wrongone': 'Wrong O 1',
  //         'coloredstatus': 'Colored Status'
  //     },

  //     preview_header: {
  //         header: "Preview Data for Details",
  //         class: 'preheadercls'
  //     },

  //     customselectbuttons: [
  //         {
  //             label: "Custom option 1",
  //             id: 'customselid1',
  //             tooltip:"Custom option 1"
  //         },
  //         {
  //             label: "Custom option 2",
  //             id: 'customselid1',
  //             tooltip:"Custom option 2"
  //         }
  //     ],
  //     custombuttons: [
  //         {
  //             label: "fb search with blog title",
  //             link: "https://www.facebook.com/search/top/",
  //             type: 'externallink',
  //             param: [{ key: 'blogtitle', q: 'q' }],
  //             tooltip: 'listner 1234',
  //             classname: 'fbcls'

  //         },
  //         {
  //             label: "Custom B Listner",
  //             type: 'listner',
  //             id: 'i1',
  //             cond: 'status',
  //             condval: 1,
  //             tooltip: 'listner 1234',
  //             classname: 'listencls'
  //         },
  //         {
  //             label: "G search with blog title ACtive",
  //             link: "https://www.google.com/search",
  //             type: 'externallink',
  //             param: [{ key: 'blogtitle', q: 'q' }, { key: 'author', q: 'oq' }],
  //             cond: 'status',
  //             condval: 1,
  //             tooltip: 'listner 1234 44 externallink'
  //         },
  //         {
  //             label: "mask blog",
  //             link: "https://mask-blog1.influxiq.com/blog-details",
  //             type: 'externallink',
  //             paramtype: 'angular',
  //             param: ['blogtitle', '_id'],
  //             cond: 'status',
  //             condval: 0,
  //             tooltip: 'listner 1234'
  //         },
  //         {
  //             label: "downLoad Pdf",
  //             link: "https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/html-pdf/report",
  //             type: 'externallink',
  //             paramtype: 'angular',
  //             param: ['_id'],
  //             //cond:'status',
  //             // condval: 0
  //         },
  //         {
  //             label: "fb profile",
  //             link: "https://www.facebook.com/debasiskar007",
  //             type: 'externallink',
  //             tooltip: 'listner 1234'
  //         },
  //         {
  //             label: "fb profile for inactive",
  //             link: "https://www.facebook.com/debasiskar007",
  //             type: 'externallink',
  //             cond: 'status',
  //             condval: 0
  //         },
  //         {
  //             label: "fb profile for active",
  //             link: "https://www.facebook.com/debasiskar007",
  //             type: 'externallink',
  //             cond: 'status',
  //             condval: 1
  //         },
  //         {
  //             label: "see brand",
  //             route: "brand",
  //             type: 'internallink',
  //             cond: 'status',
  //             condval: 0
  //         },
  //         {
  //             label: "delete",
  //             toggle: "delete",
  //             type: 'internallink',
  //         },
  //         {
  //             label: "see brand with param",
  //             route: "admin/brand",
  //             type: 'internallink',
  //             //cond:'status',
  //             //condval:0,
  //             param: ['blogtitle', '_id'],
  //         },
  //         {
  //             label: "Desc from data",
  //             type: 'action',
  //             datatype: 'local',
  //             datafields: ['created_date', 'description', 'author', 'blogtitle', 'tags_array', 'image', 'video_array', 'created_datetime', 'image_array', 'video', 'img_array', 'vd_array'],
  //             headermessage: 'Local Info',
  //             // cond:'status',
  //             // condval:0
  //         },
  //         {
  //             label: "Desc from api data",
  //             type: 'action',
  //             datatype: 'api',
  //             endpoint: 'getblogdatabyid',
  //             otherparam: [],
  //             //cond:'status',
  //             //condval:0,
  //             param: 'blog_id',
  //             datafields: ['blogtitleb', 'descriptionb'],
  //             // refreshdata: true,
  //             headermessage: 'Api Info',
  //             tooltip: 'listner 1234',
  //             classname: 'desccls'
  //         }
  //     ]
  // }

  // send basic sort data
  sortdata: any = {
    type: "desc",
    field: "priority",
    options: ["priority", "author", "category", "blogtitle"],
  };

  // this is a database collection or view name
  date_search_source: any = "admin_blog_list";
  // datacollection
  // datacollection: any = 'getadminbloglistdata';
  datacollection: any = "getdata";
  //source count
  date_search_source_count: any = 0;

  // this is use for  All type of search
  authval: any = [
    {
      _id: "5dc54c9764f5cdfcff5f8a76",
      val: "CAR BUYING ADVICE",
      name: "A",
    },
    {
      _id: "5dc54cbc64f5cd7b9b5f8a77",
      val: "COMPARISON",
      name: "B",
    },
    {
      _id: "5dc54cd364f5cd70245f8a78",
      val: "FOREIGN MAKES",
      name: "C",
    },
    {
      _id: "5dc54d2f64f5cd087e5f8a79",
      val: "MISCELLANEOUS",
      name: "D",
    },
  ];
  // search_settings: any = {

  //     datesearch: [{
  //         startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search", field: "createdon_datetime",
  //         // value: {$gte: 1622358040000, $lte: 1622962799000}
  //     }],   // this is use for  date search

  //     selectsearch: [
  //         // { label: 'Search By Status', field: 'status', values: this.status },
  //         {
  //             label: 'Search By Status', field: 'status',
  //             //  values: this.status, value: 1
  //         },
  //         // { label: 'select search author', field: 'author_search', values: this.authval, value: 'NDdevUM' },
  //     ], // this is use for  select search

  //     // textsearch: [{ label: "Search By Title", field: 'blogtitle_search' }],
  //     textsearch: [{
  //         label: "Search By Title", field: 'blogtitle_search',
  //         //  value: "Test t"
  //     }],
  //     // { label: "Search by auther", field: "author_search", value: "AUth" }],  // this is use for  text search

  //     search: [{
  //         label: "Search By Author Dynamic ", field: 'author_search',
  //         values: this.authval,
  //         serversearchdata: { endpoint: 'exitsing-list-author' },
  //         // value: [{ val: 'jessica', name: 'jessica' }]
  //     },
  //     {
  //         label: "Search By Author Dynamic multiple ", field: 'author_search_name',
  //         values: this.authval,
  //         serversearchdata: { endpoint: 'exitsing-list-author' },
  //         // value: [{ val: 'jessica', name: 'jessica' }, { val: "justin", name: "justin" }]
  //     }],     // this is use for  Autocomplete search

  //     // buttonsearch: [{
  //     //     label: "Search By Author", field: 'author_search_title',
  //     //     // values: [],
  //     //     serversearchdata: { endpoint: 'exitsing-list-billable-entity-search', url: 'https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api/' },
  //     //     // value: [{ _id: "5eb928576428d6099992d25c", val: "5eb928576428d6099992d25c", name: "Joella Messier(doctor)", name_search: "joella messier(doctor)" }]
  //     // },
  //     // {
  //     //     label: "Search By Name ", field: 'author_search_name',
  //     //     // values: [{ _id: "5eb928576428d6099992d25c", val: "5eb928576428d6099992d25c", name: "Joella Messier(doctor)", name_search: "joella messier(doctor)" }],
  //     //     serversearchdata: { endpoint: 'exitsing-list-billable-entity-search', url: 'https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api/' },
  //     //     // value: [{ _id: "5eb928576428d6099992d25c", val: "5eb928576428d6099992d25c", name: "Joella Messier(doctor)", name_search: "joella messier(doctor)" }]
  //     // },
  //     // {
  //     //     label: "Search By doctor ", field: 'author_search_doctor',
  //     //     // values: [{ _id: "5eb928576428d6099992d25c", val: "5eb928576428d6099992d25c", name: "Joella Messier(doctor)", name_search: "joella messier(doctor)" }],
  //     //     serversearchdata: { endpoint: 'exitsing-list-billable-entity-search', url: 'https://wfr9bu9th2.execute-api.us-east-1.amazonaws.com/dev/api/' },
  //     //     // value: [{ _id: "5eb928576428d6099992d25c", val: "5eb928576428d6099992d25c", name: "Joella Messier(doctor)", name_search: "joella messier(doctor)" }]
  //     // }
  //     // ]
  // };

  // this is search block
  // name: "Justin"
  public typeval: any = [
    { val: "admin", name: "Admin" },
    { val: "doctor", name: "Doctor" },
    { val: "doctor_assistant", name: "Doctor Assistant" },
    { val: "patient", name: "Patient" },
  ];
  // val: "justin"
  public userType: any = [
    { val: "admin", name: "Admin" },
    { val: "diagnostic_admin", name: "Diagnostic Admin" },
    { val: "distributors", name: "Distributors" },
    { val: "doctor", name: "Doctor" },
    { val: "doctor-group", name: "Doctor Group" },
    { val: "master-distributors", name: "Master Distributors" },
    { val: "nurse_practitioner", name: "Nurse Practitioner" },
    { val: "physician_assistant", name: "Physician Assistant" },
    { val: "practice", name: "Practice" },
    { val: "sales_person", name: "Sales Person" },
    { val: "scheduling_manager", name: "Scheduling Manager" },
    { val: "sub-distributors", name: "Sub Distributors" },
    { val: "tech", name: "Technician" },
  ];
  // search_settings = {
  //     datesearch:[{startdatelabel:"Joined On Start Date",enddatelabel:"Joined On End Date",submit:"Search",  field:"createdon_datetime"}],
  //     selectsearch:[{ label: 'Search By Status', field: 'status', values: this.status },{ label: 'Search By User Type', field: 'user_type', values: this.userType }],
  //     textsearch: [{label: 'Search By Name', field: 'fullname_s'},{label: 'Search By Email', field: 'email_s'},{label: 'Search By Parent Name', field: 'parentname'},{label: 'Search By Practice', field: 'practicename'}]
  //   };
  //
  // ,value:{$gte: 1629763210000, $lte: 1630022290000}
  search_settings: any = {
    datesearch: [
      {
        startdatelabel: "Joined On Start Date",
        enddatelabel: "Joined On End Date",
        submit: "Search",
        field: "created_at_datetime",
      },
    ],

    textsearch: [
      { label: "Search By Keyword", field: "keyword_search" },
      // {label: 'Search By Category', field: 'category_search'},
      // {label: 'Search By Author', field: 'authorEditor_search'},
      // {label: 'Search By Publisher', field: 'publisher_search'},
    ], // this is use for  Autocomplete search

    search: [
      {
        label: "Search By Title",
        field: "title_search",
        values: "",
        serversearchdata: { endpoint: "titleautocompletesearch" },
      },
      {
        label: "Search By Category",
        field: "category_search",
        values: "",
        serversearchdata: { endpoint: "categoryautocompletesearch" },
      },
      {
        label: "Search By Publisher",
        field: "publisher_search",
        values: "",
        serversearchdata: { endpoint: "bookpublisherautocompletesearch" },
      },
      {
        label: "Search By Author",
        field: "authorEditor_search",
        values: "",
        serversearchdata: { endpoint: "authorautocompletesearch" },
      },
    ],
    selectsearch: [
      {
        label: "Search By category",
        field: "report_file_type",
        values: this.status,
        multiple: true,
      },
      {
        label: "Search By Type",
        field: "type",
        values: this.typeval,
        // value: "",
        multiple: true,
      },
    ],
  };
  brandarray: any = [];
  notpendingapplication_view: any = [];
  adminlist: any = [];

  editroute1: any = "modeledit";

  status_gretterthan_zero_skip: any = [
    "_id",
    "username",
    "phone",
    "city",
    "state",
    "ethnicity",
    "height",
    "haircolor",
    "eyecolor",
    "weight",
    "bust",
    "waist",
    "hips",
    "slim",
    "toned",
    "tattoos",
    "athletic",
    "piercings",
    "retail",
    "voluptuous",
    "promotions",
    "sales",
    "descriptionbox",
    "facebooklink",
    "twitterlink",
    "instagramlink",
    "modelmayhemlink",
    "type",
    "images",
  ];
  status_gretterthan_zero_modify_header: any = {
    dateformat: "Date",
    status: "Status",
    email: "Email",
    name: "Full Name",
    bodytype: "Bodytype",
    "shatterblok agreement date": "Shatterblok Agreement Date",
    "audiodeadline agreement date": "Audiodeadline Agreement Date",
  };
  status_gretterthan_zero_detail_skip: any = [
    "_id",
    "email",
    "name",
    "type",
    "status",
  ];
  status_gretterthan_zero_detail_datatype: any = [
    { key: "images", value: "image", fileurl: this._apiService.uplodeimg_url },
  ];

  // editroute:any = [{val: 1, name:"hi"}];
  //everything we need for formlibconfiguration

  emailregex: RegExp =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

  temtdata: any = "";
  // formdata
  formfieldrefresh: boolean = false;
  updatetable: boolean = false;
  formfieldrefreshdata: any = null;
  formdata: any = {
    successmessage: "Added Successfully !!",
    submittext: "Rush Now",
    canceltext: "Cancel Now",
    resettext: "reset This",
    redirectpath: "/admindashbord1",
    submitactive: true, //optional, default true
    apiUrl: "http://localhost:3000/api/",
    endpoint: "addformdata",
    jwttoken: this._apiService.jwttoken,
    secret: "nmjnwn22ssdd",
    groups: ["grp1", "grp2", "grp3"],
    //hidereset:true,
    //hidecancel:true,
    cancelroute: "/brand",

    custombuttons: [
      {
        name: "save",
        label: "Save Data",
        class: "savecls",
        type: "button",
        tooltip: "save",
      },
      {
        name: "save_form_data",
        label: "Save Value",
        class: "savecls",
        type: "button",
        tooltip: "save",
      },
    ],

    fields: [
      {
        label: "Hour",
        name: "hour",
        value: "",
        max: 23,
        group: "grp1",
        type: "number",
        validations: [{ rule: "required", message: "Hour is Required" }],
      },
      {
        heading: "This is Name Header <h1> Fill the form Up !! </h1>",
        label: "Name",
        name: "fullname",
        group: "grp2",
        value: "Test N",
        type: "text",
        disabled: true,
        // validations: [
        //     { rule: 'required' },
        //     { rule: 'maxLength', value: 10 },
        //     { rule: 'minLength', value: 2 }
        // ],
        prefix: "http://google.com/",
        suffix: "PM",
        customheadingflag: true,
        customheadingtitle: "Manage Custom Section",
        custombuttonflag: true,
      },
      {
        label: "Description",
        name: "desc-1",
        type: "textarea",
        group: "grp1",
        rows: 1,
        cols: 2,
        value: "This test  desc!! test-1 ",
        hint: "Desc .... ",
        // validations: [
        //     { rule: 'required', message: "desc field Needs to be required" },
        // ]
      },
      {
        label: "Description",
        name: "desc",
        type: "textarea",
        rows: 5,
        cols: 70,
        value: "This test  desc!!",
        hint: "Desc .... ",
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" },
        // ]
      },
      {
        label: "Description",
        name: "desc2",
        type: "textarea",
        // rows:5,
        // cols:70,
        value: "This test  desc 2 !!",
        hint: "Desc .... ",
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" },
        // ]
      },
      {
        label: "Description 1",
        name: "desc1",
        type: "textarea",
        rows: 25,
        cols: 200,
        value: "This test  desc 1 !!",
        hint: "Desc .... ",
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" },
        // ]
      },
      {
        label: "Description Field",
        name: "htmldesc",
        type: "editor",
        value: "This test html <b>ff</b> !!",
        hint: "Desc .... ",
        // validations: [
        //     { rule: 'required', message: "Html Desc field Needs to be required" },
        // ]
        ckeConfig: this.ckeConfig,
      },

      {
        label: "Email",
        name: "email",
        type: "email",
        hint: "abc@gmail.com",
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" },
        //     { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }
        // ]
        custombuttonflag: true,
      },
      {
        label: "Image Choice",
        name: "imagechoice",
        type: "image",
        hint: "Choose an Img",
        val: [
          {
            key: 1,
            image: "https://www.generatormix.com/images/cartoon/baloo.jpg",
          },
          {
            key: 2,
            image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
          },
          {
            key: 3,
            image:
              "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640",
          },
        ],
        // validations: [
        //     { rule: 'required', message: "Image field Needs to be required" }
        // ]
      },
      {
        label: "Image Choice 2",
        name: "imagechoice2",
        type: "image",
        hint: "Choose an Img 2",
        value: 2,
        val: [
          {
            key: 1,
            image: "https://www.generatormix.com/images/cartoon/baloo.jpg",
          },
          {
            key: 2,
            image: "https://www.computerhope.com/jargon/r/random-dice.jpg",
          },
          {
            key: 3,
            image:
              "https://cdn140.picsart.com/301791105082201.jpg?type=webp&to=min&r=640",
          },
        ],
        // validations: [
        //     { rule: 'required', message: "Image field Needs to be required" }
        // ]
      },
      {
        label: "DOB",
        name: "dob",
        type: "date",
        value: new Date().toISOString(),
        hint: "05/05/2020",
        minDate: new Date(),
        maxDate: new Date(2024, 8, 31),
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" }
        // ]
      },
      {
        label: "DOJ",
        name: "doj",
        type: "date",
        value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
        hint: "05/05/2020",
        // validations: [
        //     { rule: 'required', message: "Email field Needs to be required" }
        // ]
      },
      // {
      //     label: "Password",
      //     name: "password",
      //     type: 'password',
      //     hint: "******",
      //     passwordflag: true,
      //     value: '',
      //     // validations: [
      //     //     { rule: 'required', message: "Password field Needs to be required" },
      //     //     { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
      //     // ]
      // },
      // {
      //     label: "Confirm Password",
      //     name: "confirmpassword",
      //     type: 'password',
      //     passwordflag: false,
      //     hint: "******",
      //     // validations: [
      //     //     { rule: 'required', message: "Confirm Password field Needs to be required" },
      //     //     { rule: 'match', message: "Confirm Password field Needs to  match Password" },
      //     //     //{rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
      //     // ],
      //     customheadingflag: true,
      //     customheadingtitle: 'Custom Section New'

      // },
      // {
      //     label: "Age",
      //     name: "age",
      //     type: 'number',
      //     hint: 'dddd',
      //     value:25
      //     // validations: [
      //     //     { rule: 'required' },
      //     //     { rule: 'min', value: 5 },
      //     //     { rule: 'max', value: 50, message: "Age can't be more than 50 " }
      //     // ]
      // },
      // {
      //     label: "Formating Phone Number",
      //     name: "phone_format",
      //     type: 'numberformat',
      //     // value: "(877) 737-8152",
      //      hint: 'dddd',
      //     formatflag:true,
      //     validations: [
      //         { rule: 'required',message: "Formating Phone Number is required " },
      //          { rule: 'min', value: 14 ,message: "Formating Phone Number min 10"},
      //     ]
      // },
      // {
      //     label: "Status disabled",
      //     name: "status2",
      //     hint: ',0000',
      //     type: 'select',
      //     val: this.status,
      //     disabled: true,
      //     // value: 1,
      //     //value: '',
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"
      // },
      // {
      //     heading: "This is Heading For group 1",
      //     name: "statusgroup",
      //     hint: ',0000',
      //     type: 'group',
      //     fields: [
      //         {
      //             label: "Age1",
      //             name: "age1",
      //             type: 'number',
      //             hint: 'Age ??',
      //             // validations: [
      //             //     { rule: 'required' },
      //             //     { rule: 'min', value: 5 },
      //             //     { rule: 'max', value: 50, message: "Age can't be more than 50 " }
      //             // ]
      //         },
      //         {
      //             label: "DOJ1",
      //             name: "doj1",
      //             type: 'date',
      //             value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
      //             hint: "05/05/2020",
      //             // validations: [
      //             //     { rule: 'required', message: "Email field Needs to be required" }
      //             // ]
      //         },
      //         {
      //             label: "Description1",
      //             name: "desc1",
      //             type: 'textarea',
      //             value: "This test  1!!",
      //             hint: "Desc ....1 ",
      //             // validations: [
      //             //     { rule: 'required', message: "Email field Needs to be required" },
      //             // ]
      //         },
      //     ]
      // },
      // {
      //     label: "Status after gRP ",
      //     name: "status",
      //     hint: ',0000',
      //     type: 'select',
      //     val: this.status,
      //     // value:1,
      //     //value: '',
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"
      // },
      // {
      //     label: "Year",
      //     name: "year",
      //     hint: ',0000',
      //     type: 'select',
      //     val: [
      //         { val: 2020, name: 2020 },
      //         { val: 2021, name: 2021 },
      //         { val: 2022, name: 2022 },
      //         { val: 2023, name: 2023 },
      //         { val: 2024, name: 2024 },
      //         { val: 2025, name: 2025 }

      //     ],
      //     // value:[2021,2022],
      //     multiple: true,
      //     //value: '',
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"
      // },
      // {
      //     label: "Married ",
      //     heading: " radio Married <br/> <div>dfr</div>  <br/> <img src=https://www.w3schools.com/html/img_girl.jpg alt=Girl in a jacket width=500 height=600 > ",
      //     name: "married",
      //     hint: 'Yes/No',
      //     type: 'radio',
      //     val: [{ key: 0, val: 'Yes' }, { key: 1, val: 'No' }, { key: 3, val: 'Separated' }, { key: 4, val: 'Widow' }],
      //     value: 4,
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit ",
      //     name: "lastvisit",
      //     hint: 'In months',
      //     type: 'checkbox',
      //     multiple: true,
      //     val: [{ key: 0, val: 'Less than 1' }, { key: 1, val: 'less than 3' }, { key: 2, val: 'less than 6' }, { key: 3, val: 'less than 12' }],
      //     value: [3, 0],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit update after ",
      //     name: "lastvisitupdateafter",
      //     hint: 'In months',
      //     type: 'checkbox',
      //     multiple: true,
      //     val: [{ key: 0, val: 'Less than 1c' }, { key: 1, val: 'less than 3v' }, { key: 2, val: 'less than 6c' }, { key: 3, val: 'less than 12c' }],
      //     // value: [3, 0],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit Auto multi selected  -- 1 edit example",
      //     name: "lastvisita",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     multiple: true,
      //     val: [
      //         { key: 0, val: ' its Less than 1' },
      //         { key: 1, val: ' its less than 3' },
      //         { key: 2, val: 'its less than 6' },
      //         { key: 4, val: 'its less than 4' },
      //         { key: 5, val: 'its less than 5' },
      //         { key: 7, val: 'its less than 7' },
      //         { key: 8, val: 'its less than 8' },
      //         { key: 3, val: 'its less than 12' }
      //     ],
      //     value: [3, 0, 2],
      //     validations: [
      //         { rule: 'required' }
      //     ]
      // },
      // {
      //     label: "autocomplete with server options for multiple",
      //     name: "lastvisitaserver",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     multiple: true,
      //     endpoint: "exitsing-list-billable-entity-search-new",
      //     search_field: "name_search",
      //     val: [
      //         { key: "5eb928576428d6099992d315", val: 'Petey Antrum(doctor)' },
      //         { key: "5eb928576428d6099992d317", val: 'Burton Treby(doctor)' },
      //         { key: "5eb928576428d6099992d311", val: 'Ilaire Quinlan(doctor)' },
      //     ],
      //     value: ["5eb928576428d6099992d315", "5eb928576428d6099992d317", "5eb928576428d6099992d311"],
      //     validations: [
      //         { rule: 'required' }
      //     ]
      // },
      // {
      //     label: "autocomplete with server options for single",
      //     name: "lastvisitaserversingle",
      //     hint: 'autocomplete with server options for single',
      //     type: 'autocomplete',
      //     // multiple: false,
      //     endpoint: "exitsing-list-billable-entity-search-new",
      //     search_field: "name_search",
      //     val: [

      //     ],
      //     value: '',
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit Auto multi update after load ",
      //     name: "lastvisitaupdateafterload",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     multiple: true,
      //     val: [
      //         { key: 0, val: ' its Less than 21' },
      //         { key: 1, val: ' its less than 53' },
      //         { key: 2, val: 'its less than 76' },
      //         { key: 3, val: 'its less than 127' }
      //     ],
      //     // value: [3, 0, 2],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit Auto single update after load ",
      //     name: "lastvisitaupdatesingleafterload",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     // multiple:data.endpoint true,
      //     val: [
      //         { key: 0, val: ' its Less than 321' },
      //         { key: 1, val: ' its less than 453' },
      //         { key: 2, val: 'its less than 756' },
      //         { key: 3, val: 'its less than 1627' }
      //     ],
      //     // value: [3, 0, 2],
      //     validations: [
      //         { rule: 'required' }
      //     ]
      // },
      // {
      //     label: "Last Visit Auto single n selected ",
      //     name: "lastvisitasingle",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     // multiple:true,
      //     val: [
      //         { key: 0, val: ' its Less than 13' },
      //         { key: 1, val: ' its less than 34' },
      //         { key: 2, val: 'its less than 67' },
      //         { key: 3, val: 'its less than 11' }
      //     ],
      //     value: 0,
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit Auto not selected",
      //     name: "lastvisitautonotselected",
      //     hint: 'In months',
      //     type: 'autocomplete',
      //     //multiple:true,
      //     val: [
      //         { key: 0, val: ' its Less than 1' },
      //         { key: 5, val: ' its Less than 15' },
      //         { key: 6, val: ' its Less than 6' },
      //         { key: 7, val: ' its Less than 71' },
      //         { key: 1, val: ' its less than 3' },
      //         { key: 2, val: 'its less than 6' },
      //         { key: 3, val: 'its less than 12' }
      //     ],
      //     // value: [3,0],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Last Visit Auto multiple",
      //     name: "lastvisitamultiple",
      //     hint: 'In months multiple ',
      //     type: 'autocomplete',
      //     multiple: true,
      //     val: [{ key: 0, val: 'more than 51' },
      //     { key: 1, val: 'more than 63' },
      //     { key: 2, val: 'more than 36' },
      //     { key: 3, val: 'more than 12' },
      //     { key: 4, val: 'more than 82' },
      //     { key: 5, val: 'more than 46' },
      //     ],
      //     //value: [3,0],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ]
      // },
      // {
      //     label: "Active",
      //     name: "active",
      //     hint: 'check ???',
      //     type: 'checkbox',
      //     labelPosition: 'after',
      //     // value: true,
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"

      // },
      // {
      //     label: "Has Child?",
      //     name: "child",
      //     hint: 'has child ???',
      //     type: 'checkbox',
      //     labelPosition: 'after',
      //     value: null,
      //     dependent: [

      //         {
      //             condval: true,
      //             field:
      //             {
      //                 label: "How many",
      //                 name: "childcount",
      //                 type: 'number',
      //                 hint: '1to 3',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 3, message: "children can't be more than 50 " }
      //                 // ]
      //             }
      //         },
      //         {
      //             condval: true,
      //             field: {
      //                 label: "How many girls",
      //                 name: "childcountgirls",
      //                 type: 'number',
      //                 hint: '1to 3',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 2, message: "girls can't be more than 50 " }
      //                 // ]
      //             }
      //         },
      //         {
      //             condval: true,
      //             field: {
      //                 label: "How many boys",
      //                 name: "childcountboys",
      //                 type: 'number',
      //                 hint: '1to 3',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 2, message: "boys can't be more than 50 " }
      //                 // ]
      //             }
      //         }

      //     ],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"

      // },
      // {
      //     label: "Has Child   select?",
      //     name: "haschildsel",
      //     hint: 'has child ???',
      //     type: 'select',
      //     labelPosition: 'after',
      //     val: [{ val: 1, name: 'Yes' }, { val: 2, name: 'No' }],
      //     value: null,
      //     dependent: [

      //         {
      //             condval: 1,
      //             field:
      //             {
      //                 label: "How many Child text Sel",
      //                 name: "childcount1",
      //                 type: 'number',
      //                 hint: '1to 3',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 3, message: "children can't be more than 50 " }
      //                 // ]
      //             }
      //         },
      //         {
      //             condval: 2,
      //             field: {
      //                 label: "How many girls ??",
      //                 name: "childcountgirls1",
      //                 type: 'number',
      //                 hint: '1to 2',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 2, message: "girls can't be more than 50 " }
      //                 // ]
      //             }
      //         },
      //         {
      //             condval: 1,
      //             field: {
      //                 label: "How many boys ??",
      //                 name: "childcountboys1",
      //                 type: 'number',
      //                 hint: 'up to 2',
      //                 // validations: [
      //                 //     { rule: 'required' },
      //                 //     { rule: 'min', value: 1 },
      //                 //     { rule: 'max', value: 2, message: "boys can't be more than 50 " }
      //                 // ]
      //             }
      //         }
      //     ],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "Sel hc",
      //     suffix: "PM"

      // },
      // // disabled:true,
      // {
      //     label: "Purchaseable disabled ?",
      //     name: "is_purchaseble_d",
      //     //hint:'has child ???',
      //     type: 'checkbox',
      //     labelPosition: 'after',
      //     value: null,
      //     disabled: true
      // },

      // {
      //     label: "Purchaseable ?",
      //     name: "is_purchaseble",
      //     //hint:'has child ???',
      //     type: 'checkbox',
      //     labelPosition: 'after',
      //     value: null,//
      //     dependent: [{

      //         condval: true,
      //         field: {
      //             label: " Product Name",
      //             name: "product",
      //             type: 'select',
      //             val: [{ val: 1, 'name': 'P1' },
      //             { val: 0, 'name': 'P2' },
      //             { val: 2, 'name': 'P3' },
      //             { val: 3, 'name': 'P4' },
      //             ],
      //             hint: 'choose product',
      //             // validations: [
      //             //     { rule: 'required' }
      //             // ]
      //         }
      //     }],
      //     // validations: [
      //     //     { rule: 'required' }
      //     // ],
      //     prefix: "http://google.com/",
      //     suffix: "PM"

      // },
      // {
      //     label: "City ..",
      //     name: "city",
      //     type: 'text',
      // },

      // //new external button section
      // {
      //     label: "New External Button 2",
      //     name: "externalmodaldatanew",
      //     type: 'externaldata',
      //     value: [{ "key": "companyName", "label": "name", "val": "ss" }]
      // },

      // {
      //     label: "File 1",
      //     name: "file1",
      //     type: 'file',
      //     prefix: "Test-" + Date.now(),
      //     path: 'test/t1/',
      //     baseurl: 'test/t1/',
      //     // value: {
      //     //     fileservername: "file-1589270133418images (5).jpeg",
      //     //     name: "images (5).jpeg",
      //     //     size: 49184,
      //     //     type: "image/jpeg",
      //     //     path: "resource/file/",
      //     //     bucket: "awsbackend-dev-patient-files-test"
      //     // },
      //     bucket: 'awsbackend-dev-patient-files-test',
      //     apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
      //     apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
      //     // validations: [
      //     //     { rule: 'required', message: 'File  required !!' }
      //     // ]
      //     imagefields: [
      //         { label: "Image Title", name: "img_title", type: 'text', value: '' },
      //         { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //         { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //         { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //     ],
      //     aspectratio: [467 / 638, 467 / 467]
      // },

      // {
      //     label: "File 3 single with value",
      //     name: "file3singlewithvalue",
      //     type: 'file',
      //     prefix: "Test-" + Date.now(),
      //     path: 'test/t1/',
      //     baseurl: 'test/t1/',
      //     value: {
      //         fileservername: "Test-1610609265212lesson_report_5f23e718c031cb6305997d08(1).pdf",
      //         name: "lesson_report_5f23e718c031cb6305997d08 (1).pdf",
      //         size: 49184,
      //         type: "application/pdf",
      //         path: 'test/t1/',
      //         bucket: "awsbackend-dev-patient-files-test"
      //     },
      //     bucket: 'awsbackend-dev-patient-files-test',
      //     apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
      //     apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
      //     // validations: [
      //     //     { rule: 'required', message: 'File  required !!' }
      //     // ],

      //     imagefields: [
      //         { label: "Image Title", name: "img_title", type: 'text', value: 'test' },
      //         { label: "Image Desc", name: "img_Desc", type: 'textarea', value: 'test' },
      //         { label: "Image Priority", name: "img_priority", type: 'number', value: 3 },
      //         { label: "Status", name: "img_status", type: 'checkbox', value: true },
      //     ],
      //     aspectratio: [467 / 638, 453 / 490],
      //     imagecroppedratiolabel: ['467 / 638', '453 / 490'],
      // },

      // {
      //     label: "City 2",
      //     name: "city2",
      //     type: 'text'
      // },
      // {
      //     label: "City3",
      //     name: "city3",
      //     type: 'text'
      // },
      // {
      //     label: "p sel",
      //     name: "psel",
      //     type: "select",
      //     // type: 'select',
      //     val: [
      //         { val: 2020, name: 2020 },
      //         { val: 2021, name: 2021 },
      //         { val: 2022, name: 2022 },
      //         { val: 2023, name: 2023 },
      //         { val: 2024, name: 2024 },
      //         { val: 2025, name: 2025 }

      //     ],
      // },

      // //new external button section
      // {
      //     label: "New External Button",
      //     name: "externalmodaldataimg",
      //     type: 'externaldata',
      //     value: [{ "key": "img", "label": "Profile Image", "val": "https://training-centre-bucket.s3.amazonaws.com/lesson-files/lesson_file_-medpartner_picture_-batman-1574763456117-1605678964489.jpg", 'imgflag': true }, { "key": "img", "label": "name", "val": "test", }]
      // },

      // {
      //     label: "File 2",
      //     name: "file2",
      //     type: 'file',
      //     multiple: true,
      //     // value: [{
      //     //     fileservername: "file-1589270133418images (5).jpeg",
      //     //     name: "images (5).jpeg",
      //     //     size: 49184,
      //     //     type: "image/jpeg",
      //     //     path: "resource/file/",
      //     //     bucket: "awsbackend-dev-patient-files-test"
      //     // }, {
      //     //     fileservername: "file-1589270133418images (5).jpeg",
      //     //     name: "images (5).jpeg",
      //     //     size: 49184,
      //     //     type: "image/jpeg",
      //     //     path: "resource/file/",
      //     //     bucket: "awsbackend-dev-patient-files-test"
      //     // }],
      //     imagefields: [
      //         { label: "Image Title", name: "img_title", type: 'text', value: '' },
      //         { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //         { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //         { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //     ],
      //     prefix: "Test-" + Date.now(),
      //     path: 'test/t1/',
      //     baseurl: 'test/t1/',
      //     bucket: 'awsbackend-dev-patient-files-test',
      //     apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
      //     apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
      //     aspectratio: [467 / 638, 467 / 467],
      //     imagecroppedratiolabel: ['467 X 638', '2 X 3', '4/2']
      // },
      // {
      //     label: "File 2 multiple ",
      //     name: "file2multiple",
      //     type: 'file',
      //     multiple: true,
      //     prefix: "Test-multiple-" + Date.now(),
      //     path: 'test/t1m/',
      //     baseurl: 'test/t1,/',
      //     bucket: 'awsbackend-dev-patient-files-test',
      //     apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
      //     apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
      //     newheadingflag: true,
      //     newheadingtitle: 'Custom Section for Image',
      //     imagefields: [
      //         { label: "Image Title", name: "img_title", type: 'text', value: '' },
      //         { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //         { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //         { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //     ],

      //     value: [
      //         {
      //             "fileservername": "image-1606731256682For_the_Person_Raising_the_Job_Ticket.html",
      //             "name": "For_the_Person_Raising_the_Job_Ticket.html",
      //             "size": 3866,
      //             "type": "text/html",
      //             "path": "mwo_inventory_images/image/",
      //             "bucket": "awsbackend-dev-patient-files-test",
      //             "baseurl": "mwo_inventory_images/image/",
      //             "imgfields": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             "flds": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             imagefields: [
      //                 { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
      //                 { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //                 { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //                 { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //             ]
      //         }, {
      //             fileservername: "file-1589270133418images (5).jpeg",
      //             name: "images (5).jpeg",
      //             size: 49184,
      //             type: "image/jpeg",
      //             path: "resource/file/",
      //             bucket: "awsbackend-dev-patient-files-test",
      //             "imgfields": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             "flds": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             imagefields: [
      //                 { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
      //                 { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //                 { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //                 { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //             ]
      //         },
      //         {
      //             fileservername: "image-16099399812409.jpg",
      //             name: "images (5).jpeg",
      //             size: 49184,
      //             type: "image/jpeg",
      //             path: "resource/file/",
      //             bucket: "awsbackend-dev-patient-files-test",
      //             "imgfields": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             "flds": [
      //                 { key: "img_title", value: "qq" },
      //                 { key: "img_Desc", value: "qq" },
      //                 { key: "img_priority", value: "22" },
      //                 { key: "img_status", value: true }
      //             ],
      //             imagefields: [
      //                 { label: "Image Title", name: "img_title", type: 'text', value: 'qq' },
      //                 { label: "Image Desc", name: "img_Desc", type: 'textarea', value: '' },
      //                 { label: "Image Priority", name: "img_priority", type: 'number', value: '' },
      //                 { label: "Status", name: "img_status", type: 'checkbox', value: '' },
      //             ]
      //         }
      //     ],
      //     aspectratio: [467 / 638, 467 / 467, 4 / 2],
      //     imagecroppedratiolabel: ['467 X 638', '2 X 3', '4/2'],
      // },

      // {
      //     //label:"City",
      //     name: "pid",
      //     type: 'hidden',
      //     value: "900"
      // },
      // {
      //     label: "Doctor/Practice is : ",
      //     name: "docprac",
      //     // hint: 'In months',
      //     type: "checkbox",
      //     multiple: true,
      //     val: [
      //         { key: 0, val: "Family Medicine" },
      //         { key: 1, val: "Neurology" },
      //         { key: 2, val: "D.O Doctor of Osteopathy" },
      //         { key: 3, val: "General Practice" },
      //         { key: 4, val: "Internal Medicine" },
      //         { key: 5, val: "Pain Mgnt (Integrated Practice)" },
      //         { key: 6, val: "Primary Care" },
      //         { key: 7, val: "Endocrinology" },
      //         { key: 8, val: "Integrated Specialty" },
      //         { key: 9, val: "Cardiology" },
      //     ],
      //     value: [],
      //     validations: [
      //         { rule: "required", message: "Must be select any of them." },
      //     ],
      // },
      // {
      //     label: "Timepicker",
      //     name: "timepicker",
      //     type: 'timepicker',
      //     value: "",
      //     format:24,
      //     hint: "Timepicker .... ",
      //     validations: [
      //         { rule: 'required', message: "timepicker field Needs to be required" },
      //     ]
      // },

      //   {
      //     label: "Minute",
      //     name: "minute",
      //     value: "",
      //     min:59,
      //     type: "number",
      //     validations: [
      //       { rule: "required", message: "Minute is Required" },
      //     ],
      //   },
      {
        label: "Upload attachment: ",
        name: "screenshots",
        type: "file",
        // multiple: false,
        prefix: Date.now(),
        path: "training/",
        baseurl: "training/",
        bucket: "pece-training-files",
        apiurl:
          "https://57lsaxmih2.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
        apideleteurl:
          "https://57lsaxmih2.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
      },
    ],
  };

  public blog_cat_list: any = [
    {
      _id: "5dc54c9764f5cdfcff5f8a76",
      val: "CAR BUYING ADVICE",
      key: "5dc54c9764f5cdfcff5f8a76",
    },
    {
      _id: "5dc54cbc64f5cd7b9b5f8a77",
      val: "COMPARISON",
      key: "5dc54cbc64f5cd7b9b5f8a77",
    },
    {
      _id: "5dc54cd364f5cd70245f8a78",
      val: "FOREIGN MAKES",
      key: "5dc54cd364f5cd70245f8a78",
    },
    {
      _id: "5dc54d2f64f5cd087e5f8a79",
      val: "MISCELLANEOUS",
      key: "5dc54d2f64f5cd087e5f8a79",
    },
  ];
  subscriptions: Subscription[] = [];
  subscriptioncount: number = 0;

  //for listing
  public customlistenbutton: any = {
    flag: true,
    tooltipflag: true,
    buttons: [
      {
        label: "Listen button1",
        type: "button",
        name: "button1",
        tooltip: "Info about the action",
      },
      {
        label: "Listen button2",
        type: "button",
        name: "button2",
        tooltip: "Info about the action",
      },
      {
        label: "Listen button3",
        type: "button",
        name: "button3",
        tooltip: "Info about the action",
      },
      {
        label: "Update Record",
        type: "button",
        name: "button4",
        tooltip: "Info about the action",
      },
    ],
  };

  // [searchbuttons]="searchbuttons"
  // public searchbuttons: any = {
  //     flag: true,
  //     buttons: [
  //         {
  //             label: "search button1",
  //             type: 'button',
  //             name: 'button1'
  //         },
  //         {
  //             label: "search button2",
  //             type: 'button',
  //             name: 'button2'
  //         },
  //         {
  //             label: "search button3",
  //             type: 'button',
  //             name: 'button3'
  //         },
  //         {
  //             label: "search button4",
  //             type: 'button',
  //             name: 'button4'
  //         }
  //     ]

  // };

  //for form

  public custombuttons: any = {
    flag: true,
    // heading:'New Custom Area',
    // after:'email',
    buttons: [
      {
        labeladd: "Add Name",
        labelremove: "Remove Name",
        type: "text",
        name: "fullname",
      },
      {
        labeladd: "Add Email",
        labelremove: "Remove Email",
        type: "email",
        name: "email",
      },
      {
        labeladd: "Add Phone",
        labelremove: "Remove Phone",
        type: "number",
        name: "phone",
      },
    ],
  };
  public patient_limitcond: any = {
    limit: 10,
    skip: 0,
    pagecount: 1,
  };

  public patient_sortdata: any = {
    type: "desc",
    field: "_id",
    options: ["_id", "coloredstatus", "practicename", "created_at_datetime"],
  };

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    private _apiService: ApiService,
    public dialog: MatDialog,
    public cookie: CookieService
  ) {
    // console.log(this.blog_cat_list);
    // console.log(this.authval)
    // console.log('custom_link');
    this.setconvertToLanguage = this.cookie.get("language");

    // console.log(this.formdata, 'formdataformdataformdataformdataformdata')
    this.datasource = "";
    // let endpoint = 'new-dashboard-report-datalist'; // for main data endpoint
    // let endpointc = 'new-dashboard-report-datalist-count'; // for count endpoint
    let endpoint = "api5/faqlist"; // for main data endpoint
    let endpointc = "api5/faqlist-count"; // for count endpoint
    let autodataendpoint = "exitsing-list"; // for count endpoint
    // data param for conditionlimit and search
    let data: any = {
      condition: {
        limit: 10,
        skip: 0,
      },
      sort: {
        type: "desc",
        field: "_id",
      },
      // searchcondition: { status: { $lte: 4 } }
      // searchcondition: { blogtitle: { $regex: 'ying' } }
    };
    // let data:any={
    //     "condition":{"limit":10,"skip":0},"sort":{"field":"practicename","type":"desc"},"searchcondition":{"status":{"$in":[17]}},"secret":"&^#rG'-@a","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE2Mjk5NTYxMzgsImlhdCI6MTYyOTg2OTczOH0.UMwdb5QXFS_EivufJaTXLNMVd_Pc593DvaCZt8yFFLw"
    // }

    this.subscriptions[this.subscriptioncount++] = this._apiService
      .postData(autodataendpoint, {})
      .subscribe(
        (res: any) => {
          // console.log('in constructor');
          // console.log(res, 'auto res', res.result, res.result.blog_cat_list, res.result.blog_tag_list);
          // search: [{ label: "Search By Author", field: 'author_search', values: this.authval }]
          // this.search_settings.search.push({ label: "Search By Cat ID", field: 'blogcat_str', values: res.result.blog_cat_list });
          // this.search_settings.search.push({ label: "Search By Cat Name", field: 'category_search', values: res.result.blog_cat_str_list });
          // this.search_settings.search.push({ label: "Search By Tags from server", field: 'tag_search', values: res.result.blog_tag_list });
          // this.search_settings.search.push({ label: "Search Author from Server", field: 'author_search', values: res.result.blog_author_list });
          // this.date_search_source_count = res.count;
          // console.warn('blogData c',res);
        },
        (error) => {
          console.log("Oooops!");
        }
      );
    this.subscriptions[this.subscriptioncount++] = this._apiService
      .postData(endpointc, data)
      .subscribe(
        (res: any) => {
          // console.log('in constructor');
          // console.log(result);
          this.date_search_source_count = res.count;
          //console.warn('blogData c',res);
        },
        (error) => {
          console.log("Oooops!");
        }
      );

    this.subscriptions[this.subscriptioncount++] = this._apiService
      .postData(endpoint, data)
      .subscribe(
        (res: any) => {
          // console.log('in constructor');
          // console.log(result);
          res.results.res[3].created_date = 0;
          res.results.res[2].created_date = "NA";
          res.results.res[4].created_date = "na";
          res.results.res[3].wrongone = "d 78 l";

          // res.results.res[1].coloredstatus = "<div class ='cred'>red</div>";
          // res.results.res[2].coloredstatus = "<div class ='cblack'>BLACK</div>";
          // res.results.res[3].coloredstatus = "<div class='cgrey'>grey</div>";
          // res.results.res[5].coloredstatus = "<div class='cgreen'>green</div>";
          // res.results.res[9].coloredstatus = "<div class='cblue'>blue</div>";

          for (let i in res.results.res) {
            res.results.res[i].coloredstatus = "<div class ='cred'>red</div>";
            res.results.res[5].coloredstatus = "<div class ='cred'>red</div>";
          }

          // console.log(res.results.res, 'in res.results.res++++++')

          this.pendingmodelapplicationarray = res.results.res;

          for (let i in this.pendingmodelapplicationarray) {
            this.pendingmodelapplicationarray[2].statusval = 1;
            this.pendingmodelapplicationarray[5].statusval = 1;
            this.pendingmodelapplicationarray[7].statusval = 1;
          }

          this.pendingmodelapplicationarray = res.results.res;
          this.libdata.hidemultipleselectbutton = false;
          setTimeout(() => {
            // this.pendingmodelapplicationarray = [];
            // this.libdata.hidemultipleselectbutton = true;
            // this.libdata.hideaction = true;
            // this.libdata.hidecounter = null;
          }, 4000);

          setTimeout(() => {
            // const ldata = this.libdata;
            // this.libdata = {};
            // this.libdata = ldata;
            // this.libdata.notes.label = "Bg N";
            // this.libdata.footersettings = [
            //     { key: 'f01', data: '', colspan: 4 },
            //     { key: 'f11', data: 'Total 1', colspan: 2 },
            //     { key: 'f21', data: '89', colspan: 2 },
            //     { key: 'f31', data: 'F3 Data', colspan: 1 },
            //     { key: 'f41', data: 'F4 Data', colspan: 5 },
            //     // { key: 'f5', data: 'F5 Data', colspan: 1 },
            //     // { key: 'f6', data: 'F6 Data', colspan: 1 },
            // ];
            // this.libdata.hidemultipleselectbutton = true;
            // this.libdata.hideaction = true;
            // this.libdata.hidecounter = true;
            // this.libdata.actioncolname == 'Acb'
            // res.results.res[3].coloredstatus = "<div class ='cd'>k78cd</div>";
            // this.pendingmodelapplicationarray = [];
            // console.log('override data in list  !!!!', 'ldata', 'ldata', this.libdata);
            // this.pendingmodelapplicationarray = res.results.res;
          }, 6000);
          setTimeout(() => {
            // this.libdata.hideaction = null;
            // this.libdata.hideaction = true;
            // this.pendingmodelapplicationarray = [];
          }, 8000);

          // this.pendingmodelapplicationarray[3].wrongone = 'Sdo *9';
          // console.warn('blogData', this.pendingmodelapplicationarray);
        },
        (error) => {
          console.log("Oooops!");
        }
      );
  }

  ngOnInit() {
    // console.log("data",data);
    this.transletlanguageDataset = data.default;
    // console.log("transletlanguageDataset+++", this.transletlanguageDataset);

    this.libdata.recordfounddata =
      `<div><p> Total Records Found : ` + this.totalRecordFound + `</p></div>`;

    // this._apiService.getSiteSettingData("s3://awsbackend-dev-patient-files/translet_json_dev/transletlanguagedata.json").subscribe(response => {
    //     console.log("{}{}json datataaaa",response);

    //   });
  }
  cokkieset() {
    this.cookie.set("language", "es");
  }
  onChangedunction(data: any) {
    // console.log("data", data);

    let currentUrl = this.router.url;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = "reload";
    this.router.navigate([currentUrl]);
    this.cookie.set("language", data);
    // this.setconvertToLanguage=data;
  }

  listenLiblistingChange(val: any) {
    console.log("listenLiblistingChange", val);

    if (val.action == "multipleselectoptionclick") {
      setTimeout(() => {
        // console.log('update', val);

        this.updatetable = !this.updatetable;
      }, 1000);
    }

    if (val.action == "paging") {
      setTimeout(() => {
        // console.log('paging', val);

        this.libdata.footersettings[2].data = "560";
      }, 1000);
    }
  }

  onLiblistingButtonChange(val: any) {
    console.log("onLiblistingButtonChange===++", val);

    if (
      val.action == "customlistenbutton" &&
      val.buttondata.name == "button4"
    ) {
      this.totalRecordFound = 100;

      this.libdata.recordfounddata =
        `<div><p> Total Records Found : ` +
        this.totalRecordFound +
        `</p></div>`;

      // console.log(this.libdata.recordfounddata, '+++++')
    }
  }

  listenFormFieldChange(val: any) {
    console.log("listenFormFieldChange++++", val);

    if (
      val.field != null &&
      val.field.name != null &&
      val.field.name == "psel"
    ) {
      // console.log('in psel');
      let tempopn: Array<object> = [];
      let months: Array<string> = [];
      months = ["jan", "feb", "mar", "apr", "may"];
      for (let n in months) {
        tempopn.push({
          val: months[n] + " of " + val.fieldval,
          name: months[n] + val.fieldval,
        });
      }
      // console.log(tempopn, 'tempopn');
      this.formfieldrefreshdata = {
        field: "removefromcontrol",
        value: { name: "csel" },
      };
      setTimeout(() => {
        this.formfieldrefreshdata = {
          field: "addfromcontrol",
          value: {
            label: "C sel",
            name: "csel",
            type: "select",
            after: "psel",
            val: tempopn,
          },
        };
      }, 300);
    }

    if (
      val.field != null &&
      val.field.name != null &&
      val.field.name == "age" &&
      val.fieldval == 23
    ) {
      this.formfieldrefreshdata = {
        field: "email",
        value: "debasiskar7@gmail.com",
      };
    }

    if (val.field != null && val.customfield == "add") {
      this.fieldEmailNumber = this.fieldEmailNumber + 1;
      // console.log(this.fieldEmailNumber, 'fieldval', this.fieldEmailNumber)
      switch (val.field.type) {
        case "email":
          // setTimeout(() => {
          this.formfieldrefreshdata = {
            field: "addfromcontrol",
            value: {
              label: "Enter Email",
              name: "email-" + this.fieldEmailNumber,
              type: "email",
              after: "email",
              custombuttonflag: true,
            },
          };
          // }, 300);
          break;
        case "text":
          // setTimeout(() => {
          this.formfieldrefreshdata = {
            field: "addfromcontrol",
            value: {
              label: "Enter Full Name",
              name: "fullname1",
              type: "text",
              after: "fullname",
              custombuttonflag: true,
            },
          };
          // }, 300);
          break;
        case "number":
          // setTimeout(() => {
          this.formfieldrefreshdata = {
            field: "addfromcontrol",
            value: {
              label: "Enter Phone",
              name: "number1",
              type: "number",
              after: "age",
              custombuttonflag: true,
            },
          };
          // }, 300);
          break;
      }
    }

    if (val.field != null && val.customfield == "remove") {
      this.formfieldrefreshdata = {
        field: "removefromcontrol",
        value: { name: val.field.name },
      };
    }

    if (val.field == "fromsubmitdata") {
      // console.log('fromsubmitdata ===>>>', val)
      // this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe(res => {
      //   let result: any = {};
      //   result = res;
      //   if (result.status == 'success') {
      //     this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
      //     this.formGroup.reset();
      //     this._snackBar.openFromComponent(SnackbarComponent, {
      //       duration: 6000,
      //       data: { errormessage: this.formdataval.successmessage }
      //     });
      //     // console.log(result, 'red', this.formdataval.redirectpath);
      //     if (this.formdataval.redirectpath != null && this.formdataval.redirectpath != '' && this.formdataval.redirectpath != '/') {
      //       this.router.navigate([this.formdataval.redirectpath]);
      //     } else {
      //       this.loading = false;
      //     }
      //   }
      //   if (result.status == 'error') {
      //     this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
      //     this._snackBar.openFromComponent(SnackbarComponent, {
      //       duration: 6000,
      //       data: result
      //     });
      //     this.loading = false;
      //   }
      // }, error => {
      //   // console.log('Oooops!');
      //   this._snackBar.openFromComponent(SnackbarComponent, {
      //     duration: 6000,
      //     data: { errormessage: 'Something Went Wrong ,Try Again!!' }
      //   });
      //   this.onFormFieldChange.emit({ field: 'fromsubmitservererror', fieldval: 'servererror', fromval: this.formGroup.value });
      //   this.loading = false; //disable loader
      // });
    }

    if (val.action != null && val.action == "externaldata") {
      // console.log('listenFormFieldChange', val);

      const dialogRef = this.dialog.open(ExternalDataModalComponent, {
        panelClass: "externaldata-class",
        height: "500px",
        width: "600px",
        data: {
          heading: "Add Field Data",
          name: val.fieldVal.name,
          value: val.fieldVal.value,
        },
      });
      dialogRef.disableClose = true;

      dialogRef.afterClosed().subscribe((res) => {
        // console.log(res)
        if (res.flag == "yes") {
          // this.externaldatavalue.push(res.externaldatavalue);

          // this.formdata.fields[val.index].value.push(res.externaldatavalue.value[0])

          for (let i in res.externaldatavalue.value) {
            this.formdata.fields[val.index].value.push(
              res.externaldatavalue.value[i]
            );
          }

          // console.log(this.externaldatavalue, 'externaldatavalue++')
          // console.log(this.formdata.fields[val.index].value, 'V++')
        }
      });
    }
  }

  updateformval() {
    this.formdata.fields[0].value = this.temtdata;
    this.formfieldrefreshdata = { field: "fullname", value: this.temtdata };
    setTimeout(() => {
      this.formfieldrefreshdata = {
        field: "email",
        value: this.temtdata + "@gmail.com",
      };
    }, 50);
    this.updatetable = !this.updatetable;
  }

  updateformvalmultiple() {
    // this.formdata.fields[0].value = this.temtdata;
    // this.formfieldrefreshdata = { field: 'fullname', value: this.temtdata };
    let formdata: any = {
      fullname: "Test 90",
      email: "a45@gmal.com",
      htmldesc: "htmldesc --------",
      status: 1,
      year: [2021, 2022],
      status2: 1,
      dob: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
      age: 23,
      active: true,
      child: true,
      is_purchaseble_d: true,
      is_purchaseble: true,
      lastvisitaupdateafterload: [2, 3],
      lastvisitaupdatesingleafterload: 3,
      lastvisitupdateafter: [3, 1],
      file1: {
        fileservername: "file-1589270133418images (5).jpeg",
        name: "images (5).jpeg",
        size: 49184,
        type: "image/jpeg",
        path: "resource/file/",
        bucket: "awsbackend-dev-patient-files-test",
      },
    };
    this.formfieldrefreshdata = { formvaldata: formdata };
    // setTimeout(() => {
    //     this.formfieldrefreshdata = { field: 'email', value: this.temtdata + '@gmail.com' };
    // }, 50);
    // this.updatetable = !this.updatetable;
  }
  showfieldloader() {
    this.formfieldrefreshdata = { field: "showfieldloader", value: "email" };
    setTimeout(() => {
      this.formfieldrefreshdata = { field: "showfieldloader", value: "" };
    }, 6000);
  }

  deleteformfieldmulti() {
    this.formfieldrefreshdata = {
      field: "removefromcontrol",
      value: ["desc", "email", "file1", "city", "city2"],
    };
  }

  deleteformfield() {
    this.formfieldrefreshdata = {
      field: "removefromcontrol",
      value: { name: "desc" },
    };
  }

  addformfieldarray() {
    this.formfieldrefreshdata = {
      field: "addfromcontrol",
      value: [
        {
          label: "Pet Name 2",
          name: "petname2",
          type: "text",
          after: "fullname",
        },
        {
          label: "Pet Name 3",
          name: "petname3",
          type: "text",
          after: "petname2",
        },
        {
          label: "Pet Name 4",
          name: "petname4",
          type: "text",
          after: "petname3",
        },
      ],
    };
  }

  addformfield() {
    this.formfieldrefreshdata = {
      field: "addfromcontrol",
      value: {
        label: "Pet Name",
        name: "petname",
        type: "text",
        after: "fullname",
      },
    };
  }
  // form reset using listner
  resetform() {
    this.formfieldrefreshdata = {
      field: "resetform",
    };
  }
  toogleautocompleteinputvisibility(val: any) {
    this.formfieldrefreshdata = {
      field: "autocompletevisible",
      display: val,
    };
  }
  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscriptions.forEach((s) => s.unsubscribe());
  }
}

// external data modal

@Component({
  selector: "externaldatamodal",
  templateUrl: "externaldatamodal.html",
})
export class ExternalDataModalComponent {
  companyName: any = "";
  companyemail: any = "";

  constructor(
    public dialogRef: MatDialogRef<ExternalDataModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    console.log(data, "modal data++");
  }

  onNoClick(): void {
    this.data.flag = "no";
    this.dialogRef.close(this.data);
  }

  addData() {
    this.data.flag = "yes";

    this.data.externaldatavalue = {
      name: this.data.name,
      value: [
        { key: "companyName", label: "Name", val: this.companyName },
        { key: "companyemail", label: "Email", val: this.companyemail },
      ],
    };

    this.dialogRef.close(this.data);
  }
}
