import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todo, TodoService } from '../shared';

@Component({
  selector: 'todo-edit',
  templateUrl: 'todo-edit.component.pug',
  styleUrls:  ['todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnDestroy {
  todo: Todo;
  subscription: any;
  error: any;

  constructor(private route: ActivatedRoute, private todoService: TodoService) {
  }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      if (params['id'] !== undefined) {
        let id = parseInt(params['id']);
        this.todoService.get(id).then(todo => this.todo = todo);
      } else {
        this.todo = new Todo();
      }
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  goBack(todo: Todo) {
    window.history.back();
  }

  save() {
    this.todoService
        .save(this.todo)
        .then(todo => {
          this.todo = todo; // saved todo, w/ id if new
          this.goBack(todo);
        })
        .catch(error => this.error = error);
  }
}
