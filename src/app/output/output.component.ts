import {Component, Input} from '@angular/core';
import {UpdateService} from 'app/core/service/update.service';
import {Location} from '@angular/common';
import {Bike} from '../core/model/bike.interface';

@Component({
  selector: 'app-output-root',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent {
  @Input() update: Bike;
  output: any;

  constructor(private updateService: UpdateService,
              private location: Location) {
  }

  updateOutput(): any {
    this.output = this.updateService.getOutput(this.update);
    this.updateLink();
  }

  private updateLink() {
    this.output.link = this.location.prepareExternalUrl(this.output.link);
  }

}
