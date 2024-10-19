import { Routes } from '@angular/router';
import { authGuard, loggedInGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then((m) => m.HomePage),
    canActivate: [authGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    canActivate: [loggedInGuard],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
