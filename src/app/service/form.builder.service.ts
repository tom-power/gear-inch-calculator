import {Injectable} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Params} from '@angular/router';
import {Bike} from '../model/bike.interface';
import {Location} from '@angular/common';
import {Sprocket} from '../model/sprocket.interface';

@Injectable()
export class FormBuilderService {

  constructor(private fb: FormBuilder) {
  }

  initForm(wheelDiameter: number, chainrings: number[], cogs: number[]): FormGroup {
    return this.fb.group({
      wheel: this.getWheel(wheelDiameter),
      chainrings: this.getSprocketFormArray(chainrings),
      cogs: this.getSprocketFormArray(cogs)
    });
  }

  private getWheel(diameter: number): FormGroup {
    return this.fb.group({
      diameter: [diameter, [Validators.required, Validators.pattern('[0-9]{1,2}[.]{0,1}[0-9]{0,2}')]]
    });
  }

  private getSprocketFormArray(teethArr: number[]): FormArray {
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

  getSprocketFormGroup(id: number, teeth: number): FormGroup {
    return this.fb.group({
      id: id, teeth: [teeth, [Validators.required, Validators.pattern('[0-9]{1,3}')]]
    });
  }

}
