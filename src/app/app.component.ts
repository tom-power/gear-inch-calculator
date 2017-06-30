import {Component, OnInit} from "@angular/core";
import {CalculateService} from "./service/calculate.service";
import {FormBuilder, FormGroup, FormArray} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculateService]
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public output: any;

  constructor(private calculateService: CalculateService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      wheel: this.fb.group({diameter: null}),
      chainrings: this.fb.array([
        this.initSprocket(0)
      ]),
      cogs: this.fb.array([
        this.initSprocket(0)
      ])
    });
  }

  initSprocket(id: number) {
    return this.fb.group({id: id, teeth: null});
  }

  add(controlName: string, id: number) {
    const control = <FormArray>this.form.controls[controlName];
    console.log(id);
    control.push(this.initSprocket(id));
  }

  remove(controlName: string, i: number) {
    const control = <FormArray>this.form.controls[controlName];
    control.removeAt(i);
  }

  updateOutput(): any {
    if (this.form.valid) {
      let bike = this.form.value;
      this.output = {};
      this.output.cogs = bike.cogs;
      this.output.chainrings = bike.chainrings;
      console.log(this.calculateService.getGearInchesMap(bike));
      this.output.gearInchesMap = this.calculateService.getGearInchesMap(bike);
    }
  }
}
