import {Wheel} from './wheel.interface';
import {Sprocket} from './sprocket.interface';

export interface Bike {
  wheel: Wheel;
  chainrings: Sprocket[];
  cogs: Sprocket[];
}
