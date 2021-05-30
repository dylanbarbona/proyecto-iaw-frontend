import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UpdateUserInput, SearchUserInput } from '../interfaces/user.interface';
import { User } from '../models/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly USER_URL = '/user'

  constructor(private readonly http: HttpClient) { }

  get(username: string): Observable<User>{
    return this.http.get<User>(environment.HOST + this.USER_URL + '/' + username, { withCredentials: true })
  }

  search(search: SearchUserInput): Observable<User[]>{
    return this.http.get<User[]>(environment.HOST + this.USER_URL,
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      }
    )
  }

  update(input: UpdateUserInput): Observable<User>{
    return this.http.put<User>(environment.HOST + this.USER_URL, input, { withCredentials: true })
  }

  delete(): Observable<User>{
    return this.http.delete<User>(environment.HOST + this.USER_URL, { withCredentials: true })
  }
}
