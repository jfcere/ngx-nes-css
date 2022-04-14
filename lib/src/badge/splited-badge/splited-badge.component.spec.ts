import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesSplitedBadgeComponent } from './splited-badge.component';

describe('SplitedBadgeComponent', () => {
  let component: NesSplitedBadgeComponent;
  let fixture: ComponentFixture<NesSplitedBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesSplitedBadgeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesSplitedBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
