import {Injectable} from '@angular/core';
import {Bike} from '../model/bike.interface';
import {Sprocket} from '../model/sprocket.interface';
import {URLParams} from '../utils/url.params';

@Injectable()
export class LinkService {

  getQueryString(bike: Bike): string {
    let queryString = '?';
    queryString += URLParams.wheelDiameterParam + '=' + bike.wheel.diameter;
    queryString += '&';
    queryString += URLParams.chainringsParam + '=[' + this.getSprocketTeethAsCsv(bike.chainrings) + ']';
    queryString += '&';
    queryString += URLParams.cogsParam + '=[' + this.getSprocketTeethAsCsv(bike.cogs) + ']';
    return queryString;
  }

  private getSprocketTeethAsCsv(sprockets: Sprocket[]): string {
    return sprockets.reduce((str, sprocket) => {
      const comma = str !== '' ? ',' : '';
      return str + comma + sprocket.teeth;
    }, '');
  }

}
