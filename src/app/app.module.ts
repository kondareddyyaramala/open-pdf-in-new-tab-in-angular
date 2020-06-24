import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PdfPreviewComponent } from './pdf-preview-container/pdf-preview/pdf-preview.component';
import { HttpClientModule } from '@angular/common/http';
import { PdfPreviewContainerComponent } from './pdf-preview-container/pdf-preview-container.component';

@NgModule({
  declarations: [
    AppComponent,
    PdfPreviewComponent,
    PdfPreviewContainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
