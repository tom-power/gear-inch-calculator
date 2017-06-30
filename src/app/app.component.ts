import {Component, OnInit} from "@angular/core";
import {CalculateService} from "./service/calculate.service";
import {FormGroup} from "@angular/forms";
import {FormService} from "./service/form.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculateService, FormService]
})
export class AppComponent implements OnInit {
  public form: FormGroup;
  public output: any;

  constructor(private calculateService: CalculateService,
              private formService: FormService) {
  }

  ngOnInit() {
    this.form = this.formService.initForm();
  }

  add(controlName: string, id: number) {
    this.formService.add(this.form, controlName, id);
  }

  remove(controlName: string, i: number) {
    this.formService.remove(this.form, controlName, i);
  }

  updateOutput(): any {
    if (this.form.valid) {
      let bike = this.form.value;
      this.output = {};
      this.output.cogs = bike.cogs;
      this.output.chainrings = bike.chainrings;
      this.output.gearInchesMap = this.calculateService.getGearInchesMap(bike);
    }
  }
}
