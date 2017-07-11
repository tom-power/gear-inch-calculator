import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {LinkService} from './link.service';
import {GearInchMapService} from 'app/core/service/gear.inch.map.service';

@Injectable()
export class UpdateService {

  constructor(private gearInchMapService: GearInchMapService,
              private linkService: LinkService) {
  }

  getOutput(bike: Bike): any {
    const output: any = {};
    output.cogs = bike.cogs;
    output.chainrings = bike.chainrings;
    output.gearInchesMap = this.gearInchMapService.getGearInchesMap(bike);
    output.link = '/' + this.linkService.getQueryString(bike);
    return output;
  }
}
