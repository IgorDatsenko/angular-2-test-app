export class Todo {
    completed: boolean;
    title: string;

    constructor(title: string, completed: boolean = false) {
        this.completed = completed;
        this.title = title;
    }
}
