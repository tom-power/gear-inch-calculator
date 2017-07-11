import {Component, OnInit} from '@angular/core';
import {UpdateService} from 'app/core/service/update.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-output-root',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {

  output: any;

  constructor(private updateService: UpdateService,
              private location: Location) {
  }

  ngOnInit(): void {
    this.updateService.getOutput().subscribe(
      output => {
        this.output = output;
        this.updateLink();
      });
  }

  private updateLink() {
    this.output.link = this.location.prepareExternalUrl(this.output.link);
  }

}
