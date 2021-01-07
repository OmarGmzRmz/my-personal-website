import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorjectDetailComponent } from './porject-detail.component';

describe('PorjectDetailComponent', () => {
  let component: PorjectDetailComponent;
  let fixture: ComponentFixture<PorjectDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorjectDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PorjectDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
