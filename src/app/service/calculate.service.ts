import {Injectable} from "@angular/core";
import {Bike} from "../model/bike";

@Injectable()
export class CalculateService {

  private output: any = {};
  private bike: Bike = new Bike();

  constructor() {}

  public getOutput(bike: Bike): any {
    this.bike = bike;
    this.output = {};
    this.setHeaders();
    this.setValues();
    return this.output;
  }

  private setHeaders(): void {
    this.output.cogs = this.bike.cogs;
    this.output.chainrings = this.bike.chainrings;
  }

  private setValues(): void {
    // this.bike.chainrings.forEach(function (chainring) {
    //   this.output.value[chainring.teeth] = {};
    //   this.bike.cogs.forEach(function (cog) {
    //     this.output.value[chainring.teeth][cog.teeth] = this.getGearInches(chainring, cog);
    //   });
    // });
  }

  private getGearInches(chainring, cog) {
    return this.bike.wheel.diameter * (chainring.teeth / cog.teeth);
  }

}
