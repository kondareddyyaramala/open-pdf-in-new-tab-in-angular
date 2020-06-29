import { Component, Input } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-preview-container',
  templateUrl: './pdf-preview-container.component.html',
  styleUrls: ['./pdf-preview-container.component.scss']
})
export class PdfPreviewContainerComponent {
  private _url: SafeResourceUrl; 

  constructor(
    private _sanitizer: DomSanitizer) { }


  @Input() 
  set blob(v: Blob){
    this._url = this._sanitizer.bypassSecurityTrustResourceUrl( 
      !!v ? URL.createObjectURL(v) : ''
    );
  }

  get url(){
    return this._url;
  }

}