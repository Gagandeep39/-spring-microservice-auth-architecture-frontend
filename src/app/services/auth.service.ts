import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { User } from '../models/user.model';
import { EventService } from './event.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  authServiceUrl = `${environment.protocol}${environment.applicationUrl}/${environment.authService}`;

  constructor(
    private http: HttpClient,
    private eventServie: EventService,
    private router: Router
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

  fetchFromSessionStorage(): User {
    return JSON.parse(sessionStorage.getItem('user'));
  }

  logout(): void {
    sessionStorage.clear();
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    const token = this.fetchFromSessionStorage()?.token;
    // return !this.jwtHelper.isTokenExpired(token);
    return null;
  }

  getRole() {
    return this.fetchFromSessionStorage()?.role;
  }
}
