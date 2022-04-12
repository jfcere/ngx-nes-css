import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesInputComponent } from './input.component';

describe('InputComponent', () => {
  let component: NesInputComponent;
  let fixture: ComponentFixture<NesInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesInputComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
