import { Component, OnInit } from '@angular/core';
import { createOfflineCompileUrlResolver } from '@angular/compiler';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  public gameGoing = false;
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
      count++;
      console.log(this.baseCount);
      this.baseCount = count; //This is uggly AF
    }, 1000);



    //(this.numberIncrement, 1000); //Incrase number by 1 every second
    console.log(this.baseCount);
  }

  onClickStop(){ //Stop counter
    this.gameGoing = false;
    clearInterval(this.intervall);
    this.baseCount = 0;
  }

  numberIncrement(){
    console.log(this.baseCount);
    this.baseCount++;
    console.log(this.baseCount);
  }
}
