import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SearchCommentInput, CreateCommentInput, UpdateCommentInput } from '../interfaces/comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private readonly BASE_URL = '/post'

  constructor(private readonly http: HttpClient) { }

  getAll({post, ...search}: SearchCommentInput): Observable<Comment[]>{
    return this.http.get<Comment[]>(
      this.BASE_URL + '/' + post + '/comment',
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      },
    )
  }

  get({ post, _id }: SearchCommentInput): Observable<Comment>{
    return this.http.get<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + _id, { withCredentials: true })
  }

  create({ post, ...input}: CreateCommentInput): Observable<Comment>{
    return this.http.post<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment', input, { withCredentials: true })
  }

  update({ post, _id }: SearchCommentInput, input: UpdateCommentInput): Observable<Comment>{
    return this.http.put<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + _id, input, { withCredentials: true })
  }

  delete({ post, _id }: SearchCommentInput){
    return this.http.delete<Comment>(environment.HOST + this.BASE_URL + '/' + post + '/comment/' + _id, { withCredentials: true })
  }
}
