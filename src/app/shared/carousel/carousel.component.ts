import { Component, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import { carouselAnimation } from './animation';
import { CarouselElement } from '../interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [
    carouselAnimation
  ]
})
export class CarouselComponent implements OnInit {
  @Input() elements!: CarouselElement[];

  @ViewChildren('img') images!: QueryList<any>;

  displacement = 0;
  toggleState = true; // true false doesnt matter

  constructor() { }

  ngOnInit(): void {
  }

  forward() { 
    if(this.displacement < this.elements.length - 1) {
      this.displacement += 1;
      this.toggleState = !this.toggleState;

      this.lazyLoadingImg();
    }
  }

  backward() {
    if(this.displacement > 0) {
      this.displacement -= 1;
      this.toggleState = !this.toggleState;

      this.lazyLoadingImg();
    }
  }

  selectSlide(i: number) {
    this.displacement = i - this.displacement;
    this.toggleState = !this.toggleState;

    this.displacement = i; // position reset

    this.lazyLoadingImg();
  }

  lazyLoadingImg() {
    const currentSlideImageElem = this.images.toArray()[this.displacement].nativeElement
    
    if(!currentSlideImageElem.src) {
      currentSlideImageElem.src = currentSlideImageElem.dataset.src; //data-src
    }
  }
}
