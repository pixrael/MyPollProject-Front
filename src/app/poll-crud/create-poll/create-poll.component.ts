import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-poll',
  templateUrl: './create-poll.component.html',
  styleUrls: ['./create-poll.component.scss']
})
export class CreatePollComponent implements OnInit {
  createFormField: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createFormField = this.formBuilder.group({
      namePoll: [null, [Validators.required]]
    });


  }

  ngOnInit(): void {
  }

}
