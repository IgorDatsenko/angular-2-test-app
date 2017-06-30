import  {Component} from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Angular 2Do';

    // toggle(todo: Todo) {
    //     todo.completed =  !todo.completed;
    // }
    //
    // delete( todo: Todo) {
    //     let index = todos.indexOf(todo);
    //
    //     if (index > -1) {
    //         todos.splice(index, 1);
    //     }
    // }
}
