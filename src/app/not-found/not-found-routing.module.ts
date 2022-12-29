import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaTexts } from '../shared/meta-static-texts';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [{ 
  path: '', 
  component: NotFoundComponent ,
  data: {
    metaTagsData: metaTexts['notFound'],
    metaSchemaData: []
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }
