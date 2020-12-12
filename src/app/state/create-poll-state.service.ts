import { Injectable } from '@angular/core';
import { PollModel } from '../model/poll.model';

@Injectable({
  providedIn: 'root'
})
export class CreatePollStateService {

  private poll: PollModel = {
    name: '',
    candidates: []
  };

  constructor() { }

  setPoll(poll: PollModel): void {
    this.poll = poll;
  }

  getPoll(): PollModel {
    return this.poll;
  }

}
