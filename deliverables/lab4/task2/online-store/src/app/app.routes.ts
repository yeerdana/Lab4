import { Routes } from '@angular/router';
import { Catalog } from './pages/catalog/catalog';
import { About } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: Catalog },
  { path: 'about', component: About },
  { path: '**', redirectTo: '' }
];
