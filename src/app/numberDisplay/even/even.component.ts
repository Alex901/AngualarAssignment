import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit, OnChanges {
  @Input() count = 0;
  evenCount : number = 0;

  ngOnChanges() : void{
   if(this.count %2 == 0){
      this.evenCount = this.count;
   }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
