import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NesContainerComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: NesContainerComponent;
  let fixture: ComponentFixture<NesContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NesContainerComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NesContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
