import { Routes }  from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoEditComponent } from './todo-edit';

export const TodosRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent,
  },
  {
    path: 'todos/:id/edit',
    component: TodoEditComponent
  },
  {
    path: 'todos/new',
    component: TodoEditComponent
  },
];

export const TodosDeclarations = [TodosComponent, TodoEditComponent];
