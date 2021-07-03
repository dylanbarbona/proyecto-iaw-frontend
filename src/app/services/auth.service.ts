import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { Auth } from '../interfaces/auth.interface';
import { Register } from '../interfaces/register.interface';
import { User } from '../models/user.model';

import jwt_decode from 'jwt-decode';

interface AuthResponse {
  ok: boolean,
  user?: User
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly GET_CSRF_TOKEN_URL = '/auth'
  private readonly LOGIN_URL = '/auth/login'
  private readonly REGISTER_URL = '/auth/register'
  private readonly WHO_AM_I_URL = '/auth/profile'
  private readonly LOGOUT_URL = '/auth/logout'
  private readonly CHECK_URL = '/auth/check'

  constructor(private readonly http: HttpClient) { }

  getCsrfToken(): Observable<AuthResponse>{
    return this.http.get<AuthResponse>(environment.HOST + this.GET_CSRF_TOKEN_URL, { withCredentials: true })
  }

  register(register: Register): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(environment.HOST + this.REGISTER_URL, register, { withCredentials: true })
  }

  login(auth: Auth): Observable<AuthResponse>{
    return this.http.post<AuthResponse>(environment.HOST + this.LOGIN_URL, auth, { withCredentials: true })
  }

  whoAmI(): Observable<User>{
    return this.http.get<User>(environment.HOST + this.WHO_AM_I_URL, { withCredentials: true })
  }

  check(): Observable<AuthResponse>{
    return this.http.get<AuthResponse>(environment.HOST + this.CHECK_URL, { withCredentials: true })
  }

  logout(): Observable<AuthResponse>{
    return this.http.get<AuthResponse>(environment.HOST + this.LOGOUT_URL, { withCredentials: true })
  }
}
