import { OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export declare class YoutubeplayerComponent implements OnInit {
    sanitizer: DomSanitizer;
    id: any;
    videoid: any;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
}
