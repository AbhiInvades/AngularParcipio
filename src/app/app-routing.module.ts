import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InlineComponent } from './inline/inline.component';
import { ManualComponent } from './manual_component/manual.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"inline", component:InlineComponent},
  {path:"dec&boot", component:ManualComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
