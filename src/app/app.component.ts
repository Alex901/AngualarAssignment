import { Component } from '@angular/core';

import {factory} from "../ConfigLog4j";


const log = factory.getLogger("model.Product");

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment4';

  constructor(){

  }
}
