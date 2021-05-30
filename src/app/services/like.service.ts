import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SearchLikeInput } from '../interfaces/like.interface';
import { Like } from '../models/like.model';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private readonly BASE_URL = '/post'

  constructor(private readonly http: HttpClient) { }

  like({ post, ...search }: SearchLikeInput){
    return this.http.post<Like[]>(environment.HOST + this.BASE_URL + '/' + post + '/like', search, { withCredentials: true })
  }

  getLikes({ post, ...search }: SearchLikeInput): Observable<Like[]>{
    return this.http.get<Like[]>(
      environment.HOST + this.BASE_URL + '/' + post + '/likes',
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      }
    )
  }
}
