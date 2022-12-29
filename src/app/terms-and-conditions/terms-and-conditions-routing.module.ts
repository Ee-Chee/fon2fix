import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaTexts } from '../shared/meta-static-texts';
import { TermsAndConditionsComponent } from './terms-and-conditions.component';

const routes: Routes = [{ 
  path: '', 
  component: TermsAndConditionsComponent,
  data: metaTexts['termsConditions']
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TermsAndConditionsRoutingModule { }
