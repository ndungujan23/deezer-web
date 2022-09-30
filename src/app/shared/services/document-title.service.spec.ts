import { TestBed } from '@angular/core/testing';

import { DocumentTitleService } from './document-title.service';

describe('DocumentTitleService', () => {
  let service: DocumentTitleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentTitleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
