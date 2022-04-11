import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesProgressComponent } from './progress.component';

describe('ProgressComponent', () => {
  let component: NesProgressComponent;
  let fixture: ComponentFixture<NesProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesProgressComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
