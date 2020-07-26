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

  constructor(private formBuilder: FormBuilder, public _apiService: ApiService, private _snackBar: MatSnackBar, private router: Router, private elementRef: ElementRef,) { }

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

  /*for progress bar*/

  color: ThemePalette = 'primary';
  mode: any = 'indeterminate';
  value = 50;
  bufferValue = 75;
  @Output() onFormFieldChange = new EventEmitter<any>();





  imageChangedEvent: any = '';
  croppedImage: any = '';

  ngOnInit() {
    this.createForm(0);


    // this.setChangeValidate()
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
      for (const g in this.formdataval.fields) {
        if (this.formdataval.fields[g].type == 'file' && this.formdataval.fields[g].name == e.target.id.replace('drop', '')) {
          console.log('file details', this.formdataval.fields[g]);
          if (this.formdataval.fields[g].multiple == null) {
            // this.deletefile(va)
            if (this.filearray[e.target.id.replace('drop', '')] != null) {
              for (const n in this.formdataval.fields) {
                if (this.formdataval.fields[n].name == e.target.id.replace('drop', '')) {
                  this.deletefile(this.formdataval.fields[n], 1);
                  setTimeout(() => {
                    this.filearray[e.target.id.replace('drop', '')] = files[i];
                  }, 0);
                }
              }
            } else {
              this.filearray[e.target.id.replace('drop', '')] = files[i];
            }
          } else {
            if (this.filearray[e.target.id.replace('drop', '')] == null) {
              this.filearray[e.target.id.replace('drop', '')] = [];
            }
            this.filearray[e.target.id.replace('drop', '')].push(files[i]);
            // console.log('files[0]', files[0]);
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
  //   console.log('upppp',h);


  // }

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
          file.fileservername = val.prefix + file.name.split(" ").join("");
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
    // console.log(val,'val');
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
    // console.log('val',val);
    // console.log(val.name);
    const source: any = {};
    const file: any = this.filearray[val.name];
    source.file = val.prefix + file.name;
    source.path = val.path;
    source.bucket = val.bucket;
    this._apiService.postSearch(val.apideleteurl, this.formdataval.jwttoken, source).subscribe(res => {
      let result: any = {};
      result = res;
      if (result.status == 'success' && flag == '') {
        // this.formGroup.reset();
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
  deletefilemultiple(val: any, field: any = '', index: any) {
    const source: any = {};
    const file: any = this.filearray[val.name][index];
    this.filecount[val.name]--;
    source.file = val.prefix + file.name;
    source.path = val.path;
    source.bucket = val.bucket;
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
    console.log('manage control', field, type, field.length);
    if (type == 'remove' && field.name != null) {
      for (const y in this.formdataval.fields) {
        if (this.formdataval.fields[y].name == field.name) {
          this.formdataval.fields.splice(parseInt(y), 1);
          this.formGroup.removeControl(field.name);
          console.log('removed', field['name'], 'c', y, field);
        }
      }
    }

    if (type == 'remove' && field.name == null && field.length > 1) {
      console.log(field.length, 'fl');
      for (const y in this.formdataval.fields) {
        for (const z in field) {
          if (this.formdataval.fields[y].name == field[z]) {
            this.formdataval.fields.splice(parseInt(y), 1);
            this.formGroup.removeControl(field[z]);
            console.log('removed in array form ', field[z], 'c ar', y, field);
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
    console.log(field, 'change', index, 'index2');
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
    console.log(vals, fields);
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
            const tfile: any = {};
            tfile.fileservername = this.filearray[this.formdataval.fields[m].name].fileservername;
            tfile.name = this.filearray[this.formdataval.fields[m].name].name;
            tfile.size = this.filearray[this.formdataval.fields[m].name].size;
            tfile.type = this.filearray[this.formdataval.fields[m].name].type;
            tfile.path = this.formdataval.fields[m].path;
            tfile.bucket = this.formdataval.fields[m].bucket;
            tfile.baseurl = this.formdataval.fields[m].baseurl;
            this.formGroup.controls[this.formdataval.fields[m].name].patchValue(tfile);
          }
        }
        if (this.formdataval.fields[m].type == 'file' && this.formdataval.fields[m].multiple != null && this.formdataval.fields[m].multiple == true) {
          const tfilearr: any = [];
          for (const g in this.filearray[this.formdataval.fields[m].name]) {
            if (this.filearray[this.formdataval.fields[m].name][g] != null && this.filearray[this.formdataval.fields[m].name][g].uploaded == 1) {
              // fileservername: "Test-1589216992392My Saved Schema.json"
              // lastModified: 1589174477504
              // lastModifiedDate: Mon May 11 2020 10: 51: 17 GMT + 0530(India Standard Time) { }
              // name: "My Saved Schema.json"
              // size: 135096
              // type: "application/json"
              // uploaded: 1
              const tfile: any = {};
              tfile.fileservername = this.filearray[this.formdataval.fields[m].name][g].fileservername;
              tfile.name = this.filearray[this.formdataval.fields[m].name][g].name;
              tfile.size = this.filearray[this.formdataval.fields[m].name][g].size;
              tfile.type = this.filearray[this.formdataval.fields[m].name][g].type;
              tfile.path = this.formdataval.fields[m].path;
              tfile.bucket = this.formdataval.fields[m].bucket;
              tfile.baseurl = this.formdataval.fields[m].baseurl;
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


      if (this.formdataval.endpoint != null || this.formdataval.apiUrl) {
        this.loading = true;
        const link: any = this.formdataval.apiUrl + this.formdataval.endpoint;
        const source: any = {};
        source.data = this.formGroup.value;
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

        this.onFormFieldChange.emit({ field: 'fromsubmit', fieldval: 'validationerror', fromval: this.formGroup.value });

      }
    } else {
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
    console.log('event', event);
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log('this.croppedImage', event);
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
