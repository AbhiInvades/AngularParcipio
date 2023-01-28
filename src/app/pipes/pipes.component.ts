import { Component, OnInit } from '@angular/core';
import { CpipePipe } from './cpipe.pipe';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
today : number
jsonval = {
  "sdfsdf":"sdfdsf",
  "moo" : [
    "one", "two","foo", "sdfdsf", "sdfdsf","sdfdsf","sdfdsf"
  ], "sdfasdf":"sdfsdf"
}
  constructor() {
    this.today = Date.now()
   }

  ngOnInit(): void {
  }

}
