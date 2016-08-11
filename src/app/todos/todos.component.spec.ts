import { addProviders, inject, async, TestComponentBuilder } from '@angular/core/testing';
import { DEFAULT_PROVIDERS, Server } from '../../test/support';
import { TodosComponent } from './todos.component';
import { TodoService } from './shared';

describe('TodosComponent', () => {
  // beforeEachProviders(() => DEFAULT_PROVIDERS.concat([
  //   TestComponentBuilder,
  //   TodosComponent,
  //   TodoService
  // ]));

  beforeEach(() => {
    addProviders(DEFAULT_PROVIDERS.concat([
      TestComponentBuilder,
      TodosComponent,
      TodoService
    ]));
  });

  describe('when db has one record', () => {
    describe('and done', () => {
      it('should be one delete button and checked', async(inject([ Server, TestComponentBuilder ], (server: Server, testComponentBuilder: TestComponentBuilder) => {
        server.get('app/todos', {data: [{id: 11, name: 'Eat', done: true}]});

        return testComponentBuilder.createAsync(TodosComponent)
          .then(fixture => {
            fixture.detectChanges();
            return new Promise((resolve) => {
              setTimeout(() => {
                fixture.detectChanges();
                expect(fixture.nativeElement.querySelectorAll('.fa-trash').length).toEqual(1);
                expect(fixture.nativeElement.querySelectorAll('.fa-check').length).toEqual(1);
                resolve();
              });
            });
          });
      })));
    });

    describe('and not done', () => {
      it('should be one delete button and not checked', async(inject([ Server, TestComponentBuilder ], (server: Server, testComponentBuilder: TestComponentBuilder) => {
        server.get('app/todos', {data: [{id: 11, name: 'Eat', done: false}]});

        return testComponentBuilder.createAsync(TodosComponent)
          .then(fixture => {
            fixture.detectChanges();
            return new Promise((resolve) => {
              setTimeout(() => {
                fixture.detectChanges();
                expect(fixture.nativeElement.querySelectorAll('.fa-trash').length).toEqual(1);
                expect(fixture.nativeElement.querySelectorAll('.fa-check').length).toEqual(0);
                resolve();
              });
            });
          });
      })));
    });
  });
});
