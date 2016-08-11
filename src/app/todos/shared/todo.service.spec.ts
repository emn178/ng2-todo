import { addProviders, inject, async } from '@angular/core/testing';
import { DEFAULT_PROVIDERS, Server } from '../../../test/support';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    addProviders(DEFAULT_PROVIDERS.concat([
      TodoService
    ]));
  });

  describe('#getAll', () => {
    describe('when db has two records', () => {
      it('should be two', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{}, {}]});

        todoService.getAll().then(result => {
          expect(result.length).toEqual(2);
        });
      })));
    });
  });

  describe('#get', () => {
    describe('when id found', () => {
      it('should be not undefined', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{id: 1}]});

        todoService.get(1).then(result => { 
          expect(result).not.toBeUndefined()
        });
      })));
    });

    describe('when id not found', () => {
      it('should be undefined', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{id: 1}]});

        todoService.get(2).then(result => { 
          expect(result).toBeUndefined();
        });
      })));
    });
  });
});
