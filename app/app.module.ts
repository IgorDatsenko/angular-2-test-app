import { NgModule } from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import {RouterModule} from "@angular/router";

import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./shared/data.service"
import {appRoutes} from "./app.route";

import {AppComponent} from './app.component';

import {TodoFormComponent} from './todos/todo-form/todo-form.component';
import {TodoListComponent} from './todos/todo-list/todo-list-component';
import {TodoItemComponent} from './todos/todo-item/todo-item.component';
import {TodosComponent} from "./todos/todos.component";
import {TodoService} from "./shared/todo.service";

import {NotFoundComponent} from "./not-fond/not-fond.component"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    AppComponent,
    TodoFormComponent,
    TodoListComponent,
    TodoItemComponent,
    TodosComponent,
    NotFoundComponent
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})


export class AppModule {

}