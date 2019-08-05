import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReviewsStore } from "../../store/user-reviews-store";

@Component({
	selector: 'app-i-watched-list',
	templateUrl: './i-watched-list.page.html',
    styleUrls: ['./i-watched-list.page.scss'],
    providers: []
})
export class IWatchedListPage implements OnInit {
    all_reviews: any;
    reviews_to_display: any;

	constructor(
        private router: Router,
        private store: UserReviewsStore) {	}

	ngOnInit() {

        this.all_reviews = this.store.userReviews;
        this.reviews_to_display = this.all_reviews.slice();
    }

    addNewItem() {
        this.router.navigateByUrl('/add-new-item');
    }

    displayAllReviews() {
        this.reviews_to_display = this.all_reviews;
    }

    displayMoviesReviews() {
        this.reviews_to_display = this.all_reviews.filter( review => review.type === 'Movie');
    }

    displaySeriesReviews() {
        this.reviews_to_display = this.all_reviews.filter( review => review.type === 'Series');
    }

    displayBooksReviews() {
        this.reviews_to_display = this.all_reviews.filter( review => review.type === 'Book');
    }

}
