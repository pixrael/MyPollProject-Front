import { Component, OnInit } from '@angular/core';

export enum CANDIDATE_STATE {
  ADD = 'add',
  EMPTY = 'empty',
  EDITABLE = 'editable',
  NOT_EDITABLE = 'notEditable'
}

@Component({
  selector: 'app-candidate-element',
  templateUrl: './candidate-element.component.html',
  styleUrls: ['./candidate-element.component.scss']
})
export class CandidateElementComponent implements OnInit {

  currentState = CANDIDATE_STATE.EMPTY;

  constructor() { }

  ngOnInit(): void { }

  onAddButtonClick(event): void {
    console.log('on add button click');
  }

}
