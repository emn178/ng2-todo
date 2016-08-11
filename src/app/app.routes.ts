import { provideRouter, RouterConfig }  from '@angular/router';
import { DashboardRoutes } from './dashboard';
import { TodosRoutes } from './todos';

const routes: RouterConfig = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...TodosRoutes
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
