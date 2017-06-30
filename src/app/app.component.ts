import {Component, OnInit} from "@angular/core";
import {CalculateService} from "./service/calculate.service";
import {FormGroup} from "@angular/forms";
import {FormService} from "./service/form.service";
import {ActivatedRoute, Params} from "@angular/router";
import {Bike} from "./model/bike.interface";

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
              private formService: FormService,
              private route: ActivatedRoute) {
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

  remove(controlName: string, i: number) {
    this.formService.remove(this.form, controlName, i);
  }

  updateOutput(): any {
    if (this.form.valid) {
      let bike: Bike = this.form.value;
      this.output = {};
      this.output.cogs = bike.cogs;
      this.output.chainrings = bike.chainrings;
      this.output.gearInchesMap = this.calculateService.getGearInchesMap(bike);
      this.output.link = this.formService.getLink(bike);
    }
  }

}
