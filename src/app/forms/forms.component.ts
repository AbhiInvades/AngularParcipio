import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { SharedModule } from '../shared/shared.module';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { shareReplay, tap} from 'rxjs';


class User {
  password : string
  dob:Date
  name :  string
  summary :  string
  primaryLanuage : string[]
  isIndian : boolean
  id:string
}

export enum  pathEnumEx {
  twowaybind,
  default,
  forms,
  create,
  delete,
  caching,
  dotnet
}

interface DotnetUser {

  LastName : string
  FirstMidName : string
  EnrollmentDate : Date
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  twoWayB:string
  path : pathEnumEx.twowaybind
  public pathEnum : any= pathEnumEx
  password : string
  dob:Date
  name :  string
  summary :  string
  primaryLanuage : string[]
  isIndian : boolean
  saveMarathi : boolean
  saveEnglish : boolean
  user : User
  key : string
  data : Observable<any>
  users : User[]
  dotnetUser : DotnetUser
  dotnetUsers : DotnetUser[]

  constructor(private http:HttpClient, private route:ActivatedRoute) {
    this.route.params.subscribe(data => {
      if(data['path'] == "twowaybind"){
        this.path = this.pathEnum.twowaybind
      }else if(data['path'] == "forms") {
        this.path = this.pathEnum.forms
      }else if(data['path'] == 'delete') {
        this.path = this.pathEnum.delete
      }else if(data['path'] == 'caching') {
        this.path = this.pathEnum.caching
        this.data = this.http.get<User[]>("http://localhost:3000/users").pipe(tap(data => {
          this.users = data
          console.log(this.users)
        }), shareReplay())
      }else if(data['path'] == 'dotnet') {

        this.http.get<DotnetUser[]>('https://localhost:44397/user/details').subscribe(data => {
          console.log(data)
          this.dotnetUsers = data
          this.path = this.pathEnum.dotnet
        })
      }
    })
   }

  ngOnInit(): void {
    this.data?.subscribe()
    this.data?.subscribe()
  }

  onSubmit(form : NgForm){
    console.log(form.value)
    this.user = new User()
    this.user.dob= form.value['dob']
    this.user.isIndian = form.value['isIndian']
    this.user.name = form.value['name']
    this.user.summary = form.value['summary']
    if(this.saveMarathi) this.user.primaryLanuage.push("Marathi")
    if(this.saveEnglish) this.user.primaryLanuage.push("English")
    this.user.password = form.value.password
    console.log(this.user)
    this.http.post<User>('http://localhost:3000/users', this.user).subscribe(result => console.log(result))
  }

  delete() {
    console.log('http://localhost:3000/users/'+this.key)
    this.http.delete<User>('http://localhost:3000/users/'+this.key).subscribe(result => console.log("deleted\n"+result))
  }

  submit(event:NgForm) {
    console.log(event.value)
    this.http.post<DotnetUser>("https://localhost:44397/user/create", event.value).subscribe()
  }

}
