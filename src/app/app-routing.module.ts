import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./contact/contact.module').then((m) => m.ContactModule),
  },
  // {
  //   path: 'services',
  //   loadChildren: () =>
  //     import('./services/services.module').then((m) => m.ServicesModule),
  // },
  // { path: 'accessories', loadChildren: () => import('./accessories/accessories.module').then(m => m.AccessoriesModule) },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./not-found/not-found.module').then((m) => m.NotFoundModule),
  },
  {
    path: '**',
    redirectTo: 'not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { 
    scrollPositionRestoration: "enabled", // restore view to top on route change
    anchorScrolling: 'enabled', // enable usage of fragment
    scrollOffset: [0, 80] // header height is 80px. Used together with fragment
  })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
