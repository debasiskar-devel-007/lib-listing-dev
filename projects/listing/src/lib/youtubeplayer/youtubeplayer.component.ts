import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lib-youtubeplayer',
  templateUrl: './youtubeplayer.component.html',
  styleUrls: ['./youtubeplayer.component.css']
})
export class YoutubeplayerComponent implements OnInit {
  id: any;

  @Input()          // setting the server url from project
  set videoid(id: any) {
    this.id = (id) || '<no name set>';
    this.id = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + id + '?autoplay=1');
    // console.warn(this.id);
  }
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
