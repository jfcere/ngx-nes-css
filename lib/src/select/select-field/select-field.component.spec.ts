import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesSelectFieldComponent } from './select-field.component';

describe('SelectFieldComponent', () => {
  let component: NesSelectFieldComponent;
  let fixture: ComponentFixture<NesSelectFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesSelectFieldComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesSelectFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
