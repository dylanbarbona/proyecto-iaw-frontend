import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { SearchCategoryInput, CreateCategoryInput } from '../interfaces/category.interface';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private readonly URL_CATEGORY = '/category'

  constructor(private readonly http: HttpClient) { }

  search(search: SearchCategoryInput): Observable<Category[]>{
    return this.http.get<Category[]>(
      environment.HOST + this.URL_CATEGORY,
      {
        params: Object.entries(search).reduce((params, [key, value]) => params.set(key, value), new HttpParams()),
        withCredentials: true
      })
  }

  get({ _id }: SearchCategoryInput): Observable<Category>{
    return this.http.get<Category>(environment.HOST + this.URL_CATEGORY + '/' + _id, { withCredentials: true })
  }

  create(input: CreateCategoryInput): Observable<Category>{
    return this.http.post<Category>(environment.HOST + this.URL_CATEGORY, input, { withCredentials: true })
  }

  update({ _id }: SearchCategoryInput, input: CreateCategoryInput): Observable<Category>{
    return this.http.put<Category>(environment.HOST + this.URL_CATEGORY + '/' + _id, input, { withCredentials: true })
  }

  delete({ _id }: SearchCategoryInput): Observable<Category>{
    return this.http.delete<Category>(environment.HOST + this.URL_CATEGORY + '/' + _id, { withCredentials: true })
  }
}
