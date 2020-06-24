import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SafeUrl } from "@angular/platform-browser";

@Injectable({ providedIn: 'root' })
export class PdfResolver implements Resolve<SafeUrl> {

  constructor(private router: Router) {}

  resolve(
    route: ActivatedRouteSnapshot,
    
  ): Observable<any>|Promise<any>|any {
    route.data     
    return null;
  }
}