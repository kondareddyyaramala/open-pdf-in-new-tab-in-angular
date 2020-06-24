import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfPreviewContainerComponent } from './pdf-preview-container/pdf-preview-container.component';

const routes: Routes = [
  {
    path: 'pdf-preview',
    component: PdfPreviewContainerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
