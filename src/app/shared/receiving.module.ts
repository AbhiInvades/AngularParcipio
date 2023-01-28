import { NgModule } from '@angular/core';

import { ReceivingRoutingModule } from './receiving-routing.module';
import { ReceivingComponent } from './receiving.component';
import { SharedModule } from './shared.module';


@NgModule({
  declarations: [
    ReceivingComponent
  ],
  imports: [
    SharedModule, //comment and save here to see how the sharedmodule is being used.
    ReceivingRoutingModule
  ]
})
export class ReceivingModule { }
