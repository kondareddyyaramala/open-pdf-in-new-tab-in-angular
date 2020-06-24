import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPreviewContainerComponent } from './pdf-preview-container.component';

describe('PdfPreviewContainerComponent', () => {
  let component: PdfPreviewContainerComponent;
  let fixture: ComponentFixture<PdfPreviewContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPreviewContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPreviewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
