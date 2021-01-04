import { Component, OnInit, ViewChild, Input, Inject, SimpleChange, ElementRef, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { Confirmdialog, SnackbarComponent } from '../listing.component';
import { DomSanitizer } from '@angular/platform-browser';
import { MAT_SNACK_BAR_DATA, MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { ImageCroppedEvent } from 'ngx-image-cropper';

// import {MatSnackBar} from "@angular/material/snack-bar";
@Component({
  selector: 'lib-showform',
  templateUrl: './showform.component.html',
  styleUrls: ['./showform.component.css']
})
export class ShowformComponent implements OnInit {
  @Input()
  set formdata(formdata: any) {
    this.formdataval = formdata;
    // console.log(this.formdataval);
  }
  @Input()
  set formfieldrefreshdata(formfieldrefreshdata: any) {
    this.formfieldrefreshdataval = formfieldrefreshdata;
    // console.log(this.formfieldrefreshdataval);
  }
  @Input()
  set formfieldrefresh(formfieldrefresh: any) {
    this.formfieldrefreshval = formfieldrefresh;
    // console.log(this.formfieldrefreshval);
  }

  // public minDate = new Date(2020, 8, 24);
  // public maxDate = new Date(2020, 8, 31);
  public dateflag: any = false;
  public PasswordVal: any = '';

  public externalDataVal: any = [];

  public customlistenbuttons: any = {};

  @Input()
  set custombuttons(val: any) {
    this.customlistenbuttons = val;
    // console.log(this.customlistenbuttons,'customlistenbuttons form')
  }


  @Input()
  set externaldatavalue(value: any) {
    this.externalDataVal = value;
    console.log(this.externalDataVal, 'this.externalDataVal')
  }

  constructor(private formBuilder: FormBuilder, public _apiService: ApiService, private _snackBar: MatSnackBar, private router: Router, private elementRef: ElementRef,) {

    // console.log(this.minDate, 'today===>', this.maxDate)

  }

  get name() {
    return this.formGroup.get('name') as FormControl;
  }
  formGroup: FormGroup;
  titleAlert = 'This field is required';
  post: any = '';
  showform = false;
  loading = false;
  formfieldrefreshval = false;
  formdataval: any = {};
  formfieldrefreshdataval: any = {};
  filerfielddata: any = [];
  autocompletefiledvalue: any = [];
  filearray: any = [];
  filecount: any = [];
  currentautocomplete: any = '';
  fieldloading: any = '';
  isPasswordVisible: Boolean = true;
  public singleImgFormData: any = [];

  public imgValue: string = '';

  /*for progress bar*/

  color: ThemePalette = 'primary';
  mode: any = 'indeterminate';
  value = 50;
  bufferValue = 75;
  @Output() onFormFieldChange = new EventEmitter<any>();



  imageChangedEvent: any = "";
  croppedImage: any = "";

  ngOnInit() {
    this.createForm(0);


    // this.setChangeValidate()
  }


  // CustomFlagFields
  CustomFlagFields(field: any, item: any) {
    this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'add' });
  }

  CustomFlagFieldsRemove(field: any, item: any) {
    this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value, customButtonVal: item, customfield: 'remove' });
  }


  //Generate Password button
  GeneratePassword(val) {
    this.PasswordVal = '';
    this.PasswordVal = this.makeid(10);

    setTimeout(() => {
      val.value = this.PasswordVal;
      this.formGroup.controls[val.name].patchValue(this.PasswordVal);
    }, 200);

    // console.log(this.PasswordVal, 'PasswordVal++++')


    // for (const g in this.formdataval.fields) {
    //   if (this.formdataval.fields[g].passwordflag == true) {
    //     // console.log(this.formdataval.fields[g].passwordflag, '++++==', this.formdataval.fields[g])
    //     this.formdataval.fields[g].value = this.PasswordVal;
    //     // this.formGroup.controls['password'].patchValue(this.PasswordVal)
    //     this.formfieldrefreshdata = { field: 'password', value: this.PasswordVal };

    // console.log(this.PasswordVal, 'PasswordVal')
    //   }
    // }
  }

  //copy Password button
  copyGeneratePassword(val) {

    // console.log(val,'++pass',this.formGroup.value)

    // console.log(this.formGroup.controls[val.name].value,'++???',this.formGroup.controls[val.value])


    var passwordFieldData: any = '';

    if (this.formGroup.controls[val.name].value != null && typeof (this.formGroup.controls[val.name].value) != 'undefined' && this.formGroup.controls[val.name].value != '') {
      passwordFieldData = this.formGroup.controls[val.name].value;
    } else {
      passwordFieldData = '';
    }


    // console.log(typeof(this.formGroup.controls[val.name].value),'??',this.formGroup.controls[val.name].value)


    if (passwordFieldData != null && passwordFieldData != '' && typeof (passwordFieldData) != 'undefined') {
      const el = document.createElement('textarea');
      el.value = passwordFieldData;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: { errormessage: 'Copy To Clipboard' }
      });
    } else {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: { errormessage: 'Please Generate or Enter Password..!' }
      });
    }
  }


  //preview Password button
  previewGeneratePassword(val) {

    var passwordFieldData: any = '';

    if (this.formGroup.controls[val.name].value != null && typeof (this.formGroup.controls[val.name].value) != 'undefined' && this.formGroup.controls[val.name].value != '') {
      passwordFieldData = this.formGroup.controls[val.name].value;
    } else {
      passwordFieldData = '';
    }

    if (passwordFieldData != null && passwordFieldData != '' && typeof (passwordFieldData) != 'undefined') {
      // console.log(val, '++++++++++++')
      switch (val.type) {
        case 'password':
          val.type = 'text';
          this.isPasswordVisible = false;
          break;
        case 'text':
          val.type = 'password';
          this.isPasswordVisible = true;

          break;
      }
    } else {
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 3000,
        data: { errormessage: 'Please Generate or Enter Password..!' }
      });
    }
  }


  //generate ran password
  makeid(length) {
    var result = 'P';
    length = length + 1;
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }



  // external Data Function
  externalDataFunction(value, index) {
    // this.externalDataVal=[];
    this.onFormFieldChange.emit({ action: 'externaldata', flag: 'add', fieldVal: value, index: index, externalDataVal: this.externalDataVal });
    // console.log(value, this.externalDataVal, index, '++')
  }

  externalDataEditFunction(flag, field, ival, i) {

    // console.log(flag, field, ival, i, 'exter ++++')

    if (flag == 'edit') {
      this.onFormFieldChange.emit({ action: 'externaldata', flag: 'edit', fieldVal: field, index: ival, valind: i, externalDataVal: this.externalDataVal });
    }

    if (flag == 'remove') {
      field.value.splice(i, 1);
    }


  }




  // open calendar into date field
  openCalendar() {
    this.dateflag = true;
    // console.log(this.dateflag, 'dateflag')
  }

  navtocancel() {
    if (this.formdataval.cancelroute != null) {
      this.router.navigate([this.formdataval.cancelroute]);
    }
  }
  ngAfterViewInit() {
    setTimeout(() => {
      // console.log('in after view init trigger');
      for (const g in this.formdataval.fields) {
        if (this.formdataval.fields[g].type == 'file') {
          this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('drop', this.handleDrop.bind(this));
          this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragenter', this.cancel.bind(this));
          this.elementRef.nativeElement.querySelector('#drop' + this.formdataval.fields[g].name).addEventListener('dragover', this.cancel.bind(this));

        }
      }

    }, 1000);
  }

  triggerevents(val: any) {
    // console.log('in triggerevents', val);
    setTimeout(() => {
      // console.log('val loadeed trigger', val);
      this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('drop', this.handleDrop.bind(this));
      this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragenter', this.cancel.bind(this));
      this.elementRef.nativeElement.querySelector('#drop' + val.name).addEventListener('dragdragover', this.cancel.bind(this));
    }, 1000);

  }

  cancel(e) {
    // console.log('cancel',e);
    e.preventDefault();
    return false;
  }


  handleDrop(e) {
    // let apiBaseURL=""
    // this.imageChangedEvent = e;
    const list = document.getElementById('list');
    const apiBaseURL = 'https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev';
    e.preventDefault();
    // console.log('handleDrop', e);
    const dt = e.dataTransfer;
    const files = dt.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      // console.log(files, 'files', e.target.id);
      // console.log('farr', this.filearray);
      // console.log('files++', file);

      for (const g in this.formdataval.fields) {
        if (this.formdataval.fields[g].type == 'file' && this.formdataval.fields[g].name == e.target.id.replace('drop', '')) {

          // console.log(this.singleImgFormData,'singleImgFormData')

          // console.log('file details', this.formdataval.fields[g], g);

          if (this.formdataval.fields[g].multiple == null) {
            // this.deletefile(va)

            // console.log(files[i], 'files[i]=======single')

            //image preview base/64
            if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
              //Show image preview
              let reader = new FileReader();
              reader.onload = (event: any) => {
                this.formdataval.fields[g].imageUrl = event.target.result;

                if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                  for (let c in this.formdataval.fields[g].aspectratio) {
                    this.formdataval.fields[g].croppedImage = [];
                    this.formdataval.fields[g].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;

                    this.formdataval.fields[g].aspectratio[c] = Number(this.formdataval.fields[g].aspectratio[c]).toFixed(2);
                  }
                }
                // console.log(this.formdataval.fields[g], 'imageUrl+++++')
              };
              reader.readAsDataURL(files[i]);
            }

            this.formdataval.fields[g].loaded = 0;

            if (this.filearray[e.target.id.replace('drop', '')] != null) {
              for (const n in this.formdataval.fields) {
                if (this.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                  this.deletefile(this.formdataval.fields[n], 1);
                  setTimeout(() => {
                    this.filearray[e.target.id.replace('drop', '')] = files[i];
                  }, 0);
                }
              }
              // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++==')

            } else {
              this.filearray[e.target.id.replace('drop', '')] = files[i];
            }
          } else {

            // console.log(this.formdataval.fields[g], 'this.formdataval.fields[g]++ >M')

            // console.log(files[i], 'files[i]======= multiple')

            if (files[i].type == 'image/png' || files[i].type == 'image/jpg' || files[i].type == 'image/jpeg') {
              //Show image preview
              let reader = new FileReader();
              reader.onload = (event: any) => {
                files[i].imageUrl = event.target.result;
                if (this.formdataval.fields[g].aspectratio != null && this.formdataval.fields[g].imagecroppedratiolabel != null && this.formdataval.fields[g].aspectratio.length > 0) {
                  // console.log(this.formdataval.fields[g].aspectratio, 'ratio+=====>')

                  files[i].croppedImage = [];
                  files[i].aspectratio = this.formdataval.fields[g].aspectratio;
                  files[i].imagecroppedratiolabel = this.formdataval.fields[g].imagecroppedratiolabel;

                  for (let c in files[i].aspectratio) {
                    if (files[i].aspectratio != null && files[i].aspectratio[c] != null && typeof (files[i].aspectratio[c]) != 'undefined') {
                      // console.log(files[i].aspectratio[c], 'files[i].aspectratio[c]')
                      files[i].aspectratio[c] = Number(files[i].aspectratio[c]).toFixed(2);
                    }
                  }
                  // console.log(files[i], 'files[i]==>')
                }
                // console.log(this.formdataval.fields[g], 'imageUrl+++++')
              };
              reader.readAsDataURL(files[i]);
            }

            files[i].loaded = 0;


            if (this.formdataval.fields[g] != null && this.formdataval.fields[g].imagefields != null && this.formdataval.fields[g].imagefields.length > 0) {

              files[i].imagefields = this.formdataval.fields[g].imagefields;

            }

            if (this.filearray[e.target.id.replace('drop', '')] == null) {
              this.filearray[e.target.id.replace('drop', '')] = [];
            }
            this.filearray[e.target.id.replace('drop', '')].push(files[i]);
          }
        }
      }
      // console.log('this.filearray', this.filearray);

      // var reader = new FileReader();
      // reader.addEventListener('loadend', function(e){
      //   fetch(apiBaseURL+"/requestUploadURL", {
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json'
      //     },
      //     body: JSON.stringify({
      //       name: file.name,
      //       type: file.type
      //     })
      //   })
      //   .then(function(response){
      //     return response.json();
      //   })
      //   .then(function(json){
      //     return fetch(json.uploadURL, {
      //       method: "PUT",
      //       body: new Blob([reader.result], {type: file.type})
      //     })
      //   })
      //   .then(function(){
      //     var uploadedFileNode = document.createElement('div');
      //     uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
      //     list.appendChild(uploadedFileNode);
      //   });
      // });
      // reader.readAsArrayBuffer(file);
    }
    return false;
  }
  // uploadfile(val: any) {
  //   //let apiBaseURL = "https://tge24bc2ne.execute-api.us-east-1.amazonaws.com/dev";
  //   let h:any=this.bucketupload(val);
  //   console.log('upppp',h)
  // }

  trackByFn(index) {
    return index;
  }

  trackByFnMultiple(index) {
    return index;
  }


  trackByFnMulti(index) {
    return index;
  }

  keyupVal(val, item, fi, ind, data, fname, sfname, ev) {
    // console.log('this.filearray[fname][fi].flds[ind] in kyupval ', this.filearray[fname][fi].flds[ind]);
    // console.log(val[fi].imagefields, 'keyupVal', 's', item, fi, ind, data, '---', this.filearray, ',,', fname, sfname, ev.target.value);
    this.filearray[fname][fi].imagefields[ind]['value'] = ev.target.value;
    // if (this.filearray[fname][fi].flds == null) {
    //   this.filearray[fname][fi].flds == [];
    //   this.filearray[fname][fi].flds[ind] = [];
    // }
    if (this.filearray[fname][fi].flds == null || this.filearray[fname][fi].flds[ind] == null) {
      // console.log('111111111111111111111111111111');
      if (this.filearray[fname][fi].flds == null) this.filearray[fname][fi].flds = [];
      this.filearray[fname][fi].flds[ind] = [];
    }
    // console.log('this.filearray[fname][fi].flds[ind] before', this.filearray[fname][fi].flds[ind]);
    this.filearray[fname][fi].flds[ind] = { key: ev.target.name, value: ev.target.value };
    // console.log('this.filearray[fname][fi].flds[ind] after', this.filearray[fname][fi].flds[ind]);
    // console.log(sfname, 'sfname', ind, ev.target.value);
    // console.log('this.filearray');
    // console.log(this.filearray);
    // console.log('ddd', fi, ind);
    // console.log(this.filearray[fname][fi]);
  }


  checkValue(val, item, fi, ind, data, fname, sfname) {
    // console.log(val, '++')

    // console.log(val[fi].imagefields, 'keyupVal', 's', item, fi, ind, data, '---', this.filearray, ',,', fname, sfname);

    if (this.filearray[fname][fi].flds == null || this.filearray[fname][fi].flds[ind] == null) {
      // console.log('111111111111111111111111111111');
      if (this.filearray[fname][fi].flds == null) this.filearray[fname][fi].flds = [];
      this.filearray[fname][fi].flds[ind] = [];
    }

    if (this.filearray[fname][fi].flds != null && this.filearray[fname][fi].flds[ind] != null && this.filearray[fname][fi].flds[ind].key != null && this.filearray[fname][fi].flds[ind].key == sfname) {
      // console.log('2222222222222222222222222 if');

      switch (this.filearray[fname][fi].flds[ind].value) {

        case true:
          this.filearray[fname][fi].flds[ind].value = false;
          break;
        case false:
          this.filearray[fname][fi].flds[ind].value = true;
          break;
      }
    } else {
      // console.log('33333333333333333333 else');

      this.filearray[fname][fi].flds[ind] = { key: sfname, value: true };
    }

    // console.log('this.filearray[fname][fi].flds[ind] before', this.filearray[fname][fi].flds[ind]);
    // console.log('this.filearray[fname][fi].flds[ind] after', this.filearray[fname][fi].flds[ind]);
    // console.log('this.filearray');
    // console.log(this.filearray);
    // console.log('ddd', fi, ind);
    // console.log(this.filearray[fname][fi]);
  }



  uploadfile(val: any) {
    // console.log('upppp', val);
    const reader = new FileReader();
    const file: any = this.filearray[val.name];
    // console.log('file val', val);
    file.uploaded = 2; // show progressbar
    let temploader: any = this.fieldloading[val.name];
    temploader = val.name;
    // reader.addEventListener('loadend', function (e) {
    reader.onloadend = (e) => {
      fetch(val.apiurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: val.prefix + file.name.split(" ").join(""),
          type: file.type,
          path: val.path,
          bucket: val.bucket
        })
      })
        .then(function (response) {
          // console.log('buck', response);
          return response.json();
        })
        .then(function (json) {
          return fetch(json.uploadURL, {
            method: 'PUT',
            body: new Blob([reader.result], { type: file.type })
          });
        })
        .then(function () {
          // return 'success';
          file.uploaded = 1;
          val.loaded = null;
          file.fileservername = val.prefix + file.name.split(" ").join("");
          // if(val.imagefields.length > 0){
          //   file.imagefields = val.imagefields
          // }
          // console.log(file.type, 'file.type');
          // temploader = null;
          // var uploadedFileNode = document.createElement('div');
          // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
          // list.appendChild(uploadedFileNode);
        });
      // });
    };
    reader.readAsArrayBuffer(file);
  }


  uploadall(val: any) {
    // this.filearray[val.name].uploadall = 1;
    for (const y in this.filearray[val.name]) {
      const c: any = parseInt(y) * 500;
      // console.log('---', val, 'v---', 'this.filearray[val.name]', this.filearray[val.name][y], this.filearray[val.name][y].uploaded);
      if (this.filearray[val.name][y].bucket == null) this.uploadfilemultiple(val, this.filearray[val.name][y], y);

    }

  }


  deletefilemultipleall(val: any) {
    for (const y in this.filearray[val.name]) {
      const c: any = parseInt(y) * 500;
      this.deletefilemultiple(val, this.filearray[val.name][y], y);
    }
    setTimeout(() => {
      this.filearray[val.name] = null;
    }, 2000);

  }


  uploadfilemultiple(val: any, f: any, indexf: any) {
    const reader = new FileReader();
    const file: any = this.filearray[val.name][indexf];
    // console.log(file,'file');
    // console.log(val, 'val');
    // console.log(f,'f');
    if (this.filecount[val.name] == null) { this.filecount[val.name] = 0; }
    this.filecount[val.name]++;
    // console.log('file val in m 2', val, f, indexf, 'if',file);
    file.uploaded = 2; // show progressbar
    let temploader: any = this.fieldloading[val.name];
    temploader = val.name;
    // reader.addEventListener('loadend', function (e) {
    reader.onloadend = (e) => {
      fetch(val.apiurl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: val.prefix + file.name.split(" ").join(""),
          type: file.type,
          path: val.path,
          bucket: val.bucket
        })
      })
        .then(function (response) {
          // console.log('buck', response);
          return response.json();
        })
        .then(function (json) {
          return fetch(json.uploadURL, {
            method: 'PUT',
            body: new Blob([reader.result], { type: file.type })
          });
        })
        .then(function () {
          // return 'success';
          file.uploaded = 1;
          file.loaded = null;
          file.fileservername = val.prefix + file.name.split(" ").join("");
          // console.log(file.type,'file.type')
          // temploader = null;
          // var uploadedFileNode = document.createElement('div');
          // uploadedFileNode.innerHTML = '<a href="//s3.amazonaws.com/slsupload/'+ file.name +'">'+ file.name +'</a>';
          // list.appendChild(uploadedFileNode);
        });
      // });
    };
    // console.log('file type', file, typeof (file));
    const ftype: any = typeof (file);
    // if (ftype == "Blob") 
    reader.readAsArrayBuffer(file);
  }


  deletefile(val: any, flag: any = '') {
    // console.log('this.filearray',this.filearray);
    console.log('val', val);
    // console.log(val.name);
    const source: any = {};
    const file: any = this.filearray[val.name];
    source.file = val.prefix + file.name;
    source.path = val.path;
    source.bucket = val.bucket;
    this.filearray[val.name].uploaded = 2;

    this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == 'success' && flag == '') {
        // this.formGroup.reset();
        val.value = {};
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 6000,
          data: { errormessage: 'Deleted !!' }
        });
        this.filearray[val.name] = null;

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
  }


  deletesinglefile(val: any, flag: any) {
    // console.log(val, 'val+++ delete', flag)
    if (flag == 'image/png' || flag == 'image/jpg' || flag == 'image/jpeg') {
      this.filearray[val.name] = null;
      val.imageUrl = null;
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 6000,
        data: { errormessage: 'Deleted !!' }
      });
    } else {
      this.filearray[val.name] = null;
      this._snackBar.openFromComponent(SnackbarComponent, {
        duration: 6000,
        data: { errormessage: 'Deleted !!' }
      });
    }
  }


  deletesinglefilefrommultiple(val: any, field: any = '', index: any) {
    // console.log(val, field, index, '????+++++')
    const file: any = this.filearray[val.name][index];
    if (this.filearray[val.name] != null) this.filearray[val.name].splice(index, 1);
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 6000,
      data: { errormessage: 'Deleted !!' }
    });
  }



  deletefilemultiple(val: any, field: any = '', index: any) {
    const source: any = {};
    const file: any = this.filearray[val.name][index];
    this.filecount[val.name]--;
    source.file = val.prefix + file.name;
    source.path = val.path;
    source.bucket = val.bucket;
    file.uploaded = 2;
    this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == 'success') {
        // this.formGroup.reset();
        this._snackBar.openFromComponent(SnackbarComponent, {
          duration: 6000,
          data: { errormessage: 'Deleted !!' }
        });
        if (this.filearray[val.name] != null) this.filearray[val.name].splice(index, 1);
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
  }


  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {

    // console.log('ngonchange in form !!!', changes, 'frv', this.formfieldrefreshdataval);
    for (const v in changes) {
      // console.log(v,changes[v],'vv');
      if (v == 'formfieldrefreshdata') {
        setTimeout(() => {
          // console.log('fff in set tt');
          if (this.formfieldrefreshdataval != null) {
            // console.log(this.formfieldrefreshdataval, 'm');
            // console.log(this.formfieldrefreshdataval.field);
            // console.log(this.formfieldrefreshdataval.value);
            if (this.formGroup != null && this.formfieldrefreshdataval.field != null && this.formGroup.controls[this.formfieldrefreshdataval.field] != null) {
              this.formGroup.controls[this.formfieldrefreshdataval.field].patchValue(this.formfieldrefreshdataval.value);
            } if (this.formfieldrefreshdataval.field == null && this.formfieldrefreshdataval.formvaldata != null && typeof (this.formfieldrefreshdataval.formvaldata) == 'object') {
              for (const formkey in this.formfieldrefreshdataval.formvaldata) {
                // console.log('this.formfieldrefreshdataval.data[formkey]', this.formfieldrefreshdataval.formvaldata[formkey]);
                if (this.formGroup.controls[formkey] != null) { this.formGroup.controls[formkey].patchValue(this.formfieldrefreshdataval.formvaldata[formkey]); }
                for (const formdatavalkey in this.formdataval.fields) {
                  if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (this.formdataval.fields[formdatavalkey].multiple != null && this.formdataval.fields[formdatavalkey].multiple != false)) {
                    for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                      // console.log('this.formdataval.fields[formdatavalkey].val multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                      if (this.formfieldrefreshdataval.formvaldata[formkey].indexOf(this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {
                        this.setautocompletevalue(this.formdataval.fields[formdatavalkey].val[autoselval], this.formdataval.fields[formdatavalkey]);
                      }

                    }

                  }
                  // end of if

                  if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'autocomplete' && (this.formdataval.fields[formdatavalkey].multiple == null || this.formdataval.fields[formdatavalkey].multiple == false)) {
                    for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                      // console.log('this.formdataval.fields[formdatavalkey].val single', this.formdataval.fields[formdatavalkey].val, autoselval);
                      if (this.formfieldrefreshdataval.formvaldata[formkey] == (this.formdataval.fields[formdatavalkey].val[autoselval].key)) {
                        this.setautocompletevalue(this.formdataval.fields[formdatavalkey].val[autoselval], this.formdataval.fields[formdatavalkey]);
                      }

                    }

                  }
                  // enf of if

                  if (this.formdataval.fields[formdatavalkey].name == formkey && this.formdataval.fields[formdatavalkey].type == 'checkbox' && (this.formdataval.fields[formdatavalkey].multiple != null && this.formdataval.fields[formdatavalkey].multiple != false)) {
                    for (const autoselval in this.formdataval.fields[formdatavalkey].val) {
                      // console.log('this.formdataval.fields[formdatavalkey].val check box multiple ', this.formdataval.fields[formdatavalkey].val, autoselval);
                      // console.log('formkey +  + autoselval', formkey + '__' + autoselval);
                      if (this.formfieldrefreshdataval.formvaldata[formkey].indexOf(this.formdataval.fields[formdatavalkey].val[autoselval].key) != -1) {

                        if (this.formGroup.controls[formkey + '__' + autoselval] != null) { this.formGroup.controls[formkey + '__' + autoselval].patchValue(true); }
                      } else {
                        if (this.formGroup.controls[formkey + '__' + autoselval] != null) { this.formGroup.controls[formkey + '__' + autoselval].patchValue(false); }

                      }

                    }

                  }
                  // end of if


                }
              }


            }
            if (this.formfieldrefreshdataval.field == 'showfieldloader') {
              this.fieldloading = this.formfieldrefreshdataval.value;
            }
            if (this.formfieldrefreshdataval.field == 'addfromcontrol') {
              this.managefromcontrol(this.formfieldrefreshdataval.value, 'add');
            }
            if (this.formfieldrefreshdataval.field == 'removefromcontrol') {
              this.managefromcontrol(this.formfieldrefreshdataval.value, 'remove');
            }

          }
        }, 0);
      }
    }
  }

  inputblur(val: any) {
    // console.log('on blur .....');
    this.formGroup.controls[val].markAsUntouched();
  }

  filterautocomplete(val: any, data: any) {
    this.inputblur(val);
    // console.log('cc', this.formGroup.controls[val].value, data.val);
    const fieldval = this.formGroup.controls[val].value;
    if (fieldval == '' || fieldval == null) {
      this.filerfielddata = [];
    } else {
      const filterval = data.val.filter(function (e) {
        // console.log('e', e, fieldval)
        return e.val.includes(fieldval);
      });
      this.filerfielddata = [];
      this.filerfielddata = filterval;
      // console.log('fil', filterval);
    }

  }
  reloadautocomplete(val: any) {
    this.currentautocomplete = val.name;
  }

  removechipsingle(val: any) {
    this.autocompletefiledvalue[val.name] = null;
  }
  removechipmultiple(val: any, index: any) {
    this.autocompletefiledvalue[val.name].splice(index, 1);
    if (this.autocompletefiledvalue[val.name].length == 0) {
      this.autocompletefiledvalue[val.name] = null;
    }
  }
  setautocompletevalue(val: any, field: any) {
    // console.log('ff auto complete set ', val, field);



    if (field.multiple == null) {
      this.autocompletefiledvalue[field.name] = val.key;
    } else {
      if (this.autocompletefiledvalue[field.name] == null) {
        this.autocompletefiledvalue[field.name] = [];
      }
      this.autocompletefiledvalue[field.name].push(val.key);

    }
    if (this.formGroup.controls[field.name] != null) {
      this.formGroup.controls[field.name].patchValue(null);
      this.inputblur(field.name);
    }

  }


  managefromcontrol(field: any, type: any) {
    // console.log('manage control', field, type, field.length);
    if (type == 'remove' && field.name != null) {
      for (const y in this.formdataval.fields) {
        if (this.formdataval.fields[y].name == field.name) {
          this.formdataval.fields.splice(parseInt(y), 1);
          this.formGroup.removeControl(field.name);
          // console.log('removed', field['name'], 'c', y, field);
        }
      }
    }

    if (type == 'remove' && field.name == null && field.length > 1) {
      // console.log(field.length, 'fl');
      for (const y in this.formdataval.fields) {
        for (const z in field) {
          if (this.formdataval.fields[y].name == field[z]) {
            this.formdataval.fields.splice(parseInt(y), 1);
            this.formGroup.removeControl(field[z]);
            // console.log('removed in array form ', field[z], 'c ar', y, field);
          }
        }
      }
    }

    if (type == 'add') {
      // console.log('in add form');
      if (field.after != null) {
        for (const y in this.formdataval.fields) {
          if (this.formdataval.fields[y].name == field.after) {
            this.formdataval.fields.splice(parseInt(y) + 1, 0, field);
            this.createForm(1);
            // console.log('added ..', field['name'], 'c', y);
          }
        }
      } else {
        if (typeof (field) == 'object') {
          // console.log('in array form  add');
          for (const v in field) {
            for (const y in this.formdataval.fields) {
              if (field[v] != null && field[v].name != null && this.formdataval.fields[y].name == field[v].after) {
                this.formdataval.fields.splice(parseInt(y) + 1, 0, field[v]);
                this.createForm(1);
                // console.log('array field added ..', field[v]['name'], 'c', y);
              }
            }

          }
        }
      }

    }

  }

  resetformdata() {
    this.formGroup.reset();
    this.filearray = [];
    this.autocompletefiledvalue = [];
    this.currentautocomplete = '';

  }


  checkchange(field: any, index: any) {
    // console.log(field, 'change', index, 'index2');
    if (this.formGroup.controls[field.name] != null) {
      this.onFormFieldChange.emit({ field, fieldval: this.formGroup.controls[field.name].value, fromval: this.formGroup.value });
    }
    if (field.dependent != null && field.dependent.length > 0) {
      let vc: any = 0;
      for (const n in field.dependent) {

        if (field.dependent[n].condval.toString() == this.formGroup.controls[field.name].value.toString()) {
          // let temvalidationrulet: any = [];
          vc++;
          // this.formGroup.addControl(field.dependent[n].field.name, new FormControl(field.dependent[n].field.value, temvalidationrulet));
          // console.log('nnnnn', '--', parseInt(index + 1 + parseInt(vc)), '--', vc + index + 1, index, vc, field.dependent[n].field['name']);
          this.formdataval.fields.splice(parseInt(index + parseInt(vc)), 0, field.dependent[n].field);
          this.createForm(1);

        } else {
          for (const y in this.formdataval.fields) {
            if (this.formdataval.fields[y].name == field.dependent[n].field.name) {
              this.formdataval.fields.splice(parseInt(y), 1);
              this.formGroup.removeControl(field.dependent[n].field.name);
              // console.log('removed', field.dependent[n].field['name'], 'c', y);
            }
          }

        }
      }
    }
  }



  createForm(initialize: any = 0) {
    /*this.formGroup = this.formBuilder.group({
      'email': [null, [Validators.required, Validators.pattern(emailregex)], this.checkInUseEmail],
      'fullname': [null, Validators.required],
     // 'password': [null, [Validators.required, this.checkPassword]],
      //'description': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      //'validate': ''
    });*/
    // let demoArray:any=[];
    if (initialize == 0) {
      this.formGroup = this.formBuilder.group({});
    }
    // console.log(this.formGroup, 'fg')
    for (const n in this.formdataval.fields) {
      if (this.formGroup.controls[this.formdataval.fields[n]] == null) {
        const temcontrolarr: any = [];
        const temvalidationrule: any = [];
        if (this.formdataval.fields[n].value != null) {
          temcontrolarr.push(this.formdataval.fields[n].value);
        } else {
          temcontrolarr.push('');
        }

        if (this.formdataval.fields[n].type == 'file') {
          this.filearray[this.formdataval.fields[n].name] = this.formdataval.fields[n].value;
          // console.log('db', this.filearray[this.formdataval.fields[n].name], this.formdataval.fields[n].name);
          if (this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
            for (const fa in this.filearray[this.formdataval.fields[n].name]) {
              // console.log('fv', fa);
              if (this.filearray[this.formdataval.fields[n].name][fa] != null) {
                // console.log('fr', this.filearray[this.formdataval.fields[n].name][fa]);
                this.filearray[this.formdataval.fields[n].name][fa].uploaded = 1;


                // this.filearray[this.formdataval.fields[n].name][fa].imagefields = this.formdataval.fields[n].imagefields;
              }
            }
            if (this.filearray[this.formdataval.fields[n].name] != null) {
              this.filecount[this.formdataval.fields[n].name] = this.filearray[this.formdataval.fields[n].name].length;
            }

          } else {
            if (this.filearray[this.formdataval.fields[n].name] != null) {
              this.filearray[this.formdataval.fields[n].name].uploaded = 1;

            }
          }

          // console.log(this.filearray, 'filearray')
        }

        if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
          if (this.formdataval.fields[n].value == null) { temcontrolarr.push([]); } else {
            if (this.formdataval.fields[n].val != null) {
              const tcharr: any = [];
              for (const b in this.formdataval.fields[n].val) {
                // console.log('b', b, this.formdataval.fields[n].val[b]);
                if (this.formdataval.fields[n].value != null && this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[b].key)) {
                  tcharr.push(true);
                } else { tcharr.push(false); }
              }
              // push the val
              temcontrolarr.push(tcharr);
              // console.log('tch', tcharr);
            }
          }
        }

        if (this.formdataval.fields[n].validations != null && this.formdataval.fields[n].validations.length > 0) {
          for (const v in this.formdataval.fields[n].validations) {
            // setTimeout( ()=>{
            if (this.formdataval.fields[n].validations[v].message == null) {
              this.formdataval.fields[n].validations[v].message = 'Not Valid !!';
            }
            if (this.formdataval.fields[n].validations[v].rule == 'required') {
              temvalidationrule.push(Validators.required);
            }
            if (this.formdataval.fields[n].validations[v].rule == 'match') {
              this.formGroup.setValidators(this.checkPasswords);
            }
            if (this.formdataval.fields[n].validations[v].rule == 'autorequired') {
              this.formGroup.setValidators(this.autorequired);
            }
            if (this.formdataval.fields[n].validations[v].rule == 'pattern') {
              temvalidationrule.push(Validators.pattern(this.formdataval.fields[n].validations[v].value));
            }
            if (this.formdataval.fields[n].validations[v].rule == 'maxLength') {
              temvalidationrule.push(Validators.maxLength(this.formdataval.fields[n].validations[v].value));
            }
            if (this.formdataval.fields[n].validations[v].rule == 'min') {
              temvalidationrule.push(Validators.min(this.formdataval.fields[n].validations[v].value));
            }
            if (this.formdataval.fields[n].validations[v].rule == 'max') {
              temvalidationrule.push(Validators.max(this.formdataval.fields[n].validations[v].value));
            }
            if (this.formdataval.fields[n].validations[v].rule == 'minLength') {
              temvalidationrule.push(Validators.minLength(this.formdataval.fields[n].validations[v].value));
            }
            // },0);
          }
        }

        // document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
        // demoArray[this.formdataval.fields[n].name]=new FormControl('');

        if (this.formdataval.fields[n].type == 'image' && this.formdataval.fields[n].value != null) {
          setTimeout(() => {
            document.querySelector('.imgwrap_' + this.formdataval.fields[n].name + '_' + this.formdataval.fields[n].value).classList.add('imagechoiceactive');
          }, 4000);

        }
        if (this.formdataval.fields[n].type == 'checkbox' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
          let tchvar: any = false;
          // let
          // console.log('vv ??? ', this.formdataval.fields[n].value, this.formdataval.fields[n].name, this.formdataval.fields[n].multiple);
          // this.formGroup.addControl(this.formdataval.fields[n].name, new FormArray([]));
          for (const j in this.formdataval.fields[n].val) {
            if (this.formdataval.fields[n].value != null && this.formdataval.fields[n].value.includes(this.formdataval.fields[n].val[j].key)) {
              tchvar = true;
            } else { tchvar = false; }
            // console.log('n', n, j, tchvar);
            this.formGroup.addControl(this.formdataval.fields[n].name + '__' + j, new FormControl(tchvar, temvalidationrule));
            // if()
            /*const control = new FormControl(tchvar); // if first item set to true, else false
       (this.formGroup.controls[this.formdataval.fields[n].name] as FormArray).push(control);*/
            // this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
            // this.formBuilder.control(tchvar)
            // ]));
          }

          /*this.formGroup.addControl(this.formdataval.fields[n].name,this.formBuilder.array([
        this.formBuilder.control(false),
        this.formBuilder.control(true),
        this.formBuilder.control(true),
        this.formBuilder.control(false),
      ]));*/
          // this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl(temcontrolarr[0], temvalidationrule));
        } else {
          this.formGroup.addControl(this.formdataval.fields[n].name, new FormControl({ value: temcontrolarr[0], disabled: this.formdataval.fields[n].disabled }, temvalidationrule));
        }


        if (this.formdataval.fields[n].type == 'autocomplete' && this.formdataval.fields[n].multiple != null && this.formdataval.fields[n].multiple == true) {
          for (const at in this.formdataval.fields[n].val) {
            // console.log('at ...', this.formdataval.fields[n].val[at], at, this.formdataval.fields[n].value, this.formdataval.fields[n].val[at].key);
            if (this.formdataval.fields[n].value != null && typeof (this.formdataval.fields[n].value) == 'object' && this.formdataval.fields[n].value.indexOf(this.formdataval.fields[n].val[at].key) != -1) {
              // console.log(this.formdataval.fields[n].val[at].key, 'multi autocomplete triggered  !! ');
              this.setautocompletevalue(this.formdataval.fields[n].val[at], this.formdataval.fields[n]);
            }
          }
        }
        if (this.formdataval.fields[n].type == 'autocomplete' && (this.formdataval.fields[n].multiple == null || this.formdataval.fields[n].multiple == false)) {
          // console.log('single auto complete trigger block', this.formdataval.fields[n]);

          if (this.formdataval.fields[n].value != null) {
            // console.log('set auto complete single triggered', this.formdataval.fields[n]);
            this.setautocompletevalue(this.formdataval.fields[n].val[0], this.formdataval.fields[n]);

          }

        }



        // 'newControl', new FormControl('', Validators.required)
      }
    }
    // =this.checkPasswords(this.formGroup);
    // this.formGroup = this.formBuilder.group(demoArray);

    setTimeout(() => {
      // console.log(this.formGroup,'fg',demoArray);
      this.showform = true;
      if (this.formdataval.submitactive == null) {
        this.formdataval.submitactive = true;
      }
      // console.log('grp', this.formGroup.controls);
    }, 10);

  }

  setChangeValidate() {
    this.formGroup.get('validate').valueChanges.subscribe(
      (validate) => {
        if (validate == '1') {
          this.formGroup.get('name').setValidators([Validators.required, Validators.minLength(3)]);
          this.titleAlert = 'You need to specify at least 3 characters';
        } else {
          this.formGroup.get('name').setValidators(Validators.required);
        }
        this.formGroup.get('name').updateValueAndValidity();
      }
    );
  }


  chooseimg(vals: any, fields: any) {
    // console.log(vals, fields);
    document.querySelectorAll('.imgwrapper').forEach(el => {
      let elem: any;
      elem = el;
      // elem.style.transition = "opacity 0.5s linear 0s";
      // elem.style.opacity = 0.5;
      elem.classList.remove('imagechoiceactive');
    });
    // console.log('imgwrap_' + fields.name + '_' + vals.key);
    document.querySelector('.imgwrap_' + fields.name + '_' + vals.key).classList.add('imagechoiceactive');
    this.formGroup.controls[fields.name].patchValue(vals.key);
  }
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    const pass = group.controls.password.value;
    const confirmPass = group.controls.confirmpassword.value;
    if (confirmPass == null || confirmPass == '') {
      group.controls.confirmpassword.setErrors({ required: true });
      return { required: true };
    }
    if (pass != confirmPass) {
      group.controls.confirmpassword.setErrors({ match: true });
      return { match: true };
    }

    // return pass === confirmPass ? null : { notSame: true }
  }
  checkPassword(control) {
    const enteredPassword = control.value;
    const passwordCheck = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/;
    return (!passwordCheck.test(enteredPassword) && enteredPassword) ? { requirements: true } : null;
  }
  autorequired(group: any) { // here we have the 'passwords' group

    for (const b in group) {
      if (group[b].type == 'autocomplete' && group[b].validations != null && group[b].validations[0] != null && group[b].validations[0].rule == 'autorequired' && this.autocompletefiledvalue[group[b].name] == null) {

        this.formGroup.controls[group.name].setErrors({ autorequired: true });
        return { autorequired: true };
      }
    }
    // console.log('bgrrr',group,group.name);
    // if(this.formGroup.controls[group.name] !=null && group.validations!=null && group.validations[0]!=null && group.validations[0].rule=='autorequired' && this.autocompletefiledvalue[group.name]==null){



    // let pass = group.controls.password.value;
    // let confirmPass = group.controls.confirmpassword.value;
    // if(confirmPass==null || confirmPass==''){
    //   group.controls.confirmpassword.setErrors({required:true});
    //   return { required: true };
    // }
    // if(pass!=confirmPass){
    //   group.controls.confirmpassword.setErrors({'match':true});
    //   return {match:true};
    // }

    // return pass === confirmPass ? null : { notSame: true }
  }

  checkInUseEmail(control) {
    // mimic http database access
    const db = ['tony@gmail.com'];
    return new Observable(observer => {
      setTimeout(() => {
        const result = (db.indexOf(control.value) !== -1) ? { alreadyInUse: true } : null;
        observer.next(result);
        observer.complete();
      }, 4000);
    });
  }

  getError(data: any) {
    // console.log('getError', data);
    return this.formGroup.get('email').hasError('required') ? 'Field is required' :
      this.formGroup.get('email').hasError('pattern') ? 'Not a valid emailaddress' :
        this.formGroup.get('email').hasError('alreadyInUse') ? 'This emailaddress is already in use' : '';
  }

  getErrorPassword() {
    return this.formGroup.get('password').hasError('required') ? 'Field is required (at least eight characters, one uppercase letter and one number)' :
      this.formGroup.get('password').hasError('requirements') ? 'Password needs to be at least eight characters, one uppercase letter and one number' : '';
  }

  onSubmit(post) {
    this.post = post;
    const tempformval: any = {};
    for (const x in this.formGroup.controls) {
      this.formGroup.controls[x].markAsTouched();
      // console.log(this.formGroup.controls[x].errors, x, 'err');
      // if(this.formGroup.controls[x].valid){
      // console.log('x',x);
      const b = x.split('__');
      // console.log('b',b,b.length,b[0]);


      for (const m in this.formdataval.fields) {
        if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple == null && this.filearray[this.formdataval.fields[m].name] != null) {
          if (this.filearray[this.formdataval.fields[m].name] != null && this.filearray[this.formdataval.fields[m].name].uploaded == 1) {
            // fileservername: "Test-1589216992392My Saved Schema.json"
            // lastModified: 1589174477504
            // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
            // name: "My Saved Schema.json"
            // size: 135096
            // type: "application/json"
            // uploaded: 1

            // console.log(this.filearray[this.formdataval.fields[m].name], '>>?? file submit')
            // console.log(this.formdataval.fields[m], '>>?? file submit ss')


            const tfile: any = {};

            if (this.formdataval.fields[m].aspectratio != null && this.formdataval.fields[m].aspectratio.length > 0) {
              tfile.aspectratio = this.formdataval.fields[m].aspectratio;
              tfile.croppedImage = this.formdataval.fields[m].croppedImage;
            }

            tfile.fileservername = this.filearray[this.formdataval.fields[m].name].fileservername;
            tfile.name = this.filearray[this.formdataval.fields[m].name].name;
            tfile.size = this.filearray[this.formdataval.fields[m].name].size;
            tfile.type = this.filearray[this.formdataval.fields[m].name].type;
            tfile.path = this.formdataval.fields[m].path;
            tfile.bucket = this.formdataval.fields[m].bucket;
            tfile.baseurl = this.formdataval.fields[m].baseurl;

            tfile.imagefields = this.formdataval.fields[m].imagefields;

            this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);

            // console.log(tfile, 'tfile>>',)
          }
        }


        if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
          const tfilearr: any = [];
          for (const g in this.filearray[this.formdataval.fields[m].name]) {
            if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 1) {
              // console.log(this.filearray[this.formdataval.fields[m].name][g], 'this.filearray[this.formdataval.fields[m].name][g]')
              // fileservername: "Test-1589216992392My Saved Schema.json"
              // lastModified: 1589174477504
              // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
              // name: "My Saved Schema.json"
              // size: 135096
              // type: "application/json"
              // uploaded: 1
              const tfile: any = {};

              if (this.filearray[this.formdataval.fields[m].name][g].aspectratio != null && this.filearray[this.formdataval.fields[m].name][g].aspectratio.length > 0) {
                tfile.aspectratio = this.filearray[this.formdataval.fields[m].name][g].aspectratio;
                tfile.croppedImage = this.filearray[this.formdataval.fields[m].name][g].croppedImage;
              }

              tfile.fileservername = this.filearray[this.formdataval.fields[m].name][g].fileservername;
              tfile.name = this.filearray[this.formdataval.fields[m].name][g].name;
              tfile.size = this.filearray[this.formdataval.fields[m].name][g].size;
              tfile.type = this.filearray[this.formdataval.fields[m].name][g].type;
              tfile.path = this.formdataval.fields[m].path;
              tfile.bucket = this.formdataval.fields[m].bucket;
              tfile.baseurl = this.formdataval.fields[m].baseurl;

              console.log(tfile, 'tfile++')

              // tfile.imagefields = this.formdataval.fields[m].imagefields; flds

              if (this.formdataval.fields[m].imagefields != null && this.formdataval.fields[m].imagefields.length > 0) {

                // console.log(this.filearray[this.formdataval.fields[m].name][g].flds, 'flds ')

                // console.log(this.filearray[this.formdataval.fields[m].name][g].imagefields, 'imagefields')

                if (this.filearray[this.formdataval.fields[m].name][g].flds != null && this.filearray[this.formdataval.fields[m].name][g].flds.length > 0) {

                  tfile.imgfields = this.filearray[this.formdataval.fields[m].name][g].flds;

                  tfile.flds = this.filearray[this.formdataval.fields[m].name][g].flds;

                  // for (let img in this.filearray[this.formdataval.fields[m].name][g].imagefields) {
                  //   for (let fl in this.filearray[this.formdataval.fields[m].name][g].flds) {
                  //     if (this.filearray[this.formdataval.fields[m].name][g].flds[fl].key == this.filearray[this.formdataval.fields[m].name][g].imagefields[img].name) {
                  //       console.log('imagefields', this.filearray[this.formdataval.fields[m].name][g].imagefields[img])
                  //       this.filearray[this.formdataval.fields[m].name][g].imagefields[img].val = this.filearray[this.formdataval.fields[m].name][g].flds[fl].value
                  //     }
                  //   }
                  // }

                  // tfile.imgfields = this.formdataval.fields[m].imagefields;

                  // tfile.imgfil=this.filearray[this.formdataval.fields[m].name][g].flds;

                  // console.log('tfile++++>', tfile)

                }
              }


              tfilearr.push(tfile);

            }
            this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfilearr);
          }
        }


        if (this.formdataval.fields[m].type == 'autocomplete') {
          if (this.autocompletefiledvalue != null && this.autocompletefiledvalue[this.formdataval.fields[m].name] != null && this.formdataval.fields[m].validations != null) {
            // console.log('autoerror', this.formGroup.controls[this.formdataval.fields[m].name].errors);
            this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: null });
            // console.log('autoerror after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);
          } else {
            // console.log('autoerror set', this.formGroup.controls[this.formdataval.fields[m].name].errors);
            this.formGroup.controls[this.formdataval.fields[m].name].setErrors({ required: true });
            // console.log('autoerror set after ', this.formGroup.controls[this.formdataval.fields[m].name].errors);

          }
          if (x == this.formdataval.fields[m].name && tempformval[x] == null) {
            tempformval[x] = this.autocompletefiledvalue[this.formdataval.fields[m].name];
          }
        }


        if (b.length > 1 && b[0] == this.formdataval.fields[m].name && this.formdataval.fields[m].name != x && this.formdataval.fields[m].type == 'checkbox' && this.formdataval.fields[m].multiple != null) {
          // console.log('aaaaff...');
          if (this.formGroup.controls[x].value == true) {
            for (const k in this.formdataval.fields[m].val) {
              if (this.formdataval.fields[m].val[k].key == b[1]) {
                if (tempformval[this.formdataval.fields[m].name] == null) {
                  tempformval[this.formdataval.fields[m].name] = [];
                }
                tempformval[this.formdataval.fields[m].name].push(b[1]);
                // console.log('gv', b[1]);
              }
            }
          }
        }


        //for multiple email add
        // if(this.formdataval.fields[m].type == 'email'){
        //   if(this.formGroup.controls[x].value == true){
        //     console.log(this.formdataval.fields[m],'==this.formdataval.fields[m]++',this.formGroup.controls[x].value,'??',tempformval,'>>>',b[0])
        //     // for(let i  in tempformval){
        //     //   if(tempformval[i] == this.formdataval.fields[m].name.match('/email/g')){
        //     //     console.log(tempformval[i],'tempformval[i]')
        //     //   }
        //     // }
        //   }
        // }



        // else{
        if (x == this.formdataval.fields[m].name && tempformval[x] == null) {
          tempformval[x] = this.formGroup.controls[x].value;
        }
        //  }
      }
      // console.log(this.formGroup.controls[x].errors, x, 'err22');
      // }
    }
    // console.log(post, 'post', this.formGroup.valid, this.formdataval, this.formdataval.apiUrl, 'ffff', tempformval);


    if (this.formGroup.valid) {
      // if (this.formdataval.endpoint != null || this.formdataval.apiUrl) {
      this.loading = true;
      const link: any = this.formdataval.apiUrl + this.formdataval.endpoint;
      const source: any = {};
      source.data = this.formGroup.value;

      if (this.formdataval.secret != null && this.formdataval.jwttoken != null) {
        source.secret = this.formdataval.secret;
        source.jwttoken = this.formdataval.jwttoken;
      }

      if (this.formdataval.endpoint != null && this.formdataval.endpoint != '') {

        this._apiService.postSearch(link, this.formdataval.jwttoken, source).subscribe(res => {
          let result: any = {};
          result = res;
          if (result.status == 'success') {
            this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
            this.formGroup.reset();
            this._snackBar.openFromComponent(SnackbarComponent, {
              duration: 6000,
              data: { errormessage: this.formdataval.successmessage }
            });
            // console.log(result, 'red', this.formdataval.redirectpath);
            if (this.formdataval.redirectpath != null && this.formdataval.redirectpath != '' && this.formdataval.redirectpath != '/') {
              this.router.navigate([this.formdataval.redirectpath]);
            } else {
              this.loading = false;
            }
          }
          if (result.status == 'error') {
            this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: result.status, fromval: result });
            this._snackBar.openFromComponent(SnackbarComponent, {
              duration: 6000,
              data: result
            });
            this.loading = false;
          }
        }, error => {
          // console.log('Oooops!');
          this._snackBar.openFromComponent(SnackbarComponent, {
            duration: 6000,
            data: { errormessage: 'Something Went Wrong ,Try Again!!' }
          });
          this.onFormFieldChange.emit({ field: 'fromsubmitservererror', fieldval: 'servererror', fromval: this.formGroup.value });
          this.loading = false; //disable loader 
        });
      } else {
        this.loading = false
        this.onFormFieldChange.emit({
          field: 'fromsubmit', fieldval: 'success', formdataval: this.formdataval, source: source, loading: this.loading,
          fromval: this.formGroup.value
        });
      }
    }
    else {
      this.onFormFieldChange.emit({ field: 'fromsubmiterror', fieldval: 'validationerror', fromval: this.formGroup.value, loading: this.loading });

      this.scrollToFirstInvalidControl();
    }

  }

  private scrollToFirstInvalidControl() {
    const firstInvalidControl: HTMLElement = this.elementRef.nativeElement.querySelector(
      "form .ng-invalid"
    );

    window.scroll({
      top: this.getTopOffset(firstInvalidControl),
      left: 0,
      behavior: "smooth"
    });
  }

  private getTopOffset(controlEl: HTMLElement): number {
    const labelOffset = 50;
    return controlEl.getBoundingClientRect().top + window.scrollY - labelOffset;
  } private el: ElementRef


  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  singleimageCropped(event: ImageCroppedEvent, field, ival, ci) {
    console.log(event, 'event+++64', this.formdataval.fields[ival], field, ci)
    this.formdataval.fields[ival].croppedImage[ci] = event.base64
    // this.croppedImage = event.base64;
    console.log(this.formdataval.fields[ival].croppedImage[ci], 'this.croppedImage===>>')
  }

  multipleimageCropped(event: ImageCroppedEvent, files, ival, ci, fi, fldval) {
    console.log(event, 'event+++64', this.formdataval.fields[ival], files, ival, ci, '++++++++++++++++', fi, fldval)
    fldval[fi].croppedImage[ci] = event.base64;
    // this.croppedImage = event.base64;
    console.log(files, 'this.croppedImage===>>')
  }

  imageLoaded() {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }

  loadImageFailed() {
    // show message
  }

}
