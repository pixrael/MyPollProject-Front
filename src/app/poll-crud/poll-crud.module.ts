import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CreatePollComponent } from './create-poll/create-poll.component';


@NgModule({
  declarations: [CreatePollComponent],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class PollCrudModule { }
