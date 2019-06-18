import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLocalStorageService } from '../services/user-local-storage.service';
import { Review } from '../_models/Review';

@Component({
	selector: 'app-i-watched-list',
	templateUrl: './i-watched-list.page.html',
    styleUrls: ['./i-watched-list.page.scss'],
    providers: [UserLocalStorageService]
})
export class IWatchedListPage implements OnInit {
    all_reviews: any

	constructor(
        private router: Router,
        private userLocalStorageService: UserLocalStorageService) {	}

	ngOnInit() {
        this.all_reviews = this.userLocalStorageService.getStorageItem();
    }

    addNewItem() {
        this.router.navigateByUrl('/add-new-item');
    }
    


}
