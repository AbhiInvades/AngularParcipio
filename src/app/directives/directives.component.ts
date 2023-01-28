import { NgSwitch } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-directives',
  template: '<div *ngIf="showDiv">now you see me </div>',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  public showDiv:boolean;
  constructor() {
    this.showDiv = false;
   }

  ngOnInit(): void {
  }


}
