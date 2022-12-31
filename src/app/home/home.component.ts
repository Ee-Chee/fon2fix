import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { products } from '../shared/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mainTitle!: string;
  mainImage!: string;

  carouselElems = products;

  constructor(private route: ActivatedRoute) { 
    this.route.data.pipe(take(1)).subscribe(data => {
      const routeData = data['metaTagsData'];

      this.mainTitle = routeData['title'],
      this.mainImage = routeData['image']
    })
  }
}
