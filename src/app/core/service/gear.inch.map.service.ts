import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {CalculateService} from './calculate.service';

@Injectable()
export class GearInchMapService {

  constructor(private calculateService: CalculateService) {
  }

  getGearInchesMap(bike: Bike): any {
    const gearInchesMap = {};
    if (bike != null && bike.chainrings != null && bike.cogs != null) {
      for (const chainring of bike.chainrings) {
        gearInchesMap[chainring.id] = {};
        for (const cog of bike.cogs) {
          gearInchesMap[chainring.id][cog.id] = this.calculateService.getGearInches(bike.wheel.diameter, chainring.teeth, cog.teeth);
        }
      }
    }
    return gearInchesMap;
  }

}
