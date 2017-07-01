import {Component} from "@angular/core";

import {TodoService} from "../shared/todo.service"
@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoComponent {

    constructor(private todoService: TodoService) {

    }
    newTodoTitle: string = '';
    onSubmit() {
       this.todoService.createTodo(this.newTodoTitle);
       this.newTodoTitle = '';
    }
}