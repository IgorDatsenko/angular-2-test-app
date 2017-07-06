import {InMemoryDbService} from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const todos = [
      {
        id: 1,
        completed: false,
        title: 'Изучить Javascript'
      },
      {
        id: 2,
        completed: false,
        title: 'Изучить Angular 2'
      },
      {
        id: 3,
        completed: false,
        title: 'Написать приложение'
      }
    ];

    return {todos};
  }
}
