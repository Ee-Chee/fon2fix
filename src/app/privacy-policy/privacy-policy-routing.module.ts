import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaTexts } from '../shared/meta-static-texts';
import { PrivacyPolicyComponent } from './privacy-policy.component';

const routes: Routes = [{ 
  path: '', 
  component: PrivacyPolicyComponent,
  data: metaTexts['privatePolicy']
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivacyPolicyRoutingModule { }
