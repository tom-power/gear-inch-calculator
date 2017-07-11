import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormService} from 'app/core/service/form.service';
import {Params} from '@angular/router';
import {UpdateService} from '../core/service/update.service';

@Component({
  selector: 'app-form-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup;
  @Input() params: Params;

  constructor(private formService: FormService,
              private updateService: UpdateService) {
  }

  ngOnInit() {
    this.form = this.formService.initForm(this.params);
  }

  add(controlName: string, id: number) {
    this.formService.add(this.form, controlName, id);
  }

  remove(controlName: string, id: number) {
    this.formService.remove(this.form, controlName, id);
  }

  updateOutput() {
    if (this.form.valid) {
      this.updateService.updateOutput(this.form.value);
    }
  }

}
