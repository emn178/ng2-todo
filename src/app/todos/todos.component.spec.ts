import { expect } from 'chai';
import { inject, async, TestBed } from '@angular/core/testing';
import { Server, setupComponent } from '../../test/support';
import { TodosRoutes, TodosDeclarations } from './todos.routes';
import { TodosComponent } from './todos.component';
import { TodoService } from './shared';

describe('TodosComponent', () => {
  setupComponent({
    declarations: TodosDeclarations,
    providers: [TodoService],
    routes: TodosRoutes
  });

  describe('#ngInit', () => {
    context('when db has one record', () => {
      context('and done', () => {
        it('should be one delete button and checked', async(inject([ Server ], (server: Server) => {
          TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TodosComponent);
            server.get('app/todos', {data: [{id: 11, name: 'Eat', done: true}]}).then(() => {
              fixture.detectChanges();
              expect(fixture.nativeElement.querySelectorAll('.fa-trash').length).to.eq(1);
              expect(fixture.nativeElement.querySelectorAll('.fa-check').length).to.eq(1);
            });
            fixture.detectChanges();
          });
        })));
      });

      context('and not done', () => {
        it('should be one delete button and checked', async(inject([ Server ], (server: Server) => {
          TestBed.compileComponents().then(() => {
            var fixture = TestBed.createComponent(TodosComponent);
            server.get('app/todos', {data: [{id: 11, name: 'Eat', done: false}]}).then(() => {
              fixture.detectChanges();
              expect(fixture.nativeElement.querySelectorAll('.fa-trash').length).to.eq(1);
              expect(fixture.nativeElement.querySelectorAll('.fa-check').length).to.eq(0);
            });
            fixture.detectChanges();
          });
        })));
      });
    });
  });
});
