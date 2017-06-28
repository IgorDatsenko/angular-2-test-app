import  {Component} from '@angular/core'

interface Itodo {
    completed: boolean;
    title: string;
}

const todos: Itodo[] = [
    {
        completed: false,
        title: 'Изучить Javascript'
    },
    {
        completed: true,
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
    todos: Itodo[] = todos;

    toggle(todo: Itodo) {
        todo.completed =  !todo.completed;
    }

    delete( todo: Itodo) {
        let index = todos.indexOf(todo);

        if (index > -1) {
            todos.splice(index, 1);
        }
    }
}
