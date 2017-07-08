import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/observable/throw'

import  {Todo} from "./todo";

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[];

    constructor(private  http: Http) {};

    getTodos(): Observable <Todo[]> {
        return this.http
            .get(this.apiUrl)
            .map(res => res.json().data)
            .map(todos => this.todos = todos)
            .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        const newTodo = new Todo(title);

        this.http
            .post(this.apiUrl, newTodo, options)
            .map(res => res.json().data)
            .map(todo => this.todos.push(todo))
            .catch(this.handleError)
            .subscribe();

    }

    deleteTodo(todo: Todo) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      let url = `${this.apiUrl}/${todo.id}`;

      this.http
          .delete(url, options)
          .map(res => {
            let index = this.todos.indexOf(todo);

            if (index > -1) {
              this.todos.splice(index, 1);
            }
          })
          .catch(this.handleError)
          .subscribe();
    }

    toggleTodo(todo: Todo) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      let url = `${this.apiUrl}/${todo.id}`;

      this.http
          .put(url, todo,options)
          .map(res => {
            todo.completed = !todo.completed;
          })
          .catch(this.handleError)
          .subscribe();

    }

    private handleError(e: any) {
        console.log(`Ошибка ${e}`);
        return Promise.reject(e.message || e);
    }
}