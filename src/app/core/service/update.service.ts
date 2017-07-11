import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {LinkService} from './link.service';
import {GearInchMapService} from 'app/core/service/gear.inch.map.service';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class UpdateService {

  private output: any = new Subject<any>();

  getOutput() {
    return this.output.asObservable();
  }

  constructor(private gearInchMapService: GearInchMapService,
              private linkService: LinkService) {
  }

  updateOutput(bike: Bike) {
    this.output = {};
    this.output.cogs = bike.cogs;
    this.output.chainrings = bike.chainrings;
    this.output.gearInchesMap = this.gearInchMapService.getGearInchesMap(bike);
    this.output.link = '/' + this.linkService.getQueryString(bike);
  }

}
