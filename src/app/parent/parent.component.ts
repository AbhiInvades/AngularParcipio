import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title:string;
  p_s:any;
  viewchilddata:string;
  @ViewChild(ChildComponent) childc! : ChildComponent
  constructor() {
    this.title="This line is data passed from parent to child";
    this.viewchilddata="default"
   }

  ngOnInit(): void {
    //this.viewchilddata = this.childc.pv_data
  }

ngAfterViewInit(){
 // this.viewchilddata = this.childc.pv_data
  this.childc.child_says()
}

  p_com(s:string){
    //this.title=s;
    this.p_s=s;
    console.log(s)
  }

}
