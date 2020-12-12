import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray } from '@angular/forms';
import { CreatePollStateService } from 'src/app/state/create-poll-state.service';
import { CANDIDATE_STATE } from '../candidate-element/candidate-element.component';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  createFormField: FormGroup = new FormGroup({
    name: new FormControl(''),
    candidates: new FormArray([
      new FormGroup({
        isAdd: new FormControl(true)
      })
    ])
  });

  constructor(private formBuilder: FormBuilder, private createPollStateService: CreatePollStateService) { }

  ngOnInit(): void {
    const poll = this.createPollStateService.getPoll();

    this.createFormField.get('name').setValue(poll.name);

    const candidates = this.createFormField.get('candidates') as FormArray;
    candidates.removeAt(0);

    poll.candidates.forEach(element => {
      candidates.push(new FormGroup({
        isAdd: new FormControl(false),
        imageUrl: new FormControl(element.imageUrl),
        description: new FormControl(element.description),
        state: new FormControl(CANDIDATE_STATE.EDITABLE),
      }));
    });

    candidates.push(new FormGroup({
      isAdd: new FormControl(true),
      state: new FormControl(CANDIDATE_STATE.ADD),
    }));

  }

  // convenience getters for easy access to form fields
  get form() { return this.createFormField.controls; }
  get candidates() { return this.form.candidates as FormArray; }

}
