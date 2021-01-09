import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  authServiceUrl = `${environment.protocol}${environment.applicationUrl}`;

  constructor(private http: HttpClient) {}

  helloWorld() {
    return this.http.get(this.authServiceUrl);
  }
}
