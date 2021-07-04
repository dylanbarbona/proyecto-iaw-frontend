import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Comment } from '../models/comment.model';

import { SearchCommentInput, CreateCommentInput, UpdateCommentInput } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly BASE_URL = '/post'

  constructor(private readonly http: HttpClient) { }

  getAll(post: string, search: SearchCommentInput): Observable<Comment[]>{
    return this.http.get<Comment[]>(
      environment.HOST + this.BASE_URL + '/' + post + '/comment',
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      },
    )
  }

  get(post: string, search: SearchCommentInput): Observable<Comment>{
    return this.http.get<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + search._id, { withCredentials: true })
  }

  create(post: string, input: CreateCommentInput): Observable<Comment>{
    return this.http.post<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment', input, { withCredentials: true })
  }

  update(post: string, search: SearchCommentInput, input: UpdateCommentInput): Observable<Comment>{
    return this.http.put<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + search._id, input, { withCredentials: true })
  }

  delete(post: string, search: SearchCommentInput){
    return this.http.delete<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + search._id, { withCredentials: true })
  }
}
