import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable, SecurityContext } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { SafeUrl, DomSanitizer } from "@angular/platform-browser";
import { PdfService } from './pdf.service';

@Injectable({ providedIn: 'root' })
export class PdfResolver implements Resolve<SafeUrl> {

  constructor(
    private router: Router,
    private sanitizer: DomSanitizer,
    private pdfService: PdfService
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
  ): Observable<any> | Promise<any> | any {
    const { url } = this.router.getCurrentNavigation().extras.state;
    return this.pdfService
      .getPdfFile(url).
      pipe(
        map(resp => this.sanitizer.sanitize(SecurityContext.URL,
        URL.createObjectURL(resp)))
      );
  }
}