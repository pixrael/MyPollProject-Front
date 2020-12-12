import { Component, OnInit, Input, Output, EventEmitter, ElementRef, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';

export enum CANDIDATE_STATE {
  ADD = 'add',
  EDITABLE = 'editable',
  NOT_EDITABLE = 'notEditable'
}
class ImageSnippet {
  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'app-candidate-element',
  templateUrl: './candidate-element.component.html',
  styleUrls: ['./candidate-element.component.scss']
})
export class CandidateElementComponent implements OnInit, OnChanges {

  @Input() currentState: CANDIDATE_STATE;
  @Input() urlImage: string;
  @Input() description: string;

  @Output() addNewCandidate = new EventEmitter();
  @Output() addNewImageUrl = new EventEmitter<string>();
  @Output() addNewDescription = new EventEmitter<string>();

  private defaultImage = 'https://www.aramon.com/blog/wp-content/uploads/2019/03/foto-dia-00622.jpg';

  candidateCurrentState = CANDIDATE_STATE.ADD;
  candidateUrlImage = this.defaultImage;
  candidateDescription = '';


  constructor(private elementRef: ElementRef) { }

  ngOnChanges(changes: SimpleChanges): void {

    if (this.verifyChange(changes, 'currentState')) {
      this.candidateCurrentState = changes.currentState.currentValue;
    }

    if (this.verifyChange(changes, 'urlImage')) {
      this.candidateUrlImage = changes.urlImage.currentValue;

      if (this.candidateUrlImage === '') {
        this.candidateUrlImage = this.defaultImage;
      }

    }
  }

  ngOnInit(): void { }

  onAddButtonClick(event): void {
    this.addNewCandidate.emit();
  }

  onImageButtonClick(): void {
    const imageUploader = this.getImageUploader();
    imageUploader.click();
  }

  processImageFile(): void {
    const imageUploader = this.getImageUploader() as HTMLInputElement;

    const file: File = imageUploader.files[0];
    const reader = new FileReader();

    const onLoadCallback = (event: any) => {
      const selectedFile = new ImageSnippet(event.target.result, file);
      this.addNewImageUrl.emit(selectedFile.src);
      reader.removeEventListener('load', onLoadCallback);
    };

    reader.addEventListener('load', onLoadCallback);
    reader.readAsDataURL(file);

  }

  onBlur(value: string): void {
    this.addNewDescription.emit(value);
  }

  private verifyChange(changes: SimpleChanges, inputName: string): boolean {

    return (changes[inputName] &&
      changes[inputName].currentValue !== changes[inputName].previousValue);
  }

  private getImageUploader(): HTMLElement {
    return this.elementRef.nativeElement.querySelector('#imageUploader');
  }

}
