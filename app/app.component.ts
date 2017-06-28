import  {Component} from '@angular/core'

const todos: any[] = [
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
    todos = todos;

    toggle(todo: any) {
        todo.completed =  !todo.completed;
    }

    delete( todo: any) {
        let index = todos.indexOf(todo);

        if (index > -1) {
            todos.splice(index, 1);
        }
    }
}
