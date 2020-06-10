/**
 * Created by kta pc on 6/16/2017.
 */
import {Injectable} from '@angular/core';
// import {Http, Response, Headers} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {Router} from '@angular/router';
declare var $: any;
// import 'rxjs/add/operator/map';
@Injectable()
export class Commonservices {
    items: Array<any>;
    url: any;
    nodeurl: any;
    siteurl: any;
    uploadurl: any;
    FB_APP_ID: any;
    FB_APP_SECRET: any;
    LI_CLIENT_ID: any;
    LI_CLIENT_SECRET: any;
    CONSUMER_KEY: any;
    CONSUMER_SECRET: any;
    demourl: any;

    cookieData: CookieService;
    pictureuploadurl: any;
    audiouploadurl: any;
     demourl1: any;
    public demositeurl: any;
    public phpurl;
    public fileurl;
    public videofileupload;
    public imagefileupload;
    public videouploadurl;
    public url1;
    public nodesslurl;
    public nodesslurl_new;
    public nodesslurl1;
    public nodesslurl2;
    public userdata: any;
    public envflag: any;
    public phpurlorigin: any;
    public fileurl_new: any;
    public phpurllive: any;
    public music_obj: any;
    public trendingmusic_obj: any;
    public video_obj: any;
    public trendingvideo_obj: any;
    public selectedprofilemusic_obj: any = [];
    // public selectedprofilemusic_obj:any;
    phpurlforshare: any;
    // for  uploading video in add video modal


    constructor(private http: HttpClient, private router: Router, userdata: CookieService) {

        this.userdata = userdata;
        this.envflag = 'dev';
        if (this.envflag == 'live') {
            // this.nodesslurl ='https://nodessl.influxiq.com:6003/';
            this.phpurlorigin = 'https://api.audiodeadline.com/';

            this.nodesslurl = 'https://api.audiodeadline.com:6003/';
            this.nodesslurl_new = 'https://api.audiodeadline.com:6090/';
            // this.nodesslurl1 ='https://nodessl.influxiq.com:6004/';
            this.nodesslurl1 = 'https://api.audiodeadline.com:6004/';
            this.nodesslurl2 = 'https://api.audiodeadline.com:6010/';
            this.siteurl = 'https://audiodeadline.com/';
            this.demositeurl = 'https://demo.artistxp.com/#/';
            // this.nodeurl = 'http://192.169.196.208:3009/';
            this.nodeurl = 'https://api.audiodeadline.com:3008/';
            // this.url = 'https://audiodeadline.com/server3.php?q=';
            this.url = 'https://api.audiodeadline.com/server3.php?q=';
            // this.url1 = 'https://audiodeadline.com/server.php?q='; // added by himadri
            this.url1 = 'https://api.audiodeadline.com/server.php?q='; // added by himadri
            // this.url = 'http://phpaudiodeadlineserver.the-webdevelopers.com/server1.php?q=';
            // this.uploadurl = 'https://audiodeadline.com/fileupload.php';
            this.uploadurl = 'https://api.audiodeadline.com/fileupload.php';
            // this.pictureuploadurl = 'https://audiodeadline.com/fileupload_picture.php';
            this.pictureuploadurl = 'https://api.audiodeadline.com/fileupload_picture.php';
            // this.audiouploadurl = 'https://audiodeadline.com/fileupload_audio.php';
            this.audiouploadurl = 'https://api.audiodeadline.com/fileupload_audio.php';
            // this.videouploadurl = 'https://audiodeadline.com/fileupload_video.php';
            this.videouploadurl = 'https://api.audiodeadline.com/fileupload_video.php';
            /*this.FB_APP_ID = '906815096194208';
            this.FB_APP_SECRET = 'f569451eb41a239d2045ebf115a3bcc7';*/
            this.FB_APP_ID = '2034821446556410';
            this.FB_APP_SECRET = '8fea9e78cec7266999d790e18d355e0a';
            /*this.LI_CLIENT_ID = '81dhgq228xfquu';
            this.LI_CLIENT_SECRET = 'EjwBLpUq5683vifK';*/
            this.LI_CLIENT_ID = '780a949nep5e60';
            this.LI_CLIENT_SECRET = 'hGwWdDmlRYCnPvH0';
            this.CONSUMER_KEY = 'fhwawEUbSsyNG8L5667cmZpYZ';
            this.CONSUMER_SECRET = 'nHxQhn3ApgpNxYRIDfE5rBuL2U4fmLzVMBxBTls5CLOJz4fnKv';
            // this.demourl = 'https://demo.artistxp.com/assets/twitter/';
            this.demourl = 'https://api.audiodeadline.com/twitter/';
            this.demourl1 = 'https://api.audiodeadline.com/instagram/';
            // this.demourl1 = 'https://demo.artistxp.com/instagram/';
            // this.phpurl = 'https://demo.artistxp.com/php/';
            this.phpurl = 'https://api.audiodeadline.com/php/';
            // this.fileurl = 'https://audiodeadline.com/nodeserver/uploads/';
            this.fileurl = 'https://api.audiodeadline.com/nodeserver/uploads/';
            // this.videofileupload = 'https://artistxp.com/videofileupload.php';
            this.videofileupload = 'https://api.audiodeadline.com/videofileupload.php';
            // this.imagefileupload = 'https://artistxp.com/imagefileupload.php';
            this.imagefileupload = 'https://api.audiodeadline.com/imagefileupload.php';
            this.fileurl_new = 'https://s3.amazonaws.com/file.development.audiodeadline.com/';
            this.phpurllive = 'https://api.audiodeadline.com/';
            this.phpurlforshare = 'http://share.artistxp.com/';

        }

        if (this.envflag == 'dev') {
            this.phpurllive = 'https://developmentapi.audiodeadline.com/';
            this.nodesslurl = 'https://developmentapi.audiodeadline.com:6090/';
            this.nodesslurl_new = 'https://developmentapi.audiodeadline.com:6090/';
            // this.nodesslurl1 ='https://nodessl.influxiq.com:6004/';
            this.nodesslurl1 = 'https://developmentapi.audiodeadline.com:6004/';
            this.nodesslurl2 = 'https://developmentapi.audiodeadline.com:6010/';
            this.phpurlorigin = 'https://developmentapi.audiodeadline.com/';
            this.siteurl = 'https://audiodeadline.com/';
            this.demositeurl = 'https://demo.artistxp.com/#/';
            // this.nodeurl = 'http://192.169.196.208:3009/';
            this.nodeurl = 'https://developmentapi.audiodeadline.com:3090/';
            // this.url = 'https://audiodeadline.com/server3.php?q=';
            this.url = 'https://developmentapi.audiodeadline.com/server3.php?q=';
            // this.url1 = 'https://audiodeadline.com/server.php?q='; // added by himadri
            this.url1 = 'https://developmentapi.audiodeadline.com/server.php?q='; // added by himadri
            // this.url = 'http://phpaudiodeadlineserver.the-webdevelopers.com/server1.php?q=';
            // this.uploadurl = 'https://audiodeadline.com/fileupload.php';
            this.uploadurl = 'https://developmentapi.audiodeadline.com/fileupload.php';
            // this.pictureuploadurl = 'https://audiodeadline.com/fileupload_picture.php';
            this.pictureuploadurl = 'https://developmentapi.audiodeadline.com/fileupload_picture.php';
           // this.pictureuploadurl_new = 'https://developmentapi.audiodeadline.com/fileupload_picture.php';
            // this.audiouploadurl = 'https://audiodeadline.com/fileupload_audio.php';
            this.audiouploadurl = 'https://developmentapi.audiodeadline.com/fileupload_audio.php';
            // this.videouploadurl = 'https://audiodeadline.com/fileupload_video.php';
            this.videouploadurl = 'https://developmentapi.audiodeadline.com/fileupload_video.php';
            this.phpurlforshare = 'http://devshare.artistxp.com/';
            // this.FB_APP_ID = '906815096194208';
            // this.FB_APP_SECRET = 'f569451eb41a239d2045ebf115a3bcc7';

            this.FB_APP_ID = '2034821446556410';
            this.FB_APP_SECRET = '8fea9e78cec7266999d790e18d355e0a';
            /*this.LI_CLIENT_ID = '81dhgq228xfquu';
            this.LI_CLIENT_SECRET = 'EjwBLpUq5683vifK';*/
            this.LI_CLIENT_ID = '780a949nep5e60';
            this.LI_CLIENT_SECRET = 'hGwWdDmlRYCnPvH0';
            this.CONSUMER_KEY = 'fhwawEUbSsyNG8L5667cmZpYZ';
            this.CONSUMER_SECRET = 'nHxQhn3ApgpNxYRIDfE5rBuL2U4fmLzVMBxBTls5CLOJz4fnKv';
            // this.demourl = 'https://demo.artistxp.com/assets/twitter/';
            this.demourl = 'https://developmentapi.audiodeadline.com/twitter/';
            this.demourl1 = 'https://developmentapi.audiodeadline.com/instagram/';
            // this.demourl1 = 'https://demo.artistxp.com/instagram/';
            // this.phpurl = 'https://demo.artistxp.com/php/';
            // this.phpurl = 'https://developmentapi.audiodeadline.com/php/';
            this.phpurl = 'https://developmentapi.audiodeadline.com/php/';
            // this.fileurl = 'https://audiodeadline.com/nodeserver/uploads/';
            this.fileurl = 'https://developmentapi.audiodeadline.com/nodeserver/uploads/';
            this.fileurl_new = 'https://s3.amazonaws.com/file.development.audiodeadline.com/';
            // this.videofileupload = 'https://artistxp.com/videofileupload.php';
            this.videofileupload = 'https://developmentapi.audiodeadline.com/videofileupload.php';
            // this.imagefileupload = 'https://artistxp.com/imagefileupload.php';
            this.imagefileupload = 'https://developmentapi.audiodeadline.com/imagefileupload.php';
        }
        // this.nodesslurl ='https://nodessl.influxiq.com:6003/';

        this.items = [
            { serverUrl: this.url },
            { name: 'Ipsita' }
        ];

        this.cookieData = userdata;
    }


    /*---------------------------------------------------START_URL-----------------------------------------------*/
    getItems() {
        return this.items;
    }

    /*---------------------------------------------------END_URL-----------------------------------------------*/
    /*isEmailRegisterd(email: string) {
        console.log(email);
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        var data= {email};
        var link='http://localhost:3007/allemail';
        //return this.http.post('http://localhost:3007/allemail', JSON.stringify({ email: email }), { headers: headers })
         return this.http.post(link , data)
            .map(res => {
                var result = res.json();
                console.log("length "+result.res);
                //console.log(v);
                //return result.res;
            }, error => {
            console.log("Oooops!");
        });


    }*/
    /*---------------------------------------------------START_Addadmin-----------------------------------------------*/
    postUser(dataForm: any) {

        const link = this.url + 'adduser';

        const data = {
            firstname: dataForm.value.firstname,
            lastname:  dataForm.value.lastname,
            telephone:  dataForm.value.phone,
            email:  dataForm.value.email,
            password:  dataForm.value.password,
            address:  dataForm.value.address,
            address2:  dataForm.value.address2,
            city:  dataForm.value.city,
            state:  dataForm.value.state,
            zip:  dataForm.value.zipcode,
            rsvp:  dataForm.value.rsvp,
            signupaffiliate:  dataForm.value.signupaffiliate,
        };
        // console.log("addadminservice");
        // console.log(data);
        // return this.http.post(link, data).map((res:Response) => res.json());
    }
    /*---------------------------------------------------END_Addadmin-----------------------------------------------*/


    logout() {
        this.cookieData.deleteAll();
        this.router.navigateByUrl('/');
    }

    getlikestatus(val: any) {
        if (val.length == 0) {
            return false;
        } else {
            for (const x in val) {
                if (this.userdata.get('user_id') == val[x].user_id) {

                    return true;
                }
            }
        }
        return false ;
    }

    commenteditshow(id: any) {
        $('#commentbox' + id).toggleClass('show');
    }
    inputUntouch(form: any, val: any) {
      //  console.log('on blur .....');
        form.controls[val].markAsUntouched();
    }
    // added by himadri
    getlikestatus1(val: any) {
        if (typeof(val) == 'undefined' || val == null || val.length == 0) {
            return false;
        } else {
            for (const x in val) {
                if (this.userdata.get('user_id') == val[x].user_id) {

                    return true;
                }
            }
        }
        return false ;
    }
}
