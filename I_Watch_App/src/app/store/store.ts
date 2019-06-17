import { BehaviorSubject, Observable } from 'rxjs';

// https://codedam.com/angular-state-management/
export class Store<T> {

    private state$: BehaviorSubject<T> = new BehaviorSubject(undefined);

    getAll= (): T => this.state$.getValue();

    getAll$ = (): Observable<T> => this.state$.asObservable();

    store = (nextState: T) => (this.state$.next(nextState));

}
