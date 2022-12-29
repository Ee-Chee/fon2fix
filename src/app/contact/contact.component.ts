import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  mainTitle!: string;
  mainDescription!: string;

  constructor(private route: ActivatedRoute) {
    this.route.data.pipe(take(1)).subscribe((data) => {
      const routeData = data['metaTagsData'];

      this.mainTitle = routeData['title'];
      this.mainDescription = routeData['description'];
    });
  }
}
