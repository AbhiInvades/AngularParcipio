import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { Observable, tap } from 'rxjs';

interface User {
  password : string,
  dob:Date,
  name :  string,
  summary :  string,
  primaryLanuage : string,
  isIndian : boolean
}


@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  users:User[]
  page:number
  itemsToDisplay:number = 5;
  showFilter:boolean
  filterVal:string
  data : Observable<any>
  constructor(private http : HttpClient, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.data = this.http.get<User[]>("http://localhost:3000/users").pipe(tap(console.log))
    this.data.subscribe(result => {
      this.users = result.sort((x:User,y:User) => {
        return x.name.localeCompare(y.name)
      });
    })
    this.data.subscribe()
    this.route.params.subscribe(data => {
      if(data['path'] ==  "filter") {
        this.showFilter = true
      }
    })
  }

  pageChanged(event:any) {
    this.page = event;
  }
  applyFilter(event:any){
    console.log(this.filterVal)
    this.users = this.users.filter(data => data.name.startsWith(event.target.value))
  }
  filterReset(){
    this.http.get<User[]>("http://localhost:3000/users").subscribe(data => {
      console.log(data)
      this.users = data.sort((x:User,y:User) => {
        return x.name.localeCompare(y.name)
      });
    })
  }
}
