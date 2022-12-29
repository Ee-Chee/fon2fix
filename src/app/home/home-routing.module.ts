import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { metaTexts } from '../shared/meta-static-texts';
import { HomeComponent } from './home.component';

const routes: Routes = [{ 
  path: '', 
  component: HomeComponent,
  data: metaTexts['home']
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
