import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaSchemaData } from '../shared/meta-schema-data';
import { metaTexts } from '../shared/meta-static-texts';
import { ContactComponent } from './contact.component';

const routes: Routes = [{ 
  path: '', 
  component: ContactComponent,
  data: {
    metaTagsData: metaTexts['contact'],
    metaSchemaData: [metaSchemaData.website, metaSchemaData.company, metaSchemaData.shop]
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
