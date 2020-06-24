import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getPdfFile(): Observable<Blob> {
    return this.http.get('../../assets/dummy.pdf', {
      responseType: 'blob'
    })
  }
}
