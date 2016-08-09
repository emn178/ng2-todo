import { Component, OnInit } from '@angular/core';
import { TodoService } from '../+todos';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.pug',
  styleUrls:  ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  total: number = 0;
  done: number = 0;

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().then(todos => {
      this.total = todos.length;
      this.done = todos.filter(todo => todo.done).length;
    });
  }
}
