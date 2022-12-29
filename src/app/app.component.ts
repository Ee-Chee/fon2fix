import { Component, OnInit } from '@angular/core';
import { MetaService } from './shared/app-services/meta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  schema = [];
  
  constructor(private metaService: MetaService) {
    this.metaService.schemaData.subscribe(schema => {
      this.schema = schema;
    })
  }

  ngOnInit(): void {
  }
}
