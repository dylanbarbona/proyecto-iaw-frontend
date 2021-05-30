import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { SearchFollowInput } from '../interfaces/follow.interface';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  private readonly GET_FOLLOWERS_URL = '/user/followers'
  private readonly GET_FOLLOWINGS_URL = '/user/followings'
  private readonly FOLLOW_URL = '/user/follow'
  private readonly UNFOLLOW_URL = '/user/follow'

  constructor(private readonly http: HttpClient) { }

  getFollowers({ username }: User, search: SearchFollowInput): Observable<User[]>{
    return this.http.get<User[]>(environment.HOST + this.getFollowers + '/' + username,
    {
      params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
      withCredentials: true
    })
  }

  getFollowings({ username }: User, search: SearchFollowInput): Observable<User[]>{
    return this.http.get<User[]>(environment.HOST + this.getFollowings + '/' + username,
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      }
    )
  }

  follow({ username }: User): Observable<User>{
    return this.http.post<User>(environment.HOST + this.FOLLOW_URL + '/' + username, { }, { withCredentials: true })
  }
}
