import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Review } from '../_models/Review';

@Component({
	selector: 'app-i-watched-list',
	templateUrl: './i-watched-list.page.html',
	styleUrls: ['./i-watched-list.page.scss'],
})
export class IWatchedListPage implements OnInit {
    all_reviews: Array<Review>

	constructor(private router: Router) {

	}

	ngOnInit() {
        this.all_reviews = [
            {
                type: 'Series',
                name: 'Breaking Bad',
                rating: 20,
                opinion: 'The best',
                total_seasons: 5,
                seasons_watched: 5,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Series',
                name: 'Legion',
                rating: 15,
                opinion: 'Great with, with some worse moments.',
                total_seasons: 2,
                seasons_watched: 2,
                status: 'Running',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Movie',
                name: 'Mad Max',
                rating: 17,
                opinion: 'What an action movie!',
                total_seasons: -1,
                seasons_watched: -1,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            },
            {
                type: 'Book',
                name: '12 Rules for life',
                rating: 14,
                opinion: 'Very good book.',
                total_seasons: -1,
                seasons_watched: -1,
                status: 'Finished',
                created_in: new Date().toLocaleString()
            }
        ]
    }

    addNewItem() {
        this.router.navigateByUrl('/add-new-item');
    }
    


}
