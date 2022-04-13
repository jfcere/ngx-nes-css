import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesAvatarComponent } from './avatar.component';

describe('AvatarComponent', () => {
  let component: NesAvatarComponent;
  let fixture: ComponentFixture<NesAvatarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesAvatarComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
