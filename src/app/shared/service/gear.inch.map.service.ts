import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {CalculateService} from './calculate.service';
import {Sprocket} from '../model/sprocket.interface';

@Injectable()
export class GearInchMapService {

  constructor(private calculateService: CalculateService) {
  }

  getGearInchesMap(bike: Bike): any {
    if (bike != null && bike.chainrings != null && bike.cogs != null) {
      return this.getGearInchedMapFromComponents(bike.chainrings, bike.cogs, bike.wheel.diameter);
    }
    return {};
  }

  private getGearInchedMapFromComponents(chainrings: Sprocket[], cogs: Sprocket[], wheelDiameter: number): any {
    const gearInchesMap = {};
    for (const chainring of chainrings) {
      gearInchesMap[chainring.id] = {};
      for (const cog of cogs) {
        gearInchesMap[chainring.id][cog.id] = this.calculateService.getGearInches(wheelDiameter, chainring.teeth, cog.teeth);
      }
    }
    return gearInchesMap;
  }

}
