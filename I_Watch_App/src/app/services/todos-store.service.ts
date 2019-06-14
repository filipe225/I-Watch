import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Todo {
    id?: string;
    title: string;
    isCompleted: boolean;
}

// https://dev.to/avatsaev/simple-state-management-in-angular-with-only-services-and-rxjs-41p8

@Injectable({ providedIn: 'root' })
export class TodosStoreService {

    // - We set the initial state in BehaviorSubject's constructor
    // - Nobody outside the Store should have access to the BehaviorSubject 
    //   because it has the write rights
    // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
    // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
    //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
    private readonly _todos = new BehaviorSubject<Todo[]>([]);

    // Expose the observable$ part of the _todos subject (read only stream)
    readonly todos$ = this._todos.asObservable();


    // we'll compose the todos$ observable with map operator to create a stream of only completed todos
    readonly completedTodos$ = this.todos$.pipe(
        map(todos => this.todos.filter(todo => todo.isCompleted))
    )

    // the getter will return the last value emitted in _todos subject
    get todos(): Todo[] {
        return this._todos.getValue();
    }


    // assigning a value to this.todos will push it onto the observable 
    // and down to all of its subsribers (ex: this.todos = [])
    private set todos(val: Todo[]) {
        this._todos.next(val);
    }

    addTodo(title: string) {
        // we assaign a new copy of todos by adding a new todo to it 
        // with automatically assigned ID ( don't do this at home, use uuid() )
        this.todos = [
            ...this.todos,
            { id: this.todos.length + 1, title, isCompleted: false }
        ];
    }

    removeTodo(id: number) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }

    setCompleted(id: number, isCompleted: boolean) {
        let todo = this.todos.find(todo => todo.id === id);

        if (todo) {
            // we need to make a new copy of todos array, and the todo as well
            // remember, our state must always remain immutable
            // otherwise, on push change detection won't work, and won't update its view
            const index = this.todos.indexOf(todo);
            this.todos[index] = {
                ...todo,
                isCompleted
            }
            this.todos = [...this.todos];
        }
    }

}