import { TestBed } from '@angular/core/testing';

import { NesDialogService } from './dialog.service';

describe('DialogService', () => {
  let service: NesDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NesDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
