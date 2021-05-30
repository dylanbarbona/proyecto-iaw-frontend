import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';

import { Auth } from '../interfaces/auth.interface';
import { Register } from '../interfaces/register.interface';
import { User } from '../models/user.model';

import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly LOGIN_URL = '/auth/login'
  private readonly REGISTER_URL = '/auth/register'
  private readonly WHO_AM_I_URL = '/auth/profile'
  private readonly LOGOUT_URL = '/auth/logout'
  private readonly CHECK_URL = '/auth/check'

  constructor(private readonly http: HttpClient) { }

  getCsrfToken(): Observable<{ 'XSRF-TOKEN': string }>{
    return this.http.get<{ 'XSRF-TOKEN': string }>(environment.HOST + '/auth', { withCredentials: true })
  }

  register(register: Register): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>(environment.HOST + this.REGISTER_URL, register, { withCredentials: true })
  }

  login(auth: Auth): Observable<{ access_token: string }>{
    return this.http.post<{ access_token: string }>(environment.HOST + this.LOGIN_URL, auth, { withCredentials: true })
  }

  whoAmI(): Observable<User>{
    return this.http.get<User>(environment.HOST + this.WHO_AM_I_URL, { withCredentials: true })
  }

  check(): Observable<{ error: boolean, access_token: string }>{
    let access_token = this.getToken()
    if(!access_token)
      return this.http.get<{ error: boolean, access_token: string }>(environment.HOST + this.CHECK_URL, { withCredentials: true })
    else
      return of({ access_token, error: false })
  }

  logout(): Observable<{ ok: boolean }>{
    return this.http.get<{ ok: boolean }>(environment.HOST + this.LOGOUT_URL, { withCredentials: true })
  }

  decodeToken(access_token: string): User{
    return jwt_decode(access_token) as User
  }

  saveToken(access_token: string){
    sessionStorage.setItem('access_token', access_token)
  }

  getToken(){
    return sessionStorage.getItem('access_token')
  }
}
