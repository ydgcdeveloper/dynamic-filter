import { USER_KEY } from './../../data/data';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrls } from '../../api-urls';
import { REFRESH_TOKEN_KEY, TOKEN_KEY } from '../../data/data';
import { map, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  login(params: any) {
    return this.http.post(ApiUrls.login, params).pipe(map((data: any) => data));
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
    return of([]);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(TOKEN_KEY) ? true : false;
  }

  getAuthorizationToken() {
    return localStorage.getItem(TOKEN_KEY) || undefined;
  }

  setAuthenticatedUser(data: any) {
    if (!data) {
      return;
    }
    const { accessToken, refreshToken, ...user } = data;
    if (accessToken) {
      this.setToken(accessToken);
    }
    if (refreshToken) {
      this.setRefreshToken(refreshToken);
    }
    if (user) {
      this.setUser(JSON.stringify(user));
    }
  }

  setToken(value: string) {
    localStorage.setItem(TOKEN_KEY, value);
  }

  setRefreshToken(value: string) {
    localStorage.setItem(REFRESH_TOKEN_KEY, value);
  }

  setUser(value: string) {
    localStorage.setItem(USER_KEY, value);
  }
}
