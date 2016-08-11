import { Routes, RouterModule } from '@angular/router';
import { DashboardRoutes, DashboardDeclarations } from './dashboard';
import { TodosRoutes, TodosDeclarations } from './todos';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  ...DashboardRoutes,
  ...TodosRoutes
];

export const routing = RouterModule.forRoot(routes);
export const declarations = [
  ...DashboardDeclarations,
  ...TodosDeclarations
];
