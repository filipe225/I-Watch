import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/User';
import { Review } from '../_models/Review';


@Injectable({
    providedIn: 'root'
})
export class UserMainServiceService {

    private readonly api_base_url: string = "www.showtime-deck.herokuapp.com"


    constructor(private http: HttpClient) {

    }

    loginUser(user: any) {
        return this.http.get(this.api_base_url + '/login');
    }

    registerUser(userData: User, passwordData: Object) {
        console.log(this.api_base_url);

        const headers = new HttpHeaders()
          .set('Content-Type', 'application/json');

        return this.http.post(
            'https://showtime-deck.herokuapp.com/user_registration', 
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

    getUserReviews(user_id: number, user_token: string) {
        this.http.get(this.api_base_url);
        return 200;
    }

    postUserReview(userData: number, userReview: Review) {
        return 200;
    }

    updateUserReview(userData: User, userReview: Review) {
        return 200;
    }

    deleteUserReview(userData: User, userReviewId: number) {
        return 200;
    }



}
