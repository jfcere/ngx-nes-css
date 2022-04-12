import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesInputFieldComponent } from './input-field.component';

describe('InputFieldComponent', () => {
  let component: NesInputFieldComponent;
  let fixture: ComponentFixture<NesInputFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesInputFieldComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesInputFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
