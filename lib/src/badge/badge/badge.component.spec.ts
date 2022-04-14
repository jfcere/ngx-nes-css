import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesBadgeComponent } from './badge.component';

describe('BadgeComponent', () => {
  let component: NesBadgeComponent;
  let fixture: ComponentFixture<NesBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesBadgeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
