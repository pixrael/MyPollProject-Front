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
    candidates: new FormArray([])
  });

  constructor(private formBuilder: FormBuilder, private createPollStateService: CreatePollStateService) { }

  ngOnInit(): void {
    const poll = this.createPollStateService.getPoll();

    this.createFormField.get('name').setValue(poll.name);

    const candidates = this.createFormField.get('candidates') as FormArray;

    poll.candidates.forEach(element => {
      candidates.push(new FormGroup({
        imageUrl: new FormControl(element.imageUrl),
        description: new FormControl(element.description),
        state: new FormControl(CANDIDATE_STATE.EDITABLE),
      }));
    });

    candidates.push(new FormGroup({
      state: new FormControl(CANDIDATE_STATE.ADD),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
    }));

  }

  onAddNewCandidate(): void {
    const candidates = this.createFormField.get('candidates') as FormArray;
    candidates.removeAt(candidates.length - 1);

    candidates.push(new FormGroup({
      state: new FormControl(CANDIDATE_STATE.EDITABLE),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
    }));

    candidates.push(new FormGroup({
      state: new FormControl(CANDIDATE_STATE.ADD),
      imageUrl: new FormControl(''),
      description: new FormControl(''),
    }));
  }

  onAddNewImageUrl(imageUrl: string, iCandidate: number): void {
    const candidates = this.createFormField.get('candidates') as FormArray;
    if (candidates.at(iCandidate).get('isAdd')) {
      candidates.removeAt(iCandidate);
      candidates.insert(iCandidate, new FormGroup({
        isAdd: new FormControl(false),
        imageUrl: new FormControl(''),
        description: new FormControl(''),
        state: new FormControl(CANDIDATE_STATE.EDITABLE),
      }));
    }

    candidates.at(iCandidate).get('imageUrl').setValue(imageUrl);
  }

  onAddNewDescription(description: string, iCandidate: number): void {
    const candidates = this.createFormField.get('candidates') as FormArray;
    if (candidates.at(iCandidate).get('isAdd')) {
      candidates.removeAt(iCandidate);
      candidates.insert(iCandidate, new FormGroup({
        isAdd: new FormControl(false),
        imageUrl: new FormControl(''),
        description: new FormControl(''),
        state: new FormControl(CANDIDATE_STATE.EDITABLE),
      }));
    }

    candidates.at(iCandidate).get('description').setValue(description);

  }

  // convenience getters for easy access to form fields
  get form() { return this.createFormField.controls; }
  get candidates() { return this.form.candidates as FormArray; }

}
