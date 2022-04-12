import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTextareaComponent } from './textarea.component';

describe('TextareaComponent', () => {
  let component: NesTextareaComponent;
  let fixture: ComponentFixture<NesTextareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTextareaComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
