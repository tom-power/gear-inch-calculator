import {Component} from "@angular/core";
import {CalculateService} from "./service/calculate.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  constructor(public calculateService: CalculateService) {
  }

  calculate(): any {
    return this.calculateService.getOutput();
  }
}
