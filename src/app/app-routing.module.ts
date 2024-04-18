import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './shared/pages/error404/error404.component';

const routes: Routes = [
  {
    path: 'portafolio',
    loadChildren: () => import('./portafolio/portafolio.module').then( m => m.PortafolioModule ),
  },
  {
    path: '404',
    component: Error404Component
  },
  {
    path: '',
    redirectTo: 'portafolio',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
