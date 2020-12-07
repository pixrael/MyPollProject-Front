import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidateElementComponent } from './candidate-element.component';

describe('CandidateElementComponent', () => {
  let component: CandidateElementComponent;
  let fixture: ComponentFixture<CandidateElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidateElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidateElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
