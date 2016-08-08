import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { Router } from '@angular/router';
import { ConfirmDirective } from '../shared';
import { Todo, TodoService } from './shared';

@Component({
  selector: 'todos',
  templateUrl: './todos.component.html',
  styleUrls:  ['./todos.component.css'],
  directives: [ROUTER_DIRECTIVES, ConfirmDirective]
})
export class TodosComponent implements OnInit {
  todos: Todo[];
  error: any;

  constructor(private router: Router, private taskService: TodoService) {
  }

  ngOnInit() {
    this.taskService.getAll().then(todos => this.todos = todos);
  }

  destroy(task: Todo) {
    this.taskService
        .delete(task)
        .then(res => {
          this.todos = this.todos.filter(t => t !== task);
        })
        .catch(error => this.error = error);
  }
}
