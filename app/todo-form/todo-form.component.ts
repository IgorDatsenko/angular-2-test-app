import {Component} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoComponent {

    newTodoTitle: string = '';
    create() {
        // let todo = new Todo(this.newTodoTitle);
        //
        // todos.push(todo);
        //
        // this.newTodoTitle = "";
    }
}