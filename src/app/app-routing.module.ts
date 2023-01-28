import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { InlineComponent } from './inline/inline.component';
import { ManualComponent } from './manual_component/manual.component';
import { ParentComponent } from './parent/parent.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { AuthGuard } from './auth.guard';
import { FgaComponent } from './fga/fga.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"inline", component:InlineComponent},
  {path:"dec&boot", component:ManualComponent},
  {
    path:"directive", component:DirectivesComponent
  },
  {path:"pipes", component:PipesComponent},
  {path:"passdata", component:ParentComponent},{
    path:"get", component:RxjsComponent
  },
  {path:"filter/:path", component:RxjsComponent},
  {path:"forms/:path", component:FormsComponent},
  {path:"guard", canActivate:[AuthGuard], component:FgaComponent},
  { path: 'lazy', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
  { path: 'shared', loadChildren: () => import('./shared/receiving.module').then(m => m.ReceivingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
