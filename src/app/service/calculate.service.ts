import {Injectable} from "@angular/core";
import {Bike} from "../model/bike";

@Injectable()
export class CalculateService {

  private bike: Bike;
  private output: any;

  constructor(bike: Bike) {
  }

  getOutput(): any {
    this.output = {};
    this.setHeaders();
    this.setValues();
    return this.output;
  }

  private setHeaders(): void {
    this.output.cogs = this.bike.cassette.cogs;
    this.output.chainrings = this.bike.chainrings;
  }

  private setValues(): void {
    this.bike.chainrings.forEach(function (chainring) {
      this.output.value[chainring.teeth] = {};
      this.bike.cassette.cogs.forEach(function (cog) {
        this.output.value[chainring.teeth][cog.teeth] = this.bike.wheel.diameter * (chainring.teeth / cog.teeth);
      });
    });
  }

}



