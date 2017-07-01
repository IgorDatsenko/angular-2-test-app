import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component'
import {TodoComponent} from './todo-form/todo-form.component';
import {TodoListComponent} from './todo-list/todo-list-component';
import {TodoItemComponent} from './todo-item/todo-item.component';
import {TodoService} from "./shared/todo.service";


@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent,
        TodoComponent,
        TodoListComponent,
        TodoItemComponent
    ],
    providers: [TodoService],
    bootstrap: [AppComponent]
})


export class AppModule {

}