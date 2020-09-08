import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent implements OnInit, OnChanges, DoCheck {
  @Input() count = 0;
  oddCount : number = 0;

  constructor() { }

  ngDoCheck() : void{
    console.log("Is this even called?!");
   if(this.count %2 == 1){
      this.oddCount = this.count;
   }
  }

  ngOnChanges() : void{
    console.log("Fuck onChanges()");
  }



  ngOnInit(): void {
  }

}
