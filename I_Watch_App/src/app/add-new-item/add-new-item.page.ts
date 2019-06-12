import { Component, OnInit } from '@angular/core';
import { UserLocalStorageService } from '../services/user-local-storage.service';

@Component({
    selector: 'app-add-new-item',
    templateUrl: './add-new-item.page.html',
    styleUrls: ['./add-new-item.page.scss'],
    providers: [UserLocalStorageService]
})
export class AddNewItemPage implements OnInit {
    itemType: string = null;

    constructor(
        private userLocalStorageService: UserLocalStorageService
    ) { }

    ngOnInit() {
        this.userLocalStorageService.setStorageItem(null, [
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
        ])
    }

    addTypeMovie() {
        this.itemType = 'movie';
    }

    addTypeSeries() {
        this.itemType = 'series';
    }

    addTypeBook() {
        this.itemType = 'book';
    }
}
