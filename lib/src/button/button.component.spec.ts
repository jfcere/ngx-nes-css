import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: NesButtonComponent;
  let fixture: ComponentFixture<NesButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesButtonComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
