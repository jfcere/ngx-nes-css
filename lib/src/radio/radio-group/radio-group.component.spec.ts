import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesRadioGroupComponent } from './radio-group.component';

describe('RadioGroupComponent', () => {
  let component: NesRadioGroupComponent;
  let fixture: ComponentFixture<NesRadioGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesRadioGroupComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesRadioGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
