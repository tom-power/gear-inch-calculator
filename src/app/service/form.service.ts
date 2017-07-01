import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params} from '@angular/router';
import {Bike} from '../model/bike.interface';
import {Location} from '@angular/common';
import Utils from '../utils/utils';

@Injectable()
export class FormService {

  private wheelDiameterParam = 'wheel-diameter';
  private chainringsParam = 'chainrings';
  private cogsParam = 'cogs';

  constructor(private fb: FormBuilder,
              private location: Location) {
  }

  initForm(params: Params): FormGroup {
    return this.fb.group({
      wheel: this.getWheel(+params[this.wheelDiameterParam]),
      chainrings: this.getSprocketFormArray(Utils.getNumberArray(params[this.chainringsParam])),
      cogs: this.getSprocketFormArray(Utils.getNumberArray(params[this.cogsParam]))
    });
  }

  private getWheel(diameter: number): FormGroup {
    return this.fb.group({
      diameter: [diameter, Validators.required]
    })
  }

  getSprocketFormArray(teethArr: number[]): FormArray {
    const sprocketFormArray: FormArray = this.fb.array([]);
    if (teethArr != null) {
      teethArr.forEach((item, index) => {
        sprocketFormArray.push(this.getSprocketFormGroup(index, item));
      });
    } else {
      sprocketFormArray.push(this.getSprocketFormGroup(0, null));
    }
    return sprocketFormArray;
  }

  private getSprocketFormGroup(id: number, teeth: number): FormGroup {
    return this.fb.group({
      id: id, teeth: [teeth, Validators.required]
    });
  }

  add(form: FormGroup, controlName: string, id: number): void {
    const control = <FormArray>form.controls[controlName];
    control.push(this.getSprocketFormGroup(id, null));
  }

  remove(form: FormGroup, controlName: string, i: number): void {
    const control = <FormArray>form.controls[controlName];
    control.removeAt(i);
  }

  getLink(bike: Bike): string {
    return this.location.prepareExternalUrl('/' + this.getQueryString(bike));
  }

  private getQueryString(bike: Bike): string {
    let queryString = '?';
    queryString += this.wheelDiameterParam + '=' + bike.wheel.diameter;
    queryString += '&';
    queryString += this.chainringsParam + '=[' + Utils.getSprocketTeethAsCsv(bike.chainrings) + ']';
    queryString += '&';
    queryString += this.cogsParam + '=[' + Utils.getSprocketTeethAsCsv(bike.cogs) + ']';
    return queryString;
  }

}
