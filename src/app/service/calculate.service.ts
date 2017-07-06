import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';

@Injectable()
export class CalculateService {

  getGearInches(wheelDiameter: number, chainringTeeth: number, cogTeeth: number): number {
    return wheelDiameter * (chainringTeeth / cogTeeth);
  }

}
