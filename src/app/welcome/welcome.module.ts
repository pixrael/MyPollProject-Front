import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ]
})
export class WelcomeModule { }
