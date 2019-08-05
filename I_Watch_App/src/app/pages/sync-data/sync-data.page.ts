import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserReviewsStore } from "../../store/user-reviews-store";

@Component({
    selector: 'app-sync-data',
    templateUrl: './sync-data.page.html',
    styleUrls: ['./sync-data.page.scss'],
})
export class SyncDataPage implements OnInit {

    constructor(
        private router: Router,
        private store: UserReviewsStore) { }

    ngOnInit() {

        let user_reviews = this.store.getUserReviews();

        setTimeout(function () {
            this.router.navigateByUrl('/i-watched-list');
        }.bind(this), 2000)
    }

    

}
