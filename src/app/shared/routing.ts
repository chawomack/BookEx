import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from '../home/home.component';
import { SearchComponent }  from '../search/search.component';
import { SearchSchoolComponent }  from '../search-school/search-school.component';
import { SearchBookComponent }  from '../search-book/search-book.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '',
        component: SearchComponent,
        children: [
          { path: '', component: SearchSchoolComponent },
          { path: ':id', component: SearchBookComponent}
        ]
      },
    ]
  },
  {
   path: '',
   redirectTo: '/',
   pathMatch: 'full'
 },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
