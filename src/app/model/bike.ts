export class Bike {
  wheel:any;
  chainrings: any;
  cassette: any;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
