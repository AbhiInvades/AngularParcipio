import { Injectable } from '@angular/core';

//no providedIn required here
@Injectable()
export class S1appService {
  id:number =0
  constructor() { }

  getId(){
    return this.id = this.id+1
  }
}
