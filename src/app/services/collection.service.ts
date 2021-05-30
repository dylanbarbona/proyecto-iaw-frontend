import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

import { SearchCollectionInput, CreateCollectionInput, UpdateCollectionInput } from '../interfaces/collection.interface';
import { Collection } from '../models/collection.model';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  private readonly BASE_URL = '/collection'

  constructor(private readonly http: HttpClient) { }

  getAll(): Observable<Collection[]>{
    return this.http.get<Collection[]>(environment.HOST + this.BASE_URL, { withCredentials: true })
  }

  get({ _id }: SearchCollectionInput): Observable<Collection>{
    return this.http.get<Collection>(environment.HOST + this.BASE_URL + '/' + _id, { withCredentials: true })
  }

  create(input: CreateCollectionInput): Observable<Collection>{
    return this.http.post<Collection>(environment.HOST + this.BASE_URL, input, { withCredentials: true })
  }

  addPost(search: SearchCollectionInput, input: UpdateCollectionInput): Observable<Collection>{
    return this.http.put<Collection>(environment.HOST + this.BASE_URL + '/' + search._id + '/add', input, { withCredentials: true })
  }

  removePost(search: SearchCollectionInput, input: UpdateCollectionInput): Observable<Collection>{
    return this.http.put<Collection>(environment.HOST + this.BASE_URL + '/' + search._id + '/remove', input, { withCredentials: true })
  }

  delete(search: SearchCollectionInput): Observable<Collection>{
    return this.http.delete<Collection>(environment.HOST + this.BASE_URL + '/' + search._id, { withCredentials: true })
  }
}
