import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumedCvComponent } from './resumed-cv.component';

describe('ResumedCvComponent', () => {
  let component: ResumedCvComponent;
  let fixture: ComponentFixture<ResumedCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumedCvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumedCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
