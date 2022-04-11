import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesRadioOptionComponent } from './radio-option.component';

describe('RadioOptionComponent', () => {
  let component: NesRadioOptionComponent;
  let fixture: ComponentFixture<NesRadioOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesRadioOptionComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesRadioOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
