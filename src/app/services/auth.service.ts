import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { EventService } from './event.service';
import { JwtHelperService } from './jwt-helper.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authServiceUrl = `${environment.protocol}${environment.applicationUrl}`;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private eventServie: EventService
  ) {}

  login(formData) {
    return this.http.post(`${this.authServiceUrl}/auth/login`, formData).pipe(
      tap((user: User) => {
        this.saveToSessionStorage(user);
        this.eventServie.loggedInUser.next(user);
      })
    );
  }

  saveToSessionStorage(user: User) {
    sessionStorage.setItem('user', JSON.stringify(user));
  }
}
