import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MycomponentsComponent } from './mycomponents/mycomponents.component';
import { PipesComponent } from './Mycomponents/pipes/pipes.component';
import { LifeCycleComponent } from './Mycomponents/life-cycle/life-cycle.component';
import { LifeCycleChildComponent } from './Mycomponents/life-cycle-child/life-cycle-child.component';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentsComponent,
    PipesComponent,
    LifeCycleComponent,
    LifeCycleChildComponent,
  
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
