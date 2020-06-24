import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pdf-preview-container',
  templateUrl: './pdf-preview-container.component.html',
  styleUrls: ['./pdf-preview-container.component.scss']
})
export class PdfPreviewContainerComponent implements OnInit{
  private pdfBlob$: Observable<Blob>;

  constructor(private appService: AppService) { }

  ngOnInit(){
    this.pdfBlob$ = this.appService.getPdfFile();
  }

}
