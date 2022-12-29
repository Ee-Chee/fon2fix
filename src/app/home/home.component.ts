import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  mainTitle!: string;
  mainImage!: string;

  carouselElems = [
    {
      title: 'a',
      description: '1',
      image: 'assets/images/first.png'
    },
    {
      title: 'b',
      description: '2'
    },
    {
      title: 'c',
      description: '3',
      image: 'assets/images/dummy.png'
    },
    {
      title: 'd',
      description: '4'
    },
    {
      title: 'e',
      description: '5'
    },
    {
      title: 'f',
      description: '6'
    }
  ]

  constructor(private route: ActivatedRoute) { 
    this.route.data.pipe(take(1)).subscribe(data => {
      const routeData = data['metaTagsData'];

      this.mainTitle = routeData['title'],
      this.mainImage = routeData['image']
    })
  }
}
