import { Component, OnInit } from '@angular/core';
import { S1appService } from 'src/services/s1app.service';
import { TransService } from 'src/services/trans.service';

@Component({
  selector: 'app-fga',
  templateUrl: './fga.component.html',
  styleUrls: ['./fga.component.css'],
  providers:[TransService]
})
export class FgaComponent implements OnInit {
  //s1 is singleton DI, while trans is not.
  ids:number
  idt : number
  constructor(private s1serv:S1appService, private transServ : TransService) { }

  ngOnInit(): void {
    this.ids = this.s1serv.getId()
    this.idt = this.transServ.getId()
  }

}
