import {Injectable} from "@angular/core";
import {Bike} from "../model/bike.interface";

@Injectable()
export class CalculateService {

  private bike: Bike;
  private gearInchesMap: any;

  public getGearInchesMap(bike: Bike): any {
    this.bike = bike;
    this.gearInchesMap = {}
    this.setupGearInchesMap();
    return this.gearInchesMap;
  }

  private setupGearInchesMap(): void {
    this.gearInchesMap = {};
    for (let chainring of this.bike.chainrings) {
      this.gearInchesMap[chainring.id] = {};
      for (let cog of this.bike.cogs) {
        this.gearInchesMap[chainring.id][cog.id] = this.getGearInches(this.bike.wheel.diameter, chainring.teeth, cog.teeth);
      }
    }
  }

  private getGearInches(wheelDiameter, chainringTeeth, cogTeeth): number {
    return wheelDiameter * (chainringTeeth / cogTeeth);
  }

}
