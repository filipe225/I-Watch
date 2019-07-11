import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserReviewsStore } from "../../store/user-reviews-store";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    constructor(
        private router: Router,
        private userReviewsStore: UserReviewsStore
    ) { }

    useOfflineMode() {
        this.userReviewsStore.hasInternet = false;
        this.router.navigateByUrl('/i-watched-list');
    }
}
