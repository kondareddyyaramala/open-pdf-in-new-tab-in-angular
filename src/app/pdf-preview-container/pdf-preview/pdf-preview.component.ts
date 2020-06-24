import { Component, Input, IterableChanges, SimpleChanges, Sanitizer, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeUrl, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-pdf-preview',
  templateUrl: './pdf-preview.component.html',
  styleUrls: ['./pdf-preview.component.scss']
})
export class PdfPreviewComponent {
  private _url: SafeResourceUrl; 

  constructor(private _sanitizer: DomSanitizer){}

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
