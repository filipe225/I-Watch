import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserReviewsStore } from 'src/app/store/user-reviews-store';

@Component({
    selector: 'app-friends-list',
    templateUrl: './friends-list.page.html',
    styleUrls: ['./friends-list.page.scss'],
})
export class FriendsListPage implements OnInit {

    friends_list: any;

    constructor(
        private router: Router,
        private store: UserReviewsStore
    ) { }

    ngOnInit() {
        this.friends_list = this.store.userData.friends_list;
    }

    viewFriendReviews(friend_id) {
        this.router.navigateByUrl('friend-i-watched-list/' + friend_id);
    }

}
