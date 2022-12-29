import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaSchemaData } from '../shared/meta-schema-data';
import { metaTexts } from '../shared/meta-static-texts';
import { HomeComponent } from './home.component';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent,
  data: {
    metaTagsData: metaTexts['home'],
    metaSchemaData: [metaSchemaData.website, metaSchemaData.company, metaSchemaData.shop, metaSchemaData.services]
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
