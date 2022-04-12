import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTextareaFieldComponent } from './textarea-field.component';

describe('TextareaFieldComponent', () => {
  let component: NesTextareaFieldComponent;
  let fixture: ComponentFixture<NesTextareaFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTextareaFieldComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTextareaFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
