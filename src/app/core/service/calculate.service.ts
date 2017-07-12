import {Injectable} from '@angular/core';

@Injectable()
export class CalculateService {

  getGearInches(wheelDiameter: number, chainringTeeth: number, cogTeeth: number): number {
    return wheelDiameter * (chainringTeeth / cogTeeth);
  }

}
