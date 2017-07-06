import {Injectable} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {Params} from '@angular/router';
import {FormBuilderService} from 'app/service/form.builder.service';
import {URLParams} from 'app/utils/url.params';

@Injectable()
export class FormService {

  constructor(private formBuilderService: FormBuilderService) {
  }

  initForm(params: Params): FormGroup {
    let wheelDiameter = +params[URLParams.wheelDiameterParam];
    let chainrings = this.getNumberArray(params[URLParams.chainringsParam]);
    let cogs = this.getNumberArray(params[URLParams.cogsParam]);
    return this.formBuilderService.initForm(wheelDiameter, chainrings, cogs);
  }

  private getNumberArray(param: string): number[] {
    return param != null ? JSON.parse(param) : param;
  }

  add(form: FormGroup, controlName: string, id: number): void {
    const control = <FormArray>form.controls[controlName];
    control.push(this.formBuilderService.getSprocketFormGroup(id, null));
  }

  remove(form: FormGroup, controlName: string, i: number): void {
    const control = <FormArray>form.controls[controlName];
    control.removeAt(i);
  }

}
