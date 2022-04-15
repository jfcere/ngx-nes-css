import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesDialogComponent } from './dialog.component';

describe('DialogComponent', () => {
  let component: NesDialogComponent;
  let fixture: ComponentFixture<NesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesDialogComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
