import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaSchemaData } from '../shared/meta-schema-data';
import { metaTexts } from '../shared/meta-static-texts';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';

const routes: Routes = [{ 
  path: '', 
  component: TermsAndConditionsComponent,
  data: {
    metaTagsData: metaTexts['termsConditions'],
    metaSchemaData: [metaSchemaData.website]
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndConditionsRoutingModule { }
