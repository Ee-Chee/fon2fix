import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaTexts } from '../shared/meta-static-texts';
import { ContactComponent } from './contact.component';

const routes: Routes = [{ 
  path: '', 
  component: ContactComponent,
  data: metaTexts['contact']
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
