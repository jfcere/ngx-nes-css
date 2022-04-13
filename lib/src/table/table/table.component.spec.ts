import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesTableComponent } from './table.component';

describe('TableComponent', () => {
  let component: NesTableComponent;
  let fixture: ComponentFixture<NesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesTableComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
