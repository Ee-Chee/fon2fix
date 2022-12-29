import {
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { carouselAnimation } from './animation';
import { CarouselElement } from '../interfaces';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [carouselAnimation],
})
export class CarouselComponent implements OnInit {
  @Input() elements!: CarouselElement[];

  @ViewChildren('img') images!: QueryList<ElementRef>;

  displacement = 0;
  toggleState = true; // true false doesnt matter

  constructor() {}

  ngOnInit(): void {}

  forward() {
    // deprecated
    if (this.displacement < this.elements.length - 1) {
      // alternative this.displacement += 1;

      const a = this.displacement;
      this.displacement = 1;
      this.toggleState = !this.toggleState;
      this.displacement = a + 1; 
      // without this line, animation stops working after first forward()
      // this is because translateX is relative to its initial position 0% (NOT addition). If the displacement remains unchanged, it will not move.
      this.lazyLoadingImg();
    }
  }

  backward() {
    // deprecated
    if (this.displacement > 0) {
      this.displacement -= 1;
      this.toggleState = !this.toggleState;

      this.lazyLoadingImg();
    }
  }

  selectSlide(i: number) {
    // if (this.displacement < this.elements.length - 1 && this.displacement > 0) {
      // this.displacement = i - this.displacement; // difference is unnecessary

      this.displacement = i;
      // position updated and required for setting new styles too
      // never use the difference value between i(new position) and displacemnt(previous position). See forward()

      this.toggleState = !this.toggleState;
  
      this.lazyLoadingImg();
    // }
  }

  lazyLoadingImg() {
    const currentSlideImageElem =
      this.images.toArray()[this.displacement].nativeElement;

    if (!currentSlideImageElem.src) {
      currentSlideImageElem.src = currentSlideImageElem.dataset.src; //data-src
    }
  }
}
