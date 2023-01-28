import { Injectable } from '@angular/core';

@Injectable()
export class TransService {
  id:number =0
  constructor() { }

  getId(){
    return this.id=this.id+1
  }
}
