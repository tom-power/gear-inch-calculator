import {Injectable} from "@angular/core";
import {FormBuilder, FormArray, FormGroup, Validators} from "@angular/forms";
import {Params} from "@angular/router";
import {Bike} from "../model/bike.interface";
import {Sprocket} from "../model/sprocket.interface";
import {Location } from '@angular/common';

@Injectable()
export class FormService {

  constructor(private fb: FormBuilder,
              private location: Location) {
  }

  public initForm(params: Params) {
    return this.fb.group({
      wheel: this.initWheel(+params['wheelDiameter']),
      chainrings: this.initSprocketArray(this.getNumberArray(params['chainrings'])),
      cogs: this.initSprocketArray(this.getNumberArray(params['cogs']))
    });
  }

  private getNumberArray(param: string): number[] {
    return param != null ? JSON.parse(param) : param;
  }

  private initWheel(diameter: number) {
    return this.fb.group({
      diameter: [diameter, Validators.required]
    })
  }

  initSprocketArray(teethArr: number[]) {
    var sprocketArray: FormArray = this.fb.array([]);
    if (teethArr != null) {
      teethArr.forEach((item, index) => {
        sprocketArray.push(this.initSprocket(index, item));
      });
    } else {
      sprocketArray.push(this.initSprocket(0, null));
    }
    return sprocketArray;
  }

  initSprocket(id: number, teeth: number) {
    return this.fb.group({
      id: id, teeth: [teeth, Validators.required]
    });
  }

  add(form: FormGroup, controlName: string, id: number) {
    const control = <FormArray>form.controls[controlName];
    control.push(this.initSprocket(id, null));
  }

  remove(form: FormGroup, controlName: string, i: number) {
    const control = <FormArray>form.controls[controlName];
    control.removeAt(i);
  }


  getLink(bike: Bike) {
    var link = "/" + this.getQueryString(bike);
    return this.location.prepareExternalUrl(link);
  }

  private getQueryString(bike: Bike) {
    var queryString = "";
    queryString += "?";
    queryString += "wheelDiameter=" + "" + bike.wheel.diameter;
    queryString += "&";
    queryString += "chainrings=" + "[" + this.getString(bike.chainrings) + "]";
    queryString += "&";
    queryString += "cogs=" + "[" + this.getString(bike.cogs) + "]";
    return queryString;
  }

  private getString(sprockets: Sprocket[]): string {
    return sprockets.reduce((str, sprocket) => {
      var comma = str != "" ? "," : "";
      return str + comma + sprocket.teeth
    }, "");
  }


}
