import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-panel',
  templateUrl: './photo-panel.component.html',
  styleUrls: ['./photo-panel.component.scss']
})
export class PhotoPanelComponent implements OnInit {
  images: string[] = []

  constructor() { }

  ngOnInit(): void {
    for(let i=0; i<25; i++)
      this.images.push(`https://picsum.photos/id/${Math.floor(Math.random()*100)}/175/${(Math.floor(Math.random()*200)%200)+200}`)
  }
}
