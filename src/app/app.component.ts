import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TodoService } from './todos';

@Component({
  selector: 'app',
  templateUrl: 'app.component.pug',
  styleUrls:  ['app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    TodoService
  ]
})
export class AppComponent {
}
