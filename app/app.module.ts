import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppAvenger }  from './app.avenger';
import { AvengersService }  from './app.avengers.service';


@NgModule({
  imports: [ BrowserModule ],
  providers: [ AvengersService ],
  declarations: [ AppComponent, AppAvenger ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
