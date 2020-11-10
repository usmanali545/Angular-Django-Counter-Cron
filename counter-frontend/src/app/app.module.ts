import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReduceCounterComponent } from './components/reduce-counter/reduce-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ReduceCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
