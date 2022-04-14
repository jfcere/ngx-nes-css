import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesBadgeColorComponent } from './badge-color.component';

describe('BadgeColorComponent', () => {
  let component: NesBadgeColorComponent;
  let fixture: ComponentFixture<NesBadgeColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesBadgeColorComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesBadgeColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
