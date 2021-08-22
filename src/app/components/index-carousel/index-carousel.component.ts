import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-index-carousel',
  templateUrl: './index-carousel.component.html',
  styleUrls: ['./index-carousel.component.scss']
})
export class IndexCarouselComponent implements OnInit {
  images: { url: string }[] = []

  @Input()
  vHeight: string = 'height: 100vh;'

  constructor() { }

  ngOnInit(): void {
    this.images = [
      { url: `https://picsum.photos/seed/${Math.floor(Math.random()*100)}/1376/768` },
      { url: `https://picsum.photos/seed/${Math.floor(Math.random()*100)}/1376/768` },
      { url: `https://picsum.photos/seed/${Math.floor(Math.random()*100)}/1376/768` },
    ]
  }

}
