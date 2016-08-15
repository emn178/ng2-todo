import { expect } from 'chai';
import { inject, async, TestBed } from '@angular/core/testing';
import { DEFAULT_PROVIDERS, Server } from '../../../test/support';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [...DEFAULT_PROVIDERS, TodoService]
    });
  });

  describe('#getAll', () => {
    context('when db has two records', () => {
      it('should be two', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{}, {}]});

        todoService.getAll().then(result => {
          expect(result.length).to.eq(2);
        });
      })));
    });
  });

  describe('#get', () => {
    context('when id found', () => {
      it('should be not undefined', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{id: 1}]});

        todoService.get(1).then(result => { 
          expect(result).not.to.be.undefined;
        });
      })));
    });

    context('when id not found', () => {
      it('should be undefined', async(inject([ Server, TodoService ], (server: Server, todoService: TodoService) => {
        server.get('app/todos', {data: [{id: 1}]});

        todoService.get(2).then(result => { 
          expect(result).to.be.undefined;
        });
      })));
    });
  });
});
