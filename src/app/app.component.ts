import { Component, ViewChild, AfterViewInit} from '@angular/core';

import { factory } from "../ConfigLog4j";
import { GameControlComponent } from './game-control/game-control.component';


const log = factory.getLogger("model.Product");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  title = 'assignment4';
  count: number;
  @ViewChild(GameControlComponent) gameControl;
  constructor() {

  }

  ngAfterViewInit() : void {
    this.count = this.gameControl.baseCount;
    console.log(this.count);
  }

  reciveMessage($event : number) {
    this.count = $event;
    console.log("Message recived: " + this.count)
  }
}
