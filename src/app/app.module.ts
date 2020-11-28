import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { WelcomeModule } from './welcome/welcome.module';
import { PollCrudModule } from './poll-crud/poll-crud.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    WelcomeModule,
    PollCrudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
