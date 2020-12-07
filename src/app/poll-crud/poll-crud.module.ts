import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../material/material.module';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CandidateElementComponent } from './candidate-element/candidate-element.component';


@NgModule({
  declarations: [CreatePollComponent, CandidateElementComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class PollCrudModule { }
