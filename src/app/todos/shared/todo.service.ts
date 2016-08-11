import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Todo } from './todo';

const URL = 'app/todos';  // URL to web api

@Injectable()
export class TodoService {
  constructor(private http: Http) { }

  getAll() {
    return this.http.get(URL)
               .toPromise()
               .then(response => response.json().data as Todo[])
               .catch(this.handleError);
  }
  get(id: number) {
    return this.getAll().then(todos => todos.find(task => task.id === id));
  }
  save(task: Todo): Promise<Todo>  {
    if (task.id) {
      return this.put(task);
    }
    return this.post(task);
  }
  delete(task: Todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${URL}/${task.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }
  // Add new Todo
  private post(task: Todo): Promise<Todo> {
    let headers = new Headers({
      'Content-Type': 'application/json'});
    return this.http
               .post(URL, JSON.stringify(task), {headers: headers})
               .toPromise()
               .then(res => res.json().data)
               .catch(this.handleError);
  }
  // Update existing Todo
  private put(task: Todo) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${URL}/${task.id}`;
    return this.http
               .put(url, JSON.stringify(task), {headers: headers})
               .toPromise()
               .then(() => task)
               .catch(this.handleError);
  }

  private handleError(error: any) {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
