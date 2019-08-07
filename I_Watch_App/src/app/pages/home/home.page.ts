import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReviewsStore } from "../../store/user-reviews-store";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private router: Router,
        private store: UserReviewsStore
    ) { }

    ngOnInit(): void {
        console.log("Internet On? ", navigator.onLine);
    }

    useOfflineMode() {
        this.store.hasInternet = false;
        this.store.userData = null;
        this.router.navigateByUrl('/i-watched-list');
    }
}
