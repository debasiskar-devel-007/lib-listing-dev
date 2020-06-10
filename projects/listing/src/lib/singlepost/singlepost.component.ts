import { Component, OnInit, Input , ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {Commonservices} from './app.commonservices';
// import {Http} from "@angular/http";
import { HttpClient } from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser';
// import { FacebookService, InitParams,UIParams, UIResponse } from 'ngx-facebook';
declare var $: any;
declare var moment: any;

@Component({
  selector: 'lib-singlepost',
  templateUrl: './singlepost.component.html',
  styleUrls: ['./singlepost.component.css'],
  providers: [Commonservices]
})

export class SinglepostComponent implements OnInit, AfterViewInit  {

  @ViewChild('gsharelink') gsharelink: ElementRef;

  /*/!*for share popover*!/
  html: string = `
<div class="socialmediaicons socialmediaicons2">
                <a class="fa fa-facebook fbsharelink slink"></a>
              <a href="javascript:void(0)" class="fa fa-twitter twittersharelink slink"></a>
              <a href="javascript:void(0)" class="fa fa-google googlesharelink slink"></a>
              <a href="javascript:void(0)" class="fa fa-linkedin linkedinsharelink slink"></a>
             <a href="javascript:void(0)" class="fa fa-tumblr tumblrsharelink slink"></a>
             </div>
`;*/
  public i1: any = null;
  public postobj: any = {};
  public userobj: any = {};
  public hidedata_obj: any = {};
  public userdata: any;
  public selectedmusic: any = {};
  public chosenaudiotitle: any = '';
  public audiousername: any = '';
  public chosenaudiourl: any = '';
  public value2: any = [];
  public value3: any = 0;
  public options2: any = [];
  public options3;
  public audioDuration: any = '';
  public isaudioplay = false;
  public playstate: any = '';
  public audioplayerindex: any = 0;
  public ismuteaudio: any = false;
  public oldvolume: any = 0;
  public ismodalcomment1: any = false;
  public selectedpost: any = {};
  public deletecommentmodalformediawall: any = false;
  private deletecomment: any = {};
  public currentcommentidformediawall: any = 0;
  public commentval: any = '';
  public commentreplyformediawallarray: any = [];
  public deletecommentmodalformediawallsuccess: any = false;
  public currentpostid: any = '';
  public postarr3: any = [];
  public videoplayfag: any = false;
  public selectedvideotrending: any = {};
  public postarr4: any = [];
  public commentvalPicture: any = [];
  public replyblock: any = [];
  public showLoader: any = 0;
  public isModalPicDetail: any = false;
  public selectedpicture: any = {};
  public generalshareurl: any = '';
  public shareflag: any;
  public selectedsharedpost: any;
  public generalshareurlold: any = '0';
  public generalshareurloldtype: any = '0';
  public lastsharetime: any = 0;
  public lastreplyblockopen: any = null;
  public shareblockflag: any = [];
  public finishtagflag: any = 0;
  public tagflag: any = 1;
  public friendlistarr: any = [];
  public filterlist: any = [];
  public showUserSearchFlag: any = 0;
  public searchval: any = '';
  public musicviewflag: any = 1;
  public player: any;

  @Input()
  set post1(post: any) {
    this.postobj = (post) || '<no name set>';
    this.postobj = post;
    if (this.postobj.comment == null) {
      this.postobj.comment = 0;
    }    // console.log(this.postobj);
    if (this.postobj.title_music != null) {
      if (this.postobj.usermusiclikes != null) {this.postobj.userlike = this._commonservices.getlikestatus(this.postobj.usermusiclikes); }
      // this.postobj.murl =  this.sanitizer.bypassSecurityTrustResourceUrl(this._commonservices.phpurlorigin + 'nodeserver/uploads/audio/' + this.postobj.user_id + '/' + this.postobj.music);
      this.postobj.murl =  this.sanitizer.bypassSecurityTrustResourceUrl(this._commonservices.fileurl_new + 'audio/' + this.postobj.user_id + '/' + this.postobj.music);
      this.value2[this.postobj._id] = 0;
      this.setmusictimeandoption(this.postobj);

      setTimeout(() => {    // <<<---    using ()=> syntax
        let myAudio: any = {};
        if (myAudio != null) {myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id); }
        if (myAudio != null) {this.audioDuration = myAudio.duration.toFixed(0); }
        if (isNaN(this.audioDuration)) {
          setTimeout(() => {
              this.audioDuration = 0;
          }, 2000);
      }
        this.value2[this.postobj._id]  = 0;
        if (myAudio != null) {this.options2 = {
          floor: 0,
          ceil: myAudio.duration.toFixed(0)
        };
        }

        if (myAudio != null) { myAudio.volume = this.value3 / 100; }

      }, 1000);
    }

    if (this.postobj.title != null) {

      if (this.postobj.uservideolikes != null) {this.postobj.userlike = this._commonservices.getlikestatus(this.postobj.uservideolikes); }
      if (this.postobj.type == 'vimeo') {
          const tempvurl = this.postobj.videoUrl;
          const vimeourl = tempvurl.split('/');
          const videoid = vimeourl[vimeourl.length - 1];
          this.postobj.vurl = this.sanitizer.bypassSecurityTrustResourceUrl('https://player.vimeo.com/video/' + videoid);

        }
      if (this.postobj.type == 'youtube' && !this.videoplayfag) {
          const videourl = this.postobj.videoUrl.split('v=');
          const videoid = videourl[videourl.length - 1];

          this.postobj.vurl = videoid;
        }
      if (this.postobj.type == 'file' && !this.videoplayfag) {
          // this.postobj.vurl = this.sanitizer.bypassSecurityTrustResourceUrl(this._commonservices.siteurl + 'nodeserver/uploads/video/' + this.postobj.user_id + '/' + this.postobj.videoUrl);
          this.postobj.vurl = this.sanitizer.bypassSecurityTrustResourceUrl(this._commonservices.fileurl_new + 'video/' + this.postobj.user_id + '/' + this.postobj.videoUrl);

        }
    }
    if (this.postobj.title_pic != null) {
      if (this.postobj.userpicturelikes != null) {this.postobj.userlike = this._commonservices.getlikestatus(this.postobj.userpicturelikes); }
    }

  /*  if(post.posts!=null){
      this.postobj = post.posts;
      console.log('this.postobj');
      console.log(this.postobj);
    }*/
    /*  console.log(this.postarr);
     console.log(postarr1);*/
  }
  @Input()
  set user(userdata: any) {
    this.userobj = (userdata) || '<no name set>';
    this.userobj = userdata;
    // console.log(this.userobj);

    /*  console.log(this.postarr);
     console.log(postarr1);*/
  }
@Input()
  set hidedata(hidedata: any) {
    this.hidedata_obj = (hidedata) || '<no name set>';
    this.hidedata_obj = hidedata;
    // console.log('this.userobj');
    // console.log(this.userobj);

    /*  console.log(this.postarr);
     console.log(postarr1);*/
  }

  constructor(userdata: CookieService, private activeRoute: ActivatedRoute, private _http: HttpClient,  public _commonservices: Commonservices, private sanitizer: DomSanitizer , public routes: Router) {


    this.userdata = userdata;
    this.options2 = {                    // duration slider
      floor: 0,
      ceil: 200
    };
    this.value3 = 75;                      // volume slider
    this.options3 = {
      floor: 0,
      ceil: 100
    };

    // let initParams: InitParams = {
    //   appId: '2034821446556410',
    //   xfbml: true,
    //   version: 'v2.8'
    // };

    // FBS.init(initParams);


  }
  savePlayer(player) {
    this.player = player;
    console.log('this.player');
    console.log(this.player);
  }
  playVideo() {
    this.player.playVideo();
    console.log('playvideo called');
  }

//   playmusic(){
//     let myAudio :any = {};
//     myAudio = document.querySelector("#audioplayer1");
//     this.audioDuration = myAudio.duration.toFixed(0);

//     setTimeout(()=> {
//         if (isNaN(this.audioDuration)) {
//             this.audioDuration=0;
//             this.playmusic();
//             this.playmusic();
//         }
//     },2000);

//     if (this.isaudioplay) {
//         if( myAudio!=null) myAudio.pause();
//         clearInterval(this.playstate);
//         this.isaudioplay=false;
//     } else {
//         if( myAudio!=null) myAudio.play();
//         if( myAudio!=null) myAudio.volume = this.value/100;
//         this.playstate = setInterval(() => {
//             if( myAudio!=null)this.value1 = (myAudio.currentTime.toFixed(0));

//         }, 1000);
//         this.isaudioplay=true;
//     }
//     if( myAudio!=null)myAudio.onpause = function(){

//         clearInterval(this.playstate);
//     };


// }
  ngOnInit() {
    // this.friendslist();
    if (this.postobj.likes == null || this.postobj.likes == '') {
      this.postobj.likes = this.postobj.userlikecount;

    }
    if (this.postobj.usermedialike != null) {this.postobj.userlike = this._commonservices.getlikestatus(this.postobj.usermedialike); }
    if (this.postobj.views == null || this.postobj.views == '') {
      this.postobj.views = this.postobj.userviewcount;


    }
    if (this.postobj.musicviews == null || this.postobj.musicviews == '') {
      this.postobj.musicviews = this.postobj.userviewcount;


    }



  }

  /*share functions starts here*/

  shareblock(id: any) {

   // console.log(id);
    if (this.shareblockflag[id] == null || this.shareblockflag[id] == 0 ) {
      this.shareblockflag[id] = 1;
    } else {
      this.shareblockflag[id] = 0;

    }

  }

  ngAfterViewInit() {

  }

  // fbshare(type:any,item:any) {

  //   let currenttime =new Date().getTime();
  //   let options: any = {};
  //   /*console.log(type);
  //   console.log(item);*/
  //   if(type=='picture'){

  //     options = {
  //       method: 'share',
  //       // href: 'http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75'
  //       href: 'http://artistxp.com/sharetools.php?type=p&userid='+item.user_id+'&itemid='+item._id
  //     };

  //   }
  //   if(type=='audio'){

  //     options = {
  //       method: 'share',

  //       href: 'http://artistxp.com/sharetools.php?type=m&userid='+item.user_id+'&itemid='+item._id
  //     };

  //     /*console.log('audio');
  //      console.log('selectedsharedpost');
  //      console.log(this.selectedsharedpost);*/


  //   }
  //   if(type=='video'){

  //     options = {
  //       method: 'share',

  //       href: 'http://artistxp.com/sharetools.php?type=v&userid='+item.user_id+'&itemid='+item._id
  //     };

  //     /*console.log('audio');
  //      console.log('selectedsharedpost');
  //      console.log(this.selectedsharedpost);*/


  //   }

  //   setTimeout(()=> {

  //     if (currenttime - this.lastsharetime > 5000) {
  //       this.FBS.ui(options)
  //           .then((res: UIResponse) => {
  //             // console.log('Got the users profile', res);
  //           })
  //           .catch(this.handleError);
  //       this.lastsharetime = currenttime;
  //     }

  //   },500);

  // }


  /*ngAfterViewChecked(){

    let children = document.getElementsByClassName("fbsharelink");

    for (let i = 0; i < children.length; i++) {
      children[i].addEventListener("click", (event: Event) => {
        //alert("Hello world!");
        /!*console.log("Hello world!");
         console.log("Hello world!b66");
         console.log(event);*!/
        this.fbshare(this.shareflag,this.selectedsharedpost);
      });
    }

    let children1 = document.getElementsByClassName("twittersharelink");

    for (let i1 = 0; i1 < children1.length; i1++) {
      children1[i1].addEventListener("click", (event: Event) => {
        //alert("Hello 112!");
        /!*console.log("Hello 11!");
        console.log("Hello world!11");
        console.log(event);*!/
        this.generalshare(this.shareflag,'twitter');
      });
    }

    let children2 = document.getElementsByClassName("googlesharelink");

    for (let i2 = 0; i2 < children2.length; i2++) {
      children2[i2].addEventListener("click", (event: Event) => {
        //alert("Hello 112!");
        /!*console.log("Hello 11!");
        console.log("Hello world!11");
        console.log(event);*!/
        this.generalshare(this.shareflag,'google');
      });
    }

    let children3 = document.getElementsByClassName("linkedinsharelink");

    for (let i3 = 0; i3 < children3.length; i3++) {
      children3[i3].addEventListener("click", (event: Event) => {
        //alert("Hello 112!");
       /!* console.log("Hello 11!");
        console.log("Hello world!11");
        console.log(event);*!/
        this.generalshare(this.shareflag,'linkedin');
      });
    }

    let children4 = document.getElementsByClassName("tumblrsharelink");

    for (let i4 = 0; i4 < children4.length; i4++) {
      children4[i4].addEventListener("click", (event: Event) => {
        //alert("Hello 112!");
        /!*console.log("Hello 11!");
        console.log("Hello world!11");
        console.log(event);*!/
        this.generalshare(this.shareflag,'tumblr');
      });
    }

  }*/

  /*generalshare(type:any,stype:any){
    if(this.generalshareurlold!=this.generalshareurl || this.generalshareurloldtype!=stype) {

      if(stype=='twitter' && type=='picture') {


        this.generalshareurl = 'https://twitter.com/intent/tweet?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+this.selectedsharedpost.user_id+'&itemid='+this.selectedsharedpost._id);


      }

      if(stype=='google' && type=='picture') {

        this.generalshareurl = 'https://plus.google.com/share?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+this.selectedsharedpost.user_id+'&itemid='+this.selectedsharedpost._id);

      }


      if(stype=='linkedin' && type=='picture') {

        this.generalshareurl = 'https://www.linkedin.com/shareArticle?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+this.selectedsharedpost.user_id+'&itemid='+this.selectedsharedpost._id);

      }

      if(stype=='tumblr' && type=='picture') {

        this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+this.selectedsharedpost.user_id+'&itemid='+this.selectedsharedpost._id);
        /!* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*!/

      }

      // console.log('this.generalshareurl');
      // console.log(this.generalshareurl);


      let gsharelink:any;
      gsharelink = document.getElementsByClassName("gsharelink");
      //gsharelink.click();
      //$('.gsharelink').click();
      this.generalshareurlold = this.generalshareurl;
      this.generalshareurloldtype = stype;
      setTimeout(()=> {
        this.gsharelink.nativeElement.click();
      },10);
      // console.log(this.generalshareurlold);
      // console.log(this.generalshareurloldtype);

    }
  }*/
  // generalshare(type:any,stype:any,item:any){


  //     if(stype=='twitter' && type=='picture') {


  //       this.generalshareurl = 'https://twitter.com/intent/tweet?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+item.user_id+'&itemid='+item._id);


  //     }
  //     if(stype=='twitter' && type=='audio') {


  //       this.generalshareurl = 'https://twitter.com/intent/tweet?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid='+item.user_id+'&itemid='+item._id);


  //     }
  //     if(stype=='twitter' && type=='video') {


  //       this.generalshareurl = 'https://twitter.com/intent/tweet?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=v&userid='+item.user_id+'&itemid='+item._id);


  //     }

  //     if(stype=='google' && type=='picture') {

  //       this.generalshareurl = 'https://plus.google.com/share?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+item.user_id+'&itemid='+item._id);

  //     }
  //     if(stype=='google' && type=='audio') {

  //       this.generalshareurl = 'https://plus.google.com/share?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid='+item.user_id+'&itemid='+item._id);

  //     }
  //     if(stype=='google' && type=='video') {

  //       this.generalshareurl = 'https://plus.google.com/share?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=v&userid='+item.user_id+'&itemid='+item._id);

  //     }


  //     if(stype=='linkedin' && type=='picture') {

  //       this.generalshareurl = 'https://www.linkedin.com/shareArticle?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+item.user_id+'&itemid='+item._id);

  //     }
  //     if(stype=='linkedin' && type=='audio') {

  //       this.generalshareurl = 'https://www.linkedin.com/shareArticle?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid='+item.user_id+'&itemid='+item._id);

  //     }
  //     if(stype=='linkedin' && type=='video') {

  //       this.generalshareurl = 'https://www.linkedin.com/shareArticle?url='+encodeURIComponent('http://artistxp.com/sharetools.php?type=v&userid='+item.user_id+'&itemid='+item._id);

  //     }

  //     if(stype=='tumblr' && type=='picture') {

  //       this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=p&userid='+item.user_id+'&itemid='+item._id);
  //       /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

  //     }
  //     if(stype=='tumblr' && type=='audio') {

  //       this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid='+item.user_id+'&itemid='+item._id);
  //       /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

  //     }
  //     if(stype=='tumblr' && type=='video') {

  //       this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=v&userid='+item.user_id+'&itemid='+item._id);
  //       /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

  //     }

  //     // console.log('this.generalshareurl');
  //     // console.log(this.generalshareurl);


  //     let gsharelink:any;
  //     gsharelink = document.getElementsByClassName("gsharelink");
  //     //gsharelink.click();
  //     //$('.gsharelink').click();

  //     setTimeout(()=> {
  //       this.gsharelink.nativeElement.click();
  //     },10);
  //     // console.log(this.generalshareurlold);
  //     // console.log(this.generalshareurloldtype);


  // }


  /*setshareflag(type:any,selectedpost:any){

    this.shareflag = type;
    this.selectedsharedpost=selectedpost;
    // console.log('in setshareflag');
    // console.log(type);
  }*/
  /*share functions endss here*/
//



// for facebook share function start

fbshare(type: any, item: any) {

  const currenttime = new Date().getTime();
  let options: any = {};
  /*console.log(type);
  console.log(item);*/
  if (type == 'picture') {

    options = {
      method: 'share',
      // href: 'http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75'
      href: 'http://devshare.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id
    };

  }
  if (type == 'audio') {

    options = {
      method: 'share',

      href: 'http://devshare.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id
    };

    /*console.log('audio');
     console.log('selectedsharedpost');
     console.log(this.selectedsharedpost);*/


  }
  if (type == 'video') {

    options = {
      method: 'share',

      href: 'http://devshare.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id
    };

    /*console.log('audio');
     console.log('selectedsharedpost');
     console.log(this.selectedsharedpost);*/


  }

  setTimeout(() => {

    if (currenttime - this.lastsharetime > 5000) {
      // this.FBS.ui(options)
      //     .then((res: UIResponse) => {
      //       // console.log('Got the users profile', res);
      //     })
      //     .catch(this.handleError);
      // this.lastsharetime = currenttime;
    }

  }, 500);

}

//   for facebook share function end

private handleError(error) {
  console.error('Error processing action', error);
}

generalshare(type: any, stype: any, item: any) {

  if (this._commonservices.envflag == 'dev') {
    if (stype == 'twitter' && type == 'picture') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);
// console.log('this.generalshareurl');
// console.log(this.generalshareurl);
// console.log('user_id');
// console.log(item.user_id);

    }
    if (stype == 'twitter' && type == 'audio') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);


    }
    if (stype == 'twitter' && type == 'video') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);


    }

    if (stype == 'google' && type == 'picture') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'google' && type == 'audio') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'google' && type == 'video') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);

    }


    if (stype == 'linkedin' && type == 'picture') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'linkedin' && type == 'audio') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'linkedin' && type == 'video') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);

    }

    if (stype == 'tumblr' && type == 'picture') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
    if (stype == 'tumblr' && type == 'audio') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
    if (stype == 'tumblr' && type == 'video') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://devshare.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
  }
  if (this._commonservices.envflag == 'live') {
    if (stype == 'twitter' && type == 'picture') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);


    }
    if (stype == 'twitter' && type == 'audio') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);


    }
    if (stype == 'twitter' && type == 'video') {


      this.generalshareurl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);


    }

    if (stype == 'google' && type == 'picture') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'google' && type == 'audio') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'google' && type == 'video') {

      this.generalshareurl = 'https://plus.google.com/share?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);

    }


    if (stype == 'linkedin' && type == 'picture') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'linkedin' && type == 'audio') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);

    }
    if (stype == 'linkedin' && type == 'video') {

      this.generalshareurl = 'https://www.linkedin.com/shareArticle?url=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);

    }

    if (stype == 'tumblr' && type == 'picture') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=p&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
    if (stype == 'tumblr' && type == 'audio') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=m&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
    if (stype == 'tumblr' && type == 'video') {

      this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl=' + encodeURIComponent('http://share.artistxp.com/sharetools.php?type=v&userid=' + item.user_id + '&itemid=' + item._id);
      /* this.generalshareurl = 'https://www.tumblr.com/widgets/share/tool/preview?shareSource=legacy&canonicalUrl='+encodeURIComponent('http://artistxp.com/sharetools.php?type=m&userid=5bf50f4560c4416209c032e4&itemid=5bf6490f249d4cd32803db75');*/

    }
  }
    // console.log('this.generalshareurl');
    // console.log(this.generalshareurl);


  let gsharelink: any;
  gsharelink = document.getElementsByClassName('gsharelink');
    // gsharelink.click();
    // $('.gsharelink').click();

  setTimeout(() => {
      this.gsharelink.nativeElement.click();
    }, 10);
    // console.log(this.generalshareurlold);
    // console.log(this.generalshareurloldtype);


}
  showeditcommentmodal(valc: any) {
    $('#editcommentformediawall' + valc._id).removeClass('hide');
    $('#savecommentformediawall' + valc._id).removeClass('hide');
  }

  updatecommentformediawall(valc: any) {
    // console.log(1256);
    const data = {_id: valc._id, comment: valc.comment};
    const link = this._commonservices.url + 'updatecomment';
    this._http.post(link, data)
        .subscribe(res => {
          let result: any;
          result = res;
          //  console.log('result');
          // console.log(result);
          if (result.status = 'success') {
            // console.log('in sucess')

            $('#editcommentformediawall' + valc._id).addClass('hide');
            $('#savecommentformediawall' + valc._id).addClass('hide');
          }

        });
  }

  showdeletemediawallmodal(val: any) {
    this.deletecomment = val;
    this.deletecommentmodalformediawall = true;
  }

  addreply(item: any) {

    if (item.parents_id == 0) {
      this.currentcommentidformediawall = item._id;
    } else {
      this.currentcommentidformediawall = item.parents_id;
    }
    $('#reply' + item._id).toggleClass('hide');
  }

  convertunixtotimeago(val: any) {
    return moment.unix(val).startOf('minute').fromNow();

  }
  convertsecstoformat(totalSeconds) {
    const hours   = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    // round seconds
    seconds = Math.round(seconds * 100) / 100;

    let result = (hours < 10 ? '0' + hours : hours);
    result += ':' + (minutes < 10 ? '0' + minutes : minutes);
    result += ':' + (seconds  < 10 ? '0' + seconds : seconds);
    return result;
  }
  setmusictimeandoption(val) {

    setTimeout(() => {    // <<<---    using ()=> syntax
      let myAudio: any = {};
      // console.log('in setmusic info');
      // console.log(val._id);
      // console.log('audioplayer4'+val._id);
      myAudio =  document.querySelector('#audioplayerpost' + val._id);
      // console.log('myaudio length');
      // console.log($(myAudio).length);
      // this.audioDurationfortrending = myAudio.duration.toFixed(0);
      if ($(myAudio).length > 0) {this.postobj.duration = myAudio.duration.toFixed(0); }
      this.value2[val._id]  = 0;
      if ($(myAudio).length > 0) {
        this.options2[val._id] = {
          floor: 0,
          ceil: myAudio.duration.toFixed(0)
        };
      }

      /*console.log('$(myAudio).length');
       console.log($(myAudio).length);
       console.log($('#audioplayer4').length);

       console.log('myAudio');
       console.log(myAudio);
       console.log(myAudio.duration);*/
      if ($(myAudio).length > 0) { myAudio.volume = this.value3 / 100; }
      // this.value=75;
      /* console.log('audioDuration for first time loading');
       console.log(this.audioDurationfortrending);*/
    }, 4500);
  }

  setval1() {

    // console.log('set val ');
    let myAudio: any = {};
    myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id);
    myAudio.currentTime = this.value2[this.postobj._id];
  }

  muteaudio() {
    this.value3 = 0;
    let myAudio: any = {};
    myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id);
    this.oldvolume = myAudio.volume;
    myAudio.volume = 0;
    this.ismuteaudio = true;
    /* console.log(this.value3);
     console.log(this.oldvolume);
     console.log(myAudio.volume);
     console.log(this.ismuteaudio);*/


  }

  unmuteaudio() {

    let myAudio: any = {};
    myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id);
    myAudio.volume = this.oldvolume;
    this.ismuteaudio = false;
    this.value3 = this.oldvolume * 100;
    // this.ismuteaudiotrending = false;
    /*console.log (this.value3);
     console.log(this.oldvolume);
     console.log(myAudio.volume);
     console.log(this.ismuteaudio);*/


  }

  changeaudioplayervolume() {

    let myAudio: any = {};
    myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id);
    myAudio.volume = this.value3 / 100;
    if (this.value3 == 0) {
      this.ismuteaudio = true;
    } else {
      this.ismuteaudio = false;
    }
    // console.log(this.ismuteaudio);
  }

  changeaudioplayertimer() {
    /* console.log('this is timer change');
     console.log('this.value2');
     console.log(this.value2);*/
    let myAudio: any = {};
    myAudio =  document.querySelector('#audioplayerpost' + this.postobj._id);
    myAudio.currentTime = this.value2[this.postobj._id];
  }

  playaudio(val: any) {
    // console.log('jsfvhsvhusiufvhsifuvsgfuy');
    if (this.isaudioplay == false) {
      // this.isaudioplayfortrending = false;
      // this.playmusicfortrending(val);
      // in set time out , the same function playmusicfortrending has been called

      setTimeout(() => {    // <<<---    using ()=> syntax

        let myAudio: any = {};
        myAudio =  document.querySelector('#audioplayerpost' + val._id);
        clearInterval(this.playstate);
        this.isaudioplay = false;
        this.value2[val._id] = 0;

        // myAudio.play();
        // this.isaudioplay=true;

        /* console.log($(myAudio).length);
         console.log($('#audioplayer4').length);*/

        if (this.isaudioplay) {
          myAudio.pause();
          clearInterval(this.playstate);
          this.isaudioplay = false;
        } else {
          this.value2[val._id] = 0;
          clearInterval(this.playstate);
          if ($(myAudio).length > 0 || myAudio != null) {myAudio.play(); }
          if (this.musicviewflag == 1) {
            this.addpostview(val);
            this.musicviewflag = this.musicviewflag + 1;
          }
          if ($(myAudio).length > 0 || myAudio != null) {this.options2 = {
            floor: 0,
            ceil: myAudio.duration.toFixed(0)
          };
          }

          if ($(myAudio).length > 0 || myAudio != null) {myAudio.volume = this.value3 / 100; }
          if ($(myAudio).length > 0 || myAudio != null) {this.audioDuration = myAudio.duration.toFixed(0); }
          if (isNaN(this.audioDuration)) {
            setTimeout(() => {
                this.audioDuration = 0;
            }, 2000);
        }
          // console.log('audioDuration');
          // console.log(this.audioDuration);

          this.playstate = setInterval(() => {
            // console.log('in onplay interval ....');
            // console.log(myAudio.currentTime);
            if ($(myAudio).length > 0 || myAudio != null) {this.value2[val._id] = (myAudio.currentTime.toFixed(0)); }
            // console.log(this.value1);
            // console.log(this.value);


          }, 1800);
          this.isaudioplay = true;
        }
        if ($(myAudio).length > 0 || myAudio != null) {myAudio.onpause = function() {
          // this.playstate.clearInterval();
          clearInterval(this.playstate);
        };
        }

        // this.playmusic();
      }, 2000);
      // console.log('in false block !!! ');
      return;
    } else {
      let myAudio: any = {};
      myAudio =  document.querySelector('#audioplayerpost' + val._id);
      if ($(myAudio).length > 0 || myAudio != null) {myAudio.pause(); }
      this.isaudioplay = false;
      return;
    }


  }

  gettrimmedtitle(val: any) {

    return val.replace(/^(.{30}[^\s]*).*/, '$1');
  }

  getcommentbyposid(val) {

    // console.log(val);
    const link = this._commonservices.nodesslurl + 'getcommentbypostids';
    const data = {post_id: val};
    this._http.post(link, data)
        .subscribe(res => {

          let result: any = {};
          result = res;
          // console.log(result);
          if (result.status == 'success') {

            this.selectedpost = result.item;
            this.ismodalcomment1 = true;
            // console.log('this.selectedpost');
            // console.log(this.selectedpost);
          }

        });
  }

  getchildcomment(val) {

    // console.log('ids');
    // console.log(this.replyblock[val._id]);
    // console.log(val._id);
    if (this.replyblock[val._id] != null && this.replyblock[val._id] == 1 ) {
      this.replyblock[val._id] = 0;
      this.lastreplyblockopen = null;
    } else {
      this.replyblock[val._id] = 0;
      const link = this._commonservices.nodesslurl + 'getcommentbyparentposts';
      const data = {post_id: val._id};
      this._http.post(link, data)
          .subscribe(res => {

            let result: any = {};
            result = res;
            // console.log('result of child comment');
            // console.log(result);
            if (result.status == 'success') {

              // val.childcommentarr = result.item;
              for (const c in this.selectedpost) {
                if (this.selectedpost[c]._id == val._id) {
                  this.selectedpost[c].childcommentarr = result.item;
                }
              }
              this.replyblock[val._id] = 1 ;
              this.lastreplyblockopen = val;
            }
          });
    }
  }

  deleteComment(val: any) {

    if (val.user_id == this.userdata.get('user_id')) {

      const link = this._commonservices.nodesslurl + 'deleteonecommentbyid';
      const data = {post_id: val.post_id, _id: val._id};
      this._http.post(link , data)
          .subscribe(res => {

            let result: any = {};
            result = res;
            // console.log('result of deletecomment----');
            // console.log(result);
            if (result.status == 'success') {
              this.selectedpost = result.item;
              this.postobj.comment = result.item.length;
              if (this.selectedpicture != null) {
                this.selectedpicture.commentarr = result.item;
                this.selectedpicture.comment = result.item.length;
              }

              this.deletecommentmodalformediawall = false;
              setTimeout(() => {
                this.deletecommentmodalformediawallsuccess = true;

                // this.getcommentbyposid(val.post_id);
                /* this.getallpicture();

                 this.getallmusic();

                 this.getallvideo();
                 */
              }, 2000);
            }
          });
    }
  }

  addcomment(val: any, index: any) {
    console.log();
    let commentvalformediawall = '';


    // if(val.keyCode==13 && !val.shiftKey &&(this.commentval!='' || this.Zcommentreplyformediawallarray[index]!='')){
    if ((this.commentval != '' || this.commentreplyformediawallarray[index] != '')) {

      /*console.log('submit comment here ....');*/
      const link = this._commonservices.nodesslurl + 'addonecomment';
      if (index == 0) {
        commentvalformediawall = this.commentval;
      } else {
        commentvalformediawall = this.commentreplyformediawallarray[index];
      }
      const data = {post_id: this.postobj._id, user_id: this.userdata.get('user_id'), comment: commentvalformediawall, parents_id: this.currentcommentidformediawall};
      /* console.log('data');
       console.log(data);*/
      this._http.post(link, data)
          .subscribe(val => {

            let res: any = {};
            res = val;
            if (res.status == 'success') {
              this.selectedpost = res.item;
              this.postobj.comment = res.item.length;
              if (this.selectedpicture != null) {
                this.selectedpicture.commentarr = res.item;
                this.selectedpicture.comment = res.item.length;
              }
              // console.log(res);
             // if(res.citems!=null) {
                // this.selectedpost.commentarr[i].childcommentarr=res.citem;
                // this.replyblock[i]=1;
                // console.log('in citem block');
                // console.log('this.lastreplyblockopen');
                // console.log(this.lastreplyblockopen);
              if (this.lastreplyblockopen != null) {

                  // console.log('this.lastreplyblockopen');
                  // console.log(this.lastreplyblockopen);
                  // console.log(this.lastreplyblockopen._id);
                  this.replyblock[this.lastreplyblockopen._id] = 0;
                  this.getchildcomment(this.lastreplyblockopen);
                }
              // }


              setTimeout(() => {
                /*this.getallpicture();
                 this.getallmusic();
                 this.getallvideo();
                 this.getfeedofusers();*/
                this.currentcommentidformediawall = 0;
              }, 2000);

              this.commentval = '';
              this.commentreplyformediawallarray[index] = '';

            }

          });
    }
  }

  addlike(val: any) {
    if (val.likes == null) {
      val.likes = 1;
    } else {
      val.likes = val.likes + 1;
    }


    const link = this._commonservices.nodesslurl + 'likeaddpost';
    // console.log('add');
    const data = {user_id: this.userdata.get('user_id'), post_id: val._id};
    this._http.post(link, data)
        .subscribe(res => {

          let result: any  = {};
          result = res;
          // console.log('result of likeaddpost');
          // console.log(result);
          if (result.status == 'success') {

            val.likes = result.userlikes.length;
            val.userlike = this._commonservices.getlikestatus(result.userlikes);
            // if(val.title_music!=null){
            //   val.usermusiclikes = result.userlikes;


            // }
            // if(val.title!=null){
            //   val.uservideolikes = result.userlikes;

            // }
            // if(val.title_pic!=null){
            //   val.userpicturelikes = result.userlikes;

            // }
            if (val.title_music == null && val.title == null && val.title_pic == null) {
              val.usercommentlike = result.userlikes;
            }



          }
        });
  }
  deletelike(val) {
    if (val.likes == null) {
      val.likes = 1;
    } else {
      val.likes = val.likes - 1;
    }

    const link = this._commonservices.nodesslurl + 'likedeletepost';
    // console.log('delete');
    const data = {user_id: this.userdata.get('user_id'), post_id: val._id};
    this._http.post(link, data)
        .subscribe(res => {

          let result: any  = {};
          result = res;
          // console.log('result of likedeletepost');
          // console.log(result);
          if (result.status == 'success') {
            val.likes = result.userlikes.length;
            val.userlike = this._commonservices.getlikestatus(result.userlikes);

            // if(val.title_music!=null){
            //   val.usermusiclikes = result.userlikes;

            // }
            // if(val.title!=null){
            //   val.uservideolikes = result.userlikes;

            // }
            // if(val.title_pic!=null){
            //   val.userpicturelikes = result.userlikes;

            // }
            if (val.title_music == null && val.title == null && val.title_pic == null) {
              val.usercommentlike = result.userlikes;
            }

          }
        });
  }
  onStateChangetrending(event) {
    // console.log(event);

    const selectedvideoval = this.postobj;
    $('iframe').each(function(i) {

      setTimeout(() => {
        if ($(this).attr('src').indexOf('https://www.youtube.com/embed/' + event.target.b.b.videoId) == -1 && event.data != 2) {

          this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
        } else {

        }
      }, 300);


    });
    this.videoplayfag = true;

    if (event.data == -1) {
      /*var link2= this._commonservices.url+'addvideoviewsandgetupdate';
       var data = {'user_id':this.userdata.get('user_id'),videoid:this.selectedvideotrending._id};
       // console.log('username');
       //console.log(data.username);
       this._http.post(link2, data)
       .subscribe(res => {
       var result = res;
       // console.log(result.item);
       if(result.status=='success'){
       //this.getnotificationdetailsbyuserid();


       if(this.postarr3.video[index].views==null) {
       this.postarr3.video[index].views=0;
       }
       this.postarr3.video[index].views=result.countval;

       }
       }, error => {
       // console.log("Oooops!");
       });*/

      // this.getVideoDetails();
    }

    if (event.data == 0) {
      this.videoplayfag = true;

    }
  }

  showpicturemodal(val: any) {

    this.selectedpicture = val;
    // console.log('this.selectedpicture');
    // console.log(this.selectedpicture);
    this.showLoader = 1;
    const link = this._commonservices.nodesslurl + 'getcommentbypostids';
    const data = {post_id: this.selectedpicture._id};
    this._http.post(link, data)
        .subscribe(res => {

          let result: any = {};
          result = res;
          // console.log(result);
          if (result.status == 'success') {
            this.showLoader = 0;

            this.isModalPicDetail = true;
            this.addpostview(val);
            this.selectedpicture.commentarr = result.item;

            // console.log('this.selectedpicture.commentarr');
            // console.log(this.selectedpicture.commentarr);

          }
        });



  }

  addpostview(val: any) {
    console.log('uguytyr');
    const link3 = this._commonservices.nodesslurl + 'addorupdatedata';
        // let data = {'user_id':this.userdata.get('user_id'),post_id:val._id};
    const dataval = {
          source: 'postviews',
          data: {
              user_id: this.userdata.get('user_id'),
              post_id: val._id
          },
          sourceobj: [
             'user_id', 'post_id'
         ]

      };
    this._http.post(link3, dataval)
            .subscribe(res => {

                let result: any;
                result = res;
                // console.log(result);
                if (result.status == 'success') {
                  if (val.title_music != null) {
                    val.musicviews = val.musicviews + 1;
                  } else {
                  val.views = val.views + 1;
                  }
                    // console.log('suceess');
                }
            });

  }
  /*-----------------tag photo starts here----------------------*/
  tagphoto() {

    this.finishtagflag = 1 - this.finishtagflag;
    this.tagflag = 1 - this.tagflag;
    // $(".tagimagewrapper").css( 'cursor', 'crosshair' );
    // console.log($("#tagimagewrapper").html());
    $('#tagimagewrapper').css( 'cursor', 'crosshair' );
    // $("#tagimagewrapper").css( 'cursor', 'default' );
  }
  donetag() {
    this.finishtagflag = 1 - this.finishtagflag;
    this.tagflag = 1 - this.tagflag;
    $('#tagimagewrapper').css( 'cursor', 'default' );
    $('.tagform').addClass( 'hide' );

  }

  friendslist() {
    const friendarr: any = [];
    const favarr: any = [];
    const link = this._commonservices.nodesslurl + 'getfrienddetailsbyuserid';
    let uid: any = '';
    if (this.activeRoute.snapshot.params.id == null || typeof(this.activeRoute.snapshot.params.id) == 'undefined') {
      uid = this.userdata.get('user_id');
    } else {
      uid = this.activeRoute.snapshot.params.id;
    }
    const data = { user_id: uid};
    this._http.post(link , data)
        .subscribe(res => {

          let result: any = {};
          result = res;
          if (result.status == 'success') {
            for (const i in result.item[0].frienduserinfo) {
              let arr: any = [];

              arr = result.item[0].frienduserinfo[i][0];
              if (arr != null && arr.fan == 1) {
                friendarr.push(arr);
              }
              if (arr != null && arr.fan == 0) {
                favarr.push(arr);
              }

            }
            this.friendlistarr = friendarr.concat(favarr);

          }
        });


  }

  opentagform() {

    $('.tagform').removeClass('hide');
  }
  filterusers(event: any) {

    this.filterlist = [];
    // console.log('event');
    // console.log(event);
    for (const c in this.friendlistarr) {
      if (this.friendlistarr[c].fullname != null && this.friendlistarr[c].fullname.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
        this.filterlist.push(this.friendlistarr[c]);
      } else if (this.friendlistarr[c].firstname != null && this.friendlistarr[c].firstname.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
        this.filterlist.push(this.friendlistarr[c]);
      } else if (this.friendlistarr[c].lastname != null && this.friendlistarr[c].lastname.toLowerCase().indexOf(event.target.value.toLowerCase()) > -1) {
        this.filterlist.push(this.friendlistarr[c]);
      }
    }
    // console.log('this.filterlist');
    // console.log(this.filterlist);

    /*console.log(this.filterlist.length);
    console.log(event.target.value);
    console.log(event.target.value.length);*/
    let valLength: any;
    valLength = event.target.value.length;
    if (valLength > 0) {
      this.showUserSearchFlag = 1;

    } else {
      this.showUserSearchFlag = 0;
    }



  }
  /*-----------------tag photo ends here----------------------*/


  onHidden() {

    this.ismodalcomment1 = false;
    this.isModalPicDetail = false;
    this.deletecommentmodalformediawall = false;
    this.deletecommentmodalformediawallsuccess = false;
  }

}

