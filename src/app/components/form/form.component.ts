import {Component, Input, OnChanges} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormService} from 'app/shared/service/form.service';
import {Params} from '@angular/router';
import {UpdateService} from 'app/shared/service/update.service';

@Component({
  selector: 'app-form-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnChanges {

  form: FormGroup;
  @Input() params: Params;

  constructor(private formService: FormService,
              private updateService: UpdateService) {
  }

  ngOnChanges() { // to get params from @Input
    this.form = this.formService.initForm(this.params);
    this.updateOutput();
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

  get chainrings() {
    return <FormArray>this.form.get('chainrings');
  }

  get cogs() {
    return <FormArray>this.form.get('cogs');
  }

}
