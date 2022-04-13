import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesBalloonComponent } from './balloon.component';

describe('BalloonComponent', () => {
  let component: NesBalloonComponent;
  let fixture: ComponentFixture<NesBalloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesBalloonComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
