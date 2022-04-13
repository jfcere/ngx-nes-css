import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesListComponent } from './list.component';

describe('ListComponent', () => {
  let component: NesListComponent;
  let fixture: ComponentFixture<NesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
