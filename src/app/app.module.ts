import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { InlineComponent } from './inline/inline.component';
import { ManualComponent } from './manual_component/manual.component';
import { SharedModule } from './shared/shared.module';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import { CpipePipe } from './pipes/cpipe.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsComponent } from './forms/forms.component';
import { FormsModule } from '@angular/forms';
import { FgaComponent } from './fga/fga.component';
import { S1appService } from 'src/services/s1app.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    InlineComponent,
    DirectivesComponent,
    PipesComponent,
    CpipePipe,
    ParentComponent,
    ChildComponent,
    RxjsComponent,
    FormsComponent,
    FgaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [S1appService],
  bootstrap: [AppComponent]//[ManualComponent] //to bootstrap manualcomponent
})
export class AppModule { }
