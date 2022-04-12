import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesCheckboxComponent } from './checkbox.component';

describe('CheckboxComponent', () => {
  let component: NesCheckboxComponent;
  let fixture: ComponentFixture<NesCheckboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesCheckboxComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
