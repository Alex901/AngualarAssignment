import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public gameGoing = false;
  @Output() countIncrased = new EventEmitter<number>(); //remove this
  baseCount = 0;
  private intervall : number;

  constructor() {
   }

  ngOnInit(): void {
  }

  onClickStart(){
    var count = this.baseCount;

    this.gameGoing = true; //start counter
    this.intervall = setInterval(() => {
      this.countIncrased.emit(count);
      count++;
      console.log(this.baseCount);
      this.baseCount = count; //This is uggly AF
    }, 1000);
  }

  onClickStop(){ //Stop counter
    this.gameGoing = false;
    clearInterval(this.intervall);
    this.baseCount = 0;
    this.countIncrased.emit(this.baseCount);
  }

  numberIncrement(){ //This did not workout the way i planned..
    console.log(this.baseCount);
    this.baseCount++;
    console.log(this.baseCount);
  }
}
