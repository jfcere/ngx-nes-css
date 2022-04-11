import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTextComponent } from './text.component';

describe('TextComponent', () => {
  let component: NesTextComponent;
  let fixture: ComponentFixture<NesTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTextComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
