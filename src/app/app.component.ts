import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  params: Params;

  constructor(private route: ActivatedRoute,
              private titleService: Title) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.params = params;
    });
    this.titleService.setTitle( "Gear Inch Calculator" );
  }

}
