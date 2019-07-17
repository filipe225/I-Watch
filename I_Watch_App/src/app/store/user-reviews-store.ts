import { BehaviorSubject,Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { Review } from '../_models/Review';
import { UserMainServiceService } from '../services/user-main-service.service';
import { UserLocalStorageService } from '../services/user-local-storage.service';


@Injectable({
    providedIn: 'root'
  })
export class UserReviewsStore {

    // IS INTERNET ON?
    private readonly _has_internet = new BehaviorSubject<boolean>(false);
    readonly has_internet$ = this._has_internet.asObservable();

    get hasInternet() {
        return this._has_internet.getValue();
    }

    set hasInternet(val: boolean) {
        this._has_internet.next(val);
    }

    // USER DATA
    private readonly _user_data = new BehaviorSubject<User>(undefined);
    readonly user_data$ = this._user_data.asObservable();

    // USER REVIEWS
    private readonly _user_reviews = new BehaviorSubject<Review[]>([]);
    readonly user_reviews$ = this._user_reviews.asObservable();


    // USER DATA FUNCTIONS
    get userData() {
        return this._user_data.getValue();
    }

    // set userData(user: User) {
    //     this._user_data = user;
    // }

    // USER REVIEWS FUNCTIONS
    get userReviews() {
        return this._user_reviews.getValue();
    }

    set userReviews(val: Review[]) {
        this._user_reviews.next(val);
    }

    addUserReview(newReview: Review) {

        if(this.hasInternet) {

        } else {
            
        }

        try {
            
        } catch (error) {
            
        }
        if(newReview) {

        }
    }

    deleteUserReview(id: number) {
        //this.userReviews = this.userReviews.filter( review => review.id !== id);
    }


}

/*
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
      {id: this.todos.length + 1, title, isCompleted: false}
    ];
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
*/