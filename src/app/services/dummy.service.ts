import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  authServiceUrl = `http://localhost:9000/auth-service/home`;

  constructor(private http: HttpClient) {}

  helloWorld() {
    return this.http.get(this.authServiceUrl);
  }

  userService() {
    return this.http.get('http://localhost:9000/user-service/home')
  }
}
