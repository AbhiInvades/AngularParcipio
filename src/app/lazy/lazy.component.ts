import { Component, OnInit } from '@angular/core';
import { TransService } from 'src/services/trans.service';
import { S1appService } from 'src/services/s1app.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.css'],
  providers:[TransService]
})
export class LazyComponent implements OnInit {
  ids : number
  idt : number
  constructor(private s1serv:S1appService, private transServ : TransService) { }

  ngOnInit(): void {
    this.ids = this.s1serv.getId()
    this.ids = this.s1serv.getId()
    this.idt = this.transServ.getId()
  }

}
