import {Injectable} from "@angular/core";
import {FormBuilder, FormArray, FormGroup} from "@angular/forms";

@Injectable()
export class FormService {

  constructor(private fb: FormBuilder) { }

  public initForm() {
    return this.fb.group({
      wheel: this.fb.group({diameter: null}),
      chainrings: this.initSprocketArray(),
      cogs: this.initSprocketArray()
    });
  }

  initSprocketArray() {
    return this.fb.array(
      [this.initSprocket(0)]
    );
  }

  initSprocket(id: number) {
    return this.fb.group({id: id, teeth: null});
  }

  add(form: FormGroup, controlName: string, id: number) {
    const control = <FormArray>form.controls[controlName];
    control.push(this.initSprocket(id));
  }

  remove(form: FormGroup, controlName: string, i: number) {
    const control = <FormArray>form.controls[controlName];
    control.removeAt(i);
  }
}
