export interface CandidateModel {
   imageUrl: string;
   description: string;
}

export interface PollModel {
   name: string;
   candidates: CandidateModel[];
}
