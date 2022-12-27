import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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


  constructor() { }

  ngOnInit(): void {
  }

}
