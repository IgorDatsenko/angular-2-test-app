import {Routes} from "@angular/router";

import {TodosComponent} from "./todos/todos.component";
import {NotFoundComponent} from "./not-fond/not-fond.component"

export const appRoutes: Routes = [
  {
    path: 'todos',
    component: TodosComponent
  },
  {
    path: '',
    redirectTo: 'todos',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];