import { Component, OnInit } from '@angular/core';
declare function randoThron():any;

@Component({
  selector: 'app-inline',
  template: "<div>inline works</div><br><div>{{num}}</div>",
  styles: ['div {color : blue;text-align:center;}']
})
export class InlineComponent implements OnInit {
  public num:any;
  constructor() {
    this.num = randoThron();
   }

  ngOnInit(): void {

  }

}
