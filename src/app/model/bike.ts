import {Wheel} from "./wheel";
import {Sprocket} from "./sprocket";

export class Bike {
  wheel: Wheel = new Wheel();
  chainrings: Sprocket[] = new Array<Sprocket>();
  cogs: Sprocket[] = new Array<Sprocket>();

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
