import {Sprocket} from '../model/sprocket.interface';
export default class Utils {

  static getNumberArray(param: string): number[] {
    return param != null ? JSON.parse(param) : param;
  }

  static getSprocketTeethAsCsv(sprockets: Sprocket[]): string {
    return sprockets.reduce((str, sprocket) => {
      const comma = str !== '' ? ',' : '';
      return str + comma + sprocket.teeth
    }, '');
  }

  static getGearInches(wheelDiameter: number, chainringTeeth: number, cogTeeth: number): number {
    return wheelDiameter * (chainringTeeth / cogTeeth);
  }

}
