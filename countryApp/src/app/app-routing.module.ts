import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePageComponent
  // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: 'countries',
    // Lazy Loading Module: it's a Promise
    loadChildren: () => import('./countries/countries.module')
      .then( module => module.CountriesModule )
  },
  {
    path: '**',
    redirectTo: 'countries'
  }
];

/*
*
* RouterModule.forRoot(routes) => router principal
* RouterModule.forChild(routes) => routers secundarios
*
*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
