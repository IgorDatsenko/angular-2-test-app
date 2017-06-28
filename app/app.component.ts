import  {Component} from '@angular/core'

class Todo {
    completed: boolean;
    title: string;

    constructor(title: string, completed: boolean = false) {
        this.completed = completed;
        this.title = title;
    }
}

const todos: Todo[] = [
    {
        completed: false,
        title: 'Изучить Javascript'
    },
    {
        completed: false,
        title: 'Изучить Angular 2'
    },
    {
        completed: false,
        title: 'Написать приложение'
    }
];

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Angular 2Do';
    todos: Todo[] = todos;
    newTodoTitle: string = '';

    toggle(todo: Todo) {
        todo.completed =  !todo.completed;
    }

    delete( todo: Todo) {
        let index = todos.indexOf(todo);

        if (index > -1) {
            todos.splice(index, 1);
        }
    }

    create() {
        let todo = new Todo(this.newTodoTitle);

        todos.push(todo);

        this.newTodoTitle = "";
    }
}
