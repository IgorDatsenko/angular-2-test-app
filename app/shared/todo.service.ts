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

    constructor(private  http: Http) {};

    getTodos(): Observable <Todo[]> {
        return this.http
            .get(this.apiUrl)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-Type': 'application/json'});
        let options = new RequestOptions({headers});
        const newTodo = new Todo(title);

        return this.http
            .post(this.apiUrl, newTodo, options)
            .map(res => res.json().data)
            .catch(this.handleError);
    }

    deleteTodo(todo: Todo) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      let url = `${this.apiUrl}/${todo.id}`;

      return this.http
          .delete(url, options)
          .catch(this.handleError);
    }

    toggleTodo(todo: Todo) {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers});
      let url = `${this.apiUrl}/${todo.id}`;

      return this.http
          .put(url, todo,options)
          .catch(this.handleError);
    }

    private handleError(e: any) {
        console.log(`Ошибка ${e}`);
        return Promise.reject(e.message || e);
    }
}