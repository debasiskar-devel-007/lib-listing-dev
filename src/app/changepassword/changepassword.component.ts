import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
// import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../../app/api.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {
  public myForm: any;
  public endpoint = 'addorupdatedata';
  public url1: any = '';
  public serverurl: any = '';

  constructor(  public _http: HttpClient, public fb: FormBuilder, private router: Router, public apiService: ApiService) {
    this.url1 = apiService.domain;
    // console.log("url");
    // console.log(this.url1);
    // this.serverurl = (this.url1 + this.endpoint);
    // console.log(this.serverurl);
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      confirmpassword: ['', Validators.required]},
        {validator: this.machpassword('password', 'confirmpassword')});
  }
  machpassword(passwordkye: string, confirmpasswordkye: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordkye],
          confirmpasswordInput = group.controls[confirmpasswordkye];
      if (passwordInput.value !== confirmpasswordInput.value) {
        return confirmpasswordInput.setErrors({notEquivalent: true});
      }
      else {
        return confirmpasswordInput.setErrors(null);
      }
    };
  }

  onSubmit() {
    let x: any;
    let data = this.myForm.value;
    console.log(data);
    console.log(this.myForm.value.password);
    console.log(this.myForm.value.confirmpassword);
    /*this.apiService.putData(this.endpoint, data).subscribe(res=> {
      let result: any = {};
      result = res;
      console.log('result');
      console.log(result);
    })*/
    /*if (this.myForm.value.password != this.myForm.value.confirmpassword) {
      console.log("Password don't mach");
    }*/
  }

}
