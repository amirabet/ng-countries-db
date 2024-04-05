import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
