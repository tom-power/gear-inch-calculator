import {Component} from "@angular/core";
import {CalculateService} from "./service/calculate.service";
import {Bike} from "./model/bike";
import {Sprocket} from "./model/sprocket";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CalculateService]
})
export class AppComponent {
  bike: Bike = new Bike();

  constructor(private calculateService: CalculateService) {
    this.bike.chainrings.push(new Sprocket());
    this.bike.cogs.push(new Sprocket());
  }

  calculate(): any {
    return this.calculateService.getOutput(this.bike);
  }

  add(things, name): void {
    things.push({'id': name + things.length + 1});
  }

  removeLast(things): void {
    if (things.length - 1 !== 0) {
      things.pop();
    }
  }
}
