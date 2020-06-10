import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-testc',
  templateUrl: './testc.component.html',
  styleUrls: ['./testc.component.css']
})
export class TestcComponent implements OnInit {

  constructor(public router: Router,private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
       // (+) converts string 'id' to a number
      console.log('params');
      console.log(params);
      console.log(this.route.snapshot);
      console.log(this.route.snapshot.url);
      console.log('this.route.snapshot.url');
      console.log(this.route.snapshot.url[0].path);
      console.log(this.route);

      // In a real app: dispatch action to load the details here.
    });
  }

}
