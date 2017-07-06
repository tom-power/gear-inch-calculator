import {Component, OnInit} from '@angular/core';
import {UpdateService} from './service/update.service';
import {FormGroup} from '@angular/forms';
import {FormService} from './service/form.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  output: any;

  constructor(private route: ActivatedRoute,
              private formService: FormService,
              private updateService: UpdateService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.queryParams.subscribe((params: Params) => {
      this.form = this.formService.initForm(params);
      if (this.form.valid) {
        this.updateOutput();
      }
    });
  }

  add(controlName: string, id: number) {
    this.formService.add(this.form, controlName, id);
  }

  remove(controlName: string, id: number) {
    this.formService.remove(this.form, controlName, id);
  }

  updateOutput(): any {
    if (this.form.valid) {
      this.output = this.updateService.getOutput(this.form.value);
      this.updateLink();
    }
  }

  private updateLink() {
    this.output.link = this.location.prepareExternalUrl(this.output.link);
  }

}
