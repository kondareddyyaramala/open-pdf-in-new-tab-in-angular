import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private http: HttpClient) { }

  getPdfFile(endpoint): Observable<Blob> {
    return this.http.get(endpoint, {
      responseType: 'blob'
    })
  }
}