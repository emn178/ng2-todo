import { RouterConfig }  from '@angular/router';
import { TodosComponent } from './todos.component';
import { TodoEditComponent } from './todo-edit';

export const TodosRoutes: RouterConfig = [
  {
    path: 'todos',
    component: TodosComponent
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
