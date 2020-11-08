import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class WelcomeModule { }
