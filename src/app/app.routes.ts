import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then(m => m.Home),
    data: { title: 'Gateway - Call Center & Training Institute' }
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about').then(m => m.About),
    data: { title: 'About Gateway' }
  },
  
  {
    path: 'courses',
    loadComponent: () => import('./features/courses/courses').then(m => m.Courses),
    data: { title: 'Our Courses' }
  },
  {
    path: 'admissions',
    loadComponent: () => import('./features/admissions/admissions').then(m => m.Admissions),
    data: { title: 'Admissions & Contact' }
  },
  {
    path: 'call-center-services',
    loadComponent: () => import('./features/call-center/call-center').then(m => m.CallCenter),
    data: { title: 'Call Center Services' }
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];
;
