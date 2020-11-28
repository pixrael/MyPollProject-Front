import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PollCrudModule { }
