import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  @Input()
  sidebar: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
