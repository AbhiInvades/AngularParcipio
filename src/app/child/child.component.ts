import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() p_data : string="";
  @Output() c_data = new EventEmitter<string>();
  pv_data:string;
  constructor() {
    this.pv_data = "viewchild data";
   }

  ngOnInit(): void {
    this.c_com()
  }

  c_com(){
    this.c_data.emit("data passed from child to parent")
  }

  child_says(){
    console.log("hello")
  }
}
