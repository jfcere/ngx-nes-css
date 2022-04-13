import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTableResponsiveComponent } from './table-responsive.component';

describe('TableResponsiveComponent', () => {
  let component: NesTableResponsiveComponent;
  let fixture: ComponentFixture<NesTableResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTableResponsiveComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTableResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
