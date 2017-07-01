import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import Utils from '../utils/utils';

@Injectable()
export class CalculateService {

  public getGearInchesMap(bike: Bike): any {
    let gearInchesMap = {};
    if (bike != null && bike.chainrings != null && bike.cogs != null) {
      for (const chainring of bike.chainrings) {
        gearInchesMap[chainring.id] = {};
        for (const cog of bike.cogs) {
          gearInchesMap[chainring.id][cog.id] = Utils.getGearInches(bike.wheel.diameter, chainring.teeth, cog.teeth);
        }
      }
    }
    return gearInchesMap;
  }

}
