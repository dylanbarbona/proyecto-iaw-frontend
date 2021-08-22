import { Component, OnInit } from '@angular/core';
import { on } from '@ngrx/store';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  selectedCategories: any[] = []

  constructor() { }

  ngOnInit(): void {
    this.loadCategories()
  }

  loadCategories(){
    // @ts-ignore
    $('.js-data-example-ajax').select2({
      tags: true,
      tokenSeparators: [','],
      ajax: this.getCategories() })
    .on('select2:select', this.selectCategory)
    .on('select2:unselect', this.unselectCategory);
  }

  private getCategories(){
    return {
      url: 'http://localhost:3000/api/category',
      dataType: 'json',
      processResults: (data: any) => ({ results: this.transformResponse(data) })
    }
  }

  private transformResponse(data: any){
    return data.map((category: any) => ({ id: category._id, text: category.name }))
  }

  private selectCategory(event: any){
    if(this.selectedCategories == undefined || this.selectCategory == null || this.selectCategory.length == 0)
      this.selectedCategories = []
    else
      this.selectedCategories.push(event.params.data)
  }

  private unselectCategory(event: any){
    this.selectedCategories = this.selectedCategories.filter(category => category.id != event.params.data.id)
  }
}
