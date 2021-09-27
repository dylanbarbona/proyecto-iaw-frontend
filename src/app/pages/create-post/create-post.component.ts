import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

import {
  selectErrorFeature,
  selectIsLoadingFeature,
  selectSinglePostFeature } from '../../store/selectors/post.selectors';
import { EmptyPost, Post } from 'src/app/models/post.model';
import { AppState } from 'src/app/store/reducers';
import { CreatePost } from 'src/app/store/actions/post.action';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  selectedCategories!: any[]
  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];
  fileInfos: any[] = [];

  error$: Observable<boolean>
  isLoading$: Observable<boolean>
  post$: Observable<Post>

  constructor(private readonly store: Store<AppState>, private readonly router: Router) {
    this.error$ = this.store.select(selectErrorFeature)
    this.isLoading$ = this.store.select(selectIsLoadingFeature)
    this.post$ = this.store.select(selectSinglePostFeature)
  }

  ngOnInit(): void {
    this.loadCategories()
    this.error$.subscribe(console.log)
    this.isLoading$.subscribe(console.log)
    this.post$.pipe(filter(post => post != EmptyPost.getInstance())).subscribe(post => {
      this.router.navigateByUrl('post/' + post._id)
    })
  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files || null;

    let length = this.selectedFiles?.length || 0

    for(let i=0; i<length; i++){
      let file = this.selectedFiles?.item(i)
      if(file != null){
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadstart = (ev) => this.onloadstart(ev, i, reader)
        reader.onload = (ev) => this.onload(ev, i, reader)
        reader.onloadend = (ev) => this.onloadend(ev, i, reader)
        reader.onprogress = (ev) => this.onprogress(ev, i, reader)
        reader.onabort = (ev) => this.onabort(ev, i, reader)
        reader.onerror = (ev) => this.onerror(ev, i, reader)
      }
    }
  }

  upload(): void {
    if(this.fileInfos.length > 0 && this.selectedCategories.length > 0){
      this.store.dispatch(CreatePost({
        input: {
          categories: this.selectedCategories.map(category => category.id),
          files: this.fileInfos,
          description: ''
        }
      }))
    }
  }

  onloadstart(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    // console.log('onloadstart')
  }
  onload(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    // console.log('onload')
  }
  onloadend(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    this.fileInfos[index] = reader.result
  }
  onprogress(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    this.progressInfos[index] = Math.round(100 * ev.loaded / ev.total)
  }
  onabort(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    // console.log('onabort')
  }
  onerror(ev: ProgressEvent<FileReader>, index: number, reader: FileReader): any {
    // console.log('onerror')
  }

  loadCategories() {
    // @ts-ignore
    $('.js-data-example-ajax').select2({
      tags: true,
      tokenSeparators: [','],
      ajax: this.getCategories()
    })
      .on('select2:select', (event: any) => this.selectCategory(event))
      .on('select2:unselect', (event: any) => this.unselectCategory(event));
  }

  private getCategories() {
    return {
      url: environment.HOST + '/category',
      dataType: 'json',
      processResults: (data: any) => ({ results: this.transformResponse(data) })
    }
  }

  private transformResponse(data: any) {
    return data.map((category: any) => ({ id: category._id, text: category.name }))
  }

  private selectCategory(event: any) {
    if (this.selectedCategories == undefined || this.selectedCategories == null || this.selectedCategories.length == 0)
      this.selectedCategories = [event.params.data]
    else
      this.selectedCategories.push(event.params.data)
  }

  private unselectCategory(event: any) {
    this.selectedCategories = this.selectedCategories.filter(category => category.id != event.params.data.id)
  }
}
