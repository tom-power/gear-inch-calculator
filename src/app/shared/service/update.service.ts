import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {LinkService} from './link.service';
import {GearInchMapService} from 'app/shared/service/gear.inch.map.service';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UpdateService {

  private output: any = new Subject<any>();

  getOutput$(): Observable<any> {
    return this.output.asObservable();
  }

  constructor(private gearInchMapService: GearInchMapService,
              private linkService: LinkService) {
  }

  updateOutput(bike: Bike) {
    this.output.next(this.getOutputFromBike(bike));
  }

  private getOutputFromBike(bike: Bike) {
    const output: any = {};
    output.cogs = bike.cogs;
    output.chainrings = bike.chainrings;
    output.gearInchesMap = this.gearInchMapService.getGearInchesMap(bike);
    output.link = '/' + this.linkService.getQueryString(bike);
    return output;
  }

}
