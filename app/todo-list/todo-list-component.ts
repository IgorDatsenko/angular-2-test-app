
import {Component, OnInit} from "@angular/core";

import {Todo} from '../shared/todo';
import {TodoService} from "../shared/todo.service"

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})

export class TodoListComponent implements OnInit{
    todos: Todo[];

    constructor(private todoSercice: TodoService) {
        // this.todos = this.todoSercice.getTodos();
        this.todos = [];
    }

    ngOnInit() {
        this.todoSercice.getTodos().subscribe(todos => this.todos = todos);
    }

    delete(todo: Todo) {
        this.todoSercice.deleteTodo(todo);
    }

    toggle(todo: Todo) {
        this.todoSercice.toggleTodo(todo);
    }
}
