import {Component, Output, EventEmitter} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'todo-form',
    templateUrl: 'todo-form.component.html',
    styleUrls: ['todo-form.component.css']
})

export class TodoComponent {

    @Output() create = new EventEmitter();

    newTodoTitle: string = '';
    onSubmit() {
       this.create.emit(this.newTodoTitle);
        this.newTodoTitle = "";
    }
}