import {Component, OnDestroy, OnInit} from '@angular/core';
import {UpdateService} from 'app/shared/service/update.service';
import {Location} from '@angular/common';
import * as _ from 'lodash';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-output-root',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit, OnDestroy {

  output: any;
  subscription: Subscription;

  constructor(private updateService: UpdateService,
              private location: Location) {
  }

  ngOnInit() {
    this.subscription = this.updateService.getOutput$().subscribe(
      output => {
        this.output = output;
        this.gearInchesMapToArray();
        this.updateLink();
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  private gearInchesMapToArray() {
    this.output.gearInchesMap = _.values(this.output.gearInchesMap).map((item) => _.values(item));
  }

  private updateLink() {
    this.output.link = this.location.prepareExternalUrl(this.output.link);
  }

}
