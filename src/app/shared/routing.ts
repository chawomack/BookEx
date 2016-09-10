import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
// import { HeroesComponent }     from './heroes.component';
// import { HeroDetailComponent } from './hero-detail.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
   path: '',
   redirectTo: '/home',
   pathMatch: 'full'
 },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
