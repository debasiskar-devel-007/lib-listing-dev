import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { Validators } from "@angular/forms";
import { FieldConfig } from "../field.interface";
import { Subscription } from 'rxjs';
//import {ShowformComponent} from;
declare var moment: any;


@Component({
    selector: 'app-admindashbord',
    templateUrl: './admindashbord.component.html',
    styleUrls: ['./admindashbord.component.css']
})
export class AdmindashbordComponent implements OnInit {
    componentRef: any;
    datasource: any;
    status_gretterthan_zero: any;
    pendingapplication_view: any;
    joquuserlist: any;
    custombutton: any = { label: 'my tree', fields: ['type', 'name', '_id'], url: 'http://localhost:4200/affiliate-tree' };
    placeholder: any = ['placeholder'];
    type: any = ['text'];
    name: any = ['Username'];



    // use for Download the PDF

    custom_link: any = [{
        label: 'shatterblok',
        url: 'http://shatterblok.com/testpdf/html2pdf/shatterblok-agreement.php?id=',
        action: 'null'
    }, {
        label: 'Audiodateline',
        url: 'http://shatterblok.com/testpdf/html2pdf/audiodeadline-agreement.php?id=',
        action: 'null'
    }];



    // use for grab the link
    grab_link: any = {
        colom_name: [
            {
                col_name: 'author',
                field_name: 'author'
            }],
        field: [
            {
                label: 'shatterblok grab url',
                url: 'artixtxp.com/',
                action: 'null'
            }]

    };

    pendingmodelapplicationarray: any = [];

    public status: any = [{ val: 1, 'name': 'Active' }, { val: 0, 'name': 'Inactive' }];

    // use for status search

    statusarray: any = [{ val: 1, name: 'Approve' }, { val: 4, name: 'Decline' }, { val: 3, name: 'Lock' }];

    // use for ststic email search
    //  Example like this
    emailarray: any = [{ val: 'sourotest222@gmail.com', name: 'sourotest222@gmail.com' }, { val: 'octtest@yopmail.com', name: 'octtest@yopmail.com' }, { val: 'septest@yopmail.com', name: 'septest@yopmail.com' }];

    // use for edit any field Navigate that page And you should be import the app-routing.module.ts   ex:- {path: 'editroute/:id', component: < "Write the class name"> },

    //  Example like this
    editroute: any = 'editroute';


    // use for Table Header modification 

    // Like Table head name is " firstname" => "First Name"
    modify_header_array: any = {
        'firstname': "First Name",
        'email': 'Email Id',
        'lastname': 'Last Name',
        'name': "Full Name",
        'blogtitle': "Blog Title 9",
        "created_date": "Dated Added",
        "created_datetime": "Created Date with Time 111",
        "author": "Author Name",
        "priority": "Priority of B ",
        "description_html": "Desc",
        "status": "Active ?",
        'wrongone': 'Wrong O 1'
    };


    // use for Table Header Skip 
    pendingmodelapplicationarray_skip: any = ['_id', 'video_thamnail', 'type', 'password', 'blogs_image', 'created_at'];



    // use for Table Detail Field Skip
    pendingmodelapplicationarray_detail_skip: any = ['_id', 'email', 'name', 'blogtitle', 'Blogs image'];


    // use for Table Detail inside the modal image path
    pendingmodelapplicationarray_detail_datatype: any = [{
        key: "images",
        value: 'image',
        fileurl: "http://18.222.26.198/upload/brandimages/"             // Image path 
    }];

    // updateendpoint is use for data update endpoint
    updateendpoint = 'addorupdatedata';

    // deleteendpoint is use for data delete endpoint
    deleteendpoint = 'deletesingledata';

    // this is a database collection name
    tablename = 'users';

    // searchendpoint is use for data search endpoint
    searchendpoint = 'datalist';

    // use for click to another page routing path
    click_to_add_ananother_page = '/adminlist';



    // date_search_endpoint is use for date search endpoint
    date_search_endpoint: any = 'datalist';
    // send basic limit data
    limitcond: any = {
        "limit": 10,
        "skip": 0,
        // "AUth": 1
    };

    // other data
    libdata: any = {
        // basecondition: { status: 1 },
        detailview_override: [
            { key: "tags_array", val: "Tags" },
            { key: "author", val: "Written By" },
            { key: "blogtitle", val: "Title" },
            { key: "created_datetime", val: "Date Added with time" },
            { key: "created_date", val: "Date Added only" },
            { key: "descriptionb", val: "Dc" },
            { key: "blogtitleb", val: "BT" },
        ], // optional

        updateendpoint: 'statusupdate',
        notes: {
            label: "Blog Notes",
            addendpoint: "addnotedata",
            deleteendpoint: "deletenotedata",
            listendpoint: "listnotedata",
            user: "5e0c80cd3a339a042de8717d",
            currentuserfullname: "Debasis 8 ",
            header: 'author',
        },
        updateendpointmany: 'updateendpointmany',
        deleteendpointmany: 'deleteendpointmany',
        hideeditbutton: true,// all these button options are optional not mandatory
        hidedeletebutton: true,
        //hideviewbutton:false,
        hidestatustogglebutton: true,
        hidemultipleselectbutton: false,
        hidedeletemany: true,
        hideupdatemany: false,
        // hideaction:true,
        tableheaders: ['author', 'priority', 'blogtitle', 'status', 'wrongone', 'created_date', 'created_datetime', 'description_html'], //not required
        custombuttons: [
            {
                label: "fb search with blog title",
                link: "https://www.facebook.com/search/top/",
                type: 'externallink',
                param: [{ key: 'blogtitle', q: 'q' }],
            },
            {
                label: "G search with blog title ACtive",
                link: "https://www.google.com/search",
                type: 'externallink',
                param: [{ key: 'blogtitle', q: 'q' }, { key: 'author', q: 'oq' }],
                cond: 'status',
                condval: 1
            },
            {
                label: "mask blog",
                link: "https://mask-blog1.influxiq.com/blog-details",
                type: 'externallink',
                paramtype: 'angular',
                param: ['blogtitle', '_id'],
                cond: 'status',
                condval: 0
            },
            {
                label: "downLoad Pdf",
                link: "https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/html-pdf/report",
                type: 'externallink',
                paramtype: 'angular',
                param: ['_id'],
                //cond:'status',
                // condval: 0
            },
            {
                label: " fb profile ",
                link: "https://www.facebook.com/debasiskar007",
                type: 'externallink'
            },
            {
                label: " fb profile for inactive",
                link: "https://www.facebook.com/debasiskar007",
                type: 'externallink',
                cond: 'status',
                condval: 0
            },
            {
                label: " fb profile for active",
                link: "https://www.facebook.com/debasiskar007",
                type: 'externallink',
                cond: 'status',
                condval: 1
            },
            {
                label: "see brand",
                route: "brand",
                type: 'internallink',
                cond: 'status',
                condval: 0
            },
            {
                label: "delete",
                toggle: "delete",
                type: 'internallink',
            },
            {
                label: "see brand with param",
                route: "admin/brand",
                type: 'internallink',
                //cond:'status',
                //condval:0,
                param: ['blogtitle', '_id'],
            },
            {
                label: "Desc from data",
                type: 'action',
                datatype: 'local',
                datafields: ['created_date', 'description', 'author', 'blogtitle', 'tags_array', 'image', 'video_array', 'created_datetime', 'image_array', 'video', 'img_array', 'vd_array'],
                headermessage: 'Local Info',
                // cond:'status',
                // condval:0
            },
            {
                label: "Desc from api data",
                type: 'action',
                datatype: 'api',
                endpoint: 'getblogdatabyid',
                otherparam: [],
                //cond:'status',
                //condval:0,
                param: 'blog_id',
                datafields: ['blogtitleb', 'descriptionb'],
                // refreshdata: true,
                headermessage: 'Api Info',
            }
        ]
    }
    // send basic sort data
    sortdata: any = {
        "type": 'desc',
        "field": 'priority',
        "options": ['priority', 'author', 'category', 'blogtitle']
    };


    // this is a database collection or view name
    date_search_source: any = 'admin_blog_list';
    // datacollection
    datacollection: any = 'getadminbloglistdata';
    //source count
    date_search_source_count: any = 0;

    // this is use for  All type of search
    authval: any = [
        {
            "_id": "5dc54c9764f5cdfcff5f8a76",
            "val": "CAR BUYING ADVICE",
            "name": "A"
        },
        {
            "_id": "5dc54cbc64f5cd7b9b5f8a77",
            "val": "COMPARISON",
            "name": "B"
        },
        {
            "_id": "5dc54cd364f5cd70245f8a78",
            "val": "FOREIGN MAKES",
            "name": "C"
        },
        {
            "_id": "5dc54d2f64f5cd087e5f8a79",
            "val": "MISCELLANEOUS",
            "name": "D"
        }
    ]
    search_settings: any = {

        datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search", field: "created_datetime" }],   // this is use for  date search

        selectsearch: [{ label: 'Search By Status', field: 'status', values: this.status, value: 0 }], // this is use for  select search

        textsearch: [{ label: "Search By Title", field: 'blogtitle_search' }],
        // textsearch: [{ label: "Search By Title", field: 'blogtitle_search', value: "Test t" },
        // { label: "Search by auther", field: "author_search", value: "AUth" }],  // this is use for  text search

        search: [{
            label: "Search By Author static ", field: 'author_search',
            values: this.authval,
            serversearchdata: { endpoint: 'exitsing-list-author' }
        }]     // this is use for  Autocomplete search
    };

    // this is search block 



    brandarray: any = [];
    notpendingapplication_view: any = [];
    adminlist: any = [];

    editroute1: any = 'modeledit';

    status_gretterthan_zero_skip: any = ['_id', 'username', 'phone', 'city', 'state', 'ethnicity', 'height', 'haircolor', 'eyecolor', 'weight', 'bust', 'waist', 'hips', 'slim', 'toned', 'tattoos', 'athletic', 'piercings', 'retail', 'voluptuous', 'promotions', 'sales', 'descriptionbox', 'facebooklink', 'twitterlink', 'instagramlink', 'modelmayhemlink', 'type', 'images'];
    status_gretterthan_zero_modify_header: any = { 'dateformat': 'Date', 'status': 'Status', 'email': 'Email', 'name': 'Full Name', 'bodytype': 'Bodytype', 'shatterblok agreement date': 'Shatterblok Agreement Date', 'audiodeadline agreement date': 'Audiodeadline Agreement Date' };
    status_gretterthan_zero_detail_skip: any = ['_id', 'email', 'name', 'type', 'status'];
    status_gretterthan_zero_detail_datatype: any = [{ key: "images", value: 'image', fileurl: this._apiService.uplodeimg_url }];


    // editroute:any = [{val: 1, name:"hi"}];
    //everything we need for formlibconfiguration


    emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    passwordregex: RegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;

    temtdata: any = '';
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
        apiUrl: this._apiService.domain,
        endpoint: 'addformdata',
        jwttoken: this._apiService.jwttoken,
        //hidereset:true,
        //hidecancel:true,
        cancelroute: '/brand',
        fields: [
            {
                heading: "This is Name Header <h1> Fill the form Up !! </h1>",
                label: "Name",
                name: "fullname",
                value: 'Test N',
                type: "text",
                disabled: true,
                validations: [
                    { rule: 'required' },
                    { rule: 'maxLength', value: 10 },
                    { rule: 'minLength', value: 2 }
                ],
                prefix: "http://google.com/",
                suffix: "PM"
            },
            {
                label: "Description",
                name: "desc",
                type: 'textarea',
                value: "This test !!",
                hint: "Desc .... ",
                validations: [
                    { rule: 'required', message: "Email field Needs to be required" },
                ]
            },
            {
                label: "Html Description",
                name: "htmldesc",
                type: 'editor',
                value: "This test html <b>ff</b> !!",
                hint: "Desc .... ",
                validations: [
                    { rule: 'required', message: "Html Desc field Needs to be required" },
                ]
            },
            {
                label: "Email",
                name: "email",
                type: 'email',
                hint: "abc@gmail.com",
                validations: [
                    { rule: 'required', message: "Email field Needs to be required" },
                    { rule: 'pattern', value: this.emailregex, message: "Must be a valid Email" }
                ]
            },
            {
                label: "DOB",
                name: "dob",
                type: 'date',
                value: new Date().toISOString(),
                hint: "05/05/2020",
                validations: [
                    { rule: 'required', message: "Email field Needs to be required" }
                ]
            }, {
                label: "DOJ",
                name: "doj",
                type: 'date',
                value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                hint: "05/05/2020",
                validations: [
                    { rule: 'required', message: "Email field Needs to be required" }
                ]
            },
            {
                label: "Password",
                name: "password",
                type: 'password',
                hint: "******",
                validations: [
                    { rule: 'required', message: "Password field Needs to be required" },
                    { rule: 'pattern', value: this.passwordregex, message: "Must contain a Capital Letter and a Number" }
                ]
            }, {
                label: "Confirm Password",
                name: "confirmpassword",
                type: 'password',
                hint: "******",
                validations: [
                    { rule: 'required', message: "Confirm Password field Needs to be required" },
                    { rule: 'match', message: "Confirm Password field Needs to  match Password" },
                    //{rule:'pattern',value: this.passwordregex,message: "Must contain a Capital Letter and a Number"}
                ]
            },
            {
                label: "Age",
                name: "age",
                type: 'number',
                hint: 'dddd',
                validations: [
                    { rule: 'required' },
                    { rule: 'min', value: 5 },
                    { rule: 'max', value: 50, message: "Age can't be more than 50 " }
                ]
            },
            {
                label: "Status disabled",
                name: "status2",
                hint: ',0000',
                type: 'select',
                val: this.status,
                disabled: true,
                // value: 1,
                //value: '',
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"
            },
            {
                heading: "This is Heading For group 1",
                name: "statusgroup",
                hint: ',0000',
                type: 'group',
                fields: [
                    {
                        label: "Age1",
                        name: "age1",
                        type: 'number',
                        hint: 'Age ??',
                        validations: [
                            { rule: 'required' },
                            { rule: 'min', value: 5 },
                            { rule: 'max', value: 50, message: "Age can't be more than 50 " }
                        ]
                    },
                    {
                        label: "DOJ1",
                        name: "doj1",
                        type: 'date',
                        value: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(),
                        hint: "05/05/2020",
                        validations: [
                            { rule: 'required', message: "Email field Needs to be required" }
                        ]
                    },
                    {
                        label: "Description1",
                        name: "desc1",
                        type: 'textarea',
                        value: "This test  1!!",
                        hint: "Desc ....1 ",
                        validations: [
                            { rule: 'required', message: "Email field Needs to be required" },
                        ]
                    },
                ]
            },
            {
                label: "Status after gRP ",
                name: "status",
                hint: ',0000',
                type: 'select',
                val: this.status,
                // value:1,
                //value: '',
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"
            },
            {
                label: "Year",
                name: "year",
                hint: ',0000',
                type: 'select',
                val: [
                    { val: 2020, name: 2020 },
                    { val: 2021, name: 2021 },
                    { val: 2022, name: 2022 },
                    { val: 2023, name: 2023 },
                    { val: 2024, name: 2024 },
                    { val: 2025, name: 2025 }

                ],
                // value:[2021,2022],
                multiple: true,
                //value: '',
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"
            },
            {
                label: "Married ",
                name: "married",
                hint: 'Yes/No',
                type: 'radio',
                val: [{ key: 0, val: 'Yes' }, { key: 1, val: 'No' }, { key: 3, val: 'Separated' }, { key: 4, val: 'Widow' }],
                value: 4,
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit ",
                name: "lastvisit",
                hint: 'In months',
                type: 'checkbox',
                multiple: true,
                val: [{ key: 0, val: 'Less than 1' }, { key: 1, val: 'less than 3' }, { key: 2, val: 'less than 6' }, { key: 3, val: 'less than 12' }],
                value: [3, 0],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit update after ",
                name: "lastvisitupdateafter",
                hint: 'In months',
                type: 'checkbox',
                multiple: true,
                val: [{ key: 0, val: 'Less than 1c' }, { key: 1, val: 'less than 3v' }, { key: 2, val: 'less than 6c' }, { key: 3, val: 'less than 12c' }],
                // value: [3, 0],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto multi selected ",
                name: "lastvisita",
                hint: 'In months',
                type: 'autocomplete',
                multiple: true,
                val: [
                    { key: 0, val: ' its Less than 1' },
                    { key: 1, val: ' its less than 3' },
                    { key: 2, val: 'its less than 6' },
                    { key: 3, val: 'its less than 12' }
                ],
                value: [3, 0, 2],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto multi update after load ",
                name: "lastvisitaupdateafterload",
                hint: 'In months',
                type: 'autocomplete',
                multiple: true,
                val: [
                    { key: 0, val: ' its Less than 21' },
                    { key: 1, val: ' its less than 53' },
                    { key: 2, val: 'its less than 76' },
                    { key: 3, val: 'its less than 127' }
                ],
                // value: [3, 0, 2],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto single update after load ",
                name: "lastvisitaupdatesingleafterload",
                hint: 'In months',
                type: 'autocomplete',
                // multiple: true, 
                val: [
                    { key: 0, val: ' its Less than 321' },
                    { key: 1, val: ' its less than 453' },
                    { key: 2, val: 'its less than 756' },
                    { key: 3, val: 'its less than 1627' }
                ],
                // value: [3, 0, 2],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto single n selected ",
                name: "lastvisitasingle",
                hint: 'In months',
                type: 'autocomplete',
                // multiple:true,
                val: [
                    { key: 0, val: ' its Less than 13' },
                    { key: 1, val: ' its less than 34' },
                    { key: 2, val: 'its less than 67' },
                    { key: 3, val: 'its less than 11' }
                ],
                value: 0,
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto not selected",
                name: "lastvisitautonotselected",
                hint: 'In months',
                type: 'autocomplete',
                //multiple:true,
                val: [
                    { key: 0, val: ' its Less than 1' },
                    { key: 5, val: ' its Less than 15' },
                    { key: 6, val: ' its Less than 6' },
                    { key: 7, val: ' its Less than 71' },
                    { key: 1, val: ' its less than 3' },
                    { key: 2, val: 'its less than 6' },
                    { key: 3, val: 'its less than 12' }
                ],
                // value: [3,0],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Last Visit Auto multiple",
                name: "lastvisitamultiple",
                hint: 'In months multiple ',
                type: 'autocomplete',
                multiple: true,
                val: [{ key: 0, val: 'more than 51' },
                { key: 1, val: 'more than 63' },
                { key: 2, val: 'more than 36' },
                { key: 3, val: 'more than 12' },
                { key: 4, val: 'more than 82' },
                { key: 5, val: 'more than 46' },
                ],
                //value: [3,0],
                validations: [
                    { rule: 'required' }
                ]
            },
            {
                label: "Active",
                name: "active",
                hint: 'check ???',
                type: 'checkbox',
                labelPosition: 'after',
                // value: true,
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"

            },
            {
                label: "Has Child?",
                name: "child",
                hint: 'has child ???',
                type: 'checkbox',
                labelPosition: 'after',
                value: null,
                dependent: [

                    {
                        condval: true,
                        field:
                        {
                            label: "How many",
                            name: "childcount",
                            type: 'number',
                            hint: '1to 3',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 3, message: "children can't be more than 50 " }
                            ]
                        }
                    },
                    {
                        condval: true,
                        field: {
                            label: "How many girls",
                            name: "childcountgirls",
                            type: 'number',
                            hint: '1to 3',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 2, message: "girls can't be more than 50 " }
                            ]
                        }
                    },
                    {
                        condval: true,
                        field: {
                            label: "How many boys",
                            name: "childcountboys",
                            type: 'number',
                            hint: '1to 3',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 2, message: "boys can't be more than 50 " }
                            ]
                        }
                    }

                ],
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"

            },
            {
                label: "Has Child   select?",
                name: "haschildsel",
                hint: 'has child ???',
                type: 'select',
                labelPosition: 'after',
                val: [{ val: 1, name: 'Yes' }, { val: 2, name: 'No' }],
                value: null,
                dependent: [

                    {
                        condval: 1,
                        field:
                        {
                            label: "How many Child text Sel",
                            name: "childcount1",
                            type: 'number',
                            hint: '1to 3',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 3, message: "children can't be more than 50 " }
                            ]
                        }
                    },
                    {
                        condval: 2,
                        field: {
                            label: "How many girls ??",
                            name: "childcountgirls1",
                            type: 'number',
                            hint: '1to 2',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 2, message: "girls can't be more than 50 " }
                            ]
                        }
                    },
                    {
                        condval: 1,
                        field: {
                            label: "How many boys ??",
                            name: "childcountboys1",
                            type: 'number',
                            hint: 'up to 2',
                            validations: [
                                { rule: 'required' },
                                { rule: 'min', value: 1 },
                                { rule: 'max', value: 2, message: "boys can't be more than 50 " }
                            ]
                        }
                    }
                ],
                validations: [
                    { rule: 'required' }
                ],
                prefix: "Sel hc",
                suffix: "PM"

            },
            // disabled:true,
            {
                label: "Purchaseable disabled ?",
                name: "is_purchaseble_d",
                //hint:'has child ???',
                type: 'checkbox',
                labelPosition: 'after',
                value: null,
                disabled: true
            },

            {
                label: "Purchaseable ?",
                name: "is_purchaseble",
                //hint:'has child ???',
                type: 'checkbox',
                labelPosition: 'after',
                value: null,//
                dependent: [{

                    condval: true,
                    field: {
                        label: " Product Name",
                        name: "product",
                        type: 'select',
                        val: [{ val: 1, 'name': 'P1' },
                        { val: 0, 'name': 'P2' },
                        { val: 2, 'name': 'P3' },
                        { val: 3, 'name': 'P4' },
                        ],
                        hint: 'choose product',
                        validations: [
                            { rule: 'required' }
                        ]
                    }
                }],
                validations: [
                    { rule: 'required' }
                ],
                prefix: "http://google.com/",
                suffix: "PM"

            },
            {
                label: "City",
                name: "city",
                type: 'text',


            },
            {
                label: "File 1",
                name: "file1",
                type: 'file',
                prefix: "Test-" + Date.now(),
                path: 'test/t1/',
                baseurl: 'test/t1/',
                // value: {
                //     fileservername: "file-1589270133418images (5).jpeg",
                //     name: "images (5).jpeg",
                //     size: 49184,
                //     type: "image/jpeg",
                //     path: "resource/file/",
                //     bucket: "awsbackend-dev-patient-files-test"
                // },
                bucket: 'awsbackend-dev-patient-files-test',
                apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
                validations: [
                    { rule: 'required', message: 'File  required !!' }
                ]
            },

            {
                label: "City2",
                name: "city2",
                type: 'text'
            },
            {
                label: "City3",
                name: "city3",
                type: 'text'
            },
            {
                label: "File 2",
                name: "file2",
                type: 'file',
                multiple: true,
                value: [{
                    fileservername: "file-1589270133418images (5).jpeg",
                    name: "images (5).jpeg",
                    size: 49184,
                    type: "image/jpeg",
                    path: "resource/file/",
                    bucket: "awsbackend-dev-patient-files-test"
                }, {
                    fileservername: "file-1589270133418images (5).jpeg",
                    name: "images (5).jpeg",
                    size: 49184,
                    type: "image/jpeg",
                    path: "resource/file/",
                    bucket: "awsbackend-dev-patient-files-test"
                }],

                prefix: "Test-" + Date.now(),
                path: 'test/t1/',
                baseurl: 'test/t1/',
                bucket: 'awsbackend-dev-patient-files-test',
                apiurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/requestUploadURL",
                apideleteurl: "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev/deletefilefromBucket",
            },

            {
                //label:"City",
                name: "pid",
                type: 'hidden',
                value: "900"
            }
        ]
    };


    public blog_cat_list: any = [
        {
            "_id": "5dc54c9764f5cdfcff5f8a76",
            "val": "CAR BUYING ADVICE",
            "key": "5dc54c9764f5cdfcff5f8a76"
        },
        {
            "_id": "5dc54cbc64f5cd7b9b5f8a77",
            "val": "COMPARISON",
            "key": "5dc54cbc64f5cd7b9b5f8a77"
        },
        {
            "_id": "5dc54cd364f5cd70245f8a78",
            "val": "FOREIGN MAKES",
            "key": "5dc54cd364f5cd70245f8a78"
        },
        {
            "_id": "5dc54d2f64f5cd087e5f8a79",
            "val": "MISCELLANEOUS",
            "key": "5dc54d2f64f5cd087e5f8a79"
        }
    ];
    subscriptions: Subscription[] = [];
    subscriptioncount: number = 0;

    constructor(public router: Router, private route: ActivatedRoute, private _apiService: ApiService) {
        console.log(this.blog_cat_list);
        console.log(this.authval)
        // console.log('custom_link');
        // console.log(this.custom_link);
        console.log(this.formdata, 'formdataformdataformdataformdataformdata')
        this.datasource = '';
        let endpoint = 'getadminbloglistdata'; // for main data endpoint
        let endpointc = 'getadminbloglistdata-count'; // for count endpoint
        let autodataendpoint = 'exitsing-list'; // for count endpoint
        // data param for conditionlimit and search
        let data: any = {
            "condition": {
                "limit": 10,
                "skip": 0
            },
            sort: {
                "type": 'desc',
                "field": 'priority'
            }

        }

        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(autodataendpoint, {}).subscribe((res: any) => {
            // console.log('in constructor');
            console.log(res, 'auto res', res.result, res.result.blog_cat_list, res.result.blog_tag_list);
            // search: [{ label: "Search By Author", field: 'author_search', values: this.authval }] 
            this.search_settings.search.push({ label: "Search By Cat ID", field: 'blogcat_str', values: res.result.blog_cat_list });
            this.search_settings.search.push({ label: "Search By Cat Name", field: 'category_search', values: res.result.blog_cat_str_list });
            this.search_settings.search.push({ label: "Search By Tags from server", field: 'tag_search', values: res.result.blog_tag_list });
            this.search_settings.search.push({ label: "Search Author from Server", field: 'author_search', values: res.result.blog_author_list });
            // this.date_search_source_count = res.count;
            //console.warn('blogData c',res);

        }, error => {
            console.log('Oooops!');
        });
        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(endpointc, data).subscribe((res: any) => {
            // console.log('in constructor');
            // console.log(result);
            this.date_search_source_count = res.count;
            //console.warn('blogData c',res);

        }, error => {
            console.log('Oooops!');
        });

        this.subscriptions[this.subscriptioncount++] = this._apiService.postData(endpoint, data).subscribe((res: any) => {
            // console.log('in constructor');
            // console.log(result);
            res.results.res[3].created_date = 0;
            res.results.res[2].created_date = 'NA';
            res.results.res[4].created_date = 'na';
            res.results.res[3].wrongone = "d 78 l";
            this.pendingmodelapplicationarray = res.results.res;
            // this.pendingmodelapplicationarray[3].wrongone = 'Sdo *9';
            console.warn('blogData', this.pendingmodelapplicationarray);

        }, error => {
            console.log('Oooops!');
        });

    }

    ngOnInit() {

    }
    listenFormFieldChange(val: any) {
        console.log('listenFormFieldChange', val);
        if (val.field.name == 'age' && val.fieldval == 23) {
            this.formfieldrefreshdata = { field: 'email', value: 'debasiskar7@gmail.com' };
        }
    }
    updateformval() {
        this.formdata.fields[0].value = this.temtdata;
        this.formfieldrefreshdata = { field: 'fullname', value: this.temtdata };
        setTimeout(() => {
            this.formfieldrefreshdata = { field: 'email', value: this.temtdata + '@gmail.com' };
        }, 50);
        this.updatetable = !this.updatetable;

    }
    updateformvalmultiple() {
        // this.formdata.fields[0].value = this.temtdata;
        // this.formfieldrefreshdata = { field: 'fullname', value: this.temtdata };
        let formdata: any = {
            fullname: 'Test 90', email: 'a45@gmal.com', htmldesc: 'htmldesc --------', status: 1, year: [2021, 2022], status2: 1, dob: new Date(2018, 11, 24, 10, 33, 30, 0).toISOString(), age: 23, active: true, child: true, is_purchaseble_d: true, is_purchaseble: true,
            lastvisitaupdateafterload: [2, 3], lastvisitaupdatesingleafterload: 3, lastvisitupdateafter: [3, 1],
            file1: {
                fileservername: "file-1589270133418images (5).jpeg",
                name: "images (5).jpeg",
                size: 49184,
                type: "image/jpeg",
                path: "resource/file/",
                bucket: "awsbackend-dev-patient-files-test"
            }
        }
        this.formfieldrefreshdata = { formvaldata: formdata };
        // setTimeout(() => {
        //     this.formfieldrefreshdata = { field: 'email', value: this.temtdata + '@gmail.com' };
        // }, 50);
        // this.updatetable = !this.updatetable;

    }
    showfieldloader() {
        this.formfieldrefreshdata = { field: 'showfieldloader', value: 'email' };
        setTimeout(() => {
            this.formfieldrefreshdata = { field: 'showfieldloader', value: '' };
        }, 6000);

    }
    deleteformfield() {
        this.formfieldrefreshdata = { field: 'removefromcontrol', value: { name: 'desc' } };

    }
    addformfieldarray() {

        this.formfieldrefreshdata = {
            field: 'addfromcontrol', value: [
                {
                    label: "Pet Name 2",
                    name: "petname2",
                    type: 'text',
                    after: 'fullname'
                },
                {
                    label: "Pet Name 3",
                    name: "petname3",
                    type: 'text',
                    after: 'petname2'
                },
                {
                    label: "Pet Name 4",
                    name: "petname4",
                    type: 'text',
                    after: 'petname3'
                }
            ]
        };
    }
    addformfield() {
        this.formfieldrefreshdata = {
            field: 'addfromcontrol', value: {
                label: "Pet Name",
                name: "petname",
                type: 'text',
                after: 'fullname'
            }
        };





    }
    ngOnDestroy() {
        // prevent memory leak when component destroyed
        this.subscriptions.forEach(s => s.unsubscribe());
    }
}