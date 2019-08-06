import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/User';
import { Movie } from '../_models/Movie';
import { Book } from "../_models/Book";
import { Series } from "../_models/Series";


@Injectable({
    providedIn: 'root'
})
export class UserMainServiceService {

    private readonly api_base_url: string = "http://localhost:8080"; //"www.showtime-deck.herokuapp.com"


    constructor(private http: HttpClient) {

    }

    loginUser(username: string, password: string) {
        console.log("TCL: UserMainServiceService -> loginUser -> username", username, password)

        const headers = new HttpHeaders().set('Content-Type', 'application/json');

        return this.http.post(this.api_base_url + '/auth/login', {
            username: username,
            password: password
        },
            {
                headers,
                responseType: "json",
                withCredentials: false,
                observe: 'response'
            });
    }

    registerUser(userData: User, passwordData: Object) {
        console.log(this.api_base_url);

        const headers = new HttpHeaders().set('Content-Type', 'application/json');
        //'https://showtime-deck.herokuapp.com/user_registration'
        return this.http.post(
            this.api_base_url + '/auth/user_registration',
            { userData: JSON.stringify(userData), passwordData: JSON.stringify(passwordData) },
            { headers: headers }
        );
    }

    getUserData(user_id: number, user_token: string) {
        return this.http.get(this.api_base_url + '/api/getUser');
    }

    updateUserData(currentUser: User, newUserData: User) {
        return this.http.put(this.api_base_url, newUserData);
    }

    getUserReviews(user_id: string, user_token: string) {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set('Authorization', user_token);
        return this.http.get(this.api_base_url + '/api/user_reviews/' + user_id, {
            headers,
            observe: 'response',
            responseType: 'json',
            withCredentials: true
        });
    }

    postUserReview(userData: number, userReview: any) {
        return 200;
    }

    updateUserReview(userData: User, userReview: any) {
        return 200;
    }

    deleteUserReview(userData: User, userReviewId: number) {
        return 200;
    }



}
