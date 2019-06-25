import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-i-watched-review-detail',
    templateUrl: './i-watched-review-detail.page.html',
    styleUrls: ['./i-watched-review-detail.page.scss'],
})
export class IWatchedReviewDetailPage implements OnInit {

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
    }

}
