import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { User } from '../_models/User';
import { UserMainServiceService } from '../services/user-main-service.service';
import { UserLocalStorageService } from '../services/user-local-storage.service';

@Injectable({
    providedIn: 'root'
})
export class UserReviewsStore {

    constructor(
        private net_service: UserMainServiceService,
        private ls_service: UserLocalStorageService
    ) {
        window.addEventListener('online', function(e) {
            this.updateInternetValue(navigator.onLine);
        }.bind(this));

        window.addEventListener('offline', function() {
            this.updateInternetValue(navigator.onLine);
        }.bind(this));

        const isOnline = navigator.onLine;
        this.updateInternetValue(isOnline);
    }

    // IS INTERNET ON?
    private readonly _has_internet = new BehaviorSubject<boolean>(false);
    readonly has_internet$ = this._has_internet.asObservable();


    get hasInternet() {    
        return this._has_internet.getValue();
    }

    set hasInternet(val: boolean) {
        this._has_internet.next(val);
    }

    updateInternetValue(value) {
        this.hasInternet = value;
    }

    // IS LOGGED IN 
    // TODO IMPLEMENT BETTER
    // https://netbasal.com/angular-2-persist-your-login-status-with-behaviorsubject-45da9ec43243
    private readonly _is_logged_in = new BehaviorSubject<boolean>(this.hasToken())
    readonly is_logged_in$ = this._is_logged_in.asObservable();

    hasToken() {
        return !!this.ls_service.getStorageItemParsed('ACCESS_TOKEN');
    }

    getToken() {
        return this.ls_service.getStorageItemParsed('ACCESS_TOKEN');
    }

    // USER DATA
    private readonly _user_data = new BehaviorSubject<User>(undefined);
    readonly user_data$ = this._user_data.asObservable();

    // USER REVIEWS
    private readonly _user_reviews = new BehaviorSubject<any[]>([]);
    readonly user_reviews$ = this._user_reviews.asObservable();


    // USER DATA FUNCTIONS
    get userData() {
        return this._user_data.getValue();
    }

    set userData(user: any) {
        this._user_data.next(user);
        this._is_logged_in.next(true);
        console.log("USER DATA AFTER SET", this.user_data$);
    }

    loginUser(username: string, password: string) {

        return this.net_service.loginUser(username, password)
                .toPromise()
                .then(server_data => {
                    console.log("RESULT FROM SERVER STORE", server_data);
                    if(server_data.status === 200) {
                        let user = server_data.body["data"]["user"];
                        let token = server_data.body["data"]["token"];
                        this.ls_service.setStorageItemStringified("ACCESS_TOKEN", token);
                        let in_24_hours = new Date();
                        in_24_hours.setHours(in_24_hours.getHours() + 24);
                        this.ls_service.setStorageItemStringified("EXPIRES_IN", in_24_hours);
                        this.userData = user;
                        return true;
                    } else {
                        console.log("RESULT FROM SERVER STORE", server_data);
                        return server_data["error"];
                    }
                })
                .catch(error => {
                    console.error(error);
                    return error["error"];
                });

    }

    logoutUser() {
        this.ls_service.deleteStorageItem('ACCESS_TOKEN');
        this.ls_service.deleteStorageItem('EXPIRES_IN');
        this.userData = undefined;
    }

    // USER REVIEWS FUNCTIONS
    get userReviews() {
        return this._user_reviews.getValue();
    }

    set userReviews(val: any[]) {
        this._user_reviews.next(val);
    }

    getUserReviews() {
        console.log("getUserReviews", this.hasInternet);

        if(this.hasInternet) {
            let { id, token } = this.userData;
            return this.net_service.getUserReviews(id, token)
                    .toPromise()
                    .then( server_data => {
                        console.log(server_data);
                        const reviews = server_data["data"];
                        this.userReviews = reviews;
                        console.log(this.userReviews);
                        return server_data["success"];
                    })  
                    .catch(error => {
                        console.error(error);
                        return {
                            success: false,
                            message: "Error retrieving data"
                        }
                    });

        } else {
            const reviews = this.ls_service.getStorageItemParsed('user_reviews');
            if(reviews) {
                this.userReviews = reviews;
            }
        }
    }

    postUserReview(newReview: any) {

        if (this.hasInternet) {
            const user_token = this.getToken();
            return this.net_service.postUserReview(this.userData.id, user_token, newReview)
            .toPromise()
            .then( response => {
                    const review_id = response["data"]["review_id"];
                    newReview.id = review_id;
                    let current_reviews = this.userReviews;
                    current_reviews.push(newReview);
                    this.userReviews = current_reviews;
                    return response["message"];
            })
            .catch( error => {
                console.log(error);
                return error["message"];
            });
        } else {
            const reviews = this.ls_service.getStorageItemParsed('user_reviews') || [];
            newReview.id = reviews.length + 1;
            reviews.push(newReview);
            this.ls_service.setStorageItemStringified("user_reviews", reviews);
            const array_with_updates = this.ls_service.getHelperItems();
            array_with_updates.push({
                action: 'insert',
                data: newReview
            });
            // TODO set helper array 

        }
    }

    putUserReview(updatedReview: any) {

    }

    deleteUserReview(id: string) {
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