import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesSelectComponent } from './select.component';

describe('SelectComponent', () => {
  let component: NesSelectComponent;
  let fixture: ComponentFixture<NesSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesSelectComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
