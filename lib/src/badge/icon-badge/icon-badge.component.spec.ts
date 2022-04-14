import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesIconBadgeComponent } from './icon-badge.component';

describe('IconBadgeComponent', () => {
  let component: NesIconBadgeComponent;
  let fixture: ComponentFixture<NesIconBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesIconBadgeComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesIconBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
